---
name: amazon-ses
description: "Evidence-aware build skill for Amazon Simple Email Service (amazon-ses); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon Simple Email Service — implementation skill (`amazon-ses`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon Simple Email Service**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon Simple Email Service** (`amazon-ses`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-ses.md` from the catalog page, or run `npx rea-faang amazon-ses --out ./amazon-ses.md`, `npx rea-faang skills generate amazon-ses` or `npx rea-faang build agent-kit amazon-ses --out ./amazon-ses-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon Simple Email Service / `amazon-ses` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/ses/](https://aws.amazon.com/ses/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/ses/](https://docs.aws.amazon.com/ses/) | Catalog record |
| Research dossier | `npx rea-faang research dossier amazon-ses` | `research/companies/amazon_aws/products/amazon-ses.md` |
| REA report | `catalog/rea/amazon_aws/amazon-ses.md` (captured 2026-11-03T03:48:40.362Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-ses.json` (`ev_4d21c4cc720a5b24a1f56d913e2ec76ed76992070cf993965c5bf1a5ea033d17`) | Catalog evidence |
| Alternative candidates | 1 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show amazon-ses --format json` and `npx rea-faang research dossier amazon-ses` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/ses/](https://aws.amazon.com/ses/), captured 2026-11-03T03:48:40.362Z, evidence `ev_4d21c4cc720a5b24a1f56d913e2ec76ed76992070cf993965c5bf1a5ea033d17`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-SES-CAP-272DE7C0`, `AMAZON-SES-CAP-09F9F4B5`, `AMAZON-SES-CAP-2DC683FB`, `AMAZON-SES-CAP-257BB626`.

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
| Name / stable ID | **Amazon Simple Email Service** / `amazon-ses` | Product catalog |
| Company / category | Amazon Web Services / `business_software` / `email`, `transactional-email`, `smtp`, `messaging`, `deliverability` | Product catalog |
| Official website / docs | [https://aws.amazon.com/ses/](https://aws.amazon.com/ses/) / [https://docs.aws.amazon.com/ses/](https://docs.aws.amazon.com/ses/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **business_software** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-SES-CAP-272DE7C0` | Managed email identity and sending scope are documented; account access was not tested. | VERIFIED | `ev-amazon-ses-identity`, `ev-amazon-ses-verified-identities` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-SES-CAP-09F9F4B5` | Identity authentication and operational delivery events are documented. | VERIFIED | `ev-amazon-ses-auth`, `ev-amazon-ses-events` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-SES-CAP-2DC683FB` | API and event-destination surfaces are documented; exact account quotas and regional behavior remain unverified. | VERIFIED | `ev-amazon-ses-event-destination`, `ev-amazon-ses-api` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-SES-CAP-257BB626` | Postal covers a self-hosted mail foundation but not SES's managed deliverability, identity, IAM, quota, reputation or AWS service plane. | VERIFIED | `ev-amazon-ses-postal`, `ev-amazon-ses-identity` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Get started with Amazon SES`, `button: Contact sales`, `button: Play:`, `button: Send high-volume email`, `button: Increase email deliverability`, `button: Simplify email management`, `button: Streamlined secure communications`, `button: Automate transactional messages`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting Started`, `link: FAQs`, `link: Resources`, `link: Customers`, `link: Partners`, `link: Products`, `link: Business Applications`, `button: Globally deliver marketing emails`, `button: Send email from within any application`, `link: Missing alt text value Amazon sends hundreds of billions of emails per year through Amazon SES Watch the video`, `link: Missing alt text value Netflix increases email deliverability and sender scores Read the testimonial`, `link: Missing alt text value Duolingo sends daily practice emails and newsletters to over 300 million users Read the testimonial`, `link: Missing alt text value Reddit drives engagement with emails to millions of global users Read the testimonial`, `link: Find out how Amazon SES works Explore Amazon SES features`, `link: Improve inbox placement Learn more`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Managed email identity and sending scope are documented; account access was not tested.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Identity authentication and operational delivery events are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **API and event-destination surfaces are documented; exact account quotas and regional behavior remain unverified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Postal covers a self-hosted mail foundation but not SES's managed deliverability, identity, IAM, quota, reputation or AWS service plane.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon Simple Email Service`, `Why Amazon SES?`, `Benefits of Amazon SES`, `Send high-volume email`, `Increase email deliverability`, `Simplify email management`, `Streamlined secure communications`, `Use cases`, `Automate transactional messages`, `Globally deliver marketing emails`, `Send email from within any application`, `Customers`, `Amazon sends hundreds of billions of emails per year through Amazon SES`, `Netflix increases email deliverability and sender scores`, `Duolingo sends daily practice emails and newsletters to over 300 million users`, `Reddit drives engagement with emails to millions of global users`, `Next steps`, `Find out how Amazon SES works`, `Improve inbox placement`, `Learn`, `Resources`, `Developers`, `Help` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Get started with Amazon SES`, `button: Contact sales`, `button: Play:`, `button: Send high-volume email`, `button: Increase email deliverability`, `button: Simplify email management`, `button: Streamlined secure communications`, `button: Automate transactional messages`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting Started`, `link: FAQs`, `link: Resources`, `link: Customers`, `link: Partners`, `link: Products`, `link: Business Applications`, `button: Globally deliver marketing emails`, `button: Send email from within any application`, `link: Missing alt text value Amazon sends hundreds of billions of emails per year through Amazon SES Watch the video`, `link: Missing alt text value Netflix increases email deliverability and sender scores Read the testimonial`, `link: Missing alt text value Duolingo sends daily practice emails and newsletters to over 300 million users Read the testimonial`, `link: Missing alt text value Reddit drives engagement with emails to millions of global users Read the testimonial`, `link: Find out how Amazon SES works Explore Amazon SES features`, `link: Improve inbox placement Learn more`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/ses/)`, `[Features](/ses/details/)`, `[Pricing](/ses/pricing/)`, `[Getting Started](/ses/getting-started/)`, `[FAQs](/ses/faqs/)`, `[Resources](/ses/developer-resources/)`, `[Customers](/ses/customers/)`, `[Partners](/ses/partners/)`, `[Products](/products/)`, `[Business Applications](/business-applications/)`, `[Missing alt text value Amazon sends hundreds of billions of emails per year through Amazon SES Watch the video](https://www.youtube.com/watch?v=-SZHt2t-LnI&t=1162s)`, `[Missing alt text value Netflix increases email deliverability and sender scores Read the testimonial](https://aws.amazon.com/ses/customers/?pg=ln&p=ses&sec=c#Netflix)`, `[Missing alt text value Duolingo sends daily practice emails and newsletters to over 300 million users Read the testimonial](https://aws.amazon.com/ses/customers/?pg=ln&p=ses&sec=c#Duolingo)`, `[Missing alt text value Reddit drives engagement with emails to millions of global users Read the testimonial](https://aws.amazon.com/ses/customers/?pg=ln&p=ses&sec=c#Reddit)`, `[Find out how Amazon SES works Explore Amazon SES features](https://www.youtube.com/watch?v=4pHhz6YL45I&t=23s&pp=ygUOc2VzIGF3cyBwYXZsb3M%3D)`, `[Improve inbox placement Learn more](/blogs/messaging-and-targeting/increase-email-sending-success-rates-with-amazon-simple-email-services-ses-new-virtual-deliverability-manager/)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)`, `[Product and Technical FAQs](/faqs/?nc1=f_dr)`, `[Analyst Reports](/resources/analyst-reports/?nc1=f_cc)`, `[AWS Partners](/partners/work-with-partners/?nc1=f_dr)`, `[Builder Center](https://builder.aws.com/?nc1=f_dr)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-272DE7C0 — Managed email identity and sending scope are documented; account access was not tested.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-ses-identity`, `ev-amazon-ses-verified-identities`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-272DE7C0`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-SES-CAP-272DE7C0` → `REQ-FUNC-272DE7C0` → `TEST-FUNC-272DE7C0`.

### REQ-FUNC-09F9F4B5 — Identity authentication and operational delivery events are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-ses-auth`, `ev-amazon-ses-events`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-09F9F4B5`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-SES-CAP-09F9F4B5` → `REQ-FUNC-09F9F4B5` → `TEST-FUNC-09F9F4B5`.

### REQ-FUNC-2DC683FB — API and event-destination surfaces are documented; exact account quotas and regional behavior remain unverified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-ses-event-destination`, `ev-amazon-ses-api`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2DC683FB`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-SES-CAP-2DC683FB` → `REQ-FUNC-2DC683FB` → `TEST-FUNC-2DC683FB`.

### REQ-FUNC-257BB626 — Postal covers a self-hosted mail foundation but not SES's managed deliverability, identity, IAM, quota, reputation or AWS service plane.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-ses-postal`, `ev-amazon-ses-identity`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-257BB626`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-SES-CAP-257BB626` → `REQ-FUNC-257BB626` → `TEST-FUNC-257BB626`.

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
| [Postal](https://github.com/postalserver/postal) | Not recorded; verify the canonical repository | MIT (unverified) | Self-hosted mail delivery platform for incoming and outgoing email, with SMTP, tracking and webhooks. | Does not provide SES's managed deliverability, AWS account and IAM integrations, regional quotas, reputation systems or exact API and event contracts. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `AMAZON-SES-CAP-272DE7C0` — Managed email identity and sending scope are documented; account access was not tested. | Not verified against Postal | None yet; compare with `ev_4d21c4cc720a5b24a1f56d913e2ec76ed76992070cf993965c5bf1a5ea033d17` | Candidate code path and tests must be inspected |
| `AMAZON-SES-CAP-09F9F4B5` — Identity authentication and operational delivery events are documented. | Not verified against Postal | None yet; compare with `ev_4d21c4cc720a5b24a1f56d913e2ec76ed76992070cf993965c5bf1a5ea033d17` | Candidate code path and tests must be inspected |
| `AMAZON-SES-CAP-2DC683FB` — API and event-destination surfaces are documented; exact account quotas and regional behavior remain unverified. | Not verified against Postal | None yet; compare with `ev_4d21c4cc720a5b24a1f56d913e2ec76ed76992070cf993965c5bf1a5ea033d17` | Candidate code path and tests must be inspected |
| `AMAZON-SES-CAP-257BB626` — Postal covers a self-hosted mail foundation but not SES's managed deliverability, identity, IAM, quota, reputation or AWS service plane. | Not verified against Postal | None yet; compare with `ev_4d21c4cc720a5b24a1f56d913e2ec76ed76992070cf993965c5bf1a5ea033d17` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Postal** (Self-hosted mail delivery platform for incoming and outgoing email, with SMTP, tracking and webhooks.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Postal** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-272DE7C0** → `REQ-FUNC-272DE7C0`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-09F9F4B5** → `REQ-FUNC-09F9F4B5`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-2DC683FB** → `REQ-FUNC-2DC683FB`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-257BB626** → `REQ-FUNC-257BB626`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-272DE7C0, REQ-FUNC-09F9F4B5, REQ-FUNC-2DC683FB, REQ-FUNC-257BB626
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-272DE7C0, REQ-FUNC-09F9F4B5, REQ-FUNC-2DC683FB, REQ-FUNC-257BB626
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
- **Completion:** Trace: REQ-FUNC-272DE7C0, REQ-FUNC-09F9F4B5, REQ-FUNC-2DC683FB, REQ-FUNC-257BB626; document exclusions and unknowns.
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
| `ev-amazon-ses-identity` | Amazon Simple Email Service Documentation — AWS documentation describes SES as a reliable email service and provides developer, API and CLI guides. | [link](https://docs.aws.amazon.com/ses/) | 2026-11-03T00:00:00Z | Amazon SES is AWS's email service for marketing, notification and transactional email. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-ses-verified-identities` | Verified identities in Amazon SES — AWS documents domain and email identities, verification state and sandbox recipient restrictions. | [link](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html) | 2026-11-03T00:00:00Z | SES requires verification of email-address or domain identities before they are used for sending or receiving. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-ses-auth` | Configuring identities in Amazon SES — AWS explains identity authentication and the use of SPF, DKIM and DMARC-related configuration for deliverability. | [link](https://docs.aws.amazon.com/ses/latest/dg/configure-identities.html) | 2026-11-03T00:00:00Z | SES documents SPF and DKIM authentication mechanisms for email identities. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-ses-events` | Setting up event notifications for Amazon SES — AWS documents notification methods, identity and Region scope, SNS destinations and event publishing. | [link](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html) | 2026-11-03T00:00:00Z | SES supports bounce, complaint and delivery notifications through email, SNS and event publishing. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-ses-event-destination` | EventDestination — The SES v2 API reference lists event types and CloudWatch, Kinesis Firehose, Pinpoint and SNS destinations. | [link](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_EventDestination.html) | 2026-11-03T00:00:00Z | SES event destinations can receive send, delivery, bounce, complaint, open, click, rendering-failure and delay events. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-ses-api` | Amazon SES API v2 Reference — AWS documents the SES v2 API surface and regional endpoints. | [link](https://docs.aws.amazon.com/ses/latest/APIReference-V2/) | 2026-11-03T00:00:00Z | SES v2 exposes regional API operations, data types, parameters and schemas for programmatic email operations. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-ses-postal` | Postal — The official repository documents Postal's mail-server capabilities and MIT license. | [link](https://github.com/postalserver/postal) | 2026-11-03T00:00:00Z | Postal is an MIT-licensed open-source self-hosted mail delivery platform for incoming and outgoing email. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/ses/) | 2026-11-03T00:00:00Z | Amazon Simple Email Service is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/ses/) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/ses/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/ses/getting-started/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/ses/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/ses/latest/APIReference/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/ses/latest/APIReference-V2/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-6` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-7` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/ses/latest/dg/configure-identities.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-8` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-9` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-deliverability.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-10` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_EventDestination.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_4d21c4cc720a5b24a1f56d913e2ec76ed76992070cf993965c5bf1a5ea033d17` | Amazon Simple Email Service Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/ses/) | 2026-11-03T03:48:40.362Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Get started with Amazon SES, button: Contact sales, button: Play:, button: Send high-volume email, button: Increase email deliverability, button: Simplify email management, button: Streamlined secure communications, button: Automate transactional messages, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting Started, link: FAQs, link: Resources, link: Customers, link: Partners, link: Products, link: Business Applications, button: Globally deliver marketing emails, button: Send email from within any application, link: Missing alt text value Amazon sends hundreds of billions of emails per year through Amazon SES Watch the video, link: Missing alt text value Netflix increases email deliverability and sender scores Read the testimonial, link: Missing alt text value Duolingo sends daily practice emails and newsletters to over 300 million users Read the testimonial, link: Missing alt text value Reddit drives engagement with emails to millions of global users Read the testimonial, link: Find out how Amazon SES works Explore Amazon SES features, link: Improve inbox placement Learn more, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-ses`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon Simple Email Service is AWS's managed email-delivery service for transactional and marketing email. AWS documents SMTP and API sending, verified identities, DKIM and SPF, templates, configuration sets, event publishing, bounce and complaint handling and inbound email workflows. Postal is recorded as a partial self-hosted alternative, not an equivalent managed deliverability service.

# 2. Product identity and ownership

- **Official name:** Amazon Simple Email Service
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Transactional, marketing and application email delivery

# 3. Product capabilities

- Send email through SMTP, SDKs, APIs, console and CLI.
- Verify email addresses and domains before sending.
- Configure DKIM, SPF, custom MAIL FROM and reputation controls.
- Use templates, configuration sets, event destinations, bounces and complaints.
- Receive email or route inbound messages through supported AWS integrations.

# 4. Technical architecture

The public model includes identities, sending authorization, SMTP or API submission, templates, configuration sets, event destinations, quotas, suppression and inbound receipt rules. Exact reputation, queueing, filtering, retry, delivery, feedback and regional behavior remain pending REA verification.

# 5. User workflows

Typical workflows include verifying an identity, authenticating the domain, requesting production access, sending a message, observing delivery or bounce events, handling complaints, managing suppression, configuring templates and routing inbound mail. A complete study must test invalid identities, MIME limits, rate quotas, retries, event ordering, unsubscribe behavior and inbound rules.

# 6. Pricing and access

Access requires an AWS account, verified identities, IAM permissions and regional configuration. Pricing, free-tier eligibility, sending quotas, recipient limits, attachment sizes and inbound costs must be verified before implementation. SES documents account-specific daily quotas and maximum send rates.

# 7. API and integration surface

Public surfaces include console, SMTP interface, AWS CLI, SDKs, API v1, SES v2, templates, identities, configuration sets, event destinations, suppression lists and receipt rules. Exact schemas, authentication, errors, retries, idempotency, events and region behavior require command-level testing.

# 8. Existing open-source alternatives

Postal is an MIT-licensed self-hosted mail delivery platform for incoming and outgoing email, with SMTP, tracking and webhooks. It is a useful foundation for an independent email service, but does not reproduce SES's managed reputation, identity, AWS IAM, API, quota, compliance or regional service plane.

# 9. Alternative comparison

Compare SMTP and HTTP APIs, identity verification, DKIM/SPF, templates, queues, rate limits, bounce and complaint events, suppression, inbound routing, tracking, deliverability, abuse prevention, reputation, multi-tenancy and operational scaling. Postal covers the mail-server base; SES-specific managed capabilities are separate.

# 10. Missing capabilities and opportunity analysis

Research must map identity states, production-access gates, SMTP and API request contracts, MIME limits, quota behavior, queue and retry semantics, events, suppression, inbound receipt, templates, tracking, reputation, abuse handling and regional differences.

# 11. REA implementation strategy

Use official AWS documentation, API references and authorized test identities only. Capture verification, sending, event, bounce, complaint, suppression and inbound cases without using personal or customer data. Use Postal only after recording the partial-foundation verdict, and implement independent delivery infrastructure with original code, compliant domains and explicit abuse controls.

# 12. Security, privacy, and compliance

Verify IAM scope, identity ownership, DKIM/SPF/DMARC, TLS, message and recipient privacy, logging, retention, unsubscribe and suppression behavior, inbound attachment handling, abuse prevention and data residency. Never place credentials or real recipient data in the dossier or tests.

# 13. Sources and evidence

- **Product and API scope:** [SES documentation](https://docs.aws.amazon.com/ses/) and [API v2 reference](https://docs.aws.amazon.com/ses/latest/APIReference-V2/) document sending, API and CLI surfaces.
- **Identity and authentication:** [verified identities](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html) and [identity configuration](https://docs.aws.amazon.com/ses/latest/dg/configure-identities.html) support domain/email verification and SPF/DKIM claims.
- **Delivery events:** [event notifications](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html), [deliverability](https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-deliverability.html) and [EventDestination](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_EventDestination.html) support bounce, complaint, delivery, suppression and event-destination claims.
- **Alternative:** [Postal](https://github.com/postalserver/postal) is the recorded MIT-licensed self-hosted mail platform; its coverage remains partial.

# 14. Unknowns

- Complete SMTP, API v1/v2, inbound, event and template matrix.
- Exact queue, retry, reputation, quota and regional semantics.
- Current pricing, free tier, production-access and deliverability rules.
- Verified parity and operating requirements for a self-hosted equivalent.

# 15. Research status

 Researched with verified public AWS sources. Product identity, SMTP/API sending, identity verification, authentication, event destinations, bounces, complaints and suppression are documented. Exact reputation, queueing, regional limits, pricing and deliverability behavior remain unknown and are not asserted.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier amazon-ses` and inspect canonical identity with `npx rea-faang products show amazon-ses --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang amazon-ses --out ./amazon-ses.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit amazon-ses --out ./amazon-ses-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-ses`).
- Dossier: [research/companies/amazon_aws/products/amazon-ses.md](../../../research/companies/amazon_aws/products/amazon-ses.md).
- REA capture: [catalog/rea/amazon_aws/amazon-ses.md](../../rea/amazon_aws/amazon-ses.md) (2026-11-03T03:48:40.362Z); raw record: [catalog/rea/evidence/amazon-ses.json](../../rea/evidence/amazon-ses.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Amazon Simple Email Service Documentation](https://docs.aws.amazon.com/ses/) — Amazon SES is AWS's email service for marketing, notification and transactional email. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Verified identities in Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html) — SES requires verification of email-address or domain identities before they are used for sending or receiving. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Configuring identities in Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/configure-identities.html) — SES documents SPF and DKIM authentication mechanisms for email identities. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Setting up event notifications for Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html) — SES supports bounce, complaint and delivery notifications through email, SNS and event publishing. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [EventDestination](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_EventDestination.html) — SES event destinations can receive send, delivery, bounce, complaint, open, click, rendering-failure and delay events. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Amazon SES API v2 Reference](https://docs.aws.amazon.com/ses/latest/APIReference-V2/) — SES v2 exposes regional API operations, data types, parameters and schemas for programmatic email operations. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Postal](https://github.com/postalserver/postal) — Postal is an MIT-licensed open-source self-hosted mail delivery platform for incoming and outgoing email. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://aws.amazon.com/ses/) — Amazon Simple Email Service is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://docs.aws.amazon.com/ses/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://aws.amazon.com/ses/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://aws.amazon.com/ses/getting-started/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/ses/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/ses/latest/APIReference/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/ses/latest/APIReference-V2/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/ses/latest/dg/configure-identities.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-deliverability.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_EventDestination.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon Simple Email Service Public web-surface observation (REA)](https://aws.amazon.com/ses/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Get started with Amazon SES, button: Contact sales, button: Play:, button: Send high-volume email, button: Increase email deliverability, button: Simplify email management, button: Streamlined secure communications, button: Automate transactional messages, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting Started, link: FAQs, link: Resources, link: Customers, link: Partners, link: Products, link: Business Applications, button: Globally deliver marketing emails, button: Send email from within any application, link: Missing alt text value Amazon sends hundreds of billions of emails per year through Amazon SES Watch the video, link: Missing alt text value Netflix increases email deliverability and sender scores Read the testimonial, link: Missing alt text value Duolingo sends daily practice emails and newsletters to over 300 million users Read the testimonial, link: Missing alt text value Reddit drives engagement with emails to millions of global users Read the testimonial, link: Find out how Amazon SES works Explore Amazon SES features, link: Improve inbox placement Learn more, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-03T03:48:40.362Z).
