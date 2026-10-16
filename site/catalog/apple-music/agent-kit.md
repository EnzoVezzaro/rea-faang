---
name: apple-music
description: "Evidence-aware build skill for Apple Music (apple-music); investigate, assess reuse, implement scoped behavior and verify."
---

# Apple Music — implementation skill (`apple-music`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Apple Music**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Apple Music** (`apple-music`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Apple Music** / `apple-music` | Product catalog |
| Company / category | Apple / `media_streaming` / `music-streaming` | Product catalog |
| Official website / docs | [https://www.apple.com/apple-music/](https://www.apple.com/apple-music/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **media_streaming** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `APPLE-MUSIC-CAP-15D4335A` | Licensed catalogue streaming | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-MUSIC-CAP-AFE8B02A` | Personalized radio | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-MUSIC-CAP-C4F2D666` | Library matching and uploads | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Previous in get started gallery`, `button: Next in get started gallery`, `button: Learn more about listening experience`, `button: Learn more about music discovery`, `button: Learn more about exclusive content`, `button: Learn more about apple music sing`, `button: Learn more about shared listening`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Apple Music`, `link: Try Apple Music free, * footnote`, `link: Footnote ** symbol`, `link: Learn more, Apple One`, `link: Footnote 1`, `link: Footnote 2`, `link: Footnote 3`, `link: Compare plans`, `link: Try Apple Music individual plan 1 month free, * footnote`, `link: Try Apple Music family plan 1 month free, 4 footnote`, `link: Try Apple Music new device plan 3 months free, 5 footnote`, `link: Try Apple Music student plan 1 month free, 6 footnote`, `link: Try Apple One 1 month free, 7 footnote`, `button: Learn more about apple music classical`, `button: Learn more about shazam`, `link: Find compatible vehicles`, `link: Download on Google Play`, `link: Download on Microsoft Store`, `link: Set up your device`, `link: Try Apple Music individual plan free, * footnote`, `link: Try Apple Music family plan free, 4 footnote`, `link: Try Apple Music student plan free, 6 footnote`, `link: try Apple One free, 7 footnote`, `button: Previous in plans gallery`, `button: Next in plans gallery`, `button: What is Apple Music? Is it the same as iTunes?`, `button: How can I listen to Apple Music?`, `button: What does Apple Music cost?`, `button: Is there an Apple Music student subscription?`, `button: Does Siri work with all plans?`, `button: What is Dolby Atmos music and how can I listen to it?`, `button: What is lossless audio and how can I listen to it?`, `button: Can I share with my family?`, `button: Are there commercials?`, `button: Am I eligible for a three-month Apple Music free offer? How do I redeem it?`, `button: What is Apple Music Classical?`, `button: Why a separate app for classical music?`, `button: How do I get Apple Music Classical and where can I listen to it?`, `button: Is classical music still available in Apple Music?`, `button: Does Apple Music Classical also offer other genres?`, `link: Apple Music for Artists, learn more`, `link: Apple Performance Partners Program, learn more`, `link: terms`, `link: apple.com/family-sharing`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Licensed catalogue streaming:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Personalized radio:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Library matching and uploads:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `navigation: Local`, `main`, `contentinfo: Apple Footer`, `region: Footnotes`, `navigation: Breadcrumbs`, `navigation: Apple Directory` | Full IA/routes/authenticated navigation |
| Views/headings | `Apple Music`, `For the love of music.`, `Start listening for free.`, `New Subscriber`, `Family Plan`, `New Devices`, `Student Plan`, `Listening Experience`, `Music at its most immersive.`, `Music Discovery`, `Where your new favorites find you.`, `Exclusive Content`, `Get closer to your favorite artists.`, `Apple Music Sing`, `It’s not karaoke. It’s way better.`, `Shared Listening`, `Get your friends in the mix.`, `Apple Music Classical`, `The definitive classical music app.`, `Shazam Music Discovery`, `Never miss a beat.`, `Listen to Apple Music on all your devices.`, `Even more places to get Apple Music.`, `Choose the plan that’s right for you.`, `Individual` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Previous in get started gallery`, `button: Next in get started gallery`, `button: Learn more about listening experience`, `button: Learn more about music discovery`, `button: Learn more about exclusive content`, `button: Learn more about apple music sing`, `button: Learn more about shared listening`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Apple Music`, `link: Try Apple Music free, * footnote`, `link: Footnote ** symbol`, `link: Learn more, Apple One`, `link: Footnote 1`, `link: Footnote 2`, `link: Footnote 3`, `link: Compare plans`, `link: Try Apple Music individual plan 1 month free, * footnote`, `link: Try Apple Music family plan 1 month free, 4 footnote`, `link: Try Apple Music new device plan 3 months free, 5 footnote`, `link: Try Apple Music student plan 1 month free, 6 footnote`, `link: Try Apple One 1 month free, 7 footnote`, `button: Learn more about apple music classical`, `button: Learn more about shazam`, `link: Find compatible vehicles`, `link: Download on Google Play`, `link: Download on Microsoft Store`, `link: Set up your device`, `link: Try Apple Music individual plan free, * footnote`, `link: Try Apple Music family plan free, 4 footnote`, `link: Try Apple Music student plan free, 6 footnote`, `link: try Apple One free, 7 footnote`, `button: Previous in plans gallery`, `button: Next in plans gallery`, `button: What is Apple Music? Is it the same as iTunes?`, `button: How can I listen to Apple Music?`, `button: What does Apple Music cost?`, `button: Is there an Apple Music student subscription?`, `button: Does Siri work with all plans?`, `button: What is Dolby Atmos music and how can I listen to it?`, `button: What is lossless audio and how can I listen to it?`, `button: Can I share with my family?`, `button: Are there commercials?`, `button: Am I eligible for a three-month Apple Music free offer? How do I redeem it?`, `button: What is Apple Music Classical?`, `button: Why a separate app for classical music?`, `button: How do I get Apple Music Classical and where can I listen to it?`, `button: Is classical music still available in Apple Music?`, `button: Does Apple Music Classical also offer other genres?`, `link: Apple Music for Artists, learn more`, `link: Apple Performance Partners Program, learn more`, `link: terms`, `link: apple.com/family-sharing`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](/)`, `[Store](/us/shop/goto/store)`, `[Mac](/mac/)`, `[iPad](/ipad/)`, `[iPhone](/iphone/)`, `[Watch](/watch/)`, `[Vision](/apple-vision-pro/)`, `[AirPods](/airpods/)`, `[Home](/home/)`, `[Entertainment](/entertainment/)`, `[Accessories](/us/shop/goto/buy_accessories)`, `[Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)`, `[Apple Music](/apple-music/)`, `[Try Apple Music free, * footnote](https://music.apple.com/home?itscg=10000&itsct=music_overview_nav)`, `[Footnote ** symbol](#footnote-2)`, `[Learn more, Apple One](https://offers.appleone.apple/new-device-offer)`, `[Footnote 1](#footnote-4)`, `[Footnote 2](#footnote-5)`, `[Footnote 3](#footnote-6)`, `[Try Apple Music free, * footnote](https://music.apple.com/home?itscg=10000&itsct=music_overview_hero)`, `[Compare plans](#plans)`, `[Try Apple Music individual plan 1 month free, * footnote](https://music.apple.com/home?itscg=10000&itsct=music_overview_plan_individual)`, `[Try Apple Music family plan 1 month free, 4 footnote](https://music.apple.com/subscribe?itscg=10000&itsct=music_overview_plan_family)`, `[Try Apple Music new device plan 3 months free, 5 footnote](https://offers.applemusic.apple/new-device-offer?itscg=10000&itsct=music_overview_plan_hwb)`, `[Try Apple Music student plan 1 month free, 6 footnote](https://music.apple.com/student?itscg=10000&itsct=music_overview_plan_student)`, `[Try Apple One 1 month free, 7 footnote](https://one.apple.com/us/music?itscg=10000&itsct=music_overview_plan_appleone)`, `[Find compatible vehicles](/ios/carplay/available-models/)`, `[Download on Google Play](https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=http%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fapp%3Dmusic%26at%3D1000lpya%26ct%3D)`, `[Download on Microsoft Store](https://apps.microsoft.com/detail/9pfhdd62mxs1?hl=en-US&gl=US)`, `[Set up your device](https://support.apple.com/HT211087?cid=general-applemusic-marcom-08152025)`, `[Try Apple Music individual plan free, * footnote](https://music.apple.com/subscribe?itscg=10000&itsct=music_overview_compare_individual)`, `[Try Apple Music family plan free, 4 footnote](https://music.apple.com/subscribe?itscg=10000&itsct=music_overview_compare_family)`, `[Try Apple Music student plan free, 6 footnote](https://music.apple.com/student?itscg=10000&itsct=music_overview_compare_student)`, `[try Apple One free, 7 footnote](https://one.apple.com/us/music?itscg=10000&itsct=music_overview_compare_appleone)`, `[Learn more, Apple One](/apple-one/)`, `[Apple Music for Artists, learn more](https://artists.apple.com/)`, `[Apple Performance Partners Program, learn more](/music/workingwithus/)`, `[terms](/promo/)`, `[apple.com/family-sharing](/family-sharing/)`, `[Entertainment](/services/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-15D4335A — Licensed catalogue streaming
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-15D4335A`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-MUSIC-CAP-15D4335A` → `REQ-FUNC-15D4335A` → `TEST-FUNC-15D4335A`.

### REQ-FUNC-AFE8B02A — Personalized radio
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-AFE8B02A`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-MUSIC-CAP-AFE8B02A` → `REQ-FUNC-AFE8B02A` → `TEST-FUNC-AFE8B02A`.

### REQ-FUNC-C4F2D666 — Library matching and uploads
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C4F2D666`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-MUSIC-CAP-C4F2D666` → `REQ-FUNC-C4F2D666` → `TEST-FUNC-C4F2D666`.

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
| [Navidrome](https://www.navidrome.org/) | Not recorded | GPL-3.0 (unverified) | Self-hosted streaming for your own library. | No limitation recorded | Proposed evaluation lead; no verified foundation |
| [Funkwhale](https://funkwhale.audio/) | Not recorded | AGPL-3.0 (unverified) | Self-hosted music sharing. | No limitation recorded | Proposed evaluation lead; no verified foundation |

No candidate has been independently cloned, executed, license-reviewed or security-reviewed by this generator.
## 10. Security and privacy

No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.

Product-specific review: Verify rights, privacy, child safety and lawful DRM/content-delivery boundaries. Do not claim compliance, privacy or security parity without scoped assessment.

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
- **EDGE-009:** Bandwidth/codec/device change, manifest failure, content unavailable. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-15D4335A** → `REQ-FUNC-15D4335A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-AFE8B02A** → `REQ-FUNC-AFE8B02A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C4F2D666** → `REQ-FUNC-C4F2D666`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-15D4335A, REQ-FUNC-AFE8B02A, REQ-FUNC-C4F2D666
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-15D4335A, REQ-FUNC-AFE8B02A, REQ-FUNC-C4F2D666
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
- **Completion:** Trace: REQ-FUNC-15D4335A, REQ-FUNC-AFE8B02A, REQ-FUNC-C4F2D666; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.apple.com/apple-music/) | Not recorded | Apple Music is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_5580e369c15707f4261157c4764aba488117dfb83c8d61b1ce54cf872ed2e516` | Apple Music Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.apple.com/apple-music/) | 2026-10-14T03:55:00.269Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Previous in get started gallery, button: Next in get started gallery, button: Learn more about listening experience, button: Learn more about music discovery, button: Learn more about exclusive content, button: Learn more about apple music sing, button: Learn more about shared listening, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Apple Music, link: Try Apple Music free, * footnote, link: Footnote ** symbol, link: Learn more, Apple One, link: Footnote 1, link: Footnote 2, link: Footnote 3, link: Compare plans, link: Try Apple Music individual plan 1 month free, * footnote, link: Try Apple Music family plan 1 month free, 4 footnote, link: Try Apple Music new device plan 3 months free, 5 footnote, link: Try Apple Music student plan 1 month free, 6 footnote, link: Try Apple One 1 month free, 7 footnote, button: Learn more about apple music classical, button: Learn more about shazam, link: Find compatible vehicles, link: Download on Google Play, link: Download on Microsoft Store, link: Set up your device, link: Try Apple Music individual plan free, * footnote, link: Try Apple Music family plan free, 4 footnote, link: Try Apple Music student plan free, 6 footnote, link: try Apple One free, 7 footnote, button: Previous in plans gallery, button: Next in plans gallery, button: What is Apple Music? Is it the same as iTunes?, button: How can I listen to Apple Music?, button: What does Apple Music cost?, button: Is there an Apple Music student subscription?, button: Does Siri work with all plans?, button: What is Dolby Atmos music and how can I listen to it?, button: What is lossless audio and how can I listen to it?, button: Can I share with my family?, button: Are there commercials?, button: Am I eligible for a three-month Apple Music free offer? How do I redeem it?, button: What is Apple Music Classical?, button: Why a separate app for classical music?, button: How do I get Apple Music Classical and where can I listen to it?, button: Is classical music still available in Apple Music?, button: Does Apple Music Classical also offer other genres?, link: Apple Music for Artists, learn more, link: Apple Performance Partners Program, learn more, link: terms, link: apple.com/family-sharing, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-music`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Apple Music is Apple's music streaming service.

---

# 2. Product identity and ownership

- **Official name:** Apple Music
- **Company and business unit:** apple
- **Current lifecycle status:** active
- **Official website:** https://www.apple.com/apple-music/

---

# 3. Product capabilities

- Licensed catalogue streaming
- Personalized radio
- Library matching and uploads

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

Open-source candidates exist: Navidrome (GPL-3.0) — Self-hosted streaming for your own library.; Funkwhale (AGPL-3.0) — Self-hosted music sharing.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Streaming your own library is self-hostable; the licensed catalogue is not replicable in open source.

---

# 10. Missing capabilities and opportunity analysis

Streaming your own library is self-hostable; the licensed catalogue is not replicable in open source.

---

# 11. RAE implementation strategy

Partial. Self-hosted library streaming is mature (Navidrome, Funkwhale); the catalogue is not.

---

# 12. Security, privacy, and compliance

Not yet researched.

---

# 13. Sources and evidence

- https://www.navidrome.org/
- https://funkwhale.audio/

---

# 14. Open questions

- Full feature inventory and technical architecture are not yet researched.

---

# 15. Research history

- v1: dossier created; research pending.

---

# 16. Alternative comparison (continued)

Streaming your own library is self-hostable; the licensed catalogue is not replicable in open source.

---

# 17. RAE implementation strategy (continued)

Partial. Self-hosted library streaming is mature (Navidrome, Funkwhale); the catalogue is not.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-music` and inspect canonical identity with `npx rae-faang products show apple-music --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-music --out ./apple-music.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-music --out ./apple-music-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-music`).
- Dossier: [research/companies/apple/products/apple-music.md](../../../research/companies/apple/products/apple-music.md).
- REA capture: [catalog/rea/apple/apple-music.md](../../rea/apple/apple-music.md) (2026-10-14T03:55:00.269Z); raw record: [catalog/rea/evidence/apple-music.json](../../rea/evidence/apple-music.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.apple.com/apple-music/) — Apple Music is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Apple Music Public web-surface observation (REA)](https://www.apple.com/apple-music/) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Previous in get started gallery, button: Next in get started gallery, button: Learn more about listening experience, button: Learn more about music discovery, button: Learn more about exclusive content, button: Learn more about apple music sing, button: Learn more about shared listening, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Apple Music, link: Try Apple Music free, * footnote, link: Footnote ** symbol, link: Learn more, Apple One, link: Footnote 1, link: Footnote 2, link: Footnote 3, link: Compare plans, link: Try Apple Music individual plan 1 month free, * footnote, link: Try Apple Music family plan 1 month free, 4 footnote, link: Try Apple Music new device plan 3 months free, 5 footnote, link: Try Apple Music student plan 1 month free, 6 footnote, link: Try Apple One 1 month free, 7 footnote, button: Learn more about apple music classical, button: Learn more about shazam, link: Find compatible vehicles, link: Download on Google Play, link: Download on Microsoft Store, link: Set up your device, link: Try Apple Music individual plan free, * footnote, link: Try Apple Music family plan free, 4 footnote, link: Try Apple Music student plan free, 6 footnote, link: try Apple One free, 7 footnote, button: Previous in plans gallery, button: Next in plans gallery, button: What is Apple Music? Is it the same as iTunes?, button: How can I listen to Apple Music?, button: What does Apple Music cost?, button: Is there an Apple Music student subscription?, button: Does Siri work with all plans?, button: What is Dolby Atmos music and how can I listen to it?, button: What is lossless audio and how can I listen to it?, button: Can I share with my family?, button: Are there commercials?, button: Am I eligible for a three-month Apple Music free offer? How do I redeem it?, button: What is Apple Music Classical?, button: Why a separate app for classical music?, button: How do I get Apple Music Classical and where can I listen to it?, button: Is classical music still available in Apple Music?, button: Does Apple Music Classical also offer other genres?, link: Apple Music for Artists, learn more, link: Apple Performance Partners Program, learn more, link: terms, link: apple.com/family-sharing, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. (VERIFIED; accessed 2026-10-14T03:55:00.269Z).
