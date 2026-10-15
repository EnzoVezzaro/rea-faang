// HTML templates for the generated site. Every page is a pure function of the
// catalog data and the docs — no timestamps, no randomness — so `--check`
// mode can diff a rebuild byte for byte.
//
// Landing copy is drafted in `site/COPY.md` and mirrored here; edit the copy
// there first, then apply the same change to `homePage()`.

import { escapeHtml } from './markdown.mjs';
import { companyLogoSvg } from './logos.mjs';
import { agentInstructions, productDescription } from '../agent-kit-content.mjs';

export const BASE_URL = 'https://rae-faang-landing.vercel.app';
export const REPO_URL = 'https://github.com/EnzoVezzaro/rea-faang';

export const STATUS_META = {
  available: { label: 'available', cls: 'badge-available' },
  partial: { label: 'partial', cls: 'badge-partial' },
  pending: { label: 'no verified alternative', cls: 'badge-pending' },
};

function companyLogo(id, cls = 'company-logo') {
  return companyLogoSvg(id, cls);
}

const FONTS =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap';


function esc(s) {
  return escapeHtml(String(s));
}

function attr(s) {
  return escapeHtml(String(s));
}

// Quote an --alt value only when the shell needs it, e.g. "Ceph (RADOS Gateway)".
function shellArg(name) {
  return /^[A-Za-z0-9._-]+$/.test(name) ? String(name) : `"${name}"`;
}

/**
 * Page shell. `depth` is the directory depth of the page (0 = site root), so
 * every internal link stays relative and works under both the Vercel root
 * domain and the GitHub Pages subpath.
 */
export function layout({
  title,
  description,
  path,
  depth = 0,
  active = null,
  content,
  bodyClass = '',
}) {
  const p = depth === 0 ? '' : '../'.repeat(depth);
  const ogUrl = BASE_URL + '/' + path.replace(/^\//, '');
  const navLink = (href, label, key) =>
    `<a href="${attr(href)}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`;
  const homeAnchors =
    active === 'home'
      ? `<a href="#solution">How it works</a>
            <a href="#proof">Proof</a>
            <a href="#faq">FAQ</a>`
      : '';

  return `<!doctype html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Runs before the stylesheet so reveal styles only apply where the
         motion layer can actually drive them. -->
    <script>document.documentElement.classList.replace("no-js", "js");</script>
    <title>${esc(title)}</title>
    <meta name="description" content="${attr(description)}" />
    <meta name="color-scheme" content="dark" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${attr(title)}" />
    <meta property="og:description" content="${attr(description)}" />
    <meta property="og:url" content="${attr(ogUrl)}" />
    <link rel="canonical" href="${attr(ogUrl)}" />
    <link rel="icon" href="${p}favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="${FONTS}" rel="stylesheet" />
    <link rel="stylesheet" href="${p}styles.css" />
  </head>
  <body class="${attr(bodyClass)}">
    <div class="scroll-rail" data-scroll-rail aria-hidden="true"></div>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="wordmark" href="${p}index.html" aria-label="RAE FAANG home">
          <img class="wordmark-image" src="${p}docs/assets/brand-logo-icon.png" alt="RAE FAANG" width="224" height="43" />
        </a>
        <nav class="nav" aria-label="Primary">
          ${navLink(`${p}catalog/`, 'Catalog', 'catalog')}
          ${navLink(`${p}docs/`, 'Docs', 'docs')}
          ${homeAnchors}
        </nav>
        <details class="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile primary">
            <a href="${p}catalog/">Catalog</a>
            <a href="${p}docs/">Docs</a>
            ${active === 'home' ? '<a href="#solution">How it works</a><a href="#proof">Proof</a><a href="#faq">FAQ</a>' : ''}
          </nav>
        </details>
        <a class="btn btn-ghost header-github" href="${REPO_URL}">GitHub ↗</a>
      </div>
    </header>
    <main id="main">
${content}
    </main>
    <footer class="site-footer">
      <div class="wrap footer-inner">
        <div>            <p class="footer-mark">RAE FAANG</p>
          <p class="footer-mission">

            Product research, open-source alternatives, and agent skills to build beyond Meta, Amazon,
            Apple, Netflix and Google. Your agent builds in your project. MIT licensed.
          </p>
        </div>
        <div class="footer-links">
          <a href="${p}catalog/">Catalog</a>
          <a href="${p}docs/">Docs</a>
          <a href="${REPO_URL}">GitHub</a>
          <a href="${REPO_URL}/blob/main/LICENSE">MIT License</a>
          <a href="https://github.com/EnzoVezzaro/repo-shield">Repo Shield</a>
        </div>
      </div>
      <div class="wrap footer-fine">
        <p>
          Product names are used as functional references only and imply no
          affiliation or endorsement. Implementations must comply with applicable
          laws, licenses, and third-party rights. No AI training: see
          <a href="${REPO_URL}/blob/main/NOTICE">NOTICE</a>.
        </p>
      </div>
    </footer>
    ${active === 'home' ? '<script src="assets/motion.js" defer></script>' : ''}
  </body>
</html>
`;
}

function statusBadge(status) {
  const meta = STATUS_META[status];
  return `<span class="badge ${meta.cls}">${meta.label}</span>`;
}

// A labeled state pill: color plus visible text, never color alone.
function statusPill(kind, label) {
  return `<span class="pill pill-${kind}"><span class="pill-dot" aria-hidden="true"></span>${esc(label)}</span>`;
}

function licenseTag(license) {
  const proprietary = /proprietary|n\/a/i.test(license);
  return `<span class="license${proprietary ? ' license-closed' : ''}">${esc(license)}</span>`;
}

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

function buildPassMarkup({ featured, products, interactive = false }) {
  const productOptions = products
    .map((p) => {
      const candidate = p.alternatives.find((alternative) => !/proprietary/i.test(alternative.license || ''));
      return `<option value="${attr(p.id)}" data-company="${attr(p.companyName)}" data-foundation="${attr(p.status === 'pending' ? 'No verified alternative' : candidate?.name || 'No candidate listed')}" data-coverage="${attr(p.status)}"${p.id === featured.id ? ' selected' : ''}>${esc(p.name)}</option>`;
    })
    .join('');
  const statusLabels = { available: 'Mature alternative listed', partial: 'Partial coverage', pending: 'No verified alternative' };
  const detailHref = `${interactive ? 'catalog/' : './'}${attr(featured.id)}/`;
  const skillHref = interactive ? `catalog/${attr(featured.id)}/agent-kit.md` : 'agent-kit.md';
  const foundation = featured.status === 'pending' ? null : featured.alternatives.find((alternative) => !/proprietary/i.test(alternative.license || ''));
  const coverage = statusLabels[featured.status] || 'Research status not verified';
  const foundationLabel = featured.status === 'pending' ? 'No verified alternative' : foundation?.name || 'No candidate listed';
  const select = interactive
    ? `<label class="pass-select-label" for="build-pass-product">Personalize this pass</label><select class="pass-select" id="build-pass-product" aria-label="Choose a product for the build pass">${productOptions}</select>`
    : `<div class="pass-static-identity"><span>Product skill</span><a href="${skillHref}" download>Download ${esc(featured.name)} skill ↓</a></div>`;
  return `<div class="pass-stage" data-build-pass>
    <article class="build-pass" data-pass-status="${attr(featured.status)}" aria-label="Product Build Pass for ${attr(featured.name)}">
      <div class="build-pass-brand"><span class="pass-mark" aria-hidden="true"><img src="${interactive ? 'docs/assets/brand-symbol.png' : '../../docs/assets/brand-symbol.png'}" alt="" width="22" height="22" /></span><span>RAE FAANG</span><span>PRODUCT BUILD PASS</span></div>
      <div class="build-pass-core">
        <p class="pass-kicker">CHOOSE A PRODUCT · BUILD WITH YOUR AGENT</p>
        <h2 class="pass-title" data-pass-name>${esc(featured.name)}</h2>
        <div class="pass-detail"><span>COMPANY</span><strong data-pass-company>${esc(featured.companyName)}</strong></div>
        <div class="pass-detail"><span>REUSE RESEARCH</span><strong data-pass-foundation>${esc(foundationLabel)}</strong></div>
        <div class="pass-status" data-pass-coverage-state="${attr(featured.status)}"><span class="pass-status-dot" aria-hidden="true"></span><span data-pass-coverage>${coverage}</span></div>
      </div>
      <div class="pass-selector-group">${select}</div>
      <div class="pass-actions"><a class="pass-skill-link" data-pass-skill href="${skillHref}" download>Get this product skill <span aria-hidden="true">↓</span></a>${interactive ? `<a class="pass-dossier-link" data-pass-dossier href="${detailHref}">View dossier</a>` : ''}</div>
      <div class="pass-serial"><span>RAE / FIELD NOTE · Product skill included.</span><span data-pass-id>${attr(featured.id)}</span></div>
    </article>
    ${interactive ? '<p class="sr-only" data-pass-announcement aria-live="polite"></p>' : ''}
    ${interactive ? '<p class="pass-instruction">Choose a product. Its real catalog details and downloadable skill update together.</p>' : ''}
  </div>`;
}

function previewCard(p, depth) {
  const lead = p.alternatives[0];
  const coverageLabels = { available: 'mature alternative listed', partial: 'partial alternative coverage', pending: 'no verified alternative' };
  return `        <a class="pcard" href="${'../'.repeat(depth)}catalog/${attr(p.id)}/" data-status="${p.status}">
          <div class="pcard-top">
            ${companyLogo(p.company_id, 'pcard-company-mono')} <span class="pcard-company">${esc(p.companyName)}</span>
            <span class="badge ${STATUS_META[p.status].cls}">${coverageLabels[p.status] || p.status}</span>
          </div>
          <h3>${esc(p.name)}</h3>
          <p class="pcard-lead">${lead ? `&rarr; ${esc(lead.name)}<span class="pcard-license"> · ${esc(lead.license)}</span>` : 'no verified alternative listed'}</p>
        </a>`;
}

export function homePage({ counts, preview, testsCount, diagram = [], products = [], reaCount = 0 }) {
  const total = counts.available + counts.partial + counts.pending;
  const statusUrl = (status) => `catalog/#s-${status}`;
  const coverageLabels = { available: 'mature alternative listed', partial: 'partial alternative coverage', pending: 'no verified alternative' };
  const glyphSpotlights = preview.map((product) => `            <li class="glyph-spotlight" data-coverage="${attr(product.status)}">
              <a href="catalog/${attr(product.id)}/">
                <span class="glyph-spotlight-name">${esc(product.name)}</span>
                <span class="glyph-spotlight-meta">${esc(product.companyName)} <span>${coverageLabels[product.status]}</span></span>
              </a>
            </li>`).join('\n');
  const companyOrder = ['google', 'apple', 'amazon_aws', 'amazon', 'netflix', 'meta'];
  const productsByCompany = new Map(companyOrder.map((id) => [id, []]));
  products.forEach((product) => {
    if (!productsByCompany.has(product.company_id)) productsByCompany.set(product.company_id, []);
    productsByCompany.get(product.company_id).push(product);
  });
  for (const companyProducts of productsByCompany.values()) companyProducts.sort((a, b) => a.name.localeCompare(b.name));
  const groupedCompanyIds = [...companyOrder, ...[...productsByCompany.keys()].filter((id) => !companyOrder.includes(id))];
  const companyNames = { google: 'Google', apple: 'Apple', amazon_aws: 'Amazon Web Services', amazon: 'Amazon', netflix: 'Netflix', meta: 'Meta' };
  const catalogGroups = groupedCompanyIds.map((companyId) => {
    const companyProducts = productsByCompany.get(companyId);
    const companyName = companyNames[companyId] || companyProducts[0]?.companyName || companyId;
    if (!companyProducts.length) return '';
    const rows = companyProducts.map((product) => `              <li class="catalog-glyph" data-coverage="${attr(product.status)}"><a href="catalog/${attr(product.id)}/"><span class="catalog-glyph-name">${esc(product.name)}</span><span class="catalog-glyph-status">${coverageLabels[product.status]}</span></a></li>`).join('\n');
    return `          <section class="catalog-glyph-group" aria-labelledby="glyph-company-${attr(companyId)}">
            <h3 id="glyph-company-${attr(companyId)}">${esc(companyName)}<span>${companyProducts.length}</span></h3>
            <ul aria-label="${esc(companyName)} products">
${rows}
            </ul>
          </section>`;
  }).filter(Boolean).join('\n');
  const featured = diagram[0] || null;
  const featuredProduct = featured && (products.find((product) => product.id === featured.product_id) || {
    id: featured.product_id, name: featured.product, status: featured.status, companyName: 'RAE FAANG', alternatives: [],
  });
  const content = `      <!-- Landing thesis and catalog-derived product index -->
      <section class="hero" id="top">
        <div class="wrap hero-inner">
          <div class="hero-copy">
            <h1>Build the software<br />you need.</h1>
            <p class="hero-proposition">Start with product research, not a blank page.</p>
            <p class="lede">
              Each catalog entry includes research, open-source projects to consider, and a Markdown
              skill for your coding agent. Use it to plan and build an independent implementation in
              your project.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="catalog/">Pick a product <span aria-hidden="true">↗</span></a>
              <a class="btn btn-secondary" href="#solution">See how it works</a>
            </div>
            <p class="hero-note"><span class="dot" aria-hidden="true"></span>${total} products · ${counts.available} mature alternatives · ${counts.partial} partial · ${counts.pending} without a verified alternative</p>
            <div class="brand-row" aria-label="Companies covered">
              ${['meta','amazon','amazon_aws','apple','netflix','google'].map((id) => `${companyLogoSvg(id, 'brand-logo', 'mono')}<span>${({ meta:'Meta', amazon:'Amazon', amazon_aws:'AWS', apple:'Apple', netflix:'Netflix', google:'Google' }[id])}</span>`).join(' ')}
            </div>
          </div>
          <div class="hero-inventory">
            <section class="glyph-spotlight-section" aria-labelledby="glyph-spotlight-title">
              <div class="glyph-spotlight-heading">
                <h2 id="glyph-spotlight-title">Real products. Open skills.</h2>
                <a href="catalog/">Browse all ${total} <span aria-hidden="true">↗</span></a>
              </div>
              <ul class="glyph-spotlight-list" aria-label="Featured products from the catalog">
${glyphSpotlights}
              </ul>
            </section>
            ${featuredProduct ? `<aside class="hero-graph build-pass-panel" aria-label="Personalize a product build pass">
              <p class="pass-panel-note"><span aria-hidden="true">+</span> Your selection, from the catalog</p>
              ${buildPassMarkup({ featured: featuredProduct, products, interactive: true })}
            </aside>` : ''}
          </div>
        </div>
      </section>

      <!-- 2. THE STORY -->
      <section class="section" id="story" aria-labelledby="story-h">
        <div class="wrap split">
          <div>
            <p class="eyebrow">The engineering premise</p>
            <h2 id="story-h">One product. One skill. A clearer place to start.</h2>
            <p>
              Each product's Markdown file is the build skill for that product. Give it to your coding
              agent in the project where you want to build. It provides product context, research sources,
              open-source projects to evaluate, and directions for implementing and verifying the product.
            </p>
            <p>
              Your agent does the building in your project. The skill helps it reuse what fits, define
              a clear scope from the evidence, then build and verify an independent version of the product.
            </p>
          </div>
          <ul class="principles">
            <li><strong>Product context</strong> — behavior and sources for your agent to inspect</li>
            <li><strong>What to reuse</strong> — candidate open-source foundations to evaluate</li>
            <li><strong>What to build</strong> — product-specific direction for your agent</li>
            <li><strong>How to verify</strong> — scoped tasks and checks for the result</li>
          </ul>
        </div>
      </section>

      <!-- Full product index: every name links to its real catalog record -->
      <section class="section catalog-field-section" id="map" aria-labelledby="map-h">
        <div class="wrap">
          <div class="section-head reveal-target" data-reveal>
            <h2 id="map-h">A field of ${total} products.</h2>
            <p class="section-lede">Each name opens its research record and downloadable skill. Coverage describes research into reuse options, not whether your agent can build the product.</p>
          </div>
          <div class="catalog-glyph-field">
${catalogGroups}
          </div>
          <div class="map-more"><a class="btn btn-secondary" href="catalog/">Search and filter the full catalog <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <!-- 4. THE NUMBERS -->
      <section class="section" id="status" aria-labelledby="status-h">
        <div class="wrap">
          <div class="section-head reveal-target" data-reveal>
            <p class="eyebrow">Alternative coverage</p>
            <h2 id="status-h">What your agent can reuse—and what needs a closer look.</h2>
            <p class="section-lede">
              These counts summarize the catalog's research into open-source alternatives. They do not say
              whether you can build a product. ${counts.available} products have a mature candidate listed;
              ${counts.pending} have no suitable alternative verified here. Each product has a skill for your agent.
            </p>
          </div>

          <dl class="stats">
            <div class="stat" data-reveal>
              <dt>Products catalogued</dt>
              <dd><span class="num">${total}</span><span class="of">products</span></dd>
              <p class="stat-note">in-scope inventory, six company entries</p>
            </div>
            <div class="stat" data-reveal>
              <dt>Mature alternatives listed</dt>
              <dd><span class="num">${counts.available}</span></dd>
              <p class="stat-note">catalogued with a mature open-source project for your agent to assess</p>
            </div>
            <div class="stat" data-reveal>
              <dt>No verified alternative</dt>
              <dd><span class="num">${counts.pending}</span></dd>
              <p class="stat-note">research status for reuse options; the product build skill is available either way</p>
            </div>
            <div class="stat" data-reveal>
              <dt>Tooling test cases</dt>
              <dd><span class="num">${testsCount}</span></dd>
              <p class="stat-note">in the repository; run <span class="mono">npm test</span> for the current test results</p>
            </div>
          </dl>
        </div>
      </section>

      <!-- 5. WHAT THE CATALOG ANSWERS -->
      <section class="section" id="problem" aria-labelledby="problem-h">
        <div class="wrap split">
          <div>
            <p class="eyebrow">Choose what to reuse</p>
            <h2 id="problem-h">Give your agent a better place to start.</h2>
            <p>
              Every product has a Markdown skill for your coding agent. It links to product context,
              research, candidate projects and directions for planning a scoped implementation in your
              project.
            </p>
            <p>
              Review the sources and candidate licenses, then use the skill to plan and test the work.
              Coverage labels describe the catalog's research into reuse options, not build feasibility.
            </p>
          </div>
          <ul class="principles">
            <li><strong>Sources</strong>: follow links to public references</li>
            <li><strong>Checkable</strong>: run the listed commands to reproduce counts</li>
            <li><strong>Actionable</strong>: each product has a skill for your coding agent</li>
            <li><strong>Bounded</strong>: public information only; no access-control bypass</li>
            <li><strong>Reuse first</strong>: assess existing projects before building</li>
          </ul>
        </div>
      </section>

      <!-- 6. SOLUTION / MECHANISM -->
      <section class="section" id="solution" aria-labelledby="solution-h">
        <div class="wrap">
          <div class="section-head reveal-target" data-reveal>
            <p class="eyebrow">The product skill, in practice</p>
            <h2 id="solution-h">Choose a product. Give its skill to your agent.</h2>
            <p class="section-lede">Each product's Markdown skill points your coding agent to research and candidate projects, with directions for planning and testing work in your project.</p>
          </div>

          <ol class="workflow-line">
            <li><h3>Choose</h3><p>${total} product records, each with a product-specific skill and research links.</p></li>
            <li><h3>Review</h3><p>Compare candidate projects with the product research; ${counts.available} products have a mature candidate listed.</p></li>
            <li><h3>Plan</h3><p>Give the Markdown skill to your coding agent and agree on a scope for your project.</p></li>
            <li><h3>Build and test</h3><p>Implement the agreed scope in your project and run its checks; ${reaCount} REA reports record public-page observations.</p></li>
          </ol>
          <p class="workflow-coverage">${counts.pending} products have no verified alternative and ${counts.partial} have partial coverage. These labels describe reuse research, not build capability.</p>
          <a class="text-link workflow-source" href="${REPO_URL}/tree/main/catalog/skills">Read the product skills ↗</a>
          <p class="workflow-source">The agent workflow is documented in <a class="text-link" href="docs/agent-workflow.html">the repository guide</a>.</p>
        </div>
      </section>

      <!-- 7. PROOF AND DETAIL -->
      <section class="section" id="proof" aria-labelledby="proof-h">
        <div class="wrap">
          <div class="section-head reveal-target" data-reveal>
            <p class="eyebrow">Research and candidate projects</p>
            <h2 id="proof-h">Browse the research behind the suggestions.</h2>
            <p class="section-lede">These are candidate projects, not guaranteed replacements. Product pages show what the research supports, where coverage is uncertain, and which sources were used.</p>
          </div>

          <div class="table-wrap">
            <table class="ptable">
              <caption>
                Examples of open-source projects listed for these products
              </caption>
              <thead>
                <tr>
                  <th scope="col">Target product</th>
                  <th scope="col">Candidate project to assess</th>
                  <th scope="col">License</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><a class="table-product" href="catalog/aws-s3/">Amazon S3</a></th>
                  <td>Ceph (RADOS Gateway)</td>
                  <td class="mono-cell">LGPL-2.1</td>
                </tr>
                <tr>
                  <th scope="row"><a class="table-product" href="catalog/aws-lambda/">AWS Lambda</a></th>
                  <td>OpenFaaS</td>
                  <td class="mono-cell">MIT</td>
                </tr>
                <tr>
                  <th scope="row"><a class="table-product" href="catalog/netflix-streaming/">Netflix Streaming</a></th>
                  <td>Jellyfin</td>
                  <td class="mono-cell">GPL-2.0</td>
                </tr>
                <tr>
                  <th scope="row"><a class="table-product" href="catalog/gmail/">Gmail</a></th>
                  <td>Mailcow</td>
                  <td class="mono-cell">GPL-3.0</td>
                </tr>
                <tr>
                  <th scope="row"><a class="table-product" href="catalog/meta-whatsapp/">WhatsApp</a></th>
                  <td>Matrix / Element</td>
                  <td class="mono-cell">Apache-2.0</td>
                </tr>
                <tr>
                  <th scope="row"><a class="table-product" href="catalog/google-maps/">Google Maps</a></th>
                  <td>OpenStreetMap + Organic Maps</td>
                  <td class="mono-cell">ODbL-1.0</td>
                </tr>
                <tr>
                  <th scope="row"><a class="table-product" href="catalog/google-workspace/">Google Workspace</a></th>
                  <td>Nextcloud</td>
                  <td class="mono-cell">AGPL-3.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="prov">
            <h3 class="mini-h">Catalog data, with verification commands</h3>
            <ul class="principles">
              <li>
                <strong>${total}</strong> products catalogued across 6 company
                entries: <span class="mono">rae products list</span>
              </li>
              <li>
                <strong>${total}</strong> research dossiers; schema checks run with <span class="mono">npm run validate</span>
              </li>
              <li>
                <strong>${reaCount}</strong> REA reports of public web pages, with captured evidence committed;
                run <span class="mono">npm run rea:catalog</span> to add reports
              </li>
              <li>
                <strong>${counts.available} / ${counts.partial} / ${counts.pending}</strong> mature alternative / partial coverage / no verified alternative
                research states: <span class="mono">npm run skills:catalog</span>
              </li>
              <li>
                <strong>${testsCount}</strong> tooling test cases in the repository.
                Run <span class="mono">npm test</span> for the current results.
              </li>
              <li>
                <strong>This page</strong> is generated from the same data:
                <span class="mono">npm run site:build</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 8. OBJECTION HANDLING -->
      <section class="section" id="faq" aria-labelledby="faq-h">
        <div class="wrap">
          <div class="section-head reveal-target" data-reveal>
            <p class="eyebrow">Common questions</p>
            <h2 id="faq-h">How do I use a product skill?</h2>
          </div>

          <div class="faq">
            <details>
              <summary>How do I build a product with my agent?</summary>
              <p>
                Choose a product and download its Markdown skill, or generate the kit with the RAE CLI.
                Give the skill to your coding agent in your project. Its instructions cover product
                research, reuse decisions, building and verification.
              </p>
            </details>
            <details>
              <summary>What does the catalog add beyond candidate projects?</summary>
              <p>
                Each entry also includes product context and a skill with build directions. Use those to review the research, decide what to reuse and scope the work for your project. Coverage labels describe the catalog's research, not the feasibility of your implementation.
              </p>
            </details>
            <details>
              <summary>What sources can the research use?</summary>
              <p>
                The research uses public product information, official documentation, published protocols and observations of unauthenticated web pages. It does not use proprietary source, decompile software, copy protected assets or bypass access controls.
              </p>
            </details>
            <details>
              <summary>What should I check before building?</summary>
              <p>
                Review the cited sources, candidate project licenses and any third-party rights that apply to your implementation. Product names are functional references; no affiliation or endorsement is implied. Rights holders can raise an issue on the repository.
              </p>
            </details>
            <details>
              <summary>Do I need to be an expert to use a product skill?</summary>
              <p>
                No. Choose a product, give its skill file to your coding agent, and ask it to follow
                the research, reuse and verification instructions in your project. The CLI and
                <span class="mono">docs/getting-started.md</span> show how to get the skill.
              </p>
            </details>
            <details>
              <summary>What does “no verified alternative” mean?</summary>
              <p>
                The catalog has not verified a suitable open-source project for the same user needs. It does not mean you cannot build the product. Give its Markdown skill to your coding agent; the agent can assess current projects and build in your project.
              </p>
            </details>
            <details>
              <summary>How can I check a product entry?</summary>
              <p>
                Open its research dossier and follow the cited sources. Where available, the product page also links to a REA report with observations from a public web page. <span class="mono">npm run validate</span> checks record structure and generated files; it does not confirm that every research claim is correct or current.
              </p>
            </details>
          </div>
        </div>
      </section>

      <!-- 9. FINAL CTA -->
      <section class="section section-last" id="start" aria-labelledby="start-h">
        <div class="wrap">
          <div class="cta">
            <h3 id="start-h">Pick a product. Start with the research.</h3>
            <p>
              Download its Markdown skill, review the sources and candidate projects, then give the skill to your coding agent. RAE FAANG is MIT-licensed; candidate projects and your implementation have their own licenses.
            </p>
            <a class="btn btn-primary" href="catalog/">Pick a product</a>
          </div>

          <div class="grid links links-after">
            <a class="linkcard" href="catalog/"><h3>The catalog</h3>
              <p>${total} products, with candidate projects, research and known gaps.</p></a>
            <a class="linkcard" href="docs/"><h3>Documentation</h3>
              <p>Getting started, CLI reference, schemas, the agent workflow.</p></a>
            <a class="linkcard" href="${REPO_URL}/blob/main/PLAN.md"><h3>The plan</h3>
              <p>Workstreams, definitions of done, what to pick up next.</p></a>
            <a class="linkcard" href="${REPO_URL}/blob/main/CONTRIBUTING.md"><h3>Contribute</h3>
              <p>Research, specify, build, test or document: start here.</p></a>
          </div>
        </div>
      </section>`;

  return layout({
    title: `Product research and build skills for coding agents | RAE FAANG`,
    description: `Browse product research, candidate open-source projects, and a Markdown build skill for each catalogued product. Give a skill to your coding agent and build in your project.`,
    path: '',
    depth: 0,
    active: 'home',
    bodyClass: 'page-home',
    content,
  });
}

/* ------------------------------------------------------------------ */
/* Catalog index                                                       */
/* ------------------------------------------------------------------ */

// A compact catalog row: product + company, candidate alternative + license,
// a distinct coverage label, and a clear open-details affordance. The whole
// row is the link, so the arrow is decorative.
function catalogRow(p) {
  const lead = p.alternatives[0];
  const alt = lead
    ? `${esc(lead.name)}${lead.license && !/^n\/a$/i.test(lead.license) ? `<span class="prow-license">· ${esc(lead.license)}</span>` : ''}`
    : '<span class="prow-none">No verified alternative</span>';
  return `          <a class="prow" href="${attr(p.id)}/" data-company="${attr(p.company_id)}" data-status="${p.status}">
            <span class="prow-id">
              <span class="prow-name">${esc(p.name)}</span>
              <span class="prow-company">${companyLogo(p.company_id)}${esc(p.companyName)}</span>
            </span>
            <span class="prow-alt">${alt}</span>
            <span class="prow-status"><span class="badge ${STATUS_META[p.status].cls}">${({ available: 'available', partial: 'partial', pending: 'no verified alternative' })[p.status]}</span></span>
            <span class="prow-open" aria-hidden="true">&#8599;</span>
          </a>`;
}

export function catalogPage({ products, counts, companies }) {
  const total = products.length;
  const order = ['available', 'partial', 'pending'];
  const sorted = [...products].sort(
    (a, b) =>
      a.company_id.localeCompare(b.company_id) ||
      order.indexOf(a.status) - order.indexOf(b.status) ||
      a.name.localeCompare(b.name),
  );

  const companyChips = [
    `<button class="chip" data-filter-company="all" aria-pressed="true">All <span class="chip-n">${total}</span></button>`,
    ...Object.entries(companies)
      .sort((a, b) => b[1].count - a[1].count)
      .map(
        ([id, c]) =>
          `<button class="chip" data-filter-company="${attr(id)}" aria-pressed="false">${companyLogo(id)} ${esc(c.name)} <span class="chip-n">${c.count}</span></button>`,
      ),
  ].join('\n            ');

  const statusChips = order
    .map(
      (s) =>
        `<button class="chip" data-filter-status="${s}" aria-pressed="false">${s === 'pending' ? 'no verified alternative' : STATUS_META[s].label} <span class="chip-n">${counts[s]}</span></button>`,
    )
    .join('\n            ');

  const rows = sorted.map(catalogRow).join('\n');

  const content = `      <section class="page-hero" id="top">
        <div class="wrap">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="../index.html">Home</a><span aria-hidden="true">/</span><span>Catalog</span>
          </nav>
          <h1>The catalog, live</h1>
          <p class="lede">
            Every product has a Markdown skill for your coding agent. Choose a row to inspect
            product research, candidate open-source projects, coverage, and build instructions.
            ${total} products across six company entries, generated from
            <span class="mono">catalog/products.jsonl</span> and the curated
            open-source map — not edited by hand.
          </p>
          <dl class="stats stats-slim">
            <div class="stat"><dt>Total products</dt><dd><span class="num">${total}</span></dd></div>
            <div class="stat"><dt>Available</dt><dd><span class="num">${counts.available}</span></dd></div>
            <div class="stat"><dt>Partial</dt><dd><span class="num">${counts.partial}</span></dd></div>
            <div class="stat"><dt>No verified alternative</dt><dd><span class="num">${counts.pending}</span></dd></div>
          </dl>
        </div>
      </section>

      <section class="section section-tight" aria-label="Product catalog">
        <div class="wrap">
          <div class="filters" role="group" aria-label="Filter products">
            <div class="filter-row">
              <label class="filter-label" for="catalog-search">Search</label>
              <input class="search" id="catalog-search" type="search" placeholder="Product or alternative…" autocomplete="off" />
            </div>
            <div class="filter-row">
              <span class="filter-label" id="filter-company-label">Company</span>
              <div class="chips" role="group" aria-labelledby="filter-company-label">
            ${companyChips}
              </div>
            </div>
            <div class="filter-row">
              <span class="filter-label" id="filter-status-label">Coverage</span>
              <div class="chips" role="group" aria-labelledby="filter-status-label">
            <button class="chip" data-filter-status="all" aria-pressed="true">All <span class="chip-n">${total}</span></button>
            ${statusChips}
              </div>
            </div>
          </div>

          <p class="filter-status" id="filter-status" role="status" aria-live="polite">Showing all ${total} products</p>

          <div class="product-rows" id="product-rows">
${rows}
          </div>

          <nav class="pager" id="catalog-pager" aria-label="Catalog pages" hidden>
            <button type="button" class="btn btn-secondary" id="pager-prev">Previous</button>
            <span class="pager-status" id="pager-status">Page 1 of ${Math.max(1, Math.ceil(sorted.length / 20))} · ${total} products</span>
            <button type="button" class="btn btn-secondary" id="pager-next">Next</button>
          </nav>

          <div class="empty" id="catalog-empty" hidden>
            <p><strong>No products match.</strong> Widen or reset the search and filters.</p>
            <button type="button" class="btn btn-secondary" id="catalog-reset">Reset filters</button>
          </div>

          <div class="legend">
            <p class="mini-h">Coverage legend</p>
            <ul>
              <li><span class="badge badge-available">mature alternative listed</span> this catalog has a candidate project for the product's core function; evaluate its fit for your needs.</li>
              <li><span class="badge badge-partial">partial alternative coverage</span> candidates cover some product needs but leave a material gap: scale, a proprietary service plane, licensed content, or hardware.</li>
              <li><span class="badge badge-pending">no verified alternative</span> research has not verified a suitable open-source project; give the product skill to your agent to assess current options and build in your project.</li>
            </ul>
          </div>
        </div>
      </section>

      <script src="../assets/catalog.js"></script>`;

  return layout({
    title: `Catalog — RAE FAANG`,
    description: `Browse ${total} FAANG products, each with a Markdown build skill for your coding agent, product research and candidate open-source projects.`,
    path: 'catalog/',
    depth: 1,
    active: 'catalog',
    bodyClass: 'page-catalog',
    content,
  });
}

/* ------------------------------------------------------------------ */
/* Product page                                                        */
/* ------------------------------------------------------------------ */

/**
 * Product-specific Markdown skill for a coding agent. Users can download the
 * skill or generate a copy with the installed CLI, then give it to their agent
 * to build in their own project. Kept in sync with
 * `rae <product-id>` by design.
 */
export function agentKitMd(p) {
  const alternatives = p.alternatives || [];
  const altLines = alternatives.length
    ? alternatives.map((a) => `- **${a.name}** (${a.license || 'license unverified'}) — ${a.url}\n  ${a.covers || 'Coverage not yet assessed.'}${a.note ? ` Note: ${a.note}` : ''}`).join('\n')
    : 'No suitable alternative is verified. This is a research gap, not proof that none exists.';
  const description = productDescription(p);
  const researchPath = `research/companies/${p.company_id}/products/${p.id}.md`;
  const reaPath = `catalog/rea/${p.company_id}/${p.id}.md`;
  const hasRea = p.hasRea ?? true;
  const workspacePath = `./${p.id} (a separately generated workspace; choose a writable output directory)`;
  const dossierPath = `research/companies/${p.company_id}/products/${p.id}.md`;
  const instructions = agentInstructions({ ...p, research_status: p.research_status || 'pending' }, { workspacePath, researchUrl: `${REPO_URL}/blob/main/${dossierPath}` });
  const code = (value) => String.fromCharCode(96) + String(value).replaceAll(String.fromCharCode(96), '') + String.fromCharCode(96);
  return `---
name: build-${p.id}
description: Coding-agent build skill for ${p.name}. Research the product, assess reusable projects, and build and verify it in your project.
---

# Build ${p.name} with your coding agent

| | |
|---|---|
| **Target product** | ${p.name} (${code(p.id)}) |
| **Company** | ${p.companyName} (${code(p.company_id)}) |
| **Product type** | ${code(p.product_type)} |
| **Official URL** | ${p.official_url} |
| **Alternative coverage** | **${({ available: 'mature alternative listed', partial: 'partial alternative coverage', pending: 'no verified alternative' })[p.status] || p.status}** |
| **Research status** | **${p.research_status || 'pending'}** |

## Product description

${description}

## Research references

- Dossier: ${code(`rae research dossier ${p.id}`)} or [view the repository dossier](${REPO_URL}/blob/main/${researchPath})
- ${hasRea ? `Public web-surface observation: [${reaPath}](${REPO_URL}/blob/main/${reaPath})` : `No REA capture recorded yet; this does not block research from public official sources.`}

## Open-source landscape

${altLines}

## Gap and verdict

${p.gap || 'Not yet assessed; research before choosing a build scope.'}

${p.verdict || 'Not yet assessed.'}

${instructions}

## CLI commands

- Inspect product metadata: ${code(`rae products show ${p.id} --format json`)}.
- Read the dossier: ${code(`rae research dossier ${p.id}`)}.
- Check research readiness: ${code('rae research coverage')} and ${code('rae research validate')}.
- Generate a copy of this skill and optional MCP config: ${code(`rae ${p.id} --out ./${p.id}-agent`)}. Give ${code('skill.md')} to your coding agent in the project where you want to build.
- Optionally scaffold a starter workspace: ${code(`rae build product ${p.id} --out ./${p.id}`)}.

## Sources

${(p.sources || []).map((source) => `- ${source}`).join('\n') || '- No source recorded yet; research before making product claims.'}

---

Generated from the RAE FAANG catalog — ${REPO_URL}
`;
}

export function productPage({ p, prev, next }) {
  const altCount = p.alternatives.length;
  const openAlt = (p.alternatives || []).find((a) => !/proprietary/i.test(a.license || ''));
  const alts = p.alternatives.map((a) => {
    return `          <article class="alt">
            <div class="alt-head">
              <h3><a href="${attr(a.url)}" rel="noopener">${esc(a.name)} <span aria-hidden="true">↗</span></a></h3>
              ${licenseTag(a.license)}
            </div>
            <p class="alt-covers">${esc(a.covers)}</p>
            <p class="alt-note">${esc(a.note)}</p>
            <input class="rail-input alt-cmd" type="text" value="${attr(`rae alternatives clone ${p.id} --alt "${a.name}"`)}" title="Click to copy" aria-label="Command to clone ${attr(a.name)}" readonly>
          </article>`;
  });

  const reaPath = `catalog/rea/${p.company_id}/${p.id}.md`;
  const dossierPath = `research/companies/${p.company_id}/products/${p.id}.md`;
  const skillPath = `catalog/skills/${p.company_id}/${p.id}.md`;
  const reaUrl = `${REPO_URL}/blob/main/${reaPath}`;
  const dossierUrl = `${REPO_URL}/blob/main/${dossierPath}`;
  const skillUrl = `${REPO_URL}/blob/main/${skillPath}`;

  const expandedDescription = productDescription(p)
    .split('\n\n')
    .map((paragraph) => `<p>${esc(paragraph)}</p>`)
    .join('\n              ');
  const caps = p.capabilities.map((c) => `<li>${esc(c)}</li>`).join('\n              ');
  const sources = p.sources.map((s) => `<li><a href="${attr(s)}" rel="noopener">${esc(s)}</a></li>`).join('\n              ');
  const categories = p.categories.map((c) => `<span class="chip-static">${esc(c)}</span>`).join(' ');

  const coverage = {
    available: { kind: 'available', label: 'available' },
    partial: { kind: 'partial', label: 'partial' },
    pending: { kind: 'pending', label: 'no verified alternative' },
  }[p.status] || { kind: 'pending', label: p.status };

  const steps = [
    { name: 'Choose', note: 'Pick the product you want to build.' },
    { name: 'Review', note: 'Ask your agent to check the product skill, evidence and alternatives.' },
    { name: 'Build', note: 'Give the skill to your coding agent and build in your own project.' },
    { name: 'Verify', note: 'Run the checks for your implementation and review the result.' },
  ];

  const stepper = steps
    .map(
      (s, i) => `              <li class="step step-todo">
                <span class="step-n" aria-hidden="true">${i + 1}</span>
                <span class="step-body"><span class="step-name">${s.name}</span><span class="step-note">${esc(s.note)}</span></span>
              </li>`,
    )
    .join('\n');

  const artifactRows = [
    `<li class="artifact"><a class="artifact-name" href="agent-kit.md" download>agent-kit.md</a><span class="artifact-note">Downloadable Markdown skill with product-specific instructions for your coding agent.</span>${statusPill('available', 'available')}</li>`,
    `<li class="artifact"><span class="artifact-name">skill.md</span><span class="artifact-note">Generated copy of the same product skill — <span class="mono">rae ${attr(p.id)} --out ./${attr(p.id)}-agent</span>.</span>${statusPill('neutral', 'in kit')}</li>`,
    `<li class="artifact"><span class="artifact-name">mcp.json</span><span class="artifact-note">Optional MCP server config — <span class="mono">rae ${attr(p.id)} --out ./${attr(p.id)}-agent</span>.</span>${statusPill('neutral', 'in kit')}</li>`,
    `<li class="artifact"><span class="artifact-name">Product workspace</span><span class="artifact-note">Optional starting workspace for your agent — <span class="mono">rae build product ${attr(p.id)} --out ./${attr(p.id)}</span>.</span></li>`,
  ].join('\n              ');

  const nextStep = openAlt
    ? `Give the ${esc(p.name)} skill to your coding agent in your project. Ask it to evaluate <a href="${attr(openAlt.url)}" rel="noopener">${esc(openAlt.name)} ↗</a> against your needs, reuse what fits, then follow the skill's build and verification instructions.`
    : `No open-source candidate has been verified in this catalog. Give the ${esc(p.name)} build skill to your coding agent; ask it to review the evidence and current projects, then build the product in your project.`;

  const content = `      <section class="page-hero product-hero" id="top">
        <div class="wrap">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="../../index.html">Home</a><span aria-hidden="true">/</span><a href="../index.html">Catalog</a><span aria-hidden="true">/</span><a href="../index.html#c-${attr(p.company_id)}">${esc(p.companyName)}</a>
          </nav>
          <div class="product-heading">
            <h1>${esc(p.name)}</h1>
            <p class="lede">${esc(p.summary)}</p>
            <div class="status-row">
              <div class="status-item"><span class="status-key">Alternative coverage</span>${statusPill(coverage.kind, coverage.kind === 'pending' ? 'no verified alternative' : coverage.label)}</div>
              <div class="status-item"><span class="status-key">Product skill</span>${statusPill('available', 'ready for your agent')}</div>
            </div>
          </div>
          <div class="product-pass-preview" aria-label="Product build pass">${buildPassMarkup({ featured: p, products: [p] })}</div>
          <dl class="meta">
            <div><dt>Company</dt><dd>${companyLogo(p.company_id)} <a href="../index.html#c-${attr(p.company_id)}">${esc(p.companyName)}</a> <span class="mono">(${attr(p.company_id)})</span></dd></div>
            <div><dt>Product type</dt><dd><span class="mono">${attr(p.product_type)}</span></dd></div>
            <div><dt>Categories</dt><dd>${categories}</dd></div>
            <div><dt>Official site</dt><dd><a href="${attr(p.official_url)}" rel="noopener">${attr(p.official_url)} ↗</a></dd></div>
            <div><dt>Catalog ID</dt><dd><span class="mono">${attr(p.id)}</span></dd></div>
          </dl>
        </div>
      </section>

      <section class="section section-tight">
        <div class="wrap dossier">
          <aside class="dossier-rail" aria-label="Record summary">
            <div class="rail-block">
              <p class="rail-key">Alternative coverage</p>
              ${statusPill(coverage.kind, coverage.kind === 'pending' ? 'no verified alternative' : coverage.label)}
            </div>
            <div class="rail-block">
              <p class="rail-key">License</p>
              ${openAlt ? licenseTag(openAlt.license) : '<span class="rail-none">License not verified</span>'}
            </div>
            <div class="rail-block">
              <p class="rail-key">Product skill</p>
              <input class="rail-input" type="text" value="rae ${attr(p.id)} --out ./${attr(p.id)}-agent" title="Click to copy" aria-label="Command to generate the ${esc(p.name)} skill" readonly>
              <a class="rail-dl" href="agent-kit.md" download>Download Markdown skill</a>
            </div>
            ${openAlt
              ? `<div class="rail-block">
              <p class="rail-key">Start from</p>
              <a href="${attr(openAlt.url)}" rel="noopener">${esc(openAlt.name)} ↗</a>
            </div>`
              : ''}
          </aside>

          <div class="dossier-main">
            <section class="dossier-block" aria-labelledby="glance-h">
              <h2 id="glance-h">At a glance</h2>
              ${expandedDescription}
              <ul class="cap-list">
              ${caps}
              </ul>
            </section>

            <section class="dossier-block" aria-labelledby="alts-h">
              <h2 id="alts-h">Open-source alternative</h2>
              <p class="dossier-lede">${altCount ? `${altCount} candidate project${altCount > 1 ? 's' : ''} in the landscape. A candidate may cover all, part, or none of what ${esc(p.name)} does — read the coverage and gaps below.` : 'No open-source candidate has been verified in this catalog. Use the product skill to have your agent review current projects and build in your project.'}</p>
              ${altCount ? `<div class="alt-grid">
${alts.join('\n')}
              </div>` : ''}
            </section>

            <section class="dossier-block" aria-labelledby="gap-h">
              <h2 id="gap-h">Coverage and gaps</h2>
              <div class="verdict-gap">
                <div class="callout verdict">
                  <p class="mini-h">Alternative coverage</p>
                  <p>${esc(p.verdict).replaceAll(/pending to open-source/gi, 'no verified open-source alternative')}</p>
                </div>
                <div class="callout gapbox">
                  <p class="mini-h">The gap</p>
                  <p>${esc(p.gap)}</p>
                </div>
              </div>
            </section>

            <section class="dossier-block" aria-labelledby="kit-h">
              <h2 id="kit-h">Build this product with your agent</h2>
              <p>This Markdown file is the coding-agent skill for ${esc(p.name)}. Give it to your agent in your project; it guides research, reuse decisions, implementation and verification.</p>
              <div class="cmd-banner">
                <p class="cmd-banner-label">Get the ${esc(p.name)} build skill</p>
                <pre class="cmd-block"><code>rae ${attr(p.id)} --out ./${attr(p.id)}-agent</code></pre>
                <p class="cmd-banner-note">Generate the skill with the RAE CLI, or <a href="agent-kit.md" download>download the Markdown skill</a>. The <a href="${skillUrl}">source skill</a> is also available in the catalog.</p>
              </div>
              <ul class="artifact-list">
              ${artifactRows}
              </ul>
              <ol class="stepper" aria-label="How to build this product with your agent">
${stepper}
              </ol>
            </section>

            <section class="dossier-block" aria-labelledby="evidence-h">
              <h2 id="evidence-h">Evidence</h2>
              <h3 class="dossier-sub">Sources</h3>
              <ul class="source-list">
              ${sources}
              </ul>
              <h3 class="dossier-sub">Provenance</h3>
              <ul class="source-list">
                <li><a href="${REPO_URL}/blob/main/catalog/products.jsonl">Catalog record</a> — <span class="mono">catalog/products.jsonl</span></li>
                <li><a href="${dossierUrl}">Research dossier</a> — <span class="mono">${esc(dossierPath)}</span></li>
                ${p.hasRea
                  ? `<li><a href="${reaUrl}">REA web-surface report</a> — <span class="mono">${esc(reaPath)}</span></li>`
                  : `                <li>REA web-surface report — not captured; your agent can still use public product documentation and record evidence while building.</li>`}
                <li><a href="${skillUrl}">Open-source skill file</a> — <span class="mono">${esc(skillPath)}</span></li>
              </ul>
            </section>

            <section class="dossier-block" aria-labelledby="next-h">
              <h2 id="next-h">Next step</h2>
              <div class="callout callout-plain">
                <p>${nextStep}</p>
                <p class="mono-note">Give the product skill to your coding agent in the project where you want to build. Optional starter workspace: <span class="mono">rae build product ${attr(p.id)} --out ./${attr(p.id)}</span>. <a href="../../docs/cli-reference.html">CLI reference</a>.</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section class="section section-tight section-last">
        <div class="wrap pager">
          ${prev ? `<a class="pager-link pager-prev" href="../${attr(prev.id)}/"><span class="pager-dir">← Previous</span><span class="pager-name">${esc(prev.name)}</span></a>` : '<span></span>'}
          <a class="pager-link pager-all" href="../index.html">All products</a>
          ${next ? `<a class="pager-link pager-next" href="../${attr(next.id)}/"><span class="pager-dir">Next →</span><span class="pager-name">${esc(next.name)}</span></a>` : '<span></span>'}
        </div>
      </section>
      <script>
        document.querySelectorAll('.rail-input').forEach(function (input) {
          input.addEventListener('click', function () {
            input.select();
            var flash = function () {
              input.classList.add('copied');
              setTimeout(function () { input.classList.remove('copied'); }, 1200);
            };
            var fallback = function () { document.execCommand('copy'); flash(); };
            if (navigator.clipboard) { navigator.clipboard.writeText(input.value).then(flash, fallback); }
            else { fallback(); }
          });
        });
      </script>`;

  return layout({
    title: `Build ${p.name} with your agent — RAE FAANG`,
    description: `Build ${p.name} with your coding agent. Product research, reusable projects and instructions to build and verify in your project.`,
    path: `catalog/${p.id}/`,
    depth: 2,
    active: 'catalog',
    bodyClass: 'page-product',
    content,
  });
}

/* ------------------------------------------------------------------ */
/* Docs                                                                */
/* ------------------------------------------------------------------ */

const ROOT_DOCS = [
  ['README.md', 'Mission and project overview'],
  ['AGENTS.md', 'The agent operating model and handoff protocol'],
  ['CONTRIBUTING.md', 'Contributing as a human'],
  ['PLAN.md', 'What to build next'],
  ['DESIGN.md', 'The visual design system'],
];

export function docsIndexPage({ docs }) {
  const cards = docs
    .map(
      (d) => `            <a class="linkcard doc-card" href="${attr(d.slug)}.html">
              <h3>${esc(d.title)}</h3>
              <p>${esc(d.description)}</p>
            </a>`,
    )
    .join('\n');

  const rootDocs = ROOT_DOCS.map(
    ([file, desc]) =>
      `            <li><a href="${REPO_URL}/blob/main/${attr(file)}">${esc(file)}</a><span class="rootdoc-desc"> — ${esc(desc)}</span></li>`,
  ).join('\n');

  const content = `      <section class="page-hero" id="top">
        <div class="wrap">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="../index.html">Home</a><span aria-hidden="true">/</span><span>Docs</span>
          </nav>
          <h1>Documentation</h1>
          <p class="lede">
            Start here to use the catalog, run the CLI and plan product work with coding agents.
            These guides describe the current repository; older design notes may be out of date.
          </p>
        </div>
      </section>

      <section class="section section-tight section-last" aria-label="Documentation">
        <div class="wrap">
          <div class="grid doc-grid">
${cards}
          </div>
          <div class="rootdocs">
            <p class="mini-h">Repository-root documents</p>
            <ul class="source-list">
${rootDocs}
            </ul>
          </div>
        </div>
      </section>`;

  return layout({
    title: 'Documentation | RAE FAANG',
    description:
      'Guides to the RAE FAANG catalog, CLI, product research and agent workflow.',
    path: 'docs/',
    depth: 1,
    active: 'docs',
    bodyClass: 'page-docs',
    content,
  });
}

export function docPage({ doc, tocHtml }) {
  const content = `      <section class="page-hero page-hero-doc" id="top">
        <div class="wrap">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="../index.html">Home</a><span aria-hidden="true">/</span><a href="index.html">Docs</a><span aria-hidden="true">/</span><span>${esc(doc.title)}</span>
          </nav>
          <h1>${esc(doc.title)}</h1>
          <p class="lede">${esc(doc.description)}</p>
        </div>
      </section>

      <section class="section section-tight section-last">
        <div class="wrap">
${tocHtml}
          <article class="doc">
${doc.html}
          </article>
        </div>
      </section>`;

  return layout({
    title: `${doc.title} — RAE FAANG docs`,
    description: doc.description,
    path: `docs/${doc.slug}.html`,
    depth: 1,
    active: 'docs',
    bodyClass: 'page-doc',
    content,
  });
}

/** Extract id-annotated `##` headings as [{id, text}] for the TOC. */
export function tocHeadings(html) {
  const out = [];
  const re = /<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g;
  let m;
  while ((m = re.exec(html))) {
    out.push({ id: m[1], text: m[2].replace(/<[^>]+>/g, '') });
  }
  return out;
}

export function tocHtml(headings) {
  if (headings.length < 3) return '';
  const items = headings
    .map((h) => `              <li><a href="#${attr(h.id)}">${esc(h.text)}</a></li>`)
    .join('\n');
  return `          <details class="toc">
            <summary>On this page</summary>
            <ul>
${items}
            </ul>
          </details>`;
}

export function notFoundPage() {
  const content = `      <section class="page-hero" id="top">
        <div class="wrap">
          <h1>404 — not found.</h1>
          <p class="lede">
            This page does not exist. The catalog and the docs are good starting
            points.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="index.html">Catalog</a>
            <a class="btn btn-secondary" href="docs/index.html">Docs</a>
          </div>
        </div>
      </section>`;
  return layout({
    title: 'Not found — RAE FAANG',
    description: 'Page not found.',
    path: '404.html',
    depth: 0,
    content,
  });
}

export function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#101114"/><path d="M18 16 L34 48" stroke="#E8FF6B" stroke-width="7" stroke-linecap="round"/><path d="M30 16 L46 48" stroke="#E8FF6B" stroke-width="7" stroke-linecap="round"/></svg>`;
}
