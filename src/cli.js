#!/usr/bin/env node
/**
 * RAE — FAANG Product Intelligence CLI
 *
 * Deterministic commands for catalog validation, research coverage,
 * gap detection, and opportunity reporting. AI discovers and proposes;
 * this CLI validates, reconciles, and reports.
 */

import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import minimist from 'minimist';
import { spawnSync } from 'node:child_process';
import yaml from 'js-yaml';
import { fileURLToPath as toPath } from 'node:url';

const __filename = toPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// The CLI is data-bound: it reads the same catalog, research and skills files
// whether it runs from a git clone or from the published npm package, which
// bundles those directories. See `files` in package.json.
const PKG = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));

// --- Constants ---
const CATALOG_DIR = join(__dirname, '..', 'catalog');
const RESEARCH_DIR = join(__dirname, '..', 'research');
const OPPORTUNITIES_DIR = join(__dirname, '..', 'opportunities');
const PRODUCTS_DIR = join(__dirname, '..', 'products');
const SCHEMA_DIR = join(CATALOG_DIR, 'schema');

const PRODUCT_SCHEMA = jsonSchema(SCHEMA_DIR, 'product.schema.json');
const COMPANY_SCHEMA = jsonSchema(SCHEMA_DIR, 'company.schema.json');
const ALTERNATIVE_SCHEMA = jsonSchema(SCHEMA_DIR, 'alternative.schema.json');
const EVIDENCE_SCHEMA = jsonSchema(SCHEMA_DIR, 'evidence.schema.json');

// --- Utility ---

function jsonSchema(schemaDir, name) {
  try {
    return JSON.parse(readFileSync(join(schemaDir, name), 'utf8'));
  } catch {
    return null;
  }
}

function loadJsonl(filePath) {
  const content = readFileSync(filePath, 'utf8');
  return content
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      try { return JSON.parse(line); } catch { return null; }
    })
    .filter(Boolean);
}

function loadYamlFrontmatter(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  try {
    return yaml.load(match[1]);
  } catch {
    return null;
  }
}

function extractBody(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const match = content.match(/^---\n[\s\S]*?\n---\n([\s\S]*)/);
  return match ? match[1].trim() : content.trim();
}

function resolveProductResearchFile(productId) {
  // research/companies/{company}/products/{product-id}.md
  // We need to find which company dir contains this file
  const companiesDir = join(RESEARCH_DIR, 'companies');
  for (const company of readdirSync(companiesDir, { withFileTypes: true })) {
    if (!company.isDirectory()) continue;
    const productFile = join(companiesDir, company.name, 'products', `${productId}.md`);
    try {
      if (statSync(productFile).isFile()) return productFile;
    } catch {}
  }
  return null;
}

function resolveResearchFileToProduct(filePath) {
  const fm = loadYamlFrontmatter(filePath);
  return fm && fm.id ? fm.id : null;
}

// --- Schema Validation ---

function validateAgainstSchema(record, schema, path = '') {
  const errors = [];
  if (!schema || schema.type !== 'object') return errors;

  // Required fields
  const required = schema.required || [];
  for (const field of required) {
    if (record[field] === undefined || record[field] === null) {
      errors.push(`${path || ''}${field}: required field missing`);
    }
  }

  // Enum validation
  for (const [key, prop] of Object.entries(schema.properties || {})) {
    if (!prop.enum) continue;
    const val = record[key];
    if (val !== undefined && val !== null && !prop.enum.includes(val)) {
      errors.push(`${path || ''}${key}: invalid enum value "${val}", expected one of [${prop.enum.join(', ')}]`);
    }
  }

  // Pattern validation
  for (const [key, prop] of Object.entries(schema.properties || {})) {
    if (!prop.pattern) continue;
    const val = record[key];
    if (val !== undefined && val !== null) {
      const regex = new RegExp(`^${prop.pattern}$`);
      if (typeof val === 'string' && !regex.test(val)) {
        errors.push(`${path || ''}${key}: value "${val}" does not match pattern ${prop.pattern}`);
      }
    }
  }

  // URI format validation
  for (const [key, prop] of Object.entries(schema.properties || {})) {
    if (prop.format === 'uri' || prop.format === 'date-time' || prop.format === 'date') {
      const val = record[key];
      if (val !== undefined && val !== null && typeof val === 'string') {
        if (prop.format === 'uri' && !isValidUri(val)) {
          errors.push(`${path || ''}${key}: invalid URI "${val}"`);
        }
        if ((prop.format === 'date-time' || prop.format === 'date') && !isValidDate(val, prop.format)) {
          errors.push(`${path || ''}${key}: invalid ${prop.format} "${val}"`);
        }
      }
    }
  }

  // Nested array item validation
  for (const [key, prop] of Object.entries(schema.properties || {})) {
    if (prop.items && prop.items.$ref) {
      const refName = prop.items.$ref.replace('#/definitions/', '');
      const def = schema.definitions?.[refName];
      if (def && Array.isArray(record[key])) {
        record[key].forEach((item, idx) => {
          errors.push(...validateAgainstSchema(item, def, `${path || ''}${key}[${idx}].`));
        });
      }
    }
  }

  return errors;
}

function isValidUri(str) {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidDate(str, format) {
  if (format === 'date') {
    return /^\d{4}-\d{2}-\d{2}$/.test(str) && !isNaN(new Date(str).getTime());
  }
  if (format === 'date-time') {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(str) && !isNaN(new Date(str).getTime());
  }
  return true;
}

// --- Product Catalog Loading ---

function loadCatalog() {
  const productsFile = join(CATALOG_DIR, 'products.jsonl');
  return loadJsonl(productsFile);
}

function loadCompanies() {
  const companiesFile = join(CATALOG_DIR, 'companies.json');
  try {
    return JSON.parse(readFileSync(companiesFile, 'utf8'));
  } catch {
    return {};
  }
}

// --- Commands ---

function cmdProductsList(args) {
  const products = loadCatalog();
  const companyFilter = args.company;
  const statusFilter = args.status;

  let filtered = products;
  if (companyFilter) {
    filtered = filtered.filter(p => p.company_id === companyFilter);
  }
  if (statusFilter) {
    filtered = filtered.filter(p => p.research_status === statusFilter);
  }

  // Stable sort by ID
  filtered.sort((a, b) => a.id.localeCompare(b.id));

  if (args.format === 'json') {
    console.log(JSON.stringify(filtered, null, 2));
  } else {
    const companies = loadCompanies();
    for (const p of filtered) {
      const company = companies[p.company_id]?.name || p.company_id;
      console.log(`${p.id} | ${company} | ${p.name} | ${p.research_status} | ${p.product_type}`);
    }
  }
}

function cmdProductsShow(args) {
  const products = loadCatalog();
  const productId = args._[2];
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error(`Error: product "${productId}" not found`);
    process.exit(1);
  }

  if (args.format === 'json') {
    console.log(JSON.stringify(product, null, 2));
  } else {
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Company: ${product.company_id}`);
    console.log(`Type: ${product.product_type}`);
    console.log(`Lifecycle: ${product.lifecycle_status}`);
    console.log(`Research: ${product.research_status}`);
    console.log(`Alternatives: ${product.alternative_status}`);
    console.log(`Opportunity: ${product.opportunity_status}`);
    console.log(`URL: ${product.official_url}`);
    console.log(`Docs: ${product.official_docs_url || 'N/A'}`);
    console.log(`Last researched: ${product.last_researched_at || 'never'}`);
    console.log(`Version: ${product.research_version}`);
  }
}

function cmdCompaniesList(args) {
  const companies = loadCompanies();
  const entries = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

  if (args.format === 'json') {
    console.log(JSON.stringify(entries.map(([id, c]) => ({ id, ...c })), null, 2));
  } else {
    for (const [id, c] of entries) {
      console.log(`${id} | ${c.name} | ${c.common_name || ''} | ${c.official_website || 'N/A'}`);
    }
  }
}

function cmdCompaniesShow(args) {
  const companies = loadCompanies();
  const companyId = args._[2];
  const company = companies[companyId];
  if (!company) {
    console.error(`Error: company "${companyId}" not found`);
    process.exit(1);
  }

  if (args.format === 'json') {
    console.log(JSON.stringify(company, null, 2));
  } else {
    console.log(`ID: ${company.id}`);
    console.log(`Name: ${company.name}`);
    console.log(`Common name: ${company.common_name || 'N/A'}`);
    console.log(`Website: ${company.official_website || 'N/A'}`);
    console.log(`Product directory: ${company.product_directory || 'N/A'}`);
    console.log(`Developer portal: ${company.developer_portal || 'N/A'}`);
    console.log(`Open source: ${company.open_source_organization || 'N/A'}`);
    console.log(`Engineering blog: ${company.engineering_blog || 'N/A'}`);
    console.log(`Subsidiaries: ${(company.subsidiaries || []).join(', ') || 'none'}`);
    console.log(`Last verified: ${company.date_last_verified || 'never'}`);
  }
}

// --- Research Coverage ---

function cmdResearchCoverage(args) {
  const products = loadCatalog();
  const companies = loadCompanies();
  const companyFilter = args.company;

  // Find research files
  const researchDir = join(RESEARCH_DIR, 'companies');
  const researchFiles = [];
  try {
    for (const company of readdirSync(researchDir, { withFileTypes: true })) {
      if (!company.isDirectory()) continue;
      const productsDir = join(researchDir, company.name, 'products');
      try {
        for (const file of readdirSync(productsDir)) {
          if (file.endsWith('.md')) {
            const filePath = join(productsDir, file);
            const fm = loadYamlFrontmatter(filePath);
            researchFiles.push({
              filePath,
              productId: fm?.id,
              companyId: fm?.company_id,
              researchStatus: fm?.research_status,
              isInvalid: fm === null
            });
          }
        }
      } catch {}
    }
  } catch {}

  // Build lookup
  const productIds = new Set(products.map(p => p.id));
  const researchById = new Map();
  for (const rf of researchFiles) {
    if (rf.productId) {
      if (researchById.has(rf.productId)) {
        // Duplicate - keep first
      } else {
        researchById.set(rf.productId, rf);
      }
    }
  }

  // Compute coverage
  const results = {
    company: companyFilter || null,
    companies: {},
    byCompany: {},
    total: {
      cataloged: 0,
      withResearchFile: 0,
      withValidFrontmatter: 0,
      pending: 0,
      researched: 0,
      stale: 0,
      invalid: 0,
    },
    missingRecords: [],    // Products in catalog without research file
    orphanedFiles: [],     // Research files without catalog record
    invalidFrontmatter: [],
    duplicates: [],
  };

  for (const [cid, cdata] of Object.entries(companies)) {
    if (companyFilter && cid !== companyFilter) continue;
    const companyProducts = products.filter(p => p.company_id === cid);
    const companyResearch = researchFiles.filter(rf => rf.companyId === cid);

    let cataloged = companyProducts.length;
    let withResearchFile = 0;
    let withValidFrontmatter = 0;
    let pending = 0;
    let researched = 0;
    let stale = 0;
    let invalid = 0;

    for (const p of companyProducts) {
      const rf = researchById.get(p.id);
      if (rf) {
        withResearchFile++;
        if (rf.isInvalid) {
          invalid++;
          results.invalidFrontmatter.push({ productId: p.id, filePath: rf.filePath });
        } else {
          withValidFrontmatter++;
          if (rf.researchStatus === 'pending') pending++;
          else if (rf.researchStatus === 'researched') researched++;
          else if (rf.researchStatus === 'stale') stale++;
        }
      } else {
        results.missingRecords.push({ productId: p.id, companyId: cid, name: p.name });
      }
    }

    // Orphaned files
    for (const rf of companyResearch) {
      if (rf.productId && !productIds.has(rf.productId)) {
        results.orphanedFiles.push({ filePath: rf.filePath, productId: rf.productId });
      }
    }

    const entry = {
      inScope: cataloged,
      cataloged,
      withResearchFile,
      withValidFrontmatter,
      pending,
      researched,
      stale,
      invalid,
      missing: results.missingRecords.filter(m => m.companyId === cid).length,
    };
    results.companies[cid] = entry;
    results.byCompany[cid] = entry;

    results.total.cataloged += cataloged;
    results.total.withResearchFile += withResearchFile;
    results.total.withValidFrontmatter += withValidFrontmatter;
    results.total.pending += pending;
    results.total.researched += researched;
    results.total.stale += stale;
    results.total.invalid += invalid;
  }

  // Duplicate detection
  const seen = new Map();
  for (const rf of researchFiles) {
    if (rf.productId) {
      if (seen.has(rf.productId)) {
        results.duplicates.push({ productId: rf.productId, files: [seen.get(rf.productId), rf.filePath] });
      } else {
        seen.set(rf.productId, rf.filePath);
      }
    }
  }

  if (args.format === 'json') {
    console.log(JSON.stringify(results, null, 2));
  } else {
    console.log('RESEARCH COVERAGE REPORT');
    console.log('='.repeat(40));

    for (const [cid, entry] of Object.entries(results.companies)) {
      const name = companies[cid]?.name || cid;
      console.log(`\n${name} (${cid})`);
      console.log(`  In scope:    ${entry.inScope}`);
      console.log(`  Cataloged:   ${entry.cataloged}`);
      console.log(`  w/ Research: ${entry.withResearchFile}`);
      console.log(`  Valid FM:    ${entry.withValidFrontmatter}`);
      console.log(`  Researched:  ${entry.researched}`);
      console.log(`  Pending:     ${entry.pending}`);
      console.log(`  Stale:       ${entry.stale}`);
      console.log(`  Invalid:     ${entry.invalid}`);
      if (entry.missing > 0) {
        console.log(`  Missing:     ${entry.missing}`);
      }
    }

    console.log('\n' + '='.repeat(40));
    console.log(`TOTAL: ${results.total.cataloged} cataloged, ${results.total.researched} researched, ${results.total.pending} pending, ${results.total.stale} stale, ${results.total.invalid} invalid`);

    if (results.missingRecords.length > 0) {
      console.log('\nMISSING RESEARCH FILES:');
      for (const m of results.missingRecords) {
        console.log(`  ${m.productId} (${m.companyId}): ${m.name}`);
      }
    }

    if (results.orphanedFiles.length > 0) {
      console.log('\nORPHANED RESEARCH FILES:');
      for (const o of results.orphanedFiles) {
        console.log(`  ${o.productId}: ${o.filePath}`);
      }
    }

    if (results.invalidFrontmatter.length > 0) {
      console.log('\nINVALID FRONTMATTER:');
      for (const i of results.invalidFrontmatter) {
        console.log(`  ${i.productId}: ${i.filePath}`);
      }
    }

    if (results.duplicates.length > 0) {
      console.log('\nDUPLICATE RESEARCH FILES:');
      for (const d of results.duplicates) {
        console.log(`  ${d.productId}: ${d.files.join(' AND ')}`);
      }
    }
  }
}

function cmdResearchPending(args) {
  const products = loadCatalog();
  const pending = products.filter(p => p.research_status === 'pending');
  pending.sort((a, b) => a.id.localeCompare(b.id));

  if (args.format === 'json') {
    console.log(JSON.stringify(pending, null, 2));
  } else {
    console.log(`PENDING RESEARCH: ${pending.length} products`);
    console.log('-'.repeat(40));
    for (const p of pending) {
      console.log(`  ${p.id} | ${p.company_id} | ${p.name}`);
    }
  }
}

function cmdResearchStale(args) {
  const products = loadCatalog();
  const stale = products.filter(p => p.research_status === 'stale');
  stale.sort((a, b) => a.id.localeCompare(b.id));

  if (args.format === 'json') {
    console.log(JSON.stringify(stale, null, 2));
  } else {
    console.log(`STALE RESEARCH: ${stale.length} products`);
    console.log('-'.repeat(40));
    for (const p of stale) {
      console.log(`  ${p.id} | ${p.company_id} | ${p.name} | last verified: ${p.last_verified_at || 'never'}`);
    }
  }
}

function cmdResearchValidate(args) {
  const products = loadCatalog();
  const companies = loadCompanies();
  const errors = [];
  const warnings = [];

  // Validate each product record against schema
  for (const p of products) {
    const schemaErrors = validateAgainstSchema(p, PRODUCT_SCHEMA, `product[${p.id}].`);
    for (const e of schemaErrors) {
      errors.push({ type: 'schema', productId: p.id, message: e });
    }

    // Check company_id resolves
    if (!companies[p.company_id]) {
      errors.push({ type: 'reference', productId: p.id, message: `company_id "${p.company_id}" does not resolve to a company` });
    }

    // Check research file exists and matches
    const rfPath = resolveProductResearchFile(p.id);
    if (!rfPath) {
      warnings.push({ type: 'missing_file', productId: p.id, message: `no research file found for product` });
    } else {
      const fm = loadYamlFrontmatter(rfPath);
      if (!fm) {
        errors.push({ type: 'invalid_fm', productId: p.id, message: `research file has invalid or missing frontmatter: ${rfPath}` });
      } else {
        if (fm.id !== p.id) {
          errors.push({ type: 'mismatch', productId: p.id, message: `research file ID "${fm.id}" != catalog ID "${p.id}"` });
        }
        if (fm.company_id !== p.company_id) {
          errors.push({ type: 'mismatch', productId: p.id, message: `research file company_id "${fm.company_id}" != catalog company_id "${p.company_id}"` });
        }
      }
    }

    // Validate research file frontmatter against schema
    if (rfPath) {
      const fm = loadYamlFrontmatter(rfPath);
      if (fm) {
        const fmErrors = validateAgainstSchema(fm, PRODUCT_SCHEMA, `research[${p.id}].`);
        for (const e of fmErrors) {
          errors.push({ type: 'schema_fm', productId: p.id, message: e });
        }
      }
    }

    // Check for duplicate IDs
    const dupes = products.filter(q => q.id === p.id && q !== p);
    for (const d of dupes) {
      errors.push({ type: 'duplicate', productId: p.id, message: `duplicate product ID: also in record ${d.id}` });
    }
  }

  // Check for orphaned research files
  const researchDir = join(RESEARCH_DIR, 'companies');
  try {
    for (const company of readdirSync(researchDir, { withFileTypes: true })) {
      if (!company.isDirectory()) continue;
      const productsDir = join(researchDir, company.name, 'products');
      try {
        for (const file of readdirSync(productsDir)) {
          if (!file.endsWith('.md')) continue;
          const filePath = join(productsDir, file);
          const fm = loadYamlFrontmatter(filePath);
          if (fm && fm.id && !products.some(p => p.id === fm.id)) {
            errors.push({ type: 'orphaned', productId: fm.id, message: `research file without catalog record: ${filePath}` });
          }
        }
      } catch {}
    }
  } catch {}

  if (args.format === 'json') {
    console.log(JSON.stringify({ errors, warnings, summary: { errors: errors.length, warnings: warnings.length } }, null, 2));
  } else {
    console.log('VALIDATION REPORT');
    console.log('='.repeat(40));

    if (errors.length === 0 && warnings.length === 0) {
      console.log('All checks passed.');
    } else {
      if (errors.length > 0) {
        console.log(`\nERRORS (${errors.length}):`);
        for (const e of errors) {
          console.log(`  [${e.type}] ${e.productId}: ${e.message}`);
        }
      }
      if (warnings.length > 0) {
        console.log(`\nWARNINGS (${warnings.length}):`);
        for (const w of warnings) {
          console.log(`  [${w.type}] ${w.productId}: ${w.message}`);
        }
      }
    }

    console.log(`\nSummary: ${errors.length} errors, ${warnings.length} warnings`);
  }

  process.exitCode = errors.length > 0 ? 1 : 0;
}

// --- Gaps ---

function cmdGapsProducts(args) {
  const products = loadCatalog();
  const companies = loadCompanies();
  const manifestPath = args.manifest || join(CATALOG_DIR, 'manifests', 'faang.json');

  let manifest;
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  } catch {
    console.error(`Error: cannot read manifest "${manifestPath}"`);
    process.exit(1);
  }

  const companyFilter = args.company;
  const results = [];

  for (const [cid, cdata] of Object.entries(manifest.companies || {})) {
    if (companyFilter && cid !== companyFilter) continue;

    const expectedCount = cdata.in_scope || 0;
    const actualProducts = products.filter(p => p.company_id === cid);
    const actualCount = actualProducts.length;
    const missing = expectedCount - actualCount;

    results.push({
      companyId: cid,
      companyName: companies[cid]?.name || cid,
      inScope: expectedCount,
      cataloged: actualCount,
      missing: Math.max(0, missing),
      excess: Math.max(0, actualCount - expectedCount),
    });
  }

  // Also check for products not in manifest
  const manifestCompanyIds = new Set(Object.keys(manifest.companies || {}));
  const unlisted = products.filter(p => !manifestCompanyIds.has(p.company_id));

  if (args.format === 'json') {
    console.log(JSON.stringify({ byCompany: results, unlistedProducts: unlisted.length, unlisted: unlisted }, null, 2));
  } else {
    console.log('PRODUCT GAP REPORT');
    console.log('='.repeat(50));
    for (const r of results) {
      const status = r.missing > 0 ? `MISSING ${r.missing}` : r.excess > 0 ? `+${r.excess} excess` : 'OK';
      console.log(`${r.companyName} (${r.companyId}): in_scope=${r.inScope}, cataloged=${r.cataloged}, ${status}`);
    }
    if (unlisted.length > 0) {
      console.log(`\nUnlisted products (${unlisted.length}):`);
      for (const p of unlisted) {
        console.log(`  ${p.id} | ${p.company_id} | ${p.name}`);
      }
    }
  }
}

function cmdGapsAlternatives(args) {
  const products = loadCatalog();
  const statusFilter = args.status; // none_verified, unknown, etc.

  const targets = statusFilter
    ? products.filter(p => p.alternative_status === statusFilter)
    : products;

  const results = targets.map(p => ({
    productId: p.id,
    productName: p.name,
    companyId: p.company_id,
    alternativeStatus: p.alternative_status,
    alternativeCoverage: p.alternative_coverage,
  })).sort((a, b) => a.productId.localeCompare(b.productId));

  if (args.format === 'json') {
    console.log(JSON.stringify({ count: results.length, products: results }, null, 2));
  } else {
    console.log(`ALTERNATIVE GAPS: ${results.length} products`);
    console.log('-'.repeat(40));
    for (const r of results) {
      console.log(`  ${r.productId} | ${r.companyId} | ${r.productName} | status: ${r.alternativeStatus} | coverage: ${r.alternativeCoverage}`);
    }
  }
}

function cmdGapsOpportunities(args) {
  const products = loadCatalog();

  // Find products with build_missing that lack an opportunity spec
  const buildMissing = products.filter(p => p.opportunity_status === 'build_missing');
  const results = [];

  for (const p of buildMissing) {
    // Check if opportunity spec exists
    const specPath = join(OPPORTUNITIES_DIR, `${p.id}.md`);
    const specExists = tryStat(specPath);
    results.push({
      productId: p.id,
      productName: p.name,
      companyId: p.company_id,
      hasSpecification: specExists,
      specPath: specPath,
    });
  }

  results.sort((a, b) => a.productId.localeCompare(b.productId));

  if (args.format === 'json') {
    console.log(JSON.stringify({ count: results.length, products: results }, null, 2));
  } else {
    console.log(`OPPORTUNITY GAPS: ${results.length} build_missing products`);
    console.log('-'.repeat(40));
    for (const r of results) {
      const status = r.hasSpecification ? 'SPEC OK' : 'MISSING SPEC';
      console.log(`  ${r.productId} | ${r.companyId} | ${r.productName} | ${status}`);
    }
  }
}

function cmdGapsAll(args) {
  // Run all gap commands
  console.log('=== PRODUCT GAPS ===');
  cmdGapsProducts(args);
  console.log('\n=== ALTERNATIVE GAPS ===');
  cmdGapsAlternatives(args);
  console.log('\n=== OPPORTUNITY GAPS ===');
  cmdGapsOpportunities(args);
}

// --- Alternatives ---

function cmdAlternativesList(args) {
  // Alternatives are stored in the research files' section 8/9
  // For now, we extract from research files and report what we find
  const products = loadCatalog();
  const productFilter = args.product;

  const results = [];
  const researchDir = join(RESEARCH_DIR, 'companies');

  try {
    for (const company of readdirSync(researchDir, { withFileTypes: true })) {
      if (!company.isDirectory()) continue;
      const productsDir = join(researchDir, company.name, 'products');
      try {
        for (const file of readdirSync(productsDir)) {
          if (!file.endsWith('.md')) continue;
          const filePath = join(productsDir, file);
          const fm = loadYamlFrontmatter(filePath);
          if (!fm) continue;
          if (productFilter && fm.id !== productFilter) continue;

          const body = extractBody(filePath);
          // Extract alternative names from section 8
          const altMatch = body.match(/# 8\.\s*Existing open-source alternatives\n\n([\s\S]*?)(?=\n# \d+\.|$)/);
          const comparisonMatch = body.match(/# 9\.\s*Alternative comparison\n\n([\s\S]*?)(?=\n# \d+\.|$)/);

          results.push({
            productId: fm.id,
            productName: fm.name,
            companyId: fm.company_id,
            alternativesSection: altMatch ? altMatch[1].trim() : null,
            comparisonSection: comparisonMatch ? comparisonMatch[1].trim() : null,
            alternativeStatus: fm.alternative_status,
            alternativeCoverage: fm.alternative_coverage,
          });
        }
      } catch {}
    }
  } catch {}

  results.sort((a, b) => a.productId.localeCompare(b.productId));

  if (args.format === 'json') {
    console.log(JSON.stringify(results, null, 2));
  } else {
    for (const r of results) {
      console.log(`\n${r.productId} (${r.companyId}): ${r.productName}`);
      console.log(`  Alternative status: ${r.alternativeStatus}`);
      console.log(`  Coverage: ${r.alternativeCoverage}`);
      if (r.alternativesSection) {
        console.log(`  Alternatives: ${r.alternativesSection.split('\n').filter(l => l.trim() && !l.trim().startsWith('-')).join(', ') || 'see section'}`);
      }
    }
  }
}

function cmdAlternativesValidate(args) {
  const products = loadCatalog();
  const errors = [];

  // Check each product's alternative_status is consistent with alternative_coverage
  for (const p of products) {
    if (p.alternative_status === 'none_verified' && p.alternative_coverage !== 'unknown') {
      // This is OK - none_verified is a specific finding
    }
    if (p.alternative_status === 'mature' && p.alternative_coverage === 'unknown') {
      errors.push({ productId: p.id, message: `alternative_status is "mature" but alternative_coverage is "unknown"` });
    }
  }

  if (args.format === 'json') {
    console.log(JSON.stringify({ errors, summary: { errors: errors.length } }, null, 2));
  } else {
    if (errors.length === 0) {
      console.log('Alternative validation: no issues found.');
    } else {
      console.log(`ALTERNATIVE VALIDATION ERRORS (${errors.length}):`);
      for (const e of errors) {
        console.log(`  ${e.productId}: ${e.message}`);
      }
    }
  }

  process.exitCode = errors.length > 0 ? 1 : 0;
}

function cmdAlternativesCoverage(args) {
  const products = loadCatalog();

  const coverage = {
    mature: 0,
    adequate: 0,
    partial: 0,
    fragmented: 0,
    none_verified: 0,
    unknown: 0,
    unassessed: 0,
  };

  for (const p of products) {
    const key = p.alternative_coverage || 'unknown';
    if (coverage[key] !== undefined) coverage[key]++;
    else coverage.unknown++;
  }

  // Also count by alternative_status
  const byStatus = {};
  for (const p of products) {
    const s = p.alternative_status || 'unassessed';
    byStatus[s] = (byStatus[s] || 0) + 1;
  }

  if (args.format === 'json') {
    console.log(JSON.stringify({ byCoverage: coverage, byStatus, total: products.length }, null, 2));
  } else {
    console.log('ALTERNATIVE COVERAGE REPORT');
    console.log('='.repeat(40));
    console.log('By coverage classification:');
    for (const [k, v] of Object.entries(coverage).sort()) {
      console.log(`  ${k}: ${v}`);
    }
    console.log(`\nBy alternative status:`);
    for (const [k, v] of Object.entries(byStatus).sort()) {
      console.log(`  ${k}: ${v}`);
    }
    console.log(`\nTotal products: ${products.length}`);
  }
}

// --- Opportunities ---

function cmdOpportunitiesList(args) {
  // List products with opportunity_status != unassessed
  const products = loadCatalog();
  const relevant = products.filter(p => p.opportunity_status && p.opportunity_status !== 'unassessed');
  relevant.sort((a, b) => a.opportunity_status.localeCompare(b.opportunity_status) || a.id.localeCompare(b.id));

  if (args.format === 'json') {
    console.log(JSON.stringify(relevant.map(p => ({
      productId: p.id,
      productName: p.name,
      companyId: p.company_id,
      opportunityStatus: p.opportunity_status,
      hasSpec: tryStat(join(OPPORTUNITIES_DIR, `${p.id}.md`)),
    })), null, 2));
  } else {
    const byStatus = {};
    for (const p of relevant) {
      if (!byStatus[p.opportunity_status]) byStatus[p.opportunity_status] = [];
      byStatus[p.opportunity_status].push(p);
    }

    console.log('OPPORTUNITY STATUS');
    console.log('='.repeat(40));
    for (const [status, prods] of Object.entries(byStatus).sort()) {
      console.log(`\n${status} (${prods.length}):`);
      for (const p of prods) {
        const hasSpec = tryStat(join(OPPORTUNITIES_DIR, `${p.id}.md`));
        console.log(`  ${p.id} | ${p.company_id} | ${p.name} ${hasSpec ? '[spec]' : '[no spec]'}`);
      }
    }
  }
}

function cmdOpportunitiesShow(args) {
  const productId = args._[2];
  const products = loadCatalog();
  const p = products.find(pr => pr.id === productId);
  if (!p) {
    console.error(`Error: product "${productId}" not found`);
    process.exit(1);
  }

  const specPath = join(OPPORTUNITIES_DIR, `${productId}.md`);
  const specExists = tryStat(specPath);
  const specContent = specExists ? readFileSync(specPath, 'utf8') : null;

  if (args.format === 'json') {
    console.log(JSON.stringify({
      productId: p.id,
      productName: p.name,
      companyId: p.company_id,
      opportunityStatus: p.opportunity_status,
      hasSpecification: specExists,
      specification: specContent,
    }, null, 2));
  } else {
    console.log(`Product: ${p.name} (${p.id})`);
    console.log(`Company: ${p.company_id}`);
    console.log(`Opportunity: ${p.opportunity_status}`);
    console.log(`Specification: ${specExists ? specPath : 'MISSING'}`);
    if (specContent) {
      console.log('\n' + specContent);
    }
  }
}

function cmdOpportunitiesValidate(args) {
  const products = loadCatalog();
  const errors = [];

  // build_missing must have a spec
  const buildMissing = products.filter(p => p.opportunity_status === 'build_missing');
  for (const p of buildMissing) {
    const specPath = join(OPPORTUNITIES_DIR, `${p.id}.md`);
    if (!tryStat(specPath)) {
      errors.push({ type: 'missing_spec', productId: p.id, message: `build_missing but no opportunity spec at ${specPath}` });
    }
  }

  // research_further should not have a spec (or it's ok if it does)
  // not_recommended should not have a spec

  if (args.format === 'json') {
    console.log(JSON.stringify({ errors, summary: { errors: errors.length } }, null, 2));
  } else {
    if (errors.length === 0) {
      console.log('Opportunity validation: no issues found.');
    } else {
      console.log(`OPPORTUNITY VALIDATION ERRORS (${errors.length}):`);
      for (const e of errors) {
        console.log(`  [${e.type}] ${e.productId}: ${e.message}`);
      }
    }
  }

  process.exitCode = errors.length > 0 ? 1 : 0;
}

function cmdOpportunitiesExport(args) {
  const products = loadCatalog();
  const relevant = products.filter(p => p.opportunity_status && p.opportunity_status !== 'unassessed');
  relevant.sort((a, b) => a.id.localeCompare(b.id));

  const exports = relevant.map(p => {
    const specPath = join(OPPORTUNITIES_DIR, `${p.id}.md`);
    const specExists = tryStat(specPath);
    const specContent = specExists ? readFileSync(specPath, 'utf8') : null;

    return {
      opportunityId: p.id,
      targetProductId: p.id,
      targetProductName: p.name,
      companyId: p.company_id,
      recommendation: p.opportunity_status,
      hasSpecification: specExists,
      specification: specContent,
      officialUrl: p.official_url,
      researchStatus: p.research_status,
      alternativeStatus: p.alternative_status,
    };
  });

  console.log(JSON.stringify({ exportedAt: new Date().toISOString(), count: exports.length, opportunities: exports }, null, 2));
}

// --- Build & reverse-engineering commands ---

const SKILL_DATA_PATH = join(__dirname, '..', 'tools', 'skills', 'catalog-data.mjs');

async function loadSkillProduct(productId) {
  const mod = await import('file://' + SKILL_DATA_PATH);
  const list = mod.PRODUCTS || [];
  return list.find((p) => p.id === productId) || null;
}

function skillDir(product) {
  return join(PRODUCTS_DIR, product.company_id, product.id);
}

async function cmdBuildAgentKit(args) {
  const productId = args._[2];
  const product = loadCatalog().find((p) => p.id === productId);
  if (!product) {
    console.error(`Error: product "${productId}" not found`);
    process.exit(1);
  }

  const data = await loadSkillProduct(productId);
  const outDefault = join(skillDir(product), 'agent');
  const outDir = args.out || outDefault;
  mkdirSync(outDir, { recursive: true });

  const alternatives = data?.alternatives || [];
  const altLines = alternatives.map((a) => `- ${a.name} (${a.license}) — ${a.url}${a.repo ? ' · repo: ' + a.repo : ''}`).join('\n');

  const skillMd = `---
name: build-${product.id}
description: Agent skill kit to reverse-engineer and rebuild ${product.name} in the open.
---

# Build ${product.name} (agent kit)

Target product: **${product.name}** (${product.id})
Company: ${product.company_id}
Official URL: ${product.official_url}
Product type: ${product.product_type}

## Open-source landscape

${altLines || 'No verified alternative yet.'}

## Gap

${data?.gap || 'See the research dossier.'}

## Verdict

${data?.verdict || 'Unassessed.'}

## Agent roles

- researcher: read the public product and its documentation; write the dossier.
- architect: produce the specification set under products/${product.company_id}/${product.id}/specs/.
- backend / frontend: implement the product.
- tester: verify acceptance criteria.
- reviewer: security and performance.

## Commands

- Reverse-engineer the public surface: \`node tools/rea-catalog.mjs --only ${product.id}\`
- Regenerate this kit: \`node src/cli.js ${product.id}\`
- Start the product workspace: \`cd products/${product.company_id}/${product.id} && node ace.mjs status\`
`;
  writeFileSync(join(outDir, 'skill.md'), skillMd, 'utf8');

  const mcpConfig = {
    product: { id: product.id, name: product.name, company_id: product.company_id, official_url: product.official_url },
    mcpServers: {
      'rae-cli': { command: 'node', args: [join(__dirname, '..', 'src', 'cli.js')], description: 'Product intelligence CLI' },
      filesystem: { command: 'npx', args: ['-y', '@modelcontextprotocol/server-filesystem', skillDir(product)] },
      git: { command: 'npx', args: ['-y', '@modelcontextprotocol/server-git', skillDir(product)] },
    },
    agents: {
      roles: ['researcher', 'architect', 'frontend', 'backend', 'tester', 'reviewer', 'documenter'],
    },
  };
  writeFileSync(join(outDir, 'mcp.json'), JSON.stringify(mcpConfig, null, 2) + '\n', 'utf8');

  console.log(`Wrote agent kit to ${outDir}`);
  console.log(`  skill.md  ${join(outDir, 'skill.md')}`);
  console.log(`  mcp.json  ${join(outDir, 'mcp.json')}`);
}

function cmdReaCapture(args) {
  const productId = args._[2];
  const product = loadCatalog().find((p) => p.id === productId);
  if (!product) {
    console.error(`Error: product "${productId}" not found`);
    process.exit(1);
  }
  const tool = join(__dirname, '..', 'tools', 'rea-catalog.mjs');
  const r = spawnSync(process.execPath, [tool, '--only', productId], { stdio: 'inherit', cwd: join(__dirname, '..') });
  process.exit(r.status === null ? 1 : r.status);
}

function aceShim(rootAceRel) {
  return `#!/usr/bin/env node
/**
 * Product ACE entry point.
 *
 * ACE keeps one CLI in the repository root so there is a single source of truth
 * for the spec (see docs/agent-workflow.md). This shim runs the root CLI from
 * the product directory, so \`node ace.mjs <command>\` works here exactly as it
 * does at the repository root.
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const rootAce = resolve(here, ${JSON.stringify(rootAceRel)});
const { status } = spawnSync(process.execPath, [rootAce, ...process.argv.slice(2)], {
  stdio: 'inherit',
  cwd: process.cwd(),
});

process.exit(status ?? 1);
`;
}

const SPEC_FILES = [
  '01-product-vision.md',
  '02-user-workflows.md',
  '03-feature-catalog.md',
  '04-data-models.md',
  '05-api-contracts.md',
  '06-architecture.md',
  '07-acceptance-criteria.md',
  '08-security-model.md',
  '09-integration-points.md',
  '10-migration-guide.md',
];

function cmdBuildProduct(args) {
  const productId = args._[2];
  const product = loadCatalog().find((p) => p.id === productId);
  if (!product) {
    console.error(`Error: product "${productId}" not found`);
    process.exit(1);
  }

  const workspace = args.out
    ? resolve(args.out)
    : join(PRODUCTS_DIR, product.company_id, product.id);
  if (existsSync(workspace) && !args.force) {
    console.error(`Error: workspace already exists at ${workspace}`);
    console.error('Use --force to overwrite the scaffolding files.');
    process.exit(1);
  }

  const rootAceRel = relative(workspace, join(ROOT, 'ace.mjs')).split(sep).join('/') || 'ace.mjs';

  mkdirSync(join(workspace, 'specs'), { recursive: true });
  writeFileSync(join(workspace, 'ace.mjs'), aceShim(rootAceRel), 'utf8');

  const pkgName = `rae-${product.company_id}-${product.id}`.replace(/_/g, '-');
  const pkg = {
    name: pkgName,
    version: '0.1.0',
    license: 'MIT',
    type: 'module',
    engines: { node: '>=20', ace: '>=1.0.0' },
    description: `RAE FAANG: Open-source alternative to ${product.name}`,
    scripts: {
      dev: 'node ace.mjs run',
      test: 'node --test tests/',
      lint: 'eslint .',
      build: 'tsc --build',
    },
    dependencies: {},
    devDependencies: {},
    ace: {
      spec: 'ace/v1',
      name: pkgName,
      goal: {
        statement: `Build open-source alternative to ${product.name}`,
        milestones: [
          'Set up project infrastructure',
          'Implement core features',
          'Verify against research',
          'Publish first release',
        ],
      },
      agents: {
        strategy: 'dynamic',
        defaults: { runtime: 'opencode' },
        workers: [
          { role: 'researcher', capabilities: ['web-search', 'code-analysis'] },
          { role: 'architect', capabilities: ['system-design'] },
          { role: 'frontend', capabilities: ['react', 'typescript'] },
          { role: 'backend', capabilities: ['node', 'api'] },
          { role: 'tester', capabilities: ['unit-testing'] },
          { role: 'reviewer', capabilities: ['code-review'] },
        ],
      },
    },
  };
  writeFileSync(join(workspace, 'package.json'), JSON.stringify(pkg, null, 2) + '\n', 'utf8');

  for (const spec of SPEC_FILES) {
    writeFileSync(
      join(workspace, 'specs', spec),
      `# ${spec}\n# ${product.name} Specification\n\nWIP\n`,
      'utf8',
    );
  }

  console.log(`Scaffolded product workspace: ${workspace}`);
  console.log('  ace.mjs            ACE shim (runs the repo-level CLI)');
  console.log('  package.json       ace/v1 workspace config');
  console.log(`  specs/             ${SPEC_FILES.length} specification stubs`);
  console.log('');
  console.log('Next steps:');
  console.log(`  1. cd ${relative(process.cwd(), workspace) || '.'}`);
  console.log('  2. node ace.mjs config check');
  console.log(`  3. Fill in specs/07-acceptance-criteria.md, then build.`);
}

async function cmdAlternativesClone(args) {
  const productId = args._[2] ?? args._[0];
  const product = loadCatalog().find((p) => p.id === productId);
  if (!product) {
    console.error(`Error: product "${productId}" not found`);
    process.exit(1);
  }
  const data = await loadSkillProduct(productId);
  const alternatives = data?.alternatives || [];
  if (!alternatives.length) {
    console.error(`No alternative recorded for "${productId}"`);
    process.exit(1);
  }

  let alt;
  if (args.alt) {
    alt = alternatives.find((a) => a.name.toLowerCase() === String(args.alt).toLowerCase());
    if (!alt) {
      console.error(`No alternative named "${args.alt}" for "${productId}".`);
      console.error(`Available: ${alternatives.map((a) => a.name).join(', ')}`);
      process.exit(1);
    }
  } else {
    alt = alternatives.find((a) => !/proprietary/i.test(a.license || '')) || null;
    if (!alt) {
      console.error(`Only proprietary alternatives are recorded for "${productId}".`);
      console.error('Pass --repo <url> to clone a specific repository.');
      process.exit(1);
    }
  }

  const repo = args.repo || alt.repo || alt.url;
  const target = args.into ? join(args.into, alt.name.replace(/[^a-z0-9-]/gi, '-')) : join(process.cwd(), alt.name.replace(/[^a-z0-9-]/gi, '-'));
  console.log(`Cloning ${repo} into ${target}`);
  const r = spawnSync('git', ['clone', repo, target], { stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status === null ? 1 : r.status);
  console.log(`Cloned ${alt.name}.`);
}


// --- Helpers ---

function tryStat(path) {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
}



function printHelp() {
  console.log(`
RAE — FAANG Product Intelligence CLI
=====================================

Usage: rae <command> [options]        (installed)  ·  node src/cli.js <command>  (from a clone)

Commands:
  products list     List products from catalog [--company ID] [--status STATUS] [--format json]
  products show     Show product details <product-id> [--format json]
  companies list    List registered companies [--format json]
  companies show    Show company details <company-id> [--format json]
  research coverage Show research coverage report [--company ID] [--format json]
  research pending  List products with pending research [--format json]
  research stale    List stale research products [--format json]
  research validate Validate catalog and research file integrity [--format json]
  gaps products     Detect product inventory gaps [--company ID] [--manifest PATH] [--format json]
  gaps alternatives Find products with alternative gaps [--status STATUS] [--format json]
  gaps opportunities Find build_missing without specs [--format json]
  gaps all          Run all gap detections [--format json]
  alternatives list List alternatives from research files [--product ID] [--format json]
  alternatives validate Validate alternative consistency [--format json]
  alternatives coverage Show alternative coverage summary [--format json]
  opportunities list List opportunity classifications [--format json]
  opportunities show Show opportunity details <product-id> [--format json]
  opportunities validate Validate opportunity consistency [--format json]
  opportunities export Export opportunities for downstream use [--format json]
  build agent-kit   Generate skill.md + mcp.json agent kit for <product-id>
  build product     Scaffold a workspace to build the open-source replacement <product-id> [--out DIR] [--force]
  rea capture      Reverse-engineer a product's public surface <product-id>
  alternatives clone Clone the open-source alternative for <product-id> [--alt NAME] [--repo URL] [--into DIR]
  <product-id>      Shorthand: build the agent kit for <product-id>.
                    With --alt NAME, clone that product's alternative instead.

Options:
  --format json     Output in JSON format
  --help, -h        Show this help
  --version, -v     Show version

Exit codes:
  0 - Success
  1 - Validation failure or error
`);
}

function printVersion() {
  console.log(`RAE CLI v${PKG.version}`);
}

// --- Main ---

const argv = minimist(process.argv.slice(2), {
  alias: { h: 'help', v: 'version', f: 'format', c: 'company', s: 'status', m: 'manifest' },
  boolean: ['help', 'version'],
  string: ['format', 'company', 'status', 'manifest', 'out', 'alt', 'repo', 'into'],
});

// --- CLI Dispatcher ---

const commands = {
  'products': {
    list: () => cmdProductsList(argv),
    show: () => cmdProductsShow(argv),
  },
  'companies': {
    list: () => cmdCompaniesList(argv),
    show: () => cmdCompaniesShow(argv),
  },
  'research': {
    coverage: () => cmdResearchCoverage(argv),
    pending: () => cmdResearchPending(argv),
    stale: () => cmdResearchStale(argv),
    validate: () => cmdResearchValidate(argv),
  },
  'gaps': {
    products: () => cmdGapsProducts(argv),
    alternatives: () => cmdGapsAlternatives(argv),
    opportunities: () => cmdGapsOpportunities(argv),
    all: () => cmdGapsAll(argv),
  },
  'alternatives': {
    list: () => cmdAlternativesList(argv),
    validate: () => cmdAlternativesValidate(argv),
    coverage: () => cmdAlternativesCoverage(argv),
    clone: () => cmdAlternativesClone(argv),
  },
  'opportunities': {
    list: () => cmdOpportunitiesList(argv),
    show: () => cmdOpportunitiesShow(argv),
    validate: () => cmdOpportunitiesValidate(argv),
    export: () => cmdOpportunitiesExport(argv),
  },
  'build': {
    'agent-kit': () => cmdBuildAgentKit(argv),
    'product': () => cmdBuildProduct(argv),
  },
  'rea': {
    capture: () => cmdReaCapture(argv),
  },
};

async function dispatch(argv) {
  const command = argv._[0];
  if (argv.version) {
    printVersion();
    process.exit(0);
  }
  if (argv.help || !command) {
    printHelp();
    process.exit(0);
  }

  const subcmd = argv._[1];
  const group = commands[command];
  const action = group?.[subcmd];

  if (!group) {
    // Shorthand: `rae <product-id>` builds that product's agent kit;
    // `rae <product-id> --alt NAME` clones the alternative instead.
    if (loadCatalog().some((p) => p.id === command)) {
      argv._[2] = command;
      try {
        if (argv.alt) {
          await cmdAlternativesClone(argv);
        } else {
          await cmdBuildAgentKit(argv);
        }
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      return;
    }
    console.error(`Error: unknown command "${command}"`);
    console.error('Run with --help for usage information.');
    process.exit(1);
  }

  if (!action) {
    console.error(`Error: unknown command "${command}${subcmd ? ' ' + subcmd : ''}"`);
    console.error('Run with --help for usage information.');
    process.exit(1);
  }

  try {
    await action();
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

// dispatch
dispatch(argv).catch((err) => { console.error(err); process.exit(1); });
