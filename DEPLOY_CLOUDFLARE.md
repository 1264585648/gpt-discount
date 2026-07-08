# Cloudflare Pages 静态部署说明

当前项目是纯静态页面，不依赖 Node.js、Next.js、Vite、后端服务或数据库。

## 目录结构

```txt
/
├─ index.html
├─ styles.css
├─ script.js
├─ _headers
├─ _redirects
└─ guides/
   ├─ claude-pro-discount.html
   └─ google-cloud-credit.html
```

## Cloudflare Pages 部署方式一：连接 GitHub 仓库

在 Cloudflare Pages 中新建项目，选择这个 GitHub 仓库。

构建设置填写：

```txt
Framework preset: None
Build command: 留空
Build output directory: /
Root directory: /
```

然后点击 Deploy。

## Cloudflare Pages 部署方式二：直接上传

也可以把整个仓库目录打包或直接拖拽上传到 Cloudflare Pages。

需要包含这些文件：

```txt
index.html
styles.css
script.js
_headers
_redirects
guides/
```

## 说明

- `_headers` 用于设置静态资源缓存和基础安全响应头。
- `_redirects` 用于支持无 `.html` 后缀的文章访问路径。
- 当前所有文章都是静态 HTML，后续新增文章只需要在 `guides/` 下新增 HTML 文件，并在首页加卡片链接。

## 本地预览

```bash
python -m http.server 3000
```

访问：

```txt
http://localhost:3000
```
