---
name: amazon-fsx-openzfs
description: "Evidence-aware build skill for Amazon FSx for OpenZFS (amazon-fsx-openzfs); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon FSx for OpenZFS — implementation skill (`amazon-fsx-openzfs`)

> **Research status:** pending. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon FSx for OpenZFS**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon FSx for OpenZFS** (`amazon-fsx-openzfs`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-fsx-openzfs.md` from the catalog page, or run `npx rae-faang amazon-fsx-openzfs --out ./amazon-fsx-openzfs.md`, `npx rae-faang skills generate amazon-fsx-openzfs` or `npx rae-faang build agent-kit amazon-fsx-openzfs --out ./amazon-fsx-openzfs-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the RAE FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon FSx for OpenZFS / `amazon-fsx-openzfs` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/fsx/openzfs/](https://aws.amazon.com/fsx/openzfs/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/) | Catalog record |
| Research dossier | `npx rae-faang research dossier amazon-fsx-openzfs` | `research/companies/amazon_aws/products/amazon-fsx-openzfs.md` |
| REA report | `catalog/rea/amazon_aws/amazon-fsx-openzfs.md` (captured 2026-11-03T03:10:22.959Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-fsx-openzfs.json` (`ev_3ea495f31312a70bb26a0af3b1ca3732bcd4869d8505f01a932d731ff8625985`) | Catalog evidence |
| Alternative candidates | None recorded — this is a research gap | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rae-faang products show amazon-fsx-openzfs --format json` and `npx rae-faang research dossier amazon-fsx-openzfs` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/fsx/openzfs/](https://aws.amazon.com/fsx/openzfs/), captured 2026-11-03T03:10:22.959Z, evidence `ev_3ea495f31312a70bb26a0af3b1ca3732bcd4869d8505f01a932d731ff8625985`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-FSX-OPENZFS-CAP-4C39EF8C`, `AMAZON-FSX-OPENZFS-CAP-89751A7D`, `AMAZON-FSX-OPENZFS-CAP-6E83782F`, `AMAZON-FSX-OPENZFS-CAP-2C160D08`, `AMAZON-FSX-OPENZFS-CAP-DC0301EE`.

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
| Name / stable ID | **Amazon FSx for OpenZFS** / `amazon-fsx-openzfs` | Product catalog |
| Company / category | Amazon Web Services / `storage` / `file-storage`, `openzfs`, `nfs`, `snapshots`, `enterprise-storage` | Product catalog |
| Official website / docs | [https://aws.amazon.com/fsx/openzfs/](https://aws.amazon.com/fsx/openzfs/) / [https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/) | URL lead; compiler does not fetch source |
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
| `AMAZON-FSX-OPENZFS-CAP-4C39EF8C` | fully managed OpenZFS file storage | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-FSX-OPENZFS-CAP-89751A7D` | NFSv3 and NFSv4 access from AWS and on-premises compute | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-FSX-OPENZFS-CAP-6E83782F` | high IOPS and low-latency shared storage | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-FSX-OPENZFS-CAP-2C160D08` | snapshots, clones, compression and backups | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-FSX-OPENZFS-CAP-DC0301EE` | Multi-AZ and Single-AZ deployment options | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: File Systems submenu`, `button: Resources submenu`, `button: Get started with FSx for OpenZFS`, `button: Simplify building and testing applications`, `button: Accelerate workloads`, `button: Intelligent-Tiering`, `button: Optimize costs`, `button: Effortlessly access file data as if it were in an Amazon S3 bucket`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting Started`, `link: FAQs`, `link: Storage`, `link: Amazon FSx`, `button: Easily migrate your workloads to AWS`, `button: Deliver insights faster for data analytics workloads`, `button: Accelerate content management`, `button: Increase dev/test velocity`, `button: Play:`, `link: Missing alt text value Rev accelerated ML training for speech recognition and saved on storage costs Learn more`, `link: Missing alt text value Hatch delivered simple cross-platform storage for their global 4K game streaming platform Learn more`, `link: Missing alt text value Vela Games reduces build times for Game Developers by 60% with FSx for OpenZFS Learn more`, `link: Video Get started with a tutorial Learn how to get started in minutes`, `link: Console Ready to build? No upfront costs or licensing fees`, `link: PoC Guide Deploy a PoC for Amazon FSx for OpenZFS PoC Guide`, `link: Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **fully managed OpenZFS file storage:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **NFSv3 and NFSv4 access from AWS and on-premises compute:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **high IOPS and low-latency shared storage:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **snapshots, clones, compression and backups:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Multi-AZ and Single-AZ deployment options:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon FSx for OpenZFS`, `Benefits of FSx for OpenZFS`, `Simplify building and testing applications`, `Accelerate workloads`, `Intelligent-Tiering`, `Optimize costs`, `Effortlessly access file data as if it were in an Amazon S3 bucket`, `Use cases`, `Easily migrate your workloads to AWS`, `Deliver insights faster for data analytics workloads`, `Accelerate content management`, `Increase dev/test velocity`, `Amazon FSx for OpenZFS now supports Amazon S3 Access`, `Customers`, `Rev accelerated ML training for speech recognition and saved on storage costs`, `Hatch delivered simple cross-platform storage for their global 4K game streaming platform`, `Vela Games reduces build times for Game Developers by 60% with FSx for OpenZFS`, `Get started with FSx for OpenZFS`, `Get started with a tutorial`, `Ready to build?`, `Deploy a PoC for Amazon FSx for OpenZFS`, `Connect with an expert`, `Learn`, `Resources`, `Developers` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: File Systems submenu`, `button: Resources submenu`, `button: Get started with FSx for OpenZFS`, `button: Simplify building and testing applications`, `button: Accelerate workloads`, `button: Intelligent-Tiering`, `button: Optimize costs`, `button: Effortlessly access file data as if it were in an Amazon S3 bucket`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting Started`, `link: FAQs`, `link: Storage`, `link: Amazon FSx`, `button: Easily migrate your workloads to AWS`, `button: Deliver insights faster for data analytics workloads`, `button: Accelerate content management`, `button: Increase dev/test velocity`, `button: Play:`, `link: Missing alt text value Rev accelerated ML training for speech recognition and saved on storage costs Learn more`, `link: Missing alt text value Hatch delivered simple cross-platform storage for their global 4K game streaming platform Learn more`, `link: Missing alt text value Vela Games reduces build times for Game Developers by 60% with FSx for OpenZFS Learn more`, `link: Video Get started with a tutorial Learn how to get started in minutes`, `link: Console Ready to build? No upfront costs or licensing fees`, `link: PoC Guide Deploy a PoC for Amazon FSx for OpenZFS PoC Guide`, `link: Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/fsx/openzfs/?nc=sn&loc=1)`, `[Features](/fsx/openzfs/features/?nc=sn&loc=2)`, `[Pricing](/fsx/openzfs/pricing/?nc=sn&loc=4)`, `[Getting Started](/fsx/openzfs/getting-started/?nc=sn&loc=5)`, `[FAQs](/fsx/openzfs/faqs/?nc=sn&loc=7)`, `[Storage](/products/storage/)`, `[Amazon FSx](/fsx/)`, `[Missing alt text value Rev accelerated ML training for speech recognition and saved on storage costs Learn more](https://aws.amazon.com/fsx/openzfs/customers/#rev)`, `[Missing alt text value Hatch delivered simple cross-platform storage for their global 4K game streaming platform Learn more](https://aws.amazon.com/fsx/openzfs/customers/#hatch)`, `[Missing alt text value Vela Games reduces build times for Game Developers by 60% with FSx for OpenZFS Learn more](https://aws.amazon.com/fsx/openzfs/customers/#vela)`, `[Video Get started with a tutorial Learn how to get started in minutes](https://www.youtube.com/watch?v=LmnJ5R0VLQc)`, `[Console Ready to build? No upfront costs or licensing fees](https://console.aws.amazon.com/fsx)`, `[PoC Guide Deploy a PoC for Amazon FSx for OpenZFS PoC Guide](https://docs.aws.amazon.com/solutions/deploy-a-poc-for-amazon-fsx-for-openzfs/)`, `[Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time](/contact-us/sales-support/)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)`, `[Product and Technical FAQs](/faqs/?nc1=f_dr)`, `[Analyst Reports](/resources/analyst-reports/?nc1=f_cc)`, `[AWS Partners](/partners/work-with-partners/?nc1=f_dr)`, `[Builder Center](https://builder.aws.com/?nc1=f_dr)`, `[SDKs & Tools](https://builder.aws.com/build/tools?nc1=f_dr)`, `[.NET on AWS](https://builder.aws.com/content/2zSx6gTiseJULEcqQFXqm3pzJoW/aws-tools-and-resources-net?nc1=f_dr)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-4C39EF8C — fully managed OpenZFS file storage
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-4C39EF8C`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-OPENZFS-CAP-4C39EF8C` → `REQ-FUNC-4C39EF8C` → `TEST-FUNC-4C39EF8C`.

### REQ-FUNC-89751A7D — NFSv3 and NFSv4 access from AWS and on-premises compute
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-89751A7D`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-OPENZFS-CAP-89751A7D` → `REQ-FUNC-89751A7D` → `TEST-FUNC-89751A7D`.

### REQ-FUNC-6E83782F — high IOPS and low-latency shared storage
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-6E83782F`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-OPENZFS-CAP-6E83782F` → `REQ-FUNC-6E83782F` → `TEST-FUNC-6E83782F`.

### REQ-FUNC-2C160D08 — snapshots, clones, compression and backups
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2C160D08`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-OPENZFS-CAP-2C160D08` → `REQ-FUNC-2C160D08` → `TEST-FUNC-2C160D08`.

### REQ-FUNC-DC0301EE — Multi-AZ and Single-AZ deployment options
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-DC0301EE`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-FSX-OPENZFS-CAP-DC0301EE` → `REQ-FUNC-DC0301EE` → `TEST-FUNC-DC0301EE`.

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

- **TEST-FUNC-4C39EF8C** → `REQ-FUNC-4C39EF8C`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-89751A7D** → `REQ-FUNC-89751A7D`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-6E83782F** → `REQ-FUNC-6E83782F`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-2C160D08** → `REQ-FUNC-2C160D08`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-DC0301EE** → `REQ-FUNC-DC0301EE`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-4C39EF8C, REQ-FUNC-89751A7D, REQ-FUNC-6E83782F, REQ-FUNC-2C160D08, REQ-FUNC-DC0301EE
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-4C39EF8C, REQ-FUNC-89751A7D, REQ-FUNC-6E83782F, REQ-FUNC-2C160D08, REQ-FUNC-DC0301EE
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
- **Completion:** Trace: REQ-FUNC-4C39EF8C, REQ-FUNC-89751A7D, REQ-FUNC-6E83782F, REQ-FUNC-2C160D08, REQ-FUNC-DC0301EE; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/fsx/openzfs/) | Not recorded | Amazon FSx for OpenZFS is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/) | Not recorded | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/fsx/openzfs/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/getting-started.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/fsx/openzfs/features/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_3ea495f31312a70bb26a0af3b1ca3732bcd4869d8505f01a932d731ff8625985` | Amazon FSx for OpenZFS Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/fsx/openzfs/) | 2026-11-03T03:10:22.959Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: File Systems submenu, button: Resources submenu, button: Get started with FSx for OpenZFS, button: Simplify building and testing applications, button: Accelerate workloads, button: Intelligent-Tiering, button: Optimize costs, button: Effortlessly access file data as if it were in an Amazon S3 bucket, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting Started, link: FAQs, link: Storage, link: Amazon FSx, button: Easily migrate your workloads to AWS, button: Deliver insights faster for data analytics workloads, button: Accelerate content management, button: Increase dev/test velocity, button: Play:, link: Missing alt text value Rev accelerated ML training for speech recognition and saved on storage costs Learn more, link: Missing alt text value Hatch delivered simple cross-platform storage for their global 4K game streaming platform Learn more, link: Missing alt text value Vela Games reduces build times for Game Developers by 60% with FSx for OpenZFS Learn more, link: Video Get started with a tutorial Learn how to get started in minutes, link: Console Ready to build? No upfront costs or licensing fees, link: PoC Guide Deploy a PoC for Amazon FSx for OpenZFS PoC Guide, link: Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-fsx-openzfs`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon FSx for OpenZFS is AWS's fully managed shared file-storage service built on the open-source OpenZFS file system. It supports NFS access from AWS and on-premises compute, high IOPS and low latency, snapshots, clones, compression, backups and multiple availability/deployment options.

# 2. Product identity and ownership

- **Official name:** Amazon FSx for OpenZFS
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/fsx/openzfs/

# 3. Product capabilities

- Run managed OpenZFS file systems with NFSv3 and NFSv4 access.
- Serve Linux, Windows and macOS compute and containers through NFS.
- Use snapshots, clones, compression and backups.
- Select Multi-AZ HA, Single-AZ HA or Single-AZ non-HA deployment types.
- Integrate with EC2, ECS, EKS, WorkSpaces, AppStream and S3 Access Points.

# 4. Technical architecture

The public surface includes file systems, volumes, datasets, NFS exports, deployment types, SSD and cache performance, snapshots, clones, compression, backups, network types, S3 Access Points, IAM and CloudTrail. Exact OpenZFS feature coverage, failover, consistency and performance behavior require REA verification.

# 5. User workflows

Users create a file system, configure network and security, create volumes and NFS exports, mount from compatible clients, manage snapshots and clones, monitor performance and restore or delete data. FSx for OpenZFS differs from FSx for ONTAP because its protocol and storage-management surface is based on OpenZFS rather than ONTAP.

# 6. Pricing and access

FSx for OpenZFS is an AWS commercial service priced by storage, throughput, SSD IOPS, backups, data transfer and Region. Current prices and free-tier applicability require verification from official pricing pages.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/
- Console, AWS CLI and FSx API manage file systems, volumes, snapshots and backups.
- Clients mount through NFS; S3 Access Points provide an additional object-access integration.
- Exact API, NFS, quota, failover, snapshot and performance semantics require REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include OpenZFS on Linux, TrueNAS, ZFS on FreeBSD, CephFS and NFS servers. No equivalence is claimed; management, durability, snapshots, replication, performance, NFS behavior and operations require independent comparison.

# 9. Alternative comparison

OpenZFS deployments provide the underlying file-system technology, but they do not by themselves reproduce AWS's managed lifecycle, deployment options, failover, backups, S3 access, monitoring or operational guarantees.

# 10. Missing capabilities and opportunity analysis

REA should map file-system and volume lifecycle, NFS semantics, snapshots, clones, compression, backups, deployment types, failover, throughput, IOPS, quotas, S3 Access Points, security and AWS integrations.

# 11. RAE implementation strategy

Use AWS product and OpenZFS guide documentation plus public OpenZFS behavior as research surfaces. A clean-room equivalent should use independently licensed OpenZFS or another storage system and document differences in management, durability, performance, snapshots, networking and cloud operations.

# 12. Security, privacy, and compliance

Research must verify network isolation, NFS identity and permissions, IAM, encryption, backups, snapshots, CloudTrail, S3 access, data residency, failover and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/fsx/openzfs/ — official product scope and integrations.
- https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html — official architecture and capabilities.
- https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/getting-started.html — official setup workflow.
- https://aws.amazon.com/fsx/openzfs/features/ — official feature overview.

# 14. Unknowns

- Complete deployment, protocol, version, quota and regional support matrix.
- Exact OpenZFS, NFS, snapshot, clone and compression behavior.
- Failover, backup, restore and S3 Access Point semantics.
- AWS-managed versus customer-managed responsibility boundaries.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier amazon-fsx-openzfs` and inspect canonical identity with `npx rae-faang products show amazon-fsx-openzfs --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang amazon-fsx-openzfs --out ./amazon-fsx-openzfs.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit amazon-fsx-openzfs --out ./amazon-fsx-openzfs-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-fsx-openzfs`).
- Dossier: [research/companies/amazon_aws/products/amazon-fsx-openzfs.md](../../../research/companies/amazon_aws/products/amazon-fsx-openzfs.md).
- REA capture: [catalog/rea/amazon_aws/amazon-fsx-openzfs.md](../../rea/amazon_aws/amazon-fsx-openzfs.md) (2026-11-03T03:10:22.959Z); raw record: [catalog/rea/evidence/amazon-fsx-openzfs.json](../../rea/evidence/amazon-fsx-openzfs.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://aws.amazon.com/fsx/openzfs/) — Amazon FSx for OpenZFS is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Official documentation entry](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/fsx/openzfs/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/getting-started.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/fsx/openzfs/features/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon FSx for OpenZFS Public web-surface observation (REA)](https://aws.amazon.com/fsx/openzfs/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: File Systems submenu, button: Resources submenu, button: Get started with FSx for OpenZFS, button: Simplify building and testing applications, button: Accelerate workloads, button: Intelligent-Tiering, button: Optimize costs, button: Effortlessly access file data as if it were in an Amazon S3 bucket, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting Started, link: FAQs, link: Storage, link: Amazon FSx, button: Easily migrate your workloads to AWS, button: Deliver insights faster for data analytics workloads, button: Accelerate content management, button: Increase dev/test velocity, button: Play:, link: Missing alt text value Rev accelerated ML training for speech recognition and saved on storage costs Learn more, link: Missing alt text value Hatch delivered simple cross-platform storage for their global 4K game streaming platform Learn more, link: Missing alt text value Vela Games reduces build times for Game Developers by 60% with FSx for OpenZFS Learn more, link: Video Get started with a tutorial Learn how to get started in minutes, link: Console Ready to build? No upfront costs or licensing fees, link: PoC Guide Deploy a PoC for Amazon FSx for OpenZFS PoC Guide, link: Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-03T03:10:22.959Z).
