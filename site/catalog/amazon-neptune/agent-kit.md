---
name: amazon-neptune
description: "Evidence-aware build skill for Amazon Neptune (amazon-neptune); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon Neptune — implementation skill (`amazon-neptune`)

> **Research status:** researched. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon Neptune**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon Neptune** (`amazon-neptune`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-neptune.md` from the catalog page, or run `npx rea-faang amazon-neptune --out ./amazon-neptune.md`, `npx rea-faang skills generate amazon-neptune` or `npx rea-faang build agent-kit amazon-neptune --out ./amazon-neptune-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon Neptune / `amazon-neptune` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/neptune/](https://aws.amazon.com/neptune/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/neptune/](https://docs.aws.amazon.com/neptune/) | Catalog record |
| Research dossier | `npx rea-faang research dossier amazon-neptune` | `research/companies/amazon_aws/products/amazon-neptune.md` |
| REA report | `catalog/rea/amazon_aws/amazon-neptune.md` (captured 2026-11-03T03:31:48.846Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-neptune.json` (`ev_02bc5ac7f8ab5227f446b38c5ca8ce8d2b8b89fb53de8982606b6b50499ee46f`) | Catalog evidence |
| Alternative candidates | None recorded — this is a research gap | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show amazon-neptune --format json` and `npx rea-faang research dossier amazon-neptune` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/neptune/](https://aws.amazon.com/neptune/), captured 2026-11-03T03:31:48.846Z, evidence `ev_02bc5ac7f8ab5227f446b38c5ca8ce8d2b8b89fb53de8982606b6b50499ee46f`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-NEPTUNE-CAP-114DFAFE`, `AMAZON-NEPTUNE-CAP-E90B905B`, `AMAZON-NEPTUNE-CAP-7D145FCD`, `AMAZON-NEPTUNE-CAP-B603E982`, `AMAZON-NEPTUNE-CAP-CE1A10D2`.

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
| Name / stable ID | **Amazon Neptune** / `amazon-neptune` | Product catalog |
| Company / category | Amazon Web Services / `database` / `graph-database`, `graph-analytics`, `gremlin`, `opencypher`, `sparql` | Product catalog |
| Official website / docs | [https://aws.amazon.com/neptune/](https://aws.amazon.com/neptune/) / [https://docs.aws.amazon.com/neptune/](https://docs.aws.amazon.com/neptune/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **database** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-NEPTUNE-CAP-114DFAFE` | Managed property-graph and RDF surfaces with documented Database operations. | VERIFIED | `ev-amazon-neptune-identity`, `ev-amazon-neptune-database` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-NEPTUNE-CAP-E90B905B` | Data APIs and S3/query-based loading paths are documented. | VERIFIED | `ev-amazon-neptune-data-api`, `ev-amazon-neptune-loading` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-NEPTUNE-CAP-7D145FCD` | Neptune Analytics memory processing, vector search and graph algorithms are documented. | VERIFIED | `ev-amazon-neptune-analytics`, `ev-amazon-neptune-algorithms` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-NEPTUNE-CAP-B603E982` | VPC/KMS security and encrypted resource behavior are documented. | VERIFIED | `ev-amazon-neptune-security` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-NEPTUNE-CAP-CE1A10D2` | TinkerPop and JanusGraph cover portions of property-graph workflows but not AWS-managed operations, RDF/SPARQL or Neptune Analytics parity. | VERIFIED | `ev-amazon-neptune-tinkerpop`, `ev-amazon-neptune-janusgraph` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Resources submenu`, `button: Get started with Neptune`, `button: Connect with an AWS specialist`, `button: Play:`, `button: Close`, `button: Graphs for AI`, `button: Customer 360`, `button: Fraud detection`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: FAQs`, `link: Customers`, `link: Products`, `link: Databases`, `link: Insights in seconds Easily analyze tens of billions of relationships across structured and unstructured data within seconds using built-in algorithms, and perform vector search with your graph for gen AI apps. Learn more`, `link: Trusted AI Improve the accuracy and explainability of your generative AI apps with automated GraphRAG, and integrations with Strands AI SDK and popular memory tools for agents. Learn more`, `link: Performance and scalability Scale your graphs with unlimited vertices and edges, 100k+ queries per second, up to 128 TiB storage per cluster, and up to 15 read replicas per cluster. Learn more`, `link: Enterprise security and reliability Unlock best-in-class security and reliability synonymous with AWS, including ACID transactions, automated backups, cross-Region replication, PITR, encryption at transit and at rest, granular resource permissions, and more. Learn more`, `link: Cost effective Reduce your total cost of ownership with no upfront commitments and no hidden costs, pay-for-use billing, and transparent support billing. Learn more`, `link: Explore Workshops`, `button: Cybersecurity`, `link: Missing alt text value How Smartsheet enhances recommendations using Amazon Neptune and Knowledge Graphs Read the blog`, `link: Missing alt text value Protecting and governing sensitive data in the cloud on AWS with ALTR Read the case study`, `link: Missing alt text value Building an agentic AI solution using Amazon Neptune with Trend Micro Read the case study`, `link: Wiz logo in blue text with a star symbol Reimagining cloud security using Amazon Neptune graph database with Wiz Read the case study`, `link: Resources Learn with hands-on training Get started with Neptune`, `link: Documentation Dive deep on Neptune Read the documentation`, `link: Free tier Sign up for a free account Try for free`, `link: Console Start building in the console Sign in`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Managed property-graph and RDF surfaces with documented Database operations.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Data APIs and S3/query-based loading paths are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Neptune Analytics memory processing, vector search and graph algorithms are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **VPC/KMS security and encrypted resource behavior are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **TinkerPop and JanusGraph cover portions of property-graph workflows but not AWS-managed operations, RDF/SPARQL or Neptune Analytics parity.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon Neptune`, `What is Neptune`, `Benefits of Neptune`, `Insights in seconds`, `Trusted AI`, `Performance and scalability`, `Enterprise security and reliability`, `Cost effective`, `Use cases`, `Graphs for AI`, `Customer 360`, `Fraud detection`, `Cybersecurity`, `Customers`, `How Smartsheet enhances recommendations using Amazon Neptune and Knowledge Graphs`, `Protecting and governing sensitive data in the cloud on AWS with ALTR`, `Building an agentic AI solution using Amazon Neptune with Trend Micro`, `Reimagining cloud security using Amazon Neptune graph database with Wiz`, `Next steps`, `Learn with hands-on training`, `Dive deep on Neptune`, `Sign up for a free account`, `Start building in the console`, `Learn`, `Resources` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Resources submenu`, `button: Get started with Neptune`, `button: Connect with an AWS specialist`, `button: Play:`, `button: Close`, `button: Graphs for AI`, `button: Customer 360`, `button: Fraud detection`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: FAQs`, `link: Customers`, `link: Products`, `link: Databases`, `link: Insights in seconds Easily analyze tens of billions of relationships across structured and unstructured data within seconds using built-in algorithms, and perform vector search with your graph for gen AI apps. Learn more`, `link: Trusted AI Improve the accuracy and explainability of your generative AI apps with automated GraphRAG, and integrations with Strands AI SDK and popular memory tools for agents. Learn more`, `link: Performance and scalability Scale your graphs with unlimited vertices and edges, 100k+ queries per second, up to 128 TiB storage per cluster, and up to 15 read replicas per cluster. Learn more`, `link: Enterprise security and reliability Unlock best-in-class security and reliability synonymous with AWS, including ACID transactions, automated backups, cross-Region replication, PITR, encryption at transit and at rest, granular resource permissions, and more. Learn more`, `link: Cost effective Reduce your total cost of ownership with no upfront commitments and no hidden costs, pay-for-use billing, and transparent support billing. Learn more`, `link: Explore Workshops`, `button: Cybersecurity`, `link: Missing alt text value How Smartsheet enhances recommendations using Amazon Neptune and Knowledge Graphs Read the blog`, `link: Missing alt text value Protecting and governing sensitive data in the cloud on AWS with ALTR Read the case study`, `link: Missing alt text value Building an agentic AI solution using Amazon Neptune with Trend Micro Read the case study`, `link: Wiz logo in blue text with a star symbol Reimagining cloud security using Amazon Neptune graph database with Wiz Read the case study`, `link: Resources Learn with hands-on training Get started with Neptune`, `link: Documentation Dive deep on Neptune Read the documentation`, `link: Free tier Sign up for a free account Try for free`, `link: Console Start building in the console Sign in`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/neptune/)`, `[Features](/neptune/features/)`, `[Pricing](/neptune/pricing/)`, `[FAQs](/neptune/faqs/)`, `[Customers](/neptune/customers/)`, `[Products](/products/)`, `[Databases](/products/databases/)`, `[Insights in seconds Easily analyze tens of billions of relationships across structured and unstructured data within seconds using built-in algorithms, and perform vector search with your graph for gen AI apps. Learn more](/blogs/aws/introducing-amazon-neptune-analytics-a-high-performance-graph-analytics)`, `[Trusted AI Improve the accuracy and explainability of your generative AI apps with automated GraphRAG, and integrations with Strands AI SDK and popular memory tools for agents. Learn more](/neptune/features/#topic-4)`, `[Performance and scalability Scale your graphs with unlimited vertices and edges, 100k+ queries per second, up to 128 TiB storage per cluster, and up to 15 read replicas per cluster. Learn more](/neptune/features/#topic-0)`, `[Enterprise security and reliability Unlock best-in-class security and reliability synonymous with AWS, including ACID transactions, automated backups, cross-Region replication, PITR, encryption at transit and at rest, granular resource permissions, and more. Learn more](/neptune/features/#topic-2)`, `[Cost effective Reduce your total cost of ownership with no upfront commitments and no hidden costs, pay-for-use billing, and transparent support billing. Learn more](/neptune/features/#topic-7)`, `[Explore Workshops](https://builder.aws.com/build/workshops/?accessType=free-sandbox&tab=discover&sc_icampaign=launch_builder-center-sandbox_2026&sc_ichannel=ha&sc_iplace=banner&trk=c243de2e-eafc-4962-8ffc-4915bb208b5b)`, `[Missing alt text value How Smartsheet enhances recommendations using Amazon Neptune and Knowledge Graphs Read the blog](https://aws.amazon.com/blogs/database/how-smartsheet-enhances-recommendations-using-amazon-neptune-and-knowledge-graphs)`, `[Missing alt text value Protecting and governing sensitive data in the cloud on AWS with ALTR Read the case study](https://aws.amazon.com/solutions/case-studies/altr-case-study)`, `[Missing alt text value Building an agentic AI solution using Amazon Neptune with Trend Micro Read the case study](https://aws.amazon.com/solutions/case-studies/trendmicro)`, `[Wiz logo in blue text with a star symbol Reimagining cloud security using Amazon Neptune graph database with Wiz Read the case study](https://aws.amazon.com/solutions/case-studies/wiz-neptune)`, `[Resources Learn with hands-on training Get started with Neptune](/neptune/resources/)`, `[Documentation Dive deep on Neptune Read the documentation](https://docs.aws.amazon.com/neptune)`, `[Free tier Sign up for a free account Try for free](https://signin.aws.amazon.com/signup?request_type=builderId)`, `[Console Start building in the console Sign in](https://console.aws.amazon.com/neptune)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-114DFAFE — Managed property-graph and RDF surfaces with documented Database operations.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-neptune-identity`, `ev-amazon-neptune-database`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-114DFAFE`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-NEPTUNE-CAP-114DFAFE` → `REQ-FUNC-114DFAFE` → `TEST-FUNC-114DFAFE`.

### REQ-FUNC-E90B905B — Data APIs and S3/query-based loading paths are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-neptune-data-api`, `ev-amazon-neptune-loading`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-E90B905B`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-NEPTUNE-CAP-E90B905B` → `REQ-FUNC-E90B905B` → `TEST-FUNC-E90B905B`.

### REQ-FUNC-7D145FCD — Neptune Analytics memory processing, vector search and graph algorithms are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-neptune-analytics`, `ev-amazon-neptune-algorithms`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-7D145FCD`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-NEPTUNE-CAP-7D145FCD` → `REQ-FUNC-7D145FCD` → `TEST-FUNC-7D145FCD`.

### REQ-FUNC-B603E982 — VPC/KMS security and encrypted resource behavior are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-neptune-security`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-B603E982`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-NEPTUNE-CAP-B603E982` → `REQ-FUNC-B603E982` → `TEST-FUNC-B603E982`.

### REQ-FUNC-CE1A10D2 — TinkerPop and JanusGraph cover portions of property-graph workflows but not AWS-managed operations, RDF/SPARQL or Neptune Analytics parity.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-neptune-tinkerpop`, `ev-amazon-neptune-janusgraph`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-CE1A10D2`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-NEPTUNE-CAP-CE1A10D2` → `REQ-FUNC-CE1A10D2` → `TEST-FUNC-CE1A10D2`.

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

Product-specific review: Verify transaction/concurrency semantics, tenant boundaries, migration, backup and recovery. Do not claim compliance, privacy or security parity without scoped assessment.

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

- **TEST-FUNC-114DFAFE** → `REQ-FUNC-114DFAFE`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-E90B905B** → `REQ-FUNC-E90B905B`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-7D145FCD** → `REQ-FUNC-7D145FCD`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-B603E982** → `REQ-FUNC-B603E982`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-CE1A10D2** → `REQ-FUNC-CE1A10D2`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-114DFAFE, REQ-FUNC-E90B905B, REQ-FUNC-7D145FCD, REQ-FUNC-B603E982, REQ-FUNC-CE1A10D2
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-114DFAFE, REQ-FUNC-E90B905B, REQ-FUNC-7D145FCD, REQ-FUNC-B603E982, REQ-FUNC-CE1A10D2
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
- **Completion:** Trace: REQ-FUNC-114DFAFE, REQ-FUNC-E90B905B, REQ-FUNC-7D145FCD, REQ-FUNC-B603E982, REQ-FUNC-CE1A10D2; document exclusions and unknowns.
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
| `ev-amazon-neptune-identity` | What Is Amazon Neptune? — AWS documents Gremlin and openCypher for property graphs and SPARQL for RDF graphs, with managed operations and security. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/) | 2026-11-04T00:00:00Z | Amazon Neptune is a managed graph platform supporting property graphs and RDF graphs. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-neptune-database` | Amazon Neptune User Guide — AWS documents SSD-backed storage, read replicas, automated backups and failover behavior for Neptune DB clusters. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/) | 2026-11-04T00:00:00Z | Neptune Database provides managed graph clusters with storage, replicas, backups and failover. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-neptune-data-api` | Amazon Neptune Data API Reference — The AWS data API reference documents query operations, data access and SDK support for Gremlin and openCypher. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/data-api.html) | 2026-11-04T00:00:00Z | Neptune exposes documented data APIs for loading, querying and maintaining graph data. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-neptune-loading` | Loading data into Amazon Neptune — AWS documents S3 bulk loading for Gremlin and RDF data, query-based loading and Database Migration Service workflows. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/load-data.html) | 2026-11-04T00:00:00Z | Neptune supports query-based loading, bulk loading from Amazon S3 and AWS DMS loading paths. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-neptune-security` | Encrypting Neptune resources at rest — AWS documents KMS key management and encryption of storage, logs, backups and snapshots for encrypted Neptune clusters. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/encrypt.html) | 2026-11-04T00:00:00Z | Neptune supports KMS-managed encryption at rest for encrypted clusters and related backups and snapshots. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-neptune-analytics` | What is Neptune Analytics? — AWS distinguishes Neptune Analytics from Neptune Database and documents in-memory graph processing, vector search and graph loading. | [link](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html) | 2026-11-04T00:00:00Z | Neptune Analytics is a memory-optimized graph analytics service with low-latency queries and vector search. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-neptune-algorithms` | Neptune Analytics algorithms — AWS documents more than 25 algorithms and variants exposed through openCypher procedures and SDK/CLI query operations. | [link](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/algorithms.html) | 2026-11-04T00:00:00Z | Neptune Analytics documents optimized graph algorithms across pathfinding, centrality, similarity, community detection and vector similarity. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-neptune-tinkerpop` | Apache TinkerPop — The official project page describes TinkerPop for graph databases and analytic systems and identifies Gremlin as its traversal language. | [link](https://tinkerpop.apache.org/) | 2026-11-04T00:00:00Z | Apache TinkerPop is a graph-computing framework and Gremlin ecosystem that can provide a partial foundation for property-graph work. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-neptune-janusgraph` | JanusGraph architectural overview — The official documentation describes storage and indexing adapters and interaction through Gremlin Server. | [link](https://docs.janusgraph.org/master/getting-started/architecture/) | 2026-11-04T00:00:00Z | JanusGraph is a modular graph engine with storage, indexing and Gremlin Server integration that covers part of Neptune Database workflows. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/neptune/) | 2026-11-04T00:00:00Z | Amazon Neptune is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/neptune/) | 2026-11-04T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/neptune/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/data-api.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/load-data.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-6` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-7` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune/latest/userguide/encrypt.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-8` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-9` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/neptune-analytics-features.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-10` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/algorithms.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-11` | Additional official source lead — Claim/section not recorded. | [link](https://tinkerpop.apache.org/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-12` | Additional official source lead — Claim/section not recorded. | [link](https://docs.janusgraph.org/master/getting-started/architecture/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_02bc5ac7f8ab5227f446b38c5ca8ce8d2b8b89fb53de8982606b6b50499ee46f` | Amazon Neptune Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/neptune/) | 2026-11-03T03:31:48.846Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Resources submenu, button: Get started with Neptune, button: Connect with an AWS specialist, button: Play:, button: Close, button: Graphs for AI, button: Customer 360, button: Fraud detection, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: FAQs, link: Customers, link: Products, link: Databases, link: Insights in seconds Easily analyze tens of billions of relationships across structured and unstructured data within seconds using built-in algorithms, and perform vector search with your graph for gen AI apps. Learn more, link: Trusted AI Improve the accuracy and explainability of your generative AI apps with automated GraphRAG, and integrations with Strands AI SDK and popular memory tools for agents. Learn more, link: Performance and scalability Scale your graphs with unlimited vertices and edges, 100k+ queries per second, up to 128 TiB storage per cluster, and up to 15 read replicas per cluster. Learn more, link: Enterprise security and reliability Unlock best-in-class security and reliability synonymous with AWS, including ACID transactions, automated backups, cross-Region replication, PITR, encryption at transit and at rest, granular resource permissions, and more. Learn more, link: Cost effective Reduce your total cost of ownership with no upfront commitments and no hidden costs, pay-for-use billing, and transparent support billing. Learn more, link: Explore Workshops, button: Cybersecurity, link: Missing alt text value How Smartsheet enhances recommendations using Amazon Neptune and Knowledge Graphs Read the blog, link: Missing alt text value Protecting and governing sensitive data in the cloud on AWS with ALTR Read the case study, link: Missing alt text value Building an agentic AI solution using Amazon Neptune with Trend Micro Read the case study, link: Wiz logo in blue text with a star symbol Reimagining cloud security using Amazon Neptune graph database with Wiz Read the case study, link: Resources Learn with hands-on training Get started with Neptune, link: Documentation Dive deep on Neptune Read the documentation, link: Free tier Sign up for a free account Try for free, link: Console Start building in the console Sign in, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-neptune`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary
Amazon Neptune is AWS's managed graph platform for highly connected datasets. The official surface separates Neptune Database, a transactional managed graph database, from Neptune Analytics, a memory-optimized graph analytics service with openCypher procedures and vector search. This dossier records the two surfaces separately and does not claim that one is a drop-in replacement for the other.

# 2. Product identity and ownership
- **Official name:** Amazon Neptune
- **Company:** Amazon Web Services
- **Surfaces:** Neptune Database and Neptune Analytics
- **Lifecycle:** Active

# 3. Product capabilities
- Store and query property-graph and RDF data.
- Use Gremlin, openCypher and SPARQL.
- Run managed Neptune Database clusters with replicas, automated backups and failover.
- Load graph data from Amazon S3 with the Neptune bulk loader or query-based loaders.
- Analyze graph datasets with Neptune Analytics algorithms, low-latency queries and vector search.
- Use VPC isolation, KMS encryption, APIs, SDKs and AWS CLI surfaces.

# 4. Technical architecture
Public documentation describes Neptune Database clusters, SSD-backed virtualized storage, replicas, backups, loaders, query endpoints, Neptune Analytics graphs, APIs, networking and security. Neptune Database exposes Gremlin and openCypher for property graphs and SPARQL for RDF; Neptune Analytics uses an in-memory graph engine and openCypher procedures. Exact engine versions, limits, algorithm coverage and cross-region behavior remain pending.

# 5. User workflows
Expected workflows include creating a database cluster or analytics graph, loading graph data from S3 or another Neptune surface, querying with Gremlin/openCypher/SPARQL as applicable, running analytics algorithms, monitoring, scaling, backing up, restoring and deleting resources.

# 6. Pricing and access
Neptune Database and Neptune Analytics have distinct resource and usage models. Current instance, storage, query, analytics, capacity-unit and free-tier details must be verified before implementation or cost claims.

# 7. API and integration surface
Neptune management and data APIs, AWS CLI/SDKs, Gremlin/openCypher/SPARQL endpoints, Neptune bulk loader, S3, CloudWatch, VPC and KMS integrations. Neptune Analytics also documents graph query, query-status, cancellation, summary and algorithm operations.

# 8. Existing open-source alternatives
Apache TinkerPop, JanusGraph, Neo4j Community, Apache Jena and other graph systems may cover subsets. No full equivalence is claimed.

# 9. Alternative comparison
Apache TinkerPop provides the Gremlin graph-computing framework, while JanusGraph provides a modular graph engine with storage and indexing adapters. They cover portions of Neptune's property-graph workflows, but do not reproduce Neptune's managed multi-AZ storage, backups, APIs, security, RDF/SPARQL surface, Neptune Analytics memory service or AWS operations.

# 10. Missing capabilities and opportunity analysis
Research must map data models, query semantics, loaders, algorithms, indexes, transactions, replicas, backups, limits, versions, security, vector search and migration behavior for Database and Analytics independently.

# 11. REA implementation strategy
Use official AWS and upstream graph documentation and authorized API observation. Capture Database and Analytics contracts separately before selecting TinkerPop or JanusGraph as a partial foundation or implementing an independent equivalent. Preserve the distinction between a graph database and an in-memory analytics engine.

# 12. Security, privacy, and compliance
Verify VPC isolation, IAM, KMS, encryption, access control, backups, network endpoints, logging and data retention.

# 13. Sources and evidence
- **Product and Database identity:** [Amazon Neptune User Guide](https://docs.aws.amazon.com/neptune/latest/userguide/) documents managed graph APIs, property graphs, RDF/SPARQL, VPC isolation, KMS encryption and managed operations.
- **Data API and loading:** [Neptune Data API](https://docs.aws.amazon.com/neptune/latest/userguide/data-api.html), [loading data](https://docs.aws.amazon.com/neptune/latest/userguide/load-data.html) and [bulk loader](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html) document query/API and ingestion surfaces.
- **Analytics:** [What is Neptune Analytics?](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html), [features](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/neptune-analytics-features.html) and [algorithms](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/algorithms.html) document the memory-optimized analytics service, graph loading, vector search and algorithm categories.
- **Security:** [Neptune encryption](https://docs.aws.amazon.com/neptune/latest/userguide/encrypt.html) documents KMS-based encryption at rest for clusters, backups and snapshots.
- **Alternatives:** [Apache TinkerPop](https://tinkerpop.apache.org/) documents the Gremlin graph-computing framework; [JanusGraph architecture](https://docs.janusgraph.org/master/getting-started/architecture/) documents its modular storage and indexing model. Both are partial foundations, not equivalent managed services.

# 14. Unknowns
- Complete API/CLI/SDK and query matrix for Database and Analytics.
- Exact engine versions, limits, pricing and algorithm coverage.
- Analytics, backup, replication, vector-search and migration semantics under representative workloads.
- Verified independent foundation and compatibility scope.

# 15. Research status
Researched with verified public AWS and upstream sources. Product identity, Database/Analytics distinction, query languages, loading, security, API surface and Analytics algorithms are documented. Exact pricing, quotas, versions, regional behavior and full alternative parity remain unknown and are not asserted.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier amazon-neptune` and inspect canonical identity with `npx rea-faang products show amazon-neptune --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang amazon-neptune --out ./amazon-neptune.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit amazon-neptune --out ./amazon-neptune-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-neptune`).
- Dossier: [research/companies/amazon_aws/products/amazon-neptune.md](../../../research/companies/amazon_aws/products/amazon-neptune.md).
- REA capture: [catalog/rea/amazon_aws/amazon-neptune.md](../../rea/amazon_aws/amazon-neptune.md) (2026-11-03T03:31:48.846Z); raw record: [catalog/rea/evidence/amazon-neptune.json](../../rea/evidence/amazon-neptune.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [What Is Amazon Neptune?](https://docs.aws.amazon.com/neptune/latest/userguide/) — Amazon Neptune is a managed graph platform supporting property graphs and RDF graphs. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Amazon Neptune User Guide](https://docs.aws.amazon.com/neptune/latest/userguide/) — Neptune Database provides managed graph clusters with storage, replicas, backups and failover. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Amazon Neptune Data API Reference](https://docs.aws.amazon.com/neptune/latest/userguide/data-api.html) — Neptune exposes documented data APIs for loading, querying and maintaining graph data. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Loading data into Amazon Neptune](https://docs.aws.amazon.com/neptune/latest/userguide/load-data.html) — Neptune supports query-based loading, bulk loading from Amazon S3 and AWS DMS loading paths. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Encrypting Neptune resources at rest](https://docs.aws.amazon.com/neptune/latest/userguide/encrypt.html) — Neptune supports KMS-managed encryption at rest for encrypted clusters and related backups and snapshots. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [What is Neptune Analytics?](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html) — Neptune Analytics is a memory-optimized graph analytics service with low-latency queries and vector search. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Neptune Analytics algorithms](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/algorithms.html) — Neptune Analytics documents optimized graph algorithms across pathfinding, centrality, similarity, community detection and vector similarity. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Apache TinkerPop](https://tinkerpop.apache.org/) — Apache TinkerPop is a graph-computing framework and Gremlin ecosystem that can provide a partial foundation for property-graph work. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [JanusGraph architectural overview](https://docs.janusgraph.org/master/getting-started/architecture/) — JanusGraph is a modular graph engine with storage, indexing and Gremlin Server integration that covers part of Neptune Database workflows. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Official product page](https://aws.amazon.com/neptune/) — Amazon Neptune is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Official documentation entry](https://docs.aws.amazon.com/neptune/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Additional official source lead](https://aws.amazon.com/neptune/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune/latest/userguide/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune/latest/userguide/data-api.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune/latest/userguide/load-data.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune/latest/userguide/encrypt.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/neptune-analytics-features.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/algorithms.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://tinkerpop.apache.org/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.janusgraph.org/master/getting-started/architecture/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon Neptune Public web-surface observation (REA)](https://aws.amazon.com/neptune/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Resources submenu, button: Get started with Neptune, button: Connect with an AWS specialist, button: Play:, button: Close, button: Graphs for AI, button: Customer 360, button: Fraud detection, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: FAQs, link: Customers, link: Products, link: Databases, link: Insights in seconds Easily analyze tens of billions of relationships across structured and unstructured data within seconds using built-in algorithms, and perform vector search with your graph for gen AI apps. Learn more, link: Trusted AI Improve the accuracy and explainability of your generative AI apps with automated GraphRAG, and integrations with Strands AI SDK and popular memory tools for agents. Learn more, link: Performance and scalability Scale your graphs with unlimited vertices and edges, 100k+ queries per second, up to 128 TiB storage per cluster, and up to 15 read replicas per cluster. Learn more, link: Enterprise security and reliability Unlock best-in-class security and reliability synonymous with AWS, including ACID transactions, automated backups, cross-Region replication, PITR, encryption at transit and at rest, granular resource permissions, and more. Learn more, link: Cost effective Reduce your total cost of ownership with no upfront commitments and no hidden costs, pay-for-use billing, and transparent support billing. Learn more, link: Explore Workshops, button: Cybersecurity, link: Missing alt text value How Smartsheet enhances recommendations using Amazon Neptune and Knowledge Graphs Read the blog, link: Missing alt text value Protecting and governing sensitive data in the cloud on AWS with ALTR Read the case study, link: Missing alt text value Building an agentic AI solution using Amazon Neptune with Trend Micro Read the case study, link: Wiz logo in blue text with a star symbol Reimagining cloud security using Amazon Neptune graph database with Wiz Read the case study, link: Resources Learn with hands-on training Get started with Neptune, link: Documentation Dive deep on Neptune Read the documentation, link: Free tier Sign up for a free account Try for free, link: Console Start building in the console Sign in, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-03T03:31:48.846Z).
