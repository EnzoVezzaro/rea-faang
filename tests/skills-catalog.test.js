import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import yaml from 'js-yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS_DIR = join(ROOT, 'catalog', 'skills');
const STATUSES = new Set(['available', 'partial', 'pending']);

const products = readFileSync(join(ROOT, 'catalog', 'products.jsonl'), 'utf8')
  .split('\n')
  .filter((line) => line.trim())
  .map((line) => JSON.parse(line));

function skillPath(product) {
  return join(SKILLS_DIR, product.company_id, `${product.id}.md`);
}

function readSkill(product) {
  const path = skillPath(product);
  assert.ok(existsSync(path), `missing skill file for ${product.id}: ${path}`);
  return readFileSync(path, 'utf8');
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  assert.ok(match, 'skill file must open with YAML frontmatter');
  return yaml.load(match[1]);
}

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}

test('the skills index exists and links every catalog product', () => {
  const indexPath = join(SKILLS_DIR, 'README.md');
  assert.ok(existsSync(indexPath), 'catalog/skills/README.md should exist');
  const index = readFileSync(indexPath, 'utf8');
  for (const product of products) {
    assert.ok(
      index.includes(`](${product.company_id}/${product.id}.md)`),
      `index should link ${product.company_id}/${product.id}.md`,
    );
  }
});

test('every catalog product has exactly one skill file', () => {
  for (const product of products) {
    readSkill(product);
  }
  const files = walk(SKILLS_DIR).filter((f) => !f.endsWith('README.md'));
  assert.equal(files.length, products.length, 'one skill file per product, no extras');
});

test('each skill file has valid frontmatter whose name matches the product id', () => {
  for (const product of products) {
    const fm = frontmatter(readSkill(product));
    assert.equal(fm.name, product.id, `${product.id}: frontmatter name`);
    assert.equal(typeof fm.description, 'string', `${product.id}: description is a string`);
    assert.ok(fm.description.trim().length > 0, `${product.id}: description is non-empty`);
  }
});

test('each skill file declares a valid open-source status', () => {
  for (const product of products) {
    const text = readSkill(product);
    const status = text.match(/Open-source status is (available|partial|pending)/);
    assert.ok(status, `${product.id}: description states an open-source status`);
    assert.match(
      text,
      /\*\*Open-source status\*\* \| \*\*(available|partial|pending(?: to open-source)?)\*\*/,
      `${product.id}: status row`,
    );
  }
});

test('pending products are labelled pending to open-source', () => {
  for (const product of products) {
    const text = readSkill(product);
    if (/Open-source status is pending/.test(text)) {
      assert.match(text, /pending to open-source/, `${product.id}: must say pending to open-source`);
    }
  }
});

test('available and partial products list at least one alternative', () => {
  for (const product of products) {
    const text = readSkill(product);
    const m = text.match(/Open-source status is (available|partial)/);
    if (!m) continue;
    const table = text.split('## Existing open source')[1]?.split('## Gap')[0] ?? '';
    assert.match(table, /\| \[.+\]\(https?:\/\/.+\) \|/, `${product.id}: has an alternative row`);
  }
});

test('every skill file cites sources', () => {
  for (const product of products) {
    const text = readSkill(product);
    const sources = text.split('## Sources')[1]?.split('## Provenance')[0] ?? '';
    const links = sources.match(/https?:\/\/\S+/g) ?? [];
    assert.ok(links.length >= 1, `${product.id}: at least one source`);
  }
});

test('every relative link in the skills catalog resolves', () => {
  for (const file of walk(SKILLS_DIR)) {
    const text = readFileSync(file, 'utf8');
    for (const m of text.matchAll(/\]\(([^)]+)\)/g)) {
      const link = m[1];
      if (/^https?:/.test(link) || link.startsWith('#')) continue;
      const target = resolve(dirname(file), link.split('#')[0]);
      assert.ok(existsSync(target), `${file}: broken link ${link}`);
    }
  }
});

test('the index status counts match the skill files', () => {
  const index = readFileSync(join(SKILLS_DIR, 'README.md'), 'utf8');
  const counts = { available: 0, partial: 0, pending: 0 };
  for (const product of products) {
    const m = readSkill(product).match(/Open-source status is (available|partial|pending)/);
    assert.ok(m, `${product.id}: status parseable`);
    counts[m[1]]++;
  }
  for (const [status, n] of Object.entries(counts)) {
    assert.match(
      index,
      new RegExp(`\\*\\*${n} ${status === 'pending' ? 'pending' : status}`),
      `index should report ${n} ${status}`,
    );
  }
});
