---
name: amazon-fsx-ontap
description: "Evidence-aware build skill for Amazon FSx for NetApp ONTAP (amazon-fsx-ontap); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon FSx for NetApp ONTAP — implementation skill (`amazon-fsx-ontap`)

> **Research status:** pending. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon FSx for NetApp ONTAP**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon FSx for NetApp ONTAP** (`amazon-fsx-ontap`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-fsx-ontap.md` from the catalog page, or run `npx rea-faang amazon-fsx-ontap --out ./amazon-fsx-ontap.md`, `npx rea-faang skills generate amazon-fsx-ontap` or `npx rea-faang build agent-kit amazon-fsx-ontap --out ./amazon-fsx-ontap-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon FSx for NetApp ONTAP / `amazon-fsx-ontap` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/fsx/netapp-ontap/](https://aws.amazon.com/fsx/netapp-ontap/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/) | Catalog record |
| Research dossier | `npx rea-faang research dossier amazon-fsx-ontap` | `research/companies/amazon_aws/products/amazon-fsx-ontap.md` |
| REA report | `catalog/rea/amazon_aws/amazon-fsx-ontap.md` (captured 2026-11-04T02:43:49.724Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-fsx-ontap.json` (`ev_ac2f9501a6b33a1097c68e3cf7ca339d91c1138236596ac6a33b1dd7beaa74ea`) | Catalog evidence |
| Alternative candidates | None recorded — this is a research gap | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show amazon-fsx-ontap --format json` and `npx rea-faang research dossier amazon-fsx-ontap` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/fsx/netapp-ontap/](https://aws.amazon.com/fsx/netapp-ontap/), captured 2026-11-04T02:43:49.724Z, evidence `ev_ac2f9501a6b33a1097c68e3cf7ca339d91c1138236596ac6a33b1dd7beaa74ea`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-FSX-ONTAP-CAP-F5320E49`, `AMAZON-FSX-ONTAP-CAP-36BFBFCB`, `AMAZON-FSX-ONTAP-CAP-28713EB0`, `AMAZON-FSX-ONTAP-CAP-2C6E143A`, `AMAZON-FSX-ONTAP-CAP-D071E741`.

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
| Name / stable ID | **Amazon FSx for NetApp ONTAP** / `amazon-fsx-ontap` | Product catalog |
| Company / category | Amazon Web Services / `storage` / `file-storage`, `netapp-ontap`, `nfs`, `smb`, `enterprise-storage` | Product catalog |
| Official website / docs | [https://aws.amazon.com/fsx/netapp-ontap/](https://aws.amazon.com/fsx/netapp-ontap/) / [https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **storage** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-FSX-ONTAP-CAP-F5320E49` | fully managed NetApp ONTAP file storage | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-FSX-ONTAP-CAP-36BFBFCB` | NFS, SMB and iSCSI access | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-FSX-ONTAP-CAP-28713EB0` | SSD and capacity-pool storage tiers | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-FSX-ONTAP-CAP-2C6E143A` | snapshots, clones, replication and data tiering | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-FSX-ONTAP-CAP-D071E741` | AWS and NetApp management APIs and integrations | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: File Systems submenu`, `button: Resources submenu`, `button: Get started with FSx for ONTAP`, `button: Learn about FSx for ONTAP ROI benefits`, `button: Migrate apps and data with ease`, `button: Enable multiprotocol access`, `button: Automate storage scaling and tiering`, `button: Increase performance`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting Started`, `link: FAQs`, `link: Storage`, `link: Amazon FSx`, `button: Access file data as if it were in an Amazon S3 bucket`, `button: Migrate workloads to AWS seamlessly`, `button: Build modern applications`, `button: Modernize your data management`, `button: Simplify business continuity`, `link: Amazon S3 Access Points`, `button: Play:`, `button: Read the whitepaper`, `link: Missing alt text value Shutterfly’s accelerated cloud transformation in migrating VMware workloads to AWS Read the case study`, `link: Missing alt text value Saving 51% on costs using Amazon FSx for NetApp ONTAP with Banco Pan Read the case study`, `link: Missing alt text value Discover how telecom provider Amdocs migrated a critical billing system to FSx for ONTAP Read the case study`, `link: Missing alt text value eHealth NSW seamlessly migrated 1PB to FSx for ONTAP Watch the video`, `link: Missing alt text value Arm Scales Performance for Chip Design Using Amazon FSx for NetApp ONTAP Read the case study`, `link: Get started with a tutorial Learn how to get started in minutes`, `link: Console Ready to build? No upfront costs or licensing fees`, `link: Learn more about pricing With FSx for ONTAP, you pay only for what you use`, `link: Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **fully managed NetApp ONTAP file storage:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **NFS, SMB and iSCSI access:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **SSD and capacity-pool storage tiers:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **snapshots, clones, replication and data tiering:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **AWS and NetApp management APIs and integrations:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon FSx for NetApp ONTAP`, `Overview`, `Benefits`, `Migrate apps and data with ease`, `Enable multiprotocol access`, `Automate storage scaling and tiering`, `Increase performance`, `Access file data as if it were in an Amazon S3 bucket`, `Use cases`, `Migrate workloads to AWS seamlessly`, `Build modern applications`, `Modernize your data management`, `Simplify business continuity`, `Amazon FSx for NetApp ONTAP supports Amazon S3 Access`, `Customers`, `Shutterfly’s accelerated cloud transformation in migrating VMware workloads to AWS`, `Saving 51% on costs using Amazon FSx for NetApp ONTAP with Banco Pan`, `Discover how telecom provider Amdocs migrated a critical billing system to FSx for ONTAP`, `eHealth NSW seamlessly migrated 1PB to FSx for ONTAP`, `Arm Scales Performance for Chip Design Using Amazon FSx for NetApp ONTAP`, `Get started with FSx for NetApp ONTAP`, `Get started with a tutorial`, `Ready to build?`, `Learn more about pricing`, `Connect with an expert` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: File Systems submenu`, `button: Resources submenu`, `button: Get started with FSx for ONTAP`, `button: Learn about FSx for ONTAP ROI benefits`, `button: Migrate apps and data with ease`, `button: Enable multiprotocol access`, `button: Automate storage scaling and tiering`, `button: Increase performance`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting Started`, `link: FAQs`, `link: Storage`, `link: Amazon FSx`, `button: Access file data as if it were in an Amazon S3 bucket`, `button: Migrate workloads to AWS seamlessly`, `button: Build modern applications`, `button: Modernize your data management`, `button: Simplify business continuity`, `link: Amazon S3 Access Points`, `button: Play:`, `button: Read the whitepaper`, `link: Missing alt text value Shutterfly’s accelerated cloud transformation in migrating VMware workloads to AWS Read the case study`, `link: Missing alt text value Saving 51% on costs using Amazon FSx for NetApp ONTAP with Banco Pan Read the case study`, `link: Missing alt text value Discover how telecom provider Amdocs migrated a critical billing system to FSx for ONTAP Read the case study`, `link: Missing alt text value eHealth NSW seamlessly migrated 1PB to FSx for ONTAP Watch the video`, `link: Missing alt text value Arm Scales Performance for Chip Design Using Amazon FSx for NetApp ONTAP Read the case study`, `link: Get started with a tutorial Learn how to get started in minutes`, `link: Console Ready to build? No upfront costs or licensing fees`, `link: Learn more about pricing With FSx for ONTAP, you pay only for what you use`, `link: Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/fsx/netapp-ontap/)`, `[Features](/fsx/netapp-ontap/features/)`, `[Pricing](/fsx/netapp-ontap/pricing/)`, `[Getting Started](/fsx/netapp-ontap/getting-started/)`, `[FAQs](/fsx/netapp-ontap/faqs/)`, `[Storage](/products/storage/)`, `[Amazon FSx](/fsx/)`, `[Amazon S3 Access Points](/s3/features/access-points/)`, `[Missing alt text value Shutterfly’s accelerated cloud transformation in migrating VMware workloads to AWS Read the case study](/solutions/case-studies/shutterfly-migration-case-study/)`, `[Missing alt text value Saving 51% on costs using Amazon FSx for NetApp ONTAP with Banco Pan Read the case study](/solutions/case-studies/banco-pan-case-study/)`, `[Missing alt text value Discover how telecom provider Amdocs migrated a critical billing system to FSx for ONTAP Read the case study](/solutions/case-studies/amdocs-case-study/)`, `[Missing alt text value eHealth NSW seamlessly migrated 1PB to FSx for ONTAP Watch the video](https://www.youtube.com/watch?v=ZJxDshx2JFk)`, `[Missing alt text value Arm Scales Performance for Chip Design Using Amazon FSx for NetApp ONTAP Read the case study](https://aws.amazon.com/solutions/case-studies/arm-ltd-case-study/?did=cr_card&trk=cr_card)`, `[Get started with a tutorial Learn how to get started in minutes](https://www.youtube.com/watch?v=JcKsOUYoJYA)`, `[Console Ready to build? No upfront costs or licensing fees](https://console.aws.amazon.com/fsx)`, `[Learn more about pricing With FSx for ONTAP, you pay only for what you use](/fsx/netapp-ontap/pricing/)`, `[Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time](/contact-us/sales-support/)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)`, `[Product and Technical FAQs](/faqs/?nc1=f_dr)`, `[Analyst Reports](/resources/analyst-reports/?nc1=f_cc)`, `[AWS Partners](/partners/work-with-partners/?nc1=f_dr)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-F5320E49 — fully managed NetApp ONTAP file storage
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-F5320E49`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-ONTAP-CAP-F5320E49` → `REQ-FUNC-F5320E49` → `TEST-FUNC-F5320E49`.

### REQ-FUNC-36BFBFCB — NFS, SMB and iSCSI access
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-36BFBFCB`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-ONTAP-CAP-36BFBFCB` → `REQ-FUNC-36BFBFCB` → `TEST-FUNC-36BFBFCB`.

### REQ-FUNC-28713EB0 — SSD and capacity-pool storage tiers
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-28713EB0`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-ONTAP-CAP-28713EB0` → `REQ-FUNC-28713EB0` → `TEST-FUNC-28713EB0`.

### REQ-FUNC-2C6E143A — snapshots, clones, replication and data tiering
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2C6E143A`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-ONTAP-CAP-2C6E143A` → `REQ-FUNC-2C6E143A` → `TEST-FUNC-2C6E143A`.

### REQ-FUNC-D071E741 — AWS and NetApp management APIs and integrations
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D071E741`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-ONTAP-CAP-D071E741` → `REQ-FUNC-D071E741` → `TEST-FUNC-D071E741`.

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

No candidate is recorded for this product in the curated landscape. That is a **research gap**, not evidence that no project exists — never state or imply that no open-source alternative exists.

Before building from scratch, run the search the catalog has not done: search for the user job and for each capability lead in section 2, inspect the exact repository and version, and record what you find with its license, activity and coverage. Candidates found at that point are added to the register below, not to the catalog.

### 9.2 Comparison against the REA findings

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| Every feature ID in section 2 | Not assessed | None — no candidate recorded | Full capability, unless your own search produces one |

### 9.3 Decision

**Current verdict: UNKNOWN / PENDING — INVESTIGATE MORE.** No verified foundation exists for this product, so reuse, integration and extension cannot be claimed and a fresh build is not yet justified either. Complete the search in 9.1, then record one of the five verdicts with the candidate name and the evidence behind it.

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

Product-specific review: Verify tenant isolation, object access, integrity, retention, deletion and backup/restore. Do not claim compliance, privacy or security parity without scoped assessment.

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
- **EDGE-009:** Interrupted transfer, checksum mismatch, deletion/restore conflict. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-F5320E49** → `REQ-FUNC-F5320E49`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-36BFBFCB** → `REQ-FUNC-36BFBFCB`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-28713EB0** → `REQ-FUNC-28713EB0`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-2C6E143A** → `REQ-FUNC-2C6E143A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-D071E741** → `REQ-FUNC-D071E741`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-F5320E49, REQ-FUNC-36BFBFCB, REQ-FUNC-28713EB0, REQ-FUNC-2C6E143A, REQ-FUNC-D071E741
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-F5320E49, REQ-FUNC-36BFBFCB, REQ-FUNC-28713EB0, REQ-FUNC-2C6E143A, REQ-FUNC-D071E741
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
- **Completion:** Trace: REQ-FUNC-F5320E49, REQ-FUNC-36BFBFCB, REQ-FUNC-28713EB0, REQ-FUNC-2C6E143A, REQ-FUNC-D071E741; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/fsx/netapp-ontap/) | Not recorded | Amazon FSx for NetApp ONTAP is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/) | Not recorded | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/fsx/netapp-ontap/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-it-works-fsx-ontap.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/fsx/netapp-ontap/faqs/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_ac2f9501a6b33a1097c68e3cf7ca339d91c1138236596ac6a33b1dd7beaa74ea` | Amazon FSx for NetApp ONTAP Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/fsx/netapp-ontap/) | 2026-11-04T02:43:49.724Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: File Systems submenu, button: Resources submenu, button: Get started with FSx for ONTAP, button: Learn about FSx for ONTAP ROI benefits, button: Migrate apps and data with ease, button: Enable multiprotocol access, button: Automate storage scaling and tiering, button: Increase performance, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting Started, link: FAQs, link: Storage, link: Amazon FSx, button: Access file data as if it were in an Amazon S3 bucket, button: Migrate workloads to AWS seamlessly, button: Build modern applications, button: Modernize your data management, button: Simplify business continuity, link: Amazon S3 Access Points, button: Play:, button: Read the whitepaper, link: Missing alt text value Shutterfly’s accelerated cloud transformation in migrating VMware workloads to AWS Read the case study, link: Missing alt text value Saving 51% on costs using Amazon FSx for NetApp ONTAP with Banco Pan Read the case study, link: Missing alt text value Discover how telecom provider Amdocs migrated a critical billing system to FSx for ONTAP Read the case study, link: Missing alt text value eHealth NSW seamlessly migrated 1PB to FSx for ONTAP Watch the video, link: Missing alt text value Arm Scales Performance for Chip Design Using Amazon FSx for NetApp ONTAP Read the case study, link: Get started with a tutorial Learn how to get started in minutes, link: Console Ready to build? No upfront costs or licensing fees, link: Learn more about pricing With FSx for ONTAP, you pay only for what you use, link: Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-fsx-ontap`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon FSx for NetApp ONTAP is a fully managed AWS service built on NetApp's ONTAP file system. It provides shared file storage accessible from Linux, Windows and macOS workloads, with NFS, SMB and iSCSI protocols, SSD and capacity-pool tiers, snapshots, clones, replication and AWS/NetApp management surfaces.

# 2. Product identity and ownership

- **Official name:** Amazon FSx for NetApp ONTAP
- **Company:** Amazon Web Services, with NetApp ONTAP technology
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/fsx/netapp-ontap/

# 3. Product capabilities

- Create managed ONTAP file systems and storage virtual machines.
- Serve files and block data through NFS, SMB and iSCSI.
- Use SSD performance with automatically tiered capacity-pool storage.
- Create snapshots, clones, replicas and FlexCache configurations.
- Manage through AWS APIs and NetApp ONTAP tools.

# 4. Technical architecture

The public surface includes file systems, storage virtual machines, volumes, aggregates, protocols, snapshots, clones, SnapMirror, FlexCache, data tiering, network interfaces, IAM, KMS and CloudTrail. Exact ONTAP feature coverage, protocol semantics, failover and tiering behavior require REA verification.

# 5. User workflows

Users create a file system and storage virtual machine, configure network and directory services, create volumes and shares, mount via NFS/SMB or connect via iSCSI, manage snapshots and tiering, and integrate with AWS or NetApp tooling. The AWS-managed boundary must be distinguished from the full ONTAP product.

# 6. Pricing and access

FSx for ONTAP is an AWS commercial service priced by SSD and capacity-pool storage, throughput capacity, IOPS, backups, data transfer and Region. Current prices and free-tier applicability require verification from official pricing pages.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/
- AWS Console, CLI, API and NetApp ONTAP management tools can manage resources.
- Integrations include IAM, KMS, CloudTrail, WorkSpaces, S3 access points, backup and migration tooling.
- Exact API, ONTAP CLI, protocol, quota, failover and tiering behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include OpenZFS, CephFS, Samba, NFS-Ganesha, TrueNAS and upstream NetApp ONTAP deployments. No equivalence is claimed; protocol, snapshot, replication, tiering, management and enterprise support differences require comparison.

# 9. Alternative comparison

Open-source file and storage systems can cover subsets of NFS, SMB, snapshots or block access, but none is treated as a drop-in equivalent to managed ONTAP, multi-protocol integration, tiering, replication and AWS operations without evidence.

# 10. Missing capabilities and opportunity analysis

REA should map file systems, storage virtual machines, volumes, protocols, identity, snapshots, clones, replication, FlexCache, tiering, quotas, backups, failure recovery, APIs and the limits of AWS-managed ONTAP features.

# 11. REA implementation strategy

Use AWS and NetApp public documentation as research surfaces. A clean-room equivalent should use independently licensed storage components and document differences in protocols, snapshots, replication, tiering, management and cloud integration without copying proprietary ONTAP implementation.

# 12. Security, privacy, and compliance

Research must verify network isolation, IAM, KMS, directory services, NFS/SMB identities, iSCSI access, encryption, audit logging, snapshot sharing, replication, data residency and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/fsx/netapp-ontap/ — official product scope.
- https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html — official architecture and capabilities.
- https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-it-works-fsx-ontap.html — official tiering and management details.
- https://aws.amazon.com/fsx/netapp-ontap/faqs/ — official service details.

# 14. Unknowns

- Complete protocol, ONTAP-version, quota and regional support matrix.
- Exact AWS-managed versus customer-managed feature boundaries.
- Snapshot, clone, replication, FlexCache and tiering semantics.
- Failure recovery, backup, encryption and directory-service behavior.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier amazon-fsx-ontap` and inspect canonical identity with `npx rea-faang products show amazon-fsx-ontap --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang amazon-fsx-ontap --out ./amazon-fsx-ontap.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit amazon-fsx-ontap --out ./amazon-fsx-ontap-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-fsx-ontap`).
- Dossier: [research/companies/amazon_aws/products/amazon-fsx-ontap.md](../../../research/companies/amazon_aws/products/amazon-fsx-ontap.md).
- REA capture: [catalog/rea/amazon_aws/amazon-fsx-ontap.md](../../rea/amazon_aws/amazon-fsx-ontap.md) (2026-11-04T02:43:49.724Z); raw record: [catalog/rea/evidence/amazon-fsx-ontap.json](../../rea/evidence/amazon-fsx-ontap.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://aws.amazon.com/fsx/netapp-ontap/) — Amazon FSx for NetApp ONTAP is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Official documentation entry](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/fsx/netapp-ontap/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-it-works-fsx-ontap.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/fsx/netapp-ontap/faqs/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon FSx for NetApp ONTAP Public web-surface observation (REA)](https://aws.amazon.com/fsx/netapp-ontap/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: File Systems submenu, button: Resources submenu, button: Get started with FSx for ONTAP, button: Learn about FSx for ONTAP ROI benefits, button: Migrate apps and data with ease, button: Enable multiprotocol access, button: Automate storage scaling and tiering, button: Increase performance, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting Started, link: FAQs, link: Storage, link: Amazon FSx, button: Access file data as if it were in an Amazon S3 bucket, button: Migrate workloads to AWS seamlessly, button: Build modern applications, button: Modernize your data management, button: Simplify business continuity, link: Amazon S3 Access Points, button: Play:, button: Read the whitepaper, link: Missing alt text value Shutterfly’s accelerated cloud transformation in migrating VMware workloads to AWS Read the case study, link: Missing alt text value Saving 51% on costs using Amazon FSx for NetApp ONTAP with Banco Pan Read the case study, link: Missing alt text value Discover how telecom provider Amdocs migrated a critical billing system to FSx for ONTAP Read the case study, link: Missing alt text value eHealth NSW seamlessly migrated 1PB to FSx for ONTAP Watch the video, link: Missing alt text value Arm Scales Performance for Chip Design Using Amazon FSx for NetApp ONTAP Read the case study, link: Get started with a tutorial Learn how to get started in minutes, link: Console Ready to build? No upfront costs or licensing fees, link: Learn more about pricing With FSx for ONTAP, you pay only for what you use, link: Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-04T02:43:49.724Z).
