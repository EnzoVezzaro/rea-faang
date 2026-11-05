---
name: google-analytics
description: "Evidence-aware build skill for Google Analytics (google-analytics); investigate, assess reuse, implement scoped behavior and verify."
---

# Google Analytics — implementation skill (`google-analytics`)

> **Research status:** researched. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Google Analytics**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Google Analytics** (`google-analytics`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/google-analytics.md` from the catalog page, or run `npx rea-faang google-analytics --out ./google-analytics.md`, `npx rea-faang skills generate google-analytics` or `npx rea-faang build agent-kit google-analytics --out ./google-analytics-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Google Analytics / `google-analytics` | `catalog/products.jsonl` |
| Official product URL | [https://analytics.google.com/](https://analytics.google.com/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://developers.google.com/analytics](https://developers.google.com/analytics) | Catalog record |
| Research dossier | `npx rea-faang research dossier google-analytics` | `research/companies/google/products/google-analytics.md` |
| REA report | `catalog/rea/google/google-analytics.md` (captured 2026-11-03T01:36:58.534Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/google-analytics.json` (`ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show google-analytics --format json` and `npx rea-faang research dossier google-analytics` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://accounts.google.com/v3/signin/identifier?continue=https://analytics.google.com/analytics/web/%23&followup=https://analytics.google.com/analytics/web/&passive=1209600&service=analytics&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S1327791954:1793669815313470](https://accounts.google.com/v3/signin/identifier?continue=https://analytics.google.com/analytics/web/%23&followup=https://analytics.google.com/analytics/web/&passive=1209600&service=analytics&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S1327791954:1793669815313470), captured 2026-11-03T01:36:58.534Z, evidence `ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `GOOGLE-ANALYTICS-CAP-A06D29DA`, `GOOGLE-ANALYTICS-CAP-8B9E6812`, `GOOGLE-ANALYTICS-CAP-11A6C765`, `GOOGLE-ANALYTICS-CAP-D755ED6B`.

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
| Name / stable ID | **Google Analytics** / `google-analytics` | Product catalog |
| Company / category | Google / `business_software` / `web-analytics`, `product-analytics`, `measurement` | Product catalog |
| Official website / docs | [https://analytics.google.com/](https://analytics.google.com/) / [https://developers.google.com/analytics](https://developers.google.com/analytics) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **business_software** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `GOOGLE-ANALYTICS-CAP-A06D29DA` | Official documentation verifies collection and realtime, overview and detail reporting. | VERIFIED | `ev-google-analytics-reports` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-ANALYTICS-CAP-8B9E6812` | Data API reporting and Admin API configuration are documented. | VERIFIED | `ev-google-analytics-apis` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-ANALYTICS-CAP-11A6C765` | Measurement Protocol server-side and offline event use cases are documented with constraints. | VERIFIED | `ev-google-analytics-protocol` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-ANALYTICS-CAP-D755ED6B` | Public APIs are documented, but processing, attribution and internal infrastructure remain proprietary. | VERIFIED | `ev-google-analytics-apis` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Next`, `textbox: Email or phone`, `link: Forgot email?`, `link: Learn more about using Guest mode (external, opens in a new window)`, `link: Create account`, `link: Open Google Account Help Center (external, opens in a new window)`, `link: Privacy Policy (external, opens in a new window)`, `link: Google Terms of Service (external, opens in a new window)`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Official documentation verifies collection and realtime, overview and detail reporting.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Data API reporting and Admin API configuration are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Measurement Protocol server-side and offline event use cases are documented with constraints.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Public APIs are documented, but processing, attribution and internal infrastructure remain proprietary.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Sign in` | Results and subsequent views |
| Controls | `button: Next`, `textbox: Email or phone`, `link: Forgot email?`, `link: Learn more about using Guest mode (external, opens in a new window)`, `link: Create account`, `link: Open Google Account Help Center (external, opens in a new window)`, `link: Privacy Policy (external, opens in a new window)`, `link: Google Terms of Service (external, opens in a new window)` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Forgot email?](/signin/usernamerecovery?continue=https://analytics.google.com/analytics/web/%23&dsh=S1327791954:1793669815313470&flowEntry=ServiceLogin&flowName=WebLiteSignIn&followup=https://analytics.google.com/analytics/web/&service=analytics)`, `[Learn more about using Guest mode (external, opens in a new window)](https://support.google.com/accounts?p=signin_privatebrowsing&hl=en-US)`, `[Create account](/lifecycle/flows/signup?continue=https://analytics.google.com/analytics/web/%23&dsh=S1327791954:1793669815313470&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https://analytics.google.com/analytics/web/&nogm=1&service=analytics)`, `[Open Google Account Help Center (external, opens in a new window)](https://support.google.com/accounts?hl=en-US&p=account_iph)`, `[Privacy Policy (external, opens in a new window)](https://accounts.google.com/TOS?loc=US&hl=en-US&privacy=true)`, `[Google Terms of Service (external, opens in a new window)](https://accounts.google.com/TOS?loc=US&hl=en-US)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-A06D29DA — Official documentation verifies collection and realtime, overview and detail reporting.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-analytics-reports`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-A06D29DA`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-ANALYTICS-CAP-A06D29DA` → `REQ-FUNC-A06D29DA` → `TEST-FUNC-A06D29DA`.

### REQ-FUNC-8B9E6812 — Data API reporting and Admin API configuration are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-analytics-apis`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-8B9E6812`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-ANALYTICS-CAP-8B9E6812` → `REQ-FUNC-8B9E6812` → `TEST-FUNC-8B9E6812`.

### REQ-FUNC-11A6C765 — Measurement Protocol server-side and offline event use cases are documented with constraints.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-analytics-protocol`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-11A6C765`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-ANALYTICS-CAP-11A6C765` → `REQ-FUNC-11A6C765` → `TEST-FUNC-11A6C765`.

### REQ-FUNC-D755ED6B — Public APIs are documented, but processing, attribution and internal infrastructure remain proprietary.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-analytics-apis`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D755ED6B`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-ANALYTICS-CAP-D755ED6B` → `REQ-FUNC-D755ED6B` → `TEST-FUNC-D755ED6B`.

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
| [Matomo](https://matomo.org/) | Not recorded; verify the canonical repository | GPL-3.0 (unverified) | Self-hosted web analytics with full data ownership. | Mature; 15+ years. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Plausible](https://plausible.io/) | Not recorded; verify the canonical repository | AGPL-3.0 (unverified) | Lightweight, privacy-first analytics. | Self-hostable community edition. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Umami](https://umami.is/) | Not recorded; verify the canonical repository | MIT (unverified) | Self-hosted privacy-focused web analytics and dashboards. | Partial; app analytics and Google integrations differ. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `GOOGLE-ANALYTICS-CAP-A06D29DA` — Official documentation verifies collection and realtime, overview and detail reporting. | Not verified against Matomo | None yet; compare with `ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a` | Candidate code path and tests must be inspected |
| `GOOGLE-ANALYTICS-CAP-8B9E6812` — Data API reporting and Admin API configuration are documented. | Not verified against Matomo | None yet; compare with `ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a` | Candidate code path and tests must be inspected |
| `GOOGLE-ANALYTICS-CAP-11A6C765` — Measurement Protocol server-side and offline event use cases are documented with constraints. | Not verified against Matomo | None yet; compare with `ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a` | Candidate code path and tests must be inspected |
| `GOOGLE-ANALYTICS-CAP-D755ED6B` — Public APIs are documented, but processing, attribution and internal infrastructure remain proprietary. | Not verified against Matomo | None yet; compare with `ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Matomo** (Self-hosted web analytics with full data ownership.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Matomo** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-A06D29DA** → `REQ-FUNC-A06D29DA`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-8B9E6812** → `REQ-FUNC-8B9E6812`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-11A6C765** → `REQ-FUNC-11A6C765`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-D755ED6B** → `REQ-FUNC-D755ED6B`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-A06D29DA, REQ-FUNC-8B9E6812, REQ-FUNC-11A6C765, REQ-FUNC-D755ED6B
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-A06D29DA, REQ-FUNC-8B9E6812, REQ-FUNC-11A6C765, REQ-FUNC-D755ED6B
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
- **Completion:** Trace: REQ-FUNC-A06D29DA, REQ-FUNC-8B9E6812, REQ-FUNC-11A6C765, REQ-FUNC-D755ED6B; document exclusions and unknowns.
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
| `ev-google-analytics-identity` | Google Analytics — The canonical product surface and official documentation identify Analytics reports, properties, streams and events as the platform's core model. | [link](https://analytics.google.com/) | 2026-11-03T00:00:00Z | Google Analytics is Google's web and app measurement platform. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-analytics-reports` | Overview of Google Analytics reports — The official Help page documents report types, data collection and analysis workflows. | [link](https://support.google.com/analytics/answer/9212670) | 2026-11-03T00:00:00Z | Google Analytics collects website and app data and produces realtime, overview and detail reports. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-analytics-apis` | Google Analytics for developers — The official developer portal exposes APIs and developer products for reporting, configuration and event collection. | [link](https://developers.google.com/analytics) | 2026-11-03T00:00:00Z | Google documents Data API reporting, Admin API configuration and Measurement Protocol integrations. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-analytics-protocol` | Measurement Protocol — The official guide documents HTTPS event submission and explicitly states that Measurement Protocol supplements rather than replaces automatic collection. | [link](https://developers.google.com/analytics/devguides/collection/protocol/ga4) | 2026-11-03T00:00:00Z | The GA4 Measurement Protocol supplements tagged or Firebase collection with server-side and offline events. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://analytics.google.com/) | 2026-11-03T00:00:00Z | Google Analytics is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://developers.google.com/analytics) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://support.google.com/analytics/answer/9212670) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/analytics) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/analytics/devguides/config/admin/v1) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/analytics/devguides/collection/protocol/ga4) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a` | Google Analytics Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://accounts.google.com/v3/signin/identifier?continue=https://analytics.google.com/analytics/web/%23&followup=https://analytics.google.com/analytics/web/&passive=1209600&service=analytics&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S1327791954:1793669815313470) | 2026-11-03T01:36:58.534Z | A dated unauthenticated snapshot exposed controls button: Next, textbox: Email or phone, link: Forgot email?, link: Learn more about using Guest mode (external, opens in a new window), link: Create account, link: Open Google Account Help Center (external, opens in a new window), link: Privacy Policy (external, opens in a new window), link: Google Terms of Service (external, opens in a new window) and landmarks contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `google-analytics`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Google Analytics is Google's web and app measurement platform. It collects events from tagged web and app streams, produces realtime and detailed reports, and exposes reporting, configuration and server-to-server measurement interfaces.

# 2. Product identity and ownership

- **Official name:** Google Analytics
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://analytics.google.com/
- **Identity evidence:** Google's Help and developer documentation identify Analytics reports, properties, streams, events and APIs as the product's core model.

# 3. Product capabilities

- Collect web and app events and show realtime, overview and detail reports.
- Analyze acquisition, engagement, retention, monetization and user behavior.
- Configure accounts, properties, streams, dimensions, metrics, audiences and links.
- Query data with the Analytics Data API and manage configuration with the Admin API.
- Send server-side or offline events through the GA4 Measurement Protocol.

# 4. Technical architecture

The public model includes accounts, properties, web/app data streams, events, user properties, dimensions, metrics and reports. Google operates collection, processing, attribution, storage and reporting infrastructure; internal processing and ranking details are proprietary.

# 5. User workflows

A team creates a property and stream, installs tagging or an SDK, defines events and permissions, then uses reports to inspect traffic, engagement and conversions. Developers can query reports, manage configuration and supplement client-side collection with server-side Measurement Protocol events.

# 6. Pricing and access

Access and limits depend on Analytics properties, account permissions, region and whether the property uses standard or 360 capabilities. APIs require authorization and property access. This pass does not assert current pricing, quota or a particular property's entitlement.

# 7. API and integration surface

Google documents the Analytics Data API for reporting, the Admin API for account/property configuration and the GA4 Measurement Protocol for HTTPS event collection. Measurement Protocol supplements tagging or Firebase collection rather than replacing it, and malformed payloads may still receive a 2xx response, so validation is required.

# 8. Existing open-source alternatives

- **Matomo (GPL-3.0):** self-hosted web analytics with data ownership and reporting.
- **Plausible Analytics (AGPL-3.0):** lightweight privacy-oriented web analytics.
- **Umami (MIT):** self-hosted privacy-focused web analytics and dashboards.

# 9. Alternative comparison

These projects cover core web analytics and ownership of collected data. They do not reproduce Google's cross-platform ecosystem, GA4 event model, Ads/Firebase integrations, managed scale, attribution behavior or APIs. Coverage is partial and depends on the target workflow.

# 10. Missing capabilities and opportunity analysis

A replacement would need consent-aware collection, web/app SDKs, event governance, identity and session modeling, reporting, attribution, retention controls, exports, integrations, permissions and a reliable migration path from GA4 schemas.

# 11. REA implementation strategy

Start with privacy-preserving web analytics and an explicit event schema. Use Matomo, Plausible or Umami where their capabilities fit; add app collection, reporting APIs and integrations only after defining consent, retention, ownership and compatibility requirements.

# 12. Security, privacy, and compliance

Analytics can contain identifiers, device data, location, behavior and conversion information. Verify consent signals, IP and user-data handling, retention, deletion, access roles, API scopes, exports and data residency before deploying an alternative.

# 13. Sources and evidence

- [Overview of Google Analytics reports](https://support.google.com/analytics/answer/9212670) — official report model and workflows.
- [Google Analytics for developers](https://developers.google.com/analytics) — official Data API, Admin API and Measurement Protocol entry points.
- [Google Analytics Admin API](https://developers.google.com/analytics/devguides/config/admin/v1) — official configuration surface.
- [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4) — official server-side event collection constraints.

# 14. Open questions

- Is the target web analytics, app analytics or cross-platform measurement?
- Which GA4 event, report, audience and integration semantics require compatibility?
- What consent, retention, deletion and data-residency requirements govern deployment?

# 15. Research history

Record updated 2026-11-03 from official Google Analytics Help and Google Developers sources. Status: `researched`; current quotas, pricing and proprietary processing remain outside this pass.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier google-analytics` and inspect canonical identity with `npx rea-faang products show google-analytics --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang google-analytics --out ./google-analytics.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit google-analytics --out ./google-analytics-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-analytics`).
- Dossier: [research/companies/google/products/google-analytics.md](../../../research/companies/google/products/google-analytics.md).
- REA capture: [catalog/rea/google/google-analytics.md](../../rea/google/google-analytics.md) (2026-11-03T01:36:58.534Z); raw record: [catalog/rea/evidence/google-analytics.json](../../rea/evidence/google-analytics.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Google Analytics](https://analytics.google.com/) — Google Analytics is Google's web and app measurement platform. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Overview of Google Analytics reports](https://support.google.com/analytics/answer/9212670) — Google Analytics collects website and app data and produces realtime, overview and detail reports. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Analytics for developers](https://developers.google.com/analytics) — Google documents Data API reporting, Admin API configuration and Measurement Protocol integrations. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4) — The GA4 Measurement Protocol supplements tagged or Firebase collection with server-side and offline events. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://analytics.google.com/) — Google Analytics is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://developers.google.com/analytics) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://support.google.com/analytics/answer/9212670) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/analytics) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/analytics/devguides/config/admin/v1) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/analytics/devguides/collection/protocol/ga4) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Google Analytics Public web-surface observation (REA)](https://accounts.google.com/v3/signin/identifier?continue=https://analytics.google.com/analytics/web/%23&followup=https://analytics.google.com/analytics/web/&passive=1209600&service=analytics&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S1327791954:1793669815313470) — A dated unauthenticated snapshot exposed controls button: Next, textbox: Email or phone, link: Forgot email?, link: Learn more about using Guest mode (external, opens in a new window), link: Create account, link: Open Google Account Help Center (external, opens in a new window), link: Privacy Policy (external, opens in a new window), link: Google Terms of Service (external, opens in a new window) and landmarks contentinfo. (VERIFIED; accessed 2026-11-03T01:36:58.534Z).
