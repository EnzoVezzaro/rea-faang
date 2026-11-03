#!/usr/bin/env node

// Generate Markdown skill drafts for product-level candidates that are not yet
// in the canonical catalog. These drafts are intentionally pending: they are
// instructions for the future REA analysis, not researched product claims.

import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = join(ROOT, 'catalog', 'manifests', 'faang-expanded-candidates.json');
const OUT = join(ROOT, 'catalog', 'pending-skills');

function parseArgs(argv) {
  const args = { check: false };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--check') args.check = true;
    else if (argv[i] === '--help' || argv[i] === '-h') args.help = true;
    else throw new Error(`Unknown argument: ${argv[i]}`);
  }
  return args;
}

function load() {
  const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
  const rows = manifest.products || manifest.candidates || [];
  if (!Array.isArray(rows)) throw new Error('candidate manifest has no products array');
  return rows.filter((row) => row.inventory_status === 'candidate');
}

function skill(row) {
  const source = row.source_catalogs?.length ? row.source_catalogs : [row.source_catalog];
  const sources = source.filter(Boolean).map((url) => `- ${url}`).join('\n') || '- Pending official source';
  return `---
name: ${row.id}
description: Pending reverse-engineering skill for ${row.name} (${row.company_id}); use official evidence and build an independent equivalent only after validation.
company_id: ${row.company_id}
inventory_status: candidate
research_status: pending
---

# ${row.name} — pending RAE skill

This is a generated pending skill draft. It is not a completed research dossier
and does not claim that the target's behavior, API, implementation or open-source
coverage has been verified.

## Target identity

- **Product ID:** \`${row.id}\`
- **Company:** \`${row.company_id}\`
- **Product type:** \`${row.product_type}\`
- **Official URL candidate:** ${row.official_url || 'Pending'}
- **Inventory status:** \`candidate\`
- **Research status:** \`pending\`

## Reverse-engineering workflow

1. Read the project instructions and confirm that the target is public or explicitly authorized.
2. Use the official URLs below as the starting scope for Reverse Engineer Anything.
3. Record observed workflows, inputs, outputs, states, errors, permissions, limits and unknowns.
4. Separate observation, inference and proposed independent design.
5. Investigate open-source alternatives and record repository, license, coverage and limitations.
6. Produce an independent implementation plan; do not copy proprietary source, protected assets or private data.
7. Build and test the equivalent implementation in the user's project, not in the RAE FAANG catalog repository.
8. Update the canonical catalog, dossier, REA report and generated skill only after evidence and review.

## Official source candidates

${sources}

## Open-source alternatives

No alternative has been verified for this pending candidate. Search by the
product's user-facing job, then record candidates and evidence before choosing
reuse, integration, extension, new build or further research.

## Acceptance criteria

- Stable product identity and official source are verified.
- REA evidence, limitations, unknowns and provenance are recorded.
- Alternatives are assessed with license and coverage notes.
- The generated canonical skill contains actionable analysis, build and test instructions.
- Repository validation and product-specific checks pass.

## Promotion rule

Do not mark this entry researched or treat this draft as a verified product
implementation. Promote it only after the dossier, REA evidence, alternatives
assessment and generated canonical skill are accepted.
`;
}

function expectedFiles(rows) {
  return rows.map((row) => join(OUT, row.company_id, `${row.id}.md`));
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log('Usage: node tools/pending-catalog.mjs [--check]');
    return;
  }
  const rows = load();
  const files = expectedFiles(rows);
  const stale = files.filter((file) => !existsSync(file));
  if (args.check) {
    if (stale.length) throw new Error(`${stale.length} pending skill drafts missing`);
    console.log(`pending-catalog: ${rows.length} drafts present`);
    return;
  }
  for (const [index, row] of rows.entries()) {
    const file = files[index];
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, skill(row), 'utf8');
  }
  const index = join(OUT, 'README.md');
  const lines = rows
    .sort((a, b) => a.company_id.localeCompare(b.company_id) || a.name.localeCompare(b.name))
    .map((row) => `| [${row.name}](${row.company_id}/${row.id}.md) | \`${row.id}\` | ${row.company_id} | pending | ${row.official_url || '—'} |`)
    .join('\n');
  writeFileSync(index, `# Pending RAE FAANG skill drafts\n\nGenerated from \`catalog/manifests/faang-expanded-candidates.json\`. These ${rows.length} entries are candidates, not researched canonical products.\n\n| Product | ID | Company | Research | Official URL |\n|---|---|---|---|---|\n${lines}\n`, 'utf8');
  console.log(`pending-catalog: wrote ${rows.length} Markdown drafts`);
}

main();
