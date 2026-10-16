---
name: apple-siri
description: "Evidence-aware build skill for Siri (apple-siri); investigate, assess reuse, implement scoped behavior and verify."
---

# Siri — implementation skill (`apple-siri`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Siri**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Siri** (`apple-siri`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Siri** / `apple-siri` | Product catalog |
| Company / category | Apple / `ai_application` / `voice-assistant` | Product catalog |
| Official website / docs | [https://www.apple.com/siri/](https://www.apple.com/siri/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **ai_application** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `APPLE-SIRI-CAP-AA9CB7C4` | Voice requests on device | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-SIRI-CAP-2175B595` | Home automation control | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-SIRI-CAP-FC1894BC` | App intents | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Play Explore what’s new for Apple Intelligence gallery`, `button: Previous item in Siri AI gallery`, `button: Next item in Siri AI gallery`, `button: Previous item in Visual Intelligence Gallery`, `button: Next item in Visual Intelligence Gallery`, `button: Previous item in photos and images gallery`, `button: Next item in photos and images gallery`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Overview`, `link: iOS`, `link: macOS`, `link: iPadOS`, `link: watchOS`, `link: visionOS`, `link: Apple Intelligence`, `link: Footnote 1`, `link: Footnote 4`, `link: Footnote 5`, `link: Footnote 3`, `link: Footnote 2`, `button: Previous item in Communication Gallery`, `button: Next item in Communication Gallery`, `link: Footnote 6`, `button: Previous item in Productivity Gallery`, `button: Next item in Productivity Gallery`, `link: Footnote 7`, `link: Footnote 8`, `link: Footnote 9`, `link: Footnote 10`, `link: Learn more, iPhone Duo`, `link: View pricing, iPhone Duo`, `link: iPhone 18 Pro`, `link: Learn more, iPhone 18 Pro`, `link: Buy, iPhone 18 Pro`, `link: iPhone Air`, `link: Learn more, iPhone Air`, `link: Buy, iPhone Air`, `link: iPhone 17`, `link: Learn more, iPhone 17`, `link: Buy, iPhone 17`, `link: iPhone 17e`, `link: Learn more, iPhone 17e`, `link: Buy, iPhone 17e`, `link: iPhone 16`, `link: Learn more, iPhone 16`, `link: Buy, iPhone 16`, `button: Previous item in iPhone gallery`, `button: Next item in iPhone gallery`, `link: iPhone Duo (A20 Pro)`, `link: iPhone 18 Pro Max (A20 Pro)`, `link: iPhone 18 Pro (A20 Pro)`, `link: iPhone Air (A19 Pro)`, `link: iPhone 17 (A19)`, `link: iPhone 17e (A19)`, `link: iPad Pro (M1 and later)`, `link: iPad Air (M1 and later)`, `link: iPad mini (A17 Pro)`, `link: Apple Vision Pro (M2 and later)`, `link: MacBook Neo (A18 Pro)`, `link: MacBook Air (M1 and later)`, `link: MacBook Pro (M1 and later)`, `link: iMac (M1 and later)`, `link: Mac mini (M1 and later)`, `link: Mac Studio (M1 Max and later)`, `link: Learn more about developing for Apple Intelligence`, `link: support.apple.com/148587`, `link: support.apple.com/121115`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Voice requests on device:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Home automation control:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **App intents:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `navigation: Local`, `main`, `contentinfo: Apple Footer`, `region: Footnotes`, `navigation: Breadcrumbs`, `navigation: Apple Directory` | Full IA/routes/authenticated navigation |
| Views/headings | `Apple Intelligence and Siri`, `Introducing Siri AI. Truly helpful. Truly yours.`, `Explore what’s new for Apple Intelligence.`, `Siri AI`, `Just ask Siri.`, `Siri understands your personal context.`, `Take action in more apps.`, `Tap into broad world knowledge.`, `Introducing the Siri app.`, `Customize how Siri sounds.`, `Siri AI in CarPlay.`, `Visual Intelligence`, `Siri mode in Camera.`, `New smart actions.`, `Ask Siri about what’s in front of you.`, `Visual Intelligence with Siri on Mac.`, `Visual Intelligence with Siri on iPad.`, `Visual Intelligence with Siri on Apple Vision Pro.`, `Photos and images`, `Next-level intelligent photo editing.`, `Reframe your photo even after it’s taken.`, `Express more with Image Playground.`, `Image Wand.`, `Communication`, `Write with Siri virtually anywhere you type.` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Play Explore what’s new for Apple Intelligence gallery`, `button: Previous item in Siri AI gallery`, `button: Next item in Siri AI gallery`, `button: Previous item in Visual Intelligence Gallery`, `button: Next item in Visual Intelligence Gallery`, `button: Previous item in photos and images gallery`, `button: Next item in photos and images gallery`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Overview`, `link: iOS`, `link: macOS`, `link: iPadOS`, `link: watchOS`, `link: visionOS`, `link: Apple Intelligence`, `link: Footnote 1`, `link: Footnote 4`, `link: Footnote 5`, `link: Footnote 3`, `link: Footnote 2`, `button: Previous item in Communication Gallery`, `button: Next item in Communication Gallery`, `link: Footnote 6`, `button: Previous item in Productivity Gallery`, `button: Next item in Productivity Gallery`, `link: Footnote 7`, `link: Footnote 8`, `link: Footnote 9`, `link: Footnote 10`, `link: Learn more, iPhone Duo`, `link: View pricing, iPhone Duo`, `link: iPhone 18 Pro`, `link: Learn more, iPhone 18 Pro`, `link: Buy, iPhone 18 Pro`, `link: iPhone Air`, `link: Learn more, iPhone Air`, `link: Buy, iPhone Air`, `link: iPhone 17`, `link: Learn more, iPhone 17`, `link: Buy, iPhone 17`, `link: iPhone 17e`, `link: Learn more, iPhone 17e`, `link: Buy, iPhone 17e`, `link: iPhone 16`, `link: Learn more, iPhone 16`, `link: Buy, iPhone 16`, `button: Previous item in iPhone gallery`, `button: Next item in iPhone gallery`, `link: iPhone Duo (A20 Pro)`, `link: iPhone 18 Pro Max (A20 Pro)`, `link: iPhone 18 Pro (A20 Pro)`, `link: iPhone Air (A19 Pro)`, `link: iPhone 17 (A19)`, `link: iPhone 17e (A19)`, `link: iPad Pro (M1 and later)`, `link: iPad Air (M1 and later)`, `link: iPad mini (A17 Pro)`, `link: Apple Vision Pro (M2 and later)`, `link: MacBook Neo (A18 Pro)`, `link: MacBook Air (M1 and later)`, `link: MacBook Pro (M1 and later)`, `link: iMac (M1 and later)`, `link: Mac mini (M1 and later)`, `link: Mac Studio (M1 Max and later)`, `link: Learn more about developing for Apple Intelligence`, `link: support.apple.com/148587`, `link: support.apple.com/121115`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](/)`, `[Store](/us/shop/goto/store)`, `[Mac](/mac/)`, `[iPad](/ipad/)`, `[iPhone](/iphone/)`, `[Watch](/watch/)`, `[Vision](/apple-vision-pro/)`, `[AirPods](/airpods/)`, `[Home](/home/)`, `[Entertainment](/entertainment/)`, `[Accessories](/us/shop/goto/buy_accessories)`, `[Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)`, `[Overview](/os/)`, `[iOS](/os/ios/)`, `[macOS](/os/macos/)`, `[iPadOS](/os/ipados/)`, `[watchOS](/os/watchos/)`, `[visionOS](/os/visionos/)`, `[Footnote 1](#footnote-1)`, `[Footnote 4](#footnote-4)`, `[Footnote 5](#footnote-5)`, `[Footnote 3](#footnote-3)`, `[Footnote 2](#footnote-2)`, `[Footnote 6](#footnote-6)`, `[Footnote 7](#footnote-7)`, `[Footnote 8](#footnote-8)`, `[Footnote 9](#footnote-9)`, `[Footnote 10](#footnote-10)`, `[Learn more, iPhone Duo](/iphone-duo/)`, `[View pricing, iPhone Duo](/us/shop/goto/buy_iphone/iphone_duo)`, `[iPhone 18 Pro](/iphone-18-pro/)`, `[Learn more, iPhone 18 Pro](/iphone-18-pro/)`, `[Buy, iPhone 18 Pro](/us/shop/goto/buy_iphone/iphone_18_pro)`, `[iPhone Air](/iphone-air/)`, `[Learn more, iPhone Air](/iphone-air/)`, `[Buy, iPhone Air](/us/shop/goto/buy_iphone/iphone_air)`, `[iPhone 17](/iphone-17/)`, `[Learn more, iPhone 17](/iphone-17/)`, `[Buy, iPhone 17](/us/shop/goto/buy_iphone/iphone_17)`, `[iPhone 17e](/iphone-17e/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-AA9CB7C4 — Voice requests on device
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-AA9CB7C4`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-SIRI-CAP-AA9CB7C4` → `REQ-FUNC-AA9CB7C4` → `TEST-FUNC-AA9CB7C4`.

### REQ-FUNC-2175B595 — Home automation control
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2175B595`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-SIRI-CAP-2175B595` → `REQ-FUNC-2175B595` → `TEST-FUNC-2175B595`.

### REQ-FUNC-FC1894BC — App intents
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-FC1894BC`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-SIRI-CAP-FC1894BC` → `REQ-FUNC-FC1894BC` → `TEST-FUNC-FC1894BC`.

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
| [OpenVoiceOS](https://openvoiceos.org/) | Not recorded | Apache-2.0 (unverified) | Open-source voice assistant platform (Mycroft successor). | Community-run. | Proposed evaluation lead; no verified foundation |
| [Home Assistant Voice](https://www.home-assistant.io/voice/) | Not recorded | Apache-2.0 (unverified) | Local voice assistant for the smart home. | No limitation recorded | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-AA9CB7C4** → `REQ-FUNC-AA9CB7C4`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-2175B595** → `REQ-FUNC-2175B595`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-FC1894BC** → `REQ-FUNC-FC1894BC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-AA9CB7C4, REQ-FUNC-2175B595, REQ-FUNC-FC1894BC
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-AA9CB7C4, REQ-FUNC-2175B595, REQ-FUNC-FC1894BC
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
- **Completion:** Trace: REQ-FUNC-AA9CB7C4, REQ-FUNC-2175B595, REQ-FUNC-FC1894BC; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.apple.com/siri/) | Not recorded | Siri is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_0aef99b348d75d31267ce1833ad73fd397e5d3f3b7bd90f83f74ee12079f3ebb` | Siri Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.apple.com/apple-intelligence/) | 2026-10-14T03:54:54.870Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Play Explore what’s new for Apple Intelligence gallery, button: Previous item in Siri AI gallery, button: Next item in Siri AI gallery, button: Previous item in Visual Intelligence Gallery, button: Next item in Visual Intelligence Gallery, button: Previous item in photos and images gallery, button: Next item in photos and images gallery, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Overview, link: iOS, link: macOS, link: iPadOS, link: watchOS, link: visionOS, link: Apple Intelligence, link: Footnote 1, link: Footnote 4, link: Footnote 5, link: Footnote 3, link: Footnote 2, button: Previous item in Communication Gallery, button: Next item in Communication Gallery, link: Footnote 6, button: Previous item in Productivity Gallery, button: Next item in Productivity Gallery, link: Footnote 7, link: Footnote 8, link: Footnote 9, link: Footnote 10, link: Learn more, iPhone Duo, link: View pricing, iPhone Duo, link: iPhone 18 Pro, link: Learn more, iPhone 18 Pro, link: Buy, iPhone 18 Pro, link: iPhone Air, link: Learn more, iPhone Air, link: Buy, iPhone Air, link: iPhone 17, link: Learn more, iPhone 17, link: Buy, iPhone 17, link: iPhone 17e, link: Learn more, iPhone 17e, link: Buy, iPhone 17e, link: iPhone 16, link: Learn more, iPhone 16, link: Buy, iPhone 16, button: Previous item in iPhone gallery, button: Next item in iPhone gallery, link: iPhone Duo (A20 Pro), link: iPhone 18 Pro Max (A20 Pro), link: iPhone 18 Pro (A20 Pro), link: iPhone Air (A19 Pro), link: iPhone 17 (A19), link: iPhone 17e (A19), link: iPad Pro (M1 and later), link: iPad Air (M1 and later), link: iPad mini (A17 Pro), link: Apple Vision Pro (M2 and later), link: MacBook Neo (A18 Pro), link: MacBook Air (M1 and later), link: MacBook Pro (M1 and later), link: iMac (M1 and later), link: Mac mini (M1 and later), link: Mac Studio (M1 Max and later), link: Learn more about developing for Apple Intelligence, link: support.apple.com/148587, link: support.apple.com/121115, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-siri`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Siri is Apple's voice assistant, built into iOS, macOS, HomePod and other devices.

---

# 2. Product identity and ownership

- **Official name:** Siri
- **Company and business unit:** apple
- **Current lifecycle status:** active
- **Official website:** https://www.apple.com/siri/

---

# 3. Product capabilities

- Voice requests on device
- Home automation control
- App intents

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

Open-source candidates exist: OpenVoiceOS (Apache-2.0) — Open-source voice assistant platform (Mycroft successor).; Home Assistant Voice (Apache-2.0) — Local voice assistant for the smart home.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Open voice stacks exist (OpenVoiceOS, Home Assistant voice); capability, on-device models and device reach lag Apple.

---

# 10. Missing capabilities and opportunity analysis

Open voice stacks exist (OpenVoiceOS, Home Assistant voice); capability, on-device models and device reach lag Apple.

---

# 11. RAE implementation strategy

Partial. Open assistants exist; capability and integration depth lag.

---

# 12. Security, privacy, and compliance

Not yet researched.

---

# 13. Sources and evidence

- https://openvoiceos.org/
- https://www.home-assistant.io/voice/

---

# 14. Open questions

- Full feature inventory and technical architecture are not yet researched.

---

# 15. Research history

- v1: dossier created; research pending.

---

# 16. Alternative comparison (continued)

Open voice stacks exist (OpenVoiceOS, Home Assistant voice); capability, on-device models and device reach lag Apple.

---

# 17. RAE implementation strategy (continued)

Partial. Open assistants exist; capability and integration depth lag.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-siri` and inspect canonical identity with `npx rae-faang products show apple-siri --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-siri --out ./apple-siri.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-siri --out ./apple-siri-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-siri`).
- Dossier: [research/companies/apple/products/apple-siri.md](../../../research/companies/apple/products/apple-siri.md).
- REA capture: [catalog/rea/apple/apple-siri.md](../../rea/apple/apple-siri.md) (2026-10-14T03:54:54.870Z); raw record: [catalog/rea/evidence/apple-siri.json](../../rea/evidence/apple-siri.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.apple.com/siri/) — Siri is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Siri Public web-surface observation (REA)](https://www.apple.com/apple-intelligence/) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Play Explore what’s new for Apple Intelligence gallery, button: Previous item in Siri AI gallery, button: Next item in Siri AI gallery, button: Previous item in Visual Intelligence Gallery, button: Next item in Visual Intelligence Gallery, button: Previous item in photos and images gallery, button: Next item in photos and images gallery, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Overview, link: iOS, link: macOS, link: iPadOS, link: watchOS, link: visionOS, link: Apple Intelligence, link: Footnote 1, link: Footnote 4, link: Footnote 5, link: Footnote 3, link: Footnote 2, button: Previous item in Communication Gallery, button: Next item in Communication Gallery, link: Footnote 6, button: Previous item in Productivity Gallery, button: Next item in Productivity Gallery, link: Footnote 7, link: Footnote 8, link: Footnote 9, link: Footnote 10, link: Learn more, iPhone Duo, link: View pricing, iPhone Duo, link: iPhone 18 Pro, link: Learn more, iPhone 18 Pro, link: Buy, iPhone 18 Pro, link: iPhone Air, link: Learn more, iPhone Air, link: Buy, iPhone Air, link: iPhone 17, link: Learn more, iPhone 17, link: Buy, iPhone 17, link: iPhone 17e, link: Learn more, iPhone 17e, link: Buy, iPhone 17e, link: iPhone 16, link: Learn more, iPhone 16, link: Buy, iPhone 16, button: Previous item in iPhone gallery, button: Next item in iPhone gallery, link: iPhone Duo (A20 Pro), link: iPhone 18 Pro Max (A20 Pro), link: iPhone 18 Pro (A20 Pro), link: iPhone Air (A19 Pro), link: iPhone 17 (A19), link: iPhone 17e (A19), link: iPad Pro (M1 and later), link: iPad Air (M1 and later), link: iPad mini (A17 Pro), link: Apple Vision Pro (M2 and later), link: MacBook Neo (A18 Pro), link: MacBook Air (M1 and later), link: MacBook Pro (M1 and later), link: iMac (M1 and later), link: Mac mini (M1 and later), link: Mac Studio (M1 Max and later), link: Learn more about developing for Apple Intelligence, link: support.apple.com/148587, link: support.apple.com/121115, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. (VERIFIED; accessed 2026-10-14T03:54:54.870Z).
