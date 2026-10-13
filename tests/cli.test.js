import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CLI = join(ROOT, 'src', 'cli.js');
const SCHEMA_DIR = join(ROOT, 'catalog', 'schema');

/** Run the CLI with args, returning { status, stdout, stderr }. */
function run(...args) {
  return spawnSync(process.execPath, [CLI, ...args], {
    cwd: ROOT,
    encoding: 'utf8',
  });
}

function runJson(...args) {
  const result = run(...args);
  return { ...result, json: JSON.parse(result.stdout) };
}

test('--help prints usage and exits 0', () => {
  const result = run('--help');
  assert.equal(result.status, 0);
  assert.match(result.stdout, /REA — FAANG Product Intelligence CLI/);
  assert.match(result.stdout, /research validate/);
});

test('--version prints the version and exits 0', () => {
  const result = run('--version');
  assert.equal(result.status, 0);
  assert.match(result.stdout, /REA CLI v0\.1\.0/);
});

test('unknown command exits non-zero with an error', () => {
  const result = run('does-not-exist');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /unknown command/);
});

test('every schema file is valid JSON', () => {
  const files = readdirSync(SCHEMA_DIR).filter((f) => f.endsWith('.json'));
  assert.ok(files.length >= 4, 'expected the four catalog schemas');
  for (const file of files) {
    assert.doesNotThrow(
      () => JSON.parse(readFileSync(join(SCHEMA_DIR, file), 'utf8')),
      `${file} must parse as JSON`,
    );
  }
});

test('products list --format json returns catalog records', () => {
  const { status, json } = runJson('products', 'list', '--format', 'json');
  assert.equal(status, 0);
  assert.ok(Array.isArray(json));
  assert.ok(json.length > 0, 'catalog should not be empty');
  for (const product of json) {
    assert.equal(typeof product.id, 'string');
    assert.equal(typeof product.company_id, 'string');
  }
});

test('every catalog product_type is allowed by the product schema', () => {
  const schema = JSON.parse(
    readFileSync(join(SCHEMA_DIR, 'product.schema.json'), 'utf8'),
  );
  const allowed = new Set(schema.properties.product_type.enum);
  const lines = readFileSync(join(ROOT, 'catalog', 'products.jsonl'), 'utf8')
    .split('\n')
    .filter((line) => line.trim());

  assert.ok(lines.length > 0, 'products.jsonl should not be empty');
  for (const line of lines) {
    const product = JSON.parse(line);
    assert.ok(
      allowed.has(product.product_type),
      `${product.id} uses unknown product_type "${product.product_type}"`,
    );
  }
});

test('research validate passes with zero errors', () => {
  const { status, json } = runJson('research', 'validate', '--format', 'json');
  assert.equal(status, 0);
  assert.deepEqual(json.errors, []);
});

test('alternatives validate passes with zero errors', () => {
  const { status, json } = runJson('alternatives', 'validate', '--format', 'json');
  assert.equal(status, 0);
  assert.deepEqual(json.errors, []);
});

test('every build_missing product has an opportunity spec', () => {
  const { status, json } = runJson('opportunities', 'validate', '--format', 'json');
  assert.equal(status, 0);
  assert.deepEqual(json.errors, []);
});

test('research coverage reports every company', () => {
  const { status, json } = runJson('research', 'coverage', '--format', 'json');
  assert.equal(status, 0);
  assert.equal(typeof json.total.cataloged, 'number');
  assert.ok(
    Object.keys(json.companies).length >= 5,
    'expected the five FAANG companies',
  );
});

test('products show returns a known product and fails for an unknown one', () => {
  const listed = runJson('products', 'list', '--format', 'json').json;
  const known = listed[0].id;

  const ok = runJson('products', 'show', known, '--format', 'json');
  assert.equal(ok.status, 0);
  assert.equal(ok.json.id, known);

  const missing = run('products', 'show', 'no-such-product');
  assert.equal(missing.status, 1);
  assert.match(missing.stderr, /not found/);
});
