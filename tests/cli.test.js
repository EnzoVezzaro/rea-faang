import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync, readdirSync, mkdtempSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';

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
  assert.match(result.stdout, /RAE — FAANG Product Intelligence CLI/);
  assert.match(result.stdout, /research validate/);
  assert.match(result.stdout, /research dossier/);
});

test('--version prints the version from package.json and exits 0', () => {
  const { version } = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
  const result = run('--version');
  assert.equal(result.status, 0);
  assert.match(result.stdout, new RegExp(`RAE CLI v${version.replace(/\./g, '\\.')}`));
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

test('research dossier prints the product dossier in text and JSON formats', () => {
  const text = run('research', 'dossier', 'google-search');
  assert.equal(text.status, 0);
  assert.match(text.stdout, /Google Search/);

  const json = runJson('research', 'dossier', 'google-search', '--format', 'json');
  assert.equal(json.status, 0);
  assert.equal(json.json.id, 'google-search');
  assert.equal(json.json.name, 'Google Search');
  assert.match(json.json.markdown, /Google Search/);

  const missing = run('research', 'dossier', 'no-such-product');
  assert.equal(missing.status, 1);
  assert.match(missing.stderr, /not found/);
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

test('build product --out scaffolds a workspace and refuses to overwrite', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rae-build-'));
  const out = join(dir, 'gmail');
  try {
    const first = run('build', 'product', 'gmail', '--out', out);
    assert.equal(first.status, 0);
    assert.ok(existsSync(join(out, 'ace.mjs')), 'ace.mjs shim must be written');
    assert.ok(existsSync(join(out, 'package.json')), 'package.json must be written');
    assert.equal(readdirSync(join(out, 'specs')).length, 10, 'ten spec stubs');

    const again = run('build', 'product', 'gmail', '--out', out);
    assert.equal(again.status, 1);
    assert.match(again.stderr, /already exists/);

    const forced = run('build', 'product', 'gmail', '--out', out, '--force');
    assert.equal(forced.status, 0);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('build agent-kit --out writes skill.md and mcp.json', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rae-kit-'));
  try {
    const result = run('build', 'agent-kit', 'gmail', '--out', dir);
    assert.equal(result.status, 0);
    assert.ok(existsSync(join(dir, 'skill.md')), 'skill.md must be written');
    assert.ok(existsSync(join(dir, 'mcp.json')), 'mcp.json must be written');
    const skill = readFileSync(join(dir, 'skill.md'), 'utf8');
    assert.equal(skill, readFileSync(join(ROOT, 'catalog', 'skills', 'google', 'gmail.md'), 'utf8'), 'portable kit uses the canonical skill compiler');
    assert.match(skill, /## Product description/);
    assert.match(skill, /### Multi-agent task plan and outputs/);
    assert.match(skill, /### Acceptance criteria and definition of done/);
    assert.match(skill, /### Product quality and verification plan/);
    assert.match(skill, /### End-to-end implementation milestones/);
    assert.match(skill, /Research lens: \*\*consumer_application\*\*/);
    assert.match(skill, /npx rae-faang research dossier gmail/);
    assert.doesNotMatch(skill, /npx --yes/);
    assert.doesNotMatch(skill, /node src\/cli\.js|From a repository clone/);
    const mcp = JSON.parse(readFileSync(join(dir, 'mcp.json'), 'utf8'));
    assert.deepEqual(mcp.mcpServers['rae-cli'], {
      command: 'rae', args: [], description: 'Installed RAE product intelligence CLI',
    });
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('alternatives clone errors clearly for an unknown product', () => {
  const result = run('alternatives', 'clone', 'no-such-product');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /not found/);
});

test('product-id shorthand writes one Markdown skill to --out', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rae-skill-'));
  const out = join(dir, 'gmail.md');
  try {
    const result = spawnSync(process.execPath, [CLI, 'gmail', '--out', out], { cwd: dir, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /gmail: generated_with_gaps/);
    assert.ok(existsSync(out));
    assert.equal(readFileSync(out, 'utf8'), readFileSync(join(ROOT, 'catalog', 'skills', 'google', 'gmail.md'), 'utf8'), 'product shorthand uses the canonical skill compiler');
    assert.match(readFileSync(out, 'utf8'), /### Multi-agent task plan and outputs/);
    assert.equal(existsSync(join(dir, 'gmail-agent')), false, 'product skill shorthand must not create an agent-kit directory');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('product-id shorthand without --out defaults to ./<product-id>.md', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rae-skill-'));
  try {
    const result = spawnSync(process.execPath, [CLI, 'gmail'], { cwd: dir, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.ok(existsSync(join(dir, 'gmail.md')));
    assert.equal(readFileSync(join(dir, 'gmail.md'), 'utf8'), readFileSync(join(ROOT, 'catalog', 'skills', 'google', 'gmail.md'), 'utf8'));
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('product-id shorthand with --alt still clones the alternative', () => {
  const result = run('gmail', '--alt', 'NoSuchAlt');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /No alternative named "NoSuchAlt" for "gmail"/);
});

test('explicit build agent-kit still writes skill.md and mcp.json', () => {
  const dir = mkdtempSync(join(tmpdir(), 'rae-kit-'));
  try {
    const result = run('build', 'agent-kit', 'gmail', '--out', dir);
    assert.equal(result.status, 0, result.stderr);
    assert.ok(existsSync(join(dir, 'skill.md')));
    assert.ok(existsSync(join(dir, 'mcp.json')));
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('unknown top-level command is still rejected', () => {
  const result = run('no-such-command');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /unknown command/);
});

test('--help documents the product-id Markdown skill shorthand', () => {
  const result = run('--help');
  assert.match(result.stdout, /Generate a product Markdown skill \[--out FILE\]/);
  assert.match(result.stdout, /--alt NAME, clone/);
  assert.match(result.stdout, /--out FILE/);
});
