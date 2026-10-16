---
name: apple-ipad
description: "Evidence-aware build skill for iPad (apple-ipad); investigate, assess reuse, implement scoped behavior and verify."
---

# iPad — implementation skill (`apple-ipad`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **iPad**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **iPad** (`apple-ipad`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **iPad** / `apple-ipad` | Product catalog |
| Company / category | Apple / `hardware` / `tablet` | Product catalog |
| Official website / docs | [https://www.apple.com/ipad/](https://www.apple.com/ipad/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **hardware** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `APPLE-IPAD-CAP-E1585895` | Tablet hardware with Pencil support | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-IPAD-CAP-5FF00C3F` | iPadOS | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-IPAD-CAP-B3C83EDE` | App ecosystem | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Previous item in Explore the lineup gallery`, `button: Next item in Explore the lineup gallery`, `button: Learn more about Apple Card Monthly Installments`, `button: Learn more about Apple Trade in`, `button: Learn more, education pricing`, `button: Learn more about your new iPad`, `button: Learn more about delivery and pickup options.`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Footnote ◊ symbol`, `link: Learn more, Apple Upgrade`, `link: iPad Pro`, `link: iPad Air`, `link: iPad mini`, `link: Compare iPad models`, `link: Apple Pencil`, `link: Keyboards`, `link: Accessories for iPad`, `link: iPadOS 27`, `link: Shop iPad`, `link: Compare all models`, `link: Learn more, iPad Pro`, `link: Footnote * symbol`, `link: Footnote ◊◊ symbol`, `link: Buy, iPad Pro`, `link: Learn more, iPad Air`, `link: Buy, iPad Air`, `link: Learn more, iPad (A16)`, `link: Buy, iPad (A16)`, `link: Learn more, iPad mini`, `link: Buy, iPad mini`, `link: Shop iPad`, `link: Footnote ◊◊◊ symbol`, `link: Footnote 1`, `link: Footnote ** symbol`, `button: Learn more about engraving your iPad`, `button: Learn more about shopping with a Specialist over video`, `button: Learn more about shopping using Apple Store app`, `button: Previous item in Why Apple gallery`, `button: Next item in Why Apple gallery`, `button: Learn more about iPadOS + Apps`, `button: Learn more about Apple Intelligence`, `button: Learn more about Productivity`, `button: Learn more about Creativity`, `button: Learn more about Learning`, `button: Learn more about Entertainment`, `button: Learn more about Apple Pencil`, `button: Previous item in Get to know iPad gallery`, `button: Next item in Get to know iPad gallery`, `link: Learn more, Apple Pencil`, `link: Learn more, Magic Keyboard`, `button: iPad and iPhone`, `button: iPad and Mac`, `button: iPad and Apple Watch`, `link: Explore All iPad`, `link: iPad-11`, `link: Compare iPad`, `link: iPad Accessories`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Personal Setup`, `link: iPad Support`, `link: AppleCare`, `link: Apple Intelligence and Siri`, `link: Apps by Apple`, `link: Apple Creator Studio`, `link: iCloud+`, `link: Education`, `link: Apple at Work`, `link: Apple Card Customer Agreement`, `link: Terms`, `link: apple.com`, `link: 1⁠‑⁠8⁠0⁠0⁠‑⁠M⁠Y⁠‑⁠A⁠P⁠P⁠L⁠E`, `link: here`, `link: 8⁠7⁠7⁠-⁠2⁠5⁠5⁠-⁠5⁠9⁠2⁠3`, `link: apple.com/apple-intelligence`, `link: support.apple.com/121115`, `link: apple.com/ipad/cellular`, `link: TV & Home`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Tablet hardware with Pencil support:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **iPadOS:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **App ecosystem:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `main`, `navigation: iPad family of products`, `navigation: iPad`, `contentinfo: Apple Footer`, `region: Footnotes`, `navigation: Breadcrumbs`, `navigation: Apple Directory` | Full IA/routes/authenticated navigation |
| Views/headings | `iPad`, `Explore the lineup.`, `iPad Pro`, `iPad Air`, `iPad mini`, `Why Apple is the best place to shop iPad.`, `Apple Upgrade`, `Ways to Buy`, `Apple Trade In`, `Education`, `Personal Setup`, `Delivery and Pickup`, `Engraving`, `Guided Shopping`, `Apple Store App`, `Get to know iPad.`, `iPadOS + Apps`, `Apple Intelligence`, `Productivity`, `Creativity`, `Learning`, `Entertainment`, `Apple Pencil`, `iPad essentials.`, `Keyboards for iPad` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Previous item in Explore the lineup gallery`, `button: Next item in Explore the lineup gallery`, `button: Learn more about Apple Card Monthly Installments`, `button: Learn more about Apple Trade in`, `button: Learn more, education pricing`, `button: Learn more about your new iPad`, `button: Learn more about delivery and pickup options.`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Footnote ◊ symbol`, `link: Learn more, Apple Upgrade`, `link: iPad Pro`, `link: iPad Air`, `link: iPad mini`, `link: Compare iPad models`, `link: Apple Pencil`, `link: Keyboards`, `link: Accessories for iPad`, `link: iPadOS 27`, `link: Shop iPad`, `link: Compare all models`, `link: Learn more, iPad Pro`, `link: Footnote * symbol`, `link: Footnote ◊◊ symbol`, `link: Buy, iPad Pro`, `link: Learn more, iPad Air`, `link: Buy, iPad Air`, `link: Learn more, iPad (A16)`, `link: Buy, iPad (A16)`, `link: Learn more, iPad mini`, `link: Buy, iPad mini`, `link: Shop iPad`, `link: Footnote ◊◊◊ symbol`, `link: Footnote 1`, `link: Footnote ** symbol`, `button: Learn more about engraving your iPad`, `button: Learn more about shopping with a Specialist over video`, `button: Learn more about shopping using Apple Store app`, `button: Previous item in Why Apple gallery`, `button: Next item in Why Apple gallery`, `button: Learn more about iPadOS + Apps`, `button: Learn more about Apple Intelligence`, `button: Learn more about Productivity`, `button: Learn more about Creativity`, `button: Learn more about Learning`, `button: Learn more about Entertainment`, `button: Learn more about Apple Pencil`, `button: Previous item in Get to know iPad gallery`, `button: Next item in Get to know iPad gallery`, `link: Learn more, Apple Pencil`, `link: Learn more, Magic Keyboard`, `button: iPad and iPhone`, `button: iPad and Mac`, `button: iPad and Apple Watch`, `link: Explore All iPad`, `link: iPad-11`, `link: Compare iPad`, `link: iPad Accessories`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Personal Setup`, `link: iPad Support`, `link: AppleCare`, `link: Apple Intelligence and Siri`, `link: Apps by Apple`, `link: Apple Creator Studio`, `link: iCloud+`, `link: Education`, `link: Apple at Work`, `link: Apple Card Customer Agreement`, `link: Terms`, `link: apple.com`, `link: 1⁠‑⁠8⁠0⁠0⁠‑⁠M⁠Y⁠‑⁠A⁠P⁠P⁠L⁠E`, `link: here`, `link: 8⁠7⁠7⁠-⁠2⁠5⁠5⁠-⁠5⁠9⁠2⁠3`, `link: apple.com/apple-intelligence`, `link: support.apple.com/121115`, `link: apple.com/ipad/cellular`, `link: TV & Home`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](/)`, `[Store](/us/shop/goto/store)`, `[Mac](/mac/)`, `[iPad](/ipad/)`, `[iPhone](/iphone/)`, `[Watch](/watch/)`, `[Vision](/apple-vision-pro/)`, `[AirPods](/airpods/)`, `[Home](/home/)`, `[Entertainment](/entertainment/)`, `[Accessories](/us/shop/goto/buy_accessories)`, `[Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)`, `[Footnote ◊ symbol](#footnote-external-1)`, `[Learn more, Apple Upgrade](/us/shop/goto/apple_upgrade)`, `[iPad Pro](/ipad-pro/)`, `[iPad Air](/ipad-air/)`, `[iPad](/ipad-11/)`, `[iPad mini](/ipad-mini/)`, `[Compare iPad models](/ipad/compare/)`, `[Apple Pencil](/apple-pencil/)`, `[Keyboards](/ipad-keyboards/)`, `[Accessories for iPad](/us/shop/goto/ipad/accessories)`, `[iPadOS 27](/os/ipados/)`, `[Shop iPad](/us/shop/goto/buy_ipad)`, `[Compare all models](/ipad/compare/)`, `[Learn more, iPad Pro](/ipad-pro/)`, `[Footnote * symbol](#footnote-promoted-1)`, `[Footnote ◊◊ symbol](#footnote-external-2)`, `[Buy, iPad Pro](/us/shop/goto/ipad_pro/select)`, `[Learn more, iPad Air](/ipad-air/)`, `[Buy, iPad Air](/us/shop/goto/buy_ipad/ipad_air)`, `[Learn more, iPad (A16)](/ipad-11/)`, `[Buy, iPad (A16)](/us/shop/goto/buy_ipad/ipad)`, `[Learn more, iPad mini](/ipad-mini/)`, `[Buy, iPad mini](/us/shop/goto/buy_ipad/ipad_mini)`, `[Shop iPad](/us/shop/goto/buy_ipad)`, `[Footnote ◊◊◊ symbol](#footnote-external-3)`, `[Footnote 1](#footnote-numbered-1)`, `[Footnote ** symbol](#footnote-promoted-2)`, `[Learn more, Apple Pencil](/apple-pencil/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-E1585895 — Tablet hardware with Pencil support
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-E1585895`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-IPAD-CAP-E1585895` → `REQ-FUNC-E1585895` → `TEST-FUNC-E1585895`.

### REQ-FUNC-5FF00C3F — iPadOS
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-5FF00C3F`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-IPAD-CAP-5FF00C3F` → `REQ-FUNC-5FF00C3F` → `TEST-FUNC-5FF00C3F`.

### REQ-FUNC-B3C83EDE — App ecosystem
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-B3C83EDE`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-IPAD-CAP-B3C83EDE` → `REQ-FUNC-B3C83EDE` → `TEST-FUNC-B3C83EDE`.

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
| [Android Open Source Project](https://source.android.com/) | Not recorded | Apache-2.0 (unverified) | Open-source Android, also built for tablets. | OS layer only. | Proposed evaluation lead; no verified foundation |

No candidate has been independently cloned, executed, license-reviewed or security-reviewed by this generator.
## 10. Security and privacy

No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.

Product-specific review: Use owned test hardware/authorized interfaces; assess calibration, disconnect and physical safety. Do not claim compliance, privacy or security parity without scoped assessment.

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

- **TEST-FUNC-E1585895** → `REQ-FUNC-E1585895`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-5FF00C3F** → `REQ-FUNC-5FF00C3F`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-B3C83EDE** → `REQ-FUNC-B3C83EDE`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-E1585895, REQ-FUNC-5FF00C3F, REQ-FUNC-B3C83EDE
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-E1585895, REQ-FUNC-5FF00C3F, REQ-FUNC-B3C83EDE
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
- **Completion:** Trace: REQ-FUNC-E1585895, REQ-FUNC-5FF00C3F, REQ-FUNC-B3C83EDE; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.apple.com/ipad/) | Not recorded | iPad is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_09b86233efdb1ce40b1760282fe9910a50093c5fd9bf71793607d6ed65b1af4d` | iPad Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.apple.com/ipad/) | 2026-10-14T03:54:26.853Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Previous item in Explore the lineup gallery, button: Next item in Explore the lineup gallery, button: Learn more about Apple Card Monthly Installments, button: Learn more about Apple Trade in, button: Learn more, education pricing, button: Learn more about your new iPad, button: Learn more about delivery and pickup options., link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Footnote ◊ symbol, link: Learn more, Apple Upgrade, link: iPad Pro, link: iPad Air, link: iPad mini, link: Compare iPad models, link: Apple Pencil, link: Keyboards, link: Accessories for iPad, link: iPadOS 27, link: Shop iPad, link: Compare all models, link: Learn more, iPad Pro, link: Footnote * symbol, link: Footnote ◊◊ symbol, link: Buy, iPad Pro, link: Learn more, iPad Air, link: Buy, iPad Air, link: Learn more, iPad (A16), link: Buy, iPad (A16), link: Learn more, iPad mini, link: Buy, iPad mini, link: Shop iPad, link: Footnote ◊◊◊ symbol, link: Footnote 1, link: Footnote ** symbol, button: Learn more about engraving your iPad, button: Learn more about shopping with a Specialist over video, button: Learn more about shopping using Apple Store app, button: Previous item in Why Apple gallery, button: Next item in Why Apple gallery, button: Learn more about iPadOS + Apps, button: Learn more about Apple Intelligence, button: Learn more about Productivity, button: Learn more about Creativity, button: Learn more about Learning, button: Learn more about Entertainment, button: Learn more about Apple Pencil, button: Previous item in Get to know iPad gallery, button: Next item in Get to know iPad gallery, link: Learn more, Apple Pencil, link: Learn more, Magic Keyboard, button: iPad and iPhone, button: iPad and Mac, button: iPad and Apple Watch, link: Explore All iPad, link: iPad-11, link: Compare iPad, link: iPad Accessories, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Personal Setup, link: iPad Support, link: AppleCare, link: Apple Intelligence and Siri, link: Apps by Apple, link: Apple Creator Studio, link: iCloud+, link: Education, link: Apple at Work, link: Apple Card Customer Agreement, link: Terms, link: apple.com, link: 1⁠‑⁠8⁠0⁠0⁠‑⁠M⁠Y⁠‑⁠A⁠P⁠P⁠L⁠E, link: here, link: 8⁠7⁠7⁠-⁠2⁠5⁠5⁠-⁠5⁠9⁠2⁠3, link: apple.com/apple-intelligence, link: support.apple.com/121115, link: apple.com/ipad/cellular, link: TV & Home, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, main, navigation: iPad family of products, navigation: iPad, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-ipad`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

The iPad is Apple's tablet line, running iPadOS.

---

# 2. Product identity and ownership

- **Official name:** iPad
- **Company and business unit:** apple
- **Current lifecycle status:** active
- **Official website:** https://www.apple.com/ipad/

---

# 3. Product capabilities

- Tablet hardware with Pencil support
- iPadOS
- App ecosystem

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

Open-source candidates exist: Android Open Source Project (Apache-2.0) — Open-source Android, also built for tablets.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Open tablet software exists (Android/AOSP on supported devices); open tablet hardware does not.

---

# 10. Missing capabilities and opportunity analysis

Open tablet software exists (Android/AOSP on supported devices); open tablet hardware does not.

---

# 11. RAE implementation strategy

Partial. The OS layer is replaceable (AOSP); the hardware is not.

---

# 12. Security, privacy, and compliance

Not yet researched.

---

# 13. Sources and evidence

- https://source.android.com/
- https://en.wikipedia.org/wiki/IPad

---

# 14. Open questions

- Full feature inventory and technical architecture are not yet researched.

---

# 15. Research history

- v1: dossier created; research pending.

---

# 16. Alternative comparison (continued)

Open tablet software exists (Android/AOSP on supported devices); open tablet hardware does not.

---

# 17. RAE implementation strategy (continued)

Partial. The OS layer is replaceable (AOSP); the hardware is not.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-ipad` and inspect canonical identity with `npx rae-faang products show apple-ipad --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-ipad --out ./apple-ipad.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-ipad --out ./apple-ipad-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-ipad`).
- Dossier: [research/companies/apple/products/apple-ipad.md](../../../research/companies/apple/products/apple-ipad.md).
- REA capture: [catalog/rea/apple/apple-ipad.md](../../rea/apple/apple-ipad.md) (2026-10-14T03:54:26.853Z); raw record: [catalog/rea/evidence/apple-ipad.json](../../rea/evidence/apple-ipad.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.apple.com/ipad/) — iPad is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [iPad Public web-surface observation (REA)](https://www.apple.com/ipad/) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Previous item in Explore the lineup gallery, button: Next item in Explore the lineup gallery, button: Learn more about Apple Card Monthly Installments, button: Learn more about Apple Trade in, button: Learn more, education pricing, button: Learn more about your new iPad, button: Learn more about delivery and pickup options., link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Footnote ◊ symbol, link: Learn more, Apple Upgrade, link: iPad Pro, link: iPad Air, link: iPad mini, link: Compare iPad models, link: Apple Pencil, link: Keyboards, link: Accessories for iPad, link: iPadOS 27, link: Shop iPad, link: Compare all models, link: Learn more, iPad Pro, link: Footnote * symbol, link: Footnote ◊◊ symbol, link: Buy, iPad Pro, link: Learn more, iPad Air, link: Buy, iPad Air, link: Learn more, iPad (A16), link: Buy, iPad (A16), link: Learn more, iPad mini, link: Buy, iPad mini, link: Shop iPad, link: Footnote ◊◊◊ symbol, link: Footnote 1, link: Footnote ** symbol, button: Learn more about engraving your iPad, button: Learn more about shopping with a Specialist over video, button: Learn more about shopping using Apple Store app, button: Previous item in Why Apple gallery, button: Next item in Why Apple gallery, button: Learn more about iPadOS + Apps, button: Learn more about Apple Intelligence, button: Learn more about Productivity, button: Learn more about Creativity, button: Learn more about Learning, button: Learn more about Entertainment, button: Learn more about Apple Pencil, button: Previous item in Get to know iPad gallery, button: Next item in Get to know iPad gallery, link: Learn more, Apple Pencil, link: Learn more, Magic Keyboard, button: iPad and iPhone, button: iPad and Mac, button: iPad and Apple Watch, link: Explore All iPad, link: iPad-11, link: Compare iPad, link: iPad Accessories, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Personal Setup, link: iPad Support, link: AppleCare, link: Apple Intelligence and Siri, link: Apps by Apple, link: Apple Creator Studio, link: iCloud+, link: Education, link: Apple at Work, link: Apple Card Customer Agreement, link: Terms, link: apple.com, link: 1⁠‑⁠8⁠0⁠0⁠‑⁠M⁠Y⁠‑⁠A⁠P⁠P⁠L⁠E, link: here, link: 8⁠7⁠7⁠-⁠2⁠5⁠5⁠-⁠5⁠9⁠2⁠3, link: apple.com/apple-intelligence, link: support.apple.com/121115, link: apple.com/ipad/cellular, link: TV & Home, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, main, navigation: iPad family of products, navigation: iPad, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. (VERIFIED; accessed 2026-10-14T03:54:26.853Z).
