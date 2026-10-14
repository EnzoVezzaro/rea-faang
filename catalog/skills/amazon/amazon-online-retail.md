---
name: amazon-online-retail
description: Coding-agent build skill for Amazon Online Retail (Amazon). Research the product, assess open-source projects, then build and verify it in the user's project. Alternative coverage is mature alternative listed; candidates include Medusa, Saleor, Vendure, and more.
---

# Amazon Online Retail (`amazon-online-retail`)

| | |
|---|---|
| **Company** | Amazon (`amazon`) |
| **Product type** | `consumer_application` |
| **Categories** | `ecommerce` |
| **Official URL** | https://www.amazon.com/ |
| **Alternative coverage** | **mature alternative listed** |

## Product description

Amazon’s online retail storefront: catalogue, cart, checkout, payments, reviews, marketplace sellers and fulfilment — the retail experience itself.

Catalog categories: ecommerce.

Catalogued capability areas:
- Product catalogue and search
- Cart, checkout and payments
- Reviews, recommendations, marketplace
- Fulfilment and logistics integration

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Core capabilities

- Product catalogue and search
- Cart, checkout and payments
- Reviews, recommendations, marketplace
- Fulfilment and logistics integration

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Medusa](https://medusajs.com/) | MIT | Open headless commerce platform (Node.js). | Modern, API-first. |
| [Saleor](https://saleor.io/) | BSD-3-Clause | GraphQL-first headless commerce. | Modern alternative. |
| [Vendure](https://www.vendure.io/) | MIT | TypeScript/GraphQL commerce framework. | Developer-focused. |
| [Magento Open Source](https://business.adobe.com/products/magento/magento-commerce.html) | OSL-3.0 | Enterprise-grade open storefront. | Heavyweight; Adobe-stewarded. |
| [WooCommerce / Bagisto / Spree](https://woocommerce.com/) | GPL-3.0 / MIT / BSD-3-Clause | Storefronts on WordPress and standalone stacks. | Range of approaches. |

## Gap

The software is replaceable; Amazon’s marketplace liquidity, catalogue size and fulfilment network are not.

## Verdict

Available. Open commerce platforms cover the storefront; scale, logistics and network effects are the gap.

## Product description and scope

Amazon’s online retail storefront: catalogue, cart, checkout, payments, reviews, marketplace sellers and fulfilment — the retail experience itself.

Catalog categories: ecommerce.

Catalogued capability areas:
- Product catalogue and search
- Cart, checkout and payments
- Reviews, recommendations, marketplace
- Fulfilment and logistics integration

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **Amazon Online Retail**. Give this file to your coding agent in the project where you want the product built. The agent uses it to research the product, choose what to reuse, build an independent implementation and verify the result. Do not reproduce proprietary internals or claim blanket feature parity; turn product context and catalog capability labels into evidence-backed requirements.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier amazon-online-retail` and review its research status (**pending**). When using the source repository, read `research/companies/amazon/products/amazon-online-retail.md`. A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Reuse/build decision

A mature candidate is listed. Evaluate it as a possible foundation, but do not treat the candidate listing as the product build or substitute it for the user's request. Build the requested product in the user's project; reuse, integrate or extend candidate components where they fit.

Current alternative coverage: **mature alternative listed**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: Available. Open commerce platforms cover the storefront; scale, logistics and network effects are the gap. The software is replaceable; Amazon’s marketplace liquidity, catalogue size and fulfilment network are not.

Candidate projects to verify:

- **Medusa** (MIT) — Open headless commerce platform (Node.js). Note: Modern, API-first. Source: https://medusajs.com/
- **Saleor** (BSD-3-Clause) — GraphQL-first headless commerce. Note: Modern alternative. Source: https://saleor.io/
- **Vendure** (MIT) — TypeScript/GraphQL commerce framework. Note: Developer-focused. Source: https://www.vendure.io/
- **Magento Open Source** (OSL-3.0) — Enterprise-grade open storefront. Note: Heavyweight; Adobe-stewarded. Source: https://business.adobe.com/products/magento/magento-commerce.html
- **WooCommerce / Bagisto / Spree** (GPL-3.0 / MIT / BSD-3-Clause) — Storefronts on WordPress and standalone stacks. Note: Range of approaches. Source: https://woocommerce.com/

### Build the product with this skill in the user's project

Give this product skill to the coding agent in the project where the user wants the product built. First review that project and assess current reuse options; then define a useful scope, build the requested product in the user's project, and verify the result. The coverage label below reports only research into open-source alternatives.

### Product behaviors to research and turn into requirements

- **AMAZON-ONLINE-RETAIL-CAP-001 — Product catalogue and search:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **AMAZON-ONLINE-RETAIL-CAP-002 — Cart, checkout and payments:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **AMAZON-ONLINE-RETAIL-CAP-003 — Reviews, recommendations, marketplace:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **AMAZON-ONLINE-RETAIL-CAP-004 — Fulfilment and logistics integration:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.

For each behavior selected for the MVP, record the user/actor, preconditions, input, expected observable result, alternate/error path, data and permission implications, source evidence, and a stable requirement ID (for example `AMAZON-ONLINE-RETAIL-REQ-001`). Map that ID from evidence to workflow/specification to an automated test or a named manual check.

### Build the product in the user's project

Use the product skill from the project where the user wants **Amazon Online Retail** built. Review that project's conventions and existing code, then plan a useful first slice with clear requirements, explicit non-goals, assumptions, external dependencies and measurable acceptance checks. Continue from that working slice toward the user's requested product. The catalog and optional scaffold provide guidance; your implementation belongs in the user's project. If research is insufficient for a behavior, gather evidence before coding that behavior.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/amazon/products/amazon-online-retail.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./amazon-online-retail (optional local workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Verification and definition of done

- Every MVP requirement maps to evidence and a passing automated test or named manual check.
- Product-specific tests pass. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run `npm run validate` and `npm test`; otherwise use the installed CLI's `rae research validate` for catalog integrity.
- Setup and configuration work from a clean start; security and license review is recorded; limitations and unimplemented capabilities are explicit.
- A reviewer accepts the implementation and its handoff. Passing tests prove only the tested behavior—not parity with Amazon Online Retail.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product metadata: `rae products show amazon-online-retail --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier amazon-online-retail`; source file when working in the repository: `research/companies/amazon/products/amazon-online-retail.md`.
- Alternative candidates and coverage: `rae alternatives list --product amazon-online-retail`; source landscape file when available: `catalog/skills/amazon/amazon-online-retail.md`.
- Optional local product workspace/specifications: `./amazon-online-retail (optional local workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/amazon-online-retail.md`.
- Official product page: https://www.amazon.com/.
- Research status: **pending**; alternative coverage: **mature alternative listed**. This coverage label describes existing-project research only, not the ability to build this product.

### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show amazon-online-retail --format json` and retrieve the dossier contents with `rae research dossier amazon-online-retail` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. Generate a portable agent kit with `rae amazon-online-retail --out ./amazon-online-retail-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product amazon-online-retail --out ./amazon-online-retail` only if useful. Keep generated outputs separate; do not overwrite existing work.


## Sources

- https://medusajs.com/
- https://webkul.com/blog/top-10-open-source-and-free-ecommerce-platforms/
- https://yournextstore.com/blog/best-headless-commerce-platforms

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`amazon-online-retail`)
- Research dossier: [`research/companies/amazon/products/amazon-online-retail.md`](../../../research/companies/amazon/products/amazon-online-retail.md)
- REA web-surface report: [`catalog/rea/amazon/amazon-online-retail.md`](../../rea/amazon/amazon-online-retail.md)
