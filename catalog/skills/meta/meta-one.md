---
name: meta-one
description: "Evidence-aware build skill for Meta One (meta-one); investigate, assess reuse, implement scoped behavior and verify."
---

# Meta One — implementation skill (`meta-one`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Meta One**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Meta One** (`meta-one`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/meta/meta-one.md` from the catalog page, or run `npx rea-faang meta-one --out ./meta-one.md`, `npx rea-faang skills generate meta-one` or `npx rea-faang build agent-kit meta-one --out ./meta-one-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Meta One / `meta-one` | `catalog/products.jsonl` |
| Official product URL | [https://www.meta.com/meta-one-plans/](https://www.meta.com/meta-one-plans/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://www.meta.com/meta-one-plans/](https://www.meta.com/meta-one-plans/) | Catalog record |
| Research dossier | `npx rea-faang research dossier meta-one` | `research/companies/meta/products/meta-one.md` |
| REA report | `catalog/rea/meta/meta-one.md` (captured 2026-11-04T02:49:10.402Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/meta-one.json` (`ev_b79eb8e2ba3e4935393e1587145d7bdb76b50dfa366344893ebcf52b0c303530`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show meta-one --format json` and `npx rea-faang research dossier meta-one` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.meta.com/meta-one-plans/](https://www.meta.com/meta-one-plans/), captured 2026-11-04T02:49:10.402Z, evidence `ev_b79eb8e2ba3e4935393e1587145d7bdb76b50dfa366344893ebcf52b0c303530`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `META-ONE-CAP-F316D5A3`, `META-ONE-CAP-79E4E6E4`.

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
| Name / stable ID | **Meta One** / `meta-one` | Product catalog |
| Company / category | Meta / `consumer_subscription` / `subscription`, `creator-tools`, `social`, `ai`, `analytics` | Product catalog |
| Official website / docs | [https://www.meta.com/meta-one-plans/](https://www.meta.com/meta-one-plans/) / [https://www.meta.com/meta-one-plans/](https://www.meta.com/meta-one-plans/) | URL lead; compiler does not fetch source |
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
| `META-ONE-CAP-F316D5A3` | Distinct subscription identity and public plan surface are verified. | VERIFIED | `ev-meta-one-identity`, `ev-meta-one-surface` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-ONE-CAP-79E4E6E4` | Features, plans, pricing, availability and eligibility vary by region, app and account; Meta One builds on but is distinct from Meta Verified. | VERIFIED | `ev-meta-one-surface`, `ev-meta-one-relationship` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Search Meta Store`, `button: Log In`, `button: Pause video`, `button: Personal`, `button: Creator`, `button: Business`, `button: Learn more about Instagram Plus`, `button: Learn more about WhatsApp Plus`, `button: Learn more about Facebook Plus`, `button: Learn more about Meta AI`, `button: Instagram Plus`, `button: WhatsApp Plus`, `button: Facebook Plus`, `button: More AI usage`, `button: Open Generate and edit images details`, `button: Open Create and transform videos details`, `button: Open Apply voice and sound effects details`, `button: Open Use your benefits across profiles details`, `button: Expanded AI usage`, `button: Open Choose a custom app icon details`, `link: Skip to main content`, `link: Meta home`, `link: AI glasses`, `link: Meta Quest`, `link: Meta VR Glasses`, `link: Muse Charm`, `link: Explore Meta`, `link: Support`, `link: View bag items`, `link: How to subscribe to a Meta One personal bundle plan`, `button: Open Pin more posts to your profile details`, `button: Open Create multiple story audiences details`, `button: Open Send super hearts to stories details`, `button: Open Spotlight your story details`, `button: Open Post content only to your profile details`, `button: Open Unlock custom fonts for your bio details`, `button: See more features`, `link: How to subscribe to Instagram Plus`, `button: Open Change your app’s theme details`, `button: Open Pin extra chats details`, `button: Open Send exclusive stickers details`, `button: Open Get exclusive ringtones details`, `button: Open Upgrade your chat lists details`, `link: How to subscribe to WhatsApp Plus`, `button: Open Super react to stories details`, `button: Open Preview stories details`, `button: Open Search your story viewer list details`, `button: Open Extend your story’s expiration details`, `button: Open Get story rewatch insights details`, `link: How to subscribe to Facebook Plus`, `link: professional account`, `link: pro mode`, `link: business Page`, `link: eligibility requirements`, `link: consumers`, `link: creators and businesses`, `link: Instagram Terms of Use`, `link: Facebook Terms of Service`, `link: Community Standards`, `link: WhatsApp Business Terms of Service`, `link: WhatsApp Business Messaging Policy`, `link: Manage your Meta One Subscription`, `link: Help Center`, `button: What is Meta One?`, `button: How do I subscribe?`, `button: How much does Meta One cost?`, `button: How is Meta One different from Meta Verified?`, `button: Is Meta Verified going away?`, `button: Can I still get a verified badge?`, `button: Is Meta AI still free?`, `button: Does my subscription work across Instagram, Facebook and WhatsApp?`, `button: How do I manage my subscription?`, `button: Can I cancel anytime?`, `button: What if I'm having issues?`, `link: Facebook Meta.com social media`, `link: Threads Meta.com social media`, `link: Instagram Meta.com social media`, `link: X Meta.com social media`, `link: YouTube Meta.com media channel`, `link: Meta Glasses`, `link: Ray-Ban Meta glasses`, `link: Oakley Meta glasses`, `link: Meta Ray-Ban Display`, `link: Compare glasses`, `link: AI glasses accessories`, `link: AI glasses guides`, `link: Meta Lab`, `link: Meta Quest accessories`, `link: Apps and games`, `link: Meta Gift Card`, `link: Refurbished Meta Quest 3`, `link: Refurbished Meta Quest 3S`, `link: Refurbished Ray-Ban Meta glasses`, `link: More from Ray-Ban`, `link: Meta Warranty Plus`, `link: Meta Quest referrals`, `link: Education discount`, `link: AI glasses bulk order inquiry`, `link: Blog`, `link: Meta Help Center`, `link: Order status`, `link: Returns`, `link: Find a product demo`, `link: Find a store`, `link: Legal`, `link: Terms of sale`, `link: Meta Quest safety center`, `link: Creators`, `link: Developers`, `link: Businesses`, `link: Non-profits`, `link: Download SDKs`, `link: Made for Meta partner program`, `link: VR for Good`, `link: Data and privacy`, `link: Responsible business practices`, `link: Accessibility`, `link: Elections`, `link: About Meta`, `link: Company Info`, `link: Careers`, `link: Media gallery`, `link: Brand resources`, `link: For investors`, `link: Newsroom`, `link: Community standards`, `link: Privacy policy`, `link: Terms`, `link: Cookie policy`, `link: Facebook Help Center`, `link: Messenger Help Center`, `link: Instagram Help Center`, `link: WhatsApp Help Center`, `link: Workplace Help Center`, `link: Meta Verified`, `link: Meta Account (Single Login)`, `button: Change language`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Distinct subscription identity and public plan surface are verified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Features, plans, pricing, availability and eligibility vary by region, app and account; Meta One builds on but is distinct from Meta Verified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Main`, `main`, `region: More AI usage`, `region: Expanded AI usage`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `More with Meta One`, `Explore personal, creator and business plans`, `Get more from the apps you love`, `Instagram Plus`, `WhatsApp Plus`, `Facebook Plus`, `Meta AI`, `Personal bundle plans and pricing`, `More AI usage`, `Expanded AI usage`, `Single product plans`, `See more features`, `Frequently asked questions`, `What is Meta One?`, `How do I subscribe?`, `How much does Meta One cost?`, `How is Meta One different from Meta Verified?`, `Is Meta Verified going away?`, `Can I still get a verified badge?`, `Is Meta AI still free?`, `Does my subscription work across Instagram, Facebook and WhatsApp?`, `How do I manage my subscription?`, `Can I cancel anytime?`, `What if I'm having issues?`, `Meta Store` | Results and subsequent views |
| Controls | `button: Search Meta Store`, `button: Log In`, `button: Pause video`, `button: Personal`, `button: Creator`, `button: Business`, `button: Learn more about Instagram Plus`, `button: Learn more about WhatsApp Plus`, `button: Learn more about Facebook Plus`, `button: Learn more about Meta AI`, `button: Instagram Plus`, `button: WhatsApp Plus`, `button: Facebook Plus`, `button: More AI usage`, `button: Open Generate and edit images details`, `button: Open Create and transform videos details`, `button: Open Apply voice and sound effects details`, `button: Open Use your benefits across profiles details`, `button: Expanded AI usage`, `button: Open Choose a custom app icon details`, `link: Skip to main content`, `link: Meta home`, `link: AI glasses`, `link: Meta Quest`, `link: Meta VR Glasses`, `link: Muse Charm`, `link: Explore Meta`, `link: Support`, `link: View bag items`, `link: How to subscribe to a Meta One personal bundle plan`, `button: Open Pin more posts to your profile details`, `button: Open Create multiple story audiences details`, `button: Open Send super hearts to stories details`, `button: Open Spotlight your story details`, `button: Open Post content only to your profile details`, `button: Open Unlock custom fonts for your bio details`, `button: See more features`, `link: How to subscribe to Instagram Plus`, `button: Open Change your app’s theme details`, `button: Open Pin extra chats details`, `button: Open Send exclusive stickers details`, `button: Open Get exclusive ringtones details`, `button: Open Upgrade your chat lists details`, `link: How to subscribe to WhatsApp Plus`, `button: Open Super react to stories details`, `button: Open Preview stories details`, `button: Open Search your story viewer list details`, `button: Open Extend your story’s expiration details`, `button: Open Get story rewatch insights details`, `link: How to subscribe to Facebook Plus`, `link: professional account`, `link: pro mode`, `link: business Page`, `link: eligibility requirements`, `link: consumers`, `link: creators and businesses`, `link: Instagram Terms of Use`, `link: Facebook Terms of Service`, `link: Community Standards`, `link: WhatsApp Business Terms of Service`, `link: WhatsApp Business Messaging Policy`, `link: Manage your Meta One Subscription`, `link: Help Center`, `button: What is Meta One?`, `button: How do I subscribe?`, `button: How much does Meta One cost?`, `button: How is Meta One different from Meta Verified?`, `button: Is Meta Verified going away?`, `button: Can I still get a verified badge?`, `button: Is Meta AI still free?`, `button: Does my subscription work across Instagram, Facebook and WhatsApp?`, `button: How do I manage my subscription?`, `button: Can I cancel anytime?`, `button: What if I'm having issues?`, `link: Facebook Meta.com social media`, `link: Threads Meta.com social media`, `link: Instagram Meta.com social media`, `link: X Meta.com social media`, `link: YouTube Meta.com media channel`, `link: Meta Glasses`, `link: Ray-Ban Meta glasses`, `link: Oakley Meta glasses`, `link: Meta Ray-Ban Display`, `link: Compare glasses`, `link: AI glasses accessories`, `link: AI glasses guides`, `link: Meta Lab`, `link: Meta Quest accessories`, `link: Apps and games`, `link: Meta Gift Card`, `link: Refurbished Meta Quest 3`, `link: Refurbished Meta Quest 3S`, `link: Refurbished Ray-Ban Meta glasses`, `link: More from Ray-Ban`, `link: Meta Warranty Plus`, `link: Meta Quest referrals`, `link: Education discount`, `link: AI glasses bulk order inquiry`, `link: Blog`, `link: Meta Help Center`, `link: Order status`, `link: Returns`, `link: Find a product demo`, `link: Find a store`, `link: Legal`, `link: Terms of sale`, `link: Meta Quest safety center`, `link: Creators`, `link: Developers`, `link: Businesses`, `link: Non-profits`, `link: Download SDKs`, `link: Made for Meta partner program`, `link: VR for Good`, `link: Data and privacy`, `link: Responsible business practices`, `link: Accessibility`, `link: Elections`, `link: About Meta`, `link: Company Info`, `link: Careers`, `link: Media gallery`, `link: Brand resources`, `link: For investors`, `link: Newsroom`, `link: Community standards`, `link: Privacy policy`, `link: Terms`, `link: Cookie policy`, `link: Facebook Help Center`, `link: Messenger Help Center`, `link: Instagram Help Center`, `link: WhatsApp Help Center`, `link: Workplace Help Center`, `link: Meta Verified`, `link: Meta Account (Single Login)`, `button: Change language` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content](#mdc-main-content)`, `[Meta home](/)`, `[AI glasses](/ai-glasses/)`, `[Meta Quest](/quest/)`, `[Meta VR Glasses](/vr-glasses/)`, `[Muse Charm](/muse-charm/)`, `[Explore Meta](/about/)`, `[Support](/help/)`, `[View bag items](/bag/)`, `[How to subscribe to a Meta One personal bundle plan](https://www.meta.com/help/subscriptions/1275481294766689/)`, `[How to subscribe to Instagram Plus](https://help.instagram.com/1455320872971466/)`, `[How to subscribe to WhatsApp Plus](https://faq.whatsapp.com/1442805697640853/)`, `[How to subscribe to Facebook Plus](https://www.facebook.com/help/1233488775563527)`, `[professional account](https://www.facebook.com/help/instagram/138925576505882)`, `[pro mode](https://www.facebook.com/business/help/2680340558863560)`, `[business Page](https://www.facebook.com/business/help/1968057156746246?id=939256796236247)`, `[eligibility requirements](https://www.meta.com/help/subscriptions/960854640235758/)`, `[consumers](https://www.facebook.com/legal/meta_subs_terms)`, `[creators and businesses](https://www.facebook.com/legal/mocb_terms)`, `[Instagram Terms of Use](https://help.instagram.com/581066165581870)`, `[Facebook Terms of Service](https://www.facebook.com/legal/terms?paipv=0&eav=AfZvYlKgIQAjlxpYVSHVvCw3CDNKhbt_ANPixrhWnZggprx0mVoioWLHLGnddjmxNdY&_rdr)`, `[Community Standards](https://transparency.fb.com/policies/community-standards/)`, `[WhatsApp Business Terms of Service](https://www.whatsapp.com/legal/business-terms)`, `[WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy)`, `[Manage your Meta One Subscription](https://www.meta.com/help/subscriptions/4515570262058351/?ref=website)`, `[Help Center](https://www.meta.com/help/subscriptions/842874544827919/?ref=website)`, `[Facebook Meta.com social media](https://www.facebook.com/Meta)`, `[Threads Meta.com social media](https://www.threads.net/@meta)`, `[Instagram Meta.com social media](https://www.instagram.com/meta/)`, `[X Meta.com social media](https://twitter.com/Meta)`, `[YouTube Meta.com media channel](https://www.youtube.com/meta)`, `[Meta Glasses](/ai-glasses/meta-glasses/)`, `[Ray-Ban Meta glasses](/ai-glasses/ray-ban-meta/)`, `[Oakley Meta glasses](/ai-glasses/oakley-meta/)`, `[Meta Ray-Ban Display](/ai-glasses/meta-ray-ban-display/)`, `[Compare glasses](/ai-glasses/compare/)`, `[AI glasses accessories](/ai-glasses/accessories/)`, `[AI glasses guides](/ai-glasses/learn/)`, `[Meta Lab](/meta-lab/)`, `[Meta Quest accessories](/quest/accessories/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-F316D5A3 — Distinct subscription identity and public plan surface are verified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-one-identity`, `ev-meta-one-surface`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-F316D5A3`; fixture and expected output must be specified from evidence.
- **Trace:** `META-ONE-CAP-F316D5A3` → `REQ-FUNC-F316D5A3` → `TEST-FUNC-F316D5A3`.

### REQ-FUNC-79E4E6E4 — Features, plans, pricing, availability and eligibility vary by region, app and account; Meta One builds on but is distinct from Meta Verified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-one-surface`, `ev-meta-one-relationship`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-79E4E6E4`; fixture and expected output must be specified from evidence.
- **Trace:** `META-ONE-CAP-79E4E6E4` → `REQ-FUNC-79E4E6E4` → `TEST-FUNC-79E4E6E4`.

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
| [WordPress](https://wordpress.org/) | Not recorded; verify the canonical repository | GPL-2.0-or-later (unverified) | Open publishing platform with plugins, memberships and user roles. | Covers publishing and community foundations but not Meta's app entitlements, social graph or bundled AI usage. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Ghost](https://ghost.org/) | Not recorded; verify the canonical repository | MIT for the core; separate terms for hosted services (unverified) | Open publishing and membership platform. | Useful for creator publishing and memberships, but not Meta's cross-app distribution, analytics or AI services. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Matomo](https://matomo.org/) | Not recorded; verify the canonical repository | GPL-3.0 (unverified) | Open analytics platform for owned web measurement. | Covers analytics only and not Meta One's subscription, social, creator or AI features. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `META-ONE-CAP-F316D5A3` — Distinct subscription identity and public plan surface are verified. | Not verified against WordPress | None yet; compare with `ev_b79eb8e2ba3e4935393e1587145d7bdb76b50dfa366344893ebcf52b0c303530` | Candidate code path and tests must be inspected |
| `META-ONE-CAP-79E4E6E4` — Features, plans, pricing, availability and eligibility vary by region, app and account; Meta One builds on but is distinct from Meta Verified. | Not verified against WordPress | None yet; compare with `ev_b79eb8e2ba3e4935393e1587145d7bdb76b50dfa366344893ebcf52b0c303530` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **WordPress** (Open publishing platform with plugins, memberships and user roles.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **WordPress** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-F316D5A3** → `REQ-FUNC-F316D5A3`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-79E4E6E4** → `REQ-FUNC-79E4E6E4`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-F316D5A3, REQ-FUNC-79E4E6E4
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-F316D5A3, REQ-FUNC-79E4E6E4
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
- **Completion:** Trace: REQ-FUNC-F316D5A3, REQ-FUNC-79E4E6E4; document exclusions and unknowns.
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
| `ev-meta-one-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Meta One under Services. | [link](https://www.meta.com/technologies/) | 2026-11-04T00:00:00Z | Meta lists Meta One as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-one-surface` | Meta One Subscription Plans: Pricing, Features & More — Meta's official plan page documents personal, creator and business offerings, app-specific Plus features, AI media generation, content scheduling, analytics, shared access, verification and regional/account eligibility limits. | [link](https://www.meta.com/meta-one-plans/) | 2026-11-04T00:00:00Z | Meta One is a subscription service with personal, creator and business plans that add app features, AI usage and professional tools. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-one-relationship` | Meta Verified: Get the verified badge on Instagram & Facebook — Meta Verified's official page identifies Meta One as a separate subscription service with enhanced features and more AI built into Meta apps. | [link](https://www.meta.com/meta-verified/) | 2026-11-04T00:00:00Z | Meta describes Meta One as a new subscription service that builds on Meta Verified. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-one-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Meta One under Services. | [link](https://www.meta.com/technologies/) | 2026-11-04T00:00:00Z | Meta lists Meta One as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-one-surface` | Meta One Subscription Plans: Pricing, Features & More — Meta's official plan page documents personal, creator and business offerings, app-specific Plus features, AI media generation, content scheduling, analytics, shared access, verification and regional/account eligibility limits. | [link](https://www.meta.com/meta-one-plans/) | 2026-11-04T00:00:00Z | Meta One is a subscription service with personal, creator and business plans that add app features, AI usage and professional tools. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-one-relationship` | Meta Verified: Get the verified badge on Instagram & Facebook — Meta Verified's official page identifies Meta One as a separate subscription service with enhanced features and more AI built into Meta apps. | [link](https://www.meta.com/meta-verified/) | 2026-11-04T00:00:00Z | Meta describes Meta One as a new subscription service that builds on Meta Verified. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.meta.com/meta-one-plans/) | 2026-11-04T00:00:00Z | Meta One is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://www.meta.com/meta-one-plans/) | 2026-11-04T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/technologies/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/meta-one-plans/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/meta-verified/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_b79eb8e2ba3e4935393e1587145d7bdb76b50dfa366344893ebcf52b0c303530` | Meta One Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.meta.com/meta-one-plans/) | 2026-11-04T02:49:10.402Z | A dated unauthenticated snapshot exposed controls button: Search Meta Store, button: Log In, button: Pause video, button: Personal, button: Creator, button: Business, button: Learn more about Instagram Plus, button: Learn more about WhatsApp Plus, button: Learn more about Facebook Plus, button: Learn more about Meta AI, button: Instagram Plus, button: WhatsApp Plus, button: Facebook Plus, button: More AI usage, button: Open Generate and edit images details, button: Open Create and transform videos details, button: Open Apply voice and sound effects details, button: Open Use your benefits across profiles details, button: Expanded AI usage, button: Open Choose a custom app icon details, link: Skip to main content, link: Meta home, link: AI glasses, link: Meta Quest, link: Meta VR Glasses, link: Muse Charm, link: Explore Meta, link: Support, link: View bag items, link: How to subscribe to a Meta One personal bundle plan, button: Open Pin more posts to your profile details, button: Open Create multiple story audiences details, button: Open Send super hearts to stories details, button: Open Spotlight your story details, button: Open Post content only to your profile details, button: Open Unlock custom fonts for your bio details, button: See more features, link: How to subscribe to Instagram Plus, button: Open Change your app’s theme details, button: Open Pin extra chats details, button: Open Send exclusive stickers details, button: Open Get exclusive ringtones details, button: Open Upgrade your chat lists details, link: How to subscribe to WhatsApp Plus, button: Open Super react to stories details, button: Open Preview stories details, button: Open Search your story viewer list details, button: Open Extend your story’s expiration details, button: Open Get story rewatch insights details, link: How to subscribe to Facebook Plus, link: professional account, link: pro mode, link: business Page, link: eligibility requirements, link: consumers, link: creators and businesses, link: Instagram Terms of Use, link: Facebook Terms of Service, link: Community Standards, link: WhatsApp Business Terms of Service, link: WhatsApp Business Messaging Policy, link: Manage your Meta One Subscription, link: Help Center, button: What is Meta One?, button: How do I subscribe?, button: How much does Meta One cost?, button: How is Meta One different from Meta Verified?, button: Is Meta Verified going away?, button: Can I still get a verified badge?, button: Is Meta AI still free?, button: Does my subscription work across Instagram, Facebook and WhatsApp?, button: How do I manage my subscription?, button: Can I cancel anytime?, button: What if I'm having issues?, link: Facebook Meta.com social media, link: Threads Meta.com social media, link: Instagram Meta.com social media, link: X Meta.com social media, link: YouTube Meta.com media channel, link: Meta Glasses, link: Ray-Ban Meta glasses, link: Oakley Meta glasses, link: Meta Ray-Ban Display, link: Compare glasses, link: AI glasses accessories, link: AI glasses guides, link: Meta Lab, link: Meta Quest accessories, link: Apps and games, link: Meta Gift Card, link: Refurbished Meta Quest 3, link: Refurbished Meta Quest 3S, link: Refurbished Ray-Ban Meta glasses, link: More from Ray-Ban, link: Meta Warranty Plus, link: Meta Quest referrals, link: Education discount, link: AI glasses bulk order inquiry, link: Blog, link: Meta Help Center, link: Order status, link: Returns, link: Find a product demo, link: Find a store, link: Legal, link: Terms of sale, link: Meta Quest safety center, link: Creators, link: Developers, link: Businesses, link: Non-profits, link: Download SDKs, link: Made for Meta partner program, link: VR for Good, link: Data and privacy, link: Responsible business practices, link: Accessibility, link: Elections, link: About Meta, link: Company Info, link: Careers, link: Media gallery, link: Brand resources, link: For investors, link: Newsroom, link: Community standards, link: Privacy policy, link: Terms, link: Cookie policy, link: Facebook Help Center, link: Messenger Help Center, link: Instagram Help Center, link: WhatsApp Help Center, link: Workplace Help Center, link: Meta Verified, link: Meta Account (Single Login), button: Change language and landmarks navigation: Main, main, region: More AI usage, region: Expanded AI usage, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `meta-one`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Meta One is Meta's subscription service for personal, creator and business use across its apps. Its official plan page documents app-specific upgrades, more AI usage, creator scheduling and analytics, shared access, verification and other professional tools. It builds on Meta Verified but is a separate service with its own plan surface.

# 2. Product identity and ownership

- **Canonical name:** Meta One
- **Stable catalog ID:** `meta-one`
- **Company:** Meta
- **Product type:** consumer subscription
- **Official product URL:** https://www.meta.com/meta-one-plans/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-one-identity`, `ev-meta-one-surface`, `ev-meta-one-relationship`

Meta One is kept separate from Instagram, Facebook, WhatsApp, Meta AI and Meta Verified. Those products are included as surfaces or related services, not merged into this record.

# 3. Verified public capabilities

1. Meta lists Meta One as a distinct service.
2. Meta documents personal, creator and business plan families.
3. Personal plans add app customization, app-specific features and more AI media-generation usage.
4. Creator plans add scheduling, analytics, links, verification, impersonation protection, support and shared access.
5. Features, plans, pricing, eligibility and availability vary by region, app and account.

# 4. Technical architecture

Public evidence supports a subscription entitlement layer spanning multiple Meta apps. Internal billing, entitlement, identity, ranking, analytics and AI quota systems are not inferred.

# 5. User workflows

Users choose a plan in a supported Meta app, meet account eligibility requirements and receive plan-specific features in Instagram, Facebook, WhatsApp, Meta AI or related surfaces. The public page documents both bundled and app-specific plans.

# 6. Pricing and access

Meta publishes example prices for selected plans and states that local pricing, availability and eligibility vary. No subscription purchase or account-specific onboarding was attempted.

# 7. API and integration surface

The public plan page does not establish a general Meta One API. Creator scheduling, analytics, shared access and AI features must be treated as product workflows, not public API guarantees.

# 8. Open-source alternatives

- **WordPress:** open-source publishing platform with plugins and user roles.
- **Ghost:** open-source publishing and membership platform.
- **Matomo:** open-source analytics platform for owned measurement.

# 9. Alternative comparison

Alternative coverage is **partial**. WordPress and Ghost cover publishing and membership, while Matomo covers analytics; none reproduces Meta One's bundled app entitlements, AI usage, social graph, account system or platform distribution.

# 10. Missing capabilities and opportunity analysis

An independent implementation would need subscription lifecycle, entitlements across apps, creator scheduling, analytics, shared access, identity, payments, AI quotas and platform-specific feature delivery. Meta ecosystem parity is out of scope.

# 11. REA implementation strategy

Use only public plan documentation and authorized test accounts for further research. Do not purchase a plan, submit identity information or access private creator/business workflows without explicit authorization.

# 12. Security and compliance

Subscription, identity, analytics, payment and creator-account data are sensitive. Any implementation must define authorization, billing security, consent, account sharing, auditability, privacy and regional compliance. No security or entitlement-parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-one-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-one-surface` | https://www.meta.com/meta-one-plans/ | Official plans, features, pricing and eligibility claims |
| `ev-meta-one-relationship` | https://www.meta.com/meta-verified/ | Relationship to Meta Verified |
| REA capture | `catalog/rea/meta/meta-one.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Local pricing, rollout, plan eligibility and exact feature matrix require account-specific verification.
- No subscription purchase or private app workflow was inspected.
- The public sources do not establish a general public API or internal entitlement model.

# 15. Research history

- **2026-11-04:** reviewed Meta's official service catalog, Meta One plan page and Meta Verified relationship; promoted the candidate after verifying separate subscription identity and product-level evidence.
- **Next review:** 2027-02-04, or sooner if Meta changes plans, bundle boundaries or availability materially.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier meta-one` and inspect canonical identity with `npx rea-faang products show meta-one --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang meta-one --out ./meta-one.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit meta-one --out ./meta-one-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`meta-one`).
- Dossier: [research/companies/meta/products/meta-one.md](../../../research/companies/meta/products/meta-one.md).
- REA capture: [catalog/rea/meta/meta-one.md](../../rea/meta/meta-one.md) (2026-11-04T02:49:10.402Z); raw record: [catalog/rea/evidence/meta-one.json](../../rea/evidence/meta-one.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Meta One as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta One Subscription Plans: Pricing, Features & More](https://www.meta.com/meta-one-plans/) — Meta One is a subscription service with personal, creator and business plans that add app features, AI usage and professional tools. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Verified: Get the verified badge on Instagram & Facebook](https://www.meta.com/meta-verified/) — Meta describes Meta One as a new subscription service that builds on Meta Verified. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Meta One as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta One Subscription Plans: Pricing, Features & More](https://www.meta.com/meta-one-plans/) — Meta One is a subscription service with personal, creator and business plans that add app features, AI usage and professional tools. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Meta Verified: Get the verified badge on Instagram & Facebook](https://www.meta.com/meta-verified/) — Meta describes Meta One as a new subscription service that builds on Meta Verified. (VERIFIED; accessed 2026-11-04T00:00:00Z).
- [Official product page](https://www.meta.com/meta-one-plans/) — Meta One is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Official documentation entry](https://www.meta.com/meta-one-plans/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-04T00:00:00Z).
- [Additional official source lead](https://www.meta.com/technologies/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://www.meta.com/meta-one-plans/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://www.meta.com/meta-verified/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Meta One Public web-surface observation (REA)](https://www.meta.com/meta-one-plans/) — A dated unauthenticated snapshot exposed controls button: Search Meta Store, button: Log In, button: Pause video, button: Personal, button: Creator, button: Business, button: Learn more about Instagram Plus, button: Learn more about WhatsApp Plus, button: Learn more about Facebook Plus, button: Learn more about Meta AI, button: Instagram Plus, button: WhatsApp Plus, button: Facebook Plus, button: More AI usage, button: Open Generate and edit images details, button: Open Create and transform videos details, button: Open Apply voice and sound effects details, button: Open Use your benefits across profiles details, button: Expanded AI usage, button: Open Choose a custom app icon details, link: Skip to main content, link: Meta home, link: AI glasses, link: Meta Quest, link: Meta VR Glasses, link: Muse Charm, link: Explore Meta, link: Support, link: View bag items, link: How to subscribe to a Meta One personal bundle plan, button: Open Pin more posts to your profile details, button: Open Create multiple story audiences details, button: Open Send super hearts to stories details, button: Open Spotlight your story details, button: Open Post content only to your profile details, button: Open Unlock custom fonts for your bio details, button: See more features, link: How to subscribe to Instagram Plus, button: Open Change your app’s theme details, button: Open Pin extra chats details, button: Open Send exclusive stickers details, button: Open Get exclusive ringtones details, button: Open Upgrade your chat lists details, link: How to subscribe to WhatsApp Plus, button: Open Super react to stories details, button: Open Preview stories details, button: Open Search your story viewer list details, button: Open Extend your story’s expiration details, button: Open Get story rewatch insights details, link: How to subscribe to Facebook Plus, link: professional account, link: pro mode, link: business Page, link: eligibility requirements, link: consumers, link: creators and businesses, link: Instagram Terms of Use, link: Facebook Terms of Service, link: Community Standards, link: WhatsApp Business Terms of Service, link: WhatsApp Business Messaging Policy, link: Manage your Meta One Subscription, link: Help Center, button: What is Meta One?, button: How do I subscribe?, button: How much does Meta One cost?, button: How is Meta One different from Meta Verified?, button: Is Meta Verified going away?, button: Can I still get a verified badge?, button: Is Meta AI still free?, button: Does my subscription work across Instagram, Facebook and WhatsApp?, button: How do I manage my subscription?, button: Can I cancel anytime?, button: What if I'm having issues?, link: Facebook Meta.com social media, link: Threads Meta.com social media, link: Instagram Meta.com social media, link: X Meta.com social media, link: YouTube Meta.com media channel, link: Meta Glasses, link: Ray-Ban Meta glasses, link: Oakley Meta glasses, link: Meta Ray-Ban Display, link: Compare glasses, link: AI glasses accessories, link: AI glasses guides, link: Meta Lab, link: Meta Quest accessories, link: Apps and games, link: Meta Gift Card, link: Refurbished Meta Quest 3, link: Refurbished Meta Quest 3S, link: Refurbished Ray-Ban Meta glasses, link: More from Ray-Ban, link: Meta Warranty Plus, link: Meta Quest referrals, link: Education discount, link: AI glasses bulk order inquiry, link: Blog, link: Meta Help Center, link: Order status, link: Returns, link: Find a product demo, link: Find a store, link: Legal, link: Terms of sale, link: Meta Quest safety center, link: Creators, link: Developers, link: Businesses, link: Non-profits, link: Download SDKs, link: Made for Meta partner program, link: VR for Good, link: Data and privacy, link: Responsible business practices, link: Accessibility, link: Elections, link: About Meta, link: Company Info, link: Careers, link: Media gallery, link: Brand resources, link: For investors, link: Newsroom, link: Community standards, link: Privacy policy, link: Terms, link: Cookie policy, link: Facebook Help Center, link: Messenger Help Center, link: Instagram Help Center, link: WhatsApp Help Center, link: Workplace Help Center, link: Meta Verified, link: Meta Account (Single Login), button: Change language and landmarks navigation: Main, main, region: More AI usage, region: Expanded AI usage, contentinfo. (VERIFIED; accessed 2026-11-04T02:49:10.402Z).
