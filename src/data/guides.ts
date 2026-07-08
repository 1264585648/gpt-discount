export type GuideStatus = '可领取' | '待验证' | '已失效';

export type GuideStep = {
  title: string;
  description: string;
  note?: string;
  imageLabel?: string;
};

export type Guide = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  summary: string;
  status: GuideStatus;
  difficulty: string;
  estimatedTime: string;
  audience: string;
  dealType: string;
  lastVerified: string;
  originalPrice: string;
  dealPrice: string;
  couponCode: string;
  region: string;
  warning: string;
  preparation: string[];
  steps: GuideStep[];
  faq: { question: string; answer: string }[];
  editorNote: string;
};

export const categories = [
  {
    name: 'AI 工具优惠',
    slug: 'ai-tools',
    icon: '🤖',
    description: 'ChatGPT、Claude、Cursor、Perplexity 等 AI 工具订阅优惠和领取教程。',
  },
  {
    name: '云服务 / 免费额度',
    slug: 'cloud-credit',
    icon: '☁️',
    description: 'Google Cloud、Oracle Cloud、VPS 等云服务赠金、免费额度和账单避坑教程。',
  },
];

export const guides: Guide[] = [
  {
    slug: 'claude-pro-discount',
    title: 'Claude Pro 优惠领取教程',
    category: 'AI 工具优惠',
    categorySlug: 'ai-tools',
    summary: '演示如何把优惠概览、准备条件、逐步操作、失败原因和移动端阅读体验组合成一篇可复用教程。',
    status: '可领取',
    difficulty: '中等',
    estimatedTime: '10 分钟',
    audience: 'AI 重度用户',
    dealType: '订阅优惠 / 示例',
    lastVerified: '示例数据',
    originalPrice: '示例：$20 / 月',
    dealPrice: '以结算页为准',
    couponCode: 'CLAUDE-DEMO',
    region: '示例：不限',
    warning: '示例内容，非实时优惠。真实上线时需要替换成最新活动链接、真实截图和验证记录。',
    preparation: [
      '准备一个可正常收取验证码的邮箱。',
      '确认当前账号是否已经订阅过同类套餐。',
      '准备可用支付方式，避免最后一步失败。',
      '记录优惠码、活动链接和有效期，防止页面跳转后丢失。',
    ],
    steps: [
      {
        title: '打开优惠活动页面',
        description: '从页面中的领取入口进入活动页。真实文章应说明入口是否来自官方、是否需要桌面端打开。',
        note: '如果入口跳转到普通定价页，可能是活动结束、地区不匹配或账号不符合资格。',
        imageLabel: '活动落地页 / 官网入口截图',
      },
      {
        title: '登录或注册账号',
        description: '使用邮箱完成注册。如果已有账号，先确认账号地区、套餐状态和是否曾使用过同类优惠。',
        imageLabel: '注册 / 登录页面截图',
      },
      {
        title: '进入订阅或 Billing 页面',
        description: '进入账户设置中的订阅页面，找到套餐升级入口。部分优惠只会在特定入口展示。',
        note: '教程里要标注具体菜单路径，例如 Settings → Billing → Upgrade。',
        imageLabel: 'Billing / Upgrade 页面截图',
      },
      {
        title: '输入优惠码并确认价格',
        description: '在结算页找到优惠码输入框，粘贴后先确认最终价格变化，再继续付款。',
        imageLabel: '优惠码输入框 / 价格变化截图',
      },
      {
        title: '保存领取结果',
        description: '激活后保存订单页和订阅页截图，后续如出现权益未到账可用于联系客服。',
        imageLabel: '领取成功 / 订阅权益页面截图',
      },
    ],
    faq: [
      {
        question: '看不到优惠入口怎么办？',
        answer: '常见原因包括账号不符合资格、优惠只面向新用户、活动地区限制、入口变更或活动结束。',
      },
      {
        question: '优惠码无效怎么办？',
        answer: '先检查是否复制了多余空格，再确认是否大小写敏感、是否已过期、是否只适用于指定套餐。',
      },
      {
        question: '付款前价格没有变化可以继续吗？',
        answer: '不建议继续。只有最终结算价格已经变化，才说明优惠成功应用。',
      },
    ],
    editorNote: '后续真实发布时，建议每篇文章保留「最后验证时间」「成功反馈」「失败反馈」「替代方案」四个模块。优惠教程最怕过期，验证记录比单纯优惠码更重要。',
  },
  {
    slug: 'google-cloud-credit',
    title: 'Google Cloud 赠金领取教程',
    category: '云服务 / 免费额度',
    categorySlug: 'cloud-credit',
    summary: '演示云服务类优惠教程如何展示资格、准备材料、验证步骤、账单提醒和失败排查。',
    status: '可领取',
    difficulty: '中等',
    estimatedTime: '15 分钟',
    audience: '开发者 / 学习者',
    dealType: '免费额度 / 赠金',
    lastVerified: '示例数据',
    originalPrice: '不适用',
    dealPrice: '以活动页为准',
    couponCode: 'GCP-DEMO',
    region: '示例：部分地区',
    warning: '示例内容，非实时优惠。云服务教程必须重点提醒账单、预算、资源关闭和免费额度范围。',
    preparation: [
      '一个可正常登录和验证的 Google 账号。',
      '可接收验证码的手机号。',
      '可用于身份验证的支付方式。',
      '明确自己要创建的云资源，避免开通后盲目试错。',
    ],
    steps: [
      {
        title: '打开云服务试用页面',
        description: '从领取入口进入活动页面。真实教程应给出官方入口和备用入口，避免用户进入广告页或第三方页面。',
        note: '如果页面提示当前地区不可用，应补充替代方案或失败说明。',
        imageLabel: 'Google Cloud 试用入口截图',
      },
      {
        title: '登录账号并完成基础信息',
        description: '选择国家或地区，填写账号信息。这里可能影响后续账单币种、税费和可用服务。',
        imageLabel: '账号信息填写页面截图',
      },
      {
        title: '完成手机号和支付方式验证',
        description: '输入手机号验证码，并添加支付方式用于身份验证。真实教程需要说明是否会发生临时预授权。',
        note: '这里是用户最容易担心的地方，建议单独解释扣费逻辑和账单控制方法。',
        imageLabel: '验证手机号 / 添加支付方式截图',
      },
      {
        title: '确认赠金到账',
        description: '进入控制台后，查看 Billing / Credits 页面，确认赠金金额、有效期和适用范围。',
        imageLabel: 'Credits / Billing 页面截图',
      },
      {
        title: '设置预算提醒',
        description: '领取成功后，优先设置预算提醒和账单告警，再创建虚拟机、数据库或其他云资源。',
        imageLabel: 'Budget Alert 设置页面截图',
      },
    ],
    faq: [
      {
        question: '赠金是不是代表完全免费？',
        answer: '不是。赠金通常有范围、期限和资源限制。教程里必须说明哪些资源容易产生额外费用。',
      },
      {
        question: '为什么需要绑定支付方式？',
        answer: '很多云服务需要支付方式做身份验证。真实文章应解释预授权、账单周期和如何设置预算提醒。',
      },
      {
        question: '领取后第一件事应该做什么？',
        answer: '先设置预算告警，再创建资源。不要直接开高规格实例或长期运行测试资源。',
      },
    ],
    editorNote: '云服务类文章后续可以固定增加「费用风险等级」「免费额度范围」「资源关闭教程」「账单异常处理」四个模块，这会显著提升文章可信度和实用性。',
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(categorySlug: string) {
  return guides.filter((guide) => guide.categorySlug === categorySlug);
}
