---
name: google-tensorflow
description: "Evidence-aware build skill for TensorFlow (google-tensorflow); investigate, assess reuse, implement scoped behavior and verify."
---

# TensorFlow — implementation skill (`google-tensorflow`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **TensorFlow**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **TensorFlow** (`google-tensorflow`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/google-tensorflow.md` from the catalog page, or run `npx rae-faang google-tensorflow --out ./google-tensorflow.md`, `npx rae-faang skills generate google-tensorflow` or `npx rae-faang build agent-kit google-tensorflow --out ./google-tensorflow-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the RAE FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | TensorFlow / `google-tensorflow` | `catalog/products.jsonl` |
| Official product URL | [https://www.tensorflow.org/](https://www.tensorflow.org/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://www.tensorflow.org/api_docs](https://www.tensorflow.org/api_docs) | Catalog record |
| Research dossier | `npx rae-faang research dossier google-tensorflow` | `research/companies/google/products/google-tensorflow.md` |
| REA report | `catalog/rea/google/google-tensorflow.md` (captured 2026-11-03T01:39:43.985Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/google-tensorflow.json` (`ev_a90c9c09fd5eb05fa68f3600b1743806ebe7374bac3a59e1b3831558b17ae765`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rae-faang products show google-tensorflow --format json` and `npx rae-faang research dossier google-tensorflow` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.tensorflow.org/](https://www.tensorflow.org/), captured 2026-11-03T01:39:43.985Z, evidence `ev_a90c9c09fd5eb05fa68f3600b1743806ebe7374bac3a59e1b3831558b17ae765`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `GOOGLE-TENSORFLOW-CAP-45821FCB`, `GOOGLE-TENSORFLOW-CAP-AD5F9F92`, `GOOGLE-TENSORFLOW-CAP-D457D65A`.

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
| Name / stable ID | **TensorFlow** / `google-tensorflow` | Product catalog |
| Company / category | Google / `machine_learning_framework` / `machine_learning_framework` | Product catalog |
| Official website / docs | [https://www.tensorflow.org/](https://www.tensorflow.org/) / [https://www.tensorflow.org/api_docs](https://www.tensorflow.org/api_docs) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **machine_learning_framework** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `GOOGLE-TENSORFLOW-CAP-45821FCB` | Tensor computation with GPU/TPU acceleration | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-TENSORFLOW-CAP-AD5F9F92` | Keras high-level training API | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-TENSORFLOW-CAP-D457D65A` | Serving, mobile (Lite) and browser (TF.js) runtimes | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Dropdown menu for Learn`, `button: Dropdown menu for API`, `button: Dropdown menu for Ecosystem`, `button: Dropdown menu for Extended Navigation`, `button: Language`, `button: Dark code theme`, `button: Copy code sample`, `button: Watch now`, `button: More`, `button: Previous slide`, `button: Next slide`, `link: Skip to main content`, `link: TensorFlow`, `link: Install`, `link: Learn`, `link: API`, `link: Ecosystem`, `combobox: Search`, `link: GitHub`, `link: Sign in`, `link: Install TensorFlow`, `link: View tutorials`, `link: Run quickstart`, `link: Watch now`, `link: Analyze relational data using graph neural networks`, `link: Learn about TF GNN`, `link: Build recommendation systems with reinforcement learning`, `link: Read the blog`, `link: TensorFlow Blog - What's new in TensorFlow 2.20`, `link: TensorFlow Blog - What's new in TensorFlow 2.19`, `link: Library TensorFlow.js Train and run models directly in the browser using JavaScript or Node.js.`, `link: Library LiteRT Deploy ML on mobile and edge devices such as Android, iOS, Raspberry Pi, and Edge TPU.`, `link: API tf.data Preprocess data and create input pipelines for ML models.`, `link: Library TFX Create production ML pipelines and implement MLOps best practices.`, `link: API tf.keras Create ML models with TensorFlow's high-level API.`, `link: Resource Kaggle Models Find pre-trained models ready for fine-tuning and deployment.`, `link: Resource TensorFlow Datasets Browse the collection of standard datasets for initial training and validation.`, `link: Tool TensorBoard Visualize and track development of ML models.`, `link: ML models & datasets Pretrained models and ready-to-use datasets for image, text, audio, and video use cases.`, `link: Libraries & extensions Packages for domain-specific applications and APIs for languages other than Python.`, `link: Developer tools Tools to evaluate models, optimize performance, and productionize ML workflows.`, `link: Get involved`, `link: Explore resources`, `link: archive`, `link: forum logo Forum`, `link: x logo X`, `link: youtube logo YouTube`, `link: linkedin logo Linkedin`, `link: Explore tutorials`, `link: Blog`, `link: Forum`, `link: Twitter`, `link: YouTube`, `link: Issue tracker`, `link: Release notes`, `link: Stack Overflow`, `link: Brand guidelines`, `link: Cite TensorFlow`, `link: Terms`, `link: Privacy`, `link: Subscribe`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Tensor computation with GPU/TPU acceleration:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Keras high-level training API:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Serving, mobile (Lite) and browser (TF.js) runtimes:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `navigation: Upper tabs`, `main`, `navigation: On this page`, `navigation`, `navigation: Footer links`, `navigation: Utility links` | Full IA/routes/authenticated navigation |
| Views/headings | `Get started with TensorFlow`, `Solve real-world problems with ML`, `What's new in TensorFlow`, `What's new in TensorFlow 2.20`, `What's new in TensorFlow 2.19`, `Explore the ecosystem`, `TensorFlow.js`, `LiteRT`, `tf.data`, `TFX`, `tf.keras`, `Kaggle Models`, `TensorFlow Datasets`, `TensorBoard`, `ML models & datasets`, `Libraries & extensions`, `Developer tools`, `Stay connected`, `Start building with TensorFlow`, `Support` | Results and subsequent views |
| Controls | `button: Dropdown menu for Learn`, `button: Dropdown menu for API`, `button: Dropdown menu for Ecosystem`, `button: Dropdown menu for Extended Navigation`, `button: Language`, `button: Dark code theme`, `button: Copy code sample`, `button: Watch now`, `button: More`, `button: Previous slide`, `button: Next slide`, `link: Skip to main content`, `link: TensorFlow`, `link: Install`, `link: Learn`, `link: API`, `link: Ecosystem`, `combobox: Search`, `link: GitHub`, `link: Sign in`, `link: Install TensorFlow`, `link: View tutorials`, `link: Run quickstart`, `link: Watch now`, `link: Analyze relational data using graph neural networks`, `link: Learn about TF GNN`, `link: Build recommendation systems with reinforcement learning`, `link: Read the blog`, `link: TensorFlow Blog - What's new in TensorFlow 2.20`, `link: TensorFlow Blog - What's new in TensorFlow 2.19`, `link: Library TensorFlow.js Train and run models directly in the browser using JavaScript or Node.js.`, `link: Library LiteRT Deploy ML on mobile and edge devices such as Android, iOS, Raspberry Pi, and Edge TPU.`, `link: API tf.data Preprocess data and create input pipelines for ML models.`, `link: Library TFX Create production ML pipelines and implement MLOps best practices.`, `link: API tf.keras Create ML models with TensorFlow's high-level API.`, `link: Resource Kaggle Models Find pre-trained models ready for fine-tuning and deployment.`, `link: Resource TensorFlow Datasets Browse the collection of standard datasets for initial training and validation.`, `link: Tool TensorBoard Visualize and track development of ML models.`, `link: ML models & datasets Pretrained models and ready-to-use datasets for image, text, audio, and video use cases.`, `link: Libraries & extensions Packages for domain-specific applications and APIs for languages other than Python.`, `link: Developer tools Tools to evaluate models, optimize performance, and productionize ML workflows.`, `link: Get involved`, `link: Explore resources`, `link: archive`, `link: forum logo Forum`, `link: x logo X`, `link: youtube logo YouTube`, `link: linkedin logo Linkedin`, `link: Explore tutorials`, `link: Blog`, `link: Forum`, `link: Twitter`, `link: YouTube`, `link: Issue tracker`, `link: Release notes`, `link: Stack Overflow`, `link: Brand guidelines`, `link: Cite TensorFlow`, `link: Terms`, `link: Privacy`, `link: Subscribe` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content](#main-content)`, `[TensorFlow](/)`, `[Install](https://www.tensorflow.org/install)`, `[Learn](https://www.tensorflow.org/learn)`, `[API](https://www.tensorflow.org/api)`, `[Ecosystem](https://www.tensorflow.org/resources/models-datasets)`, `[GitHub](//github.com/tensorflow)`, `[Sign in](https://www.tensorflow.org/_d/signin?continue=https%3A%2F%2Fwww.tensorflow.org%2F&prompt=select_account)`, `[Install TensorFlow](/install)`, `[View tutorials](/tutorials)`, `[Run quickstart](https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/quickstart/beginner.ipynb)`, `[Watch now](https://www.youtube.com/watch?v=tF70o1Q8VkM&list=PLNYkxOF6rcIAEVKJ98bDkQRkwvO4grhnt)`, `[Analyze relational data using graph neural networks](https://blog.tensorflow.org/2024/02/graph-neural-networks-in-tensorflow.html)`, `[Learn about TF GNN](https://blog.tensorflow.org/2024/02/graph-neural-networks-in-tensorflow.html)`, `[Build recommendation systems with reinforcement learning](https://blog.tensorflow.org/2023/10/simulated-spotify-listening-experiences-reinforcement-learning-tensorflow-tf-agents.html)`, `[Read the blog](https://blog.tensorflow.org/2023/10/simulated-spotify-listening-experiences-reinforcement-learning-tensorflow-tf-agents.html)`, `[TensorFlow Blog - What's new in TensorFlow 2.20](https://blog.tensorflow.org/2025/08/whats-new-in-tensorflow-2-20.html)`, `[TensorFlow Blog - What's new in TensorFlow 2.19](https://blog.tensorflow.org/2025/03/whats-new-in-tensorflow-2-19.html)`, `[Library TensorFlow.js Train and run models directly in the browser using JavaScript or Node.js.](/js)`, `[Library LiteRT Deploy ML on mobile and edge devices such as Android, iOS, Raspberry Pi, and Edge TPU.](https://ai.google.dev/edge/litert)`, `[API tf.data Preprocess data and create input pipelines for ML models.](/guide/data)`, `[Library TFX Create production ML pipelines and implement MLOps best practices.](/tfx)`, `[API tf.keras Create ML models with TensorFlow's high-level API.](/guide/keras)`, `[Resource Kaggle Models Find pre-trained models ready for fine-tuning and deployment.](https://www.kaggle.com/models)`, `[Resource TensorFlow Datasets Browse the collection of standard datasets for initial training and validation.](/datasets)`, `[Tool TensorBoard Visualize and track development of ML models.](/tensorboard)`, `[ML models & datasets Pretrained models and ready-to-use datasets for image, text, audio, and video use cases.](/resources/models-datasets)`, `[Libraries & extensions Packages for domain-specific applications and APIs for languages other than Python.](/resources/libraries-extensions)`, `[Developer tools Tools to evaluate models, optimize performance, and productionize ML workflows.](/resources/tools)`, `[Get involved](/community)`, `[Explore resources](/resources/learn-ml)`, `[archive](/subscribe/latest)`, `[forum logo Forum](https://discuss.tensorflow.org/)`, `[x logo X](https://twitter.com/tensorflow)`, `[youtube logo YouTube](https://www.youtube.com/tensorflow)`, `[linkedin logo Linkedin](https://www.linkedin.com/showcase/tensorflowdev/)`, `[Explore tutorials](/tutorials)`, `[Blog](//blog.tensorflow.org)`, `[Forum](//discuss.tensorflow.org)`, `[GitHub](//github.com/tensorflow/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-45821FCB — Tensor computation with GPU/TPU acceleration
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-45821FCB`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-TENSORFLOW-CAP-45821FCB` → `REQ-FUNC-45821FCB` → `TEST-FUNC-45821FCB`.

### REQ-FUNC-AD5F9F92 — Keras high-level training API
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-AD5F9F92`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-TENSORFLOW-CAP-AD5F9F92` → `REQ-FUNC-AD5F9F92` → `TEST-FUNC-AD5F9F92`.

### REQ-FUNC-D457D65A — Serving, mobile (Lite) and browser (TF.js) runtimes
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-D457D65A`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-TENSORFLOW-CAP-D457D65A` → `REQ-FUNC-D457D65A` → `TEST-FUNC-D457D65A`.

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
| [TensorFlow itself](https://github.com/tensorflow/tensorflow) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | TensorFlow is already free and open source. | The product is the open-source project. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [PyTorch](https://pytorch.org/) | [repository](https://github.com/pytorch/pytorch) | BSD-3-Clause (unverified) | Open framework and the dominant research ecosystem. | Independent open alternative. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [JAX](https://github.com/jax-ml/jax) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Open numerical/ML framework from Google. | Functional, XLA-based. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `GOOGLE-TENSORFLOW-CAP-45821FCB` — Tensor computation with GPU/TPU acceleration | Not verified against TensorFlow itself | None yet; compare with `ev_a90c9c09fd5eb05fa68f3600b1743806ebe7374bac3a59e1b3831558b17ae765` | Candidate code path and tests must be inspected |
| `GOOGLE-TENSORFLOW-CAP-AD5F9F92` — Keras high-level training API | Not verified against TensorFlow itself | None yet; compare with `ev_a90c9c09fd5eb05fa68f3600b1743806ebe7374bac3a59e1b3831558b17ae765` | Candidate code path and tests must be inspected |
| `GOOGLE-TENSORFLOW-CAP-D457D65A` — Serving, mobile (Lite) and browser (TF.js) runtimes | Not verified against TensorFlow itself | None yet; compare with `ev_a90c9c09fd5eb05fa68f3600b1743806ebe7374bac3a59e1b3831558b17ae765` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **TensorFlow itself** (TensorFlow is already free and open source.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **TensorFlow itself** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-45821FCB** → `REQ-FUNC-45821FCB`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-AD5F9F92** → `REQ-FUNC-AD5F9F92`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-D457D65A** → `REQ-FUNC-D457D65A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-45821FCB, REQ-FUNC-AD5F9F92, REQ-FUNC-D457D65A
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-45821FCB, REQ-FUNC-AD5F9F92, REQ-FUNC-D457D65A
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
- **Completion:** Trace: REQ-FUNC-45821FCB, REQ-FUNC-AD5F9F92, REQ-FUNC-D457D65A; document exclusions and unknowns.
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
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.tensorflow.org/) | Not recorded | TensorFlow is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://www.tensorflow.org/api_docs) | Not recorded | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `ev_a90c9c09fd5eb05fa68f3600b1743806ebe7374bac3a59e1b3831558b17ae765` | TensorFlow Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.tensorflow.org/) | 2026-11-03T01:39:43.985Z | A dated unauthenticated snapshot exposed controls button: Dropdown menu for Learn, button: Dropdown menu for API, button: Dropdown menu for Ecosystem, button: Dropdown menu for Extended Navigation, button: Language, button: Dark code theme, button: Copy code sample, button: Watch now, button: More, button: Previous slide, button: Next slide, link: Skip to main content, link: TensorFlow, link: Install, link: Learn, link: API, link: Ecosystem, combobox: Search, link: GitHub, link: Sign in, link: Install TensorFlow, link: View tutorials, link: Run quickstart, link: Watch now, link: Analyze relational data using graph neural networks, link: Learn about TF GNN, link: Build recommendation systems with reinforcement learning, link: Read the blog, link: TensorFlow Blog - What's new in TensorFlow 2.20, link: TensorFlow Blog - What's new in TensorFlow 2.19, link: Library TensorFlow.js Train and run models directly in the browser using JavaScript or Node.js., link: Library LiteRT Deploy ML on mobile and edge devices such as Android, iOS, Raspberry Pi, and Edge TPU., link: API tf.data Preprocess data and create input pipelines for ML models., link: Library TFX Create production ML pipelines and implement MLOps best practices., link: API tf.keras Create ML models with TensorFlow's high-level API., link: Resource Kaggle Models Find pre-trained models ready for fine-tuning and deployment., link: Resource TensorFlow Datasets Browse the collection of standard datasets for initial training and validation., link: Tool TensorBoard Visualize and track development of ML models., link: ML models & datasets Pretrained models and ready-to-use datasets for image, text, audio, and video use cases., link: Libraries & extensions Packages for domain-specific applications and APIs for languages other than Python., link: Developer tools Tools to evaluate models, optimize performance, and productionize ML workflows., link: Get involved, link: Explore resources, link: archive, link: forum logo Forum, link: x logo X, link: youtube logo YouTube, link: linkedin logo Linkedin, link: Explore tutorials, link: Blog, link: Forum, link: Twitter, link: YouTube, link: Issue tracker, link: Release notes, link: Stack Overflow, link: Brand guidelines, link: Cite TensorFlow, link: Terms, link: Privacy, link: Subscribe and landmarks banner, navigation: Upper tabs, main, navigation: On this page, navigation, navigation: Footer links, navigation: Utility links. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `google-tensorflow`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

TensorFlow is Google's open-source machine learning framework, widely used for research and production deployment of ML models. It has been a dominant framework since 2015 and has evolved to support both research experimentation and production serving.

# 2. Product identity and ownership

- **Official name:** TensorFlow
- **Company and business unit:** Google Brain Team
- **Parent organization:** Alphabet Inc.
- **Original launch date:** 2015 (open-source release; internal use began 2011)
- **Current lifecycle status:** active
- **Previous names:** None (succeeded Learner)
- **Acquisitions or ownership changes:** Open-sourced by Google; governance transferred to LF AI & Data Foundation
- **Related products:** JAX, Keras (now tf.keras), TFLite, TFX, Magenta, DeepMind tools
- **Official website:** https://www.tensorflow.org/
- **Official documentation:** https://www.tensorflow.org/api_docs

# 3. Product capabilities

- Define-and-run computational graph paradigm
- Keras high-level API (tf.keras)
- Execution on CPU, GPU, TPU
- Distributed training (parameter server, mirrored strategy)
- TensorBoard visualization
- TFLite for mobile and embedded deployment
- TFX (TensorFlow Extended) for production pipelines
- Automatic differentiation
- Quantization and sparsity optimization
- Model optimization and pruning

# 4. Technical architecture

TensorFlow's architecture:

- Computational graph with nodes (operations) and edges (tensors)
- Data flow execution engine
- Kernel registry for custom operations
- Device placement and distribution strategies
- Graph optimization (layout, arithmetic, fusion)
- Session management and checkpointing

Core library is open source under Apache 2.0. Some optimizations and hardware extensions have separate licensing or are proprietary.

# 5. User workflows

Primary workflows: model definition, training, evaluation, saving/loading, and deployment. Essential: graph construction, training loop, model saving. Advanced: distributed training, custom kernels, TPU utilization, pipeline automation with TFX.

# 6. Pricing and access

Apache 2.0 open source - free to use. TensorFlow Extended (TFX) components may have enterprise support options. TPU access requires Google Cloud or TPU Pod subscription.

# 7. API and integration surface

- Python API (primary)
- C++ API
- Java API
- SavedModel format for serialization
- REST API via TensorFlow Serving
- TensorFlow Lite Interpreter

# 8. Existing open-source alternatives

PyTorch, JAX, Keras, FastAI, MindSpore, Caffe2. PyTorch has become the research dominant, while TensorFlow remains strong in production.

# 9. Alternative comparison

PyTorch is the primary research alternative. JAX offers superior XLA compilation. Keras (now tf.keras) is the high-level API within TensorFlow. All three support GPU/TPU deployment.

# 10. Missing capabilities and opportunity analysis

Research workflow integration, production pipeline automation (TFX), and model optimization techniques represent areas where independent implementations or significant improvements are possible. Attention to TFX pipeline components is a build opportunity.

# 11. RAE implementation strategy

Contribute to existing framework features, build domain-specific extensions, or focus on model conversion and optimization tools rather than a new ML framework from scratch.

# 12. Security, privacy, and compliance

Model ownership and attribution, data poisoning risks, bias detection. TPU and GPU access considerations. Differential privacy and federated learning extensions available.

# 13. Sources and evidence

- https://www.tensorflow.org/ (product page)
- https://github.com/tensorflow/tensorflow (source repository)
- https://lfaidatafoundation.org/ (LF AI & Data governance)

# 14. Open questions

- What is the minimum viable ML framework feature set for independent research and production?
- How do model conversion pipelines (SavedModel, ONNX) compare across frameworks?
- What are the trade-offs between define-and-run vs. eager execution paradigms?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

PyTorch, JAX are the primary open-source ML framework alternatives. TFX provides production pipeline components.

---

# 17. RAE implementation strategy (continued)

Focus on model conversion, optimization, or domain-specific extensions to existing frameworks. Full framework development is high effort.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier google-tensorflow` and inspect canonical identity with `npx rae-faang products show google-tensorflow --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang google-tensorflow --out ./google-tensorflow.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit google-tensorflow --out ./google-tensorflow-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-tensorflow`).
- Dossier: [research/companies/google/products/google-tensorflow.md](../../../research/companies/google/products/google-tensorflow.md).
- REA capture: [catalog/rea/google/google-tensorflow.md](../../rea/google/google-tensorflow.md) (2026-11-03T01:39:43.985Z); raw record: [catalog/rea/evidence/google-tensorflow.json](../../rea/evidence/google-tensorflow.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.tensorflow.org/) — TensorFlow is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Official documentation entry](https://www.tensorflow.org/api_docs) — Documentation entry-point URL is recorded. (UNKNOWN; accessed Not recorded).
- [TensorFlow Public web-surface observation (REA)](https://www.tensorflow.org/) — A dated unauthenticated snapshot exposed controls button: Dropdown menu for Learn, button: Dropdown menu for API, button: Dropdown menu for Ecosystem, button: Dropdown menu for Extended Navigation, button: Language, button: Dark code theme, button: Copy code sample, button: Watch now, button: More, button: Previous slide, button: Next slide, link: Skip to main content, link: TensorFlow, link: Install, link: Learn, link: API, link: Ecosystem, combobox: Search, link: GitHub, link: Sign in, link: Install TensorFlow, link: View tutorials, link: Run quickstart, link: Watch now, link: Analyze relational data using graph neural networks, link: Learn about TF GNN, link: Build recommendation systems with reinforcement learning, link: Read the blog, link: TensorFlow Blog - What's new in TensorFlow 2.20, link: TensorFlow Blog - What's new in TensorFlow 2.19, link: Library TensorFlow.js Train and run models directly in the browser using JavaScript or Node.js., link: Library LiteRT Deploy ML on mobile and edge devices such as Android, iOS, Raspberry Pi, and Edge TPU., link: API tf.data Preprocess data and create input pipelines for ML models., link: Library TFX Create production ML pipelines and implement MLOps best practices., link: API tf.keras Create ML models with TensorFlow's high-level API., link: Resource Kaggle Models Find pre-trained models ready for fine-tuning and deployment., link: Resource TensorFlow Datasets Browse the collection of standard datasets for initial training and validation., link: Tool TensorBoard Visualize and track development of ML models., link: ML models & datasets Pretrained models and ready-to-use datasets for image, text, audio, and video use cases., link: Libraries & extensions Packages for domain-specific applications and APIs for languages other than Python., link: Developer tools Tools to evaluate models, optimize performance, and productionize ML workflows., link: Get involved, link: Explore resources, link: archive, link: forum logo Forum, link: x logo X, link: youtube logo YouTube, link: linkedin logo Linkedin, link: Explore tutorials, link: Blog, link: Forum, link: Twitter, link: YouTube, link: Issue tracker, link: Release notes, link: Stack Overflow, link: Brand guidelines, link: Cite TensorFlow, link: Terms, link: Privacy, link: Subscribe and landmarks banner, navigation: Upper tabs, main, navigation: On this page, navigation, navigation: Footer links, navigation: Utility links. (VERIFIED; accessed 2026-11-03T01:39:43.985Z).
