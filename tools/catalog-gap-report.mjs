#!/usr/bin/env node

// Deterministic reconciliation of the canonical catalog (catalog/products.jsonl)
// against the expanded candidate inventory
// (catalog/manifests/faang-expanded-candidates.json).
//
// It writes:
//   catalog/manifests/faang-gap-report.json   machine-readable counts and findings
//   docs/catalog-gap-report.md                the same findings as a reviewable page
//
// No timestamps and no network access: identical inputs always produce identical
// output. `--check` compares instead of writing and exits 1 on drift.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = join(ROOT, 'catalog', 'manifests', 'faang-expanded-candidates.json');
const PRODUCTS = join(ROOT, 'catalog', 'products.jsonl');
const REPORT_JSON = join(ROOT, 'catalog', 'manifests', 'faang-gap-report.json');
const REPORT_MD = join(ROOT, 'docs', 'catalog-gap-report.md');

const COMPANY_ORDER = ['google', 'apple', 'amazon', 'amazon_aws', 'meta', 'netflix', 'microsoft'];
const LANES = [
  { lane: 1, name: 'Google', companies: ['google'] },
  { lane: 2, name: 'Amazon/AWS', companies: ['amazon', 'amazon_aws'] },
  { lane: 3, name: 'Microsoft', companies: ['microsoft'] },
  { lane: 4, name: 'Apple/Meta/Netflix', companies: ['apple', 'meta', 'netflix'] },
];
const REQUIRED_FIELDS = ['id', 'company_id', 'name', 'product_type', 'official_url', 'source_catalog', 'inventory_status', 'research_status'];
const ID_PATTERN = /^[a-z][a-z0-9-]*$/;

const read = (path) => readFileSync(path, 'utf8');
const jsonl = (path) => read(path).split(/\r?\n/).filter((row) => row.trim()).map((row) => JSON.parse(row));
const rows = (manifest) => [...(manifest.products || []), ...(manifest.duplicates || []), ...(manifest.noise || [])];

function auditRow(row) {
  const problems = [];
  for (const field of REQUIRED_FIELDS) {
    if (!Object.prototype.hasOwnProperty.call(row, field)) problems.push(`missing ${field}`);
  }
  if (row.id && !ID_PATTERN.test(row.id)) problems.push('id is not lowercase kebab-case');
  if (row.company_id && !COMPANY_ORDER.includes(row.company_id)) problems.push(`unknown company_id ${row.company_id}`);
  if (row.inventory_status && !['verified', 'candidate', 'duplicate', 'navigation', 'retired'].includes(row.inventory_status)) problems.push(`unknown inventory_status ${row.inventory_status}`);
  if (row.research_status && !['pending', 'in_progress', 'researched', 'retired'].includes(row.research_status)) problems.push(`unknown research_status ${row.research_status}`);
  if (row.inventory_status !== 'verified' && row.inventory_status !== 'retired' && row.research_status !== 'pending') problems.push('unresearched row is not pending');
  return problems;
}

function buildReport() {
  const manifest = JSON.parse(read(MANIFEST));
  const canonical = jsonl(PRODUCTS);
  const all = rows(manifest);

  const fieldProblems = [];
  for (const row of all) {
    const problems = auditRow(row);
    if (problems.length) fieldProblems.push({ id: row.id ?? '(no id)', problems });
  }

  const canonicalIds = new Set(canonical.map((row) => row.id));
  const byId = new Map();
  for (const row of all) {
    if (!byId.has(row.id)) byId.set(row.id, []);
    byId.get(row.id).push(row.inventory_status);
  }

  const missingFromManifest = canonical.filter((row) => !byId.has(row.id)).map((row) => ({ id: row.id, company_id: row.company_id }));
  const verifiedNotCanonical = all.filter((row) => row.inventory_status === 'verified' && !canonicalIds.has(row.id)).map((row) => ({ id: row.id, company_id: row.company_id }));
  const idCollisions = [...byId.entries()].filter(([, statuses]) => statuses.filter((status) => status !== 'duplicate').length > 1).map(([id, statuses]) => ({ id, statuses }));

  const products = manifest.products || [];
  const byCompany = COMPANY_ORDER.map((company) => {
    const rowsFor = products.filter((row) => row.company_id === company);
    const duplicates = (manifest.duplicates || []).filter((row) => row.company_id === company);
    const noise = (manifest.noise || []).filter((row) => row.company_id === company);
    return {
      company_id: company,
      canonical: canonical.filter((row) => row.company_id === company).length,
      products: rowsFor.length,
      verified: rowsFor.filter((row) => row.inventory_status === 'verified').length,
      candidates: rowsFor.filter((row) => row.inventory_status === 'candidate').length,
      retired: rowsFor.filter((row) => row.inventory_status === 'retired').length,
      duplicates: duplicates.length,
      navigation: noise.length,
      candidates_without_url: rowsFor.filter((row) => row.inventory_status === 'candidate' && !row.official_url).length,
      unclassified: rowsFor.filter((row) => row.inventory_status === 'candidate' && row.product_type === 'unclassified').length,
    };
  });

  const lanes = LANES.map((lane) => {
    const queued = products
      .filter((row) => row.inventory_status === 'candidate' && lane.companies.includes(row.company_id))
      .sort((a, b) => a.company_id.localeCompare(b.company_id) || a.name.localeCompare(b.name) || a.id.localeCompare(b.id));
    return { lane: lane.lane, name: lane.name, companies: lane.companies, queued: queued.length, first: queued.slice(0, 3).map((row) => row.id) };
  });

  const counts = {
    canonical: canonical.length,
    products: products.length,
    candidate: products.filter((row) => row.inventory_status === 'candidate').length,
    verified: products.filter((row) => row.inventory_status === 'verified').length,
    retired: products.filter((row) => row.inventory_status === 'retired').length,
    duplicates: (manifest.duplicates || []).length,
    navigation: (manifest.noise || []).length,
    rows_with_required_fields: all.length - fieldProblems.length,
    rows_with_field_problems: fieldProblems.length,
    candidates_without_url: products.filter((row) => row.inventory_status === 'candidate' && !row.official_url).length,
    candidates_unclassified: products.filter((row) => row.inventory_status === 'candidate' && row.product_type === 'unclassified').length,
  };

  return {
    schema_version: '1.0',
    scope: 'FAANG plus Microsoft, product-level public catalog',
    method: [
      'Product-level scope only: SKUs, plans, regions, API operations, model versions, documentation topics, marketplace listings and internal systems are excluded from the product count.',
      'Canonical rows are catalog/products.jsonl. Candidate rows come from catalog/manifests/faang-expanded-candidates.json, built from public first-party catalogs.',
      'Duplicates are merged by normalized name inside a company and listed separately. Navigation/editorial rows are listed separately and never counted as products.',
      'Promotion requires verified identity, a first-party product page, product-level (not SKU/plan/region/API operation), a research dossier and an alternatives entry. Unverified rows stay research_status: pending.',
      'This is a reconciliation of the documented scope, not a claim of permanent completeness: vendor catalogs change continuously.',
    ],
    counts,
    lanes,
    by_company: byCompany,
    reconciliation: {
      canonical_found_in_manifest: canonical.length - missingFromManifest.length,
      canonical_missing_from_manifest: missingFromManifest,
      verified_rows_not_canonical: verifiedNotCanonical,
      id_collisions: idCollisions,
      field_problems: fieldProblems,
    },
    promotion: {
      promoted_this_pass: 0,
      reason: 'No candidate in this pass satisfied every promotion condition; identity alone is not enough while a dossier, alternatives entry and REA evidence are missing.',
      gate: [
        'identity and official name confirmed on a first-party product page',
        'product-level row, not a SKU, plan, region, API operation, model version or documentation topic',
        'research/companies/<company>/products/<id>.md dossier with valid frontmatter',
        'tools/skills/catalog-data.mjs entry, so exactly one skill can be generated',
        'no duplicate of an existing canonical id',
      ],
    },
  };
}

function renderMarkdown(report, manifest) {
  const table = (headers, body) => [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...body.map((cells) => `| ${cells.join(' | ')} |`),
  ].join('\n');

  const companies = report.by_company.map((c) => [
    c.company_id, c.canonical, c.candidates, c.verified, c.retired, c.duplicates, c.navigation, c.candidates_without_url, c.unclassified,
  ]);

  return [
    '# Catalog gap report — FAANG plus Microsoft',
    '',
    'Generated by `node tools/catalog-gap-report.mjs` from the canonical catalog and the',
    'expanded candidate inventory. Do not edit by hand: regenerate and run the check.',
    '',
    '## What this report does and does not claim',
    '',
    ...report.method.map((line) => `- ${line}`),
    '',
    '## Counts',
    '',
    table(['Measure', 'Value'], [
      ['Canonical products', report.counts.canonical],
      ['Product-level rows in the candidate inventory', report.counts.products],
      ['Candidates awaiting review', report.counts.candidate],
      ['Canonical entries carried into the manifest', report.counts.verified],
      ['Retired canonical entries', report.counts.retired],
      ['Duplicates merged and listed separately', report.counts.duplicates],
      ['Navigation/editorial rows excluded', report.counts.navigation],
      ['Rows carrying every required field', `${report.counts.rows_with_required_fields} of ${report.counts.rows_with_required_fields + report.counts.rows_with_field_problems}`],
      ['Candidates without a resolvable official URL', report.counts.candidates_without_url],
      ['Candidates whose product type still needs review', report.counts.candidates_unclassified],
    ]),
    '',
    '## Per company',
    '',
    table(
      ['Company', 'Canonical', 'Candidates', 'Verified', 'Retired', 'Duplicates', 'Navigation', 'Candidates without URL', 'Unclassified'],
      companies,
    ),
    '',
    'Amazon, Meta and Netflix show zero candidates because this generator only scrapes',
    'first-party catalogs with a stable product index (Google, Apple, AWS documentation',
    'overview, Azure sitemap, Microsoft 365 catalog). The consumer Amazon, Meta and Netflix',
    'catalogs are listed in the scope document but not yet machine-readable, so their',
    'absence here is a **source gap**, not evidence that they have no further products.',
    '',
    '## Reconciliation with the canonical catalog',
    '',
    table(['Check', 'Result'], [
      ['Canonical entries found in the manifest', `${report.reconciliation.canonical_found_in_manifest} of ${report.counts.canonical}`],
      ['Canonical entries missing from the manifest', report.reconciliation.canonical_missing_from_manifest.length ? report.reconciliation.canonical_missing_from_manifest.map((row) => row.id).join(', ') : 'none'],
      ['Manifest rows marked verified that are not canonical', report.reconciliation.verified_rows_not_canonical.length ? report.reconciliation.verified_rows_not_canonical.map((row) => row.id).join(', ') : 'none'],
      ['Stable-id collisions', report.reconciliation.id_collisions.length ? report.reconciliation.id_collisions.map((row) => `${row.id} (${row.statuses.join('/')})`).join(', ') : 'none'],
      ['Rows violating the field contract', report.reconciliation.field_problems.length ? report.reconciliation.field_problems.map((row) => `${row.id}: ${row.problems.join('; ')}`).join('<br>') : 'none'],
    ]),
    '',
    '## Queue assignment',
    '',
    'The pending drafts are worked one document per task, one task per worker, at most',
    'four workers at a time (the documented maximum for this Header Section). Lane',
    'membership is fixed and non-overlapping; the queue order below is deterministic',
    '(company, then name, then id) so two runs assign the same document to the same lane.',
    '',
    table(['Lane', 'Companies', 'Queued documents', 'First in queue'], report.lanes.map((lane) => [
      `${lane.lane} — ${lane.name}`, lane.companies.join(', '), lane.queued, lane.first.map((id) => `\`${id}\``).join(', '),
    ])),
    '',
    `Total queued: ${report.lanes.reduce((sum, lane) => sum + lane.queued, 0)} drafts. A worker owns exactly one draft, may not edit the canonical catalog or the generated site, and returns a handoff. A draft leaves the queue only after review accepts its identity, official source, REA evidence and alternatives.`,
    '',
    '## Promotion gate',
    '',
    `Promoted in this pass: **${report.promotion.promoted_this_pass}**. ${report.promotion.reason}`,
    '',
    'A candidate becomes canonical only when all of the following hold:',
    '',
    ...report.promotion.gate.map((line) => `- ${line}`),
    '',
    'Every promoted product then gets exactly one generated skill at',
    '`catalog/skills/<company_id>/<product_id>.md`, produced by',
    '`npm run skills:catalog`, with the catalog record, dossier, REA report, alternatives',
    'entry, site page and indexes generated from the same inputs. A promoted product whose',
    'dossier is incomplete keeps `research_status: pending`, and its skill reports the gaps.',
    '',
    '## Reproduce',
    '',
    '```bash',
    'node tools/expand-faang-inventory.mjs      # rebuild the candidate inventory (network)',
    'node tools/catalog-gap-report.mjs          # write the report',
    'node tools/catalog-gap-report.mjs --check  # verify the committed report without writing',
    'npm test && npm run validate',
    '```',
    '',
    `Manifest schema ${manifest.schema_version}; scope: ${manifest.scope}.`,
    '',
  ].join('\n');
}

const report = buildReport();
const manifest = JSON.parse(read(MANIFEST));
const markdown = renderMarkdown(report, manifest);
const json = `${JSON.stringify(report, null, 2)}\n`;

if (process.argv.includes('--check')) {
  const drift = [];
  if (!existsSync(REPORT_JSON) || read(REPORT_JSON) !== json) drift.push('catalog/manifests/faang-gap-report.json');
  if (!existsSync(REPORT_MD) || read(REPORT_MD) !== markdown) drift.push('docs/catalog-gap-report.md');
  if (drift.length) {
    console.error(`gap-report: drift in ${drift.join(', ')} — run node tools/catalog-gap-report.mjs`);
    process.exit(1);
  }
  console.log(`gap-report: up to date (${report.counts.canonical} canonical, ${report.counts.candidate} candidates)`);
} else {
  writeFileSync(REPORT_JSON, json);
  writeFileSync(REPORT_MD, markdown);
  console.log(`gap-report: wrote catalog/manifests/faang-gap-report.json and docs/catalog-gap-report.md (${report.counts.canonical} canonical, ${report.counts.candidate} candidates)`);
}
