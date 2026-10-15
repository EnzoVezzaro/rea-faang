# Website

The public website for RAE FAANG: the landing page, the browsable product
catalog (one page per catalogued FAANG product, with its open-source
alternatives linked), and the documentation set rendered from `docs/`.

Static output — HTML, CSS and one small vanilla-JS filter. No framework, no
build dependencies. Everything under `site/` except `styles.css` is
**generated**; do not edit the generated files by hand.

## Structure

```
site/
├── index.html               # landing (generated)
├── styles.css               # hand-written styles (tokens from DESIGN.md)
├── favicon.svg              # generated
├── 404.html                 # generated
├── catalog.json             # machine-readable catalog dump (generated)
├── sitemap.xml              # generated
├── catalog/
│   ├── index.html           # all products, filterable by company/status/search
│   └── <product-id>/
│       └── index.html       # one page per product: alternatives, gap, verdict, sources
├── docs/
│   ├── index.html           # docs index (generated)
│   └── <doc>.html           # one page per docs/*.md (generated)
└── assets/
    └── catalog.js           # catalog filter behaviour (generated)
```

## Build

```bash
npm run site:build            # regenerate every page into site/
node tools/site-build.mjs --check   # verify without writing, exit 1 on drift
```

Sources of truth:

| What | Where |
|---|---|
| Product identity | `catalog/products.jsonl` |
| Company names | `catalog/companies.json` |
| Open-source landscape (alternatives, links, licences, verdicts) | `tools/skills/catalog-data.mjs` |
| Documentation | `docs/*.md` |
| Page templates | `tools/site/templates.mjs` |
| Markdown renderer | `tools/site/markdown.mjs` |
| Orchestrator | `tools/site-build.mjs` |

Landing copy is drafted in [`COPY.md`](COPY.md) first, then mirrored into
`homePage()` in `tools/site/templates.mjs`. Every count on the landing
(products, verdicts, tests) is computed at build time — if a number drifts,
`--check` fails. `npm run validate` runs the check, so CI blocks a change that
forgets to rebuild the site.

Preview locally:

```bash
python3 -m http.server 8080 --directory site
# → http://localhost:8080
```

## Deployment

Two live mirrors, both serving the same generated `site/` directory:

1. **GitHub Pages** — `.github/workflows/pages.yml` publishes `site/` on every
   push to `main` that touches `site/`, `docs/`, `catalog/` or the generator
   inputs.
   - **Live:** https://enzovezzaro.github.io/rea-faang/
   - Pages source: GitHub Actions (Settings → Pages).
2. **Vercel** — the `site/` directory is linked to the Vercel project
   `rae-faang-landing` (scope `enzovezzaros-projects`). Deploy with
   `vercel deploy --prod` from `site/` after rebuilding, or connect the repo
   (`vercel git connect`) for push-based deploys.
   - **Live:** https://rae-faang-landing.vercel.app

All internal links are relative, so both the root domain (Vercel) and the
subpath (GitHub Pages) work. Canonical URLs and `sitemap.xml` use the Vercel
domain.

Note: GitHub Pages is not available for **private** repositories on the free
plan. The repository is public, which is why the Pages deploy works. If the
repository is ever made private again, the Pages job will fail until Pages is
available again — the Vercel deploy is unaffected.
