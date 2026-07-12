import { defineCollection, z } from 'astro:content';

const dateStringSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, '日期必须使用 YYYY-MM-DD 格式');
const countryCodeSchema = z.string().regex(/^[A-Z]{2}$/, '国家代码必须使用 ISO 3166-1 alpha-2 大写格式');

const guideStepSchema = z.object({
  title: z.string(),
  description: z.string(),
  note: z.string().optional(),
  imageLabel: z.string().optional(),
});

const guideFaqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const guideBenefitSchema = z.object({
  name: z.string(),
  value: z.string(),
  type: z.enum(['core', 'limited']).default('core'),
});

const guideRequirementSchema = z.object({
  label: z.string(),
  level: z.enum(['required', 'recommended']).default('required'),
  guide: z.string().optional(),
});

const guideVerificationSchema = z.object({
  label: z.string(),
  guide: z.string(),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    categorySlug: z.string(),
    relatedCategorySlugs: z.array(z.string()).optional(),
    summary: z.string(),
    status: z.enum(['可领取', '待验证', '已失效']),
    contentStatus: z.enum(['已完成', '待完善']).default('待完善'),
    publishedAt: dateStringSchema.optional(),
    updatedAt: dateStringSchema.optional(),
    difficulty: z.string(),
    estimatedTime: z.string(),
    audience: z.string(),
    dealType: z.string(),
    lastVerified: dateStringSchema,
    verificationType: z.enum(['官方页面核验', '账号实测', '付款实测']).default('官方页面核验'),
    priceVerifiedAt: dateStringSchema.optional(),
    benefitsVerifiedAt: dateStringSchema.optional(),
    originalPrice: z.string(),
    dealPrice: z.string(),
    couponCode: z.string(),
    region: z.string(),
    warning: z.string(),
    officialUrl: z.string().url().optional(),
    allBenefitsUrl: z.string().url().optional(),
    benefits: z.array(guideBenefitSchema).default([]),
    requirements: z.array(guideRequirementSchema).default([]),
    verification: guideVerificationSchema.optional(),
    preparation: z.array(z.string()),
    steps: z.array(guideStepSchema),
    faq: z.array(guideFaqSchema),
    editorNote: z.string(),
    order: z.number().optional(),

    // 显式优惠分类字段。旧内容可渐进迁移，展示层优先读取这些字段。
    productName: z.string().optional(),
    productSlug: z.enum(['chatgpt', 'gemini', 'claude', 'perplexity', 'grok', 'cursor', 'other']).optional(),
    planName: z.string().optional(),
    offerKind: z.enum(['free', 'discount', 'trial', 'credit', 'deal']).optional(),
    offerType: z.enum(['官方活动', '学生优惠', '学校授权', '运营商赠送', '设备捆绑', '地区活动', '免费试用', '普通订阅', '无公开优惠', '历史活动']).optional(),
    eligibilityType: z.enum(['公开领取', '学生认证', '学校授权', '运营商资格', '设备资格', '地区资格', '普通订阅', '不可领取', '其他']).optional(),
    availabilityScope: z.enum(['全球', '部分地区', '指定国家', '学校或机构', '历史活动']).optional(),
    countryCodes: z.array(countryCodeSchema).default([]),
    regionLabel: z.string().optional(),
    featured: z.boolean().default(false),
    expiresAt: dateStringSchema.optional(),
  }),
});

export const collections = { guides };
