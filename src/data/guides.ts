import { getCollection, type CollectionEntry } from 'astro:content';

export type GuideStatus = '可领取' | '待验证' | '已失效';
export type GuidePresentationCategory = '可领取' | '学生优惠' | '学校授权' | '限时活动' | '地区限制' | '待验证' | '已结束';
export type GuideOfferKind = 'free' | 'discount' | 'trial' | 'credit' | 'deal' | 'expired' | 'pending';

export type GuideStep = {
  title: string;
  description: string;
  note?: string;
  imageLabel?: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideEntry = CollectionEntry<'guides'>;

export type Guide = GuideEntry['data'] & {
  slug: string;
  entry: GuideEntry;
};

export const categories = [
  {
    name: 'AI 工具优惠',
    slug: 'ai-tools',
    icon: '🤖',
    description: 'ChatGPT、Claude、Cursor、Perplexity、Grok 等 AI 工具订阅优惠和领取教程。',
  },
  {
    name: '教育邮箱专题',
    slug: 'edu-ai-discounts',
    icon: '🎓',
    description: '教育邮箱、学生认证、GitHub Student Pack 等可领取的 AI 工具、设计、视频、办公优惠。',
  },
  {
    name: '常用软件优惠',
    slug: 'common-software',
    icon: '🧰',
    description: 'X Premium、Notion、1Password、办公软件、浏览器插件等常用软件订阅优惠和使用教程。',
  },
  {
    name: '云服务 / 免费额度',
    slug: 'cloud-credit',
    icon: '☁️',
    description: 'Google Cloud、Oracle Cloud、VPS 等云服务赠金、免费额度和账单避坑教程。',
  },
];

function normalizeGuide(entry: GuideEntry): Guide {
  return {
    ...entry.data,
    slug: entry.slug,
    entry,
  };
}

function sortGuides(a: Guide, b: Guide) {
  const orderA = a.order ?? 999;
  const orderB = b.order ?? 999;
  if (orderA !== orderB) return orderA - orderB;
  return a.title.localeCompare(b.title, 'zh-CN');
}

function legacySearchText(guide: Guide) {
  return [
    guide.title,
    guide.summary,
    guide.dealType,
    guide.dealPrice,
    guide.audience,
    guide.region,
    guide.warning,
  ].filter(Boolean).join(' ');
}

export function isGuidePublished(entry: GuideEntry) {
  return entry.data.contentStatus === '已完成';
}

export function getGuideFreshnessDate(guide: Guide) {
  return guide.updatedAt ?? guide.lastVerified ?? guide.publishedAt ?? '1970-01-01';
}

export function sortGuidesByFreshness(a: Guide, b: Guide) {
  return getGuideFreshnessDate(b).localeCompare(getGuideFreshnessDate(a))
    || (b.order ?? 0) - (a.order ?? 0)
    || a.title.localeCompare(b.title, 'zh-CN');
}

export function getGuidePresentationCategory(guide: Guide): GuidePresentationCategory {
  if (guide.status === '已失效') return '已结束';
  if (guide.status === '待验证') return '待验证';

  if (guide.offerType === '学校授权' || guide.eligibilityType === '学校授权' || guide.availabilityScope === '学校或机构') {
    return '学校授权';
  }
  if (guide.offerType === '学生优惠' || guide.eligibilityType === '学生认证') {
    return '学生优惠';
  }
  if (guide.offerType === '地区活动' || guide.eligibilityType === '地区资格' || guide.availabilityScope === '部分地区' || guide.availabilityScope === '指定国家') {
    return '地区限制';
  }
  if (guide.expiresAt || guide.offerType === '官方活动' || guide.offerType === '运营商赠送' || guide.offerType === '设备捆绑' || guide.offerType === '免费试用') {
    return '限时活动';
  }

  // 兼容尚未迁移的旧内容；新内容应填写显式字段。
  const text = legacySearchText(guide);
  if (/部分地区|指定地区|地区限制/.test(text)) return '地区限制';
  if (/学校授权|学校统一|教师身份|教育机构/.test(text)) return '学校授权';
  if (/学生|教育邮箱|在校/.test(text)) return '学生优惠';
  if (/限时|活动|首年/.test(text)) return '限时活动';
  return '可领取';
}

export function getGuideOfferKind(guide: Guide): GuideOfferKind {
  if (guide.status === '已失效') return 'expired';
  if (guide.status === '待验证') return 'pending';
  if (guide.offerKind) return guide.offerKind;

  const text = `${guide.title} ${guide.summary} ${guide.dealType} ${guide.dealPrice}`.toLowerCase();
  if (/(免费试用|free trial|trial)/i.test(text)) return 'trial';
  if (/(免费额度|赠金|credits?|云额度)/i.test(text)) return 'credit';
  if (/(免费|零元|0\s*(元|美元|美金|usd|rmb))/i.test(text)) return 'free';
  if (/(折扣|学生价|优惠价|首年|半价|减免|立减|优惠)/i.test(text)) return 'discount';
  return 'deal';
}

export function getGuideBrand(guide: Guide) {
  const product = guide.productSlug;
  if (product === 'chatgpt') return { label: 'GPT', className: 'openai' };
  if (product === 'gemini') return { label: 'G', className: 'google' };
  if (product === 'claude') return { label: 'CL', className: 'claude' };
  if (product === 'perplexity') return { label: 'P', className: 'perplexity' };
  if (product === 'grok') return { label: 'X', className: 'x' };
  if (product === 'cursor') return { label: 'CU', className: 'cursor' };

  const value = guide.title.toLowerCase();
  const brands = [
    ['github', 'GH', 'github'], ['jetbrains', 'JB', 'jetbrains'], ['notion', 'N', 'notion'],
    ['gemini', 'G', 'google'], ['google', 'G', 'google'], ['microsoft', 'M', 'microsoft'],
    ['adobe', 'A', 'adobe'], ['figma', 'F', 'figma'], ['canva', 'C', 'canva'],
    ['claude', 'CL', 'claude'], ['perplexity', 'P', 'perplexity'], ['grok', 'X', 'x'], ['x premium', 'X', 'x'],
    ['cloudflare', 'CF', 'cloudflare'], ['oracle', 'O', 'oracle'], ['digitalocean', 'DO', 'digitalocean'],
  ];
  const match = brands.find(([key]) => value.includes(key));
  if (match) return { label: match[1], className: match[2] };
  if (value.includes('openai') || value.includes('chatgpt') || /\bgpt\b/.test(value)) return { label: 'GPT', className: 'openai' };
  return {
    label: guide.title.match(/[A-Za-z0-9]+/)?.[0]?.slice(0, 2).toUpperCase() || guide.title.slice(0, 1),
    className: 'default',
  };
}

export function guideMatchesCategory(guide: Guide, categorySlug: string) {
  return guide.categorySlug === categorySlug || guide.relatedCategorySlugs?.includes(categorySlug);
}

export async function getGuides(options: { includeUnpublished?: boolean } = {}) {
  const entries = await getCollection('guides');
  return entries
    .filter((entry) => options.includeUnpublished || isGuidePublished(entry))
    .map(normalizeGuide)
    .sort(sortGuides);
}

export async function getGuideBySlug(slug: string) {
  const guides = await getGuides();
  return guides.find((guide) => guide.slug === slug);
}

export async function getGuidesByCategory(categorySlug: string) {
  const guides = await getGuides();
  return guides.filter((guide) => guideMatchesCategory(guide, categorySlug));
}
