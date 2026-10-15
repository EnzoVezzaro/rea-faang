#!/usr/bin/env node
// Generate the public site into site/: the landing page, the browsable catalog
// (one page per product), the docs set rendered from docs/*.md, catalog.json,
// sitemap.xml and the 404 page.
//
// Sources of truth:
//   catalog/products.jsonl          product identity
//   catalog/companies.json         company names
//   tools/skills/catalog-data.mjs  the curated open-source landscape
//   docs/*.md                      the documentation set
//
// Usage:
//   node tools/site-build.mjs          # write every page
//   node tools/site-build.mjs --check  # verify only, exit 1 on drift

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  statSync,
  copyFileSync,
} from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS } from './skills/catalog-data.mjs';
import { renderMarkdown, slugify, escapeHtml } from './site/markdown.mjs';
import * as T from './site/templates.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(ROOT, 'site');
const DOCS = join(ROOT, 'docs');

const HOME_PREVIEW = [
  'gmail',
  'youtube',
  'aws-s3',
  'meta-whatsapp',
  'google-workspace',
  'netflix-streaming',
];

// Real entries for the hero relationship diagram: product -> foundation, or a gap.
const HOME_DIAGRAM = ['youtube', 'gmail', 'netflix-streaming', 'amazon-prime'];

const DOC_META = {
  'getting-started': {
    title: 'Get started',
    description: 'Set up the repository, check the catalog, and start coordinating product work.',
  },
  'cli-reference': {
    title: 'CLI reference',
    description: 'Browse products, check research, compare alternatives, and find missing work.',
  },
  'catalog-and-schemas': {
    title: 'Catalog and schemas',
    description: 'Understand product records, research dossiers, alternatives, and validation.',
  },
  'agent-workflow': {
    title: 'Agent workflow (ACE)',
    description: 'How the ACE environment and the multi-agent loop fit together.',
  },
  'product-research-and-build-plan': {
    title: 'Research and build every product',
    description: 'Document products with cited evidence, then guide coding agents from research to tested alternatives.',
  },
};

// The motion layer is a real, reviewable source file rather than a template
// string, so the build copies it verbatim into site/assets/motion.js.
const MOTION_JS = readFileSync(join(ROOT, 'tools', 'site', 'motion.js'), 'utf8');

const CATALOG_JS = `"use strict";
(function () {
  var PAGE_SIZE = 20;
  var rows = Array.prototype.slice.call(document.querySelectorAll("#product-rows .prow"));
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".chips .chip"));
  var search = document.getElementById("catalog-search");
  var statusLine = document.getElementById("filter-status");
  var empty = document.getElementById("catalog-empty");
  var reset = document.getElementById("catalog-reset");
  var list = document.getElementById("product-rows");
  var pager = document.getElementById("catalog-pager");
  var pagerPrev = document.getElementById("pager-prev");
  var pagerNext = document.getElementById("pager-next");
  var pagerStatus = document.getElementById("pager-status");
  var page = 1;

  function readHash() {
    var company = "all";
    var status = "all";
    (location.hash || "").replace(/^#/, "").split("+").forEach(function (part) {
      if (part.indexOf("c-") === 0) company = part.slice(2);
      if (part.indexOf("s-") === 0) status = part.slice(2);
    });
    return { company: company, status: status };
  }

  function writeHash(state) {
    var parts = [];
    if (state.company !== "all") parts.push("c-" + state.company);
    if (state.status !== "all") parts.push("s-" + state.status);
    var hash = parts.length ? "#" + parts.join("+") : "";
    if (location.hash !== hash) history.replaceState(null, "", location.pathname + hash);
  }

  function setPressed(state) {
    buttons.forEach(function (b) {
      var isCompany = b.hasAttribute("data-filter-company");
      var value = isCompany ? b.getAttribute("data-filter-company") : b.getAttribute("data-filter-status");
      var active = value === (isCompany ? state.company : state.status);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function apply(state) {
    var q = search ? search.value.trim().toLowerCase() : "";
    var matches = rows.filter(function (row) {
      if (state.company !== "all" && row.getAttribute("data-company") !== state.company) return false;
      if (state.status !== "all" && row.getAttribute("data-status") !== state.status) return false;
      if (q && row.textContent.toLowerCase().indexOf(q) === -1) return false;
      return true;
    });

    var count = matches.length;
    var totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
    if (page > totalPages) page = totalPages;
    var start = (page - 1) * PAGE_SIZE;
    var end = Math.min(start + PAGE_SIZE, count);

    rows.forEach(function (row) { row.style.display = "none"; });
    matches.slice(start, end).forEach(function (row) { row.style.display = ""; });

    if (statusLine) {
      statusLine.textContent = count
        ? "Showing " + (start + 1) + "\u2013" + end + " of " + count + " products"
        : "Showing 0 products";
    }
    if (empty) empty.hidden = count !== 0;
    if (list) list.hidden = count === 0;

    if (pager) {
      pager.hidden = totalPages <= 1;
      if (pagerPrev) pagerPrev.disabled = page <= 1;
      if (pagerNext) pagerNext.disabled = page >= totalPages;
      if (pagerStatus) pagerStatus.textContent = "Page " + page + " of " + totalPages + " \u00b7 " + count + " products";
    }
  }

  var state = readHash();
  setPressed(state);
  apply(state);

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.hasAttribute("data-filter-company")) state.company = b.getAttribute("data-filter-company");
      else state.status = b.getAttribute("data-filter-status");
      page = 1;
      setPressed(state);
      writeHash(state);
      apply(state);
    });
  });

  if (search) search.addEventListener("input", function () { page = 1; apply(state); });

  if (pagerPrev) pagerPrev.addEventListener("click", function () { page -= 1; apply(state); });
  if (pagerNext) pagerNext.addEventListener("click", function () { page += 1; apply(state); });

  if (reset) reset.addEventListener("click", function () {
    state = { company: "all", status: "all" };
    page = 1;
    if (search) search.value = "";
    setPressed(state);
    writeHash(state);
    apply(state);
    if (search) search.focus();
  });
})();`;

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

/**
 * Map product id -> its scaffolded workspace under products/<group>/<id>.
 * The group directory does not always match the catalog company_id (for
 * example aws-s3 lives at products/aws/aws-s3 while its company_id is
 * amazon_aws), so scan every group and key by the product id, which is unique.
 */
function workspaceIndex() {
  const dir = join(ROOT, 'products');
  const map = new Map();
  if (!existsSync(dir)) return map;
  for (const group of readdirSync(dir)) {
    const groupDir = join(dir, group);
    if (!statSync(groupDir).isDirectory()) continue;
    for (const product of readdirSync(groupDir)) {
      const ws = join(groupDir, product);
      if (!statSync(ws).isDirectory()) continue;
      const hasTrackedFile = ['package.json', 'ace.mjs', 'specs', 'src', 'tests'].some((entry) =>
        existsSync(join(ws, entry)),
      );
      if (hasTrackedFile) map.set(product, ws);
    }
  }
  return map;
}

/** Count the deterministic test cases the same way `npm test` runs them. */
function countTests() {
  const dir = join(ROOT, 'tests');
  let n = 0;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.js')) continue;
    const src = readFileSync(join(dir, f), 'utf8');
    n += (src.match(/^\s*(?:sub)?test\(/gm) || []).length;
  }
  return n;
}

function addHeadingIds(html) {
  return html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner) => {
    const text = inner.replace(/<[^>]+>/g, '');
    return `<h2 id="${slugify(text)}">${inner}</h2>`;
  });
}

/**
 * Make every external (http/https) anchor open in a new tab. Applied to every
 * generated page so template links, catalog UI and rendered docs behave the
 * same. Existing rel values are normalized to `noopener noreferrer`.
 */
function externalLinksNewTab(html) {
  if (Buffer.isBuffer(html)) return html;
  return html.replace(/<a\b([^>]*)>/g, (match, attrs) => {
    if (!/href="https?:\/\//.test(attrs) || /\btarget=/.test(attrs)) return match;
    const next = /rel="[^"]*"/.test(attrs)
      ? attrs.replace(/rel="[^"]*"/, 'rel="noopener noreferrer"')
      : `${attrs} rel="noopener noreferrer"`;
    return `<a${next} target="_blank">`;
  });
}

/** Resolve a markdown link found in docs/*.md for the rendered site. */
function docsLinkResolver(docSlug) {
  return (href) => {
    if (/^(https?:|mailto:|#)/.test(href)) return href;
    const [target, anchor] = href.split(/(?=#)/);
    if (target.endsWith('.md')) {
      if (target.startsWith('../')) {
        // Repo-root or outside-docs file: link the GitHub blob.
        const parts = target.split('/');
        const repoPath = parts.slice(1).join('/');
        return `${T.REPO_URL}/blob/main/${repoPath}${anchor || ''}`;
      }
      const slug = target.replace(/\.md$/, '');
      if (slug === 'README') return `index.html${anchor || ''}`;
      return `${slug}.html${anchor || ''}`;
    }
    return href;
  };
}

function loadDocs() {
  const docs = [];
  for (const file of readdirSync(DOCS)) {
    if (!file.endsWith('.md') || file === 'README.md') continue;
    const slug = file.replace(/\.md$/, '');
    const meta = DOC_META[slug];
    if (!meta) continue;
    const raw = readFileSync(join(DOCS, file), 'utf8');
    let html = renderMarkdown(raw, docsLinkResolver(slug));
    html = addHeadingIds(html);
    // Tables scroll horizontally inside a wrapper instead of overflowing the page.
    html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
    const headings = T.tocHeadings(html);
    docs.push({ slug, ...meta, html, headings });
  }
  docs.sort((a, b) => Object.keys(DOC_META).indexOf(a.slug) - Object.keys(DOC_META).indexOf(b.slug));
  return docs;
}

function buildData() {
  const { products, companies } = loadCatalog();
  const dataById = new Map(PRODUCTS.map((p) => [p.id, p]));
  const workspaces = workspaceIndex();

  const problems = [];
  for (const p of products) {
    const d = dataById.get(p.id);
    if (!d) problems.push(`no open-source data for catalog product: ${p.id}`);
    else if (d.company_id !== p.company_id) problems.push(`${p.id}: company_id mismatch`);
    for (const a of d ? d.alternatives : []) {
      if (!/^https?:\/\//.test(a.url)) problems.push(`${p.id}: alternative "${a.name}" has no http(s) URL`);
    }
  }
  for (const d of PRODUCTS) {
    if (!products.some((p) => p.id === d.id)) problems.push(`open-source data for unknown product: ${d.id}`);
  }
  if (problems.length) {
    console.error('site-build: data integrity errors:');
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }

  const enriched = products.map((p) => {
    const d = dataById.get(p.id);
    const ws = workspaces.get(p.id) || null;
    return {
      ...d,
      id: p.id,
      name: d.name,
      companyName: companies[p.company_id]?.name ?? p.company_id,
      lifecycle: p.lifecycle_status,
      research_status: p.research_status,
      hasRea: existsSync(join(ROOT, 'catalog', 'rea', p.company_id, `${p.id}.md`)),
      build: {
        scaffolded: Boolean(ws),
        specs: Boolean(ws && existsSync(join(ws, 'specs'))),
        src: Boolean(ws && existsSync(join(ws, 'src'))),
        tests: Boolean(ws && existsSync(join(ws, 'tests'))),
      },
    };
  });

  const counts = { available: 0, partial: 0, pending: 0 };
  const companyCounts = {};
  for (const p of enriched) {
    counts[p.status]++;
    companyCounts[p.company_id] = (companyCounts[p.company_id] || 0) + 1;
  }

  const companyEntries = {};
  for (const id of Object.keys(companyCounts)) {
    companyEntries[id] = {
      name: companies[id]?.name ?? id,
      count: companyCounts[id],
    };
  }

  return { enriched, counts, companies: companyEntries };
}

/** Count committed REA web-surface reports (catalog/rea/<company>/<id>.md). */
function countReaReports() {
  const dir = join(ROOT, 'catalog', 'rea');
  if (!existsSync(dir)) return 0;
  let n = 0;
  for (const company of readdirSync(dir)) {
    const cdir = join(dir, company);
    if (!statSync(cdir).isDirectory()) continue;
    for (const f of readdirSync(cdir)) if (f.endsWith('.md')) n++;
  }
  return n;
}

function buildPages(data, docs) {
  const pages = [];
  const push = (rel, content) => pages.push({ rel, content });

  const sorted = [...data.enriched].sort((a, b) => a.company_id.localeCompare(b.company_id) || a.name.localeCompare(b.name));
  const preview = HOME_PREVIEW.map((id) => data.enriched.find((p) => p.id === id)).filter(Boolean);
  // One shape for the hero diagram and the catalog band: a product and the
  // open-source project that covers it, or null when nothing covers it yet.
  const foundationOf = (p) =>
    p.status === 'pending'
      ? null
      : (p.alternatives.find((a) => !/proprietary/i.test(a.license || ''))?.name || null);
  const toEdge = (p) => ({ product: p.name, product_id: p.id, status: p.status, foundation: foundationOf(p) });
  const diagram = HOME_DIAGRAM.map((id) => data.enriched.find((p) => p.id === id))
    .filter(Boolean)
    .map(toEdge);
  push(
    'index.html',
    T.homePage({
      counts: data.counts,
      preview,
      testsCount: countTests(),
      diagram,
      products: data.enriched,
      reaCount: countReaReports(),
    }),
  );
  push('catalog/index.html', T.catalogPage({ products: data.enriched, counts: data.counts, companies: data.companies }));

  sorted.forEach((p, i) => {
    const prev = i > 0 ? sorted[i - 1] : null;
    const next = i < sorted.length - 1 ? sorted[i + 1] : null;
    push(`catalog/${p.id}/index.html`, T.productPage({ p, prev, next }));
    push(`catalog/${p.id}/agent-kit.md`, T.agentKitMd(p));
  });

  push('docs/index.html', T.docsIndexPage({ docs }));
  for (const doc of docs) {
    push(`docs/${doc.slug}.html`, T.docPage({ doc, tocHtml: T.tocHtml(doc.headings) }));
  }

  push('assets/catalog.js', CATALOG_JS);
  push('assets/motion.js', MOTION_JS);
  push('assets/rae-mark.svg', readFileSync(join(ROOT, 'docs', 'assets', 'logo.svg'), 'utf8'));
  push('docs/assets/brand-logo.png', readFileSync(join(DOCS, 'assets', 'brand-logo.png')));
  push('docs/assets/brand-symbol.png', readFileSync(join(DOCS, 'assets', 'brand-symbol.png')));
  push('assets/rae-banner.png', readFileSync(join(ROOT, 'site', 'assets', 'rae-banner.png')));
  push('favicon.svg', T.faviconSvg());
  push('404.html', T.notFoundPage());
  push('catalog.json', catalogJson(data));
  push('sitemap.xml', sitemapXml(data, docs));
  push('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${T.BASE_URL}/sitemap.xml\n`);
  return pages;
}

function catalogJson(data) {
  const payload = {
    generator: 'tools/site-build.mjs',
    source: 'catalog/products.jsonl + tools/skills/catalog-data.mjs',
    counts: data.counts,
    companies: data.companies,
    products: data.enriched.map((p) => ({
      id: p.id,
      name: p.name,
      company_id: p.company_id,
      company: p.companyName,
      product_type: p.product_type,
      categories: p.categories,
      official_url: p.official_url,
      lifecycle_status: p.lifecycle,
      open_source_status: p.status,
      page: `catalog/${p.id}/`,
      alternatives: p.alternatives.map((a) => ({
        name: a.name,
        url: a.url,
        license: a.license,
        covers: a.covers,
        note: a.note,
      })),
      gap: p.gap,
      verdict: p.verdict,
      sources: p.sources,
      build: p.build,
    })),
  };
  return JSON.stringify(payload, null, 2) + '\n';
}

function sitemapXml(data, docs) {
  const urls = ['', 'catalog/', 'docs/'];
  for (const p of data.enriched) urls.push(`catalog/${p.id}/`);
  for (const d of docs) urls.push(`docs/${d.slug}.html`);
  const body = urls
    .map((u) => `  <url>\n    <loc>${escapeHtml(T.BASE_URL + '/' + u)}</loc>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function main() {
  const check = process.argv.includes('--check');
  const help = process.argv.includes('--help') || process.argv.includes('-h');
  if (help) {
    console.log('Usage: node tools/site-build.mjs [--check]');
    return;
  }

  const data = buildData();
  const docs = loadDocs();
  const pages = buildPages(data, docs);

  let drift = 0;
  for (const { rel, content } of pages) {
    const out = externalLinksNewTab(content);
    const file = join(SITE, rel);
    if (check) {
      const current = existsSync(file) ? readFileSync(file) : null;
      const expected = typeof out === 'string' ? Buffer.from(out) : out;
      if (!current || !current.equals(expected)) {
        console.error(`site-build: drift: ${rel}`);
        drift++;
      }
    } else {
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, out);
    }
  }

  // Docs assets: copy docs/assets/* verbatim (logo, icons) so the rendered
  // docs pages can embed them with relative URLs.
  const docsAssetsSrc = join(DOCS, 'assets');
  if (existsSync(docsAssetsSrc)) {
    for (const entry of readdirSync(docsAssetsSrc)) {
      const dest = join(SITE, 'docs', 'assets', entry);
      if (check) {
        if (!existsSync(dest) || !readFileSync(dest).equals(readFileSync(join(docsAssetsSrc, entry)))) {
          console.error(`site-build: drift: docs/assets/${entry}`);
          drift++;
        }
      } else {
        mkdirSync(join(SITE, 'docs', 'assets'), { recursive: true });
        copyFileSync(join(docsAssetsSrc, entry), dest);
      }
    }
  }

  // Orphan check: generated product directories must all be current products.
  const catalogDir = join(SITE, 'catalog');
  if (existsSync(catalogDir)) {
    const expected = new Set(data.enriched.map((p) => p.id));
    for (const entry of readdirSync(catalogDir)) {
      const dir = join(catalogDir, entry);
      if (entry !== 'index.html' && !expected.has(entry) && existsSync(dir)) {
        console.error(`site-build: orphan product directory: site/catalog/${entry}`);
        drift++;
      }
    }
  }

  if (check) {
    if (drift) {
      console.error(`site-build: ${drift} file(s) out of date — run: npm run site:build`);
      process.exitCode = 1;
    } else {
      console.log(`site-build: up to date (${pages.length} files)`);
    }
    return;
  }

  console.log(`site-build: wrote ${pages.length} files into site/`);
}

main();
