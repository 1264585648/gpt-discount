import { getCollection, type CollectionEntry } from 'astro:content';

export type GuideStatus = '可领取' | '待验证' | '已失效';
export type AiProductSlug = 'chatgpt' | 'gemini' | 'claude' | 'perplexity' | 'grok' | 'cursor' | 'other';

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

export type AiProduct = {
  name: string;
  slug: AiProductSlug;
  mark: string;
  description: string;
};

export const aiProducts: AiProduct[] = [
  { name: 'ChatGPT', slug: 'chatgpt', mark: 'GPT', description: 'ChatGPT Plus、ChatGPT Go 与 OpenAI 合作权益' },
  { name: 'Gemini', slug: 'gemini', mark: 'G', description: 'Gemini、Google AI Pro 与 Google One AI 权益' },
  { name: 'Claude', slug: 'claude', mark: 'CL', description: 'Claude Pro、教育计划与合作试用' },
  { name: 'Perplexity', slug: 'perplexity', mark: 'P', description: 'Perplexity Pro 运营商赠送和设备捆绑' },
  { name: 'Grok', slug: 'grok', mark: 'X', description: 'Grok 与 X Premium 相关订阅权益' },
  { name: 'Cursor', slug: 'cursor', mark: 'CU', description: 'Cursor Pro 学生、团队与限时活动' },
  { name: '其他 AI', slug: 'other', mark: 'AI', description: '其他 AI 订阅、试用和合作优惠' },
];

export const categories = [
  {
    name: 'AI 订阅',
    slug: 'ai-subscriptions',
    icon: 'AI',
    description: 'ChatGPT、Gemini、Claude、Perplexity 等 AI 产品订阅优惠和领取教程。',
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

const guideSearchText = (guide: Guide) => [
  guide.title,
  guide.summary,
  guide.dealType,
  guide.planName,
  guide.productName,
  guide.audience,
  guide.region,
  ...(guide.benefits ?? []).flatMap((item) => [item.name, item.value]),
].filter(Boolean).join(' ').toLowerCase();

export function getGuideProduct(guide: Guide): AiProduct {
  if (guide.productSlug) {
    return aiProducts.find((product) => product.slug === guide.productSlug) ?? aiProducts.at(-1)!;
  }

  const text = guideSearchText(guide);
  if (/chatgpt|openai|gpt plus|chatgpt go/.test(text)) return aiProducts[0];
  if (/gemini|google ai pro|google one ai|google ai/.test(text)) return aiProducts[1];
  if (/claude|anthropic/.test(text)) return aiProducts[2];
  if (/perplexity/.test(text)) return aiProducts[3];
  if (/\bgrok\b|x premium/.test(text)) return aiProducts[4];
  if (/\bcursor\b/.test(text)) return aiProducts[5];
  return aiProducts[6];
}

export function getGuideOfferType(guide: Guide) {
  if (guide.offerType) return guide.offerType;
  const text = guideSearchText(guide);
  if (guide.status === '已失效') return '历史活动';
  if (/学生|教育邮箱|学校|教师|校园/.test(text)) return '学生优惠';
  if (/运营商|movistar|o2|softbank|jio|telekom|linemo|y!mobile/.test(text)) return '运营商赠送';
  if (/设备|购机|手机|平板|pixel|galaxy|t phone|tablet/.test(text)) return '设备捆绑';
  if (/试用|体验/.test(text)) return '免费试用';
  if (/地区|居民|国家|日本|印度|德国|西班牙|马耳他/.test(text)) return '地区活动';
  return '官方活动';
}

export function guideMatchesCategory(guide: Guide, categorySlug: string) {
  if (categorySlug === 'ai-subscriptions') {
    return guide.categorySlug === 'ai-subscriptions'
      || guide.categorySlug === 'ai-tools'
      || guide.relatedCategorySlugs?.includes('ai-subscriptions')
      || guide.relatedCategorySlugs?.includes('ai-tools');
  }

  if (categorySlug === 'ai-tools') {
    return guideMatchesCategory(guide, 'ai-subscriptions');
  }

  return guide.categorySlug === categorySlug || guide.relatedCategorySlugs?.includes(categorySlug);
}

export async function getGuides() {
  const entries = await getCollection('guides');
  return entries.map(normalizeGuide).sort(sortGuides);
}

export async function getGuideBySlug(slug: string) {
  const guides = await getGuides();
  return guides.find((guide) => guide.slug === slug);
}

export async function getGuidesByCategory(categorySlug: string) {
  const guides = await getGuides();
  return guides.filter((guide) => guideMatchesCategory(guide, categorySlug));
}
