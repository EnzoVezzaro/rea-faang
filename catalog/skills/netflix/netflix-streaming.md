---
name: netflix-streaming
description: "Evidence-aware build skill for Netflix Streaming (netflix-streaming); investigate, assess reuse, implement scoped behavior and verify."
---

# Netflix Streaming — implementation skill (`netflix-streaming`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Netflix Streaming**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Netflix Streaming** (`netflix-streaming`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Netflix Streaming** / `netflix-streaming` | Product catalog |
| Company / category | Netflix / `media_streaming` / `media_streaming` | Product catalog |
| Official website / docs | [https://www.netflix.com/](https://www.netflix.com/) / Not recorded | URL lead; compiler does not fetch source |
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
| `NETFLIX-STREAMING-CAP-63BF8DDF` | Adaptive-bitrate streaming at scale | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `NETFLIX-STREAMING-CAP-7C2B7041` | Personalised recommendations | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `NETFLIX-STREAMING-CAP-9582CBDD` | Profiles, parental controls, offline downloads | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `NETFLIX-STREAMING-CAP-87E2AC4C` | DRM (Widevine/FairPlay/PlayReady) | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Get Started`, `button: Learn More`, `button: Doing Life 1`, `button: A Different World 2`, `button: Why Did I Get Married Again? 3`, `button: Animals 4`, `button: Below 5`, `button: Beauty in Black 7`, `button: East of Eden 8`, `button: Haunted Hotel 9`, `button: Tires 10`, `button: What is Netflix?`, `button: How much does Netflix cost?`, `button: Where can I watch?`, `button: How do I cancel?`, `button: What can I watch on Netflix?`, `button: Is Netflix good for kids?`, `combobox: Select Language`, `link: Sign In`, `textbox: Email address`, `link: 1-844-569-7700`, `link: FAQ`, `link: Help Center`, `link: Account`, `link: Netflix House`, `link: Media Center`, `link: Investor Relations`, `link: Jobs`, `link: Netflix Shop`, `link: Redeem Gift Cards`, `link: Buy Gift Cards`, `link: Ways to Watch`, `link: Terms of Use`, `link: Privacy`, `link: Cookie Preferences`, `link: Corporate Information`, `link: Contact Us`, `link: Speed Test`, `link: Legal Notices`, `link: Only on Netflix`, `link: Do Not Sell or Share My Personal Information`, `link: Ad Choices`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Adaptive-bitrate streaming at scale:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Personalised recommendations:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Profiles, parental controls, offline downloads:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **DRM (Widevine/FairPlay/PlayReady):** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `form: Sign up or restart your membership with Netflix.`, `form: Sign up or restart your membership with Netflix.`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Unlimited movies, TV shows, and more`, `Ready to watch? Enter your email to create or restart your membership.`, `The Netflix you love for just $8.99.`, `Trending Now`, `More Reasons to Join`, `Enjoy on your TV`, `Download your shows to watch offline`, `Watch everywhere`, `Create profiles for kids`, `Frequently Asked Questions`, `What is Netflix?`, `How much does Netflix cost?`, `Where can I watch?`, `How do I cancel?`, `What can I watch on Netflix?`, `Is Netflix good for kids?` | Results and subsequent views |
| Controls | `button: Get Started`, `button: Learn More`, `button: Doing Life 1`, `button: A Different World 2`, `button: Why Did I Get Married Again? 3`, `button: Animals 4`, `button: Below 5`, `button: Beauty in Black 7`, `button: East of Eden 8`, `button: Haunted Hotel 9`, `button: Tires 10`, `button: What is Netflix?`, `button: How much does Netflix cost?`, `button: Where can I watch?`, `button: How do I cancel?`, `button: What can I watch on Netflix?`, `button: Is Netflix good for kids?`, `combobox: Select Language`, `link: Sign In`, `textbox: Email address`, `link: 1-844-569-7700`, `link: FAQ`, `link: Help Center`, `link: Account`, `link: Netflix House`, `link: Media Center`, `link: Investor Relations`, `link: Jobs`, `link: Netflix Shop`, `link: Redeem Gift Cards`, `link: Buy Gift Cards`, `link: Ways to Watch`, `link: Terms of Use`, `link: Privacy`, `link: Cookie Preferences`, `link: Corporate Information`, `link: Contact Us`, `link: Speed Test`, `link: Legal Notices`, `link: Only on Netflix`, `link: Do Not Sell or Share My Personal Information`, `link: Ad Choices` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Sign In](/login)`, `[1-844-569-7700](tel:1-844-569-7700)`, `[FAQ](https://help.netflix.com/support/412)`, `[Help Center](https://help.netflix.com)`, `[Account](/youraccount)`, `[Netflix House](https://www.netflixhouse.com/)`, `[Media Center](https://media.netflix.com/)`, `[Investor Relations](http://ir.netflix.com/)`, `[Jobs](https://jobs.netflix.com/jobs)`, `[Netflix Shop](https://netflix.shop/)`, `[Redeem Gift Cards](/redeem)`, `[Buy Gift Cards](/gift-cards)`, `[Ways to Watch](/watch)`, `[Terms of Use](https://help.netflix.com/legal/termsofuse)`, `[Privacy](https://help.netflix.com/legal/privacy)`, `[Cookie Preferences](#)`, `[Corporate Information](https://help.netflix.com/legal/corpinfo)`, `[Contact Us](https://help.netflix.com/contactus)`, `[Speed Test](https://fast.com)`, `[Legal Notices](https://help.netflix.com/legal/notices)`, `[Only on Netflix](https://www.netflix.com/browse/genre/839338)`, `[Do Not Sell or Share My Personal Information](https://www.netflix.com/dnsspi)`, `[Ad Choices](https://netflix.com/adchoices-us)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-63BF8DDF — Adaptive-bitrate streaming at scale
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-63BF8DDF`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-STREAMING-CAP-63BF8DDF` → `REQ-FUNC-63BF8DDF` → `TEST-FUNC-63BF8DDF`.

### REQ-FUNC-7C2B7041 — Personalised recommendations
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-7C2B7041`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-STREAMING-CAP-7C2B7041` → `REQ-FUNC-7C2B7041` → `TEST-FUNC-7C2B7041`.

### REQ-FUNC-9582CBDD — Profiles, parental controls, offline downloads
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-9582CBDD`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-STREAMING-CAP-9582CBDD` → `REQ-FUNC-9582CBDD` → `TEST-FUNC-9582CBDD`.

### REQ-FUNC-87E2AC4C — DRM (Widevine/FairPlay/PlayReady)
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-87E2AC4C`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-STREAMING-CAP-87E2AC4C` → `REQ-FUNC-87E2AC4C` → `TEST-FUNC-87E2AC4C`.

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
| [Jellyfin](https://jellyfin.org/) | Not recorded | GPL-2.0 (unverified) | Fully open, self-hosted media server and streaming. | The clearest open replacement for the software. | Proposed evaluation lead; no verified foundation |
| [PeerTube](https://joinpeertube.org/) | [Repository](https://github.com/framasoft/peertube) | AGPL-3.0 (unverified) | Federated video hosting/streaming. | Platform-level alternative. | Proposed evaluation lead; no verified foundation |
| [Kodi](https://kodi.tv/) | Not recorded | GPL-2.0 (unverified) | Open media centre. | Client-side playback. | Proposed evaluation lead; no verified foundation |
| [Plex / Emby](https://www.plex.tv/) | Not recorded | proprietary (unverified) | Popular media servers. | Not open source. | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-63BF8DDF** → `REQ-FUNC-63BF8DDF`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-7C2B7041** → `REQ-FUNC-7C2B7041`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-9582CBDD** → `REQ-FUNC-9582CBDD`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-87E2AC4C** → `REQ-FUNC-87E2AC4C`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-63BF8DDF, REQ-FUNC-7C2B7041, REQ-FUNC-9582CBDD, REQ-FUNC-87E2AC4C
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-63BF8DDF, REQ-FUNC-7C2B7041, REQ-FUNC-9582CBDD, REQ-FUNC-87E2AC4C
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
- **Completion:** Trace: REQ-FUNC-63BF8DDF, REQ-FUNC-7C2B7041, REQ-FUNC-9582CBDD, REQ-FUNC-87E2AC4C; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.netflix.com/) | Not recorded | Netflix Streaming is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_ce771cfc0eb32389548eb43ce294121604ed2ea892ef495a01ac03ef3120c6f6` | Netflix Streaming Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.netflix.com/) | 2026-10-13T19:00:31.351Z | A dated unauthenticated snapshot exposed controls button: Get Started, button: Learn More, button: Doing Life 1, button: A Different World 2, button: Why Did I Get Married Again? 3, button: Animals 4, button: Below 5, button: Beauty in Black 7, button: East of Eden 8, button: Haunted Hotel 9, button: Tires 10, button: What is Netflix?, button: How much does Netflix cost?, button: Where can I watch?, button: How do I cancel?, button: What can I watch on Netflix?, button: Is Netflix good for kids?, combobox: Select Language, link: Sign In, textbox: Email address, link: 1-844-569-7700, link: FAQ, link: Help Center, link: Account, link: Netflix House, link: Media Center, link: Investor Relations, link: Jobs, link: Netflix Shop, link: Redeem Gift Cards, link: Buy Gift Cards, link: Ways to Watch, link: Terms of Use, link: Privacy, link: Cookie Preferences, link: Corporate Information, link: Contact Us, link: Speed Test, link: Legal Notices, link: Only on Netflix, link: Do Not Sell or Share My Personal Information, link: Ad Choices and landmarks banner, form: Sign up or restart your membership with Netflix., form: Sign up or restart your membership with Netflix., contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `netflix-streaming`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Netflix Streaming is the core on-demand video streaming service offered by Netflix, providing a vast library of movies, TV shows, and original content to subscribers worldwide. It is a pioneer in streaming technology, adaptive bitrate, and recommendation systems.

# 2. Product identity and ownership

- **Official name:** Netflix Streaming
- **Company and business unit:** Netflix
- **Parent organization:** Netflix Inc. (standalone public company)
- **Original launch date:** 2007 ( DVD rental transition to streaming)
- **Current lifecycle status:** active
- **Previous names:** None (streaming service launched 2007; DVD service rebranded to DVD.com)
- **Acquisitions or ownership changes:** None; Netflix is a standalone public company
- **Related products:** Netflix DVD, Netflix App, Netflix Games, Shuffle, Max (formerly HBO Max - separate), Amazon Prime Video
- **Official website:** https://www.netflix.com/
- **Official documentation:** https://help.netflix.com/

# 3. Product capabilities

- On-demand video streaming with adaptive bitrate streaming
- Multiple concurrent streams per subscription tier
- Offline download for mobile apps
- User profiles and parental controls
- Recommendation algorithm (personalized content suggestions)
- Search and content discovery
- Audio language and subtitle selection
- 4K and HDR support (Dolby Vision, HDR10)
- Spatial audio support
- Smart download (auto-download next episodes)
- Skip intro and episode auto-advance
- Binge-watch detection and recommendations
- Account management and device management
- Netflix House (physical events and retail - limited)

# 4. Technical architecture

Netflix's streaming infrastructure is highly scaled:

- Adaptive bitrate streaming (Dynamic Optimizer)
- Global content delivery network (Open Connect)
- Video encoding pipeline (multiple codecs: AVC, HEVC, VP9, AV1)
- Recommendation engine (personalization algorithms)
- Content metadata and classification system
- Client applications (smart TVs, mobile, web, game consoles)
- DRM and content protection (Widevine, FairPlay, PlayReady)
- Analytics and A/B testing framework
- ABR ladders and renditions per title

Full architecture is proprietary; client API and ABR behavior are partially documented.

# 5. User workflows

Primary workflows: content discovery, playback control, profile management, and download. Essential: searching, playing, pausing, resuming. Advanced: parental controls, profile switching, audio/subtitle selection, binge-watch features.

# 6. Pricing and access

- Tiered pricing: Basic, Standard, Premium (varies by region)
- Basic: 1 stream, SD
- Standard: 2 streams, Full HD
- Premium: 4 streams, 4K UHD + HDR
- Free trial (varies by region, increasingly rare)
- No ad-supported tier (ad-tier launched 2022 in select regions)
- Ads tier: Lower price with commercials

# 7. API and integration surface

- Netflix API (limited; primarily for partners)
- RESTful API for content metadata (requires partner integration)
- Oauth 2.0 for authentication (partner-facing)
- No public API for consumer account management or video playback

# 8. Existing open-source alternatives

- Plex (media server and streaming)
- Jellyfin (media server and streaming)
- Peertube (Fediverse video)
- No open-source alternative replicates Netflix's recommendation algorithm, content library, or DRM ecosystem.

# 9. Alternative comparison

Plex and Jellyfin provide media server functionality with streaming. They differ in content licensing, recommendation algorithm, and DRM. PeerTube offers federated video but different scale and discovery models.

# 10. Missing capabilities and opportunity analysis

Recommendation algorithm, content licensing framework, and DRM ecosystem represent significant gaps. Plex/Jellyfin can self-host media libraries but not Netflix's streaming service.

# 11. RAE implementation strategy

Focus on media server self-hosting (Plex, Jellyfin) for personal/local content. Full streaming service replication is out of scope due to content licensing and DRM requirements.

# 12. Security, privacy, and compliance

DRM (Widevine, FairPlay, PlayReady), account security, parental controls. Netflix privacy policy governs data handling. Compliance with COPPA for children's content.

# 13. Sources and evidence

- https://www.netflix.com/ (product page)
- https://help.netflix.com/ (support documentation)
- https://github.com/jellyfin/jellyfin (open-source media server reference)

# 14. Open questions

- What is the recommendation algorithm comparison between Plex/Jellyfin and Netflix?
- How do DRM ecosystems (Widevine, FairPlay, PlayReady) compare in compatibility?
- What bandwidth and storage requirements limit independent video platforms?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Plex and Jellyfin provide media server functionality. Netflix's recommendation algorithm, content library, and DRM are not replicable without licensing.

---

# 17. RAE implementation strategy (continued)

Focus on media server self-hosting for local content. Netflix streaming service replication is out of scope.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier netflix-streaming` and inspect canonical identity with `npx rae-faang products show netflix-streaming --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang netflix-streaming --out ./netflix-streaming.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit netflix-streaming --out ./netflix-streaming-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`netflix-streaming`).
- Dossier: [research/companies/netflix/products/netflix-streaming.md](../../../research/companies/netflix/products/netflix-streaming.md).
- REA capture: [catalog/rea/netflix/netflix-streaming.md](../../rea/netflix/netflix-streaming.md) (2026-10-13T19:00:31.351Z); raw record: [catalog/rea/evidence/netflix-streaming.json](../../rea/evidence/netflix-streaming.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.netflix.com/) — Netflix Streaming is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Netflix Streaming Public web-surface observation (REA)](https://www.netflix.com/) — A dated unauthenticated snapshot exposed controls button: Get Started, button: Learn More, button: Doing Life 1, button: A Different World 2, button: Why Did I Get Married Again? 3, button: Animals 4, button: Below 5, button: Beauty in Black 7, button: East of Eden 8, button: Haunted Hotel 9, button: Tires 10, button: What is Netflix?, button: How much does Netflix cost?, button: Where can I watch?, button: How do I cancel?, button: What can I watch on Netflix?, button: Is Netflix good for kids?, combobox: Select Language, link: Sign In, textbox: Email address, link: 1-844-569-7700, link: FAQ, link: Help Center, link: Account, link: Netflix House, link: Media Center, link: Investor Relations, link: Jobs, link: Netflix Shop, link: Redeem Gift Cards, link: Buy Gift Cards, link: Ways to Watch, link: Terms of Use, link: Privacy, link: Cookie Preferences, link: Corporate Information, link: Contact Us, link: Speed Test, link: Legal Notices, link: Only on Netflix, link: Do Not Sell or Share My Personal Information, link: Ad Choices and landmarks banner, form: Sign up or restart your membership with Netflix., form: Sign up or restart your membership with Netflix., contentinfo. (VERIFIED; accessed 2026-10-13T19:00:31.351Z).
