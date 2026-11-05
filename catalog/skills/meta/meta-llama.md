---
name: meta-llama
description: "Evidence-aware build skill for Llama (meta-llama); investigate, assess reuse, implement scoped behavior and verify."
---

# Llama — implementation skill (`meta-llama`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Llama**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Llama** (`meta-llama`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/meta/meta-llama.md` from the catalog page, or run `npx rea-faang meta-llama --out ./meta-llama.md`, `npx rea-faang skills generate meta-llama` or `npx rea-faang build agent-kit meta-llama --out ./meta-llama-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Llama / `meta-llama` | `catalog/products.jsonl` |
| Official product URL | [https://ai.meta.com/llama/](https://ai.meta.com/llama/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://ai.meta.com/resources/models-and-libraries/llama-downloads/](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) | Catalog record |
| Research dossier | `npx rea-faang research dossier meta-llama` | `research/companies/meta/products/meta-llama.md` |
| REA report | `catalog/rea/meta/meta-llama.md` (captured 2026-11-03T01:40:20.026Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/meta-llama.json` (`ev_7bc078a31c3d97a5234e71dda0eacb27797462bb2f8cc8f5f168efcd05614b05`) | Catalog evidence |
| Alternative candidates | 4 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show meta-llama --format json` and `npx rea-faang research dossier meta-llama` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://dev.meta.ai/](https://dev.meta.ai/), captured 2026-11-03T01:40:20.026Z, evidence `ev_7bc078a31c3d97a5234e71dda0eacb27797462bb2f8cc8f5f168efcd05614b05`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `META-LLAMA-CAP-00635FED`, `META-LLAMA-CAP-E751B0B3`, `META-LLAMA-CAP-987B8FB8`, `META-LLAMA-CAP-494B5B49`, `META-LLAMA-CAP-14EC9279`.

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
| Name / stable ID | **Llama** / `meta-llama` | Product catalog |
| Company / category | Meta / `ai_model` / `ai_model` | Product catalog |
| Official website / docs | [https://ai.meta.com/llama/](https://ai.meta.com/llama/) / [https://ai.meta.com/resources/models-and-libraries/llama-downloads/](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **ai_model** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `META-LLAMA-CAP-00635FED` | Text generation | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-LLAMA-CAP-E751B0B3` | Multimodal model variants | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-LLAMA-CAP-987B8FB8` | Downloadable model weights subject to license | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-LLAMA-CAP-494B5B49` | Official inference utilities | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-LLAMA-CAP-14EC9279` | Self-hosted deployment where hardware and license permit | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Products`, `button: Models`, `button: Resources`, `button: Community`, `button: Copy install command`, `button: Show previous models`, `button: Show more models`, `button: Marathon planning`, `button: Game dev`, `button: Wedding seating`, `button: Coding at the frontier`, `button: Long-running agents`, `button: Advanced computer use`, `button: Active memory`, `button: Muse Wonder Full`, `link: Meta home`, `link: Documentation`, `link: Contact Sales`, `link: Login`, `link: Skip to content`, `link: Try Muse models`, `link: Contact sales`, `link: Sign in to open the chat playground`, `link: Learn more about Muse Wonder Full (opens in new tab)`, `link: Sign in to use Muse Spark 1.3 in Playground`, `link: Learn more about Muse Spark Open (opens in new tab)`, `link: Sign in to use SAM 3.1 in Playground`, `link: Sign in to use Muse Voice Transcribe in Playground`, `link: Sign in to use Muse Image in Playground`, `link: Learn more about Muse Glimmer (opens in new tab)`, `link: Sign in to use Muse Spark 1.2 in Playground`, `link: Sign in to use Muse Spark 1.1 in Playground`, `link: Muse Code Multi-agent coding in your terminal. Built for Muse Wonder and Muse Spark. Start building`, `link: Meta Model API Direct, self-serve and affordable access to Muse models. Start building`, `link: OpenRouter Swap Muse models into your existing tools and workflows. Start building`, `link: Read documentation`, `link: Quick start Your first working request in under five minutes. Point your existing OpenAI SDK compatible client at Meta Model API. Learn more`, `link: Multi-agent orchestration Stand up a four profile agentic team that turns a one line product idea into a working SaaS app. Learn more`, `link: Agent fan-out Spin multiple subagents into isolated worktrees to tackle parallel work without mid-flight collisions. Learn more`, `link: Computer use Give Muse Wonder eyes and a pair of hands and it can build software the way you do. Learn more`, `link: GitHub agent Build an autonomous GitHub bot on Meta Model API with Muse Wonder and OpenCode. Learn more`, `link: Search grounding Give your model live access to the web. Add a single tool to your request to get real time information. Learn more`, `link: Read more`, `link: Subscribe`, `link: post image`, `link: Muse Code`, `link: Meta Model API`, `link: Meta AI Connectors`, `link: Muse Connectors`, `link: Muse Wonder`, `link: Muse Spark 1.3`, `link: Muse Spark 1.2`, `link: Muse Spark 1.1`, `link: Muse Spark Open`, `link: Muse Glimmer`, `link: Muse Image`, `link: Muse Voice Transcribe`, `link: SAM 3.1`, `link: Meta Model API Docs`, `link: Muse Spark Open Docs`, `link: Muse Glimmer Docs`, `link: Llama Docs`, `link: Cookbook`, `link: Blog`, `link: Videos`, `link: Help Center`, `link: Contact Support`, `link: Meta-Models Github`, `link: Llama GitHub`, `link: Hugging Face`, `link: Terms of Service`, `link: Privacy Policy`, `link: Cookie Policy`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Text generation:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Multimodal model variants:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Downloadable model weights subject to license:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Official inference utilities:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Self-hosted deployment where hardware and license permit:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Marketing navigation`, `main`, `region: Available models`, `navigation: Tabs`, `contentinfo`, `region: Notifications` | Full IA/routes/authenticated navigation |
| Views/headings | `Your next build starts with Muse.`, `Muse Code`, `Recent models`, `Muse Wonder`, `Muse Wonder Full`, `Muse Spark 1.3`, `Muse Spark Open`, `SAM 3.1`, `Muse Voice Transcribe`, `Muse Image`, `Muse Glimmer`, `Muse Spark 1.2`, `Muse Spark 1.1`, `Meet Muse Wonder and Muse Wonder Full`, `More ways to build.`, `Cookbooks and quickstarts`, `Latest updates`, `Be the first to know` | Results and subsequent views |
| Controls | `button: Products`, `button: Models`, `button: Resources`, `button: Community`, `button: Copy install command`, `button: Show previous models`, `button: Show more models`, `button: Marathon planning`, `button: Game dev`, `button: Wedding seating`, `button: Coding at the frontier`, `button: Long-running agents`, `button: Advanced computer use`, `button: Active memory`, `button: Muse Wonder Full`, `link: Meta home`, `link: Documentation`, `link: Contact Sales`, `link: Login`, `link: Skip to content`, `link: Try Muse models`, `link: Contact sales`, `link: Sign in to open the chat playground`, `link: Learn more about Muse Wonder Full (opens in new tab)`, `link: Sign in to use Muse Spark 1.3 in Playground`, `link: Learn more about Muse Spark Open (opens in new tab)`, `link: Sign in to use SAM 3.1 in Playground`, `link: Sign in to use Muse Voice Transcribe in Playground`, `link: Sign in to use Muse Image in Playground`, `link: Learn more about Muse Glimmer (opens in new tab)`, `link: Sign in to use Muse Spark 1.2 in Playground`, `link: Sign in to use Muse Spark 1.1 in Playground`, `link: Muse Code Multi-agent coding in your terminal. Built for Muse Wonder and Muse Spark. Start building`, `link: Meta Model API Direct, self-serve and affordable access to Muse models. Start building`, `link: OpenRouter Swap Muse models into your existing tools and workflows. Start building`, `link: Read documentation`, `link: Quick start Your first working request in under five minutes. Point your existing OpenAI SDK compatible client at Meta Model API. Learn more`, `link: Multi-agent orchestration Stand up a four profile agentic team that turns a one line product idea into a working SaaS app. Learn more`, `link: Agent fan-out Spin multiple subagents into isolated worktrees to tackle parallel work without mid-flight collisions. Learn more`, `link: Computer use Give Muse Wonder eyes and a pair of hands and it can build software the way you do. Learn more`, `link: GitHub agent Build an autonomous GitHub bot on Meta Model API with Muse Wonder and OpenCode. Learn more`, `link: Search grounding Give your model live access to the web. Add a single tool to your request to get real time information. Learn more`, `link: Read more`, `link: Subscribe`, `link: post image`, `link: Muse Code`, `link: Meta Model API`, `link: Meta AI Connectors`, `link: Muse Connectors`, `link: Muse Wonder`, `link: Muse Spark 1.3`, `link: Muse Spark 1.2`, `link: Muse Spark 1.1`, `link: Muse Spark Open`, `link: Muse Glimmer`, `link: Muse Image`, `link: Muse Voice Transcribe`, `link: SAM 3.1`, `link: Meta Model API Docs`, `link: Muse Spark Open Docs`, `link: Muse Glimmer Docs`, `link: Llama Docs`, `link: Cookbook`, `link: Blog`, `link: Videos`, `link: Help Center`, `link: Contact Support`, `link: Meta-Models Github`, `link: Llama GitHub`, `link: Hugging Face`, `link: Terms of Service`, `link: Privacy Policy`, `link: Cookie Policy` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Meta home](/)`, `[Documentation](/docs)`, `[Contact Sales](/contact-sales?referrer_path=%2F)`, `[Login](/api/auth/login)`, `[Skip to content](#astryx-app-shell-main)`, `[Try Muse models](/api/auth/login)`, `[Contact sales](/contact-sales?referrer_path=%2F)`, `[Sign in to open the chat playground](/api/auth/login?next=%2Fplayground%3Fmodel_id%3Dmuse-wonder-1.0)`, `[Learn more about Muse Wonder Full (opens in new tab)](https://dev.meta.ai/models/muse-wonder)`, `[Sign in to use Muse Spark 1.3 in Playground](/api/auth/login?next=%2Fplayground%3Fmodel_id%3Dmuse-spark-1.3-contributor)`, `[Learn more about Muse Spark Open (opens in new tab)](https://research.meta.ai/blog/muse-spark-open)`, `[Sign in to use SAM 3.1 in Playground](/api/auth/login?next=%2Fplayground%2Fsegmentation%3Fmodel_id%3Dsam-3.1)`, `[Sign in to use Muse Voice Transcribe in Playground](/api/auth/login?next=%2Fplayground%2Faudio%3Fmodel_id%3Dmuse-voice-transcribe-1.0)`, `[Sign in to use Muse Image in Playground](/api/auth/login?next=%2Fplayground%2Fimage%3Fmodel_id%3Dmuse-image-1.0)`, `[Learn more about Muse Glimmer (opens in new tab)](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)`, `[Sign in to use Muse Spark 1.2 in Playground](/api/auth/login?next=%2Fplayground%3Fmodel_id%3Dmuse-spark-1.2)`, `[Sign in to use Muse Spark 1.1 in Playground](/api/auth/login?next=%2Fplayground%3Fmodel_id%3Dmuse-spark-1.1)`, `[Muse Code Multi-agent coding in your terminal. Built for Muse Wonder and Muse Spark. Start building](/products/muse-code/)`, `[Meta Model API Direct, self-serve and affordable access to Muse models. Start building](/products/meta-model-api/)`, `[OpenRouter Swap Muse models into your existing tools and workflows. Start building](https://openrouter.ai/meta/muse-spark-1.2/)`, `[Read documentation](https://dev.meta.ai/docs/)`, `[Quick start Your first working request in under five minutes. Point your existing OpenAI SDK compatible client at Meta Model API. Learn more](https://dev.meta.ai/docs/cookbook#api-fundamentals)`, `[Multi-agent orchestration Stand up a four profile agentic team that turns a one line product idea into a working SaaS app. Learn more](https://dev.meta.ai/docs/cookbook/multi-agent-orchestration)`, `[Agent fan-out Spin multiple subagents into isolated worktrees to tackle parallel work without mid-flight collisions. Learn more](http://dev.meta.ai/docs/cookbook/subagent-fanout)`, `[Computer use Give Muse Wonder eyes and a pair of hands and it can build software the way you do. Learn more](https://dev.meta.ai/docs/cookbook/computer-use)`, `[GitHub agent Build an autonomous GitHub bot on Meta Model API with Muse Wonder and OpenCode. Learn more](https://dev.meta.ai/docs/cookbook/github-agent)`, `[Search grounding Give your model live access to the web. Add a single tool to your request to get real time information. Learn more](https://dev.meta.ai/docs/cookbook/search-grounding)`, `[Read more](/resources/blog/build-with-muse-wonder)`, `[Read more](/resources/blog/build-with-muse-spark-open)`, `[Read more](/resources/blog/muse-code-new-plans-and-features)`, `[Subscribe](/subscribe)`, `[post image](https://www.facebook.com/AIatMeta/)`, `[post image](https://twitter.com/aiatmeta/)`, `[post image](https://www.youtube.com/@aiatmeta)`, `[post image](https://www.linkedin.com/showcase/aiatmeta)`, `[Muse Code](/products/muse-code/)`, `[Meta Model API](/products/meta-model-api/)`, `[Meta AI Connectors](/products/connectors/)`, `[Muse Connectors](https://muse.ai/platform)`, `[Muse Wonder](/models/muse-wonder/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-00635FED — Text generation
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-00635FED`; fixture and expected output must be specified from evidence.
- **Trace:** `META-LLAMA-CAP-00635FED` → `REQ-FUNC-00635FED` → `TEST-FUNC-00635FED`.

### REQ-FUNC-E751B0B3 — Multimodal model variants
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-E751B0B3`; fixture and expected output must be specified from evidence.
- **Trace:** `META-LLAMA-CAP-E751B0B3` → `REQ-FUNC-E751B0B3` → `TEST-FUNC-E751B0B3`.

### REQ-FUNC-987B8FB8 — Downloadable model weights subject to license
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-987B8FB8`; fixture and expected output must be specified from evidence.
- **Trace:** `META-LLAMA-CAP-987B8FB8` → `REQ-FUNC-987B8FB8` → `TEST-FUNC-987B8FB8`.

### REQ-FUNC-494B5B49 — Official inference utilities
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-494B5B49`; fixture and expected output must be specified from evidence.
- **Trace:** `META-LLAMA-CAP-494B5B49` → `REQ-FUNC-494B5B49` → `TEST-FUNC-494B5B49`.

### REQ-FUNC-14EC9279 — Self-hosted deployment where hardware and license permit
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-14EC9279`; fixture and expected output must be specified from evidence.
- **Trace:** `META-LLAMA-CAP-14EC9279` → `REQ-FUNC-14EC9279` → `TEST-FUNC-14EC9279`.

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
| [Mistral (Apache-2.0 models)](https://mistral.ai/) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Apache-2.0 licensed model family. | True OSI-licensed alternative. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Qwen](https://github.com/QwenLM/Qwen3) | Not recorded; verify the canonical repository | Apache-2.0 (many variants) (unverified) | Open-weight model family. | Licence varies by variant. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Falcon / OLMo](https://allenai.org/olmo) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Permissively licensed open models. | OLMo is fully open (data + code). | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Ollama](https://ollama.com/) | [repository](https://github.com/ollama/ollama) | MIT (unverified) | Local runner for open weights. | Runtime, not a model. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `META-LLAMA-CAP-00635FED` — Text generation | Not verified against Mistral (Apache-2.0 models) | None yet; compare with `ev_7bc078a31c3d97a5234e71dda0eacb27797462bb2f8cc8f5f168efcd05614b05` | Candidate code path and tests must be inspected |
| `META-LLAMA-CAP-E751B0B3` — Multimodal model variants | Not verified against Mistral (Apache-2.0 models) | None yet; compare with `ev_7bc078a31c3d97a5234e71dda0eacb27797462bb2f8cc8f5f168efcd05614b05` | Candidate code path and tests must be inspected |
| `META-LLAMA-CAP-987B8FB8` — Downloadable model weights subject to license | Not verified against Mistral (Apache-2.0 models) | None yet; compare with `ev_7bc078a31c3d97a5234e71dda0eacb27797462bb2f8cc8f5f168efcd05614b05` | Candidate code path and tests must be inspected |
| `META-LLAMA-CAP-494B5B49` — Official inference utilities | Not verified against Mistral (Apache-2.0 models) | None yet; compare with `ev_7bc078a31c3d97a5234e71dda0eacb27797462bb2f8cc8f5f168efcd05614b05` | Candidate code path and tests must be inspected |
| `META-LLAMA-CAP-14EC9279` — Self-hosted deployment where hardware and license permit | Not verified against Mistral (Apache-2.0 models) | None yet; compare with `ev_7bc078a31c3d97a5234e71dda0eacb27797462bb2f8cc8f5f168efcd05614b05` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Mistral (Apache-2.0 models)** (Apache-2.0 licensed model family.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Mistral (Apache-2.0 models)** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

Product-specific review: Test prompt injection, tool authorization, privacy, model drift, unsafe outputs and representative evaluations. Do not claim compliance, privacy or security parity without scoped assessment.

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

- **TEST-FUNC-00635FED** → `REQ-FUNC-00635FED`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-E751B0B3** → `REQ-FUNC-E751B0B3`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-987B8FB8** → `REQ-FUNC-987B8FB8`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-494B5B49** → `REQ-FUNC-494B5B49`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-14EC9279** → `REQ-FUNC-14EC9279`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-00635FED, REQ-FUNC-E751B0B3, REQ-FUNC-987B8FB8, REQ-FUNC-494B5B49, REQ-FUNC-14EC9279
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-00635FED, REQ-FUNC-E751B0B3, REQ-FUNC-987B8FB8, REQ-FUNC-494B5B49, REQ-FUNC-14EC9279
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
- **Completion:** Trace: REQ-FUNC-00635FED, REQ-FUNC-E751B0B3, REQ-FUNC-987B8FB8, REQ-FUNC-494B5B49, REQ-FUNC-14EC9279; document exclusions and unknowns.
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
| `ev-meta-llama-downloads` | Download Llama — The official download page lists current model variants, modalities and license notices, and requires the requester to accept applicable terms. | [link](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) | 2026-11-03T00:00:00Z | Meta lists Llama 4 Scout and Maverick and Llama 3.x variants with model-specific community license terms and an access-request flow. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-llama-repository` | meta-llama/llama — The official repository documents inference utilities, model-card references and the requirement to obtain weights through Meta's licensed download flow. | [link](https://github.com/meta-llama/llama) | 2026-11-03T00:00:00Z | Meta publishes inference code and directs users to its download and license process for Llama model weights. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-llama-model-card` | Llama model card — The model card points to a custom commercial license and describes the scope and limitations of the released model materials. | [link](https://github.com/meta-llama/llama/blob/main/MODEL_CARD.md) | 2026-11-03T00:00:00Z | Llama distributions use custom model-specific license terms and model cards rather than a generic OSI-license assumption. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://ai.meta.com/llama/) | 2026-11-03T00:00:00Z | Llama is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://github.com/meta-llama/llama) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://github.com/meta-llama/llama-models) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_7bc078a31c3d97a5234e71dda0eacb27797462bb2f8cc8f5f168efcd05614b05` | Llama Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://dev.meta.ai/) | 2026-11-03T01:40:20.026Z | A dated unauthenticated snapshot exposed controls button: Products, button: Models, button: Resources, button: Community, button: Copy install command, button: Show previous models, button: Show more models, button: Marathon planning, button: Game dev, button: Wedding seating, button: Coding at the frontier, button: Long-running agents, button: Advanced computer use, button: Active memory, button: Muse Wonder Full, link: Meta home, link: Documentation, link: Contact Sales, link: Login, link: Skip to content, link: Try Muse models, link: Contact sales, link: Sign in to open the chat playground, link: Learn more about Muse Wonder Full (opens in new tab), link: Sign in to use Muse Spark 1.3 in Playground, link: Learn more about Muse Spark Open (opens in new tab), link: Sign in to use SAM 3.1 in Playground, link: Sign in to use Muse Voice Transcribe in Playground, link: Sign in to use Muse Image in Playground, link: Learn more about Muse Glimmer (opens in new tab), link: Sign in to use Muse Spark 1.2 in Playground, link: Sign in to use Muse Spark 1.1 in Playground, link: Muse Code Multi-agent coding in your terminal. Built for Muse Wonder and Muse Spark. Start building, link: Meta Model API Direct, self-serve and affordable access to Muse models. Start building, link: OpenRouter Swap Muse models into your existing tools and workflows. Start building, link: Read documentation, link: Quick start Your first working request in under five minutes. Point your existing OpenAI SDK compatible client at Meta Model API. Learn more, link: Multi-agent orchestration Stand up a four profile agentic team that turns a one line product idea into a working SaaS app. Learn more, link: Agent fan-out Spin multiple subagents into isolated worktrees to tackle parallel work without mid-flight collisions. Learn more, link: Computer use Give Muse Wonder eyes and a pair of hands and it can build software the way you do. Learn more, link: GitHub agent Build an autonomous GitHub bot on Meta Model API with Muse Wonder and OpenCode. Learn more, link: Search grounding Give your model live access to the web. Add a single tool to your request to get real time information. Learn more, link: Read more, link: Subscribe, link: post image, link: Muse Code, link: Meta Model API, link: Meta AI Connectors, link: Muse Connectors, link: Muse Wonder, link: Muse Spark 1.3, link: Muse Spark 1.2, link: Muse Spark 1.1, link: Muse Spark Open, link: Muse Glimmer, link: Muse Image, link: Muse Voice Transcribe, link: SAM 3.1, link: Meta Model API Docs, link: Muse Spark Open Docs, link: Muse Glimmer Docs, link: Llama Docs, link: Cookbook, link: Blog, link: Videos, link: Help Center, link: Contact Support, link: Meta-Models Github, link: Llama GitHub, link: Hugging Face, link: Terms of Service, link: Privacy Policy, link: Cookie Policy and landmarks navigation: Marketing navigation, main, region: Available models, navigation: Tabs, contentinfo, region: Notifications. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `meta-llama`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# Llama

## Research verdict

Llama is Meta's family of downloadable large language and multimodal models,
distributed with model weights, model cards, inference utilities, and model-
specific community license terms. Meta's current download page lists Llama 4
Scout and Maverick as well as Llama 3.x variants. The release is open-weight, but
the model licenses are custom community licenses; “open source” must not be
treated as an OSI-license assertion.

The alternative coverage is **partial**. Mistral, Qwen, OLMo, and other model
families provide useful open-weight or more permissively licensed alternatives,
but their capabilities, licenses, weights, and deployment requirements differ.

## Product identity and boundary

- **Owner:** Meta Platforms, Inc.
- **Canonical product ID:** `meta-llama`
- **Lifecycle:** Active
- **Official product surface:** https://ai.meta.com/llama/
- **Model access:** https://ai.meta.com/resources/models-and-libraries/llama-downloads/
- **Product boundary:** Meta's model family and its public model-release tooling;
  hosted chat experiences such as Meta AI are separate catalog products.

## Verified capabilities and access

Meta's official materials verify that:

1. The family includes text and multimodal model variants across multiple Llama
   generations.
2. Current download listings include Llama 4 Scout and Maverick, plus Llama 3.1,
   3.2 and 3.3 variants with different text, vision, size and context profiles.
3. Access to model weights requires accepting the applicable license terms and
   completing Meta's download request flow.
4. The official `meta-llama/llama` repository provides inference code and points
   users to Meta's model-download and license process.
5. The `llama-models` repository provides utilities and model-specific release
   materials; it is not proof that every model has identical runtime behavior or
   license terms.

## Technical boundary

The public sources verify released weights, model cards, inference utilities and
license notices. They do not verify Meta's complete training data, training
infrastructure, serving stack, safety pipeline, evaluation process, or hosted
inference API. Those areas remain unknown and must not be presented as facts by a
build agent.

## License and operational constraints

Each Llama generation and model family must be checked against its own current
license and acceptable-use terms before download, fine-tuning, redistribution or
commercial deployment. The repository is not a substitute for legal review. A
model being downloadable or called “open” by a product page does not make its
license equivalent to Apache-2.0, MIT, or an OSI-approved license.

## Alternative assessment

### Mistral — partial model-family alternative

Some Mistral models use permissive licenses and can cover general text-generation
workloads, but model quality, modalities, context limits, weights and license
terms vary by release.

### Qwen — partial model-family alternative

Qwen provides open-weight model families and tooling. It is a viable candidate for
some self-hosted workloads, not a drop-in substitute for every Llama variant.

### OLMo — partial/open research alternative

OLMo is useful when a more transparent research stack is required. Its scope and
capability profile differ from Llama's released family.

### Ollama — runtime, not a model alternative

Ollama can simplify local model execution, but it is a runtime/distribution tool,
not a replacement model family. It should never be counted as equivalent to Llama.

## REA/build implications

An independent implementation should select a specific model, license, runtime,
hardware target, quantization strategy, evaluation set, and safety policy. Reuse
official inference utilities or a compatible runtime where permitted. Do not train
a replacement model or redistribute weights without checking the applicable
license and access terms.

## Evidence record

| Claim | Source | What it supports |
|---|---|---|
| Current Llama model families and license terms | [Meta Llama downloads](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) | Model identity, variants, access flow and community-license notice |
| Official inference code and model-download process | [meta-llama/llama](https://github.com/meta-llama/llama) | Repository ownership, inference tooling and weight-access workflow |
| Model-specific utilities and release materials | [meta-llama/llama-models](https://github.com/meta-llama/llama-models) | Official model-family tooling and per-model materials |
| Model card and custom commercial license reference | [Llama model card](https://github.com/meta-llama/llama/blob/main/MODEL_CARD.md) | License boundary and documented model-card scope |

## Known gaps

- Training data composition and complete training infrastructure are not public
  implementation specifications.
- Hosted Meta AI behavior and API availability are separate from downloadable
  Llama weights and are not inferred here.
- License, model availability, quotas, hardware requirements and safety guidance
  require a dated check for the exact model selected.

**Research date:** 2026-11-03.  
**Confidence:** Verified for public release/access surfaces; partial for alternatives.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier meta-llama` and inspect canonical identity with `npx rea-faang products show meta-llama --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang meta-llama --out ./meta-llama.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit meta-llama --out ./meta-llama-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`meta-llama`).
- Dossier: [research/companies/meta/products/meta-llama.md](../../../research/companies/meta/products/meta-llama.md).
- REA capture: [catalog/rea/meta/meta-llama.md](../../rea/meta/meta-llama.md) (2026-11-03T01:40:20.026Z); raw record: [catalog/rea/evidence/meta-llama.json](../../rea/evidence/meta-llama.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Download Llama](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) — Meta lists Llama 4 Scout and Maverick and Llama 3.x variants with model-specific community license terms and an access-request flow. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [meta-llama/llama](https://github.com/meta-llama/llama) — Meta publishes inference code and directs users to its download and license process for Llama model weights. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Llama model card](https://github.com/meta-llama/llama/blob/main/MODEL_CARD.md) — Llama distributions use custom model-specific license terms and model cards rather than a generic OSI-license assumption. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://ai.meta.com/llama/) — Llama is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://github.com/meta-llama/llama) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://github.com/meta-llama/llama-models) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Llama Public web-surface observation (REA)](https://dev.meta.ai/) — A dated unauthenticated snapshot exposed controls button: Products, button: Models, button: Resources, button: Community, button: Copy install command, button: Show previous models, button: Show more models, button: Marathon planning, button: Game dev, button: Wedding seating, button: Coding at the frontier, button: Long-running agents, button: Advanced computer use, button: Active memory, button: Muse Wonder Full, link: Meta home, link: Documentation, link: Contact Sales, link: Login, link: Skip to content, link: Try Muse models, link: Contact sales, link: Sign in to open the chat playground, link: Learn more about Muse Wonder Full (opens in new tab), link: Sign in to use Muse Spark 1.3 in Playground, link: Learn more about Muse Spark Open (opens in new tab), link: Sign in to use SAM 3.1 in Playground, link: Sign in to use Muse Voice Transcribe in Playground, link: Sign in to use Muse Image in Playground, link: Learn more about Muse Glimmer (opens in new tab), link: Sign in to use Muse Spark 1.2 in Playground, link: Sign in to use Muse Spark 1.1 in Playground, link: Muse Code Multi-agent coding in your terminal. Built for Muse Wonder and Muse Spark. Start building, link: Meta Model API Direct, self-serve and affordable access to Muse models. Start building, link: OpenRouter Swap Muse models into your existing tools and workflows. Start building, link: Read documentation, link: Quick start Your first working request in under five minutes. Point your existing OpenAI SDK compatible client at Meta Model API. Learn more, link: Multi-agent orchestration Stand up a four profile agentic team that turns a one line product idea into a working SaaS app. Learn more, link: Agent fan-out Spin multiple subagents into isolated worktrees to tackle parallel work without mid-flight collisions. Learn more, link: Computer use Give Muse Wonder eyes and a pair of hands and it can build software the way you do. Learn more, link: GitHub agent Build an autonomous GitHub bot on Meta Model API with Muse Wonder and OpenCode. Learn more, link: Search grounding Give your model live access to the web. Add a single tool to your request to get real time information. Learn more, link: Read more, link: Subscribe, link: post image, link: Muse Code, link: Meta Model API, link: Meta AI Connectors, link: Muse Connectors, link: Muse Wonder, link: Muse Spark 1.3, link: Muse Spark 1.2, link: Muse Spark 1.1, link: Muse Spark Open, link: Muse Glimmer, link: Muse Image, link: Muse Voice Transcribe, link: SAM 3.1, link: Meta Model API Docs, link: Muse Spark Open Docs, link: Muse Glimmer Docs, link: Llama Docs, link: Cookbook, link: Blog, link: Videos, link: Help Center, link: Contact Support, link: Meta-Models Github, link: Llama GitHub, link: Hugging Face, link: Terms of Service, link: Privacy Policy, link: Cookie Policy and landmarks navigation: Marketing navigation, main, region: Available models, navigation: Tabs, contentinfo, region: Notifications. (VERIFIED; accessed 2026-11-03T01:40:20.026Z).
