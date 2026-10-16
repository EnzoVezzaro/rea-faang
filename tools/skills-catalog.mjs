#!/usr/bin/env node
// Generate one skill-structured markdown file per catalogued product, plus the
// catalog index. Source of product facts: `catalog/products.jsonl` (identity).
// Source of the open-source landscape: `tools/skills/catalog-data.mjs` (curated,
// with the pages consulted during the open-source search).
//
// Usage:
//   node tools/skills-catalog.mjs              # write every skill + index
//   node tools/skills-catalog.mjs --check      # verify only, exit 1 on drift
//   node tools/skills-catalog.mjs --company google
//   node tools/skills-catalog.mjs --index-only

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS } from './skills/catalog-data.mjs';
import { validateRepositorySkill, writeProductSkill } from './product-skill-generator.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'catalog', 'skills');
const STATUSES = ['available', 'partial', 'pending'];
const STATUS_LABEL = { available: 'mature alternative listed', partial: 'partial alternative coverage', pending: 'no verified alternative' };

function parseArgs(argv) {
  const args = { company: null, check: false, indexOnly: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--company') args.company = argv[++i];
    else if (a === '--check') args.check = true;
    else if (a === '--index-only') args.indexOnly = true;
    else if (a === '--help' || a === '-h') args.help = true;
    else { console.error(`Unknown argument: ${a}`); process.exit(2); }
  }
  return args;
}

function readJsonl(path) {
  return readFileSync(path, 'utf8')
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l));
}

function loadCatalog() {
  const products = readJsonl(join(ROOT, 'catalog', 'products.jsonl'));
  const companies = JSON.parse(readFileSync(join(ROOT, 'catalog', 'companies.json'), 'utf8'));
  return { products, companies };
}

function skillFile(product, data, companyName) {
  const status = STATUS_LABEL[data.status];
  const altNames = data.alternatives.map((a) => a.name);
  const alts = data.alternatives.length
    ? data.alternatives
        .map(
          (a) =>
            `| [${a.name}](${a.url}) | ${a.license} | ${a.covers} | ${a.note} |`,
        )
        .join('\n')
    : '| — | — | _No open-source alternative verified._ | — |';

  // NB: a plain YAML scalar may not contain ": " — keep the description free of
  // colon-space so the frontmatter always parses (verified by a test).
  const skillDescription =
    `Coding-agent build skill for ${data.name} (${companyName}). Research the product, assess open-source projects, then build and verify it in the user's project. Alternative coverage is ${status}` +
    (altNames.length ? `; candidates include ${altNames.slice(0, 3).join(', ')}${altNames.length > 3 ? ', and more' : ''}.` : '.');
  const sources = publicSources(data, data.alternatives).join('\n');
  const caps = data.capabilities.map((c) => `- ${c}`).join('\n');
  const expandedDescription = productDescription(data);
  const instructions = agentInstructions({ ...data, research_status: product.research_status });

  return `---
name: ${data.id}
description: ${skillDescription}
---

# ${data.name} (\`${data.id}\`)

| | |
|---|---|
| **Company** | ${companyName} (\`${data.company_id}\`) |
| **Product type** | \`${data.product_type}\` |
| **Categories** | ${data.categories.map((c) => `\`${c}\``).join(', ')} |
| **Official URL** | ${data.official_url} |
| **Alternative coverage** | **${status}** |

## Product description

${expandedDescription}

## Core capabilities

${caps}

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
${alts}

## Gap

${data.gap}

## Verdict

${data.verdict}

${instructions}

## Sources

${sources}

## Provenance

- Catalog record: [\`catalog/products.jsonl\`](../../products.jsonl) (\`${data.id}\`)
- Research dossier: [\`research/companies/${data.company_id}/products/${data.id}.md\`](../../../research/companies/${data.company_id}/products/${data.id}.md)
- REA web-surface report: [\`catalog/rea/${data.company_id}/${data.id}.md\`](../../rea/${data.company_id}/${data.id}.md)
`;
}

function indexFile(products, dataById, companies) {
  const byCompany = new Map();
  for (const p of products) {
    if (!byCompany.has(p.company_id)) byCompany.set(p.company_id, []);
    byCompany.get(p.company_id).push(p);
  }

  const counts = { available: 0, partial: 0, pending: 0 };
  for (const p of products) counts[dataById.get(p.id).status]++;

  const sections = [];
  for (const [companyId, list] of [...byCompany.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const companyName = companies[companyId]?.name ?? companyId;
    const rows = list
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((p) => {
        const d = dataById.get(p.id);
        const best = d.alternatives[0]?.name ?? '—';
        return `| [${d.name}](${companyId}/${p.id}.md) | \`${p.id}\` | ${STATUS_LABEL[d.status]} | ${best} |`;
      })
      .join('\n');
    sections.push(
      `### ${companyName} (\`${companyId}\`)\n\n` +
        `| Product | ID | Alternative coverage | Lead alternative |\n|---|---|---|---|\n${rows}`,
    );
  }

  return `# Open-source skills catalog

One coding-agent build skill per catalogued FAANG product. Give the product's
Markdown file to your agent in your project; it provides product context,
research, reuse/build guidance and verification steps. The coverage counts below
describe alternative research only, not whether a product can be built.

- **${counts.available} mature alternatives listed** — a suitable open-source project is a candidate to evaluate.
- **${counts.partial} partial alternative coverage** — projects cover some needs; review the documented gaps.
- **${counts.pending} with no verified alternative** — ask your agent to assess current projects and build in your project.

Regenerate with \`npm run skills:catalog\` (or \`node tools/skills-catalog.mjs\`),
and verify without writing with \`node tools/skills-catalog.mjs --check\`.

## Method

Each product's dossier and REA web-surface report give the identity and
capabilities; the open-source landscape was found by searching the web for
existing open-source alternatives, and the pages consulted are listed under
**Sources** in each file. Licence identifiers are as reported by each project
and should be re-verified before relying on them. This catalog is a map of the
landscape, not legal advice.

## Products

${sections.join('\n\n')}

## Status legend

| Status | Meaning |
|---|---|
| \`available\` | A mature open-source project covers the product's core function and can be self-hosted or run locally. |
| \`partial\` | Open-source coverage exists but leaves a material gap: scale, a proprietary service plane, licensed content/IP, or hardware. |
| \`pending\` | This catalog has not verified a suitable open-source project. The product skill still guides your agent to assess projects and build in your project. |

## Layout

\`\`\`
catalog/skills/
├── README.md                    # this index
└── <company_id>/<product_id>.md # one skill-structured file per product
\`\`\`

Generated by [\`tools/skills-catalog.mjs\`](../../tools/skills-catalog.mjs) from
[\`tools/skills/catalog-data.mjs\`](../../tools/skills/catalog-data.mjs) and
\`catalog/products.jsonl\`. Do not edit the generated files by hand.
`;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(`Usage: node tools/skills-catalog.mjs [--check] [--company ID] [--index-only]`);
    return;
  }

  const { products, companies } = loadCatalog();
  const dataById = new Map(PRODUCTS.map((p) => [p.id, p]));

  // Integrity: the curated data must cover exactly the catalog, and each entry
  // must be well-formed. This is what keeps the two in step.
  const problems = [];
  const catalogIds = new Set(products.map((p) => p.id));
  for (const p of products) {
    const d = dataById.get(p.id);
    if (!d) { problems.push(`no open-source data for catalog product: ${p.id}`); continue; }
    if (d.company_id !== p.company_id) problems.push(`${p.id}: company_id mismatch (${d.company_id} != ${p.company_id})`);
    if (!STATUSES.includes(d.status)) problems.push(`${p.id}: bad status "${d.status}"`);
    if (!d.alternatives.length && d.status !== 'pending') problems.push(`${p.id}: status ${d.status} but no alternatives listed`);
    if (!d.sources.length) problems.push(`${p.id}: no sources`);
  }
  for (const d of PRODUCTS) {
    if (!catalogIds.has(d.id)) problems.push(`open-source data for unknown product: ${d.id}`);
  }
  const dup = PRODUCTS.map((p) => p.id).filter((id, i, a) => a.indexOf(id) !== i);
  for (const id of new Set(dup)) problems.push(`duplicate data entry: ${id}`);

  if (problems.length) {
    console.error('skills-catalog: data integrity errors:');
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }

  const selected = args.company ? products.filter((p) => p.company_id === args.company) : products;
  if (args.company && !selected.length) {
    console.error(`skills-catalog: unknown company ID "${args.company}"`);
    process.exit(1);
  }

  if (!args.indexOnly) {
    for (const p of selected) {
      const file = join(OUT_DIR, p.company_id, `${p.id}.md`);
      if (args.check) {
        const result = validateRepositorySkill(p.id);
        if (result.status !== 'valid') {
          console.error(`skills-catalog: ${p.id}: ${result.errors.join('; ')}`);
          process.exitCode = 1;
        }
      } else {
        const result = writeProductSkill(p.id);
        if (!result.markdown || result.report.errors.length) {
          console.error(`skills-catalog: ${p.id}: ${result.report.errors.join('; ') || 'generation failed'}`);
          process.exitCode = 1;
        }
      }
    }
  }

  if (!args.company) {
    const content = indexFile(products, dataById, companies);
    const file = join(OUT_DIR, 'README.md');
    if (args.check) {
      const current = existsSync(file) ? readFileSync(file, 'utf8') : null;
      if (current !== content) {
        console.error(`skills-catalog: drift: ${file}`);
        process.exitCode = 1;
      }
    } else {
      mkdirSync(OUT_DIR, { recursive: true });
      writeFileSync(file, content);
    }
  }

  if (args.check) {
    if (!process.exitCode) console.log(`skills-catalog: up to date (${selected.length} skill files + index)`);
    return;
  }

  const written = args.indexOnly ? 0 : selected.length;
  console.log(`skills-catalog: wrote ${written} skill file(s)` + (args.company ? ` for ${args.company}` : ' and the index'));
}

main();
