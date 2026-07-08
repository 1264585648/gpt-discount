import { getCollection, type CollectionEntry } from 'astro:content';

export type GuideStatus = '可领取' | '待验证' | '已失效';

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

export function guideMatchesCategory(guide: Guide, categorySlug: string) {
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
