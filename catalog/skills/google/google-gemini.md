---
name: google-gemini
description: "Evidence-aware build skill for Google Gemini (google-gemini); investigate, assess reuse, implement scoped behavior and verify."
---

# Google Gemini — implementation skill (`google-gemini`)

> **Research status:** pending. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Google Gemini**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Google Gemini** (`google-gemini`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Google Gemini** / `google-gemini` | Product catalog |
| Company / category | Google / `ai_model` / `ai_model` | Product catalog |
| Official website / docs | [https://gemini.google.com/](https://gemini.google.com/) / [https://ai.google.dev/](https://ai.google.dev/) | URL lead; compiler does not fetch source |
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
| `GOOGLE-GEMINI-CAP-2C252C95` | Multimodal reasoning (text, image, audio, video) | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-GEMINI-CAP-221CB7BC` | Long-context generation and tool use | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-GEMINI-CAP-D554FBA9` | Hosted assistant plus a developer API | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Sign in`, `button: Close sidebar`, `button: Settings`, `button: Upload & tools`, `button: Open mode picker, currently Flash-Lite`, `button: Dictate (⌘⇧D)`, `link: New chat`, `link: About Gemini link`, `link: Get Gemini app link`, `link: Subscriptions link`, `link: For Business link`, `link: Images`, `link: Sign in`, `textbox: Enter a prompt for Gemini`, `link: Google Terms Opens in a new window`, `link: Google Privacy Policy Opens in a new window`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Multimodal reasoning (text, image, audio, video):** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Long-context generation and tool use:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Hosted assistant plus a developer API:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `main`, `navigation: Side Navigation`, `navigation: Main actions menu`, `navigation: Additional actions menu` | Full IA/routes/authenticated navigation |
| Views/headings | `Conversation with Gemini`, `Meet Gemini, your personal AI assistant` | Results and subsequent views |
| Controls | `button: Sign in`, `button: Close sidebar`, `button: Settings`, `button: Upload & tools`, `button: Open mode picker, currently Flash-Lite`, `button: Dictate (⌘⇧D)`, `link: New chat`, `link: About Gemini link`, `link: Get Gemini app link`, `link: Subscriptions link`, `link: For Business link`, `link: Images`, `link: Sign in`, `textbox: Enter a prompt for Gemini`, `link: Google Terms Opens in a new window`, `link: Google Privacy Policy Opens in a new window` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[New chat](/)`, `[About Gemini link](https://gemini.google/about/?utm_source=gemini&utm_medium=web&utm_campaign=gemini_zero_state_link_to_marketing_microsite)`, `[Get Gemini app link](/app/download)`, `[Subscriptions link](https://one.google.com/ai)`, `[For Business link](http://g.co/cloud/gemini-for-business)`, `[New chat](/app)`, `[Images](/images)`, `[Sign in](#)`, `[Google Terms Opens in a new window](https://policies.google.com/terms)`, `[Google Privacy Policy Opens in a new window](https://policies.google.com/privacy)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-2C252C95 — Multimodal reasoning (text, image, audio, video)
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-2C252C95`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-GEMINI-CAP-2C252C95` → `REQ-FUNC-2C252C95` → `TEST-FUNC-2C252C95`.

### REQ-FUNC-221CB7BC — Long-context generation and tool use
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-221CB7BC`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-GEMINI-CAP-221CB7BC` → `REQ-FUNC-221CB7BC` → `TEST-FUNC-221CB7BC`.

### REQ-FUNC-D554FBA9 — Hosted assistant plus a developer API
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D554FBA9`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-GEMINI-CAP-D554FBA9` → `REQ-FUNC-D554FBA9` → `TEST-FUNC-D554FBA9`.

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
| [Llama / Mistral / Qwen / Gemma](https://huggingface.co/blog/daya-shankar/open-source-llm-models-to-run-locally) | Not recorded | mixed (mostly open weights) (unverified) | Capable open-weight model families you can run yourself. | Many are open-weight under custom licences, not OSI open source. | Proposed evaluation lead; no verified foundation |
| [Ollama](https://ollama.com/) | [Repository](https://github.com/ollama/ollama) | MIT (unverified) | Local model runner and OpenAI-compatible API. | Runs the weights; does not provide a frontier model. | Proposed evaluation lead; no verified foundation |

No candidate has been independently cloned, executed, license-reviewed or security-reviewed by this generator.
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

- **TEST-FUNC-2C252C95** → `REQ-FUNC-2C252C95`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-221CB7BC** → `REQ-FUNC-221CB7BC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-D554FBA9** → `REQ-FUNC-D554FBA9`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-2C252C95, REQ-FUNC-221CB7BC, REQ-FUNC-D554FBA9
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-2C252C95, REQ-FUNC-221CB7BC, REQ-FUNC-D554FBA9
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
- **Completion:** Trace: REQ-FUNC-2C252C95, REQ-FUNC-221CB7BC, REQ-FUNC-D554FBA9; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://gemini.google.com/) | Not recorded | Google Gemini is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://ai.google.dev/) | Not recorded | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://ai.google.dev/gemma) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_ee78d9ac82a82e891f108156723d8262e1131a2fd2925d323e55535c0c8f4fb8` | Google Gemini Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://gemini.google.com/app) | 2026-10-13T18:59:41.554Z | A dated unauthenticated snapshot exposed controls button: Sign in, button: Close sidebar, button: Settings, button: Upload & tools, button: Open mode picker, currently Flash-Lite, button: Dictate (⌘⇧D), link: New chat, link: About Gemini link, link: Get Gemini app link, link: Subscriptions link, link: For Business link, link: Images, link: Sign in, textbox: Enter a prompt for Gemini, link: Google Terms Opens in a new window, link: Google Privacy Policy Opens in a new window and landmarks main, navigation: Side Navigation, navigation: Main actions menu, navigation: Additional actions menu. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `google-gemini`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

---
schema_version: "1.0"
id: "google-gemini"
company_id: "google"
name: "Google Gemini"
aliases: []
product_type: "ai_model"
categories:
  - "ai_model"
official_url: "https://gemini.google.com/"
official_docs_url: "https://ai.google.dev/"
official_source_urls:
  - "https://ai.google.dev/gemma"
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Google Gemini is a family of large multimodal models capable of understanding and generating text, code, audio, images, and video. It represents Google's flagship generative AI offering, competing with OpenAI's GPT-4, Anthropic's Claude, and other foundation models.

# 2. Product identity and ownership

- **Official name:** Google Gemini
- **Company and business unit:** Google DeepMind & Google Brain (merged as Google AI)
- **Parent organization:** Alphabet Inc.
- **Original launch date:** 2023 (Gemini 1.0)
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; evolved from Google Brain and DeepMind merger
- **Related products:** Google AI Studio, Gemini API, Vertex AI, NotebookLM
- **Official website:** https://gemini.google.com/
- **Official documentation:** https://ai.google.dev/

# 3. Product capabilities

- Multimodal understanding (text, image, audio, video)
- Natural language generation
- Code generation
- Long-context understanding (up to 1M tokens in Gemini 1.5)
- Function calling
- Tool use
- Reasoning and problem-solving
- Translation and multilingual support

# 4. Technical architecture

Gemini models run on Google's TPU infrastructure. Model sizes vary from Gemini Nano (on-device) to Gemini Ultra (large-scale). Serving infrastructure includes:

- TPU Pods for training and inference
- JAX/XLA compilation pipeline
- Model caching and serving infrastructure
- Safety filtering and reinforcement learning from human feedback (RLHF)

Publicly documented architecture covers model interfaces and capabilities; internal training infrastructure is proprietary.

# 5. User workflows

Developers and researchers interact with Gemini through:

- AI Studio for prompt design and testing
- Gemini API via REST/HTTP
- Vertex AI integration
- On-device usage via Gemini Nano in Android

Essential workflows: model selection, prompt engineering, response generation, tool use. Advanced: system instructions, function calling, safety settings.

# 6. Pricing and access

- Free tier with limited daily requests
- Paid tiers based on token volume and model size
- Gemini 1.0 Pro, 1.5 Pro, 1.5 Flash pricing tiers
- Vertex AI pricing different from AI Studio pricing
- Account required for API access

# 7. API and integration surface

- REST/HTTP API with JSON payloads
- Google AI Studio web interface
- Vertex AI SDK integration
- Function calling schema
- Streamingly and batch deployment options

# 8. Existing open-source alternatives

Open-source models include Llama 3, Mixtral, Nemotron, Phi-3, and Qwen2. None match Gemini's multimodal capabilities at comparable scale.

# 9. Alternative comparison

Open-source alternatives exist but generally lack true multimodal capabilities or the scale and infrastructure support of Gemini.

# 10. Missing capabilities and opportunity analysis

Domain-specific fine-tuning infrastructure, multimodal data pipelines, and large-scale serving at low latency represent build opportunities. Model distillation and compression techniques are active research areas.

# 11. RAE implementation strategy

Focus on a specific modality or use case (e.g., text-only code generation, multimodal document understanding). Leverage existing open-source model frameworks (Transformers, GGUF) for independent deployment.

# 12. Security, privacy, and compliance

Model outputs should be filtered for harmful content. Data privacy requirements depend on deployment context. No specific compliance certifications for the model itself.

# 13. Sources and evidence

- https://gemini.google.com/ (product page)
- https://ai.google.dev/ (documentation)
- https://ai.googleblog.com/ (research announcements)
- https://github.com/facebookresearch/llama (Llama 3 for comparison)

# 14. Open questions

- What is the smallest Gemini model viable for independent deployment?
- What open-format model weights are compatible with existing serving infrastructure?
- How do function calling and tool use capabilities compare across models?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

No open-source alternative matches Gemini's multimodal scope at scale.

---

# 17. RAE implementation strategy (continued)

Select a target modality and fine-tune an open-source base model. Infrastructure for large-scale serving is a significant requirement.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier google-gemini` and inspect canonical identity with `npx rae-faang products show google-gemini --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang google-gemini --out ./google-gemini.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit google-gemini --out ./google-gemini-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-gemini`).
- Dossier: [research/companies/google/products/google-gemini.md](../../../research/companies/google/products/google-gemini.md).
- REA capture: [catalog/rea/google/google-gemini.md](../../rea/google/google-gemini.md) (2026-10-13T18:59:41.554Z); raw record: [catalog/rea/evidence/google-gemini.json](../../rea/evidence/google-gemini.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://gemini.google.com/) — Google Gemini is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Official documentation entry](https://ai.google.dev/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://ai.google.dev/gemma) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Google Gemini Public web-surface observation (REA)](https://gemini.google.com/app) — A dated unauthenticated snapshot exposed controls button: Sign in, button: Close sidebar, button: Settings, button: Upload & tools, button: Open mode picker, currently Flash-Lite, button: Dictate (⌘⇧D), link: New chat, link: About Gemini link, link: Get Gemini app link, link: Subscriptions link, link: For Business link, link: Images, link: Sign in, textbox: Enter a prompt for Gemini, link: Google Terms Opens in a new window, link: Google Privacy Policy Opens in a new window and landmarks main, navigation: Side Navigation, navigation: Main actions menu, navigation: Additional actions menu. (VERIFIED; accessed 2026-10-13T18:59:41.554Z).
