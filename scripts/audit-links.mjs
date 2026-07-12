import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const errors = [];
const warnings = [];

const guideDirectory = join(root, 'src', 'content', 'guides');
const sourceDirectory = join(root, 'src');
const redirectsPath = join(root, 'public', '_redirects');
const topicsPath = join(root, 'src', 'data', 'topics.ts');
const indexPath = join(root, 'src', 'pages', 'index.astro');
const readmePath = join(root, 'README.md');

function readScalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  return match?.[1]?.trim().replace(/^['"]|['"]$/g, '');
}

function getFrontmatter(source) {
  return source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
}

const guideFiles = readdirSync(guideDirectory).filter((name) => name.endsWith('.md'));
const guideSlugs = new Set(guideFiles.map((name) => name.replace(/\.md$/, '')));
const publishedGuideFiles = new Set(
  guideFiles.filter((name) => {
    const source = readFileSync(join(guideDirectory, name), 'utf8');
    return (readScalar(getFrontmatter(source), 'contentStatus') ?? '待完善') === '已完成';
  }),
);

const topicSource = readFileSync(topicsPath, 'utf8');
const topicSlugs = new Set(
  [...topicSource.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]),
);

const indexSource = readFileSync(indexPath, 'utf8');
const homeIds = new Set(
  [...indexSource.matchAll(/\bid=["'{`]([^"'}`]+)["'}`]/g)].map((match) => match[1]),
);

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

const textExtensions = new Set(['.astro', '.ts', '.js', '.mjs', '.md', '.css']);
const sourceFiles = walk(sourceDirectory).filter((path) => textExtensions.has(extname(path)));
if (existsSync(readmePath)) sourceFiles.push(readmePath);

const removedSlugs = [
  'chatgpt-plans-student-discount',
  'claude-pro-discount',
  'ai-tools-no-official-student-discount',
];

const placeholderPatterns = [
  /第一版页面骨架/,
  /示例数据/,
  /演示如何/,
  /截图占位/,
  /Lorem ipsum/i,
  /待补充/,
];

for (const path of sourceFiles) {
  const name = relative(root, path);
  const source = readFileSync(path, 'utf8');
  const isGuide = path.startsWith(guideDirectory) && path.endsWith('.md');
  const isPublishedGuide = !isGuide || publishedGuideFiles.has(name.split(/[/\\]/).pop());

  for (const slug of removedSlugs) {
    if (source.includes(slug)) {
      errors.push(`${name}: 仍引用已删除 slug ${slug}`);
    }
  }

  if (isPublishedGuide) {
    for (const pattern of placeholderPatterns) {
      if (pattern.test(source)) {
        errors.push(`${name}: 已发布内容包含占位文案 ${pattern}`);
      }
    }
  }

  if (!isGuide || isPublishedGuide) {
    for (const match of source.matchAll(/(?:href=|['"`|])\/guides\/([a-z0-9-]+)\/?/g)) {
      const slug = match[1];
      if (!guideSlugs.has(slug)) {
        errors.push(`${name}: 引用了不存在的教程 /guides/${slug}/`);
      }
    }

    for (const match of source.matchAll(/(?:href=|['"`|])\/topics\/([a-z0-9-]+)\/?/g)) {
      const slug = match[1];
      if (!topicSlugs.has(slug)) {
        errors.push(`${name}: 引用了不存在的专题 /topics/${slug}/`);
      }
    }

    for (const match of source.matchAll(/href=["']\/#([a-z0-9-]+)["']/g)) {
      const id = match[1];
      if (!homeIds.has(id)) {
        errors.push(`${name}: 首页锚点 #${id} 不存在`);
      }
    }
  }
}

if (existsSync(redirectsPath)) {
  const lines = readFileSync(redirectsPath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));

  for (const [index, line] of lines.entries()) {
    const [from, target, status] = line.split(/\s+/);
    if (!from || !target || !status) {
      errors.push(`public/_redirects:${index + 1}: 重定向格式不完整`);
      continue;
    }

    if (!/^30[1278]$/.test(status)) {
      warnings.push(`public/_redirects:${index + 1}: 非常用重定向状态码 ${status}`);
    }

    const guideMatch = target.match(/^\/guides\/([a-z0-9-]+)\/$/);
    if (guideMatch && !guideSlugs.has(guideMatch[1])) {
      errors.push(`public/_redirects:${index + 1}: 目标教程不存在 ${target}`);
    }

    const topicMatch = target.match(/^\/topics\/([a-z0-9-]+)\/$/);
    if (topicMatch && !topicSlugs.has(topicMatch[1])) {
      errors.push(`public/_redirects:${index + 1}: 目标专题不存在 ${target}`);
    }
  }
}

for (const filename of guideFiles) {
  const source = readFileSync(join(guideDirectory, filename), 'utf8');
  const parts = source.split(/^---\s*$/m);
  if (parts.length < 3 || !parts.slice(2).join('---').trim()) continue;

  if (publishedGuideFiles.has(filename)) {
    errors.push(`${filename}: 已发布文章在 frontmatter 后仍有 Markdown 正文，但当前详情页不渲染正文`);
  } else {
    warnings.push(`${filename}: 草稿在 frontmatter 后仍有 Markdown 正文；发布前需迁移到结构化字段或删除`);
  }
}

for (const warning of [...new Set(warnings)]) {
  console.warn(`LINK WARNING: ${warning}`);
}

if (errors.length > 0) {
  for (const error of [...new Set(errors)]) {
    console.error(`LINK ERROR: ${error}`);
  }
  process.exit(1);
}

console.log(`站内链接审计通过；检查了 ${sourceFiles.length} 个源码文件、${guideSlugs.size} 篇教程和 ${topicSlugs.size} 个专题。`);
