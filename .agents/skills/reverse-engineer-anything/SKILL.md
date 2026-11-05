---
name: reverse-engineer-anything
description: Apply the Reverse Engineer Anything framework to an authorized FAANG product or shipped artifact, capture evidence and unknowns, and turn the result into a REA FAANG catalog entry. Use for runtime, package, browser-surface, or artifact analysis; skip it for ordinary source-repository analysis.
metadata:
  source: https://github.com/morluto/rea
  version: "59"
  complementary_engine: https://github.com/storytold/craft-anything
---

# Reverse Engineer Anything for REA FAANG

Use this product-specific skill when a REA FAANG catalog entry depends on
publicly observable behavior, a shipped package or binary, a browser surface,
runtime evidence, or a comparison that the available source does not establish.
This skill lives in REA FAANG; Agentix only records the dependency and the
approved backlog item.

## Rules

- Work only on public or explicitly authorized targets.
- Follow the clean-room policy in `AGENTS.md`: do not copy proprietary source,
  extract private data, bypass access controls, or redistribute protected assets.
- Separate observations, inferences, unknowns, and recommendations.
- Preserve the target identity, capture/artifact digest, tool version, commands,
  sources, and limitations in the resulting Evidence record.
- Do not claim feature parity from names or screenshots alone.
- Do not modify Agentix governance or product code as part of catalog research.

## Procedure

1. Identify the catalog product and its official public URL or supplied local
   artifact. Confirm that the target is in `catalog/products.jsonl`.
2. Choose the narrowest REA route for the target:
   - public browser behavior: capture the browser scenario and record actions;
   - JavaScript, Electron, ASAR, or package: analyze the supplied package/tree;
   - native, mobile, firmware, or other artifact: inventory it before focused
     inspection;
   - complete source repository with no shipped/runtime question: use normal
     repository analysis instead of REA.
3. Use the available REA MCP tools when they are registered. If they are not
   available, use the supported CLI fallback only for an authorized local
   JavaScript tree or ASAR:

   ```bash
   npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json
   ```

   Do not run setup or install unrelated engines merely because a tool is not
   present. If a required capability is unavailable, record the blocker and
   continue with supported evidence.
4. Write or update the product's REA report under
   `catalog/rea/<company>/<product>.md`. Include the evidence, capabilities,
   limitations, unknowns, legal/provenance notes, and the exact verification
   scope.
5. Regenerate or validate the catalog using the repository commands. At minimum
   run:

   ```bash
   npm run rea:catalog
   npm test
   npm run validate
   ```

   If generation would overwrite unrelated user changes, stop and report the
   conflict instead of resetting files.
6. Submit a handoff containing changed files, commands and exit codes, evidence
   references, checks not run, risks, and the next action. A catalog entry is
   not complete until the tests and review accept it.

## Complementary Craft Anything workflow

When the target is a website, desktop app, mobile app, game, or file and the
requested outcome includes building an equivalent implementation, consult the
open-source [Craft Anything repository](https://github.com/storytold/craft-anything)
as a complementary study/build engine. It provides a Study → Build → Check →
Refine workflow, CLI commands, and MCP tools. Use it only when the required
runtime/tooling is available and the target is public or explicitly authorized.

The REA catalog skill must tell the consuming agent:

1. which official target URLs or authorized artifacts to pass to Craft Anything;
2. which study evidence and limitations to retain;
3. what independent build scope and clean-room boundaries apply;
4. how to run the resulting checks and refine the implementation; and
5. whether the same skill can be copied as Markdown or generated with the REA
   CLI/agent-kit.

Do not treat Craft Anything as a replacement for the catalog, the REA evidence
record, or the acceptance review. Its repository describes an early-alpha
engine with support and limitations that must be checked before relying on a
specific backend, agent, or target type.

## Output contract

Every completed analysis must leave:

- one reproducible REA report for the selected product;
- source and artifact/runtime identity with evidence references;
- explicit capabilities, limits, unknowns, and inferences;
- a clean-room/provenance note;
- validation output or an explicit blocker;
- a handoff with the responsible REA FAANG agent and next action.

The upstream framework contains the detailed target routing and recovery
guidance. Consult its current documentation when the requested target is not
covered by this concise entrypoint:
<https://github.com/morluto/rea/tree/main/.agents/skills/reverse-engineer-anything>.
