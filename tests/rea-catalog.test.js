import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const REA_DIR = join(ROOT, 'catalog', 'rea');

const products = readFileSync(join(ROOT, 'catalog', 'products.jsonl'), 'utf8')
  .split('\n')
  .filter((line) => line.trim())
  .map((line) => JSON.parse(line));

test('the REA catalog index exists and lists every product', () => {
  const indexPath = join(REA_DIR, 'README.md');
  assert.ok(existsSync(indexPath), 'catalog/rea/README.md should exist');
  const index = readFileSync(indexPath, 'utf8');
  for (const product of products) {
    assert.ok(index.includes(product.id), `index should reference ${product.id}`);
  }
});

test('every catalog product has exactly one REA report', () => {
  for (const product of products) {
    const report = join(REA_DIR, product.company_id, `${product.id}.md`);
    assert.ok(existsSync(report), `missing REA report for ${product.id}: ${report}`);
  }
});

test('every REA report records status and target', () => {
  for (const product of products) {
    const text = readFileSync(join(REA_DIR, product.company_id, `${product.id}.md`), 'utf8');
    assert.match(text, /\| Status \| (captured|failed) \|/, `${product.id} status row`);
    assert.ok(
      text.includes(product.official_url),
      `${product.id} should name its target URL`,
    );
  }
});

test('captured REA reports carry an evidence id and provider', () => {
  for (const product of products) {
    const text = readFileSync(join(REA_DIR, product.company_id, `${product.id}.md`), 'utf8');
    if (!/\| Status \| captured \|/.test(text)) continue;
    assert.match(text, /\| REA Evidence ID \| `ev_[0-9a-f]+` \|/, `${product.id} evidence id`);
    assert.match(text, /\| REA provider \| /, `${product.id} provider`);
  }
});
