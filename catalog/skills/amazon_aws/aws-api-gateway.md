---
name: aws-api-gateway
description: Coding-agent build skill for API Gateway (Amazon Web Services). Research the product, assess open-source projects, then build and verify it in the user's project. Alternative coverage is mature alternative listed; candidates include Apache APISIX, Kong Gateway, Tyk, and more.
---

# API Gateway (`aws-api-gateway`)

| | |
|---|---|
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `api` |
| **Categories** | `api` |
| **Official URL** | https://aws.amazon.com/api-gateway/ |
| **Alternative coverage** | **mature alternative listed** |

## Product description

AWS API Gateway is a managed front door for APIs: routing, auth, throttling, caching, and request/response transformation.

Catalog categories: api.

Catalogued capability areas:
- Routing, rate limiting and quotas
- Auth (IAM, JWT, API keys, mTLS)
- Request/response transformation, caching, observability

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Core capabilities

- Routing, rate limiting and quotas
- Auth (IAM, JWT, API keys, mTLS)
- Request/response transformation, caching, observability

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Apache APISIX](https://apisix.apache.org/) | Apache-2.0 | High-performance API gateway with plugins. | Full-featured. |
| [Kong Gateway](https://konghq.com/) | Apache-2.0 | Popular gateway with a plugin ecosystem. | Open-core. |
| [Tyk](https://tyk.io/) | MPL-2.0 | Open-source API gateway and management. | Open-core. |
| [KrakenD](https://www.krakend.io/) | Apache-2.0 | Stateless API gateway/aggregator. | Config-driven. |
| [Traefik / Gravitee](https://traefik.io/) | MIT / Apache-2.0 | Edge router and API management options. | Cloud-native routers. |

## Gap

AWS’s deep IAM/Lambda integration and fully managed nature are the remaining differences.

## Verdict

Available. A crowded field of mature open gateways exists.

## Product description and scope

AWS API Gateway is a managed front door for APIs: routing, auth, throttling, caching, and request/response transformation.

Catalog categories: api.

Catalogued capability areas:
- Routing, rate limiting and quotas
- Auth (IAM, JWT, API keys, mTLS)
- Request/response transformation, caching, observability

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **API Gateway**. Give this file to your coding agent in the project where you want the product built. The agent uses it to research the product, choose what to reuse, build an independent implementation and verify the result. Do not reproduce proprietary internals or claim blanket feature parity; turn product context and catalog capability labels into evidence-backed requirements.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier aws-api-gateway` and review its research status (**pending**). When using the source repository, read `research/companies/amazon_aws/products/aws-api-gateway.md`. A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Reuse/build decision

A mature candidate is listed. Evaluate it as a possible foundation, but do not treat the candidate listing as the product build or substitute it for the user's request. Build the requested product in the user's project; reuse, integrate or extend candidate components where they fit.

Current alternative coverage: **mature alternative listed**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: Available. A crowded field of mature open gateways exists. AWS’s deep IAM/Lambda integration and fully managed nature are the remaining differences.

Candidate projects to verify:

- **Apache APISIX** (Apache-2.0) — High-performance API gateway with plugins. Note: Full-featured. Source: https://apisix.apache.org/
- **Kong Gateway** (Apache-2.0) — Popular gateway with a plugin ecosystem. Note: Open-core. Source: https://konghq.com/
- **Tyk** (MPL-2.0) — Open-source API gateway and management. Note: Open-core. Source: https://tyk.io/
- **KrakenD** (Apache-2.0) — Stateless API gateway/aggregator. Note: Config-driven. Source: https://www.krakend.io/
- **Traefik / Gravitee** (MIT / Apache-2.0) — Edge router and API management options. Note: Cloud-native routers. Source: https://traefik.io/

### Build the product with this skill in the user's project

Give this product skill to the coding agent in the project where the user wants the product built. First review that project and assess current reuse options; then define a useful scope, build the requested product in the user's project, and verify the result. The coverage label below reports only research into open-source alternatives.

### Product behaviors to research and turn into requirements

- **AWS-API-GATEWAY-CAP-001 — Routing, rate limiting and quotas:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **AWS-API-GATEWAY-CAP-002 — Auth (IAM, JWT, API keys, mTLS):** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **AWS-API-GATEWAY-CAP-003 — Request/response transformation, caching, observability:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.

For each behavior selected for the MVP, record the user/actor, preconditions, input, expected observable result, alternate/error path, data and permission implications, source evidence, and a stable requirement ID (for example `AWS-API-GATEWAY-REQ-001`). Map that ID from evidence to workflow/specification to an automated test or a named manual check.

### Build the product in the user's project

Use the product skill from the project where the user wants **API Gateway** built. Review that project's conventions and existing code, then plan a useful first slice with clear requirements, explicit non-goals, assumptions, external dependencies and measurable acceptance checks. Continue from that working slice toward the user's requested product. The catalog and optional scaffold provide guidance; your implementation belongs in the user's project. If research is insufficient for a behavior, gather evidence before coding that behavior.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/amazon_aws/products/aws-api-gateway.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./aws-api-gateway (optional local workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Verification and definition of done

- Every MVP requirement maps to evidence and a passing automated test or named manual check.
- Product-specific tests pass. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run `npm run validate` and `npm test`; otherwise use the installed CLI's `rae research validate` for catalog integrity.
- Setup and configuration work from a clean start; security and license review is recorded; limitations and unimplemented capabilities are explicit.
- A reviewer accepts the implementation and its handoff. Passing tests prove only the tested behavior—not parity with API Gateway.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product metadata: `rae products show aws-api-gateway --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier aws-api-gateway`; source file when working in the repository: `research/companies/amazon_aws/products/aws-api-gateway.md`.
- Alternative candidates and coverage: `rae alternatives list --product aws-api-gateway`; source landscape file when available: `catalog/skills/amazon_aws/aws-api-gateway.md`.
- Optional local product workspace/specifications: `./aws-api-gateway (optional local workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/aws-api-gateway.md`.
- Official product page: https://aws.amazon.com/api-gateway/.
- Research status: **pending**; alternative coverage: **mature alternative listed**. This coverage label describes existing-project research only, not the ability to build this product.

### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show aws-api-gateway --format json` and retrieve the dossier contents with `rae research dossier aws-api-gateway` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. Generate a portable agent kit with `rae aws-api-gateway --out ./aws-api-gateway-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product aws-api-gateway --out ./aws-api-gateway` only if useful. Keep generated outputs separate; do not overwrite existing work.


## Sources

- https://www.moesif.com/blog/api-engineering/api-gateways/Open-Source-API-Gateway-Roundup/
- https://api7.ai/learning-center/api-gateway-guide/api-gateway-comparison-apisix-kong-traefik-krakend-tyk
- https://nordicapis.com/6-open-source-api-gateways/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`aws-api-gateway`)
- Research dossier: [`research/companies/amazon_aws/products/aws-api-gateway.md`](../../../research/companies/amazon_aws/products/aws-api-gateway.md)
- REA web-surface report: [`catalog/rea/amazon_aws/aws-api-gateway.md`](../../rea/amazon_aws/aws-api-gateway.md)
