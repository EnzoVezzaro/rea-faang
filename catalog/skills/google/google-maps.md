---
name: google-maps
description: "Evidence-aware build skill for Google Maps (google-maps); investigate, assess reuse, implement scoped behavior and verify."
---

# Google Maps — implementation skill (`google-maps`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Google Maps**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Google Maps** (`google-maps`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/google-maps.md` from the catalog page, or run `npx rea-faang google-maps --out ./google-maps.md`, `npx rea-faang skills generate google-maps` or `npx rea-faang build agent-kit google-maps --out ./google-maps-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Google Maps / `google-maps` | `catalog/products.jsonl` |
| Official product URL | [https://maps.google.com/](https://maps.google.com/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://developers.google.com/maps/documentation](https://developers.google.com/maps/documentation) | Catalog record |
| Research dossier | `npx rea-faang research dossier google-maps` | `research/companies/google/products/google-maps.md` |
| REA report | `catalog/rea/google/google-maps.md` (captured 2026-11-03T01:38:25.598Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/google-maps.json` (`ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e`) | Catalog evidence |
| Alternative candidates | 4 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show google-maps --format json` and `npx rea-faang research dossier google-maps` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.google.com/maps](https://www.google.com/maps), captured 2026-11-03T01:38:25.598Z, evidence `ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `GOOGLE-MAPS-CAP-B6D76ED3`, `GOOGLE-MAPS-CAP-F0CC8595`, `GOOGLE-MAPS-CAP-83DCE150`, `GOOGLE-MAPS-CAP-0021D83E`.

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
| Name / stable ID | **Google Maps** / `google-maps` | Product catalog |
| Company / category | Google / `consumer_application` / `search`, `discovery` | Product catalog |
| Official website / docs | [https://maps.google.com/](https://maps.google.com/) / [https://developers.google.com/maps/documentation](https://developers.google.com/maps/documentation) | URL lead; compiler does not fetch source |
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
| `GOOGLE-MAPS-CAP-B6D76ED3` | Interactive map rendering, markers, custom styles and custom data layers for web and mobile surfaces. | VERIFIED | `ev-google-maps-documentation`, `ev-google-maps-javascript` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-MAPS-CAP-F0CC8595` | Maps, Routes, Places, geocoding and related geospatial APIs and SDKs. | VERIFIED | `ev-google-maps-platform`, `ev-google-maps-documentation` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-MAPS-CAP-83DCE150` | Consumer workflows for directions, saved places, offline areas, route options, Street View and sharing. | VERIFIED | `ev-google-maps-offline`, `ev-google-maps-features` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-MAPS-CAP-0021D83E` | Usage-based Platform pricing, free usage caps and account/billing requirements vary by SKU and service. | VERIFIED | `ev-google-maps-pricing`, `ev-google-maps-platform` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Search`, `button: Directions`, `button: Menu`, `button: Saved`, `button: Recents`, `button: Get app`, `combobox: Search Google Maps`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Interactive map rendering, markers, custom styles and custom data layers for web and mobile surfaces.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Maps, Routes, Places, geocoding and related geospatial APIs and SDKs.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Consumer workflows for directions, saved places, offline areas, route options, Street View and sharing.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Usage-based Platform pricing, free usage caps and account/billing requirements vary by SKU and service.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `search` | Full IA/routes/authenticated navigation |
| Views/headings | Not recorded | Results and subsequent views |
| Controls | `button: Search`, `button: Directions`, `button: Menu`, `button: Saved`, `button: Recents`, `button: Get app`, `combobox: Search Google Maps` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | Not recorded | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-B6D76ED3 — Interactive map rendering, markers, custom styles and custom data layers for web and mobile surfaces.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-maps-documentation`, `ev-google-maps-javascript`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-B6D76ED3`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-MAPS-CAP-B6D76ED3` → `REQ-FUNC-B6D76ED3` → `TEST-FUNC-B6D76ED3`.

### REQ-FUNC-F0CC8595 — Maps, Routes, Places, geocoding and related geospatial APIs and SDKs.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-maps-platform`, `ev-google-maps-documentation`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-F0CC8595`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-MAPS-CAP-F0CC8595` → `REQ-FUNC-F0CC8595` → `TEST-FUNC-F0CC8595`.

### REQ-FUNC-83DCE150 — Consumer workflows for directions, saved places, offline areas, route options, Street View and sharing.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-maps-offline`, `ev-google-maps-features`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-83DCE150`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-MAPS-CAP-83DCE150` → `REQ-FUNC-83DCE150` → `TEST-FUNC-83DCE150`.

### REQ-FUNC-0021D83E — Usage-based Platform pricing, free usage caps and account/billing requirements vary by SKU and service.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-maps-pricing`, `ev-google-maps-platform`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-0021D83E`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-MAPS-CAP-0021D83E` → `REQ-FUNC-0021D83E` → `TEST-FUNC-0021D83E`.

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
| [OpenStreetMap](https://www.openstreetmap.org/) | Not recorded; verify the canonical repository | ODbL-1.0 (data) (unverified) | The open map dataset and community. | Data licence, not an app. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Organic Maps](https://organicmaps.app/) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Offline navigation app built on OSM data. | No live traffic. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [MapLibre](https://maplibre.org/) | Not recorded; verify the canonical repository | BSD-3-Clause (unverified) | Open map rendering library (fork of Mapbox GL). | Rendering library, not a data service. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [OSRM / Valhalla](https://project-osrm.org/) | Not recorded; verify the canonical repository | BSD-2-Clause / Apache-2.0 (unverified) | Self-hosted routing engines. | Pair with OSM data for turn-by-turn. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `GOOGLE-MAPS-CAP-B6D76ED3` — Interactive map rendering, markers, custom styles and custom data layers for web and mobile surfaces. | Not verified against OpenStreetMap | None yet; compare with `ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e` | Candidate code path and tests must be inspected |
| `GOOGLE-MAPS-CAP-F0CC8595` — Maps, Routes, Places, geocoding and related geospatial APIs and SDKs. | Not verified against OpenStreetMap | None yet; compare with `ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e` | Candidate code path and tests must be inspected |
| `GOOGLE-MAPS-CAP-83DCE150` — Consumer workflows for directions, saved places, offline areas, route options, Street View and sharing. | Not verified against OpenStreetMap | None yet; compare with `ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e` | Candidate code path and tests must be inspected |
| `GOOGLE-MAPS-CAP-0021D83E` — Usage-based Platform pricing, free usage caps and account/billing requirements vary by SKU and service. | Not verified against OpenStreetMap | None yet; compare with `ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **OpenStreetMap** (The open map dataset and community.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **OpenStreetMap** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-B6D76ED3** → `REQ-FUNC-B6D76ED3`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-F0CC8595** → `REQ-FUNC-F0CC8595`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-83DCE150** → `REQ-FUNC-83DCE150`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-0021D83E** → `REQ-FUNC-0021D83E`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-B6D76ED3, REQ-FUNC-F0CC8595, REQ-FUNC-83DCE150, REQ-FUNC-0021D83E
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-B6D76ED3, REQ-FUNC-F0CC8595, REQ-FUNC-83DCE150, REQ-FUNC-0021D83E
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
- **Completion:** Trace: REQ-FUNC-B6D76ED3, REQ-FUNC-F0CC8595, REQ-FUNC-83DCE150, REQ-FUNC-0021D83E; document exclusions and unknowns.
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
| `ev-google-maps-identity` | Google Maps — The official URL resolves to the Google Maps web surface; the repository records a dated REA capture with search, directions, menu, saved and recent controls. | [link](https://maps.google.com/) | 2026-11-03T00:00:00Z | The canonical public product surface is Google Maps at maps.google.com. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-platform` | Google Maps Platform FAQ — Google lists Maps, Routes and Places APIs/SDKs, setup requirements, API keys, billing, usage limits and restrictions on accessing map tiles and imagery. | [link](https://developers.google.com/maps/faq) | 2026-11-03T00:00:00Z | Google Maps Platform provides APIs and SDKs for maps, routes, places and related location services. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-documentation` | Google Maps Platform documentation — The official documentation separates map rendering, directions and optimization, place search/details, geospatial environment data and datasets, with platform-specific APIs and SDKs. | [link](https://developers.google.com/maps/documentation) | 2026-11-03T00:00:00Z | Google documents distinct Maps, Routes, Places, Environment and Dataset capabilities. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-javascript` | Maps JavaScript API overview — Google documents web map rendering, markers, style customization, custom data layers, administrative boundaries and Places library usage. | [link](https://developers.google.com/maps/documentation/javascript/overview) | 2026-11-03T00:00:00Z | The Maps JavaScript API supports interactive 2D/3D maps, markers, custom data layers, styling and Places data. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-pricing` | Google Maps Platform pricing and billing — The official pricing documentation describes pay-as-you-go billing, subscriptions, usage monitoring and free monthly billable events by SKU. | [link](https://developers.google.com/maps/billing-and-pricing) | 2026-11-03T00:00:00Z | Google Maps Platform uses usage-based pricing with service-specific billable events, free usage caps and billing requirements. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-offline` | Download areas and navigate offline in Google Maps — Google Help documents downloading map areas and offline driving navigation, while noting that transit, bicycling, walking, traffic and alternate routes may be unavailable offline. | [link](https://support.google.com/maps/answer/6291838) | 2026-11-03T00:00:00Z | Google Maps supports downloading selected map areas for offline driving navigation, with limitations by region and mode. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-features` | Discover helpful features in Google Maps — Google Help lists user workflows for saved places, location sharing, offline maps, route options, Street View and measuring distances. | [link](https://support.google.com/maps/answer/6291839) | 2026-11-03T00:00:00Z | Google Maps documents saved places, location sharing, offline maps, route preferences, Street View and measurement features. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-identity` | Google Maps — The official URL resolves to the Google Maps web surface; the repository records a dated REA capture with search, directions, menu, saved and recent controls. | [link](https://maps.google.com/) | 2026-11-03T00:00:00Z | The canonical public product surface is Google Maps at maps.google.com. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-platform` | Google Maps Platform FAQ — Google lists Maps, Routes and Places APIs/SDKs, setup requirements, API keys, billing, usage limits and restrictions on accessing map tiles and imagery. | [link](https://developers.google.com/maps/faq) | 2026-11-03T00:00:00Z | Google Maps Platform provides APIs and SDKs for maps, routes, places and related location services. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-documentation` | Google Maps Platform documentation — The official documentation separates map rendering, directions and optimization, place search/details, geospatial environment data and datasets, with platform-specific APIs and SDKs. | [link](https://developers.google.com/maps/documentation) | 2026-11-03T00:00:00Z | Google documents distinct Maps, Routes, Places, Environment and Dataset capabilities. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-javascript` | Maps JavaScript API overview — Google documents web map rendering, markers, style customization, custom data layers, administrative boundaries and Places library usage. | [link](https://developers.google.com/maps/documentation/javascript/overview) | 2026-11-03T00:00:00Z | The Maps JavaScript API supports interactive 2D/3D maps, markers, custom data layers, styling and Places data. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-pricing` | Google Maps Platform pricing and billing — The official pricing documentation describes pay-as-you-go billing, subscriptions, usage monitoring and free monthly billable events by SKU. | [link](https://developers.google.com/maps/billing-and-pricing) | 2026-11-03T00:00:00Z | Google Maps Platform uses usage-based pricing with service-specific billable events, free usage caps and billing requirements. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-offline` | Download areas and navigate offline in Google Maps — Google Help documents downloading map areas and offline driving navigation, while noting that transit, bicycling, walking, traffic and alternate routes may be unavailable offline. | [link](https://support.google.com/maps/answer/6291838) | 2026-11-03T00:00:00Z | Google Maps supports downloading selected map areas for offline driving navigation, with limitations by region and mode. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-maps-features` | Discover helpful features in Google Maps — Google Help lists user workflows for saved places, location sharing, offline maps, route options, Street View and measuring distances. | [link](https://support.google.com/maps/answer/6291839) | 2026-11-03T00:00:00Z | Google Maps documents saved places, location sharing, offline maps, route preferences, Street View and measurement features. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://maps.google.com/) | 2026-11-03T00:00:00Z | Google Maps is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://developers.google.com/maps/documentation) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/maps/faq) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/maps/documentation/javascript/overview) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/maps/billing-and-pricing) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://support.google.com/maps/answer/6291838) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://support.google.com/maps/answer/6291839) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e` | Google Maps Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.google.com/maps) | 2026-11-03T01:38:25.598Z | A dated unauthenticated snapshot exposed controls button: Search, button: Directions, button: Menu, button: Saved, button: Recents, button: Get app, combobox: Search Google Maps and landmarks search. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `google-maps`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Google Maps is Google's consumer mapping, place-discovery and navigation surface, with a separate Google Maps Platform of APIs and SDKs. Official documentation verifies maps, routes, places, geospatial datasets, web rendering, directions, offline-map behavior and usage-based pricing. The public evidence does not establish Google's internal geospatial data pipeline, proprietary imagery rights, global traffic quality or complete parity between consumer Maps and developer Platform products.

This dossier promotes `google-maps` to `researched` for documented public and developer behavior. It keeps the consumer application, Platform APIs and data/licensing boundaries explicit and treats the dated REA capture as a limited public-surface observation.

# 2. Product identity and ownership

- **Canonical name:** Google Maps
- **Stable catalog ID:** `google-maps`
- **Company:** Google
- **Product type:** consumer mapping, places and navigation application
- **Official product URL:** https://maps.google.com/
- **Official developer documentation:** https://developers.google.com/maps/documentation
- **Lifecycle:** active at the time of review
- **Identity evidence:** `ev-google-maps-identity`, plus `catalog/rea/google/google-maps.md`
- **Related surfaces:** Google Maps Platform, Street View, Places, Routes, Google Earth and Waze; related does not mean the same product contract

Google Maps consumer features and Google Maps Platform APIs/SDKs are related but not interchangeable. The catalog keeps one product identity because the current row describes the public Maps surface; a future API-specific row should be added only if its lifecycle, owner or evidence scope requires it.

# 3. Product capabilities

The following claims are supported by the official sources in the evidence ledger:

1. **Interactive map rendering:** Maps JavaScript API supports interactive 2D/3D maps, markers, custom styles and custom data layers.
2. **Routes and navigation:** Google documents directions, travel modes, traffic-aware routes, route optimization and mobile Navigation SDKs.
3. **Places and geospatial data:** Google documents place search/details, autocomplete, geocoding, address validation, datasets and environment-related APIs.
4. **Consumer workflows:** Google Help documents saved places, route options, location sharing, Street View, measurement and offline map downloads.
5. **Developer integration:** Maps Platform provides APIs and SDKs for web, Android and iOS, with API-key, billing and quota requirements.
6. **Usage-based billing:** Google documents billable events, free monthly usage caps, SKU pricing, monitoring and subscriptions.

Not established by these sources: internal tile generation, global traffic ingestion, proprietary imagery and place-data licensing, ranking/recommendation models, exact routing algorithms, complete regional availability or a service-level guarantee.

# 4. Technical architecture

**Verified public model:** map or mobile client → Maps, Routes, Places or related Platform API/SDK → rendered map, place data, route or geospatial result. The JavaScript documentation verifies web rendering and custom layers; the Platform documentation separates Maps, Routes, Places, Environment and Dataset product families.

**Not verified:** tile stores, imagery processing, traffic and incident ingestion, geocoding index, routing graph, edge cache, mobile synchronization, recommendation systems and internal access controls. These remain `UNKNOWN`; no proprietary architecture is inferred.

# 5. User workflows

The REA capture observed the public Maps surface with Search, Directions, Menu, Saved, Recents and Get app controls. Official help supports searching places, selecting route options, saving locations, sharing location, exploring Street View, measuring distances and downloading selected areas for offline driving navigation.

The following remain surface-, device- or account-dependent and were not independently exercised: live navigation, traffic updates, transit and cycling routes, reviews, business editing, location history, account personalization, Street View coverage, offline expiry, incident reporting, accessibility behavior, errors, retries and cancellation.

# 6. Pricing and access

The consumer Maps surface is available as a public application with account- and region-dependent features. Google Maps Platform requires selecting APIs or SDKs, configuring a Google Cloud project and API key, and meeting current billing and usage requirements. Platform pricing is usage- and SKU-dependent with free monthly usage caps; it is not a promise that all consumer Maps data or features are free to embed.

No API key, billing account, paid request or production map data was used during this research.

# 7. API and integration surface

- **Maps:** Maps JavaScript API, Maps SDKs, Static Maps, Map Tiles, Street View and Maps URLs.
- **Routes:** Routes API, Roads API, Route Optimization API and Navigation SDKs.
- **Places:** Places API/SDKs, Places Library, autocomplete, details, geocoding and address validation.
- **Other services:** Environment, Datasets, Elevation, Time Zone and related geospatial APIs.
- **Consumer web/mobile:** search, directions, saved places, offline areas, Street View and sharing workflows.

Before integration, verify API key restrictions, quotas, billable events, storage/caching terms, attribution, data retention, region support and restrictions on downloading or recreating Google's tiles and imagery.

# 8. Existing open-source alternatives

The curated landscape identifies partial alternatives covering different layers:

- **OpenStreetMap:** open map data under ODbL; it is a data/community project, not a complete hosted Maps replacement.
- **Organic Maps:** offline navigation application using open map data; it does not provide Google's live traffic or imagery ecosystem.
- **MapLibre:** open map-rendering libraries; they require compatible tile/data services.
- **OSRM / Valhalla:** self-hostable routing engines; they require map data and operational infrastructure.

None is verified here as a drop-in replacement for the combined Google Maps consumer experience, Places breadth, proprietary Street View, global traffic or Maps Platform contract.

# 9. Alternative comparison

The evidence supports **partial** alternative coverage. OpenStreetMap supplies data, MapLibre supplies rendering, OSRM/Valhalla supply routing, and Organic Maps supplies an offline consumer application. A complete independent stack still requires tile hosting, geocoding, place search, routing, updates, offline packaging, privacy controls and possibly licensed traffic or transit data. Alternative coverage remains `unknown` until current version, license, maintenance, security and target-region reviews are completed.

# 10. Missing capabilities and opportunity analysis

The opportunity is a bounded, privacy-first mapping or navigation product using open data and explicit regional scope—not a claim to reproduce Google's global service. A viable first slice could target one region, offline maps, place search, routing and local storage. Proprietary imagery, global traffic, transit breadth, commercial place data and global reliability remain out of scope.

# 11. REA implementation strategy

Use the REA report only to reproduce the observed public entry controls. For an independent implementation, compare OpenStreetMap, MapLibre, Organic Maps, OSRM and Valhalla against the declared region, offline requirement, routing quality, data license, update cadence and privacy policy. Do not copy Google tiles, imagery or protected data, and do not claim Maps parity.

# 12. Security, privacy and compliance

Location and movement data are sensitive. An independent implementation must define local versus server storage, location permissions, sharing consent, account isolation, deletion/export, telemetry defaults, map-data attribution, tile access controls, API-key restrictions, billing alerts and regional privacy obligations. No compliance certification or privacy parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-google-maps-identity` | https://maps.google.com/ | Product identity and public Maps surface |
| `ev-google-maps-platform` | https://developers.google.com/maps/faq | Platform APIs, SDKs, setup and restrictions |
| `ev-google-maps-documentation` | https://developers.google.com/maps/documentation | Maps, Routes, Places, Environment and Dataset capabilities |
| `ev-google-maps-javascript` | https://developers.google.com/maps/documentation/javascript/overview | Web rendering, markers, styles and Places library |
| `ev-google-maps-pricing` | https://developers.google.com/maps/billing-and-pricing | Usage-based pricing, free caps and billing |
| `ev-google-maps-offline` | https://support.google.com/maps/answer/6291838 | Offline map download and limitations |
| `ev-google-maps-features` | https://support.google.com/maps/answer/6291839 | Saved places, routes, sharing, Street View and measurement |
| REA capture | `catalog/rea/google/google-maps.md` | Dated public-surface observation only |

# 14. Open questions and exclusions

- Full signed-in consumer workflows and live navigation were not captured.
- Traffic, transit, Street View and place-data coverage varies by region and contract.
- API billing, quotas, attribution and data-use restrictions must be checked for the target service.
- Internal routing, imagery, tile, ranking and geospatial data systems are not public evidence here.
- Open-source alternatives require separate current license, maintenance and security reviews.
- No API key, billing account, private location data or production integration was accessed.

# 15. Research history

- **2026-11-03:** reviewed official Google Maps Platform, Google Maps Help and Maps JavaScript documentation; reconciled them with the existing REA public-surface capture; promoted the dossier from `pending` to `researched` with verified evidence and explicit unknowns.
- **Next review:** 2027-02-03, or sooner if Maps Platform pricing, APIs, terms or public consumer capabilities change materially.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier google-maps` and inspect canonical identity with `npx rea-faang products show google-maps --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang google-maps --out ./google-maps.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit google-maps --out ./google-maps-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-maps`).
- Dossier: [research/companies/google/products/google-maps.md](../../../research/companies/google/products/google-maps.md).
- REA capture: [catalog/rea/google/google-maps.md](../../rea/google/google-maps.md) (2026-11-03T01:38:25.598Z); raw record: [catalog/rea/evidence/google-maps.json](../../rea/evidence/google-maps.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Google Maps](https://maps.google.com/) — The canonical public product surface is Google Maps at maps.google.com. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Maps Platform FAQ](https://developers.google.com/maps/faq) — Google Maps Platform provides APIs and SDKs for maps, routes, places and related location services. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Maps Platform documentation](https://developers.google.com/maps/documentation) — Google documents distinct Maps, Routes, Places, Environment and Dataset capabilities. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Maps JavaScript API overview](https://developers.google.com/maps/documentation/javascript/overview) — The Maps JavaScript API supports interactive 2D/3D maps, markers, custom data layers, styling and Places data. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Maps Platform pricing and billing](https://developers.google.com/maps/billing-and-pricing) — Google Maps Platform uses usage-based pricing with service-specific billable events, free usage caps and billing requirements. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Download areas and navigate offline in Google Maps](https://support.google.com/maps/answer/6291838) — Google Maps supports downloading selected map areas for offline driving navigation, with limitations by region and mode. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Discover helpful features in Google Maps](https://support.google.com/maps/answer/6291839) — Google Maps documents saved places, location sharing, offline maps, route preferences, Street View and measurement features. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Maps](https://maps.google.com/) — The canonical public product surface is Google Maps at maps.google.com. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Maps Platform FAQ](https://developers.google.com/maps/faq) — Google Maps Platform provides APIs and SDKs for maps, routes, places and related location services. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Maps Platform documentation](https://developers.google.com/maps/documentation) — Google documents distinct Maps, Routes, Places, Environment and Dataset capabilities. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Maps JavaScript API overview](https://developers.google.com/maps/documentation/javascript/overview) — The Maps JavaScript API supports interactive 2D/3D maps, markers, custom data layers, styling and Places data. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Maps Platform pricing and billing](https://developers.google.com/maps/billing-and-pricing) — Google Maps Platform uses usage-based pricing with service-specific billable events, free usage caps and billing requirements. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Download areas and navigate offline in Google Maps](https://support.google.com/maps/answer/6291838) — Google Maps supports downloading selected map areas for offline driving navigation, with limitations by region and mode. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Discover helpful features in Google Maps](https://support.google.com/maps/answer/6291839) — Google Maps documents saved places, location sharing, offline maps, route preferences, Street View and measurement features. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://maps.google.com/) — Google Maps is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://developers.google.com/maps/documentation) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://developers.google.com/maps/faq) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/maps/documentation/javascript/overview) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/maps/billing-and-pricing) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://support.google.com/maps/answer/6291838) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://support.google.com/maps/answer/6291839) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Google Maps Public web-surface observation (REA)](https://www.google.com/maps) — A dated unauthenticated snapshot exposed controls button: Search, button: Directions, button: Menu, button: Saved, button: Recents, button: Get app, combobox: Search Google Maps and landmarks search. (VERIFIED; accessed 2026-11-03T01:38:25.598Z).
