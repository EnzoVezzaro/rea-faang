---
name: google-gemini
description: "Evidence-aware build skill for Google Gemini (google-gemini); investigate, assess reuse, implement scoped behavior and verify."
---

# Google Gemini — implementation skill (`google-gemini`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Google Gemini**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Google Gemini** (`google-gemini`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/google-gemini.md` from the catalog page, or run `npx rea-faang google-gemini --out ./google-gemini.md`, `npx rea-faang skills generate google-gemini` or `npx rea-faang build agent-kit google-gemini --out ./google-gemini-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Google Gemini / `google-gemini` | `catalog/products.jsonl` |
| Official product URL | [https://gemini.google.com/](https://gemini.google.com/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://ai.google.dev/gemini-api/docs](https://ai.google.dev/gemini-api/docs) | Catalog record |
| Research dossier | `npx rea-faang research dossier google-gemini` | `research/companies/google/products/google-gemini.md` |
| REA report | `catalog/rea/google/google-gemini.md` (captured 2026-11-03T01:38:17.023Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/google-gemini.json` (`ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show google-gemini --format json` and `npx rea-faang research dossier google-gemini` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://gemini.google.com/app](https://gemini.google.com/app), captured 2026-11-03T01:38:17.023Z, evidence `ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `GOOGLE-GEMINI-CAP-20F21489`, `GOOGLE-GEMINI-CAP-29E663BE`, `GOOGLE-GEMINI-CAP-DF9EDCE3`, `GOOGLE-GEMINI-CAP-47F18601`.

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
| Name / stable ID | **Google Gemini** / `google-gemini` | Product catalog |
| Company / category | Google / `ai_model` / `ai_model` | Product catalog |
| Official website / docs | [https://gemini.google.com/](https://gemini.google.com/) / [https://ai.google.dev/gemini-api/docs](https://ai.google.dev/gemini-api/docs) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **ai_model** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `GOOGLE-GEMINI-CAP-20F21489` | Multimodal model and agent interactions across documented text, image, audio, video and document surfaces. | VERIFIED | `ev-google-gemini-interactions` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-GEMINI-CAP-29E663BE` | Developer API and SDK access to selected Gemini models and capabilities. | VERIFIED | `ev-google-gemini-api` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-GEMINI-CAP-DF9EDCE3` | Structured function calling, tool calls and function results for supported model families. | VERIFIED | `ev-google-gemini-function-calling` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-GEMINI-CAP-47F18601` | Free and paid access tiers with account, model, quota and data-use differences that require current per-surface verification. | VERIFIED | `ev-google-gemini-pricing`, `ev-google-gemini-privacy` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Close sidebar`, `button: About Gemini`, `button: Subscriptions`, `button: For Business`, `button: Settings`, `button: Sign in`, `button: Get App`, `button: Upload & tools`, `button: Open mode picker, currently Flash-Lite`, `button: Dictate (⌘⇧D)`, `link: New chat`, `link: Images`, `link: Sign in`, `textbox: Enter a prompt for Gemini`, `link: Google Terms Opens in a new window`, `link: Google Privacy Policy Opens in a new window`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Multimodal model and agent interactions across documented text, image, audio, video and document surfaces.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Developer API and SDK access to selected Gemini models and capabilities.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Structured function calling, tool calls and function results for supported model families.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Free and paid access tiers with account, model, quota and data-use differences that require current per-surface verification.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `main`, `navigation: Side Navigation`, `navigation: Main actions menu`, `navigation: Additional actions menu` | Full IA/routes/authenticated navigation |
| Views/headings | `Hi, I'm Gemini. Where should we start?` | Results and subsequent views |
| Controls | `button: Close sidebar`, `button: About Gemini`, `button: Subscriptions`, `button: For Business`, `button: Settings`, `button: Sign in`, `button: Get App`, `button: Upload & tools`, `button: Open mode picker, currently Flash-Lite`, `button: Dictate (⌘⇧D)`, `link: New chat`, `link: Images`, `link: Sign in`, `textbox: Enter a prompt for Gemini`, `link: Google Terms Opens in a new window`, `link: Google Privacy Policy Opens in a new window` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[New chat](/)`, `[New chat](/app)`, `[Images](/images)`, `[Sign in](#)`, `[Google Terms Opens in a new window](https://policies.google.com/terms)`, `[Google Privacy Policy Opens in a new window](https://policies.google.com/privacy)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-20F21489 — Multimodal model and agent interactions across documented text, image, audio, video and document surfaces.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-gemini-interactions`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-20F21489`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-GEMINI-CAP-20F21489` → `REQ-FUNC-20F21489` → `TEST-FUNC-20F21489`.

### REQ-FUNC-29E663BE — Developer API and SDK access to selected Gemini models and capabilities.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-gemini-api`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-29E663BE`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-GEMINI-CAP-29E663BE` → `REQ-FUNC-29E663BE` → `TEST-FUNC-29E663BE`.

### REQ-FUNC-DF9EDCE3 — Structured function calling, tool calls and function results for supported model families.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-gemini-function-calling`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-DF9EDCE3`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-GEMINI-CAP-DF9EDCE3` → `REQ-FUNC-DF9EDCE3` → `TEST-FUNC-DF9EDCE3`.

### REQ-FUNC-47F18601 — Free and paid access tiers with account, model, quota and data-use differences that require current per-surface verification.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-gemini-pricing`, `ev-google-gemini-privacy`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-47F18601`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-GEMINI-CAP-47F18601` → `REQ-FUNC-47F18601` → `TEST-FUNC-47F18601`.

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
| [Gemma](https://ai.google.dev/gemma) | Not recorded; verify the canonical repository | Google model-specific terms; verify current release (unverified) | Google-published open model family related to Gemini technology. | Related open models are not the hosted Gemini service or a parity claim. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Mistral and Qwen model families](https://mistral.ai/technology/) | Not recorded; verify the canonical repository | model-specific; verify each release (unverified) | Alternative open or openly distributed model families for selected workloads. | Capabilities, licenses and hosting requirements vary by model. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Ollama](https://ollama.com/) | [repository](https://github.com/ollama/ollama) | MIT (unverified) | Local model runner and OpenAI-compatible API. | Runs the weights; does not provide a frontier model. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `GOOGLE-GEMINI-CAP-20F21489` — Multimodal model and agent interactions across documented text, image, audio, video and document surfaces. | Not verified against Gemma | None yet; compare with `ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8` | Candidate code path and tests must be inspected |
| `GOOGLE-GEMINI-CAP-29E663BE` — Developer API and SDK access to selected Gemini models and capabilities. | Not verified against Gemma | None yet; compare with `ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8` | Candidate code path and tests must be inspected |
| `GOOGLE-GEMINI-CAP-DF9EDCE3` — Structured function calling, tool calls and function results for supported model families. | Not verified against Gemma | None yet; compare with `ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8` | Candidate code path and tests must be inspected |
| `GOOGLE-GEMINI-CAP-47F18601` — Free and paid access tiers with account, model, quota and data-use differences that require current per-surface verification. | Not verified against Gemma | None yet; compare with `ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Gemma** (Google-published open model family related to Gemini technology.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Gemma** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

Product-specific review: Test prompt injection, tool authorization, privacy, model drift, unsafe outputs and representative evaluations. Do not claim compliance, privacy or security parity without scoped assessment.

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

- **TEST-FUNC-20F21489** → `REQ-FUNC-20F21489`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-29E663BE** → `REQ-FUNC-29E663BE`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-DF9EDCE3** → `REQ-FUNC-DF9EDCE3`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-47F18601** → `REQ-FUNC-47F18601`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-20F21489, REQ-FUNC-29E663BE, REQ-FUNC-DF9EDCE3, REQ-FUNC-47F18601
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-20F21489, REQ-FUNC-29E663BE, REQ-FUNC-DF9EDCE3, REQ-FUNC-47F18601
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
- **Completion:** Trace: REQ-FUNC-20F21489, REQ-FUNC-29E663BE, REQ-FUNC-DF9EDCE3, REQ-FUNC-47F18601; document exclusions and unknowns.
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
| `ev-google-gemini-identity` | Gemini — The official URL resolves to the Gemini application surface; the repository also records a dated REA capture of its public unauthenticated entry page. | [link](https://gemini.google.com/) | 2026-11-03T00:00:00Z | The canonical public product surface is Google Gemini at gemini.google.com. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-api` | Gemini API documentation — The official developer documentation describes the Gemini API, SDKs, model access and feature guides; exact model availability and limits remain version- and account-dependent. | [link](https://ai.google.dev/gemini-api/docs) | 2026-11-03T00:00:00Z | Google publishes a developer API for interacting with Gemini models and related capabilities. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-interactions` | Interactions API — Google documents interaction records, optional server-side state, observable execution steps, background execution and feature guides for text, image, audio, video, documents and tools. | [link](https://ai.google.dev/gemini-api/docs/interactions-overview) | 2026-11-03T00:00:00Z | The Interactions API provides a unified interface for model and agent interactions, including multimodal inputs, tools and background execution. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-function-calling` | Function calling with the Gemini API — The official guide documents function declarations, calls and results; it also documents multimodal content in function responses for Gemini 3 series models. | [link](https://ai.google.dev/gemini-api/docs/function-calling) | 2026-11-03T00:00:00Z | The Gemini API documents function calling and multimodal function results for supported model families. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-pricing` | Gemini Developer API pricing — Google documents free access for selected models and limits, paid token pricing, tool charges and account or tier conditions; these terms may change. | [link](https://ai.google.dev/gemini-api/docs/pricing) | 2026-11-03T00:00:00Z | Gemini API access has free and paid tiers with model-, modality- and usage-dependent limits and prices. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-model-cards` | Model cards — The model-card index lists Gemini model families, versions and dates, while separating them from Gemma open models; it is not a promise that every listed model is available in every API or account. | [link](https://deepmind.google/models/model-cards/) | 2026-11-03T00:00:00Z | Google publishes model cards for multiple Gemini generations and related Gemma models. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-privacy` | Gemini Apps Privacy Hub — The privacy notice describes data collected and purposes such as providing, maintaining, improving and personalizing services; it applies to Gemini Apps and is distinct from every API deployment contract. | [link](https://support.google.com/gemini/answer/13594961) | 2026-11-03T00:00:00Z | Google documents categories of prompts, files, recordings, device context and connected-app data processed by Gemini Apps. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-identity` | Gemini — The official URL resolves to the Gemini application surface; the repository also records a dated REA capture of its public unauthenticated entry page. | [link](https://gemini.google.com/) | 2026-11-03T00:00:00Z | The canonical public product surface is Google Gemini at gemini.google.com. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-api` | Gemini API documentation — The official developer documentation describes the Gemini API, SDKs, model access and feature guides; exact model availability and limits remain version- and account-dependent. | [link](https://ai.google.dev/gemini-api/docs) | 2026-11-03T00:00:00Z | Google publishes a developer API for interacting with Gemini models and related capabilities. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-interactions` | Interactions API — Google documents interaction records, optional server-side state, observable execution steps, background execution and feature guides for text, image, audio, video, documents and tools. | [link](https://ai.google.dev/gemini-api/docs/interactions-overview) | 2026-11-03T00:00:00Z | The Interactions API provides a unified interface for model and agent interactions, including multimodal inputs, tools and background execution. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-function-calling` | Function calling with the Gemini API — The official guide documents function declarations, calls and results; it also documents multimodal content in function responses for Gemini 3 series models. | [link](https://ai.google.dev/gemini-api/docs/function-calling) | 2026-11-03T00:00:00Z | The Gemini API documents function calling and multimodal function results for supported model families. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-pricing` | Gemini Developer API pricing — Google documents free access for selected models and limits, paid token pricing, tool charges and account or tier conditions; these terms may change. | [link](https://ai.google.dev/gemini-api/docs/pricing) | 2026-11-03T00:00:00Z | Gemini API access has free and paid tiers with model-, modality- and usage-dependent limits and prices. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-model-cards` | Model cards — The model-card index lists Gemini model families, versions and dates, while separating them from Gemma open models; it is not a promise that every listed model is available in every API or account. | [link](https://deepmind.google/models/model-cards/) | 2026-11-03T00:00:00Z | Google publishes model cards for multiple Gemini generations and related Gemma models. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-gemini-privacy` | Gemini Apps Privacy Hub — The privacy notice describes data collected and purposes such as providing, maintaining, improving and personalizing services; it applies to Gemini Apps and is distinct from every API deployment contract. | [link](https://support.google.com/gemini/answer/13594961) | 2026-11-03T00:00:00Z | Google documents categories of prompts, files, recordings, device context and connected-app data processed by Gemini Apps. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://gemini.google.com/) | 2026-11-03T00:00:00Z | Google Gemini is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://ai.google.dev/gemini-api/docs) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://ai.google.dev/gemini-api/docs/interactions-overview) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://ai.google.dev/gemini-api/docs/function-calling) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://ai.google.dev/gemini-api/docs/pricing) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://deepmind.google/models/model-cards/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://support.google.com/gemini/answer/13594961) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8` | Google Gemini Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://gemini.google.com/app) | 2026-11-03T01:38:17.023Z | A dated unauthenticated snapshot exposed controls button: Close sidebar, button: About Gemini, button: Subscriptions, button: For Business, button: Settings, button: Sign in, button: Get App, button: Upload & tools, button: Open mode picker, currently Flash-Lite, button: Dictate (⌘⇧D), link: New chat, link: Images, link: Sign in, textbox: Enter a prompt for Gemini, link: Google Terms Opens in a new window, link: Google Privacy Policy Opens in a new window and landmarks main, navigation: Side Navigation, navigation: Main actions menu, navigation: Additional actions menu. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `google-gemini`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Google Gemini is Google's hosted family of multimodal models and assistant surfaces. Google documents a developer API, model and agent interactions, function calling, multimodal features, pricing tiers and model cards. The public evidence does not establish a downloadable Gemini equivalent, proprietary training details, complete model parity across products, or the internal serving architecture.

This dossier promotes `google-gemini` to `researched` for the documented public product and developer surfaces. It keeps unknowns explicit and treats the dated REA capture as evidence of the public entry page only, not as proof of every authenticated assistant or API workflow.

# 2. Product identity and ownership

- **Canonical name:** Google Gemini
- **Stable catalog ID:** `google-gemini`
- **Company:** Google / Google DeepMind
- **Product type:** hosted AI model family and consumer/developer application surfaces
- **Official product URL:** https://gemini.google.com/
- **Official developer documentation:** https://ai.google.dev/gemini-api/docs
- **Lifecycle:** active at the time of review
- **Identity evidence:** `ev-google-gemini-identity`, plus `catalog/rea/google/google-gemini.md`
- **Version matrix:** Google publishes multiple model cards and API model entries; exact availability, preview status, limits and account eligibility must be checked against the current API model list before integration

Gemini Apps, the Gemini API, Vertex AI integrations and individual model generations are related surfaces. They are not silently collapsed into separate product identities here. A model-specific or channel-specific contract should be created only when the catalog needs a distinct lifecycle, owner or evidence set.

# 3. Product capabilities

The following claims are supported by the official sources in the evidence ledger:

1. **Multimodal interaction:** Google documents text, image, audio, video and document feature guides across the Gemini API and model families.
2. **Developer API:** Google publishes SDK and API documentation for accessing selected Gemini models and capabilities.
3. **Tool and function calling:** Google documents function declarations, tool calls and function results, including multimodal function results for supported Gemini 3 models.
4. **Interaction and agent workflows:** The Interactions API documents unified model/agent interactions, optional server-side state, observable execution steps and background execution.
5. **Model and tier diversity:** Google publishes model cards and pricing for multiple Gemini families and service tiers; availability is not uniform across products or accounts.
6. **Free and paid access:** Google's pricing documentation distinguishes free access, paid access and enterprise offerings with different limits, tools and data-use terms.

Not established by these sources: exact internal model weights, training corpus, proprietary safety implementation, complete parity between Gemini Apps and API behavior, regional availability of every feature, or a full public service-level guarantee.

# 4. Technical architecture

**Verified public model:** client or application surface → Gemini model/API interaction → optional tools or function calls → model output and interaction record. The Interactions API documents a chronological interaction resource containing execution steps and optional server-side state.

**Not verified:** TPU topology, training pipeline, model routing, hidden safety services, storage engines, deployment topology, caching internals, quota enforcement implementation and private personalization. These remain `UNKNOWN`; this dossier does not infer them from generic AI-system architecture.

# 5. User workflows

The public REA capture observed the unauthenticated Gemini entry surface with a new-chat control, navigation, sign-in control, upload/tools control, mode picker and dictate control. Official developer documentation supports a separate workflow for creating an API interaction, selecting an eligible model, providing text or multimodal input, optionally allowing tools/function calls, and reading the resulting interaction.

The following details remain unverified or surface-specific: authenticated chat history, connected-app behavior, subscription gating, exact upload limits, model picker contents, refusal and safety states, retries, cancellation, streaming semantics, latency, account deletion, regional behavior and parity between Gemini Apps, AI Studio, Gemini API and Vertex AI.

# 6. Pricing and access

Google documents free and paid Gemini API tiers. The free tier can include limited access to selected models and free input/output tokens, while paid and enterprise tiers expose different limits, tools, support and data-use terms. Google AI Studio usage and API billing are not interchangeable assumptions; check the current pricing and billing documentation for the target account and model before integration.

Pricing, quotas, free-tier eligibility, model names and tool charges are time-sensitive. This dossier records the official documentation consulted on 2026-11-03, not a permanent quote or authorization to incur charges.

# 7. API and integration surface

- **Gemini API:** documented model and interaction endpoints with SDK support.
- **Interactions API:** unified interaction records, optional state, tool/function execution and background execution.
- **Function calling:** structured function declarations, calls and results; multimodal result support is model-family dependent.
- **Gemini Apps:** public consumer assistant surface observed by REA; authentication and connected-app behavior were not exercised.
- **Vertex AI:** related Google Cloud delivery surface; do not assume identical models, quotas, terms or APIs without checking its current contract.

Authentication, quotas, regional availability, safety behavior, retries, idempotency and retention must be read from the current official contract before building an integration.

# 8. Existing open-source alternatives

The curated landscape identifies partial candidates, not equivalent replacements:

- **Gemma:** Google's separately documented open model family, including model cards and downloadable/open-weight variants; it is related technology but not the hosted Gemini service.
- **Ollama:** MIT-licensed local model runner and API surface; it runs selected model weights but does not provide Gemini's hosted model family.
- **Mistral and Qwen model families:** open-weight or openly distributed model families with different licenses, capabilities and deployment requirements; each requires a separate version and license review.

These candidates cover pieces of local inference, model serving or open-weight experimentation. None is verified here as a drop-in replacement for Gemini Apps, Gemini API, or Google's proprietary multimodal model family.

# 9. Alternative comparison

The evidence supports **partial** alternative coverage. Gemma is the closest Google-published open-model relation, while Ollama is a runtime rather than a model. Mistral and Qwen may cover selected text, code or multimodal workloads depending on model and license. Capability, latency, safety, tool use, context, hosting, support and data governance must be compared for a bounded use case before selecting one.

Alternative coverage remains `unknown` in the canonical product record until each candidate is reviewed for current release, license, maintenance, security, hardware needs and the exact target workflow.

# 10. Missing capabilities and opportunity analysis

The opportunity is a bounded, independently operated multimodal or agentic system with explicit model choice, data controls, tool permissions, evaluation sets and cost limits—not a claim to reproduce Google's proprietary hosted service. A viable first slice could choose one open model family, one modality, one deployment target and one tool contract. Gemini-scale model quality, hosted reliability, private context and product integrations remain outside that bounded claim.

# 11. REA implementation strategy

Use the REA public-surface report only to reproduce the observed unauthenticated entry contract and to guide additional authorized observations. For an independent implementation, compare Gemma, Mistral, Qwen and a local runner such as Ollama against a declared task set, license, hardware budget, safety policy and evaluation corpus. Do not present an open model or runner as Gemini parity.

# 12. Security, privacy and compliance

Google's Gemini Apps privacy notice documents prompts, files, recordings, device context, connected apps and related processing purposes. That notice is not a substitute for the API or Vertex AI data-processing contract. An independent implementation must define data minimization, prompt and file retention, tool permissions, tenant isolation, secrets handling, abuse controls, deletion/export, model safety evaluation and audit logging before implementation. No compliance or privacy parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-google-gemini-identity` | https://gemini.google.com/ | Product identity and public entry page |
| `ev-google-gemini-api` | https://ai.google.dev/gemini-api/docs | Developer API and model surface |
| `ev-google-gemini-interactions` | https://ai.google.dev/gemini-api/docs/interactions-overview | Interaction records, state and agent features |
| `ev-google-gemini-function-calling` | https://ai.google.dev/gemini-api/docs/function-calling | Function calling and multimodal results |
| `ev-google-gemini-pricing` | https://ai.google.dev/gemini-api/docs/pricing | Free/paid tiers, limits and tool pricing |
| `ev-google-gemini-model-cards` | https://deepmind.google/models/model-cards/ | Model families and version records |
| `ev-google-gemini-privacy` | https://support.google.com/gemini/answer/13594961 | Gemini Apps data and privacy scope |
| REA capture | `catalog/rea/google/google-gemini.md` | Dated unauthenticated entry-page observation only |

# 14. Open questions and exclusions

- Exact model availability and names must be checked against the current account and API model list.
- Gemini Apps, AI Studio, Gemini API and Vertex AI do not share an assumed contract.
- Full authenticated assistant workflows and connected-app behavior were not captured.
- Exact training data, model weights, internal routing, safety services and infrastructure are not public evidence here.
- Alternative repositories and model licenses require separate current reviews.
- No billing, account, private-data, deployment or production operation was performed.

# 15. Research history

- **2026-11-03:** reviewed official Google AI for Developers, Google DeepMind and Gemini Help sources; reconciled them with the existing REA public-entry capture; promoted the dossier from `pending` to `researched` with verified evidence and explicit unknowns.
- **Next review:** 2027-02-03, or sooner if official model availability, pricing, privacy terms or API behavior changes materially.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier google-gemini` and inspect canonical identity with `npx rea-faang products show google-gemini --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang google-gemini --out ./google-gemini.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit google-gemini --out ./google-gemini-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-gemini`).
- Dossier: [research/companies/google/products/google-gemini.md](../../../research/companies/google/products/google-gemini.md).
- REA capture: [catalog/rea/google/google-gemini.md](../../rea/google/google-gemini.md) (2026-11-03T01:38:17.023Z); raw record: [catalog/rea/evidence/google-gemini.json](../../rea/evidence/google-gemini.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Gemini](https://gemini.google.com/) — The canonical public product surface is Google Gemini at gemini.google.com. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Gemini API documentation](https://ai.google.dev/gemini-api/docs) — Google publishes a developer API for interacting with Gemini models and related capabilities. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Interactions API](https://ai.google.dev/gemini-api/docs/interactions-overview) — The Interactions API provides a unified interface for model and agent interactions, including multimodal inputs, tools and background execution. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Function calling with the Gemini API](https://ai.google.dev/gemini-api/docs/function-calling) — The Gemini API documents function calling and multimodal function results for supported model families. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing) — Gemini API access has free and paid tiers with model-, modality- and usage-dependent limits and prices. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Model cards](https://deepmind.google/models/model-cards/) — Google publishes model cards for multiple Gemini generations and related Gemma models. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961) — Google documents categories of prompts, files, recordings, device context and connected-app data processed by Gemini Apps. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Gemini](https://gemini.google.com/) — The canonical public product surface is Google Gemini at gemini.google.com. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Gemini API documentation](https://ai.google.dev/gemini-api/docs) — Google publishes a developer API for interacting with Gemini models and related capabilities. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Interactions API](https://ai.google.dev/gemini-api/docs/interactions-overview) — The Interactions API provides a unified interface for model and agent interactions, including multimodal inputs, tools and background execution. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Function calling with the Gemini API](https://ai.google.dev/gemini-api/docs/function-calling) — The Gemini API documents function calling and multimodal function results for supported model families. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing) — Gemini API access has free and paid tiers with model-, modality- and usage-dependent limits and prices. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Model cards](https://deepmind.google/models/model-cards/) — Google publishes model cards for multiple Gemini generations and related Gemma models. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961) — Google documents categories of prompts, files, recordings, device context and connected-app data processed by Gemini Apps. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://gemini.google.com/) — Google Gemini is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://ai.google.dev/gemini-api/docs) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://ai.google.dev/gemini-api/docs/interactions-overview) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://ai.google.dev/gemini-api/docs/function-calling) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://ai.google.dev/gemini-api/docs/pricing) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://deepmind.google/models/model-cards/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://support.google.com/gemini/answer/13594961) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Google Gemini Public web-surface observation (REA)](https://gemini.google.com/app) — A dated unauthenticated snapshot exposed controls button: Close sidebar, button: About Gemini, button: Subscriptions, button: For Business, button: Settings, button: Sign in, button: Get App, button: Upload & tools, button: Open mode picker, currently Flash-Lite, button: Dictate (⌘⇧D), link: New chat, link: Images, link: Sign in, textbox: Enter a prompt for Gemini, link: Google Terms Opens in a new window, link: Google Privacy Policy Opens in a new window and landmarks main, navigation: Side Navigation, navigation: Main actions menu, navigation: Additional actions menu. (VERIFIED; accessed 2026-11-03T01:38:17.023Z).
