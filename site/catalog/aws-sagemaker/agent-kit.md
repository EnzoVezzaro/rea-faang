---
name: aws-sagemaker
description: "Evidence-aware build skill for SageMaker (aws-sagemaker); investigate, assess reuse, implement scoped behavior and verify."
---

# SageMaker — implementation skill (`aws-sagemaker`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **SageMaker**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **SageMaker** (`aws-sagemaker`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **SageMaker** / `aws-sagemaker` | Product catalog |
| Company / category | Amazon Web Services / `data_platform` / `ml-platform` | Product catalog |
| Official website / docs | [https://aws.amazon.com/sagemaker/](https://aws.amazon.com/sagemaker/) / Not recorded | URL lead; compiler does not fetch source |
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
| `AWS-SAGEMAKER-CAP-7E7A58AE` | Managed notebooks | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AWS-SAGEMAKER-CAP-15DD8D48` | Training at scale | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AWS-SAGEMAKER-CAP-C18D424A` | Model deployment endpoints | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Unified Studio submenu`, `button: Get started with SageMaker`, `button: Try a demo`, `button: Play:`, `button: Close`, `button: Develop and scale AI models with SageMaker AI (formerly Amazon SageMaker)`, `button: Build with all your tools for analytics and AI in SageMaker Unified Studio`, `button: Reduce data silos and unify all your data with a lakehouse architecture`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: AI`, `link: Catalog`, `link: Customers`, `link: Lakehouse architecture`, `link: Pricing`, `link: FAQs`, `link: Products`, `link: Analytics`, `link: AI and ML Build, train, and deploy ML models—including FMs—for any use case with fully managed infrastructure, tools, and workflows. Learn more`, `link: Unified Studio Build with all your data and tools for analytics and AI in a single development environment with SageMaker Unified Studio Learn more`, `link: Catalog Securely discover, govern, and collaborate on data and AI with SageMaker Catalog, built on Amazon DataZone Learn more`, `link: Lakehouse Unify data access across Amazon S3 data lakes, Amazon Redshift data warehouses, and third-party and federated data sources with SageMaker Lakehouse Learn more`, `link: SageMaker AI`, `link: HyperPod`, `link: JumpStart`, `link: MLOps`, `link: Amazon Q Developer`, `link: Register for the beta exam`, `button: Meet your enterprise security needs with end-to-end data and AI governance`, `button: Zoom out`, `button: Zoom in`, `button: Full screen`, `link: Model development Build, train, and deploy ML and FMs with fully managed infrastructure, tools, and workflows with Amazon SageMaker AI Learn more`, `link: Generative AI application development Build and scale generative AI applications with Amazon Bedrock Learn more`, `link: SQL analytics Gain insights with Amazon Redshift, the most price-performant SQL engine Learn more`, `link: Data processing Analyze, prepare, and integrate data for analytics and AI using open source frameworks on Amazon Athena, Amazon EMR, and AWS Glue Learn more`, `button: Play`, `link: FAQs Read the FAQs Visit FAQs`, `link: Blog Learn more about the new serverless notebook with built-in AI agent Read more`, `link: Console Start building with SageMaker Get started`, `link: Pricing Learn more about SageMaker pricing Learn more`, `button: Yes, give us positive feedback`, `button: No, give us constructive feedback`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Managed notebooks:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Training at scale:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Model deployment endpoints:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon SageMaker`, `An integrated experience for analytics and AI`, `AI and ML`, `Unified Studio`, `Catalog`, `Lakehouse`, `Overview`, `Benefits`, `Develop and scale AI models with SageMaker AI (formerly Amazon SageMaker)`, `Build with all your tools for analytics and AI in SageMaker Unified Studio`, `Reduce data silos and unify all your data with a lakehouse architecture`, `Meet your enterprise security needs with end-to-end data and AI governance`, `Meet the next generation of SageMaker`, `Capabilities of SageMaker Unified Studio`, `Model development`, `Generative AI application development`, `SQL analytics`, `Data processing`, `See the next generation of Amazon SageMaker in action`, `Customers`, `Toyota`, `Next Steps`, `Read the FAQs`, `Learn more about the new serverless notebook with built-in AI agent`, `Start building with SageMaker` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Unified Studio submenu`, `button: Get started with SageMaker`, `button: Try a demo`, `button: Play:`, `button: Close`, `button: Develop and scale AI models with SageMaker AI (formerly Amazon SageMaker)`, `button: Build with all your tools for analytics and AI in SageMaker Unified Studio`, `button: Reduce data silos and unify all your data with a lakehouse architecture`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: AI`, `link: Catalog`, `link: Customers`, `link: Lakehouse architecture`, `link: Pricing`, `link: FAQs`, `link: Products`, `link: Analytics`, `link: AI and ML Build, train, and deploy ML models—including FMs—for any use case with fully managed infrastructure, tools, and workflows. Learn more`, `link: Unified Studio Build with all your data and tools for analytics and AI in a single development environment with SageMaker Unified Studio Learn more`, `link: Catalog Securely discover, govern, and collaborate on data and AI with SageMaker Catalog, built on Amazon DataZone Learn more`, `link: Lakehouse Unify data access across Amazon S3 data lakes, Amazon Redshift data warehouses, and third-party and federated data sources with SageMaker Lakehouse Learn more`, `link: SageMaker AI`, `link: HyperPod`, `link: JumpStart`, `link: MLOps`, `link: Amazon Q Developer`, `link: Register for the beta exam`, `button: Meet your enterprise security needs with end-to-end data and AI governance`, `button: Zoom out`, `button: Zoom in`, `button: Full screen`, `link: Model development Build, train, and deploy ML and FMs with fully managed infrastructure, tools, and workflows with Amazon SageMaker AI Learn more`, `link: Generative AI application development Build and scale generative AI applications with Amazon Bedrock Learn more`, `link: SQL analytics Gain insights with Amazon Redshift, the most price-performant SQL engine Learn more`, `link: Data processing Analyze, prepare, and integrate data for analytics and AI using open source frameworks on Amazon Athena, Amazon EMR, and AWS Glue Learn more`, `button: Play`, `link: FAQs Read the FAQs Visit FAQs`, `link: Blog Learn more about the new serverless notebook with built-in AI agent Read more`, `link: Console Start building with SageMaker Get started`, `link: Pricing Learn more about SageMaker pricing Learn more`, `button: Yes, give us positive feedback`, `button: No, give us constructive feedback`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/sagemaker/?nc=sn&loc=1)`, `[AI](/sagemaker/ai/)`, `[Catalog](/sagemaker/catalog/)`, `[Customers](/sagemaker/customers/)`, `[Lakehouse architecture](/sagemaker/lakehouse/)`, `[Pricing](/sagemaker/pricing/)`, `[FAQs](/sagemaker/faqs/)`, `[Products](/products/)`, `[Analytics](/big-data/datalakes-and-analytics/)`, `[AI and ML Build, train, and deploy ML models—including FMs—for any use case with fully managed infrastructure, tools, and workflows. Learn more](/sagemaker/ai/)`, `[Unified Studio Build with all your data and tools for analytics and AI in a single development environment with SageMaker Unified Studio Learn more](/sagemaker/unified-studio/)`, `[Catalog Securely discover, govern, and collaborate on data and AI with SageMaker Catalog, built on Amazon DataZone Learn more](/sagemaker/data-ai-governance/)`, `[Lakehouse Unify data access across Amazon S3 data lakes, Amazon Redshift data warehouses, and third-party and federated data sources with SageMaker Lakehouse Learn more](/sagemaker/lakehouse/)`, `[SageMaker AI](/sagemaker/ai/)`, `[HyperPod](/sagemaker/ai/hyperpod/)`, `[JumpStart](/sagemaker/ai/jumpstart/)`, `[MLOps](/sagemaker/ai/mlops/)`, `[Amazon Q Developer](/q/developer/data/)`, `[Register for the beta exam](https://aws.amazon.com/certification/certified-ai-business-strategist/?sc_icampaign=launch_ai-business-strategist_2026&sc_ichannel=ha&sc_iplace=banner&trk=86a1f59c-fa95-4b44-99f1-6fc5ba60886a)`, `[Model development Build, train, and deploy ML and FMs with fully managed infrastructure, tools, and workflows with Amazon SageMaker AI Learn more](/sagemaker/ai/)`, `[Generative AI application development Build and scale generative AI applications with Amazon Bedrock Learn more](/bedrock/unifiedstudio/)`, `[SQL analytics Gain insights with Amazon Redshift, the most price-performant SQL engine Learn more](/redshift/)`, `[Data processing Analyze, prepare, and integrate data for analytics and AI using open source frameworks on Amazon Athena, Amazon EMR, and AWS Glue Learn more](/sagemaker/data-processing/)`, `[FAQs Read the FAQs Visit FAQs](/sagemaker/faqs/)`, `[Blog Learn more about the new serverless notebook with built-in AI agent Read more](/blogs/aws/new-one-click-onboarding-and-notebooks-with-ai-agent-in-amazon-sagemaker-unified-studio/)`, `[Console Start building with SageMaker Get started](https://console.aws.amazon.com/datazone)`, `[Pricing Learn more about SageMaker pricing Learn more](/sagemaker/pricing/)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-7E7A58AE — Managed notebooks
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-7E7A58AE`; fixture and expected output must be specified from evidence.
- **Trace:** `AWS-SAGEMAKER-CAP-7E7A58AE` → `REQ-FUNC-7E7A58AE` → `TEST-FUNC-7E7A58AE`.

### REQ-FUNC-15DD8D48 — Training at scale
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-15DD8D48`; fixture and expected output must be specified from evidence.
- **Trace:** `AWS-SAGEMAKER-CAP-15DD8D48` → `REQ-FUNC-15DD8D48` → `TEST-FUNC-15DD8D48`.

### REQ-FUNC-C18D424A — Model deployment endpoints
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C18D424A`; fixture and expected output must be specified from evidence.
- **Trace:** `AWS-SAGEMAKER-CAP-C18D424A` → `REQ-FUNC-C18D424A` → `TEST-FUNC-C18D424A`.

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
| [Kubeflow](https://www.kubeflow.org/) | Not recorded | Apache-2.0 (unverified) | ML toolkit on Kubernetes. | No limitation recorded | Proposed evaluation lead; no verified foundation |
| [MLflow](https://mlflow.org/) | Not recorded | Apache-2.0 (unverified) | Experiment tracking and model registry. | No limitation recorded | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-7E7A58AE** → `REQ-FUNC-7E7A58AE`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-15DD8D48** → `REQ-FUNC-15DD8D48`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C18D424A** → `REQ-FUNC-C18D424A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-7E7A58AE, REQ-FUNC-15DD8D48, REQ-FUNC-C18D424A
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-7E7A58AE, REQ-FUNC-15DD8D48, REQ-FUNC-C18D424A
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
- **Completion:** Trace: REQ-FUNC-7E7A58AE, REQ-FUNC-15DD8D48, REQ-FUNC-C18D424A; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/sagemaker/) | Not recorded | SageMaker is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_622fb72a79d46d2d45f6b540a81b6028b1926469e60c53f4af6ddca3905970b1` | SageMaker Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/sagemaker/) | 2026-10-14T03:56:08.421Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Unified Studio submenu, button: Get started with SageMaker, button: Try a demo, button: Play:, button: Close, button: Develop and scale AI models with SageMaker AI (formerly Amazon SageMaker), button: Build with all your tools for analytics and AI in SageMaker Unified Studio, button: Reduce data silos and unify all your data with a lakehouse architecture, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: AI, link: Catalog, link: Customers, link: Lakehouse architecture, link: Pricing, link: FAQs, link: Products, link: Analytics, link: AI and ML Build, train, and deploy ML models—including FMs—for any use case with fully managed infrastructure, tools, and workflows. Learn more, link: Unified Studio Build with all your data and tools for analytics and AI in a single development environment with SageMaker Unified Studio Learn more, link: Catalog Securely discover, govern, and collaborate on data and AI with SageMaker Catalog, built on Amazon DataZone Learn more, link: Lakehouse Unify data access across Amazon S3 data lakes, Amazon Redshift data warehouses, and third-party and federated data sources with SageMaker Lakehouse Learn more, link: SageMaker AI, link: HyperPod, link: JumpStart, link: MLOps, link: Amazon Q Developer, link: Register for the beta exam, button: Meet your enterprise security needs with end-to-end data and AI governance, button: Zoom out, button: Zoom in, button: Full screen, link: Model development Build, train, and deploy ML and FMs with fully managed infrastructure, tools, and workflows with Amazon SageMaker AI Learn more, link: Generative AI application development Build and scale generative AI applications with Amazon Bedrock Learn more, link: SQL analytics Gain insights with Amazon Redshift, the most price-performant SQL engine Learn more, link: Data processing Analyze, prepare, and integrate data for analytics and AI using open source frameworks on Amazon Athena, Amazon EMR, and AWS Glue Learn more, button: Play, link: FAQs Read the FAQs Visit FAQs, link: Blog Learn more about the new serverless notebook with built-in AI agent Read more, link: Console Start building with SageMaker Get started, link: Pricing Learn more about SageMaker pricing Learn more, button: Yes, give us positive feedback, button: No, give us constructive feedback, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `aws-sagemaker`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

SageMaker is AWS's platform for building, training and deploying machine-learning models.

---

# 2. Product identity and ownership

- **Official name:** SageMaker
- **Company and business unit:** amazon_aws
- **Current lifecycle status:** active
- **Official website:** https://aws.amazon.com/sagemaker/

---

# 3. Product capabilities

- Managed notebooks
- Training at scale
- Model deployment endpoints

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

Open-source candidates exist: Kubeflow (Apache-2.0) — ML toolkit on Kubernetes.; MLflow (Apache-2.0) — Experiment tracking and model registry.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Open ML platforms exist (Kubeflow, MLflow); the turnkey managed experience is the gap.

---

# 10. Missing capabilities and opportunity analysis

Open ML platforms exist (Kubeflow, MLflow); the turnkey managed experience is the gap.

---

# 11. RAE implementation strategy

Partial. Kubeflow and MLflow cover the workflow; integration polish differs.

---

# 12. Security, privacy, and compliance

Not yet researched.

---

# 13. Sources and evidence

- https://www.kubeflow.org/
- https://mlflow.org/

---

# 14. Open questions

- Full feature inventory and technical architecture are not yet researched.

---

# 15. Research history

- v1: dossier created; research pending.

---

# 16. Alternative comparison (continued)

Open ML platforms exist (Kubeflow, MLflow); the turnkey managed experience is the gap.

---

# 17. RAE implementation strategy (continued)

Partial. Kubeflow and MLflow cover the workflow; integration polish differs.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier aws-sagemaker` and inspect canonical identity with `npx rae-faang products show aws-sagemaker --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang aws-sagemaker --out ./aws-sagemaker.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit aws-sagemaker --out ./aws-sagemaker-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`aws-sagemaker`).
- Dossier: [research/companies/amazon_aws/products/aws-sagemaker.md](../../../research/companies/amazon_aws/products/aws-sagemaker.md).
- REA capture: [catalog/rea/amazon_aws/aws-sagemaker.md](../../rea/amazon_aws/aws-sagemaker.md) (2026-10-14T03:56:08.421Z); raw record: [catalog/rea/evidence/aws-sagemaker.json](../../rea/evidence/aws-sagemaker.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://aws.amazon.com/sagemaker/) — SageMaker is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [SageMaker Public web-surface observation (REA)](https://aws.amazon.com/sagemaker/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Unified Studio submenu, button: Get started with SageMaker, button: Try a demo, button: Play:, button: Close, button: Develop and scale AI models with SageMaker AI (formerly Amazon SageMaker), button: Build with all your tools for analytics and AI in SageMaker Unified Studio, button: Reduce data silos and unify all your data with a lakehouse architecture, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: AI, link: Catalog, link: Customers, link: Lakehouse architecture, link: Pricing, link: FAQs, link: Products, link: Analytics, link: AI and ML Build, train, and deploy ML models—including FMs—for any use case with fully managed infrastructure, tools, and workflows. Learn more, link: Unified Studio Build with all your data and tools for analytics and AI in a single development environment with SageMaker Unified Studio Learn more, link: Catalog Securely discover, govern, and collaborate on data and AI with SageMaker Catalog, built on Amazon DataZone Learn more, link: Lakehouse Unify data access across Amazon S3 data lakes, Amazon Redshift data warehouses, and third-party and federated data sources with SageMaker Lakehouse Learn more, link: SageMaker AI, link: HyperPod, link: JumpStart, link: MLOps, link: Amazon Q Developer, link: Register for the beta exam, button: Meet your enterprise security needs with end-to-end data and AI governance, button: Zoom out, button: Zoom in, button: Full screen, link: Model development Build, train, and deploy ML and FMs with fully managed infrastructure, tools, and workflows with Amazon SageMaker AI Learn more, link: Generative AI application development Build and scale generative AI applications with Amazon Bedrock Learn more, link: SQL analytics Gain insights with Amazon Redshift, the most price-performant SQL engine Learn more, link: Data processing Analyze, prepare, and integrate data for analytics and AI using open source frameworks on Amazon Athena, Amazon EMR, and AWS Glue Learn more, button: Play, link: FAQs Read the FAQs Visit FAQs, link: Blog Learn more about the new serverless notebook with built-in AI agent Read more, link: Console Start building with SageMaker Get started, link: Pricing Learn more about SageMaker pricing Learn more, button: Yes, give us positive feedback, button: No, give us constructive feedback, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-10-14T03:56:08.421Z).
