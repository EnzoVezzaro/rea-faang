---
name: apple-macos
description: "Evidence-aware build skill for macOS (apple-macos); investigate, assess reuse, implement scoped behavior and verify."
---

# macOS — implementation skill (`apple-macos`)

> **Research status:** pending. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **macOS**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **macOS** (`apple-macos`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **macOS** / `apple-macos` | Product catalog |
| Company / category | Apple / `operating_system` / `operating_system` | Product catalog |
| Official website / docs | [https://www.apple.com/macos/](https://www.apple.com/macos/) / Not recorded | URL lead; compiler does not fetch source |
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
| `APPLE-MACOS-CAP-753C3471` | Desktop OS with a Unix foundation | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-MACOS-CAP-4FB40898` | Native app framework (Cocoa/AppKit) | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-MACOS-CAP-0C75578F` | Tight hardware integration and gatekeeping | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Play Explore what’s new for macOS gallery`, `button: Previous Item, Siri AI gallery`, `button: Next Item, Siri AI gallery`, `button: Previous Item, Apple Intelligence gallery`, `button: Next Item, Apple Intelligence gallery`, `button: Previous Item, child safety gallery`, `button: Next Item, child safety gallery`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Overview`, `link: iOS`, `link: macOS`, `link: iPadOS`, `link: watchOS`, `link: visionOS`, `link: Apple Intelligence`, `link: Footnote 1`, `link: Footnote 2`, `link: Footnote 3`, `link: Learn more, child safety`, `link: Footnote 4`, `link: Footnote 5`, `button: Previous Item, OS improvements gallery`, `button: Next Item, OS improvements gallery`, `link: Footnote 6`, `link: Explore Mac`, `link: MacBook Neo (2026)`, `link: MacBook Air with Apple silicon (2020 and later)`, `link: MacBook Pro with Apple silicon (2020 and later)`, `link: iMac with Apple silicon (2021 and later)`, `link: Mac mini with Apple silicon (2020 and later)`, `link: Mac Studio (2022 and later)`, `link: Learn more about developing for macOS`, `link: apple.com/apple-intelligence`, `link: Operating Systems`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Desktop OS with a Unix foundation:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Native app framework (Cocoa/AppKit):** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Tight hardware integration and gatekeeping:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `navigation: Local`, `main`, `contentinfo: Apple Footer`, `region: Footnotes`, `navigation: Breadcrumbs`, `navigation: Apple Directory` | Full IA/routes/authenticated navigation |
| Views/headings | `macOS 27 Golden Gate`, `Introducing Siri AI. Truly helpful. Truly yours.`, `Explore what’s new for macOS 27.`, `Siri AI on Mac`, `Just ask Siri AI.`, `Siri understands your personal context.`, `Take action in more apps.`, `Tap into broad world knowledge.`, `Introducing the Siri app.`, `Visual Intelligence with Siri on Mac.`, `Write with Siri virtually anywhere you type.`, `Customize how Siri sounds.`, `Apple Intelligence in apps`, `Safari works smarter for you.`, `Fix passwords with a click.`, `Next-level intelligent photo editing.`, `Express more with Image Playground.`, `Describe a shortcut.`, `Child Safety`, `Approve new websites.`, `Help them communicate safely.`, `Time Allowances and Schedules.`, `Intuitive, easy-to-use controls.`, `OS improvements`, `Design refinements.` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Play Explore what’s new for macOS gallery`, `button: Previous Item, Siri AI gallery`, `button: Next Item, Siri AI gallery`, `button: Previous Item, Apple Intelligence gallery`, `button: Next Item, Apple Intelligence gallery`, `button: Previous Item, child safety gallery`, `button: Next Item, child safety gallery`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Overview`, `link: iOS`, `link: macOS`, `link: iPadOS`, `link: watchOS`, `link: visionOS`, `link: Apple Intelligence`, `link: Footnote 1`, `link: Footnote 2`, `link: Footnote 3`, `link: Learn more, child safety`, `link: Footnote 4`, `link: Footnote 5`, `button: Previous Item, OS improvements gallery`, `button: Next Item, OS improvements gallery`, `link: Footnote 6`, `link: Explore Mac`, `link: MacBook Neo (2026)`, `link: MacBook Air with Apple silicon (2020 and later)`, `link: MacBook Pro with Apple silicon (2020 and later)`, `link: iMac with Apple silicon (2021 and later)`, `link: Mac mini with Apple silicon (2020 and later)`, `link: Mac Studio (2022 and later)`, `link: Learn more about developing for macOS`, `link: apple.com/apple-intelligence`, `link: Operating Systems`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](/)`, `[Store](/us/shop/goto/store)`, `[Mac](/mac/)`, `[iPad](/ipad/)`, `[iPhone](/iphone/)`, `[Watch](/watch/)`, `[Vision](/apple-vision-pro/)`, `[AirPods](/airpods/)`, `[Home](/home/)`, `[Entertainment](/entertainment/)`, `[Accessories](/us/shop/goto/buy_accessories)`, `[Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)`, `[Overview](/os/?version=no-hero)`, `[iOS](/os/ios/?version=no-hero)`, `[iPadOS](/os/ipados/?version=no-hero)`, `[watchOS](/os/watchos/?version=no-hero)`, `[visionOS](/os/visionos/?version=no-hero)`, `[Apple Intelligence](/apple-intelligence/)`, `[Footnote 1](#footnote-1)`, `[Footnote 2](#footnote-2)`, `[Footnote 3](#footnote-3)`, `[Learn more, child safety](/child-safety/)`, `[Footnote 4](#footnote-4)`, `[Footnote 5](#footnote-5)`, `[Footnote 6](#footnote-6)`, `[Explore Mac](/mac/)`, `[MacBook Neo (2026)](/macbook-neo/)`, `[MacBook Air with Apple silicon (2020 and later)](/macbook-air/)`, `[MacBook Pro with Apple silicon (2020 and later)](/macbook-pro/)`, `[iMac with Apple silicon (2021 and later)](/imac/)`, `[Mac mini with Apple silicon (2020 and later)](/mac-mini/)`, `[Mac Studio (2022 and later)](/mac-studio/)`, `[Learn more about developing for macOS](https://developer.apple.com/macos/)`, `[apple.com/apple-intelligence](/apple-intelligence/)`, `[Operating Systems](/os/)`, `[AirTag](/airtag/)`, `[Gift Cards](/us/shop/goto/giftcards)`, `[Wallet](/wallet/)`, `[Apple Card](/apple-card/)`, `[Apple Pay](/apple-pay/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-753C3471 — Desktop OS with a Unix foundation
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-753C3471`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-MACOS-CAP-753C3471` → `REQ-FUNC-753C3471` → `TEST-FUNC-753C3471`.

### REQ-FUNC-4FB40898 — Native app framework (Cocoa/AppKit)
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-4FB40898`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-MACOS-CAP-4FB40898` → `REQ-FUNC-4FB40898` → `TEST-FUNC-4FB40898`.

### REQ-FUNC-0C75578F — Tight hardware integration and gatekeeping
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-0C75578F`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-MACOS-CAP-0C75578F` → `REQ-FUNC-0C75578F` → `TEST-FUNC-0C75578F`.

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
| [Linux distributions (Ubuntu, Fedora, elementary)](https://european-alternatives.eu/alternative-to/macos) | Not recorded | GPL / mixed (unverified) | General-purpose open desktop operating systems. | Different platform; no native macOS app support. | Proposed evaluation lead; no verified foundation |
| [FreeBSD](https://www.freebsd.org/) | Not recorded | BSD-2-Clause (unverified) | A Unix desktop/server OS sharing macOS lineage ideas. | Not a macOS replacement. | Proposed evaluation lead; no verified foundation |
| [Darwin](https://opensource.apple.com/) | Not recorded | APSL / BSD (unverified) | macOS’s open-source core layer. | Core only; the desktop is closed. | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-753C3471** → `REQ-FUNC-753C3471`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-4FB40898** → `REQ-FUNC-4FB40898`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-0C75578F** → `REQ-FUNC-0C75578F`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-753C3471, REQ-FUNC-4FB40898, REQ-FUNC-0C75578F
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-753C3471, REQ-FUNC-4FB40898, REQ-FUNC-0C75578F
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
- **Completion:** Trace: REQ-FUNC-753C3471, REQ-FUNC-4FB40898, REQ-FUNC-0C75578F; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.apple.com/macos/) | Not recorded | macOS is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_5be5899a66e9c2e41480b1cf7fed8deddff816f47b3e6794b6e058bb015e22f6` | macOS Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.apple.com/os/macos/) | 2026-10-13T18:57:57.261Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Play Explore what’s new for macOS gallery, button: Previous Item, Siri AI gallery, button: Next Item, Siri AI gallery, button: Previous Item, Apple Intelligence gallery, button: Next Item, Apple Intelligence gallery, button: Previous Item, child safety gallery, button: Next Item, child safety gallery, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Overview, link: iOS, link: macOS, link: iPadOS, link: watchOS, link: visionOS, link: Apple Intelligence, link: Footnote 1, link: Footnote 2, link: Footnote 3, link: Learn more, child safety, link: Footnote 4, link: Footnote 5, button: Previous Item, OS improvements gallery, button: Next Item, OS improvements gallery, link: Footnote 6, link: Explore Mac, link: MacBook Neo (2026), link: MacBook Air with Apple silicon (2020 and later), link: MacBook Pro with Apple silicon (2020 and later), link: iMac with Apple silicon (2021 and later), link: Mac mini with Apple silicon (2020 and later), link: Mac Studio (2022 and later), link: Learn more about developing for macOS, link: apple.com/apple-intelligence, link: Operating Systems, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-macos`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

macOS is Apple's desktop operating system for Mac computers. It provides a Unix-based foundation with a proprietary graphical interface (Aqua), deep integration with Apple's ecosystem (iCloud, Continuity, AirDrop), and a curated software distribution model through the Mac App Store. It is known for its focus on user experience, creative workflows, and developer tooling.

# 2. Product identity and ownership

- **Official name:** macOS
- **Company and business unit:** Apple Inc.
- **Parent organization:** Apple Inc.
- **Original launch date:** 2001 (Mac OS X 10.0); lineage from NeXTSTEP (1989)
- **Current lifecycle status:** active
- **Previous names:** Mac OS X, OS X
- **Acquisitions or ownership changes:** NeXT acquisition (1997) brought NeXTSTEP foundation
- **Related products:** iOS, iPadOS, watchOS, tvOS, visionOS, Xcode, Safari, iCloud
- **Official website:** https://www.apple.com/macos/
- **Official documentation:** https://developer.apple.com/documentation/macos

# 3. Product capabilities

- **Aqua interface:** Window management, Dock, Menu Bar, Mission Control, Spaces
- **File system:** APFS (Apple File System) with snapshots, encryption, cloning
- **Unix foundation:** POSIX compliance, Bash/Zsh, standard utilities
- **Security:** Gatekeeper, System Integrity Protection (SIP), FileVault, T2/Secure Enclave integration
- **App distribution:** Mac App Store, notarization, Developer ID
- **Ecosystem integration:** iCloud Drive, Continuity (Handoff, Universal Control, AirDrop, Sidecar), iMessage, FaceTime
- **Creative pro apps:** Final Cut Pro, Logic Pro, Photos, Preview, QuickTime
- **Developer tools:** Xcode, Instruments, Swift, LLVM, Command Line Tools
- **Virtualization:** Virtualization framework, Rosetta 2 (Intel translation)
- **Accessibility:** VoiceOver, Switch Control, Voice Control, Zoom, Display accommodations
- **Focus modes, Shortcuts, Stage Manager, Widgets**
- **Metal graphics API, Core ML, Accelerate framework**

# 4. Technical architecture

- **XNU kernel:** Hybrid kernel (Mach microkernel + BSD subsystem + I/O Kit)
- **User space:** Darwin open-source core + proprietary frameworks (AppKit, Foundation, SwiftUI, etc.)
- **Driver model:** I/O Kit (C++), DriverKit (Swift), Kernel Extensions (deprecated)
- **Graphics:** Metal (low-level), Core Animation, Core Image
- **Audio:** Core Audio (low-latency)
- **Package format:** .app bundles, .pkg installers, .dmg disk images
- **Update mechanism:** Software Update (system), Mac App Store (apps), notarization tickets

# 5. User workflows

Users interact through Finder (file management), Dock/Launchpad (app launching), System Settings (configuration), and applications. Key workflows: window management (Mission Control, Stage Manager), file operations, cross-device continuity (clipboard, calls, AirDrop), development (Xcode, Terminal), creative work (photo/video/audio editing).

# 6. Pricing and access

Free updates for supported Mac hardware. Mac hardware required (no official non-Apple hardware support). Mac App Store takes 15-30% commission on paid apps and in-app purchases.

# 7. API and integration surface

- **AppKit/UIKit/SwiftUI:** UI frameworks
- **Foundation:** Core data types, networking, concurrency
- **Core Data, CloudKit:** Persistence and sync
- **Metal, Core Animation, Core Image:** Graphics
- **Core Audio, AVFoundation:** Media
- **Network, NetworkExtension:** Networking
- **Security, CryptoTokenKit:** Security
- **Virtualization, Hypervisor:** Virtualization
- **XPC, Distributed Objects:** IPC
- **Command line:** Standard Unix + macOS-specific tools (mdutil, xattr, codesign, etc.)

# 8. Existing open-source alternatives

- **Linux distributions:** Ubuntu, Fedora, Arch, NixOS, Asahi Linux (Apple Silicon)
- **Desktop environments:** GNOME, KDE Plasma, COSMIC, Hyprland
- **Window managers:** i3, sway, yabai (macOS-specific tiling)
- **Hackintosh:** Non-Apple hardware running macOS (unsupported, legal gray area)
- **Darling:** macOS binary compatibility layer on Linux (experimental)
- **PureDarwin:** Open-source Darwin core (inactive)
- **No open-source alternative provides macOS's proprietary frameworks, App Store ecosystem, or Apple Silicon optimization**

# 9. Alternative comparison

Linux offers the closest functional alternative for developer and server workloads. Asahi Linux brings Linux to Apple Silicon. For creative workflows, Linux lacks native equivalents to Final Cut Pro, Logic Pro, and the ColorSync color management system. Hackintosh is unstable and unsupported. Darling cannot run GUI apps.

# 10. Missing capabilities and opportunity analysis

Proprietary frameworks (AppKit, SwiftUI, Metal, Core Audio), Apple Silicon optimization, iCloud/Continuity integration, notarization/App Store distribution, and pro creative apps are the primary gaps. An open alternative could focus on a polished Linux desktop with creative tooling.

# 11. RAE implementation strategy

Not feasible to replicate macOS. Instead, contribute to Asahi Linux for Apple Silicon support, improve Linux desktop experience (COSMIC, GNOME), and develop cross-platform creative tools (DaVinci Resolve, Blender, Ardour, Krita). Focus on workflow parity, not OS replication.

# 12. Security, privacy, and compliance

macOS enforces code signing, sandboxing, SIP, and hardware-rooted trust. Open alternatives rely on Linux kernel security (LSM, seccomp, namespaces), Flatpak/snap sandboxing, and secure boot. No direct equivalent to Apple's hardware-software integration.

# 13. Sources and evidence

- https://www.apple.com/macos/ (product page)
- https://developer.apple.com/documentation/macos (documentation)
- https://opensource.apple.com/ (Darwin source)
- https://asahilinux.org/ (Apple Silicon Linux)
- https://www.freedesktop.org/ (Linux desktop standards)

# 14. Open questions

- Can a Linux desktop achieve macOS-level fit and finish for creative work?
- What is the path for Apple Silicon GPU acceleration in open drivers?
- How to replicate Continuity features without Apple's infrastructure?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Linux is the only viable open alternative. Asahi Linux makes it run on Apple hardware. The gap is in proprietary apps, ecosystem integration, and Apple Silicon GPU compute.

---

# 17. RAE implementation strategy (continued)

Support and improve Asahi Linux. Build cross-platform creative apps. Develop open Continuity-like protocols (KDE Connect, GSConnect). Accept that OS-level replication is not the goal.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-macos` and inspect canonical identity with `npx rae-faang products show apple-macos --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-macos --out ./apple-macos.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-macos --out ./apple-macos-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-macos`).
- Dossier: [research/companies/apple/products/apple-macos.md](../../../research/companies/apple/products/apple-macos.md).
- REA capture: [catalog/rea/apple/apple-macos.md](../../rea/apple/apple-macos.md) (2026-10-13T18:57:57.261Z); raw record: [catalog/rea/evidence/apple-macos.json](../../rea/evidence/apple-macos.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.apple.com/macos/) — macOS is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [macOS Public web-surface observation (REA)](https://www.apple.com/os/macos/) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Play Explore what’s new for macOS gallery, button: Previous Item, Siri AI gallery, button: Next Item, Siri AI gallery, button: Previous Item, Apple Intelligence gallery, button: Next Item, Apple Intelligence gallery, button: Previous Item, child safety gallery, button: Next Item, child safety gallery, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Overview, link: iOS, link: macOS, link: iPadOS, link: watchOS, link: visionOS, link: Apple Intelligence, link: Footnote 1, link: Footnote 2, link: Footnote 3, link: Learn more, child safety, link: Footnote 4, link: Footnote 5, button: Previous Item, OS improvements gallery, button: Next Item, OS improvements gallery, link: Footnote 6, link: Explore Mac, link: MacBook Neo (2026), link: MacBook Air with Apple silicon (2020 and later), link: MacBook Pro with Apple silicon (2020 and later), link: iMac with Apple silicon (2021 and later), link: Mac mini with Apple silicon (2020 and later), link: Mac Studio (2022 and later), link: Learn more about developing for macOS, link: apple.com/apple-intelligence, link: Operating Systems, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. (VERIFIED; accessed 2026-10-13T18:57:57.261Z).
