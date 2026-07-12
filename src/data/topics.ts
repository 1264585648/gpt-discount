export type TopicVisual = 'education' | 'ai' | 'software' | 'cloud';

export type Topic = {
  title: string;
  slug: string;
  description: string;
  slogan: string;
  categorySlug: string;
  accentColor: string;
  accentSoft: string;
  visual: TopicVisual;
  coverNote: string;
  relatedTopics: string[];
};

export const topics: Topic[] = [
  {
    title: '学生与教育优惠',
    slug: 'student-education',
    description: '学生、教师和教育机构可用的免费计划、学生折扣与学校授权。',
    slogan: '学生免费计划、教育授权和学生价。',
    categorySlug: 'edu-ai-discounts',
    accentColor: '#5147f5',
    accentSoft: '#f0efff',
    visual: 'education',
    coverNote: '每项优惠分别列出适用身份、认证方式和使用限制',
    relatedTopics: ['ai-tools', 'common-software', 'cloud-credit'],
  },
  {
    title: 'AI 工具优惠',
    slug: 'ai-tools',
    description: '按 ChatGPT、Claude、Gemini 分别查看免费版、付费套餐和可用优惠。',
    slogan: 'ChatGPT、Claude、Gemini 优惠与套餐教程。',
    categorySlug: 'ai-tools',
    accentColor: '#4f46e5',
    accentSoft: '#eef2ff',
    visual: 'ai',
    coverNote: '先选择产品，再查看对应套餐与领取教程',
    relatedTopics: ['student-education', 'common-software', 'cloud-credit'],
  },
  {
    title: '常用软件优惠',
    slug: 'common-software',
    description: '办公、设计、开发与效率软件的免费计划、学生价和订阅折扣。',
    slogan: '办公、设计和开发软件优惠。',
    categorySlug: 'common-software',
    accentColor: '#e87924',
    accentSoft: '#fff4e8',
    visual: 'software',
    coverNote: '每项优惠分别列出价格、授权范围和续费规则',
    relatedTopics: ['ai-tools', 'student-education', 'cloud-credit'],
  },
  {
    title: '云服务赠金',
    slug: 'cloud-credit',
    description: '云平台的新用户赠金、免费额度和试用计划，包括到期时间与计费规则。',
    slogan: '云平台赠金、免费额度和试用计划。',
    categorySlug: 'cloud-credit',
    accentColor: '#0f9f8f',
    accentSoft: '#e9faf7',
    visual: 'cloud',
    coverNote: '每项优惠分别列出额度、有效期和计费范围',
    relatedTopics: ['ai-tools', 'student-education', 'common-software'],
  },
];

export const getTopicBySlug = (slug: string) => topics.find((topic) => topic.slug === slug);
