---
title: "Cloudflare Pages 免费部署：GitHub 自动发布、无限静态请求与自定义域名"
category: "云服务 / 免费额度"
categorySlug: "cloud-credit"
relatedCategorySlugs:
  - "common-software"
summary: "Cloudflare Pages Free 适合免费托管 Astro、Vite、React、Vue 和纯静态网站。连接 GitHub 后，每次推送代码都会自动构建并发布；静态资源请求免费且不限量，还可使用 pages.dev 地址、预览部署和自定义域名。"
status: "可领取"
contentStatus: "已完成"
difficulty: "简单"
estimatedTime: "约 10–30 分钟；域名 DNS 生效可能需要更久"
audience: "个人开发者、学生、独立站作者、文档站和静态网站用户"
dealType: "永久免费托管 / GitHub 自动部署 / CDN"
lastVerified: "2026-07-11"
originalPrice: "静态托管按 Cloudflare Pages Free 规则使用；动态功能按 Workers 额度计算"
dealPrice: "静态资源请求免费且不限量；Free 计划每月 500 次构建"
couponCode: "无需优惠码"
region: "Cloudflare 提供服务的地区；账号、Git 平台和域名可用性以控制台为准"
warning: "Cloudflare Pages 的静态资源请求免费且不限量，但构建次数、文件数量、单文件大小和 Pages Functions 都有额度。Free 计划目前每月 500 次构建、每次构建最长 20 分钟、单站点最多 20,000 个文件、单文件不超过 25 MiB。Pages Functions 会消耗 Workers Free 的每日请求额度，动态 API 不属于无限免费静态请求。"
officialUrl: "https://developers.cloudflare.com/pages/"
allBenefitsUrl: "https://developers.cloudflare.com/pages/platform/limits/"
benefits:
  - name: "静态资源请求"
    value: "免费且不限量，不调用 Functions 时不计 Workers 请求"
    type: "core"
  - name: "GitHub 自动部署"
    value: "推送分支后自动构建和发布"
    type: "core"
  - name: "免费构建"
    value: "每月 500 次，单次最长 20 分钟"
    type: "core"
  - name: "预览部署"
    value: "可保留不限数量的活动预览部署"
    type: "core"
  - name: "自定义域名"
    value: "Free 计划每个项目最多 100 个"
    type: "core"
  - name: "Pages Functions"
    value: "计入 Workers Free 每日 100,000 次请求额度"
    type: "limited"
requirements:
  - label: "准备一个 Cloudflare 账号"
    level: "required"
  - label: "代码已经上传到 GitHub 或 GitLab 仓库"
    level: "required"
  - label: "项目可以通过构建命令生成静态输出目录"
    level: "required"
  - label: "连接 GitHub 时授权 Cloudflare 读取目标仓库"
    level: "required"
  - label: "绑定根域名时，需要把域名作为 Cloudflare Zone 并使用 Cloudflare Nameserver"
    level: "recommended"
preparation:
  - "一个可正常登录的 Cloudflare 账号"
  - "GitHub 或 GitLab 仓库，以及该仓库的管理或安装应用权限"
  - "提前在本地执行一次 npm install 和 npm run build，确认没有构建错误"
  - "确认项目的生产分支、构建命令和输出目录"
  - "Astro 静态项目常用配置：生产分支 main、构建命令 npm run build、输出目录 dist"
  - "需要自定义域名时，准备域名管理权限和 DNS 记录修改权限"
steps:
  - title: "在本地确认项目能够正常构建"
    description: "进入项目目录运行 npm install，再运行 npm run build。构建成功后检查输出目录中是否生成 index.html 和其他静态文件。Pages 需要明确的构建命令和输出目录。"
    note: "Astro 默认静态输出通常在 dist 目录。"
  - title: "把代码推送到 GitHub 仓库"
    description: "确认 package.json、锁文件、源代码和构建配置已经提交到 GitHub。不要把 node_modules、.env、API Key、数据库密码或 Cloudflare Token 提交到仓库。私有仓库也可以连接，但需要在 GitHub App 安装页面授权 Cloudflare 访问对应仓库。"
  - title: "在 Cloudflare 创建 Pages 项目"
    description: "登录 Cloudflare Dashboard，进入 Workers & Pages，点击 Create application，选择 Pages，再选择 Import an existing Git repository。授权 GitHub 后，从列表中选择准备部署的仓库并点击 Begin setup。"
    note: "官方入口：[[Workers & Pages|https://dash.cloudflare.com/?to=/:account/workers-and-pages]]"
  - title: "选择正确的生产分支"
    description: "把真正用于上线的分支设置为 Production branch。大多数项目使用 main；如果正式代码位于 master、production 或其他分支，应在创建时或后续 Settings > Builds > Branch control 中修改。推送到生产分支会更新正式站点，其他允许构建的分支通常生成预览部署。"
  - title: "填写 Astro 的构建配置"
    description: "纯静态 Astro 项目填写 Build command 为 npm run build，Build output directory 为 dist。Root directory 通常留空；只有仓库是 Monorepo、项目位于子目录时才填写对应路径。"
    note: "Cloudflare Astro 官方配置：[[Deploy an Astro site|https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/]]"
  - title: "静态项目不需要 SSR Adapter"
    description: "纯静态 Astro 站不需要为了部署 Pages 而强制加入 @astrojs/cloudflare。只有项目确实需要服务器端渲染、Pages Functions、请求时读取环境变量或动态 API 时，才应按 Astro 和 Cloudflare 当前适配器文档改造。"
  - title: "保存并执行第一次部署"
    description: "点击 Save and Deploy。Cloudflare 会安装依赖、执行构建命令并上传输出目录。成功后会生成一个 project-name.pages.dev 地址。项目名称会成为默认 pages.dev 子域名的一部分。"
  - title: "查看部署日志"
    description: "构建失败时打开 Deployments，选择失败记录并查看完整日志。常见问题包括 Node 版本不兼容、缺少锁文件、依赖安装失败、输出目录写错、环境变量缺失、文件名大小写在 Windows 和 Linux 上不一致，以及构建超过 20 分钟。"
  - title: "确认 GitHub 推送会自动上线"
    description: "Cloudflare Pages GitHub Integration 会在仓库分支出现新提交时自动构建。推送到 main 后应在 Deployments 中看到对应 Commit SHA；成功后 Production 部署会指向最新提交。这个流程不依赖 GitHub Actions。"
    note: "官方说明：[[GitHub integration|https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/]]"
  - title: "使用分支和 Pull Request 预览"
    description: "非生产分支可生成独立预览地址，Pull Request 也可以自动获得持续更新的 Preview URL。合并前可用预览地址检查移动端、链接、图片和构建结果。Cloudflare 当前说明，从 Fork 创建的 Pull Request 不会生成预览 URL。"
  - title: "需要时用提交信息跳过构建"
    description: "只修改 README、内部说明或其他不影响站点的文件时，可以在提交信息开头使用 [CI Skip]、[Skip CI] 或 [CF-Pages-Skip]，让 Pages 跳过该次部署。实际文章或代码更新不要使用跳过标记。"
  - title: "绑定自定义域名前先在 Pages 中添加域名"
    description: "进入 Pages 项目 > Custom domains > Set up a domain，先输入需要绑定的域名并继续。只在 DNS 控制台手动建立指向 pages.dev 的 CNAME，可能出现 522。"
    note: "官方流程：[[Custom domains|https://developers.cloudflare.com/pages/configuration/custom-domains/]]"
  - title: "根域名和子域名使用不同方式"
    description: "绑定 example.com 这类根域名时，域名必须作为同一 Cloudflare 账号中的 Zone，并把 Nameserver 指向 Cloudflare。绑定 www.example.com、docs.example.com 等子域名时，可以使用外部 DNS；在 Pages 添加域名后，再创建 CNAME 指向 project-name.pages.dev。"
  - title: "等待 HTTPS 证书和 DNS 激活"
    description: "域名添加后等待状态变为 Active，再访问 HTTPS 地址。长时间卡住时检查 DNS 是否存在冲突记录、Nameserver 是否已经切换、CAA 是否允许 Cloudflare 签发证书，以及是否同时配置了错误的 A、AAAA 或 CNAME。"
  - title: "了解 Free 计划的构建和文件边界"
    description: "Cloudflare Pages Free 当前每月提供 500 次构建，只允许 1 个构建同时进行，单次构建最长 20 分钟。每个站点最多 20,000 个文件，单个静态文件最大 25 MiB；大视频、安装包和超大图片应改用 R2 或其他对象存储。"
  - title: "区分静态请求和 Pages Functions"
    description: "HTML、CSS、JS、图片等静态资源请求免费且不限量，只要请求没有触发 Functions。Pages Functions 属于 Workers 计算，Free 计划下与其他 Workers 共享每日 100,000 次请求额度。"
  - title: "把密钥配置为环境变量"
    description: "进入项目 Settings > Environment variables，为 Production 和 Preview 分别配置需要的变量。公开的 Astro PUBLIC_ 变量会进入前端包，不能存放秘密；真正的密钥只应提供给服务端 Functions。"
  - title: "上线后检查路径和缓存"
    description: "逐个检查首页、文章详情、带尾斜杠的路径、自定义域名和 pages.dev 地址。需要重定向或自定义响应头时，可在 public 目录维护 _redirects 和 _headers，构建后它们会进入 dist。"
faq:
  - question: "Cloudflare Pages Free 会因为访问量大而自动收费吗？"
    answer: "纯静态资源请求在 Cloudflare 当前文档中免费且不限量。免费计划不会因为静态访问量增加而自动升级；但 Pages Functions、R2、D1、Images 等其他产品有各自额度和计费规则。"
  - question: "为什么 GitHub 提交后没有自动部署？"
    answer: "先检查项目是否仍连接正确仓库、提交是否推送到允许构建的分支、Commit message 是否包含 Skip 标记，以及 Cloudflare GitHub App 是否仍有仓库权限。然后到 Deployments 查看是否有构建记录。"
  - question: "没有 GitHub Actions，Cloudflare 还能自动部署吗？"
    answer: "可以。Pages Git integration 是 Cloudflare 自己监听 GitHub 提交并执行构建，不依赖仓库中的 GitHub Actions。真正的构建日志在 Cloudflare Deployments。"
  - question: "Astro 项目应该填写什么参数？"
    answer: "普通静态 Astro 项目通常填写 Production branch 为 main、Build command 为 npm run build、Build output directory 为 dist。Monorepo 还需要填写项目所在的 Root directory。"
  - question: "静态网站一定要安装 @astrojs/cloudflare 吗？"
    answer: "不需要。默认静态输出可以直接部署到 Pages。只有使用 Astro SSR、动态路由服务端渲染或 Cloudflare Runtime API 时，才需要按当前 Astro 文档使用 Cloudflare Adapter。"
  - question: "为什么自定义域名显示 522？"
    answer: "常见原因是只创建了 CNAME，却没有先在 Pages 项目的 Custom domains 中添加域名。还要检查目标是否为正确的 pages.dev 地址、DNS 是否冲突、根域名是否已经接入同一 Cloudflare 账号。"
  - question: "根域名可以继续使用其他 DNS 服务商吗？"
    answer: "Cloudflare Pages 当前要求自定义根域名成为该 Pages 项目所在账号的 Cloudflare Zone，并使用 Cloudflare Nameserver。外部 DNS 更适合绑定子域名，通过 CNAME 指向 pages.dev。"
  - question: "每月 500 次构建不够怎么办？"
    answer: "减少无意义提交，使用 Branch control 和 Build watch paths，只让影响站点的目录触发构建；纯文档改动无须部署时可使用 CI Skip。也可以改用 Direct Upload 或升级计划，但要先核对当前规则。"
  - question: "上传一张超过 25 MiB 的图片为什么失败？"
    answer: "Pages 单个静态资源当前最大 25 MiB。应压缩图片，或把大文件放到 Cloudflare R2、对象存储和专门的媒体服务，再从页面引用。"
editorNote: "已按 2026-07-11 的 Cloudflare Pages Limits、Functions Pricing、GitHub Integration、Custom Domains 和 Astro 部署文档完成核验。后续更新时重点复核每月构建次数、文件限制、Workers Free 请求额度以及 Pages 向 Workers 的产品迁移变化。"
order: 25
---

## 先看结论

Cloudflare Pages Free 非常适合静态教程站、博客、文档站、产品落地页和轻量前端项目。

对于 Astro 静态站，最简单的部署组合是：

```txt
生产分支：main
构建命令：npm run build
输出目录：dist
```

连接 GitHub 后，每次向 `main` 推送代码，Cloudflare 都会自动执行构建并发布。这个过程不依赖 GitHub Actions。

## 免费额度重点

| 项目 | Cloudflare Pages Free 当前规则 |
| --- | --- |
| 静态资源请求 | 免费且不限量 |
| 每月构建 | 500 次 |
| 并发构建 | 1 个 |
| 单次构建时间 | 最长 20 分钟 |
| 单站点文件数 | 20,000 个 |
| 单文件大小 | 25 MiB |
| 自定义域名 | 每个项目 100 个 |
| 预览部署 | 活动数量不限 |
| Pages Functions | 计入 Workers Free 每日 100,000 次请求 |
| 项目数量 | 每账号软限制 100 个 |

## 最短部署流程

1. 本地运行 `npm run build`，确认能够生成 `dist`。
2. 将项目推送到 GitHub。
3. Cloudflare Dashboard 进入 Workers & Pages。
4. 创建 Pages 项目并导入 Git 仓库。
5. 选择 `main`，填写 `npm run build` 和 `dist`。
6. 点击 Save and Deploy。
7. 使用生成的 `*.pages.dev` 地址检查网站。
8. 在 Custom domains 中绑定正式域名。
9. 以后每次推送 `main`，Cloudflare 自动上线新版本。

## 静态免费不等于所有 Cloudflare 产品都免费

页面只读取 HTML、CSS、JavaScript 和图片时，属于静态资源请求，Cloudflare 当前不按请求量收费。

出现以下情况时，要单独检查其他产品额度：

- 使用 Pages Functions 或 Workers 编写 API
- 使用 D1 数据库
- 使用 KV、Durable Objects、Queues 或 Vectorize
- 使用 R2 存储大文件
- 使用 Images 或图片变换
- 使用 Workers AI 或其他 AI 服务

这些服务可能有免费额度，但不是 Pages “无限静态请求”的一部分。

## 官方来源

- [Cloudflare Pages Limits](https://developers.cloudflare.com/pages/platform/limits/)
- [Cloudflare Pages Functions Pricing](https://developers.cloudflare.com/pages/functions/pricing/)
- [Cloudflare Pages GitHub Integration](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/)
- [Cloudflare Pages Custom Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Deploy an Astro site to Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)