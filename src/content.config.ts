import { defineCollection, z } from 'astro:content';

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
    difficulty: z.string(),
    estimatedTime: z.string(),
    audience: z.string(),
    dealType: z.string(),
    lastVerified: z.string(),
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

    // AI 订阅专题字段。全部保持可选，兼容已有内容并支持渐进迁移。
    productName: z.string().optional(),
    productSlug: z.enum(['chatgpt', 'gemini', 'claude', 'perplexity', 'grok', 'cursor', 'other']).optional(),
    planName: z.string().optional(),
    offerType: z.enum(['官方活动', '学生优惠', '运营商赠送', '设备捆绑', '地区活动', '免费试用', '历史活动']).optional(),
    countryCodes: z.array(z.string()).optional(),
    regionLabel: z.string().optional(),
    featured: z.boolean().optional(),
    expiresAt: z.string().optional(),
  }),
});

export const collections = { guides };
