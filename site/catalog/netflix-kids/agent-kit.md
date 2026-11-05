---
name: netflix-kids
description: "Evidence-aware build skill for Netflix Kids (netflix-kids); investigate, assess reuse, implement scoped behavior and verify."
---

# Netflix Kids — implementation skill (`netflix-kids`)

> **Research status:** retired. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Netflix Kids**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Netflix Kids** (`netflix-kids`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/netflix/netflix-kids.md` from the catalog page, or run `npx rea-faang netflix-kids --out ./netflix-kids.md`, `npx rea-faang skills generate netflix-kids` or `npx rea-faang build agent-kit netflix-kids --out ./netflix-kids-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Netflix Kids / `netflix-kids` | `catalog/products.jsonl` |
| Official product URL | [https://www.netflix.com/kids](https://www.netflix.com/kids) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://help.netflix.com/en/node/53045](https://help.netflix.com/en/node/53045) | Catalog record |
| Research dossier | `npx rea-faang research dossier netflix-kids` | `research/companies/netflix/products/netflix-kids.md` |
| REA report | `catalog/rea/netflix/netflix-kids.md` (captured 2026-11-03T01:42:14.254Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/netflix-kids.json` (`ev_0b3946ed46f0dafac1826a24e16d37bc16d792d4caca4a5b6669e2458af1a8b9`) | Catalog evidence |
| Alternative candidates | None recorded — this is a research gap | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show netflix-kids --format json` and `npx rea-faang research dossier netflix-kids` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fkids&serverState=Bgj1wOvcAxKnAqQfymdgAXw7ZO2MWK1dMZgd4K%2BBe0%2FrNUg583o1H9g%2FBwuYUQued7IP8IfvEk0dHZjZdNLmmPDIJpnKhye8zwFbJMf%2Fv8iSJDzMQXXd%2BJRPwAZRXa60bA%2BqSxoJFfKmsk5%2Br%2FdZvyaz7nctULKXi3PKMPfFgyesDJum2ETHaiam2O6Fq66i%2FcN74ir0fyyFqrJ2yP3uUMKxwoXiMssoLlcyzatAYBFdM7%2FC%2FL9USvn9w0Mz6d1q41nYPcrnLxwpCYf7bcuoNH5NFPOmpPA4sdgDlO%2FVfP5VsBQ058dwPShkefaiEdigeizY71aAxNUTl8%2BFVDUptxY%2F8EwY8gVxiNtUsz9BoMWmNirjxbTicnJB3NF7RnBaf1tLzcX0w1%2Bxx0pqZhhNd1kYBiIOCgycCSK4otOanObS2f8%3D](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fkids&serverState=Bgj1wOvcAxKnAqQfymdgAXw7ZO2MWK1dMZgd4K%2BBe0%2FrNUg583o1H9g%2FBwuYUQued7IP8IfvEk0dHZjZdNLmmPDIJpnKhye8zwFbJMf%2Fv8iSJDzMQXXd%2BJRPwAZRXa60bA%2BqSxoJFfKmsk5%2Br%2FdZvyaz7nctULKXi3PKMPfFgyesDJum2ETHaiam2O6Fq66i%2FcN74ir0fyyFqrJ2yP3uUMKxwoXiMssoLlcyzatAYBFdM7%2FC%2FL9USvn9w0Mz6d1q41nYPcrnLxwpCYf7bcuoNH5NFPOmpPA4sdgDlO%2FVfP5VsBQ058dwPShkefaiEdigeizY71aAxNUTl8%2BFVDUptxY%2F8EwY8gVxiNtUsz9BoMWmNirjxbTicnJB3NF7RnBaf1tLzcX0w1%2Bxx0pqZhhNd1kYBiIOCgycCSK4otOanObS2f8%3D), captured 2026-11-03T01:42:14.254Z, evidence `ev_0b3946ed46f0dafac1826a24e16d37bc16d792d4caca4a5b6669e2458af1a8b9`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `NETFLIX-KIDS-CAP-50FD8524`, `NETFLIX-KIDS-CAP-6497963D`.

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
| Name / stable ID | **Netflix Kids** / `netflix-kids` | Product catalog |
| Company / category | Netflix / `media_streaming` / `kids-profiles` | Product catalog |
| Official website / docs | [https://www.netflix.com/kids](https://www.netflix.com/kids) / [https://help.netflix.com/en/node/53045](https://help.netflix.com/en/node/53045) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | deprecated / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **media_streaming** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `NETFLIX-KIDS-CAP-50FD8524` | The Kids experience and its child-focused catalog are documented as a Netflix profile mode. | VERIFIED | `ev-netflix-kids-grouping` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `NETFLIX-KIDS-CAP-6497963D` | Parent-controlled maturity and profile settings are documented; implementation internals remain unknown. | VERIFIED | `ev-netflix-kids-controls` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Continue`, `button: Get Help`, `link: Netflix`, `textbox: Email or mobile number`, `textbox: Password`, `link: 1-844-569-7700 (Toll-Free)`, `link: FAQ`, `link: Help Center`, `link: Netflix House`, `link: Netflix Shop`, `link: Terms of Use`, `link: Privacy`, `link: Cookie Preferences`, `link: Corporate Information`, `link: Do Not Sell or Share My Personal Information`, `link: Ad Choices`, `combobox: Select language`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **The Kids experience and its child-focused catalog are documented as a Netflix profile mode.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Parent-controlled maturity and profile settings are documented; implementation internals remain unknown.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Enter your info to sign in`, `Or get started with a new account.` | Results and subsequent views |
| Controls | `button: Continue`, `button: Get Help`, `link: Netflix`, `textbox: Email or mobile number`, `textbox: Password`, `link: 1-844-569-7700 (Toll-Free)`, `link: FAQ`, `link: Help Center`, `link: Netflix House`, `link: Netflix Shop`, `link: Terms of Use`, `link: Privacy`, `link: Cookie Preferences`, `link: Corporate Information`, `link: Do Not Sell or Share My Personal Information`, `link: Ad Choices`, `combobox: Select language` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Netflix](/)`, `[1-844-569-7700 (Toll-Free)](tel:1-844-569-7700)`, `[FAQ](https://help.netflix.com/support/412)`, `[Help Center](https://help.netflix.com)`, `[Netflix House](https://www.netflixhouse.com/)`, `[Netflix Shop](https://netflix.shop/)`, `[Terms of Use](https://help.netflix.com/legal/termsofuse)`, `[Privacy](https://help.netflix.com/legal/privacy)`, `[Cookie Preferences](#)`, `[Corporate Information](https://help.netflix.com/legal/corpinfo)`, `[Do Not Sell or Share My Personal Information](https://netflix.com/dnsspi)`, `[Ad Choices](https://netflix.com/adchoices-us)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-50FD8524 — The Kids experience and its child-focused catalog are documented as a Netflix profile mode.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-netflix-kids-grouping`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-50FD8524`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-KIDS-CAP-50FD8524` → `REQ-FUNC-50FD8524` → `TEST-FUNC-50FD8524`.

### REQ-FUNC-6497963D — Parent-controlled maturity and profile settings are documented; implementation internals remain unknown.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-netflix-kids-controls`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-6497963D`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-KIDS-CAP-6497963D` → `REQ-FUNC-6497963D` → `TEST-FUNC-6497963D`.

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

No candidate is recorded for this product in the curated landscape. That is a **research gap**, not evidence that no project exists — never state or imply that no open-source alternative exists.

Before building from scratch, run the search the catalog has not done: search for the user job and for each capability lead in section 2, inspect the exact repository and version, and record what you find with its license, activity and coverage. Candidates found at that point are added to the register below, not to the catalog.

### 9.2 Comparison against the REA findings

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| Every feature ID in section 2 | Not assessed | None — no candidate recorded | Full capability, unless your own search produces one |

### 9.3 Decision

**Current verdict: UNKNOWN / PENDING — INVESTIGATE MORE.** No verified foundation exists for this product, so reuse, integration and extension cannot be claimed and a fresh build is not yet justified either. Complete the search in 9.1, then record one of the five verdicts with the candidate name and the evidence behind it.

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

Product-specific review: Verify rights, privacy, child safety and lawful DRM/content-delivery boundaries. Do not claim compliance, privacy or security parity without scoped assessment.

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
- **EDGE-009:** Bandwidth/codec/device change, manifest failure, content unavailable. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-50FD8524** → `REQ-FUNC-50FD8524`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-6497963D** → `REQ-FUNC-6497963D`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-50FD8524, REQ-FUNC-6497963D
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-50FD8524, REQ-FUNC-6497963D
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
- **Completion:** Trace: REQ-FUNC-50FD8524, REQ-FUNC-6497963D; document exclusions and unknowns.
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
| `ev-netflix-kids-grouping` | How to create a profile for kids — Netflix Help describes selecting a Kids Profile and lists its simplified interface, restricted account settings and child-selected catalog. | [link](https://help.netflix.com/en/node/114275) | 2026-11-03T00:00:00Z | Netflix Kids is a profile experience configured inside a Netflix account, not a separate service identity. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-netflix-kids-controls` | Parental controls on Netflix — Netflix Help directs account owners to create or manage profiles, maturity ratings, title blocks, profile locks and PIN controls. | [link](https://help.netflix.com/en/node/53045) | 2026-11-03T00:00:00Z | Kids behavior is implemented through profile maturity settings and parental controls. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-netflix-kids-grouping` | How to create a profile for kids — Netflix Help describes selecting a Kids Profile and lists its simplified interface, restricted account settings and child-selected catalog. | [link](https://help.netflix.com/en/node/114275) | 2026-11-03T00:00:00Z | Netflix Kids is a profile experience configured inside a Netflix account, not a separate service identity. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-netflix-kids-controls` | Parental controls on Netflix — Netflix Help directs account owners to create or manage profiles, maturity ratings, title blocks, profile locks and PIN controls. | [link](https://help.netflix.com/en/node/53045) | 2026-11-03T00:00:00Z | Kids behavior is implemented through profile maturity settings and parental controls. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.netflix.com/kids) | 2026-11-03T00:00:00Z | Netflix Kids is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://help.netflix.com/en/node/53045) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://help.netflix.com/en/node/114275) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://help.netflix.com/en/node/53045) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://help.netflix.com/en/node/10421) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_0b3946ed46f0dafac1826a24e16d37bc16d792d4caca4a5b6669e2458af1a8b9` | Netflix Kids Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fkids&serverState=Bgj1wOvcAxKnAqQfymdgAXw7ZO2MWK1dMZgd4K%2BBe0%2FrNUg583o1H9g%2FBwuYUQued7IP8IfvEk0dHZjZdNLmmPDIJpnKhye8zwFbJMf%2Fv8iSJDzMQXXd%2BJRPwAZRXa60bA%2BqSxoJFfKmsk5%2Br%2FdZvyaz7nctULKXi3PKMPfFgyesDJum2ETHaiam2O6Fq66i%2FcN74ir0fyyFqrJ2yP3uUMKxwoXiMssoLlcyzatAYBFdM7%2FC%2FL9USvn9w0Mz6d1q41nYPcrnLxwpCYf7bcuoNH5NFPOmpPA4sdgDlO%2FVfP5VsBQ058dwPShkefaiEdigeizY71aAxNUTl8%2BFVDUptxY%2F8EwY8gVxiNtUsz9BoMWmNirjxbTicnJB3NF7RnBaf1tLzcX0w1%2Bxx0pqZhhNd1kYBiIOCgycCSK4otOanObS2f8%3D) | 2026-11-03T01:42:14.254Z | A dated unauthenticated snapshot exposed controls button: Continue, button: Get Help, link: Netflix, textbox: Email or mobile number, textbox: Password, link: 1-844-569-7700 (Toll-Free), link: FAQ, link: Help Center, link: Netflix House, link: Netflix Shop, link: Terms of Use, link: Privacy, link: Cookie Preferences, link: Corporate Information, link: Do Not Sell or Share My Personal Information, link: Ad Choices, combobox: Select language and landmarks banner, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `netflix-kids`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Netflix Kids is not maintained as an independent service entry. Official Netflix documentation describes it as the Netflix Kids experience, a profile mode configured inside a Netflix account. It is therefore retained as a deprecated catalog record and grouped conceptually under `netflix-profiles` to avoid double-counting the same product surface.

# 2. Product identity and ownership

- **Observed name:** Netflix Kids experience
- **Canonical catalog decision:** feature/profile mode, not a separate service
- **Parent product:** `netflix-profiles`
- **Official documentation:** https://help.netflix.com/en/node/114275
- **Catalog status:** deprecated / retired from active product research

# 3. Product capabilities

The official Help Center documents a simplified interface, a child-selected catalog, restricted direct access to account settings, no direct email sign-in for Kids profiles, maturity controls and profile-level parental settings.

# 4. Technical architecture

No independent service architecture was identified. The verified architecture boundary is a profile mode and account-level parental-control configuration within Netflix.

# 5. User workflows

1. An account owner opens profile management.
2. The owner creates or edits a profile and selects the Kids experience or a Kids Profile.
3. The profile receives the documented child-oriented interface and content restrictions.
4. The owner manages maturity ratings, title blocks, profile locks and PIN controls from Netflix's parental-control surfaces.

# 6. Pricing and access

Netflix Kids does not have a separate subscription or independent account entitlement in the reviewed sources; it is configured within an existing Netflix account.

# 7. API and integration surface

No public API for an independent Netflix Kids service was identified. The relevant public surface is Netflix account/profile management documentation.

# 8. Existing open-source alternatives

No alternative is evaluated because the catalog decision is that this is a feature of Netflix Profiles, not an independent product to reproduce or compare separately.

# 9. Alternative comparison

Any comparison should be made against the parent profile and parental-control product, not against a standalone Netflix Kids service.

# 10. Missing capabilities and opportunity analysis

The important catalog correction is eliminating duplicate product scope. A future independent media service may implement child profiles and parental controls, but that work belongs to the parent profile/media product scope.

# 11. REA implementation strategy

No separate REA capture is treated as evidence of an independent service. Existing public documentation is sufficient to record the grouping decision; authenticated account behavior remains untested.

# 12. Security, privacy, and compliance

The official sources establish the existence of profile and parental-control surfaces but do not constitute an implementation security specification. Child privacy, age assurance, content classification and account recovery require separate review under the parent product.

# 13. Sources and evidence

- `ev-netflix-kids-grouping` — https://help.netflix.com/en/node/114275
- `ev-netflix-kids-controls` — https://help.netflix.com/en/node/53045
- Profile management — https://help.netflix.com/en/node/10421

# 14. Research history

- v1: dossier treated Netflix Kids as a separate pending product.
- v2: official Netflix Help sources verified that it is a profile experience; record deprecated and grouped under `netflix-profiles`.

Research status is **retired**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier netflix-kids` and inspect canonical identity with `npx rea-faang products show netflix-kids --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang netflix-kids --out ./netflix-kids.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit netflix-kids --out ./netflix-kids-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`netflix-kids`).
- Dossier: [research/companies/netflix/products/netflix-kids.md](../../../research/companies/netflix/products/netflix-kids.md).
- REA capture: [catalog/rea/netflix/netflix-kids.md](../../rea/netflix/netflix-kids.md) (2026-11-03T01:42:14.254Z); raw record: [catalog/rea/evidence/netflix-kids.json](../../rea/evidence/netflix-kids.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [How to create a profile for kids](https://help.netflix.com/en/node/114275) — Netflix Kids is a profile experience configured inside a Netflix account, not a separate service identity. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Parental controls on Netflix](https://help.netflix.com/en/node/53045) — Kids behavior is implemented through profile maturity settings and parental controls. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [How to create a profile for kids](https://help.netflix.com/en/node/114275) — Netflix Kids is a profile experience configured inside a Netflix account, not a separate service identity. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Parental controls on Netflix](https://help.netflix.com/en/node/53045) — Kids behavior is implemented through profile maturity settings and parental controls. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://www.netflix.com/kids) — Netflix Kids is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://help.netflix.com/en/node/53045) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://help.netflix.com/en/node/114275) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://help.netflix.com/en/node/53045) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://help.netflix.com/en/node/10421) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Netflix Kids Public web-surface observation (REA)](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fkids&serverState=Bgj1wOvcAxKnAqQfymdgAXw7ZO2MWK1dMZgd4K%2BBe0%2FrNUg583o1H9g%2FBwuYUQued7IP8IfvEk0dHZjZdNLmmPDIJpnKhye8zwFbJMf%2Fv8iSJDzMQXXd%2BJRPwAZRXa60bA%2BqSxoJFfKmsk5%2Br%2FdZvyaz7nctULKXi3PKMPfFgyesDJum2ETHaiam2O6Fq66i%2FcN74ir0fyyFqrJ2yP3uUMKxwoXiMssoLlcyzatAYBFdM7%2FC%2FL9USvn9w0Mz6d1q41nYPcrnLxwpCYf7bcuoNH5NFPOmpPA4sdgDlO%2FVfP5VsBQ058dwPShkefaiEdigeizY71aAxNUTl8%2BFVDUptxY%2F8EwY8gVxiNtUsz9BoMWmNirjxbTicnJB3NF7RnBaf1tLzcX0w1%2Bxx0pqZhhNd1kYBiIOCgycCSK4otOanObS2f8%3D) — A dated unauthenticated snapshot exposed controls button: Continue, button: Get Help, link: Netflix, textbox: Email or mobile number, textbox: Password, link: 1-844-569-7700 (Toll-Free), link: FAQ, link: Help Center, link: Netflix House, link: Netflix Shop, link: Terms of Use, link: Privacy, link: Cookie Preferences, link: Corporate Information, link: Do Not Sell or Share My Personal Information, link: Ad Choices, combobox: Select language and landmarks banner, contentinfo. (VERIFIED; accessed 2026-11-03T01:42:14.254Z).
