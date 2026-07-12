# GPT Discount

面向中文用户的 AI 工具、学生教育优惠、软件折扣和云服务赠金教程站。

每篇公开教程应回答五个问题：

- 现在还能不能领取或购买
- 哪些人和地区适用
- 应从哪个官方入口开始
- 实际操作步骤是什么
- 价格、续费、退款和账号风险有哪些

## 技术栈

- Astro 5
- TypeScript
- Astro Content Collections
- CSS / SVG
- Cloudflare Pages

构建结果为纯静态文件，输出目录是 `dist/`。

## 分支

仓库只使用一个长期分支：

```text
main
```

开发、CI 和生产部署均以 `main` 为准。

## 主要页面

### 首页

```text
/
```

包含搜索、最近更新、四类专题入口和全部已完成教程。

### 专题页

```text
/topics/ai-tools/
/topics/student-education/
/topics/common-software/
/topics/cloud-credit/
```

AI 专题从 `src/data/ai-products.ts` 读取产品信息，并按照教程的 `productSlug` 自动分组。只有主分类为 AI，或明确填写了 AI 产品字段的教程会进入 AI 专题。

### 学生认证

```text
/verification/
```

集中说明教育邮箱、在读证明、GitHub Education、SheerID、UNiDAYS、Student Beans 和 ID.me。

### 教程详情页

```text
/guides/[slug]/
```

详情页展示：

- 当前状态和核心权益
- 开始前需要确认的条件
- 操作步骤
- 官方入口
- 常见问题与限制
- 核验方式和核验日期

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
│  ├─ audit-links.mjs
│  ├─ audit-build.mjs
│  └─ audit-dist-links.mjs
├─ src/
│  ├─ components/
│  ├─ content/guides/
│  ├─ data/
│  │  ├─ ai-products.ts
│  │  ├─ guides.ts
│  │  ├─ topics.ts
│  │  └─ verification.ts
│  ├─ layouts/
│  ├─ pages/
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
npm run audit:links
npm run build
npm run audit:build
npm run audit:dist
```

完整执行：

```bash
npm run verify
```

检查内容包括：

- Astro 类型和静态构建
- 已删除路径和错误锚点
- 已发布页面中的占位文案
- 活动到期状态
- 已完成文章是否生成详情页
- 构建后的站内页面、链接和锚点
- 空专题页
- 价格、权益和核验字段的迁移提醒

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

已完成文章应优先填写：

- `productName` / `productSlug` / `planName`
- `offerKind` / `offerType`
- `eligibilityType` / `availabilityScope`
- `publishedAt` / `updatedAt` / `lastVerified`
- `verificationType`
- `priceVerifiedAt` / `benefitsVerifiedAt`
- `requirements` / `steps` / `faq`

核验类型：

```yaml
verificationType: "官方页面核验" # 或 账号实测 / 付款实测
```

文章完成前保持：

```yaml
contentStatus: "待完善"
```

确认内容和官方入口后再改为：

```yaml
contentStatus: "已完成"
```

## 优化清单

执行状态记录在：

```text
PROJECT_REVIEW_TODO.md
```
