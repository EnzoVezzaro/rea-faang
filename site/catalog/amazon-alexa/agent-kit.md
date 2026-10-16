---
name: amazon-alexa
description: "Evidence-aware build skill for Alexa (amazon-alexa); investigate, assess reuse, implement scoped behavior and verify."
---

# Alexa — implementation skill (`amazon-alexa`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Alexa**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Alexa** (`amazon-alexa`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Alexa** / `amazon-alexa` | Product catalog |
| Company / category | Amazon / `ai_application` / `voice-assistant`, `smart-home` | Product catalog |
| Official website / docs | [https://developer.amazon.com/alexa](https://developer.amazon.com/alexa) / Not recorded | URL lead; compiler does not fetch source |
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
| `AMAZON-ALEXA-CAP-9B53288D` | Wake word and voice requests | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-ALEXA-CAP-5C2ABED7` | Smart-home control | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-ALEXA-CAP-66D0F523` | Skills | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: All Search`, `button: AI Mode`, `button: Create Alexa Skills`, `button: Build Alexa Devices`, `button: Engage Solution Providers`, `button: Develop Enterprise Solutions`, `button: English (US)`, `link: Alexa Developer Console`, `textbox: Search`, `link: Sign In`, `link: `, `link: Skill Builders`, `link: Alexa Skills Kit`, `link: Documentation`, `link: Developer Console`, `link: Skill Agencies`, `link: Device Makers`, `link: Overview`, `link: Development Resources`, `link: Business Resources`, `link: What's New`, `link: Consoles`, `link: Alexa Connect Kit`, `link: Alexa Routines Kit`, `link: Radio Skills Kit`, `link: Alexa Built-In`, `link: Alexa Smart Home`, `link: Dash Services`, `link: Hospitality`, `link: Senior Living`, `link: Echo Branding`, `link: Alexa Branding`, `link: Alexa Fund`, `link: Alexa Champions`, `link: Voice Interoperability Initiative`, `link: Docs`, `link: Smart Home Skills`, `link: ASK CLI and SMAPI`, `link: Alexa Trainings and Workshops`, `link: Matter`, `link: Blog`, `link: Alexa Auto`, `link: Alexa Science`, `link: Learn more`, `link: Create Alexa Skills`, `link: Build Alexa Devices`, `link: Engage Solution Providers`, `link: Explore Business Solutions`, `link: Explore Alexa for Skill Builders`, `link: Explore Alexa for Device Makers`, `link: Explore Enterprise Solutions`, `link: Back To Top`, `link: Get Started`, `link: Get Deeper`, `link: Grow Your Business`, `link: Tutorials & Code Samples`, `link: Skill-Building Agencies`, `link: Agreements and Terms`, `link: Program Materials License Agreement`, `link: Amazon Developers Services Portal Terms of Use`, `link: Alexa on Slack`, `link: Alexa Skills Kit Blog`, `link: Device Makers Blog`, `link: AWS Blog`, `link: Amazon Developer Support`, `link: Contact Us`, `link: Stack Overflow`, `link: Amazon Alexa`, `link: Amazon business`, `link: Amazon Web Services`, `link: Amazon Dash Replenishment`, `link: Terms`, `link: Alexa Developer Home`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Wake word and voice requests:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Smart-home control:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Skills:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `navigation`, `banner`, `navigation`, `contentinfo`, `navigation`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `AI-native SDKs for Alexa+`, `Helps your customers get things done.`, `What Is Alexa?`, `What Can You Build with Alexa?`, `Create Alexa Skills`, `Build Alexa Devices`, `Develop Enterprise Solutions`, `Alexa Skills Kit`, `ASK Resources`, `Device Makers`, `Alexa Built-in Devices`, `Alexa Connected Devices`, `Solution Providers`, `Agreements`, `Community`, `Blogs`, `Support` | Results and subsequent views |
| Controls | `button: All Search`, `button: AI Mode`, `button: Create Alexa Skills`, `button: Build Alexa Devices`, `button: Engage Solution Providers`, `button: Develop Enterprise Solutions`, `button: English (US)`, `link: Alexa Developer Console`, `textbox: Search`, `link: Sign In`, `link: `, `link: Skill Builders`, `link: Alexa Skills Kit`, `link: Documentation`, `link: Developer Console`, `link: Skill Agencies`, `link: Device Makers`, `link: Overview`, `link: Development Resources`, `link: Business Resources`, `link: What's New`, `link: Consoles`, `link: Alexa Connect Kit`, `link: Alexa Routines Kit`, `link: Radio Skills Kit`, `link: Alexa Built-In`, `link: Alexa Smart Home`, `link: Dash Services`, `link: Hospitality`, `link: Senior Living`, `link: Echo Branding`, `link: Alexa Branding`, `link: Alexa Fund`, `link: Alexa Champions`, `link: Voice Interoperability Initiative`, `link: Docs`, `link: Smart Home Skills`, `link: ASK CLI and SMAPI`, `link: Alexa Trainings and Workshops`, `link: Matter`, `link: Blog`, `link: Alexa Auto`, `link: Alexa Science`, `link: Learn more`, `link: Create Alexa Skills`, `link: Build Alexa Devices`, `link: Engage Solution Providers`, `link: Explore Business Solutions`, `link: Explore Alexa for Skill Builders`, `link: Explore Alexa for Device Makers`, `link: Explore Enterprise Solutions`, `link: Back To Top`, `link: Get Started`, `link: Get Deeper`, `link: Grow Your Business`, `link: Tutorials & Code Samples`, `link: Skill-Building Agencies`, `link: Agreements and Terms`, `link: Program Materials License Agreement`, `link: Amazon Developers Services Portal Terms of Use`, `link: Alexa on Slack`, `link: Alexa Skills Kit Blog`, `link: Device Makers Blog`, `link: AWS Blog`, `link: Amazon Developer Support`, `link: Contact Us`, `link: Stack Overflow`, `link: Amazon Alexa`, `link: Amazon business`, `link: Amazon Web Services`, `link: Amazon Dash Replenishment`, `link: Terms`, `link: Alexa Developer Home` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Alexa Developer Console](/alexa)`, `[Sign In](https://developer.amazon.com/alexa/console/signin)`, `[](#)`, `[Skill Builders](/en-US/alexa/alexa-skills-kit)`, `[Alexa Skills Kit](/en-US/alexa/alexa-skills-kit)`, `[Documentation](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/what-is-the-alexa-skills-kit.html)`, `[Developer Console](https://developer.amazon.com/alexa/console/ask)`, `[Skill Agencies](https://developer.amazon.com/en-US/alexa/skill-building-agencies)`, `[Device Makers](/en-US/alexa/devices)`, `[Overview](https://developer.amazon.com/alexa/devices/alexa-built-in)`, `[Overview](https://developer.amazon.com/alexa/devices/connected-devices)`, `[Development Resources](https://developer.amazon.com/alexa/devices/connected-devices/development-resources)`, `[Business Resources](https://developer.amazon.com/alexa/devices/connected-devices/business-resources)`, `[What's New](https://developer.amazon.com/alexa/devices/connected-devices/whats-new)`, `[Consoles](https://developer.amazon.com/alexa/devices/connected-devices/consoles)`, `[Alexa Connect Kit](/en-US/alexa/solution-providers/alexa-connect-kit)`, `[Alexa Routines Kit](https://developer.amazon.com/en-US/alexa/alexa-routines-kit/)`, `[Radio Skills Kit](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/radio-skills-kit)`, `[Alexa Built-In](https://developer.amazon.com/alexa/devices/alexa-built-in)`, `[Alexa Smart Home](https://developer.amazon.com/en-US/alexa/smarthomeinsider)`, `[Dash Services](https://developer.amazon.com/en-US/alexa/dash-services)`, `[Hospitality](https://alexa.design/hospitality)`, `[Senior Living](https://developer.amazon.com/en-US/alexa/seniorliving)`, `[Echo Branding](https://developer.amazon.com/en-US/alexa/branding/echo-guidelines)`, `[Alexa Branding](https://developer.amazon.com/en-US/alexa/branding/alexa-guidelines)`, `[Alexa Fund](https://developer.amazon.com/alexa/alexa-startups/alexa-fund)`, `[Alexa Champions](https://developer.amazon.com/alexa/champions)`, `[Voice Interoperability Initiative](https://developer.amazon.com/en-US/alexa/voice-interoperability)`, `[Docs](https://developer.amazon.com/en-US/docs/alexa/documentation-home.html)`, `[Alexa Skills Kit](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/what-is-the-alexa-skills-kit.html)`, `[Smart Home Skills](https://developer.amazon.com/docs/smarthome/understand-the-smart-home-skill-api.html)`, `[ASK CLI and SMAPI](https://developer.amazon.com/docs/smapi/ask-cli-intro.html)`, `[Alexa Connect Kit](https://developer.amazon.com/docs/alexa/ack/overview.html)`, `[Hospitality](https://developer.amazon.com/en-US/docs/alexa/alexa-smart-properties/about-alexa-for-hospitality.html)`, `[Senior Living](https://developer.amazon.com/en-US/docs/alexa/alexa-smart-properties/about-asp-in-senior-living.html)`, `[Alexa Trainings and Workshops](https://developer.amazon.com/en-US/alexa/trainings_and_workshops)`, `[Matter](https://developer.amazon.com/en-US/docs/alexa/smarthome/matter-support.html)`, `[Blog](https://developer.amazon.com/en-US/blogs/alexa)`, `[Alexa Skills Kit](https://developer.amazon.com/en-US/blogs/alexa/alexa-skills-kit)`, `[Device Makers](https://developer.amazon.com/en-US/blogs/alexa/device-makers)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-9B53288D — Wake word and voice requests
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-9B53288D`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ALEXA-CAP-9B53288D` → `REQ-FUNC-9B53288D` → `TEST-FUNC-9B53288D`.

### REQ-FUNC-5C2ABED7 — Smart-home control
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-5C2ABED7`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ALEXA-CAP-5C2ABED7` → `REQ-FUNC-5C2ABED7` → `TEST-FUNC-5C2ABED7`.

### REQ-FUNC-66D0F523 — Skills
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-66D0F523`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ALEXA-CAP-66D0F523` → `REQ-FUNC-66D0F523` → `TEST-FUNC-66D0F523`.

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
| [OpenVoiceOS](https://openvoiceos.org/) | Not recorded | Apache-2.0 (unverified) | Open voice assistant platform (Mycroft successor). | No limitation recorded | Proposed evaluation lead; no verified foundation |
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

- **TEST-FUNC-9B53288D** → `REQ-FUNC-9B53288D`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-5C2ABED7** → `REQ-FUNC-5C2ABED7`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-66D0F523** → `REQ-FUNC-66D0F523`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-9B53288D, REQ-FUNC-5C2ABED7, REQ-FUNC-66D0F523
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-9B53288D, REQ-FUNC-5C2ABED7, REQ-FUNC-66D0F523
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
- **Completion:** Trace: REQ-FUNC-9B53288D, REQ-FUNC-5C2ABED7, REQ-FUNC-66D0F523; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://developer.amazon.com/alexa) | Not recorded | Alexa is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_922364d49ab497db2c4f2b923751153eee4e47281f3e3f25330c3c2bbbcc19d6` | Alexa Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://developer.amazon.com/en-US/alexa) | 2026-10-14T03:56:14.783Z | A dated unauthenticated snapshot exposed controls button: All Search, button: AI Mode, button: Create Alexa Skills, button: Build Alexa Devices, button: Engage Solution Providers, button: Develop Enterprise Solutions, button: English (US), link: Alexa Developer Console, textbox: Search, link: Sign In, link: , link: Skill Builders, link: Alexa Skills Kit, link: Documentation, link: Developer Console, link: Skill Agencies, link: Device Makers, link: Overview, link: Development Resources, link: Business Resources, link: What's New, link: Consoles, link: Alexa Connect Kit, link: Alexa Routines Kit, link: Radio Skills Kit, link: Alexa Built-In, link: Alexa Smart Home, link: Dash Services, link: Hospitality, link: Senior Living, link: Echo Branding, link: Alexa Branding, link: Alexa Fund, link: Alexa Champions, link: Voice Interoperability Initiative, link: Docs, link: Smart Home Skills, link: ASK CLI and SMAPI, link: Alexa Trainings and Workshops, link: Matter, link: Blog, link: Alexa Auto, link: Alexa Science, link: Learn more, link: Create Alexa Skills, link: Build Alexa Devices, link: Engage Solution Providers, link: Explore Business Solutions, link: Explore Alexa for Skill Builders, link: Explore Alexa for Device Makers, link: Explore Enterprise Solutions, link: Back To Top, link: Get Started, link: Get Deeper, link: Grow Your Business, link: Tutorials & Code Samples, link: Skill-Building Agencies, link: Agreements and Terms, link: Program Materials License Agreement, link: Amazon Developers Services Portal Terms of Use, link: Alexa on Slack, link: Alexa Skills Kit Blog, link: Device Makers Blog, link: AWS Blog, link: Amazon Developer Support, link: Contact Us, link: Stack Overflow, link: Amazon Alexa, link: Amazon business, link: Amazon Web Services, link: Amazon Dash Replenishment, link: Terms, link: Alexa Developer Home and landmarks banner, navigation, banner, navigation, contentinfo, navigation, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-alexa`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Alexa is Amazon's voice assistant and smart-home platform.

---

# 2. Product identity and ownership

- **Official name:** Alexa
- **Company and business unit:** amazon
- **Current lifecycle status:** active
- **Official website:** https://developer.amazon.com/alexa

---

# 3. Product capabilities

- Wake word and voice requests
- Smart-home control
- Skills

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

Open-source candidates exist: OpenVoiceOS (Apache-2.0) — Open voice assistant platform (Mycroft successor).; Home Assistant Voice (Apache-2.0) — Local voice assistant for the smart home.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Open voice stacks exist; the device fleet, far-field hardware and skills ecosystem are Amazon's moat.

---

# 10. Missing capabilities and opportunity analysis

Open voice stacks exist; the device fleet, far-field hardware and skills ecosystem are Amazon's moat.

---

# 11. RAE implementation strategy

Partial. OpenVoiceOS and Home Assistant cover local voice; ecosystem scale lags.

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

Open voice stacks exist; the device fleet, far-field hardware and skills ecosystem are Amazon's moat.

---

# 17. RAE implementation strategy (continued)

Partial. OpenVoiceOS and Home Assistant cover local voice; ecosystem scale lags.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier amazon-alexa` and inspect canonical identity with `npx rae-faang products show amazon-alexa --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang amazon-alexa --out ./amazon-alexa.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit amazon-alexa --out ./amazon-alexa-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-alexa`).
- Dossier: [research/companies/amazon/products/amazon-alexa.md](../../../research/companies/amazon/products/amazon-alexa.md).
- REA capture: [catalog/rea/amazon/amazon-alexa.md](../../rea/amazon/amazon-alexa.md) (2026-10-14T03:56:14.783Z); raw record: [catalog/rea/evidence/amazon-alexa.json](../../rea/evidence/amazon-alexa.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://developer.amazon.com/alexa) — Alexa is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Alexa Public web-surface observation (REA)](https://developer.amazon.com/en-US/alexa) — A dated unauthenticated snapshot exposed controls button: All Search, button: AI Mode, button: Create Alexa Skills, button: Build Alexa Devices, button: Engage Solution Providers, button: Develop Enterprise Solutions, button: English (US), link: Alexa Developer Console, textbox: Search, link: Sign In, link: , link: Skill Builders, link: Alexa Skills Kit, link: Documentation, link: Developer Console, link: Skill Agencies, link: Device Makers, link: Overview, link: Development Resources, link: Business Resources, link: What's New, link: Consoles, link: Alexa Connect Kit, link: Alexa Routines Kit, link: Radio Skills Kit, link: Alexa Built-In, link: Alexa Smart Home, link: Dash Services, link: Hospitality, link: Senior Living, link: Echo Branding, link: Alexa Branding, link: Alexa Fund, link: Alexa Champions, link: Voice Interoperability Initiative, link: Docs, link: Smart Home Skills, link: ASK CLI and SMAPI, link: Alexa Trainings and Workshops, link: Matter, link: Blog, link: Alexa Auto, link: Alexa Science, link: Learn more, link: Create Alexa Skills, link: Build Alexa Devices, link: Engage Solution Providers, link: Explore Business Solutions, link: Explore Alexa for Skill Builders, link: Explore Alexa for Device Makers, link: Explore Enterprise Solutions, link: Back To Top, link: Get Started, link: Get Deeper, link: Grow Your Business, link: Tutorials & Code Samples, link: Skill-Building Agencies, link: Agreements and Terms, link: Program Materials License Agreement, link: Amazon Developers Services Portal Terms of Use, link: Alexa on Slack, link: Alexa Skills Kit Blog, link: Device Makers Blog, link: AWS Blog, link: Amazon Developer Support, link: Contact Us, link: Stack Overflow, link: Amazon Alexa, link: Amazon business, link: Amazon Web Services, link: Amazon Dash Replenishment, link: Terms, link: Alexa Developer Home and landmarks banner, navigation, banner, navigation, contentinfo, navigation, contentinfo. (VERIFIED; accessed 2026-10-14T03:56:14.783Z).
