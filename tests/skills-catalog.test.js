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
    const status = text.match(/Alternative coverage is (mature alternative listed|partial alternative coverage|no verified alternative)/);
    assert.ok(status, `${product.id}: description states alternative coverage clearly`);
    assert.match(
      text,
      /\*\*Alternative coverage\*\* \| \*\*(mature alternative listed|partial alternative coverage|no verified alternative)\*\*/,
      `${product.id}: coverage row must not imply product build status`,
    );
  }
});

test('every skill makes clear that alternative coverage is not product build status', () => {
  for (const product of products) {
    const text = readSkill(product);
    if (/Alternative coverage is no verified alternative/.test(text)) {
      assert.match(text, /no suitable candidate is verified|has not verified a suitable candidate|no suitable open-source project|Alternative coverage: .+no verified alternative/i, `${product.id}: state no verified alternative precisely`);
    }
    assert.match(text, /does not determine whether your agent can build the product/, `${product.id}: distinguish coverage from build capability`);
    assert.match(text, /build the requested product in their project|build the requested product in the user's project|build the product in your project|build this product in their project|build it in their project/i, `${product.id}: direct the agent to build in the user's project`);
    assert.doesNotMatch(text, /pending to open-source/, `${product.id}: avoid copy that implies the product itself is pending`);
  }
});

test('available and partial products list at least one alternative', () => {
  for (const product of products) {
    const text = readSkill(product);
    const m = text.match(/Alternative coverage is (mature alternative listed|partial alternative coverage)/);
    if (!m) continue;
    const table = text.split('## Existing open source')[1]?.split('## Gap')[0] ?? '';
    assert.match(table, /\| \[.+\]\(https?:\/\/.+\) \|/, `${product.id}: has an alternative row`);
  }
});

test('every skill kit has product description and actionable multi-agent build instructions', () => {
  for (const product of products) {
    const text = readSkill(product);
    assert.match(text, /## Product description/, `${product.id}: expanded product description`);
    assert.match(text, /## Multi-agent task plan and outputs/, `${product.id}: agent task plan`);
    assert.match(text, /## Verification and definition of done/, `${product.id}: verification gate`);
    assert.match(text, /Do not reproduce proprietary internals or claim blanket feature parity/, `${product.id}: bounded independent implementation guidance`);
    assert.match(text, /Give this product skill to the coding agent in the project where the user wants the product built/, `${product.id}: explains the skill hand-off and build location`);
    assert.match(text, /coding-agent skill for \*\*.+\*\*/, `${product.id}: direct product-building mission`);
    assert.match(text, /build in their project|build in the user's project|build in your project|project where the user wants the product built/, `${product.id}: user project is the implementation target`);
    assert.match(text, /Research status:/, `${product.id}: honest research status`);
    assert.match(text, /## Sources/, `${product.id}: visible sources`);
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

test('the index alternative-coverage counts match the skill files', () => {
  const index = readFileSync(join(SKILLS_DIR, 'README.md'), 'utf8');
  const counts = { available: 0, partial: 0, pending: 0 };
  for (const product of products) {
    const m = readSkill(product).match(/Alternative coverage is (mature alternative listed|partial alternative coverage|no verified alternative)/);
    assert.ok(m, `${product.id}: coverage parseable`);
    const category = { 'mature alternative listed': 'available', 'partial alternative coverage': 'partial', 'no verified alternative': 'pending' }[m[1]];
    counts[category]++;
  }
  for (const [status, n] of Object.entries(counts)) {
    assert.match(
      index,
      new RegExp(`\\*\\*${n} ${{ available: 'mature alternatives listed', partial: 'partial alternative coverage', pending: 'with no verified alternative' }[status]}`),
      `index should report ${n} ${status} coverage entries`,
    );
  }
});
