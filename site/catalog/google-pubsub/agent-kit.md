---
name: google-pubsub
description: "Evidence-aware build skill for Pub/Sub (google-pubsub); investigate, assess reuse, implement scoped behavior and verify."
---

# Pub/Sub — implementation skill (`google-pubsub`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Pub/Sub**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Pub/Sub** (`google-pubsub`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Pub/Sub** / `google-pubsub` | Product catalog |
| Company / category | Google / `messaging` / `messaging`, `event-streaming` | Product catalog |
| Official website / docs | [https://cloud.google.com/pubsub](https://cloud.google.com/pubsub) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **messaging** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `GOOGLE-PUBSUB-CAP-46D1D574` | Pub/sub messaging at scale | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-PUBSUB-CAP-D906F1CB` | Delivery guarantees | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-PUBSUB-CAP-D9C7F8E2` | Schema support | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Previous slide`, `button: Next slide`, `button: Solution Prompt Search Button`, `button: Search`, `link: Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now.`, `link: Benefits`, `link: Key features`, `link: Customers`, `link: What's new`, `link: Documentation`, `link: Use cases`, `link: Stream analytics`, `link: Asynchronous microservices integration`, `link: Generate a solution`, `link: All features`, `link: Pricing`, `link: Take the next step`, `link: Try Pub/Sub free`, `link: Contact sales`, `link: data warehouse solution`, `link: BigQuery`, `link: Dataflow`, `link: controls`, `link: Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45`, `link: Cloud Storage`, `link: View all features`, `link: CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read`, `link: Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read`, `link: See all customers`, `link: Sign up`, `link: real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video`, `link: Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog`, `link: Learn more`, `link: View all product documentation`, `link: Get a quick intro to using this product.`, `link: Learn to complete specific tasks with this product.`, `link: Browse guides and tutorials for this product.`, `link: View APIs, references, and other resources for this product.`, `link: Release notes Read about the latest releases for Pub/Sub`, `link: stream analytics`, `link: Cloud Functions`, `link: App Engine`, `link: Cloud Run,`, `link: Google Kubernetes Engine`, `link: Compute Engine`, `link: View all technical guides`, `textbox: Solution Prompt Search Text`, `link: Gemini`, `link: pricing guide`, `link: Cloud Platform SKUs`, `link: Find a partner`, `link: See all products`, `link: Google Cloud`, `link: Overview`, `link: Solutions`, `link: Products`, `link: Resources`, `combobox: Search`, `link: Docs`, `link: Support`, `link: Sign in`, `link: Cloud Pub/Sub`, `link: Start free`, `link: Contact us`, `link: Choosing Google Cloud`, `link: Trust and security`, `link: Modern Infrastructure Cloud`, `link: Multicloud`, `link: Global infrastructure`, `link: Locations`, `link: Customers and case studies`, `link: Analyst reports`, `link: Whitepapers`, `link: Blog`, `link: Google Cloud pricing`, `link: Google Workspace pricing`, `link: Infrastructure modernization`, `link: Databases`, `link: Application modernization`, `link: Smart analytics`, `link: Artificial Intelligence`, `link: Security`, `link: Productivity & work transformation`, `link: Industry solutions`, `link: DevOps solutions`, `link: Small business solutions`, `link: See all solutions`, `link: Google Cloud Affiliate Program`, `link: Google Cloud documentation`, `link: Google Cloud quickstarts`, `link: Google Cloud Marketplace`, `link: Learn about cloud computing`, `link: Code samples`, `link: Cloud Architecture Center`, `link: Training`, `link: Certifications`, `link: Google for Developers`, `link: Google Cloud for Startups`, `link: System status`, `link: Release Notes`, `link: Find a Partner`, `link: Become a Partner`, `link: Events`, `link: Podcasts`, `link: Developer Center`, `link: Press Corner`, `link: Google Cloud on YouTube`, `link: Google Cloud Tech on YouTube`, `link: Follow on X`, `link: Join User Research`, `link: We're hiring. Join Google Cloud!`, `link: Community forums`, `link: About Google`, `link: Privacy`, `link: Site terms`, `link: Google Cloud terms`, `link: Subscribe`, `combobox: ‪English‬`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Pub/sub messaging at scale:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Delivery guarantees:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Schema support:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `complementary: Explore more docs 1`, `banner`, `navigation`, `contentinfo`, `navigation: Footer Links`, `navigation: Utility links` | Full IA/routes/authenticated navigation |
| Views/headings | `Pub/Sub`, `High availability made simple`, `No-planning, auto-everything`, `Easy, open foundation for real-time data systems`, `Key features`, `Stream analytics and connectors`, `In-order delivery at scale`, `Simplified streaming ingestion with native integrations`, `Learn from customers using Pub/Sub`, `What's new`, `Documentation`, `What is Pub/Sub?`, `Introduction to Pub/Sub`, `In-order message delivery`, `Not seeing what you’re looking for?`, `Explore more docs`, `Use cases`, `Stream analytics`, `Asynchronous microservices integration`, `All features`, `Pricing`, `Take the next step`, `Need help getting started?`, `Work with a trusted partner`, `Continue browsing` | Results and subsequent views |
| Controls | `button: Previous slide`, `button: Next slide`, `button: Solution Prompt Search Button`, `button: Search`, `link: Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now.`, `link: Benefits`, `link: Key features`, `link: Customers`, `link: What's new`, `link: Documentation`, `link: Use cases`, `link: Stream analytics`, `link: Asynchronous microservices integration`, `link: Generate a solution`, `link: All features`, `link: Pricing`, `link: Take the next step`, `link: Try Pub/Sub free`, `link: Contact sales`, `link: data warehouse solution`, `link: BigQuery`, `link: Dataflow`, `link: controls`, `link: Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45`, `link: Cloud Storage`, `link: View all features`, `link: CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read`, `link: Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read`, `link: See all customers`, `link: Sign up`, `link: real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video`, `link: Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog`, `link: Learn more`, `link: View all product documentation`, `link: Get a quick intro to using this product.`, `link: Learn to complete specific tasks with this product.`, `link: Browse guides and tutorials for this product.`, `link: View APIs, references, and other resources for this product.`, `link: Release notes Read about the latest releases for Pub/Sub`, `link: stream analytics`, `link: Cloud Functions`, `link: App Engine`, `link: Cloud Run,`, `link: Google Kubernetes Engine`, `link: Compute Engine`, `link: View all technical guides`, `textbox: Solution Prompt Search Text`, `link: Gemini`, `link: pricing guide`, `link: Cloud Platform SKUs`, `link: Find a partner`, `link: See all products`, `link: Google Cloud`, `link: Overview`, `link: Solutions`, `link: Products`, `link: Resources`, `combobox: Search`, `link: Docs`, `link: Support`, `link: Sign in`, `link: Cloud Pub/Sub`, `link: Start free`, `link: Contact us`, `link: Choosing Google Cloud`, `link: Trust and security`, `link: Modern Infrastructure Cloud`, `link: Multicloud`, `link: Global infrastructure`, `link: Locations`, `link: Customers and case studies`, `link: Analyst reports`, `link: Whitepapers`, `link: Blog`, `link: Google Cloud pricing`, `link: Google Workspace pricing`, `link: Infrastructure modernization`, `link: Databases`, `link: Application modernization`, `link: Smart analytics`, `link: Artificial Intelligence`, `link: Security`, `link: Productivity & work transformation`, `link: Industry solutions`, `link: DevOps solutions`, `link: Small business solutions`, `link: See all solutions`, `link: Google Cloud Affiliate Program`, `link: Google Cloud documentation`, `link: Google Cloud quickstarts`, `link: Google Cloud Marketplace`, `link: Learn about cloud computing`, `link: Code samples`, `link: Cloud Architecture Center`, `link: Training`, `link: Certifications`, `link: Google for Developers`, `link: Google Cloud for Startups`, `link: System status`, `link: Release Notes`, `link: Find a Partner`, `link: Become a Partner`, `link: Events`, `link: Podcasts`, `link: Developer Center`, `link: Press Corner`, `link: Google Cloud on YouTube`, `link: Google Cloud Tech on YouTube`, `link: Follow on X`, `link: Join User Research`, `link: We're hiring. Join Google Cloud!`, `link: Community forums`, `link: About Google`, `link: Privacy`, `link: Site terms`, `link: Google Cloud terms`, `link: Subscribe`, `combobox: ‪English‬` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now.](https://cloudonair.withgoogle.com/events/trusted-agents-real-outcomes-agentic-data-cloud)`, `[Benefits](/pubsub#benefits)`, `[Key features](/pubsub#key-features)`, `[Customers](/pubsub#customers)`, `[What's new](/pubsub#whats-new)`, `[Documentation](/pubsub#documentation)`, `[Use cases](/pubsub#use-cases)`, `[Stream analytics](/pubsub#stream-analytics)`, `[Asynchronous microservices integration](/pubsub#asynchronous-microservices-integration)`, `[Generate a solution](/pubsub#what-problem-are-you-trying-to-solve)`, `[All features](/pubsub#all-features)`, `[Pricing](/pubsub#pricing)`, `[Take the next step](/pubsub#take-the-next-step)`, `[Try Pub/Sub free](https://console.cloud.google.com/freetrial)`, `[Contact sales](https://cloud.google.com/contact)`, `[data warehouse solution](https://console.cloud.google.com/freetrial?redirectPath=/products/solutions/details/data-warehouse)`, `[BigQuery](https://cloud.google.com/bigquery)`, `[Dataflow](https://cloud.google.com/dataflow)`, `[controls](https://cloud.google.com/pubsub/docs/how-to#operations-and-administration)`, `[Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45](https://www.youtube.com/watch?v=jLI-84UjZLE)`, `[Dataflow](/dataflow/)`, `[BigQuery](https://cloud.google.com/pubsub/docs/bigquery)`, `[Cloud Storage](https://cloud.google.com/pubsub/docs/cloudstorage)`, `[View all features](/pubsub#all-features)`, `[CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read](https://cloud.google.com/customers/cme-group)`, `[Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read](https://cloud.google.com/customers/sky-uk)`, `[See all customers](https://cloud.google.com/customers)`, `[Sign up](https://cloud.google.com/newsletter)`, `[real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video](https://www.youtube.com/watch?v=SKv6bbwSL5I)`, `[Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog](https://cloud.google.com/blog/products/data-analytics/pubsub-highlights-of-2024)`, `[Learn more](/pubsub/docs/overview)`, `[Learn more](https://console.cloud.google.com/?tutorial=pubsub_quickstart)`, `[Learn more](/pubsub/docs/create-topic-client-libraries)`, `[Learn more](/pubsub/docs/ordering)`, `[Learn more](/pubsub/docs/stream-messages-dataflow)`, `[Learn more](https://cloud.google.com/pubsub/docs/publisher)`, `[View all product documentation](/pubsub/docs)`, `[Get a quick intro to using this product.](/pubsub/docs/quickstarts)`, `[Learn to complete specific tasks with this product.](/pubsub/docs/how-to)`, `[Browse guides and tutorials for this product.](/pubsub/docs/tutorials)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-46D1D574 — Pub/sub messaging at scale
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-46D1D574`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-PUBSUB-CAP-46D1D574` → `REQ-FUNC-46D1D574` → `TEST-FUNC-46D1D574`.

### REQ-FUNC-D906F1CB — Delivery guarantees
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D906F1CB`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-PUBSUB-CAP-D906F1CB` → `REQ-FUNC-D906F1CB` → `TEST-FUNC-D906F1CB`.

### REQ-FUNC-D9C7F8E2 — Schema support
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D9C7F8E2`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-PUBSUB-CAP-D9C7F8E2` → `REQ-FUNC-D9C7F8E2` → `TEST-FUNC-D9C7F8E2`.

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
| [NATS](https://nats.io/) | Not recorded | Apache-2.0 (unverified) | High-performance messaging with JetStream persistence. | No limitation recorded | Proposed evaluation lead; no verified foundation |
| [Apache Kafka](https://kafka.apache.org/) | Not recorded | Apache-2.0 (unverified) | Distributed event streaming platform. | No limitation recorded | Proposed evaluation lead; no verified foundation |

No candidate has been independently cloned, executed, license-reviewed or security-reviewed by this generator.
## 10. Security and privacy

No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.

Product-specific review: Never invent cryptography; use an established audited protocol/library and review key/device/membership changes. Do not claim compliance, privacy or security parity without scoped assessment.

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
- **EDGE-009:** Duplicate/out-of-order delivery, key/device or membership change. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-46D1D574** → `REQ-FUNC-46D1D574`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-D906F1CB** → `REQ-FUNC-D906F1CB`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-D9C7F8E2** → `REQ-FUNC-D9C7F8E2`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-46D1D574, REQ-FUNC-D906F1CB, REQ-FUNC-D9C7F8E2
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-46D1D574, REQ-FUNC-D906F1CB, REQ-FUNC-D9C7F8E2
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
- **Completion:** Trace: REQ-FUNC-46D1D574, REQ-FUNC-D906F1CB, REQ-FUNC-D9C7F8E2; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://cloud.google.com/pubsub) | Not recorded | Pub/Sub is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_58973d20756f48b27d3538f7868fe619b601dcd5be33abeea5b00a1040de1aea` | Pub/Sub Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://cloud.google.com/pubsub) | 2026-10-14T03:54:16.305Z | A dated unauthenticated snapshot exposed controls button: Previous slide, button: Next slide, button: Solution Prompt Search Button, button: Search, link: Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now., link: Benefits, link: Key features, link: Customers, link: What's new, link: Documentation, link: Use cases, link: Stream analytics, link: Asynchronous microservices integration, link: Generate a solution, link: All features, link: Pricing, link: Take the next step, link: Try Pub/Sub free, link: Contact sales, link: data warehouse solution, link: BigQuery, link: Dataflow, link: controls, link: Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45, link: Cloud Storage, link: View all features, link: CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read, link: Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read, link: See all customers, link: Sign up, link: real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video, link: Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog, link: Learn more, link: View all product documentation, link: Get a quick intro to using this product., link: Learn to complete specific tasks with this product., link: Browse guides and tutorials for this product., link: View APIs, references, and other resources for this product., link: Release notes Read about the latest releases for Pub/Sub, link: stream analytics, link: Cloud Functions, link: App Engine, link: Cloud Run,, link: Google Kubernetes Engine, link: Compute Engine, link: View all technical guides, textbox: Solution Prompt Search Text, link: Gemini, link: pricing guide, link: Cloud Platform SKUs, link: Find a partner, link: See all products, link: Google Cloud, link: Overview, link: Solutions, link: Products, link: Resources, combobox: Search, link: Docs, link: Support, link: Sign in, link: Cloud Pub/Sub, link: Start free, link: Contact us, link: Choosing Google Cloud, link: Trust and security, link: Modern Infrastructure Cloud, link: Multicloud, link: Global infrastructure, link: Locations, link: Customers and case studies, link: Analyst reports, link: Whitepapers, link: Blog, link: Google Cloud pricing, link: Google Workspace pricing, link: Infrastructure modernization, link: Databases, link: Application modernization, link: Smart analytics, link: Artificial Intelligence, link: Security, link: Productivity & work transformation, link: Industry solutions, link: DevOps solutions, link: Small business solutions, link: See all solutions, link: Google Cloud Affiliate Program, link: Google Cloud documentation, link: Google Cloud quickstarts, link: Google Cloud Marketplace, link: Learn about cloud computing, link: Code samples, link: Cloud Architecture Center, link: Training, link: Certifications, link: Google for Developers, link: Google Cloud for Startups, link: System status, link: Release Notes, link: Find a Partner, link: Become a Partner, link: Events, link: Podcasts, link: Developer Center, link: Press Corner, link: Google Cloud on YouTube, link: Google Cloud Tech on YouTube, link: Follow on X, link: Join User Research, link: We're hiring. Join Google Cloud!, link: Community forums, link: About Google, link: Privacy, link: Site terms, link: Google Cloud terms, link: Subscribe, combobox: ‪English‬ and landmarks complementary: Explore more docs 1, banner, navigation, contentinfo, navigation: Footer Links, navigation: Utility links. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `google-pubsub`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Pub/Sub is Google Cloud's managed messaging and event-streaming service.

---

# 2. Product identity and ownership

- **Official name:** Pub/Sub
- **Company and business unit:** google
- **Current lifecycle status:** active
- **Official website:** https://cloud.google.com/pubsub

---

# 3. Product capabilities

- Pub/sub messaging at scale
- Delivery guarantees
- Schema support

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

Open-source candidates exist: NATS (Apache-2.0) — High-performance messaging with JetStream persistence.; Apache Kafka (Apache-2.0) — Distributed event streaming platform.. Coverage is unverified until the dossier is researched.

---

# 9. Alternative comparison

Messaging is a mature open-source category; the gap is Google's managed operations, not the technology.

---

# 10. Missing capabilities and opportunity analysis

Messaging is a mature open-source category; the gap is Google's managed operations, not the technology.

---

# 11. RAE implementation strategy

Available. NATS and Kafka cover pub/sub and event streaming fully.

---

# 12. Security, privacy, and compliance

Not yet researched.

---

# 13. Sources and evidence

- https://nats.io/
- https://kafka.apache.org/

---

# 14. Open questions

- Full feature inventory and technical architecture are not yet researched.

---

# 15. Research history

- v1: dossier created; research pending.

---

# 16. Alternative comparison (continued)

Messaging is a mature open-source category; the gap is Google's managed operations, not the technology.

---

# 17. RAE implementation strategy (continued)

Available. NATS and Kafka cover pub/sub and event streaming fully.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier google-pubsub` and inspect canonical identity with `npx rae-faang products show google-pubsub --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang google-pubsub --out ./google-pubsub.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit google-pubsub --out ./google-pubsub-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-pubsub`).
- Dossier: [research/companies/google/products/google-pubsub.md](../../../research/companies/google/products/google-pubsub.md).
- REA capture: [catalog/rea/google/google-pubsub.md](../../rea/google/google-pubsub.md) (2026-10-14T03:54:16.305Z); raw record: [catalog/rea/evidence/google-pubsub.json](../../rea/evidence/google-pubsub.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://cloud.google.com/pubsub) — Pub/Sub is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Pub/Sub Public web-surface observation (REA)](https://cloud.google.com/pubsub) — A dated unauthenticated snapshot exposed controls button: Previous slide, button: Next slide, button: Solution Prompt Search Button, button: Search, link: Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now., link: Benefits, link: Key features, link: Customers, link: What's new, link: Documentation, link: Use cases, link: Stream analytics, link: Asynchronous microservices integration, link: Generate a solution, link: All features, link: Pricing, link: Take the next step, link: Try Pub/Sub free, link: Contact sales, link: data warehouse solution, link: BigQuery, link: Dataflow, link: controls, link: Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45, link: Cloud Storage, link: View all features, link: CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read, link: Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read, link: See all customers, link: Sign up, link: real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video, link: Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog, link: Learn more, link: View all product documentation, link: Get a quick intro to using this product., link: Learn to complete specific tasks with this product., link: Browse guides and tutorials for this product., link: View APIs, references, and other resources for this product., link: Release notes Read about the latest releases for Pub/Sub, link: stream analytics, link: Cloud Functions, link: App Engine, link: Cloud Run,, link: Google Kubernetes Engine, link: Compute Engine, link: View all technical guides, textbox: Solution Prompt Search Text, link: Gemini, link: pricing guide, link: Cloud Platform SKUs, link: Find a partner, link: See all products, link: Google Cloud, link: Overview, link: Solutions, link: Products, link: Resources, combobox: Search, link: Docs, link: Support, link: Sign in, link: Cloud Pub/Sub, link: Start free, link: Contact us, link: Choosing Google Cloud, link: Trust and security, link: Modern Infrastructure Cloud, link: Multicloud, link: Global infrastructure, link: Locations, link: Customers and case studies, link: Analyst reports, link: Whitepapers, link: Blog, link: Google Cloud pricing, link: Google Workspace pricing, link: Infrastructure modernization, link: Databases, link: Application modernization, link: Smart analytics, link: Artificial Intelligence, link: Security, link: Productivity & work transformation, link: Industry solutions, link: DevOps solutions, link: Small business solutions, link: See all solutions, link: Google Cloud Affiliate Program, link: Google Cloud documentation, link: Google Cloud quickstarts, link: Google Cloud Marketplace, link: Learn about cloud computing, link: Code samples, link: Cloud Architecture Center, link: Training, link: Certifications, link: Google for Developers, link: Google Cloud for Startups, link: System status, link: Release Notes, link: Find a Partner, link: Become a Partner, link: Events, link: Podcasts, link: Developer Center, link: Press Corner, link: Google Cloud on YouTube, link: Google Cloud Tech on YouTube, link: Follow on X, link: Join User Research, link: We're hiring. Join Google Cloud!, link: Community forums, link: About Google, link: Privacy, link: Site terms, link: Google Cloud terms, link: Subscribe, combobox: ‪English‬ and landmarks complementary: Explore more docs 1, banner, navigation, contentinfo, navigation: Footer Links, navigation: Utility links. (VERIFIED; accessed 2026-10-14T03:54:16.305Z).
