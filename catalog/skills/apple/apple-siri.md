---
name: apple-siri
description: "Evidence-aware build skill for Siri (apple-siri); investigate, assess reuse, implement scoped behavior and verify."
---

# Siri — implementation skill (`apple-siri`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Siri**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Siri** (`apple-siri`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/apple/apple-siri.md` from the catalog page, or run `npx rae-faang apple-siri --out ./apple-siri.md`, `npx rae-faang skills generate apple-siri` or `npx rae-faang build agent-kit apple-siri --out ./apple-siri-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the RAE FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Siri / `apple-siri` | `catalog/products.jsonl` |
| Official product URL | [https://www.apple.com/siri/](https://www.apple.com/siri/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | Not recorded in the catalog; find the official documentation and record it before relying on prose. | Catalog record |
| Research dossier | `npx rae-faang research dossier apple-siri` | `research/companies/apple/products/apple-siri.md` |
| REA report | `catalog/rea/apple/apple-siri.md` (captured 2026-11-03T01:33:29.510Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/apple-siri.json` (`ev_1fbf64b3a679e3eb4863fe01e7ee7b22a3767886faffc3e8ce59c8015de35f4d`) | Catalog evidence |
| Alternative candidates | 2 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rae-faang products show apple-siri --format json` and `npx rae-faang research dossier apple-siri` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.apple.com/apple-intelligence/](https://www.apple.com/apple-intelligence/), captured 2026-11-03T01:33:29.510Z, evidence `ev_1fbf64b3a679e3eb4863fe01e7ee7b22a3767886faffc3e8ce59c8015de35f4d`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `APPLE-SIRI-CAP-AA9CB7C4`, `APPLE-SIRI-CAP-2175B595`, `APPLE-SIRI-CAP-FC1894BC`.

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
| Name / stable ID | **Siri** / `apple-siri` | Product catalog |
| Company / category | Apple / `ai_application` / `voice-assistant` | Product catalog |
| Official website / docs | [https://www.apple.com/siri/](https://www.apple.com/siri/) / Not recorded | URL lead; compiler does not fetch source |
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
| `APPLE-SIRI-CAP-AA9CB7C4` | Voice requests on device | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-SIRI-CAP-2175B595` | Home automation control | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `APPLE-SIRI-CAP-FC1894BC` | App intents | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Play Explore what’s new for Apple Intelligence gallery`, `button: Previous item in Siri AI gallery`, `button: Next item in Siri AI gallery`, `button: Previous item in Visual Intelligence Gallery`, `button: Next item in Visual Intelligence Gallery`, `button: Previous item in photos and images gallery`, `button: Next item in photos and images gallery`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Overview`, `link: iOS`, `link: macOS`, `link: iPadOS`, `link: watchOS`, `link: visionOS`, `link: Apple Intelligence`, `link: Footnote 1`, `link: Footnote 4`, `link: Footnote 5`, `link: Footnote 3`, `link: Footnote 2`, `button: Previous item in Communication Gallery`, `button: Next item in Communication Gallery`, `link: Footnote 6`, `button: Previous item in Productivity Gallery`, `button: Next item in Productivity Gallery`, `link: Footnote 7`, `link: Footnote 8`, `link: Footnote 9`, `link: Footnote 10`, `link: Learn more, iPhone Duo`, `link: Buy, iPhone Duo`, `link: iPhone 18 Pro`, `link: Learn more, iPhone 18 Pro`, `link: Buy, iPhone 18 Pro`, `link: iPhone Air`, `link: Learn more, iPhone Air`, `link: Buy, iPhone Air`, `link: iPhone 17`, `link: Learn more, iPhone 17`, `link: Buy, iPhone 17`, `link: iPhone 17e`, `link: Learn more, iPhone 17e`, `link: Buy, iPhone 17e`, `link: iPhone 16`, `link: Learn more, iPhone 16`, `link: Buy, iPhone 16`, `button: Previous item in iPhone gallery`, `button: Next item in iPhone gallery`, `link: iPhone Duo (A20 Pro)`, `link: iPhone 18 Pro Max (A20 Pro)`, `link: iPhone 18 Pro (A20 Pro)`, `link: iPhone Air (A19 Pro)`, `link: iPhone 17 (A19)`, `link: iPhone 17e (A19)`, `link: iPad Pro (M1 and later)`, `link: iPad Air (M1 and later)`, `link: iPad mini (A17 Pro and later)`, `link: Apple Vision Pro (M2 and later)`, `link: MacBook Neo (A18 Pro)`, `link: MacBook Air (M1 and later)`, `link: MacBook Pro (M1 and later)`, `link: MacBook Pro with PROLED XDR Display (M5 Pro and later)`, `link: iMac (M1 and later)`, `link: Mac mini (M1 and later)`, `link: Mac Studio (M1 Max and later)`, `link: Learn more about developing for Apple Intelligence`, `link: support.apple.com/148587`, `link: support.apple.com/121115`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Voice requests on device:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Home automation control:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **App intents:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global`, `navigation: Local`, `main`, `contentinfo: Apple Footer`, `region: Footnotes`, `navigation: Breadcrumbs`, `navigation: Apple Directory` | Full IA/routes/authenticated navigation |
| Views/headings | `Apple Intelligence and Siri`, `Introducing Siri AI. Truly helpful. Truly yours.`, `Explore what’s new for Apple Intelligence.`, `Siri AI`, `Just ask Siri.`, `Siri understands your personal context.`, `Take action in more apps.`, `Tap into broad world knowledge.`, `Introducing the Siri app.`, `Customize how Siri sounds.`, `Siri AI in CarPlay.`, `Visual Intelligence`, `Siri mode in Camera.`, `New smart actions.`, `Ask Siri about what’s in front of you.`, `Visual Intelligence with Siri on Mac.`, `Visual Intelligence with Siri on iPad.`, `Visual Intelligence with Siri on Apple Vision Pro.`, `Photos and images`, `Next-level intelligent photo editing.`, `Reframe your photo even after it’s taken.`, `Express more with Image Playground.`, `Image Wand.`, `Communication`, `Write with Siri virtually anywhere you type.` | Results and subsequent views |
| Controls | `button: Store menu`, `button: Mac menu`, `button: iPad menu`, `button: iPhone menu`, `button: Watch menu`, `button: Vision menu`, `button: AirPods menu`, `button: Home menu`, `button: Entertainment menu`, `button: Accessories menu`, `button: Support menu`, `button: Search apple.com`, `button: Shopping Bag`, `button: Play Explore what’s new for Apple Intelligence gallery`, `button: Previous item in Siri AI gallery`, `button: Next item in Siri AI gallery`, `button: Previous item in Visual Intelligence Gallery`, `button: Next item in Visual Intelligence Gallery`, `button: Previous item in photos and images gallery`, `button: Next item in photos and images gallery`, `link: Apple`, `link: Store`, `link: Mac`, `link: iPad`, `link: iPhone`, `link: Watch`, `link: Vision`, `link: AirPods`, `link: Home`, `link: Entertainment`, `link: Accessories`, `link: Support`, `link: Overview`, `link: iOS`, `link: macOS`, `link: iPadOS`, `link: watchOS`, `link: visionOS`, `link: Apple Intelligence`, `link: Footnote 1`, `link: Footnote 4`, `link: Footnote 5`, `link: Footnote 3`, `link: Footnote 2`, `button: Previous item in Communication Gallery`, `button: Next item in Communication Gallery`, `link: Footnote 6`, `button: Previous item in Productivity Gallery`, `button: Next item in Productivity Gallery`, `link: Footnote 7`, `link: Footnote 8`, `link: Footnote 9`, `link: Footnote 10`, `link: Learn more, iPhone Duo`, `link: Buy, iPhone Duo`, `link: iPhone 18 Pro`, `link: Learn more, iPhone 18 Pro`, `link: Buy, iPhone 18 Pro`, `link: iPhone Air`, `link: Learn more, iPhone Air`, `link: Buy, iPhone Air`, `link: iPhone 17`, `link: Learn more, iPhone 17`, `link: Buy, iPhone 17`, `link: iPhone 17e`, `link: Learn more, iPhone 17e`, `link: Buy, iPhone 17e`, `link: iPhone 16`, `link: Learn more, iPhone 16`, `link: Buy, iPhone 16`, `button: Previous item in iPhone gallery`, `button: Next item in iPhone gallery`, `link: iPhone Duo (A20 Pro)`, `link: iPhone 18 Pro Max (A20 Pro)`, `link: iPhone 18 Pro (A20 Pro)`, `link: iPhone Air (A19 Pro)`, `link: iPhone 17 (A19)`, `link: iPhone 17e (A19)`, `link: iPad Pro (M1 and later)`, `link: iPad Air (M1 and later)`, `link: iPad mini (A17 Pro and later)`, `link: Apple Vision Pro (M2 and later)`, `link: MacBook Neo (A18 Pro)`, `link: MacBook Air (M1 and later)`, `link: MacBook Pro (M1 and later)`, `link: MacBook Pro with PROLED XDR Display (M5 Pro and later)`, `link: iMac (M1 and later)`, `link: Mac mini (M1 and later)`, `link: Mac Studio (M1 Max and later)`, `link: Learn more about developing for Apple Intelligence`, `link: support.apple.com/148587`, `link: support.apple.com/121115`, `link: AirTag`, `link: Gift Cards`, `link: Wallet`, `link: Apple Card`, `link: Apple Pay`, `link: Apple Cash`, `link: Manage Your Apple Account`, `link: Apple Store Account`, `link: iCloud.com`, `link: Apple One`, `link: Apple TV`, `link: Apple Music`, `link: Apple Arcade`, `link: Apple Fitness+`, `link: Apple News+`, `link: Apple Podcasts`, `link: Apple Books`, `link: App Store`, `link: Find a Store`, `link: Genius Bar`, `link: Today at Apple`, `link: Group Reservations`, `link: Apple Camp`, `link: Apple Store App`, `link: Certified Refurbished`, `link: Apple Upgrade`, `link: Apple Trade In`, `link: Financing`, `link: Carrier Deals at Apple`, `link: Order Status`, `link: Shopping Help`, `link: Apple and Business`, `link: Shop for Business`, `link: Apple and Education`, `link: Shop for K-12`, `link: Shop for College`, `link: Apple and Healthcare`, `link: Apple and Government`, `link: Shop for Veterans and Military`, `link: Shop for State and Local Employees`, `link: Shop for Federal Employees`, `link: Accessibility`, `link: Education`, `link: Environment`, `link: Inclusion and Diversity`, `link: Privacy`, `link: Racial Equity and Justice`, `link: Supply Chain Innovation`, `link: Newsroom`, `link: Apple Leadership`, `link: Career Opportunities`, `link: Investors`, `link: Ethics & Compliance`, `link: Events`, `link: Contact Apple`, `link: Find an Apple Store`, `link: other retailer`, `link: 1-800-MY-APPLE`, `link: Privacy Policy`, `link: Terms of Use`, `link: Sales and Refunds`, `link: Legal`, `link: Site Map`, `link: United States. Choose your country or region` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Apple](/)`, `[Store](/us/shop/goto/store)`, `[Mac](/mac/)`, `[iPad](/ipad/)`, `[iPhone](/iphone/)`, `[Watch](/watch/)`, `[Vision](/apple-vision-pro/)`, `[AirPods](/airpods/)`, `[Home](/home/)`, `[Entertainment](/entertainment/)`, `[Accessories](/us/shop/goto/buy_accessories)`, `[Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)`, `[Overview](/os/)`, `[iOS](/os/ios/)`, `[macOS](/os/macos/)`, `[iPadOS](/os/ipados/)`, `[watchOS](/os/watchos/)`, `[visionOS](/os/visionos/)`, `[Footnote 1](#footnote-1)`, `[Footnote 4](#footnote-4)`, `[Footnote 5](#footnote-5)`, `[Footnote 3](#footnote-3)`, `[Footnote 2](#footnote-2)`, `[Footnote 6](#footnote-6)`, `[Footnote 7](#footnote-7)`, `[Footnote 8](#footnote-8)`, `[Footnote 9](#footnote-9)`, `[Footnote 10](#footnote-10)`, `[Learn more, iPhone Duo](/iphone-duo/)`, `[Buy, iPhone Duo](/us/shop/goto/buy_iphone/iphone_duo)`, `[iPhone 18 Pro](/iphone-18-pro/)`, `[Learn more, iPhone 18 Pro](/iphone-18-pro/)`, `[Buy, iPhone 18 Pro](/us/shop/goto/buy_iphone/iphone_18_pro)`, `[iPhone Air](/iphone-air/)`, `[Learn more, iPhone Air](/iphone-air/)`, `[Buy, iPhone Air](/us/shop/goto/buy_iphone/iphone_air)`, `[iPhone 17](/iphone-17/)`, `[Learn more, iPhone 17](/iphone-17/)`, `[Buy, iPhone 17](/us/shop/goto/buy_iphone/iphone_17)`, `[iPhone 17e](/iphone-17e/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-AA9CB7C4 — Voice requests on device
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-AA9CB7C4`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-SIRI-CAP-AA9CB7C4` → `REQ-FUNC-AA9CB7C4` → `TEST-FUNC-AA9CB7C4`.

### REQ-FUNC-2175B595 — Home automation control
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2175B595`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-SIRI-CAP-2175B595` → `REQ-FUNC-2175B595` → `TEST-FUNC-2175B595`.

### REQ-FUNC-FC1894BC — App intents
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-FC1894BC`; fixture and expected output must be specified from evidence.
- **Trace:** `APPLE-SIRI-CAP-FC1894BC` → `REQ-FUNC-FC1894BC` → `TEST-FUNC-FC1894BC`.

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
| [OpenVoiceOS](https://openvoiceos.org/) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Open-source voice assistant platform (Mycroft successor). | Community-run. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Home Assistant Voice](https://www.home-assistant.io/voice/) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Local voice assistant for the smart home. | No limitation recorded | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `APPLE-SIRI-CAP-AA9CB7C4` — Voice requests on device | Not verified against OpenVoiceOS | None yet; compare with `ev_1fbf64b3a679e3eb4863fe01e7ee7b22a3767886faffc3e8ce59c8015de35f4d` | Candidate code path and tests must be inspected |
| `APPLE-SIRI-CAP-2175B595` — Home automation control | Not verified against OpenVoiceOS | None yet; compare with `ev_1fbf64b3a679e3eb4863fe01e7ee7b22a3767886faffc3e8ce59c8015de35f4d` | Candidate code path and tests must be inspected |
| `APPLE-SIRI-CAP-FC1894BC` — App intents | Not verified against OpenVoiceOS | None yet; compare with `ev_1fbf64b3a679e3eb4863fe01e7ee7b22a3767886faffc3e8ce59c8015de35f4d` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **OpenVoiceOS** (Open-source voice assistant platform (Mycroft successor).), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **OpenVoiceOS** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-AA9CB7C4** → `REQ-FUNC-AA9CB7C4`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-2175B595** → `REQ-FUNC-2175B595`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-FC1894BC** → `REQ-FUNC-FC1894BC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-AA9CB7C4, REQ-FUNC-2175B595, REQ-FUNC-FC1894BC
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-AA9CB7C4, REQ-FUNC-2175B595, REQ-FUNC-FC1894BC
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
- **Completion:** Trace: REQ-FUNC-AA9CB7C4, REQ-FUNC-2175B595, REQ-FUNC-FC1894BC; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.apple.com/siri/) | Not recorded | Siri is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_1fbf64b3a679e3eb4863fe01e7ee7b22a3767886faffc3e8ce59c8015de35f4d` | Siri Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.apple.com/apple-intelligence/) | 2026-11-03T01:33:29.510Z | A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Play Explore what’s new for Apple Intelligence gallery, button: Previous item in Siri AI gallery, button: Next item in Siri AI gallery, button: Previous item in Visual Intelligence Gallery, button: Next item in Visual Intelligence Gallery, button: Previous item in photos and images gallery, button: Next item in photos and images gallery, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Overview, link: iOS, link: macOS, link: iPadOS, link: watchOS, link: visionOS, link: Apple Intelligence, link: Footnote 1, link: Footnote 4, link: Footnote 5, link: Footnote 3, link: Footnote 2, button: Previous item in Communication Gallery, button: Next item in Communication Gallery, link: Footnote 6, button: Previous item in Productivity Gallery, button: Next item in Productivity Gallery, link: Footnote 7, link: Footnote 8, link: Footnote 9, link: Footnote 10, link: Learn more, iPhone Duo, link: Buy, iPhone Duo, link: iPhone 18 Pro, link: Learn more, iPhone 18 Pro, link: Buy, iPhone 18 Pro, link: iPhone Air, link: Learn more, iPhone Air, link: Buy, iPhone Air, link: iPhone 17, link: Learn more, iPhone 17, link: Buy, iPhone 17, link: iPhone 17e, link: Learn more, iPhone 17e, link: Buy, iPhone 17e, link: iPhone 16, link: Learn more, iPhone 16, link: Buy, iPhone 16, button: Previous item in iPhone gallery, button: Next item in iPhone gallery, link: iPhone Duo (A20 Pro), link: iPhone 18 Pro Max (A20 Pro), link: iPhone 18 Pro (A20 Pro), link: iPhone Air (A19 Pro), link: iPhone 17 (A19), link: iPhone 17e (A19), link: iPad Pro (M1 and later), link: iPad Air (M1 and later), link: iPad mini (A17 Pro and later), link: Apple Vision Pro (M2 and later), link: MacBook Neo (A18 Pro), link: MacBook Air (M1 and later), link: MacBook Pro (M1 and later), link: MacBook Pro with PROLED XDR Display (M5 Pro and later), link: iMac (M1 and later), link: Mac mini (M1 and later), link: Mac Studio (M1 Max and later), link: Learn more about developing for Apple Intelligence, link: support.apple.com/148587, link: support.apple.com/121115, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `apple-siri`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Siri is Apple's voice assistant, built into iOS, macOS, HomePod and other devices.

---

# 2. Product identity and ownership

- **Official name:** Siri
- **Company and business unit:** apple
- **Current lifecycle status:** active
- **Official website:** https://www.apple.com/siri/

---

# 3. Product capabilities

- Voice requests on device
- Home automation control
- App intents

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

Open-source candidates exist: OpenVoiceOS (Apache-2.0) — Open-source voice assistant platform (Mycroft successor).; Home Assistant Voice (Apache-2.0) — Local voice assistant for the smart home.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Open voice stacks exist (OpenVoiceOS, Home Assistant voice); capability, on-device models and device reach lag Apple.

---

# 10. Missing capabilities and opportunity analysis

Open voice stacks exist (OpenVoiceOS, Home Assistant voice); capability, on-device models and device reach lag Apple.

---

# 11. RAE implementation strategy

Partial. Open assistants exist; capability and integration depth lag.

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

Open voice stacks exist (OpenVoiceOS, Home Assistant voice); capability, on-device models and device reach lag Apple.

---

# 17. RAE implementation strategy (continued)

Partial. Open assistants exist; capability and integration depth lag.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier apple-siri` and inspect canonical identity with `npx rae-faang products show apple-siri --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang apple-siri --out ./apple-siri.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit apple-siri --out ./apple-siri-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`apple-siri`).
- Dossier: [research/companies/apple/products/apple-siri.md](../../../research/companies/apple/products/apple-siri.md).
- REA capture: [catalog/rea/apple/apple-siri.md](../../rea/apple/apple-siri.md) (2026-11-03T01:33:29.510Z); raw record: [catalog/rea/evidence/apple-siri.json](../../rea/evidence/apple-siri.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.apple.com/siri/) — Siri is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Siri Public web-surface observation (REA)](https://www.apple.com/apple-intelligence/) — A dated unauthenticated snapshot exposed controls button: Store menu, button: Mac menu, button: iPad menu, button: iPhone menu, button: Watch menu, button: Vision menu, button: AirPods menu, button: Home menu, button: Entertainment menu, button: Accessories menu, button: Support menu, button: Search apple.com, button: Shopping Bag, button: Play Explore what’s new for Apple Intelligence gallery, button: Previous item in Siri AI gallery, button: Next item in Siri AI gallery, button: Previous item in Visual Intelligence Gallery, button: Next item in Visual Intelligence Gallery, button: Previous item in photos and images gallery, button: Next item in photos and images gallery, link: Apple, link: Store, link: Mac, link: iPad, link: iPhone, link: Watch, link: Vision, link: AirPods, link: Home, link: Entertainment, link: Accessories, link: Support, link: Overview, link: iOS, link: macOS, link: iPadOS, link: watchOS, link: visionOS, link: Apple Intelligence, link: Footnote 1, link: Footnote 4, link: Footnote 5, link: Footnote 3, link: Footnote 2, button: Previous item in Communication Gallery, button: Next item in Communication Gallery, link: Footnote 6, button: Previous item in Productivity Gallery, button: Next item in Productivity Gallery, link: Footnote 7, link: Footnote 8, link: Footnote 9, link: Footnote 10, link: Learn more, iPhone Duo, link: Buy, iPhone Duo, link: iPhone 18 Pro, link: Learn more, iPhone 18 Pro, link: Buy, iPhone 18 Pro, link: iPhone Air, link: Learn more, iPhone Air, link: Buy, iPhone Air, link: iPhone 17, link: Learn more, iPhone 17, link: Buy, iPhone 17, link: iPhone 17e, link: Learn more, iPhone 17e, link: Buy, iPhone 17e, link: iPhone 16, link: Learn more, iPhone 16, link: Buy, iPhone 16, button: Previous item in iPhone gallery, button: Next item in iPhone gallery, link: iPhone Duo (A20 Pro), link: iPhone 18 Pro Max (A20 Pro), link: iPhone 18 Pro (A20 Pro), link: iPhone Air (A19 Pro), link: iPhone 17 (A19), link: iPhone 17e (A19), link: iPad Pro (M1 and later), link: iPad Air (M1 and later), link: iPad mini (A17 Pro and later), link: Apple Vision Pro (M2 and later), link: MacBook Neo (A18 Pro), link: MacBook Air (M1 and later), link: MacBook Pro (M1 and later), link: MacBook Pro with PROLED XDR Display (M5 Pro and later), link: iMac (M1 and later), link: Mac mini (M1 and later), link: Mac Studio (M1 Max and later), link: Learn more about developing for Apple Intelligence, link: support.apple.com/148587, link: support.apple.com/121115, link: AirTag, link: Gift Cards, link: Wallet, link: Apple Card, link: Apple Pay, link: Apple Cash, link: Manage Your Apple Account, link: Apple Store Account, link: iCloud.com, link: Apple One, link: Apple TV, link: Apple Music, link: Apple Arcade, link: Apple Fitness+, link: Apple News+, link: Apple Podcasts, link: Apple Books, link: App Store, link: Find a Store, link: Genius Bar, link: Today at Apple, link: Group Reservations, link: Apple Camp, link: Apple Store App, link: Certified Refurbished, link: Apple Upgrade, link: Apple Trade In, link: Financing, link: Carrier Deals at Apple, link: Order Status, link: Shopping Help, link: Apple and Business, link: Shop for Business, link: Apple and Education, link: Shop for K-12, link: Shop for College, link: Apple and Healthcare, link: Apple and Government, link: Shop for Veterans and Military, link: Shop for State and Local Employees, link: Shop for Federal Employees, link: Accessibility, link: Education, link: Environment, link: Inclusion and Diversity, link: Privacy, link: Racial Equity and Justice, link: Supply Chain Innovation, link: Newsroom, link: Apple Leadership, link: Career Opportunities, link: Investors, link: Ethics & Compliance, link: Events, link: Contact Apple, link: Find an Apple Store, link: other retailer, link: 1-800-MY-APPLE, link: Privacy Policy, link: Terms of Use, link: Sales and Refunds, link: Legal, link: Site Map, link: United States. Choose your country or region and landmarks navigation: Global, navigation: Local, main, contentinfo: Apple Footer, region: Footnotes, navigation: Breadcrumbs, navigation: Apple Directory. (VERIFIED; accessed 2026-11-03T01:33:29.510Z).
