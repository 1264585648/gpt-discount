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
    preparation: z.array(z.string()),
    steps: z.array(guideStepSchema),
    faq: z.array(guideFaqSchema),
    editorNote: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { guides };
