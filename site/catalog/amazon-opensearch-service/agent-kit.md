---
name: amazon-opensearch-service
description: "Evidence-aware build skill for Amazon OpenSearch Service (amazon-opensearch-service); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon OpenSearch Service — implementation skill (`amazon-opensearch-service`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon OpenSearch Service**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon OpenSearch Service** (`amazon-opensearch-service`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-opensearch-service.md` from the catalog page, or run `npx rae-faang amazon-opensearch-service --out ./amazon-opensearch-service.md`, `npx rae-faang skills generate amazon-opensearch-service` or `npx rae-faang build agent-kit amazon-opensearch-service --out ./amazon-opensearch-service-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the RAE FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon OpenSearch Service / `amazon-opensearch-service` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/opensearch-service/](https://aws.amazon.com/opensearch-service/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/opensearch-service/](https://docs.aws.amazon.com/opensearch-service/) | Catalog record |
| Research dossier | `npx rae-faang research dossier amazon-opensearch-service` | `research/companies/amazon_aws/products/amazon-opensearch-service.md` |
| REA report | `catalog/rea/amazon_aws/amazon-opensearch-service.md` (captured 2026-11-03T03:36:44.514Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-opensearch-service.json` (`ev_84785783223c858dcfe3f84077bb36f3827d7dcf6805f64781a17cb075894f0a`) | Catalog evidence |
| Alternative candidates | 1 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rae-faang products show amazon-opensearch-service --format json` and `npx rae-faang research dossier amazon-opensearch-service` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/opensearch-service/](https://aws.amazon.com/opensearch-service/), captured 2026-11-03T03:36:44.514Z, evidence `ev_84785783223c858dcfe3f84077bb36f3827d7dcf6805f64781a17cb075894f0a`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-OPENSEARCH-SERVICE-CAP-D7FAC5F6`, `AMAZON-OPENSEARCH-SERVICE-CAP-9C2F8D88`, `AMAZON-OPENSEARCH-SERVICE-CAP-73E22912`, `AMAZON-OPENSEARCH-SERVICE-CAP-85A6B104`, `AMAZON-OPENSEARCH-SERVICE-CAP-C66CF61A`.

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
| Name / stable ID | **Amazon OpenSearch Service** / `amazon-opensearch-service` | Product catalog |
| Company / category | Amazon Web Services / `search` / `search`, `analytics`, `observability`, `managed-service`, `serverless`, `open-source` | Product catalog |
| Official website / docs | [https://aws.amazon.com/opensearch-service/](https://aws.amazon.com/opensearch-service/) / [https://docs.aws.amazon.com/opensearch-service/](https://docs.aws.amazon.com/opensearch-service/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **search** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-OPENSEARCH-SERVICE-CAP-D7FAC5F6` | managed OpenSearch and legacy Elasticsearch OSS domains | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-OPENSEARCH-SERVICE-CAP-9C2F8D88` | OpenSearch Serverless collections | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-OPENSEARCH-SERVICE-CAP-73E22912` | indexing, search, SQL and PPL analytics | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-OPENSEARCH-SERVICE-CAP-85A6B104` | ingestion pipelines, dashboards, monitoring and alerting | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-OPENSEARCH-SERVICE-CAP-C66CF61A` | IAM, VPC, encryption, snapshots and managed scaling | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Features submenu`, `button: Getting Started submenu`, `button: Resources submenu`, `button: Get started with OpenSearch Service`, `button: Build with OpenSearch Agent Skills`, `button: Integrated retrieval for any use case`, `button: Accelerate AI development`, `button: Flexibility without tradeoff`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Pricing`, `link: Migrations`, `link: Partners`, `link: FAQs`, `link: Products`, `link: Analytics`, `link: OpenSearch`, `link: ZeroETL`, `link: Amazon Bedrock`, `button: Operate at scale with confidence`, `button: Retrieval Augmented Generation (RAG) for agentic and generative AI`, `button: Vector database for semantic and multimodal search`, `button: Intuitive and personalized search`, `button: Real-time logs and observability`, `button: Play:`, `link: A simple black and white icon depicting a vertical bar chart, commonly used to represent analytics or data analysis. Learn how AutoDesk monitors and fixes software problems Read the case study`, `link: A black and white icon of a magnifying glass positioned over a bar graph, representing analytics or data analysis. Learn how Compass simplified and modernized property searches Read the testimonial`, `link: The Pearson company logo with a stylized 'P' inside a blue oval, followed by the word 'Pearson' in black text. Pearson identifies security events and behavior patterns to protect data Read the case study`, `link: The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses an observability solution to monitor and issue alerts Read the case study`, `link: Documentation Amazon OpenSearch Service documentation Read the documentation`, `link: Demo View demos of OpenSearch Service capabilities Watch the demos`, `link: Workshop Build AI-powered search in three steps Read the documentation`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **managed OpenSearch and legacy Elasticsearch OSS domains:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **OpenSearch Serverless collections:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **indexing, search, SQL and PPL analytics:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **ingestion pipelines, dashboards, monitoring and alerting:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **IAM, VPC, encryption, snapshots and managed scaling:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon OpenSearch Service - Managed Retrieval Engine`, `What is Amazon OpenSearch Service`, `Core Features`, `Serverless`, `Benefits of Amazon OpenSearch Service`, `Integrated retrieval for any use case`, `Accelerate AI development`, `Flexibility without tradeoff`, `Operate at scale with confidence`, `Use cases`, `Retrieval Augmented Generation (RAG) for agentic and generative AI`, `Vector database for semantic and multimodal search`, `Intuitive and personalized search`, `Real-time logs and observability`, `Adobe`, `Customers`, `Learn how AutoDesk monitors and fixes software problems`, `Learn how Compass simplified and modernized property searches`, `Pearson identifies security events and behavior patterns to protect data`, `Pinterest uses an observability solution to monitor and issue alerts`, `Go deeper on data and analytics at AWS re:Invent 2026`, `Next steps`, `Amazon OpenSearch Service documentation`, `View demos of OpenSearch Service capabilities`, `Build AI-powered search in three steps` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Features submenu`, `button: Getting Started submenu`, `button: Resources submenu`, `button: Get started with OpenSearch Service`, `button: Build with OpenSearch Agent Skills`, `button: Integrated retrieval for any use case`, `button: Accelerate AI development`, `button: Flexibility without tradeoff`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Pricing`, `link: Migrations`, `link: Partners`, `link: FAQs`, `link: Products`, `link: Analytics`, `link: OpenSearch`, `link: ZeroETL`, `link: Amazon Bedrock`, `button: Operate at scale with confidence`, `button: Retrieval Augmented Generation (RAG) for agentic and generative AI`, `button: Vector database for semantic and multimodal search`, `button: Intuitive and personalized search`, `button: Real-time logs and observability`, `button: Play:`, `link: A simple black and white icon depicting a vertical bar chart, commonly used to represent analytics or data analysis. Learn how AutoDesk monitors and fixes software problems Read the case study`, `link: A black and white icon of a magnifying glass positioned over a bar graph, representing analytics or data analysis. Learn how Compass simplified and modernized property searches Read the testimonial`, `link: The Pearson company logo with a stylized 'P' inside a blue oval, followed by the word 'Pearson' in black text. Pearson identifies security events and behavior patterns to protect data Read the case study`, `link: The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses an observability solution to monitor and issue alerts Read the case study`, `link: Documentation Amazon OpenSearch Service documentation Read the documentation`, `link: Demo View demos of OpenSearch Service capabilities Watch the demos`, `link: Workshop Build AI-powered search in three steps Read the documentation`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/opensearch-service/)`, `[Pricing](/opensearch-service/pricing/)`, `[Migrations](/opensearch-service/migrations/)`, `[Partners](/opensearch-service/partners/)`, `[FAQs](/opensearch-service/faqs/)`, `[Products](/products/)`, `[Analytics](/big-data/datalakes-and-analytics/)`, `[OpenSearch](https://opensearch.org/)`, `[ZeroETL](/blogs/big-data/zero-etl-integrations-with-amazon-opensearch-service/)`, `[Amazon Bedrock](/bedrock/knowledge-bases/)`, `[A simple black and white icon depicting a vertical bar chart, commonly used to represent analytics or data analysis. Learn how AutoDesk monitors and fixes software problems Read the case study](/solutions/case-studies/autodesk-log-analytics/)`, `[A black and white icon of a magnifying glass positioned over a bar graph, representing analytics or data analysis. Learn how Compass simplified and modernized property searches Read the testimonial](/blogs/big-data/simplifying-and-modernizing-home-search-at-compass-with-amazon-es/)`, `[The Pearson company logo with a stylized 'P' inside a blue oval, followed by the word 'Pearson' in black text. Pearson identifies security events and behavior patterns to protect data Read the case study](/solutions/case-studies/pearson-elasticsearch-case-study/)`, `[The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses an observability solution to monitor and issue alerts Read the case study](/solutions/case-studies/pinterest-elasticsearch-case-study/)`, `[Documentation Amazon OpenSearch Service documentation Read the documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html)`, `[Demo View demos of OpenSearch Service capabilities Watch the demos](https://www.youtube.com/@AmazonOpenSearchService/featured)`, `[Workshop Build AI-powered search in three steps Read the documentation](https://catalog.workshops.aws/ai-powered-search/en-US)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)`, `[Product and Technical FAQs](/faqs/?nc1=f_dr)`, `[Analyst Reports](/resources/analyst-reports/?nc1=f_cc)`, `[AWS Partners](/partners/work-with-partners/?nc1=f_dr)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-D7FAC5F6 — managed OpenSearch and legacy Elasticsearch OSS domains
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D7FAC5F6`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-OPENSEARCH-SERVICE-CAP-D7FAC5F6` → `REQ-FUNC-D7FAC5F6` → `TEST-FUNC-D7FAC5F6`.

### REQ-FUNC-9C2F8D88 — OpenSearch Serverless collections
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-9C2F8D88`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-OPENSEARCH-SERVICE-CAP-9C2F8D88` → `REQ-FUNC-9C2F8D88` → `TEST-FUNC-9C2F8D88`.

### REQ-FUNC-73E22912 — indexing, search, SQL and PPL analytics
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-73E22912`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-OPENSEARCH-SERVICE-CAP-73E22912` → `REQ-FUNC-73E22912` → `TEST-FUNC-73E22912`.

### REQ-FUNC-85A6B104 — ingestion pipelines, dashboards, monitoring and alerting
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-85A6B104`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-OPENSEARCH-SERVICE-CAP-85A6B104` → `REQ-FUNC-85A6B104` → `TEST-FUNC-85A6B104`.

### REQ-FUNC-C66CF61A — IAM, VPC, encryption, snapshots and managed scaling
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C66CF61A`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-OPENSEARCH-SERVICE-CAP-C66CF61A` → `REQ-FUNC-C66CF61A` → `TEST-FUNC-C66CF61A`.

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
| [OpenSearch](https://github.com/opensearch-project/OpenSearch) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Open-source search and analytics engine with APIs, indexing, queries and extensions. | Does not provide AWS's managed provisioning, account plane, regional operations, quotas or service integrations by itself. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `AMAZON-OPENSEARCH-SERVICE-CAP-D7FAC5F6` — managed OpenSearch and legacy Elasticsearch OSS domains | Not verified against OpenSearch | None yet; compare with `ev_84785783223c858dcfe3f84077bb36f3827d7dcf6805f64781a17cb075894f0a` | Candidate code path and tests must be inspected |
| `AMAZON-OPENSEARCH-SERVICE-CAP-9C2F8D88` — OpenSearch Serverless collections | Not verified against OpenSearch | None yet; compare with `ev_84785783223c858dcfe3f84077bb36f3827d7dcf6805f64781a17cb075894f0a` | Candidate code path and tests must be inspected |
| `AMAZON-OPENSEARCH-SERVICE-CAP-73E22912` — indexing, search, SQL and PPL analytics | Not verified against OpenSearch | None yet; compare with `ev_84785783223c858dcfe3f84077bb36f3827d7dcf6805f64781a17cb075894f0a` | Candidate code path and tests must be inspected |
| `AMAZON-OPENSEARCH-SERVICE-CAP-85A6B104` — ingestion pipelines, dashboards, monitoring and alerting | Not verified against OpenSearch | None yet; compare with `ev_84785783223c858dcfe3f84077bb36f3827d7dcf6805f64781a17cb075894f0a` | Candidate code path and tests must be inspected |
| `AMAZON-OPENSEARCH-SERVICE-CAP-C66CF61A` — IAM, VPC, encryption, snapshots and managed scaling | Not verified against OpenSearch | None yet; compare with `ev_84785783223c858dcfe3f84077bb36f3827d7dcf6805f64781a17cb075894f0a` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **OpenSearch** (Open-source search and analytics engine with APIs, indexing, queries and extensions.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **OpenSearch** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-D7FAC5F6** → `REQ-FUNC-D7FAC5F6`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-9C2F8D88** → `REQ-FUNC-9C2F8D88`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-73E22912** → `REQ-FUNC-73E22912`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-85A6B104** → `REQ-FUNC-85A6B104`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C66CF61A** → `REQ-FUNC-C66CF61A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-D7FAC5F6, REQ-FUNC-9C2F8D88, REQ-FUNC-73E22912, REQ-FUNC-85A6B104, REQ-FUNC-C66CF61A
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-D7FAC5F6, REQ-FUNC-9C2F8D88, REQ-FUNC-73E22912, REQ-FUNC-85A6B104, REQ-FUNC-C66CF61A
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
- **Completion:** Trace: REQ-FUNC-D7FAC5F6, REQ-FUNC-9C2F8D88, REQ-FUNC-73E22912, REQ-FUNC-85A6B104, REQ-FUNC-C66CF61A; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/opensearch-service/) | 2026-11-02T00:00:00Z | Amazon OpenSearch Service is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/opensearch-service/) | 2026-11-02T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/opensearch-service/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/opensearch-service/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Operations_Amazon_OpenSearch_Service.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://opensearch.org/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_84785783223c858dcfe3f84077bb36f3827d7dcf6805f64781a17cb075894f0a` | Amazon OpenSearch Service Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/opensearch-service/) | 2026-11-03T03:36:44.514Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Features submenu, button: Getting Started submenu, button: Resources submenu, button: Get started with OpenSearch Service, button: Build with OpenSearch Agent Skills, button: Integrated retrieval for any use case, button: Accelerate AI development, button: Flexibility without tradeoff, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Pricing, link: Migrations, link: Partners, link: FAQs, link: Products, link: Analytics, link: OpenSearch, link: ZeroETL, link: Amazon Bedrock, button: Operate at scale with confidence, button: Retrieval Augmented Generation (RAG) for agentic and generative AI, button: Vector database for semantic and multimodal search, button: Intuitive and personalized search, button: Real-time logs and observability, button: Play:, link: A simple black and white icon depicting a vertical bar chart, commonly used to represent analytics or data analysis. Learn how AutoDesk monitors and fixes software problems Read the case study, link: A black and white icon of a magnifying glass positioned over a bar graph, representing analytics or data analysis. Learn how Compass simplified and modernized property searches Read the testimonial, link: The Pearson company logo with a stylized 'P' inside a blue oval, followed by the word 'Pearson' in black text. Pearson identifies security events and behavior patterns to protect data Read the case study, link: The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses an observability solution to monitor and issue alerts Read the case study, link: Documentation Amazon OpenSearch Service documentation Read the documentation, link: Demo View demos of OpenSearch Service capabilities Watch the demos, link: Workshop Build AI-powered search in three steps Read the documentation, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-opensearch-service`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon OpenSearch Service is AWS's managed search, analytics and observability service. It supports managed OpenSearch and legacy Elasticsearch OSS domains, OpenSearch Serverless collections, ingestion pipelines, dashboards, queries, alerting, security and AWS operational integrations. OpenSearch itself is open source, but the AWS service plane is a separate scope.

# 2. Product identity and ownership

- **Official name:** Amazon OpenSearch Service
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Related surfaces:** Domains, OpenSearch Serverless, OpenSearch Ingestion, Dashboards and APIs

# 3. Product capabilities

- Create and manage domains with configurable instances, storage and networking.
- Index and query data using OpenSearch, legacy Elasticsearch-compatible APIs, SQL and PPL.
- Create Serverless collections and ingestion pipelines.
- Use dashboards, monitoring, alerting, snapshots, replication and storage tiers.
- Apply IAM, VPC, encryption and fine-grained access controls.

# 4. Technical architecture

The public model includes managed domains or Serverless collections, OpenSearch nodes and storage, ingestion, dashboards, APIs, IAM/VPC security, CloudWatch and AWS-managed lifecycle operations. Exact provisioning states, scaling algorithms, quotas, compatibility edges and failure recovery remain pending.

# 5. User workflows

Documented workflows include creating a domain or collection, configuring access, ingesting data, indexing documents, querying with OpenSearch/SQL/PPL, viewing dashboards, configuring alerts, taking snapshots and modifying or deleting resources. Complete state transitions, validation errors, retries and cross-service behavior require REA and API testing.

# 6. Pricing and access

Pricing depends on domain instance/storage usage, Serverless compute/OCU usage, ingestion, data transfer and related AWS resources. Current regions, quotas, free-tier eligibility and account permissions must be verified before cost claims.

# 7. API and integration surface

AWS documents console, CLI, SDK, OpenSearch Service API, OpenSearch data APIs, Serverless APIs, Ingestion APIs, dashboards, IAM, VPC, CloudWatch, S3 and snapshot integrations. The complete command and authorization matrix remains pending.

# 8. Existing open-source alternatives

OpenSearch is the primary open-source foundation and covers the core search and analytics engine under Apache 2.0. It does not by itself reproduce AWS provisioning, Serverless, account/region management, quotas, managed scaling, service integrations or operational guarantees.

# 9. Alternative comparison

An independent equivalent should separate the OpenSearch engine from the managed control plane. Evaluate index/query compatibility, plugins, dashboards, ingestion, security, snapshots, scaling, tenancy, observability and recovery independently; do not treat an OpenSearch installation as full AWS service parity.

# 10. Missing capabilities and opportunity analysis

Research must map domain/collection lifecycle states, APIs, authentication, policy evaluation, network modes, node/storage options, autoscaling, Serverless capacity, ingestion transforms, query semantics, snapshots, upgrades, replication, alerts and quotas.

# 11. RAE implementation strategy

Use official AWS pages and documentation for service behavior, and the official OpenSearch repository for the open-source engine. Capture public workflows and authorized test accounts only. Build an independent implementation in the consumer project with original configuration and code, clearly separating engine reuse from AWS-specific service behavior.

# 12. Security, privacy, and compliance

Verify IAM and fine-grained access policies, VPC/public access, TLS, encryption at rest, KMS, snapshots, audit logs, tenant isolation, plugin permissions, data retention and cross-account access.

# 13. Evidence register

- https://aws.amazon.com/opensearch-service/ — official product context.
- https://docs.aws.amazon.com/opensearch-service/ — official capabilities, workflows and references.
- https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html — domain and engine model.
- https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Operations_Amazon_OpenSearch_Service.html — service API reference.
- https://opensearch.org/ — open-source project context.
- https://github.com/opensearch-project/OpenSearch — source repository and license lead.

# 14. Unknowns

- Complete API/CLI/SDK, Serverless and Ingestion operation matrix.
- Exact version compatibility, quotas, scaling and failure semantics.
- Security, tenancy, snapshot and cross-region behavior under all deployment modes.
- Verified implementation boundary between OpenSearch reuse and AWS service-plane behavior.

# 15. Research status

`pending`: identity, public capabilities and the primary open-source foundation are documented, but full REA capture, behavior, limits, security and implementation equivalence remain unverified.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier amazon-opensearch-service` and inspect canonical identity with `npx rae-faang products show amazon-opensearch-service --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang amazon-opensearch-service --out ./amazon-opensearch-service.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit amazon-opensearch-service --out ./amazon-opensearch-service-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-opensearch-service`).
- Dossier: [research/companies/amazon_aws/products/amazon-opensearch-service.md](../../../research/companies/amazon_aws/products/amazon-opensearch-service.md).
- REA capture: [catalog/rea/amazon_aws/amazon-opensearch-service.md](../../rea/amazon_aws/amazon-opensearch-service.md) (2026-11-03T03:36:44.514Z); raw record: [catalog/rea/evidence/amazon-opensearch-service.json](../../rea/evidence/amazon-opensearch-service.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://aws.amazon.com/opensearch-service/) — Amazon OpenSearch Service is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-02T00:00:00Z).
- [Official documentation entry](https://docs.aws.amazon.com/opensearch-service/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-02T00:00:00Z).
- [Additional official source lead](https://aws.amazon.com/opensearch-service/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/opensearch-service/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Operations_Amazon_OpenSearch_Service.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://opensearch.org/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon OpenSearch Service Public web-surface observation (REA)](https://aws.amazon.com/opensearch-service/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Features submenu, button: Getting Started submenu, button: Resources submenu, button: Get started with OpenSearch Service, button: Build with OpenSearch Agent Skills, button: Integrated retrieval for any use case, button: Accelerate AI development, button: Flexibility without tradeoff, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Pricing, link: Migrations, link: Partners, link: FAQs, link: Products, link: Analytics, link: OpenSearch, link: ZeroETL, link: Amazon Bedrock, button: Operate at scale with confidence, button: Retrieval Augmented Generation (RAG) for agentic and generative AI, button: Vector database for semantic and multimodal search, button: Intuitive and personalized search, button: Real-time logs and observability, button: Play:, link: A simple black and white icon depicting a vertical bar chart, commonly used to represent analytics or data analysis. Learn how AutoDesk monitors and fixes software problems Read the case study, link: A black and white icon of a magnifying glass positioned over a bar graph, representing analytics or data analysis. Learn how Compass simplified and modernized property searches Read the testimonial, link: The Pearson company logo with a stylized 'P' inside a blue oval, followed by the word 'Pearson' in black text. Pearson identifies security events and behavior patterns to protect data Read the case study, link: The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses an observability solution to monitor and issue alerts Read the case study, link: Documentation Amazon OpenSearch Service documentation Read the documentation, link: Demo View demos of OpenSearch Service capabilities Watch the demos, link: Workshop Build AI-powered search in three steps Read the documentation, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-03T03:36:44.514Z).
