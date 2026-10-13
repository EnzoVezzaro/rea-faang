#!/usr/bin/env node
/**
 * REA catalog — capture the public web surface of every catalogued product with
 * REA (https://github.com/morluto/rea) and write one markdown report per product.
 *
 * REA analyses concrete targets, not product concepts. For this catalog the only
 * target available without the vendor's binaries is each product's public
 * `official_url`, captured through REA's Playwright browser scenario provider.
 * Only publicly reachable pages are observed; no authentication is performed and
 * no access control is bypassed.
 *
 * Output:
 *   catalog/rea/<company_id>/<product_id>.md   one report per product
 *   catalog/rea/evidence/<product_id>.json     the raw REA Evidence, for provenance
 *   catalog/rea/README.md                       index + methodology
 *
 * Usage:
 *   node tools/rea-catalog.mjs                     # every product
 *   node tools/rea-catalog.mjs --company google
 *   node tools/rea-catalog.mjs --only netflix-streaming
 *   node tools/rea-catalog.mjs --limit 3
 *   node tools/rea-catalog.mjs --from evidence.json --only tensorflow   # re-render
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import minimist from 'minimist';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'catalog', 'rea');
const EVIDENCE_DIR = join(OUT_DIR, 'evidence');
const PRODUCTS_FILE = join(ROOT, 'catalog', 'products.jsonl');
const COMPANIES = JSON.parse(readFileSync(join(ROOT, 'catalog', 'companies.json'), 'utf8'));

const args = minimist(process.argv.slice(2), {
  string: ['only', 'company', 'from'],
  number: ['limit', 'timeout', 'wait'],
  boolean: ['force'],
  default: { timeout: 120, wait: 2500 },
});

const CHROME_CANDIDATES = [
  process.env.REA_CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const LANDMARKS = new Set([
  'banner',
  'main',
  'contentinfo',
  'navigation',
  'region',
  'complementary',
  'form',
  'search',
]);

function findChrome() {
  for (const path of CHROME_CANDIDATES) {
    if (existsSync(path)) return path;
  }
  return null;
}

function loadProducts() {
  let products = readFileSync(PRODUCTS_FILE, 'utf8')
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => JSON.parse(line));

  if (args.only) products = products.filter((p) => p.id === args.only);
  if (args.company) products = products.filter((p) => p.company_id === args.company);
  if (args.limit) products = products.slice(0, args.limit);
  return products.sort((a, b) => a.id.localeCompare(b.id));
}

/* ------------------------------------------------------------------ */
/* REA invocation                                                      */
/* ------------------------------------------------------------------ */

function scenarioFor(url, chromePath, waitMs) {
  return {
    browser: { mode: 'launch', executable_path: chromePath, headless: true },
    start_url: { url },
    actions: [
      { step_id: 'settle', action: 'wait_for_timeout', duration_ms: waitMs },
    ],
    capture: { at_end: ['url', 'accessibility'] },
  };
}

function capture(product, chromePath) {
  const scenarioPath = join(tmpdir(), `rea-${product.id}.json`);
  writeFileSync(scenarioPath, JSON.stringify(scenarioFor(product.official_url, chromePath, args.wait)));

  const result = spawnSync(
    'npx',
    ['-y', 'rea-agents@latest', 'capture-browser-scenario', scenarioPath, '--json'],
    { encoding: 'utf8', timeout: args.timeout * 1000, maxBuffer: 64 * 1024 * 1024 },
  );

  if (result.error) return { ok: false, error: String(result.error.message || result.error) };
  if (result.status !== 0) {
    const msg = (result.stderr || result.stdout || '').trim().split('\n').slice(-3).join(' ');
    return { ok: false, error: msg || `rea exited ${result.status}` };
  }
  try {
    return { ok: true, evidence: JSON.parse(result.stdout) };
  } catch {
    return { ok: false, error: 'could not parse REA JSON output' };
  }
}

/* ------------------------------------------------------------------ */
/* Accessibility parsing + summary                                     */
/* ------------------------------------------------------------------ */

function parseAccessibility(text) {
  const nodes = [];
  for (const line of text.split('\n')) {
    const match = line.match(/^(\s*)- (.*)$/);
    if (!match) continue;
    const depth = Math.floor(match[1].length / 2);
    const body = match[2];
    const urlMatch = body.match(/^\/url:\s*(.*)$/);
    if (urlMatch) {
      nodes.push({ depth, url: urlMatch[1].replace(/^"|"$/g, '') });
      continue;
    }
    const roleMatch = body.match(/^([a-zA-Z_-]+)(?: "((?:[^"\\]|\\.)*)")?/);
    if (!roleMatch) continue;
    nodes.push({ depth, role: roleMatch[1], name: roleMatch[2] ?? null });
  }
  // Attach each node's first /url child.
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].role === 'link' && nodes[i].name) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[j].depth <= nodes[i].depth) break;
        if (nodes[j].url) { nodes[i].url = nodes[j].url; break; }
      }
    }
  }
  return nodes;
}

function summarize(evidence, product) {
  const normalized = evidence.normalized_result || {};
  const steps = normalized.steps || [];
  const last = steps[steps.length - 1] || {};
  const artifacts = last.artifacts || {};

  const urlValue = artifacts.url?.value;
  const finalUrl = typeof urlValue === 'string' ? urlValue : urlValue?.url || product.official_url;

  const accText = artifacts.accessibility?.value?.text || '';
  const nodes = parseAccessibility(accText);
  const seen = new Set();
  const headings = [];
  const landmarks = [];
  const links = [];
  const buttons = [];
  for (const node of nodes) {
    if (node.role === 'heading' && node.name && !seen.has(`h:${node.name}`)) {
      seen.add(`h:${node.name}`);
      headings.push(node.name);
    } else if (LANDMARKS.has(node.role)) {
      landmarks.push({ role: node.role, name: node.name });
    } else if (node.role === 'link' && node.name && node.url) {
      const key = `${node.name}|${node.url}`;
      if (!seen.has(key)) { seen.add(key); links.push({ name: node.name, url: node.url }); }
    } else if (node.role === 'button' && node.name) {
      buttons.push(node.name);
    }
  }

  return {
    evidenceId: evidence.evidence_id || null,
    confidence: evidence.confidence || 'unknown',
    provider: evidence.provider ? `${evidence.provider.id} v${evidence.provider.version}` : 'unknown',
    browser: normalized.browser ? `${normalized.browser.product} ${normalized.browser.version}` : 'unknown',
    startOrigin: normalized.scenario?.start_origin || null,
    completeness: normalized.completeness?.status || 'unknown',
    limitations: evidence.limitations || [],
    finalUrl,
    title: headings[0] || product.name,
    headings: headings.slice(0, 25),
    landmarks: landmarks.slice(0, 15),
    links: links.slice(0, 40),
    buttons: [...new Set(buttons)].slice(0, 20),
    accessibilityBytes: artifacts.accessibility?.value?.bytes ?? null,
  };
}

/* ------------------------------------------------------------------ */
/* Markdown rendering                                                  */
/* ------------------------------------------------------------------ */

function renderReport(product, summary, status, error) {
  const company = COMPANIES[product.company_id]?.name || product.company_id;
  const now = new Date().toISOString();
  const lines = [];

  lines.push(`# REA web-surface report — ${product.name} (\`${product.id}\`)`, '');
  lines.push(
    status === 'captured'
      ? `Browser capture of the public web surface of ${product.name}, recorded with REA.`
      : `REA capture of the public web surface of ${product.name} did not complete.`,
    '',
  );

  lines.push('| | |', '|---|---|');
  lines.push(`| Product | ${product.name} (\`${product.id}\`) |`);
  lines.push(`| Company | ${company} |`);
  lines.push(`| Target | ${product.official_url} |`);
  if (status === 'captured') {
    lines.push(`| Resolved URL | ${summary.finalUrl} |`);
    lines.push(`| Page title | ${summary.title} |`);
  }
  lines.push(`| Captured | ${now} |`);
  lines.push(`| Status | ${status === 'captured' ? 'captured' : 'failed'} |`);
  if (summary?.evidenceId) lines.push(`| REA Evidence ID | \`${summary.evidenceId}\` |`);
  if (summary?.provider) lines.push(`| REA provider | ${summary.provider} |`);
  if (summary?.browser) lines.push(`| Browser | ${summary.browser} |`);
  if (summary?.confidence) lines.push(`| Confidence | ${summary.confidence} |`);
  if (summary?.completeness) lines.push(`| Completeness | ${summary.completeness} |`);
  lines.push('');

  lines.push('## Method', '');
  lines.push(
    'REA\'s `capture-browser-scenario` provider launched a headless Chrome profile,',
    'navigated to the product\'s public `official_url`, waited for the page to settle,',
    'and captured the final URL and the accessibility outline. Analysis runs locally;',
    'only publicly reachable pages are observed. No authentication is attempted and no',
    'access control is bypassed.',
    '',
  );
  lines.push('```json');
  lines.push(JSON.stringify(scenarioFor(product.official_url, '<chrome>', args.wait), null, 2));
  lines.push('```', '');

  if (status !== 'captured') {
    lines.push('## Result', '', `Capture failed: \`${error || 'unknown error'}\``, '');
    lines.push(
      'The page may be unavailable, geo-restricted, require authentication, or need a',
      'longer settle window. Re-run with `--only ' + product.id + ' --wait 6000`.',
      '',
    );
    return lines.join('\n');
  }

  lines.push('## Observations', '');
  lines.push('### Headings', '');
  if (summary.headings.length) for (const h of summary.headings) lines.push(`- ${h}`);
  else lines.push('_No headings exposed._');
  lines.push('');

  lines.push('### Landmarks', '');
  if (summary.landmarks.length) {
    for (const l of summary.landmarks) lines.push(`- ${l.role}${l.name ? `: ${l.name}` : ''}`);
  } else lines.push('_No landmarks exposed._');
  lines.push('');

  lines.push('### Links', '');
  if (summary.links.length) {
    for (const link of summary.links) lines.push(`- [${link.name}](${link.url})`);
  } else lines.push('_No links exposed._');
  lines.push('');

  if (summary.buttons.length) {
    lines.push('### Controls', '');
    for (const b of summary.buttons) lines.push(`- button: ${b}`);
    lines.push('');
  }

  lines.push('## Limitations (from REA)', '');
  if (summary.limitations.length) for (const l of summary.limitations) lines.push(`- ${l}`);
  else lines.push('_None reported._');
  lines.push('');

  lines.push('## Provenance', '');
  lines.push(`- Raw REA Evidence: \`catalog/rea/evidence/${product.id}.json\``);
  lines.push(`- Evidence ID: \`${summary.evidenceId}\``);
  lines.push(`- Accessibility outline: ${summary.accessibilityBytes ?? 'n/a'} bytes`);
  lines.push('- Tool: REA (`rea-agents`) — https://github.com/morluto/rea');
  lines.push('');

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/* Index                                                               */
/* ------------------------------------------------------------------ */

function writeIndex(entries) {
  const byCompany = {};
  for (const entry of entries) (byCompany[entry.companyId] ||= []).push(entry);

  const captured = entries.filter((e) => e.status === 'captured').length;
  const lines = [];
  lines.push('# REA catalog', '');
  lines.push(
    'Reverse-engineering observations of each catalogued product\'s **public web surface**,',
    'captured with [REA](https://github.com/morluto/rea) (`rea-agents`). One report per',
    'product, plus the raw REA Evidence for provenance.',
    '',
  );
  lines.push(`- Products captured: **${captured}/${entries.length}**`);
  lines.push(`- Generated: ${new Date().toISOString()}`);
  lines.push('- Regenerate: `npm run rea:catalog`');
  lines.push('');
  lines.push('## Method and scope', '');
  lines.push(
    'REA analyses concrete targets (binaries, app bundles, websites), not product',
    'concepts. Without the vendors\' artifacts, the only available target is each',
    'product\'s public `official_url`, observed through REA\'s Playwright browser',
    'scenario provider: a headless browser loads the public page and REA returns the',
    'final URL and accessibility outline as Evidence. **Public, unauthenticated pages',
    'only** — no login, no access-control bypass. See the repository\'s',
    '[Responsible Reverse Engineering](../README.md) policy.',
    '',
  );
  lines.push('## Products', '');
  for (const [companyId, list] of Object.entries(byCompany).sort()) {
    const company = COMPANIES[companyId]?.name || companyId;
    lines.push(`### ${company} (\`${companyId}\`)`, '');
    lines.push('| Product | Target | Status | Evidence | Report |');
    lines.push('|---|---|---|---|---|');
    for (const e of list.sort((a, b) => a.id.localeCompare(b.id))) {
      const evidence = e.evidenceId ? `\`${e.evidenceId.slice(0, 12)}…\`` : '—';
      const report = `[report](${companyId}/${e.id}.md)`;
      lines.push(`| ${e.name} | ${e.target} | ${e.status} | ${evidence} | ${report} |`);
    }
    lines.push('');
  }
  lines.push('---', '');
  lines.push(
    '_Generated by `tools/rea-catalog.mjs`. Re-running REA on a live page produces new',
    'Evidence; comparisons belong in a separate, deliberate pass._',
    '',
  );
  writeFileSync(join(OUT_DIR, 'README.md'), lines.join('\n'));
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

function main() {
  const products = loadProducts();
  if (!products.length) {
    console.error('No products matched.');
    process.exit(1);
  }

  mkdirSync(EVIDENCE_DIR, { recursive: true });
  const chrome = findChrome();

  // Re-render from an existing evidence file: no capture.
  if (args.from) {
    const product = products[0];
    const evidence = JSON.parse(readFileSync(args.from, 'utf8'));
    const summary = summarize(evidence, product);
    writeReportFile(product, summary, 'captured', null, evidence);
    console.log(`rendered ${product.id} from ${args.from}`);
    return;
  }

  if (!chrome) {
    console.error('No Chrome-family browser found. Set REA_CHROME_PATH to an executable.');
    process.exit(1);
  }
  console.log(`Chrome: ${chrome}`);
  console.log(`Capturing ${products.length} product(s)…\n`);

  const entries = [];
  for (const product of products) {
    process.stdout.write(`  ${product.id} … `);
    const result = capture(product, chrome);
    if (result.ok) {
      const summary = summarize(result.evidence, product);
      writeReportFile(product, summary, 'captured', null, result.evidence);
      entries.push({ id: product.id, name: product.name, companyId: product.company_id, target: product.official_url, status: 'captured', evidenceId: summary.evidenceId });
      console.log(`captured (${summary.links.length} links, ev ${String(summary.evidenceId).slice(0, 12)}…)`);
    } else {
      writeReportFile(product, null, 'failed', result.error, null);
      entries.push({ id: product.id, name: product.name, companyId: product.company_id, target: product.official_url, status: 'failed', evidenceId: null });
      console.log(`FAILED — ${result.error}`);
    }
  }

  // Merge with existing entries so partial runs keep a complete index.
  const index = loadExistingIndex();
  for (const e of entries) index.set(e.id, e);
  writeIndex([...index.values()]);
  console.log(`\nWrote ${entries.length} report(s); index at catalog/rea/README.md`);
}

function writeReportFile(product, summary, status, error, evidence) {
  const dir = join(OUT_DIR, product.company_id);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${product.id}.md`), renderReport(product, summary, status, error));
  if (evidence) {
    writeFileSync(join(EVIDENCE_DIR, `${product.id}.json`), JSON.stringify(evidence, null, 2) + '\n');
  }
}

function loadExistingIndex() {
  const map = new Map();
  try {
    for (const company of Object.keys(COMPANIES)) {
      const dir = join(OUT_DIR, company);
      if (!existsSync(dir)) continue;
      for (const file of readdirSync(dir)) {
        if (!file.endsWith('.md')) continue;
        const id = file.slice(0, -3);
        // retain prior entry metadata by reading the report header
        const text = readFileSync(join(dir, file), 'utf8');
        const name = text.match(/^# REA web-surface report — (.*) \(`/m)?.[1] || id;
        const target = text.match(/^\| Target \| (.*) \|$/m)?.[1] || '';
        const status = text.match(/^\| Status \| (\w+) \|$/m)?.[1] || 'failed';
        const evidenceId = text.match(/^\| REA Evidence ID \| `([^`]+)` \|$/m)?.[1] || null;
        map.set(id, { id, name, companyId: company, target, status, evidenceId });
      }
    }
  } catch { /* index rebuild is best effort */ }
  return map;
}

main();
