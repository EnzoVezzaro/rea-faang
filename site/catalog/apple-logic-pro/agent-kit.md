---
name: build-apple-logic-pro
description: Coding-agent build skill for Logic Pro. Research the product, assess reusable projects, and build and verify it in your project.
---

# Build Logic Pro with your coding agent

| | |
|---|---|
| **Target product** | Logic Pro (`apple-logic-pro`) |
| **Company** | Apple (`apple`) |
| **Product type** | `creative_software` |
| **Official URL** | https://www.apple.com/logic-pro/ |
| **Alternative coverage** | **mature alternative listed** |
| **Research status** | **pending** |

## Product description

Logic Pro is Apple’s professional digital audio workstation, with recording, MIDI sequencing, mixing and a bundled instrument/effect library.

Catalog categories: creative_software.

Catalogued capability areas:
- Multitrack audio recording and editing
- MIDI sequencing and virtual instruments
- Mixing, plugins, automation
- Bundled sample and loop library

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Research references

- Dossier: `rae research dossier apple-logic-pro` or [view the repository dossier](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/apple/products/apple-logic-pro.md)
- Public web-surface observation: [catalog/rea/apple/apple-logic-pro.md](https://github.com/EnzoVezzaro/rea-faang/blob/main/catalog/rea/apple/apple-logic-pro.md)

## Open-source landscape

- **Ardour** (GPL-2.0) — https://ardour.org/
  Mature open DAW for recording and mixing. Note: The most complete open DAW.
- **LMMS** (GPL-2.0) — https://lmms.io/
  MIDI-focused music production. Note: Strong for electronic music.
- **Audacity** (GPL-2.0) — https://www.audacityteam.org/
  Audio recording and editing. Note: Editor rather than a full DAW.
- **Zrythm** (AGPL-3.0) — https://www.zrythm.org/
  Modern DAW with automation and MIDI. Note: Newer entrant.

## Gap and verdict

Logic’s bundled content library and some proprietary plugins are not replicated; open plugin ecosystems differ (CLAP/VST/LV2).

Available. Mature open DAWs cover recording, sequencing and mixing.

## Product description and scope

Logic Pro is Apple’s professional digital audio workstation, with recording, MIDI sequencing, mixing and a bundled instrument/effect library.

Catalog categories: creative_software.

Catalogued capability areas:
- Multitrack audio recording and editing
- MIDI sequencing and virtual instruments
- Mixing, plugins, automation
- Bundled sample and loop library

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **Logic Pro**. Give this file to your coding agent in the project where you want the product built. The agent uses it to research the product, choose what to reuse, build an independent implementation and verify the result. Do not reproduce proprietary internals or claim blanket feature parity; turn product context and catalog capability labels into evidence-backed requirements.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier apple-logic-pro` and review its research status (**pending**). When using the source repository, the dossier is also linked here: [`research/companies/apple/products/apple-logic-pro.md`](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/apple/products/apple-logic-pro.md). A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Reuse/build decision

A mature candidate is listed. Evaluate it as a possible foundation, but do not treat the candidate listing as the product build or substitute it for the user's request. Build the requested product in the user's project; reuse, integrate or extend candidate components where they fit.

Current alternative coverage: **mature alternative listed**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: Available. Mature open DAWs cover recording, sequencing and mixing. Logic’s bundled content library and some proprietary plugins are not replicated; open plugin ecosystems differ (CLAP/VST/LV2).

Candidate projects to verify:

- **Ardour** (GPL-2.0) — Mature open DAW for recording and mixing. Note: The most complete open DAW. Source: https://ardour.org/
- **LMMS** (GPL-2.0) — MIDI-focused music production. Note: Strong for electronic music. Source: https://lmms.io/
- **Audacity** (GPL-2.0) — Audio recording and editing. Note: Editor rather than a full DAW. Source: https://www.audacityteam.org/
- **Zrythm** (AGPL-3.0) — Modern DAW with automation and MIDI. Note: Newer entrant. Source: https://www.zrythm.org/

### Build the product with this skill in the user's project

Give this product skill to the coding agent in the project where the user wants the product built. First review that project and assess current reuse options; then define a useful scope, build the requested product in the user's project, and verify the result. The coverage label below reports only research into open-source alternatives.

### Product behaviors to research and turn into requirements

- **APPLE-LOGIC-PRO-CAP-001 — Multitrack audio recording and editing:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **APPLE-LOGIC-PRO-CAP-002 — MIDI sequencing and virtual instruments:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **APPLE-LOGIC-PRO-CAP-003 — Mixing, plugins, automation:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **APPLE-LOGIC-PRO-CAP-004 — Bundled sample and loop library:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.

For each behavior selected for the MVP, record the user/actor, preconditions, input, expected observable result, alternate/error path, data and permission implications, source evidence, and a stable requirement ID (for example `APPLE-LOGIC-PRO-REQ-001`). Map that ID from evidence to workflow/specification to an automated test or a named manual check.

### Build the product in the user's project

Use the product skill from the project where the user wants **Logic Pro** built. Review that project's conventions and existing code, then plan a useful first slice with clear requirements, explicit non-goals, assumptions, external dependencies and measurable acceptance checks. Continue from that working slice toward the user's requested product. The catalog and optional scaffold provide guidance; your implementation belongs in the user's project. If research is insufficient for a behavior, gather evidence before coding that behavior.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/apple/products/apple-logic-pro.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./apple-logic-pro (a separately generated workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Verification and definition of done

- Every MVP requirement maps to evidence and a passing automated test or named manual check.
- Product-specific tests pass. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run `npm run validate` and `npm test`; otherwise use the installed CLI's `rae research validate` for catalog integrity.
- Setup and configuration work from a clean start; security and license review is recorded; limitations and unimplemented capabilities are explicit.
- A reviewer accepts the implementation and its handoff. Passing tests prove only the tested behavior—not parity with Logic Pro.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product metadata: `rae products show apple-logic-pro --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier apple-logic-pro`; source copy: [`research/companies/apple/products/apple-logic-pro.md`](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/apple/products/apple-logic-pro.md).
- Alternative candidates and coverage: `rae alternatives list --product apple-logic-pro`; source landscape file when available: `catalog/skills/apple/apple-logic-pro.md`.
- Optional local product workspace/specifications: `./apple-logic-pro (a separately generated workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/apple-logic-pro.md`.
- Official product page: https://www.apple.com/logic-pro/.
- Research status: **pending**; alternative coverage: **mature alternative listed**. This coverage label describes existing-project research only, not the ability to build this product.

### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show apple-logic-pro --format json` and retrieve the dossier contents with `rae research dossier apple-logic-pro` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. Generate a portable agent kit with `rae apple-logic-pro --out ./apple-logic-pro-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product apple-logic-pro --out ./apple-logic-pro` only if useful. Keep generated outputs separate; do not overwrite existing work.


## CLI commands

- Inspect product metadata: `rae products show apple-logic-pro --format json`.
- Read the dossier: `rae research dossier apple-logic-pro`.
- Check research readiness: `rae research coverage` and `rae research validate`.
- Generate a copy of this skill and optional MCP config: `rae apple-logic-pro --out ./apple-logic-pro-agent`. Give `skill.md` to your coding agent in the project where you want to build.
- Optionally scaffold a starter workspace: `rae build product apple-logic-pro --out ./apple-logic-pro`.

## Sources

- https://ardour.org/
- https://www.reddit.com/r/linuxaudio/comments/1uyhkdl/ardour_vs_lmms_vs_the_rest_of_the_foss/
- https://github.com/mixxxdj/mixxx/wiki/List-Of-Open-Source-Music-Production-Software

---

Generated from the RAE FAANG catalog — https://github.com/EnzoVezzaro/rea-faang
