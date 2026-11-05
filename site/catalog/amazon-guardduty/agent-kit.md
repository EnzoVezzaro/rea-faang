---
name: amazon-guardduty
description: "Evidence-aware build skill for Amazon GuardDuty (amazon-guardduty); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon GuardDuty — implementation skill (`amazon-guardduty`)

> **Research status:** pending. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon GuardDuty**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon GuardDuty** (`amazon-guardduty`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-guardduty.md` from the catalog page, or run `npx rea-faang amazon-guardduty --out ./amazon-guardduty.md`, `npx rea-faang skills generate amazon-guardduty` or `npx rea-faang build agent-kit amazon-guardduty --out ./amazon-guardduty-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon GuardDuty / `amazon-guardduty` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/guardduty/](https://aws.amazon.com/guardduty/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/guardduty/latest/ug/](https://docs.aws.amazon.com/guardduty/latest/ug/) | Catalog record |
| Research dossier | `npx rea-faang research dossier amazon-guardduty` | `research/companies/amazon_aws/products/amazon-guardduty.md` |
| REA report | `catalog/rea/amazon_aws/amazon-guardduty.md` (captured 2026-11-03T03:12:55.210Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-guardduty.json` (`ev_1b020fd858bab4fd2ef3eb6e523ffb0c96c2e00225b53d810677736c1fbe2604`) | Catalog evidence |
| Alternative candidates | None recorded — this is a research gap | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show amazon-guardduty --format json` and `npx rea-faang research dossier amazon-guardduty` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/guardduty/](https://aws.amazon.com/guardduty/), captured 2026-11-03T03:12:55.210Z, evidence `ev_1b020fd858bab4fd2ef3eb6e523ffb0c96c2e00225b53d810677736c1fbe2604`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-GUARDDUTY-CAP-C43F5586`, `AMAZON-GUARDDUTY-CAP-B8D2DD70`, `AMAZON-GUARDDUTY-CAP-EE20C38C`, `AMAZON-GUARDDUTY-CAP-A3C57C89`, `AMAZON-GUARDDUTY-CAP-74A8F40C`.

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
| Name / stable ID | **Amazon GuardDuty** / `amazon-guardduty` | Product catalog |
| Company / category | Amazon Web Services / `security` / `threat-detection`, `security-monitoring`, `malware-detection`, `cloud-security`, `managed-service` | Product catalog |
| Official website / docs | [https://aws.amazon.com/guardduty/](https://aws.amazon.com/guardduty/) / [https://docs.aws.amazon.com/guardduty/latest/ug/](https://docs.aws.amazon.com/guardduty/latest/ug/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **security** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-GUARDDUTY-CAP-C43F5586` | continuous detection of malicious and unauthorized activity | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-GUARDDUTY-CAP-B8D2DD70` | threat intelligence and machine-learning analysis of AWS data sources and logs | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-GUARDDUTY-CAP-EE20C38C` | security findings for account, workload, identity and data threats | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-GUARDDUTY-CAP-A3C57C89` | optional protection plans for S3, EKS, ECS, EC2, EBS, RDS, Lambda, Backup and AI activity | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-GUARDDUTY-CAP-74A8F40C` | multi-account administration, EventBridge integration and regional findings | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Resources submenu`, `button: Create an AWS Account`, `button: Continuous monitoring`, `button: AI/ML-powered threat detection`, `button: Respond faster to threats`, `button: Scalable, fully managed threat detection`, `button: End-to-end visibility into AWS compute workloads`, `button: Play:`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting started`, `link: Security Hub`, `link: Partners`, `link: Customers`, `link: Products`, `link: Security, Identity & Compliance`, `link: Compute Protection 4`, `link: Storage Protection 3`, `link: Database Protection 1`, `link: AI Protection 1`, `button: Open all`, `button: GuardDuty Malware Protection for Amazon EC2`, `button: GuardDuty EKS Protection`, `button: GuardDuty Runtime Monitoring`, `button: GuardDuty Lambda Protection`, `button: GuardDuty S3 Protection`, `button: GuardDuty Malware Protection for Amazon S3`, `button: GuardDuty Malware Protection for AWS Backup`, `button: GuardDuty RDS Protection`, `button: GuardDuty AI Protection`, `button: Detect suspicious multi-stage security threats in your generative AI workloads`, `button: Accelerate investigations and automate remediation`, `button: Protect against ransomware and other types of malware`, `button: Centralize threat detection for AWS container workloads`, `button: More easily meet compliance requirements, like PCI DSS`, `link: SAP Logo SAP enforces zero-trust security across 10,000 AWS accounts with GuardDuty Read the case study`, `link: The Warner Bros. Discovery logo featuring the classic WB shield above the company name in blue text. Warner Bros Discovery quickly scales container threat detection with Amazon GuardDuty Watch the video`, `link: Missing alt text value Siemens strengthens security and enhances productivity using AWS Read the case study`, `link: Missing alt text value AppsFlyer automates suspicious activity detection on AWS Read the case study`, `link: Features page Learn more about GuardDuty features and capabilities Explore GuardDuty features`, `link: Customers See how global companies are using GuardDuty to protect their AWS accounts with intelligent threat detection. Learn more`, `button: Yes, give us positive feedback`, `button: No, give us constructive feedback`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **continuous detection of malicious and unauthorized activity:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **threat intelligence and machine-learning analysis of AWS data sources and logs:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **security findings for account, workload, identity and data threats:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **optional protection plans for S3, EKS, ECS, EC2, EBS, RDS, Lambda, Backup and AI activity:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **multi-account administration, EventBridge integration and regional findings:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon GuardDuty`, `Benefits of Amazon GuardDuty`, `Continuous monitoring`, `AI/ML-powered threat detection`, `Respond faster to threats`, `Scalable, fully managed threat detection`, `End-to-end visibility into AWS compute workloads`, `What is GuardDuty?`, `How it works`, `GuardDuty for AWS workload protection`, `Compute Protection`, `GuardDuty Malware Protection for Amazon EC2`, `GuardDuty EKS Protection`, `GuardDuty Runtime Monitoring`, `GuardDuty Lambda Protection`, `Storage Protection`, `GuardDuty S3 Protection`, `GuardDuty Malware Protection for Amazon S3`, `GuardDuty Malware Protection for AWS Backup`, `Database Protection`, `GuardDuty RDS Protection`, `AI Protection`, `GuardDuty AI Protection`, `Use cases`, `Detect suspicious multi-stage security threats in your generative AI workloads` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Resources submenu`, `button: Create an AWS Account`, `button: Continuous monitoring`, `button: AI/ML-powered threat detection`, `button: Respond faster to threats`, `button: Scalable, fully managed threat detection`, `button: End-to-end visibility into AWS compute workloads`, `button: Play:`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting started`, `link: Security Hub`, `link: Partners`, `link: Customers`, `link: Products`, `link: Security, Identity & Compliance`, `link: Compute Protection 4`, `link: Storage Protection 3`, `link: Database Protection 1`, `link: AI Protection 1`, `button: Open all`, `button: GuardDuty Malware Protection for Amazon EC2`, `button: GuardDuty EKS Protection`, `button: GuardDuty Runtime Monitoring`, `button: GuardDuty Lambda Protection`, `button: GuardDuty S3 Protection`, `button: GuardDuty Malware Protection for Amazon S3`, `button: GuardDuty Malware Protection for AWS Backup`, `button: GuardDuty RDS Protection`, `button: GuardDuty AI Protection`, `button: Detect suspicious multi-stage security threats in your generative AI workloads`, `button: Accelerate investigations and automate remediation`, `button: Protect against ransomware and other types of malware`, `button: Centralize threat detection for AWS container workloads`, `button: More easily meet compliance requirements, like PCI DSS`, `link: SAP Logo SAP enforces zero-trust security across 10,000 AWS accounts with GuardDuty Read the case study`, `link: The Warner Bros. Discovery logo featuring the classic WB shield above the company name in blue text. Warner Bros Discovery quickly scales container threat detection with Amazon GuardDuty Watch the video`, `link: Missing alt text value Siemens strengthens security and enhances productivity using AWS Read the case study`, `link: Missing alt text value AppsFlyer automates suspicious activity detection on AWS Read the case study`, `link: Features page Learn more about GuardDuty features and capabilities Explore GuardDuty features`, `link: Customers See how global companies are using GuardDuty to protect their AWS accounts with intelligent threat detection. Learn more`, `button: Yes, give us positive feedback`, `button: No, give us constructive feedback`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/guardduty/)`, `[Features](/guardduty/features/)`, `[Pricing](/guardduty/pricing/)`, `[Getting started](/guardduty/getting-started/)`, `[Security Hub](/security-hub/)`, `[Partners](/guardduty/resources/partners/)`, `[Customers](/guardduty/customers/)`, `[Products](/products/)`, `[Security, Identity & Compliance](/products/security/)`, `[Compute Protection 4](/guardduty/#compute-protection--1e0ixp6)`, `[Storage Protection 3](/guardduty/#storage-protection--1e0ixp6)`, `[Database Protection 1](/guardduty/#database-protection--1e0ixp6)`, `[AI Protection 1](/guardduty/#ai-protection--1e0ixp6)`, `[SAP Logo SAP enforces zero-trust security across 10,000 AWS accounts with GuardDuty Read the case study](https://aws.amazon.com/solutions/case-studies/sap-case-study/)`, `[The Warner Bros. Discovery logo featuring the classic WB shield above the company name in blue text. Warner Bros Discovery quickly scales container threat detection with Amazon GuardDuty Watch the video](https://youtu.be/VEUxtZR9wqU?trk=157c2924-0799-44a0-874c-6f933d97154c&sc_channel=el)`, `[Missing alt text value Siemens strengthens security and enhances productivity using AWS Read the case study](https://aws.amazon.com/solutions/case-studies/siemens-security/)`, `[Missing alt text value AppsFlyer automates suspicious activity detection on AWS Read the case study](https://aws.amazon.com/solutions/case-studies/appsflyer-security/?pg=ln&sec=c)`, `[Features page Learn more about GuardDuty features and capabilities Explore GuardDuty features](/guardduty/features/)`, `[Customers See how global companies are using GuardDuty to protect their AWS accounts with intelligent threat detection. Learn more](/guardduty/customers/)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)`, `[Product and Technical FAQs](/faqs/?nc1=f_dr)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-C43F5586 — continuous detection of malicious and unauthorized activity
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C43F5586`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-GUARDDUTY-CAP-C43F5586` → `REQ-FUNC-C43F5586` → `TEST-FUNC-C43F5586`.

### REQ-FUNC-B8D2DD70 — threat intelligence and machine-learning analysis of AWS data sources and logs
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-B8D2DD70`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-GUARDDUTY-CAP-B8D2DD70` → `REQ-FUNC-B8D2DD70` → `TEST-FUNC-B8D2DD70`.

### REQ-FUNC-EE20C38C — security findings for account, workload, identity and data threats
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-EE20C38C`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-GUARDDUTY-CAP-EE20C38C` → `REQ-FUNC-EE20C38C` → `TEST-FUNC-EE20C38C`.

### REQ-FUNC-A3C57C89 — optional protection plans for S3, EKS, ECS, EC2, EBS, RDS, Lambda, Backup and AI activity
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-A3C57C89`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-GUARDDUTY-CAP-A3C57C89` → `REQ-FUNC-A3C57C89` → `TEST-FUNC-A3C57C89`.

### REQ-FUNC-74A8F40C — multi-account administration, EventBridge integration and regional findings
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-74A8F40C`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-GUARDDUTY-CAP-74A8F40C` → `REQ-FUNC-74A8F40C` → `TEST-FUNC-74A8F40C`.

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

- **TEST-FUNC-C43F5586** → `REQ-FUNC-C43F5586`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-B8D2DD70** → `REQ-FUNC-B8D2DD70`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-EE20C38C** → `REQ-FUNC-EE20C38C`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-A3C57C89** → `REQ-FUNC-A3C57C89`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-74A8F40C** → `REQ-FUNC-74A8F40C`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-C43F5586, REQ-FUNC-B8D2DD70, REQ-FUNC-EE20C38C, REQ-FUNC-A3C57C89, REQ-FUNC-74A8F40C
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-C43F5586, REQ-FUNC-B8D2DD70, REQ-FUNC-EE20C38C, REQ-FUNC-A3C57C89, REQ-FUNC-74A8F40C
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
- **Completion:** Trace: REQ-FUNC-C43F5586, REQ-FUNC-B8D2DD70, REQ-FUNC-EE20C38C, REQ-FUNC-A3C57C89, REQ-FUNC-74A8F40C; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/guardduty/) | Not recorded | Amazon GuardDuty is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/guardduty/latest/ug/) | Not recorded | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/guardduty/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/documentation-overview/guardduty/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/guardduty/latest/ug/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/guardduty/latest/APIReference/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/cli/latest/reference/guardduty/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_1b020fd858bab4fd2ef3eb6e523ffb0c96c2e00225b53d810677736c1fbe2604` | Amazon GuardDuty Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/guardduty/) | 2026-11-03T03:12:55.210Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Resources submenu, button: Create an AWS Account, button: Continuous monitoring, button: AI/ML-powered threat detection, button: Respond faster to threats, button: Scalable, fully managed threat detection, button: End-to-end visibility into AWS compute workloads, button: Play:, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting started, link: Security Hub, link: Partners, link: Customers, link: Products, link: Security, Identity & Compliance, link: Compute Protection 4, link: Storage Protection 3, link: Database Protection 1, link: AI Protection 1, button: Open all, button: GuardDuty Malware Protection for Amazon EC2, button: GuardDuty EKS Protection, button: GuardDuty Runtime Monitoring, button: GuardDuty Lambda Protection, button: GuardDuty S3 Protection, button: GuardDuty Malware Protection for Amazon S3, button: GuardDuty Malware Protection for AWS Backup, button: GuardDuty RDS Protection, button: GuardDuty AI Protection, button: Detect suspicious multi-stage security threats in your generative AI workloads, button: Accelerate investigations and automate remediation, button: Protect against ransomware and other types of malware, button: Centralize threat detection for AWS container workloads, button: More easily meet compliance requirements, like PCI DSS, link: SAP Logo SAP enforces zero-trust security across 10,000 AWS accounts with GuardDuty Read the case study, link: The Warner Bros. Discovery logo featuring the classic WB shield above the company name in blue text. Warner Bros Discovery quickly scales container threat detection with Amazon GuardDuty Watch the video, link: Missing alt text value Siemens strengthens security and enhances productivity using AWS Read the case study, link: Missing alt text value AppsFlyer automates suspicious activity detection on AWS Read the case study, link: Features page Learn more about GuardDuty features and capabilities Explore GuardDuty features, link: Customers See how global companies are using GuardDuty to protect their AWS accounts with intelligent threat detection. Learn more, button: Yes, give us positive feedback, button: No, give us constructive feedback, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-guardduty`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon GuardDuty is AWS's managed threat-detection service. It continuously monitors and analyzes AWS data sources, logs, workload activity and threat-intelligence signals to produce security findings for potentially malicious or unauthorized behavior.

# 2. Product identity and ownership

- **Official name:** Amazon GuardDuty
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/guardduty/

# 3. Product capabilities

- Detect suspicious account, credential, network, workload and data activity.
- Analyze CloudTrail management events, VPC flow logs and DNS activity as foundational sources.
- Add protection plans for S3, EKS, ECS, EC2, EBS, RDS, Lambda, AWS Backup and AI-service activity where supported.
- Scan for malware in selected EC2 and S3 workflows.
- Produce findings for console/API access, EventBridge workflows and Security Hub aggregation.
- Manage member accounts from a delegated GuardDuty administrator.

# 4. Technical architecture

The public surface includes detectors, Regions, data sources, protection plans, findings, threat-intelligence feeds, malware scans, member/admin relationships, EventBridge events and API/CLI operations. GuardDuty findings remain regional unless explicitly aggregated through supported services; this boundary requires REA verification.

# 5. User workflows

Users enable GuardDuty in a Region, configure foundational and optional protection data sources, manage organization accounts, inspect findings, automate responses through EventBridge/Security Hub and tune or archive findings. The service is designed to operate without customer-managed sensors or appliances.

# 6. Pricing and access

GuardDuty is an AWS pay-as-you-go service. Pricing depends on analyzed data sources, protection plans, malware scans, Region and account configuration. Current pricing and free-tier applicability require verification from the official pricing page.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/guardduty/latest/ug/
- API reference: https://docs.aws.amazon.com/guardduty/latest/APIReference/
- AWS CLI namespace: `aws guardduty`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/guardduty/
- Integrations include AWS Organizations, EventBridge, Security Hub, CloudTrail and supported workload/data services.
- Exact command, finding-type, protection-plan and quota coverage requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Falco, Wazuh, Suricata, Zeek, OpenSearch Security Analytics, YARA and ClamAV. These are components or adjacent systems, not claimed equivalents to GuardDuty's managed AWS data collection, threat intelligence, ML detection and protection-plan surface.

# 9. Alternative comparison

Open-source tools can provide host, network, file or rule-based detection, but a clean-room equivalent would still need to combine cloud audit ingestion, workload coverage, malware scanning, threat intelligence, findings lifecycle, regional isolation and organization-wide operations.

# 10. Missing capabilities and opportunity analysis

REA should map detector lifecycle, foundational data sources, each protection plan, finding schemas and severity, malware scan flows, organization administration, suppression/archiving, EventBridge/Security Hub integration, APIs, quotas, regional behavior and failure modes.

# 11. REA implementation strategy

Use the official GuardDuty user guide, API reference, CLI reference and findings documentation as research surfaces. A clean-room implementation should compose independently licensed sensors and analyzers, document coverage differences, and avoid copying AWS detection logic, threat feeds or proprietary implementation details.

# 12. Security, privacy, and compliance

Research must verify IAM permissions, cross-account administration, regional data handling, log retention, finding confidentiality, malware-scan isolation, encryption, service-linked roles, alert delivery and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/guardduty/ — official product scope.
- https://aws.amazon.com/documentation-overview/guardduty/ — official capability overview.
- https://docs.aws.amazon.com/guardduty/latest/ug/ — official workflows and data sources.
- https://docs.aws.amazon.com/guardduty/latest/APIReference/ — official API surface.
- https://docs.aws.amazon.com/cli/latest/reference/guardduty/ — official CLI surface.

# 14. Unknowns

- Complete current protection-plan and Region availability matrix.
- Exact detector, finding, suppression and malware-scan state transitions.
- Full CLI/API command and quota coverage.
- Detection latency, retention and EventBridge/Security Hub delivery guarantees.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, protection-plan comparison, alternative analysis and acceptance review remain outstanding.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier amazon-guardduty` and inspect canonical identity with `npx rea-faang products show amazon-guardduty --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang amazon-guardduty --out ./amazon-guardduty.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit amazon-guardduty --out ./amazon-guardduty-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-guardduty`).
- Dossier: [research/companies/amazon_aws/products/amazon-guardduty.md](../../../research/companies/amazon_aws/products/amazon-guardduty.md).
- REA capture: [catalog/rea/amazon_aws/amazon-guardduty.md](../../rea/amazon_aws/amazon-guardduty.md) (2026-11-03T03:12:55.210Z); raw record: [catalog/rea/evidence/amazon-guardduty.json](../../rea/evidence/amazon-guardduty.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://aws.amazon.com/guardduty/) — Amazon GuardDuty is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Official documentation entry](https://docs.aws.amazon.com/guardduty/latest/ug/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/guardduty/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/documentation-overview/guardduty/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/guardduty/latest/ug/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/guardduty/latest/APIReference/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/cli/latest/reference/guardduty/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon GuardDuty Public web-surface observation (REA)](https://aws.amazon.com/guardduty/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Resources submenu, button: Create an AWS Account, button: Continuous monitoring, button: AI/ML-powered threat detection, button: Respond faster to threats, button: Scalable, fully managed threat detection, button: End-to-end visibility into AWS compute workloads, button: Play:, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting started, link: Security Hub, link: Partners, link: Customers, link: Products, link: Security, Identity & Compliance, link: Compute Protection 4, link: Storage Protection 3, link: Database Protection 1, link: AI Protection 1, button: Open all, button: GuardDuty Malware Protection for Amazon EC2, button: GuardDuty EKS Protection, button: GuardDuty Runtime Monitoring, button: GuardDuty Lambda Protection, button: GuardDuty S3 Protection, button: GuardDuty Malware Protection for Amazon S3, button: GuardDuty Malware Protection for AWS Backup, button: GuardDuty RDS Protection, button: GuardDuty AI Protection, button: Detect suspicious multi-stage security threats in your generative AI workloads, button: Accelerate investigations and automate remediation, button: Protect against ransomware and other types of malware, button: Centralize threat detection for AWS container workloads, button: More easily meet compliance requirements, like PCI DSS, link: SAP Logo SAP enforces zero-trust security across 10,000 AWS accounts with GuardDuty Read the case study, link: The Warner Bros. Discovery logo featuring the classic WB shield above the company name in blue text. Warner Bros Discovery quickly scales container threat detection with Amazon GuardDuty Watch the video, link: Missing alt text value Siemens strengthens security and enhances productivity using AWS Read the case study, link: Missing alt text value AppsFlyer automates suspicious activity detection on AWS Read the case study, link: Features page Learn more about GuardDuty features and capabilities Explore GuardDuty features, link: Customers See how global companies are using GuardDuty to protect their AWS accounts with intelligent threat detection. Learn more, button: Yes, give us positive feedback, button: No, give us constructive feedback, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-03T03:12:55.210Z).
