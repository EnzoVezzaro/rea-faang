---
name: amazon-healthlake
description: "Evidence-aware build skill for Amazon HealthLake (amazon-healthlake); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon HealthLake — implementation skill (`amazon-healthlake`)

> **Research status:** pending. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon HealthLake**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon HealthLake** (`amazon-healthlake`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-healthlake.md` from the catalog page, or run `npx rea-faang amazon-healthlake --out ./amazon-healthlake.md`, `npx rea-faang skills generate amazon-healthlake` or `npx rea-faang build agent-kit amazon-healthlake --out ./amazon-healthlake-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon HealthLake / `amazon-healthlake` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/healthlake/](https://aws.amazon.com/healthlake/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/healthlake/latest/devguide/](https://docs.aws.amazon.com/healthlake/latest/devguide/) | Catalog record |
| Research dossier | `npx rea-faang research dossier amazon-healthlake` | `research/companies/amazon_aws/products/amazon-healthlake.md` |
| REA report | `catalog/rea/amazon_aws/amazon-healthlake.md` (captured 2026-11-03T03:13:56.069Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-healthlake.json` (`ev_6dd7c2f06b74701972d9b0afe8ae4e4911d8616571b1f27c778d95b2d02674f3`) | Catalog evidence |
| Alternative candidates | None recorded — this is a research gap | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show amazon-healthlake --format json` and `npx rea-faang research dossier amazon-healthlake` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/healthlake/](https://aws.amazon.com/healthlake/), captured 2026-11-03T03:13:56.069Z, evidence `ev_6dd7c2f06b74701972d9b0afe8ae4e4911d8616571b1f27c778d95b2d02674f3`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-HEALTHLAKE-CAP-A07C5EAA`, `AMAZON-HEALTHLAKE-CAP-49D8B72C`, `AMAZON-HEALTHLAKE-CAP-6BC1A654`, `AMAZON-HEALTHLAKE-CAP-4A7D75C6`, `AMAZON-HEALTHLAKE-CAP-B23AD297`.

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
| Name / stable ID | **Amazon HealthLake** / `amazon-healthlake` | Product catalog |
| Company / category | Amazon Web Services / `data_platform` / `healthcare`, `fhir`, `clinical-data`, `health-data-lake`, `managed-service` | Product catalog |
| Official website / docs | [https://aws.amazon.com/healthlake/](https://aws.amazon.com/healthlake/) / [https://docs.aws.amazon.com/healthlake/latest/devguide/](https://docs.aws.amazon.com/healthlake/latest/devguide/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **data_platform** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-HEALTHLAKE-CAP-A07C5EAA` | fully managed FHIR R4 data store | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-HEALTHLAKE-CAP-49D8B72C` | import and export of clinical data through S3 and native APIs | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-HEALTHLAKE-CAP-6BC1A654` | FHIR CRUD and search operations with SQL analytics access | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-HEALTHLAKE-CAP-4A7D75C6` | medical NLP for transforming unstructured clinical text | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-HEALTHLAKE-CAP-B23AD297` | integration with healthcare, analytics, ML and event services | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Features submenu`, `button: Get started with HealthLake`, `button: Connect with a specialist`, `button: Play:`, `button: Previous slide`, `button: Next slide`, `button: Create an AWS account`, `button: Back to top`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Pricing`, `link: FAQs`, `link: Resources`, `link: Product`, `link: Machine Learning`, `link: Enterprise-Scale FHIR Server Enterprise-Scale FHIR Server AWS HealthLake provides a fully managed, enterprise-scale FHIR R4 server that powers patient and member-facing applications without the operational burden of building and maintaining FHIR infrastructure at scale. Learn more`, `link: Unified Patient Record Unified Patient Record AWS HealthLake resolves fragmented, duplicate patient identities across claims, clinical, and ADT sources into a single standards-based record — accessible through both FHIR search and SQL, without custom pipelines or specialized FHIR expertise. Learn more`, `link: AI & Analytics Integration AI & Analytics Integration AWS HealthLake connects to agentic solutions like Amazon Connect Health and provides an MCP Server for customers building custom agents through AWS Bedrock AgentCore Gateway. Learn more`, `link: AWS HealthLake identifies and links duplicate patient, provider, and organization records (Preview)`, `link: Regulatory Compliance Efficient implementation of Patient Access, Provider Directory, Provider Access, and Prior Authorization APIs for CMS mandates. Learn more`, `link: Infrastructure for Real-Time Utilization Management Instant data access for concurrent utilization management workflows, prior authorization decisions, and real-time member engagement tools that improve care coordination and reduce administrative costs. Learn more`, `link: Accelerate Product Development and Compliance Rapidly build and scale your FHIR-based applications that meet HTI-1 and CMS requirements without managing complex infrastructure. Learn more`, `link: Reduce Development Costs Minimize data engineering investments by leveraging a structured FHIR data foundation with embedded analytics capabilities that enhance your product capabilities. Learn more`, `link: Modernize Patient-Facing Applications Use a standards-compliant FHIR datastore that enables real-time access to health data from multiple providers while ensuring seamless interoperability across healthcare systems and platforms. Learn more`, `link: Enhance Population Health Systems Create unified FHIR repositories that aggregate clinical data from disparate sources, enabling comprehensive population-level disease surveillance and outbreak monitoring. Learn more`, `link: Unify Clinical Data Create comprehensive patient records that integrate data from multiple EHRs, departmental systems, and external sources to support quality initiatives, care coordination workflows and research initiatives. Learn more`, `link: Learn more about pricing Learn more`, `link: Start using AWS HealthLake in Console Get started`, `link: See latest AWS HealthLake releases Learn more`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **fully managed FHIR R4 data store:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **import and export of clinical data through S3 and native APIs:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **FHIR CRUD and search operations with SQL analytics access:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **medical NLP for transforming unstructured clinical text:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **integration with healthcare, analytics, ML and event services:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `region: AWS Information`, `region: carousel`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `High-performance FHIR interactions at petabyte scale`, `What is HealthLake?`, `Introducing Data Transformation Agent`, `Features`, `Enterprise-Scale FHIR Server`, `Unified Patient Record`, `AI & Analytics Integration`, `Customers`, `Greenway Health`, `What's New`, `AWS HealthLake identifies and links duplicate patient, provider, and organization records (Preview)`, `Unlock substantial cost savings`, `Use cases`, `Regulatory Compliance`, `Infrastructure for Real-Time Utilization Management`, `Accelerate Product Development and Compliance`, `Reduce Development Costs`, `Modernize Patient-Facing Applications`, `Enhance Population Health Systems`, `Unify Clinical Data`, `Get started with AWS HealthLake`, `Learn more about pricing`, `Start using AWS HealthLake in Console`, `See latest AWS HealthLake releases`, `Learn` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Features submenu`, `button: Get started with HealthLake`, `button: Connect with a specialist`, `button: Play:`, `button: Previous slide`, `button: Next slide`, `button: Create an AWS account`, `button: Back to top`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Pricing`, `link: FAQs`, `link: Resources`, `link: Product`, `link: Machine Learning`, `link: Enterprise-Scale FHIR Server Enterprise-Scale FHIR Server AWS HealthLake provides a fully managed, enterprise-scale FHIR R4 server that powers patient and member-facing applications without the operational burden of building and maintaining FHIR infrastructure at scale. Learn more`, `link: Unified Patient Record Unified Patient Record AWS HealthLake resolves fragmented, duplicate patient identities across claims, clinical, and ADT sources into a single standards-based record — accessible through both FHIR search and SQL, without custom pipelines or specialized FHIR expertise. Learn more`, `link: AI & Analytics Integration AI & Analytics Integration AWS HealthLake connects to agentic solutions like Amazon Connect Health and provides an MCP Server for customers building custom agents through AWS Bedrock AgentCore Gateway. Learn more`, `link: AWS HealthLake identifies and links duplicate patient, provider, and organization records (Preview)`, `link: Regulatory Compliance Efficient implementation of Patient Access, Provider Directory, Provider Access, and Prior Authorization APIs for CMS mandates. Learn more`, `link: Infrastructure for Real-Time Utilization Management Instant data access for concurrent utilization management workflows, prior authorization decisions, and real-time member engagement tools that improve care coordination and reduce administrative costs. Learn more`, `link: Accelerate Product Development and Compliance Rapidly build and scale your FHIR-based applications that meet HTI-1 and CMS requirements without managing complex infrastructure. Learn more`, `link: Reduce Development Costs Minimize data engineering investments by leveraging a structured FHIR data foundation with embedded analytics capabilities that enhance your product capabilities. Learn more`, `link: Modernize Patient-Facing Applications Use a standards-compliant FHIR datastore that enables real-time access to health data from multiple providers while ensuring seamless interoperability across healthcare systems and platforms. Learn more`, `link: Enhance Population Health Systems Create unified FHIR repositories that aggregate clinical data from disparate sources, enabling comprehensive population-level disease surveillance and outbreak monitoring. Learn more`, `link: Unify Clinical Data Create comprehensive patient records that integrate data from multiple EHRs, departmental systems, and external sources to support quality initiatives, care coordination workflows and research initiatives. Learn more`, `link: Learn more about pricing Learn more`, `link: Start using AWS HealthLake in Console Get started`, `link: See latest AWS HealthLake releases Learn more`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/healthlake/)`, `[Pricing](/healthlake/pricing/)`, `[FAQs](/healthlake/faqs/)`, `[Resources](/healthlake/resources/)`, `[Product](/products/)`, `[Machine Learning](/machine-learning/)`, `[Enterprise-Scale FHIR Server Enterprise-Scale FHIR Server AWS HealthLake provides a fully managed, enterprise-scale FHIR R4 server that powers patient and member-facing applications without the operational burden of building and maintaining FHIR infrastructure at scale. Learn more](/healthlake/features/enterprise-scale-fhir-server/)`, `[Unified Patient Record Unified Patient Record AWS HealthLake resolves fragmented, duplicate patient identities across claims, clinical, and ADT sources into a single standards-based record — accessible through both FHIR search and SQL, without custom pipelines or specialized FHIR expertise. Learn more](/healthlake/features/unified-patient-record/)`, `[AI & Analytics Integration AI & Analytics Integration AWS HealthLake connects to agentic solutions like Amazon Connect Health and provides an MCP Server for customers building custom agents through AWS Bedrock AgentCore Gateway. Learn more](/healthlake/features/ai-analytics-integration/)`, `[AWS HealthLake identifies and links duplicate patient, provider, and organization records (Preview)](/about-aws/whats-new/2026/07/aws-healthlake/)`, `[Regulatory Compliance Efficient implementation of Patient Access, Provider Directory, Provider Access, and Prior Authorization APIs for CMS mandates. Learn more](/solutions/case-studies/mhk-case-study/)`, `[Infrastructure for Real-Time Utilization Management Instant data access for concurrent utilization management workflows, prior authorization decisions, and real-time member engagement tools that improve care coordination and reduce administrative costs. Learn more](/blogs/machine-learning/automate-prior-authorization-using-crd-with-cds-hooks-and-aws-healthlake/)`, `[Accelerate Product Development and Compliance Rapidly build and scale your FHIR-based applications that meet HTI-1 and CMS requirements without managing complex infrastructure. Learn more](/solutions/case-studies/latest-greenway-aws-healthlake-case-study/)`, `[Reduce Development Costs Minimize data engineering investments by leveraging a structured FHIR data foundation with embedded analytics capabilities that enhance your product capabilities. Learn more](/solutions/case-studies/latest-greenway-aws-healthlake-case-study/)`, `[Modernize Patient-Facing Applications Use a standards-compliant FHIR datastore that enables real-time access to health data from multiple providers while ensuring seamless interoperability across healthcare systems and platforms. Learn more](/blogs/industries/hms-people-heart-study-streamlines-digital-research-with-aws/)`, `[Enhance Population Health Systems Create unified FHIR repositories that aggregate clinical data from disparate sources, enabling comprehensive population-level disease surveillance and outbreak monitoring. Learn more](/blogs/publicsector/build-population-health-systems-to-enhance-healthcare-customer-experiences-on-aws/)`, `[Unify Clinical Data Create comprehensive patient records that integrate data from multiple EHRs, departmental systems, and external sources to support quality initiatives, care coordination workflows and research initiatives. Learn more](/blogs/industries/ai-powered-patient-profiles-using-aws-healthlake-and-amazon-bedrock/)`, `[Learn more about pricing Learn more](/healthlake/pricing/)`, `[Start using AWS HealthLake in Console Get started](https://console.aws.amazon.com/healthlake/home)`, `[See latest AWS HealthLake releases Learn more](https://docs.aws.amazon.com/healthlake/latest/devguide/releases.html)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-A07C5EAA — fully managed FHIR R4 data store
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-A07C5EAA`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-HEALTHLAKE-CAP-A07C5EAA` → `REQ-FUNC-A07C5EAA` → `TEST-FUNC-A07C5EAA`.

### REQ-FUNC-49D8B72C — import and export of clinical data through S3 and native APIs
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-49D8B72C`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-HEALTHLAKE-CAP-49D8B72C` → `REQ-FUNC-49D8B72C` → `TEST-FUNC-49D8B72C`.

### REQ-FUNC-6BC1A654 — FHIR CRUD and search operations with SQL analytics access
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-6BC1A654`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-HEALTHLAKE-CAP-6BC1A654` → `REQ-FUNC-6BC1A654` → `TEST-FUNC-6BC1A654`.

### REQ-FUNC-4A7D75C6 — medical NLP for transforming unstructured clinical text
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-4A7D75C6`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-HEALTHLAKE-CAP-4A7D75C6` → `REQ-FUNC-4A7D75C6` → `TEST-FUNC-4A7D75C6`.

### REQ-FUNC-B23AD297 — integration with healthcare, analytics, ML and event services
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-B23AD297`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-HEALTHLAKE-CAP-B23AD297` → `REQ-FUNC-B23AD297` → `TEST-FUNC-B23AD297`.

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

- **TEST-FUNC-A07C5EAA** → `REQ-FUNC-A07C5EAA`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-49D8B72C** → `REQ-FUNC-49D8B72C`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-6BC1A654** → `REQ-FUNC-6BC1A654`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-4A7D75C6** → `REQ-FUNC-4A7D75C6`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-B23AD297** → `REQ-FUNC-B23AD297`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-A07C5EAA, REQ-FUNC-49D8B72C, REQ-FUNC-6BC1A654, REQ-FUNC-4A7D75C6, REQ-FUNC-B23AD297
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-A07C5EAA, REQ-FUNC-49D8B72C, REQ-FUNC-6BC1A654, REQ-FUNC-4A7D75C6, REQ-FUNC-B23AD297
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
- **Completion:** Trace: REQ-FUNC-A07C5EAA, REQ-FUNC-49D8B72C, REQ-FUNC-6BC1A654, REQ-FUNC-4A7D75C6, REQ-FUNC-B23AD297; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/healthlake/) | Not recorded | Amazon HealthLake is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/healthlake/latest/devguide/) | Not recorded | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/healthlake/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/documentation-overview/healthlake/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/healthlake/latest/devguide/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/healthlake/latest/APIReference/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/healthlake/getting-started/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_6dd7c2f06b74701972d9b0afe8ae4e4911d8616571b1f27c778d95b2d02674f3` | Amazon HealthLake Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/healthlake/) | 2026-11-03T03:13:56.069Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Features submenu, button: Get started with HealthLake, button: Connect with a specialist, button: Play:, button: Previous slide, button: Next slide, button: Create an AWS account, button: Back to top, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Pricing, link: FAQs, link: Resources, link: Product, link: Machine Learning, link: Enterprise-Scale FHIR Server Enterprise-Scale FHIR Server AWS HealthLake provides a fully managed, enterprise-scale FHIR R4 server that powers patient and member-facing applications without the operational burden of building and maintaining FHIR infrastructure at scale. Learn more, link: Unified Patient Record Unified Patient Record AWS HealthLake resolves fragmented, duplicate patient identities across claims, clinical, and ADT sources into a single standards-based record — accessible through both FHIR search and SQL, without custom pipelines or specialized FHIR expertise. Learn more, link: AI & Analytics Integration AI & Analytics Integration AWS HealthLake connects to agentic solutions like Amazon Connect Health and provides an MCP Server for customers building custom agents through AWS Bedrock AgentCore Gateway. Learn more, link: AWS HealthLake identifies and links duplicate patient, provider, and organization records (Preview), link: Regulatory Compliance Efficient implementation of Patient Access, Provider Directory, Provider Access, and Prior Authorization APIs for CMS mandates. Learn more, link: Infrastructure for Real-Time Utilization Management Instant data access for concurrent utilization management workflows, prior authorization decisions, and real-time member engagement tools that improve care coordination and reduce administrative costs. Learn more, link: Accelerate Product Development and Compliance Rapidly build and scale your FHIR-based applications that meet HTI-1 and CMS requirements without managing complex infrastructure. Learn more, link: Reduce Development Costs Minimize data engineering investments by leveraging a structured FHIR data foundation with embedded analytics capabilities that enhance your product capabilities. Learn more, link: Modernize Patient-Facing Applications Use a standards-compliant FHIR datastore that enables real-time access to health data from multiple providers while ensuring seamless interoperability across healthcare systems and platforms. Learn more, link: Enhance Population Health Systems Create unified FHIR repositories that aggregate clinical data from disparate sources, enabling comprehensive population-level disease surveillance and outbreak monitoring. Learn more, link: Unify Clinical Data Create comprehensive patient records that integrate data from multiple EHRs, departmental systems, and external sources to support quality initiatives, care coordination workflows and research initiatives. Learn more, link: Learn more about pricing Learn more, link: Start using AWS HealthLake in Console Get started, link: See latest AWS HealthLake releases Learn more, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, region: AWS Information, region: carousel, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-healthlake`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon HealthLake is AWS's managed healthcare data service for storing, transforming, analyzing and sharing health data using the FHIR R4 standard. It provides a FHIR data store, import/export workflows, search and SQL-oriented analytics, with optional transformation and NLP capabilities for clinical data.

# 2. Product identity and ownership

- **Official name:** Amazon HealthLake
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/healthlake/

# 3. Product capabilities

- Store and query FHIR R4 clinical data in managed data stores.
- Import FHIR files and clinical data from Amazon S3.
- Perform FHIR Create, Read, Update, Delete and Search operations.
- Transform selected unstructured clinical documents into structured FHIR resources with medical NLP.
- Query HealthLake data with SQL interfaces for analytics and AI workflows.
- Integrate with IAM, VPC/PrivateLink, S3, EventBridge, Lake Formation, Athena, QuickSight and SageMaker.

# 4. Technical architecture

The public surface includes FHIR data stores, resources, search, import/export jobs, S3 locations, identity and access controls, terminology mappings, SQL-on-FHIR/query surfaces and optional transformation features. HIPAA eligibility and clinical-use constraints require careful evidence; HealthLake is not a substitute for professional medical advice.

# 5. User workflows

Users create a data store, configure IAM and network access, import FHIR or source data, search and update resources through FHIR APIs, export or analyze data, and connect downstream analytics or ML systems. A separate workflow transforms legacy documents into FHIR resources and requires validation by qualified healthcare professionals.

# 6. Pricing and access

HealthLake is an AWS commercial service with usage-based pricing. Costs depend on data storage, API activity, import/export, analytics and Region. Current pricing, regional availability and eligibility requirements require verification from official pricing and service documentation.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/healthlake/latest/devguide/
- API reference: https://docs.aws.amazon.com/healthlake/latest/APIReference/
- Access through the AWS console, AWS CLI and AWS SDKs.
- Integrations include S3, EventBridge, Lake Formation, Athena, QuickSight, SageMaker and VPC PrivateLink.
- Exact FHIR operations, SQL query behavior, import/export limits and CLI coverage require REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include HAPI FHIR, IBM FHIR Server, Smile CDR Community Edition, Aidbox Community Edition, OpenMRS and Apache Beam-based data pipelines. These are candidates for comparison only; no complete equivalence is claimed.

# 9. Alternative comparison

Open-source FHIR servers can cover portions of resource storage and APIs, but a clean-room equivalent would still need to reproduce managed scaling, import/export, NLP transformation, SQL-on-FHIR analytics, privacy controls, auditability and AWS integrations.

# 10. Missing capabilities and opportunity analysis

REA should map data-store lifecycle, FHIR version and resource support, search semantics, import/export jobs, deduplication, NLP transformation, terminology mapping, SQL behavior, access control, audit logs, encryption, quotas, interoperability and failure recovery.

# 11. REA implementation strategy

Use the official HealthLake product page, developer guide, API reference and getting-started workflow as research surfaces. A clean-room implementation should use independently licensed FHIR components, document standards and implementation differences, and avoid copying AWS code, clinical models or proprietary NLP behavior.

# 12. Security, privacy, and compliance

Research must verify PHI handling, HIPAA-eligible boundaries, IAM and least privilege, VPC/PrivateLink, encryption, audit logs, data residency, retention/deletion, export controls and human review for clinical workflows.

# 13. Evidence register

- https://aws.amazon.com/healthlake/ — official product scope.
- https://aws.amazon.com/documentation-overview/healthlake/ — official import, FHIR, NLP and analytics overview.
- https://docs.aws.amazon.com/healthlake/latest/devguide/ — official architecture and workflows.
- https://docs.aws.amazon.com/healthlake/latest/APIReference/ — official API surface.
- https://aws.amazon.com/healthlake/getting-started/ — official setup workflow.

# 14. Unknowns

- Complete FHIR R4 resource, search and validation matrix.
- Current transformation-agent/NLP availability and preview boundaries.
- SQL-on-FHIR semantics, performance, quotas and export behavior.
- Region, pricing, HIPAA and interoperability constraints.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, FHIR behavior, alternative analysis and acceptance review remain outstanding.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier amazon-healthlake` and inspect canonical identity with `npx rea-faang products show amazon-healthlake --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang amazon-healthlake --out ./amazon-healthlake.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit amazon-healthlake --out ./amazon-healthlake-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-healthlake`).
- Dossier: [research/companies/amazon_aws/products/amazon-healthlake.md](../../../research/companies/amazon_aws/products/amazon-healthlake.md).
- REA capture: [catalog/rea/amazon_aws/amazon-healthlake.md](../../rea/amazon_aws/amazon-healthlake.md) (2026-11-03T03:13:56.069Z); raw record: [catalog/rea/evidence/amazon-healthlake.json](../../rea/evidence/amazon-healthlake.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://aws.amazon.com/healthlake/) — Amazon HealthLake is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Official documentation entry](https://docs.aws.amazon.com/healthlake/latest/devguide/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/healthlake/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/documentation-overview/healthlake/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/healthlake/latest/devguide/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/healthlake/latest/APIReference/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/healthlake/getting-started/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon HealthLake Public web-surface observation (REA)](https://aws.amazon.com/healthlake/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Features submenu, button: Get started with HealthLake, button: Connect with a specialist, button: Play:, button: Previous slide, button: Next slide, button: Create an AWS account, button: Back to top, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Pricing, link: FAQs, link: Resources, link: Product, link: Machine Learning, link: Enterprise-Scale FHIR Server Enterprise-Scale FHIR Server AWS HealthLake provides a fully managed, enterprise-scale FHIR R4 server that powers patient and member-facing applications without the operational burden of building and maintaining FHIR infrastructure at scale. Learn more, link: Unified Patient Record Unified Patient Record AWS HealthLake resolves fragmented, duplicate patient identities across claims, clinical, and ADT sources into a single standards-based record — accessible through both FHIR search and SQL, without custom pipelines or specialized FHIR expertise. Learn more, link: AI & Analytics Integration AI & Analytics Integration AWS HealthLake connects to agentic solutions like Amazon Connect Health and provides an MCP Server for customers building custom agents through AWS Bedrock AgentCore Gateway. Learn more, link: AWS HealthLake identifies and links duplicate patient, provider, and organization records (Preview), link: Regulatory Compliance Efficient implementation of Patient Access, Provider Directory, Provider Access, and Prior Authorization APIs for CMS mandates. Learn more, link: Infrastructure for Real-Time Utilization Management Instant data access for concurrent utilization management workflows, prior authorization decisions, and real-time member engagement tools that improve care coordination and reduce administrative costs. Learn more, link: Accelerate Product Development and Compliance Rapidly build and scale your FHIR-based applications that meet HTI-1 and CMS requirements without managing complex infrastructure. Learn more, link: Reduce Development Costs Minimize data engineering investments by leveraging a structured FHIR data foundation with embedded analytics capabilities that enhance your product capabilities. Learn more, link: Modernize Patient-Facing Applications Use a standards-compliant FHIR datastore that enables real-time access to health data from multiple providers while ensuring seamless interoperability across healthcare systems and platforms. Learn more, link: Enhance Population Health Systems Create unified FHIR repositories that aggregate clinical data from disparate sources, enabling comprehensive population-level disease surveillance and outbreak monitoring. Learn more, link: Unify Clinical Data Create comprehensive patient records that integrate data from multiple EHRs, departmental systems, and external sources to support quality initiatives, care coordination workflows and research initiatives. Learn more, link: Learn more about pricing Learn more, link: Start using AWS HealthLake in Console Get started, link: See latest AWS HealthLake releases Learn more, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, region: AWS Information, region: carousel, contentinfo. (VERIFIED; accessed 2026-11-03T03:13:56.069Z).
