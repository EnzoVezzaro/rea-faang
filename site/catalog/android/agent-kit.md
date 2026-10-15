---
name: build-android
description: Coding-agent build skill for Android. Research the product, assess reusable projects, and build and verify it in your project.
---

# Build Android with your coding agent

| | |
|---|---|
| **Target product** | Android (`android`) |
| **Company** | Google (`google`) |
| **Product type** | `operating_system` |
| **Official URL** | https://www.android.com/ |
| **Alternative coverage** | **mature alternative listed** |
| **Research status** | **pending** |

## Product description

Android is Google’s mobile operating system. The Android Open Source Project (AOSP) is the open core; Google Mobile Services, Play and most device builds are proprietary additions.

Catalog categories: operating_system.

Catalogued capability areas:
- Mobile OS runtime, app framework, system UI
- App sandbox and permission model
- App distribution via Play (proprietary layer)

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Research references

- Dossier: `rae research dossier android` or [view the repository dossier](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/google/products/android.md)
- Public web-surface observation: [catalog/rea/google/android.md](https://github.com/EnzoVezzaro/rea-faang/blob/main/catalog/rea/google/android.md)

## Open-source landscape

- **AOSP** (Apache-2.0) — https://source.android.com/
  The open-source core of Android itself. Note: The upstream project — no Play services.
- **LineageOS** (Apache-2.0) — https://lineageos.org/
  Community Android distribution for many devices. Note: Widest device support.
- **GrapheneOS** (MIT) — https://grapheneos.org/
  Security-hardened Android, no Google services. Note: Pixel-focused.
- **/e/OS** (GPL-3.0 (varies)) — https://e.foundation/e-os/
  De-Googled Android with a privacy app suite. Note: Consumer-oriented fork.

## Gap and verdict

Google Mobile Services, Play and the certified hardware ecosystem are proprietary.

Available. Android’s core is open source and several independent distributions replace the proprietary layer.

## Product description and scope

Android is Google’s mobile operating system. The Android Open Source Project (AOSP) is the open core; Google Mobile Services, Play and most device builds are proprietary additions.

Catalog categories: operating_system.

Catalogued capability areas:
- Mobile OS runtime, app framework, system UI
- App sandbox and permission model
- App distribution via Play (proprietary layer)

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **Android**. Give this file to your coding agent in the project where you want the product built. RAE’s goal is “We don't need FAANG anymore. Use your agent to build any of their products. RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google.” Use that ambition to work toward the user’s requested product, not to overstate current evidence or completion. Research the product, choose what to reuse, build an independent implementation in the user’s project and verify it. Do not reproduce proprietary internals, protected assets or branding, and do not claim blanket feature parity; turn verified public behavior into an evidence-backed, traceable build plan.

**Important evidence limit:** the product dossier has research status **pending**. The catalog summary is a starting brief, not a complete verified specification; its capability list may be incomplete. Research public behavior first, fill the coverage ledger, and report unknowns honestly while making progress on verified scope.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier android` and review its research status (**pending**). When using the source repository, the dossier is also linked here: [`research/companies/google/products/android.md`](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/google/products/android.md). A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
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

Research lens: **operating_system** — Boot/update/recovery, process and memory model, filesystem, permissions, networking, device drivers, package/app model, accessibility, security boundaries, hardware support, compatibility and recovery from partial failure.

Unknowns are first-class outputs. Do not guess product behavior to fill a blank. When no reliable evidence exists, mark the requirement unverified, propose a bounded assumption only if safe and reversible, and ask the user to approve scope decisions that materially change the product.

### Reuse/build decision

A mature candidate is listed. Evaluate it as a possible foundation, but do not treat the candidate listing as the product build or substitute it for the user's request. Build the requested product in the user's project; reuse, integrate or extend candidate components where they fit.

Current alternative coverage: **mature alternative listed**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: Available. Android’s core is open source and several independent distributions replace the proprietary layer. Google Mobile Services, Play and the certified hardware ecosystem are proprietary.

Candidate projects to verify:

- **AOSP** (Apache-2.0) — The open-source core of Android itself. Note: The upstream project — no Play services. Source: https://source.android.com/
- **LineageOS** (Apache-2.0) — Community Android distribution for many devices. Note: Widest device support. Source: https://lineageos.org/
- **GrapheneOS** (MIT) — Security-hardened Android, no Google services. Note: Pixel-focused. Source: https://grapheneos.org/
- **/e/OS** (GPL-3.0 (varies)) — De-Googled Android with a privacy app suite. Note: Consumer-oriented fork. Source: https://e.foundation/e-os/

### Product behaviors and workflow coverage ledger

Treat catalog capability bullets as a seed list, not a complete backlog. Decompose compound bullets into separate user-observable workflows. Find missing primary journeys, administration, onboarding, settings, accessibility, data portability, safety, abuse, failures, recovery and cross-platform differences from public evidence. Keep direct equivalents and intentionally different design decisions distinct.

- **ANDROID-CAP-001 — Mobile OS runtime, app framework, system UI:** identify the user/actor, goal, entry point, prerequisite, happy path, alternate/error/permission-denied path, resulting state, platform, data effects, evidence and acceptance check. Decompose compound capability bullets into distinct independently testable workflows where needed.
- **ANDROID-CAP-002 — App sandbox and permission model:** identify the user/actor, goal, entry point, prerequisite, happy path, alternate/error/permission-denied path, resulting state, platform, data effects, evidence and acceptance check. Decompose compound capability bullets into distinct independently testable workflows where needed.
- **ANDROID-CAP-003 — App distribution via Play (proprietary layer):** identify the user/actor, goal, entry point, prerequisite, happy path, alternate/error/permission-denied path, resulting state, platform, data effects, evidence and acceptance check. Decompose compound capability bullets into distinct independently testable workflows where needed.

| Requirement ID | Behavior / user job (catalog lead) | Evidence + date | Confidence | Scope | Acceptance test / manual check |
|---|---|---|---|---|---|
| ANDROID-CAP-001 | Mobile OS runtime, app framework, system UI | **Missing: verify against public sources** | Unknown until verified | Untriaged: include, exclude with reason, or defer | Define observable success and negative/error cases |
| ANDROID-CAP-002 | App sandbox and permission model | **Missing: verify against public sources** | Unknown until verified | Untriaged: include, exclude with reason, or defer | Define observable success and negative/error cases |
| ANDROID-CAP-003 | App distribution via Play (proprietary layer) | **Missing: verify against public sources** | Unknown until verified | Untriaged: include, exclude with reason, or defer | Define observable success and negative/error cases |

Boot/update/recovery, process and memory model, filesystem, permissions, networking, device drivers, package/app model, accessibility, security boundaries, hardware support, compatibility and recovery from partial failure.

For every in-scope behavior, record the actor, user goal, trigger, preconditions, inputs, expected visible/system result, state transition, permissions, main path, alternate/invalid/denied/timeout/retry/recovery paths, data/privacy effects, platform constraints, public evidence and confidence. Use stable requirement IDs (for example `ANDROID-REQ-001`), and trace each ID from evidence → workflow → specification/contract → implementation → automated test or named manual check. Maintain a **coverage ledger** showing implemented, tested, partial, not started, excluded-with-reason, or unknown; never call the product “complete” while required rows are unimplemented or unverified.

### Questions that expose missing workflows and product edges

- Who is the intended user, and which first-party jobs matter most? Which jobs vary by role, account state, locale, platform or subscription/entitlement?
- What are the complete lifecycle and state transitions (create, read, update, share, revoke, archive, delete, restore)? What persists and what is ephemeral?
- What identity, access-control, ownership, consent and delegation rules govern each action? How are unauthorized and revoked actions handled?
- What are the import/export, interoperability, migration and data portability needs? Which data/content must the user supply or license?
- What are expected scale, latency, availability, offline and recovery behaviors? Which are documented facts versus targets chosen for this implementation?
- What legal, privacy, safety, abuse, retention, regional and accessibility considerations change the design?

A comprehensive implementation targets the user’s requested scope and all verified in-scope workflows, not every imagined feature. Ask the user to choose only where evidence leaves materially different valid product decisions; otherwise continue with a documented, reversible choice.

### Build the product in the user's project

Use the product skill from the project where the user wants **Android** built. Review that project's conventions and existing code, then create a traceable plan for the complete user-requested scope. Deliver it in working vertical slices: each slice should connect the real interface, domain behavior, data/contracts and tests. Do not stop after a static mock, empty scaffold, isolated API or happy-path-only demo unless that is the approved scope. The catalog and optional scaffold provide guidance; implementation belongs in the user's project. If evidence is insufficient for a behavior, research it before coding or mark the behavior blocked with a precise question.

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

“We don't need FAANG anymore. Use your agent to build **Android** in this project. Start from this skill, but treat every catalog claim as provisional until you verify it. Research authorized public behavior, define a traceable coverage plan for the full scope I request, reuse suitable open components where they fit, and implement an original, independently written product—not a branded clone. Test the real user journeys, explain what is complete versus partial or unknown, and leave a clear next-step plan for any unimplemented requirements.”

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
- OS-specific checks: use safe emulators/owned hardware, test boot/update/recovery and permission/isolation boundaries, and clearly mark unsupported hardware/firmware and app-compatibility limits.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/google/products/android.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./android (a separately generated workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
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
- Report implemented/partial/not-started/unknown requirement counts, unrun checks, known limitations and the next task. A reviewer accepts the implementation and handoff. Passing tests prove only the tested behavior—not parity with Android or undocumented internals.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product-type research checklist: Boot/update/recovery, process and memory model, filesystem, permissions, networking, device drivers, package/app model, accessibility, security boundaries, hardware support, compatibility and recovery from partial failure.
- Product metadata: `rae products show android --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier android`; source copy: [`research/companies/google/products/android.md`](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/google/products/android.md).
- Alternative candidates and coverage: `rae alternatives list --product android`; source landscape file when available: `catalog/skills/google/android.md`.
- Optional local product workspace/specifications: `./android (a separately generated workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/android.md`.
- Official product page: https://www.android.com/.
- Research status: **pending**; alternative coverage: **mature alternative listed**. This coverage label describes existing-project research only, not the ability to build this product.

### Capability coverage ledger

Use the table as a live planning artifact in the user’s project. Split a catalog bullet when it contains multiple independently testable workflows; add evidence-discovered behaviors not listed here; never mark “complete” without a source and a verified acceptance check. Keep out-of-scope decisions visible.

| Requirement | User/actor + goal | Evidence/confidence | Acceptance scenario | Implementation/test link | Status/exception |
|---|---|---|---|---|---|
| ANDROID-CAP-001: Mobile OS runtime, app framework, system UI | Discover and verify | Missing until claim-level source is recorded | Main, alternate, invalid and denied path | Add source → spec → code → test links | Untriaged: include, exclude with reason, or defer |
| ANDROID-CAP-002: App sandbox and permission model | Discover and verify | Missing until claim-level source is recorded | Main, alternate, invalid and denied path | Add source → spec → code → test links | Untriaged: include, exclude with reason, or defer |
| ANDROID-CAP-003: App distribution via Play (proprietary layer) | Discover and verify | Missing until claim-level source is recorded | Main, alternate, invalid and denied path | Add source → spec → code → test links | Untriaged: include, exclude with reason, or defer |


### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show android --format json` and retrieve dossier contents with `rae research dossier android` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. These checks validate catalog structure, not whether all product claims are researched or current. Generate a portable agent kit with `rae android --out ./android-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product android --out ./android` only if useful. Keep generated outputs separate; inspect existing paths before writing and do not overwrite existing work. For current product behavior, verify public sources and maintain the coverage ledger below.


## CLI commands

- Inspect product metadata: `rae products show android --format json`.
- Read the dossier: `rae research dossier android`.
- Check research readiness: `rae research coverage` and `rae research validate`.
- Generate a copy of this skill and optional MCP config: `rae android --out ./android-agent`. Give `skill.md` to your coding agent in the project where you want to build.
- Optionally scaffold a starter workspace: `rae build product android --out ./android`.

## Sources

- https://grapheneos.org/
- https://lineageos.org/
- https://kevinboone.me/lineage-eos-graphene.html

---

Generated from the RAE FAANG catalog — https://github.com/EnzoVezzaro/rea-faang
