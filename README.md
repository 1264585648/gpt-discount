# GPT Discount

一个面向 Cloudflare Pages 的优惠获取教程分享站。

当前版本已经升级为 **Astro 静态站**：开发时可以使用组件、数据文件和后续 Markdown 内容集合；部署时输出纯静态文件到 `dist/`，适合 Cloudflare Pages。

## 当前定位

这个站不是普通优惠券列表，而是：

> 手把手教你怎么拿到优惠的教程站。

核心体验：

- 首页直接展示各种优惠分类
- 每个分类下展示教程文章
- 点击文章卡片进入具体教程页
- 教程页强调领取前准备、详细步骤、注意事项、失败排查
- 优先保证手机端阅读体验

## 技术栈

```txt
Astro
TypeScript
CSS
Cloudflare Pages
```

## 目录结构

```txt
/
├─ astro.config.mjs
├─ package.json
├─ public/
│  ├─ _headers
│  └─ _redirects
└─ src/
   ├─ components/
   │  ├─ DealSidebar.astro
   │  ├─ GuideCard.astro
   │  └─ StepCard.astro
   ├─ content/
   │  └─ guides/
   ├─ data/
   │  └─ guides.ts
   ├─ layouts/
   │  └─ BaseLayout.astro
   ├─ pages/
   │  ├─ index.astro
   │  └─ guides/[slug].astro
   └─ styles/
      └─ global.css
```

## 当前页面

```txt
/
/guides/claude-pro-discount/
/guides/google-cloud-credit/
/guides/edu-ai-discounts-hub/
/guides/github-student-pack-copilot/
/guides/notion-education-ai-responses/
/guides/google-ai-pro-student/
/guides/adobe-creative-cloud-firefly-student/
/guides/canva-education-ai/
/guides/figma-education-ai-make/
/guides/microsoft-365-student-ai/
/guides/ai-tools-no-official-student-discount/
```

## 已实现

### 首页

- Hero 区
- 搜索框
- 分类锚点
- 当前分类
  - AI 工具优惠
  - 教育邮箱专题
  - 常用软件优惠
  - 云服务 / 免费额度
- 教育邮箱专题已补充 1 篇总览和 8 篇细分文章
- 响应式卡片布局

### 教育邮箱专题

当前专题原则：只写官方入口和可核验路径。论坛、Reddit、V2EX、社群帖子可以作为选题线索，但没有官方入口、最近成功截图和清晰资格说明时，不写成“可领取”。

已覆盖方向：

- GitHub Student Developer Pack / Copilot 学生计划
- Notion Education / AI 响应
- Google AI Pro 学生项目
- Adobe Creative Cloud Pro / Firefly
- Canva Education / Campus
- Figma Education / Figma Make / AI 工作流
- Microsoft 365 学生权益 / Copilot
- ChatGPT Plus、Claude Pro、Cursor、Midjourney、Perplexity 等避坑说明

### 文章页

每篇文章包含：

- 顶部标题区
- 优惠状态标签
- 优惠信息侧栏
- 优惠码复制按钮
- 领取前准备
- 详细步骤卡片
- 截图占位区域
- 常见失败原因 / 账单提醒
- 手机端底部固定操作栏

### 交互

- 首页教程搜索过滤
- 优惠码复制
- 分类锚点跳转
- 文章目录锚点跳转

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建结果输出到：

```txt
dist/
```

## Cloudflare Pages 部署

```txt
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
```

## 新增文章

当前文章数据来源于 Astro Content Collections，正文在：

```txt
src/content/guides/
```

分类配置在：

```txt
src/data/guides.ts
```

新增文章时，只需要在 `src/content/guides/` 下增加一篇 Markdown，并填写 `src/content.config.ts` 中定义的 frontmatter 字段，Astro 会通过：

```txt
src/pages/guides/[slug].astro
```

自动生成详情页。

后续文章多了之后，可以继续升级为：

- 更完整的 Astro Content Collections
- Markdown / MDX
- Headless CMS
- Supabase / Payload CMS

## 后续建议

第一阶段可以继续补：

- 每篇文章的官方入口截图
- 每篇文章的最后验证截图
- 成功 / 失败反馈组件
- 文章状态：可领取 / 已失效 / 待验证
- 登录 / 注册页面静态稿
- 投稿页面静态稿

第二阶段再接后台：

- Payload CMS
- Supabase
- 自研后台管理系统
