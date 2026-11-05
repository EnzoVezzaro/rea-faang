---
name: google-firebase
description: "Evidence-aware build skill for Firebase (google-firebase); investigate, assess reuse, implement scoped behavior and verify."
---

# Firebase — implementation skill (`google-firebase`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Firebase**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Firebase** (`google-firebase`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/google-firebase.md` from the catalog page, or run `npx rea-faang google-firebase --out ./google-firebase.md`, `npx rea-faang skills generate google-firebase` or `npx rea-faang build agent-kit google-firebase --out ./google-firebase-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Firebase / `google-firebase` | `catalog/products.jsonl` |
| Official product URL | [https://firebase.google.com/](https://firebase.google.com/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://firebase.google.com/docs](https://firebase.google.com/docs) | Catalog record |
| Research dossier | `npx rea-faang research dossier google-firebase` | `research/companies/google/products/google-firebase.md` |
| REA report | `catalog/rea/google/google-firebase.md` (captured 2026-11-03T01:38:08.105Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/google-firebase.json` (`ev_01dc5c781a0ae7d002af9d74201e9852a5ed3f49b3d0ba426b36aecab6eac65d`) | Catalog evidence |
| Alternative candidates | 4 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show google-firebase --format json` and `npx rea-faang research dossier google-firebase` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://firebase.google.com/](https://firebase.google.com/), captured 2026-11-03T01:38:08.105Z, evidence `ev_01dc5c781a0ae7d002af9d74201e9852a5ed3f49b3d0ba426b36aecab6eac65d`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `GOOGLE-FIREBASE-CAP-74BE1465`, `GOOGLE-FIREBASE-CAP-65CA2CEE`, `GOOGLE-FIREBASE-CAP-9FE9616C`, `GOOGLE-FIREBASE-CAP-9162CC9A`.

### Step 5 — decide the open-source foundation (mandatory gate)

Do not start building until section 9 records an explicit verdict: **REUSE**, **INTEGRATE**, **EXTEND**, **BUILD** or **INVESTIGATE MORE**. The verdict names the candidate (or none) and the evidence behind it. A curated candidate is a lead, never an approved foundation.

### Step 6 — turn findings into a plan

`PLAN.md` must carry: the agreed scope and non-goals; requirement IDs with their evidence/confidence; the foundation verdict and its obligations; architecture and data model labelled PROPOSED where they are your design; API/protocol contracts with authorization, errors, limits and idempotency; the test plan per requirement; and the explicit exclusion/unknown list. Anything still UNKNOWN stays blocked rather than guessed.

### Step 7 — build in the consumer project

Implement in the user’s repository with its stack, conventions and tests. Write original code and assets; do not copy proprietary source, protected assets, branding, copy text or assets you are not licensed to use. Match observable behavior and user-facing outcomes within the agreed scope — a functional equivalent, not a replica, and never a parity claim.

### Step 8 — verify and report

Run the project’s real checks and capture exit codes. Exercise the primary workflow plus the relevant failure, permission, cancellation and recovery paths through the interface the user will use. Report requirement → code → test evidence, everything partial, excluded or unknown, and every check not run. Do not weaken, skip or delete a failing check to make a result look green.

### Outputs expected

| Output | Where | Required content |
|---|---|---|
| Evidence ledger | `FINDINGS.md` in the consumer project | One row per claim: evidence ID, scope, action, classification, source location, access date, limitation |
| Capability and workflow map | `FINDINGS.md` | Evidenced capabilities, complete/partial workflows, states, permissions, failures and unknowns |
| Foundation decision record | `DECISION.md` in the consumer project | Candidate audit, coverage comparison and one explicit verdict from section 9 |
| Implementation plan | `PLAN.md` in the consumer project | Scope, requirement IDs, chosen foundation, architecture, proposed contracts, test plan, exclusions |
| Implementation | The consumer project’s own source tree | Original code and assets in the project’s conventions; no copied proprietary source |
| Tests | The consumer project’s test suite | Deterministic tests per implemented requirement plus relevant failure and permission paths |
| Report | `REPORT.md` in the consumer project | Requirement → code → test evidence, commands with real exit codes, partial/excluded/unknown items, checks not run |

### Stop conditions

- Authorization, target identity or user scope is unclear → stop and ask.
- A capability, contract or data structure is still UNKNOWN → keep it blocked; do not infer it from category, marketing or competitor behavior.
- No foundation verdict is recorded → return to section 9; do not begin implementation.
- A required tool or surface is unavailable → record the blocker and report the reduced scope.


## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Firebase** / `google-firebase` | Product catalog |
| Company / category | Google / `developer_tool` / `developer_tool`, `backend-as-a-service`, `mobile-development`, `web-development` | Product catalog |
| Official website / docs | [https://firebase.google.com/](https://firebase.google.com/) / [https://firebase.google.com/docs](https://firebase.google.com/docs) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **developer_tool** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `GOOGLE-FIREBASE-CAP-74BE1465` | Firebase identity, project setup, app registration and supported SDK workflows are documented. | VERIFIED | `ev-google-firebase-identity`, `ev-google-firebase-fundamentals` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-FIREBASE-CAP-65CA2CEE` | Authentication and Firebase project/service configuration are documented. | VERIFIED | `ev-google-firebase-auth`, `ev-google-firebase-projects` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-FIREBASE-CAP-9FE9616C` | Cloud Functions, deployment and local development workflows are documented. | VERIFIED | `ev-google-firebase-functions`, `ev-google-firebase-fundamentals` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-FIREBASE-CAP-9162CC9A` | Open-source BaaS alternatives cover core backend capabilities but not the complete managed Firebase and Google Cloud service plane. | VERIFIED | `ev-google-firebase-projects`, `ev-google-firebase-pricing` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Dropdown menu for Build`, `button: Dropdown menu for Run`, `button: Dropdown menu for Extended Navigation`, `button: Language`, `button: Chat`, `link: Skip to main content`, `link: Firebase`, `link: Build`, `link: Run`, `link: Solutions`, `combobox: Search`, `link: Blog`, `link: Go to console`, `link: Sign in`, `link: Learn more.`, `link: Get Started`, `link: Get started in console`, `link: App Hosting`, `link: SQL Connect`, `link: Firebase AI Logic`, `link: View all Build products`, `link: App Distribution`, `link: Crashlytics`, `link: Remote Config`, `link: View all Run products`, `link: Agent Skills icon Agent Skills`, `link: Firebase AI Logic icon Firebase AI Logic`, `link: View generative AI options`, `link: Flutterlogo Flutter`, `link: Google Adslogo Google Ads`, `link: AdMoblogo AdMob`, `link: Google Marketing Platformlogo Google Marketing Platform`, `link: Google Playlogo Google Play`, `link: Data Studiologo Data Studio`, `link: BigQuerylogo BigQuery`, `link: Slacklogo Slack`, `link: Jiralogo Jira`, `link: Android Studiologo Android Studio`, `link: Learn more`, `link: View developer docs`, `link: View all news`, `link: - Building an iOS app in 6 hours with Firebase and Antigravity`, `link: Read more - Building an iOS app in 6 hours with Firebase and Antigravity`, `link: - Google Analytics for Firebase iOS SDK outage on September 28, 2026`, `link: Read more - Google Analytics for Firebase iOS SDK outage on September 28, 2026`, `link: YouTube - Can an agent port our Android app to iOS?`, `link: View video - Can an agent port our Android app to iOS?`, `link: View solutions`, `link: Get started`, `link: App Check`, `link: Authentication`, `link: Cloud Functions`, `link: Cloud Storage`, `link: Extensions`, `link: Firestore`, `link: Hosting`, `link: Phone Number Verification`, `link: Realtime Database`, `link: Generative AI`, `link: A/B Testing`, `link: Cloud Messaging`, `link: Google Analytics`, `link: In-App Messaging`, `link: Performance Monitoring`, `link: Test Lab`, `link: Developer guides`, `link: SDK & API reference`, `link: Samples`, `link: Libraries`, `link: GitHub`, `link: Check out the blog`, `link: Find us on Reddit`, `link: Follow on X`, `link: Subscribe on YouTube`, `link: Attend an event`, `link: Contact support`, `link: Stack Overflow`, `link: Google group`, `link: Release notes`, `link: Brand guidelines`, `link: FAQs`, `link: Google Developers`, `link: Android`, `link: Chrome`, `link: Google Cloud Platform`, `link: All products`, `link: Terms`, `link: Privacy`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Firebase identity, project setup, app registration and supported SDK workflows are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Authentication and Firebase project/service configuration are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Cloud Functions, deployment and local development workflows are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Open-source BaaS alternatives cover core backend capabilities but not the complete managed Firebase and Google Cloud service plane.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `navigation: Upper tabs`, `main`, `navigation: On this page`, `navigation`, `main`, `navigation: Footer links`, `navigation: Other Google Developers websites`, `navigation: Utility links` | Full IA/routes/authenticated navigation |
| Views/headings | `Get $300 to unlock all Firebase features`, `Make your app the best it can be with Firebase and generative AI`, `Easily integrate Firebase with Gemini and the latest AI technology from Google`, `Easily integrate Firebase with your team's favorite tools.`, `Easy to integrate on iOS, Android, and the Web`, `Keep up to date on everything Firebase`, `Building an iOS app in 6 hours with Firebase and Antigravity`, `Google Analytics for Firebase iOS SDK outage on September 28, 2026`, `Can an agent port our Android app to iOS?`, `Trusted by the largest apps and games`, `All Firebase products`, `Build`, `Run`, `Learn`, `Stay connected`, `Support` | Results and subsequent views |
| Controls | `button: Dropdown menu for Build`, `button: Dropdown menu for Run`, `button: Dropdown menu for Extended Navigation`, `button: Language`, `button: Chat`, `link: Skip to main content`, `link: Firebase`, `link: Build`, `link: Run`, `link: Solutions`, `combobox: Search`, `link: Blog`, `link: Go to console`, `link: Sign in`, `link: Learn more.`, `link: Get Started`, `link: Get started in console`, `link: App Hosting`, `link: SQL Connect`, `link: Firebase AI Logic`, `link: View all Build products`, `link: App Distribution`, `link: Crashlytics`, `link: Remote Config`, `link: View all Run products`, `link: Agent Skills icon Agent Skills`, `link: Firebase AI Logic icon Firebase AI Logic`, `link: View generative AI options`, `link: Flutterlogo Flutter`, `link: Google Adslogo Google Ads`, `link: AdMoblogo AdMob`, `link: Google Marketing Platformlogo Google Marketing Platform`, `link: Google Playlogo Google Play`, `link: Data Studiologo Data Studio`, `link: BigQuerylogo BigQuery`, `link: Slacklogo Slack`, `link: Jiralogo Jira`, `link: Android Studiologo Android Studio`, `link: Learn more`, `link: View developer docs`, `link: View all news`, `link: - Building an iOS app in 6 hours with Firebase and Antigravity`, `link: Read more - Building an iOS app in 6 hours with Firebase and Antigravity`, `link: - Google Analytics for Firebase iOS SDK outage on September 28, 2026`, `link: Read more - Google Analytics for Firebase iOS SDK outage on September 28, 2026`, `link: YouTube - Can an agent port our Android app to iOS?`, `link: View video - Can an agent port our Android app to iOS?`, `link: View solutions`, `link: Get started`, `link: App Check`, `link: Authentication`, `link: Cloud Functions`, `link: Cloud Storage`, `link: Extensions`, `link: Firestore`, `link: Hosting`, `link: Phone Number Verification`, `link: Realtime Database`, `link: Generative AI`, `link: A/B Testing`, `link: Cloud Messaging`, `link: Google Analytics`, `link: In-App Messaging`, `link: Performance Monitoring`, `link: Test Lab`, `link: Developer guides`, `link: SDK & API reference`, `link: Samples`, `link: Libraries`, `link: GitHub`, `link: Check out the blog`, `link: Find us on Reddit`, `link: Follow on X`, `link: Subscribe on YouTube`, `link: Attend an event`, `link: Contact support`, `link: Stack Overflow`, `link: Google group`, `link: Release notes`, `link: Brand guidelines`, `link: FAQs`, `link: Google Developers`, `link: Android`, `link: Chrome`, `link: Google Cloud Platform`, `link: All products`, `link: Terms`, `link: Privacy` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content](#main-content)`, `[Firebase](/)`, `[Build](https://firebase.google.com/products-build)`, `[Run](https://firebase.google.com/products-run)`, `[Solutions](https://firebase.google.com/solutions)`, `[Blog](//firebase.blog)`, `[Go to console](//console.firebase.google.com)`, `[Sign in](https://firebase.google.com/_d/signin?continue=https%3A%2F%2Ffirebase.google.com%2F&prompt=select_account)`, `[Learn more.](https://firebase.google.com/docs/ai-logic/models)`, `[Get Started](https://console.cloud.google.com/freetrial?om=fb&redirectPath=https://console.firebase.google.com/project/_/overview?purchaseBillingPlan=metered&redirectWithId=true&flow=firebaseMetered&accountNameKey=firebase)`, `[Get started in console](https://console.firebase.google.com/)`, `[App Hosting](/products/app-hosting)`, `[SQL Connect](/products/sql-connect)`, `[Firebase AI Logic](/products/firebase-ai-logic)`, `[View all Build products](/products-build)`, `[App Distribution](/products/app-distribution)`, `[Crashlytics](/products/crashlytics)`, `[Remote Config](/products/remote-config)`, `[View all Run products](/products-run)`, `[Agent Skills icon Agent Skills](/docs/ai-assistance/agent-skills)`, `[Firebase AI Logic icon Firebase AI Logic](/products/firebase-ai-logic)`, `[View generative AI options](/products/generative-ai)`, `[Flutterlogo Flutter](https://flutter.dev/)`, `[Google Adslogo Google Ads](https://ads.google.com/home/campaigns/app-ads/)`, `[AdMoblogo AdMob](/firebase-and-admob)`, `[Google Marketing Platformlogo Google Marketing Platform](https://support.google.com/firebase/answer/7392275)`, `[Google Playlogo Google Play](https://support.google.com/firebase/answer/6392038)`, `[Data Studiologo Data Studio](https://support.google.com/datastudio/answer/7259176)`, `[BigQuerylogo BigQuery](https://support.google.com/firebase/answer/6318765)`, `[Slacklogo Slack](/docs/crashlytics/alerts-basic-integrations#slack)`, `[Jiralogo Jira](/docs/crashlytics/alerts-basic-integrations#jira)`, `[Android Studiologo Android Studio](https://developer.android.com/studio/debug/app-quality-insights)`, `[Learn more](/integrations)`, `[View developer docs](/docs)`, `[View all news](https://firebase.blog/)`, `[- Building an iOS app in 6 hours with Firebase and Antigravity](https://firebase.blog/posts/2026/09/build-ios-app-firebase-antigravity)`, `[Read more - Building an iOS app in 6 hours with Firebase and Antigravity](https://firebase.blog/posts/2026/09/build-ios-app-firebase-antigravity)`, `[- Google Analytics for Firebase iOS SDK outage on September 28, 2026](https://firebase.blog/posts/2026/10/firebase-analytics-outage)`, `[Read more - Google Analytics for Firebase iOS SDK outage on September 28, 2026](https://firebase.blog/posts/2026/10/firebase-analytics-outage)`, `[YouTube - Can an agent port our Android app to iOS?](https://www.youtube.com/watch?v=xRryePAlo9w)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-74BE1465 — Firebase identity, project setup, app registration and supported SDK workflows are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-firebase-identity`, `ev-google-firebase-fundamentals`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-74BE1465`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-FIREBASE-CAP-74BE1465` → `REQ-FUNC-74BE1465` → `TEST-FUNC-74BE1465`.

### REQ-FUNC-65CA2CEE — Authentication and Firebase project/service configuration are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-firebase-auth`, `ev-google-firebase-projects`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-65CA2CEE`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-FIREBASE-CAP-65CA2CEE` → `REQ-FUNC-65CA2CEE` → `TEST-FUNC-65CA2CEE`.

### REQ-FUNC-9FE9616C — Cloud Functions, deployment and local development workflows are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-firebase-functions`, `ev-google-firebase-fundamentals`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-9FE9616C`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-FIREBASE-CAP-9FE9616C` → `REQ-FUNC-9FE9616C` → `TEST-FUNC-9FE9616C`.

### REQ-FUNC-9162CC9A — Open-source BaaS alternatives cover core backend capabilities but not the complete managed Firebase and Google Cloud service plane.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-firebase-projects`, `ev-google-firebase-pricing`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-9162CC9A`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-FIREBASE-CAP-9162CC9A` → `REQ-FUNC-9162CC9A` → `TEST-FUNC-9162CC9A`.

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

**Mandatory decision gate.** Identify real candidates, compare them against the findings from section 14, and record one explicit verdict before any implementation work. A curated candidate is a research lead; nothing here has been cloned, executed, license-audited or security-reviewed by the catalog compiler.

### 9.1 Candidate register

| Candidate | Repository | License | Claimed coverage (unverified) | Limitations | Maintenance | Compatibility | Verdict |
|---|---|---|---|---|---|---|---|
| [Supabase](https://supabase.com/) | [repository](https://github.com/supabase/supabase) | Apache-2.0 (unverified) | Postgres-based backend with auth, storage, realtime, functions. | Closest drop-in in scope. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Appwrite](https://appwrite.io/) | Not recorded; verify the canonical repository | BSD-3-Clause (unverified) | Self-hostable backend: auth, database, storage, functions. | Feature-complete alternative. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [PocketBase](https://pocketbase.io/) | [repository](https://github.com/pocketbase/pocketbase) | MIT (unverified) | Single-binary backend with realtime and auth. | Small and embeddable. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Parse Platform](https://parseplatform.org/) | Not recorded; verify the canonical repository | BSD-3-Clause (unverified) | Open app backend (the original Firebase competitor). | Mature, self-hosted. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `GOOGLE-FIREBASE-CAP-74BE1465` — Firebase identity, project setup, app registration and supported SDK workflows are documented. | Not verified against Supabase | None yet; compare with `ev_01dc5c781a0ae7d002af9d74201e9852a5ed3f49b3d0ba426b36aecab6eac65d` | Candidate code path and tests must be inspected |
| `GOOGLE-FIREBASE-CAP-65CA2CEE` — Authentication and Firebase project/service configuration are documented. | Not verified against Supabase | None yet; compare with `ev_01dc5c781a0ae7d002af9d74201e9852a5ed3f49b3d0ba426b36aecab6eac65d` | Candidate code path and tests must be inspected |
| `GOOGLE-FIREBASE-CAP-9FE9616C` — Cloud Functions, deployment and local development workflows are documented. | Not verified against Supabase | None yet; compare with `ev_01dc5c781a0ae7d002af9d74201e9852a5ed3f49b3d0ba426b36aecab6eac65d` | Candidate code path and tests must be inspected |
| `GOOGLE-FIREBASE-CAP-9162CC9A` — Open-source BaaS alternatives cover core backend capabilities but not the complete managed Firebase and Google Cloud service plane. | Not verified against Supabase | None yet; compare with `ev_01dc5c781a0ae7d002af9d74201e9852a5ed3f49b3d0ba426b36aecab6eac65d` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Supabase** (Postgres-based backend with auth, storage, realtime, functions.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Supabase** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
- If it covers only part of the scope, or would need to run beside the user’s existing system → **INTEGRATE** it behind a defined boundary, or **EXTEND** it with original modules where its extension points allow it.
- If no candidate survives inspection → **BUILD** an independent implementation, and record which candidates failed and why.
- If the evidence is still insufficient → **INVESTIGATE MORE**, naming the exact question, source and check that would settle it.

### 9.4 What each verdict obliges

| Verdict | You must have | It commits you to |
|---|---|---|
| **REUSE** | The candidate implements the in-scope capability leads; license and dependencies checked against the user’s distribution model; version pinned; tests/CI reviewed | Adopt it as the foundation, keep its license notices, and document the upstream version and update path |
| **INTEGRATE** | A verified boundary: API/protocol, data ownership, failure and upgrade behavior, plus a license review of both sides | Run the candidate beside the user’s system through an explicit contract; test the boundary and its failure modes |
| **EXTEND** | Documented extension points, an upstream contribution or fork policy, and a migration path for local changes | Add original modules on top of the candidate; record what is upstream versus local and how it survives updates |
| **BUILD** | The candidates that were searched, inspected and rejected, with reasons; the evidenced scope; a test plan | Build independently with original code and assets, reusing only libraries whose licenses permit it |
| **INVESTIGATE MORE** | The exact open question, the source or tool that answers it, and the date by which it must be answered | Do not implement the affected scope yet; resolve or explicitly block it first |

**No verified alternative is a valid outcome**: mark the coverage UNKNOWN / PENDING, say what you searched and what you inspected, and let the verdict be INVESTIGATE MORE or BUILD. Absence of evidence in this catalog is never evidence of absence.


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

- **TEST-FUNC-74BE1465** → `REQ-FUNC-74BE1465`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-65CA2CEE** → `REQ-FUNC-65CA2CEE`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-9FE9616C** → `REQ-FUNC-9FE9616C`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-9162CC9A** → `REQ-FUNC-9162CC9A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-74BE1465, REQ-FUNC-65CA2CEE, REQ-FUNC-9FE9616C, REQ-FUNC-9162CC9A
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-74BE1465, REQ-FUNC-65CA2CEE, REQ-FUNC-9FE9616C, REQ-FUNC-9162CC9A
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
- **Completion:** Trace: REQ-FUNC-74BE1465, REQ-FUNC-65CA2CEE, REQ-FUNC-9FE9616C, REQ-FUNC-9162CC9A; document exclusions and unknowns.
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
| `ev-google-firebase-identity` | Firebase — The official product page presents Firebase as a platform for building and running mobile and web applications with Build and Run product families. | [link](https://firebase.google.com/) | Not recorded | Firebase is Google's mobile and web application development platform. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-firebase-fundamentals` | Firebase fundamentals — The official fundamentals guide covers adding Firebase to iOS, Android, web, Unity and C++ apps and managing projects and launch workflows. | [link](https://firebase.google.com/docs/guides) | Not recorded | Firebase projects support app registration, SDK integration and platform-specific development workflows. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-firebase-projects` | Understand Firebase projects — The official project guide explains the hierarchy of projects, registered apps and provisioned Firebase resources and describes Firebase/Google Cloud interoperability. | [link](https://firebase.google.com/docs/projects/learn-more) | Not recorded | A Firebase project is a Google Cloud project with Firebase-specific configuration and services enabled. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-firebase-auth` | Firebase Authentication — The official Authentication documentation describes password, phone and federated providers plus SDK and backend integration behavior. | [link](https://firebase.google.com/docs/auth) | Not recorded | Firebase Authentication provides backend identity services, SDKs and provider integrations. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-firebase-functions` | Cloud Functions for Firebase — The official Functions documentation describes event triggers, managed execution, scaling, local emulation and deployment requirements. | [link](https://firebase.google.com/docs/functions) | Not recorded | Cloud Functions for Firebase runs JavaScript, TypeScript or Python backend code in response to HTTPS and Firebase or Google Cloud events. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-firebase-pricing` | Firebase pricing — The official pricing page lists the no-cost Spark plan and pay-as-you-go Blaze plan and explains product-specific usage and Google Cloud billing relationships. | [link](https://firebase.google.com/pricing) | Not recorded | Firebase offers Spark no-cost and Blaze pay-as-you-go plans with service-specific quotas and billing behavior. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://firebase.google.com/) | 2026-11-03T00:00:00Z | Firebase is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://firebase.google.com/docs) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://firebase.google.com/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://firebase.google.com/docs/guides) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://firebase.google.com/docs/projects/learn-more) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://firebase.google.com/docs/auth) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://firebase.google.com/docs/functions) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-6` | Additional official source lead — Claim/section not recorded. | [link](https://firebase.google.com/pricing) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_01dc5c781a0ae7d002af9d74201e9852a5ed3f49b3d0ba426b36aecab6eac65d` | Firebase Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://firebase.google.com/) | 2026-11-03T01:38:08.105Z | A dated unauthenticated snapshot exposed controls button: Dropdown menu for Build, button: Dropdown menu for Run, button: Dropdown menu for Extended Navigation, button: Language, button: Chat, link: Skip to main content, link: Firebase, link: Build, link: Run, link: Solutions, combobox: Search, link: Blog, link: Go to console, link: Sign in, link: Learn more., link: Get Started, link: Get started in console, link: App Hosting, link: SQL Connect, link: Firebase AI Logic, link: View all Build products, link: App Distribution, link: Crashlytics, link: Remote Config, link: View all Run products, link: Agent Skills icon Agent Skills, link: Firebase AI Logic icon Firebase AI Logic, link: View generative AI options, link: Flutterlogo Flutter, link: Google Adslogo Google Ads, link: AdMoblogo AdMob, link: Google Marketing Platformlogo Google Marketing Platform, link: Google Playlogo Google Play, link: Data Studiologo Data Studio, link: BigQuerylogo BigQuery, link: Slacklogo Slack, link: Jiralogo Jira, link: Android Studiologo Android Studio, link: Learn more, link: View developer docs, link: View all news, link: - Building an iOS app in 6 hours with Firebase and Antigravity, link: Read more - Building an iOS app in 6 hours with Firebase and Antigravity, link: - Google Analytics for Firebase iOS SDK outage on September 28, 2026, link: Read more - Google Analytics for Firebase iOS SDK outage on September 28, 2026, link: YouTube - Can an agent port our Android app to iOS?, link: View video - Can an agent port our Android app to iOS?, link: View solutions, link: Get started, link: App Check, link: Authentication, link: Cloud Functions, link: Cloud Storage, link: Extensions, link: Firestore, link: Hosting, link: Phone Number Verification, link: Realtime Database, link: Generative AI, link: A/B Testing, link: Cloud Messaging, link: Google Analytics, link: In-App Messaging, link: Performance Monitoring, link: Test Lab, link: Developer guides, link: SDK & API reference, link: Samples, link: Libraries, link: GitHub, link: Check out the blog, link: Find us on Reddit, link: Follow on X, link: Subscribe on YouTube, link: Attend an event, link: Contact support, link: Stack Overflow, link: Google group, link: Release notes, link: Brand guidelines, link: FAQs, link: Google Developers, link: Android, link: Chrome, link: Google Cloud Platform, link: All products, link: Terms, link: Privacy and landmarks banner, navigation: Upper tabs, main, navigation: On this page, navigation, main, navigation: Footer links, navigation: Other Google Developers websites, navigation: Utility links. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `google-firebase`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Firebase is Google's application-development platform for mobile and web apps. It combines client SDKs, app-facing services, backend infrastructure, deployment tools and operational features behind a Firebase project. Firebase projects are also Google Cloud projects with Firebase-specific configuration; this makes Firebase a distinct developer platform, not a duplicate catalog row for Google Cloud.

# 2. Product identity and ownership

- **Official name:** Firebase
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://firebase.google.com/
- **Official documentation:** https://firebase.google.com/docs
- **Identity evidence:** Google's product page and documentation identify Firebase as a mobile and web app development platform and describe its Build, Run, Learn and Reference surfaces.
- **Project model:** a Firebase project is a Google Cloud project with Firebase-specific configuration and services enabled.
- **Scope boundary:** Firebase is cataloged as the integrated developer platform; Firestore, Cloud Storage, Cloud Functions and other underlying services remain separately catalogable when they have their own canonical identity and contract.

# 3. Product capabilities

- Authentication and identity-provider integrations through Firebase Authentication.
- Cloud Firestore and Realtime Database for application data and synchronization.
- Cloud Storage for Firebase for user-generated files.
- Hosting and App Hosting for web applications, with serverless integrations.
- Cloud Functions for Firebase for event-driven and HTTP backend code.
- Cloud Messaging, App Check, Remote Config, Analytics, Crashlytics, Performance Monitoring, Test Lab and other Run features.
- SDKs, Admin SDKs, API references, Emulator Suite and Firebase CLI workflows.
- Additional platform surfaces including Data Connect, Extensions and Firebase AI Logic where the project and service prerequisites support them.

# 4. Technical architecture

The top-level unit is a Firebase project. Apps are registered inside that project for supported platforms, and Firebase products are enabled and configured against the project. Client SDKs call Firebase services; server-side code can use the Admin SDK and Cloud Functions. Firebase Hosting can route requests to serverless backends, while the Emulator Suite supports local development and testing. Billing and quotas are shared with the corresponding Google Cloud project where the service requires it.

# 5. User and developer workflows

1. Create or select a Firebase project and register the iOS, Android, web or other supported app variant.
2. Add the required Firebase SDKs and configure Authentication, data, storage, hosting or messaging services.
3. Define security rules, IAM and environment boundaries before handling real user data.
4. Use the Emulator Suite and tests for local verification, then deploy through the Firebase CLI or documented console workflows.
5. Monitor quality, usage, crashes, performance and billing; configure budget alerts before enabling paid services.

# 6. Pricing and access

Firebase documents a no-cost Spark plan and a pay-as-you-go Blaze plan. The Spark plan has no payment method requirement and service-specific quotas. Blaze enables additional services and usage levels, with usage billed according to the applicable Firebase or Google Cloud pricing. This dossier does not assert a project's current quota or billing state.

# 7. API and integration surface

- Client SDK references for Apple platforms, Android, web, Flutter, Unity and C++.
- Admin SDK references and REST/API surfaces for server-side administration.
- Firebase CLI (`firebase`) for project initialization, local emulation and deployment workflows.
- Cloud Functions, Hosting, Cloud Storage, Cloud Firestore, Google Cloud and third-party webhook integrations.
- Extensions and documented integrations for adding packaged capabilities.

# 8. Existing open-source alternatives

- **Supabase:** Apache-2.0 platform combining PostgreSQL, authentication, storage, realtime and edge functions.
- **Appwrite:** BSD-3-Clause self-hostable backend with authentication, databases, storage, functions and related services.
- **Parse Platform:** BSD-3-Clause open-source application backend with Parse Server and SDKs.
- **PocketBase:** MIT-licensed, compact backend distributed as a single Go binary with authentication, data and realtime features.

# 9. Alternative comparison

Supabase and Appwrite are the closest broad alternatives for a self-hosted or independently operated application backend. Parse Platform and PocketBase cover narrower or different operational profiles. None provides a full equivalent of Firebase's Google Cloud project integration, managed service plane, device Test Lab, Crashlytics, ML/AI integrations, service-specific SDKs and operational tooling. Alternative coverage is therefore **partial** for the complete Firebase platform, even though the core BaaS category has mature open-source building blocks.

# 10. Missing capabilities and opportunity analysis

A replacement still needs secure identity, data and storage services, realtime delivery, serverless execution, deployment, observability, testing, quotas, tenancy, migrations and operational ownership. The largest gaps are the integrated Google Cloud control plane, managed device testing, crash and performance products, proprietary SDK behavior and provider-specific service integrations.

# 11. REA implementation strategy

For a self-hosted build, start with Supabase or Appwrite and define the required subset explicitly: authentication, database, storage, realtime, functions and deployment. Use an emulator-first workflow, write migration and security-rule tests, and keep provider-specific Firebase compatibility out of scope unless a product contract requires it. Do not claim Firebase API parity without testing each selected SDK and service behavior.

# 12. Security, privacy, and compliance

Firebase projects can process identity, application data, files, telemetry and crash data. Verify authentication providers, security rules, IAM, service accounts, encryption, retention, region, analytics consent and billing controls before production use. Keep credentials, user data and payload samples out of this catalog.

# 13. Sources and evidence

- [Firebase product page](https://firebase.google.com/) — official product identity and Build/Run capability families.
- [Firebase fundamentals](https://firebase.google.com/docs/guides) — official project setup, supported platforms and development workflow.
- [Understand Firebase projects](https://firebase.google.com/docs/projects/learn-more) — official Firebase/Google Cloud project relationship and hierarchy.
- [Firebase Authentication](https://firebase.google.com/docs/auth) — official identity and SDK capabilities.
- [Cloud Functions for Firebase](https://firebase.google.com/docs/functions) — official serverless and Google Cloud integration workflow.
- [Firebase pricing](https://firebase.google.com/pricing) — official Spark and Blaze plan information.

# 14. Open questions

- Which Firebase services are actually required by the target product, rather than the full platform?
- Is self-hosting, data residency or Firebase SDK compatibility the primary migration constraint?
- Which quotas, regions, compliance controls and Google Cloud integrations are mandatory?

# 15. Research history

- v1: catalog candidate with preliminary BaaS alternatives, research pending.
- v2: updated 2026-11-03 from official Firebase product, fundamentals, project, Authentication, Cloud Functions and pricing documentation. Status: `researched`; complete equivalence to Firebase's managed Google Cloud platform remains unverified.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier google-firebase` and inspect canonical identity with `npx rea-faang products show google-firebase --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang google-firebase --out ./google-firebase.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit google-firebase --out ./google-firebase-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-firebase`).
- Dossier: [research/companies/google/products/google-firebase.md](../../../research/companies/google/products/google-firebase.md).
- REA capture: [catalog/rea/google/google-firebase.md](../../rea/google/google-firebase.md) (2026-11-03T01:38:08.105Z); raw record: [catalog/rea/evidence/google-firebase.json](../../rea/evidence/google-firebase.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Firebase](https://firebase.google.com/) — Firebase is Google's mobile and web application development platform. (VERIFIED; accessed Not recorded).
- [Firebase fundamentals](https://firebase.google.com/docs/guides) — Firebase projects support app registration, SDK integration and platform-specific development workflows. (VERIFIED; accessed Not recorded).
- [Understand Firebase projects](https://firebase.google.com/docs/projects/learn-more) — A Firebase project is a Google Cloud project with Firebase-specific configuration and services enabled. (VERIFIED; accessed Not recorded).
- [Firebase Authentication](https://firebase.google.com/docs/auth) — Firebase Authentication provides backend identity services, SDKs and provider integrations. (VERIFIED; accessed Not recorded).
- [Cloud Functions for Firebase](https://firebase.google.com/docs/functions) — Cloud Functions for Firebase runs JavaScript, TypeScript or Python backend code in response to HTTPS and Firebase or Google Cloud events. (VERIFIED; accessed Not recorded).
- [Firebase pricing](https://firebase.google.com/pricing) — Firebase offers Spark no-cost and Blaze pay-as-you-go plans with service-specific quotas and billing behavior. (VERIFIED; accessed Not recorded).
- [Official product page](https://firebase.google.com/) — Firebase is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://firebase.google.com/docs) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://firebase.google.com/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://firebase.google.com/docs/guides) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://firebase.google.com/docs/projects/learn-more) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://firebase.google.com/docs/auth) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://firebase.google.com/docs/functions) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://firebase.google.com/pricing) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Firebase Public web-surface observation (REA)](https://firebase.google.com/) — A dated unauthenticated snapshot exposed controls button: Dropdown menu for Build, button: Dropdown menu for Run, button: Dropdown menu for Extended Navigation, button: Language, button: Chat, link: Skip to main content, link: Firebase, link: Build, link: Run, link: Solutions, combobox: Search, link: Blog, link: Go to console, link: Sign in, link: Learn more., link: Get Started, link: Get started in console, link: App Hosting, link: SQL Connect, link: Firebase AI Logic, link: View all Build products, link: App Distribution, link: Crashlytics, link: Remote Config, link: View all Run products, link: Agent Skills icon Agent Skills, link: Firebase AI Logic icon Firebase AI Logic, link: View generative AI options, link: Flutterlogo Flutter, link: Google Adslogo Google Ads, link: AdMoblogo AdMob, link: Google Marketing Platformlogo Google Marketing Platform, link: Google Playlogo Google Play, link: Data Studiologo Data Studio, link: BigQuerylogo BigQuery, link: Slacklogo Slack, link: Jiralogo Jira, link: Android Studiologo Android Studio, link: Learn more, link: View developer docs, link: View all news, link: - Building an iOS app in 6 hours with Firebase and Antigravity, link: Read more - Building an iOS app in 6 hours with Firebase and Antigravity, link: - Google Analytics for Firebase iOS SDK outage on September 28, 2026, link: Read more - Google Analytics for Firebase iOS SDK outage on September 28, 2026, link: YouTube - Can an agent port our Android app to iOS?, link: View video - Can an agent port our Android app to iOS?, link: View solutions, link: Get started, link: App Check, link: Authentication, link: Cloud Functions, link: Cloud Storage, link: Extensions, link: Firestore, link: Hosting, link: Phone Number Verification, link: Realtime Database, link: Generative AI, link: A/B Testing, link: Cloud Messaging, link: Google Analytics, link: In-App Messaging, link: Performance Monitoring, link: Test Lab, link: Developer guides, link: SDK & API reference, link: Samples, link: Libraries, link: GitHub, link: Check out the blog, link: Find us on Reddit, link: Follow on X, link: Subscribe on YouTube, link: Attend an event, link: Contact support, link: Stack Overflow, link: Google group, link: Release notes, link: Brand guidelines, link: FAQs, link: Google Developers, link: Android, link: Chrome, link: Google Cloud Platform, link: All products, link: Terms, link: Privacy and landmarks banner, navigation: Upper tabs, main, navigation: On this page, navigation, main, navigation: Footer links, navigation: Other Google Developers websites, navigation: Utility links. (VERIFIED; accessed 2026-11-03T01:38:08.105Z).
