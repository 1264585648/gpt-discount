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
    description: '收录面向学生、教师与教育机构的公开优惠、学校授权方案和免费权益，整理可复查的领取入口、资格要求与关键限制。',
    slogan: '聚合公开可核验的学生折扣、教育授权与免费权益。',
    categorySlug: 'edu-ai-discounts',
    accentColor: '#5147f5',
    accentSoft: '#f0efff',
    visual: 'education',
    coverNote: '持续核验公开入口与领取状态',
    relatedTopics: ['ai-tools', 'common-software', 'cloud-credit'],
  },
  {
    title: 'AI 订阅优惠',
    slug: 'ai-tools',
    description: '汇总 ChatGPT、Gemini、Claude、Perplexity 等 AI 产品的免费试用、学生优惠、运营商赠送和地区限定活动。',
    slogan: '先按产品查找，再核对资格、地区和续费规则。',
    categorySlug: 'ai-subscriptions',
    accentColor: '#4f46e5',
    accentSoft: '#eef2ff',
    visual: 'ai',
    coverNote: '持续核验官方活动、合作方入口与本人账号资格',
    relatedTopics: ['student-education', 'common-software', 'cloud-credit'],
  },
  {
    title: '常用软件优惠',
    slug: 'common-software',
    description: '整理办公、设计、开发与效率软件的公开优惠，重点标注续费规则、授权限制和当前有效状态。',
    slogan: '把办公、设计与开发软件的公开优惠整理清楚。',
    categorySlug: 'common-software',
    accentColor: '#e87924',
    accentSoft: '#fff4e8',
    visual: 'software',
    coverNote: '持续更新授权范围与续费提醒',
    relatedTopics: ['ai-tools', 'student-education', 'cloud-credit'],
  },
  {
    title: '云服务赠金',
    slug: 'cloud-credit',
    description: '聚合云平台新用户赠金、免费额度与试用计划，同时标注计费边界、资源停止方式和防扣费提醒。',
    slogan: '集中查看云平台赠金、试用额度与账单提醒。',
    categorySlug: 'cloud-credit',
    accentColor: '#0f9f8f',
    accentSoft: '#e9faf7',
    visual: 'cloud',
    coverNote: '持续核验额度、账单与资源限制',
    relatedTopics: ['ai-tools', 'student-education', 'common-software'],
  },
];

export const getTopicBySlug = (slug: string) => topics.find((topic) => topic.slug === slug);
