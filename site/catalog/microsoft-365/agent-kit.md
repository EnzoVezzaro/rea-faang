---
name: microsoft-365
description: "Evidence-aware build skill for Microsoft 365 (microsoft-365); investigate, assess reuse, implement scoped behavior and verify."
---

# Microsoft 365 — implementation skill (`microsoft-365`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Microsoft 365**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Microsoft 365** (`microsoft-365`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/microsoft/microsoft-365.md` from the catalog page, or run `npx rae-faang microsoft-365 --out ./microsoft-365.md`, `npx rae-faang skills generate microsoft-365` or `npx rae-faang build agent-kit microsoft-365 --out ./microsoft-365-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the RAE FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Microsoft 365 / `microsoft-365` | `catalog/products.jsonl` |
| Official product URL | [https://www.microsoft.com/en-us/microsoft-365](https://www.microsoft.com/en-us/microsoft-365) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://learn.microsoft.com/en-us/microsoft-365/](https://learn.microsoft.com/en-us/microsoft-365/) | Catalog record |
| Research dossier | `npx rae-faang research dossier microsoft-365` | `research/companies/microsoft/products/microsoft-365.md` |
| REA report | `catalog/rea/microsoft/microsoft-365.md` (captured 2026-11-03T01:41:00.503Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/microsoft-365.json` (`ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rae-faang products show microsoft-365 --format json` and `npx rae-faang research dossier microsoft-365` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.microsoft.com/en-us/microsoft-365](https://www.microsoft.com/en-us/microsoft-365), captured 2026-11-03T01:41:00.503Z, evidence `ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `MICROSOFT-365-CAP-F9D4246F`, `MICROSOFT-365-CAP-7251FDF1`, `MICROSOFT-365-CAP-EA973C23`, `MICROSOFT-365-CAP-14054D0E`.

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
| Name / stable ID | **Microsoft 365** / `microsoft-365` | Product catalog |
| Company / category | Microsoft / `consumer_subscription` / `productivity`, `collaboration`, `subscription` | Product catalog |
| Official website / docs | [https://www.microsoft.com/en-us/microsoft-365](https://www.microsoft.com/en-us/microsoft-365) / [https://learn.microsoft.com/en-us/microsoft-365/](https://learn.microsoft.com/en-us/microsoft-365/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **consumer_subscription** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `MICROSOFT-365-CAP-F9D4246F` | Word, Excel, PowerPoint and Outlook across desktop, web and mobile | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `MICROSOFT-365-CAP-7251FDF1` | OneDrive file storage and sharing | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `MICROSOFT-365-CAP-EA973C23` | Teams meetings and chat inside the subscription | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `MICROSOFT-365-CAP-14054D0E` | Admin center for users, licences and policy | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Products `, `button: Resources `, `button: Support `, `button: Search Microsoft 365`, `button: ME`, `button: Close Announcement Banner`, `button:  Brainstorm and research with ease`, `button: Play`, `button:  Organize and plan with precision`, `button:  Create and polish with confidence`, `button:  Protect what’s important`, `button: Previous Slide`, `button: Next Slide`, `button: More information`, `button: Outlook`, `button: OneDrive`, `button: Microsoft Copilot`, `button: Word (web and mobile only)`, `button: Excel (web and mobile only)`, `button: PowerPoint (web and mobile only)`, `link: Skip to main content`, `link: Microsoft`, `link: Microsoft 365`, `link: Plans and pricing`, `link: Try for free`, `link: Watch our Copilot webinar on demand.`, `link: Footnote 2`, `link: Footnote 1`, `link: See Copilot in action`, `link: For individuals`, `link: For business`, `link: For enterprise`, `link: For education`, `link: How it works`, `link: features`, `link: news`, `link: What’s included`, `link: Plans`, `link: Get started`, `link: FAQ`, `link: See plans and pricing for Microsoft 365`, `link: Learn more about Microsoft 365 for individuals`, `link: footnote1`, `link: Back to Features section`, `link: Get offer - Explore Microsoft 365 discounted plans for college students and enhance productivity.`, `link: Explore all apps, products and services of microsoft 365`, `link: Learn more about Microsoft Word`, `link: Learn more about Microsoft excel`, `link: Learn more about Microsoft powerpoint`, `link: Learn more about Your inbox, organized. Your day, planned`, `link: Learn more about OneNote`, `link: Learn more about Connect with anyone in Teams for free`, `link: Back to tabs for what's included section`, `link: Create a free Microsoft account`, `link: See terms.`, `link: Buy now`, `link: See terms`, `button: OneNote (web and mobile only)`, `button: Microsoft Defender`, `button: Microsoft Teams`, `link: see terms for yearly option of Microsoft 365 family`, `link: Buy now your Microsoft 365 family account`, `link: Try for free Microsoft 365 Family for free trial period`, `button: Word`, `button: Excel`, `button: PowerPoint`, `button: OneNote`, `link: see terms of yearly Microsoft 365 premium subscription`, `link: Buy now yearly microsoft 365 premium subscription`, `link: Try for free Microsoft 365 premium free trial`, `link: Back to carousel navigation controls`, `link: Back to tabs for plans section`, `link: Learn more about how to Try what’s next in AI`, `button: Expand all`, `button: Collapse all`, `button: 01/ What is Microsoft 365 and what features are included with a subscription? `, `button: 02/ Was Microsoft Office 365 renamed to Microsoft 365? `, `button: 03/ When do I need a Microsoft 365 subscription? `, `button: 04/ What is the difference between Microsoft 365 Basic, Personal, Family, Premium, and Pro? `, `button: 05/ How is Copilot integrated across Microsoft 365 apps? `, `button: 06/ How does Microsoft use my data and protect my privacy? `, `button: 07/ What devices can I use Microsoft 365 on? `, `button: 08/ Why should I choose Microsoft 365 over tools like Google Workspace? `, `link: Back to footnote 1`, `link: Back to footnote 2`, `link: Back to footnote 3`, `link: Back to footnote 4`, `link: Click to see details about Microsoft 365 Personal, Family, or Premium subscription`, `link: Follow Microsoft 365 on Linkedin`, `link: Follow Microsoft 365 on Twitter`, `link: Follow Microsoft 365 on Instagram`, `link: Follow Microsoft 365 on Threads`, `link: Follow Microsoft 365 on Facebook`, `link: Follow Microsoft 365 on TikTok`, `link: Follow Microsoft 365 on YouTube`, `link: Surface Laptop Ultra`, `link: Surface Pro`, `link: Surface Laptop`, `link: Surface RTX Spark Dev Box`, `link: Explore Copilot`, `link: Explore Microsoft products`, `link: Windows 11 apps`, `link: Account profile`, `link: Download Center`, `link: Microsoft Store support`, `link: Returns`, `link: Order tracking`, `link: Certified Refurbished`, `link: Why buy from Microsoft Store`, `link: Flexible Payments`, `link: Microsoft in education`, `link: Devices for education`, `link: Microsoft Teams for Education`, `link: Microsoft 365 Education`, `link: How to buy for your school`, `link: Educator training and development`, `link: Deals for students and parents`, `link: AI for education`, `link: Microsoft AI`, `link: Microsoft Security`, `link: Dynamics 365`, `link: Microsoft Power Platform`, `link: Microsoft Teams`, `link: Microsoft Copilot`, `link: Small Business`, `link: Azure`, `link: Microsoft Developer`, `link: Microsoft Learn`, `link: Support for AI marketplace apps`, `link: Microsoft Tech Community`, `link: Microsoft Marketplace`, `link: Software companies`, `link: Visual Studio`, `link: Careers`, `link: About Microsoft`, `link: Company news`, `link: Privacy at Microsoft`, `link: Investors`, `link: Diversity and inclusion`, `link: Accessibility`, `link: Sustainability`, `link: Content Language Selector. Currently set to English (United States)`, `link: Your Privacy Choices Opt-Out Icon Your Privacy Choices`, `link: Consumer Health Privacy`, `link: Sitemap`, `link: Contact Microsoft`, `link: Privacy`, `link: Terms of use`, `link: Trademarks`, `link: Safety & eco`, `link: Recycling`, `link: About our ads`, `button: Feedback`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Word, Excel, PowerPoint and Outlook across desktop, web and mobile:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **OneDrive file storage and sharing:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Teams meetings and chat inside the subscription:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Admin center for users, licences and policy:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `navigation: Contextual menu`, `main`, `navigation: In Page quick links`, `region: Features section`, `region: Plans section`, `region: Footnotes`, `region: Follow Microsoft Copilot links`, `contentinfo`, `navigation: Footer Resource links`, `navigation: Microsoft corporate links` | Full IA/routes/authenticated navigation |
| Views/headings | `The apps you know go further with Copilot`, `Boost your productivity with Copilot`, `Brainstorm and research with ease`, `Organize and plan with precision`, `Create and polish with confidence`, `Protect what’s important`, `AI features included with Microsoft 365 to help you explore, create, and solve`, `Cowork (Premium and Pro only)`, `Researcher (Premium and Pro only)`, `Discover what’s happening with Microsoft 365`, `Students save 50% on our AI and productivity subscription`, `Built for work. Made for you.`, `Powerful apps to simplify your life and work`, `Copilot is built for work`, `Create your best work`, `Turn data into insights`, `Polish your presentations`, `Your inbox, organized`, `Uplevel your notes`, `Connect with anyone`, `Find the plan that’s right for you`, `Microsoft 365`, `Microsoft 365 Basic`, `Microsoft 365 Basic includes:`, `Microsoft 365 Personal` | Results and subsequent views |
| Controls | `button: Products `, `button: Resources `, `button: Support `, `button: Search Microsoft 365`, `button: ME`, `button: Close Announcement Banner`, `button:  Brainstorm and research with ease`, `button: Play`, `button:  Organize and plan with precision`, `button:  Create and polish with confidence`, `button:  Protect what’s important`, `button: Previous Slide`, `button: Next Slide`, `button: More information`, `button: Outlook`, `button: OneDrive`, `button: Microsoft Copilot`, `button: Word (web and mobile only)`, `button: Excel (web and mobile only)`, `button: PowerPoint (web and mobile only)`, `link: Skip to main content`, `link: Microsoft`, `link: Microsoft 365`, `link: Plans and pricing`, `link: Try for free`, `link: Watch our Copilot webinar on demand.`, `link: Footnote 2`, `link: Footnote 1`, `link: See Copilot in action`, `link: For individuals`, `link: For business`, `link: For enterprise`, `link: For education`, `link: How it works`, `link: features`, `link: news`, `link: What’s included`, `link: Plans`, `link: Get started`, `link: FAQ`, `link: See plans and pricing for Microsoft 365`, `link: Learn more about Microsoft 365 for individuals`, `link: footnote1`, `link: Back to Features section`, `link: Get offer - Explore Microsoft 365 discounted plans for college students and enhance productivity.`, `link: Explore all apps, products and services of microsoft 365`, `link: Learn more about Microsoft Word`, `link: Learn more about Microsoft excel`, `link: Learn more about Microsoft powerpoint`, `link: Learn more about Your inbox, organized. Your day, planned`, `link: Learn more about OneNote`, `link: Learn more about Connect with anyone in Teams for free`, `link: Back to tabs for what's included section`, `link: Create a free Microsoft account`, `link: See terms.`, `link: Buy now`, `link: See terms`, `button: OneNote (web and mobile only)`, `button: Microsoft Defender`, `button: Microsoft Teams`, `link: see terms for yearly option of Microsoft 365 family`, `link: Buy now your Microsoft 365 family account`, `link: Try for free Microsoft 365 Family for free trial period`, `button: Word`, `button: Excel`, `button: PowerPoint`, `button: OneNote`, `link: see terms of yearly Microsoft 365 premium subscription`, `link: Buy now yearly microsoft 365 premium subscription`, `link: Try for free Microsoft 365 premium free trial`, `link: Back to carousel navigation controls`, `link: Back to tabs for plans section`, `link: Learn more about how to Try what’s next in AI`, `button: Expand all`, `button: Collapse all`, `button: 01/ What is Microsoft 365 and what features are included with a subscription? `, `button: 02/ Was Microsoft Office 365 renamed to Microsoft 365? `, `button: 03/ When do I need a Microsoft 365 subscription? `, `button: 04/ What is the difference between Microsoft 365 Basic, Personal, Family, Premium, and Pro? `, `button: 05/ How is Copilot integrated across Microsoft 365 apps? `, `button: 06/ How does Microsoft use my data and protect my privacy? `, `button: 07/ What devices can I use Microsoft 365 on? `, `button: 08/ Why should I choose Microsoft 365 over tools like Google Workspace? `, `link: Back to footnote 1`, `link: Back to footnote 2`, `link: Back to footnote 3`, `link: Back to footnote 4`, `link: Click to see details about Microsoft 365 Personal, Family, or Premium subscription`, `link: Follow Microsoft 365 on Linkedin`, `link: Follow Microsoft 365 on Twitter`, `link: Follow Microsoft 365 on Instagram`, `link: Follow Microsoft 365 on Threads`, `link: Follow Microsoft 365 on Facebook`, `link: Follow Microsoft 365 on TikTok`, `link: Follow Microsoft 365 on YouTube`, `link: Surface Laptop Ultra`, `link: Surface Pro`, `link: Surface Laptop`, `link: Surface RTX Spark Dev Box`, `link: Explore Copilot`, `link: Explore Microsoft products`, `link: Windows 11 apps`, `link: Account profile`, `link: Download Center`, `link: Microsoft Store support`, `link: Returns`, `link: Order tracking`, `link: Certified Refurbished`, `link: Why buy from Microsoft Store`, `link: Flexible Payments`, `link: Microsoft in education`, `link: Devices for education`, `link: Microsoft Teams for Education`, `link: Microsoft 365 Education`, `link: How to buy for your school`, `link: Educator training and development`, `link: Deals for students and parents`, `link: AI for education`, `link: Microsoft AI`, `link: Microsoft Security`, `link: Dynamics 365`, `link: Microsoft Power Platform`, `link: Microsoft Teams`, `link: Microsoft Copilot`, `link: Small Business`, `link: Azure`, `link: Microsoft Developer`, `link: Microsoft Learn`, `link: Support for AI marketplace apps`, `link: Microsoft Tech Community`, `link: Microsoft Marketplace`, `link: Software companies`, `link: Visual Studio`, `link: Careers`, `link: About Microsoft`, `link: Company news`, `link: Privacy at Microsoft`, `link: Investors`, `link: Diversity and inclusion`, `link: Accessibility`, `link: Sustainability`, `link: Content Language Selector. Currently set to English (United States)`, `link: Your Privacy Choices Opt-Out Icon Your Privacy Choices`, `link: Consumer Health Privacy`, `link: Sitemap`, `link: Contact Microsoft`, `link: Privacy`, `link: Terms of use`, `link: Trademarks`, `link: Safety & eco`, `link: Recycling`, `link: About our ads`, `button: Feedback` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content](#mainContent)`, `[Microsoft](https://www.microsoft.com)`, `[Microsoft 365](https://www.microsoft.com/en-us/microsoft-365)`, `[Plans and pricing](https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing)`, `[Try for free](https://www.microsoft.com/en-us/microsoft-365/try-prs?ocid=cmmo4xgt3j5)`, `[Watch our Copilot webinar on demand.](https://go.microsoft.com/fwlink/?linkid=2362435&clcid=0x409&culture=en-us&country=us)`, `[Footnote 2](#note-2)`, `[Footnote 1](#note-1)`, `[See Copilot in action](#m365-hero-video-1307281)`, `[For individuals](https://www.microsoft.com/en-us/microsoft-365)`, `[For business](https://www.microsoft.com/en-us/microsoft-365/microsoft-365-business)`, `[For enterprise](https://www.microsoft.com/en-us/microsoft-365/microsoft-365-enterprise)`, `[For education](https://www.microsoft.com/en-us/microsoft-365/microsoft-365-education)`, `[How it works](#How-it-works)`, `[features](#features)`, `[news](#news)`, `[What’s included](#Whats-included)`, `[Plans](#Plans)`, `[Get started](#Get-started)`, `[FAQ](#FAQ)`, `[See plans and pricing for Microsoft 365](https://go.microsoft.com/fwlink/p/?linkid=2220705&clcid=0x409&culture=en-us&country=us)`, `[Learn more about Microsoft 365 for individuals](https://www.microsoft.com/en-us/microsoft-365/explore-microsoft-365-for-home)`, `[footnote1](#note-1)`, `[Back to Features section](javascript:void(0);)`, `[Get offer - Explore Microsoft 365 discounted plans for college students and enhance productivity.](https://www.microsoft.com/en-us/microsoft-365/college-student-pricing)`, `[Explore all apps, products and services of microsoft 365](https://www.microsoft.com/en-us/microsoft-365/products-apps-services)`, `[Learn more about Microsoft Word](https://www.microsoft.com/en-us/microsoft-365/word)`, `[Learn more about Microsoft excel](https://www.microsoft.com/en-us/microsoft-365/excel)`, `[Learn more about Microsoft powerpoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint)`, `[Learn more about Your inbox, organized. Your day, planned](https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook)`, `[Learn more about OneNote](https://www.microsoft.com/en-us/microsoft-365/onenote/digital-note-taking-app)`, `[Learn more about Connect with anyone in Teams for free](https://www.microsoft.com/en-us/microsoft-teams/teams-free)`, `[Back to tabs for what's included section](#tabs-pill-bar-oc58d2_tab0-tab)`, `[Create a free Microsoft account](https://go.microsoft.com/fwlink/?linkid=2269915&clcid=0x409&culture=en-us&country=us)`, `[See terms.](https://go.microsoft.com/fwlink/?linkid=2265909)`, `[Buy now](https://go.microsoft.com/fwlink/p/?LinkID=2186361&clcid=0x409&culture=en-us&country=us)`, `[See terms](https://go.microsoft.com/fwlink/?linkid=2265909)`, `[Buy now](https://go.microsoft.com/fwlink/?linkid=2234515&clcid=0x409&culture=en-us&country=us)`, `[Try for free](https://www.microsoft.com/en-us/microsoft-365/try-prs)`, `[see terms for yearly option of Microsoft 365 family](https://go.microsoft.com/fwlink/?linkid=2265909)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-F9D4246F — Word, Excel, PowerPoint and Outlook across desktop, web and mobile
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-F9D4246F`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-365-CAP-F9D4246F` → `REQ-FUNC-F9D4246F` → `TEST-FUNC-F9D4246F`.

### REQ-FUNC-7251FDF1 — OneDrive file storage and sharing
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-7251FDF1`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-365-CAP-7251FDF1` → `REQ-FUNC-7251FDF1` → `TEST-FUNC-7251FDF1`.

### REQ-FUNC-EA973C23 — Teams meetings and chat inside the subscription
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-EA973C23`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-365-CAP-EA973C23` → `REQ-FUNC-EA973C23` → `TEST-FUNC-EA973C23`.

### REQ-FUNC-14054D0E — Admin center for users, licences and policy
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-14054D0E`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-365-CAP-14054D0E` → `REQ-FUNC-14054D0E` → `TEST-FUNC-14054D0E`.

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
| [LibreOffice](https://www.libreoffice.org/) | Not recorded; verify the canonical repository | MPL-2.0 (unverified) | Desktop office suite with document formats. | No hosted collaboration or identity layer. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [ONLYOFFICE](https://www.onlyoffice.com/) | Not recorded; verify the canonical repository | AGPL-3.0 (unverified) | Document editors with self-hosted collaboration server. | Smaller ecosystem and fewer enterprise integrations. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Nextcloud](https://nextcloud.com/) | Not recorded; verify the canonical repository | AGPL-3.0 (unverified) | Self-hosted files, calendar and online office integration. | Depends on an office backend for full document editing. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `MICROSOFT-365-CAP-F9D4246F` — Word, Excel, PowerPoint and Outlook across desktop, web and mobile | Not verified against LibreOffice | None yet; compare with `ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a` | Candidate code path and tests must be inspected |
| `MICROSOFT-365-CAP-7251FDF1` — OneDrive file storage and sharing | Not verified against LibreOffice | None yet; compare with `ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a` | Candidate code path and tests must be inspected |
| `MICROSOFT-365-CAP-EA973C23` — Teams meetings and chat inside the subscription | Not verified against LibreOffice | None yet; compare with `ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a` | Candidate code path and tests must be inspected |
| `MICROSOFT-365-CAP-14054D0E` — Admin center for users, licences and policy | Not verified against LibreOffice | None yet; compare with `ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **LibreOffice** (Desktop office suite with document formats.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **LibreOffice** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-F9D4246F** → `REQ-FUNC-F9D4246F`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-7251FDF1** → `REQ-FUNC-7251FDF1`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-EA973C23** → `REQ-FUNC-EA973C23`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-14054D0E** → `REQ-FUNC-14054D0E`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-F9D4246F, REQ-FUNC-7251FDF1, REQ-FUNC-EA973C23, REQ-FUNC-14054D0E
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-F9D4246F, REQ-FUNC-7251FDF1, REQ-FUNC-EA973C23, REQ-FUNC-14054D0E
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
- **Completion:** Trace: REQ-FUNC-F9D4246F, REQ-FUNC-7251FDF1, REQ-FUNC-EA973C23, REQ-FUNC-14054D0E; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.microsoft.com/en-us/microsoft-365) | 2026-11-03T00:00:00Z | Microsoft 365 is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://learn.microsoft.com/en-us/microsoft-365/) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://www.microsoft.com/en-us/microsoft-365) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://learn.microsoft.com/en-us/microsoft-365/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a` | Microsoft 365 Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.microsoft.com/en-us/microsoft-365) | 2026-11-03T01:41:00.503Z | A dated unauthenticated snapshot exposed controls button: Products , button: Resources , button: Support , button: Search Microsoft 365, button: ME, button: Close Announcement Banner, button:  Brainstorm and research with ease, button: Play, button:  Organize and plan with precision, button:  Create and polish with confidence, button:  Protect what’s important, button: Previous Slide, button: Next Slide, button: More information, button: Outlook, button: OneDrive, button: Microsoft Copilot, button: Word (web and mobile only), button: Excel (web and mobile only), button: PowerPoint (web and mobile only), link: Skip to main content, link: Microsoft, link: Microsoft 365, link: Plans and pricing, link: Try for free, link: Watch our Copilot webinar on demand., link: Footnote 2, link: Footnote 1, link: See Copilot in action, link: For individuals, link: For business, link: For enterprise, link: For education, link: How it works, link: features, link: news, link: What’s included, link: Plans, link: Get started, link: FAQ, link: See plans and pricing for Microsoft 365, link: Learn more about Microsoft 365 for individuals, link: footnote1, link: Back to Features section, link: Get offer - Explore Microsoft 365 discounted plans for college students and enhance productivity., link: Explore all apps, products and services of microsoft 365, link: Learn more about Microsoft Word, link: Learn more about Microsoft excel, link: Learn more about Microsoft powerpoint, link: Learn more about Your inbox, organized. Your day, planned, link: Learn more about OneNote, link: Learn more about Connect with anyone in Teams for free, link: Back to tabs for what's included section, link: Create a free Microsoft account, link: See terms., link: Buy now, link: See terms, button: OneNote (web and mobile only), button: Microsoft Defender, button: Microsoft Teams, link: see terms for yearly option of Microsoft 365 family, link: Buy now your Microsoft 365 family account, link: Try for free Microsoft 365 Family for free trial period, button: Word, button: Excel, button: PowerPoint, button: OneNote, link: see terms of yearly Microsoft 365 premium subscription, link: Buy now yearly microsoft 365 premium subscription, link: Try for free Microsoft 365 premium free trial, link: Back to carousel navigation controls, link: Back to tabs for plans section, link: Learn more about how to Try what’s next in AI, button: Expand all, button: Collapse all, button: 01/ What is Microsoft 365 and what features are included with a subscription? , button: 02/ Was Microsoft Office 365 renamed to Microsoft 365? , button: 03/ When do I need a Microsoft 365 subscription? , button: 04/ What is the difference between Microsoft 365 Basic, Personal, Family, Premium, and Pro? , button: 05/ How is Copilot integrated across Microsoft 365 apps? , button: 06/ How does Microsoft use my data and protect my privacy? , button: 07/ What devices can I use Microsoft 365 on? , button: 08/ Why should I choose Microsoft 365 over tools like Google Workspace? , link: Back to footnote 1, link: Back to footnote 2, link: Back to footnote 3, link: Back to footnote 4, link: Click to see details about Microsoft 365 Personal, Family, or Premium subscription, link: Follow Microsoft 365 on Linkedin, link: Follow Microsoft 365 on Twitter, link: Follow Microsoft 365 on Instagram, link: Follow Microsoft 365 on Threads, link: Follow Microsoft 365 on Facebook, link: Follow Microsoft 365 on TikTok, link: Follow Microsoft 365 on YouTube, link: Surface Laptop Ultra, link: Surface Pro, link: Surface Laptop, link: Surface RTX Spark Dev Box, link: Explore Copilot, link: Explore Microsoft products, link: Windows 11 apps, link: Account profile, link: Download Center, link: Microsoft Store support, link: Returns, link: Order tracking, link: Certified Refurbished, link: Why buy from Microsoft Store, link: Flexible Payments, link: Microsoft in education, link: Devices for education, link: Microsoft Teams for Education, link: Microsoft 365 Education, link: How to buy for your school, link: Educator training and development, link: Deals for students and parents, link: AI for education, link: Microsoft AI, link: Microsoft Security, link: Dynamics 365, link: Microsoft Power Platform, link: Microsoft Teams, link: Microsoft Copilot, link: Small Business, link: Azure, link: Microsoft Developer, link: Microsoft Learn, link: Support for AI marketplace apps, link: Microsoft Tech Community, link: Microsoft Marketplace, link: Software companies, link: Visual Studio, link: Careers, link: About Microsoft, link: Company news, link: Privacy at Microsoft, link: Investors, link: Diversity and inclusion, link: Accessibility, link: Sustainability, link: Content Language Selector. Currently set to English (United States), link: Your Privacy Choices Opt-Out Icon Your Privacy Choices, link: Consumer Health Privacy, link: Sitemap, link: Contact Microsoft, link: Privacy, link: Terms of use, link: Trademarks, link: Safety & eco, link: Recycling, link: About our ads, button: Feedback and landmarks banner, navigation: Contextual menu, main, navigation: In Page quick links, region: Features section, region: Plans section, region: Footnotes, region: Follow Microsoft Copilot links, contentinfo, navigation: Footer Resource links, navigation: Microsoft corporate links. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `microsoft-365`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Microsoft 365 bundles the Office applications with cloud storage, email and collaboration under a per-user subscription; the client applications are proprietary and the service is observed through documented APIs.


# 2. Product identity and ownership

**Official name:** Microsoft 365
**Company:** Microsoft Corporation
**Former name:** Office 365 (business plans)
**Lifecycle status:** active
**Official website:** https://www.microsoft.com/en-us/microsoft-365

# 3. Product capabilities

- Word, Excel, PowerPoint and Outlook for desktop, web and mobile
- OneDrive storage with sharing and version history
- Teams chat and meetings included in the subscription
- Microsoft 365 admin center for users, licences and policy

# 4. Technical architecture

The suite is a set of proprietary client applications plus hosted services. Public documentation covers the service APIs and admin surfaces, not the implementations.

# 5. User workflows

A user signs in with a work or personal account, edits documents in a browser or desktop client, stores files in OneDrive and collaborates in Teams. Administrators assign licences and policies in the admin center.

# 6. Pricing and access

Sold as per-user subscriptions across consumer, business and enterprise plans; the catalog records the plans' existence, not current prices.

# 7. API and integration surface

Official surface: Microsoft Graph, documented at https://learn.microsoft.com/en-us/graph/overview, exposes mail, files, calendar and user objects. Command status: documented, source is the official Graph documentation.

# 8. Existing open-source alternatives

LibreOffice (MPL-2.0) covers offline documents; ONLYOFFICE (AGPL-3.0) adds a self-hosted collaboration server; Nextcloud (AGPL-3.0) covers files, calendar and office integration.

# 9. Alternative comparison

Each alternative covers a slice and none reproduces the tenant, licence and identity model that defines the subscription. Comparisons here are capability-based, not parity claims.

# 10. Missing capabilities and opportunity analysis

Integration is the gap: files, mail, chat, documents and identity under one administered tenant. That is a build opportunity for a composed stack.

# 11. RAE implementation strategy

Compose existing projects (Nextcloud + ONLYOFFICE + an open mail/chat server) behind a single identity provider, and document the integration and its limits.

# 12. Security, privacy, and compliance

Document and mail data are sensitive; a self-hosted alternative should default to no third-party telemetry, encryption at rest and explicit retention.

# 13. Sources and evidence

- https://www.microsoft.com/en-us/microsoft-365
- https://learn.microsoft.com/en-us/microsoft-365/

# 14. Open questions

- Which integration gaps matter most for a small organisation: identity, mail or documents?
- Can Nextcloud and ONLYOFFICE be administered through one control plane?

# 15. Research history

Record created 2026-11-03 from public official sources during the FAANG+Microsoft inventory expansion. Status: `pending`; nothing beyond official documentation and public announcements is asserted.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier microsoft-365` and inspect canonical identity with `npx rae-faang products show microsoft-365 --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang microsoft-365 --out ./microsoft-365.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit microsoft-365 --out ./microsoft-365-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`microsoft-365`).
- Dossier: [research/companies/microsoft/products/microsoft-365.md](../../../research/companies/microsoft/products/microsoft-365.md).
- REA capture: [catalog/rea/microsoft/microsoft-365.md](../../rea/microsoft/microsoft-365.md) (2026-11-03T01:41:00.503Z); raw record: [catalog/rea/evidence/microsoft-365.json](../../rea/evidence/microsoft-365.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.microsoft.com/en-us/microsoft-365) — Microsoft 365 is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://learn.microsoft.com/en-us/microsoft-365/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://www.microsoft.com/en-us/microsoft-365) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://learn.microsoft.com/en-us/microsoft-365/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Microsoft 365 Public web-surface observation (REA)](https://www.microsoft.com/en-us/microsoft-365) — A dated unauthenticated snapshot exposed controls button: Products , button: Resources , button: Support , button: Search Microsoft 365, button: ME, button: Close Announcement Banner, button:  Brainstorm and research with ease, button: Play, button:  Organize and plan with precision, button:  Create and polish with confidence, button:  Protect what’s important, button: Previous Slide, button: Next Slide, button: More information, button: Outlook, button: OneDrive, button: Microsoft Copilot, button: Word (web and mobile only), button: Excel (web and mobile only), button: PowerPoint (web and mobile only), link: Skip to main content, link: Microsoft, link: Microsoft 365, link: Plans and pricing, link: Try for free, link: Watch our Copilot webinar on demand., link: Footnote 2, link: Footnote 1, link: See Copilot in action, link: For individuals, link: For business, link: For enterprise, link: For education, link: How it works, link: features, link: news, link: What’s included, link: Plans, link: Get started, link: FAQ, link: See plans and pricing for Microsoft 365, link: Learn more about Microsoft 365 for individuals, link: footnote1, link: Back to Features section, link: Get offer - Explore Microsoft 365 discounted plans for college students and enhance productivity., link: Explore all apps, products and services of microsoft 365, link: Learn more about Microsoft Word, link: Learn more about Microsoft excel, link: Learn more about Microsoft powerpoint, link: Learn more about Your inbox, organized. Your day, planned, link: Learn more about OneNote, link: Learn more about Connect with anyone in Teams for free, link: Back to tabs for what's included section, link: Create a free Microsoft account, link: See terms., link: Buy now, link: See terms, button: OneNote (web and mobile only), button: Microsoft Defender, button: Microsoft Teams, link: see terms for yearly option of Microsoft 365 family, link: Buy now your Microsoft 365 family account, link: Try for free Microsoft 365 Family for free trial period, button: Word, button: Excel, button: PowerPoint, button: OneNote, link: see terms of yearly Microsoft 365 premium subscription, link: Buy now yearly microsoft 365 premium subscription, link: Try for free Microsoft 365 premium free trial, link: Back to carousel navigation controls, link: Back to tabs for plans section, link: Learn more about how to Try what’s next in AI, button: Expand all, button: Collapse all, button: 01/ What is Microsoft 365 and what features are included with a subscription? , button: 02/ Was Microsoft Office 365 renamed to Microsoft 365? , button: 03/ When do I need a Microsoft 365 subscription? , button: 04/ What is the difference between Microsoft 365 Basic, Personal, Family, Premium, and Pro? , button: 05/ How is Copilot integrated across Microsoft 365 apps? , button: 06/ How does Microsoft use my data and protect my privacy? , button: 07/ What devices can I use Microsoft 365 on? , button: 08/ Why should I choose Microsoft 365 over tools like Google Workspace? , link: Back to footnote 1, link: Back to footnote 2, link: Back to footnote 3, link: Back to footnote 4, link: Click to see details about Microsoft 365 Personal, Family, or Premium subscription, link: Follow Microsoft 365 on Linkedin, link: Follow Microsoft 365 on Twitter, link: Follow Microsoft 365 on Instagram, link: Follow Microsoft 365 on Threads, link: Follow Microsoft 365 on Facebook, link: Follow Microsoft 365 on TikTok, link: Follow Microsoft 365 on YouTube, link: Surface Laptop Ultra, link: Surface Pro, link: Surface Laptop, link: Surface RTX Spark Dev Box, link: Explore Copilot, link: Explore Microsoft products, link: Windows 11 apps, link: Account profile, link: Download Center, link: Microsoft Store support, link: Returns, link: Order tracking, link: Certified Refurbished, link: Why buy from Microsoft Store, link: Flexible Payments, link: Microsoft in education, link: Devices for education, link: Microsoft Teams for Education, link: Microsoft 365 Education, link: How to buy for your school, link: Educator training and development, link: Deals for students and parents, link: AI for education, link: Microsoft AI, link: Microsoft Security, link: Dynamics 365, link: Microsoft Power Platform, link: Microsoft Teams, link: Microsoft Copilot, link: Small Business, link: Azure, link: Microsoft Developer, link: Microsoft Learn, link: Support for AI marketplace apps, link: Microsoft Tech Community, link: Microsoft Marketplace, link: Software companies, link: Visual Studio, link: Careers, link: About Microsoft, link: Company news, link: Privacy at Microsoft, link: Investors, link: Diversity and inclusion, link: Accessibility, link: Sustainability, link: Content Language Selector. Currently set to English (United States), link: Your Privacy Choices Opt-Out Icon Your Privacy Choices, link: Consumer Health Privacy, link: Sitemap, link: Contact Microsoft, link: Privacy, link: Terms of use, link: Trademarks, link: Safety & eco, link: Recycling, link: About our ads, button: Feedback and landmarks banner, navigation: Contextual menu, main, navigation: In Page quick links, region: Features section, region: Plans section, region: Footnotes, region: Follow Microsoft Copilot links, contentinfo, navigation: Footer Resource links, navigation: Microsoft corporate links. (VERIFIED; accessed 2026-11-03T01:41:00.503Z).
