# GPT Discount

面向中文用户的 AI 工具、学生教育优惠、软件折扣和云服务赠金教程站。

网站不只列出价格，还会说明：

- 当前优惠是否仍可用
- 哪些人符合条件
- 应从哪个官方入口开始
- 具体操作步骤
- 地区、续费、退款和账号风险
- 常见失败原因

## 技术栈

- Astro 5
- TypeScript
- Astro Content Collections
- CSS / SVG
- Cloudflare Pages

构建输出为纯静态文件，目录为 `dist/`。

## 主要页面

### 首页

```text
/
```

首页包含搜索、最近更新、四类专题入口和全部已完成教程。

### 专题页

```text
/topics/ai-tools/
/topics/student-education/
/topics/common-software/
/topics/cloud-credit/
```

专题页根据已发布内容自动生成。AI 工具专题按 `productSlug` 自动分组，不再依赖文章文件名。

### 学生认证

```text
/verification/
```

集中说明教育邮箱、在读证明、GitHub Education、SheerID、UNiDAYS、Student Beans 和 ID.me。

### 教程详情页

```text
/guides/[slug]/
```

详情页由 `src/content/guides/*.md` 自动生成，包含：

- 当前状态和主要权益
- 开始前需要确认的条件
- 操作步骤
- 官方入口
- 常见问题与限制

只有 `contentStatus: 已完成` 的文章会生成公开页面。

## 当前重点教程

```text
/guides/chatgpt-apple-gift-card-google-play/
/guides/claude-apple-gift-card-google-play/
/guides/grok-free-trial-email-sign-in/
/guides/x-premium-plus-supergrok-gift/
/guides/google-ai-pro-student/
/guides/github-student-pack-copilot/
/guides/jetbrains-idea-student-pack/
/guides/notion-education-ai-responses/
/guides/adobe-creative-cloud-firefly-student/
/guides/canva-education-ai/
/guides/figma-education-ai-make/
/guides/microsoft-365-student-ai/
/guides/google-cloud-credit/
```

旧 ChatGPT、Claude 和 AI 学生优惠路径由 `public/_redirects` 跳转到新页面或对应专题。

## 目录结构

```text
/
├─ .github/workflows/astro-build.yml
├─ public/
│  ├─ _headers
│  └─ _redirects
├─ scripts/
│  └─ audit-build.mjs
├─ src/
│  ├─ components/
│  ├─ content/guides/
│  ├─ data/
│  │  ├─ guides.ts
│  │  ├─ topics.ts
│  │  └─ verification.ts
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  └─ TopicLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ guides/[slug].astro
│  │  ├─ topics/[slug].astro
│  │  └─ verification/index.astro
│  └─ styles/
├─ PROJECT_REVIEW_TODO.md
├─ astro.config.mjs
└─ package.json
```

## 本地开发

```bash
npm install
npm run dev
```

## 检查与构建

```bash
npm run check
npm run build
npm run audit:build
```

完整执行：

```bash
npm run verify
```

CI 会检查 Astro 类型、静态构建、内容发布日期、活动到期状态，以及待完善文章是否被错误发布。

## Cloudflare Pages

```text
Production branch: main
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
```

如果线上页面与仓库不一致，先核对 Pages 项目绑定的仓库、生产分支和最新部署 commit。

## 新增或修改教程

教程文件位于：

```text
src/content/guides/
```

字段定义位于：

```text
src/content.config.ts
```

新增内容时应优先填写：

- `productName` / `productSlug` / `planName`
- `offerKind` / `offerType`
- `eligibilityType` / `availabilityScope`
- `publishedAt` / `updatedAt` / `lastVerified`
- `requirements` / `steps` / `faq`

文章完成前保持：

```yaml
contentStatus: "待完善"
```

核验并完成后再改为：

```yaml
contentStatus: "已完成"
```

## 优化清单

全站问题和执行状态统一记录在：

```text
PROJECT_REVIEW_TODO.md
```
