---
name: meta-muse
description: "Evidence-aware build skill for Muse (meta-muse); investigate, assess reuse, implement scoped behavior and verify."
---

# Muse — implementation skill (`meta-muse`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Muse**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Muse** (`meta-muse`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/meta/meta-muse.md` from the catalog page, or run `npx rea-faang meta-muse --out ./meta-muse.md`, `npx rea-faang skills generate meta-muse` or `npx rea-faang build agent-kit meta-muse --out ./meta-muse-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Muse / `meta-muse` | `catalog/products.jsonl` |
| Official product URL | [https://muse.ai/](https://muse.ai/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://introducing.muse.ai/](https://introducing.muse.ai/) | Catalog record |
| Research dossier | `npx rea-faang research dossier meta-muse` | `research/companies/meta/products/meta-muse.md` |
| REA report | `catalog/rea/meta/meta-muse.md` (captured 2026-11-04T02:54:54.097Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/meta-muse.json` (`ev_ccfd259bb1869d86f0b12737e74be9bfa382f8472c681b4cb30de5d434abdf19`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show meta-muse --format json` and `npx rea-faang research dossier meta-muse` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://muse.ai/](https://muse.ai/), captured 2026-11-04T02:54:54.097Z, evidence `ev_ccfd259bb1869d86f0b12737e74be9bfa382f8472c681b4cb30de5d434abdf19`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `META-MUSE-CAP-D3C7380F`, `META-MUSE-CAP-F420C56A`.

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
| Name / stable ID | **Muse** / `meta-muse` | Product catalog |
| Company / category | Meta / `ai_agent_platform` / `ai-agent`, `computer-use`, `browser-automation`, `personal-assistant`, `workflow-automation` | Product catalog |
| Official website / docs | [https://muse.ai/](https://muse.ai/) / [https://introducing.muse.ai/](https://introducing.muse.ai/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **ai_agent_platform** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `META-MUSE-CAP-D3C7380F` | Distinct product identity and public agent surface are verified. | VERIFIED | `ev-meta-muse-identity`, `ev-meta-muse-surface` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-MUSE-CAP-F420C56A` | Computer use, approvals, audit trail and connected apps are documented; authenticated behavior, limits and internal isolation require further verification. | VERIFIED | `ev-meta-muse-surface`, `ev-meta-muse-safety` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Download apps`, `button: Continue`, `button: Muse introduction film`, `button: Play the guided tour of Muse`, `button: Log in`, `button: Close`, `textbox: Mobile number or email`, `link: Learn more`, `link: Link's purchase protections`, `link: How We Designed Muse When Muse works, it feels like magic. These are the product choices that make the experience possible.`, `link: How We Built Safety Into Muse Muse is built for privacy, safety, and security. Learn how these principles shape every part of the product.`, `link: Muse for Business Meet the AI agent that works for your small business and keeps jobs moving between your decisions.`, `link: Privacy Policy`, `link: Cookie Policy`, `link: Terms`, `link: Download`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Distinct product identity and public agent surface are verified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Computer use, approvals, audit trail and connected apps are documented; authenticated behavior, limits and internal isolation require further verification.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `main`, `region: Muse landing page`, `region: Muse, AI that gets it done for you`, `region: Muse introduction`, `region: Muse features`, `region: Every Muse user shares their own computer in the cloud with their Muse.`, `region: Designed around the way you already communicate`, `region: Stay in control of what your agent does`, `region: Your data is kept secure and private`, `region: Proactively helps with your goals and suggests ideas`, `region: Connects to your apps and builds its own tools`, `region: Get the most out of your Muse`, `region: Learn more about Muse`, `region: Ready to try Muse?`, `navigation: Legal links` | Full IA/routes/authenticated navigation |
| Views/headings | `Muse, AI that gets it done for you`, `Log in or create an account`, `Built around your whole life`, `Every Muse user shares their own computer in the cloud with their Muse.`, `Designed around the way you already communicate`, `Stay in control of what your agent does`, `Your data is kept secure and private`, `Proactively helps with your goals and suggests ideas`, `Connects to your apps and builds its own tools`, `Get the most out of your Muse`, `Learn more about Muse`, `How We Designed Muse`, `How We Built Safety Into Muse`, `Muse for Business`, `Ready to try Muse?` | Results and subsequent views |
| Controls | `button: Download apps`, `button: Continue`, `button: Muse introduction film`, `button: Play the guided tour of Muse`, `button: Log in`, `button: Close`, `textbox: Mobile number or email`, `link: Learn more`, `link: Link's purchase protections`, `link: How We Designed Muse When Muse works, it feels like magic. These are the product choices that make the experience possible.`, `link: How We Built Safety Into Muse Muse is built for privacy, safety, and security. Learn how these principles shape every part of the product.`, `link: Muse for Business Meet the AI agent that works for your small business and keeps jobs moving between your decisions.`, `link: Privacy Policy`, `link: Cookie Policy`, `link: Terms`, `link: Download` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Learn more](https://www.meta.com/help/artificial-intelligence/31983416211257755/)`, `[Learn more](#landing-introduction-video-title)`, `[Link's purchase protections](https://link.com/protections)`, `[How We Designed Muse When Muse works, it feels like magic. These are the product choices that make the experience possible.](https://introducing.muse.ai)`, `[How We Built Safety Into Muse Muse is built for privacy, safety, and security. Learn how these principles shape every part of the product.](https://security.muse.ai)`, `[Muse for Business Meet the AI agent that works for your small business and keeps jobs moving between your decisions.](/business)`, `[Privacy Policy](https://muse.ai/privacy)`, `[Cookie Policy](https://www.facebook.com/privacy/policies/cookies/)`, `[Terms](https://muse.ai/terms)`, `[Download](/api/hatch/app-download/mac)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-D3C7380F — Distinct product identity and public agent surface are verified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-muse-identity`, `ev-meta-muse-surface`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D3C7380F`; fixture and expected output must be specified from evidence.
- **Trace:** `META-MUSE-CAP-D3C7380F` → `REQ-FUNC-D3C7380F` → `TEST-FUNC-D3C7380F`.

### REQ-FUNC-F420C56A — Computer use, approvals, audit trail and connected apps are documented; authenticated behavior, limits and internal isolation require further verification.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-muse-surface`, `ev-meta-muse-safety`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-F420C56A`; fixture and expected output must be specified from evidence.
- **Trace:** `META-MUSE-CAP-F420C56A` → `REQ-FUNC-F420C56A` → `TEST-FUNC-F420C56A`.

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
| [Open Interpreter](https://github.com/OpenInterpreter/open-interpreter) | Not recorded; verify the canonical repository | AGPL-3.0 (unverified) | Open-source natural-language computer interface for running local code and workflows. | Provides an agent execution foundation, but not Muse's hosted browser computer, Meta distribution, credential store or product-specific safety controls. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [OpenHands](https://github.com/All-Hands-AI/OpenHands) | Not recorded; verify the canonical repository | MIT (unverified) | Open-source software-development agent platform with tool use and isolated execution. | Covers agent orchestration and tool execution, but not Muse's consumer assistant surface, connected apps or hosted personal workflows. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Browser Use](https://github.com/browser-use/browser-use) | Not recorded; verify the canonical repository | MIT (unverified) | Open-source browser automation library for browser-controlling agents. | Covers browser control, but not Muse's broader personal-agent experience, approval model, audit trail or connected-app platform. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `META-MUSE-CAP-D3C7380F` — Distinct product identity and public agent surface are verified. | Not verified against Open Interpreter | None yet; compare with `ev_ccfd259bb1869d86f0b12737e74be9bfa382f8472c681b4cb30de5d434abdf19` | Candidate code path and tests must be inspected |
| `META-MUSE-CAP-F420C56A` — Computer use, approvals, audit trail and connected apps are documented; authenticated behavior, limits and internal isolation require further verification. | Not verified against Open Interpreter | None yet; compare with `ev_ccfd259bb1869d86f0b12737e74be9bfa382f8472c681b4cb30de5d434abdf19` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Open Interpreter** (Open-source natural-language computer interface for running local code and workflows.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Open Interpreter** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-D3C7380F** → `REQ-FUNC-D3C7380F`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-F420C56A** → `REQ-FUNC-F420C56A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-D3C7380F, REQ-FUNC-F420C56A
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-D3C7380F, REQ-FUNC-F420C56A
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
- **Completion:** Trace: REQ-FUNC-D3C7380F, REQ-FUNC-F420C56A; document exclusions and unknowns.
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
| `ev-meta-muse-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Muse AI under Services. | [link](https://www.meta.com/technologies/) | 2026-11-04T00:00:00Z | Meta lists Muse AI as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-muse-surface` | Muse — Your Personal AI Agent from Meta — The official Muse surface documents goal execution, a persistent isolated Linux computer with a browser, mobile/Mac/WhatsApp interaction, approval gates, audit trails and connected apps. | [link](https://muse.ai/) | 2026-11-04T00:00:00Z | Muse is a personal AI agent with a public product surface and computer-use workflows. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-muse-safety` | Muse Safety and Security — The official security link is part of the Muse product surface; its detailed controls and claims require separate review before implementation-level conclusions. | [link](https://security.muse.ai/) | 2026-11-04T00:00:00Z | Muse publishes a separate safety and security surface for its agent product. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-muse-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Muse AI under Services. | [link](https://www.meta.com/technologies/) | 2026-11-04T00:00:00Z | Meta lists Muse AI as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-muse-surface` | Muse — Your Personal AI Agent from Meta — The official Muse surface documents goal execution, a persistent isolated Linux computer with a browser, mobile/Mac/WhatsApp interaction, approval gates, audit trails and connected apps. | [link](https://muse.ai/) | 2026-11-04T00:00:00Z | Muse is a personal AI agent with a public product surface and computer-use workflows. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-muse-safety` | Muse Safety and Security — The official security link is part of the Muse product surface; its detailed controls and claims require separate review before implementation-level conclusions. | [link](https://security.muse.ai/) | 2026-11-04T00:00:00Z | Muse publishes a separate safety and security surface for its agent product. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://muse.ai/) | 2026-11-04T00:00:00Z | Muse is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://introducing.muse.ai/) | 2026-11-04T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/technologies/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://muse.ai/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://introducing.muse.ai/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://security.muse.ai/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_ccfd259bb1869d86f0b12737e74be9bfa382f8472c681b4cb30de5d434abdf19` | Muse Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://muse.ai/) | 2026-11-04T02:54:54.097Z | A dated unauthenticated snapshot exposed controls button: Download apps, button: Continue, button: Muse introduction film, button: Play the guided tour of Muse, button: Log in, button: Close, textbox: Mobile number or email, link: Learn more, link: Link's purchase protections, link: How We Designed Muse When Muse works, it feels like magic. These are the product choices that make the experience possible., link: How We Built Safety Into Muse Muse is built for privacy, safety, and security. Learn how these principles shape every part of the product., link: Muse for Business Meet the AI agent that works for your small business and keeps jobs moving between your decisions., link: Privacy Policy, link: Cookie Policy, link: Terms, link: Download and landmarks main, region: Muse landing page, region: Muse, AI that gets it done for you, region: Muse introduction, region: Muse features, region: Every Muse user shares their own computer in the cloud with their Muse., region: Designed around the way you already communicate, region: Stay in control of what your agent does, region: Your data is kept secure and private, region: Proactively helps with your goals and suggests ideas, region: Connects to your apps and builds its own tools, region: Get the most out of your Muse, region: Learn more about Muse, region: Ready to try Muse?, navigation: Legal links. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `meta-muse`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Muse is Meta's personal AI agent service. The public product surface documents goal-oriented task execution, a persistent isolated Linux computer with a browser, interaction through mobile, Mac and WhatsApp, approval gates, audit trails and connected applications. This record covers the service, not Meta's separate Muse Spark or Muse Glimmer model/research projects.

# 2. Product identity and ownership

- **Canonical name:** Muse
- **Stable catalog ID:** `meta-muse`
- **Company:** Meta
- **Product type:** AI agent platform
- **Official product URL:** https://muse.ai/
- **Official safety surface:** https://security.muse.ai/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-muse-identity`, `ev-meta-muse-surface`, `ev-meta-muse-safety`

Muse is kept separate from Meta AI, Meta Account, WhatsApp and Meta's Muse Spark/Glimmer research/model surfaces. Those products or projects may be integrations or related technology, not the same catalog record.

# 3. Verified public capabilities

1. Meta lists Muse AI as a distinct service.
2. Muse accepts goals or tasks and presents itself as an agent that can perform work.
3. Muse documents a persistent isolated Linux computer with a full browser for the user and agent.
4. Muse documents mobile, Mac and WhatsApp interaction, connected apps, approval gates and activity audit trails.
5. Muse describes secure credential handling and one-time card numbers for eligible shopping flows; detailed implementation remains unverified.

# 4. Technical architecture

Public evidence supports a hosted agent with an isolated computer/browser environment and approval boundary. Internal model orchestration, VM isolation, credential vault, tool-generation pipeline, network policy and data retention are not inferred.

# 5. User workflows

Users give Muse a goal, connect selected applications, review proposed or completed actions and approve sensitive operations such as messages or purchases. The public page says the user can intervene and view an audit trail. Account-specific permissions and failure recovery were not tested.

# 6. Pricing and access

The public surface exposes login and account creation but does not establish a complete public pricing or quota matrix. Access, eligibility, region, supported integrations and task limits require current account-specific verification.

# 7. API and integration surface

The public product page documents connected applications and agent-created tools, but does not establish a general unrestricted Muse API. Do not infer API access, browser-control guarantees or credential-vault integrations from the marketing surface.

# 8. Open-source alternatives

- **OpenHands:** open-source AI software-development agent with tool use and workspace execution.
- **Browser Use:** open-source browser automation framework for agent workflows.
- **Agent Zero:** open-source personal AI agent framework with tools and local deployment options.

# 9. Alternative comparison

Alternative coverage is **partial**. OpenHands, Browser Use and Agent Zero cover bounded agent, browser or workspace workflows, but none reproduces Muse's hosted VM, consumer account model, approval UX, credential handling, cross-device surfaces or Meta integrations.

# 10. Missing capabilities and opportunity analysis

An independent implementation would need agent orchestration, isolated compute, browser control, permissions, approvals, audit logs, credential handling, connected-app adapters, recovery and abuse controls. Muse-specific parity is out of scope.

# 11. REA implementation strategy

Use only the public Muse surface and authorized test accounts for further research. Do not log in, connect accounts, submit credentials, make purchases or send messages without explicit authorization.

# 12. Security and compliance

An agent with browser, credential and purchase capabilities is high risk. Any implementation must define isolation, least privilege, confirmation gates, secret handling, payment boundaries, auditability, data minimization, recovery and abuse prevention. No security-parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-muse-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-muse-surface` | https://muse.ai/ | Public agent, computer-use and integration claims |
| `ev-meta-muse-safety` | https://security.muse.ai/ | Official safety/security surface link |
| REA capture | `catalog/rea/meta/meta-muse.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Authentication, quotas, supported integrations, regions, model behavior and failure recovery require further authorized testing.
- No login, connected account, credential, purchase or message workflow was inspected.
- Muse Spark and Muse Glimmer are not included in this service record.

# 15. Research history

- **2026-11-04:** reviewed Meta's official technology catalog, Muse product surface and safety link; promoted the candidate after verifying a distinct public AI-agent service boundary.
- **Next review:** 2027-02-04, or sooner if Meta changes Muse's access, integrations or product boundary materially.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier meta-muse` and inspect canonical identity with `npx rea-faang products show meta-muse --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang meta-muse --out ./meta-muse.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit meta-muse --out ./meta-muse-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`meta-muse`).
- Dossier: [research/companies/meta/products/meta-muse.md](../../../research/companies/meta/products/meta-muse.md).
- REA capture: [catalog/rea/meta/meta-muse.md](../../rea/meta/meta-muse.md) (2026-11-04T02:54:54.097Z); raw record: [catalog/rea/evidence/meta-muse.json](../../rea/evidence/meta-muse.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Muse AI as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Muse — Your Personal AI Agent from Meta](https://muse.ai/) — Muse is a personal AI agent with a public product surface and computer-use workflows. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Muse Safety and Security](https://security.muse.ai/) — Muse publishes a separate safety and security surface for its agent product. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Muse AI as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Muse — Your Personal AI Agent from Meta](https://muse.ai/) — Muse is a personal AI agent with a public product surface and computer-use workflows. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Muse Safety and Security](https://security.muse.ai/) — Muse publishes a separate safety and security surface for its agent product. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Official product page](https://muse.ai/) — Muse is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Official documentation entry](https://introducing.muse.ai/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Additional official source lead](https://www.meta.com/technologies/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://muse.ai/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://introducing.muse.ai/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://security.muse.ai/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Muse Public web-surface observation (REA)](https://muse.ai/) — A dated unauthenticated snapshot exposed controls button: Download apps, button: Continue, button: Muse introduction film, button: Play the guided tour of Muse, button: Log in, button: Close, textbox: Mobile number or email, link: Learn more, link: Link's purchase protections, link: How We Designed Muse When Muse works, it feels like magic. These are the product choices that make the experience possible., link: How We Built Safety Into Muse Muse is built for privacy, safety, and security. Learn how these principles shape every part of the product., link: Muse for Business Meet the AI agent that works for your small business and keeps jobs moving between your decisions., link: Privacy Policy, link: Cookie Policy, link: Terms, link: Download and landmarks main, region: Muse landing page, region: Muse, AI that gets it done for you, region: Muse introduction, region: Muse features, region: Every Muse user shares their own computer in the cloud with their Muse., region: Designed around the way you already communicate, region: Stay in control of what your agent does, region: Your data is kept secure and private, region: Proactively helps with your goals and suggests ideas, region: Connects to your apps and builds its own tools, region: Get the most out of your Muse, region: Learn more about Muse, region: Ready to try Muse?, navigation: Legal links. (VERIFIED; accessed 2026-11-04T02:54:54.097Z).
