---
name: apple-numbers
description: "Evidence-aware build skill for Numbers (apple-numbers); investigate, assess reuse, implement scoped behavior and verify."
---

# Numbers — implementation skill (`apple-numbers`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Numbers**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Numbers** (`apple-numbers`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Numbers** / `apple-numbers` | Product catalog |
| Company / category | Apple / `productivity_application` / `productivity` | Product catalog |
| Official website / docs | [https://www.apple.com/numbers/](https://www.apple.com/numbers/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **productivity_application** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `APPLE-NUMBERS-CAP-DD3A83D7` | Spreadsheet calculation and formulas | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-NUMBERS-CAP-637BE0B4` | Free-form canvas layout and charts | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-NUMBERS-CAP-A7DA9A13` | Excel/xlsx import and export | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search Support`, `button: Shopping Bag`, `button: Submit`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Learn how to use formulas and functions`, `link: Learn how to use categories`, `link: Create a custom template`, `link: Explore Apple Creator Studio `, `link: Numbers for iCloud`, `textbox: Search Support`, `link: Ask or search now`, `link: Get started`, `link: Download the Apple Support app`, `link: iPhone Support`, `link: Mac Support`, `link: iPad Support`, `link: Watch Support`, `link: Apple Vision Pro Support`, `link: AirPods Support`, `link: TV Support`, `link: Support Site Map`, `link: Apple Repair Options`, `link: Service and Repair Information`, `link: AppleCare Products`, `link: Hardware Warranties`, `link: Software License Agreements`, `link: Complimentary Support`, `link: My Support`, `link: Product Documentation`, `link: Apple Support Videos`, `link: Accessibility`, `link: Contact Us`, `link: Support app`, `link: Apple Communities`, `link: United States. Choose your country or region`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Site Map`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Spreadsheet calculation and formulas:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Free-form canvas layout and charts:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Excel/xlsx import and export:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `main`, `contentinfo: Apple Footer`, `navigation: Breadcrumbs`, `navigation: Apple Directory` | Full IA/routes/authenticated navigation |
| Views/headings | `Numbers Support`, `Let Numbers do the math`, `Create and use categories`, `Use and manage templates`, `Convert and share`, `Apple Creator Studio`, `Resources`, `User Guides`, `Numbers for iCloud`, `Search for more topics`, `Apple Communities`, `Still need help?`, `Support app`, `Apple Footer`, `Product Support`, `Service and Repair`, `Connect` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search Support`, `button: Shopping Bag`, `button: Submit`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Learn how to use formulas and functions`, `link: Learn how to use categories`, `link: Create a custom template`, `link: Explore Apple Creator Studio `, `link: Numbers for iCloud`, `textbox: Search Support`, `link: Ask or search now`, `link: Get started`, `link: Download the Apple Support app`, `link: iPhone Support`, `link: Mac Support`, `link: iPad Support`, `link: Watch Support`, `link: Apple Vision Pro Support`, `link: AirPods Support`, `link: TV Support`, `link: Support Site Map`, `link: Apple Repair Options`, `link: Service and Repair Information`, `link: AppleCare Products`, `link: Hardware Warranties`, `link: Software License Agreements`, `link: Complimentary Support`, `link: My Support`, `link: Product Documentation`, `link: Apple Support Videos`, `link: Accessibility`, `link: Contact Us`, `link: Support app`, `link: Apple Communities`, `link: United States. Choose your country or region`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Site Map` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](https://www.apple.com)`, `[Store](https://www.apple.com/us/store)`, `[Mac](https://www.apple.com/mac/)`, `[iPad](https://www.apple.com/ipad/)`, `[iPhone](https://www.apple.com/iphone/)`, `[Watch](https://www.apple.com/watch/)`, `[Vision](https://www.apple.com/apple-vision-pro/)`, `[AirPods](https://www.apple.com/airpods/)`, `[Home](https://www.apple.com/home/)`, `[Entertainment](https://www.apple.com/entertainment/)`, `[Accessories](https://www.apple.com/us/shop/goto/buy_accessories)`, `[Support](/)`, `[Learn how to use formulas and functions](/en-us/guide/functions/welcome/web)`, `[Learn how to use categories](/en-us/guide/numbers/tan7e3e9a388/mac)`, `[Create a custom template](/en-us/guide/numbers-iphone/tan57e4f9f9c/ios)`, `[Mac](/en-us/guide/numbers/send-a-spreadsheet-tan368d49f8b/mac#tan0eb830f5a)`, `[iPad](/en-us/guide/numbers-ipad/send-a-spreadsheet-tan368d49f8b/ipados#taneaaa3f970)`, `[iPhone](/en-us/guide/numbers-iphone/send-a-spreadsheet-tan368d49f8b/ios#taneaaa3f970)`, `[Mac](/en-us/guide/numbers/tan98fadd2e0/mac)`, `[iPad](/en-us/guide/numbers-ipad/tan98fadd2e0/ipados)`, `[iPhone](/en-us/guide/numbers-iphone/tan98fadd2e0/ios)`, `[Explore Apple Creator Studio ](/en-us/125029)`, `[Mac](/en-us/guide/numbers)`, `[iPad](/en-us/guide/numbers-ipad)`, `[iPhone](/en-us/guide/numbers-iphone)`, `[Numbers for iCloud](/en-us/guide/numbers-icloud)`, `[Ask or search now](https://discussions.apple.com/community/applications-services)`, `[Get started](https://getsupport.apple.com/?caller=psp)`, `[Download the Apple Support app](https://apps.apple.com/us/app/apple-support/id1130498044?pt=2003&ct=support.numbers&mt=8&l=en)`, `[iPhone Support](/iphone)`, `[Mac Support](/mac)`, `[iPad Support](/ipad)`, `[Watch Support](/watch)`, `[Apple Vision Pro Support](/apple-vision-pro)`, `[AirPods Support](/airpods)`, `[TV Support](/tv)`, `[Support Site Map](/sitemap)`, `[Apple Repair Options](/repair)`, `[Service and Repair Information](/repair-products)`, `[AppleCare Products](http://www.apple.com/support/products/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-DD3A83D7 — Spreadsheet calculation and formulas
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-DD3A83D7`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-NUMBERS-CAP-DD3A83D7` → `REQ-FUNC-DD3A83D7` → `TEST-FUNC-DD3A83D7`.

### REQ-FUNC-637BE0B4 — Free-form canvas layout and charts
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-637BE0B4`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-NUMBERS-CAP-637BE0B4` → `REQ-FUNC-637BE0B4` → `TEST-FUNC-637BE0B4`.

### REQ-FUNC-A7DA9A13 — Excel/xlsx import and export
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-A7DA9A13`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-NUMBERS-CAP-A7DA9A13` → `REQ-FUNC-A7DA9A13` → `TEST-FUNC-A7DA9A13`.

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
| [LibreOffice Calc](https://www.libreoffice.org/) | Not recorded | MPL-2.0 (unverified) | Feature-rich spreadsheet with wide function coverage. | The main open replacement. | Proposed evaluation lead; no verified foundation |
| [Gnumeric](http://www.gnumeric.org/) | Not recorded | GPL-2.0 (unverified) | Lightweight, accurate spreadsheet. | Strong calculation fidelity. | Proposed evaluation lead; no verified foundation |
| [Calligra Sheets](https://calligra.org/) | Not recorded | GPL-2.0 (unverified) | KDE spreadsheet. | Alternative in the KDE stack. | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-DD3A83D7** → `REQ-FUNC-DD3A83D7`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-637BE0B4** → `REQ-FUNC-637BE0B4`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-A7DA9A13** → `REQ-FUNC-A7DA9A13`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-DD3A83D7, REQ-FUNC-637BE0B4, REQ-FUNC-A7DA9A13
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-DD3A83D7, REQ-FUNC-637BE0B4, REQ-FUNC-A7DA9A13
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
- **Completion:** Trace: REQ-FUNC-DD3A83D7, REQ-FUNC-637BE0B4, REQ-FUNC-A7DA9A13; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.apple.com/numbers/) | Not recorded | Numbers is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_7a2edeb45a7f7ed84725fe2b7bd84fbf67dd4caeafaa7e68a91990220c2a008d` | Numbers Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://support.apple.com/numbers) | 2026-10-13T18:58:03.131Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search Support, button: Shopping Bag, button: Submit, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Learn how to use formulas and functions, link: Learn how to use categories, link: Create a custom template, link: Explore Apple Creator Studio , link: Numbers for iCloud, textbox: Search Support, link: Ask or search now, link: Get started, link: Download the Apple Support app, link: iPhone Support, link: Mac Support, link: iPad Support, link: Watch Support, link: Apple Vision Pro Support, link: AirPods Support, link: TV Support, link: Support Site Map, link: Apple Repair Options, link: Service and Repair Information, link: AppleCare Products, link: Hardware Warranties, link: Software License Agreements, link: Complimentary Support, link: My Support, link: Product Documentation, link: Apple Support Videos, link: Accessibility, link: Contact Us, link: Support app, link: Apple Communities, link: United States. Choose your country or region, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Site Map and landmarks navigation: Global, main, contentinfo: Apple Footer, navigation: Breadcrumbs, navigation: Apple Directory. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-numbers`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Numbers is Apple's spreadsheet application, part of the iWork suite. It distinguishes itself from traditional spreadsheets with a canvas-based approach where tables, charts, and media exist as objects on a free-form canvas rather than a single grid. It emphasizes visual presentation, collaboration, and cross-device sync via iCloud.

# 2. Product identity and ownership

- **Official name:** Numbers
- **Company and business unit:** Apple Inc.
- **Parent organization:** Apple Inc.
- **Original launch date:** 2007 (iWork '08)
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None
- **Related products:** Pages, Keynote, iCloud, iWork for iCloud
- **Official website:** https://www.apple.com/numbers/
- **Official documentation:** https://support.apple.com/numbers

# 3. Product capabilities

- **Canvas-based model:** Multiple tables, charts, images, shapes on a free-form canvas
- **Table features:** Categories (grouping), pivot tables, smart categories, filters, sorting
- **Formulas:** 250+ functions, compatible with Excel formulas, custom functions via JavaScript
- **Charts:** Interactive 2D/3D charts, donut, radar, scatter, mixed charts
- **Data entry:** Forms for data entry on iOS/iPadOS
- **Collaboration:** Real-time co-editing via iCloud, comments, change tracking
- **Import/Export:** Excel (.xlsx), CSV, TSV, Numbers '09, PDF, Excel XML
- **Cross-platform:** macOS, iOS, iPadOS, iCloud web (numbers.icloud.com)
- **Templates:** 30+ built-in templates for budgets, invoices, planners, etc.
- **Apple Pencil support:** Drawing, annotation, handwriting to text (Scribble)
- **Accessibility:** VoiceOver, Dynamic Type, high contrast
- **Shortcuts integration:** Automate workflows

# 4. Technical architecture

- **Document format:** Proprietary package format (.numbers) - ZIP archive with XML (SPX), metadata, preview images
- **iCloud sync:** Document-level sync with conflict resolution
- **Web version:** JavaScript/Canvas-based editor on iCloud.com
- **Formula engine:** Custom calculation engine with Excel compatibility layer
- **Rendering:** Core Graphics, Core Animation, Metal for charts
- **No public SDK or API for programmatic access**

# 5. User workflows

Users create documents from templates or blank canvas, add tables and charts, enter data, apply formulas, style visually, and share via iCloud link or export. Key workflows: budgeting, invoicing, project tracking, grade books, event planning. Advanced: categories for grouping, pivot tables, interactive charts, form-based data entry on iPad.

# 6. Pricing and access

Free with Apple ID on supported devices (Mac, iPhone, iPad) and web. No subscription required. iCloud storage counts against free 5GB tier (paid upgrades available).

# 7. API and integration surface

- **No public API** for document manipulation
- **Shortcuts actions:** Create document, add table, set cell value, get cell value
- **iWork file format:** Reverse-engineered by some tools (libetonyek, numbers-parser)
- **Export automation:** AppleScript (macOS), Shortcuts (iOS/macOS)

# 8. Existing open-source alternatives

- **LibreOffice Calc:** Feature-complete spreadsheet, grid-based, ODF/.xlsx
- **OnlyOffice Spreadsheet:** Web/desktop, Excel-compatible UI, collaborative
- **Collabora Online:** LibreOffice-based web suite
- **EtherCalc:** Web-based, real-time collaborative, minimal features
- **SheetJS (js-xlsx):** Library for reading/writing spreadsheet formats
- **Univer:** React-based spreadsheet with collaborative editing
- **Luckysheet / x-spreadsheet:** Web spreadsheet components
- **No open-source alternative uses the canvas-based multi-table model**

# 9. Alternative comparison

LibreOffice Calc and OnlyOffice are the closest functional equivalents for traditional spreadsheet work. They lack Numbers' canvas model, form-based data entry, and seamless Apple ecosystem integration. Web-based alternatives (Univer, EtherCalc) offer collaboration but not the desktop/iPad experience.

# 10. Missing capabilities and opportunity analysis

Canvas-based multi-table model, form-based data entry on mobile, Apple Pencil integration, iCloud real-time collaboration, and Apple ecosystem integration are unique. An open alternative could adopt the canvas model with ODF/Excel compatibility.

# 11. RAE implementation strategy

Build a canvas-based spreadsheet using web technologies (Canvas/WebGL or DOM) with ODF/.xlsx import-export. Prioritize: multiple tables per sheet, categories/grouping, interactive charts, form view for mobile. Consider Univer or Luckysheet as a base.

# 12. Security, privacy, and compliance

Documents stored in iCloud use Apple's encryption. Local files are unencrypted by default (FileVault protects at rest). Open alternative should support end-to-end encryption for cloud sync, local encryption, and standard spreadsheet security (cell protection, sheet protection).

# 13. Sources and evidence

- https://www.apple.com/numbers/ (product page)
- https://support.apple.com/numbers (user guide)
- https://www.libreoffice.org/ (alternative reference)
- https://github.com/SheetJS/sheetjs (format library)

# 14. Open questions

- Can the canvas model be implemented with good performance on large datasets?
- What is the best approach for Excel formula compatibility?
- How to handle real-time collaboration without a central server (CRDTs)?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

LibreOffice Calc remains the most complete open-source spreadsheet. The canvas model is Numbers' key differentiator; replicating it would require a novel UI approach.

---

# 17. RAE implementation strategy (continued)

Phase 1: Web-based canvas spreadsheet with single-table sheets, ODF import/export. Phase 2: Multi-table canvas, categories, charts. Phase 3: Mobile form view, real-time collaboration (Yjs/Automerge). Phase 4: Native apps via Tauri/Electron.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-numbers` and inspect canonical identity with `npx rae-faang products show apple-numbers --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-numbers --out ./apple-numbers.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-numbers --out ./apple-numbers-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-numbers`).
- Dossier: [research/companies/apple/products/apple-numbers.md](../../../research/companies/apple/products/apple-numbers.md).
- REA capture: [catalog/rea/apple/apple-numbers.md](../../rea/apple/apple-numbers.md) (2026-10-13T18:58:03.131Z); raw record: [catalog/rea/evidence/apple-numbers.json](../../rea/evidence/apple-numbers.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.apple.com/numbers/) — Numbers is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Numbers Public web-surface observation (REA)](https://support.apple.com/numbers) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search Support, button: Shopping Bag, button: Submit, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Learn how to use formulas and functions, link: Learn how to use categories, link: Create a custom template, link: Explore Apple Creator Studio , link: Numbers for iCloud, textbox: Search Support, link: Ask or search now, link: Get started, link: Download the Apple Support app, link: iPhone Support, link: Mac Support, link: iPad Support, link: Watch Support, link: Apple Vision Pro Support, link: AirPods Support, link: TV Support, link: Support Site Map, link: Apple Repair Options, link: Service and Repair Information, link: AppleCare Products, link: Hardware Warranties, link: Software License Agreements, link: Complimentary Support, link: My Support, link: Product Documentation, link: Apple Support Videos, link: Accessibility, link: Contact Us, link: Support app, link: Apple Communities, link: United States. Choose your country or region, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Site Map and landmarks navigation: Global, main, contentinfo: Apple Footer, navigation: Breadcrumbs, navigation: Apple Directory. (VERIFIED; accessed 2026-10-13T18:58:03.131Z).
