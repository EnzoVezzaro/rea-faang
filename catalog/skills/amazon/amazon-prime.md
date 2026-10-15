---
name: amazon-prime
description: Coding-agent build skill for Amazon Prime (Amazon). Research the product, assess open-source projects, then build and verify it in the user's project. Alternative coverage is no verified alternative; candidates include Coop models / community group-buy, Walmart+ / Target Circle 360.
---

# Amazon Prime (`amazon-prime`)

| | |
|---|---|
| **Company** | Amazon (`amazon`) |
| **Product type** | `consumer_subscription` |
| **Categories** | `subscription` |
| **Official URL** | https://www.amazon.com/prime |
| **Alternative coverage** | **no verified alternative** |

## Product description

Amazon Prime is a paid membership bundle: fast shipping, Prime Video, Music, Photos, Reading and more, tied to Amazon’s logistics network.

Catalog categories: subscription.

Catalogued capability areas:
- Subscription membership and billing
- Fast/free shipping entitlement
- Bundled media and service perks

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Core capabilities

- Subscription membership and billing
- Fast/free shipping entitlement
- Bundled media and service perks

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Coop models / community group-buy](https://www.bogleheads.org/forum/viewtopic.php?t=467402) | n/a | Non-Amazon shopping and delivery arrangements. | Not software; a different way of buying. |
| [Walmart+ / Target Circle 360](https://www.kiplinger.com/personal-finance/shopping/online-shopping/604366/alternatives-to-amazon-prime-for-free-shipping-and) | proprietary | Commercial subscription alternatives. | Proprietary competitors, not open source. |

## Gap

Prime is a commercial membership over Amazon’s logistics; there is no open-source software equivalent, and the value is the network, not code.

## Verdict

No open-source software equivalent to the Prime membership and logistics network is verified; assess the individual user jobs, such as shipping or media, separately.

## Product description and scope

Amazon Prime is a paid membership bundle: fast shipping, Prime Video, Music, Photos, Reading and more, tied to Amazon’s logistics network.

Catalog categories: subscription.

Catalogued capability areas:
- Subscription membership and billing
- Fast/free shipping entitlement
- Bundled media and service perks

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **Amazon Prime**. Give this file to your coding agent in the project where you want the product built. RAE’s goal is “We don't need FAANG anymore. Use your agent to build any of their products. RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google.” Use that ambition to work toward the user’s requested product, not to overstate current evidence or completion. Research the product, choose what to reuse, build an independent implementation in the user’s project and verify it. Do not reproduce proprietary internals, protected assets or branding, and do not claim blanket feature parity; turn verified public behavior into an evidence-backed, traceable build plan.

**Important evidence limit:** the product dossier has research status **pending**. The catalog summary is a starting brief, not a complete verified specification; its capability list may be incomplete. Research public behavior first, fill the coverage ledger, and report unknowns honestly while making progress on verified scope.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier amazon-prime` and review its research status (**pending**). When using the source repository, read `research/companies/amazon/products/amazon-prime.md`. A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Evidence standard and source ledger

- Start with the official product page and official documentation when recorded. The **Sources** list labels official documentation separately from candidate-project research leads.
- The dossier research status is **pending**. Catalog summaries, capabilities, alternative status, verdicts and gaps are leads—not a verified specification. Never silently promote a claim to verified.
- For each material requirement, attach a public URL, access date, the specific claim supported, confidence, and any conflict/unknown. A source link by itself is not claim-level evidence.
- Separate directly observed behavior, official documentation, third-party reporting, inference, design choice, and unknowns. Do not infer behavior or internals from branding, marketing language, a screenshot or an unauthenticated page.
- If sources conflict or evidence is inaccessible, record the uncertainty and ask for a decision only when it blocks safe, useful progress. Never fabricate defaults, APIs, compatibility, scale, guarantees or parity.

| Claim / requirement | Source URL + access date | Supported behavior | Source type | Confidence | Conflict / unknown | Decision |
|---|---|---|---|---|---|---|
| Add one row per material behavior before implementation | Public, authorized source required | Quote or paraphrase only what it supports | Official / observed / third-party / inference | Verified / partial / unknown | Record explicitly | Include / exclude / defer |

Research lens: **consumer_subscription** — Plans/entitlements, sign-up/cancellation/renewal, regional availability, billing boundaries, household/profile rules, catalog/content rights, usage limits, refunds, accessibility and clear status/error handling.

Unknowns are first-class outputs. Do not guess product behavior to fill a blank. When no reliable evidence exists, mark the requirement unverified, propose a bounded assumption only if safe and reversible, and ask the user to approve scope decisions that materially change the product.

### Reuse/build decision

This catalog has not verified a suitable candidate. Search current projects by user job, record search terms/date and license/activity evidence, then guide the user through building the requested product in their project.

Current alternative coverage: **no verified alternative**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: No open-source software equivalent to the Prime membership and logistics network is verified; assess the individual user jobs, such as shipping or media, separately. Prime is a commercial membership over Amazon’s logistics; there is no open-source software equivalent, and the value is the network, not code.

Candidate projects to verify:

- **Coop models / community group-buy** (n/a) — Non-Amazon shopping and delivery arrangements. Note: Not software; a different way of buying. Source: https://www.bogleheads.org/forum/viewtopic.php?t=467402
- **Walmart+ / Target Circle 360** (proprietary) — Commercial subscription alternatives. Note: Proprietary competitors, not open source. Source: https://www.kiplinger.com/personal-finance/shopping/online-shopping/604366/alternatives-to-amazon-prime-for-free-shipping-and

### Product behaviors and workflow coverage ledger

Treat catalog capability bullets as a seed list, not a complete backlog. Decompose compound bullets into separate user-observable workflows. Find missing primary journeys, administration, onboarding, settings, accessibility, data portability, safety, abuse, failures, recovery and cross-platform differences from public evidence. Keep direct equivalents and intentionally different design decisions distinct.

- **AMAZON-PRIME-CAP-001 — Subscription membership and billing:** identify the user/actor, goal, entry point, prerequisite, happy path, alternate/error/permission-denied path, resulting state, platform, data effects, evidence and acceptance check. Decompose compound capability bullets into distinct independently testable workflows where needed.
- **AMAZON-PRIME-CAP-002 — Fast/free shipping entitlement:** identify the user/actor, goal, entry point, prerequisite, happy path, alternate/error/permission-denied path, resulting state, platform, data effects, evidence and acceptance check. Decompose compound capability bullets into distinct independently testable workflows where needed.
- **AMAZON-PRIME-CAP-003 — Bundled media and service perks:** identify the user/actor, goal, entry point, prerequisite, happy path, alternate/error/permission-denied path, resulting state, platform, data effects, evidence and acceptance check. Decompose compound capability bullets into distinct independently testable workflows where needed.

| Requirement ID | Behavior / user job (catalog lead) | Evidence + date | Confidence | Scope | Acceptance test / manual check |
|---|---|---|---|---|---|
| AMAZON-PRIME-CAP-001 | Subscription membership and billing | **Missing: verify against public sources** | Unknown until verified | Untriaged: include, exclude with reason, or defer | Define observable success and negative/error cases |
| AMAZON-PRIME-CAP-002 | Fast/free shipping entitlement | **Missing: verify against public sources** | Unknown until verified | Untriaged: include, exclude with reason, or defer | Define observable success and negative/error cases |
| AMAZON-PRIME-CAP-003 | Bundled media and service perks | **Missing: verify against public sources** | Unknown until verified | Untriaged: include, exclude with reason, or defer | Define observable success and negative/error cases |

Plans/entitlements, sign-up/cancellation/renewal, regional availability, billing boundaries, household/profile rules, catalog/content rights, usage limits, refunds, accessibility and clear status/error handling.

For every in-scope behavior, record the actor, user goal, trigger, preconditions, inputs, expected visible/system result, state transition, permissions, main path, alternate/invalid/denied/timeout/retry/recovery paths, data/privacy effects, platform constraints, public evidence and confidence. Use stable requirement IDs (for example `AMAZON-PRIME-REQ-001`), and trace each ID from evidence → workflow → specification/contract → implementation → automated test or named manual check. Maintain a **coverage ledger** showing implemented, tested, partial, not started, excluded-with-reason, or unknown; never call the product “complete” while required rows are unimplemented or unverified.

### Questions that expose missing workflows and product edges

- Who is the intended user, and which first-party jobs matter most? Which jobs vary by role, account state, locale, platform or subscription/entitlement?
- What are the complete lifecycle and state transitions (create, read, update, share, revoke, archive, delete, restore)? What persists and what is ephemeral?
- What identity, access-control, ownership, consent and delegation rules govern each action? How are unauthorized and revoked actions handled?
- What are the import/export, interoperability, migration and data portability needs? Which data/content must the user supply or license?
- What are expected scale, latency, availability, offline and recovery behaviors? Which are documented facts versus targets chosen for this implementation?
- What legal, privacy, safety, abuse, retention, regional and accessibility considerations change the design?

A comprehensive implementation targets the user’s requested scope and all verified in-scope workflows, not every imagined feature. Ask the user to choose only where evidence leaves materially different valid product decisions; otherwise continue with a documented, reversible choice.

### Build the product in the user's project

Use the product skill from the project where the user wants **Amazon Prime** built. Review that project's conventions and existing code, then create a traceable plan for the complete user-requested scope. Deliver it in working vertical slices: each slice should connect the real interface, domain behavior, data/contracts and tests. Do not stop after a static mock, empty scaffold, isolated API or happy-path-only demo unless that is the approved scope. The catalog and optional scaffold provide guidance; implementation belongs in the user's project. If evidence is insufficient for a behavior, research it before coding or mark the behavior blocked with a precise question.

### End-to-end implementation milestones

1. **Orient:** identify the real user project, its existing architecture, conventions, tests, deployment target and constraints. Do not overwrite it or scaffold a parallel app without approval.
2. **Research:** create an evidence ledger and unknowns list; verify intended users, user jobs, full observable workflows, platform matrix, data, permissions, errors, integrations and constraints. Use authorized public sources only.
3. **Inventory:** enumerate every requested/known capability, related workflows and cross-cutting concerns. Assign stable IDs; classify each as verified, inferred, unknown, in-scope, explicitly excluded, or deferred. Resolve contradictions before treating them as facts.
4. **Specify:** write a product brief, user journeys, requirements/acceptance scenarios, non-goals, data model, API/events, permissions, threat model, compatibility matrix, quality targets and migration/operations notes appropriate to the project. Keep specifications next to the project implementation when possible.
5. **Decide reuse:** inspect candidate projects and existing code for actual fit, maintenance, license, security, integration cost and gaps. Reuse is optional and must serve the user’s goal; do not replace the requested product with a competitor. Do not add dependencies before confirming they are needed and acceptable.
6. **Plan the complete scope:** order work into end-to-end vertical slices. Implement all verified in-scope requirements through successive slices; if time or evidence prevents completion, leave a transparent coverage ledger and a prioritized continuation plan rather than claiming completeness.
7. **Build:** follow the host project’s stack and patterns. Implement original code and assets, accessible interfaces, safe data handling, explicit states, useful errors and operational observability. Keep interfaces/contracts stable before parallel agent work.
8. **Verify:** tests trace to requirement IDs; run focused checks, full project tests, static/security checks and compatibility checks that the project supports. Inspect the running artifact through the interface the user will use; capture unrun checks and actual limits.
9. **Review and deliver:** review functionality, security, accessibility, license/attribution, performance against stated targets, docs, setup, migration and rollback. Report what works, what is partial, what is not implemented, evidence gaps, commands and next steps.

### Product implementation prompt

“We don't need FAANG anymore. Use your agent to build **Amazon Prime** in this project. Start from this skill, but treat every catalog claim as provisional until you verify it. Research authorized public behavior, define a traceable coverage plan for the full scope I request, reuse suitable open components where they fit, and implement an original, independently written product—not a branded clone. Test the real user journeys, explain what is complete versus partial or unknown, and leave a clear next-step plan for any unimplemented requirements.”

### Required deliverables

- **Evidence ledger:** claim, source URL, source type, access date, exact supported behavior, confidence, contradiction and open question.
- **Behavior inventory:** capability ID, actor/job, trigger, preconditions, main and alternate paths, state transitions, permissions, platforms, data effects and status.
- **Product brief:** target users, problem, outcomes, full requested scope, explicit non-goals and measurable quality goals.
- **Specification set:** user journeys, requirements, acceptance scenarios, architecture/contracts, data model, threat/privacy model, UI states, compatibility, test plan and operational/migration notes as relevant.
- **Build plan:** reusable components and licenses, vertical slices, ownership/interfaces, dependency decisions, risks and ordered tasks.
- **Implementation:** integrated working software inside the user’s project, not a mockup or disconnected scaffold, unless that is the scope the user approved.
- **Verification packet:** requirement-to-test traceability, commands and actual exit codes, manual/browser checks, representative performance data when required, checks not run, limitations and known gaps.
- **Handoff:** changed files, decisions, risks, setup/run instructions, next actionable work and honest completion status.

### Product quality and verification plan

- Correctness: test the primary user journey end to end, then alternate paths, invalid input, permission denial and recovery.
- Security/privacy: map assets and trust boundaries; validate identity/authorization server-side; minimize collected data; protect secrets; prevent injection/SSRF/CSRF and abuse where relevant; document encryption, retention, export/delete, and threat assumptions.
- Accessibility/UX: keyboard and screen-reader operation, semantic labels, focus order, contrast, reduced motion, localization-ready text, useful empty/loading/error states and responsive layouts where applicable.
- Reliability: retries/idempotency, timeouts, cancellation, partial failure, backups/restore, migrations, monitoring and operational runbooks appropriate to the product.
- Compatibility: test every claimed platform, protocol, file format, SDK/API version or client; otherwise label it unsupported or unverified.
- Performance: establish a representative workload and a user-visible target before optimizing; record baseline, measurement method and environment. Do not claim equivalent scale without evidence.
- Maintainability: dependency/license inventory, reproducible setup, configuration validation, migrations, API contracts, logs/metrics, documentation and clean-checkout verification.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/amazon/products/amazon-prime.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./amazon-prime (optional local workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Acceptance criteria and definition of done

- The user’s target and implementation scope are explicit. Every material workflow is represented in the capability inventory; exclusions, assumptions and known gaps have reasons.
- Each in-scope requirement has an evidence/confidence record and observable acceptance criteria. Requirements trace to implementation and to a passing automated test or repeatable manual check; unverified requirements stay labeled.
- Primary and alternate user journeys work end to end through the interface the user will use, with real data/state behavior—not a visual-only mock—unless the user requested a prototype.
- Tests cover success, empty/new state, invalid input, permissions, errors, retries/timeouts, interruption/recovery, persistence and boundary cases relevant to the behavior.
- Accessibility, privacy/security, licensing, compatibility and operational readiness are reviewed for the chosen scope. Setup works from a clean checkout; migrations, backup/restore or deployment steps are documented where applicable.
- Product-specific test/build/lint/security checks are run and actual exit codes recorded. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run `npm run validate` and `npm test`; otherwise use the installed CLI's `rae research validate` for catalog integrity.
- Report implemented/partial/not-started/unknown requirement counts, unrun checks, known limitations and the next task. A reviewer accepts the implementation and handoff. Passing tests prove only the tested behavior—not parity with Amazon Prime or undocumented internals.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product-type research checklist: Plans/entitlements, sign-up/cancellation/renewal, regional availability, billing boundaries, household/profile rules, catalog/content rights, usage limits, refunds, accessibility and clear status/error handling.
- Product metadata: `rae products show amazon-prime --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier amazon-prime`; source file when working in the repository: `research/companies/amazon/products/amazon-prime.md`.
- Alternative candidates and coverage: `rae alternatives list --product amazon-prime`; source landscape file when available: `catalog/skills/amazon/amazon-prime.md`.
- Optional local product workspace/specifications: `./amazon-prime (optional local workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/amazon-prime.md`.
- Official product page: https://www.amazon.com/prime.
- Research status: **pending**; alternative coverage: **no verified alternative**. This coverage label describes existing-project research only, not the ability to build this product.

### Capability coverage ledger

Use the table as a live planning artifact in the user’s project. Split a catalog bullet when it contains multiple independently testable workflows; add evidence-discovered behaviors not listed here; never mark “complete” without a source and a verified acceptance check. Keep out-of-scope decisions visible.

| Requirement | User/actor + goal | Evidence/confidence | Acceptance scenario | Implementation/test link | Status/exception |
|---|---|---|---|---|---|
| AMAZON-PRIME-CAP-001: Subscription membership and billing | Discover and verify | Missing until claim-level source is recorded | Main, alternate, invalid and denied path | Add source → spec → code → test links | Untriaged: include, exclude with reason, or defer |
| AMAZON-PRIME-CAP-002: Fast/free shipping entitlement | Discover and verify | Missing until claim-level source is recorded | Main, alternate, invalid and denied path | Add source → spec → code → test links | Untriaged: include, exclude with reason, or defer |
| AMAZON-PRIME-CAP-003: Bundled media and service perks | Discover and verify | Missing until claim-level source is recorded | Main, alternate, invalid and denied path | Add source → spec → code → test links | Untriaged: include, exclude with reason, or defer |


### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show amazon-prime --format json` and retrieve dossier contents with `rae research dossier amazon-prime` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. These checks validate catalog structure, not whether all product claims are researched or current. Generate a portable agent kit with `rae amazon-prime --out ./amazon-prime-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product amazon-prime --out ./amazon-prime` only if useful. Keep generated outputs separate; inspect existing paths before writing and do not overwrite existing work. For current product behavior, verify public sources and maintain the coverage ledger below.


## Sources

- **Official product surface (identity/observable public behavior):** https://www.amazon.com/prime
- **Catalog research lead (re-check before relying on it):** https://www.kiplinger.com/personal-finance/shopping/online-shopping/604366/alternatives-to-amazon-prime-for-free-shipping-and
- **Catalog research lead (re-check before relying on it):** https://www.wired.com/story/amazon-prime-alternatives/
- **Catalog research lead (re-check before relying on it):** https://www.reddit.com/r/amazonprime/comments/1s203tu/is_there_a_decent_alternative_to_amazon_prime_for/
- **Candidate project — Coop models / community group-buy (verify project, license and current status):** https://www.bogleheads.org/forum/viewtopic.php?t=467402
- **Candidate project — Walmart+ / Target Circle 360 (verify project, license and current status):** https://www.kiplinger.com/personal-finance/shopping/online-shopping/604366/alternatives-to-amazon-prime-for-free-shipping-and

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`amazon-prime`)
- Research dossier: [`research/companies/amazon/products/amazon-prime.md`](../../../research/companies/amazon/products/amazon-prime.md)
- REA web-surface report: [`catalog/rea/amazon/amazon-prime.md`](../../rea/amazon/amazon-prime.md)
