---
name: amazon-polly
description: "Evidence-aware build skill for Amazon Polly (amazon-polly); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon Polly — implementation skill (`amazon-polly`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon Polly**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon Polly** (`amazon-polly`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-polly.md` from the catalog page, or run `npx rea-faang amazon-polly --out ./amazon-polly.md`, `npx rea-faang skills generate amazon-polly` or `npx rea-faang build agent-kit amazon-polly --out ./amazon-polly-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon Polly / `amazon-polly` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/polly/](https://aws.amazon.com/polly/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/polly/](https://docs.aws.amazon.com/polly/) | Catalog record |
| Research dossier | `npx rea-faang research dossier amazon-polly` | `research/companies/amazon_aws/products/amazon-polly.md` |
| REA report | `catalog/rea/amazon_aws/amazon-polly.md` (captured 2026-11-03T03:41:01.957Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-polly.json` (`ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f`) | Catalog evidence |
| Alternative candidates | 1 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show amazon-polly --format json` and `npx rea-faang research dossier amazon-polly` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/polly/](https://aws.amazon.com/polly/), captured 2026-11-03T03:41:01.957Z, evidence `ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-POLLY-CAP-CB394A64`, `AMAZON-POLLY-CAP-2288A448`, `AMAZON-POLLY-CAP-96C944C0`, `AMAZON-POLLY-CAP-DBAB304C`.

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
| Name / stable ID | **Amazon Polly** / `amazon-polly` | Product catalog |
| Company / category | Amazon Web Services / `ai_application` / `text-to-speech`, `speech-synthesis`, `voice`, `accessibility`, `audio` | Product catalog |
| Official website / docs | [https://aws.amazon.com/polly/](https://aws.amazon.com/polly/) / [https://docs.aws.amazon.com/polly/](https://docs.aws.amazon.com/polly/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **ai_application** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-POLLY-CAP-CB394A64` | Managed synthesis and documented voice-engine families are verified. | VERIFIED | `ev-amazon-polly-identity`, `ev-amazon-polly-engines` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-POLLY-CAP-2288A448` | Plaintext/SSML synthesis, voice selection and audio output parameters are documented. | VERIFIED | `ev-amazon-polly-api` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-POLLY-CAP-96C944C0` | Speech marks and pronunciation lexicons are documented. | VERIFIED | `ev-amazon-polly-speechmarks`, `ev-amazon-polly-lexicons` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-POLLY-CAP-DBAB304C` | Piper covers local synthesis, but Polly's hosted API, voice portfolio, language coverage and managed AWS service plane remain distinct. | VERIFIED | `ev-amazon-polly-piper`, `ev-amazon-polly-engines` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: AI/ML Services submenu`, `button: Create an AWS account`, `button: Get started with Amazon Polly`, `button: Generate speech in dozens of languages.`, `button: Engage customers with a natural-sounding voice`, `button: Create audio for media at a fraction of the cost`, `button: Is Amazon Polly text-to-speech free?`, `button: How many voices does Amazon Polly have?`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting Started`, `link: Resources`, `link: Customers`, `link: FAQs`, `link: Products`, `link: Artificial Intelligence`, `button: What is the sample rate of Amazon Polly?`, `button: Does Alexa use Amazon Polly?`, `button: Is Amazon Polly open source?`, `link: Missing alt text value The Washington Post offers readers audio across platforms Learn more`, `link: Missing alt text value Trinity Audio embeds TTS players on its website Learn more`, `link: Missing alt text value USA Today Network efficiently delivers breaking news in audio content Learn more`, `link: Service Get started with a free account Sign up`, `link: Pricing Visit the pricing page Visit pricing`, `link: Blog Learn how to customize Amazon Polly Read the blog`, `link: Contact us Speak with an expert Contact us`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Managed synthesis and documented voice-engine families are verified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Plaintext/SSML synthesis, voice selection and audio output parameters are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Speech marks and pronunciation lexicons are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Piper covers local synthesis, but Polly's hosted API, voice portfolio, language coverage and managed AWS service plane remain distinct.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon Polly - AI Voice Generator`, `What is Amazon Polly?`, `Use cases`, `Generate speech in dozens of languages.`, `Engage customers with a natural-sounding voice`, `Create audio for media at a fraction of the cost`, `Capabilities`, `Lifelike voices`, `FAQs`, `Is Amazon Polly text-to-speech free?`, `How many voices does Amazon Polly have?`, `What is the sample rate of Amazon Polly?`, `Does Alexa use Amazon Polly?`, `Is Amazon Polly open source?`, `Customers use text-to-speech capabilities to transform business processes`, `The Washington Post offers readers audio across platforms`, `Trinity Audio embeds TTS players on its website`, `USA Today Network efficiently delivers breaking news in audio content`, `Next steps`, `Get started with a free account`, `Visit the pricing page`, `Learn how to customize Amazon Polly`, `Speak with an expert`, `Learn`, `Resources` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: AI/ML Services submenu`, `button: Create an AWS account`, `button: Get started with Amazon Polly`, `button: Generate speech in dozens of languages.`, `button: Engage customers with a natural-sounding voice`, `button: Create audio for media at a fraction of the cost`, `button: Is Amazon Polly text-to-speech free?`, `button: How many voices does Amazon Polly have?`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Features`, `link: Pricing`, `link: Getting Started`, `link: Resources`, `link: Customers`, `link: FAQs`, `link: Products`, `link: Artificial Intelligence`, `button: What is the sample rate of Amazon Polly?`, `button: Does Alexa use Amazon Polly?`, `button: Is Amazon Polly open source?`, `link: Missing alt text value The Washington Post offers readers audio across platforms Learn more`, `link: Missing alt text value Trinity Audio embeds TTS players on its website Learn more`, `link: Missing alt text value USA Today Network efficiently delivers breaking news in audio content Learn more`, `link: Service Get started with a free account Sign up`, `link: Pricing Visit the pricing page Visit pricing`, `link: Blog Learn how to customize Amazon Polly Read the blog`, `link: Contact us Speak with an expert Contact us`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/polly/?nc=sn&loc=1)`, `[Features](/polly/features/?nc=sn&loc=3)`, `[Pricing](/polly/pricing/?nc=sn&loc=4)`, `[Getting Started](/polly/getting-started/?nc=sn&loc=5)`, `[Resources](/polly/resources/?nc=sn&loc=6)`, `[Customers](/polly/customers/?nc=sn&loc=7)`, `[FAQs](/polly/faqs/?nc=sn&loc=8)`, `[Products](/products/)`, `[Artificial Intelligence](/ai/)`, `[Missing alt text value The Washington Post offers readers audio across platforms Learn more](https://aws.amazon.com/blogs/machine-learning/the-washington-post-website-launches-audio-articles-voiced-by-amazon-polly/)`, `[Missing alt text value Trinity Audio embeds TTS players on its website Learn more](https://aws.amazon.com/blogs/machine-learning/converting-your-content-to-audio-for-free-with-trinity-audio-wordpress-plugin/)`, `[Missing alt text value USA Today Network efficiently delivers breaking news in audio content Learn more](https://aws.amazon.com/polly/customers/#USA_Today)`, `[Service Get started with a free account Sign up](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fpolly%2Fhome%3Fregion%3Dus-east-1%26skipRegion%3Dtrue%26state%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fpolly&forceMobileApp=0&code_challenge=uz6NCfLP7e1eVUNXGAJPu0-Uhs3elXlPpVGjGn0im6g&code_challenge_method=SHA-256)`, `[Pricing Visit the pricing page Visit pricing](https://aws.amazon.com/)`, `[Blog Learn how to customize Amazon Polly Read the blog](/blogs/machine-learning/create-audio-for-content-in-multiple-languages-with-the-same-tts-voice-persona-in-amazon-polly/)`, `[Contact us Speak with an expert Contact us](/contact-us/)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)`, `[Product and Technical FAQs](/faqs/?nc1=f_dr)`, `[Analyst Reports](/resources/analyst-reports/?nc1=f_cc)`, `[AWS Partners](/partners/work-with-partners/?nc1=f_dr)`, `[Builder Center](https://builder.aws.com/?nc1=f_dr)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-CB394A64 — Managed synthesis and documented voice-engine families are verified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-polly-identity`, `ev-amazon-polly-engines`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-CB394A64`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-POLLY-CAP-CB394A64` → `REQ-FUNC-CB394A64` → `TEST-FUNC-CB394A64`.

### REQ-FUNC-2288A448 — Plaintext/SSML synthesis, voice selection and audio output parameters are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-polly-api`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2288A448`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-POLLY-CAP-2288A448` → `REQ-FUNC-2288A448` → `TEST-FUNC-2288A448`.

### REQ-FUNC-96C944C0 — Speech marks and pronunciation lexicons are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-polly-speechmarks`, `ev-amazon-polly-lexicons`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-96C944C0`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-POLLY-CAP-96C944C0` → `REQ-FUNC-96C944C0` → `TEST-FUNC-96C944C0`.

### REQ-FUNC-DBAB304C — Piper covers local synthesis, but Polly's hosted API, voice portfolio, language coverage and managed AWS service plane remain distinct.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-polly-piper`, `ev-amazon-polly-engines`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-DBAB304C`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-POLLY-CAP-DBAB304C` → `REQ-FUNC-DBAB304C` → `TEST-FUNC-DBAB304C`.

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
| [Piper](https://github.com/OHF-Voice/piper1-gpl) | Not recorded; verify the canonical repository | GPL-3.0 (unverified) | Fast local neural text-to-speech engine with downloadable voice models. | Does not cover Polly's hosted voice catalog, language coverage, managed API, streaming/service plane or all voice/model licensing. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `AMAZON-POLLY-CAP-CB394A64` — Managed synthesis and documented voice-engine families are verified. | Not verified against Piper | None yet; compare with `ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f` | Candidate code path and tests must be inspected |
| `AMAZON-POLLY-CAP-2288A448` — Plaintext/SSML synthesis, voice selection and audio output parameters are documented. | Not verified against Piper | None yet; compare with `ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f` | Candidate code path and tests must be inspected |
| `AMAZON-POLLY-CAP-96C944C0` — Speech marks and pronunciation lexicons are documented. | Not verified against Piper | None yet; compare with `ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f` | Candidate code path and tests must be inspected |
| `AMAZON-POLLY-CAP-DBAB304C` — Piper covers local synthesis, but Polly's hosted API, voice portfolio, language coverage and managed AWS service plane remain distinct. | Not verified against Piper | None yet; compare with `ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Piper** (Fast local neural text-to-speech engine with downloadable voice models.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Piper** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-CB394A64** → `REQ-FUNC-CB394A64`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-2288A448** → `REQ-FUNC-2288A448`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-96C944C0** → `REQ-FUNC-96C944C0`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-DBAB304C** → `REQ-FUNC-DBAB304C`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-CB394A64, REQ-FUNC-2288A448, REQ-FUNC-96C944C0, REQ-FUNC-DBAB304C
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-CB394A64, REQ-FUNC-2288A448, REQ-FUNC-96C944C0, REQ-FUNC-DBAB304C
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
- **Completion:** Trace: REQ-FUNC-CB394A64, REQ-FUNC-2288A448, REQ-FUNC-96C944C0, REQ-FUNC-DBAB304C; document exclusions and unknowns.
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
| `ev-amazon-polly-identity` | How Amazon Polly works — The official guide describes input text, voice-engine selection, synthesis and audio-output formats. | [link](https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html) | Not recorded | Amazon Polly converts plaintext or SSML input into synthesized speech audio streams. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-polly-engines` | Amazon Polly voice engines — The official guide lists four voice-engine families and explains that voice support varies by engine. | [link](https://docs.aws.amazon.com/polly/latest/dg/voice-engines-polly.html) | Not recorded | Amazon Polly documents standard, neural, long-form and generative voice engines. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-polly-api` | SynthesizeSpeech API — The official API reference documents the request syntax, SSML/plaintext input and supported engine values. | [link](https://docs.aws.amazon.com/polly/latest/APIReference/API_SynthesizeSpeech.html) | Not recorded | The SynthesizeSpeech API accepts engine, language, lexicon, output format, speech marks, text type and voice parameters. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-polly-speechmarks` | Speech mark types — The official documentation describes speech-mark requests and metadata types used to synchronize audio with visual experiences. | [link](https://docs.aws.amazon.com/polly/latest/dg/using-speechmarks.html) | Not recorded | Polly can return sentence, word, viseme and SSML speech-mark metadata. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-polly-lexicons` | Managing lexicons — The official guide documents storing lexicons in an AWS Region and applying them to SynthesizeSpeech requests. | [link](https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html) | Not recorded | Polly supports regional pronunciation lexicons that can be applied during synthesis. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-polly-piper` | Piper — The official repository identifies Piper as a local TTS engine and publishes its current license and project scope. | [link](https://github.com/OHF-Voice/piper1-gpl) | Not recorded | Piper is a fast local neural text-to-speech engine under GPL-3.0. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/polly/) | 2026-11-03T00:00:00Z | Amazon Polly is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/polly/) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/polly/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/polly/latest/APIReference/API_SynthesizeSpeech.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/polly/latest/dg/using-speechmarks.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-6` | Additional official source lead — Claim/section not recorded. | [link](https://github.com/OHF-Voice/piper1-gpl) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f` | Amazon Polly Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/polly/) | 2026-11-03T03:41:01.957Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: AI/ML Services submenu, button: Create an AWS account, button: Get started with Amazon Polly, button: Generate speech in dozens of languages., button: Engage customers with a natural-sounding voice, button: Create audio for media at a fraction of the cost, button: Is Amazon Polly text-to-speech free?, button: How many voices does Amazon Polly have?, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting Started, link: Resources, link: Customers, link: FAQs, link: Products, link: Artificial Intelligence, button: What is the sample rate of Amazon Polly?, button: Does Alexa use Amazon Polly?, button: Is Amazon Polly open source?, link: Missing alt text value The Washington Post offers readers audio across platforms Learn more, link: Missing alt text value Trinity Audio embeds TTS players on its website Learn more, link: Missing alt text value USA Today Network efficiently delivers breaking news in audio content Learn more, link: Service Get started with a free account Sign up, link: Pricing Visit the pricing page Visit pricing, link: Blog Learn how to customize Amazon Polly Read the blog, link: Contact us Speak with an expert Contact us, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-polly`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon Polly is AWS's managed text-to-speech service. Public documentation describes text and SSML input, multiple voice engines, many languages and voices, pronunciation lexicons, speech marks, streaming output and file-oriented audio formats. The catalog records Piper as a partial local alternative; it does not provide Polly's hosted service plane or full voice and language portfolio.

# 2. Product identity and ownership

- **Official name:** Amazon Polly
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Cloud speech synthesis for applications, accessibility and audio workflows

# 3. Product capabilities

- Synthesize text or SSML into speech.
- Select standard, neural, long-form and generative voice engines where supported.
- Select voices and languages and tune pronunciation, pitch, rate and volume with SSML.
- Use lexicons and request speech marks or metadata alongside audio.
- Stream audio or request MP3, Ogg, PCM and telephony-oriented outputs.

# 4. Technical architecture

The documented flow is input text or SSML, engine and voice selection, synthesis through AWS APIs, and a streamed or file-oriented result. Lexicons and speech marks add pronunciation and synchronization metadata. Exact engine availability by language, quotas, latency, regional behavior and model versions remain pending REA verification.

# 5. User workflows

Typical workflows include selecting a voice, submitting text or SSML, receiving audio, optionally requesting speech marks, and caching or streaming the result. A complete implementation study must test invalid SSML, lexicon precedence, long inputs, retries, cancellation, throttling, streaming boundaries and deterministic output expectations.

# 6. Pricing and access

Use requires an AWS account, regional endpoints and IAM authorization. Pricing, quotas, free-tier eligibility, engine-specific rates and regional availability must be verified before implementation; this dossier does not treat them as fixed facts.

# 7. API and integration surface

Public integration surfaces include the AWS console, AWS CLI, SDKs, `SynthesizeSpeech`, asynchronous synthesis tasks, voice and lexicon operations, speech marks, regional endpoints and IAM. Exact request schemas, error codes, retries, quotas and SDK behavior require command-level validation.

# 8. Existing open-source alternatives

Piper is a GPL-3.0 local neural text-to-speech engine with downloadable voice models. It is a useful local foundation for an independent implementation, not a drop-in replacement for Polly's hosted API, voice catalog, language coverage, managed scaling or AWS authorization plane.

# 9. Alternative comparison

Compare text normalization, SSML support, pronunciation and lexicon behavior, voice and language coverage, audio codecs, speech marks, streaming, latency, caching, model licensing, privacy and operational limits. Piper covers local synthesis; the surrounding service contract must be designed independently.

# 10. Missing capabilities and opportunity analysis

The remaining research must map engine and voice matrices, SSML and lexicon semantics, speech-mark schemas, output formats, streaming behavior, quotas, pricing, regional endpoints, error handling, model licensing and sensitive-text handling.

# 11. REA implementation strategy

Use official AWS documentation, API references and authorized test inputs. Capture representative synthesis, SSML, lexicon, speech-mark, streaming and failure cases. Use Piper only after documenting the partial-foundation verdict, and build any independent implementation with original code, compatible licensing and no AWS branding or protected assets.

# 12. Security, privacy, and compliance

Verify IAM scope, TLS, regional processing, sensitive-text retention, request and audio logging, KMS or storage boundaries, model and voice licensing, and access to generated audio. Do not infer a compliance guarantee from the product page alone.

# 13. Sources and evidence

- https://aws.amazon.com/polly/ — official product capabilities and engines.
- https://aws.amazon.com/documentation-overview/polly/ — documentation entry point and integration scope.
- https://docs.aws.amazon.com/polly/ — official developer documentation.
- [How Amazon Polly works](https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html) — official text/SSML, voice-engine and audio-output workflow.
- [SynthesizeSpeech API](https://docs.aws.amazon.com/polly/latest/APIReference/API_SynthesizeSpeech.html) — official request schema, engines, voices and output parameters.
- [Speech mark types](https://docs.aws.amazon.com/polly/latest/dg/using-speechmarks.html) — official word, sentence, viseme and SSML metadata behavior.
- [Managing lexicons](https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html) — official pronunciation lexicon behavior and regional scope.
- [Piper](https://github.com/OHF-Voice/piper1-gpl) — open-source local alternative and GPL-3.0 license.

# 14. Unknowns

- Complete engine, voice and language availability matrix.
- Exact SSML, lexicon, speech-mark and audio-format behavior.
- Quotas, latency, pricing, retries and regional differences.
- Model and voice licensing constraints for an independent implementation.

# 15. Research status

`researched`: identity, synthesis inputs, engines, voices, output formats, speech marks, lexicons and API shape were verified from official AWS documentation. Piper remains a partial local alternative; current quotas, pricing, regional matrices and full voice/model licensing remain outside this pass.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier amazon-polly` and inspect canonical identity with `npx rea-faang products show amazon-polly --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang amazon-polly --out ./amazon-polly.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit amazon-polly --out ./amazon-polly-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-polly`).
- Dossier: [research/companies/amazon_aws/products/amazon-polly.md](../../../research/companies/amazon_aws/products/amazon-polly.md).
- REA capture: [catalog/rea/amazon_aws/amazon-polly.md](../../rea/amazon_aws/amazon-polly.md) (2026-11-03T03:41:01.957Z); raw record: [catalog/rea/evidence/amazon-polly.json](../../rea/evidence/amazon-polly.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [How Amazon Polly works](https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html) — Amazon Polly converts plaintext or SSML input into synthesized speech audio streams. (VERIFIED; accessed Not recorded).
- [Amazon Polly voice engines](https://docs.aws.amazon.com/polly/latest/dg/voice-engines-polly.html) — Amazon Polly documents standard, neural, long-form and generative voice engines. (VERIFIED; accessed Not recorded).
- [SynthesizeSpeech API](https://docs.aws.amazon.com/polly/latest/APIReference/API_SynthesizeSpeech.html) — The SynthesizeSpeech API accepts engine, language, lexicon, output format, speech marks, text type and voice parameters. (VERIFIED; accessed Not recorded).
- [Speech mark types](https://docs.aws.amazon.com/polly/latest/dg/using-speechmarks.html) — Polly can return sentence, word, viseme and SSML speech-mark metadata. (VERIFIED; accessed Not recorded).
- [Managing lexicons](https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html) — Polly supports regional pronunciation lexicons that can be applied during synthesis. (VERIFIED; accessed Not recorded).
- [Piper](https://github.com/OHF-Voice/piper1-gpl) — Piper is a fast local neural text-to-speech engine under GPL-3.0. (VERIFIED; accessed Not recorded).
- [Official product page](https://aws.amazon.com/polly/) — Amazon Polly is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://docs.aws.amazon.com/polly/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://aws.amazon.com/polly/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/polly/latest/APIReference/API_SynthesizeSpeech.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/polly/latest/dg/using-speechmarks.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://github.com/OHF-Voice/piper1-gpl) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon Polly Public web-surface observation (REA)](https://aws.amazon.com/polly/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: AI/ML Services submenu, button: Create an AWS account, button: Get started with Amazon Polly, button: Generate speech in dozens of languages., button: Engage customers with a natural-sounding voice, button: Create audio for media at a fraction of the cost, button: Is Amazon Polly text-to-speech free?, button: How many voices does Amazon Polly have?, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Features, link: Pricing, link: Getting Started, link: Resources, link: Customers, link: FAQs, link: Products, link: Artificial Intelligence, button: What is the sample rate of Amazon Polly?, button: Does Alexa use Amazon Polly?, button: Is Amazon Polly open source?, link: Missing alt text value The Washington Post offers readers audio across platforms Learn more, link: Missing alt text value Trinity Audio embeds TTS players on its website Learn more, link: Missing alt text value USA Today Network efficiently delivers breaking news in audio content Learn more, link: Service Get started with a free account Sign up, link: Pricing Visit the pricing page Visit pricing, link: Blog Learn how to customize Amazon Polly Read the blog, link: Contact us Speak with an expert Contact us, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-03T03:41:01.957Z).
