---
name: apple-macos
description: Coding-agent build skill for macOS (Apple). Research the product, assess open-source projects, then build and verify it in the user's project. Alternative coverage is no verified alternative; candidates include Linux distributions (Ubuntu, Fedora, elementary), FreeBSD, Darwin.
---

# macOS (`apple-macos`)

| | |
|---|---|
| **Company** | Apple (`apple`) |
| **Product type** | `operating_system` |
| **Categories** | `operating_system` |
| **Official URL** | https://www.apple.com/macos/ |
| **Alternative coverage** | **no verified alternative** |

## Product description

macOS is Apple’s proprietary desktop operating system, built on Darwin (open-source components) but shipping a closed UI, frameworks and app stack.

Catalog categories: operating_system.

Catalogued capability areas:
- Desktop OS with a Unix foundation
- Native app framework (Cocoa/AppKit)
- Tight hardware integration and gatekeeping

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Core capabilities

- Desktop OS with a Unix foundation
- Native app framework (Cocoa/AppKit)
- Tight hardware integration and gatekeeping

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Linux distributions (Ubuntu, Fedora, elementary)](https://european-alternatives.eu/alternative-to/macos) | GPL / mixed | General-purpose open desktop operating systems. | Different platform; no native macOS app support. |
| [FreeBSD](https://www.freebsd.org/) | BSD-2-Clause | A Unix desktop/server OS sharing macOS lineage ideas. | Not a macOS replacement. |
| [Darwin](https://opensource.apple.com/) | APSL / BSD | macOS’s open-source core layer. | Core only; the desktop is closed. |

## Gap

The open Darwin core is not a usable desktop; no project reimplements macOS’s proprietary layers.

## Verdict

No like-for-like open-source macOS project is verified; Linux and BSD are alternative operating systems, not macOS builds.

## Product description and scope

macOS is Apple’s proprietary desktop operating system, built on Darwin (open-source components) but shipping a closed UI, frameworks and app stack.

Catalog categories: operating_system.

Catalogued capability areas:
- Desktop OS with a Unix foundation
- Native app framework (Cocoa/AppKit)
- Tight hardware integration and gatekeeping

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **macOS**. Give this file to your coding agent in the project where you want the product built. The agent uses it to research the product, choose what to reuse, build an independent implementation and verify the result. Do not reproduce proprietary internals or claim blanket feature parity; turn product context and catalog capability labels into evidence-backed requirements.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier apple-macos` and review its research status (**pending**). When using the source repository, read `research/companies/apple/products/apple-macos.md`. A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Reuse/build decision

This catalog has not verified a suitable candidate. Search current projects by user job, record search terms/date and license/activity evidence, then guide the user through building the requested product in their project.

Current alternative coverage: **no verified alternative**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: No like-for-like open-source macOS project is verified; Linux and BSD are alternative operating systems, not macOS builds. The open Darwin core is not a usable desktop; no project reimplements macOS’s proprietary layers.

Candidate projects to verify:

- **Linux distributions (Ubuntu, Fedora, elementary)** (GPL / mixed) — General-purpose open desktop operating systems. Note: Different platform; no native macOS app support. Source: https://european-alternatives.eu/alternative-to/macos
- **FreeBSD** (BSD-2-Clause) — A Unix desktop/server OS sharing macOS lineage ideas. Note: Not a macOS replacement. Source: https://www.freebsd.org/
- **Darwin** (APSL / BSD) — macOS’s open-source core layer. Note: Core only; the desktop is closed. Source: https://opensource.apple.com/

### Build the product with this skill in the user's project

Give this product skill to the coding agent in the project where the user wants the product built. First review that project and assess current reuse options; then define a useful scope, build the requested product in the user's project, and verify the result. The coverage label below reports only research into open-source alternatives.

### Product behaviors to research and turn into requirements

- **APPLE-MACOS-CAP-001 — Desktop OS with a Unix foundation:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **APPLE-MACOS-CAP-002 — Native app framework (Cocoa/AppKit):** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **APPLE-MACOS-CAP-003 — Tight hardware integration and gatekeeping:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.

For each behavior selected for the MVP, record the user/actor, preconditions, input, expected observable result, alternate/error path, data and permission implications, source evidence, and a stable requirement ID (for example `APPLE-MACOS-REQ-001`). Map that ID from evidence to workflow/specification to an automated test or a named manual check.

### Build the product in the user's project

Use the product skill from the project where the user wants **macOS** built. Review that project's conventions and existing code, then plan a useful first slice with clear requirements, explicit non-goals, assumptions, external dependencies and measurable acceptance checks. Continue from that working slice toward the user's requested product. The catalog and optional scaffold provide guidance; your implementation belongs in the user's project. If research is insufficient for a behavior, gather evidence before coding that behavior.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/apple/products/apple-macos.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./apple-macos (optional local workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Verification and definition of done

- Every MVP requirement maps to evidence and a passing automated test or named manual check.
- Product-specific tests pass. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run `npm run validate` and `npm test`; otherwise use the installed CLI's `rae research validate` for catalog integrity.
- Setup and configuration work from a clean start; security and license review is recorded; limitations and unimplemented capabilities are explicit.
- A reviewer accepts the implementation and its handoff. Passing tests prove only the tested behavior—not parity with macOS.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product metadata: `rae products show apple-macos --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier apple-macos`; source file when working in the repository: `research/companies/apple/products/apple-macos.md`.
- Alternative candidates and coverage: `rae alternatives list --product apple-macos`; source landscape file when available: `catalog/skills/apple/apple-macos.md`.
- Optional local product workspace/specifications: `./apple-macos (optional local workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/apple-macos.md`.
- Official product page: https://www.apple.com/macos/.
- Research status: **pending**; alternative coverage: **no verified alternative**. This coverage label describes existing-project research only, not the ability to build this product.

### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show apple-macos --format json` and retrieve the dossier contents with `rae research dossier apple-macos` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. Generate a portable agent kit with `rae apple-macos --out ./apple-macos-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product apple-macos --out ./apple-macos` only if useful. Keep generated outputs separate; do not overwrite existing work.


## Sources

- https://european-alternatives.eu/alternative-to/macos
- https://www.pcmag.com/picks/windows-vs-macos-vs-chrome-os-vs-linux-ultimate-operating-system-showdown
- https://opensource.apple.com/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`apple-macos`)
- Research dossier: [`research/companies/apple/products/apple-macos.md`](../../../research/companies/apple/products/apple-macos.md)
- REA web-surface report: [`catalog/rea/apple/apple-macos.md`](../../rea/apple/apple-macos.md)
