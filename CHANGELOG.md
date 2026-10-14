# Changelog

All notable changes to RAE FAANG are recorded here.
The project follows [semver](https://semver.org/); npm releases match the tags in this repository.

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

- `docs/assets/logo.svg`, the two-slash signal mark used across the README and docs headers.
- `CHANGELOG.md` (this file) as the release record.
- Catalog page improvements: pagination (20 rows per page), a total-products stat, stat labels
  that match the filter chips, and click-to-copy `rae alternatives clone` commands under every
  alternative card on product pages.

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

[0.2.0]: https://github.com/EnzoVezzaro/rea-faang/releases/tag/v0.2.0
[0.1.1]: https://github.com/EnzoVezzaro/rea-faang/releases/tag/v0.1.1
[0.1.0]: https://github.com/EnzoVezzaro/rea-faang/releases/tag/v0.1.0
