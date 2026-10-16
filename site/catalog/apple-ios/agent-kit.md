---
name: apple-ios
description: "Evidence-aware build skill for iOS (apple-ios); investigate, assess reuse, implement scoped behavior and verify."
---

# iOS — implementation skill (`apple-ios`)

> **Research status:** pending. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **iOS**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **iOS** (`apple-ios`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **iOS** / `apple-ios` | Product catalog |
| Company / category | Apple / `operating_system` / `operating_system` | Product catalog |
| Official website / docs | [https://www.apple.com/ios/](https://www.apple.com/ios/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **operating_system** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `APPLE-IOS-CAP-4893D369` | Mobile OS runtime and app framework | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-IOS-CAP-C11BE6D2` | App Store distribution and sandbox | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-IOS-CAP-461D2FD2` | Deep hardware/software integration | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Play Explore what's new for iOS 27 gallery`, `button: Previous item, Siri AI gallery`, `button: Next item, Siri AI gallery`, `button: Previous item, Apple Intelligence Gallery`, `button: Next item, Apple Intelligence Gallery`, `button: Previous item, Child safety Gallery`, `button: Next item, Child safety Gallery`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Overview`, `link: iOS`, `link: macOS`, `link: iPadOS`, `link: watchOS`, `link: visionOS`, `link: Apple Intelligence`, `link: Footnote 1`, `link: Footnote 2`, `link: Footnote 3`, `link: Footnote 4`, `link: Learn more, Child Safety`, `link: Footnote 5`, `link: Footnote 6`, `link: Footnote 7`, `link: Footnote 8`, `link: Footnote 9`, `link: Footnote 10`, `button: Previous item, OS improvements Gallery`, `button: Next item, OS improvements Gallery`, `link: Footnote 11`, `link: Footnote 12`, `link: Footnote 13`, `link: Footnote 14`, `link: Footnote 15`, `link: Explore iPhone`, `link: iPhone Duo`, `link: iPhone 18 Pro Max`, `link: iPhone 18 Pro`, `link: iPhone Air`, `link: iPhone 17`, `link: iPhone 17e`, `link: Learn more about developing for iOS`, `link: apple.com/apple-intelligence`, `link: Operating Systems`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Mobile OS runtime and app framework:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **App Store distribution and sandbox:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Deep hardware/software integration:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `navigation: Local`, `main`, `contentinfo: Apple Footer`, `region: Footnotes`, `navigation: Breadcrumbs`, `navigation: Apple Directory` | Full IA/routes/authenticated navigation |
| Views/headings | `iOS 27`, `Introducing Siri AI. Truly helpful. Truly yours.`, `Explore what’s new for iOS 27.`, `Siri AI on iPhone`, `Just ask Siri AI.`, `Siri understands your personal context.`, `Take action in more apps.`, `Tap into broad world knowledge.`, `Introducing the Siri app.`, `Siri mode in Camera.`, `Customize how Siri sounds.`, `Write with Siri virtually anywhere you type.`, `Apple Intelligence in apps`, `Next-level intelligent photo editing.`, `Express more with Image Playground.`, `Get things done with Suggestions.`, `Get relevant information while on a call.`, `Safari works smarter for you.`, `Fix passwords with a tap.`, `Describe a shortcut.`, `Child Safety`, `Set a foundation.`, `Approve new websites.`, `Help them communicate safely.`, `Time Allowances and Schedules.` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Play Explore what's new for iOS 27 gallery`, `button: Previous item, Siri AI gallery`, `button: Next item, Siri AI gallery`, `button: Previous item, Apple Intelligence Gallery`, `button: Next item, Apple Intelligence Gallery`, `button: Previous item, Child safety Gallery`, `button: Next item, Child safety Gallery`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Overview`, `link: iOS`, `link: macOS`, `link: iPadOS`, `link: watchOS`, `link: visionOS`, `link: Apple Intelligence`, `link: Footnote 1`, `link: Footnote 2`, `link: Footnote 3`, `link: Footnote 4`, `link: Learn more, Child Safety`, `link: Footnote 5`, `link: Footnote 6`, `link: Footnote 7`, `link: Footnote 8`, `link: Footnote 9`, `link: Footnote 10`, `button: Previous item, OS improvements Gallery`, `button: Next item, OS improvements Gallery`, `link: Footnote 11`, `link: Footnote 12`, `link: Footnote 13`, `link: Footnote 14`, `link: Footnote 15`, `link: Explore iPhone`, `link: iPhone Duo`, `link: iPhone 18 Pro Max`, `link: iPhone 18 Pro`, `link: iPhone Air`, `link: iPhone 17`, `link: iPhone 17e`, `link: Learn more about developing for iOS`, `link: apple.com/apple-intelligence`, `link: Operating Systems`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](/)`, `[Store](/us/shop/goto/store)`, `[Mac](/mac/)`, `[iPad](/ipad/)`, `[iPhone](/iphone/)`, `[Watch](/watch/)`, `[Vision](/apple-vision-pro/)`, `[AirPods](/airpods/)`, `[Home](/home/)`, `[Entertainment](/entertainment/)`, `[Accessories](/us/shop/goto/buy_accessories)`, `[Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)`, `[Overview](/os/?version=no-hero)`, `[macOS](/os/macos/?version=no-hero)`, `[iPadOS](/os/ipados/?version=no-hero)`, `[watchOS](/os/watchos/?version=no-hero)`, `[visionOS](/os/visionos/?version=no-hero)`, `[Apple Intelligence](/apple-intelligence/)`, `[Footnote 1](#footnote-1)`, `[Footnote 2](#footnote-2)`, `[Footnote 3](#footnote-3)`, `[Footnote 4](#footnote-4)`, `[Learn more, Child Safety](/child-safety/)`, `[Footnote 5](#footnote-5)`, `[Footnote 6](#footnote-6)`, `[Footnote 7](#footnote-7)`, `[Footnote 8](#footnote-8)`, `[Footnote 9](#footnote-9)`, `[Footnote 10](#footnote-10)`, `[Footnote 11](#footnote-11)`, `[Footnote 12](#footnote-12)`, `[Footnote 13](#footnote-13)`, `[Footnote 14](#footnote-14)`, `[Footnote 15](#footnote-15)`, `[Explore iPhone](/iphone/)`, `[iPhone Duo](/iphone-duo/)`, `[iPhone 18 Pro Max](/iphone-18-pro/)`, `[iPhone 18 Pro](/iphone-18-pro/)`, `[iPhone Air](/iphone-air/)`, `[iPhone 17](/iphone-17/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-4893D369 — Mobile OS runtime and app framework
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-4893D369`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-IOS-CAP-4893D369` → `REQ-FUNC-4893D369` → `TEST-FUNC-4893D369`.

### REQ-FUNC-C11BE6D2 — App Store distribution and sandbox
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C11BE6D2`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-IOS-CAP-C11BE6D2` → `REQ-FUNC-C11BE6D2` → `TEST-FUNC-C11BE6D2`.

### REQ-FUNC-461D2FD2 — Deep hardware/software integration
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-461D2FD2`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-IOS-CAP-461D2FD2` → `REQ-FUNC-461D2FD2` → `TEST-FUNC-461D2FD2`.

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
| [postmarketOS](https://postmarketos.org/) | Not recorded | GPL-2.0 (unverified) | A real Linux distribution for phones. | A different OS, not an iOS replacement. | Proposed evaluation lead; no verified foundation |
| [Ubuntu Touch](https://ubports.com/) | Not recorded | GPL-3.0 (unverified) | Touch-oriented Linux for phones. | Different platform and app ecosystem. | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-4893D369** → `REQ-FUNC-4893D369`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C11BE6D2** → `REQ-FUNC-C11BE6D2`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-461D2FD2** → `REQ-FUNC-461D2FD2`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-4893D369, REQ-FUNC-C11BE6D2, REQ-FUNC-461D2FD2
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-4893D369, REQ-FUNC-C11BE6D2, REQ-FUNC-461D2FD2
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
- **Completion:** Trace: REQ-FUNC-4893D369, REQ-FUNC-C11BE6D2, REQ-FUNC-461D2FD2; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.apple.com/ios/) | Not recorded | iOS is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_ce697ef64c03f91b4b8d5c47f8283ad2d5578be7c94ae452ef1b9748eacffc90` | iOS Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.apple.com/os/ios/) | 2026-10-13T18:57:36.254Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Play Explore what's new for iOS 27 gallery, button: Previous item, Siri AI gallery, button: Next item, Siri AI gallery, button: Previous item, Apple Intelligence Gallery, button: Next item, Apple Intelligence Gallery, button: Previous item, Child safety Gallery, button: Next item, Child safety Gallery, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Overview, link: iOS, link: macOS, link: iPadOS, link: watchOS, link: visionOS, link: Apple Intelligence, link: Footnote 1, link: Footnote 2, link: Footnote 3, link: Footnote 4, link: Learn more, Child Safety, link: Footnote 5, link: Footnote 6, link: Footnote 7, link: Footnote 8, link: Footnote 9, link: Footnote 10, button: Previous item, OS improvements Gallery, button: Next item, OS improvements Gallery, link: Footnote 11, link: Footnote 12, link: Footnote 13, link: Footnote 14, link: Footnote 15, link: Explore iPhone, link: iPhone Duo, link: iPhone 18 Pro Max, link: iPhone 18 Pro, link: iPhone Air, link: iPhone 17, link: iPhone 17e, link: Learn more about developing for iOS, link: apple.com/apple-intelligence, link: Operating Systems, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-ios`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

iOS is Apple's mobile operating system, running on iPhone and iPod touch. It is a proprietary closed-source operating system built on Darwin (the open-source foundation) and is the counterpart to macOS for desktop and laptop computing.

# 2. Product identity and ownership

- **Official name:** iOS
- **Company and business unit:** Apple
- **Parent organization:** Apple Inc.
- **Original launch date:** 2007 (original iPhone launch)
- **Current lifecycle status:** active
- **Previous names:** iPhone OS 1 through iOS 17
- **Acquisitions or ownership changes:** None; developed entirely by Apple
- **Related products:** macOS, iPadOS, watchOS, tvOS, tvOS
- **Official website:** https://www.apple.com/ios/
- **Official documentation:** https://developer.apple.com/documentation/ios

# 3. Product capabilities

- Multi-touch interface with gesture recognition
- Springboard home screen with app icons
- Native app sandboxing
- Apple's proprietary APIs (UIKit, Foundation)
- Siri voice assistant
- Apple Pay payments
- HealthKit health data integration
- Core Location and Maps
- Notification Center
- Control Center quick actions
- Camera and photo framework
- Security with Face ID / Touch ID
- Encrypted file system (unless user data protection)
- App Store for software distribution

# 4. Technical architecture

iOS architecture has multiple layers:

- **Core OS layer:** Security, networking, file system
- **Core Services layer:** Foundation, Core Location, Core Data, MapKit
- **Media layer:** Core Animation, OpenGL ES, QuickTime
- **Cocoa Touch layer:** UIKit, Event Kit, Touch ID / Face ID

Darwin (the open-source foundation) provides the kernel (XNU), which is BSD-based Mach microkernel hybrid. The operating system is proprietary; Darwin source code is open source under Apache 2.0 and other licenses.

# 5. User workflows

Primary workflows: app usage, touch gestures, camera capture, notifications, payments, and health data tracking. Essential: touch interface, app launching, notifications. Advanced: gesture shortcuts, automation via Shortcuts, health data aggregation.

# 6. Pricing and access

Free operating system on iPhone hardware. iPhone purchase required. Older iOS versions may not support newer hardware. iOS updates delivered via OTA.

# 7. API and integration surface

- iOS SDK APIs (Objective-C, Swift)
- UIKit framework
- SwiftUI declarative UI framework
- UserNotifications framework
- CoreLocation and MapKit
- HealthKit and HomeKit frameworks
- GameKit and MediaPlayer

# 8. Existing open-source alternatives

- AOSP-based distributions (LineageOS, /e/OS, Replicant) for de-Googled Android
- No direct open-source iOS equivalent; iOS is platform-exclusive to Apple hardware

# 9. Alternative comparison

AOSP-based systems provide the closest open-source mobile OS experience, but they run on ARM hardware generally and lack iOS app compatibility. iOS app binary compatibility is not achievable on non-Apple platforms.

# 10. Missing capabilities and opportunity analysis

No viable open-source alternative to iOS exists. AOSP-based systems are the closest but are architecturally and ecologically different. Building a new mobile OS from scratch is extremely high effort.

# 11. RAE implementation strategy

Not recommended to build a new mobile OS. Focus on de-Googled Android distributions (AOSP) or cross-platform development targeting both iOS and Android.

# 12. Security, privacy, and compliance

Face ID / Touch ID, encrypted file system, app sandboxing, permission model. Apple emphasizes privacy as a differentiating feature. GDPR and CCPA compliance through Apple's privacy controls.

# 13. Sources and evidence

- https://developer.apple.com/documentation/ios/ (documentation)
- https://www.apple.com/ios/ (product page)
- https://en.wikipedia.org/wiki/IOS (reference)

# 14. Open questions

- What aspects of iOS can be independently replicated?
- How does the kernel-darwin interaction work for independent OS development?
- What is the feasibility of iOS app compatibility layers?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

AOSP-based distributions are the closest open-source alternative, but they are architecturally Android, not iOS.

---

# 17. RAE implementation strategy (continued)

Focus on AOSP customization or cross-platform development. Full iOS replication is not feasible.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-ios` and inspect canonical identity with `npx rae-faang products show apple-ios --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-ios --out ./apple-ios.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-ios --out ./apple-ios-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-ios`).
- Dossier: [research/companies/apple/products/apple-ios.md](../../../research/companies/apple/products/apple-ios.md).
- REA capture: [catalog/rea/apple/apple-ios.md](../../rea/apple/apple-ios.md) (2026-10-13T18:57:36.254Z); raw record: [catalog/rea/evidence/apple-ios.json](../../rea/evidence/apple-ios.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.apple.com/ios/) — iOS is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [iOS Public web-surface observation (REA)](https://www.apple.com/os/ios/) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Play Explore what's new for iOS 27 gallery, button: Previous item, Siri AI gallery, button: Next item, Siri AI gallery, button: Previous item, Apple Intelligence Gallery, button: Next item, Apple Intelligence Gallery, button: Previous item, Child safety Gallery, button: Next item, Child safety Gallery, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Overview, link: iOS, link: macOS, link: iPadOS, link: watchOS, link: visionOS, link: Apple Intelligence, link: Footnote 1, link: Footnote 2, link: Footnote 3, link: Footnote 4, link: Learn more, Child Safety, link: Footnote 5, link: Footnote 6, link: Footnote 7, link: Footnote 8, link: Footnote 9, link: Footnote 10, button: Previous item, OS improvements Gallery, button: Next item, OS improvements Gallery, link: Footnote 11, link: Footnote 12, link: Footnote 13, link: Footnote 14, link: Footnote 15, link: Explore iPhone, link: iPhone Duo, link: iPhone 18 Pro Max, link: iPhone 18 Pro, link: iPhone Air, link: iPhone 17, link: iPhone 17e, link: Learn more about developing for iOS, link: apple.com/apple-intelligence, link: Operating Systems, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. (VERIFIED; accessed 2026-10-13T18:57:36.254Z).
