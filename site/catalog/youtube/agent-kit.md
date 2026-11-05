---
name: youtube
description: "Evidence-aware build skill for YouTube (youtube); investigate, assess reuse, implement scoped behavior and verify."
---

# YouTube — implementation skill (`youtube`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **YouTube**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **YouTube** (`youtube`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/youtube.md` from the catalog page, or run `npx rea-faang youtube --out ./youtube.md`, `npx rea-faang skills generate youtube` or `npx rea-faang build agent-kit youtube --out ./youtube-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | YouTube / `youtube` | `catalog/products.jsonl` |
| Official product URL | [https://www.youtube.com/](https://www.youtube.com/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://developers.google.com/youtube/apis](https://developers.google.com/youtube/apis) | Catalog record |
| Research dossier | `npx rea-faang research dossier youtube` | `research/companies/google/products/youtube.md` |
| REA report | `catalog/rea/google/youtube.md` (captured 2026-11-03T01:42:47.226Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/youtube.json` (`ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94`) | Catalog evidence |
| Alternative candidates | 4 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show youtube --format json` and `npx rea-faang research dossier youtube` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.youtube.com/](https://www.youtube.com/), captured 2026-11-03T01:42:47.226Z, evidence `ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `YOUTUBE-CAP-25A54EAC`, `YOUTUBE-CAP-0E661219`, `YOUTUBE-CAP-329E007F`, `YOUTUBE-CAP-FB28BDE7`.

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
| Name / stable ID | **YouTube** / `youtube` | Product catalog |
| Company / category | Google / `media` / `video-platform`, `creator-platform`, `live-streaming`, `advertising` | Product catalog |
| Official website / docs | [https://www.youtube.com/](https://www.youtube.com/) / [https://developers.google.com/youtube/apis](https://developers.google.com/youtube/apis) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **media** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `YOUTUBE-CAP-25A54EAC` | Video, channel, playlist and creator workflows are documented through the product and Data API surfaces. | VERIFIED | `ev-youtube-identity`, `ev-youtube-data-api` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `YOUTUBE-CAP-0E661219` | Live-event and stream management are documented. | VERIFIED | `ev-youtube-live` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `YOUTUBE-CAP-329E007F` | Authorized analytics and bulk reporting surfaces are documented. | VERIFIED | `ev-youtube-analytics` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `YOUTUBE-CAP-FB28BDE7` | API access is constrained by privacy, playback integrity, quota, content and independent-value policies; internal platform behavior remains proprietary. | VERIFIED | `ev-youtube-policy` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Guide`, `button: Skip navigation`, `button: Search`, `button: Search with your voice`, `button: Settings`, `link: YouTube Home`, `combobox: Search`, `link: Sign in`, `link: Home`, `link: Shorts`, `link: Subscriptions`, `link: You`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Video, channel, playlist and creator workflows are documented through the product and Data API surfaces.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Live-event and stream management are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Authorized analytics and bulk reporting surfaces are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **API access is constrained by privacy, playback integrity, quota, content and independent-value policies; internal platform behavior remains proprietary.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `search`, `navigation`, `main` | Full IA/routes/authenticated navigation |
| Views/headings | `Try searching to get started` | Results and subsequent views |
| Controls | `button: Guide`, `button: Skip navigation`, `button: Search`, `button: Search with your voice`, `button: Settings`, `link: YouTube Home`, `combobox: Search`, `link: Sign in`, `link: Home`, `link: Shorts`, `link: Subscriptions`, `link: You` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[YouTube Home](/)`, `[Sign in](https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620)`, `[Home](/)`, `[Shorts](/shorts/)`, `[Subscriptions](/feed/subscriptions)`, `[You](/feed/you)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-25A54EAC — Video, channel, playlist and creator workflows are documented through the product and Data API surfaces.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-youtube-identity`, `ev-youtube-data-api`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-25A54EAC`; fixture and expected output must be specified from evidence.
- **Trace:** `YOUTUBE-CAP-25A54EAC` → `REQ-FUNC-25A54EAC` → `TEST-FUNC-25A54EAC`.

### REQ-FUNC-0E661219 — Live-event and stream management are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-youtube-live`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-0E661219`; fixture and expected output must be specified from evidence.
- **Trace:** `YOUTUBE-CAP-0E661219` → `REQ-FUNC-0E661219` → `TEST-FUNC-0E661219`.

### REQ-FUNC-329E007F — Authorized analytics and bulk reporting surfaces are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-youtube-analytics`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-329E007F`; fixture and expected output must be specified from evidence.
- **Trace:** `YOUTUBE-CAP-329E007F` → `REQ-FUNC-329E007F` → `TEST-FUNC-329E007F`.

### REQ-FUNC-FB28BDE7 — API access is constrained by privacy, playback integrity, quota, content and independent-value policies; internal platform behavior remains proprietary.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-youtube-policy`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-FB28BDE7`; fixture and expected output must be specified from evidence.
- **Trace:** `YOUTUBE-CAP-FB28BDE7` → `REQ-FUNC-FB28BDE7` → `TEST-FUNC-FB28BDE7`.

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
| [PeerTube](https://joinpeertube.org/) | [repository](https://github.com/framasoft/peertube) | AGPL-3.0 (unverified) | Federated video hosting and streaming platform. | The real platform-level alternative. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Invidious](https://invidious.io/) | [repository](https://github.com/iv-org/invidious) | AGPL-3.0 (unverified) | Private alternative front end to YouTube. | Front end only; depends on YouTube. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Piped](https://piped.video/) | Not recorded; verify the canonical repository | AGPL-3.0 (unverified) | Alternative YouTube front end. | Front end only. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [FreeTube / NewPipe](https://freetubeapp.io/) | [repository](https://github.com/FreeTubeApp/FreeTube) | AGPL-3.0 / GPL-3.0 (unverified) | Desktop and Android YouTube clients. | Clients, not platforms. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `YOUTUBE-CAP-25A54EAC` — Video, channel, playlist and creator workflows are documented through the product and Data API surfaces. | Not verified against PeerTube | None yet; compare with `ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94` | Candidate code path and tests must be inspected |
| `YOUTUBE-CAP-0E661219` — Live-event and stream management are documented. | Not verified against PeerTube | None yet; compare with `ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94` | Candidate code path and tests must be inspected |
| `YOUTUBE-CAP-329E007F` — Authorized analytics and bulk reporting surfaces are documented. | Not verified against PeerTube | None yet; compare with `ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94` | Candidate code path and tests must be inspected |
| `YOUTUBE-CAP-FB28BDE7` — API access is constrained by privacy, playback integrity, quota, content and independent-value policies; internal platform behavior remains proprietary. | Not verified against PeerTube | None yet; compare with `ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **PeerTube** (Federated video hosting and streaming platform.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **PeerTube** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-25A54EAC** → `REQ-FUNC-25A54EAC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-0E661219** → `REQ-FUNC-0E661219`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-329E007F** → `REQ-FUNC-329E007F`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-FB28BDE7** → `REQ-FUNC-FB28BDE7`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-25A54EAC, REQ-FUNC-0E661219, REQ-FUNC-329E007F, REQ-FUNC-FB28BDE7
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-25A54EAC, REQ-FUNC-0E661219, REQ-FUNC-329E007F, REQ-FUNC-FB28BDE7
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
- **Completion:** Trace: REQ-FUNC-25A54EAC, REQ-FUNC-0E661219, REQ-FUNC-329E007F, REQ-FUNC-FB28BDE7; document exclusions and unknowns.
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
| `ev-youtube-identity` | YouTube APIs and services — Official documentation identifies YouTube app features and its API/service families for developers, creators, labels, content owners and device manufacturers. | [link](https://developers.google.com/youtube/apis) | 2026-11-03T00:00:00Z | YouTube is a video platform with documented app, Data, Live Streaming, Analytics, Reporting and Content ID surfaces. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-youtube-data-api` | YouTube Data and app APIs — The official API inventory documents YouTube Data API app features such as uploading videos, managing playlists and editing video metadata. | [link](https://developers.google.com/youtube/apis) | 2026-11-03T00:00:00Z | The YouTube Data API supports documented video, channel, playlist and metadata workflows, including upload and management operations with authorization. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-youtube-live` | YouTube Live Streaming API overview — Official documentation describes live broadcasts, video streams and the API workflow for scheduling and managing live events. | [link](https://developers.google.com/youtube/data/live/getting-started) | 2026-11-03T00:00:00Z | The Live Streaming API can create, update and manage live events and associated streams on YouTube. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-youtube-analytics` | YouTube Analytics and Reporting APIs — Official documentation distinguishes targeted Analytics queries from bulk Reporting API datasets and describes authorization and available metrics. | [link](https://developers.google.com/youtube/analytics) | 2026-11-03T00:00:00Z | YouTube documents Analytics and Reporting APIs for authorized creator and data-analysis reporting workflows. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-youtube-policy` | Complying with YouTube's Developer Policies — The official policy guide documents privacy, playback integrity, metrics, independent-value, quota and content-policy requirements. | [link](https://developers.google.com/youtube/terms/developer-policies-guide) | 2026-11-03T00:00:00Z | YouTube API clients must protect user privacy, preserve standard playback, avoid unauthorized downloads or data collection and add independent value. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.youtube.com/) | 2026-11-03T00:00:00Z | YouTube is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://developers.google.com/youtube/apis) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://support.google.com/youtube/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/youtube/apis) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/youtube/terms/developer-policies-guide) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/youtube/data/live/getting-started) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/youtube/analytics) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94` | YouTube Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.youtube.com/) | 2026-11-03T01:42:47.226Z | A dated unauthenticated snapshot exposed controls button: Guide, button: Skip navigation, button: Search, button: Search with your voice, button: Settings, link: YouTube Home, combobox: Search, link: Sign in, link: Home, link: Shorts, link: Subscriptions, link: You and landmarks banner, search, navigation, main. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `youtube`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

YouTube is Google's video hosting, playback, creator and live-streaming platform. It provides public channels and videos, search and discovery, playlists, subscriptions, comments, live events and creator analytics, with monetization and rights-management surfaces for eligible users and partners. YouTube Music, YouTube TV and YouTube Kids are related but separate catalog products.

# 2. Product identity and ownership

- **Official name:** YouTube
- **Company:** YouTube LLC, part of Google/Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://www.youtube.com/
- **Identity evidence:** Official Google developer documentation identifies YouTube app features, Data, Live Streaming, Analytics, Reporting and Content ID APIs as distinct YouTube integration surfaces.

# 3. Product capabilities

- Upload, manage, publish and play user and partner video content.
- Channels, subscriptions, playlists, search, comments and sharing.
- Live event scheduling and stream management.
- Creator analytics and reporting, subject to authorization and API scope.
- Content ownership and rights workflows through restricted Content ID surfaces.
- Embedded playback through the IFrame Player API and related widgets.

# 4. Technical architecture

The public surface exposes a web and app experience, embedded playback, creator channels, live streaming, APIs and reporting. The public documentation does not disclose YouTube's internal transcoding, CDN, recommendation, moderation, ranking, advertising or rights-enforcement implementation. Those capabilities must be treated as proprietary beyond the documented behavior and API contracts.

# 5. User and developer workflows

Viewers discover and play videos, subscribe to channels, create playlists and interact with content. Creators use channels and Studio workflows to upload, manage, publish and analyze content. Authorized applications can use the Data API for documented video/channel/playlist operations, the Live Streaming API for live events, and Analytics/Reporting APIs for permitted reporting. API clients must preserve the standard player experience and comply with YouTube policies.

# 6. Pricing and access

YouTube has an ad-supported public experience and paid or creator-specific programs such as YouTube Premium, channel memberships and other monetization features. Availability, monetization eligibility, regional access and API quotas vary by account, country, content and program. This pass does not assert current pricing or a channel's eligibility.

# 7. API and integration surface

Google documents the YouTube Data API, Live Streaming API, IFrame Player API, Analytics API, Reporting API, Content ID API and player/widgets. Content ID is restricted to eligible YouTube Partners. API access requires the documented authentication, quota, privacy and policy controls; a public API is not permission to download, mirror, modify or replace YouTube playback.

# 8. Existing open-source alternatives

- **PeerTube (AGPL-3.0):** federated, self-hostable video publishing and streaming platform.
- **Invidious (AGPL-3.0):** alternative front end that depends on YouTube; not an independent video platform.
- **FreeTube (AGPL-3.0):** desktop client focused on privacy; not a hosting or creator platform.

# 9. Alternative comparison

PeerTube is the closest open platform for self-hosted and federated video publishing, while Invidious and FreeTube are clients/front ends that depend on YouTube. None reproduces YouTube's content catalog, creator network, global delivery, recommendation system, advertising, rights management or partner ecosystem. Coverage is partial.

# 10. Missing capabilities and opportunity analysis

A replacement would need video ingestion and transcoding, storage and CDN delivery, playback, search, recommendations, identity, channels, moderation, copyright and rights workflows, live streaming, analytics, monetization, safety, privacy and regional compliance. A bounded niche or federated platform is feasible; a general YouTube clone is not supported by this research.

# 11. REA implementation strategy

Use PeerTube for a self-hosted/federated video platform or FreeTube for a privacy-oriented client. Define content ownership, moderation, storage, delivery, federation, creator identity and monetization before building. If integrating YouTube, use only documented APIs and the embedded player, preserve standard playback and obtain the required permissions. Do not scrape or mirror YouTube content.

# 12. Security, privacy, and compliance

YouTube workflows process account identity, viewing history, uploads, comments, analytics, rights data and potentially child-directed content. API clients must obtain consent, provide privacy and deletion controls, protect credentials, respect content and community policies, preserve playback integrity and avoid unauthorized data collection or downloads.

# 13. Sources and evidence

- [YouTube APIs and services](https://developers.google.com/youtube/apis) — official API inventory and access modes.
- [Developer policies guide](https://developers.google.com/youtube/terms/developer-policies-guide) — official privacy, playback, metrics and independent-value requirements.
- [Live Streaming API overview](https://developers.google.com/youtube/data/live/getting-started) — official live-event and stream-management surface.
- [YouTube Analytics and Reporting](https://developers.google.com/youtube/analytics) — official creator analytics and reporting surface.
- [YouTube API terms](https://developers.google.com/youtube/terms/api-services-terms-of-service) — official API contractual requirements.

# 14. Open questions

- Is the target a creator tool, embedded player, analytics product, federated platform or full video service?
- Which content ownership, moderation, monetization and regional requirements are mandatory?
- Which YouTube API scopes, quotas, audits and privacy obligations apply to the integration?

# 15. Research history

- v1: dossier contained broad editorial claims and preliminary alternatives; research pending.
- v2: rewritten 2026-11-03 from official YouTube Help and Google developer documentation. Status: `researched`; proprietary infrastructure, content licensing, ranking and partner operations remain outside the verified public surface.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier youtube` and inspect canonical identity with `npx rea-faang products show youtube --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang youtube --out ./youtube.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit youtube --out ./youtube-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`youtube`).
- Dossier: [research/companies/google/products/youtube.md](../../../research/companies/google/products/youtube.md).
- REA capture: [catalog/rea/google/youtube.md](../../rea/google/youtube.md) (2026-11-03T01:42:47.226Z); raw record: [catalog/rea/evidence/youtube.json](../../rea/evidence/youtube.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [YouTube APIs and services](https://developers.google.com/youtube/apis) — YouTube is a video platform with documented app, Data, Live Streaming, Analytics, Reporting and Content ID surfaces. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [YouTube Data and app APIs](https://developers.google.com/youtube/apis) — The YouTube Data API supports documented video, channel, playlist and metadata workflows, including upload and management operations with authorization. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [YouTube Live Streaming API overview](https://developers.google.com/youtube/data/live/getting-started) — The Live Streaming API can create, update and manage live events and associated streams on YouTube. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [YouTube Analytics and Reporting APIs](https://developers.google.com/youtube/analytics) — YouTube documents Analytics and Reporting APIs for authorized creator and data-analysis reporting workflows. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Complying with YouTube's Developer Policies](https://developers.google.com/youtube/terms/developer-policies-guide) — YouTube API clients must protect user privacy, preserve standard playback, avoid unauthorized downloads or data collection and add independent value. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://www.youtube.com/) — YouTube is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://developers.google.com/youtube/apis) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://support.google.com/youtube/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/youtube/apis) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/youtube/terms/developer-policies-guide) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/youtube/data/live/getting-started) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/youtube/analytics) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [YouTube Public web-surface observation (REA)](https://www.youtube.com/) — A dated unauthenticated snapshot exposed controls button: Guide, button: Skip navigation, button: Search, button: Search with your voice, button: Settings, link: YouTube Home, combobox: Search, link: Sign in, link: Home, link: Shorts, link: Subscriptions, link: You and landmarks banner, search, navigation, main. (VERIFIED; accessed 2026-11-03T01:42:47.226Z).
