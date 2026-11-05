---
name: amazon-rekognition
description: "Evidence-aware build skill for Amazon Rekognition (amazon-rekognition); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon Rekognition — implementation skill (`amazon-rekognition`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon Rekognition**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon Rekognition** (`amazon-rekognition`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/amazon_aws/amazon-rekognition.md` from the catalog page, or run `npx rea-faang amazon-rekognition --out ./amazon-rekognition.md`, `npx rea-faang skills generate amazon-rekognition` or `npx rea-faang build agent-kit amazon-rekognition --out ./amazon-rekognition-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Amazon Rekognition / `amazon-rekognition` | `catalog/products.jsonl` |
| Official product URL | [https://aws.amazon.com/rekognition/](https://aws.amazon.com/rekognition/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.aws.amazon.com/rekognition/latest/dg/](https://docs.aws.amazon.com/rekognition/latest/dg/) | Catalog record |
| Research dossier | `npx rea-faang research dossier amazon-rekognition` | `research/companies/amazon_aws/products/amazon-rekognition.md` |
| REA report | `catalog/rea/amazon_aws/amazon-rekognition.md` (captured 2026-11-03T03:45:19.608Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/amazon-rekognition.json` (`ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426`) | Catalog evidence |
| Alternative candidates | 1 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show amazon-rekognition --format json` and `npx rea-faang research dossier amazon-rekognition` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://aws.amazon.com/rekognition/](https://aws.amazon.com/rekognition/), captured 2026-11-03T03:45:19.608Z, evidence `ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `AMAZON-REKOGNITION-CAP-C078B3CF`, `AMAZON-REKOGNITION-CAP-13D257D6`, `AMAZON-REKOGNITION-CAP-82837BE4`, `AMAZON-REKOGNITION-CAP-C276B8ED`.

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
| Name / stable ID | **Amazon Rekognition** / `amazon-rekognition` | Product catalog |
| Company / category | Amazon Web Services / `ai_application` / `computer-vision`, `image-analysis`, `video-analysis`, `face-analysis`, `moderation` | Product catalog |
| Official website / docs | [https://aws.amazon.com/rekognition/](https://aws.amazon.com/rekognition/) / [https://docs.aws.amazon.com/rekognition/latest/dg/](https://docs.aws.amazon.com/rekognition/latest/dg/) | URL lead; compiler does not fetch source |
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
| `AMAZON-REKOGNITION-CAP-C078B3CF` | Image and video analysis scope is documented; model internals and exact quality characteristics remain unknown. | VERIFIED | `ev-amazon-rekognition-identity`, `ev-amazon-rekognition-image-video` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-REKOGNITION-CAP-13D257D6` | Synchronous image and asynchronous stored-video operation patterns are documented. | VERIFIED | `ev-amazon-rekognition-operations`, `ev-amazon-rekognition-api` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-REKOGNITION-CAP-82837BE4` | Liveness, moderation and Custom Labels are documented as distinct capability families. | VERIFIED | `ev-amazon-rekognition-liveness`, `ev-amazon-rekognition-moderation`, `ev-amazon-rekognition-custom-labels` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-REKOGNITION-CAP-C276B8ED` | CompreFace covers a face-analysis subset but not Rekognition's general image/video analysis, moderation, liveness, Custom Labels or AWS managed plane. | VERIFIED | `ev-amazon-rekognition-compreface`, `ev-amazon-rekognition-image-video` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Get started with Amazon Rekognition`, `button: Quickly add APIs`, `button: Analyze within seconds`, `button: Easily scale`, `button: Play:`, `button: Detect inappropriate content`, `button: Verify identity online`, `button: Streamline media analysis`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Pricing`, `link: Products`, `link: Artificial Intelligence`, `link: Learn more`, `button: Send connected home smart alerts`, `link: The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses text detection to moderate user-uploaded images Watch the video`, `link: Missing alt text value PBS uses object detection to streamline media content operations Watch the video`, `link: Missing alt text value SDG&E uses Amazon Rekognition Custom Labels to detect transformer damage from drone footage Watch the video`, `link: Contact us Learn more about how you can integrate deep learning–based image and video analysis in your applications Connect with an expert`, `link: Pricing Explore Amazon Rekognition pricing Learn more`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Image and video analysis scope is documented; model internals and exact quality characteristics remain unknown.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Synchronous image and asynchronous stored-video operation patterns are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Liveness, moderation and Custom Labels are documented as distinct capability families.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **CompreFace covers a face-analysis subset but not Rekognition's general image/video analysis, moderation, liveness, Custom Labels or AWS managed plane.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Global navigation`, `main`, `navigation: Breadcrumb`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Amazon Rekognition`, `Benefits of Amazon Rekognition`, `Quickly add APIs`, `Analyze within seconds`, `Easily scale`, `Why Amazon Rekognition?`, `Features`, `Face liveness`, `Face detection and analysis`, `Custom labels`, `Text detection`, `Face compare and search`, `Content moderation`, `More features`, `Labels`, `Celebrity recognition`, `Video segment detection`, `Use cases`, `Detect inappropriate content`, `Verify identity online`, `Streamline media analysis`, `Send connected home smart alerts`, `Customers`, `Pinterest uses text detection to moderate user-uploaded images`, `PBS uses object detection to streamline media content operations` | Results and subsequent views |
| Controls | `button: English`, `button: Support`, `button: My account`, `button: AWS Profile`, `button: Discover AWS`, `button: Products`, `button: Solutions`, `button: Pricing`, `button: Resources`, `button: Toggle search`, `button: Create account`, `button: Open feedback`, `button: Get started with Amazon Rekognition`, `button: Quickly add APIs`, `button: Analyze within seconds`, `button: Easily scale`, `button: Play:`, `button: Detect inappropriate content`, `button: Verify identity online`, `button: Streamline media analysis`, `link: Skip to main content link`, `link: Contact us`, `link: AWS Marketplace`, `link: Click here to return to Amazon Web Services homepage`, `link: re:Invent`, `link: Sign in to console`, `link: Overview`, `link: Pricing`, `link: Products`, `link: Artificial Intelligence`, `link: Learn more`, `button: Send connected home smart alerts`, `link: The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses text detection to moderate user-uploaded images Watch the video`, `link: Missing alt text value PBS uses object detection to streamline media content operations Watch the video`, `link: Missing alt text value SDG&E uses Amazon Rekognition Custom Labels to detect transformer damage from drone footage Watch the video`, `link: Contact us Learn more about how you can integrate deep learning–based image and video analysis in your applications Connect with an expert`, `link: Pricing Explore Amazon Rekognition pricing Learn more`, `button: Create an AWS account`, `link: What Is AWS?`, `link: What Is Cloud Computing?`, `link: What Is Agentic AI?`, `link: Cloud Computing Concepts Hub`, `link: AWS Cloud Security`, `link: What's New`, `link: Blogs`, `link: Press Releases`, `link: Careers`, `link: Getting Started`, `link: Training`, `link: AWS Trust Center`, `link: AWS Solutions Library`, `link: Architecture Center`, `link: Product and Technical FAQs`, `link: Analyst Reports`, `link: AWS Partners`, `link: Builder Center`, `link: SDKs & Tools`, `link: .NET on AWS`, `link: Python on AWS`, `link: Java on AWS`, `link: PHP on AWS`, `link: JavaScript on AWS`, `link: Contact Us`, `link: File a Support Ticket`, `link: AWS re:Post`, `link: Knowledge Center`, `link: AWS Support Overview`, `link: AWS Accessibility`, `link: Legal`, `link: Event Code of Conduct`, `link: Event Terms & Conditions`, `button: Back to top`, `link: X`, `link: Facebook`, `link: Linkedin`, `link: Instagram`, `link: Twitch`, `link: Youtube`, `link: Podcasts`, `link: Email`, `link: Privacy`, `link: Site terms`, `link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon`, `link: Cookie Preferences` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content link](#aws-page-content-main)`, `[Contact us](/contact-us/?nc2=h_ut_cu)`, `[AWS Marketplace](/marketplace?nc2=h_utmp)`, `[Click here to return to Amazon Web Services homepage](/?nc2=h_home)`, `[re:Invent](/events/reinvent/?nc2=h_l1_f)`, `[Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)`, `[Overview](/rekognition/)`, `[Pricing](/rekognition/pricing/)`, `[Products](/products/)`, `[Artificial Intelligence](/ai/)`, `[Learn more](/rekognition/face-liveness/)`, `[Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/collections.html?pg=ln&sec=ft)`, `[Learn more](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/what-is.html?pg=ln&sec=ft)`, `[Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/text-detection.html?pg=ln&sec=ft)`, `[Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/faces.html?pg=ln&sec=ft)`, `[Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html?pg=ln&sec=ft)`, `[Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/labels.html?pg=ln&sec=ft)`, `[Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/celebrities.html?pg=ln&sec=ft)`, `[Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/segments.html?pg=ln&sec=ft)`, `[The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses text detection to moderate user-uploaded images Watch the video](https://www.youtube.com/watch?v=jFgtImmEH7w&t=1526s)`, `[Missing alt text value PBS uses object detection to streamline media content operations Watch the video](https://www.youtube.com/watch?v=xoFaC_0fLfY&t=563s)`, `[Missing alt text value SDG&E uses Amazon Rekognition Custom Labels to detect transformer damage from drone footage Watch the video](https://www.youtube.com/watch?v=L7g0q7Qb4v4&t=1010s)`, `[Contact us Learn more about how you can integrate deep learning–based image and video analysis in your applications Connect with an expert](https://pages.awscloud.com/Amazon-Rekognition-Contact-Us-Registration/?pg=ln&sec=hs)`, `[Pricing Explore Amazon Rekognition pricing Learn more](/rekognition/pricing/?pg=ln&sec=hs)`, `[What Is AWS?](/what-is-aws/?nc1=f_cc)`, `[What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)`, `[What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)`, `[Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)`, `[AWS Cloud Security](/security/?nc1=f_cc)`, `[What's New](/new/?nc1=f_cc)`, `[Blogs](/blogs/?nc1=f_cc)`, `[Press Releases](https://press.aboutamazon.com/aws)`, `[Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)`, `[Getting Started](/getting-started/?nc1=f_cc)`, `[Training](/training/?nc1=f_cc)`, `[AWS Trust Center](/trust-center/?nc1=f_cc)`, `[AWS Solutions Library](/solutions/?nc1=f_cc)`, `[Architecture Center](/architecture/?nc1=f_cc)`, `[Product and Technical FAQs](/faqs/?nc1=f_dr)`, `[Analyst Reports](/resources/analyst-reports/?nc1=f_cc)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-C078B3CF — Image and video analysis scope is documented; model internals and exact quality characteristics remain unknown.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-rekognition-identity`, `ev-amazon-rekognition-image-video`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C078B3CF`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-REKOGNITION-CAP-C078B3CF` → `REQ-FUNC-C078B3CF` → `TEST-FUNC-C078B3CF`.

### REQ-FUNC-13D257D6 — Synchronous image and asynchronous stored-video operation patterns are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-rekognition-operations`, `ev-amazon-rekognition-api`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-13D257D6`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-REKOGNITION-CAP-13D257D6` → `REQ-FUNC-13D257D6` → `TEST-FUNC-13D257D6`.

### REQ-FUNC-82837BE4 — Liveness, moderation and Custom Labels are documented as distinct capability families.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-rekognition-liveness`, `ev-amazon-rekognition-moderation`, `ev-amazon-rekognition-custom-labels`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-82837BE4`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-REKOGNITION-CAP-82837BE4` → `REQ-FUNC-82837BE4` → `TEST-FUNC-82837BE4`.

### REQ-FUNC-C276B8ED — CompreFace covers a face-analysis subset but not Rekognition's general image/video analysis, moderation, liveness, Custom Labels or AWS managed plane.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-amazon-rekognition-compreface`, `ev-amazon-rekognition-image-video`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-C276B8ED`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-REKOGNITION-CAP-C276B8ED` → `REQ-FUNC-C276B8ED` → `TEST-FUNC-C276B8ED`.

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
| [CompreFace](https://github.com/exadel-inc/CompreFace) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Self-hosted REST face detection, recognition and verification service with Docker deployment. | Covers an important face-analysis subset, but not Rekognition's general image/video analysis, moderation, custom labels, liveness, streaming and AWS managed plane. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `AMAZON-REKOGNITION-CAP-C078B3CF` — Image and video analysis scope is documented; model internals and exact quality characteristics remain unknown. | Not verified against CompreFace | None yet; compare with `ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426` | Candidate code path and tests must be inspected |
| `AMAZON-REKOGNITION-CAP-13D257D6` — Synchronous image and asynchronous stored-video operation patterns are documented. | Not verified against CompreFace | None yet; compare with `ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426` | Candidate code path and tests must be inspected |
| `AMAZON-REKOGNITION-CAP-82837BE4` — Liveness, moderation and Custom Labels are documented as distinct capability families. | Not verified against CompreFace | None yet; compare with `ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426` | Candidate code path and tests must be inspected |
| `AMAZON-REKOGNITION-CAP-C276B8ED` — CompreFace covers a face-analysis subset but not Rekognition's general image/video analysis, moderation, liveness, Custom Labels or AWS managed plane. | Not verified against CompreFace | None yet; compare with `ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **CompreFace** (Self-hosted REST face detection, recognition and verification service with Docker deployment.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **CompreFace** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-C078B3CF** → `REQ-FUNC-C078B3CF`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-13D257D6** → `REQ-FUNC-13D257D6`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-82837BE4** → `REQ-FUNC-82837BE4`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-C276B8ED** → `REQ-FUNC-C276B8ED`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-C078B3CF, REQ-FUNC-13D257D6, REQ-FUNC-82837BE4, REQ-FUNC-C276B8ED
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-C078B3CF, REQ-FUNC-13D257D6, REQ-FUNC-82837BE4, REQ-FUNC-C276B8ED
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
- **Completion:** Trace: REQ-FUNC-C078B3CF, REQ-FUNC-13D257D6, REQ-FUNC-82837BE4, REQ-FUNC-C276B8ED; document exclusions and unknowns.
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
| `ev-amazon-rekognition-identity` | What is Amazon Rekognition? — AWS identifies Rekognition as a service for adding image and video analysis capabilities through APIs. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/) | 2026-11-03T00:00:00Z | Amazon Rekognition is AWS's cloud-based image and video analysis service. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-rekognition-image-video` | How Amazon Rekognition works — The official guide lists image analysis and stored or streaming video analysis capabilities and use cases. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works.html) | 2026-11-03T00:00:00Z | Rekognition provides separate image and video analysis capabilities for objects, scenes, text, faces, moderation, PPE and tracking. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-rekognition-operations` | Understanding image and video operations — AWS documents synchronous image requests and asynchronous stored-video jobs with completion notifications and result retrieval. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works-operations-intro.html) | 2026-11-03T00:00:00Z | Image operations are synchronous while stored-video analysis uses asynchronous Start and Get operations. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-rekognition-liveness` | Detecting face liveness — AWS documents the liveness session APIs, confidence score, reference image, audit images and integration components. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/face-liveness.html) | 2026-11-03T00:00:00Z | Face Liveness returns a confidence score, reference image and audit images for a liveness workflow. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-rekognition-moderation` | Moderating content — The official guide documents moderation labels, image/video workflows and optional custom moderation adapters. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html) | 2026-11-03T00:00:00Z | Rekognition provides image and video content moderation APIs and supports custom moderation adapters. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-rekognition-custom-labels` | What is Amazon Rekognition Custom Labels? — AWS documents project, dataset, training and detection workflows for labels specific to a business use case. | [link](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/) | 2026-11-03T00:00:00Z | Custom Labels supports training image classifiers or object detectors for business-specific labels. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-rekognition-api` | Amazon Rekognition API Reference — The API reference lists operation families and actions for the documented Rekognition components. | [link](https://docs.aws.amazon.com/rekognition/latest/APIReference/) | 2026-11-03T00:00:00Z | The Rekognition API covers image, bulk image, Custom Labels, stored video, Face Liveness and streaming video operations. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-amazon-rekognition-compreface` | CompreFace — The official repository documents the REST service, Docker deployment and Apache-2.0 license. | [link](https://github.com/exadel-inc/CompreFace) | 2026-11-03T00:00:00Z | CompreFace is an Apache-2.0 self-hosted face detection, recognition and verification service. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://aws.amazon.com/rekognition/) | 2026-11-03T00:00:00Z | Amazon Rekognition is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://aws.amazon.com/rekognition/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/face-liveness.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-6` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-7` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works-operations-intro.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-8` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/rekognition/latest/APIReference/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-9` | Additional official source lead — Claim/section not recorded. | [link](https://docs.aws.amazon.com/general/latest/gr/rekognition.html) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426` | Amazon Rekognition Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://aws.amazon.com/rekognition/) | 2026-11-03T03:45:19.608Z | A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Get started with Amazon Rekognition, button: Quickly add APIs, button: Analyze within seconds, button: Easily scale, button: Play:, button: Detect inappropriate content, button: Verify identity online, button: Streamline media analysis, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Pricing, link: Products, link: Artificial Intelligence, link: Learn more, button: Send connected home smart alerts, link: The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses text detection to moderate user-uploaded images Watch the video, link: Missing alt text value PBS uses object detection to streamline media content operations Watch the video, link: Missing alt text value SDG&E uses Amazon Rekognition Custom Labels to detect transformer damage from drone footage Watch the video, link: Contact us Learn more about how you can integrate deep learning–based image and video analysis in your applications Connect with an expert, link: Pricing Explore Amazon Rekognition pricing Learn more, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `amazon-rekognition`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon Rekognition is AWS's managed image and video analysis service. AWS documents image labels, objects, scenes, text, faces, moderation and PPE, plus stored and streaming video analysis, custom labels and face liveness. CompreFace is recorded as a partial self-hosted alternative for face-analysis subsets, not a full replacement.

# 2. Product identity and ownership

- **Official name:** Amazon Rekognition
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Managed computer vision for images, video, faces, text and moderation

# 3. Product capabilities

- Detect labels, objects, scenes, concepts and text in images.
- Detect, compare, index and search faces and facial attributes.
- Analyze stored and streaming video, including tracking and people of interest.
- Detect unsafe content, protective equipment and face liveness signals.
- Train and run Custom Labels models for domain-specific image classification or detection.

# 4. Technical architecture

The public API surface separates image analysis, stored-video jobs, streaming video, face collections, Custom Labels, liveness and moderation workflows. Inputs may be bytes or S3 objects depending on operation; outputs contain labels, geometry, confidence, timestamps or job metadata. Exact model versions, thresholds, retention, quota behavior and cross-feature consistency remain pending REA validation.

# 5. User workflows

Representative workflows include submitting an image, starting a stored-video job, consuming results, creating a face collection, indexing and searching faces, training a Custom Labels project, running moderation, and using streaming or liveness flows. A complete study must test invalid media, confidence thresholds, pagination, asynchronous job states, retries, partial results, deletion and consent boundaries.

# 6. Pricing and access

Access requires an AWS account, regional endpoints and IAM permissions. Pricing, free tiers, per-image or per-minute units, Custom Labels training and inference costs, quotas and supported regions must be verified before implementation.

# 7. API and integration surface

Public surfaces include console, AWS CLI, SDKs and API operations such as `DetectLabels`, `DetectText`, `DetectFaces`, `CompareFaces`, collections and face search, moderation, video jobs, Custom Labels, liveness and streaming APIs. Exact schemas, errors, retries, pagination, IAM actions and regional variations require command-level testing.

# 8. Existing open-source alternatives

CompreFace is an Apache-2.0 self-hosted REST service for face detection, recognition and verification. It is a meaningful local foundation for face workflows, but it does not cover Rekognition's general image and video analysis, moderation, Custom Labels, liveness, streaming or AWS-managed operations.

# 9. Alternative comparison

Compare image and video inputs, label taxonomy, OCR, face embeddings, collections, similarity thresholds, moderation categories, PPE, liveness, custom training, asynchronous jobs, streaming, pagination, latency, model updates, privacy, audit and deployment. CompreFace covers face subsets; the rest requires separate foundations.

# 10. Missing capabilities and opportunity analysis

Research must map operation schemas, confidence and geometry outputs, video job states, streaming transport, face collection semantics, Custom Labels training, moderation policy, liveness signals, limits, retries, data retention, regional behavior and model versioning.

# 11. REA implementation strategy

Use official AWS documentation, API references and authorized non-sensitive media. Capture representative image, video, face, moderation, Custom Labels and failure cases. Use CompreFace only after recording the partial-foundation verdict, and build an independent implementation with original code, compatible model licenses and no AWS branding or protected data.

# 12. Security, privacy, and compliance

Verify IAM scope, encryption, S3 access, biometric and face-data handling, consent, retention, deletion, region selection, logging, model training data, abuse prevention and human review for high-impact decisions. Do not infer legal compliance from API availability.

# 13. Sources and evidence

- **Product and scope:** [Amazon Rekognition developer guide](https://docs.aws.amazon.com/rekognition/latest/dg/) and [how it works](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works.html) document image and video analysis, labels, text, faces, moderation, PPE and tracking.
- **Specialized capabilities:** [Face Liveness](https://docs.aws.amazon.com/rekognition/latest/dg/face-liveness.html), [content moderation](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html) and [Custom Labels](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/) document liveness, moderation and custom model workflows.
- **Operation model:** [image and video operations](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works-operations-intro.html) documents synchronous image calls and asynchronous stored-video jobs.
- **Programmatic surface:** [API Reference](https://docs.aws.amazon.com/rekognition/latest/APIReference/) lists image, video, Custom Labels, Face Liveness and streaming operations.
- **Alternative:** [CompreFace](https://github.com/exadel-inc/CompreFace) is the recorded Apache-2.0 self-hosted face-analysis alternative; its coverage remains partial.

# 14. Unknowns

- Complete image, video, face, moderation, liveness and Custom Labels matrix.
- Exact model, threshold, confidence, job and streaming semantics.
- Current quotas, pricing, regions, retention and lifecycle rules.
- Verified parity and licensing for models used in an independent implementation.

# 15. Research status

 Researched with verified public AWS sources. Product identity, image/video operation model, face/liveness, moderation, Custom Labels and API surface are documented. Exact model behavior, thresholds, quotas, regional availability, pricing and legal/compliance conclusions remain unknown and are not asserted.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier amazon-rekognition` and inspect canonical identity with `npx rea-faang products show amazon-rekognition --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang amazon-rekognition --out ./amazon-rekognition.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit amazon-rekognition --out ./amazon-rekognition-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-rekognition`).
- Dossier: [research/companies/amazon_aws/products/amazon-rekognition.md](../../../research/companies/amazon_aws/products/amazon-rekognition.md).
- REA capture: [catalog/rea/amazon_aws/amazon-rekognition.md](../../rea/amazon_aws/amazon-rekognition.md) (2026-11-03T03:45:19.608Z); raw record: [catalog/rea/evidence/amazon-rekognition.json](../../rea/evidence/amazon-rekognition.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [What is Amazon Rekognition?](https://docs.aws.amazon.com/rekognition/latest/dg/) — Amazon Rekognition is AWS's cloud-based image and video analysis service. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [How Amazon Rekognition works](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works.html) — Rekognition provides separate image and video analysis capabilities for objects, scenes, text, faces, moderation, PPE and tracking. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Understanding image and video operations](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works-operations-intro.html) — Image operations are synchronous while stored-video analysis uses asynchronous Start and Get operations. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Detecting face liveness](https://docs.aws.amazon.com/rekognition/latest/dg/face-liveness.html) — Face Liveness returns a confidence score, reference image and audit images for a liveness workflow. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Moderating content](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html) — Rekognition provides image and video content moderation APIs and supports custom moderation adapters. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [What is Amazon Rekognition Custom Labels?](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/) — Custom Labels supports training image classifiers or object detectors for business-specific labels. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Amazon Rekognition API Reference](https://docs.aws.amazon.com/rekognition/latest/APIReference/) — The Rekognition API covers image, bulk image, Custom Labels, stored video, Face Liveness and streaming video operations. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [CompreFace](https://github.com/exadel-inc/CompreFace) — CompreFace is an Apache-2.0 self-hosted face detection, recognition and verification service. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://aws.amazon.com/rekognition/) — Amazon Rekognition is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://docs.aws.amazon.com/rekognition/latest/dg/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://aws.amazon.com/rekognition/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/rekognition/latest/dg/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/rekognition/latest/dg/face-liveness.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works-operations-intro.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/rekognition/latest/APIReference/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.aws.amazon.com/general/latest/gr/rekognition.html) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Amazon Rekognition Public web-surface observation (REA)](https://aws.amazon.com/rekognition/) — A dated unauthenticated snapshot exposed controls button: English, button: Support, button: My account, button: AWS Profile, button: Discover AWS, button: Products, button: Solutions, button: Pricing, button: Resources, button: Toggle search, button: Create account, button: Open feedback, button: Get started with Amazon Rekognition, button: Quickly add APIs, button: Analyze within seconds, button: Easily scale, button: Play:, button: Detect inappropriate content, button: Verify identity online, button: Streamline media analysis, link: Skip to main content link, link: Contact us, link: AWS Marketplace, link: Click here to return to Amazon Web Services homepage, link: re:Invent, link: Sign in to console, link: Overview, link: Pricing, link: Products, link: Artificial Intelligence, link: Learn more, button: Send connected home smart alerts, link: The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses text detection to moderate user-uploaded images Watch the video, link: Missing alt text value PBS uses object detection to streamline media content operations Watch the video, link: Missing alt text value SDG&E uses Amazon Rekognition Custom Labels to detect transformer damage from drone footage Watch the video, link: Contact us Learn more about how you can integrate deep learning–based image and video analysis in your applications Connect with an expert, link: Pricing Explore Amazon Rekognition pricing Learn more, button: Create an AWS account, link: What Is AWS?, link: What Is Cloud Computing?, link: What Is Agentic AI?, link: Cloud Computing Concepts Hub, link: AWS Cloud Security, link: What's New, link: Blogs, link: Press Releases, link: Careers, link: Getting Started, link: Training, link: AWS Trust Center, link: AWS Solutions Library, link: Architecture Center, link: Product and Technical FAQs, link: Analyst Reports, link: AWS Partners, link: Builder Center, link: SDKs & Tools, link: .NET on AWS, link: Python on AWS, link: Java on AWS, link: PHP on AWS, link: JavaScript on AWS, link: Contact Us, link: File a Support Ticket, link: AWS re:Post, link: Knowledge Center, link: AWS Support Overview, link: AWS Accessibility, link: Legal, link: Event Code of Conduct, link: Event Terms & Conditions, button: Back to top, link: X, link: Facebook, link: Linkedin, link: Instagram, link: Twitch, link: Youtube, link: Podcasts, link: Email, link: Privacy, link: Site terms, link: Your Privacy ChoicesCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon, link: Cookie Preferences and landmarks navigation: Global navigation, main, navigation: Breadcrumb, contentinfo. (VERIFIED; accessed 2026-11-03T03:45:19.608Z).
