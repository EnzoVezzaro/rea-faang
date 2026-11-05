---
name: meta-verified
description: "Evidence-aware build skill for Meta Verified (meta-verified); investigate, assess reuse, implement scoped behavior and verify."
---

# Meta Verified — implementation skill (`meta-verified`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Meta Verified**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Meta Verified** (`meta-verified`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/meta/meta-verified.md` from the catalog page, or run `npx rea-faang meta-verified --out ./meta-verified.md`, `npx rea-faang skills generate meta-verified` or `npx rea-faang build agent-kit meta-verified --out ./meta-verified-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Meta Verified / `meta-verified` | `catalog/products.jsonl` |
| Official product URL | [https://www.meta.com/meta-verified/](https://www.meta.com/meta-verified/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://www.meta.com/meta-verified/](https://www.meta.com/meta-verified/) | Catalog record |
| Research dossier | `npx rea-faang research dossier meta-verified` | `research/companies/meta/products/meta-verified.md` |
| REA report | `catalog/rea/meta/meta-verified.md` (captured 2026-11-04T02:46:11.863Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/meta-verified.json` (`ev_bc54e93bbc69ee228432d0b79fbf68509545e40070a6f1abe559637a9e88f844`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show meta-verified --format json` and `npx rea-faang research dossier meta-verified` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.meta.com/meta-verified/](https://www.meta.com/meta-verified/), captured 2026-11-04T02:46:11.863Z, evidence `ev_bc54e93bbc69ee228432d0b79fbf68509545e40070a6f1abe559637a9e88f844`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `META-VERIFIED-CAP-3972B77A`, `META-VERIFIED-CAP-BFD31DC9`.

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
| Name / stable ID | **Meta Verified** / `meta-verified` | Product catalog |
| Company / category | Meta / `consumer_subscription` / `identity`, `verification`, `creator-tools`, `support`, `impersonation-protection` | Product catalog |
| Official website / docs | [https://www.meta.com/meta-verified/](https://www.meta.com/meta-verified/) / [https://www.meta.com/meta-verified/](https://www.meta.com/meta-verified/) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **consumer_subscription** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `META-VERIFIED-CAP-3972B77A` | Distinct subscription identity and public feature surface are verified. | VERIFIED | `ev-meta-verified-identity`, `ev-meta-verified-surface` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-VERIFIED-CAP-BFD31DC9` | Plans, pricing, eligibility, benefits and availability vary by region, app and account. | VERIFIED | `ev-meta-verified-surface` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Search Meta Store`, `button: Log In`, `button: Verified badge`, `button: Impersonation protection`, `button: Enhanced support`, `button: Upgraded profile features`, `button: Search optimization`, `button: Featured profile`, `button: Links in Reels`, `button: Add images to your links`, `button: Exclusive stickers`, `button: Custom chat themes`, `button: Personalized content strategy advice`, `button: Previous slide`, `button: Next slide`, `button: How do I know if I'm eligible?`, `button: I already have a verified badge. What happens to it?`, `button: What is the verification process?`, `button: As a creator, can I use one Meta Verified subscription on both Facebook and Instagram?`, `button: What is the price to subscribe to Meta Verified for creators?`, `link: Skip to main content`, `link: Meta home`, `link: AI glasses`, `link: Meta Quest`, `link: Meta VR Glasses`, `link: Muse Charm`, `link: Explore Meta`, `link: Support`, `link: View bag items`, `link: Learn more`, `link: Subscribe on Facebook`, `link: Subscribe on Instagram`, `link: Meta Verified for businesses`, `link: Sign up on web or mobile app`, `link: Sign up on mobile app only`, `link: professional creator account`, `link: Facebook`, `link: Instagram`, `link: Terms of Service`, `link: Facebook Terms of Use`, `link: Instagram Terms of Service`, `link: Community Standards`, `link: Manage your Meta Verified subscription`, `link: inversionista_gal's profile photo @inversionista_gal The Meta Verified Badge icon 4k+ followers`, `button: What if I'm interested in Meta Verified for businesses?`, `button: Do my Meta Verified benefits extend to my other profiles and accounts?`, `button: After I sign up for Meta Verified, can I change my plan selection?`, `button: How do I change my plan selection?`, `button: I have multiple accounts subscribed to Meta Verified. Can I upgrade/ downgrade only for 1 of them?`, `link: Visit our Newsroom`, `link: Facebook Meta.com social media`, `link: Threads Meta.com social media`, `link: Instagram Meta.com social media`, `link: X Meta.com social media`, `link: YouTube Meta.com media channel`, `link: Meta Glasses`, `link: Ray-Ban Meta glasses`, `link: Oakley Meta glasses`, `link: Meta Ray-Ban Display`, `link: Compare glasses`, `link: AI glasses accessories`, `link: AI glasses guides`, `link: Meta Lab`, `link: Meta Quest accessories`, `link: Apps and games`, `link: Meta Gift Card`, `link: Refurbished Meta Quest 3`, `link: Refurbished Meta Quest 3S`, `link: Refurbished Ray-Ban Meta glasses`, `link: More from Ray-Ban`, `link: Meta Warranty Plus`, `link: Meta Quest referrals`, `link: Education discount`, `link: AI glasses bulk order inquiry`, `link: Blog`, `link: Meta Help Center`, `link: Order status`, `link: Returns`, `link: Find a product demo`, `link: Find a store`, `link: Legal`, `link: Terms of sale`, `link: Meta Quest safety center`, `link: Creators`, `link: Developers`, `link: Businesses`, `link: Non-profits`, `link: Download SDKs`, `link: Made for Meta partner program`, `link: VR for Good`, `link: Data and privacy`, `link: Responsible business practices`, `link: Accessibility`, `link: Elections`, `link: About Meta`, `link: Company Info`, `link: Careers`, `link: Media gallery`, `link: Brand resources`, `link: For investors`, `link: Newsroom`, `link: Community standards`, `link: Privacy policy`, `link: Terms`, `link: Cookie policy`, `link: Facebook Help Center`, `link: Messenger Help Center`, `link: Instagram Help Center`, `link: WhatsApp Help Center`, `link: Workplace Help Center`, `link: Meta Verified`, `link: Meta Account (Single Login)`, `button: Change language`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Distinct subscription identity and public feature surface are verified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Plans, pricing, eligibility, benefits and availability vary by region, app and account.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Main`, `main`, `region: Meta Verified testimonials`, `region: How do I know if I'm eligible?`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Protect your brand with Meta Verified`, `A creator toolkit to take your brand further`, `Meta Verified benefits`, `Creator plans and pricing`, `Standard`, `Plus`, `Premium`, `Max`, `“Meta Verified helped my account stand out from impersonators, which helped me secure more paying clients.”`, `FAQs`, `How do I know if I'm eligible?`, `I already have a verified badge. What happens to it?`, `What is the verification process?`, `As a creator, can I use one Meta Verified subscription on both Facebook and Instagram?`, `What is the price to subscribe to Meta Verified for creators?`, `What if I'm interested in Meta Verified for businesses?`, `Do my Meta Verified benefits extend to my other profiles and accounts?`, `After I sign up for Meta Verified, can I change my plan selection?`, `How do I change my plan selection?`, `I have multiple accounts subscribed to Meta Verified. Can I upgrade/ downgrade only for 1 of them?`, `Meta Newsroom`, `Meta Store`, `Store support and legal`, `Community`, `Our actions` | Results and subsequent views |
| Controls | `button: Search Meta Store`, `button: Log In`, `button: Verified badge`, `button: Impersonation protection`, `button: Enhanced support`, `button: Upgraded profile features`, `button: Search optimization`, `button: Featured profile`, `button: Links in Reels`, `button: Add images to your links`, `button: Exclusive stickers`, `button: Custom chat themes`, `button: Personalized content strategy advice`, `button: Previous slide`, `button: Next slide`, `button: How do I know if I'm eligible?`, `button: I already have a verified badge. What happens to it?`, `button: What is the verification process?`, `button: As a creator, can I use one Meta Verified subscription on both Facebook and Instagram?`, `button: What is the price to subscribe to Meta Verified for creators?`, `link: Skip to main content`, `link: Meta home`, `link: AI glasses`, `link: Meta Quest`, `link: Meta VR Glasses`, `link: Muse Charm`, `link: Explore Meta`, `link: Support`, `link: View bag items`, `link: Learn more`, `link: Subscribe on Facebook`, `link: Subscribe on Instagram`, `link: Meta Verified for businesses`, `link: Sign up on web or mobile app`, `link: Sign up on mobile app only`, `link: professional creator account`, `link: Facebook`, `link: Instagram`, `link: Terms of Service`, `link: Facebook Terms of Use`, `link: Instagram Terms of Service`, `link: Community Standards`, `link: Manage your Meta Verified subscription`, `link: inversionista_gal's profile photo @inversionista_gal The Meta Verified Badge icon 4k+ followers`, `button: What if I'm interested in Meta Verified for businesses?`, `button: Do my Meta Verified benefits extend to my other profiles and accounts?`, `button: After I sign up for Meta Verified, can I change my plan selection?`, `button: How do I change my plan selection?`, `button: I have multiple accounts subscribed to Meta Verified. Can I upgrade/ downgrade only for 1 of them?`, `link: Visit our Newsroom`, `link: Facebook Meta.com social media`, `link: Threads Meta.com social media`, `link: Instagram Meta.com social media`, `link: X Meta.com social media`, `link: YouTube Meta.com media channel`, `link: Meta Glasses`, `link: Ray-Ban Meta glasses`, `link: Oakley Meta glasses`, `link: Meta Ray-Ban Display`, `link: Compare glasses`, `link: AI glasses accessories`, `link: AI glasses guides`, `link: Meta Lab`, `link: Meta Quest accessories`, `link: Apps and games`, `link: Meta Gift Card`, `link: Refurbished Meta Quest 3`, `link: Refurbished Meta Quest 3S`, `link: Refurbished Ray-Ban Meta glasses`, `link: More from Ray-Ban`, `link: Meta Warranty Plus`, `link: Meta Quest referrals`, `link: Education discount`, `link: AI glasses bulk order inquiry`, `link: Blog`, `link: Meta Help Center`, `link: Order status`, `link: Returns`, `link: Find a product demo`, `link: Find a store`, `link: Legal`, `link: Terms of sale`, `link: Meta Quest safety center`, `link: Creators`, `link: Developers`, `link: Businesses`, `link: Non-profits`, `link: Download SDKs`, `link: Made for Meta partner program`, `link: VR for Good`, `link: Data and privacy`, `link: Responsible business practices`, `link: Accessibility`, `link: Elections`, `link: About Meta`, `link: Company Info`, `link: Careers`, `link: Media gallery`, `link: Brand resources`, `link: For investors`, `link: Newsroom`, `link: Community standards`, `link: Privacy policy`, `link: Terms`, `link: Cookie policy`, `link: Facebook Help Center`, `link: Messenger Help Center`, `link: Instagram Help Center`, `link: WhatsApp Help Center`, `link: Workplace Help Center`, `link: Meta Verified`, `link: Meta Account (Single Login)`, `button: Change language` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content](#mdc-main-content)`, `[Meta home](/)`, `[AI glasses](/ai-glasses/)`, `[Meta Quest](/quest/)`, `[Meta VR Glasses](/vr-glasses/)`, `[Muse Charm](/muse-charm/)`, `[Explore Meta](/about/)`, `[Support](/help/)`, `[View bag items](/bag/)`, `[Learn more](https://www.meta.com/meta-one-plans/)`, `[Subscribe on Facebook](https://accountscenter.facebook.com/meta_verified/?entrypoint=meta_site)`, `[Subscribe on Instagram](https://www.instagram.com/accounts/login/?next=%2Facredirect%2F%3Fdeeplink_destination%3Dupgrade_account%26entrypoint%3Dmeta_site)`, `[Meta Verified for businesses](https://www.facebook.com/business/tools/meta-verified-for-business?entry_point=meta_site)`, `[Sign up on web or mobile app](#sign-up-bottom)`, `[Sign up on mobile app only](https://help.instagram.com/732454618598400)`, `[professional creator account](https://www.facebook.com/help/instagram/138925576505882)`, `[Facebook](https://www.facebook.com/help/596285382333151)`, `[Instagram](https://help.instagram.com/2419286908233223)`, `[Terms of Service](https://www.facebook.com/legal/mvb_terms)`, `[Facebook Terms of Use](https://www.facebook.com/legal/terms?paipv=0&eav=AfZvYlKgIQAjlxpYVSHVvCw3CDNKhbt_ANPixrhWnZggprx0mVoioWLHLGnddjmxNdY&_rdr)`, `[Instagram Terms of Service](https://help.instagram.com/581066165581870)`, `[Community Standards](https://transparency.meta.com/policies/community-standards/)`, `[Manage your Meta Verified subscription](https://www.facebook.com/business/help/23875260945405570?id=579726174359330)`, `[inversionista_gal's profile photo @inversionista_gal The Meta Verified Badge icon 4k+ followers](https://www.instagram.com/inversionista_gal)`, `[Facebook](https://www.facebook.com/help/565322618581808)`, `[Instagram](https://help.instagram.com/1318901965540571)`, `[Visit our Newsroom](https://www.facebook.com/business/news/Introducing-Enhanced-Gen-AI-Features-and-Other-Tools-to-Help-Build-Your-Business)`, `[Facebook Meta.com social media](https://www.facebook.com/Meta)`, `[Threads Meta.com social media](https://www.threads.net/@meta)`, `[Instagram Meta.com social media](https://www.instagram.com/meta/)`, `[X Meta.com social media](https://twitter.com/Meta)`, `[YouTube Meta.com media channel](https://www.youtube.com/meta)`, `[Meta Glasses](/ai-glasses/meta-glasses/)`, `[Ray-Ban Meta glasses](/ai-glasses/ray-ban-meta/)`, `[Oakley Meta glasses](/ai-glasses/oakley-meta/)`, `[Meta Ray-Ban Display](/ai-glasses/meta-ray-ban-display/)`, `[Compare glasses](/ai-glasses/compare/)`, `[AI glasses accessories](/ai-glasses/accessories/)`, `[AI glasses guides](/ai-glasses/learn/)`, `[Meta Lab](/meta-lab/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-3972B77A — Distinct subscription identity and public feature surface are verified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-verified-identity`, `ev-meta-verified-surface`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-3972B77A`; fixture and expected output must be specified from evidence.
- **Trace:** `META-VERIFIED-CAP-3972B77A` → `REQ-FUNC-3972B77A` → `TEST-FUNC-3972B77A`.

### REQ-FUNC-BFD31DC9 — Plans, pricing, eligibility, benefits and availability vary by region, app and account.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-verified-surface`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-BFD31DC9`; fixture and expected output must be specified from evidence.
- **Trace:** `META-VERIFIED-CAP-BFD31DC9` → `REQ-FUNC-BFD31DC9` → `TEST-FUNC-BFD31DC9`.

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
| [Keycloak](https://www.keycloak.org/) | Not recorded; verify the canonical repository | Apache-2.0 (unverified) | Open-source identity and access-management server. | Provides identity foundations but not Meta's subscription, platform verification or support operations. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Authentik](https://goauthentik.io/) | Not recorded; verify the canonical repository | Open-core; community components under permissive licenses (unverified) | Open-source identity provider and access platform. | Useful for self-hosted identity workflows, but not a replacement for Meta-specific verification and creator benefits. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Zitadel](https://zitadel.com/) | Not recorded; verify the canonical repository | AGPL-3.0 and enterprise components (unverified) | Open-source identity infrastructure for authentication and user management. | Covers independent identity infrastructure but not Meta Verified's billing, abuse and discovery ecosystem. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `META-VERIFIED-CAP-3972B77A` — Distinct subscription identity and public feature surface are verified. | Not verified against Keycloak | None yet; compare with `ev_bc54e93bbc69ee228432d0b79fbf68509545e40070a6f1abe559637a9e88f844` | Candidate code path and tests must be inspected |
| `META-VERIFIED-CAP-BFD31DC9` — Plans, pricing, eligibility, benefits and availability vary by region, app and account. | Not verified against Keycloak | None yet; compare with `ev_bc54e93bbc69ee228432d0b79fbf68509545e40070a6f1abe559637a9e88f844` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Keycloak** (Open-source identity and access-management server.), and no candidate has been verified yet.

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

- **TEST-FUNC-3972B77A** → `REQ-FUNC-3972B77A`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-BFD31DC9** → `REQ-FUNC-BFD31DC9`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-3972B77A, REQ-FUNC-BFD31DC9
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-3972B77A, REQ-FUNC-BFD31DC9
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
- **Completion:** Trace: REQ-FUNC-3972B77A, REQ-FUNC-BFD31DC9; document exclusions and unknowns.
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
| `ev-meta-verified-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Meta Verified under Services. | [link](https://www.meta.com/technologies/) | 2026-11-04T00:00:00Z | Meta lists Meta Verified as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-verified-surface` | Meta Verified: Get the verified badge on Instagram & Facebook — Meta's official page documents subscription plans, verified badges, proactive impersonation monitoring, enhanced support and additional profile/discovery features, with regional and account eligibility limits. | [link](https://www.meta.com/meta-verified/) | 2026-11-04T00:00:00Z | Meta Verified is a subscription for creators and businesses with verification, impersonation protection and support features. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-verified-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Meta Verified under Services. | [link](https://www.meta.com/technologies/) | 2026-11-04T00:00:00Z | Meta lists Meta Verified as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-verified-surface` | Meta Verified: Get the verified badge on Instagram & Facebook — Meta's official page documents subscription plans, verified badges, proactive impersonation monitoring, enhanced support and additional profile/discovery features, with regional and account eligibility limits. | [link](https://www.meta.com/meta-verified/) | 2026-11-04T00:00:00Z | Meta Verified is a subscription for creators and businesses with verification, impersonation protection and support features. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.meta.com/meta-verified/) | 2026-11-04T00:00:00Z | Meta Verified is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://www.meta.com/meta-verified/) | 2026-11-04T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/technologies/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/meta-verified/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_bc54e93bbc69ee228432d0b79fbf68509545e40070a6f1abe559637a9e88f844` | Meta Verified Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.meta.com/meta-verified/) | 2026-11-04T02:46:11.863Z | A dated unauthenticated snapshot exposed controls button: Search Meta Store, button: Log In, button: Verified badge, button: Impersonation protection, button: Enhanced support, button: Upgraded profile features, button: Search optimization, button: Featured profile, button: Links in Reels, button: Add images to your links, button: Exclusive stickers, button: Custom chat themes, button: Personalized content strategy advice, button: Previous slide, button: Next slide, button: How do I know if I'm eligible?, button: I already have a verified badge. What happens to it?, button: What is the verification process?, button: As a creator, can I use one Meta Verified subscription on both Facebook and Instagram?, button: What is the price to subscribe to Meta Verified for creators?, link: Skip to main content, link: Meta home, link: AI glasses, link: Meta Quest, link: Meta VR Glasses, link: Muse Charm, link: Explore Meta, link: Support, link: View bag items, link: Learn more, link: Subscribe on Facebook, link: Subscribe on Instagram, link: Meta Verified for businesses, link: Sign up on web or mobile app, link: Sign up on mobile app only, link: professional creator account, link: Facebook, link: Instagram, link: Terms of Service, link: Facebook Terms of Use, link: Instagram Terms of Service, link: Community Standards, link: Manage your Meta Verified subscription, link: inversionista_gal's profile photo @inversionista_gal The Meta Verified Badge icon 4k+ followers, button: What if I'm interested in Meta Verified for businesses?, button: Do my Meta Verified benefits extend to my other profiles and accounts?, button: After I sign up for Meta Verified, can I change my plan selection?, button: How do I change my plan selection?, button: I have multiple accounts subscribed to Meta Verified. Can I upgrade/ downgrade only for 1 of them?, link: Visit our Newsroom, link: Facebook Meta.com social media, link: Threads Meta.com social media, link: Instagram Meta.com social media, link: X Meta.com social media, link: YouTube Meta.com media channel, link: Meta Glasses, link: Ray-Ban Meta glasses, link: Oakley Meta glasses, link: Meta Ray-Ban Display, link: Compare glasses, link: AI glasses accessories, link: AI glasses guides, link: Meta Lab, link: Meta Quest accessories, link: Apps and games, link: Meta Gift Card, link: Refurbished Meta Quest 3, link: Refurbished Meta Quest 3S, link: Refurbished Ray-Ban Meta glasses, link: More from Ray-Ban, link: Meta Warranty Plus, link: Meta Quest referrals, link: Education discount, link: AI glasses bulk order inquiry, link: Blog, link: Meta Help Center, link: Order status, link: Returns, link: Find a product demo, link: Find a store, link: Legal, link: Terms of sale, link: Meta Quest safety center, link: Creators, link: Developers, link: Businesses, link: Non-profits, link: Download SDKs, link: Made for Meta partner program, link: VR for Good, link: Data and privacy, link: Responsible business practices, link: Accessibility, link: Elections, link: About Meta, link: Company Info, link: Careers, link: Media gallery, link: Brand resources, link: For investors, link: Newsroom, link: Community standards, link: Privacy policy, link: Terms, link: Cookie policy, link: Facebook Help Center, link: Messenger Help Center, link: Instagram Help Center, link: WhatsApp Help Center, link: Workplace Help Center, link: Meta Verified, link: Meta Account (Single Login), button: Change language and landmarks navigation: Main, main, region: Meta Verified testimonials, region: How do I know if I'm eligible?, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `meta-verified`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Meta Verified is Meta's subscription service for creator and business profiles. Meta lists it separately under Services and documents verification badges, impersonation protection, enhanced support and profile/discovery benefits. Pricing, eligibility and benefits vary by region, app and account.

# 2. Product identity and ownership

- **Canonical name:** Meta Verified
- **Stable catalog ID:** `meta-verified`
- **Company:** Meta
- **Product type:** consumer subscription
- **Official product URL:** https://www.meta.com/meta-verified/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-verified-identity`, `ev-meta-verified-surface`

Meta Verified is kept separate from Facebook and Instagram, which are the host applications, and from Meta Account, which provides account-management functionality.

# 3. Verified public capabilities

1. Meta lists Meta Verified as a distinct service.
2. The service offers subscription plans for eligible creator and business profiles.
3. Meta documents a verified badge, proactive impersonation protection and enhanced support.
4. Meta documents additional profile, discovery and engagement features, subject to plan and availability.

# 4. Technical architecture

The public evidence supports a subscription and profile-benefit boundary. Internal verification workflows, identity checks, abuse detection, support systems, ranking effects and billing implementation are not inferred.

# 5. User workflows

The documented flow is to sign in on Facebook or Instagram, select an eligible plan, complete required verification and manage the subscription. Benefits apply to subscribed profiles and may differ by plan, region, app and account.

# 6. Pricing and access

Meta publishes plan examples and states that pricing, benefits and availability vary. Current local pricing and eligibility must be checked in the account's onboarding flow; no purchase was attempted.

# 7. API and integration surface

The public product page does not establish a general Meta Verified API. Do not infer verification or support access for another service from the subscription page.

# 8. Open-source alternatives

- **Keycloak:** open-source identity and access-management server.
- **Authentik:** open-source identity provider and access platform.
- **Zitadel:** open-source identity infrastructure for authentication and user management.

# 9. Alternative comparison

Alternative coverage is **partial**. These projects provide identity and access foundations, but none reproduces Meta's subscription billing, platform verification, impersonation monitoring, support operations or creator-discovery ecosystem.

# 10. Missing capabilities and opportunity analysis

An independent implementation would need account verification, subscription lifecycle, billing, eligibility, abuse prevention, impersonation workflows, support operations, privacy controls and platform-specific profile integration. Meta-specific parity is out of scope.

# 11. REA implementation strategy

Use only public product documentation and an authorized test account for any further research. Do not submit identity documents, purchase a plan or access private account workflows without explicit authorization.

# 12. Security and compliance

Identity documents, subscription and profile data are sensitive. Any implementation must define verification-data minimization, billing security, account recovery, abuse controls, auditability, privacy and regional compliance. No security or eligibility parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-verified-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-verified-surface` | https://www.meta.com/meta-verified/ | Subscription, feature, pricing and eligibility claims |
| REA capture | `catalog/rea/meta/meta-verified.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Eligibility, plan availability, pricing and benefits vary by region, app and account.
- No subscription purchase, identity-document submission or private account flow was inspected.
- The public page does not establish a general public API.

# 15. Research history

- **2026-11-04:** reviewed Meta's official technology catalog and Meta Verified product page; promoted the candidate after verifying distinct service identity and subscription-level evidence.
- **Next review:** 2027-02-04, or sooner if Meta changes plans, eligibility or service boundaries materially.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier meta-verified` and inspect canonical identity with `npx rea-faang products show meta-verified --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang meta-verified --out ./meta-verified.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit meta-verified --out ./meta-verified-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`meta-verified`).
- Dossier: [research/companies/meta/products/meta-verified.md](../../../research/companies/meta/products/meta-verified.md).
- REA capture: [catalog/rea/meta/meta-verified.md](../../rea/meta/meta-verified.md) (2026-11-04T02:46:11.863Z); raw record: [catalog/rea/evidence/meta-verified.json](../../rea/evidence/meta-verified.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Meta Verified as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Verified: Get the verified badge on Instagram & Facebook](https://www.meta.com/meta-verified/) — Meta Verified is a subscription for creators and businesses with verification, impersonation protection and support features. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Meta Verified as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Verified: Get the verified badge on Instagram & Facebook](https://www.meta.com/meta-verified/) — Meta Verified is a subscription for creators and businesses with verification, impersonation protection and support features. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Official product page](https://www.meta.com/meta-verified/) — Meta Verified is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Official documentation entry](https://www.meta.com/meta-verified/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Additional official source lead](https://www.meta.com/technologies/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://www.meta.com/meta-verified/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Meta Verified Public web-surface observation (REA)](https://www.meta.com/meta-verified/) — A dated unauthenticated snapshot exposed controls button: Search Meta Store, button: Log In, button: Verified badge, button: Impersonation protection, button: Enhanced support, button: Upgraded profile features, button: Search optimization, button: Featured profile, button: Links in Reels, button: Add images to your links, button: Exclusive stickers, button: Custom chat themes, button: Personalized content strategy advice, button: Previous slide, button: Next slide, button: How do I know if I'm eligible?, button: I already have a verified badge. What happens to it?, button: What is the verification process?, button: As a creator, can I use one Meta Verified subscription on both Facebook and Instagram?, button: What is the price to subscribe to Meta Verified for creators?, link: Skip to main content, link: Meta home, link: AI glasses, link: Meta Quest, link: Meta VR Glasses, link: Muse Charm, link: Explore Meta, link: Support, link: View bag items, link: Learn more, link: Subscribe on Facebook, link: Subscribe on Instagram, link: Meta Verified for businesses, link: Sign up on web or mobile app, link: Sign up on mobile app only, link: professional creator account, link: Facebook, link: Instagram, link: Terms of Service, link: Facebook Terms of Use, link: Instagram Terms of Service, link: Community Standards, link: Manage your Meta Verified subscription, link: inversionista_gal's profile photo @inversionista_gal The Meta Verified Badge icon 4k+ followers, button: What if I'm interested in Meta Verified for businesses?, button: Do my Meta Verified benefits extend to my other profiles and accounts?, button: After I sign up for Meta Verified, can I change my plan selection?, button: How do I change my plan selection?, button: I have multiple accounts subscribed to Meta Verified. Can I upgrade/ downgrade only for 1 of them?, link: Visit our Newsroom, link: Facebook Meta.com social media, link: Threads Meta.com social media, link: Instagram Meta.com social media, link: X Meta.com social media, link: YouTube Meta.com media channel, link: Meta Glasses, link: Ray-Ban Meta glasses, link: Oakley Meta glasses, link: Meta Ray-Ban Display, link: Compare glasses, link: AI glasses accessories, link: AI glasses guides, link: Meta Lab, link: Meta Quest accessories, link: Apps and games, link: Meta Gift Card, link: Refurbished Meta Quest 3, link: Refurbished Meta Quest 3S, link: Refurbished Ray-Ban Meta glasses, link: More from Ray-Ban, link: Meta Warranty Plus, link: Meta Quest referrals, link: Education discount, link: AI glasses bulk order inquiry, link: Blog, link: Meta Help Center, link: Order status, link: Returns, link: Find a product demo, link: Find a store, link: Legal, link: Terms of sale, link: Meta Quest safety center, link: Creators, link: Developers, link: Businesses, link: Non-profits, link: Download SDKs, link: Made for Meta partner program, link: VR for Good, link: Data and privacy, link: Responsible business practices, link: Accessibility, link: Elections, link: About Meta, link: Company Info, link: Careers, link: Media gallery, link: Brand resources, link: For investors, link: Newsroom, link: Community standards, link: Privacy policy, link: Terms, link: Cookie policy, link: Facebook Help Center, link: Messenger Help Center, link: Instagram Help Center, link: WhatsApp Help Center, link: Workplace Help Center, link: Meta Verified, link: Meta Account (Single Login), button: Change language and landmarks navigation: Main, main, region: Meta Verified testimonials, region: How do I know if I'm eligible?, contentinfo. (VERIFIED; accessed 2026-11-04T02:46:11.863Z).
