---
name: apple-pages
description: "Evidence-aware build skill for Pages (apple-pages); investigate, assess reuse, implement scoped behavior and verify."
---

# Pages — implementation skill (`apple-pages`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Pages**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Pages** (`apple-pages`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Pages** / `apple-pages` | Product catalog |
| Company / category | Apple / `productivity_application` / `productivity` | Product catalog |
| Official website / docs | [https://www.apple.com/pages/](https://www.apple.com/pages/) / Not recorded | URL lead; compiler does not fetch source |
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
| `APPLE-PAGES-CAP-2E9FF279` | Word processing and page layout | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-PAGES-CAP-D94820E4` | Word/docx import and export | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-PAGES-CAP-DA98103E` | Templates, shapes, media placement | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search Support`, `button: Shopping Bag`, `button: Submit`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Get started`, `link: Draw, annotate, and use Scribble`, `link: Create a table of contents`, `link: Start the process`, `link: Explore Apple Creator Studio `, `link: Pages for iCloud`, `textbox: Search Support`, `link: Ask or search now`, `link: Download the Apple Support app`, `link: iPhone Support`, `link: Mac Support`, `link: iPad Support`, `link: Watch Support`, `link: Apple Vision Pro Support`, `link: AirPods Support`, `link: TV Support`, `link: Support Site Map`, `link: Apple Repair Options`, `link: Service and Repair Information`, `link: AppleCare Products`, `link: Hardware Warranties`, `link: Software License Agreements`, `link: Complimentary Support`, `link: My Support`, `link: Product Documentation`, `link: Apple Support Videos`, `link: Accessibility`, `link: Contact Us`, `link: Support app`, `link: Apple Communities`, `link: United States. Choose your country or region`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Site Map`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Word processing and page layout:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Word/docx import and export:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Templates, shapes, media placement:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `main`, `contentinfo: Apple Footer`, `navigation: Breadcrumbs`, `navigation: Apple Directory` | Full IA/routes/authenticated navigation |
| Views/headings | `Pages Support`, `Set up your document`, `Mark up your document`, `Navigate your document`, `Publish your book`, `Apple Creator Studio`, `Resources`, `User Guides`, `Pages for iCloud`, `Search for more topics`, `Apple Communities`, `Still need help?`, `Support app`, `Apple Footer`, `Product Support`, `Service and Repair`, `Connect` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search Support`, `button: Shopping Bag`, `button: Submit`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Get started`, `link: Draw, annotate, and use Scribble`, `link: Create a table of contents`, `link: Start the process`, `link: Explore Apple Creator Studio `, `link: Pages for iCloud`, `textbox: Search Support`, `link: Ask or search now`, `link: Download the Apple Support app`, `link: iPhone Support`, `link: Mac Support`, `link: iPad Support`, `link: Watch Support`, `link: Apple Vision Pro Support`, `link: AirPods Support`, `link: TV Support`, `link: Support Site Map`, `link: Apple Repair Options`, `link: Service and Repair Information`, `link: AppleCare Products`, `link: Hardware Warranties`, `link: Software License Agreements`, `link: Complimentary Support`, `link: My Support`, `link: Product Documentation`, `link: Apple Support Videos`, `link: Accessibility`, `link: Contact Us`, `link: Support app`, `link: Apple Communities`, `link: United States. Choose your country or region`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Site Map` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](https://www.apple.com)`, `[Store](https://www.apple.com/us/store)`, `[Mac](https://www.apple.com/mac/)`, `[iPad](https://www.apple.com/ipad/)`, `[iPhone](https://www.apple.com/iphone/)`, `[Watch](https://www.apple.com/watch/)`, `[Vision](https://www.apple.com/apple-vision-pro/)`, `[AirPods](https://www.apple.com/airpods/)`, `[Home](https://www.apple.com/home/)`, `[Entertainment](https://www.apple.com/entertainment/)`, `[Accessories](https://www.apple.com/us/shop/goto/buy_accessories)`, `[Support](/)`, `[Get started](/en-us/HT206184)`, `[Draw, annotate, and use Scribble](/en-us/HT208459)`, `[Create a table of contents](/en-us/guide/pages/table-of-contents-tan5b8c588d6/mac)`, `[Start the process](/en-us/108365)`, `[Mac](/en-us/guide/pages/tan4b3ad0ce2/mac)`, `[iPad](/en-us/guide/pages-ipad/tan4b3ad0ce2/ipados)`, `[iPhone](/en-us/guide/pages-iphone/tan4b3ad0ce2/ios)`, `[Explore Apple Creator Studio ](/en-us/125029)`, `[Mac](/en-us/guide/pages)`, `[iPad](/en-us/guide/pages-ipad)`, `[iPhone](/en-us/guide/pages-iphone)`, `[Pages for iCloud](/en-us/guide/pages-icloud)`, `[Ask or search now](https://discussions.apple.com/community/applications-services)`, `[Get started](https://getsupport.apple.com/?caller=psp)`, `[Download the Apple Support app](https://apps.apple.com/us/app/apple-support/id1130498044?pt=2003&ct=support.pages&mt=8&l=en)`, `[iPhone Support](/iphone)`, `[Mac Support](/mac)`, `[iPad Support](/ipad)`, `[Watch Support](/watch)`, `[Apple Vision Pro Support](/apple-vision-pro)`, `[AirPods Support](/airpods)`, `[TV Support](/tv)`, `[Support Site Map](/sitemap)`, `[Apple Repair Options](/repair)`, `[Service and Repair Information](/repair-products)`, `[AppleCare Products](http://www.apple.com/support/products/)`, `[Hardware Warranties](https://www.apple.com/legal/warranty/)`, `[Software License Agreements](https://www.apple.com/legal/sla/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-2E9FF279 — Word processing and page layout
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2E9FF279`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-PAGES-CAP-2E9FF279` → `REQ-FUNC-2E9FF279` → `TEST-FUNC-2E9FF279`.

### REQ-FUNC-D94820E4 — Word/docx import and export
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D94820E4`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-PAGES-CAP-D94820E4` → `REQ-FUNC-D94820E4` → `TEST-FUNC-D94820E4`.

### REQ-FUNC-DA98103E — Templates, shapes, media placement
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-DA98103E`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-PAGES-CAP-DA98103E` → `REQ-FUNC-DA98103E` → `TEST-FUNC-DA98103E`.

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
| [LibreOffice Writer](https://www.libreoffice.org/) | Not recorded | MPL-2.0 (unverified) | Full word processor with strong format support. | The main open replacement. | Proposed evaluation lead; no verified foundation |
| [OnlyOffice Docs](https://www.onlyoffice.com/) | Not recorded | AGPL-3.0 (unverified) | Collaborative word processing. | Strong MS-format fidelity. | Proposed evaluation lead; no verified foundation |
| [Calligra Words](https://calligra.org/) | Not recorded | GPL-2.0 (unverified) | KDE word processor with layout features. | Alternative in the KDE stack. | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-2E9FF279** → `REQ-FUNC-2E9FF279`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-D94820E4** → `REQ-FUNC-D94820E4`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-DA98103E** → `REQ-FUNC-DA98103E`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-2E9FF279, REQ-FUNC-D94820E4, REQ-FUNC-DA98103E
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-2E9FF279, REQ-FUNC-D94820E4, REQ-FUNC-DA98103E
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
- **Completion:** Trace: REQ-FUNC-2E9FF279, REQ-FUNC-D94820E4, REQ-FUNC-DA98103E; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.apple.com/pages/) | Not recorded | Pages is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_2f50324bbf5cb3d093423deac83de14301c8132820cd65d38e36d02602f22ccc` | Pages Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://support.apple.com/pages) | 2026-10-13T18:58:09.359Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search Support, button: Shopping Bag, button: Submit, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Get started, link: Draw, annotate, and use Scribble, link: Create a table of contents, link: Start the process, link: Explore Apple Creator Studio , link: Pages for iCloud, textbox: Search Support, link: Ask or search now, link: Download the Apple Support app, link: iPhone Support, link: Mac Support, link: iPad Support, link: Watch Support, link: Apple Vision Pro Support, link: AirPods Support, link: TV Support, link: Support Site Map, link: Apple Repair Options, link: Service and Repair Information, link: AppleCare Products, link: Hardware Warranties, link: Software License Agreements, link: Complimentary Support, link: My Support, link: Product Documentation, link: Apple Support Videos, link: Accessibility, link: Contact Us, link: Support app, link: Apple Communities, link: United States. Choose your country or region, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Site Map and landmarks navigation: Global, main, contentinfo: Apple Footer, navigation: Breadcrumbs, navigation: Apple Directory. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-pages`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Pages is Apple's word processing application, part of the iWork productivity suite. It offers a WYSIWYG document editor with real-time collaboration, templates, and export to PDF, Word, and other formats.

# 2. Product identity and ownership

- **Official name:** Pages
- **Company and business unit:** Apple
- **Parent organization:** Apple Inc.
- **Original launch date:** 2005 (as part of iLife; moved to iWork 2008)
- **Current lifecycle status:** active
- **Previous names:** iWork Pages, Apple Pages
- **Acquisitions or ownership changes:** None; Apple-native application
- **Related products:** Keynote, Numbers, iWork, iCloud
- **Official website:** https://www.apple.com/pages/
- **Official documentation:** https://www.apple.com/pages/support/

# 3. Product capabilities

- WYSIWYG word processing document editing
- Real-time collaboration with other iWork users
- Templates for resumes, reports, letters, and more
- Export to PDF, Word (.docx), EPUB, and Pages '09
- iCloud synchronization across devices
- Dark mode support
- Image, chart, and table insertion
- Text styles, themes, and formatting options

# 4. Technical architecture

Pages is a macOS and iOS native application:

- macOS version built with Swift and AppKit/AppKit
- iOS version built with Swift and UIKit/SwiftUI
- iCloud sync via CloudKit
- Real-time collaboration via iWork Cloud Engine

Document formats and collaboration protocol are partially documented; full internal architecture is proprietary.

# 5. User workflows

Primary workflows: document creation and editing, template usage, collaboration, and export. Essential: document editing, export. Advanced: real-time collaboration, template customization.

# 6. Pricing and access

Free with Apple ID. Included with Apple Devices. iCloud storage may be shared with other iWork and iCloud services.

# 7. API and integration surface

- iWork API (limited; primarily iCloud sync)
- No public REST API for document manipulation
- Automation via AppleScript and Shortcuts
- Export formats: PDF, Word, EPUB

# 8. Existing open-source alternatives

LibreOffice, Microsoft Word, Google Docs, OnlyOffice. No free tool replicates Pages' template system and iCloud synchronization exactly.

# 9. Alternative comparison

Google Docs provides the closest web-based collaboration alternative. LibreOffice provides the closest feature-parity desktop alternative. Neither replicates Pages' template system and iCloud integration.

# 10. Missing capabilities and opportunity analysis

Template system, iCloud synchronization, and real-time collaboration workflow represent gaps. Google Docs and LibreOffice cover basic word processing but not Pages-specific features.

# 11. RAE implementation strategy

Focus on document creation and editing use cases. Google Docs or LibreOffice for compatibility. iCloud synchronization and template system are out of scope.

# 12. Security, privacy, and compliance

Local encryption. No server-side processing by default. iCloud sync subject to Apple's iCloud security and privacy.

# 13. Sources and evidence

- https://www.apple.com/pages/ (product page)
- https://www.apple.com/pages/support/ (support documentation)
- https://github.com/libreoffice/libreoffice (reference)

# 14. Open questions

- What is the template system workflow that Pages users rely on?
- How does iCloud sync conflict resolution work?
- Can offline editing be replicated without iCloud?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Google Docs and LibreOffice cover basic word processing. Pages' template system and iCloud integration are unique.

---

# 17. RAE implementation strategy (continued)

Focus on document editing use cases. Google Docs or LibreOffice for compatibility. iCloud sync and templates are out of scope.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-pages` and inspect canonical identity with `npx rae-faang products show apple-pages --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-pages --out ./apple-pages.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-pages --out ./apple-pages-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-pages`).
- Dossier: [research/companies/apple/products/apple-pages.md](../../../research/companies/apple/products/apple-pages.md).
- REA capture: [catalog/rea/apple/apple-pages.md](../../rea/apple/apple-pages.md) (2026-10-13T18:58:09.359Z); raw record: [catalog/rea/evidence/apple-pages.json](../../rea/evidence/apple-pages.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.apple.com/pages/) — Pages is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Pages Public web-surface observation (REA)](https://support.apple.com/pages) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search Support, button: Shopping Bag, button: Submit, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Get started, link: Draw, annotate, and use Scribble, link: Create a table of contents, link: Start the process, link: Explore Apple Creator Studio , link: Pages for iCloud, textbox: Search Support, link: Ask or search now, link: Download the Apple Support app, link: iPhone Support, link: Mac Support, link: iPad Support, link: Watch Support, link: Apple Vision Pro Support, link: AirPods Support, link: TV Support, link: Support Site Map, link: Apple Repair Options, link: Service and Repair Information, link: AppleCare Products, link: Hardware Warranties, link: Software License Agreements, link: Complimentary Support, link: My Support, link: Product Documentation, link: Apple Support Videos, link: Accessibility, link: Contact Us, link: Support app, link: Apple Communities, link: United States. Choose your country or region, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Site Map and landmarks navigation: Global, main, contentinfo: Apple Footer, navigation: Breadcrumbs, navigation: Apple Directory. (VERIFIED; accessed 2026-10-13T18:58:09.359Z).
