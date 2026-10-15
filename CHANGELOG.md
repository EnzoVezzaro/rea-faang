# Changelog

All notable changes to RAE FAANG are recorded here.
The project follows [semver](https://semver.org/); npm releases match the tags in this repository.

## [0.3.0] - 2026-10-15

### Changed

- Reframed the product and landing page around the build-any-product premise: choose a product
  from Meta, Amazon, Apple, Netflix or Google and use your own coding agent to build it in your
  project. The interactive product chooser and full catalog remain driven by real catalog data.
- Expanded all 77 product skills into detailed implementation handoffs with product-type research
  lenses, capability coverage ledgers, acceptance criteria, security/accessibility considerations,
  implementation milestones and honest verification guidance.
- Improved search and social previews with concise page titles, page-specific descriptions,
  canonical URLs, Open Graph and Twitter card metadata, crawler directives, sitemap discovery and
  brand-aligned SVG/PNG icons. Added `robots.txt` and excluded the not-found page from indexing.

### Fixed

- Synchronized package and lockfile version metadata for the release.

## [0.2.0] - 2026-10-14

### Changed

- Rewrote the README with the project's visual identity: the signal-slash logo, npm/CI/coverage
  badges, a centered header, and a catalog screenshot.
- Added a Quick start with `npx rae-faang` one-liners, a five-stage agent-build table, a
  catalog-at-a-glance section, and an FAQ, oriented around open-source development and
  contributions.
- Oriented `docs/README.md` for contributors: added contributor entry points that map each
  documentation guide to the validation loop (`npm run validate`, `npm test`).

### Added

- `docs/assets/brand-logo-icon.png` and `brand-logo.png`, the official brand lockup from
  `design-system/` (transparent-background conversions from
  `RAE FAANG Logo + Icon.png` / `RAE FAANG Logo.png`), used in the README header and footer
  and on every docs page; plus PNG icons (`icon-192.png`, `icon-512.png`) derived from the
  brand icon.
- `CHANGELOG.md` (this file) as the release record.
- Catalog page improvements: pagination (20 rows per page), a total-products stat, stat labels
  that match the filter chips, and click-to-copy `rae alternatives clone` commands under every
  alternative card on product pages.
- CLI: `products list` now reports each product's `alternative_status` in the table (`alt:`
  column) and accepts `--alt-status <status>` filtering; `opportunities export --out <file>`
  writes the export instead of silently ignoring the flag.
- CLI: `alternatives clone` clones an alternative's verified source repository when one is
  recorded (`repo` field; 16 prominent alternatives verified on the GitHub API so far) and
  otherwise explains that only the project page is catalogued and suggests `--repo <git-url>`
  instead of failing inside git.

### Fixed

- Verdict copy in `tools/skills/catalog-data.mjs` no longer starts with "Pending." where the
  site test requires a decided verdict; `npm test` and `npm run validate` pass.
- The live catalog no longer shows `n/a` license tags.

## [0.1.1] - 2026-10-13

### Changed

- Editor onboarding: `AGENTS.md`, `docs/*`, and workspace `ace.mjs` shims for all product
  workspaces.

### Added

- One REA web-surface report per catalogued product, captured with
  [REA](https://github.com/morluto/rea).
- An open-source skills catalog (`catalog/skills/`) describing every catalogued product.

## [0.1.0] - 2026-10-13

### Added

- Initial public release: 77-product FAANG catalog with JSON Schemas, research dossiers,
  alternative coverage labels, the deterministic `rae` CLI, the ACE agent environment, and
  the GitHub Pages landing site.

[0.3.0]: https://github.com/EnzoVezzaro/rea-faang/releases/tag/v0.3.0
[0.2.0]: https://github.com/EnzoVezzaro/rea-faang/releases/tag/v0.2.0
[0.1.1]: https://github.com/EnzoVezzaro/rea-faang/releases/tag/v0.1.1
[0.1.0]: https://github.com/EnzoVezzaro/rea-faang/releases/tag/v0.1.0
