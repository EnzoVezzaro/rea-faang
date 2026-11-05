---
name: meta-account
description: "Evidence-aware build skill for Meta Account (meta-account); investigate, assess reuse, implement scoped behavior and verify."
---

# Meta Account — implementation skill (`meta-account`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Meta Account**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Meta Account** (`meta-account`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/meta/meta-account.md` from the catalog page, or run `npx rea-faang meta-account --out ./meta-account.md`, `npx rea-faang skills generate meta-account` or `npx rea-faang build agent-kit meta-account --out ./meta-account-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Meta Account / `meta-account` | `catalog/products.jsonl` |
| Official product URL | [https://www.meta.com/account/](https://www.meta.com/account/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://www.meta.com/help/accounts-center/](https://www.meta.com/help/accounts-center/) | Catalog record |
| Research dossier | `npx rea-faang research dossier meta-account` | `research/companies/meta/products/meta-account.md` |
| REA report | `catalog/rea/meta/meta-account.md` (captured 2026-11-04T02:41:07.015Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/meta-account.json` (`ev_6cedd7669026f8fe004b668a10b67b308381ab358773712b3e4143c375090dd3`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show meta-account --format json` and `npx rea-faang research dossier meta-account` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.meta.com/account/](https://www.meta.com/account/), captured 2026-11-04T02:41:07.015Z, evidence `ev_6cedd7669026f8fe004b668a10b67b308381ab358773712b3e4143c375090dd3`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `META-ACCOUNT-CAP-87908C8D`, `META-ACCOUNT-CAP-FB64BA50`.

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
| Name / stable ID | **Meta Account** / `meta-account` | Product catalog |
| Company / category | Meta / `consumer_application` / `identity`, `account-management`, `security`, `connected-experiences` | Product catalog |
| Official website / docs | [https://www.meta.com/account/](https://www.meta.com/account/) / [https://www.meta.com/help/accounts-center/](https://www.meta.com/help/accounts-center/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **consumer_application** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `META-ACCOUNT-CAP-87908C8D` | Distinct service identity and account-management surface are verified. | VERIFIED | `ev-meta-account-identity`, `ev-meta-account-help` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-ACCOUNT-CAP-FB64BA50` | Centralized sign-in, security and connected settings are documented; rollout, regional availability and account-specific behavior vary. | VERIFIED | `ev-meta-account-announcement`, `ev-meta-account-help` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Search Meta Store`, `button: Log In`, `button: Play video`, `button: What is a Meta Account?`, `button: What apps and devices are included in this?`, `button: Will all my apps and devices automatically get added to the same Meta Account?`, `button: Do I need a Meta Account?`, `button: See more`, `button: Change language`, `link: Skip to main content`, `link: Meta home`, `link: AI glasses`, `link: Meta Quest`, `link: Meta VR Glasses`, `link: Muse Charm`, `link: Explore Meta`, `link: Support`, `link: View bag items`, `link: Learn more about passkeys and single sign-on`, `link: Learn more about managing multiple profiles`, `link: Learn more about Meta Family Center`, `link: Learn more about getting ready for your Meta Account`, `link: Facebook Meta.com social media`, `link: Threads Meta.com social media`, `link: Instagram Meta.com social media`, `link: X Meta.com social media`, `link: YouTube Meta.com media channel`, `link: Meta Glasses`, `link: Ray-Ban Meta glasses`, `link: Oakley Meta glasses`, `link: Meta Ray-Ban Display`, `link: Compare glasses`, `link: AI glasses accessories`, `link: AI glasses guides`, `link: Meta Lab`, `link: Meta Quest accessories`, `link: Apps and games`, `link: Meta Gift Card`, `link: Refurbished Meta Quest 3`, `link: Refurbished Meta Quest 3S`, `link: Refurbished Ray-Ban Meta glasses`, `link: More from Ray-Ban`, `link: Meta Warranty Plus`, `link: Meta Quest referrals`, `link: Education discount`, `link: AI glasses bulk order inquiry`, `link: Blog`, `link: Meta Help Center`, `link: Order status`, `link: Returns`, `link: Find a product demo`, `link: Find a store`, `link: Legal`, `link: Terms of sale`, `link: Meta Quest safety center`, `link: Creators`, `link: Developers`, `link: Businesses`, `link: Non-profits`, `link: Download SDKs`, `link: Made for Meta partner program`, `link: VR for Good`, `link: Data and privacy`, `link: Responsible business practices`, `link: Accessibility`, `link: Elections`, `link: About Meta`, `link: Company Info`, `link: Careers`, `link: Media gallery`, `link: Brand resources`, `link: For investors`, `link: Newsroom`, `link: Community standards`, `link: Privacy policy`, `link: Terms`, `link: Cookie policy`, `link: Facebook Help Center`, `link: Messenger Help Center`, `link: Instagram Help Center`, `link: WhatsApp Help Center`, `link: Workplace Help Center`, `link: Meta Verified`, `link: Meta Account (Single Login)`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Distinct service identity and account-management surface are verified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Centralized sign-in, security and connected settings are documented; rollout, regional availability and account-specific behavior vary.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Main`, `main`, `region`, `region`, `region`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Meet your Meta Account`, `More secure and convenient`, `Always-on threat protection`, `Up-to-date security`, `More convenient controls`, `Teen support, in one place`, `Get ready for your Meta Account`, `What is a Meta Account?`, `What apps and devices are included in this?`, `Will all my apps and devices automatically get added to the same Meta Account?`, `Do I need a Meta Account?`, `Meta Store`, `Store support and legal`, `Community`, `Our actions`, `About us`, `Site terms and policies`, `App support` | Results and subsequent views |
| Controls | `button: Search Meta Store`, `button: Log In`, `button: Play video`, `button: What is a Meta Account?`, `button: What apps and devices are included in this?`, `button: Will all my apps and devices automatically get added to the same Meta Account?`, `button: Do I need a Meta Account?`, `button: See more`, `button: Change language`, `link: Skip to main content`, `link: Meta home`, `link: AI glasses`, `link: Meta Quest`, `link: Meta VR Glasses`, `link: Muse Charm`, `link: Explore Meta`, `link: Support`, `link: View bag items`, `link: Learn more about passkeys and single sign-on`, `link: Learn more about managing multiple profiles`, `link: Learn more about Meta Family Center`, `link: Learn more about getting ready for your Meta Account`, `link: Facebook Meta.com social media`, `link: Threads Meta.com social media`, `link: Instagram Meta.com social media`, `link: X Meta.com social media`, `link: YouTube Meta.com media channel`, `link: Meta Glasses`, `link: Ray-Ban Meta glasses`, `link: Oakley Meta glasses`, `link: Meta Ray-Ban Display`, `link: Compare glasses`, `link: AI glasses accessories`, `link: AI glasses guides`, `link: Meta Lab`, `link: Meta Quest accessories`, `link: Apps and games`, `link: Meta Gift Card`, `link: Refurbished Meta Quest 3`, `link: Refurbished Meta Quest 3S`, `link: Refurbished Ray-Ban Meta glasses`, `link: More from Ray-Ban`, `link: Meta Warranty Plus`, `link: Meta Quest referrals`, `link: Education discount`, `link: AI glasses bulk order inquiry`, `link: Blog`, `link: Meta Help Center`, `link: Order status`, `link: Returns`, `link: Find a product demo`, `link: Find a store`, `link: Legal`, `link: Terms of sale`, `link: Meta Quest safety center`, `link: Creators`, `link: Developers`, `link: Businesses`, `link: Non-profits`, `link: Download SDKs`, `link: Made for Meta partner program`, `link: VR for Good`, `link: Data and privacy`, `link: Responsible business practices`, `link: Accessibility`, `link: Elections`, `link: About Meta`, `link: Company Info`, `link: Careers`, `link: Media gallery`, `link: Brand resources`, `link: For investors`, `link: Newsroom`, `link: Community standards`, `link: Privacy policy`, `link: Terms`, `link: Cookie policy`, `link: Facebook Help Center`, `link: Messenger Help Center`, `link: Instagram Help Center`, `link: WhatsApp Help Center`, `link: Workplace Help Center`, `link: Meta Verified`, `link: Meta Account (Single Login)` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content](#mdc-main-content)`, `[Meta home](/)`, `[AI glasses](/ai-glasses/)`, `[Meta Quest](/quest/)`, `[Meta VR Glasses](/vr-glasses/)`, `[Muse Charm](/muse-charm/)`, `[Explore Meta](/about/)`, `[Support](/help/)`, `[View bag items](/bag/)`, `[Learn more about passkeys and single sign-on](https://www.meta.com/help/meta-account/553000504008092/?ref=gtm)`, `[Learn more about managing multiple profiles](https://www.meta.com/help/meta-account/1575911950009923/?ref=gtm)`, `[Learn more about Meta Family Center](https://familycenter.meta.com/supervision)`, `[Learn more about getting ready for your Meta Account](https://www.meta.com/help/meta-account/876751767182450?ref=gtm)`, `[Facebook Meta.com social media](https://www.facebook.com/Meta)`, `[Threads Meta.com social media](https://www.threads.net/@meta)`, `[Instagram Meta.com social media](https://www.instagram.com/meta/)`, `[X Meta.com social media](https://twitter.com/Meta)`, `[YouTube Meta.com media channel](https://www.youtube.com/meta)`, `[Meta Glasses](/ai-glasses/meta-glasses/)`, `[Ray-Ban Meta glasses](/ai-glasses/ray-ban-meta/)`, `[Oakley Meta glasses](/ai-glasses/oakley-meta/)`, `[Meta Ray-Ban Display](/ai-glasses/meta-ray-ban-display/)`, `[Compare glasses](/ai-glasses/compare/)`, `[AI glasses accessories](/ai-glasses/accessories/)`, `[AI glasses guides](/ai-glasses/learn/)`, `[Meta Lab](/meta-lab/)`, `[Meta Quest accessories](/quest/accessories/)`, `[Apps and games](/experiences/)`, `[Meta Gift Card](/gift-cards/)`, `[Refurbished Meta Quest 3](/refurbished/quest-3/)`, `[Refurbished Meta Quest 3S](/refurbished/quest-3s/)`, `[Refurbished Ray-Ban Meta glasses](/refurbished/ai-glasses/)`, `[More from Ray-Ban](https://rayban.com/)`, `[Meta Warranty Plus](/warranty-plus/)`, `[Meta Quest referrals](/quest/referrals/)`, `[Education discount](/purchase-program/education/ )`, `[AI glasses bulk order inquiry](/ai-glasses/bulk-order/)`, `[Blog](/blog/)`, `[Meta Help Center](/help/)`, `[Order status](/order/find/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-87908C8D — Distinct service identity and account-management surface are verified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-account-identity`, `ev-meta-account-help`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-87908C8D`; fixture and expected output must be specified from evidence.
- **Trace:** `META-ACCOUNT-CAP-87908C8D` → `REQ-FUNC-87908C8D` → `TEST-FUNC-87908C8D`.

### REQ-FUNC-FB64BA50 — Centralized sign-in, security and connected settings are documented; rollout, regional availability and account-specific behavior vary.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-account-announcement`, `ev-meta-account-help`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-FB64BA50`; fixture and expected output must be specified from evidence.
- **Trace:** `META-ACCOUNT-CAP-FB64BA50` → `REQ-FUNC-FB64BA50` → `TEST-FUNC-FB64BA50`.

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
| [Keycloak](https://www.keycloak.org/) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Open-source identity and access-management server with federation and user management. | Provides identity foundations but not Meta's connected app graph, consumer distribution or device ecosystem. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Authentik](https://goauthentik.io/) | Not recorded; verify the canonical repository | Open-core; community components under permissive licenses (unverified) | Open-source identity provider and access platform. | Useful for self-hosted identity workflows, but not a replacement for Meta-specific account and app semantics. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Zitadel](https://zitadel.com/) | Not recorded; verify the canonical repository | AGPL-3.0 and enterprise components (unverified) | Open-source identity infrastructure for authentication and user management. | Covers independent identity infrastructure but not Meta's account graph, rollout or proprietary security systems. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `META-ACCOUNT-CAP-87908C8D` — Distinct service identity and account-management surface are verified. | Not verified against Keycloak | None yet; compare with `ev_6cedd7669026f8fe004b668a10b67b308381ab358773712b3e4143c375090dd3` | Candidate code path and tests must be inspected |
| `META-ACCOUNT-CAP-FB64BA50` — Centralized sign-in, security and connected settings are documented; rollout, regional availability and account-specific behavior vary. | Not verified against Keycloak | None yet; compare with `ev_6cedd7669026f8fe004b668a10b67b308381ab358773712b3e4143c375090dd3` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Keycloak** (Open-source identity and access-management server with federation and user management.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Keycloak** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-87908C8D** → `REQ-FUNC-87908C8D`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-FB64BA50** → `REQ-FUNC-FB64BA50`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-87908C8D, REQ-FUNC-FB64BA50
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-87908C8D, REQ-FUNC-FB64BA50
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
- **Completion:** Trace: REQ-FUNC-87908C8D, REQ-FUNC-FB64BA50; document exclusions and unknowns.
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
| `ev-meta-account-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Meta Account under Services. | [link](https://www.meta.com/technologies/) | 2026-11-04T00:00:00Z | Meta lists Meta Account as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-account-help` | About Accounts Center — Meta documents connected experiences, login across accounts, contact information, ad preferences, payments and account settings through Accounts Center and Meta Account. | [link](https://www.meta.com/help/accounts-center/) | 2026-11-04T00:00:00Z | Meta Account provides connected-account login, shared settings and account management across Meta accounts and services. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-account-announcement` | Meta Account: The Simpler Way to Access Your Apps and Devices — Meta's announcement documents centralized sign-in, passkeys, security recommendations, settings management and support for apps and devices, with gradual rollout and optional WhatsApp participation. | [link](https://about.fb.com/news/2026/04/meta-account/) | 2026-11-04T00:00:00Z | Meta describes Meta Account as a centralized way to access and manage Meta apps and devices, with passkeys, threat protection and shared settings. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-account-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Meta Account under Services. | [link](https://www.meta.com/technologies/) | 2026-11-04T00:00:00Z | Meta lists Meta Account as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-account-help` | About Accounts Center — Meta documents connected experiences, login across accounts, contact information, ad preferences, payments and account settings through Accounts Center and Meta Account. | [link](https://www.meta.com/help/accounts-center/) | 2026-11-04T00:00:00Z | Meta Account provides connected-account login, shared settings and account management across Meta accounts and services. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-account-announcement` | Meta Account: The Simpler Way to Access Your Apps and Devices — Meta's announcement documents centralized sign-in, passkeys, security recommendations, settings management and support for apps and devices, with gradual rollout and optional WhatsApp participation. | [link](https://about.fb.com/news/2026/04/meta-account/) | 2026-11-04T00:00:00Z | Meta describes Meta Account as a centralized way to access and manage Meta apps and devices, with passkeys, threat protection and shared settings. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.meta.com/account/) | 2026-11-04T00:00:00Z | Meta Account is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://www.meta.com/help/accounts-center/) | 2026-11-04T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/technologies/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/help/accounts-center/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://about.fb.com/news/2026/04/meta-account/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_6cedd7669026f8fe004b668a10b67b308381ab358773712b3e4143c375090dd3` | Meta Account Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.meta.com/account/) | 2026-11-04T02:41:07.015Z | A dated unauthenticated snapshot exposed controls button: Search Meta Store, button: Log In, button: Play video, button: What is a Meta Account?, button: What apps and devices are included in this?, button: Will all my apps and devices automatically get added to the same Meta Account?, button: Do I need a Meta Account?, button: See more, button: Change language, link: Skip to main content, link: Meta home, link: AI glasses, link: Meta Quest, link: Meta VR Glasses, link: Muse Charm, link: Explore Meta, link: Support, link: View bag items, link: Learn more about passkeys and single sign-on, link: Learn more about managing multiple profiles, link: Learn more about Meta Family Center, link: Learn more about getting ready for your Meta Account, link: Facebook Meta.com social media, link: Threads Meta.com social media, link: Instagram Meta.com social media, link: X Meta.com social media, link: YouTube Meta.com media channel, link: Meta Glasses, link: Ray-Ban Meta glasses, link: Oakley Meta glasses, link: Meta Ray-Ban Display, link: Compare glasses, link: AI glasses accessories, link: AI glasses guides, link: Meta Lab, link: Meta Quest accessories, link: Apps and games, link: Meta Gift Card, link: Refurbished Meta Quest 3, link: Refurbished Meta Quest 3S, link: Refurbished Ray-Ban Meta glasses, link: More from Ray-Ban, link: Meta Warranty Plus, link: Meta Quest referrals, link: Education discount, link: AI glasses bulk order inquiry, link: Blog, link: Meta Help Center, link: Order status, link: Returns, link: Find a product demo, link: Find a store, link: Legal, link: Terms of sale, link: Meta Quest safety center, link: Creators, link: Developers, link: Businesses, link: Non-profits, link: Download SDKs, link: Made for Meta partner program, link: VR for Good, link: Data and privacy, link: Responsible business practices, link: Accessibility, link: Elections, link: About Meta, link: Company Info, link: Careers, link: Media gallery, link: Brand resources, link: For investors, link: Newsroom, link: Community standards, link: Privacy policy, link: Terms, link: Cookie policy, link: Facebook Help Center, link: Messenger Help Center, link: Instagram Help Center, link: WhatsApp Help Center, link: Workplace Help Center, link: Meta Verified, link: Meta Account (Single Login) and landmarks navigation: Main, main, region, region, region, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `meta-account`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Meta Account is Meta's centralized identity and account-management service. Meta lists it separately under Services and documents connected login, shared settings, security controls and management across participating apps and devices. The service is distinct from the individual apps it connects.

# 2. Product identity and ownership

- **Canonical name:** Meta Account
- **Stable catalog ID:** `meta-account`
- **Company:** Meta
- **Product type:** consumer identity and account-management application
- **Official product URL:** https://www.meta.com/account/
- **Official help:** https://www.meta.com/help/accounts-center/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-account-identity`, `ev-meta-account-help`, `ev-meta-account-announcement`

Meta Account is kept separate from Facebook, Instagram, Messenger, WhatsApp, Meta AI and Meta Pay. Those products may use connected-account features without becoming one catalog record.

# 3. Verified public capabilities

1. Meta lists Meta Account as a distinct service.
2. Accounts Center/Meta Account supports connected experiences and login across participating accounts.
3. Meta documents centralized management for contact details, passwords, two-factor authentication, ad preferences, payments and related settings.
4. Meta documents passkeys, security recommendations and continuous threat protection, with rollout and participation limits.

# 4. Technical architecture

The public evidence supports a centralized identity and settings boundary. Internal identity stores, token flows, risk models, account-linking implementation and enforcement systems are not inferred.

# 5. User workflows

The verified public scope includes signing into participating Meta apps and devices, linking accounts, managing shared settings and reviewing security controls. App-specific settings remain managed inside the relevant app. WhatsApp participation is optional and rollout is gradual.

# 6. Pricing and access

Meta Account is presented as an account service rather than a standalone paid subscription. Availability, eligible apps, regions and rollout state require current account-specific verification.

# 7. API and integration surface

The public sources do not establish a general unrestricted Meta Account API. Integrations must use current official Meta developer documentation and authorized identity contracts; no API capability is inferred from the consumer account surface.

# 8. Open-source alternatives

- **Keycloak:** open-source identity and access-management server.
- **Authentik:** open-source identity provider and access platform.
- **Zitadel:** open-source identity infrastructure for authentication and user management.

# 9. Alternative comparison

Alternative coverage is **partial**. Keycloak, Authentik and Zitadel provide identity foundations, but none reproduces Meta's connected app graph, consumer distribution, device ecosystem, proprietary security systems or Meta-specific settings semantics.

# 10. Missing capabilities and opportunity analysis

An independent implementation needs account lifecycle, authentication, passkeys, MFA, consent, linked-account management, risk detection, recovery, privacy controls, auditability and integrations for each supported application. Meta-specific ecosystem parity is out of scope.

# 11. REA implementation strategy

Use public Meta documentation only to define user-visible requirements. Build against an independently authorized identity provider and explicit consent model; never access or copy private Meta account data.

# 12. Security and compliance

Identity and security data are sensitive. Any implementation must define credential protection, passkey handling, MFA, session security, recovery, least privilege, audit logs, privacy, retention and regional compliance. No security-parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-account-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-account-help` | https://www.meta.com/help/accounts-center/ | Connected accounts and settings documentation |
| `ev-meta-account-announcement` | https://about.fb.com/news/2026/04/meta-account/ | Centralized access, security and rollout claims |
| REA capture | `catalog/rea/meta/meta-account.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Eligible apps, regions, rollout timing and WhatsApp participation require current verification.
- No private account, authentication, recovery or security workflow was inspected.
- The public sources do not establish a general public API or implementation-level security parity.

# 15. Research history

- **2026-11-04:** reviewed Meta's official technology catalog, Accounts Center help documentation and Meta newsroom announcement; promoted the candidate after verifying distinct service identity and product-level identity/account evidence.
- **Next review:** 2027-02-04, or sooner if Meta changes Accounts Center, rollout or supported-app behavior materially.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier meta-account` and inspect canonical identity with `npx rea-faang products show meta-account --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang meta-account --out ./meta-account.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit meta-account --out ./meta-account-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`meta-account`).
- Dossier: [research/companies/meta/products/meta-account.md](../../../research/companies/meta/products/meta-account.md).
- REA capture: [catalog/rea/meta/meta-account.md](../../rea/meta/meta-account.md) (2026-11-04T02:41:07.015Z); raw record: [catalog/rea/evidence/meta-account.json](../../rea/evidence/meta-account.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Meta Account as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [About Accounts Center](https://www.meta.com/help/accounts-center/) — Meta Account provides connected-account login, shared settings and account management across Meta accounts and services. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Account: The Simpler Way to Access Your Apps and Devices](https://about.fb.com/news/2026/04/meta-account/) — Meta describes Meta Account as a centralized way to access and manage Meta apps and devices, with passkeys, threat protection and shared settings. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Meta Account as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [About Accounts Center](https://www.meta.com/help/accounts-center/) — Meta Account provides connected-account login, shared settings and account management across Meta accounts and services. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Account: The Simpler Way to Access Your Apps and Devices](https://about.fb.com/news/2026/04/meta-account/) — Meta describes Meta Account as a centralized way to access and manage Meta apps and devices, with passkeys, threat protection and shared settings. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Official product page](https://www.meta.com/account/) — Meta Account is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Official documentation entry](https://www.meta.com/help/accounts-center/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Additional official source lead](https://www.meta.com/technologies/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://www.meta.com/help/accounts-center/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://about.fb.com/news/2026/04/meta-account/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Meta Account Public web-surface observation (REA)](https://www.meta.com/account/) — A dated unauthenticated snapshot exposed controls button: Search Meta Store, button: Log In, button: Play video, button: What is a Meta Account?, button: What apps and devices are included in this?, button: Will all my apps and devices automatically get added to the same Meta Account?, button: Do I need a Meta Account?, button: See more, button: Change language, link: Skip to main content, link: Meta home, link: AI glasses, link: Meta Quest, link: Meta VR Glasses, link: Muse Charm, link: Explore Meta, link: Support, link: View bag items, link: Learn more about passkeys and single sign-on, link: Learn more about managing multiple profiles, link: Learn more about Meta Family Center, link: Learn more about getting ready for your Meta Account, link: Facebook Meta.com social media, link: Threads Meta.com social media, link: Instagram Meta.com social media, link: X Meta.com social media, link: YouTube Meta.com media channel, link: Meta Glasses, link: Ray-Ban Meta glasses, link: Oakley Meta glasses, link: Meta Ray-Ban Display, link: Compare glasses, link: AI glasses accessories, link: AI glasses guides, link: Meta Lab, link: Meta Quest accessories, link: Apps and games, link: Meta Gift Card, link: Refurbished Meta Quest 3, link: Refurbished Meta Quest 3S, link: Refurbished Ray-Ban Meta glasses, link: More from Ray-Ban, link: Meta Warranty Plus, link: Meta Quest referrals, link: Education discount, link: AI glasses bulk order inquiry, link: Blog, link: Meta Help Center, link: Order status, link: Returns, link: Find a product demo, link: Find a store, link: Legal, link: Terms of sale, link: Meta Quest safety center, link: Creators, link: Developers, link: Businesses, link: Non-profits, link: Download SDKs, link: Made for Meta partner program, link: VR for Good, link: Data and privacy, link: Responsible business practices, link: Accessibility, link: Elections, link: About Meta, link: Company Info, link: Careers, link: Media gallery, link: Brand resources, link: For investors, link: Newsroom, link: Community standards, link: Privacy policy, link: Terms, link: Cookie policy, link: Facebook Help Center, link: Messenger Help Center, link: Instagram Help Center, link: WhatsApp Help Center, link: Workplace Help Center, link: Meta Verified, link: Meta Account (Single Login) and landmarks navigation: Main, main, region, region, region, contentinfo. (VERIFIED; accessed 2026-11-04T02:41:07.015Z).
