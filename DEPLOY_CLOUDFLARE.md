# Cloudflare Pages 部署说明

当前项目是 **Astro 静态站**。

它不是服务端项目，部署到 Cloudflare Pages 后会输出纯静态资源：

```txt
dist/
├─ index.html
├─ guides/
│  ├─ claude-pro-discount/
│  │  └─ index.html
│  └─ google-cloud-credit/
│     └─ index.html
├─ _headers
├─ _redirects
└─ assets/
```

## 推荐部署方式：连接 GitHub 仓库

在 Cloudflare Pages 中新建项目，选择这个 GitHub 仓库。

构建设置填写：

```txt
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
```

然后点击 Deploy。

## 本地开发

```bash
npm install
npm run dev
```

默认访问：

```txt
http://localhost:4321
```

## 本地构建

```bash
npm run build
npm run preview
```

## 为什么用 Astro

这个项目最终仍然是静态部署，但 Astro 更适合维护优惠教程站：

- 可以组件化首页卡片、文章侧栏、步骤卡片
- 可以用数据文件统一生成页面
- 后续可以迁移到 Markdown / MDX 内容集合
- 构建结果仍然是静态 HTML/CSS/JS
- Cloudflare Pages 原生支持这种部署方式

## Cloudflare 专用文件

当前 Cloudflare 专用文件放在 `public/`：

```txt
public/_headers
public/_redirects
```

构建后会自动复制到 `dist/` 根目录。

## 新增文章

当前示例文章数据在：

```txt
src/data/guides.ts
```

新增一条 `guide` 数据后，会自动生成：

```txt
/guides/your-slug/
```

## 注意

根目录里旧的纯 HTML 示例文件如果还存在，不影响 Cloudflare Pages 的 Astro 构建部署。Cloudflare 应使用 `dist` 作为输出目录。
