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
  const verificationType = readScalar(frontmatter, 'verificationType');
  const priceVerifiedAt = readScalar(frontmatter, 'priceVerifiedAt');
  const benefitsVerifiedAt = readScalar(frontmatter, 'benefitsVerifiedAt');
  const publishedAt = readScalar(frontmatter, 'publishedAt');
  const updatedAt = readScalar(frontmatter, 'updatedAt');
  const expiresAt = readScalar(frontmatter, 'expiresAt');
  const dealPrice = readScalar(frontmatter, 'dealPrice') ?? '';
  const outputPath = join(distDirectory, slug, 'index.html');
  const outputExists = existsSync(outputPath);

  validateDate(filename, 'lastVerified', lastVerified);
  validateDate(filename, 'priceVerifiedAt', priceVerifiedAt);
  validateDate(filename, 'benefitsVerifiedAt', benefitsVerifiedAt);
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

    if (!verificationType) {
      warnings.push(`${filename}: 未显式填写 verificationType，将使用“官方页面核验”默认值`);
    }

    const containsExactPrice = /(?:US\$|USD|CNY|EUR|GBP|[$€£¥]|\d+(?:\.\d+)?\s*(?:元|美元|月|年|折))/i.test(dealPrice)
      && !/(以.+为准|因地区|可能不同)/.test(dealPrice);
    if (containsExactPrice && !priceVerifiedAt) {
      warnings.push(`${filename}: dealPrice 包含具体价格，但未填写 priceVerifiedAt`);
    }

    const containsNumericBenefit = /\n\s+value:\s*["']?[^\n]*\d/.test(frontmatter);
    if (containsNumericBenefit && !benefitsVerifiedAt) {
      warnings.push(`${filename}: 权益中包含具体额度或期限，但未填写 benefitsVerifiedAt`);
    }
  }
}

for (const warning of [...new Set(warnings)]) {
  console.warn(`CONTENT WARNING: ${warning}`);
}

if (errors.length > 0) {
  for (const error of [...new Set(errors)]) {
    console.error(`CONTENT ERROR: ${error}`);
  }
  process.exit(1);
}

console.log(`内容发布审计通过；发现 ${warnings.length} 条渐进迁移提醒。`);
