---
name: google-drive
description: "Evidence-aware build skill for Google Drive (google-drive); investigate, assess reuse, implement scoped behavior and verify."
---

# Google Drive — implementation skill (`google-drive`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Google Drive**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Google Drive** (`google-drive`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/google-drive.md` from the catalog page, or run `npx rea-faang google-drive --out ./google-drive.md`, `npx rea-faang skills generate google-drive` or `npx rea-faang build agent-kit google-drive --out ./google-drive-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Google Drive / `google-drive` | `catalog/products.jsonl` |
| Official product URL | [https://drive.google.com/](https://drive.google.com/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk) | Catalog record |
| Research dossier | `npx rea-faang research dossier google-drive` | `research/companies/google/products/google-drive.md` |
| REA report | `catalog/rea/google/google-drive.md` (captured 2026-11-03T01:37:58.402Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/google-drive.json` (`ev_126cc070f26d3b0b883a8db43fc34d682d9d629fd771fe471e36578ce95bb352`) | Catalog evidence |
| Alternative candidates | 1 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show google-drive --format json` and `npx rea-faang research dossier google-drive` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://accounts.google.com/v3/signin/identifier?continue=https://drive.google.com/&emr=1&followup=https://drive.google.com/&osid=1&passive=1209600&service=wise&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S-921284725:1793669875234787](https://accounts.google.com/v3/signin/identifier?continue=https://drive.google.com/&emr=1&followup=https://drive.google.com/&osid=1&passive=1209600&service=wise&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S-921284725:1793669875234787), captured 2026-11-03T01:37:58.402Z, evidence `ev_126cc070f26d3b0b883a8db43fc34d682d9d629fd771fe471e36578ce95bb352`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `GOOGLE-DRIVE-CAP-60FD2268`, `GOOGLE-DRIVE-CAP-C5B2B495`, `GOOGLE-DRIVE-CAP-41D63D36`, `GOOGLE-DRIVE-CAP-07F17FC3`.

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
| Name / stable ID | **Google Drive** / `google-drive` | Product catalog |
| Company / category | Google / `storage` / `cloud-storage`, `file-sync`, `file-sharing`, `collaboration` | Product catalog |
| Official website / docs | [https://drive.google.com/](https://drive.google.com/) / [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **storage** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `GOOGLE-DRIVE-CAP-60FD2268` | Cloud storage, file organisation, sync and sharing are verified at the service level. | VERIFIED | `ev-google-drive-identity`, `ev-google-drive-capabilities` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-DRIVE-CAP-C5B2B495` | Viewer, commenter and editor permissions plus inheritance behavior are documented; organisation policy can constrain them. | VERIFIED | `ev-google-drive-sharing` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-DRIVE-CAP-41D63D36` | The Drive API documents files, drives, permissions, revisions, changes and related integration resources. | VERIFIED | `ev-google-drive-api` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-DRIVE-CAP-07F17FC3` | Account-specific quotas, pricing, retention, editor integration and authenticated behavior were not exhaustively verified. | VERIFIED | `ev-google-drive-identity`, `ev-google-drive-sharing` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Next`, `textbox: Email or phone`, `link: Forgot email?`, `link: Learn more about using Guest mode (external, opens in a new window)`, `link: Create account`, `link: Open Google Account Help Center (external, opens in a new window)`, `link: Privacy Policy (external, opens in a new window)`, `link: Google Terms of Service (external, opens in a new window)`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Cloud storage, file organisation, sync and sharing are verified at the service level.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Viewer, commenter and editor permissions plus inheritance behavior are documented; organisation policy can constrain them.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **The Drive API documents files, drives, permissions, revisions, changes and related integration resources.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Account-specific quotas, pricing, retention, editor integration and authenticated behavior were not exhaustively verified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Sign in` | Results and subsequent views |
| Controls | `button: Next`, `textbox: Email or phone`, `link: Forgot email?`, `link: Learn more about using Guest mode (external, opens in a new window)`, `link: Create account`, `link: Open Google Account Help Center (external, opens in a new window)`, `link: Privacy Policy (external, opens in a new window)`, `link: Google Terms of Service (external, opens in a new window)` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Forgot email?](/signin/usernamerecovery?continue=https://drive.google.com/&dsh=S-921284725:1793669875234787&emr=1&flowEntry=ServiceLogin&flowName=WebLiteSignIn&followup=https://drive.google.com/&osid=1&service=wise)`, `[Learn more about using Guest mode (external, opens in a new window)](https://support.google.com/accounts?p=signin_privatebrowsing&hl=en-US)`, `[Create account](/lifecycle/flows/signup?continue=https://drive.google.com/&dsh=S-921284725:1793669875234787&emr=1&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https://drive.google.com/&osid=1&service=wise)`, `[Open Google Account Help Center (external, opens in a new window)](https://support.google.com/accounts?hl=en-US&p=account_iph)`, `[Privacy Policy (external, opens in a new window)](https://accounts.google.com/TOS?loc=US&hl=en-US&privacy=true)`, `[Google Terms of Service (external, opens in a new window)](https://accounts.google.com/TOS?loc=US&hl=en-US)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-60FD2268 — Cloud storage, file organisation, sync and sharing are verified at the service level.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-drive-identity`, `ev-google-drive-capabilities`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-60FD2268`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-DRIVE-CAP-60FD2268` → `REQ-FUNC-60FD2268` → `TEST-FUNC-60FD2268`.

### REQ-FUNC-C5B2B495 — Viewer, commenter and editor permissions plus inheritance behavior are documented; organisation policy can constrain them.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-drive-sharing`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C5B2B495`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-DRIVE-CAP-C5B2B495` → `REQ-FUNC-C5B2B495` → `TEST-FUNC-C5B2B495`.

### REQ-FUNC-41D63D36 — The Drive API documents files, drives, permissions, revisions, changes and related integration resources.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-drive-api`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-41D63D36`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-DRIVE-CAP-41D63D36` → `REQ-FUNC-41D63D36` → `TEST-FUNC-41D63D36`.

### REQ-FUNC-07F17FC3 — Account-specific quotas, pricing, retention, editor integration and authenticated behavior were not exhaustively verified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-drive-identity`, `ev-google-drive-sharing`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-07F17FC3`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-DRIVE-CAP-07F17FC3` → `REQ-FUNC-07F17FC3` → `TEST-FUNC-07F17FC3`.

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
| [Nextcloud](https://nextcloud.com/) | Not recorded; verify the canonical repository | AGPL-3.0 (unverified) | Self-hosted files, sync and sharing server. | Files only; not the collaborative editors. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `GOOGLE-DRIVE-CAP-60FD2268` — Cloud storage, file organisation, sync and sharing are verified at the service level. | Not verified against Nextcloud | None yet; compare with `ev_126cc070f26d3b0b883a8db43fc34d682d9d629fd771fe471e36578ce95bb352` | Candidate code path and tests must be inspected |
| `GOOGLE-DRIVE-CAP-C5B2B495` — Viewer, commenter and editor permissions plus inheritance behavior are documented; organisation policy can constrain them. | Not verified against Nextcloud | None yet; compare with `ev_126cc070f26d3b0b883a8db43fc34d682d9d629fd771fe471e36578ce95bb352` | Candidate code path and tests must be inspected |
| `GOOGLE-DRIVE-CAP-41D63D36` — The Drive API documents files, drives, permissions, revisions, changes and related integration resources. | Not verified against Nextcloud | None yet; compare with `ev_126cc070f26d3b0b883a8db43fc34d682d9d629fd771fe471e36578ce95bb352` | Candidate code path and tests must be inspected |
| `GOOGLE-DRIVE-CAP-07F17FC3` — Account-specific quotas, pricing, retention, editor integration and authenticated behavior were not exhaustively verified. | Not verified against Nextcloud | None yet; compare with `ev_126cc070f26d3b0b883a8db43fc34d682d9d629fd771fe471e36578ce95bb352` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Nextcloud** (Self-hosted files, sync and sharing server.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Nextcloud** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

Product-specific review: Verify tenant isolation, object access, integrity, retention, deletion and backup/restore. Do not claim compliance, privacy or security parity without scoped assessment.

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
- **EDGE-009:** Interrupted transfer, checksum mismatch, deletion/restore conflict. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-60FD2268** → `REQ-FUNC-60FD2268`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C5B2B495** → `REQ-FUNC-C5B2B495`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-41D63D36** → `REQ-FUNC-41D63D36`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-07F17FC3** → `REQ-FUNC-07F17FC3`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-60FD2268, REQ-FUNC-C5B2B495, REQ-FUNC-41D63D36, REQ-FUNC-07F17FC3
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-60FD2268, REQ-FUNC-C5B2B495, REQ-FUNC-41D63D36, REQ-FUNC-07F17FC3
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
- **Completion:** Trace: REQ-FUNC-60FD2268, REQ-FUNC-C5B2B495, REQ-FUNC-41D63D36, REQ-FUNC-07F17FC3; document exclusions and unknowns.
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
| `ev-google-drive-identity` | Google Drive API overview — The official API overview describes personal My Drive storage and collaborative shared drives. | [link](https://developers.google.com/workspace/drive/api/guides/about-sdk) | 2026-11-03T00:00:00Z | Google Drive is Google's cloud file storage service with My Drive and shared drives. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-drive-capabilities` | How to use Google Drive — Google's official help describes file upload, sharing, organisation, editing and Drive for Desktop workflows. | [link](https://support.google.com/drive/answer/2424384) | 2026-11-03T00:00:00Z | Drive supports uploading, creating, organising, editing and sharing files across devices. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-drive-api` | Google Drive API REST reference — The official REST reference lists Drive API resources and operations for file storage and sharing integrations. | [link](https://developers.google.com/workspace/drive/api/reference/rest/v3) | 2026-11-03T00:00:00Z | The Drive API exposes files, drives, permissions, revisions, changes, comments and related resources. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-drive-sharing` | Share and manage access to files and folders — The official help documents access levels, sharing limits and folder permission inheritance. | [link](https://support.google.com/drive/answer/7166529) | 2026-11-03T00:00:00Z | Drive provides viewer, commenter and editor access controls with folder and shared-drive inheritance behavior. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://drive.google.com/) | 2026-11-03T00:00:00Z | Google Drive is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://developers.google.com/workspace/drive/api/guides/about-sdk) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://support.google.com/drive/answer/2424384) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/workspace/drive/api/guides/about-sdk) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://developers.google.com/workspace/drive/api/reference/rest/v3) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://support.google.com/drive/answer/7166529) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_126cc070f26d3b0b883a8db43fc34d682d9d629fd771fe471e36578ce95bb352` | Google Drive Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://accounts.google.com/v3/signin/identifier?continue=https://drive.google.com/&emr=1&followup=https://drive.google.com/&osid=1&passive=1209600&service=wise&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S-921284725:1793669875234787) | 2026-11-03T01:37:58.402Z | A dated unauthenticated snapshot exposed controls button: Next, textbox: Email or phone, link: Forgot email?, link: Learn more about using Guest mode (external, opens in a new window), link: Create account, link: Open Google Account Help Center (external, opens in a new window), link: Privacy Policy (external, opens in a new window), link: Google Terms of Service (external, opens in a new window) and landmarks contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |
| `SRC-CANDIDATE-1` | Nextcloud candidate — Curated entry; repository only when recorded. | [link](https://nextcloud.com/) | Not recorded | Candidate for evaluation, not an approved foundation. | **PROPOSED** — Version, license/dependencies, code, tests, security, maintenance and operations not audited. |
| `SRC-CANDIDATE-2` | Seafile candidate — Curated entry; repository only when recorded. | [link](https://www.seafile.com/) | Not recorded | Candidate for evaluation, not an approved foundation. | **PROPOSED** — Version, license/dependencies, code, tests, security, maintenance and operations not audited. |
| `SRC-CANDIDATE-3` | ownCloud candidate — Curated entry; repository only when recorded. | [link](https://owncloud.com/) | Not recorded | Candidate for evaluation, not an approved foundation. | **PROPOSED** — Version, license/dependencies, code, tests, security, maintenance and operations not audited. |

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

Resume token: `google-drive`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Google Drive is Google's cloud file-storage, organisation and sharing service. It is included in Google Workspace but has its own product identity, user interface, permissions model and Drive API; it is distinct from Google Cloud Storage.

# 2. Product identity and ownership

**Official name:** Google Drive  
**Company:** Google LLC, part of Alphabet Inc.  
**Lifecycle status:** active  
**Official website:** https://drive.google.com/

Google's official documentation describes personal My Drive storage and shared drives for collaborative ownership and access.

# 3. Product capabilities

- Upload, create, organise, search, download and sync files and folders.
- Share files and folders with viewer, commenter and editor permissions.
- Shared drives for team-owned files and collaborative access.
- Integration with Docs, Sheets, Slides, Meet and third-party applications.
- File metadata, revisions, labels, changes, permissions and activity surfaces through the Drive API.

Drive is a separate catalog entry from Google Workspace because Workspace is the suite and Drive is the storage and file-sharing service inside or alongside that suite.

# 4. Technical architecture

Drive is a managed cloud service with user-owned My Drive locations, shared drives, files, folders, permissions, metadata and revisions. The Drive API is a REST interface for interacting with Drive storage; the service implementation and storage infrastructure are proprietary.

# 5. User workflows

A user uploads or creates a file, organises it in My Drive or a shared drive, shares it with selected people or groups, and edits it through an integrated Google editor or compatible application. Access is governed by file, folder, shared-drive and organisation policies.

# 6. Pricing and access

Storage and feature availability depend on account type, Google Workspace edition, organisation policy and current Google plans. This research verifies the service and access model, not current storage quotas, prices or a particular account's entitlement.

# 7. API and integration surface

The Google Drive API provides files, folders, drives, permissions, revisions, changes, comments, labels and activity-related resources. OAuth 2.0 scopes govern application access; broad Drive scopes are sensitive or restricted and must not be assumed available without user or administrator authorization.

# 8. Existing open-source alternatives

- Nextcloud (AGPL-3.0): self-hosted file storage, sync and sharing.
- Seafile (AGPL-3.0): self-hosted file synchronisation and collaboration.
- ownCloud (AGPL-3.0): self-hosted file sync, sharing and governance.

# 9. Alternative comparison

These alternatives cover storage, synchronisation and sharing. None is verified here as a drop-in replacement for Drive's Google editor integration, shared-drive model, account ecosystem, API surface and managed operation.

# 10. Missing capabilities and opportunity analysis

The main integration gap is the combination of storage, editors, identity, permissions, sharing inheritance, search, activity and third-party application access under one managed service.

# 11. REA implementation strategy

Reuse an existing self-hosted file platform rather than building storage from scratch. Define file ownership, sharing inheritance, sync, editor integration, backups and audit requirements before comparing parity.

# 12. Security, privacy, and compliance

Files and sharing permissions are sensitive. Verify OAuth scopes, organisation sharing policies, shared-drive membership, retention, backups and audit logging; do not infer access from a public Drive URL alone.

# 13. Sources and evidence

- [How to use Google Drive](https://support.google.com/drive/answer/2424384) — official user capabilities.
- [Google Drive API overview](https://developers.google.com/workspace/drive/api/guides/about-sdk) — official service identity and API model.
- [Google Drive API REST reference](https://developers.google.com/workspace/drive/api/reference/rest/v3) — official resources and operations.
- [Share and manage access](https://support.google.com/drive/answer/7166529) — official permissions and sharing behavior.

# 14. Open questions

- Which account type and region should a future storage comparison cover?
- Which workflow matters most: personal sync, shared drives or editor integration?
- What permission, retention and audit requirements must an alternative satisfy?

# 15. Research history

Record updated 2026-11-03 from official Google Drive Help and Google Developers sources. Status: `researched`; plan-specific quotas, account entitlements and authenticated tenant behavior remain outside this pass.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier google-drive` and inspect canonical identity with `npx rea-faang products show google-drive --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang google-drive --out ./google-drive.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit google-drive --out ./google-drive-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-drive`).
- Dossier: [research/companies/google/products/google-drive.md](../../../research/companies/google/products/google-drive.md).
- REA capture: [catalog/rea/google/google-drive.md](../../rea/google/google-drive.md) (2026-11-03T01:37:58.402Z); raw record: [catalog/rea/evidence/google-drive.json](../../rea/evidence/google-drive.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Google Drive API overview](https://developers.google.com/workspace/drive/api/guides/about-sdk) — Google Drive is Google's cloud file storage service with My Drive and shared drives. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [How to use Google Drive](https://support.google.com/drive/answer/2424384) — Drive supports uploading, creating, organising, editing and sharing files across devices. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Google Drive API REST reference](https://developers.google.com/workspace/drive/api/reference/rest/v3) — The Drive API exposes files, drives, permissions, revisions, changes, comments and related resources. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Share and manage access to files and folders](https://support.google.com/drive/answer/7166529) — Drive provides viewer, commenter and editor access controls with folder and shared-drive inheritance behavior. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://drive.google.com/) — Google Drive is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://developers.google.com/workspace/drive/api/guides/about-sdk) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://support.google.com/drive/answer/2424384) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/workspace/drive/api/guides/about-sdk) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://developers.google.com/workspace/drive/api/reference/rest/v3) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://support.google.com/drive/answer/7166529) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Google Drive Public web-surface observation (REA)](https://accounts.google.com/v3/signin/identifier?continue=https://drive.google.com/&emr=1&followup=https://drive.google.com/&osid=1&passive=1209600&service=wise&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S-921284725:1793669875234787) — A dated unauthenticated snapshot exposed controls button: Next, textbox: Email or phone, link: Forgot email?, link: Learn more about using Guest mode (external, opens in a new window), link: Create account, link: Open Google Account Help Center (external, opens in a new window), link: Privacy Policy (external, opens in a new window), link: Google Terms of Service (external, opens in a new window) and landmarks contentinfo. (VERIFIED; accessed 2026-11-03T01:37:58.402Z).
- [Nextcloud candidate](https://nextcloud.com/) — Candidate for evaluation, not an approved foundation. (PROPOSED; accessed Not recorded).
- [Seafile candidate](https://www.seafile.com/) — Candidate for evaluation, not an approved foundation. (PROPOSED; accessed Not recorded).
- [ownCloud candidate](https://owncloud.com/) — Candidate for evaluation, not an approved foundation. (PROPOSED; accessed Not recorded).
