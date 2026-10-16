---
name: amazon-luna
description: "Evidence-aware build skill for Luna (amazon-luna); investigate, assess reuse, implement scoped behavior and verify."
---

# Luna — implementation skill (`amazon-luna`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Luna**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Luna** (`amazon-luna`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Luna** / `amazon-luna` | Product catalog |
| Company / category | Amazon / `games` / `cloud-gaming` | Product catalog |
| Official website / docs | [https://luna.amazon.com/](https://luna.amazon.com/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **games** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-LUNA-CAP-6611963D` | Cloud game streaming | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-LUNA-CAP-2AFEA8A5` | Channel subscriptions | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-LUNA-CAP-4B4245B9` | Controller and cross-device play | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: CLOUD GAMING`, `button: Home`, `button: GameNight`, `button: My Stuff`, `button: Remote Play NEW`, `button: Sign In`, `button: Navigate to search`, `button: Click to login`, `button: Letter Trek Your word adventure starts now!`, `button: More Info`, `button: SONIC X SHADOW GENERATIONS Available now`, `button: Sonic Mania Plus Race through all-new original Zones and updated Classics`, `button: Garfield Kart 2 - All You Can Drift Ready to race against a real heavyweight?`, `button: Centipede Swarm One centipede becomes many. Your nightmare begins now.`, `button: Go to slide 1`, `button: Go to slide 2`, `button: Go to slide 3`, `button: Go to slide 4`, `button: Go to slide 5`, `button: Go to slide 6`, `link: Navigate to home`, `link: Navigate to gamenight`, `link: Navigate to remote-play`, `button: SONIC X SHADOW GENERATIONS, 2 / 10, Top New Games`, `button: Star Wars Outlaws, 4 / 10, Top New Games`, `button: Wobbly Life, 5 / 10, Top New Games`, `button: Goat Simulator 3, 7 / 10, Top New Games`, `button: The Game of Life 2, 8 / 10, Top New Games`, `button: Hogwarts Legacy, 9 / 10, Top New Games`, `button: Bowling Mayhem, 10 / 10, Top New Games`, `button: Right Caret`, `button: SONIC X SHADOW GENERATIONS, 1 / 5, Recently Added`, `button: Space Metal Mania, 3 / 5, Recently Added`, `button: Cranium Planet, 4 / 5, Recently Added`, `button: Bowling Mayhem, 5 / 5, Recently Added`, `link: Leave feedback`, `link: Discover`, `link: Download Luna`, `link: Luna Controller`, `link: Compatible Controllers`, `link: Compatible Devices`, `link: Claim Games`, `link: Getting Started`, `link: Device Troubleshooting`, `link: Network Issues`, `link: Help and Customer Service`, `link: Parental Controls`, `link: Language Settings`, `link: Payment Settings`, `link: Manage Subscriptions`, `link: Instagram`, `link: Facebook`, `link: X (formerly Twitter)`, `link: TikTok`, `link: Reddit`, `link: Amazon Luna Terms of Use`, `link: Amazon Luna Legal Notices`, `link: Amazon Conditions of Use`, `link: Amazon Privacy Notice`, `link: Visit Luna home page`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Cloud game streaming:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Channel subscriptions:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Controller and cross-device play:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `main` | Full IA/routes/authenticated navigation |
| Views/headings | `Luna`, `Use Phones As Controllers Use Phones As Controllers` | Results and subsequent views |
| Controls | `button: CLOUD GAMING`, `button: Home`, `button: GameNight`, `button: My Stuff`, `button: Remote Play NEW`, `button: Sign In`, `button: Navigate to search`, `button: Click to login`, `button: Letter Trek Your word adventure starts now!`, `button: More Info`, `button: SONIC X SHADOW GENERATIONS Available now`, `button: Sonic Mania Plus Race through all-new original Zones and updated Classics`, `button: Garfield Kart 2 - All You Can Drift Ready to race against a real heavyweight?`, `button: Centipede Swarm One centipede becomes many. Your nightmare begins now.`, `button: Go to slide 1`, `button: Go to slide 2`, `button: Go to slide 3`, `button: Go to slide 4`, `button: Go to slide 5`, `button: Go to slide 6`, `link: Navigate to home`, `link: Navigate to gamenight`, `link: Navigate to remote-play`, `button: SONIC X SHADOW GENERATIONS, 2 / 10, Top New Games`, `button: Star Wars Outlaws, 4 / 10, Top New Games`, `button: Wobbly Life, 5 / 10, Top New Games`, `button: Goat Simulator 3, 7 / 10, Top New Games`, `button: The Game of Life 2, 8 / 10, Top New Games`, `button: Hogwarts Legacy, 9 / 10, Top New Games`, `button: Bowling Mayhem, 10 / 10, Top New Games`, `button: Right Caret`, `button: SONIC X SHADOW GENERATIONS, 1 / 5, Recently Added`, `button: Space Metal Mania, 3 / 5, Recently Added`, `button: Cranium Planet, 4 / 5, Recently Added`, `button: Bowling Mayhem, 5 / 5, Recently Added`, `link: Leave feedback`, `link: Discover`, `link: Download Luna`, `link: Luna Controller`, `link: Compatible Controllers`, `link: Compatible Devices`, `link: Claim Games`, `link: Getting Started`, `link: Device Troubleshooting`, `link: Network Issues`, `link: Help and Customer Service`, `link: Parental Controls`, `link: Language Settings`, `link: Payment Settings`, `link: Manage Subscriptions`, `link: Instagram`, `link: Facebook`, `link: X (formerly Twitter)`, `link: TikTok`, `link: Reddit`, `link: Amazon Luna Terms of Use`, `link: Amazon Luna Legal Notices`, `link: Amazon Conditions of Use`, `link: Amazon Privacy Notice`, `link: Visit Luna home page` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Navigate to home](/)`, `[Navigate to gamenight](/gamenight)`, `[Navigate to remote-play](/remote-play)`, `[Leave feedback](https://luna.amazon.com/settings?subNav=help_and_feedback)`, `[Discover](https://www.amazon.com/luna/landing-page)`, `[Download Luna](https://luna.amazon.com/settings?subNav=download)`, `[Luna Controller](https://www.amazon.com/dp/B07P989QTJ)`, `[Compatible Controllers](https://www.amazon.com/gp/help/customer/display.html?nodeId=GYNLANRYMK4WTXSS)`, `[Compatible Devices](https://www.amazon.com/gp/help/customer/display.html?nodeId=GP729A5ZM48TLPAJ)`, `[Claim Games](https://luna.amazon.com/claims)`, `[Getting Started](https://www.amazon.com/luna/getting-started)`, `[Device Troubleshooting](https://www.amazon.com/gp/help/customer/display.html?nodeId=GHXY8X4SH5M9JYBD)`, `[Network Issues](https://www.amazon.com/help/luna/networkissues)`, `[Help and Customer Service](https://www.amazon.com/help/luna)`, `[Parental Controls](https://luna.amazon.com/settings?subNav=parental_controls)`, `[Language Settings](https://luna.amazon.com/settings?subNav=language_selection)`, `[Payment Settings](https://www.amazon.com/cpe/yourpayments/settings/manageoneclick)`, `[Manage Subscriptions](https://www.amazon.com/yourmembershipsandsubscriptions)`, `[Instagram](https://www.instagram.com/amazonluna)`, `[Facebook](https://www.facebook.com/AmazonLuna)`, `[X (formerly Twitter)](https://twitter.com/amazonluna)`, `[TikTok](https://www.tiktok.com/@amazonluna)`, `[Reddit](https://www.reddit.com/r/amazonluna)`, `[Amazon Luna Terms of Use](https://www.amazon.com/help/luna/tou)`, `[Amazon Luna Legal Notices](https://www.amazon.com/help/luna/legalnotices)`, `[Amazon Conditions of Use](https://www.amazon.com/conditionsofuse)`, `[Amazon Privacy Notice](https://www.amazon.com/privacy)`, `[Visit Luna home page](/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-6611963D — Cloud game streaming
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-6611963D`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-LUNA-CAP-6611963D` → `REQ-FUNC-6611963D` → `TEST-FUNC-6611963D`.

### REQ-FUNC-2AFEA8A5 — Channel subscriptions
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2AFEA8A5`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-LUNA-CAP-2AFEA8A5` → `REQ-FUNC-2AFEA8A5` → `TEST-FUNC-2AFEA8A5`.

### REQ-FUNC-4B4245B9 — Controller and cross-device play
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-4B4245B9`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-LUNA-CAP-4B4245B9` → `REQ-FUNC-4B4245B9` → `TEST-FUNC-4B4245B9`.

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

**Decision: candidates are PROPOSED for evaluation, not approved foundations.** Verify repository/version, license and dependency terms, actual code/modules, extension points, tests/CI, maintenance, security, deployment and integration cost. Map each requirement to actual code and test evidence; README claims and popularity are not proof.

| Candidate | Repository | Catalog license (unverified) | Claimed coverage (unverified) | Limitation | Decision |
|---|---|---|---|---|---|
| [Sunshine](https://github.com/LizardByte/Sunshine) | Not recorded | GPL-3.0 (unverified) | Self-hosted game streaming server. | Streams your own hardware. | Proposed evaluation lead; no verified foundation |
| [Moonlight](https://moonlight-stream.org/) | Not recorded | GPL-3.0 (unverified) | Open game streaming client. | No limitation recorded | Proposed evaluation lead; no verified foundation |

No candidate has been independently cloned, executed, license-reviewed or security-reviewed by this generator.
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

- **TEST-FUNC-6611963D** → `REQ-FUNC-6611963D`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-2AFEA8A5** → `REQ-FUNC-2AFEA8A5`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-4B4245B9** → `REQ-FUNC-4B4245B9`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-6611963D, REQ-FUNC-2AFEA8A5, REQ-FUNC-4B4245B9
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-6611963D, REQ-FUNC-2AFEA8A5, REQ-FUNC-4B4245B9
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
- **Completion:** Trace: REQ-FUNC-6611963D, REQ-FUNC-2AFEA8A5, REQ-FUNC-4B4245B9; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://luna.amazon.com/) | Not recorded | Luna is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_5e21572966259e9ca7d9205812a476d7783bce90cafcd4fee4d113c852e0ef3d` | Luna Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://luna.amazon.com/) | 2026-10-14T04:00:33.498Z | A dated unauthenticated snapshot exposed controls button: CLOUD GAMING, button: Home, button: GameNight, button: My Stuff, button: Remote Play NEW, button: Sign In, button: Navigate to search, button: Click to login, button: Letter Trek Your word adventure starts now!, button: More Info, button: SONIC X SHADOW GENERATIONS Available now, button: Sonic Mania Plus Race through all-new original Zones and updated Classics, button: Garfield Kart 2 - All You Can Drift Ready to race against a real heavyweight?, button: Centipede Swarm One centipede becomes many. Your nightmare begins now., button: Go to slide 1, button: Go to slide 2, button: Go to slide 3, button: Go to slide 4, button: Go to slide 5, button: Go to slide 6, link: Navigate to home, link: Navigate to gamenight, link: Navigate to remote-play, button: SONIC X SHADOW GENERATIONS, 2 / 10, Top New Games, button: Star Wars Outlaws, 4 / 10, Top New Games, button: Wobbly Life, 5 / 10, Top New Games, button: Goat Simulator 3, 7 / 10, Top New Games, button: The Game of Life 2, 8 / 10, Top New Games, button: Hogwarts Legacy, 9 / 10, Top New Games, button: Bowling Mayhem, 10 / 10, Top New Games, button: Right Caret, button: SONIC X SHADOW GENERATIONS, 1 / 5, Recently Added, button: Space Metal Mania, 3 / 5, Recently Added, button: Cranium Planet, 4 / 5, Recently Added, button: Bowling Mayhem, 5 / 5, Recently Added, link: Leave feedback, link: Discover, link: Download Luna, link: Luna Controller, link: Compatible Controllers, link: Compatible Devices, link: Claim Games, link: Getting Started, link: Device Troubleshooting, link: Network Issues, link: Help and Customer Service, link: Parental Controls, link: Language Settings, link: Payment Settings, link: Manage Subscriptions, link: Instagram, link: Facebook, link: X (formerly Twitter), link: TikTok, link: Reddit, link: Amazon Luna Terms of Use, link: Amazon Luna Legal Notices, link: Amazon Conditions of Use, link: Amazon Privacy Notice, link: Visit Luna home page and landmarks banner, main. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-luna`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Luna is Amazon's cloud gaming subscription service.

---

# 2. Product identity and ownership

- **Official name:** Luna
- **Company and business unit:** amazon
- **Current lifecycle status:** active
- **Official website:** https://luna.amazon.com/

---

# 3. Product capabilities

- Cloud game streaming
- Channel subscriptions
- Controller and cross-device play

---

# 4. Technical architecture

Not yet researched.

---

# 5. User workflows

Not yet researched.

---

# 6. Pricing and access

Not yet researched.

---

# 7. API and integration surface

Not yet researched.

---

# 8. Existing open-source alternatives

Open-source candidates exist: Sunshine (GPL-3.0) — Self-hosted game streaming server.; Moonlight (GPL-3.0) — Open game streaming client.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Self-hosted game streaming works (Sunshine + Moonlight) but streams your own machine; no open project offers a cloud catalogue.

---

# 10. Missing capabilities and opportunity analysis

Self-hosted game streaming works (Sunshine + Moonlight) but streams your own machine; no open project offers a cloud catalogue.

---

# 11. RAE implementation strategy

Partial. The streaming technology is open and self-hostable; the cloud game catalogue is not replicable.

---

# 12. Security, privacy, and compliance

Not yet researched.

---

# 13. Sources and evidence

- https://github.com/LizardByte/Sunshine
- https://moonlight-stream.org/

---

# 14. Open questions

- Full feature inventory and technical architecture are not yet researched.

---

# 15. Research history

- v1: dossier created; research pending.

---

# 16. Alternative comparison (continued)

Self-hosted game streaming works (Sunshine + Moonlight) but streams your own machine; no open project offers a cloud catalogue.

---

# 17. RAE implementation strategy (continued)

Partial. The streaming technology is open and self-hostable; the cloud game catalogue is not replicable.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier amazon-luna` and inspect canonical identity with `npx rae-faang products show amazon-luna --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang amazon-luna --out ./amazon-luna.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit amazon-luna --out ./amazon-luna-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-luna`).
- Dossier: [research/companies/amazon/products/amazon-luna.md](../../../research/companies/amazon/products/amazon-luna.md).
- REA capture: [catalog/rea/amazon/amazon-luna.md](../../rea/amazon/amazon-luna.md) (2026-10-14T04:00:33.498Z); raw record: [catalog/rea/evidence/amazon-luna.json](../../rea/evidence/amazon-luna.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://luna.amazon.com/) — Luna is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Luna Public web-surface observation (REA)](https://luna.amazon.com/) — A dated unauthenticated snapshot exposed controls button: CLOUD GAMING, button: Home, button: GameNight, button: My Stuff, button: Remote Play NEW, button: Sign In, button: Navigate to search, button: Click to login, button: Letter Trek Your word adventure starts now!, button: More Info, button: SONIC X SHADOW GENERATIONS Available now, button: Sonic Mania Plus Race through all-new original Zones and updated Classics, button: Garfield Kart 2 - All You Can Drift Ready to race against a real heavyweight?, button: Centipede Swarm One centipede becomes many. Your nightmare begins now., button: Go to slide 1, button: Go to slide 2, button: Go to slide 3, button: Go to slide 4, button: Go to slide 5, button: Go to slide 6, link: Navigate to home, link: Navigate to gamenight, link: Navigate to remote-play, button: SONIC X SHADOW GENERATIONS, 2 / 10, Top New Games, button: Star Wars Outlaws, 4 / 10, Top New Games, button: Wobbly Life, 5 / 10, Top New Games, button: Goat Simulator 3, 7 / 10, Top New Games, button: The Game of Life 2, 8 / 10, Top New Games, button: Hogwarts Legacy, 9 / 10, Top New Games, button: Bowling Mayhem, 10 / 10, Top New Games, button: Right Caret, button: SONIC X SHADOW GENERATIONS, 1 / 5, Recently Added, button: Space Metal Mania, 3 / 5, Recently Added, button: Cranium Planet, 4 / 5, Recently Added, button: Bowling Mayhem, 5 / 5, Recently Added, link: Leave feedback, link: Discover, link: Download Luna, link: Luna Controller, link: Compatible Controllers, link: Compatible Devices, link: Claim Games, link: Getting Started, link: Device Troubleshooting, link: Network Issues, link: Help and Customer Service, link: Parental Controls, link: Language Settings, link: Payment Settings, link: Manage Subscriptions, link: Instagram, link: Facebook, link: X (formerly Twitter), link: TikTok, link: Reddit, link: Amazon Luna Terms of Use, link: Amazon Luna Legal Notices, link: Amazon Conditions of Use, link: Amazon Privacy Notice, link: Visit Luna home page and landmarks banner, main. (VERIFIED; accessed 2026-10-14T04:00:33.498Z).
