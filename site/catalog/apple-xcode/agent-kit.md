---
name: build-apple-xcode
description: Coding-agent build skill for Xcode. Research the product, assess reusable projects, and build and verify it in your project.
---

# Build Xcode with your coding agent

| | |
|---|---|
| **Target product** | Xcode (`apple-xcode`) |
| **Company** | Apple (`apple`) |
| **Product type** | `developer_tool` |
| **Official URL** | https://developer.apple.com/xcode/ |
| **Alternative coverage** | **partial alternative coverage** |
| **Research status** | **pending** |

## Product description

Xcode is Apple’s proprietary IDE for building apps for Apple platforms: editor, build system, interface builder, debugger and Instruments.

Catalog categories: developer_tool.

Catalogued capability areas:
- Swift/Objective-C editing and refactoring
- Build, sign and archive Apple-platform apps
- Interface Builder, simulator, Instruments profiling

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Research references

- Dossier: `rae research dossier apple-xcode` or [view the repository dossier](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/apple/products/apple-xcode.md)
- Public web-surface observation: [catalog/rea/apple/apple-xcode.md](https://github.com/EnzoVezzaro/rea-faang/blob/main/catalog/rea/apple/apple-xcode.md)

## Open-source landscape

- **xtool** (GPL-3.0) — https://github.com/xtool-org/xtool
  Cross-platform Xcode replacement: builds SwiftPM packages into apps. Note: No full IDE or Instruments equivalent.
- **Swift toolchain** (Apache-2.0) — https://www.swift.org/
  The open-source compiler and language. Note: Language/toolchain, not the IDE.
- **VS Code + Swift extension** (MIT) — https://code.visualstudio.com/
  Editor and language tooling for Swift. Note: Editor layer only.

## Gap and verdict

Interface Builder, the GUI debugger and Instruments have no open equivalent; C, C++ and Xcode-only tooling remain macOS/Apple-bound.

Partial. The Swift compiler and build toolchain are open source; no complete open-source equivalent to the full IDE is verified.

## Product description and scope

Xcode is Apple’s proprietary IDE for building apps for Apple platforms: editor, build system, interface builder, debugger and Instruments.

Catalog categories: developer_tool.

Catalogued capability areas:
- Swift/Objective-C editing and refactoring
- Build, sign and archive Apple-platform apps
- Interface Builder, simulator, Instruments profiling

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **Xcode**. Give this file to your coding agent in the project where you want the product built. The agent uses it to research the product, choose what to reuse, build an independent implementation and verify the result. Do not reproduce proprietary internals or claim blanket feature parity; turn product context and catalog capability labels into evidence-backed requirements.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier apple-xcode` and review its research status (**pending**). When using the source repository, the dossier is also linked here: [`research/companies/apple/products/apple-xcode.md`](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/apple/products/apple-xcode.md). A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Reuse/build decision

Candidates cover part of the product. Map them to verified behaviors, recommend what to reuse, and identify any user needs they do not cover. Build the requested product in the user's project, scoped to their needs.

Current alternative coverage: **partial alternative coverage**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: Partial. The Swift compiler and build toolchain are open source; no complete open-source equivalent to the full IDE is verified. Interface Builder, the GUI debugger and Instruments have no open equivalent; C, C++ and Xcode-only tooling remain macOS/Apple-bound.

Candidate projects to verify:

- **xtool** (GPL-3.0) — Cross-platform Xcode replacement: builds SwiftPM packages into apps. Note: No full IDE or Instruments equivalent. Source: https://github.com/xtool-org/xtool
- **Swift toolchain** (Apache-2.0) — The open-source compiler and language. Note: Language/toolchain, not the IDE. Source: https://www.swift.org/
- **VS Code + Swift extension** (MIT) — Editor and language tooling for Swift. Note: Editor layer only. Source: https://code.visualstudio.com/

### Build the product with this skill in the user's project

Give this product skill to the coding agent in the project where the user wants the product built. First review that project and assess current reuse options; then define a useful scope, build the requested product in the user's project, and verify the result. The coverage label below reports only research into open-source alternatives.

### Product behaviors to research and turn into requirements

- **APPLE-XCODE-CAP-001 — Swift/Objective-C editing and refactoring:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **APPLE-XCODE-CAP-002 — Build, sign and archive Apple-platform apps:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **APPLE-XCODE-CAP-003 — Interface Builder, simulator, Instruments profiling:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.

For each behavior selected for the MVP, record the user/actor, preconditions, input, expected observable result, alternate/error path, data and permission implications, source evidence, and a stable requirement ID (for example `APPLE-XCODE-REQ-001`). Map that ID from evidence to workflow/specification to an automated test or a named manual check.

### Build the product in the user's project

Use the product skill from the project where the user wants **Xcode** built. Review that project's conventions and existing code, then plan a useful first slice with clear requirements, explicit non-goals, assumptions, external dependencies and measurable acceptance checks. Continue from that working slice toward the user's requested product. The catalog and optional scaffold provide guidance; your implementation belongs in the user's project. If research is insufficient for a behavior, gather evidence before coding that behavior.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/apple/products/apple-xcode.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./apple-xcode (a separately generated workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Verification and definition of done

- Every MVP requirement maps to evidence and a passing automated test or named manual check.
- Product-specific tests pass. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run `npm run validate` and `npm test`; otherwise use the installed CLI's `rae research validate` for catalog integrity.
- Setup and configuration work from a clean start; security and license review is recorded; limitations and unimplemented capabilities are explicit.
- A reviewer accepts the implementation and its handoff. Passing tests prove only the tested behavior—not parity with Xcode.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product metadata: `rae products show apple-xcode --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier apple-xcode`; source copy: [`research/companies/apple/products/apple-xcode.md`](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/apple/products/apple-xcode.md).
- Alternative candidates and coverage: `rae alternatives list --product apple-xcode`; source landscape file when available: `catalog/skills/apple/apple-xcode.md`.
- Optional local product workspace/specifications: `./apple-xcode (a separately generated workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/apple-xcode.md`.
- Official product page: https://developer.apple.com/xcode/.
- Research status: **pending**; alternative coverage: **partial alternative coverage**. This coverage label describes existing-project research only, not the ability to build this product.

### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show apple-xcode --format json` and retrieve the dossier contents with `rae research dossier apple-xcode` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. Generate a portable agent kit with `rae apple-xcode --out ./apple-xcode-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product apple-xcode --out ./apple-xcode` only if useful. Keep generated outputs separate; do not overwrite existing work.


## CLI commands

- Inspect product metadata: `rae products show apple-xcode --format json`.
- Read the dossier: `rae research dossier apple-xcode`.
- Check research readiness: `rae research coverage` and `rae research validate`.
- Generate a copy of this skill and optional MCP config: `rae apple-xcode --out ./apple-xcode-agent`. Give `skill.md` to your coding agent in the project where you want to build.
- Optionally scaffold a starter workspace: `rae build product apple-xcode --out ./apple-xcode`.

## Sources

- https://github.com/xtool-org/xtool
- https://forums.swift.org/t/xtool-cross-platform-xcode-replacement-build-ios-apps-on-linux-and-more/79803
- https://superapp.dev/blog/the-best-xcode-alternative-in-2026-build-ios-apps-in-the-browser

---

Generated from the RAE FAANG catalog — https://github.com/EnzoVezzaro/rea-faang
