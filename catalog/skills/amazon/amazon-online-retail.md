---
name: amazon-online-retail
description: "Evidence-aware build skill for Amazon Online Retail (amazon-online-retail); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon Online Retail — implementation skill (`amazon-online-retail`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon Online Retail**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon Online Retail** (`amazon-online-retail`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon/amazon-online-retail.md` from the catalog page, or run `npx rae-faang amazon-online-retail --out ./amazon-online-retail.md`, `npx rae-faang skills generate amazon-online-retail` or `npx rae-faang build agent-kit amazon-online-retail --out ./amazon-online-retail-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the RAE FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon Online Retail / `amazon-online-retail` | `catalog/products.jsonl` |
| Official product URL | [https://www.amazon.com/](https://www.amazon.com/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | Not recorded in the catalog; find the official documentation and record it before relying on prose. | Catalog record |
| Research dossier | `npx rae-faang research dossier amazon-online-retail` | `research/companies/amazon/products/amazon-online-retail.md` |
| REA report | `catalog/rea/amazon/amazon-online-retail.md` (captured 2026-11-03T01:30:45.762Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-online-retail.json` (`ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3`) | Catalog evidence |
| Alternative candidates | 5 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rae-faang products show amazon-online-retail --format json` and `npx rae-faang research dossier amazon-online-retail` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.amazon.com/](https://www.amazon.com/), captured 2026-11-03T01:30:45.762Z, evidence `ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-ONLINE-RETAIL-CAP-9E79F04E`, `AMAZON-ONLINE-RETAIL-CAP-0A10ECE7`, `AMAZON-ONLINE-RETAIL-CAP-343DA092`, `AMAZON-ONLINE-RETAIL-CAP-DF69BBFC`.

### Step 5 — decide the open-source foundation (mandatory gate)

Do not start building until section 9 records an explicit verdict: **REUSE**, **INTEGRATE**, **EXTEND**, **BUILD** or **INVESTIGATE MORE**. The verdict names the candidate (or none) and the evidence behind it. A curated candidate is a lead, never an approved foundation.

### Step 6 — turn findings into a plan

`PLAN.md` must carry: the agreed scope and non-goals; requirement IDs with their evidence/confidence; the foundation verdict and its obligations; architecture and data model labelled PROPOSED where they are your design; API/protocol contracts with authorization, errors, limits and idempotency; the test plan per requirement; and the explicit exclusion/unknown list. Anything still UNKNOWN stays blocked rather than guessed.

### Step 7 — build in the consumer project

Implement in the user’s repository with its stack, conventions and tests. Write original code and assets; do not copy proprietary source, protected assets, branding, copy text or assets you are not licensed to use. Match observable behavior and user-facing outcomes within the agreed scope — a functional equivalent, not a replica, and never a parity claim.

### Step 8 — verify and report

Run the project’s real checks and capture exit codes. Exercise the primary workflow plus the relevant failure, permission, cancellation and recovery paths through the interface the user will use. Report requirement → code → test evidence, everything partial, excluded or unknown, and every check not run. Do not weaken, skip or delete a failing check to make a result look green.

### Outputs expected

| Output | Where | Required content |
|---|---|---|
| Evidence ledger | `FINDINGS.md` in the consumer project | One row per claim: evidence ID, scope, action, classification, source location, access date, limitation |
| Capability and workflow map | `FINDINGS.md` | Evidenced capabilities, complete/partial workflows, states, permissions, failures and unknowns |
| Foundation decision record | `DECISION.md` in the consumer project | Candidate audit, coverage comparison and one explicit verdict from section 9 |
| Implementation plan | `PLAN.md` in the consumer project | Scope, requirement IDs, chosen foundation, architecture, proposed contracts, test plan, exclusions |
| Implementation | The consumer project’s own source tree | Original code and assets in the project’s conventions; no copied proprietary source |
| Tests | The consumer project’s test suite | Deterministic tests per implemented requirement plus relevant failure and permission paths |
| Report | `REPORT.md` in the consumer project | Requirement → code → test evidence, commands with real exit codes, partial/excluded/unknown items, checks not run |

### Stop conditions

- Authorization, target identity or user scope is unclear → stop and ask.
- A capability, contract or data structure is still UNKNOWN → keep it blocked; do not infer it from category, marketing or competitor behavior.
- No foundation verdict is recorded → return to section 9; do not begin implementation.
- A required tool or surface is unavailable → record the blocker and report the reduced scope.


## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Amazon Online Retail** / `amazon-online-retail` | Product catalog |
| Company / category | Amazon / `consumer_application` / `ecommerce` | Product catalog |
| Official website / docs | [https://www.amazon.com/](https://www.amazon.com/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **consumer_application** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-ONLINE-RETAIL-CAP-9E79F04E` | Product catalogue and search | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-ONLINE-RETAIL-CAP-0A10ECE7` | Cart, checkout and payments | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-ONLINE-RETAIL-CAP-343DA092` | Reviews, recommendations, marketplace | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-ONLINE-RETAIL-CAP-DF69BBFC` | Fulfilment and logistics integration | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Continue shopping`, `link: Conditions of Use`, `link: Privacy Policy`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Product catalogue and search:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Cart, checkout and payments:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Reviews, recommendations, marketplace:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Fulfilment and logistics integration:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | Not recorded | Full IA/routes/authenticated navigation |
| Views/headings | `Click the button below to continue shopping` | Results and subsequent views |
| Controls | `button: Continue shopping`, `link: Conditions of Use`, `link: Privacy Policy` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Conditions of Use](https://www.amazon.com/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=508088)`, `[Privacy Policy](https://www.amazon.com/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=468496)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-9E79F04E — Product catalogue and search
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-9E79F04E`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ONLINE-RETAIL-CAP-9E79F04E` → `REQ-FUNC-9E79F04E` → `TEST-FUNC-9E79F04E`.

### REQ-FUNC-0A10ECE7 — Cart, checkout and payments
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-0A10ECE7`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ONLINE-RETAIL-CAP-0A10ECE7` → `REQ-FUNC-0A10ECE7` → `TEST-FUNC-0A10ECE7`.

### REQ-FUNC-343DA092 — Reviews, recommendations, marketplace
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-343DA092`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ONLINE-RETAIL-CAP-343DA092` → `REQ-FUNC-343DA092` → `TEST-FUNC-343DA092`.

### REQ-FUNC-DF69BBFC — Fulfilment and logistics integration
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-DF69BBFC`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ONLINE-RETAIL-CAP-DF69BBFC` → `REQ-FUNC-DF69BBFC` → `TEST-FUNC-DF69BBFC`.

Keep original behavior VERIFIED/CORROBORATED distinct from inference and independent decisions INFERRED/PROPOSED. UNKNOWN stays unknown; contradictory evidence stays CONFLICTED. These requirements are blocked planning placeholders until evidence, user scope, measurable criteria and test oracles are recorded.

## 6. Data model and state

**Original product structures:** UNKNOWN. No structured evidence establishes fields/types, IDs, ownership/permissions, lifecycle, persistence, constraints, deletion/retention, import/export, migration, concurrency or indexes.

**Independent model (PROPOSED):** define only state needed for the researched first slice; specify IDs, validation, owners, state transitions, concurrency, deletion/export/retention and migration. Do not describe it as the target’s model.

## 7. APIs, integrations and protocols

**Original contracts:** none verified in structured evidence. Dossier prose does not establish supported APIs. Do not invent target endpoints, schemas, auth, events or limits. If the independent implementation needs an interface, define a versioned contract labelled PROPOSED, including request/response, authorization, errors, limits, timeouts, retries and idempotency.

## 8. Architecture and technical design

**PROPOSED independent design; target internals unknown.** Use only components required by verified scope.

```mermaid
flowchart LR
  UI[Interface] --> APP[Application and domain boundary]
  APP --> DB[(Persistence if needed)]
  APP --> EXT[Authorized integrations if needed]
```

Separate interface/domain/persistence/integration boundaries. Enforce access at trusted boundaries, isolate tenants where relevant, and define timeout/partial failure behavior. Add queues/caches/scaling/deployment components only when requirements justify them. Record configuration, secrets, data flow, recovery, observability and deployment assumptions in the implementation project.

## 9. Open-source foundation and dependency strategy

**Mandatory decision gate.** Identify real candidates, compare them against the findings from section 14, and record one explicit verdict before any implementation work. A curated candidate is a research lead; nothing here has been cloned, executed, license-audited or security-reviewed by the catalog compiler.

### 9.1 Candidate register

| Candidate | Repository | License | Claimed coverage (unverified) | Limitations | Maintenance | Compatibility | Verdict |
|---|---|---|---|---|---|---|---|
| [Medusa](https://medusajs.com/) | Not recorded; verify the canonical repository | MIT (unverified) | Open headless commerce platform (Node.js). | Modern, API-first. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Saleor](https://saleor.io/) | Not recorded; verify the canonical repository | BSD-3-Clause (unverified) | GraphQL-first headless commerce. | Modern alternative. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Vendure](https://www.vendure.io/) | Not recorded; verify the canonical repository | MIT (unverified) | TypeScript/GraphQL commerce framework. | Developer-focused. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Magento Open Source](https://business.adobe.com/products/magento/magento-commerce.html) | Not recorded; verify the canonical repository | OSL-3.0 (unverified) | Enterprise-grade open storefront. | Heavyweight; Adobe-stewarded. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [WooCommerce / Bagisto / Spree](https://woocommerce.com/) | Not recorded; verify the canonical repository | GPL-3.0 / MIT / BSD-3-Clause (unverified) | Storefronts on WordPress and standalone stacks. | Range of approaches. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `AMAZON-ONLINE-RETAIL-CAP-9E79F04E` — Product catalogue and search | Not verified against Medusa | None yet; compare with `ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3` | Candidate code path and tests must be inspected |
| `AMAZON-ONLINE-RETAIL-CAP-0A10ECE7` — Cart, checkout and payments | Not verified against Medusa | None yet; compare with `ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3` | Candidate code path and tests must be inspected |
| `AMAZON-ONLINE-RETAIL-CAP-343DA092` — Reviews, recommendations, marketplace | Not verified against Medusa | None yet; compare with `ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3` | Candidate code path and tests must be inspected |
| `AMAZON-ONLINE-RETAIL-CAP-DF69BBFC` — Fulfilment and logistics integration | Not verified against Medusa | None yet; compare with `ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Medusa** (Open headless commerce platform (Node.js).), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Medusa** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
- If it covers only part of the scope, or would need to run beside the user’s existing system → **INTEGRATE** it behind a defined boundary, or **EXTEND** it with original modules where its extension points allow it.
- If no candidate survives inspection → **BUILD** an independent implementation, and record which candidates failed and why.
- If the evidence is still insufficient → **INVESTIGATE MORE**, naming the exact question, source and check that would settle it.

### 9.4 What each verdict obliges

| Verdict | You must have | It commits you to |
|---|---|---|
| **REUSE** | The candidate implements the in-scope capability leads; license and dependencies checked against the user’s distribution model; version pinned; tests/CI reviewed | Adopt it as the foundation, keep its license notices, and document the upstream version and update path |
| **INTEGRATE** | A verified boundary: API/protocol, data ownership, failure and upgrade behavior, plus a license review of both sides | Run the candidate beside the user’s system through an explicit contract; test the boundary and its failure modes |
| **EXTEND** | Documented extension points, an upstream contribution or fork policy, and a migration path for local changes | Add original modules on top of the candidate; record what is upstream versus local and how it survives updates |
| **BUILD** | The candidates that were searched, inspected and rejected, with reasons; the evidenced scope; a test plan | Build independently with original code and assets, reusing only libraries whose licenses permit it |
| **INVESTIGATE MORE** | The exact open question, the source or tool that answers it, and the date by which it must be answered | Do not implement the affected scope yet; resolve or explicitly block it first |

**No verified alternative is a valid outcome**: mark the coverage UNKNOWN / PENDING, say what you searched and what you inspected, and let the verdict be INVESTIGATE MORE or BUILD. Absence of evidence in this catalog is never evidence of absence.


## 10. Security and privacy

No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.

Product-specific review: Review product-specific identity, authorization, privacy, abuse and dependency threats. Do not claim compliance, privacy or security parity without scoped assessment.

## 11. Error handling and edge cases

These are test prompts, not target behavior assertions. Keep only relevant cases and derive expected behavior from evidence or label an independent decision PROPOSED.

- **EDGE-001:** Missing/malformed/oversized input. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-002:** Unauthorized or revoked action and tenant isolation where applicable. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-003:** Empty data/results and duplicate operations. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-004:** Concurrent updates or stale writes to mutable state. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-005:** Network timeout, throttling, external outage, retry and partial failure. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-006:** Cancellation/interruption during state change and restart recovery. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-007:** Corrupt/incompatible imported or persisted data; migration failure. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-008:** Expired credentials/session where applicable. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-9E79F04E** → `REQ-FUNC-9E79F04E`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-0A10ECE7** → `REQ-FUNC-0A10ECE7`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-343DA092** → `REQ-FUNC-343DA092`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-DF69BBFC** → `REQ-FUNC-DF69BBFC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

These are proposed deterministic implementation-test plans, not original-product observations. Compare the original only through separately authorized, repeatable public observation. A passing spec test does not establish parity.

## 13. Implementation roadmap

### Phase 1 — Foundation and dependencies

- **Tasks:** Inspect user project, stack, constraints, tests, candidate implementations and licenses.
- **Prerequisites:** Repository inspection and user scope.
- **Deliverables:** Project map, evidence ledger, reuse decision, bounded plan
- **Requirements:** Select after evidence review
- **Tests:** Clean setup/validation smoke test
- **Completion:** Clean setup and documented dependency/reuse decision.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 2 — Core domain behavior

- **Tasks:** Research then implement one useful vertical slice with explicit state, validation and permissions.
- **Prerequisites:** Phase 1 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-9E79F04E, REQ-FUNC-0A10ECE7, REQ-FUNC-343DA092, REQ-FUNC-DF69BBFC
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-9E79F04E, REQ-FUNC-0A10ECE7, REQ-FUNC-343DA092, REQ-FUNC-DF69BBFC
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** E2E acceptance checks via user-facing interface.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 4 — Integrations

- **Tasks:** Add only documented/authorized integrations; mock boundaries for offline routine tests.
- **Prerequisites:** Phase 3 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Contract and failure-injection tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 5 — Secondary capabilities

- **Tasks:** Implement remaining in-scope behavior by user priority and evidence.
- **Prerequisites:** Phase 4 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Trace: REQ-FUNC-9E79F04E, REQ-FUNC-0A10ECE7, REQ-FUNC-343DA092, REQ-FUNC-DF69BBFC; document exclusions and unknowns.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 6 — Security and reliability

- **Tasks:** Review access, privacy, abuse, migration, backup, observability and recovery as applicable.
- **Prerequisites:** Phase 5 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Applicable security/recovery checks and risks recorded.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 7 — Verification and release

- **Tasks:** Run project checks; inspect behavior, accessibility, compatibility, license and docs.
- **Prerequisites:** Phase 6 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Reproducible result and transparent completion/gap report.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.


## 14. Evidence, uncertainty and exclusions

### Evidence index

| Source ID | Title / location | URL | Access date | Claim supported | Classification and limits |
|---|---|---|---|---|---|
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.amazon.com/) | Not recorded | Amazon Online Retail is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3` | Amazon Online Retail Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.amazon.com/) | 2026-11-03T01:30:45.762Z | A dated unauthenticated snapshot exposed controls button: Continue shopping, link: Conditions of Use, link: Privacy Policy and landmarks (none recorded). | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

### Confidence classifications

VERIFIED: observed/documented within exact scope. CORROBORATED: supported by multiple compatible sources. INFERRED: reasoned, not directly established. PROPOSED: independent design or candidate. UNKNOWN: not established. CONFLICTED: sources disagree. A source URL alone is not verification; confidence cannot exceed the source. Every important claim in a future completed research record must cite its source location and access date.

### Prioritized unknowns

| Priority | Unknown / blocker | Next evidence action |
|---|---|---|
| P0 | Claim-level evidence linked to each capability. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Investigate official documentation and authorized public behavior; update evidence IDs. |
| P0 | Intended user, roles, user jobs, and requested implementation boundary. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Research product/user scope; ask user when scope choice materially changes deliverable. |
| P0 | Full successful, denied, failed, cancelled, retry and recovery workflows. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Observe authorized workflows; record checkpoint and observable oracle. |
| P1 | Supported versions, platforms, responsive and accessibility behavior. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Verify product version and platform documentation; run authorized observation. |
| P1 | Data model, state, ownership, retention, import/export and concurrency. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Use primary docs or record as unknown; propose only the independent slice model. |
| P1 | API/protocol contracts, integrations, authorization, limits and errors. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Use official API spec or label independent contract PROPOSED. |
| P1 | Candidate repository state, implementation, tests, license and operations. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Inspect exact repository/version and distribution dependencies before recommendation. |
| P2 | Representative performance targets and operational scale. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Define workload and target before measurement; avoid scale equivalence claims. |

### Resumable investigation checkpoint

Resume token: `amazon-online-retail`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon Online Retail is the world's largest e-commerce marketplace, offering hundreds of millions of products across categories including electronics, books, clothing, home goods, groceries, and more. It operates as both a first-party retailer (Amazon Retail) and a third-party marketplace (Marketplace), with fulfillment options including Fulfillment by Amazon (FBA), Seller Fulfilled Prime, and direct shipping.

# 2. Product identity and ownership

- **Official name:** Amazon.com / Amazon Online Retail
- **Company and business unit:** Amazon.com Inc. (Stores division)
- **Parent organization:** Amazon.com Inc.
- **Original launch date:** 1995 (books), expanded to everything store
- **Current lifecycle status:** active
- **Previous names:** Cadabra (original incorporation name)
- **Acquisitions or ownership changes:** Acquired Zappos (2009), Whole Foods (2017), PillPack (2018), iRobot (2022, pending/abandoned)
- **Related products:** Amazon Prime, AWS, Amazon Advertising, Amazon Logistics, Amazon Fresh, Amazon Pharmacy, Amazon Business
- **Official website:** https://www.amazon.com/
- **Official documentation:** https://sellercentral.amazon.com/ (sellers), https://affiliate-program.amazon.com/ (associates)

# 3. Product capabilities

- **Product catalog:** 350M+ products, ASIN-based identification, variation relationships
- **Search and discovery:** A9 algorithm, autocomplete, filters, browse nodes, sponsored products
- **Product detail pages:** Images, videos, 3D views, specifications, Q&A, reviews, ratings
- **Reviews and ratings:** Verified purchase badges, Vine program, review helpfulness voting
- **Cart and checkout:** 1-Click ordering, saved addresses/payment, gift options, Amazon Pay
- **Fulfillment:** FBA (storage, pick/pack/ship, customer service, returns), MCF (multi-channel), Seller Fulfilled Prime
- **Shipping:** Prime free 1-2 day, Same-Day, Amazon Day, Lockers, Counter, Key (in-garage/in-home)
- **Returns:** Online return center, drop-off (Kohl's, UPS, Whole Foods), QR code returns, refund before return
- **Subscriptions:** Subscribe & Save (recurring deliveries, discounts)
- **Marketplace:** Third-party sellers (professional/individual), Buy Box algorithm, Brand Registry
- **Amazon Business:** B2B purchasing, quantity discounts, tax exemption, analytics
- **International:** 20+ marketplaces, currency conversion, cross-border fulfillment
- **Advertising:** Sponsored Products, Brands, Display, DSP, video ads
- **Alexa shopping:** Voice ordering, reordering, deal notifications
- **AR View / Room Decorator:** Augmented reality product visualization

# 4. Technical architecture

- **Microservices:** Service-oriented architecture, thousands of services
- **Catalog:** Distributed catalog service, ASIN as primary key, eventual consistency
- **Search:** A9 (proprietary), inverted indexes, ranking models, real-time indexing
- **Recommendations:** Item-to-item collaborative filtering, real-time personalization
- **Fulfillment:** Warehouse management (WMS), transportation management (TMS), robotics (Kiva), optimization algorithms
- **Payments:** Internal payment processing, fraud detection, multi-currency
- **Infrastructure:** AWS (EC2, S3, DynamoDB, Aurora, Lambda, etc.), custom hardware (Inferentia, Trainium)
- **Mobile/Web:** React Native (app), progressive web app, native iOS/Android

# 5. User workflows

Shoppers: search/browse → product detail → add to cart → checkout → track delivery → review. Sellers: register → list products (manual/feed/API) → manage inventory → fulfill orders (FBA/self) → handle returns → advertise → analyze performance. Prime members: free shipping, Prime Video, Prime Music, exclusive deals.

# 6. Pricing and access

Free to browse and buy. Prime: $139/year or $14.99/month (US). Sellers: Individual ($0.99/item) or Professional ($39.99/mo) + referral fees (8-45% by category) + FBA fees (storage, fulfillment, removal). Advertising: CPC/CPM bidding.

# 7. API and integration surface

- **SP-API (Selling Partner API):** REST/JSON, OAuth, catalog, orders, fulfillment, reports, finances, notifications
- **Product Advertising API (PA-API):** Affiliate product data, search, browse
- **Amazon Business API:** B2B purchasing integration
- **Marketplace Web Service (MWS):** Legacy, being deprecated
- **Amazon Pay API:** Checkout on third-party sites
- **Alexa Shopping Kit:** Voice commerce skills

# 8. Existing open-source alternatives

- **Magento / Adobe Commerce:** Self-hosted PHP, extensive extensions, B2B/B2C
- **WooCommerce:** WordPress plugin, largest market share, PHP
- **Shopify (SaaS):** Not open-source, but dominant alternative
- **OpenCart:** PHP, lightweight, extension marketplace
- **PrestaShop:** PHP, European focus, modular
- **Sylius:** PHP/Symfony, headless-ready, developer-focused
- **Saleor:** Python/Django/GraphQL, headless, modern stack
- **Medusa:** Node.js/TypeScript, headless, composable
- **Odoo:** Python, ERP + e-commerce, modular
- **Spree / Solidus:** Ruby on Rails, API-first
- **No open-source alternative replicates Amazon's marketplace scale, fulfillment network, or recommendation engine**

# 9. Alternative comparison

Magento, WooCommerce, and Shopify dominate merchant-facing e-commerce. For marketplace model (multi-vendor), extensions exist (Magento Marketplace, WCFM for WooCommerce, Sharetribe) but lack Amazon's integrated fulfillment (FBA), Prime logistics, and trust infrastructure. Saleor and Medusa are modern headless alternatives for custom builds.

# 10. Missing capabilities and opportunity analysis

Integrated fulfillment network (FBA), Prime logistics (1-2 day at scale), trusted marketplace with A-to-Z Guarantee, proprietary recommendation engine, and massive product catalog are the main gaps. An open alternative could focus on a federated marketplace protocol (ActivityPub for commerce) with standardized fulfillment APIs.

# 11. RAE implementation strategy

Not feasible to replicate Amazon's scale. Strategy: Build on Saleor or Medusa for headless commerce core. Add marketplace extensions (multi-vendor, commission handling). Integrate with open fulfillment APIs (Shippo, EasyPost) for shipping. Explore federated commerce protocols (OASIS, ActivityPub extensions). Focus on merchant-owned, interoperable commerce.

# 12. Security, privacy, and compliance

PCI DSS for payments, GDPR/CCPA for personal data, SOX for financials, sales tax nexus compliance. Marketplace adds seller verification, product compliance (CPSC, FDA), counterfeit prevention (Transparency, Project Zero). Open alternative must support PCI, GDPR, tax calculation (Avalara/TaxJar), and seller onboarding/KYC.

# 13. Sources and evidence

- https://www.amazon.com/ (retail site)
- https://sellercentral.amazon.com/ (seller docs)
- https://developer-docs.amazon.com/sp-api/ (SP-API docs)
- https://www.shopify.com/ (alternative)
- https://saleor.io/ (alternative)

# 14. Open questions

- Can a federated marketplace protocol achieve critical mass?
- What is the minimum viable fulfillment network for competitive shipping?
- How to handle trust/reputation without a central authority?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Saleor + Medusa are the best modern open-source bases for merchant stores. For marketplace, Sharetribe (open core) or custom extensions on Saleor. The fulfillment/logistics gap requires carrier integration, not replication.

---

# 17. RAE implementation strategy (continued)

Phase 1: Saleor/Medusa core with multi-vendor extension. Phase 2: Fulfillment API integrations (Shippo, carrier APIs). Phase 3: Search/recommendation (Meilisearch + custom models). Phase 4: Federated identity/payments (OIDC, Interledger). Phase 5: Seller tools (analytics, advertising).

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier amazon-online-retail` and inspect canonical identity with `npx rae-faang products show amazon-online-retail --format json`.
2. Inspect the existing repository, architecture, dependencies, tests, configuration and interface before editing.
3. Confirm target scope and user priorities; list evidence blockers and never fill them with invented facts.
4. Evaluate candidate foundations through actual code, exact version, license/dependency terms, tests, security, maintenance, operations and fit.
5. Make a minimal dependency-aware plan for a functioning vertical slice.
6. Implement the slice with original code/assets and the host project’s conventions.
7. Add deterministic tests for every implemented requirement, including relevant failure and permission paths.
8. Implement remaining scoped capabilities incrementally; explicitly mark partial, excluded and unknown items.
9. Review security, privacy, dependencies, licensing, accessibility and compatibility.
10. Run actual project checks and inspect behavior through the interface the user will use.
11. Fix causes; do not weaken tests, hide errors or claim parity from generated code.
12. Document deviations, unimplemented requirements, limitations and checks not run.
13. Report requirement → code → test evidence and actual command results.
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang amazon-online-retail --out ./amazon-online-retail.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit amazon-online-retail --out ./amazon-online-retail-agent`.

### Multi-agent task plan and outputs

Researcher: own the evidence ledger and unknowns. Architect: approve scope, boundaries and contracts before parallel work. Implementers: deliver non-overlapping, integrated vertical slices. Tester: map acceptance checks to requirement IDs. Reviewer: inspect privacy, security, accessibility and license risk. Documenter: preserve setup and limitations. Handoffs record changed files, requirement IDs, commands/exit codes, checks not run and one specific next action.

### Acceptance criteria and definition of done

- Every in-scope behavior has a unique requirement ID, evidence/confidence, bounded scope, measurable acceptance oracle and associated test/manual check.
- Each implemented requirement maps to code and a deterministic passing test or repeatable manual observation; unknown requirements remain blocked/unknown.
- Primary and relevant alternate/failure workflows run through the user-facing interface; partial/excluded scope and recovery behavior are documented.
- Security, privacy, dependency/license, accessibility, compatibility, setup, project checks, and unrun checks are reported honestly.
- Requirement trace is evidence → workflow → specification/contract → implementation → automated test; passing specification checks do not claim target parity.

### Product quality and verification plan

- Correctness: tested success, empty, malformed, denied, duplicate, timeout/retry, cancellation, partial failure and recovery cases as relevant.
- Security/privacy: trust boundaries, least privilege, secret handling, data minimization, retention/export/deletion and abuse controls.
- UX/accessibility: keyboard/screen reader, labels/focus, loading/empty/error/success states, responsive behavior and reduced motion where relevant.
- Reliability/performance: reproducible setup, migrations, backup/restore, observability, representative workloads and measured targets before claims.
- Compatibility/licensing: test claimed versions/platforms; check direct/transitive license obligations and dependencies.

### End-to-end implementation milestones

Follow the seven dependency-aware phases in the roadmap above. Prefer a complete, tested vertical slice over disconnected scaffolding; continue remaining verified in-scope requirements and record blockers.

### Required deliverables

- Evidence ledger, behavior/capability map, prioritized unknowns and source limitations.
- User scope, architecture/data/API decisions with original-vs-proposed labels, and a candidate reuse/license evaluation.
- Working implementation, requirement-to-test traceability, actual project check results and interface-level verification.
- Documented deviations, partial/not-started/excluded requirements, unrun checks, setup and next actionable step.

### Provenance

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-online-retail`).
- Dossier: [research/companies/amazon/products/amazon-online-retail.md](../../../research/companies/amazon/products/amazon-online-retail.md).
- REA capture: [catalog/rea/amazon/amazon-online-retail.md](../../rea/amazon/amazon-online-retail.md) (2026-11-03T01:30:45.762Z); raw record: [catalog/rea/evidence/amazon-online-retail.json](../../rea/evidence/amazon-online-retail.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.amazon.com/) — Amazon Online Retail is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Amazon Online Retail Public web-surface observation (REA)](https://www.amazon.com/) — A dated unauthenticated snapshot exposed controls button: Continue shopping, link: Conditions of Use, link: Privacy Policy and landmarks (none recorded). (VERIFIED; accessed 2026-11-03T01:30:45.762Z).
