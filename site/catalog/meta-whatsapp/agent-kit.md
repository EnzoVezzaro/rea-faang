---
name: meta-whatsapp
description: "Evidence-aware build skill for WhatsApp (meta-whatsapp); investigate, assess reuse, implement scoped behavior and verify."
---

# WhatsApp — implementation skill (`meta-whatsapp`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **WhatsApp**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **WhatsApp** (`meta-whatsapp`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **WhatsApp** / `meta-whatsapp` | Product catalog |
| Company / category | Meta / `messaging` / `messaging` | Product catalog |
| Official website / docs | [https://www.whatsapp.com/](https://www.whatsapp.com/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **messaging** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `META-WHATSAPP-CAP-78B32E86` | End-to-end encrypted messaging and calls | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-WHATSAPP-CAP-77C1D482` | Group chats, media sharing, status | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-WHATSAPP-CAP-915D0166` | Multi-device sync | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Features`, `button: Get started`, `button: English`, `link: WhatsApp's homepage`, `link: Privacy feature on WhatsApp`, `link: Blog on WhatsApp`, `link: Available apps on WhatsApp`, `link: WhatsApp Help Center`, `link: Business feature on WhatsApp`, `link: Log in to the WhatsApp app`, `link: Download the WhatsApp app`, `link: WhatsApp Privacy Policy`, `link: WhatsApp Terms of Service`, `textbox: Phone number input box`, `link: Login to WhatsApp Web`, `link: Learn about voice and video calls`, `link: Learn about end-to-end encryption`, `link: Learn about communities`, `link: Learn about messaging`, `link: Learn about whatsapp business`, `link: Download WhatsApp directly to your device`, `link: Features`, `link: WhatsApp Blogs for our latest announcements`, `link: WhatsApp's security features`, `link: For Business`, `link: WhatsApp's mission statement`, `link: Careers`, `link: Visit WhatsApp's brand center`, `link: WhatsApp's privacy features`, `link: Mobile`, `link: Desktop`, `link: Tablet`, `link: Get WhatsApp support`, `link: WhatsApp Help Center homepage`, `link: Download WhatsApp`, `link: WhatsApp's latest security advisories`, `link: WhatsApp legal policies`, `link: Sitemap`, `link: Twitter`, `link: Youtube`, `link: Instagram`, `link: Facebook`, `link: Threads`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **End-to-end encrypted messaging and calls:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Group chats, media sharing, status:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Multi-device sync:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Message privately`, `Create an account`, `New! Call on WhatsApp Web`, `With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.`, `Never miss a moment with voice and video calls`, `Speak freely`, `Keep in touch with your groups`, `Say what you feel`, `Transform your business`, `What we do`, `Who we are`, `Use WhatsApp`, `Need help?` | Results and subsequent views |
| Controls | `button: Features`, `button: Get started`, `button: English`, `link: WhatsApp's homepage`, `link: Privacy feature on WhatsApp`, `link: Blog on WhatsApp`, `link: Available apps on WhatsApp`, `link: WhatsApp Help Center`, `link: Business feature on WhatsApp`, `link: Log in to the WhatsApp app`, `link: Download the WhatsApp app`, `link: WhatsApp Privacy Policy`, `link: WhatsApp Terms of Service`, `textbox: Phone number input box`, `link: Login to WhatsApp Web`, `link: Learn about voice and video calls`, `link: Learn about end-to-end encryption`, `link: Learn about communities`, `link: Learn about messaging`, `link: Learn about whatsapp business`, `link: Download WhatsApp directly to your device`, `link: Features`, `link: WhatsApp Blogs for our latest announcements`, `link: WhatsApp's security features`, `link: For Business`, `link: WhatsApp's mission statement`, `link: Careers`, `link: Visit WhatsApp's brand center`, `link: WhatsApp's privacy features`, `link: Mobile`, `link: Desktop`, `link: Tablet`, `link: Get WhatsApp support`, `link: WhatsApp Help Center homepage`, `link: Download WhatsApp`, `link: WhatsApp's latest security advisories`, `link: WhatsApp legal policies`, `link: Sitemap`, `link: Twitter`, `link: Youtube`, `link: Instagram`, `link: Facebook`, `link: Threads` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[WhatsApp's homepage](https://www.whatsapp.com/)`, `[Privacy feature on WhatsApp](https://www.whatsapp.com/privacy)`, `[Blog on WhatsApp](https://blog.whatsapp.com/)`, `[Available apps on WhatsApp](https://www.whatsapp.com/download)`, `[WhatsApp Help Center](https://faq.whatsapp.com/)`, `[Business feature on WhatsApp](https://whatsappbusiness.com/)`, `[Log in to the WhatsApp app](https://web.whatsapp.com/)`, `[Download the WhatsApp app](https://web.whatsapp.com/desktop/mac_native/release/?configuration=Release)`, `[WhatsApp Privacy Policy](https://www.whatsapp.com/legal/privacy-policy)`, `[WhatsApp Terms of Service](https://www.whatsapp.com/legal/terms-of-service)`, `[Login to WhatsApp Web](https://web.whatsapp.com/)`, `[Learn about voice and video calls](https://web.whatsapp.com/)`, `[Learn about voice and video calls](https://www.whatsapp.com/calling)`, `[Learn about end-to-end encryption](https://www.whatsapp.com/privacy)`, `[Learn about communities](https://www.whatsapp.com/community)`, `[Learn about messaging](https://www.whatsapp.com/messaging)`, `[Learn about whatsapp business](https://whatsappbusiness.com/)`, `[Download WhatsApp directly to your device](https://web.whatsapp.com/desktop/mac_native/release/?configuration=Release)`, `[Features](https://www.whatsapp.com/calling)`, `[WhatsApp Blogs for our latest announcements](https://blog.whatsapp.com/)`, `[WhatsApp's security features](https://www.whatsapp.com/security)`, `[For Business](https://whatsappbusiness.com/)`, `[WhatsApp's mission statement](https://www.whatsapp.com/about)`, `[Careers](https://www.metacareers.com/jobs?divisions[0]=WhatsApp)`, `[Visit WhatsApp's brand center](https://www.facebook.com/brand/resources/whatsapp/whatsapp-brand)`, `[WhatsApp's privacy features](https://www.whatsapp.com/privacy)`, `[Mobile](https://www.whatsapp.com/download/mobile)`, `[Desktop](https://www.whatsapp.com/download/desktop)`, `[Tablet](https://www.whatsapp.com/download/tablet)`, `[Get WhatsApp support](https://www.whatsapp.com/contact)`, `[WhatsApp Help Center homepage](https://faq.whatsapp.com/)`, `[Download WhatsApp](https://www.whatsapp.com/download)`, `[WhatsApp's latest security advisories](https://www.whatsapp.com/security/advisories)`, `[WhatsApp legal policies](https://www.whatsapp.com/legal/)`, `[Sitemap](https://www.whatsapp.com/sitemap)`, `[Twitter](https://x.com/whatsapp)`, `[Youtube](https://www.youtube.com/channel/UCAuerig2N-RZWJT8x75V9yw)`, `[Instagram](https://www.instagram.com/whatsapp/?hl=en)`, `[Facebook](https://www.facebook.com/profile.php?id=100064758844406)`, `[Threads](https://www.threads.com/@whatsapp)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-78B32E86 — End-to-end encrypted messaging and calls
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-78B32E86`; fixture and expected output must be specified from evidence.
- **Trace:** `META-WHATSAPP-CAP-78B32E86` → `REQ-FUNC-78B32E86` → `TEST-FUNC-78B32E86`.

### REQ-FUNC-77C1D482 — Group chats, media sharing, status
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-77C1D482`; fixture and expected output must be specified from evidence.
- **Trace:** `META-WHATSAPP-CAP-77C1D482` → `REQ-FUNC-77C1D482` → `TEST-FUNC-77C1D482`.

### REQ-FUNC-915D0166 — Multi-device sync
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-915D0166`; fixture and expected output must be specified from evidence.
- **Trace:** `META-WHATSAPP-CAP-915D0166` → `REQ-FUNC-915D0166` → `TEST-FUNC-915D0166`.

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
| [Matrix / Element](https://element.io/) | Not recorded | Apache-2.0 (unverified) | Federated, end-to-end encrypted messaging; self-hostable. | The main open alternative. | Proposed evaluation lead; no verified foundation |
| [SimpleX](https://simplex.chat/) | Not recorded | AGPL-3.0 (unverified) | Private messenger with no user identifiers. | Strong metadata privacy. | Proposed evaluation lead; no verified foundation |
| [Signal](https://signal.org/) | Not recorded | GPL-3.0 (client) (unverified) | Client is open source. | Server is not open source. | Proposed evaluation lead; no verified foundation |
| [XMPP (Conversations)](https://xmpp.org/) | Not recorded | Apache-2.0 / GPL-3.0 (unverified) | Open federated messaging protocol. | The older federated standard. | Proposed evaluation lead; no verified foundation |
| [Briar / Revolt](https://briarproject.org/) | Not recorded | GPL-3.0 / AGPL-3.0 (unverified) | Peer-to-peer and community chat. | Specialised alternatives. | Proposed evaluation lead; no verified foundation |

No candidate has been independently cloned, executed, license-reviewed or security-reviewed by this generator.
## 10. Security and privacy

No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.

Product-specific review: Never invent cryptography; use an established audited protocol/library and review key/device/membership changes. Do not claim compliance, privacy or security parity without scoped assessment.

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
- **EDGE-009:** Duplicate/out-of-order delivery, key/device or membership change. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-78B32E86** → `REQ-FUNC-78B32E86`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-77C1D482** → `REQ-FUNC-77C1D482`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-915D0166** → `REQ-FUNC-915D0166`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-78B32E86, REQ-FUNC-77C1D482, REQ-FUNC-915D0166
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-78B32E86, REQ-FUNC-77C1D482, REQ-FUNC-915D0166
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
- **Completion:** Trace: REQ-FUNC-78B32E86, REQ-FUNC-77C1D482, REQ-FUNC-915D0166; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.whatsapp.com/) | Not recorded | WhatsApp is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_5073e54921a52ed3d2811b82bad647e35edab7dbe6fea66ec1de8dd0161e13b5` | WhatsApp Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.whatsapp.com/) | 2026-10-13T19:00:23.758Z | A dated unauthenticated snapshot exposed controls button: Features, button: Get started, button: English, link: WhatsApp's homepage, link: Privacy feature on WhatsApp, link: Blog on WhatsApp, link: Available apps on WhatsApp, link: WhatsApp Help Center, link: Business feature on WhatsApp, link: Log in to the WhatsApp app, link: Download the WhatsApp app, link: WhatsApp Privacy Policy, link: WhatsApp Terms of Service, textbox: Phone number input box, link: Login to WhatsApp Web, link: Learn about voice and video calls, link: Learn about end-to-end encryption, link: Learn about communities, link: Learn about messaging, link: Learn about whatsapp business, link: Download WhatsApp directly to your device, link: Features, link: WhatsApp Blogs for our latest announcements, link: WhatsApp's security features, link: For Business, link: WhatsApp's mission statement, link: Careers, link: Visit WhatsApp's brand center, link: WhatsApp's privacy features, link: Mobile, link: Desktop, link: Tablet, link: Get WhatsApp support, link: WhatsApp Help Center homepage, link: Download WhatsApp, link: WhatsApp's latest security advisories, link: WhatsApp legal policies, link: Sitemap, link: Twitter, link: Youtube, link: Instagram, link: Facebook, link: Threads and landmarks banner, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `meta-whatsapp`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

WhatsApp is a globally popular messaging platform offering end-to-end encrypted text, voice, and video communications. It is one of the world's most widely used messaging applications, owned by Meta Platforms Inc.

# 2. Product identity and ownership

- **Official name:** WhatsApp
- **Company and business unit:** Meta
- **Parent organization:** Meta Platforms Inc.
- **Original launch date:** 2009
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** Acquired by Facebook (now Meta) in 2014
- **Related products:** Instagram, Facebook, Messenger, Threads, Meta AI
- **Official website:** https://www.whatsapp.com/
- **Official documentation:** https://faq.whatsapp.com/

# 3. Product capabilities

- End-to-end encrypted text messaging
- Voice and video calling
- Group chats with admin controls
- Status updates (ephemeral posts)
- End-to-end encrypted file sharing
- Whats Business API for customer communication
- WhatsApp Payments (in select regions)
- Disappearing messages
- Message reactions and quoting
- Multi-device support (linked devices)
- Encrypted backups (optional)
- Meta AI integration (in select regions)

# 4. Technical architecture

WhatsApp architecture:

- End-to-end encryption via Signal Protocol
- Mobile client (iOS, Android) with companion web/desktop (linked device)
- Server infrastructure for message routing and delivery
- Key management via Double Ratchet algorithm
- Backend services for presence, status, and group management

End-to-end encryption details are proprietary; Signal Protocol is independently audited open source. Server infrastructure and key management at scale are not publicly documented.

# 5. User workflows

Primary workflows: sending messages, making calls, creating groups, and sharing media. Essential: text messaging, end-to-end encryption. Advanced: group administration, payment integration, multi-device linking.

# 6. Pricing and access

Free to use (phone number verification required). No subscription fee. WhatsApp Business API has tiered pricing. WhatsApp Payments has transaction fees in regions where available.

# 7. API and integration surface

- WhatsApp Business API (REST, webhooks)
- Message templates and structured content
- Contact management and broadcasting
- Cloud API for message status and delivery receipts
- No public consumer API for end-to-end encrypted messaging

# 8. Existing open-source alternatives

- Signal (open-source, E2EE-focused messenger)
- Element / Matrix (federated messaging)
- Telegram (cloud-based, optional encryption)
- Threema (paid, E2EE)
- No open-source alternative replicates WhatsApp's network effect, platform integration, or business API ecosystem.

# 9. Alternative comparison

Signal provides the closest E2EE-focused alternative. Matrix/Element offers federated architecture. Telegram offers wider feature set but different security model. None replicate WhatsApp's network effect or business API ecosystem.

# 10. Missing capabilities and opportunity analysis

End-to-end encryption key management at scale, business API ecosystem, and platform integration represent gaps. Signal covers E2EE but not business features. Matrix offers federation but different user experience.

# 11. RAE implementation strategy

Not recommended to build a consumer messaging platform from scratch. Consider contributing to Signal or building on Matrix for federated messaging. Focus on specific workflows (E2EE communication, business API) rather than full platform replication.

# 12. Security, privacy, and compliance

End-to-end encryption (Signal Protocol), meta-data privacy, group management. WhatsApp metadata subject to Facebook's privacy policy. End-to-end encryption ensures content privacy but not metadata privacy.

# 13. Sources and evidence

- https://www.whatsapp.com/ (product page)
- https://faq.whatsapp.com/ (documentation)
- https://github.com/signalapp/Signal-Server (Signal reference)

# 14. Open questions

- What is the key management scale comparison between WhatsApp and Signal?
- How do business API patterns compare across WhatsApp, Signal, and Matrix?
- What metadata is retained and how does it affect privacy?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Signal provides the closest E2EE alternative. Matrix/Element offers federation. Telegram has different security model. None replicate WhatsApp's network effect.

---

# 17. RAE implementation strategy (continued)

Focus on E2EE communication patterns (Signal) or federated messaging (Matrix). Full platform replication is out of scope.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier meta-whatsapp` and inspect canonical identity with `npx rae-faang products show meta-whatsapp --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang meta-whatsapp --out ./meta-whatsapp.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit meta-whatsapp --out ./meta-whatsapp-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`meta-whatsapp`).
- Dossier: [research/companies/meta/products/meta-whatsapp.md](../../../research/companies/meta/products/meta-whatsapp.md).
- REA capture: [catalog/rea/meta/meta-whatsapp.md](../../rea/meta/meta-whatsapp.md) (2026-10-13T19:00:23.758Z); raw record: [catalog/rea/evidence/meta-whatsapp.json](../../rea/evidence/meta-whatsapp.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.whatsapp.com/) — WhatsApp is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [WhatsApp Public web-surface observation (REA)](https://www.whatsapp.com/) — A dated unauthenticated snapshot exposed controls button: Features, button: Get started, button: English, link: WhatsApp's homepage, link: Privacy feature on WhatsApp, link: Blog on WhatsApp, link: Available apps on WhatsApp, link: WhatsApp Help Center, link: Business feature on WhatsApp, link: Log in to the WhatsApp app, link: Download the WhatsApp app, link: WhatsApp Privacy Policy, link: WhatsApp Terms of Service, textbox: Phone number input box, link: Login to WhatsApp Web, link: Learn about voice and video calls, link: Learn about end-to-end encryption, link: Learn about communities, link: Learn about messaging, link: Learn about whatsapp business, link: Download WhatsApp directly to your device, link: Features, link: WhatsApp Blogs for our latest announcements, link: WhatsApp's security features, link: For Business, link: WhatsApp's mission statement, link: Careers, link: Visit WhatsApp's brand center, link: WhatsApp's privacy features, link: Mobile, link: Desktop, link: Tablet, link: Get WhatsApp support, link: WhatsApp Help Center homepage, link: Download WhatsApp, link: WhatsApp's latest security advisories, link: WhatsApp legal policies, link: Sitemap, link: Twitter, link: Youtube, link: Instagram, link: Facebook, link: Threads and landmarks banner, contentinfo. (VERIFIED; accessed 2026-10-13T19:00:23.758Z).
