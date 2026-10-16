import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, rmSync, existsSync, mkdirSync, writeFileSync, cpSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  compileFromRepository,
  compileProductSkill,
  productIds,
  validateRepositorySkill,
  validateSkillText,
  writeProductSkill,
} from '../tools/product-skill-generator.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const products = readFileSync(join(ROOT, 'catalog/products.jsonl'), 'utf8').trim().split('\n').map(JSON.parse);
const landscapes = (await import('../tools/skills/catalog-data.mjs')).PRODUCTS;
const companies = JSON.parse(readFileSync(join(ROOT, 'catalog/companies.json'), 'utf8'));
const dossier = (id) => readFileSync(join(ROOT, 'research/companies', products.find((p) => p.id === id).company_id, 'products', `${id}.md`), 'utf8');
const capture = (id) => {
  const p = products.find((item) => item.id === id);
  return {
    report: readFileSync(join(ROOT, 'catalog/rea', p.company_id, `${id}.md`), 'utf8'),
    evidence: JSON.parse(readFileSync(join(ROOT, 'catalog/rea/evidence', `${id}.json`), 'utf8')),
  };
};

test('single-product compiler emits the complete section set and transparent evidence gaps', () => {
  const result = compileFromRepository('google-search');
  assert.equal(result.report.status, 'generated_with_gaps');
  assert.deepEqual(result.report.errors, []);
  assert.match(result.markdown, /^name: google-search$/m);
  assert.equal([...result.markdown.matchAll(/^## \d+\./gm)].length, 15);
  assert.match(result.markdown, /## 3\. Complete user workflows/);
  assert.match(result.markdown, /UNKNOWN/);
  assert.match(result.markdown, /Public web-surface observation/);
  assert.match(result.markdown, /ev_[a-f0-9]{64}/);
  assert.match(result.markdown, /SearXNG/);
  assert.match(result.markdown, /Research status:\*\* pending/);
  assert.match(result.markdown, /REQ-FUNC-[A-F0-9]{8}/);
  assert.match(result.markdown, /TEST-FUNC-[A-F0-9]{8}/);
});

test('unchanged inputs compile byte-identically and keep stable requirement IDs', () => {
  const first = compileFromRepository('google-search');
  const second = compileFromRepository('google-search');
  assert.equal(first.markdown, second.markdown);
  const firstIds = [...first.markdown.matchAll(/^### (REQ-[A-Z0-9-]+)/gm)].map((m) => m[1]);
  const secondIds = [...second.markdown.matchAll(/^### (REQ-[A-Z0-9-]+)/gm)].map((m) => m[1]);
  assert.deepEqual(firstIds, secondIds);
});

test('bad evidence references and REA evidence mismatches are rejected', () => {
  const product = { ...products.find((p) => p.id === 'google-search'), capabilities: [{ capability_id: 'F1', support: 'supported', evidence_ids: ['ev-missing'], notes: 'Search' }] };
  const target = capture('google-search');
  const data = compileProductSkill({ product, company: companies.google.name, dossierText: dossier('google-search'), reaReport: target.report, reaEvidence: target.evidence, landscape: landscapes.find((p) => p.id === product.id) });
  assert.equal(data.markdown, null);
  assert.ok(data.report.errors.some((error) => error.includes('invalid evidence reference ev-missing')));
  const wrongCapabilityProduct = { ...products.find((p) => p.id === 'google-search'), capabilities: [{ capability_id: 'F1', support: 'supported', evidence_ids: ['SRC-NOPE'], notes: 'Search' }] };
  const badReference = compileProductSkill({ product: wrongCapabilityProduct, company: companies.google.name, dossierText: dossier('google-search'), reaReport: target.report, reaEvidence: target.evidence, landscape: landscapes.find((p) => p.id === 'google-search') });
  assert.ok(badReference.report.errors.some((error) => error.includes('invalid evidence reference SRC-NOPE')));
  const wrong = { ...target.evidence, evidence_id: 'ev_wrong' };
  const mismatch = compileProductSkill({ product: products.find((p) => p.id === 'google-search'), company: companies.google.name, dossierText: dossier('google-search'), reaReport: target.report, reaEvidence: wrong, landscape: landscapes.find((p) => p.id === 'google-search') });
  assert.ok(mismatch.report.errors.some((error) => error.includes('REA Evidence ID mismatch')));
});

test('duplicate capability IDs and duplicate generated feature IDs are rejected', () => {
  const product = { ...products.find((p) => p.id === 'google-search'), capabilities: [
    { capability_id: 'DUP', support: 'unknown', notes: 'Feature one' },
    { capability_id: 'DUP', support: 'unknown', notes: 'Feature two' },
  ] };
  const target = capture('google-search');
  const result = compileProductSkill({ product, company: companies.google.name, dossierText: dossier('google-search'), reaReport: target.report, reaEvidence: target.evidence, landscape: landscapes.find((p) => p.id === product.id) });
  assert.equal(result.report.status, 'failed');
  assert.ok(result.report.errors.some((error) => error.includes('duplicate capability ID DUP')));
  const duplicatedMarkdown = compileFromRepository('google-search').markdown.replace('## 3. Complete user workflows', '\n| `GOOGLE-SEARCH-CAP-952D4A0B` | Web crawl and indexing at web scale | UNKNOWN | None linked | Unknown |\n\n## 3. Complete user workflows');
  assert.ok(validateSkillText(duplicatedMarkdown, { product: products.find((p) => p.id === 'google-search') }).errors.some((error) => error.includes('duplicate feature ID')), validateSkillText(duplicatedMarkdown, { product: products.find((p) => p.id === 'google-search') }).errors.join('; '));
});

test('batch CLI writes all generated skills to the caller directory outside a source checkout', () => {
  const temp = mkdtempSync(join(tmpdir(), 'rae-batch-package-'));
  const packageRoot = join(temp, 'node_modules', 'rae-faang');
  const canonicalSkill = join(ROOT, 'catalog/skills/google/google-search.md');
  const canonicalBefore = readFileSync(canonicalSkill, 'utf8');
  try {
    for (const path of ['catalog', 'research', 'tools']) {
      cpSync(join(ROOT, path), join(packageRoot, path), { recursive: true });
    }
    mkdirSync(join(packageRoot, 'node_modules'), { recursive: true });
    for (const dependency of ['js-yaml', 'minimist']) {
      symlinkSync(join(ROOT, 'node_modules', dependency), join(packageRoot, 'node_modules', dependency), 'dir');
    }
    mkdirSync(join(packageRoot, 'src'), { recursive: true });
    cpSync(join(ROOT, 'src/cli.js'), join(packageRoot, 'src/cli.js'));
    cpSync(join(ROOT, 'package.json'), join(packageRoot, 'package.json'));

    const result = spawnSync(process.execPath, [join(packageRoot, 'src/cli.js'), 'skills', 'generate', '--all', '--format', 'json'], { cwd: temp, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const output = JSON.parse(result.stdout);
    assert.equal(output.summary.selected, products.length);
    assert.equal(output.summary.failed, 0);
    assert.ok(output.products.every((item) => item.status === 'generated_with_gaps'));
    assert.ok(existsSync(join(temp, 'rae-skills', 'google', 'google-search.md')), 'batch output is kept in the caller directory');
    assert.equal(readFileSync(canonicalSkill, 'utf8'), canonicalBefore, 'npm batch generation must not rewrite the source checkout');
  } finally { rmSync(temp, { recursive: true, force: true }); }
});

test('canonical skill index and site download use the shared compiler output', () => {
  const catalog = spawnSync(process.execPath, [join(ROOT, 'tools/skills-catalog.mjs'), '--check'], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(catalog.status, 0, catalog.stderr);
  const site = spawnSync(process.execPath, [join(ROOT, 'tools/site-build.mjs'), '--check'], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(site.status, 0, site.stderr);
});

test('unknown product errors do not modify an existing skill or prevent other product generation', () => {
  const temp = mkdtempSync(join(tmpdir(), 'rae-skill-'));
  const before = readFileSync(join(ROOT, 'catalog/skills/google/google-search.md'), 'utf8');
  try {
    const bad = writeProductSkill('not-a-product', join(temp, 'bad.md'));
    assert.equal(bad.report.status, 'failed');
    assert.equal(existsSync(join(temp, 'bad.md')), false);
    const good = writeProductSkill('gmail', join(temp, 'gmail.md'));
    assert.equal(good.report.status, 'generated_with_gaps');
    assert.ok(existsSync(join(temp, 'gmail.md')));
    assert.equal(readFileSync(join(ROOT, 'catalog/skills/google/google-search.md'), 'utf8'), before);
  } finally { rmSync(temp, { recursive: true, force: true }); }
});

test('repository output validates and drift is reported', () => {
  const valid = validateRepositorySkill('google-search');
  assert.equal(valid.status, 'valid', valid.errors.join('; '));
  assert.deepEqual(valid.errors, []);
});

test('packed npm CLI can generate product kits and portable skills without a source checkout', () => {
  const temp = mkdtempSync(join(tmpdir(), 'rae-package-root-'));
  const packageRoot = join(temp, 'node_modules', 'rae-faang');
  try {
    for (const path of ['catalog', 'research', 'tools']) {
      const source = join(ROOT, path);
      const destination = join(packageRoot, path);
      cpSync(source, destination, { recursive: true });
    }
    mkdirSync(join(packageRoot, 'node_modules'), { recursive: true });
    for (const dependency of ['js-yaml', 'minimist']) {
      symlinkSync(join(ROOT, 'node_modules', dependency), join(packageRoot, 'node_modules', dependency), 'dir');
    }
    const packageJson = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
    const cliFile = join(packageRoot, 'src', 'cli.js');
    const packageFile = join(packageRoot, 'package.json');
    mkdirSync(join(packageRoot, 'src'), { recursive: true });
    writeFileSync(cliFile, readFileSync(join(ROOT, 'src', 'cli.js'), 'utf8'));
    writeFileSync(packageFile, JSON.stringify(packageJson));
    const output = join(temp, 'gmail-agent');
    const kit = spawnSync(process.execPath, [cliFile, 'build', 'agent-kit', 'gmail', '--out', output], { cwd: temp, encoding: 'utf8' });
    assert.equal(kit.status, 0, kit.stderr);
    assert.ok(existsSync(join(output, 'skill.md')));
    assert.ok(existsSync(join(output, 'mcp.json')));
    const defaultProductSkill = join(temp, 'gmail.md');
    const defaultGenerate = spawnSync(process.execPath, [cliFile, 'skills', 'generate', 'gmail'], { cwd: temp, encoding: 'utf8' });
    assert.equal(defaultGenerate.status, 0, defaultGenerate.stderr);
    assert.ok(existsSync(defaultProductSkill), 'npm CLI defaults one skill to the working directory');
    assert.equal(readFileSync(defaultProductSkill, 'utf8'), compileFromRepository('gmail').markdown);
    const portable = join(temp, 'explicit-gmail.md');
    const generate = spawnSync(process.execPath, [cliFile, 'skills', 'generate', 'gmail', '--out', portable, '--format', 'json'], { cwd: temp, encoding: 'utf8' });
    assert.equal(generate.status, 0, generate.stderr);
    assert.equal(readFileSync(portable, 'utf8'), compileFromRepository('gmail').markdown);
    assert.equal(JSON.parse(generate.stdout).products[0].outputPath, portable, 'outside-package output should be reported as an absolute path');
    const shorthandOutput = join(temp, 'google-search-shorthand.md');
    const shorthand = spawnSync(process.execPath, [cliFile, 'google-search', '--out', shorthandOutput], { cwd: temp, encoding: 'utf8' });
    assert.equal(shorthand.status, 0, shorthand.stderr);
    assert.ok(existsSync(shorthandOutput), 'packed npm product-ID shorthand writes a portable Markdown file');
    assert.equal(readFileSync(shorthandOutput, 'utf8'), compileFromRepository('google-search').markdown);
    assert.equal(existsSync(join(temp, 'google-search-agent')), false, 'product-ID shorthand does not create an agent-kit directory');
    const batch = spawnSync(process.execPath, [cliFile, 'skills', 'generate', '--company', 'google'], { cwd: temp, encoding: 'utf8' });
    assert.equal(batch.status, 0, batch.stderr);
    assert.ok(existsSync(join(temp, 'rae-skills', 'google', 'gmail.md')), 'npm batches are written beneath the caller directory');
  } finally { rmSync(temp, { recursive: true, force: true }); }
});

test('existing product-id shorthand and product listing remain available', () => {
  const listed = spawnSync(process.execPath, [join(ROOT, 'src/cli.js'), 'products', 'list', '--format', 'json'], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(listed.status, 0, listed.stderr);
  assert.equal(JSON.parse(listed.stdout).length, products.length);
  const help = spawnSync(process.execPath, [join(ROOT, 'src/cli.js'), '--help'], { cwd: ROOT, encoding: 'utf8' });
  assert.equal(help.status, 0, help.stderr);
  assert.match(help.stdout, /Generate a product Markdown skill \[--out FILE\]/);
  assert.match(help.stdout, /skills generate/);
});
