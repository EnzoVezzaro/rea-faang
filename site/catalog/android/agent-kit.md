---
name: android
description: "Evidence-aware build skill for Android (android); investigate, assess reuse, implement scoped behavior and verify."
---

# Android — implementation skill (`android`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Android**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Android** (`android`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Android** / `android` | Product catalog |
| Company / category | Google / `operating_system` / `operating_system` | Product catalog |
| Official website / docs | [https://www.android.com/](https://www.android.com/) / Not recorded | URL lead; compiler does not fetch source |
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
| `ANDROID-CAP-6CC92D09` | Mobile OS runtime, app framework, system UI | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `ANDROID-CAP-6BDC34FB` | App sandbox and permission model | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `ANDROID-CAP-69B0C2BC` | App distribution via Play (proprietary layer) | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: About`, `button: Features`, `button: Devices`, `button: Learn`, `button: Show search`, `button: Hide the banner`, `button: Video Play/pause`, `button: Go to the next page`, `button: Selected tab 1 of 2`, `button: Selected tab 2 of 2`, `link: Android`, `link: Gemini Intelligence`, `link: Shop phones`, `link: Buy now`, `link: Try Gemini`, `link: Find your perfect phone`, `link: See the latest features`, `link: Explore Rambler`, `link: Explore glasses`, `link: See how it works`, `link: Explore`, `link: Explore Gemini Intelligence`, `link: Experience Android XR`, `link: Start chatting`, `link: Go to Find Hub`, `link: Transfer to new Android`, `link: Explore the power of AI`, `link: Explore Gemini`, `link: Search smarter`, `link: Discover more AI`, `link: Follow us on X`, `link: Follow us on Instagram`, `link: Follow us on YouTube`, `link: Follow us on Facebook`, `link: Follow us on LinkedIn`, `link: Security link opens in same tab or window`, `link: Privacy link opens in same tab or window`, `link: Physical Safety link opens in same tab or window`, `link: Vision features link opens in same tab or window`, `link: Audio features link opens in same tab or window`, `link: Mobility features link opens in same tab or window`, `link: Overview link opens in same tab or window`, `link: Quick Share link opens in same tab or window`, `link: Google Cast link opens in same tab or window`, `link: Fast Pair link opens in same tab or window`, `link: Android TV link opens in same tab or window`, `link: Digital car key link opens in same tab or window`, `link: Google Mobile Services (GMS) link opens in same tab or window`, `link: Googlebook link opens in new tab or window`, `link: Enterprise Devices link opens in same tab or window`, `link: Enterprise Support link opens in same tab or window`, `link: Enterprise Blog link opens in new tab or window`, `link: Android Blog link opens in new tab or window`, `link: Press Corner link opens in new tab or window`, `link: Contact Press Team link opens in new tab or window`, `link: Developer Resources link opens in new tab or window`, `link: Android Studio and SDK link opens in new tab or window`, `link: Android Open Source Project link opens in new tab or window`, `link: How Google Play Works link opens in new tab or window`, `link: Help Center link opens in new tab or window`, `link: Find My Device link opens in new tab or window`, `link: Join user studies link opens in new tab or window`, `link: Privacy Policy link opens in new tab or window`, `combobox: Change language or region`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Mobile OS runtime, app framework, system UI:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **App sandbox and permission model:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **App distribution via Play (proprietary layer):** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner: site header`, `navigation`, `search`, `banner: Expirable banner`, `main`, `contentinfo`, `navigation` | Full IA/routes/authenticated navigation |
| Views/headings | `Experience the future first on Android.`, `Explore the latest on Android.`, `Voice-to-text just got smarter.`, `A vision for intelligence coming soon.`, `Circle it. Search it. Find the look.`, `Introducing Googlebook.`, `Shop the latest phones.`, `The best of Gemini on our most advanced devices.1`, `Reality, expanded.`, `Android has your must-haves and more.`, `Google Messages`, `Security`, `Find Hub`, `New phone? No problem.`, `AI on Android.`, `Your AI assistant from Google.`, `One gesture, many possibilities.`, `Making AI helpful for everyone.`, `Latest from Android.`, `Footer links`, `Privacy and Safety`, `Accessibility`, `Connect devices`, `Our ecosystem`, `For Enterprise` | Results and subsequent views |
| Controls | `button: About`, `button: Features`, `button: Devices`, `button: Learn`, `button: Show search`, `button: Hide the banner`, `button: Video Play/pause`, `button: Go to the next page`, `button: Selected tab 1 of 2`, `button: Selected tab 2 of 2`, `link: Android`, `link: Gemini Intelligence`, `link: Shop phones`, `link: Buy now`, `link: Try Gemini`, `link: Find your perfect phone`, `link: See the latest features`, `link: Explore Rambler`, `link: Explore glasses`, `link: See how it works`, `link: Explore`, `link: Explore Gemini Intelligence`, `link: Experience Android XR`, `link: Start chatting`, `link: Go to Find Hub`, `link: Transfer to new Android`, `link: Explore the power of AI`, `link: Explore Gemini`, `link: Search smarter`, `link: Discover more AI`, `link: Follow us on X`, `link: Follow us on Instagram`, `link: Follow us on YouTube`, `link: Follow us on Facebook`, `link: Follow us on LinkedIn`, `link: Security link opens in same tab or window`, `link: Privacy link opens in same tab or window`, `link: Physical Safety link opens in same tab or window`, `link: Vision features link opens in same tab or window`, `link: Audio features link opens in same tab or window`, `link: Mobility features link opens in same tab or window`, `link: Overview link opens in same tab or window`, `link: Quick Share link opens in same tab or window`, `link: Google Cast link opens in same tab or window`, `link: Fast Pair link opens in same tab or window`, `link: Android TV link opens in same tab or window`, `link: Digital car key link opens in same tab or window`, `link: Google Mobile Services (GMS) link opens in same tab or window`, `link: Googlebook link opens in new tab or window`, `link: Enterprise Devices link opens in same tab or window`, `link: Enterprise Support link opens in same tab or window`, `link: Enterprise Blog link opens in new tab or window`, `link: Android Blog link opens in new tab or window`, `link: Press Corner link opens in new tab or window`, `link: Contact Press Team link opens in new tab or window`, `link: Developer Resources link opens in new tab or window`, `link: Android Studio and SDK link opens in new tab or window`, `link: Android Open Source Project link opens in new tab or window`, `link: How Google Play Works link opens in new tab or window`, `link: Help Center link opens in new tab or window`, `link: Find My Device link opens in new tab or window`, `link: Join user studies link opens in new tab or window`, `link: Privacy Policy link opens in new tab or window`, `combobox: Change language or region` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Android](https://www.android.com/)`, `[Gemini Intelligence](https://www.android.com/gemini-intelligence/)`, `[Shop phones](https://www.android.com/phones/shop/)`, `[Buy now](https://googlebook.google/?utm_source=android&utm_medium=owned&utm_campaign=android_website)`, `[Try Gemini](https://gemini.google.com/app/download/mobile?android-min-version=301356232&ios-min-version=322.0&is_sa=1&campaign_id=android_web_gemini&utm_medium=xpa&utm_source=android_web&utm_campaign=android_web_gemini&pt=9008&mt=8&ct=android_web_gemini)`, `[Find your perfect phone](https://www.android.com/phones/shop/)`, `[See the latest features](https://www.android.com/new-features-on-android/featured/)`, `[Explore Rambler](https://www.android.com/gemini-intelligence/#voice-to-text)`, `[Explore glasses](https://www.android.com/xr/#intelligent-eyewear)`, `[See how it works](https://www.android.com/ai/circle-to-search/)`, `[Explore](https://googlebook.google/shop/?utm_source=android&utm_medium=owned&utm_campaign=android_web_shop)`, `[Explore Gemini Intelligence](https://www.android.com/gemini-intelligence/)`, `[Experience Android XR](https://www.android.com/xr/)`, `[Start chatting](https://www.android.com/google-messages/)`, `[See how it works](https://www.android.com/safety/security/)`, `[Go to Find Hub](https://www.android.com/learn-find-hub/)`, `[Transfer to new Android](https://www.android.com/switch-to-android/)`, `[Explore the power of AI](https://android.com/ai/)`, `[Explore Gemini](https://android.com/ai/gemini/)`, `[Search smarter](https://android.com/ai/circle-to-search/)`, `[Discover more AI](https://android.com/ai/more/)`, `[Follow us on X](https://x.com/android)`, `[Follow us on Instagram](https://www.instagram.com/android/)`, `[Follow us on YouTube](https://www.youtube.com/user/GoogleMobile/)`, `[Follow us on Facebook](https://www.facebook.com/AndroidOfficial)`, `[Follow us on LinkedIn](https://www.linkedin.com/showcase/android_by_google)`, `[Security link opens in same tab or window](https://www.android.com/safety/security/)`, `[Privacy link opens in same tab or window](https://www.android.com/safety/privacy/)`, `[Physical Safety link opens in same tab or window](https://www.android.com/safety/physical-safety/)`, `[Vision features link opens in same tab or window](https://www.android.com/accessibility/vision/)`, `[Audio features link opens in same tab or window](https://www.android.com/accessibility/audio/)`, `[Mobility features link opens in same tab or window](https://www.android.com/accessibility/mobility/)`, `[Overview link opens in same tab or window](https://www.android.com/better-together/)`, `[Quick Share link opens in same tab or window](https://www.android.com/quick-share/)`, `[Google Cast link opens in same tab or window](https://www.android.com/better-together/google-cast/)`, `[Fast Pair link opens in same tab or window](https://www.android.com/better-together/fast-pair/)`, `[Android TV link opens in same tab or window](https://www.android.com/tv/)`, `[Digital car key link opens in same tab or window](https://www.android.com/digital-car-key/)`, `[Google Mobile Services (GMS) link opens in same tab or window](https://www.android.com/gms/)`, `[Googlebook link opens in new tab or window](https://googlebook.google/?utm_source=android&utm_medium=owned&utm_campaign=android_website)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-6CC92D09 — Mobile OS runtime, app framework, system UI
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-6CC92D09`; fixture and expected output must be specified from evidence.
- **Trace:** `ANDROID-CAP-6CC92D09` → `REQ-FUNC-6CC92D09` → `TEST-FUNC-6CC92D09`.

### REQ-FUNC-6BDC34FB — App sandbox and permission model
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-6BDC34FB`; fixture and expected output must be specified from evidence.
- **Trace:** `ANDROID-CAP-6BDC34FB` → `REQ-FUNC-6BDC34FB` → `TEST-FUNC-6BDC34FB`.

### REQ-FUNC-69B0C2BC — App distribution via Play (proprietary layer)
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-69B0C2BC`; fixture and expected output must be specified from evidence.
- **Trace:** `ANDROID-CAP-69B0C2BC` → `REQ-FUNC-69B0C2BC` → `TEST-FUNC-69B0C2BC`.

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
| [AOSP](https://source.android.com/) | Not recorded | Apache-2.0 (unverified) | The open-source core of Android itself. | The upstream project — no Play services. | Proposed evaluation lead; no verified foundation |
| [LineageOS](https://lineageos.org/) | Not recorded | Apache-2.0 (unverified) | Community Android distribution for many devices. | Widest device support. | Proposed evaluation lead; no verified foundation |
| [GrapheneOS](https://grapheneos.org/) | Not recorded | MIT (unverified) | Security-hardened Android, no Google services. | Pixel-focused. | Proposed evaluation lead; no verified foundation |
| [/e/OS](https://e.foundation/e-os/) | Not recorded | GPL-3.0 (varies) (unverified) | De-Googled Android with a privacy app suite. | Consumer-oriented fork. | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-6CC92D09** → `REQ-FUNC-6CC92D09`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-6BDC34FB** → `REQ-FUNC-6BDC34FB`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-69B0C2BC** → `REQ-FUNC-69B0C2BC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-6CC92D09, REQ-FUNC-6BDC34FB, REQ-FUNC-69B0C2BC
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-6CC92D09, REQ-FUNC-6BDC34FB, REQ-FUNC-69B0C2BC
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
- **Completion:** Trace: REQ-FUNC-6CC92D09, REQ-FUNC-6BDC34FB, REQ-FUNC-69B0C2BC; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.android.com/) | Not recorded | Android is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_98d731fefc729a57a235aad084b23bef86d59035fd25a426870a4251f8fe5cac` | Android Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.android.com/) | 2026-10-13T18:57:23.579Z | A dated unauthenticated snapshot exposed controls button: About, button: Features, button: Devices, button: Learn, button: Show search, button: Hide the banner, button: Video Play/pause, button: Go to the next page, button: Selected tab 1 of 2, button: Selected tab 2 of 2, link: Android, link: Gemini Intelligence, link: Shop phones, link: Buy now, link: Try Gemini, link: Find your perfect phone, link: See the latest features, link: Explore Rambler, link: Explore glasses, link: See how it works, link: Explore, link: Explore Gemini Intelligence, link: Experience Android XR, link: Start chatting, link: Go to Find Hub, link: Transfer to new Android, link: Explore the power of AI, link: Explore Gemini, link: Search smarter, link: Discover more AI, link: Follow us on X, link: Follow us on Instagram, link: Follow us on YouTube, link: Follow us on Facebook, link: Follow us on LinkedIn, link: Security link opens in same tab or window, link: Privacy link opens in same tab or window, link: Physical Safety link opens in same tab or window, link: Vision features link opens in same tab or window, link: Audio features link opens in same tab or window, link: Mobility features link opens in same tab or window, link: Overview link opens in same tab or window, link: Quick Share link opens in same tab or window, link: Google Cast link opens in same tab or window, link: Fast Pair link opens in same tab or window, link: Android TV link opens in same tab or window, link: Digital car key link opens in same tab or window, link: Google Mobile Services (GMS) link opens in same tab or window, link: Googlebook link opens in new tab or window, link: Enterprise Devices link opens in same tab or window, link: Enterprise Support link opens in same tab or window, link: Enterprise Blog link opens in new tab or window, link: Android Blog link opens in new tab or window, link: Press Corner link opens in new tab or window, link: Contact Press Team link opens in new tab or window, link: Developer Resources link opens in new tab or window, link: Android Studio and SDK link opens in new tab or window, link: Android Open Source Project link opens in new tab or window, link: How Google Play Works link opens in new tab or window, link: Help Center link opens in new tab or window, link: Find My Device link opens in new tab or window, link: Join user studies link opens in new tab or window, link: Privacy Policy link opens in new tab or window, combobox: Change language or region and landmarks banner: site header, navigation, search, banner: Expirable banner, main, contentinfo, navigation. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `android`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Android is a Linux-based mobile operating system developed by Google. It is the world's most widely deployed mobile OS, powering billions of devices globally. It includes the Android Open Source Project (AOSP) as the core component.

# 2. Product identity and ownership

- **Official name:** Android
- **Company and business unit:** Google
- **Parent organization:** Alphabet Inc.
- **Original launch date:** 2007
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; acquired by Google in 2005 (originally by Android Inc.)
- **Related products:** ChromeOS, Wear OS, Android Auto, Google Play
- **Official website:** https://www.android.com/
- **Official documentation:** https://developer.android.com/

# 3. Product capabilities

- Linux kernel base
- Application framework with Java/Kotlin/Android APIs
- Dalvik/ART runtime
- Application sandboxing
- Notifications framework
- Connectivity ( cellular, Wi-Fi, Bluetooth, NFC)
- Hardware abstraction layer (HAL)
- File system with ext4/F2FS
- Security model with Verified Boot and SELinux

# 4. Technical architecture

Android's architecture has multiple layers:

- Linux kernel (core OS abstractions)
- Hardware abstraction layer (HAL) for device components
- Android runtime (ART) with Dalvik bytecode execution
- Application framework (APIs for activities, services, content providers, broadcast receivers)
- System apps and libraries
- AOSP source code releases

AOSP provides the source code under the Apache 2.0 license. Device manufacturers implement AOSP with proprietary extensions (gapps, drivers).

# 5. User workflows

Primary workflows: app installation, configuration, notification handling, multimedia consumption, telephony. Essential: app management, notifications, camera access. Advanced: background services, custom ROM installation, system-level debugging.

# 6. Pricing and access

AOSP is free and open source under Apache 2.0. Google Mobile Services (GMS) and Play Store are proprietary and require licensing. Device manufacturers pay for GMS certification.

# 7. API and integration surface

- Android SDK / NDK APIs
- Java/Kotlin/Multiplatform programming interfaces
- Permission system (runtime permissions)
- Content provider interface
- Intent system for inter-app communication

# 8. Existing open-source alternatives

- AOSP itself is the primary open-source Android source
- LineageOS as a aftermarket firmware
- /e/OS, /e.foundation de-Googled distributions
- Replicant (de-Googled Android focus)

# 9. Alternative comparison

AOSP provides the full open-source operating system. LineageOS and /e/OS are derivative distributions that remove proprietary Google components. Full GMS replacement requires effort.

# 10. Missing capabilities and opportunity analysis

De-Googled Android distributions exist but require device-specific maintenance. Building a fully independent mobile OS from scratch is extremely demanding. Focus on AOSP customization or distribution is more feasible.

# 11. RAE implementation strategy

Contribute to AOSP, build a de-Googled distribution, or extend LineageOS. Full OS development is out of scope.

# 12. Security, privacy, and compliance

Verified Boot, SELinux, permission model, privacy controls. de-Googled distributions address data privacy concerns. Compliance depends on distribution and device.

# 13. Sources and evidence

- https://developer.android.com/ (documentation)
- https://source.android.com/ (AOSP)
- https://lineageos.org/ (aftermarket distribution)

# 14. Open questions

- What is the feasibility of a completely proprietary-free Android distribution?
- How do GMS-dependent apps function without Google Services?
- What is the maintenance burden of keeping AOSP customizations current?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

AOSP, LineageOS, /e/OS, and Replicant are the primary open-source Android options. Varying degrees of GMS compatibility.

---

# 17. RAE implementation strategy (continued)

Contribute to AOSP de-Googling efforts or build on LineageOS. Full OS development not recommended for initial RAE projects.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier android` and inspect canonical identity with `npx rae-faang products show android --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang android --out ./android.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit android --out ./android-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`android`).
- Dossier: [research/companies/google/products/android.md](../../../research/companies/google/products/android.md).
- REA capture: [catalog/rea/google/android.md](../../rea/google/android.md) (2026-10-13T18:57:23.579Z); raw record: [catalog/rea/evidence/android.json](../../rea/evidence/android.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.android.com/) — Android is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Android Public web-surface observation (REA)](https://www.android.com/) — A dated unauthenticated snapshot exposed controls button: About, button: Features, button: Devices, button: Learn, button: Show search, button: Hide the banner, button: Video Play/pause, button: Go to the next page, button: Selected tab 1 of 2, button: Selected tab 2 of 2, link: Android, link: Gemini Intelligence, link: Shop phones, link: Buy now, link: Try Gemini, link: Find your perfect phone, link: See the latest features, link: Explore Rambler, link: Explore glasses, link: See how it works, link: Explore, link: Explore Gemini Intelligence, link: Experience Android XR, link: Start chatting, link: Go to Find Hub, link: Transfer to new Android, link: Explore the power of AI, link: Explore Gemini, link: Search smarter, link: Discover more AI, link: Follow us on X, link: Follow us on Instagram, link: Follow us on YouTube, link: Follow us on Facebook, link: Follow us on LinkedIn, link: Security link opens in same tab or window, link: Privacy link opens in same tab or window, link: Physical Safety link opens in same tab or window, link: Vision features link opens in same tab or window, link: Audio features link opens in same tab or window, link: Mobility features link opens in same tab or window, link: Overview link opens in same tab or window, link: Quick Share link opens in same tab or window, link: Google Cast link opens in same tab or window, link: Fast Pair link opens in same tab or window, link: Android TV link opens in same tab or window, link: Digital car key link opens in same tab or window, link: Google Mobile Services (GMS) link opens in same tab or window, link: Googlebook link opens in new tab or window, link: Enterprise Devices link opens in same tab or window, link: Enterprise Support link opens in same tab or window, link: Enterprise Blog link opens in new tab or window, link: Android Blog link opens in new tab or window, link: Press Corner link opens in new tab or window, link: Contact Press Team link opens in new tab or window, link: Developer Resources link opens in new tab or window, link: Android Studio and SDK link opens in new tab or window, link: Android Open Source Project link opens in new tab or window, link: How Google Play Works link opens in new tab or window, link: Help Center link opens in new tab or window, link: Find My Device link opens in new tab or window, link: Join user studies link opens in new tab or window, link: Privacy Policy link opens in new tab or window, combobox: Change language or region and landmarks banner: site header, navigation, search, banner: Expirable banner, main, contentinfo, navigation. (VERIFIED; accessed 2026-10-13T18:57:23.579Z).
