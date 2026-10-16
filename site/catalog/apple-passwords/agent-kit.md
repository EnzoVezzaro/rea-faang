---
name: apple-passwords
description: "Evidence-aware build skill for Passwords (apple-passwords); investigate, assess reuse, implement scoped behavior and verify."
---

# Passwords — implementation skill (`apple-passwords`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Passwords**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Passwords** (`apple-passwords`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Passwords** / `apple-passwords` | Product catalog |
| Company / category | Apple / `consumer_application` / `password-manager` | Product catalog |
| Official website / docs | [https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios](https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **consumer_application** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `APPLE-PASSWORDS-CAP-7D5C3765` | Password storage and sync | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-PASSWORDS-CAP-C87CCDB4` | Passkeys | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-PASSWORDS-CAP-C03BB94E` | Autofill across Apple devices | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search Support`, `button: Shopping Bag`, `button: Submit Search`, `button: Table of Contents `, `button: Yes`, `button: No`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: iPhone User Guide`, `combobox: Select version:`, `link: stores the passwords in the Passwords app`, `link: Sign in with Apple`, `link: Use passkeys to sign in to websites and apps`, `link: securely add and keep notes`, `link: Automatically fill in SMS passcodes on iPhone`, `link: See the websites you’ve excluded from automatically filling in passwords on iPhone`, `link:  Previous Share passwords`, `link: Next  See websites excluded from AutoFill`, `link: United States. Choose your country or region`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Site Map`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Password storage and sync:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Passkeys:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Autofill across Apple devices:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `navigation: Local Navigation`, `main`, `form: iPhone User Guide`, `region`, `region`, `region`, `navigation: pagination`, `contentinfo: Apple Footer`, `navigation: Breadcrumbs` | Full IA/routes/authenticated navigation |
| Views/headings | `Automatically fill in strong passwords on iPhone`, `Create a strong password for a new account`, `Automatically fill in a saved password`, `Turn Password AutoFill on or off`, `See also`, `Apple Footer` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search Support`, `button: Shopping Bag`, `button: Submit Search`, `button: Table of Contents `, `button: Yes`, `button: No`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: iPhone User Guide`, `combobox: Select version:`, `link: stores the passwords in the Passwords app`, `link: Sign in with Apple`, `link: Use passkeys to sign in to websites and apps`, `link: securely add and keep notes`, `link: Automatically fill in SMS passcodes on iPhone`, `link: See the websites you’ve excluded from automatically filling in passwords on iPhone`, `link:  Previous Share passwords`, `link: Next  See websites excluded from AutoFill`, `link: United States. Choose your country or region`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Site Map` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](https://www.apple.com/)`, `[Store](https://www.apple.com/us/shop/goto/store)`, `[Mac](https://www.apple.com/mac/)`, `[iPad](https://www.apple.com/ipad/)`, `[iPhone](https://www.apple.com/iphone/)`, `[Watch](https://www.apple.com/watch/)`, `[Vision](https://www.apple.com/apple-vision-pro/)`, `[AirPods](https://www.apple.com/airpods/)`, `[Home](https://www.apple.com/home/)`, `[Entertainment](https://www.apple.com/entertainment/)`, `[Accessories](https://www.apple.com/us/shop/goto/buy_accessories)`, `[Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)`, `[iPhone User Guide](https://support.apple.com/guide/iphone/welcome/ios)`, `[stores the passwords in the Passwords app](https://support.apple.com/guide/iphone/use-passwords-iphd18e98624/27/ios/27)`, `[Sign in with Apple](https://support.apple.com/guide/iphone/sign-in-with-apple-iph238921d37/27/ios/27)`, `[Use passkeys to sign in to websites and apps](https://support.apple.com/guide/iphone/use-passkeys-to-sign-in-to-websites-and-apps-iphf538ea8d0/27/ios/27)`, `[securely add and keep notes](https://support.apple.com/guide/iphone/view-your-passwords-and-related-information-iph3ee1dd6e7/27/ios/27#iphd9f2cd623)`, `[Automatically fill in SMS passcodes on iPhone](https://support.apple.com/guide/iphone/automatically-fill-in-sms-passcodes-iphc89a3a3af/27/ios/27)`, `[See the websites you’ve excluded from automatically filling in passwords on iPhone](https://support.apple.com/guide/iphone/see-websites-excluded-from-autofill-iphf02627316/27/ios/27)`, `[ Previous Share passwords](https://support.apple.com/guide/iphone/share-passwords-iphe6b2b7043/ios)`, `[Next  See websites excluded from AutoFill](https://support.apple.com/guide/iphone/see-websites-excluded-from-autofill-iphf02627316/ios)`, `[Apple](https://www.apple.com)`, `[Support](https://support.apple.com)`, `[United States. Choose your country or region](https://support.apple.com/guide/iphone/automatically-fill-in-strong-passwords-iphf9219d8c9/ios/localeselector)`, `[Privacy Policy](https://www.apple.com/legal/privacy/en-ww/)`, `[Terms of Use](https://www.apple.com/legal/internet-services/terms/site.html)`, `[Sales and Refunds](https://www.apple.com/shop/goto/help/sales_refunds)`, `[Site Map](https://www.apple.com/sitemap/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-7D5C3765 — Password storage and sync
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-7D5C3765`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-PASSWORDS-CAP-7D5C3765` → `REQ-FUNC-7D5C3765` → `TEST-FUNC-7D5C3765`.

### REQ-FUNC-C87CCDB4 — Passkeys
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C87CCDB4`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-PASSWORDS-CAP-C87CCDB4` → `REQ-FUNC-C87CCDB4` → `TEST-FUNC-C87CCDB4`.

### REQ-FUNC-C03BB94E — Autofill across Apple devices
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C03BB94E`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-PASSWORDS-CAP-C03BB94E` → `REQ-FUNC-C03BB94E` → `TEST-FUNC-C03BB94E`.

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
| [Bitwarden](https://bitwarden.com/) | Not recorded | GPL-3.0 (unverified) | Open-source password manager with a self-hostable server. | Clients GPL-3.0; server AGPL-3.0. | Proposed evaluation lead; no verified foundation |
| [Vaultwarden](https://github.com/dani-garcia/vaultwarden) | Not recorded | AGPL-3.0 (unverified) | Lightweight Bitwarden-compatible server. | No limitation recorded | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-7D5C3765** → `REQ-FUNC-7D5C3765`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C87CCDB4** → `REQ-FUNC-C87CCDB4`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C03BB94E** → `REQ-FUNC-C03BB94E`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-7D5C3765, REQ-FUNC-C87CCDB4, REQ-FUNC-C03BB94E
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-7D5C3765, REQ-FUNC-C87CCDB4, REQ-FUNC-C03BB94E
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
- **Completion:** Trace: REQ-FUNC-7D5C3765, REQ-FUNC-C87CCDB4, REQ-FUNC-C03BB94E; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios) | Not recorded | Passwords is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_b7b1420df832629677eccde05956891a5e8547231ed708e8ce93436e4a2eaa0e` | Passwords Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://support.apple.com/guide/iphone/automatically-fill-in-strong-passwords-iphf9219d8c9/ios) | 2026-10-14T03:55:12.114Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search Support, button: Shopping Bag, button: Submit Search, button: Table of Contents , button: Yes, button: No, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: iPhone User Guide, combobox: Select version:, link: stores the passwords in the Passwords app, link: Sign in with Apple, link: Use passkeys to sign in to websites and apps, link: securely add and keep notes, link: Automatically fill in SMS passcodes on iPhone, link: See the websites you’ve excluded from automatically filling in passwords on iPhone, link:  Previous Share passwords, link: Next  See websites excluded from AutoFill, link: United States. Choose your country or region, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Site Map and landmarks navigation: Global, navigation: Local Navigation, main, form: iPhone User Guide, region, region, region, navigation: pagination, contentinfo: Apple Footer, navigation: Breadcrumbs. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-passwords`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Passwords is Apple's password manager, synced through iCloud Keychain.

---

# 2. Product identity and ownership

- **Official name:** Passwords
- **Company and business unit:** apple
- **Current lifecycle status:** active
- **Official website:** https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios

---

# 3. Product capabilities

- Password storage and sync
- Passkeys
- Autofill across Apple devices

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

Open-source candidates exist: Bitwarden (GPL-3.0) — Open-source password manager with a self-hostable server.; Vaultwarden (AGPL-3.0) — Lightweight Bitwarden-compatible server.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Password management is fully covered; cross-platform reach and self-hosted control are the open advantage.

---

# 10. Missing capabilities and opportunity analysis

Password management is fully covered; cross-platform reach and self-hosted control are the open advantage.

---

# 11. RAE implementation strategy

Available. Bitwarden (and self-hosted Vaultwarden) is a mature, cross-platform equivalent.

---

# 12. Security, privacy, and compliance

Not yet researched.

---

# 13. Sources and evidence

- https://bitwarden.com/
- https://github.com/dani-garcia/vaultwarden

---

# 14. Open questions

- Full feature inventory and technical architecture are not yet researched.

---

# 15. Research history

- v1: dossier created; research pending.

---

# 16. Alternative comparison (continued)

Password management is fully covered; cross-platform reach and self-hosted control are the open advantage.

---

# 17. RAE implementation strategy (continued)

Available. Bitwarden (and self-hosted Vaultwarden) is a mature, cross-platform equivalent.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-passwords` and inspect canonical identity with `npx rae-faang products show apple-passwords --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-passwords --out ./apple-passwords.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-passwords --out ./apple-passwords-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-passwords`).
- Dossier: [research/companies/apple/products/apple-passwords.md](../../../research/companies/apple/products/apple-passwords.md).
- REA capture: [catalog/rea/apple/apple-passwords.md](../../rea/apple/apple-passwords.md) (2026-10-14T03:55:12.114Z); raw record: [catalog/rea/evidence/apple-passwords.json](../../rea/evidence/apple-passwords.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios) — Passwords is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Passwords Public web-surface observation (REA)](https://support.apple.com/guide/iphone/automatically-fill-in-strong-passwords-iphf9219d8c9/ios) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search Support, button: Shopping Bag, button: Submit Search, button: Table of Contents , button: Yes, button: No, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: iPhone User Guide, combobox: Select version:, link: stores the passwords in the Passwords app, link: Sign in with Apple, link: Use passkeys to sign in to websites and apps, link: securely add and keep notes, link: Automatically fill in SMS passcodes on iPhone, link: See the websites you’ve excluded from automatically filling in passwords on iPhone, link:  Previous Share passwords, link: Next  See websites excluded from AutoFill, link: United States. Choose your country or region, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Site Map and landmarks navigation: Global, navigation: Local Navigation, main, form: iPhone User Guide, region, region, region, navigation: pagination, contentinfo: Apple Footer, navigation: Breadcrumbs. (VERIFIED; accessed 2026-10-14T03:55:12.114Z).
