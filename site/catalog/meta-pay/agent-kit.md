---
name: meta-pay
description: "Evidence-aware build skill for Meta Pay (meta-pay); investigate, assess reuse, implement scoped behavior and verify."
---

# Meta Pay — implementation skill (`meta-pay`)

> **Research status:** researched. Alternative coverage is **partial alternative coverage**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Meta Pay**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Meta Pay** (`meta-pay`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/meta/meta-pay.md` from the catalog page, or run `npx rea-faang meta-pay --out ./meta-pay.md`, `npx rea-faang skills generate meta-pay` or `npx rea-faang build agent-kit meta-pay --out ./meta-pay-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Meta Pay / `meta-pay` | `catalog/products.jsonl` |
| Official product URL | [https://www.meta.com/meta-pay/](https://www.meta.com/meta-pay/) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://pay.facebook.com/](https://pay.facebook.com/) | Catalog record |
| Research dossier | `npx rea-faang research dossier meta-pay` | `research/companies/meta/products/meta-pay.md` |
| REA report | `catalog/rea/meta/meta-pay.md` (captured 2026-11-04T02:35:39.190Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/meta-pay.json` (`ev_2d079b2fa836adf0fa07db45a16e808489a78f231cf92dad4ffe0c914b8d0fae`) | Catalog evidence |
| Alternative candidates | 3 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show meta-pay --format json` and `npx rea-faang research dossier meta-pay` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://www.meta.com/meta-pay/](https://www.meta.com/meta-pay/), captured 2026-11-04T02:35:39.190Z, evidence `ev_2d079b2fa836adf0fa07db45a16e808489a78f231cf92dad4ffe0c914b8d0fae`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `META-PAY-CAP-AA3D2853`, `META-PAY-CAP-8A1CCC92`.

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
| Name / stable ID | **Meta Pay** / `meta-pay` | Product catalog |
| Company / category | Meta / `consumer_application` / `payments`, `checkout`, `money-transfer` | Product catalog |
| Official website / docs | [https://www.meta.com/meta-pay/](https://www.meta.com/meta-pay/) / [https://pay.facebook.com/](https://pay.facebook.com/) | URL lead; compiler does not fetch source |
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
| `META-PAY-CAP-AA3D2853` | Product identity and public payment/checkout surface are verified. | VERIFIED | `ev-meta-pay-identity`, `ev-meta-pay-surface` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `META-PAY-CAP-8A1CCC92` | Supported apps, countries, stores, transfers and payment use cases vary; no account or transaction was tested. | VERIFIED | `ev-meta-pay-surface` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Advance slide pause button Anti-fraud monitoring To detect unauthorized activity, payments are monitored using anti-fraud technology. Learn more (opens in new tab)`, `button: Advance slide pause button`, `button: Customer support If an unauthorized Meta Pay transaction appears on your bank account, customer support is always ready to help. Chat live 24 hours a day or reach out via email. Learn more (opens in new tab)`, `button: Data security To keep your information secure, your debit and credit card numbers are encrypted for safe and secure storage. Learn more (opens in new tab)`, `button: Advance slide pause button Open your favorite app Start a payment on the apps, such as Facebook, Messenger and Instagram, you already use. There's no need to download a separate app.`, `button: Enter your payment details Add the credit card, debit card or PayPal account you’d like to use. You can update your preferred payment method any time within Meta Pay settings.`, `button: Create a PIN for Meta Pay Protect yourself from unauthorized transactions with a personalized PIN to control access. Once it’s enabled, you will be prompted to enter it before some purchases for additional security.`, `button: Manage your payment information Manage and update your preferred payment method in Accounts Center at any time. You can also view your transaction history across all connected apps in the same Accounts Center.`, `button: Send money When you're sending money to friends and family, the money goes straight into the recipient’s bank account. There’s no waiting and no fees. (There may be fees imposed by your bank which are separate from Meta Pay.)`, `button: How does Meta Pay work?`, `button: Is it secure to make payments with Meta Pay?`, `button: How do I set up a Meta Pay PIN?`, `button: Do I need to have a Facebook account to use Meta Pay?`, `button: Where can I use Meta Pay?`, `button: Change language`, `link: Skip to content`, `link: Skip to main content`, `link: Meta home`, `link: AI glasses`, `link: Meta Quest`, `link: Meta VR Glasses`, `link: Muse Charm`, `link: Explore Meta`, `link: Support`, `link: Bag`, `link: Log In`, `link: Check availability`, `link: Add your payment method (opens in new tab)`, `link: Accounts Center (opens in new tab)`, `link: Learn more (opens in new tab)`, `link: Meta Pay Help Center (opens in new tab)`, `link: Visit our Newsroom (opens in new tab)`, `link: Country availability`, `link: Help Center (opens in new tab)`, `link: Privacy Policy (opens in new tab)`, `link: Community Payment Terms (opens in new tab)`, `link: Payments Privacy Policy (opens in new tab)`, `link: EU Region Payments Privacy Policy (opens in new tab)`, `link: Facebook Meta.com social media`, `link: Threads Meta.com social media`, `link: Instagram Meta.com social media`, `link: X Meta.com social media`, `link: YouTube Meta.com media channel`, `link: Meta Glasses`, `link: Ray-Ban Meta glasses`, `link: Oakley Meta glasses`, `link: Meta Ray-Ban Display`, `link: Compare glasses`, `link: AI glasses accessories`, `link: AI glasses guides`, `link: Meta Lab`, `link: Meta Quest accessories`, `link: Apps and games`, `link: Meta Gift Card`, `link: Refurbished Meta Quest 3`, `link: Refurbished Meta Quest 3S`, `link: Refurbished Ray-Ban Meta glasses`, `link: More from Ray-Ban`, `link: Meta Warranty Plus`, `link: Meta Quest referrals`, `link: Education discount`, `link: AI glasses bulk order inquiry`, `link: Blog`, `link: Meta Help Center`, `link: Order status`, `link: Returns`, `link: Find a product demo`, `link: Find a store`, `link: Legal`, `link: Terms of sale`, `link: Meta Quest safety center`, `link: Creators`, `link: Developers`, `link: Businesses`, `link: Non-profits`, `link: Download SDKs`, `link: Made for Meta partner program`, `link: VR for Good`, `link: Data and privacy`, `link: Responsible business practices`, `link: Accessibility`, `link: Elections`, `link: About Meta`, `link: Company Info`, `link: Careers`, `link: Media gallery`, `link: Brand resources`, `link: For investors`, `link: Newsroom`, `link: Community standards`, `link: Privacy policy`, `link: Terms`, `link: Cookie policy`, `link: Facebook Help Center`, `link: Messenger Help Center`, `link: Instagram Help Center`, `link: WhatsApp Help Center`, `link: Workplace Help Center`, `link: Meta Verified`, `link: Meta Account (Single Login)`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Product identity and public payment/checkout surface are verified.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Supported apps, countries, stores, transfers and payment use cases vary; no account or transaction was tested.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Main`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `Meta Pay`, `Check out easily and quickly`, `Manage your payment activity`, `Anti-fraud monitoring`, `Customer support`, `Data security`, `Open your favorite app`, `Enter your payment details`, `Create a PIN for Meta Pay`, `Manage your payment information`, `Send money`, `Use Meta Pay seamlessly between Facebook and Instagram`, `FAQs`, `Meta Newsroom`, `Meta Store`, `Store support and legal`, `Community`, `Our actions`, `About us`, `Site terms and policies`, `App support` | Results and subsequent views |
| Controls | `button: Advance slide pause button Anti-fraud monitoring To detect unauthorized activity, payments are monitored using anti-fraud technology. Learn more (opens in new tab)`, `button: Advance slide pause button`, `button: Customer support If an unauthorized Meta Pay transaction appears on your bank account, customer support is always ready to help. Chat live 24 hours a day or reach out via email. Learn more (opens in new tab)`, `button: Data security To keep your information secure, your debit and credit card numbers are encrypted for safe and secure storage. Learn more (opens in new tab)`, `button: Advance slide pause button Open your favorite app Start a payment on the apps, such as Facebook, Messenger and Instagram, you already use. There's no need to download a separate app.`, `button: Enter your payment details Add the credit card, debit card or PayPal account you’d like to use. You can update your preferred payment method any time within Meta Pay settings.`, `button: Create a PIN for Meta Pay Protect yourself from unauthorized transactions with a personalized PIN to control access. Once it’s enabled, you will be prompted to enter it before some purchases for additional security.`, `button: Manage your payment information Manage and update your preferred payment method in Accounts Center at any time. You can also view your transaction history across all connected apps in the same Accounts Center.`, `button: Send money When you're sending money to friends and family, the money goes straight into the recipient’s bank account. There’s no waiting and no fees. (There may be fees imposed by your bank which are separate from Meta Pay.)`, `button: How does Meta Pay work?`, `button: Is it secure to make payments with Meta Pay?`, `button: How do I set up a Meta Pay PIN?`, `button: Do I need to have a Facebook account to use Meta Pay?`, `button: Where can I use Meta Pay?`, `button: Change language`, `link: Skip to content`, `link: Skip to main content`, `link: Meta home`, `link: AI glasses`, `link: Meta Quest`, `link: Meta VR Glasses`, `link: Muse Charm`, `link: Explore Meta`, `link: Support`, `link: Bag`, `link: Log In`, `link: Check availability`, `link: Add your payment method (opens in new tab)`, `link: Accounts Center (opens in new tab)`, `link: Learn more (opens in new tab)`, `link: Meta Pay Help Center (opens in new tab)`, `link: Visit our Newsroom (opens in new tab)`, `link: Country availability`, `link: Help Center (opens in new tab)`, `link: Privacy Policy (opens in new tab)`, `link: Community Payment Terms (opens in new tab)`, `link: Payments Privacy Policy (opens in new tab)`, `link: EU Region Payments Privacy Policy (opens in new tab)`, `link: Facebook Meta.com social media`, `link: Threads Meta.com social media`, `link: Instagram Meta.com social media`, `link: X Meta.com social media`, `link: YouTube Meta.com media channel`, `link: Meta Glasses`, `link: Ray-Ban Meta glasses`, `link: Oakley Meta glasses`, `link: Meta Ray-Ban Display`, `link: Compare glasses`, `link: AI glasses accessories`, `link: AI glasses guides`, `link: Meta Lab`, `link: Meta Quest accessories`, `link: Apps and games`, `link: Meta Gift Card`, `link: Refurbished Meta Quest 3`, `link: Refurbished Meta Quest 3S`, `link: Refurbished Ray-Ban Meta glasses`, `link: More from Ray-Ban`, `link: Meta Warranty Plus`, `link: Meta Quest referrals`, `link: Education discount`, `link: AI glasses bulk order inquiry`, `link: Blog`, `link: Meta Help Center`, `link: Order status`, `link: Returns`, `link: Find a product demo`, `link: Find a store`, `link: Legal`, `link: Terms of sale`, `link: Meta Quest safety center`, `link: Creators`, `link: Developers`, `link: Businesses`, `link: Non-profits`, `link: Download SDKs`, `link: Made for Meta partner program`, `link: VR for Good`, `link: Data and privacy`, `link: Responsible business practices`, `link: Accessibility`, `link: Elections`, `link: About Meta`, `link: Company Info`, `link: Careers`, `link: Media gallery`, `link: Brand resources`, `link: For investors`, `link: Newsroom`, `link: Community standards`, `link: Privacy policy`, `link: Terms`, `link: Cookie policy`, `link: Facebook Help Center`, `link: Messenger Help Center`, `link: Instagram Help Center`, `link: WhatsApp Help Center`, `link: Workplace Help Center`, `link: Meta Verified`, `link: Meta Account (Single Login)` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to content](#before-content)`, `[Skip to main content](#mdc-main-content)`, `[Meta home](/)`, `[AI glasses](/ai-glasses/)`, `[Meta Quest](/quest/)`, `[Meta VR Glasses](/vr-glasses/)`, `[Muse Charm](/muse-charm/)`, `[Explore Meta](/about/)`, `[Support](/help/)`, `[Bag](/bag/)`, `[Log In](/login/?next=https%3A%2F%2Fwww.meta.com%2Fmeta-pay%2F)`, `[Check availability](/meta-pay/availability/)`, `[Add your payment method (opens in new tab)](https://www.facebook.com/help/503055570507753)`, `[Accounts Center (opens in new tab)](https://www.facebook.com/help/943858526073065)`, `[Learn more (opens in new tab)](https://www.facebook.com/help/2167164950254129)`, `[Learn more (opens in new tab)](https://www.facebook.com/help/218846068134280)`, `[Learn more (opens in new tab)](https://www.facebook.com/help/663265547498941)`, `[Meta Pay Help Center (opens in new tab)](https://pay.facebook.com/faqs/#General)`, `[Visit our Newsroom (opens in new tab)](https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.fb.com%2Fnews%2F2022%2F06%2Fintroducing-meta-pay%2F&h=AUCRmdudjnBoT-tSkAUJ8o_or2OCEvJ65_TD3SeFsBunLqyBT6vHo17QRDfwOr-KBdXh1HiCPHahUrExoXGqmLlNrlAPzMLqo_vNSm8r9c9163EnXPu1Cf7xmUBLQcmVsViKHP5E6k3jMl8XUb1yOWynGtA)`, `[Country availability](/meta-pay/availability/)`, `[Help Center (opens in new tab)](https://www.facebook.com/help/pay)`, `[Privacy Policy (opens in new tab)](https://www.facebook.com/about/privacy/update)`, `[Community Payment Terms (opens in new tab)](https://www.facebook.com/payments_terms)`, `[Payments Privacy Policy (opens in new tab)](https://www.facebook.com/payments_terms/privacy)`, `[EU Region Payments Privacy Policy (opens in new tab)](https://www.facebook.com/payments_terms/EU_privacy)`, `[Facebook Meta.com social media](https://www.facebook.com/Meta)`, `[Threads Meta.com social media](https://www.threads.net/@meta)`, `[Instagram Meta.com social media](https://www.instagram.com/meta/)`, `[X Meta.com social media](https://twitter.com/Meta)`, `[YouTube Meta.com media channel](https://www.youtube.com/meta)`, `[Meta Glasses](/ai-glasses/meta-glasses/)`, `[Ray-Ban Meta glasses](/ai-glasses/ray-ban-meta/)`, `[Oakley Meta glasses](/ai-glasses/oakley-meta/)`, `[Meta Ray-Ban Display](/ai-glasses/meta-ray-ban-display/)`, `[Compare glasses](/ai-glasses/compare/)`, `[AI glasses accessories](/ai-glasses/accessories/)`, `[AI glasses guides](/ai-glasses/learn/)`, `[Meta Lab](/meta-lab/)`, `[Meta Quest accessories](/quest/accessories/)`, `[Apps and games](/experiences/)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-AA3D2853 — Product identity and public payment/checkout surface are verified.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-pay-identity`, `ev-meta-pay-surface`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-AA3D2853`; fixture and expected output must be specified from evidence.
- **Trace:** `META-PAY-CAP-AA3D2853` → `REQ-FUNC-AA3D2853` → `TEST-FUNC-AA3D2853`.

### REQ-FUNC-8A1CCC92 — Supported apps, countries, stores, transfers and payment use cases vary; no account or transaction was tested.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-meta-pay-surface`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-8A1CCC92`; fixture and expected output must be specified from evidence.
- **Trace:** `META-PAY-CAP-8A1CCC92` → `REQ-FUNC-8A1CCC92` → `TEST-FUNC-8A1CCC92`.

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
| [Medusa](https://medusajs.com/) | Not recorded; verify the canonical repository | MIT (unverified) | Open commerce platform with checkout and payment-provider integrations. | Provides commerce foundations but not Meta's payment rails, account graph, fraud systems or merchant network. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Saleor](https://saleor.io/) | Not recorded; verify the canonical repository | BSD-3-Clause (unverified) | Open headless commerce platform with checkout and payment integrations. | Useful for independent commerce, but not a drop-in replacement for Meta Pay's regional and platform semantics. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Open Payment Network](https://openpaymentnetwork.org/) | Not recorded; verify the canonical repository | Open standards and project-specific licenses (unverified) | Open payment interoperability and experimentation resources. | Covers standards-oriented payment exploration, not Meta Pay's consumer and merchant service. | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `META-PAY-CAP-AA3D2853` — Product identity and public payment/checkout surface are verified. | Not verified against Medusa | None yet; compare with `ev_2d079b2fa836adf0fa07db45a16e808489a78f231cf92dad4ffe0c914b8d0fae` | Candidate code path and tests must be inspected |
| `META-PAY-CAP-8A1CCC92` — Supported apps, countries, stores, transfers and payment use cases vary; no account or transaction was tested. | Not verified against Medusa | None yet; compare with `ev_2d079b2fa836adf0fa07db45a16e808489a78f231cf92dad4ffe0c914b8d0fae` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **Medusa** (Open commerce platform with checkout and payment-provider integrations.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **Medusa** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
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

- **TEST-FUNC-AA3D2853** → `REQ-FUNC-AA3D2853`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-8A1CCC92** → `REQ-FUNC-8A1CCC92`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

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
- **Requirements:** REQ-FUNC-AA3D2853, REQ-FUNC-8A1CCC92
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-AA3D2853, REQ-FUNC-8A1CCC92
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
- **Completion:** Trace: REQ-FUNC-AA3D2853, REQ-FUNC-8A1CCC92; document exclusions and unknowns.
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
| `ev-meta-pay-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Meta Pay under Services. | [link](https://www.meta.com/technologies/) | 2026-11-03T00:00:00Z | Meta lists Meta Pay as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-pay-surface` | Meta Pay — Meta's official product page documents saved payment and shipping details, checkout, payment history, anti-fraud monitoring, encryption, PIN protection, donations and sending money, with country and use-case limits. | [link](https://www.meta.com/meta-pay/) | 2026-11-03T00:00:00Z | Meta Pay provides payment, checkout, payment-management and money-transfer workflows across participating Meta surfaces. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-pay-identity` | Meta Platforms and Technologies — Meta's official technologies page lists Meta Pay under Services. | [link](https://www.meta.com/technologies/) | 2026-11-03T00:00:00Z | Meta lists Meta Pay as a distinct service in its technology portfolio. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-meta-pay-surface` | Meta Pay — Meta's official product page documents saved payment and shipping details, checkout, payment history, anti-fraud monitoring, encryption, PIN protection, donations and sending money, with country and use-case limits. | [link](https://www.meta.com/meta-pay/) | 2026-11-03T00:00:00Z | Meta Pay provides payment, checkout, payment-management and money-transfer workflows across participating Meta surfaces. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.meta.com/meta-pay/) | 2026-11-03T00:00:00Z | Meta Pay is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://pay.facebook.com/) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/technologies/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://www.meta.com/meta-pay/) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_2d079b2fa836adf0fa07db45a16e808489a78f231cf92dad4ffe0c914b8d0fae` | Meta Pay Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.meta.com/meta-pay/) | 2026-11-04T02:35:39.190Z | A dated unauthenticated snapshot exposed controls button: Advance slide pause button Anti-fraud monitoring To detect unauthorized activity, payments are monitored using anti-fraud technology. Learn more (opens in new tab), button: Advance slide pause button, button: Customer support If an unauthorized Meta Pay transaction appears on your bank account, customer support is always ready to help. Chat live 24 hours a day or reach out via email. Learn more (opens in new tab), button: Data security To keep your information secure, your debit and credit card numbers are encrypted for safe and secure storage. Learn more (opens in new tab), button: Advance slide pause button Open your favorite app Start a payment on the apps, such as Facebook, Messenger and Instagram, you already use. There's no need to download a separate app., button: Enter your payment details Add the credit card, debit card or PayPal account you’d like to use. You can update your preferred payment method any time within Meta Pay settings., button: Create a PIN for Meta Pay Protect yourself from unauthorized transactions with a personalized PIN to control access. Once it’s enabled, you will be prompted to enter it before some purchases for additional security., button: Manage your payment information Manage and update your preferred payment method in Accounts Center at any time. You can also view your transaction history across all connected apps in the same Accounts Center., button: Send money When you're sending money to friends and family, the money goes straight into the recipient’s bank account. There’s no waiting and no fees. (There may be fees imposed by your bank which are separate from Meta Pay.), button: How does Meta Pay work?, button: Is it secure to make payments with Meta Pay?, button: How do I set up a Meta Pay PIN?, button: Do I need to have a Facebook account to use Meta Pay?, button: Where can I use Meta Pay?, button: Change language, link: Skip to content, link: Skip to main content, link: Meta home, link: AI glasses, link: Meta Quest, link: Meta VR Glasses, link: Muse Charm, link: Explore Meta, link: Support, link: Bag, link: Log In, link: Check availability, link: Add your payment method (opens in new tab), link: Accounts Center (opens in new tab), link: Learn more (opens in new tab), link: Meta Pay Help Center (opens in new tab), link: Visit our Newsroom (opens in new tab), link: Country availability, link: Help Center (opens in new tab), link: Privacy Policy (opens in new tab), link: Community Payment Terms (opens in new tab), link: Payments Privacy Policy (opens in new tab), link: EU Region Payments Privacy Policy (opens in new tab), link: Facebook Meta.com social media, link: Threads Meta.com social media, link: Instagram Meta.com social media, link: X Meta.com social media, link: YouTube Meta.com media channel, link: Meta Glasses, link: Ray-Ban Meta glasses, link: Oakley Meta glasses, link: Meta Ray-Ban Display, link: Compare glasses, link: AI glasses accessories, link: AI glasses guides, link: Meta Lab, link: Meta Quest accessories, link: Apps and games, link: Meta Gift Card, link: Refurbished Meta Quest 3, link: Refurbished Meta Quest 3S, link: Refurbished Ray-Ban Meta glasses, link: More from Ray-Ban, link: Meta Warranty Plus, link: Meta Quest referrals, link: Education discount, link: AI glasses bulk order inquiry, link: Blog, link: Meta Help Center, link: Order status, link: Returns, link: Find a product demo, link: Find a store, link: Legal, link: Terms of sale, link: Meta Quest safety center, link: Creators, link: Developers, link: Businesses, link: Non-profits, link: Download SDKs, link: Made for Meta partner program, link: VR for Good, link: Data and privacy, link: Responsible business practices, link: Accessibility, link: Elections, link: About Meta, link: Company Info, link: Careers, link: Media gallery, link: Brand resources, link: For investors, link: Newsroom, link: Community standards, link: Privacy policy, link: Terms, link: Cookie policy, link: Facebook Help Center, link: Messenger Help Center, link: Instagram Help Center, link: WhatsApp Help Center, link: Workplace Help Center, link: Meta Verified, link: Meta Account (Single Login) and landmarks navigation: Main, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

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

Resume token: `meta-pay`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Meta Pay is Meta's payment and checkout service. Meta lists it separately under Services and its official product page documents saved payment details, checkout, payment management, fraud monitoring, encryption, donations and money transfer, with explicit country and use-case limits. No account or transaction was accessed.

# 2. Product identity and ownership

- **Canonical name:** Meta Pay
- **Stable catalog ID:** `meta-pay`
- **Company:** Meta
- **Product type:** consumer payment application
- **Official product URL:** https://www.meta.com/meta-pay/
- **Payment help:** https://pay.facebook.com/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-pay-identity`, `ev-meta-pay-surface`

Meta Pay is kept separate from Facebook, Instagram, Messenger, Meta Account and participating merchant surfaces. Its integrations do not turn those apps into one product record.

# 3. Verified public capabilities

1. Meta lists Meta Pay as a separate service.
2. The public product page documents checkout using saved payment, shipping and contact information.
3. The page documents payment-method management, transaction history, anti-fraud monitoring, encrypted card storage, PIN/device protections, donations and selected money transfers.

# 4. Technical architecture

The public evidence supports the payment-service boundary and stated controls. Internal payment rails, processor relationships, risk models, account graph, tokenization, settlement and ledger implementation are not inferred.

# 5. User workflows

The verified public scope includes checkout, managing payment methods and history, donations and selected peer-to-peer transfers. Availability varies by country, app, merchant, account and use case.

# 6. Pricing and access

Meta Pay is presented as a payment service rather than a standalone paid subscription. Payment methods, fees, transfer eligibility, country availability and merchant participation require current account-specific verification.

# 7. API and integration surface

The public page does not establish a general unrestricted Meta Pay API. Merchant and developer integrations must use current official Meta documentation and authorized payment contracts; do not infer an API from the consumer page.

# 8. Open-source alternatives

- **Medusa:** open-source commerce platform with payment-provider integrations.
- **Saleor:** open-source headless commerce platform with checkout and payment integration surfaces.
- **Open Payment Network:** open standards and tooling for interoperable payment experiments.

# 9. Alternative comparison

Alternative coverage is **partial**. Medusa and Saleor provide commerce/checkout foundations, but none is verified here as a replacement for Meta Pay's payment instruments, Meta account integration, fraud systems, regional rails or merchant network.

# 10. Missing capabilities and opportunity analysis

An independent implementation needs an authorized processor, tokenization, ledger, fraud controls, disputes, compliance, refunds, identity and country-specific operations. Reproducing Meta's payment network is out of scope.

# 11. REA implementation strategy

Use public Meta Pay documentation only to define user-visible requirements. Build against an authorized payment provider and independent data model; never handle real money or payment credentials without explicit authorization and compliance controls.

# 12. Security and compliance

Payment credentials and transaction data are highly sensitive. Any implementation must define PCI scope, encryption, tokenization, least privilege, fraud monitoring, audit logs, dispute/refund flows, privacy, retention and regional compliance. No compliance or security parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-pay-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-pay-surface` | https://www.meta.com/meta-pay/ | Public payment, checkout, security and availability claims |
| REA capture | `catalog/rea/meta/meta-pay.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Payment methods, countries, transfer rails and merchant availability require current verification.
- No private account, transaction, customer-support or payment-processor workflow was inspected.
- Any implementation must use an authorized processor and complete its compliance review.

# 15. Research history

- **2026-11-03:** reviewed Meta's official technology catalog and Meta Pay product page; promoted the candidate after verifying distinct service identity and product-level payment evidence.
- **Next review:** 2027-02-03, or sooner if Meta changes availability, payment surfaces or regional policies materially.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier meta-pay` and inspect canonical identity with `npx rea-faang products show meta-pay --format json`.
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
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang meta-pay --out ./meta-pay.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit meta-pay --out ./meta-pay-agent`.

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

- Product: [catalog/products.jsonl](../../products.jsonl) (`meta-pay`).
- Dossier: [research/companies/meta/products/meta-pay.md](../../../research/companies/meta/products/meta-pay.md).
- REA capture: [catalog/rea/meta/meta-pay.md](../../rea/meta/meta-pay.md) (2026-11-04T02:35:39.190Z); raw record: [catalog/rea/evidence/meta-pay.json](../../rea/evidence/meta-pay.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Meta Pay as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Meta Pay](https://www.meta.com/meta-pay/) — Meta Pay provides payment, checkout, payment-management and money-transfer workflows across participating Meta surfaces. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Meta Platforms and Technologies](https://www.meta.com/technologies/) — Meta lists Meta Pay as a distinct service in its technology portfolio. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Meta Pay](https://www.meta.com/meta-pay/) — Meta Pay provides payment, checkout, payment-management and money-transfer workflows across participating Meta surfaces. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://www.meta.com/meta-pay/) — Meta Pay is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://pay.facebook.com/) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://www.meta.com/technologies/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://www.meta.com/meta-pay/) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Meta Pay Public web-surface observation (REA)](https://www.meta.com/meta-pay/) — A dated unauthenticated snapshot exposed controls button: Advance slide pause button Anti-fraud monitoring To detect unauthorized activity, payments are monitored using anti-fraud technology. Learn more (opens in new tab), button: Advance slide pause button, button: Customer support If an unauthorized Meta Pay transaction appears on your bank account, customer support is always ready to help. Chat live 24 hours a day or reach out via email. Learn more (opens in new tab), button: Data security To keep your information secure, your debit and credit card numbers are encrypted for safe and secure storage. Learn more (opens in new tab), button: Advance slide pause button Open your favorite app Start a payment on the apps, such as Facebook, Messenger and Instagram, you already use. There's no need to download a separate app., button: Enter your payment details Add the credit card, debit card or PayPal account you’d like to use. You can update your preferred payment method any time within Meta Pay settings., button: Create a PIN for Meta Pay Protect yourself from unauthorized transactions with a personalized PIN to control access. Once it’s enabled, you will be prompted to enter it before some purchases for additional security., button: Manage your payment information Manage and update your preferred payment method in Accounts Center at any time. You can also view your transaction history across all connected apps in the same Accounts Center., button: Send money When you're sending money to friends and family, the money goes straight into the recipient’s bank account. There’s no waiting and no fees. (There may be fees imposed by your bank which are separate from Meta Pay.), button: How does Meta Pay work?, button: Is it secure to make payments with Meta Pay?, button: How do I set up a Meta Pay PIN?, button: Do I need to have a Facebook account to use Meta Pay?, button: Where can I use Meta Pay?, button: Change language, link: Skip to content, link: Skip to main content, link: Meta home, link: AI glasses, link: Meta Quest, link: Meta VR Glasses, link: Muse Charm, link: Explore Meta, link: Support, link: Bag, link: Log In, link: Check availability, link: Add your payment method (opens in new tab), link: Accounts Center (opens in new tab), link: Learn more (opens in new tab), link: Meta Pay Help Center (opens in new tab), link: Visit our Newsroom (opens in new tab), link: Country availability, link: Help Center (opens in new tab), link: Privacy Policy (opens in new tab), link: Community Payment Terms (opens in new tab), link: Payments Privacy Policy (opens in new tab), link: EU Region Payments Privacy Policy (opens in new tab), link: Facebook Meta.com social media, link: Threads Meta.com social media, link: Instagram Meta.com social media, link: X Meta.com social media, link: YouTube Meta.com media channel, link: Meta Glasses, link: Ray-Ban Meta glasses, link: Oakley Meta glasses, link: Meta Ray-Ban Display, link: Compare glasses, link: AI glasses accessories, link: AI glasses guides, link: Meta Lab, link: Meta Quest accessories, link: Apps and games, link: Meta Gift Card, link: Refurbished Meta Quest 3, link: Refurbished Meta Quest 3S, link: Refurbished Ray-Ban Meta glasses, link: More from Ray-Ban, link: Meta Warranty Plus, link: Meta Quest referrals, link: Education discount, link: AI glasses bulk order inquiry, link: Blog, link: Meta Help Center, link: Order status, link: Returns, link: Find a product demo, link: Find a store, link: Legal, link: Terms of sale, link: Meta Quest safety center, link: Creators, link: Developers, link: Businesses, link: Non-profits, link: Download SDKs, link: Made for Meta partner program, link: VR for Good, link: Data and privacy, link: Responsible business practices, link: Accessibility, link: Elections, link: About Meta, link: Company Info, link: Careers, link: Media gallery, link: Brand resources, link: For investors, link: Newsroom, link: Community standards, link: Privacy policy, link: Terms, link: Cookie policy, link: Facebook Help Center, link: Messenger Help Center, link: Instagram Help Center, link: WhatsApp Help Center, link: Workplace Help Center, link: Meta Verified, link: Meta Account (Single Login) and landmarks navigation: Main, contentinfo. (VERIFIED; accessed 2026-11-04T02:35:39.190Z).
