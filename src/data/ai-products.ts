export type AiProductSlug = 'chatgpt' | 'claude' | 'gemini' | 'grok' | 'cursor' | 'perplexity' | 'other';

export type AiProduct = {
  slug: AiProductSlug;
  name: string;
  homeName?: string;
  owner: string;
  mark: string;
  description: string;
  homeDescription?: string;
  order: number;
};

export const aiProducts: AiProduct[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    homeName: 'GPT / ChatGPT',
    owner: 'OpenAI',
    mark: 'GPT',
    description: 'Free、Go、Plus、Pro、应用内购买与教育方案。',
    homeDescription: 'ChatGPT Free、Go、Plus、Pro 与无海外卡订阅',
    order: 10,
  },
  {
    slug: 'claude',
    name: 'Claude',
    owner: 'Anthropic',
    mark: 'CL',
    description: 'Claude Free、Pro、Max 与学校授权。',
    homeDescription: 'Claude 免费版、Pro、Max 与无海外卡订阅',
    order: 20,
  },
  {
    slug: 'gemini',
    name: 'Gemini',
    owner: 'Google',
    mark: 'G',
    description: 'Gemini 免费版、Google AI Pro 与学生活动。',
    homeDescription: 'Gemini 免费版、Google AI Pro 与学生优惠状态',
    order: 30,
  },
  {
    slug: 'grok',
    name: 'Grok',
    owner: 'xAI / X',
    mark: 'X',
    description: '免费额度、SuperGrok 与 X Premium 相关权益。',
    homeDescription: 'Grok 免费使用、SuperGrok 与 X Premium 权益',
    order: 40,
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    owner: 'Anysphere',
    mark: 'CU',
    description: '免费版、付费订阅与可能开放的资格活动。',
    order: 50,
  },
  {
    slug: 'perplexity',
    name: 'Perplexity',
    owner: 'Perplexity AI',
    mark: 'P',
    description: '免费版、Pro 订阅与合作活动。',
    order: 60,
  },
  {
    slug: 'other',
    name: '其他 AI 工具',
    owner: '更多产品',
    mark: '+',
    description: '尚未完成产品字段迁移的 AI 工具教程。',
    homeDescription: '其他已完成的 AI 工具教程',
    order: 99,
  },
];

export const getAiProduct = (slug?: string) => aiProducts.find((product) => product.slug === slug);
