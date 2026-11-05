---
name: microsoft-windows
description: "Evidence-aware build skill for Microsoft Windows (microsoft-windows); investigate, assess reuse, implement scoped behavior and verify."
---

# Microsoft Windows — implementation skill (`microsoft-windows`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Microsoft Windows**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Microsoft Windows** (`microsoft-windows`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/microsoft/microsoft-windows.md` from the catalog page, or run `npx rea-faang microsoft-windows --out ./microsoft-windows.md`, `npx rea-faang skills generate microsoft-windows` or `npx rea-faang build agent-kit microsoft-windows --out ./microsoft-windows-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Microsoft Windows / `microsoft-windows` | `catalog/products.jsonl` |
| Official product URL | [https://www.microsoft.com/en-us/windows/](https://www.microsoft.com/en-us/windows/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://learn.microsoft.com/en-us/windows/resources/](https://learn.microsoft.com/en-us/windows/resources/) | Catalog record |
| Research dossier | `npx rea-faang research dossier microsoft-windows` | `research/companies/microsoft/products/microsoft-windows.md` |
| REA report | `catalog/rea/microsoft/microsoft-windows.md` (captured 2026-11-03T01:41:47.457Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/microsoft-windows.json` (`ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5`) | Catalog evidence |
| Alternative candidates | 2 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show microsoft-windows --format json` and `npx rea-faang research dossier microsoft-windows` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.microsoft.com/en-us/windows/](https://www.microsoft.com/en-us/windows/), captured 2026-11-03T01:41:47.457Z, evidence `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `MICROSOFT-WINDOWS-CAP-47644ECC`, `MICROSOFT-WINDOWS-CAP-AE53EB00`, `MICROSOFT-WINDOWS-CAP-BCC79373`, `MICROSOFT-WINDOWS-CAP-FB003AC3`, `MICROSOFT-WINDOWS-CAP-53EF4801`, `MICROSOFT-WINDOWS-CAP-50FC1D85`.

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
| Name / stable ID | **Microsoft Windows** / `microsoft-windows` | Product catalog |
| Company / category | Microsoft / `operating_system` / `platform`, `desktop` | Product catalog |
| Official website / docs | [https://www.microsoft.com/en-us/windows/](https://www.microsoft.com/en-us/windows/) / [https://learn.microsoft.com/en-us/windows/resources/](https://learn.microsoft.com/en-us/windows/resources/) | URL lead; compiler does not fetch source |
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
| `MICROSOFT-WINDOWS-CAP-47644ECC` | Windows client operating system | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `MICROSOFT-WINDOWS-CAP-AE53EB00` | Deployment and device management | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `MICROSOFT-WINDOWS-CAP-BCC79373` | Security and privacy administration | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `MICROSOFT-WINDOWS-CAP-FB003AC3` | Windows Update servicing | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `MICROSOFT-WINDOWS-CAP-53EF4801` | WinGet application management | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `MICROSOFT-WINDOWS-CAP-50FC1D85` | Documented Windows application interfaces | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Shop PCs `, `button: All Microsoft `, `button: Search or ask a question`, `button: ME`, `button: Play video`, `button: A wide world of PCs`, `button: Faster ways to work`, `button: Peace of mind, built in`, `button: More games. More fun.`, `button: Find your app-y place`, `button: Push pause to stop the video`, `button: previous`, `button: next`, `button: Click the arrows to move forward or backwards or push the pause button to stop scrolling`, `button: Expand all frequently asked questions`, `button: Collapse all frequently asked questions`, `button: What is Microsoft Windows?`, `button: What is the latest Windows version?`, `button: What can you do with Windows 11?`, `button: What is Copilot?`, `link: Skip to main content`, `link: Microsoft`, `link: Discover Windows`, `link: Compare`, `link: Help and support`, `link: For business`, `link: Shop new Windows PCs powered by NVIDIA RTX Spark >`, `link: Shop new Windows PCs powered by NVIDIA RTX Spark`, `link: Shop PCs opens the Windows shop PCs webpage`, `link: Footnote 6`, `link: Shop now opens Premium Performance PCs webpage`, `link: Shop now opens Everyday Productivity PCs webpage`, `link: Shop now opens Power Gaming PCs webpage`, `link: Shop now opens Creator Pro PCs webpage`, `link: Shop now opens Core Essentials PCs webpage`, `link: Buy opens the device webpage`, `link: Footnote 3`, `link: Footnote 2`, `link: Compare PCs webpage opens`, `link: Footnote 13`, `link: Read article opens article webpage`, `link: Footnote 1`, `button: Does Windows 11 include AI features?`, `button: What is local AI on Windows?`, `button: How do I download Windows 11?`, `button: What is a premium PC?`, `link: footnoteReturnLabel *`, `link: footnoteReturnLabel 1`, `link: Learn more about M365 subscriptions opens in a new tab`, `link: Details about Copilot in Microsoft 365 subscriptions opens in a new tab`, `link: footnoteReturnLabel 2`, `link: The preferences powering PC gaming opens in a new tab`, `link: footnoteReturnLabel 3`, `link: Learn more opens Windows support webpage`, `link: footnoteReturnLabel 6`, `link: footnoteReturnLabel 9`, `link: footnoteReturnLabel 10`, `link: aka.ms/copilotpluspcs webpage`, `link: footnoteReturnLabel 13`, `link: footnoteReturnLabel 14`, `link: See full terms webpage`, `link: Surface Laptop Ultra`, `link: Surface Pro`, `link: Surface Laptop`, `link: Surface RTX Spark Dev Box`, `link: Explore Copilot`, `link: Explore Microsoft products`, `link: Windows 11 apps`, `link: Account profile`, `link: Download Center`, `link: Microsoft Store support`, `link: Returns`, `link: Order tracking`, `link: Certified Refurbished`, `link: Why buy from Microsoft Store`, `link: Flexible Payments`, `link: Microsoft in education`, `link: Devices for education`, `link: Microsoft Teams for Education`, `link: Microsoft 365 Education`, `link: How to buy for your school`, `link: Educator training and development`, `link: Deals for students and parents`, `link: AI for education`, `link: Microsoft AI`, `link: Microsoft Security`, `link: Dynamics 365`, `link: Microsoft 365`, `link: Microsoft Power Platform`, `link: Microsoft Teams`, `link: Microsoft Copilot`, `link: Small Business`, `link: Azure`, `link: Microsoft Developer`, `link: Microsoft Learn`, `link: Support for AI marketplace apps`, `link: Microsoft Tech Community`, `link: Microsoft Marketplace`, `link: Software companies`, `link: Visual Studio`, `link: Careers`, `link: About Microsoft`, `link: Company news`, `link: Privacy at Microsoft`, `link: Investors`, `link: Diversity and inclusion`, `link: Accessibility`, `link: Sustainability`, `link: Content Language Selector. Currently set to English (United States)`, `link: Your Privacy Choices Opt-Out Icon Your Privacy Choices`, `link: Consumer Health Privacy`, `link: Sitemap`, `link: Contact Microsoft`, `link: Privacy`, `link: Terms of use`, `link: Trademarks`, `link: Safety & eco`, `link: Recycling`, `link: About our ads`, `button: Open Ask Windows Chat`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Windows client operating system:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Deployment and device management:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Security and privacy administration:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Windows Update servicing:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **WinGet application management:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Documented Windows application interfaces:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `navigation: Contextual menu`, `navigation: All Microsoft menu`, `main`, `region: A wide world of PCs`, `region: Powerful choices`, `region: Windows vs. others`, `region: Discover more of Windows`, `region: What is Microsoft Windows?`, `region: What is the latest Windows version?`, `region: What can you do with Windows 11?`, `region: What is Copilot?`, `region: Does Windows 11 include AI features?`, `region: What is local AI on Windows?`, `region: How do I download Windows 11?`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `FOLLOW THE POSSIBILITIES`, `The Windows difference`, `A wide world of PCs`, `Faster ways to work`, `Peace of mind, built in`, `More games. More fun.`, `Find your app-y place`, `Say hello to security`, `Powerful choices`, `Real Windows stories`, `Windows vs. others`, `Looking for the perfect Windows PC?`, `Discover more of Windows`, `Questions about Windows 11? Start here.`, `What is Microsoft Windows?`, `What is the latest Windows version?`, `What can you do with Windows 11?`, `What is Copilot?`, `Does Windows 11 include AI features?`, `What is local AI on Windows?`, `How do I download Windows 11?`, `What is a premium PC?`, `What's new`, `Microsoft Store`, `Education` | Results and subsequent views |
| Controls | `button: Shop PCs `, `button: All Microsoft `, `button: Search or ask a question`, `button: ME`, `button: Play video`, `button: A wide world of PCs`, `button: Faster ways to work`, `button: Peace of mind, built in`, `button: More games. More fun.`, `button: Find your app-y place`, `button: Push pause to stop the video`, `button: previous`, `button: next`, `button: Click the arrows to move forward or backwards or push the pause button to stop scrolling`, `button: Expand all frequently asked questions`, `button: Collapse all frequently asked questions`, `button: What is Microsoft Windows?`, `button: What is the latest Windows version?`, `button: What can you do with Windows 11?`, `button: What is Copilot?`, `link: Skip to main content`, `link: Microsoft`, `link: Discover Windows`, `link: Compare`, `link: Help and support`, `link: For business`, `link: Shop new Windows PCs powered by NVIDIA RTX Spark >`, `link: Shop new Windows PCs powered by NVIDIA RTX Spark`, `link: Shop PCs opens the Windows shop PCs webpage`, `link: Footnote 6`, `link: Shop now opens Premium Performance PCs webpage`, `link: Shop now opens Everyday Productivity PCs webpage`, `link: Shop now opens Power Gaming PCs webpage`, `link: Shop now opens Creator Pro PCs webpage`, `link: Shop now opens Core Essentials PCs webpage`, `link: Buy opens the device webpage`, `link: Footnote 3`, `link: Footnote 2`, `link: Compare PCs webpage opens`, `link: Footnote 13`, `link: Read article opens article webpage`, `link: Footnote 1`, `button: Does Windows 11 include AI features?`, `button: What is local AI on Windows?`, `button: How do I download Windows 11?`, `button: What is a premium PC?`, `link: footnoteReturnLabel *`, `link: footnoteReturnLabel 1`, `link: Learn more about M365 subscriptions opens in a new tab`, `link: Details about Copilot in Microsoft 365 subscriptions opens in a new tab`, `link: footnoteReturnLabel 2`, `link: The preferences powering PC gaming opens in a new tab`, `link: footnoteReturnLabel 3`, `link: Learn more opens Windows support webpage`, `link: footnoteReturnLabel 6`, `link: footnoteReturnLabel 9`, `link: footnoteReturnLabel 10`, `link: aka.ms/copilotpluspcs webpage`, `link: footnoteReturnLabel 13`, `link: footnoteReturnLabel 14`, `link: See full terms webpage`, `link: Surface Laptop Ultra`, `link: Surface Pro`, `link: Surface Laptop`, `link: Surface RTX Spark Dev Box`, `link: Explore Copilot`, `link: Explore Microsoft products`, `link: Windows 11 apps`, `link: Account profile`, `link: Download Center`, `link: Microsoft Store support`, `link: Returns`, `link: Order tracking`, `link: Certified Refurbished`, `link: Why buy from Microsoft Store`, `link: Flexible Payments`, `link: Microsoft in education`, `link: Devices for education`, `link: Microsoft Teams for Education`, `link: Microsoft 365 Education`, `link: How to buy for your school`, `link: Educator training and development`, `link: Deals for students and parents`, `link: AI for education`, `link: Microsoft AI`, `link: Microsoft Security`, `link: Dynamics 365`, `link: Microsoft 365`, `link: Microsoft Power Platform`, `link: Microsoft Teams`, `link: Microsoft Copilot`, `link: Small Business`, `link: Azure`, `link: Microsoft Developer`, `link: Microsoft Learn`, `link: Support for AI marketplace apps`, `link: Microsoft Tech Community`, `link: Microsoft Marketplace`, `link: Software companies`, `link: Visual Studio`, `link: Careers`, `link: About Microsoft`, `link: Company news`, `link: Privacy at Microsoft`, `link: Investors`, `link: Diversity and inclusion`, `link: Accessibility`, `link: Sustainability`, `link: Content Language Selector. Currently set to English (United States)`, `link: Your Privacy Choices Opt-Out Icon Your Privacy Choices`, `link: Consumer Health Privacy`, `link: Sitemap`, `link: Contact Microsoft`, `link: Privacy`, `link: Terms of use`, `link: Trademarks`, `link: Safety & eco`, `link: Recycling`, `link: About our ads`, `button: Open Ask Windows Chat` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content](#primaryArea)`, `[Microsoft](https://www.microsoft.com)`, `[Discover Windows](https://www.microsoft.com/en-us/windows)`, `[Compare](https://www.microsoft.com/en-us/windows/compare-devices)`, `[Help and support](https://www.microsoft.com/en-us/windows/help-and-support)`, `[For business](https://www.microsoft.com/en-us/windows/business)`, `[Shop new Windows PCs powered by NVIDIA RTX Spark >](https://www.microsoft.com/en-us/windows/rtx-spark-laptops)`, `[Shop new Windows PCs powered by NVIDIA RTX Spark](https://www.microsoft.com/en-us/windows/rtx-spark-laptops#products)`, `[Shop PCs opens the Windows shop PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs)`, `[Footnote 6](#footnote-6)`, `[Shop now opens Premium Performance PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/high-performance-computers)`, `[Shop now opens Everyday Productivity PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/windows-laptops)`, `[Shop now opens Power Gaming PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/gaming-pcs)`, `[Shop now opens Creator Pro PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/creator-pcs)`, `[Shop now opens Core Essentials PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/essential-and-entry-level-pcs  )`, `[Buy opens the device webpage](https://www.microsoft.com/en-us/store/configure/surface-pro-13-inch/8n9t09p96cmj)`, `[Footnote 3](#footnote-3)`, `[Footnote 2](#footnote-2)`, `[Compare PCs webpage opens](https://www.microsoft.com/en-us/windows/compare-devices)`, `[Footnote 13](#footnote-13)`, `[Read article opens article webpage](https://www.microsoft.com/en-us/windows/learning-center/pc-gaming-on-windows-11)`, `[Footnote 1](#footnote-1)`, `[Read article opens article webpage](https://www.microsoft.com/en-us/windows/learning-center/copilot-in-microsoft-365-on-windows-11 )`, `[footnoteReturnLabel *](#ref-*)`, `[footnoteReturnLabel 1](#ref-1)`, `[Learn more about M365 subscriptions opens in a new tab](https://go.microsoft.com/fwlink/?linkid=2280151)`, `[Details about Copilot in Microsoft 365 subscriptions opens in a new tab](https://go.microsoft.com/fwlink/?linkid=2280902)`, `[footnoteReturnLabel 2](#ref-2)`, `[The preferences powering PC gaming opens in a new tab](https://ampereanalysis.com/request_report_download/2?which_product_are_you_interested_in_=Ampere%20Games&report=The%20Preferences%20Powering%20PC%20Gaming)`, `[footnoteReturnLabel 3](#ref-3)`, `[Learn more opens Windows support webpage](https://support.microsoft.com/windows/configure-windows-hello-dae28983-8242-bb2a-d3d1-87c9d265a5f0)`, `[footnoteReturnLabel 6](#ref-6)`, `[footnoteReturnLabel 9](#ref-9)`, `[footnoteReturnLabel 10](#ref-10)`, `[aka.ms/copilotpluspcs webpage](https://aka.ms/copilotpluspcs)`, `[footnoteReturnLabel 13](#ref-13)`, `[footnoteReturnLabel 14](#ref-14)`, `[See full terms webpage](https://www.microsoft.com/en-us/windows/back-to-school-offer#terms)`, `[Surface Laptop Ultra](https://www.microsoft.com/en-us/surface/devices/surface-laptop-ultra?icid=DSM_Footer_WhatsNew_SurfaceLaptopUltra)`, `[Surface Pro](https://www.microsoft.com/surface/devices/surface-pro)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-47644ECC — Windows client operating system
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-47644ECC`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-WINDOWS-CAP-47644ECC` → `REQ-FUNC-47644ECC` → `TEST-FUNC-47644ECC`.

### REQ-FUNC-AE53EB00 — Deployment and device management
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-AE53EB00`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-WINDOWS-CAP-AE53EB00` → `REQ-FUNC-AE53EB00` → `TEST-FUNC-AE53EB00`.

### REQ-FUNC-BCC79373 — Security and privacy administration
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-BCC79373`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-WINDOWS-CAP-BCC79373` → `REQ-FUNC-BCC79373` → `TEST-FUNC-BCC79373`.

### REQ-FUNC-FB003AC3 — Windows Update servicing
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-FB003AC3`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-WINDOWS-CAP-FB003AC3` → `REQ-FUNC-FB003AC3` → `TEST-FUNC-FB003AC3`.

### REQ-FUNC-53EF4801 — WinGet application management
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-53EF4801`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-WINDOWS-CAP-53EF4801` → `REQ-FUNC-53EF4801` → `TEST-FUNC-53EF4801`.

### REQ-FUNC-50FC1D85 — Documented Windows application interfaces
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-50FC1D85`; fixture and expected output must be specified from evidence.
- **Trace:** `MICROSOFT-WINDOWS-CAP-50FC1D85` → `REQ-FUNC-50FC1D85` → `TEST-FUNC-50FC1D85`.

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
| [ReactOS](https://reactos.org/) | Not recorded; verify the canonical repository | GPL-2.0 (unverified) | Independent reimplementation targeting Windows binary and driver compatibility. | Research project; not a production replacement. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Wine](https://www.winehq.org/) | Not recorded; verify the canonical repository | LGPL-2.1 (unverified) | Runs many Windows applications on POSIX systems. | A compatibility layer, not an operating system. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `MICROSOFT-WINDOWS-CAP-47644ECC` — Windows client operating system | Not verified against ReactOS | None yet; compare with `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5` | Candidate code path and tests must be inspected |
| `MICROSOFT-WINDOWS-CAP-AE53EB00` — Deployment and device management | Not verified against ReactOS | None yet; compare with `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5` | Candidate code path and tests must be inspected |
| `MICROSOFT-WINDOWS-CAP-BCC79373` — Security and privacy administration | Not verified against ReactOS | None yet; compare with `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5` | Candidate code path and tests must be inspected |
| `MICROSOFT-WINDOWS-CAP-FB003AC3` — Windows Update servicing | Not verified against ReactOS | None yet; compare with `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5` | Candidate code path and tests must be inspected |
| `MICROSOFT-WINDOWS-CAP-53EF4801` — WinGet application management | Not verified against ReactOS | None yet; compare with `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5` | Candidate code path and tests must be inspected |
| `MICROSOFT-WINDOWS-CAP-50FC1D85` — Documented Windows application interfaces | Not verified against ReactOS | None yet; compare with `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **ReactOS** (Independent reimplementation targeting Windows binary and driver compatibility.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **ReactOS** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-47644ECC** → `REQ-FUNC-47644ECC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-AE53EB00** → `REQ-FUNC-AE53EB00`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-BCC79373** → `REQ-FUNC-BCC79373`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-FB003AC3** → `REQ-FUNC-FB003AC3`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-53EF4801** → `REQ-FUNC-53EF4801`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-50FC1D85** → `REQ-FUNC-50FC1D85`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-47644ECC, REQ-FUNC-AE53EB00, REQ-FUNC-BCC79373, REQ-FUNC-FB003AC3, REQ-FUNC-53EF4801, REQ-FUNC-50FC1D85
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-47644ECC, REQ-FUNC-AE53EB00, REQ-FUNC-BCC79373, REQ-FUNC-FB003AC3, REQ-FUNC-53EF4801, REQ-FUNC-50FC1D85
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
- **Completion:** Trace: REQ-FUNC-47644ECC, REQ-FUNC-AE53EB00, REQ-FUNC-BCC79373, REQ-FUNC-FB003AC3, REQ-FUNC-53EF4801, REQ-FUNC-50FC1D85; document exclusions and unknowns.
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
| `ev-microsoft-windows-docs` | Windows client documentation — The official documentation hub covers deployment, security, privacy, management and Windows client versions. | [link](https://learn.microsoft.com/en-us/windows/resources/) | 2026-11-03T00:00:00Z | Microsoft documents Windows client deployment, security, privacy and management for Windows 10 and Windows 11. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-microsoft-windows-winget` | Use WinGet to install and manage applications — Microsoft documents WinGet commands, supported versions, installer formats and the open-source client repository. | [link](https://learn.microsoft.com/en-us/windows/package-manager/winget/) | 2026-11-03T00:00:00Z | WinGet discovers, installs, upgrades, removes and configures applications on supported Windows versions. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-microsoft-windows-security` | Windows security documentation — The official security documentation lists Windows security features and administration guidance. | [link](https://learn.microsoft.com/en-us/windows/security/) | 2026-11-03T00:00:00Z | Microsoft documents Windows security features, baselines, BitLocker and Windows Hello for Business. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.microsoft.com/en-us/windows/) | 2026-11-03T00:00:00Z | Microsoft Windows is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://learn.microsoft.com/en-us/windows/resources/) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://learn.microsoft.com/en-us/windows/resources/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://learn.microsoft.com/en-us/windows/package-manager/winget/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://learn.microsoft.com/en-us/windows/security/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5` | Microsoft Windows Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.microsoft.com/en-us/windows/) | 2026-11-03T01:41:47.457Z | A dated unauthenticated snapshot exposed controls button: Shop PCs , button: All Microsoft , button: Search or ask a question, button: ME, button: Play video, button: A wide world of PCs, button: Faster ways to work, button: Peace of mind, built in, button: More games. More fun., button: Find your app-y place, button: Push pause to stop the video, button: previous, button: next, button: Click the arrows to move forward or backwards or push the pause button to stop scrolling, button: Expand all frequently asked questions, button: Collapse all frequently asked questions, button: What is Microsoft Windows?, button: What is the latest Windows version?, button: What can you do with Windows 11?, button: What is Copilot?, link: Skip to main content, link: Microsoft, link: Discover Windows, link: Compare, link: Help and support, link: For business, link: Shop new Windows PCs powered by NVIDIA RTX Spark >, link: Shop new Windows PCs powered by NVIDIA RTX Spark, link: Shop PCs opens the Windows shop PCs webpage, link: Footnote 6, link: Shop now opens Premium Performance PCs webpage, link: Shop now opens Everyday Productivity PCs webpage, link: Shop now opens Power Gaming PCs webpage, link: Shop now opens Creator Pro PCs webpage, link: Shop now opens Core Essentials PCs webpage, link: Buy opens the device webpage, link: Footnote 3, link: Footnote 2, link: Compare PCs webpage opens, link: Footnote 13, link: Read article opens article webpage, link: Footnote 1, button: Does Windows 11 include AI features?, button: What is local AI on Windows?, button: How do I download Windows 11?, button: What is a premium PC?, link: footnoteReturnLabel *, link: footnoteReturnLabel 1, link: Learn more about M365 subscriptions opens in a new tab, link: Details about Copilot in Microsoft 365 subscriptions opens in a new tab, link: footnoteReturnLabel 2, link: The preferences powering PC gaming opens in a new tab, link: footnoteReturnLabel 3, link: Learn more opens Windows support webpage, link: footnoteReturnLabel 6, link: footnoteReturnLabel 9, link: footnoteReturnLabel 10, link: aka.ms/copilotpluspcs webpage, link: footnoteReturnLabel 13, link: footnoteReturnLabel 14, link: See full terms webpage, link: Surface Laptop Ultra, link: Surface Pro, link: Surface Laptop, link: Surface RTX Spark Dev Box, link: Explore Copilot, link: Explore Microsoft products, link: Windows 11 apps, link: Account profile, link: Download Center, link: Microsoft Store support, link: Returns, link: Order tracking, link: Certified Refurbished, link: Why buy from Microsoft Store, link: Flexible Payments, link: Microsoft in education, link: Devices for education, link: Microsoft Teams for Education, link: Microsoft 365 Education, link: How to buy for your school, link: Educator training and development, link: Deals for students and parents, link: AI for education, link: Microsoft AI, link: Microsoft Security, link: Dynamics 365, link: Microsoft 365, link: Microsoft Power Platform, link: Microsoft Teams, link: Microsoft Copilot, link: Small Business, link: Azure, link: Microsoft Developer, link: Microsoft Learn, link: Support for AI marketplace apps, link: Microsoft Tech Community, link: Microsoft Marketplace, link: Software companies, link: Visual Studio, link: Careers, link: About Microsoft, link: Company news, link: Privacy at Microsoft, link: Investors, link: Diversity and inclusion, link: Accessibility, link: Sustainability, link: Content Language Selector. Currently set to English (United States), link: Your Privacy Choices Opt-Out Icon Your Privacy Choices, link: Consumer Health Privacy, link: Sitemap, link: Contact Microsoft, link: Privacy, link: Terms of use, link: Trademarks, link: Safety & eco, link: Recycling, link: About our ads, button: Open Ask Windows Chat and landmarks banner, navigation: Contextual menu, navigation: All Microsoft menu, main, region: A wide world of PCs, region: Powerful choices, region: Windows vs. others, region: Discover more of Windows, region: What is Microsoft Windows?, region: What is the latest Windows version?, region: What can you do with Windows 11?, region: What is Copilot?, region: Does Windows 11 include AI features?, region: What is local AI on Windows?, region: How do I download Windows 11?, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `microsoft-windows`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# Microsoft Windows

## Research verdict

Windows is Microsoft's active desktop operating-system family for consumer and
organizational devices. Microsoft documents Windows client deployment, security,
privacy, management, servicing and application-installation workflows. The
implementation is proprietary; this dossier records public platform behavior and
documented interfaces, not internal source code or undocumented architecture.

The open-source alternative coverage is **partial**. Wine covers application
compatibility on a POSIX host, while ReactOS targets an independent Windows-like
operating system. Neither provides the complete supported Windows driver,
security, servicing and commercial ecosystem.

## Product identity and boundary

- **Owner:** Microsoft Corporation
- **Canonical product ID:** `microsoft-windows`
- **Lifecycle:** Active
- **Public entry point:** https://www.microsoft.com/en-us/windows/
- **Documentation:** https://learn.microsoft.com/en-us/windows/resources/
- **Product boundary:** Windows client operating-system capabilities, management,
  security, servicing and documented application interfaces.
- **Related catalog entries:** Microsoft 365, Teams, Edge, OneDrive and Azure are
  separate products/services; their presence on or integration with Windows does
  not merge their catalog identities.

## Verified capabilities

Microsoft's official documentation verifies that Windows supports:

1. Deployment, administration and management of Windows 10 and Windows 11 client
   devices, including enterprise deployment and Autopilot-related workflows.
2. Security features and guidance including BitLocker, Windows Hello for Business,
   Secure Boot and Windows security baselines.
3. Windows Update and regular feature/security servicing; release information
   documents Windows 11 servicing and monthly security updates.
4. Application discovery, installation, upgrade, removal and configuration through
   WinGet on supported Windows versions.
5. Documented privacy and diagnostic-data management for organizational deployments.

Feature availability and requirements vary by edition, version, hardware,
organization policy and lifecycle stage.

## Technical boundary

The sources verify documented platform and administration surfaces. They do not
verify Microsoft's complete kernel, driver, boot, update, telemetry, identity,
virtualization or security implementation. Do not claim NT-internal behavior or
full API compatibility from this dossier alone.

## Alternative assessment

### Wine — application-compatibility alternative

Wine implements Windows API compatibility on POSIX systems. It can be reused when
the job is running selected Windows applications, but it is not a Windows
operating system and does not provide Microsoft's driver, update or security model.

### ReactOS — operating-system research alternative

ReactOS is an independent project targeting Windows application and driver
compatibility. It remains a research/development project rather than a verified
production replacement for Windows.

## REA/build implications

Choose a bounded implementation goal: application compatibility, a desktop shell,
device management, or a secure update workflow. Reuse Wine or ReactOS where their
documented scope fits. Do not copy proprietary Windows assets, bypass licensing,
or claim OS-level parity without testing hardware, drivers, servicing and security
requirements.

## Evidence record

| Claim | Source | What it supports |
|---|---|---|
| Windows client documentation covers deployment, security, privacy and management | [Windows client documentation](https://learn.microsoft.com/en-us/windows/resources/) | Product identity and administrative surface |
| WinGet discovers, installs, upgrades, removes and configures applications | [Use WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/) | Documented package-management interface and supported versions |
| Windows documents security features and baselines | [Windows security documentation](https://learn.microsoft.com/en-us/windows/security/) | Security surface |
| Windows 11 has documented release and servicing information | [Windows 11 release information](https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information) | Lifecycle and update behavior |
| Wine and ReactOS cover narrower compatibility jobs | [Wine](https://www.winehq.org/), [ReactOS](https://reactos.org/) | Alternative scope, not parity claims |

## Known gaps

- Edition-specific licensing, hardware requirements, policy controls and feature
  availability need a dated check for the target Windows release.
- Full internal architecture and proprietary APIs are not public implementation
  specifications.
- Alternative compatibility requires hardware and application testing; catalog
  status is not a performance guarantee.

**Research date:** 2026-11-03.  
**Confidence:** Verified for documented platform surfaces; partial for alternatives.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier microsoft-windows` and inspect canonical identity with `npx rea-faang products show microsoft-windows --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang microsoft-windows --out ./microsoft-windows.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit microsoft-windows --out ./microsoft-windows-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`microsoft-windows`).
- Dossier: [research/companies/microsoft/products/microsoft-windows.md](../../../research/companies/microsoft/products/microsoft-windows.md).
- REA capture: [catalog/rea/microsoft/microsoft-windows.md](../../rea/microsoft/microsoft-windows.md) (2026-11-03T01:41:47.457Z); raw record: [catalog/rea/evidence/microsoft-windows.json](../../rea/evidence/microsoft-windows.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Windows client documentation](https://learn.microsoft.com/en-us/windows/resources/) — Microsoft documents Windows client deployment, security, privacy and management for Windows 10 and Windows 11. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Use WinGet to install and manage applications](https://learn.microsoft.com/en-us/windows/package-manager/winget/) — WinGet discovers, installs, upgrades, removes and configures applications on supported Windows versions. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Windows security documentation](https://learn.microsoft.com/en-us/windows/security/) — Microsoft documents Windows security features, baselines, BitLocker and Windows Hello for Business. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://www.microsoft.com/en-us/windows/) — Microsoft Windows is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://learn.microsoft.com/en-us/windows/resources/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://learn.microsoft.com/en-us/windows/resources/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://learn.microsoft.com/en-us/windows/package-manager/winget/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://learn.microsoft.com/en-us/windows/security/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Microsoft Windows Public web-surface observation (REA)](https://www.microsoft.com/en-us/windows/) — A dated unauthenticated snapshot exposed controls button: Shop PCs , button: All Microsoft , button: Search or ask a question, button: ME, button: Play video, button: A wide world of PCs, button: Faster ways to work, button: Peace of mind, built in, button: More games. More fun., button: Find your app-y place, button: Push pause to stop the video, button: previous, button: next, button: Click the arrows to move forward or backwards or push the pause button to stop scrolling, button: Expand all frequently asked questions, button: Collapse all frequently asked questions, button: What is Microsoft Windows?, button: What is the latest Windows version?, button: What can you do with Windows 11?, button: What is Copilot?, link: Skip to main content, link: Microsoft, link: Discover Windows, link: Compare, link: Help and support, link: For business, link: Shop new Windows PCs powered by NVIDIA RTX Spark >, link: Shop new Windows PCs powered by NVIDIA RTX Spark, link: Shop PCs opens the Windows shop PCs webpage, link: Footnote 6, link: Shop now opens Premium Performance PCs webpage, link: Shop now opens Everyday Productivity PCs webpage, link: Shop now opens Power Gaming PCs webpage, link: Shop now opens Creator Pro PCs webpage, link: Shop now opens Core Essentials PCs webpage, link: Buy opens the device webpage, link: Footnote 3, link: Footnote 2, link: Compare PCs webpage opens, link: Footnote 13, link: Read article opens article webpage, link: Footnote 1, button: Does Windows 11 include AI features?, button: What is local AI on Windows?, button: How do I download Windows 11?, button: What is a premium PC?, link: footnoteReturnLabel *, link: footnoteReturnLabel 1, link: Learn more about M365 subscriptions opens in a new tab, link: Details about Copilot in Microsoft 365 subscriptions opens in a new tab, link: footnoteReturnLabel 2, link: The preferences powering PC gaming opens in a new tab, link: footnoteReturnLabel 3, link: Learn more opens Windows support webpage, link: footnoteReturnLabel 6, link: footnoteReturnLabel 9, link: footnoteReturnLabel 10, link: aka.ms/copilotpluspcs webpage, link: footnoteReturnLabel 13, link: footnoteReturnLabel 14, link: See full terms webpage, link: Surface Laptop Ultra, link: Surface Pro, link: Surface Laptop, link: Surface RTX Spark Dev Box, link: Explore Copilot, link: Explore Microsoft products, link: Windows 11 apps, link: Account profile, link: Download Center, link: Microsoft Store support, link: Returns, link: Order tracking, link: Certified Refurbished, link: Why buy from Microsoft Store, link: Flexible Payments, link: Microsoft in education, link: Devices for education, link: Microsoft Teams for Education, link: Microsoft 365 Education, link: How to buy for your school, link: Educator training and development, link: Deals for students and parents, link: AI for education, link: Microsoft AI, link: Microsoft Security, link: Dynamics 365, link: Microsoft 365, link: Microsoft Power Platform, link: Microsoft Teams, link: Microsoft Copilot, link: Small Business, link: Azure, link: Microsoft Developer, link: Microsoft Learn, link: Support for AI marketplace apps, link: Microsoft Tech Community, link: Microsoft Marketplace, link: Software companies, link: Visual Studio, link: Careers, link: About Microsoft, link: Company news, link: Privacy at Microsoft, link: Investors, link: Diversity and inclusion, link: Accessibility, link: Sustainability, link: Content Language Selector. Currently set to English (United States), link: Your Privacy Choices Opt-Out Icon Your Privacy Choices, link: Consumer Health Privacy, link: Sitemap, link: Contact Microsoft, link: Privacy, link: Terms of use, link: Trademarks, link: Safety & eco, link: Recycling, link: About our ads, button: Open Ask Windows Chat and landmarks banner, navigation: Contextual menu, navigation: All Microsoft menu, main, region: A wide world of PCs, region: Powerful choices, region: Windows vs. others, region: Discover more of Windows, region: What is Microsoft Windows?, region: What is the latest Windows version?, region: What can you do with Windows 11?, region: What is Copilot?, region: Does Windows 11 include AI features?, region: What is local AI on Windows?, region: How do I download Windows 11?, contentinfo. (VERIFIED; accessed 2026-11-03T01:41:47.457Z).
