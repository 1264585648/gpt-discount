import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, sep } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const errors = [];
const warnings = [];

if (!existsSync(dist)) {
  console.error('DIST LINK ERROR: dist 目录不存在，请先执行 npm run build');
  process.exit(1);
}

function walk(directory) {
  const files = [];
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    const stat = statSync(path);
    if (stat.isDirectory()) files.push(...walk(path));
    else files.push(path);
  }
  return files;
}

function routeForFile(file) {
  const path = relative(dist, file).split(sep).join('/');
  if (path === 'index.html') return '/';
  if (path.endsWith('/index.html')) return `/${path.slice(0, -'index.html'.length)}`;
  return `/${path}`;
}

function normalizeRoute(pathname) {
  if (pathname === '/') return '/';
  if (pathname.endsWith('/')) return pathname;
  if (extname(pathname)) return pathname;
  return `${pathname}/`;
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
const pages = new Map();

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = routeForFile(file);
  const ids = new Set([
    ...[...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]),
    ...[...html.matchAll(/\bname=["']([^"']+)["']/gi)].map((match) => match[1]),
  ]);
  pages.set(route, { file, html, ids });

  if (route.startsWith('/topics/') && /目前没有(?:可查看的优惠|已完成的 AI 工具教程)/.test(html)) {
    errors.push(`${route}: 专题构建为空`);
  }

  if (route.startsWith('/guides/') && !/class=["'][^"']*step-list/.test(html)) {
    warnings.push(`${route}: 教程页没有操作步骤列表`);
  }
}

for (const [route, page] of pages) {
  for (const match of page.html.matchAll(/\bhref=["']([^"']+)["']/gi)) {
    const href = match[1].trim();
    if (!href || /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(href)) continue;

    let target;
    try {
      target = new URL(href, `https://audit.local${route}`);
    } catch {
      errors.push(`${route}: 无法解析链接 ${href}`);
      continue;
    }

    const targetRoute = normalizeRoute(decodeURI(target.pathname));
    const targetPage = pages.get(targetRoute);
    if (!targetPage) {
      errors.push(`${route}: 站内链接目标不存在 ${href}（解析为 ${targetRoute}）`);
      continue;
    }

    if (target.hash) {
      const id = decodeURIComponent(target.hash.slice(1));
      if (id && !targetPage.ids.has(id)) {
        errors.push(`${route}: 锚点不存在 ${href}`);
      }
    }
  }
}

for (const warning of [...new Set(warnings)]) {
  console.warn(`DIST LINK WARNING: ${warning}`);
}

if (errors.length > 0) {
  for (const error of [...new Set(errors)]) {
    console.error(`DIST LINK ERROR: ${error}`);
  }
  process.exit(1);
}

console.log(`静态页面链接审计通过；检查了 ${pages.size} 个 HTML 页面。`);
