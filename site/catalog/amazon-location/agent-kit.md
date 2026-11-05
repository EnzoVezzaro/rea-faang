---
name: amazon-location
description: "Evidence-aware build skill for Amazon Location Service (amazon-location); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon Location Service — implementation skill (`amazon-location`)

> **Research status:** pending. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon Location Service**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon Location Service** (`amazon-location`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-location.md` from the catalog page, or run `npx rea-faang amazon-location --out ./amazon-location.md`, `npx rea-faang skills generate amazon-location` or `npx rea-faang build agent-kit amazon-location --out ./amazon-location-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon Location Service / `amazon-location` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/location/](https://aws.amazon.com/location/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/location/latest/developerguide/](https://docs.aws.amazon.com/location/latest/developerguide/) | Catalog record |
| Research dossier | `npx rea-faang research dossier amazon-location` | `research/companies/amazon_aws/products/amazon-location.md` |
| REA report | `catalog/rea/amazon_aws/amazon-location.md` (captured 2026-11-03T03:20:01.384Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-location.json` (`ev_62891d0a0a6b8512c38fb86ae4fed51e0ae4fcaa4da2f0d2b9b40ccfe6c4b9b2`) | Catalog evidence |
| Alternative candidates | None recorded — this is a research gap | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show amazon-location --format json` and `npx rea-faang research dossier amazon-location` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/location/](https://aws.amazon.com/location/), captured 2026-11-03T03:20:01.384Z, evidence `ev_62891d0a0a6b8512c38fb86ae4fed51e0ae4fcaa4da2f0d2b9b40ccfe6c4b9b2`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-LOCATION-CAP-AF40DB51`, `AMAZON-LOCATION-CAP-698FB473`, `AMAZON-LOCATION-CAP-567970BB`, `AMAZON-LOCATION-CAP-C046FF9E`, `AMAZON-LOCATION-CAP-444784C3`.

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
| Name / stable ID | **Amazon Location Service** / `amazon-location` | Product catalog |
| Company / category | Amazon Web Services / `cloud_infrastructure` / `maps`, `places`, `routes`, `geofencing`, `asset-tracking` | Product catalog |
| Official website / docs | [https://aws.amazon.com/location/](https://aws.amazon.com/location/) / [https://docs.aws.amazon.com/location/latest/developerguide/](https://docs.aws.amazon.com/location/latest/developerguide/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **cloud_infrastructure** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-LOCATION-CAP-AF40DB51` | dynamic and static maps | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-LOCATION-CAP-698FB473` | places search, geocoding and reverse geocoding | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-LOCATION-CAP-567970BB` | route calculation, optimization and truck restrictions | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-LOCATION-CAP-C046FF9E` | device tracking and geofencing | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-LOCATION-CAP-444784C3` | API keys, Cognito/IAM, SDKs and AWS integrations | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Products submenu`, `button: Industries submenu`, `button: Resources submenu`, `button: Get started`, `button: Contact sales`, `button: Play:`, `button: Standardize addresses and clean-up your data`, `button: Optimize your deliveries`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Getting Started`, `link: Pricing`, `link: Front-End Web and Mobile`, `link: High-quality data Access high-quality geospatial data Integrate reliable, complete, and up-to-date data into applications to make informed decisions, deliver precise insights, and optimize operations. Learn more`, `link: AWS Integrate seamlessly Quickly deploy and accelerate application development with seamless integration with AWS services. Learn more`, `link: Security, privacy, and safety Own your data Safeguard sensitive customer information, protect user privacy and reduce your overall security risks, through our shared security model. Learn more`, `link: Cost-effective Reduce operating costs Optimize costs and maximize resource efficiency. Pay only for what you need, with no long-term contracts, hidden costs, or early termination fees. Learn more`, `link: Southeast Asia Hyperlocal Mapping for Southeast Asia Access geocoding, address and POI search, routing, and map data from millions of daily deliveries across eight countries. Captures motorcycle routes, back alleys. Learn more about GrabMaps`, `link: Command Alkon built and deployed tracking application in less than 2 weeks`, `link: Learn how Halodoc, a healthcare provider, improved performance and managed costs using Amazon Location Service.`, `link: Learn how Geo.me serves around 120 million API calls with Amazon Location Service`, `button: Visualize your data on interactive maps`, `button: Track and trace your assets`, `link: See our Customers`, `link: Missing alt text value Halodoc, Indonesian healthcare provider reduced geocoding costs by 88%, and enhanced security Read the case study`, `link: Missing alt text value PostNL, e-commerce and postal provider, monitors roller cages and reduces operational cost Success story`, `link: Missing alt text value Geo.me uses matrix routing for trucks and stored addresses to reduce cost by 90% Read the case study`, `link: Missing alt text value Coolstays vacation rental site, saw a 28% improvement in tile load speed and a 50% cost reduction Success story`, `link: Missing alt text value Jollibee Group has 17 brands and 6,300+ stores in 34 countries. Success story`, `link: Learn how Amazon Location service can help your business needs Learn more`, `link: FAQs Missing alt text value Get answer to your frequently asked questions Learn more`, `link: Developer Tools Missing alt text value Try Amazon Location APIs in the API Playground Explore the API Playground`, `link: Console Missing alt text value Start building on Amazon Location Service Explore`, `link: Getting started Missing alt text value Learn with a hands-on getting started guide and more Learn more`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **dynamic and static maps:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **places search, geocoding and reverse geocoding:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **route calculation, optimization and truck restrictions:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **device tracking and geofencing:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **API keys, Cognito/IAM, SDKs and AWS integrations:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon Location Service`, `What is Amazon Location Service?`, `Everything you need to build mapping applications`, `Create captivating maps`, `Key benefits`, `Access high-quality geospatial data`, `Integrate seamlessly`, `Own your data`, `Reduce operating costs`, `Hyperlocal Mapping for Southeast Asia`, `Data points`, `<0`, `0%+`, `0M+`, `Use cases`, `Standardize addresses and clean-up your data`, `Optimize your deliveries`, `Visualize your data on interactive maps`, `Track and trace your assets`, `Customers optimizing their operation and productivity with Amazon Location Service`, `Customer Stories and Case Studies`, `Halodoc, Indonesian healthcare provider reduced geocoding costs by 88%, and enhanced security`, `PostNL, e-commerce and postal provider, monitors roller cages and reduces operational cost`, `Geo.me uses matrix routing for trucks and stored addresses to reduce cost by 90%`, `Coolstays vacation rental site, saw a 28% improvement in tile load speed and a 50% cost reduction` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Products submenu`, `button: Industries submenu`, `button: Resources submenu`, `button: Get started`, `button: Contact sales`, `button: Play:`, `button: Standardize addresses and clean-up your data`, `button: Optimize your deliveries`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Getting Started`, `link: Pricing`, `link: Front-End Web and Mobile`, `link: High-quality data Access high-quality geospatial data Integrate reliable, complete, and up-to-date data into applications to make informed decisions, deliver precise insights, and optimize operations. Learn more`, `link: AWS Integrate seamlessly Quickly deploy and accelerate application development with seamless integration with AWS services. Learn more`, `link: Security, privacy, and safety Own your data Safeguard sensitive customer information, protect user privacy and reduce your overall security risks, through our shared security model. Learn more`, `link: Cost-effective Reduce operating costs Optimize costs and maximize resource efficiency. Pay only for what you need, with no long-term contracts, hidden costs, or early termination fees. Learn more`, `link: Southeast Asia Hyperlocal Mapping for Southeast Asia Access geocoding, address and POI search, routing, and map data from millions of daily deliveries across eight countries. Captures motorcycle routes, back alleys. Learn more about GrabMaps`, `link: Command Alkon built and deployed tracking application in less than 2 weeks`, `link: Learn how Halodoc, a healthcare provider, improved performance and managed costs using Amazon Location Service.`, `link: Learn how Geo.me serves around 120 million API calls with Amazon Location Service`, `button: Visualize your data on interactive maps`, `button: Track and trace your assets`, `link: See our Customers`, `link: Missing alt text value Halodoc, Indonesian healthcare provider reduced geocoding costs by 88%, and enhanced security Read the case study`, `link: Missing alt text value PostNL, e-commerce and postal provider, monitors roller cages and reduces operational cost Success story`, `link: Missing alt text value Geo.me uses matrix routing for trucks and stored addresses to reduce cost by 90% Read the case study`, `link: Missing alt text value Coolstays vacation rental site, saw a 28% improvement in tile load speed and a 50% cost reduction Success story`, `link: Missing alt text value Jollibee Group has 17 brands and 6,300+ stores in 34 countries. Success story`, `link: Learn how Amazon Location service can help your business needs Learn more`, `link: FAQs Missing alt text value Get answer to your frequently asked questions Learn more`, `link: Developer Tools Missing alt text value Try Amazon Location APIs in the API Playground Explore the API Playground`, `link: Console Missing alt text value Start building on Amazon Location Service Explore`, `link: Getting started Missing alt text value Learn with a hands-on getting started guide and more Learn more`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/location/)`, `[Getting Started](/location/getting-started/)`, `[Pricing](/location/pricing/)`, `[Front-End Web and Mobile](/products/frontend-web-mobile/)`, `[High-quality data Access high-quality geospatial data Integrate reliable, complete, and up-to-date data into applications to make informed decisions, deliver precise insights, and optimize operations. Learn more](https://docs.aws.amazon.com/location/latest/developerguide/benefits.html)`, `[AWS Integrate seamlessly Quickly deploy and accelerate application development with seamless integration with AWS services. Learn more](https://docs.aws.amazon.com/location/latest/developerguide/benefits.html)`, `[Security, privacy, and safety Own your data Safeguard sensitive customer information, protect user privacy and reduce your overall security risks, through our shared security model. Learn more](https://docs.aws.amazon.com/location/latest/developerguide/benefits.html)`, `[Cost-effective Reduce operating costs Optimize costs and maximize resource efficiency. Pay only for what you need, with no long-term contracts, hidden costs, or early termination fees. Learn more](/location/pricing/)`, `[Southeast Asia Hyperlocal Mapping for Southeast Asia Access geocoding, address and POI search, routing, and map data from millions of daily deliveries across eight countries. Captures motorcycle routes, back alleys. Learn more about GrabMaps](/location/grabmaps/)`, `[Command Alkon built and deployed tracking application in less than 2 weeks](/location/customers/)`, `[Learn how Halodoc, a healthcare provider, improved performance and managed costs using Amazon Location Service.](/solutions/case-studies/halodoc-amazon-location-case-study/)`, `[Learn how Geo.me serves around 120 million API calls with Amazon Location Service](/solutions/case-studies/geo-me-case-study/)`, `[See our Customers](/location/customers/)`, `[Missing alt text value Halodoc, Indonesian healthcare provider reduced geocoding costs by 88%, and enhanced security Read the case study](https://aws.amazon.com/solutions/case-studies/halodoc-amazon-location-case-study/)`, `[Missing alt text value PostNL, e-commerce and postal provider, monitors roller cages and reduces operational cost Success story](https://www.youtube.com/watch?v=XEFu2T8lpfA)`, `[Missing alt text value Geo.me uses matrix routing for trucks and stored addresses to reduce cost by 90% Read the case study](https://aws.amazon.com/solutions/case-studies/geo-me-case-study/)`, `[Missing alt text value Coolstays vacation rental site, saw a 28% improvement in tile load speed and a 50% cost reduction Success story](https://aws.amazon.com/location/customers/)`, `[Missing alt text value Jollibee Group has 17 brands and 6,300+ stores in 34 countries. Success story](https://aws.amazon.com/location/customers/)`, `[Learn how Amazon Location service can help your business needs Learn more](/location/industry/)`, `[FAQs Missing alt text value Get answer to your frequently asked questions Learn more](/location/faqs/)`, `[Developer Tools Missing alt text value Try Amazon Location APIs in the API Playground Explore the API Playground](https://console.aws.amazon.com/location/api-playground)`, `[Console Missing alt text value Start building on Amazon Location Service Explore](https://console.aws.amazon.com/location/home?refid=cr_card)`, `[Getting started Missing alt text value Learn with a hands-on getting started guide and more Learn more](/location/getting-started/)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-AF40DB51 — dynamic and static maps
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-AF40DB51`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-LOCATION-CAP-AF40DB51` → `REQ-FUNC-AF40DB51` → `TEST-FUNC-AF40DB51`.

### REQ-FUNC-698FB473 — places search, geocoding and reverse geocoding
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-698FB473`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-LOCATION-CAP-698FB473` → `REQ-FUNC-698FB473` → `TEST-FUNC-698FB473`.

### REQ-FUNC-567970BB — route calculation, optimization and truck restrictions
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-567970BB`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-LOCATION-CAP-567970BB` → `REQ-FUNC-567970BB` → `TEST-FUNC-567970BB`.

### REQ-FUNC-C046FF9E — device tracking and geofencing
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C046FF9E`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-LOCATION-CAP-C046FF9E` → `REQ-FUNC-C046FF9E` → `TEST-FUNC-C046FF9E`.

### REQ-FUNC-444784C3 — API keys, Cognito/IAM, SDKs and AWS integrations
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-444784C3`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-LOCATION-CAP-444784C3` → `REQ-FUNC-444784C3` → `TEST-FUNC-444784C3`.

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

- **TEST-FUNC-AF40DB51** → `REQ-FUNC-AF40DB51`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-698FB473** → `REQ-FUNC-698FB473`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-567970BB** → `REQ-FUNC-567970BB`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C046FF9E** → `REQ-FUNC-C046FF9E`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-444784C3** → `REQ-FUNC-444784C3`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-AF40DB51, REQ-FUNC-698FB473, REQ-FUNC-567970BB, REQ-FUNC-C046FF9E, REQ-FUNC-444784C3
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-AF40DB51, REQ-FUNC-698FB473, REQ-FUNC-567970BB, REQ-FUNC-C046FF9E, REQ-FUNC-444784C3
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
- **Completion:** Trace: REQ-FUNC-AF40DB51, REQ-FUNC-698FB473, REQ-FUNC-567970BB, REQ-FUNC-C046FF9E, REQ-FUNC-444784C3; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/location/) | Not recorded | Amazon Location Service is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/location/latest/developerguide/) | Not recorded | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/location/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/documentation-overview/location/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/location/latest/developerguide/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/location/latest/APIReference/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/cli/latest/reference/location/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_62891d0a0a6b8512c38fb86ae4fed51e0ae4fcaa4da2f0d2b9b40ccfe6c4b9b2` | Amazon Location Service Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/location/) | 2026-11-03T03:20:01.384Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Products submenu, button: Industries submenu, button: Resources submenu, button: Get started, button: Contact sales, button: Play:, button: Standardize addresses and clean-up your data, button: Optimize your deliveries, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Getting Started, link: Pricing, link: Front-End Web and Mobile, link: High-quality data Access high-quality geospatial data Integrate reliable, complete, and up-to-date data into applications to make informed decisions, deliver precise insights, and optimize operations. Learn more, link: AWS Integrate seamlessly Quickly deploy and accelerate application development with seamless integration with AWS services. Learn more, link: Security, privacy, and safety Own your data Safeguard sensitive customer information, protect user privacy and reduce your overall security risks, through our shared security model. Learn more, link: Cost-effective Reduce operating costs Optimize costs and maximize resource efficiency. Pay only for what you need, with no long-term contracts, hidden costs, or early termination fees. Learn more, link: Southeast Asia Hyperlocal Mapping for Southeast Asia Access geocoding, address and POI search, routing, and map data from millions of daily deliveries across eight countries. Captures motorcycle routes, back alleys. Learn more about GrabMaps, link: Command Alkon built and deployed tracking application in less than 2 weeks, link: Learn how Halodoc, a healthcare provider, improved performance and managed costs using Amazon Location Service., link: Learn how Geo.me serves around 120 million API calls with Amazon Location Service, button: Visualize your data on interactive maps, button: Track and trace your assets, link: See our Customers, link: Missing alt text value Halodoc, Indonesian healthcare provider reduced geocoding costs by 88%, and enhanced security Read the case study, link: Missing alt text value PostNL, e-commerce and postal provider, monitors roller cages and reduces operational cost Success story, link: Missing alt text value Geo.me uses matrix routing for trucks and stored addresses to reduce cost by 90% Read the case study, link: Missing alt text value Coolstays vacation rental site, saw a 28% improvement in tile load speed and a 50% cost reduction Success story, link: Missing alt text value Jollibee Group has 17 brands and 6,300+ stores in 34 countries. Success story, link: Learn how Amazon Location service can help your business needs Learn more, link: FAQs Missing alt text value Get answer to your frequently asked questions Learn more, link: Developer Tools Missing alt text value Try Amazon Location APIs in the API Playground Explore the API Playground, link: Console Missing alt text value Start building on Amazon Location Service Explore, link: Getting started Missing alt text value Learn with a hands-on getting started guide and more Learn more, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-location`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon Location Service is AWS's managed location platform for adding maps, places, routes, device tracking and geofencing to applications. It exposes separate APIs and resources for maps, search/geocoding, route planning, trackers and geofences, with authentication through API keys, Cognito or IAM.

# 2. Product identity and ownership

- **Official name:** Amazon Location Service
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/location/

# 3. Product capabilities

- Render dynamic and static maps with application overlays.
- Search places and points of interest, geocode and reverse-geocode addresses.
- Calculate routes, optimize stops and account for traffic or vehicle restrictions.
- Track device/asset positions in real time and historically.
- Define geofences and trigger events when devices enter or exit boundaries.
- Use SDKs, API keys, Cognito/IAM, CloudTrail and AWS service integrations.

# 4. Technical architecture

The public surface includes map resources, place indexes, route calculators, trackers, geofence collections, device positions, event streams, API keys, styles, providers, quotas and regional endpoints. Map/place/route provider data and attribution constraints require explicit REA verification.

# 5. User workflows

Users create the relevant map/place/route resources, configure authentication, call APIs or SDKs from applications, publish positions to trackers, define geofence polygons, subscribe to events and display results on web/mobile maps. Tracking and geofencing workflows must account for data privacy, event latency and provider attribution.

# 6. Pricing and access

Location is an AWS pay-as-you-go service with request-based billing and a documented free-tier/trial period subject to quotas and account conditions. Current pricing, provider, Region and data-retention behavior require verification from official pricing documentation.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/location/latest/developerguide/
- API reference: https://docs.aws.amazon.com/location/latest/APIReference/
- AWS CLI namespace: `aws location`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/location/
- Integrations include Cognito, IAM, EventBridge, CloudWatch, CloudTrail, S3 and web/mobile SDKs.
- Exact provider, route, geofence, tracker, quota and authentication behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include OpenStreetMap, MapLibre, MapLibre Native, Valhalla, OSRM, GraphHopper, Pelias, Nominatim, TileServer GL, Traccar and PostGIS. These cover different map, routing, geocoding, tracking or geofencing surfaces and are not claimed equivalents to the managed AWS service.

# 9. Alternative comparison

Open-source geospatial stacks can provide maps, tiles, routing, search and tracking, but a clean-room equivalent would still need to combine managed provider data, APIs, attribution, authentication, global scale, geofences, trackers and operational guarantees.

# 10. Missing capabilities and opportunity analysis

REA should map map styles/providers, place indexes, geocoding, route options and restrictions, tracker updates, geofence geometry/events, SDK behavior, authentication, quotas, Regions, data attribution, privacy and failure recovery.

# 11. REA implementation strategy

Use the official Amazon Location product page, developer guide, API reference, CLI reference and provider/attribution documentation as research surfaces. A clean-room implementation should use independently licensed geospatial data and software, document provider and routing differences, and avoid copying AWS control-plane or proprietary provider data.

# 12. Security, privacy, and compliance

Research must verify API-key lifecycle, IAM/Cognito permissions, device identity, tracker/geofence data, encryption, CloudTrail, event authorization, location privacy, retention/deletion, provider terms and data residency.

# 13. Evidence register

- https://aws.amazon.com/location/ — official maps, places, routes, trackers and geofences scope.
- https://aws.amazon.com/location/getting-started/ — official setup and API-selection workflow.
- https://docs.aws.amazon.com/location/latest/developerguide/ — official developer guide.
- https://docs.aws.amazon.com/location/latest/APIReference/ — official API surface.
- https://docs.aws.amazon.com/cli/latest/reference/location/ — official CLI surface.

# 14. Unknowns

- Complete provider, map, place, route, tracker and geofence matrix.
- Exact event latency, quotas, Region and data-retention behavior.
- SDK, API-key, Cognito/IAM and attribution edge cases.
- Current pricing and free-tier conditions.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, provider/attribution analysis, alternatives and acceptance review remain outstanding.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier amazon-location` and inspect canonical identity with `npx rea-faang products show amazon-location --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang amazon-location --out ./amazon-location.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit amazon-location --out ./amazon-location-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-location`).
- Dossier: [research/companies/amazon_aws/products/amazon-location.md](../../../research/companies/amazon_aws/products/amazon-location.md).
- REA capture: [catalog/rea/amazon_aws/amazon-location.md](../../rea/amazon_aws/amazon-location.md) (2026-11-03T03:20:01.384Z); raw record: [catalog/rea/evidence/amazon-location.json](../../rea/evidence/amazon-location.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://aws.amazon.com/location/) — Amazon Location Service is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Official documentation entry](https://docs.aws.amazon.com/location/latest/developerguide/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/location/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/documentation-overview/location/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/location/latest/developerguide/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/location/latest/APIReference/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/cli/latest/reference/location/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon Location Service Public web-surface observation (REA)](https://aws.amazon.com/location/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Products submenu, button: Industries submenu, button: Resources submenu, button: Get started, button: Contact sales, button: Play:, button: Standardize addresses and clean-up your data, button: Optimize your deliveries, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Getting Started, link: Pricing, link: Front-End Web and Mobile, link: High-quality data Access high-quality geospatial data Integrate reliable, complete, and up-to-date data into applications to make informed decisions, deliver precise insights, and optimize operations. Learn more, link: AWS Integrate seamlessly Quickly deploy and accelerate application development with seamless integration with AWS services. Learn more, link: Security, privacy, and safety Own your data Safeguard sensitive customer information, protect user privacy and reduce your overall security risks, through our shared security model. Learn more, link: Cost-effective Reduce operating costs Optimize costs and maximize resource efficiency. Pay only for what you need, with no long-term contracts, hidden costs, or early termination fees. Learn more, link: Southeast Asia Hyperlocal Mapping for Southeast Asia Access geocoding, address and POI search, routing, and map data from millions of daily deliveries across eight countries. Captures motorcycle routes, back alleys. Learn more about GrabMaps, link: Command Alkon built and deployed tracking application in less than 2 weeks, link: Learn how Halodoc, a healthcare provider, improved performance and managed costs using Amazon Location Service., link: Learn how Geo.me serves around 120 million API calls with Amazon Location Service, button: Visualize your data on interactive maps, button: Track and trace your assets, link: See our Customers, link: Missing alt text value Halodoc, Indonesian healthcare provider reduced geocoding costs by 88%, and enhanced security Read the case study, link: Missing alt text value PostNL, e-commerce and postal provider, monitors roller cages and reduces operational cost Success story, link: Missing alt text value Geo.me uses matrix routing for trucks and stored addresses to reduce cost by 90% Read the case study, link: Missing alt text value Coolstays vacation rental site, saw a 28% improvement in tile load speed and a 50% cost reduction Success story, link: Missing alt text value Jollibee Group has 17 brands and 6,300+ stores in 34 countries. Success story, link: Learn how Amazon Location service can help your business needs Learn more, link: FAQs Missing alt text value Get answer to your frequently asked questions Learn more, link: Developer Tools Missing alt text value Try Amazon Location APIs in the API Playground Explore the API Playground, link: Console Missing alt text value Start building on Amazon Location Service Explore, link: Getting started Missing alt text value Learn with a hands-on getting started guide and more Learn more, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-03T03:20:01.384Z).
