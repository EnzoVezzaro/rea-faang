# RAE FAANG — Development Plan & Agent Handoff

> **The mission: make the products of the world's biggest technology companies free, open source, and accessible to everyone.**

This is the working plan. It tells a human or an agent what to pick up next, what
"done" means, and how to prove it. Nothing here is a claim that software exists —
each item becomes real only when its verification command passes.

For how to run the environment, see [`docs/getting-started.md`](docs/getting-started.md).
For the agent operating model, see [`AGENTS.md`](AGENTS.md) and
[`docs/agent-workflow.md`](docs/agent-workflow.md).

---

## 1. Where the project is today (2026-10-13)

**Built and working**

- **Product-intelligence CLI** — `src/cli.js`, a deterministic tool over the
  catalog: `products`, `companies`, `research`, `gaps`, `alternatives`,
  `opportunities`. Covered by `tests/cli.test.js` (`npm test`, 9 passing).
- **Catalog** — 34 products across 6 company entries (`google`, `apple`,
  `amazon`, `amazon_aws`, `netflix`, `meta`), with JSON Schemas in
  `catalog/schema/`. Target inventory is 75 (see `catalog/manifests/faang.json`).
- **Research dossiers** — 34 evidence-backed dossiers in
  `research/companies/<company>/products/<id>.md`, each with validated YAML
  frontmatter.
- **Specification scaffolds** — 16 products in `products/<company>/<product>/`
  each with the ten `specs/` files (vision → migration guide) created, but every
  file is still a `WIP` placeholder (`wc -l` = 3 lines).
- **Opportunity spec** — `opportunities/google-search.md` plus the format in
  `opportunities/README.md`; `opportunities validate` is clean.
- **ACE environment** — `ace-proagents` installed, root `ace.mjs` + `lib/`
  wired, valid `ace/v1` config, and every product workspace runs `node ace.mjs`
  and `npm test` (16/16 green).
- **Licensing** — MIT (`LICENSE`) plus an AI-training `NOTICE` and
  machine-readable policy, generated with Repo Shield; `node
  scripts/shield-check.mjs` passes.
- **Landing page** — `site/`, built from `DESIGN.md`, deployed to GitHub Pages:
  https://enzovezzaro.github.io/rea-faang/
- **CI** — `.github/workflows/ci.yml` runs install, `npm run validate`,
  `npm test`, and `node ace.mjs config check`.

**Known gaps (honest)**

| Gap | Detail |
|---|---|
| Research all pending | 34/34 products have `research_status: pending`; none are `researched`. |
| Catalog incomplete | 34/75 in-scope products cataloged; `gaps products` lists the shortfall. |
| Product workspaces are scaffolds | No application source under `products/*/src`, and all 160 `specs/` files are `WIP` placeholders. |
| `.docs/` is stale design history | It predates the shipped CLI/ACE layout and names providers and products that no longer apply. Superseded by `docs/`; every file now carries a historical banner. |

Run `npm run gaps` and `node src/cli.js research coverage` any time to see the
current truth.

---

## 2. Objective

Move from **catalogued + specified** to **researched + implemented + verified**,
one product at a time:

```
catalogue → research → specify → build → verify → release → repeat
```

Guiding rule: progress is measured by tested functionality and reproducible
results, never by generated code or claimed completion.

---

## 3. Workstreams

Each task lists *goal*, *inputs*, *definition of done*, and the *verification*
that proves it. Every task is owned by exactly one agent at a time (lease
enforced by ACE — see `docs/agent-workflow.md`).

### W1 — Complete the FAANG inventory (researcher)

- **T1.1 Catalog the remaining in-scope products** (34 → 75).
  - Inputs: `catalog/manifests/faang.json`, `REA_FAANG_PRODUCTS.md`,
    `catalog/sources/seed-inventory.json`.
  - DoD: each new product is one line in `catalog/products.jsonl` with a valid
    `product_type`, official URL, and lifecycle/alternative/opportunity status;
    a matching research dossier exists under `research/companies/…`.
  - Verify: `node src/cli.js gaps products` shows no *missing* for any company;
    `node src/cli.js research validate` is clean.
- **T1.2 Refresh `research-coverage.json`** from the CLI output so the manifest
  matches reality.
  - Verify: `node src/cli.js research coverage --format json` totals equal the
    manifest's tracked counts.

### W2 — Research coverage (researcher)

- **T2.1 Promote dossiers from `pending` to `researched`.**
  - Inputs: the official docs/APIs/product pages for each product (public,
    authorized sources only — see §5).
  - DoD: frontmatter `research_status: researched`, `last_researched_at` set,
    `research_confidence` justified, `evidence[]` populated with at least one
    verified primary source per material claim, and sections 1–15 filled with
    real findings rather than placeholders.
  - Verify: `node src/cli.js research coverage` shows `Researched: N` and
    `Pending: 34 − N`; `node src/cli.js research validate` is clean.
- **T2.2 Add capabilities + evidence** so comparisons are data, not prose.
  - Verify: `node src/cli.js products show <id> --format json` includes the
    `capabilities` and `evidence` arrays.

### W3 — Alternative & opportunity analysis (architect)

- **T3.1 Fill the alternative sections** in each dossier (existing open-source
  alternatives + comparison) and set `alternative_status` /
  `alternative_coverage` to match what the evidence supports.
  - Verify: `node src/cli.js alternatives coverage` reports no `unknown`.
- **T3.2 (done) `opportunities/google-search.md`** authored with the format in
  `opportunities/README.md`.
  - Verify: `node src/cli.js opportunities validate` exits 0.
- **T3.3 Export the opportunity set** for downstream build work.
  - Verify: `node src/cli.js opportunities export > opportunities.json` and the
    JSON parses.
- **T3.4 Author real specification sets.** Replace the `WIP` placeholders in a
  product's `specs/` with finished, testable specifications, starting with
  `google-search`. Each `07-acceptance-criteria.md` must be verifiable.
  - Verify: the files are no longer placeholders and their criteria map to tests
    or to named manual checks.

### W4 — First working alternative (backend + frontend + tester)

Pick one `build_missing` product and take its workspace from specs to running
software. `google-search` is the only current `build_missing`; add more via W3.

- **T4.1 Implement the MVP** defined in
  `products/<company>/<product>/specs/03-feature-catalog.md`, honoring
  `07-acceptance-criteria.md`.
  - DoD: application source under `products/<company>/<product>/src`, tests
    under `tests/`, and the acceptance criteria demonstrably met.
  - Verify: `npm test` inside the product workspace passes; a handoff artifact
    records the commands and their exit codes.
- **T4.2 Wire product verification into ACE** so `node ace.mjs verify` runs the
  product's real lint/typecheck/test/build.
  - Verify: from the product dir, `node ace.mjs verify` returns structured results.

### W5 — Environment & tooling (backend + documenter)

- **T5.1 (done) Product test scripts.** Each workspace now runs `node --test
  tests/` with a smoke test; 16/16 green.
- **T5.2 (done) CI workflow.** `.github/workflows/ci.yml` runs `npm ci`,
  `npm run validate`, `npm test`, and `node ace.mjs config check`.
- **T5.3 (done) `.docs/` reconciled.** Every historical file carries a banner
  pointing to `docs/`, so there is one canonical documentation set.

### W6 — Docs & onboarding (documenter)

- **T6.1** Keep `docs/` current as the canonical set (see `docs/README.md`).
- **T6.2** Add a per-product `README.md` to each workspace (what it is, its spec
  status, how to run it).
- **T6.3** Publish a release/CHANGELOG process (`docs/`), then cut `v0.1.0`.

---

## 4. Suggested order

1. **(done) W3.2** — `opportunities validate` is clean.
2. **(done) W5** — CI, product test scripts, and the `.docs/` reconciliation.
3. **W1.1 / W2.1** — breadth first: catalog the rest, then research in priority
   order (products with `build_missing` first).
4. **T3.4** — replace the `WIP` specification placeholders, starting with
   `google-search`.
5. **W4.1** — one product end-to-end; prove the pipeline on something real.
6. **Repeat** W2–W4 per product.

---

## 5. Rules every task must obey

- **Evidence first.** Every material claim needs a cited, public source in the
  dossier's `evidence[]`. Verified observations and assumptions are labelled
  separately.
- **Clean room.** Only publicly observable behavior, official documentation, and
  authorized interfaces. No decompilation, no proprietary source, no protected
  assets, no bypassing access controls.
- **One owner per task.** Claim it (ACE enforces the lease), do the work, submit
  a handoff, get it verified.
- **Verification over assertion.** A task is done when a command proves it, not
  when code is written. Never weaken a test or schema to make it pass.
- **Small, reviewable units.** Prefer many narrow tasks over one large one.

---

## 6. Definition of done (project level)

A product is *done* when it has:

- [ ] A complete, evidence-backed dossier with `research_status: researched`.
- [ ] A finished specification set (`specs/01…10`).
- [ ] A working implementation with automated tests.
- [ ] Acceptance criteria met and recorded in a verified handoff.
- [ ] Release artifacts and reproducible build instructions.

The catalog is *done* when `node src/cli.js gaps products` reports no missing
in-scope products and every dossier is researched and validated.
