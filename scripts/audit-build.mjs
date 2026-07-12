import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const root = process.cwd();
const guidesDirectory = join(root, 'src', 'content', 'guides');
const distDirectory = join(root, 'dist', 'guides');
const errors = [];
const warnings = [];
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function readFrontmatter(source, filename) {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    errors.push(`${filename}: 缺少 YAML frontmatter`);
    return '';
  }
  return match[1];
}

function readScalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return undefined;
  return match[1].trim().replace(/^['"]|['"]$/g, '');
}

function validateDate(filename, key, value) {
  if (!value) return;
  if (!datePattern.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
    errors.push(`${filename}: ${key} 必须使用有效的 YYYY-MM-DD 日期`);
  }
}

for (const filename of readdirSync(guidesDirectory).filter((name) => name.endsWith('.md'))) {
  const filePath = join(guidesDirectory, filename);
  const source = readFileSync(filePath, 'utf8');
  const frontmatter = readFrontmatter(source, filename);
  const slug = basename(filename, '.md');
  const contentStatus = readScalar(frontmatter, 'contentStatus') ?? '待完善';
  const status = readScalar(frontmatter, 'status');
  const lastVerified = readScalar(frontmatter, 'lastVerified');
  const publishedAt = readScalar(frontmatter, 'publishedAt');
  const updatedAt = readScalar(frontmatter, 'updatedAt');
  const expiresAt = readScalar(frontmatter, 'expiresAt');
  const outputPath = join(distDirectory, slug, 'index.html');
  const outputExists = existsSync(outputPath);

  validateDate(filename, 'lastVerified', lastVerified);
  validateDate(filename, 'publishedAt', publishedAt);
  validateDate(filename, 'updatedAt', updatedAt);
  validateDate(filename, 'expiresAt', expiresAt);

  if (contentStatus === '已完成' && !outputExists) {
    errors.push(`${filename}: 已完成文章没有生成详情页`);
  }
  if (contentStatus !== '已完成' && outputExists) {
    errors.push(`${filename}: 待完善文章被错误发布到 dist`);
  }

  if (status === '可领取' && expiresAt && expiresAt < new Date().toISOString().slice(0, 10)) {
    errors.push(`${filename}: expiresAt 已过期，但 status 仍为“可领取”`);
  }

  if (contentStatus === '已完成') {
    const missingExplicitFields = ['offerType', 'eligibilityType', 'availabilityScope']
      .filter((key) => !readScalar(frontmatter, key));
    if (missingExplicitFields.length > 0) {
      warnings.push(`${filename}: 尚未迁移显式分类字段 ${missingExplicitFields.join(', ')}`);
    }
  }
}

for (const warning of warnings) {
  console.warn(`CONTENT WARNING: ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`CONTENT ERROR: ${error}`);
  }
  process.exit(1);
}

console.log(`内容发布审计通过；${warnings.length} 篇已发布文章仍需渐进迁移显式分类字段。`);
