---
name: aws-ecs
description: "Evidence-aware build skill for ECS (aws-ecs); investigate, assess reuse, implement scoped behavior and verify."
---

# ECS — implementation skill (`aws-ecs`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **ECS**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **ECS** (`aws-ecs`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **ECS** / `aws-ecs` | Product catalog |
| Company / category | Amazon Web Services / `container_orchestration` / `container_orchestration` | Product catalog |
| Official website / docs | [https://aws.amazon.com/ecs/](https://aws.amazon.com/ecs/) / [https://docs.aws.amazon.com/ecs/](https://docs.aws.amazon.com/ecs/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **container_orchestration** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AWS-ECS-CAP-D6172550` | Container scheduling and placement | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AWS-ECS-CAP-6F66C07A` | Service discovery, load balancing, autoscaling | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AWS-ECS-CAP-5DACB09C` | Integrated IAM, logging, secrets | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Features submenu`, `button: Get started with Amazon ECS`, `button: Sign up for an Amazon ECS workshop`, `button: Play:`, `button: Simplify container management at any scale`, `button: Drive high performance, availability, and reliability`, `button: Strengthen application security`, `button: Reduce TCO`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Pricing`, `link: Getting Started`, `link: Resources`, `link: Customers`, `link: Partners`, `link: FAQs`, `link: Products`, `link: Compute`, `button: Application Modernization`, `button: Batch Processing`, `button: Generative AI`, `button: Data Processing`, `button: Hybrid Deployments`, `link: Missing alt text value Learn how United Airlines was able to quickly scale a new feature on its mobile application to respond to surges in customer usage using Amazon ECS with AWS Fargate`, `link: Missing alt text value Learn how the PGA TOUR built a novel ML-powered analytics model delivering Win, Cut Probability analytics across multiple platforms using Amazon ECS with AWS Fargate`, `link: Missing alt text value Learn how Smartsheet boosts deployment frequency and engineering throughput using Amazon ECS and AWS Fargate Read the case study`, `link: Missing alt text value Transforming Infrastructure Management Using AWS with Gordian Read the Gordian case study`, `link: Missing alt text value Learn how financial operations company BILL refactored its infrastructure and supported growth using Amazon ECS with AWS Fargate. Read the BILL case study`, `link: Discover how Amazon ECS works Explore Amazon ECS features`, `link: Explore hands-on training Check out tutorials and guides`, `link: Connect with an expert Contact sales`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Container scheduling and placement:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Service discovery, load balancing, autoscaling:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Integrated IAM, logging, secrets:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon Elastic Container Service`, `Why Amazon ECS?`, `Benefits of Amazon ECS`, `Simplify container management at any scale`, `Drive high performance, availability, and reliability`, `Strengthen application security`, `Reduce TCO`, `Use cases`, `Application Modernization`, `Batch Processing`, `Generative AI`, `Data Processing`, `Hybrid Deployments`, `Customers`, `Learn how United Airlines was able to quickly scale a new feature on its mobile application to respond to surges in customer usage using Amazon ECS with AWS Fargate`, `Learn how the PGA TOUR built a novel ML-powered analytics model delivering Win, Cut Probability analytics across multiple platforms using Amazon ECS with AWS Fargate`, `Learn how Smartsheet boosts deployment frequency and engineering throughput using Amazon ECS and AWS Fargate`, `Transforming Infrastructure Management Using AWS with Gordian`, `Learn how financial operations company BILL refactored its infrastructure and supported growth using Amazon ECS with AWS Fargate.`, `Get started with Amazon ECS`, `Discover how Amazon ECS works`, `Explore hands-on training`, `Connect with an expert`, `Learn`, `Resources` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Features submenu`, `button: Get started with Amazon ECS`, `button: Sign up for an Amazon ECS workshop`, `button: Play:`, `button: Simplify container management at any scale`, `button: Drive high performance, availability, and reliability`, `button: Strengthen application security`, `button: Reduce TCO`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Pricing`, `link: Getting Started`, `link: Resources`, `link: Customers`, `link: Partners`, `link: FAQs`, `link: Products`, `link: Compute`, `button: Application Modernization`, `button: Batch Processing`, `button: Generative AI`, `button: Data Processing`, `button: Hybrid Deployments`, `link: Missing alt text value Learn how United Airlines was able to quickly scale a new feature on its mobile application to respond to surges in customer usage using Amazon ECS with AWS Fargate`, `link: Missing alt text value Learn how the PGA TOUR built a novel ML-powered analytics model delivering Win, Cut Probability analytics across multiple platforms using Amazon ECS with AWS Fargate`, `link: Missing alt text value Learn how Smartsheet boosts deployment frequency and engineering throughput using Amazon ECS and AWS Fargate Read the case study`, `link: Missing alt text value Transforming Infrastructure Management Using AWS with Gordian Read the Gordian case study`, `link: Missing alt text value Learn how financial operations company BILL refactored its infrastructure and supported growth using Amazon ECS with AWS Fargate. Read the BILL case study`, `link: Discover how Amazon ECS works Explore Amazon ECS features`, `link: Explore hands-on training Check out tutorials and guides`, `link: Connect with an expert Contact sales`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/ecs/)`, `[Pricing](/ecs/pricing/)`, `[Getting Started](/ecs/getting-started/)`, `[Resources](/ecs/resources/)`, `[Customers](/ecs/customers/)`, `[Partners](/ecs/partners/)`, `[FAQs](/ecs/faqs/)`, `[Products](/products/)`, `[Compute](/products/compute/)`, `[Missing alt text value Learn how United Airlines was able to quickly scale a new feature on its mobile application to respond to surges in customer usage using Amazon ECS with AWS Fargate](https://aws.amazon.com/solutions/case-studies/united-airlines-ecs-case-study/)`, `[Missing alt text value Learn how the PGA TOUR built a novel ML-powered analytics model delivering Win, Cut Probability analytics across multiple platforms using Amazon ECS with AWS Fargate](https://aws.amazon.com/solutions/case-studies/pga-tour-ecs-case-study/)`, `[Missing alt text value Learn how Smartsheet boosts deployment frequency and engineering throughput using Amazon ECS and AWS Fargate Read the case study](https://aws.amazon.com/solutions/case-studies/smartsheet-ecs-fargate-case-study/)`, `[Missing alt text value Transforming Infrastructure Management Using AWS with Gordian Read the Gordian case study](/solutions/case-studies/gordian-case-study/)`, `[Missing alt text value Learn how financial operations company BILL refactored its infrastructure and supported growth using Amazon ECS with AWS Fargate. Read the BILL case study](https://aws.amazon.com/solutions/case-studies/bill-ecs-case-study/)`, `[Discover how Amazon ECS works Explore Amazon ECS features](/ecs/features/)`, `[Explore hands-on training Check out tutorials and guides](/ecs/getting-started/)`, `[Connect with an expert Contact sales](/contact-us/sales-support/?pg=ln&sec=gs)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)`, `[Product and Technical FAQs](/faqs/?nc1=f_dr)`, `[Analyst Reports](/resources/analyst-reports/?nc1=f_cc)`, `[AWS Partners](/partners/work-with-partners/?nc1=f_dr)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-D6172550 — Container scheduling and placement
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D6172550`; fixture and expected output must be specified from evidence.
- **Trace:** `AWS-ECS-CAP-D6172550` → `REQ-FUNC-D6172550` → `TEST-FUNC-D6172550`.

### REQ-FUNC-6F66C07A — Service discovery, load balancing, autoscaling
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-6F66C07A`; fixture and expected output must be specified from evidence.
- **Trace:** `AWS-ECS-CAP-6F66C07A` → `REQ-FUNC-6F66C07A` → `TEST-FUNC-6F66C07A`.

### REQ-FUNC-5DACB09C — Integrated IAM, logging, secrets
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-5DACB09C`; fixture and expected output must be specified from evidence.
- **Trace:** `AWS-ECS-CAP-5DACB09C` → `REQ-FUNC-5DACB09C` → `TEST-FUNC-5DACB09C`.

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
| [Kubernetes](https://kubernetes.io/) | [Repository](https://github.com/kubernetes/kubernetes) | Apache-2.0 (unverified) | The dominant open container orchestrator. | Broader and more complex than ECS. | Proposed evaluation lead; no verified foundation |
| [HashiCorp Nomad](https://developer.hashicorp.com/nomad) | Not recorded | BUSL-1.1 (source-available) (unverified) | Simpler scheduler for containers and VMs. | Relicensed to BUSL — not OSI open source. | Proposed evaluation lead; no verified foundation |
| [Docker Swarm](https://docs.docker.com/engine/swarm/) | Not recorded | Apache-2.0 (unverified) | Simple built-in container orchestration. | Lightweight. | Proposed evaluation lead; no verified foundation |
| [Apache Mesos](https://mesos.apache.org/) | Not recorded | Apache-2.0 (unverified) | Cluster resource scheduler. | Largely superseded by Kubernetes. | Proposed evaluation lead; no verified foundation |

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

- **TEST-FUNC-D6172550** → `REQ-FUNC-D6172550`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-6F66C07A** → `REQ-FUNC-6F66C07A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-5DACB09C** → `REQ-FUNC-5DACB09C`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-D6172550, REQ-FUNC-6F66C07A, REQ-FUNC-5DACB09C
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-D6172550, REQ-FUNC-6F66C07A, REQ-FUNC-5DACB09C
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
- **Completion:** Trace: REQ-FUNC-D6172550, REQ-FUNC-6F66C07A, REQ-FUNC-5DACB09C; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/ecs/) | Not recorded | ECS is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/ecs/) | Not recorded | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `ev_30ff92fcf5a954e857654d0158042913f06b69fb68f5398c883fcb736f28d9dd` | ECS Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/ecs/) | 2026-10-13T18:58:39.152Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Features submenu, button: Get started with Amazon ECS, button: Sign up for an Amazon ECS workshop, button: Play:, button: Simplify container management at any scale, button: Drive high performance, availability, and reliability, button: Strengthen application security, button: Reduce TCO, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Pricing, link: Getting Started, link: Resources, link: Customers, link: Partners, link: FAQs, link: Products, link: Compute, button: Application Modernization, button: Batch Processing, button: Generative AI, button: Data Processing, button: Hybrid Deployments, link: Missing alt text value Learn how United Airlines was able to quickly scale a new feature on its mobile application to respond to surges in customer usage using Amazon ECS with AWS Fargate, link: Missing alt text value Learn how the PGA TOUR built a novel ML-powered analytics model delivering Win, Cut Probability analytics across multiple platforms using Amazon ECS with AWS Fargate, link: Missing alt text value Learn how Smartsheet boosts deployment frequency and engineering throughput using Amazon ECS and AWS Fargate Read the case study, link: Missing alt text value Transforming Infrastructure Management Using AWS with Gordian Read the Gordian case study, link: Missing alt text value Learn how financial operations company BILL refactored its infrastructure and supported growth using Amazon ECS with AWS Fargate. Read the BILL case study, link: Discover how Amazon ECS works Explore Amazon ECS features, link: Explore hands-on training Check out tutorials and guides, link: Connect with an expert Contact sales, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `aws-ecs`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that supports Docker containers. It allows running containerized applications without managing the underlying control plane. ECS integrates deeply with AWS services (ALB, CloudWatch, IAM, ECR, Fargate) and offers two launch types: EC2 (customer-managed instances) and Fargate (serverless).

# 2. Product identity and ownership

- **Official name:** Amazon Elastic Container Service (ECS)
- **Company and business unit:** Amazon Web Services (Containers)
- **Parent organization:** Amazon.com Inc. (via amazon_aws)
- **Original launch date:** 2014 (EC2 launch type), 2017 (Fargate)
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; AWS-native service
- **Related products:** EKS, Fargate, ECR, App Runner, App Mesh, Cloud Map, Copilot, CDK, CodePipeline
- **Official website:** https://aws.amazon.com/ecs/
- **Official documentation:** https://docs.aws.amazon.com/ecs/

# 3. Product capabilities

- **Orchestration:** Task definitions (JSON), Services (desired count, deployment circuit breaker), Tasks (run once)
- **Launch types:** EC2 (customer manages instances), Fargate (serverless, per-task billing), External (ECS Anywhere)
- **Networking:** awsvpc (ENI per task, own IP), bridge, host, none; Service Connect (service mesh lite), VPC Lattice integration
- **Load balancing:** ALB (Application Load Balancer), NLB (Network Load Balancer), Service discovery (Cloud Map)
- **Scheduling:** Strategies (REPLICA, DAEMON), placement constraints, placement strategies (binpack, spread, random)
- **Scaling:** Service Auto Scaling (target tracking, step scaling), Cluster Auto Scaling (EC2 capacity providers), Fargate auto-scale
- **Storage:** EBS volumes, EFS, FSx, Docker volumes, bind mounts
- **Secrets/Config:** AWS Secrets Manager, Systems Manager Parameter Store, environment variables, Docker configs/secrets
- **Logging:** CloudWatch Logs (awslogs driver), FireLens (Fluent Bit/Fluentd sidecar), Splunk, Datadog
- **Monitoring:** CloudWatch Container Insights, EventBridge events, Health checks (ELB, container)
- **Deployment:** Rolling update, Blue/Green (CodeDeploy), Circuit breaker, External deployment controller
- **Security:** IAM roles for tasks (IRSA), task execution role, network policies (Security Groups), Fargate isolation
- **ECS Anywhere:** Register on-premises/edge servers as external instances
- **Copilot CLI:** Opinionated CLI for CI/CD, environments, pipelines
- **Service Connect:** Built-in service discovery, load balancing, observability (no sidecar)
- **Capacity Providers:** Manage EC2 Auto Scaling Groups or Fargate capacity

# 4. Technical architecture

- **Control plane:** AWS-managed (highly available, multi-AZ), no customer access
- **Data plane:** Customer VPC
  - **EC2:** Customer-managed EC2 instances running ECS container agent
  - **Fargate:** AWS-managed microVMs (Firecracker), per-task isolation
  - **External:** Customer-managed servers with SSM agent + ECS agent
- **Container agent:** Open-source (Golang), runs on each instance, communicates with control plane
- **Task execution:** Pull images (ECR/public), create containers, configure networking, start health checks
- **Service scheduler:** Maintains desired count, handles deployment, placement, health
- **No Kubernetes API; proprietary orchestration API**

# 5. User workflows

Define task definition (CPU, memory, image, ports, env, volumes, logging) → Create service (desired count, launch type, networking, LB) → Deploy (rolling/blue-green) → Monitor (Insights, logs) → Scale (auto/manual). CI/CD: CodePipeline + Copilot, or GitHub Actions/GitLab CI with ECS Deploy action. Local dev: ECS CLI (deprecated), Docker Compose → ECS Compose-X, or localstack.

# 6. Pricing and access

- **Fargate:** Per vCPU-second and GB-second (Linux/Windows), no charge for stopped tasks
- **EC2:** Pay for EC2 instances (On-Demand, Reserved, Spot, Savings Plans) + EBS; no ECS control plane charge
- **ECS Anywhere:** $0.01025 per instance-hour (managed instances)
- **Data transfer:** Standard AWS rates
- **Free tier:** Fargate: 1 month 1 vCPU/2GB (Linux), EC2: 750 hrs t3.micro (EC2 free tier)

# 7. API and integration surface

- **ECS API:** REST/HTTP (CreateService, RunTask, UpdateService, etc.)
- **AWS SDKs:** All languages
- **CLI:** aws ecs, aws ecs execute-command (exec into container)
- **CloudFormation/CDK/Terraform:** Full support
- **Copilot CLI:** `copilot init`, `deploy`, `pipeline`, `svc`
- **EventBridge:** Task/Service/Container instance state change events
- **App Mesh / Cloud Map:** Service mesh and discovery APIs
- **ECS Exec:** Interactive shell via SSM Session Manager

# 8. Existing open-source alternatives

- **Kubernetes (EKS, GKE, AKS, self-managed):** De facto standard, vast ecosystem, steep learning curve
- **Nomad (HashiCorp):** Simple, flexible, HCL config, supports non-container workloads, smaller ecosystem
- **Docker Swarm:** Built into Docker, simple, limited features, declining adoption
- **K3s / k0s / Talos / MicroK8s:** Lightweight Kubernetes distributions
- **Apache Mesos / Marathon:** Legacy, rarely used for new projects
- **Open-source ECS-compatible:** No direct equivalent; ECS API is proprietary
- **Local development:** localstack (mocks ECS API), kind/k3d (K8s locally)

# 9. Alternative comparison

Kubernetes is the dominant alternative with massive ecosystem, portability, and community. Nomad is simpler for mixed workloads but lacks ecosystem. ECS advantages: AWS integration (IAM, ALB, CloudWatch, Fargate), simpler mental model (no pods, no control plane), Copilot for developer experience. ECS disadvantages: Vendor lock-in, no Kubernetes API, limited third-party tooling.

# 10. Missing capabilities and opportunity analysis

Proprietary API (not Kubernetes), no multi-cloud control plane, Fargate serverless unique to AWS, Service Connect (lightweight mesh) vs full Istio/Linkerd. An open alternative could build an ECS-compatible API on Kubernetes (like EKS-Distro) or focus on Nomad with AWS provider improvements.

# 11. RAE implementation strategy

Not feasible to replicate ECS control plane. Strategy: Use Kubernetes (EKS, K3s, Talos) as the open orchestration layer. For ECS-like DX: Use Copilot-inspired tooling on K8s (e.g., `copter`, `garden`, `kluctl`). For Fargate-like serverless: Kata Containers, gVisor, or Firecracker on K8s (Kata Operator, KubeVirt). For Service Connect: Istio/Linkerd/Cilium Service Mesh.

# 12. Security, privacy, and compliance

IRSA (IAM Roles for Service Accounts), task-level IAM roles, VPC isolation, Security Groups, Secrets Manager integration, Fargate microVM isolation, image scanning (ECR Basic/Enhanced), compliance: SOC, PCI, HIPAA, FedRAMP, ISO. Open alternative on K8s: IRSA equivalent (K8s Service Accounts + OIDC + Cloud Provider), Kyverno/OPA for policy, cosign for signing, Falco for runtime security.

# 13. Sources and evidence

- https://aws.amazon.com/ecs/ (product page)
- https://docs.aws.amazon.com/ecs/ (documentation)
- https://github.com/aws/amazon-ecs-agent (open-source agent)
- https://kubernetes.io/ (alternative)
- https://www.nomadproject.io/ (alternative)

# 14. Open questions

- Can an ECS-compatible API on Kubernetes reduce migration friction?
- What is the simplest path to Fargate-like serverless containers on open infrastructure?
- How to replicate Copilot's opinionated DX on open-source K8s?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Kubernetes is the answer for open orchestration. The gap is developer experience (Copilot) and serverless (Fargate). Tools like `garden.io`, `kluctl`, `kluctl`, `copter` aim at DX. Kata Containers + K8s ≈ Fargate.

---

# 17. RAE implementation strategy (continued)

Phase 1: K8s cluster (Talos/K3s/EKS) with GitOps (Flux/ArgoCD). Phase 2: Developer CLI (Copilot-like) for service scaffolding, deploy, pipeline. Phase 3: Serverless containers via Kata Containers / Firecracker-containerd. Phase 4: Service mesh (Cilium/Istio) for Service Connect parity. Phase 5: ECS API compatibility layer (optional, for migration).

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier aws-ecs` and inspect canonical identity with `npx rae-faang products show aws-ecs --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang aws-ecs --out ./aws-ecs.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit aws-ecs --out ./aws-ecs-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`aws-ecs`).
- Dossier: [research/companies/amazon_aws/products/aws-ecs.md](../../../research/companies/amazon_aws/products/aws-ecs.md).
- REA capture: [catalog/rea/amazon_aws/aws-ecs.md](../../rea/amazon_aws/aws-ecs.md) (2026-10-13T18:58:39.152Z); raw record: [catalog/rea/evidence/aws-ecs.json](../../rea/evidence/aws-ecs.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://aws.amazon.com/ecs/) — ECS is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Official documentation entry](https://docs.aws.amazon.com/ecs/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed Not recorded).
- [ECS Public web-surface observation (REA)](https://aws.amazon.com/ecs/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Features submenu, button: Get started with Amazon ECS, button: Sign up for an Amazon ECS workshop, button: Play:, button: Simplify container management at any scale, button: Drive high performance, availability, and reliability, button: Strengthen application security, button: Reduce TCO, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Pricing, link: Getting Started, link: Resources, link: Customers, link: Partners, link: FAQs, link: Products, link: Compute, button: Application Modernization, button: Batch Processing, button: Generative AI, button: Data Processing, button: Hybrid Deployments, link: Missing alt text value Learn how United Airlines was able to quickly scale a new feature on its mobile application to respond to surges in customer usage using Amazon ECS with AWS Fargate, link: Missing alt text value Learn how the PGA TOUR built a novel ML-powered analytics model delivering Win, Cut Probability analytics across multiple platforms using Amazon ECS with AWS Fargate, link: Missing alt text value Learn how Smartsheet boosts deployment frequency and engineering throughput using Amazon ECS and AWS Fargate Read the case study, link: Missing alt text value Transforming Infrastructure Management Using AWS with Gordian Read the Gordian case study, link: Missing alt text value Learn how financial operations company BILL refactored its infrastructure and supported growth using Amazon ECS with AWS Fargate. Read the BILL case study, link: Discover how Amazon ECS works Explore Amazon ECS features, link: Explore hands-on training Check out tutorials and guides, link: Connect with an expert Contact sales, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-10-13T18:58:39.152Z).
