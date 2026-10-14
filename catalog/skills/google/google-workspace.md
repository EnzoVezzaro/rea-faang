---
name: google-workspace
description: Coding-agent build skill for Google Workspace (Google). Research the product, assess open-source projects, then build and verify it in the user's project. Alternative coverage is mature alternative listed; candidates include Nextcloud, OnlyOffice, Collabora Online, and more.
---

# Google Workspace (`google-workspace`)

| | |
|---|---|
| **Company** | Google (`google`) |
| **Product type** | `productivity_application` |
| **Categories** | `productivity` |
| **Official URL** | https://workspace.google.com/ |
| **Alternative coverage** | **mature alternative listed** |

## Product description

Google Workspace bundles Gmail, Calendar, Drive, Docs, Sheets, Slides, Meet and Chat into one hosted collaboration suite.

Catalog categories: productivity.

Catalogued capability areas:
- File sync and share (Drive)
- Real-time collaborative docs, sheets, slides
- Email, calendar, video meetings, chat

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Core capabilities

- File sync and share (Drive)
- Real-time collaborative docs, sheets, slides
- Email, calendar, video meetings, chat

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Nextcloud](https://nextcloud.com/) | AGPL-3.0 | File sync/share plus an office suite, calendar, talk, chat. | The broadest self-hosted suite. |
| [OnlyOffice](https://www.onlyoffice.com/) | AGPL-3.0 | Collaborative docs/sheets/slides. | Strong MS-format fidelity. |
| [Collabora Online](https://www.collaboraonline.com/) | MPL-2.0 | LibreOffice-based collaborative editing. | LibreOffice engine. |
| [CryptPad](https://cryptpad.fr/) | AGPL-3.0 | End-to-end encrypted collaborative documents. | Privacy-first. |
| [Seafile](https://www.seafile.com/) | AGPL-3.0 | File sync with reliable clients. | Sync-focused. |

## Gap

Gmail/Meet/Calendar at hosted scale are matched feature-wise but not as one operated service.

## Verdict

Available. The suite can be assembled entirely from mature open-source components.

## Product description and scope

Google Workspace bundles Gmail, Calendar, Drive, Docs, Sheets, Slides, Meet and Chat into one hosted collaboration suite.

Catalog categories: productivity.

Catalogued capability areas:
- File sync and share (Drive)
- Real-time collaborative docs, sheets, slides
- Email, calendar, video meetings, chat

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **Google Workspace**. Give this file to your coding agent in the project where you want the product built. The agent uses it to research the product, choose what to reuse, build an independent implementation and verify the result. Do not reproduce proprietary internals or claim blanket feature parity; turn product context and catalog capability labels into evidence-backed requirements.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier google-workspace` and review its research status (**pending**). When using the source repository, read `research/companies/google/products/google-workspace.md`. A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Reuse/build decision

A mature candidate is listed. Evaluate it as a possible foundation, but do not treat the candidate listing as the product build or substitute it for the user's request. Build the requested product in the user's project; reuse, integrate or extend candidate components where they fit.

Current alternative coverage: **mature alternative listed**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: Available. The suite can be assembled entirely from mature open-source components. Gmail/Meet/Calendar at hosted scale are matched feature-wise but not as one operated service.

Candidate projects to verify:

- **Nextcloud** (AGPL-3.0) — File sync/share plus an office suite, calendar, talk, chat. Note: The broadest self-hosted suite. Source: https://nextcloud.com/
- **OnlyOffice** (AGPL-3.0) — Collaborative docs/sheets/slides. Note: Strong MS-format fidelity. Source: https://www.onlyoffice.com/
- **Collabora Online** (MPL-2.0) — LibreOffice-based collaborative editing. Note: LibreOffice engine. Source: https://www.collaboraonline.com/
- **CryptPad** (AGPL-3.0) — End-to-end encrypted collaborative documents. Note: Privacy-first. Source: https://cryptpad.fr/
- **Seafile** (AGPL-3.0) — File sync with reliable clients. Note: Sync-focused. Source: https://www.seafile.com/

### Build the product with this skill in the user's project

Give this product skill to the coding agent in the project where the user wants the product built. First review that project and assess current reuse options; then define a useful scope, build the requested product in the user's project, and verify the result. The coverage label below reports only research into open-source alternatives.

### Product behaviors to research and turn into requirements

- **GOOGLE-WORKSPACE-CAP-001 — File sync and share (Drive):** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **GOOGLE-WORKSPACE-CAP-002 — Real-time collaborative docs, sheets, slides:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **GOOGLE-WORKSPACE-CAP-003 — Email, calendar, video meetings, chat:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.

For each behavior selected for the MVP, record the user/actor, preconditions, input, expected observable result, alternate/error path, data and permission implications, source evidence, and a stable requirement ID (for example `GOOGLE-WORKSPACE-REQ-001`). Map that ID from evidence to workflow/specification to an automated test or a named manual check.

### Build the product in the user's project

Use the product skill from the project where the user wants **Google Workspace** built. Review that project's conventions and existing code, then plan a useful first slice with clear requirements, explicit non-goals, assumptions, external dependencies and measurable acceptance checks. Continue from that working slice toward the user's requested product. The catalog and optional scaffold provide guidance; your implementation belongs in the user's project. If research is insufficient for a behavior, gather evidence before coding that behavior.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/google/products/google-workspace.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./google-workspace (optional local workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Verification and definition of done

- Every MVP requirement maps to evidence and a passing automated test or named manual check.
- Product-specific tests pass. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run `npm run validate` and `npm test`; otherwise use the installed CLI's `rae research validate` for catalog integrity.
- Setup and configuration work from a clean start; security and license review is recorded; limitations and unimplemented capabilities are explicit.
- A reviewer accepts the implementation and its handoff. Passing tests prove only the tested behavior—not parity with Google Workspace.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product metadata: `rae products show google-workspace --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier google-workspace`; source file when working in the repository: `research/companies/google/products/google-workspace.md`.
- Alternative candidates and coverage: `rae alternatives list --product google-workspace`; source landscape file when available: `catalog/skills/google/google-workspace.md`.
- Optional local product workspace/specifications: `./google-workspace (optional local workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/google-workspace.md`.
- Official product page: https://workspace.google.com/.
- Research status: **pending**; alternative coverage: **mature alternative listed**. This coverage label describes existing-project research only, not the ability to build this product.

### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show google-workspace --format json` and retrieve the dossier contents with `rae research dossier google-workspace` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. Generate a portable agent kit with `rae google-workspace --out ./google-workspace-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product google-workspace --out ./google-workspace` only if useful. Keep generated outputs separate; do not overwrite existing work.


## Sources

- https://nextcloud.com/
- https://opensource.com/article/22/7/open-source-collabora-online
- https://budgethomelab.com/articles/open-source-google-workspace-alternatives/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`google-workspace`)
- Research dossier: [`research/companies/google/products/google-workspace.md`](../../../research/companies/google/products/google-workspace.md)
- REA web-surface report: [`catalog/rea/google/google-workspace.md`](../../rea/google/google-workspace.md)
