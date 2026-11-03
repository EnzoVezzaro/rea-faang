#!/usr/bin/env node

// Build a source-backed candidate inventory from public first-party catalogs.
// This is intentionally separate from catalog/products.jsonl: candidates need
// identity and deduplication review before they become research records.
//
// Output: catalog/manifests/faang-expanded-candidates.json
//   products[]    product-level rows (verified canonical entries + candidates)
//   duplicates[]  rows merged into another row by normalized name
//   noise[]       editorial/navigation rows excluded from the product count
//
// Every row carries the fields required by docs/expanded-catalog-scope.md:
// id, company_id, name, product_type, official_url, source_catalog,
// inventory_status and research_status. New rows stay research_status:
// "pending" until a dossier and cited evidence exist.

import { mkdir, writeFile, readFile } from 'node:fs/promises';

const SOURCES = [
  { company_id: 'google', url: 'https://about.google/products/', kind: 'google' },
  { company_id: 'google', url: 'https://cloud.google.com/products/', kind: 'google-cloud' },
  { company_id: 'apple', url: 'https://www.apple.com/sitemap/', kind: 'apple' },
  { company_id: 'amazon_aws', url: 'https://aws.amazon.com/documentation-overview/', kind: 'aws' },
  { company_id: 'microsoft', url: 'https://azure.microsoft.com/en-us/sitemap', kind: 'azure' },
  { company_id: 'microsoft', url: 'https://www.microsoft.com/en-us/microsoft-365/products-apps-services', kind: 'm365' },
  { company_id: 'meta', url: 'https://about.meta.com/technologies/', kind: 'seed-only' },
  { company_id: 'netflix', url: 'https://about.netflix.com/en', kind: 'seed-only' },
];

const EXCLUDE = new Set([
  'About', 'Products', 'Company Info', 'News', 'Search', 'Home', 'Learn more',
  'Get started', 'Contact us', 'Support', 'Resources', 'Pricing', 'Careers',
  'Privacy', 'Terms', 'Accessibility', 'Sign in', 'Create account', 'All products',
  'View all products', 'View all solutions', 'View more', 'Documentation',
  'Product support', 'Find apps and services', 'Find a plan', 'Follow Microsoft Copilot',
]);

function decode(value) {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
    .replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"')
    .replace(/&#x27;/gi, "'").replace(/&#x2F;/gi, '/')
    .replace(/\s+/g, ' ').trim();
}

function absoluteUrl(href, base) {
  if (!href || /^(#|mailto:|tel:|javascript:)/i.test(href)) return null;
  try {
    const url = new URL(href, base);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.href : null;
  } catch { return null; }
}

function entriesFromHtml(html, base) {
  const entries = [];
  const seen = new Set();
  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const href = match[1].match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1] ?? null;
    const name = decode(match[2]);
    if (name.length < 2 || name.length > 100 || EXCLUDE.has(name)) continue;
    if (/^(image|skip to|open|close|menu|next|previous|learn|read|buy|shop|compare|watch|download|apply|join|browse|filter|clear|search|sign|create|view|all|more|what is|why )/i.test(name)) continue;
    if (/^(http|www\.|\$|\d|[|•])/.test(name)) continue;
    if (seen.has(name)) continue;
    seen.add(name);
    entries.push({ name, url: absoluteUrl(href, base) });
  }
  return entries;
}

function slug(value) {
  return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function normalizedName(value, companyId = '') {
  let normalized = value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\([^)]*\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  // Apply AWS aliases before generic stop-word cleanup; otherwise removing
  // "service" would hide the SQS and OpenSearch equivalences below.
  if (companyId === 'amazon_aws') normalized = normalized.replace(/simple\s+queue\s+service(?:\s+sqs)?/g, 'sqs');
  if (companyId === 'amazon_aws') normalized = normalized.replace(/opensearch\s+services?\b/g, 'opensearch service');
  if (companyId === 'amazon_aws') normalized = normalized.replace(/virtual\s+private\s+cloud\b/g, 'vpc');
  if (companyId === 'amazon_aws') normalized = normalized.replace(/^aurora\s+serverless\s+relational\s+database\s+service\b.*$/, 'aurora');
  normalized = normalized.replace(/\b(the|official|app|services?|platform|product|for)\b/g, '')
    .replace(/\s+/g, ' ').trim();
  // AWS catalogs commonly prefix an already-canonical service name with
  // "Amazon" (for example, "Amazon API Gateway" vs "API Gateway"). Keep
  // that alias auditable instead of generating a second pending product.
  if (companyId === 'amazon_aws') normalized = normalized.replace(/^amazon\s+/, '');
  // AWS's public catalog sometimes omits the engine suffix "OSS" from
  // ElastiCache for Redis. Keep it equivalent to the canonical Redis OSS row
  // so the inventory cannot create a second pending product.
  if (companyId === 'amazon_aws') normalized = normalized.replace(/\bredis\s+oss\b/g, 'redis');
  // The AWS documentation catalog sometimes spells SQS out as
  // "Amazon Simple Queue Service (SQS)" while the canonical record is "SQS".
  return normalized;
}

function navigationReason(name) {
  if (name === '.NET on AWS') return 'developer center and resource collection, not a standalone product';
  if (/^(aws|aws blog|architecture center|cloud architecture center|aws accessibility)$/i.test(name.trim())) return 'brand, editorial collection or accessibility resource, not a standalone product';
  const words = name.split(/\s+/);
  if (words.length > 10) return 'sentence-length label, not a product name';
  if (/^(ai for|ai solutions|analytics solutions|build &|builder center|customer success|data &|data for|documentation|get started|learn|resources|solutions|what is|why aws|aws free tier|analyst report|follow microsoft|view all|browse by|find apps|find a plan|previous office|open |close |filter|clear|search|sign in|create account)/i.test(name)) return 'editorial or navigation label from the source catalog';
  if (name.length < 3) return 'label shorter than three characters';
  return null;
}

const candidates = new Map();
const existing = (await readFile('catalog/products.jsonl', 'utf8')).trim().split('\n').filter(Boolean).map(JSON.parse);
for (const product of existing) {
  const retired = product.lifecycle_status === 'retired' || product.research_status === 'retired';
  candidates.set(product.id, {
    id: product.id,
    company_id: product.company_id,
    name: product.name,
    product_type: product.product_type,
    official_url: product.official_url,
    source_catalog: 'catalog/products.jsonl',
    source_catalogs: [product.official_url],
    inventory_status: retired ? 'retired' : 'verified',
    research_status: product.research_status ?? 'pending',
  });
}

for (const source of SOURCES) {
  if (source.kind === 'seed-only') continue;
  const response = await fetch(source.url, { headers: { 'user-agent': 'rae-faang-inventory/1.0' } });
  if (!response.ok) throw new Error(`${source.url}: HTTP ${response.status}`);
  const html = await response.text();
  for (const entry of entriesFromHtml(html, source.url)) {
    const id = `${source.company_id.replace(/_/g, '-')}-${slug(entry.name)}`;
    const candidate = candidates.get(id) ?? {
      id,
      company_id: source.company_id,
      name: entry.name,
      product_type: 'unclassified',
      official_url: entry.url,
      source_catalog: source.url,
      source_catalogs: [],
      inventory_status: 'candidate',
      research_status: 'pending',
    };
    if (!candidate.official_url && entry.url) candidate.official_url = entry.url;
    if (!candidate.source_catalogs.includes(source.url)) candidate.source_catalogs.push(source.url);
    candidates.set(id, candidate);
  }
}

// Editorial/navigation rows are reported separately; they never count as products.
const noise = [];
for (const product of candidates.values()) {
  const reason = navigationReason(product.name);
  if (!reason) continue;
  noise.push({
    id: product.id,
    company_id: product.company_id,
    name: product.name,
    product_type: 'unclassified',
    official_url: product.official_url ?? null,
    source_catalog: product.source_catalog,
    inventory_status: 'navigation',
    research_status: 'pending',
    excluded_reason: reason,
  });
}

// Equivalent names are merged into one product-level row; every merged row is
// kept as a duplicate so the merge stays auditable.
const merged = new Map();
const duplicates = [];
for (const product of candidates.values()) {
  if (navigationReason(product.name)) continue;
  const key = `${product.company_id}|${normalizedName(product.name, product.company_id)}`;
  const previous = merged.get(key);
  if (!previous) {
    merged.set(key, { ...product, source_catalogs: [...new Set(product.source_catalogs)] });
    continue;
  }
  previous.source_catalogs = [...new Set([...previous.source_catalogs, ...product.source_catalogs])];
  if (!previous.official_url && product.official_url) previous.official_url = product.official_url;
  if (product.inventory_status === 'verified' || product.inventory_status === 'retired') {
    duplicates.push({ ...product, inventory_status: 'duplicate', research_status: 'pending', duplicate_of: previous.id });
    continue;
  }
  duplicates.push({ ...product, inventory_status: 'duplicate', research_status: 'pending', duplicate_of: previous.id });
}

const products = [...merged.values()]
  .sort((a, b) => a.company_id.localeCompare(b.company_id) || a.name.localeCompare(b.name));
const sortedDuplicates = duplicates
  .sort((a, b) => a.company_id.localeCompare(b.company_id) || a.name.localeCompare(b.name) || a.id.localeCompare(b.id));
const sortedNoise = noise
  .sort((a, b) => a.company_id.localeCompare(b.company_id) || a.name.localeCompare(b.name) || a.id.localeCompare(b.id));

const byStatus = {};
for (const row of [...products, ...sortedDuplicates, ...sortedNoise]) {
  byStatus[row.inventory_status] = (byStatus[row.inventory_status] || 0) + 1;
}

const output = {
  schema_version: '1.1',
  generated_at: new Date().toISOString(),
  scope: 'FAANG plus Microsoft',
  status: 'deduped_candidate_inventory',
  note: 'Candidates come from public first-party catalogs. Editorial/navigation rows are excluded and equivalent names are merged. Entries are not research records until identity, product level, official URL, lifecycle and duplicates are reviewed.',
  field_contract: {
    id: 'stable company-scoped identifier, lowercase kebab-case',
    company_id: 'google|apple|amazon|amazon_aws|meta|netflix|microsoft',
    name: 'official product name as published by the source catalog',
    product_type: 'product taxonomy category; unclassified marks a candidate that still needs review',
    official_url: 'first-party product page URL when the catalog link was resolvable',
    source_catalog: 'official catalog page the row was found on',
    inventory_status: 'verified|retired for canonical rows; candidate for review; duplicate and navigation are classified separately',
    research_status: 'pending for every row without research; retired keeps its lifecycle state',
  },
  sources: SOURCES,
  total_candidates: products.length,
  discarded_rows: sortedNoise.length,
  counts: {
    products: products.length,
    duplicates: sortedDuplicates.length,
    noise: sortedNoise.length,
    by_inventory_status: byStatus,
    by_company: Object.fromEntries(
      [...new Set([...products, ...sortedDuplicates, ...sortedNoise].map((row) => row.company_id))]
        .sort()
        .map((company) => [company, {
          products: products.filter((row) => row.company_id === company).length,
          candidates: products.filter((row) => row.company_id === company && row.inventory_status === 'candidate').length,
          verified: products.filter((row) => row.company_id === company && row.inventory_status === 'verified').length,
          retired: products.filter((row) => row.company_id === company && row.inventory_status === 'retired').length,
          duplicates: sortedDuplicates.filter((row) => row.company_id === company).length,
          noise: sortedNoise.filter((row) => row.company_id === company).length,
        }]),
    ),
  },
  products,
  duplicates: sortedDuplicates,
  noise: sortedNoise,
};

await mkdir('catalog/manifests', { recursive: true });
await writeFile('catalog/manifests/faang-expanded-candidates.json', `${JSON.stringify(output, null, 2)}\n`);
console.log(`Wrote ${products.length} product-level rows (${output.counts.by_inventory_status.candidate || 0} candidates), ${sortedDuplicates.length} duplicates and ${sortedNoise.length} navigation rows to catalog/manifests/faang-expanded-candidates.json`);
