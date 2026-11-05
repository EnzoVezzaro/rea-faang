---
name: google-pubsub
description: "Evidence-aware build skill for Pub/Sub (google-pubsub); investigate, assess reuse, implement scoped behavior and verify."
---

# Pub/Sub — implementation skill (`google-pubsub`)

> **Research status:** researched. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Pub/Sub**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Pub/Sub** (`google-pubsub`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/google-pubsub.md` from the catalog page, or run `npx rea-faang google-pubsub --out ./google-pubsub.md`, `npx rea-faang skills generate google-pubsub` or `npx rea-faang build agent-kit google-pubsub --out ./google-pubsub-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Pub/Sub / `google-pubsub` | `catalog/products.jsonl` |
| Official product URL | [https://cloud.google.com/pubsub](https://cloud.google.com/pubsub) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.cloud.google.com/pubsub/docs/overview](https://docs.cloud.google.com/pubsub/docs/overview) | Catalog record |
| Research dossier | `npx rea-faang research dossier google-pubsub` | `research/companies/google/products/google-pubsub.md` |
| REA report | `catalog/rea/google/google-pubsub.md` (captured 2026-11-03T01:39:11.015Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/google-pubsub.json` (`ev_9707bccc120008e65801f333836bebeac457c035961426a1790b3b2a735e2da1`) | Catalog evidence |
| Alternative candidates | 2 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show google-pubsub --format json` and `npx rea-faang research dossier google-pubsub` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://cloud.google.com/pubsub](https://cloud.google.com/pubsub), captured 2026-11-03T01:39:11.015Z, evidence `ev_9707bccc120008e65801f333836bebeac457c035961426a1790b3b2a735e2da1`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `GOOGLE-PUBSUB-CAP-AABA0167`, `GOOGLE-PUBSUB-CAP-518DC8EB`, `GOOGLE-PUBSUB-CAP-3E329370`, `GOOGLE-PUBSUB-CAP-E1020280`.

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
| Name / stable ID | **Pub/Sub** / `google-pubsub` | Product catalog |
| Company / category | Google / `messaging` / `messaging`, `event-streaming`, `event-bus`, `queues` | Product catalog |
| Official website / docs | [https://cloud.google.com/pubsub](https://cloud.google.com/pubsub) / [https://docs.cloud.google.com/pubsub/docs/overview](https://docs.cloud.google.com/pubsub/docs/overview) | URL lead; compiler does not fetch source |
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
| `GOOGLE-PUBSUB-CAP-AABA0167` | Topics, messages, publishers, subscribers and asynchronous event distribution are documented. | VERIFIED | `ev-google-pubsub-identity`, `ev-google-pubsub-basics` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-PUBSUB-CAP-518DC8EB` | Subscription delivery, acknowledgements, replay and documented delivery guarantees are supported with limits. | VERIFIED | `ev-google-pubsub-subscriptions`, `ev-google-pubsub-exactly-once` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-PUBSUB-CAP-3E329370` | REST/JSON, gRPC, client-library and endpoint surfaces are documented. | VERIFIED | `ev-google-pubsub-apis` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-PUBSUB-CAP-E1020280` | Open-source systems cover messaging and streaming, but managed operations, IAM integration and exact provider semantics are not equivalent. | VERIFIED | `ev-google-pubsub-apis`, `ev-google-pubsub-exactly-once` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Previous slide`, `button: Next slide`, `button: Solution Prompt Search Button`, `button: Search`, `link: Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now.`, `link: Benefits`, `link: Key features`, `link: Customers`, `link: What's new`, `link: Documentation`, `link: Use cases`, `link: Stream analytics`, `link: Asynchronous microservices integration`, `link: Generate a solution`, `link: All features`, `link: Pricing`, `link: Take the next step`, `link: Try Pub/Sub free`, `link: Contact sales`, `link: data warehouse solution`, `link: BigQuery`, `link: Dataflow`, `link: controls`, `link: Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45`, `link: Cloud Storage`, `link: View all features`, `link: CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read`, `link: Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read`, `link: See all customers`, `link: Sign up`, `link: real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video`, `link: Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog`, `link: Learn more`, `link: View all product documentation`, `link: Get a quick intro to using this product.`, `link: Learn to complete specific tasks with this product.`, `link: Browse guides and tutorials for this product.`, `link: View APIs, references, and other resources for this product.`, `link: Release notes Read about the latest releases for Pub/Sub`, `link: stream analytics`, `link: Cloud Functions`, `link: App Engine`, `link: Cloud Run,`, `link: Google Kubernetes Engine`, `link: Compute Engine`, `link: View all technical guides`, `textbox: Solution Prompt Search Text`, `link: Gemini`, `link: pricing guide`, `link: Cloud Platform SKUs`, `link: Find a partner`, `link: See all products`, `link: Google Cloud`, `link: Overview`, `link: Solutions`, `link: Products`, `link: Resources`, `combobox: Search`, `link: Docs`, `link: Support`, `link: Sign in`, `link: Cloud Pub/Sub`, `link: Start free`, `link: Contact us`, `link: Choosing Google Cloud`, `link: Trust and security`, `link: Modern Infrastructure Cloud`, `link: Multicloud`, `link: Global infrastructure`, `link: Locations`, `link: Customers and case studies`, `link: Analyst reports`, `link: Whitepapers`, `link: Blog`, `link: Google Cloud pricing`, `link: Google Workspace pricing`, `link: Infrastructure modernization`, `link: Databases`, `link: Application modernization`, `link: Smart analytics`, `link: Artificial Intelligence`, `link: Security`, `link: Productivity & work transformation`, `link: Industry solutions`, `link: DevOps solutions`, `link: Small business solutions`, `link: See all solutions`, `link: Google Cloud Affiliate Program`, `link: Google Cloud documentation`, `link: Google Cloud quickstarts`, `link: Google Cloud Marketplace`, `link: Learn about cloud computing`, `link: Code samples`, `link: Cloud Architecture Center`, `link: Training`, `link: Builders Hub`, `link: Certifications`, `link: Google for Developers`, `link: Google Cloud for Startups`, `link: System status`, `link: Release Notes`, `link: Find a Partner`, `link: Become a Partner`, `link: Events`, `link: Podcasts`, `link: Developer Center`, `link: Press Corner`, `link: Google Cloud on YouTube`, `link: Google Cloud Tech on YouTube`, `link: Follow on X`, `link: Join User Research`, `link: We're hiring. Join Google Cloud!`, `link: Community forums`, `link: About Google`, `link: Privacy`, `link: Site terms`, `link: Google Cloud terms`, `link: Subscribe`, `combobox: Language Selector`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Topics, messages, publishers, subscribers and asynchronous event distribution are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Subscription delivery, acknowledgements, replay and documented delivery guarantees are supported with limits.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **REST/JSON, gRPC, client-library and endpoint surfaces are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Open-source systems cover messaging and streaming, but managed operations, IAM integration and exact provider semantics are not equivalent.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `complementary: Explore more docs 1`, `banner`, `navigation`, `contentinfo`, `navigation: Footer Links`, `navigation: Utility links` | Full IA/routes/authenticated navigation |
| Views/headings | `Pub/Sub`, `High availability made simple`, `No-planning, auto-everything`, `Easy, open foundation for real-time data systems`, `Key features`, `Stream analytics and connectors`, `In-order delivery at scale`, `Simplified streaming ingestion with native integrations`, `Learn from customers using Pub/Sub`, `What's new`, `Documentation`, `What is Pub/Sub?`, `Introduction to Pub/Sub`, `In-order message delivery`, `Not seeing what you’re looking for?`, `Explore more docs`, `Use cases`, `Stream analytics`, `Asynchronous microservices integration`, `All features`, `Pricing`, `Take the next step`, `Need help getting started?`, `Work with a trusted partner`, `Continue browsing` | Results and subsequent views |
| Controls | `button: Previous slide`, `button: Next slide`, `button: Solution Prompt Search Button`, `button: Search`, `link: Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now.`, `link: Benefits`, `link: Key features`, `link: Customers`, `link: What's new`, `link: Documentation`, `link: Use cases`, `link: Stream analytics`, `link: Asynchronous microservices integration`, `link: Generate a solution`, `link: All features`, `link: Pricing`, `link: Take the next step`, `link: Try Pub/Sub free`, `link: Contact sales`, `link: data warehouse solution`, `link: BigQuery`, `link: Dataflow`, `link: controls`, `link: Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45`, `link: Cloud Storage`, `link: View all features`, `link: CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read`, `link: Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read`, `link: See all customers`, `link: Sign up`, `link: real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video`, `link: Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog`, `link: Learn more`, `link: View all product documentation`, `link: Get a quick intro to using this product.`, `link: Learn to complete specific tasks with this product.`, `link: Browse guides and tutorials for this product.`, `link: View APIs, references, and other resources for this product.`, `link: Release notes Read about the latest releases for Pub/Sub`, `link: stream analytics`, `link: Cloud Functions`, `link: App Engine`, `link: Cloud Run,`, `link: Google Kubernetes Engine`, `link: Compute Engine`, `link: View all technical guides`, `textbox: Solution Prompt Search Text`, `link: Gemini`, `link: pricing guide`, `link: Cloud Platform SKUs`, `link: Find a partner`, `link: See all products`, `link: Google Cloud`, `link: Overview`, `link: Solutions`, `link: Products`, `link: Resources`, `combobox: Search`, `link: Docs`, `link: Support`, `link: Sign in`, `link: Cloud Pub/Sub`, `link: Start free`, `link: Contact us`, `link: Choosing Google Cloud`, `link: Trust and security`, `link: Modern Infrastructure Cloud`, `link: Multicloud`, `link: Global infrastructure`, `link: Locations`, `link: Customers and case studies`, `link: Analyst reports`, `link: Whitepapers`, `link: Blog`, `link: Google Cloud pricing`, `link: Google Workspace pricing`, `link: Infrastructure modernization`, `link: Databases`, `link: Application modernization`, `link: Smart analytics`, `link: Artificial Intelligence`, `link: Security`, `link: Productivity & work transformation`, `link: Industry solutions`, `link: DevOps solutions`, `link: Small business solutions`, `link: See all solutions`, `link: Google Cloud Affiliate Program`, `link: Google Cloud documentation`, `link: Google Cloud quickstarts`, `link: Google Cloud Marketplace`, `link: Learn about cloud computing`, `link: Code samples`, `link: Cloud Architecture Center`, `link: Training`, `link: Builders Hub`, `link: Certifications`, `link: Google for Developers`, `link: Google Cloud for Startups`, `link: System status`, `link: Release Notes`, `link: Find a Partner`, `link: Become a Partner`, `link: Events`, `link: Podcasts`, `link: Developer Center`, `link: Press Corner`, `link: Google Cloud on YouTube`, `link: Google Cloud Tech on YouTube`, `link: Follow on X`, `link: Join User Research`, `link: We're hiring. Join Google Cloud!`, `link: Community forums`, `link: About Google`, `link: Privacy`, `link: Site terms`, `link: Google Cloud terms`, `link: Subscribe`, `combobox: Language Selector` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now.](https://cloudonair.withgoogle.com/events/trusted-agents-real-outcomes-agentic-data-cloud)`, `[Benefits](/pubsub#benefits)`, `[Key features](/pubsub#key-features)`, `[Customers](/pubsub#customers)`, `[What's new](/pubsub#whats-new)`, `[Documentation](/pubsub#documentation)`, `[Use cases](/pubsub#use-cases)`, `[Stream analytics](/pubsub#stream-analytics)`, `[Asynchronous microservices integration](/pubsub#asynchronous-microservices-integration)`, `[Generate a solution](/pubsub#what-problem-are-you-trying-to-solve)`, `[All features](/pubsub#all-features)`, `[Pricing](/pubsub#pricing)`, `[Take the next step](/pubsub#take-the-next-step)`, `[Try Pub/Sub free](https://console.cloud.google.com/freetrial)`, `[Contact sales](https://cloud.google.com/contact)`, `[data warehouse solution](https://console.cloud.google.com/freetrial?redirectPath=/products/solutions/details/data-warehouse)`, `[BigQuery](https://cloud.google.com/bigquery)`, `[Dataflow](https://cloud.google.com/dataflow)`, `[controls](https://cloud.google.com/pubsub/docs/how-to#operations-and-administration)`, `[Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45](https://www.youtube.com/watch?v=jLI-84UjZLE)`, `[Dataflow](/dataflow/)`, `[BigQuery](https://cloud.google.com/pubsub/docs/bigquery)`, `[Cloud Storage](https://cloud.google.com/pubsub/docs/cloudstorage)`, `[View all features](/pubsub#all-features)`, `[CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read](https://cloud.google.com/customers/cme-group)`, `[Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read](https://cloud.google.com/customers/sky-uk)`, `[See all customers](https://cloud.google.com/customers)`, `[Sign up](https://cloud.google.com/newsletter)`, `[real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video](https://www.youtube.com/watch?v=SKv6bbwSL5I)`, `[Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog](https://cloud.google.com/blog/products/data-analytics/pubsub-highlights-of-2024)`, `[Learn more](/pubsub/docs/overview)`, `[Learn more](https://console.cloud.google.com/?tutorial=pubsub_quickstart)`, `[Learn more](/pubsub/docs/create-topic-client-libraries)`, `[Learn more](/pubsub/docs/ordering)`, `[Learn more](/pubsub/docs/stream-messages-dataflow)`, `[Learn more](https://cloud.google.com/pubsub/docs/publisher)`, `[View all product documentation](/pubsub/docs)`, `[Get a quick intro to using this product.](/pubsub/docs/quickstarts)`, `[Learn to complete specific tasks with this product.](/pubsub/docs/how-to)`, `[Browse guides and tutorials for this product.](/pubsub/docs/tutorials)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-AABA0167 — Topics, messages, publishers, subscribers and asynchronous event distribution are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-pubsub-identity`, `ev-google-pubsub-basics`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-AABA0167`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-PUBSUB-CAP-AABA0167` → `REQ-FUNC-AABA0167` → `TEST-FUNC-AABA0167`.

### REQ-FUNC-518DC8EB — Subscription delivery, acknowledgements, replay and documented delivery guarantees are supported with limits.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-pubsub-subscriptions`, `ev-google-pubsub-exactly-once`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-518DC8EB`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-PUBSUB-CAP-518DC8EB` → `REQ-FUNC-518DC8EB` → `TEST-FUNC-518DC8EB`.

### REQ-FUNC-3E329370 — REST/JSON, gRPC, client-library and endpoint surfaces are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-pubsub-apis`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-3E329370`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-PUBSUB-CAP-3E329370` → `REQ-FUNC-3E329370` → `TEST-FUNC-3E329370`.

### REQ-FUNC-E1020280 — Open-source systems cover messaging and streaming, but managed operations, IAM integration and exact provider semantics are not equivalent.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-pubsub-apis`, `ev-google-pubsub-exactly-once`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-E1020280`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-PUBSUB-CAP-E1020280` → `REQ-FUNC-E1020280` → `TEST-FUNC-E1020280`.

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
| [NATS](https://nats.io/) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | High-performance messaging with JetStream persistence. | No limitation recorded | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Apache Kafka](https://kafka.apache.org/) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Distributed event streaming platform. | No limitation recorded | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `GOOGLE-PUBSUB-CAP-AABA0167` — Topics, messages, publishers, subscribers and asynchronous event distribution are documented. | Not verified against NATS | None yet; compare with `ev_9707bccc120008e65801f333836bebeac457c035961426a1790b3b2a735e2da1` | Candidate code path and tests must be inspected |
| `GOOGLE-PUBSUB-CAP-518DC8EB` — Subscription delivery, acknowledgements, replay and documented delivery guarantees are supported with limits. | Not verified against NATS | None yet; compare with `ev_9707bccc120008e65801f333836bebeac457c035961426a1790b3b2a735e2da1` | Candidate code path and tests must be inspected |
| `GOOGLE-PUBSUB-CAP-3E329370` — REST/JSON, gRPC, client-library and endpoint surfaces are documented. | Not verified against NATS | None yet; compare with `ev_9707bccc120008e65801f333836bebeac457c035961426a1790b3b2a735e2da1` | Candidate code path and tests must be inspected |
| `GOOGLE-PUBSUB-CAP-E1020280` — Open-source systems cover messaging and streaming, but managed operations, IAM integration and exact provider semantics are not equivalent. | Not verified against NATS | None yet; compare with `ev_9707bccc120008e65801f333836bebeac457c035961426a1790b3b2a735e2da1` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **NATS** (High-performance messaging with JetStream persistence.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **NATS** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-AABA0167** → `REQ-FUNC-AABA0167`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-518DC8EB** → `REQ-FUNC-518DC8EB`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-3E329370** → `REQ-FUNC-3E329370`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-E1020280** → `REQ-FUNC-E1020280`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-AABA0167, REQ-FUNC-518DC8EB, REQ-FUNC-3E329370, REQ-FUNC-E1020280
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-AABA0167, REQ-FUNC-518DC8EB, REQ-FUNC-3E329370, REQ-FUNC-E1020280
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
- **Completion:** Trace: REQ-FUNC-AABA0167, REQ-FUNC-518DC8EB, REQ-FUNC-3E329370, REQ-FUNC-E1020280; document exclusions and unknowns.
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
| `ev-google-pubsub-identity` | What is Pub/Sub? — Official documentation describes topics, publishers and subscribers and identifies messaging, event distribution, analytics and integration use cases. | [link](https://docs.cloud.google.com/pubsub/docs/overview) | 2026-11-03T00:00:00Z | Pub/Sub is Google Cloud's asynchronous and scalable messaging service that decouples producers from consumers. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-pubsub-basics` | Overview of the Pub/Sub service — Official documentation explains the message flow from publishers through topics and subscriptions to subscribers, including acknowledgement behavior. | [link](https://docs.cloud.google.com/pubsub/docs/pubsub-basics) | 2026-11-03T00:00:00Z | Pub/Sub models topics, messages, schemas, subscriptions and subscriber clients as its core resources. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-pubsub-subscriptions` | Subscription overview — Official documentation describes subscription ownership, message availability after creation, acknowledgements and retention/replay behavior. | [link](https://docs.cloud.google.com/pubsub/docs/subscription-overview) | 2026-11-03T00:00:00Z | Pub/Sub subscriptions deliver topic messages to subscribers and support acknowledgement, replay and export-related workflows. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-pubsub-apis` | Pub/Sub APIs overview — Official documentation describes the gRPC service definition, REST API, discovery resources and global/regional/locational endpoints. | [link](https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview) | 2026-11-03T00:00:00Z | Pub/Sub exposes REST/JSON and gRPC interfaces with client libraries and documented endpoints. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-pubsub-exactly-once` | Exactly-once delivery — Official documentation describes acknowledgement semantics, supported pull/streaming pull conditions and regional limitations. | [link](https://docs.cloud.google.com/pubsub/docs/exactly-once-delivery) | 2026-11-03T00:00:00Z | Pub/Sub documents exactly-once delivery for supported pull subscriptions with regional and latency constraints. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://cloud.google.com/pubsub) | 2026-11-03T00:00:00Z | Pub/Sub is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.cloud.google.com/pubsub/docs/overview) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/pubsub/docs/overview) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/pubsub/docs/pubsub-basics) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/pubsub/docs/subscription-overview) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/pubsub/docs/exactly-once-delivery) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_9707bccc120008e65801f333836bebeac457c035961426a1790b3b2a735e2da1` | Pub/Sub Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://cloud.google.com/pubsub) | 2026-11-03T01:39:11.015Z | A dated unauthenticated snapshot exposed controls button: Previous slide, button: Next slide, button: Solution Prompt Search Button, button: Search, link: Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now., link: Benefits, link: Key features, link: Customers, link: What's new, link: Documentation, link: Use cases, link: Stream analytics, link: Asynchronous microservices integration, link: Generate a solution, link: All features, link: Pricing, link: Take the next step, link: Try Pub/Sub free, link: Contact sales, link: data warehouse solution, link: BigQuery, link: Dataflow, link: controls, link: Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45, link: Cloud Storage, link: View all features, link: CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read, link: Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read, link: See all customers, link: Sign up, link: real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video, link: Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog, link: Learn more, link: View all product documentation, link: Get a quick intro to using this product., link: Learn to complete specific tasks with this product., link: Browse guides and tutorials for this product., link: View APIs, references, and other resources for this product., link: Release notes Read about the latest releases for Pub/Sub, link: stream analytics, link: Cloud Functions, link: App Engine, link: Cloud Run,, link: Google Kubernetes Engine, link: Compute Engine, link: View all technical guides, textbox: Solution Prompt Search Text, link: Gemini, link: pricing guide, link: Cloud Platform SKUs, link: Find a partner, link: See all products, link: Google Cloud, link: Overview, link: Solutions, link: Products, link: Resources, combobox: Search, link: Docs, link: Support, link: Sign in, link: Cloud Pub/Sub, link: Start free, link: Contact us, link: Choosing Google Cloud, link: Trust and security, link: Modern Infrastructure Cloud, link: Multicloud, link: Global infrastructure, link: Locations, link: Customers and case studies, link: Analyst reports, link: Whitepapers, link: Blog, link: Google Cloud pricing, link: Google Workspace pricing, link: Infrastructure modernization, link: Databases, link: Application modernization, link: Smart analytics, link: Artificial Intelligence, link: Security, link: Productivity & work transformation, link: Industry solutions, link: DevOps solutions, link: Small business solutions, link: See all solutions, link: Google Cloud Affiliate Program, link: Google Cloud documentation, link: Google Cloud quickstarts, link: Google Cloud Marketplace, link: Learn about cloud computing, link: Code samples, link: Cloud Architecture Center, link: Training, link: Builders Hub, link: Certifications, link: Google for Developers, link: Google Cloud for Startups, link: System status, link: Release Notes, link: Find a Partner, link: Become a Partner, link: Events, link: Podcasts, link: Developer Center, link: Press Corner, link: Google Cloud on YouTube, link: Google Cloud Tech on YouTube, link: Follow on X, link: Join User Research, link: We're hiring. Join Google Cloud!, link: Community forums, link: About Google, link: Privacy, link: Site terms, link: Google Cloud terms, link: Subscribe, combobox: Language Selector and landmarks complementary: Explore more docs 1, banner, navigation, contentinfo, navigation: Footer Links, navigation: Utility links. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Pub/Sub is Google Cloud's fully managed asynchronous messaging and event-distribution service. Publishers write messages to topics; subscriptions deliver them to subscriber applications through pull, streaming pull, push or export workflows. It is a distinct messaging product within Google Cloud and should not be merged into Cloud Storage, Dataflow or the general Google Cloud row.

# 2. Product identity and ownership

- **Official name:** Pub/Sub
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://cloud.google.com/pubsub
- **Identity evidence:** Official documentation describes Pub/Sub as an asynchronous, scalable messaging service that decouples producers from consumers and supports streaming analytics, integrations and task parallelization.

# 3. Product capabilities

- Topics, messages, schemas, subscriptions, publishers and subscribers.
- Pull, streaming pull, push and export subscription delivery patterns.
- Message acknowledgement, retry policies, dead-letter handling, retention, replay and ordering.
- Exactly-once delivery for supported pull subscriptions and regional conditions.
- Integrations with Google Cloud data, serverless, analytics and workflow services.

# 4. Technical architecture

Publishers send messages to named topics. A topic can have multiple subscriptions, and each subscription receives messages published after it is created. Subscriber clients receive messages, process them and acknowledge them; outstanding or failed messages can be redelivered according to subscription policy. The service exposes global, regional and locational endpoints and uses Google APIs, client libraries and gRPC/REST interfaces.

# 5. User and developer workflows

An operator creates or selects a Google Cloud project, enables the Pub/Sub API, grants IAM roles, creates a topic and attaches a subscription. A publisher sends messages to the topic; one or more subscriber applications consume them through the selected subscription type. Teams configure schemas, batching, flow control, retry/dead-letter behavior, retention, ordering and monitoring according to delivery requirements.

# 6. Pricing and access

Pub/Sub access requires a Google Cloud project, enabled service and appropriate IAM permissions. Cost and quotas depend on message volume, throughput, retention, delivery and related operations. Exactly-once delivery has regional and subscription-type limits and can increase latency. This pass does not assert current pricing or a project's quota.

# 7. API and integration surface

Google documents REST/JSON and gRPC service APIs, client libraries, the gcloud CLI and console workflows. The public API exposes project, topic, subscription, schema, snapshot, message and acknowledgement operations. Pub/Sub integrates with Dataflow, Cloud Storage, BigQuery, Cloud Functions, Workflows and other systems, but each integration has its own permissions and delivery semantics.

# 8. Existing open-source alternatives

- **NATS (Apache-2.0):** lightweight messaging with JetStream persistence and streaming features.
- **Apache Kafka (Apache-2.0):** distributed event-streaming platform with durable topics and consumer groups.

# 9. Alternative comparison

NATS and Apache Kafka cover publish/subscribe, durable streams, consumer groups and event distribution. They do not reproduce Google's managed service plane, IAM/project integration, regional endpoint behavior, proprietary integrations, quotas or exact Pub/Sub semantics. Coverage is partial for the complete Google service, while the core messaging category is mature.

# 10. Missing capabilities and opportunity analysis

A replacement still needs cluster or service operations, durability and replication, schema governance, retention, replay, ordering, retry/dead-letter policies, observability, IAM, tenancy, upgrades, disaster recovery and compatibility with existing producers and consumers. Open-source implementations are strong foundations; managed operations and migration compatibility are the main gaps.

# 11. REA implementation strategy

Choose NATS for a lightweight service and JetStream workflow, or Kafka for durable high-throughput event streaming and ecosystem integration. Define ordering, at-least-once versus exactly-once expectations, replay, retention, schemas, failure handling and operational ownership before migration. Do not claim Pub/Sub API compatibility without testing resource naming, acknowledgement behavior, ordering, retries and integrations.

# 12. Security, privacy, and compliance

Messages may contain customer data, credentials, events or regulated information. Verify IAM roles, service accounts, encryption, regional message-storage policy, endpoint choice, retention, audit logs, dead-letter access, subscription authorization and data minimization. Keep secrets and payload samples out of the catalog and reports.

# 13. Sources and evidence

- [What is Pub/Sub?](https://docs.cloud.google.com/pubsub/docs/overview) — official identity, use cases and producer/consumer model.
- [Overview of the Pub/Sub service](https://docs.cloud.google.com/pubsub/docs/pubsub-basics) — official topics, messages, schemas and subscriptions.
- [Subscription overview](https://docs.cloud.google.com/pubsub/docs/subscription-overview) — official subscription delivery and acknowledgement behavior.
- [Pub/Sub APIs overview](https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview) — official REST/JSON, gRPC and endpoint surfaces.
- [Exactly-once delivery](https://docs.cloud.google.com/pubsub/docs/exactly-once-delivery) — official delivery guarantees and limits.

# 14. Open questions

- Is the target a queue, event bus, durable event stream or analytics ingestion pipeline?
- Which ordering, replay, retention and delivery guarantees are mandatory?
- Which regions, integrations, throughput, IAM and compliance requirements are in scope?

# 15. Research history

- v1: catalog candidate with preliminary NATS and Kafka alternatives, research pending.
- v2: updated 2026-11-03 from official Google Cloud Pub/Sub documentation. Status: `researched`; managed operations, pricing, quotas and provider-specific integrations remain outside open-source equivalence.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier google-pubsub` and inspect canonical identity with `npx rea-faang products show google-pubsub --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang google-pubsub --out ./google-pubsub.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit google-pubsub --out ./google-pubsub-agent`.

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
- REA capture: [catalog/rea/google/google-pubsub.md](../../rea/google/google-pubsub.md) (2026-11-03T01:39:11.015Z); raw record: [catalog/rea/evidence/google-pubsub.json](../../rea/evidence/google-pubsub.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [What is Pub/Sub?](https://docs.cloud.google.com/pubsub/docs/overview) — Pub/Sub is Google Cloud's asynchronous and scalable messaging service that decouples producers from consumers. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Overview of the Pub/Sub service](https://docs.cloud.google.com/pubsub/docs/pubsub-basics) — Pub/Sub models topics, messages, schemas, subscriptions and subscriber clients as its core resources. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Subscription overview](https://docs.cloud.google.com/pubsub/docs/subscription-overview) — Pub/Sub subscriptions deliver topic messages to subscribers and support acknowledgement, replay and export-related workflows. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Pub/Sub APIs overview](https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview) — Pub/Sub exposes REST/JSON and gRPC interfaces with client libraries and documented endpoints. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Exactly-once delivery](https://docs.cloud.google.com/pubsub/docs/exactly-once-delivery) — Pub/Sub documents exactly-once delivery for supported pull subscriptions with regional and latency constraints. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://cloud.google.com/pubsub) — Pub/Sub is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://docs.cloud.google.com/pubsub/docs/overview) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://docs.cloud.google.com/pubsub/docs/overview) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.cloud.google.com/pubsub/docs/pubsub-basics) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.cloud.google.com/pubsub/docs/subscription-overview) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.cloud.google.com/pubsub/docs/exactly-once-delivery) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Pub/Sub Public web-surface observation (REA)](https://cloud.google.com/pubsub) — A dated unauthenticated snapshot exposed controls button: Previous slide, button: Next slide, button: Solution Prompt Search Button, button: Search, link: Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now., link: Benefits, link: Key features, link: Customers, link: What's new, link: Documentation, link: Use cases, link: Stream analytics, link: Asynchronous microservices integration, link: Generate a solution, link: All features, link: Pricing, link: Take the next step, link: Try Pub/Sub free, link: Contact sales, link: data warehouse solution, link: BigQuery, link: Dataflow, link: controls, link: Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45, link: Cloud Storage, link: View all features, link: CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read, link: Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read, link: See all customers, link: Sign up, link: real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video, link: Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog, link: Learn more, link: View all product documentation, link: Get a quick intro to using this product., link: Learn to complete specific tasks with this product., link: Browse guides and tutorials for this product., link: View APIs, references, and other resources for this product., link: Release notes Read about the latest releases for Pub/Sub, link: stream analytics, link: Cloud Functions, link: App Engine, link: Cloud Run,, link: Google Kubernetes Engine, link: Compute Engine, link: View all technical guides, textbox: Solution Prompt Search Text, link: Gemini, link: pricing guide, link: Cloud Platform SKUs, link: Find a partner, link: See all products, link: Google Cloud, link: Overview, link: Solutions, link: Products, link: Resources, combobox: Search, link: Docs, link: Support, link: Sign in, link: Cloud Pub/Sub, link: Start free, link: Contact us, link: Choosing Google Cloud, link: Trust and security, link: Modern Infrastructure Cloud, link: Multicloud, link: Global infrastructure, link: Locations, link: Customers and case studies, link: Analyst reports, link: Whitepapers, link: Blog, link: Google Cloud pricing, link: Google Workspace pricing, link: Infrastructure modernization, link: Databases, link: Application modernization, link: Smart analytics, link: Artificial Intelligence, link: Security, link: Productivity & work transformation, link: Industry solutions, link: DevOps solutions, link: Small business solutions, link: See all solutions, link: Google Cloud Affiliate Program, link: Google Cloud documentation, link: Google Cloud quickstarts, link: Google Cloud Marketplace, link: Learn about cloud computing, link: Code samples, link: Cloud Architecture Center, link: Training, link: Builders Hub, link: Certifications, link: Google for Developers, link: Google Cloud for Startups, link: System status, link: Release Notes, link: Find a Partner, link: Become a Partner, link: Events, link: Podcasts, link: Developer Center, link: Press Corner, link: Google Cloud on YouTube, link: Google Cloud Tech on YouTube, link: Follow on X, link: Join User Research, link: We're hiring. Join Google Cloud!, link: Community forums, link: About Google, link: Privacy, link: Site terms, link: Google Cloud terms, link: Subscribe, combobox: Language Selector and landmarks complementary: Explore more docs 1, banner, navigation, contentinfo, navigation: Footer Links, navigation: Utility links. (VERIFIED; accessed 2026-11-03T01:39:11.015Z).
