import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = join(ROOT, 'site');

const products = readFileSync(join(ROOT, 'catalog', 'products.jsonl'), 'utf8')
  .split('\n')
  .filter((line) => line.trim())
  .map((line) => JSON.parse(line));

const statuses = new Set(['available', 'partial', 'pending']);

test('the home page exists and links to the catalog and the docs', () => {
  const home = readFileSync(join(SITE, 'index.html'), 'utf8');
  assert.ok(home.includes('href="catalog/"'), 'home should link the catalog');
  assert.ok(home.includes('href="docs/"'), 'home should link the docs');
});

test('the home landing presents the complete catalog glyph field and interactive build pass', () => {
  const home = readFileSync(join(SITE, 'index.html'), 'utf8');
  const motionScript = readFileSync(join(SITE, 'assets', 'motion.js'), 'utf8');
  const css = readFileSync(join(SITE, 'styles.css'), 'utf8');
  const catalogData = JSON.parse(readFileSync(join(SITE, 'catalog.json'), 'utf8'));
  const featuredProduct = catalogData.products.find((product) => product.id === 'youtube');
  const featuredCandidate = featuredProduct.alternatives.find((alternative) => !/proprietary/i.test(alternative.license || ''));
  const routes = [...home.matchAll(/class="catalog-glyph" data-coverage="(available|partial|pending)"/g)];

  assert.match(home, /<aside class="hero-inventory" aria-label="Choose a product to build with your agent">/, 'hero should frame the selector as product-build discovery');
  assert.match(home, /class="glyph-spotlight-list"/, 'hero should feature a catalog-backed product field');
  assert.match(home, /class="brand-row" aria-label="Companies covered"/, 'hero copy should close with the real company brand row');
  assert.equal([...home.matchAll(/class="glyph-spotlight" data-coverage=/g)].length, 6, 'hero should show six preview products, not repeat the full catalog');
  assert.match(home, /data-pass-pick="youtube"[^>]*aria-pressed="true"/, 'the featured catalog item should be selected in the hero field');
  assert.match(home, /class="hero-copy"[\s\S]*?<aside class="hero-inventory"/, 'hero reading order should put the premise before the product chooser and pass');
  assert.match(home, /id="build-pass-product"[\s\S]*?data-pass-skill/, 'the selected catalog product should retain its selector and skill download');
  assert.match(home, /class="catalog-glyph-field"/, 'homepage should display the full catalog as linked typography');
  assert.match(home, /npx rae-faang &lt;product-id&gt; --out \.\/&lt;product-id&gt;\.md/, 'homepage links to the published npm CLI product-skill command');
  assert.doesNotMatch(home, /npx --yes/);
  assert.doesNotMatch(home, /npx rae-faang skills generate &lt;product-id&gt;/);
  assert.equal([...home.matchAll(/class="catalog-glyph" data-coverage=/g)].length, products.length, 'each catalog product should appear exactly once in the full glyph field');
  for (const product of products) {
    const catalogProduct = catalogData.products.find((entry) => entry.id === product.id);
    assert.ok(catalogProduct, `${product.id}: catalog data should include the product`);
    assert.ok(home.includes(`class="catalog-glyph" data-coverage="${catalogProduct.open_source_status}"><a href="catalog/${product.id}/"`), `${product.id}: glyph should keep the real status and dossier link`);
    assert.ok(home.includes(`<span class="catalog-glyph-name">${product.name}</span><span class="catalog-glyph-status">`), `${product.id}: glyph should display the catalog product name and coverage`);
  }
  assert.match(home, /class="build-pass"[^>]*aria-label="Product Build Pass for YouTube"/, 'pass should use a real catalog entry');
  assert.match(home, /id="build-pass-product"/, 'pass should offer a product selector');
  assert.match(home, /class="pass-selector-group"><label[^]*?id="build-pass-product"/, 'selector label and select should share one layout row');
  assert.match(css, /\.build-pass\s*\{[^}]*grid-template-rows:\s*auto\s+auto\s+1fr\s+auto\s+auto/s, 'pass grid should reserve a row for each direct child');
  assert.match(css, /\.build-pass-panel \.pass-instruction\s*\{\s*display:\s*none/s, 'hero should not render redundant helper copy below the pass');
  assert.doesNotMatch(home, /lanyard-(?:strap|clip)/, 'home pass should omit the overlapping lanyard decoration');
  assert.match(home, /data-pass-company>Google<\/strong>/, 'pass should display the selected product company');
  assert.ok(home.includes(`data-pass-foundation>${featuredCandidate.name}</strong>`), 'pass should display its real candidate project');
  assert.match(home, /href="catalog\/youtube\/agent-kit\.md" download/, 'pass should link directly to the downloadable skill');
  assert.match(home, /href="catalog\/youtube\/"[^>]*>View dossier/, 'pass should link the selected dossier');
  assert.match(home, /We don't need<br\s*\/>FAANG anymore\./, 'hero should lead with the product premise');
  assert.match(home, /Use your agent to build any of their products\./, 'hero should say what the product enables');
  assert.match(home, /RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google\./, 'hero should describe the actual catalog');
  assert.match(home, /Explore products/, 'primary action should take the visitor to product discovery');
  assert.match(home, /npx rae-faang &lt;product-id&gt; --out \.\/&lt;product-id&gt;\.md/, 'landing should show the bundled npm CLI product-skill form');
  assert.match(home, /A product build skill is there when you\s+want a direct handoff/i, 'supporting copy should keep skills secondary to the product premise');
  assert.match(home, /build in your project/i, 'hero should identify the user project as the place the agent builds');
  assert.match(home, /Choose what you want your agent to build\./, 'main narrative should support the build-any-product premise');
  assert.match(home, /Your agent builds in your project\./, 'main narrative should describe where the product implementation happens');
  assert.match(home, /\d+ products your agent can build\./, 'product index should frame the catalog as things visitors can build');
  assert.match(home, /What do you want to build\?/, 'catalog visual should invite product selection');
  assert.match(home, /Each record links to research, candidate projects and build instructions/, 'catalog should show the useful build context');
  assert.match(home, /Give your agent the product's build skill as a starting point/, 'product skill should remain a supporting handoff');
  assert.match(home, /A stronger starting point for the build\./, 'landing should connect research to building');
  assert.doesNotMatch(home, /Don't take our word for it|Why should I trust the catalog/);
  assert.match(home, /Can my agent build any of these products\?[\s\S]*?the premise/i, 'FAQ should reinforce the build-any-product promise');
  assert.match(home, /assess reuse options|existing project|open-source project/i, 'landing should direct agents to assess existing projects');
  assert.match(home, /These counts summarize the catalog's research[\s\S]*?not the limits of\s+what your agent can build/i, 'coverage should not limit the build ambition');
  assert.doesNotMatch(home, /Product implementations have not started|Build work remains a separate goal|Research is not implementation|pending to open-source/i, 'landing should not confuse alternative coverage with a product build status');
  assert.match(css, /--rf-signal/, 'landing stylesheet should use the supplied design-system tokens');
  assert.match(home, /Choose a product\. Build it with your agent\./, 'landing should make the agent workflow explicit');
  assert.doesNotMatch(home, /What is ready—and what isn't\?|A clear-eyed inventory|research and specifications are not a finished product/i, 'landing should not center on RAE implementation status');
  assert.match(css, /--rf-font-sans:\s*Inter,/, 'stylesheet should use the approved body typography stack');
  assert.match(css, /--rf-signal:\s*#C8FF55/i, 'stylesheet should use the design-system signal-lime token');
  assert.match(css, /--rf-mint:\s*#80F5D2/i, 'stylesheet should retain mint as a distinct RAE status accent');
  assert.match(css, /--rf-bg:\s*#0B0C0A/i, 'stylesheet should use the design-system near-black canvas');
  assert.match(css, /--rf-font-display:\s*"Space Grotesk"/i, 'stylesheet should use the RAE display face');
  assert.match(css, /\.hero-inner\s*\{[^}]*grid-template-columns/s, 'hero should use an intentional editorial split');
  assert.match(css, /@media\s*\(max-width:\s*760px\)[\s\S]*?\.hero-inner > \.hero-copy[\s\S]*?\.hero-inner > \.hero-inventory/s, 'hero should switch to an ordered single-column layout below tablet width');
  assert.match(css, /\.catalog-glyph-field\s*\{/, 'the complete product index should have dedicated glyph-field styling');
  assert.match(css, /\.workflow-line\s*\{/, 'the build method should use an ordered editorial sequence');
  assert.match(css, /@media\s*\(max-width:\s*720px\)/, 'hero should adapt for mobile');
  assert.doesNotMatch(css, /\.js\s+\.reveal-target\s*\{[^}]*opacity:\s*0/s, 'content must remain visible if motion initialization fails');
  assert.match(css, /\.viz-target\.viz-gap[^}]*--rf-amber/s, 'unverified gaps should use the semantic amber token');
  assert.match(home, /class="catalog-glyph" data-coverage="pending"><a href="catalog\/amazon-prime\/"/, 'pending product glyph should remain a real catalog link');
  assert.match(home, /class="catalog-glyph-status">no verified alternative<\/span>/, 'pending glyph should state the verified research status');

  assert.equal(routes.length, products.length, 'each real catalog product appears in the editorial field');
  assert.ok(routes.every(([, coverage]) => statuses.has(coverage)), 'each catalog glyph carries a real research-coverage state');
  assert.match(home, /aria-label="Featured products from the catalog"/, 'hero product controls should be grouped with an accessible name');
  assert.match(motionScript, /data-pass-pick/, 'hero product choices should update the selected pass');
  assert.match(home, /aria-label="Google products"/, 'grouped catalog regions should have accessible names');
  assert.match(home, /assets\/motion\.js/, 'home page should load its interaction script');
  assert.match(home, /<span class="of">products<\/span>/, 'catalog total should be labeled without an obsolete denominator');
  assert.match(home, /Tooling test cases/, 'test counts should not imply tests were executed during generation');
  assert.match(home, /in the repository; run <span class="mono">npm test<\/span> for the current test results/, 'test statistic should describe inventory rather than claim a pass result');
  assert.doesNotMatch(home, /data-count=/, 'data metrics should not animate into a false sense of progress');
  assert.match(home, /class="mobile-nav"/, 'main site navigation should remain available on small screens');
  assert.match(home, /RAE \/ FIELD NOTE/, 'hero artifact should carry the research-pass treatment');
  assert.match(home, /Product skill included\./, 'hero artifact should point visitors to the product skill');
  assert.match(motionScript, /function initBuildPass/, 'script should update product facts when the pass selection changes');
  assert.match(motionScript, /agent-kit\.md/, 'pass interaction should keep the selected product skill download current');
  assert.match(home, /data-pass-announcement[^>]*aria-live="polite"/, 'pass updates should have an accessible live announcement region');
  assert.match(motionScript, /data-pass-announcement/, 'pass selection should update its live announcement region');
  assert.match(home, /src="docs\/assets\/brand-logo-icon\.png"/, 'home shell should use the supplied full RAE FAANG lockup');
  assert.ok(existsSync(join(SITE, 'docs', 'assets', 'brand-logo-icon.png')), 'generated site should include the header lockup');
  assert.ok(existsSync(join(SITE, 'docs', 'assets', 'brand-symbol.png')), 'generated site should include the RAE mark for product passes');
  assert.doesNotMatch(css, /\.hero::before[^}]*rae-banner\.png/, 'hero should not paint the whole banner as an oversized background watermark');
  assert.match(motionScript, /prefers-reduced-motion/, 'script should respect reduced-motion preference');
  assert.match(css, /prefers-reduced-motion:\s*reduce/, 'CSS should provide reduced-motion fallbacks');
  assert.match(css, /\.hero-graph/, 'stylesheet should style the interactive pass');
  assert.match(motionScript, /function initBuildPass/, 'the catalog selection must update pass facts');
  assert.match(motionScript, /select.addEventListener\("change", function \(\) \{ update\(\); \}\)/, 'the product selector should update when changed');
  assert.match(motionScript, /data-pass-skill/, 'the pass interaction should update the skill link');
  assert.match(motionScript, /data-pass-dossier/, 'the pass interaction should update the dossier link');
});

test('the catalog index lists every catalogued product', () => {
  const index = readFileSync(join(SITE, 'catalog', 'index.html'), 'utf8');
  for (const product of products) {
    assert.ok(
      index.includes(`href="${product.id}/"`),
      `catalog index should link ${product.id}`,
    );
  }
});

test('every downloadable product skill gives expanded, status-aware multi-agent instructions', () => {
  for (const product of products) {
    const kitPath = join(SITE, 'catalog', product.id, 'agent-kit.md');
    assert.ok(existsSync(kitPath), `missing downloadable agent kit for ${product.id}`);
    const kit = readFileSync(kitPath, 'utf8');
    assert.equal(kit, readFileSync(join(ROOT, 'catalog', 'skills', product.company_id, `${product.id}.md`), 'utf8'), `${product.id}: downloadable skill matches canonical generated skill`);
    assert.match(kit, /## Product description/, `${product.id}: product description`);
    assert.match(kit, /### Multi-agent task plan and outputs/, `${product.id}: multi-agent plan`);
    assert.match(kit, /### Acceptance criteria and definition of done/, `${product.id}: verification gate`);
    assert.match(kit, /### Product quality and verification plan/, `${product.id}: quality gates`);
    assert.match(kit, /### End-to-end implementation milestones/, `${product.id}: implementation lifecycle`);
    assert.ok(kit.includes(`Research status:** ${product.research_status || 'pending'}`) || kit.includes(`Research status is **${product.research_status || 'pending'}**`), `${product.id}: honest research status`);
    assert.doesNotMatch(kit, /Agent roles — covered above|inlineCode\(/, `${product.id}: no leaked template artifacts`);
    assert.match(kit, new RegExp(`npx rae-faang research dossier ${product.id}`), `${product.id}: npm CLI exposes dossier text`);
    assert.doesNotMatch(kit, /node src\/cli\.js|From a repository clone/, `${product.id}: skill works without a source checkout`);
    assert.match(kit, /coding-agent build skill for/i, `${product.id}: identify the markdown as this product's build skill`);
    assert.match(kit, /Give this file to your coding agent in the project where you want the product built/i, `${product.id}: clear skill handoff to the user's project`);
    assert.match(kit, /Give `skill\.md` to your coding agent in the project where you want to build|Give this file to your coding agent in the project where you want the product built/, `${product.id}: direct the user to pass it into their project`);
  }
});

test('product build passes on dossiers point to the local downloadable skill and shared logo', () => {
  const page = readFileSync(join(SITE, 'catalog', 'amazon-prime', 'index.html'), 'utf8');
  assert.match(page, /class="product-pass-preview"[\s\S]*?href="agent-kit\.md" download/, 'dossier pass should download its local product skill');
  assert.doesNotMatch(page, /lanyard-(?:strap|clip)/, 'dossier pass should omit the problematic lanyard decoration');
  const css = readFileSync(join(SITE, 'styles.css'), 'utf8');
  assert.match(css, /\.product-pass-preview\s*\{\s*width:\s*min\(100%,\s*440px\)/s, 'product pass preview should stay within a compact card width');
  assert.match(css, /\.product-pass-preview \.build-pass\s*\{[^}]*min-height:\s*0;[^}]*transform:\s*none;/s, 'product pass preview should use a compact, unrotated card layout');
  assert.match(css, /\.product-pass-preview \.build-pass::before,[\s\S]*?\.product-pass-preview \.build-pass::after\s*\{\s*display:\s*none;/s, 'product pass preview should not have tabs protruding into the product details');
  assert.match(page, /src="\.\.\/\.\.\/docs\/assets\/brand-symbol\.png"/, 'dossier pass should resolve the supplied transparent brand mark from the site root');
  assert.doesNotMatch(page, /id="build-pass-product"/, 'static dossier pass should not expose the home-only product selector');
});

test('every product page exists and carries its alternatives with links', () => {
  for (const product of products) {
    const page = join(SITE, 'catalog', product.id, 'index.html');
    assert.ok(existsSync(page), `missing page for ${product.id}`);
    const html = readFileSync(page, 'utf8');
    assert.ok(html.includes(product.name), `${product.id}: page should name the product`);
    const status = html.match(/Alternative coverage<\/span><span class="pill pill-(available|partial|pending)"/);
    assert.ok(status, `${product.id}: page should carry a coverage status`);
    assert.ok(statuses.has(status[1]), `${product.id}: bad coverage status`);
    const external = html.match(/<a href="https?:\/\/[^"]+"[^>]*target="_blank"/);
    assert.ok(
      external,
      `${product.id}: page should link at least one alternative or source externally`,
    );
    assert.ok(
      html.includes(`catalog/${product.id}/`),
      `${product.id}: page should carry its canonical URL`,
    );
    assert.match(html, new RegExp(`npx rae-faang ${product.id} --out \.\/${product.id}\\.md`), `${product.id}: npm Markdown skill generator command`);
    assert.match(html, new RegExp(`npx rae-faang build agent-kit ${product.id} --out \.\/${product.id}-agent`), `${product.id}: separate agent-kit command`);
    assert.doesNotMatch(html, /npx --yes/);
    assert.doesNotMatch(html, new RegExp(`npx rae-faang ${product.id} --out \.\/${product.id}-agent`));
    assert.match(html, new RegExp(`catalog/skills/${product.company_id}/${product.id}\\.md`), `${product.id}: link to the source skill file`);
    assert.match(html, /Build this product with your agent/, `${product.id}: explain that the Markdown file is an agent build skill`);
    assert.match(html, /build in your own project|build in your project/, `${product.id}: make the user's project the place for implementation`);
    assert.doesNotMatch(html, /Product implementations have not started|Build work remains a separate goal|Research is not implementation|pending to open-source|>Build<\/span><span class="pill[^>]*>not started/i, `${product.id}: no obsolete project implementation status`);
    assert.doesNotMatch(html, /\bPending\./, `${product.id}: avoid presenting unknown coverage as build status`);
    assert.match(html, /coding agent in your project|agent in your project/, `${product.id}: user-agent-project workflow is explicit`);
    assert.doesNotMatch(html, /node src\/cli\.js/, `${product.id}: no clone-based product instructions`);
  }
});

test('every alternative named on a product page links to an http(s) URL', () => {
  const data = JSON.parse(readFileSync(join(SITE, 'catalog.json'), 'utf8'));
  assert.equal(data.products.length, products.length, 'catalog.json should cover every product');
  for (const product of data.products) {
    for (const alt of product.alternatives) {
      assert.match(
        alt.url,
        /^https?:\/\//,
        `${product.id}: alternative "${alt.name}" must have an http(s) URL`,
      );
      assert.ok(alt.name, `${product.id}: alternative without a name`);
      assert.ok(alt.license, `${product.id}: alternative "${alt.name}" without a license`);
    }
  }
});

test('the home and product pages consistently describe agent skills and user-led builds', () => {
  const home = readFileSync(join(SITE, 'index.html'), 'utf8');
  const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
  assert.match(readme, /### We don't need FAANG anymore\.[\s\S]*?Use your agent to build any of their products\./, 'README should lead with the exact build-any-product premise');
  assert.match(readme, /RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google/);
  assert.match(readme, /Use your agent to build any of their products/);
  assert.match(home, /We don't need<br\s*\/>FAANG anymore\./);
  assert.match(home, /Use your agent to build any of their products\./);
  assert.match(home, /<title>Build products with your agent \| RAE FAANG<\/title>/);
  assert.match(home, /<meta name="description" content="Choose a product from Meta, Amazon, Apple, Netflix or Google\. Explore product research and open-source foundations, then build with your coding agent\."/);
  assert.match(home, /<meta property="og:image" content="https:\/\/rae-faang-landing\.vercel\.app\/assets\/rae-banner\.png"/);
  assert.match(home, /<meta name="twitter:card" content="summary_large_image"/);
  assert.match(home, /<meta property="og:site_name" content="RAE FAANG"/);
  assert.match(home, /<link rel="canonical" href="https:\/\/rae-faang-landing\.vercel\.app\/"/);
  assert.match(home, /<link rel="icon" href="favicon\.svg" type="image\/svg\+xml"/);
  assert.match(readFileSync(join(SITE, 'favicon.svg'), 'utf8'), /viewBox="0 0 64 64"[\s\S]*?#C8FF55/);
  assert.match(readFileSync(join(SITE, 'robots.txt'), 'utf8'), /User-agent: \*\nAllow: \/\nSitemap: https:\/\/rae-faang-landing\.vercel\.app\/sitemap\.xml/);
  assert.match(readFileSync(join(SITE, '404.html'), 'utf8'), /<meta name="robots" content="noindex,follow"/);
  assert.ok(existsSync(join(SITE, 'docs/assets/icon-192.png')), 'site should publish a PNG touch icon');
  assert.ok(existsSync(join(SITE, 'docs/assets/icon-512.png')), 'site should publish a 512px PNG icon');

  assert.match(home, /RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google\./);
  assert.match(readme, /Each entry links product context, research,\s+candidate open-source projects and product-specific build instructions/);
  assert.match(readme, /npx rae-faang google-search --out \.\/google-search\.md/);
  assert.match(readme, /(?:test (?:the result|it) in your project|review its choices and the test results)/i);
  assert.match(home, /A stronger starting point for the build\./);
  assert.doesNotMatch(home, /Don't take our word for it|Why should I trust the catalog/);
  for (const slug of ['getting-started', 'cli-reference', 'catalog-and-schemas', 'agent-workflow']) {
    const doc = readFileSync(join(SITE, 'docs', `${slug}.html`), 'utf8');
    assert.match(doc, /your coding agent|your agent/i, `${slug}: should explain the user's agent workflow`);
  }
  assert.doesNotMatch(home, /Product implementations have not started|Build work remains a separate goal|Research is not implementation|pending to open-source/i);
});

test('the docs set is rendered for every documented page', () => {
  const slugs = ['getting-started', 'cli-reference', 'catalog-and-schemas', 'agent-workflow'];
  const docsIndex = readFileSync(join(SITE, 'docs', 'index.html'), 'utf8');
  for (const slug of slugs) {
    const page = join(SITE, 'docs', `${slug}.html`);
    assert.ok(existsSync(page), `missing docs page: ${slug}`);
    const html = readFileSync(page, 'utf8');
    assert.ok(html.includes('<article class="doc">'), `${slug}: page should render the doc body`);
    assert.ok(docsIndex.includes(`href="${slug}.html"`), `docs index should link ${slug}`);
  }
});

test('docs pages resolve every internal link against the generated site', () => {
  const docsDir = join(SITE, 'docs');
  for (const slug of ['getting-started', 'cli-reference', 'catalog-and-schemas', 'agent-workflow']) {
    const html = readFileSync(join(docsDir, `${slug}.html`), 'utf8');
    const hrefs = [...html.matchAll(/href="([^"#]+)"/g)]
      .map((m) => m[1])
      .filter((h) => !/^(https?:|mailto:)/.test(h));
    for (const href of hrefs) {
      assert.ok(
        existsSync(join(docsDir, href)),
        `${slug}: dead internal link ${href}`,
      );
    }
  }
});

test('the sitemap covers the home, catalog, products and docs', () => {
  const sitemap = readFileSync(join(SITE, 'sitemap.xml'), 'utf8');
  assert.ok(sitemap.includes('<loc>https://rae-faang-landing.vercel.app/</loc>'), 'sitemap should include the canonical home URL');
  assert.ok(sitemap.includes('<loc>https://'), 'sitemap should carry absolute URLs');
  for (const product of products) {
    assert.ok(
      sitemap.includes(`catalog/${product.id}/`),
      `sitemap should list ${product.id}`,
    );
  }
});
