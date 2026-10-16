# Canonical product-skill specification

## Purpose and sources of truth

Compile one stable, standalone build skill per product from existing canonical RAE FAANG records. The deterministic compiler is `tools/product-skill-generator.mjs`; its inputs are:

1. Identity and lifecycle: `catalog/products.jsonl` and `catalog/companies.json`.
2. Research notes and claim-level evidence: `research/companies/<company_id>/products/<id>.md` and product `evidence[]` where present.
3. Public runtime observations: `catalog/rea/<company_id>/<id>.md` and matching raw record under `catalog/rea/evidence/`.
4. Curated open-source landscape: `tools/skills/catalog-data.mjs`.
5. Optional detailed specifications and opportunities remain referenced research/build artifacts, not replacement sources of product identity.

Generated output: exactly `catalog/skills/<company_id>/<id>.md` for each catalogued product. The stable product ID is the file identity. `catalog/skills/README.md` remains the generated discovery/index artifact. Site pages and downloadable agent-kit Markdown are views, not a parallel source of truth.

## Required sections and minimum bar

Every skill MUST include exactly these numbered top-level sections, in this order:

1. Product identity and scope — canonical name, stable ID, owner/category, official URLs, lifecycle, supported version/platform, intended users/jobs, boundaries, independent scope, exclusions. Unsupported fields say Unknown.
2. Product capability map — stable feature IDs; capability statement; evidence and verification classification; user problem, entry, I/O, preconditions, permissions, state/dependencies, failure/recovery, priority and implementation considerations. Unknown subfields are explicit.
3. Complete user workflows — only evidence-backed workflows; entry page/control observations are not full workflows. Include state, actions, validation, persistence, service interactions, success, cancel, failure, retry, recovery and permissions or label unknown.
4. Interaction and interface specification — observed navigation, views, controls, links/routes, forms, state, responsive/platform and accessibility behavior; separate untested/unknown items.
5. Functional requirements and traceability — stable unique IDs, behavior, preconditions/results/failures, priority, evidence/classification, measurable acceptance oracle, test IDs, and links through capability → requirement → test. Requirements without evidence are blocked placeholders, not target facts.
6. Data model and state — original entities, fields/types, IDs, owners, constraints, state transitions, persistence/retention/deletion, import/export, migration, concurrency, indexes; say unknown where not established. A minimal independent model is explicitly PROPOSED.
7. APIs, integrations and protocols — evidence-backed endpoint/request/response/auth/error/version/limit/event contracts; absent contracts are unknown. Independent contracts are clearly PROPOSED.
8. Architecture and technical design — original architecture only when evidenced; otherwise proposed minimum architecture with components, trust boundaries, data flow, failure/configuration/observability/deployment/scaling assumptions.
9. Open-source foundation and dependency strategy — canonical repository only if explicitly available; candidate capability/license claims unverified until repository/version/license/dependencies/tests/security/maintenance/operations are inspected. Map requirements to actual modules/tests before recommending adoption.
10. Security and privacy — scoped risks and concrete proposed controls/tests; never unsupported compliance claims.
11. Error handling and edge cases — relevant test prompts and target behavior status; do not invent expected outcomes.
12. Testing and behavioral verification — stable test IDs mapped to requirements, deterministic fixtures/steps/oracles/pass rules/limitations. Separate spec verification from comparison to the original.
13. Implementation roadmap — dependency-aware foundation, domain, workflows, integrations, secondary features, security/reliability, verification/release; each phase has tasks, prerequisites, deliverables, requirement IDs, tests, completion and risks.
14. Evidence, uncertainty and exclusions — evidence/source index, precise claim supported, source location/date/limitations/confidence; prioritized unknowns; conflicts; explicit exclusions; resumable investigation checkpoints.
15. Downstream execution instructions — read skill and repo instructions, inspect project, confirm scope/blockers, assess reuse, plan/implement vertical slice, test all implemented requirements, increment scope, review security/licensing, run project checks via the user interface, fix causes, document deviations and report requirement→code→test evidence.

## Evidence and confidence rules

Use `VERIFIED`, `CORROBORATED`, `INFERRED`, `PROPOSED`, `UNKNOWN`, or `CONFLICTED`. A source URL alone is not verification. A captured public page is verified only for what the dated snapshot visibly establishes; it cannot establish authenticated flows, control effects, service internals, APIs, data model or architecture. Repository and license facts from the curated landscape are proposals/leads until inspected. If evidence disagrees, retain the conflict.

The generator MUST NOT fetch a network source, execute a target, assume an optional inspection tool exists, upgrade dossier prose to fact, infer a workflow from product type, or fabricate requirements to fill required sections. Missing sources or requirements lower coverage and appear in the quality report.

Question-driven investigations use: `QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY → GENERATE SKILL`. Reuse existing dossier/REA evidence if adequate and fresh. Save resumable checkpoints with question, reason, authorized method, scope/version, actions, evidence IDs/locations, observation vs inference, unknown/conflict, affected capability/requirement IDs, verification/date and next question. Specialized REA/native tools are optional, authorized and capability-checked; ordinary repository/public-doc inspection is preferred when sufficient.

## Determinism and quality gates

- Same canonical inputs produce byte-identical Markdown; generated timestamps are not added.
- Single-product generation does not rebuild other skills or the site; batch failures are isolated per product and leave unrelated output untouched.
- Reject invalid product/dossier/company IDs, broken capability evidence references, REA/raw Evidence ID disagreement, malformed candidate URLs, duplicate skill IDs, invalid frontmatter, missing sections, broken internal links, requirement/test trace failures, identity mismatch and generated drift.
- Report incomplete inputs as actionable research gaps instead of treating them as fatal compile errors where a useful partial skill can still be produced.
- A catalog coverage report includes product totals, generated-with-gaps and failures, with per-product reasons.
- No LLM is required. A semantic reviewer may be added later but must return findings with evidence/severity and cannot override deterministic validation.
- Never claim parity from Markdown completeness, output byte count, generation, or a test against the generated specification alone.

## CLI and maintenance

Use the existing CLI grouping. The product-ID shorthand `rae <product-id> --out ./<product-id>.md` writes one portable Markdown skill (default: `./<product-id>.md`); `build agent-kit <product-id>` separately generates a `skill.md` + `mcp.json` kit. Explicit skill commands remain `rae skills generate <product-id>` or `rae skills generate --all`, `rae skills validate [<product-id>|--all]`, and `rae skills coverage [--format json]`. `--out` is supported for one-product generation. A product-ID operation must not require a full catalog rebuild. Keep the catalog/index generated, and run existing skill/site checks after generation.
