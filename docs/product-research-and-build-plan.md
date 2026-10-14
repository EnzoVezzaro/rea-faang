![RAE FAANG](assets/logo.svg)

# Product research and coding-agent skills

## Purpose

Every catalogued product has a Markdown skill intended for a coding agent. The skill gives your agent product context, research references, candidate open-source projects, and directions for deciding what to reuse, what to build and how to verify the result in your project. RAE FAANG provides the product instructions; your coding agent builds the software.

The goal is useful, independently implemented software, not a promise to reproduce proprietary internals or achieve feature parity with a global service. Agents should use public, authorized evidence and respect open-source licenses, user privacy and third-party rights.

## Product skills, research and evidence

The manifest tracks 77 products across Google (25), Apple (20), Amazon Web Services (17), Amazon (5), Netflix (5) and Meta (5). Every product has a Markdown build skill: give that file to your coding agent in your project, and the agent uses it to research, scope, implement and verify an independent version of the product. Alternative coverage describes research into reuse options; it is not a build-readiness status. Dossiers, citations and REA reports help the agent distinguish verified behavior from unknowns. REA reports observe public web surfaces only and do not reveal authenticated workflows or internal architecture.

Check the current catalog data with:

```bash
rae products list
rae research coverage
rae research validate
rae gaps all
```

A generated page or passing schema check does not verify product behavior. Keep research evidence and alternative coverage accurate; neither determines whether a user can give the skill to an agent and build in their own project.

## One product, one traceable evidence-to-build packet

For each product `<id>`, keep related work connected by its stable catalog ID:

| Artifact | Path | Purpose |
|---|---|---|
| Product record | `catalog/products.jsonl` | Identity, lifecycle, type, links and machine-readable status. |
| Research dossier | `research/companies/<company_id>/products/<id>.md` | Evidence-backed account of the product and its observable behavior. |
| Product build skill | `catalog/skills/<company_id>/<id>.md`, generated from `tools/skills/catalog-data.mjs` | The single coding-agent skill for building this product: product context, projects to evaluate, build directions and verification. Give it to your agent in your project. |
| Optional product specifications | `products/<company_id>/<id>/specs/01-*.md` through `10-*.md` | Deeper implementation guidance and testable requirements for an agent build. |
| Opportunity decision | `opportunities/<id>.md` when the classification requires a build proposal | Why build, reuse or extension is justified, with a bounded MVP and verification criteria. |
| Public-surface observation | `catalog/rea/<company_id>/<id>.md` and `catalog/rea/evidence/` | Dated observations of the publicly accessible page and the method's limitations. |
| Generated product page and skill | `site/catalog/<id>/` | Human-readable product page and downloadable Markdown skill for your coding agent. |

The dossier is the research record; the single product Markdown file is the coding-agent skill for building that product in the user's project; optional specifications add implementation detail; generated site pages are views, never independent sources of truth. Avoid copying manually maintained facts into several stores. When a needed fact has no appropriate field or its source is unclear, improve the schema and generator deliberately, then migrate the affected records.

## Product-description standard

Expand every product beyond a one-line summary. The reader should understand what the product does without already knowing its brand. Cover, when evidence is available:

- Product boundaries, lifecycle and relationship to the owning company or related services.
- Intended users, their important jobs and the problem the product solves.
- Main experience, supported platforms and the end-to-end user outcomes.
- Core capabilities, supporting capabilities and important exclusions.
- How the service is accessed or operated, including public APIs, protocols, formats and integrations.
- Data handled and user controls such as export, retention and deletion, where documented.
- Material differentiators and constraints: for example licensed content, network effects, proprietary infrastructure, hardware, regulatory obligations or scale.
- Evidence confidence, last-checked date, known unknowns and meaningful changes since the prior review.

Use plain, specific language. Distinguish observed behavior, official statements, third-party claims and engineering inference. Do not describe undocumented internals as facts. A short summary in the product record should accurately condense the dossier, not stand in for it.

## Research protocol: find, assess and record evidence

Assign one researcher per product. Search in this order, recording useful URLs and access dates as work proceeds:

1. **Primary identity and lifecycle:** official product pages, help centers, release notes, status pages, public policy pages and dated announcements.
2. **Behavior and workflows:** official user guides, developer documentation, API references, public protocols, supported-format documentation and direct observation of an unauthenticated public interface. For non-public behavior, record the access limitation; do not sign in or bypass controls to fill the gap.
3. **Architecture and operations:** official engineering posts, architecture papers, standards and talks by the product's engineers. Mark what is documented and what is inferred.
4. **Privacy, security and accessibility:** official security/privacy documentation, published accessibility guidance, data export/deletion controls, public incident reports and relevant standards.
5. **Existing software:** project documentation and repositories, SPDX/license files, release and maintenance activity, governance, supported deployment modes, interoperability and known operational requirements. Verify the project itself; a search result or listicle is discovery evidence, not a final assessment.
6. **Independent corroboration:** reputable technical sources and independent evaluations for context or disputed claims. Prefer primary sources for material product facts.

For each material claim, preserve a citation and a short note explaining what it supports. Use the repository's evidence fields when possible (`id`, `url`, `source_type`, `title`, `accessed_at`, `claim`, `claim_type`, reliability and verification status). Record conflicting or unavailable evidence instead of silently choosing the convenient account. Search for alternatives by the user job and product category, not only by the target's name. Record search terms/scope, date, and why candidates were included or excluded so another researcher can repeat the search.

A research handoff includes: claims added or changed; sources checked; inaccessible areas; conflicts and assumptions; alternative candidates; confidence recommendation; and the exact validation commands and exit codes.

## Alternative decision and build recommendation

Assess candidate projects against the product's user jobs and capabilities, not brand resemblance. For each meaningful candidate record its repository/documentation, license (verify against the project's license file), activity date, deployment model, capabilities covered, capabilities not covered, integration/operations cost and evidence. Avoid calling anything a drop-in replacement without compatibility testing.

Choose one honest coverage verdict:

- **Available:** a maintained, suitably licensed project covers the core user job for the stated deployment and use case. Explain what it does not cover; recommend adopting it before duplicating it.
- **Partial:** useful projects exist but an evidenced user need remains. Name the exact missing workflow or capability and recommend reuse, integration, extension or a bounded new component.
- **Pending:** the search did not verify a suitable candidate. State the search date/scope and unresolved areas; this is uncertainty, not proof no project exists.

Separately decide the engineering path: `reuse_existing`, `integrate_existing`, `extend_existing`, `build_missing`, `research_further` or `not_recommended`. A coverage label is not a build decision. Consider legal rights, maintenance, security, cost to operate, migration, accessibility and the user's actual need. For regulated, payment, identity, messaging-security, medical, safety-critical or hardware-dependent work, require an explicit risk review and human approval before agents implement sensitive behavior.

## Agent instructions: make every product kit actionable

Every generated product skill must tell a coding agent what to do next, not merely explain what the target is. It should contain or link to:

1. Product identity, expanded description, intended users and top user jobs.
2. Evidence-backed behavior and confidence/unknowns; links to the dossier, REA report and official references, with a warning that a public page is not an internal design specification.
3. The reuse/build decision, alternative comparison, license checks, exact gap and clean-room boundaries.
4. The recommended first vertical slice: one complete, useful user journey, explicit non-goals, assumptions, and dependencies.
5. The ten product specs and their status; stable requirement IDs linking each behavior to evidence and an acceptance check.
6. Repository/workspace setup and existing commands. Instruct the agent to inspect local conventions and existing code before adding dependencies or choosing a stack.
7. A multi-agent task breakdown with ownership and handoff boundaries:
   - **Researcher:** verify evidence, workflows, alternatives and unknowns.
   - **Architect:** decide boundaries, data contracts, dependencies and ADRs before parallel implementation.
   - **Frontend/backend implementers:** take small, non-overlapping tasks against approved interfaces; reuse suitable open infrastructure.
   - **Tester:** derive contract, unit, integration, accessibility and security checks from requirement IDs.
   - **Security/reviewer:** examine trust boundaries, data handling, abuse cases, license and clean-room compliance.
   - **Supervisor/documenter:** integrate only reviewed handoffs, record commands/results and keep setup/limitations current.
8. Exact acceptance criteria, expected verification commands, definition of done, unresolved risks and the next actionable task.

Agents must not invent target behavior, claim parity from visual similarity, copy proprietary code/assets, or represent open weights as open-source software without checking their terms. If evidence is insufficient, the instruction is to research or narrow the MVP—not to guess. If a mature alternative already solves the user's job, the default instruction is to evaluate and integrate it, not create a redundant clone.

## Research dossier: required content

Update `research/companies/<company_id>/products/<product_id>.md`, preserving IDs and valid frontmatter. Fill the existing numbered sections with product-specific findings, including:

- Executive summary, identity/ownership and lifecycle.
- Audience, user jobs, supported platforms and workflows, with failure and recovery paths.
- Capability inventory organized by core/supporting/advanced and known limitations.
- Public architecture, data entities/lifecycle, interfaces, integrations and formats.
- Pricing/access model where it matters to the user job.
- Candidate alternatives and a capability-level comparison, not just names.
- A reasoned build/reuse opportunity, dependencies, privacy/security/accessibility considerations, migration concerns, risks and open questions.
- Evidence and research history with dates, confidence, conflicts and next review.

Every important statement should trace to evidence. Where a section cannot be verified, explain what was searched and why the information remains unknown. Mark `research_status: researched` only after the dossier passes the content review below; use `in_progress` or `insufficient_evidence` honestly otherwise.

## Specification set: ten files that guide implementation

For each product chosen for an implementation or integration, use `products/<company>/<product>/specs/` and replace every placeholder with instructions tied to evidence. For other products, provide an explicit reuse/no-build decision and a brief that explains the safe next action; do not create empty specs to inflate completion counts.

| File | Required implementation guidance |
|---|---|
| `01-product-vision.md` | Users, jobs, outcomes, scope, principles, constraints and non-goals. |
| `02-user-workflows.md` | Numbered happy paths, alternate paths, permissions, empty/error states and recovery. |
| `03-feature-catalog.md` | Requirement IDs, priorities, MVP boundary, dependencies, deferrals and evidence links. |
| `04-data-models.md` | Entities, fields, relations, validation, ownership, retention, export and deletion. |
| `05-api-contracts.md` | Protocols/routes, examples, schemas, errors, auth, versioning and compatibility. |
| `06-architecture.md` | Components, responsibilities, data/control flow, deployment shape, scaling assumptions and decisions. |
| `07-acceptance-criteria.md` | Observable requirements mapped to workflow/feature IDs and automated tests or named manual checks. |
| `08-security-model.md` | Assets, trust boundaries, threat/abuse cases, mitigations, privacy and review requirements. |
| `09-integration-points.md` | Open-source components, standards, external services, credentials, failure modes and license notes. |
| `10-migration-guide.md` | Import/export formats, mapping, migration/rollback steps and known incompatibilities. |

Every feature requirement states the actor, preconditions, input, expected result, edge cases and proof. Separate the achievable MVP from long-term parity. Choose technology only after documenting constraints and reviewing existing project conventions. Record architecture decisions rather than letting parallel agents choose incompatible designs.

## Build and verification loop

1. **Intake:** confirm the catalog identity and task scope; inspect the workspace, existing alternatives and all prior handoffs.
2. **Research:** researcher gathers evidence and drafts the dossier and alternative assessment; an independent reviewer checks the material claims and licenses.
3. **Plan:** architect selects reuse/integrate/extend/build/research/no-build, writes the MVP, interfaces, requirement IDs, risks and task boundaries.
4. **Gate:** reviewer checks evidence, feasibility, rights, security/privacy constraints and testability before implementation.
5. **Implement:** agents claim one bounded task each. Parallelize only after shared interfaces are agreed. Integrate one complete user journey at a time.
6. **Verify:** tester maps every MVP requirement to passing automated checks or explicitly named manual checks. Run product-specific tests and repository validation; measure performance when the requirements make a performance claim.
7. **Review and hand off:** reviewer inspects code, tests, dependencies, licenses, accessibility, security and scope. ACE supervisor accepts the handoff only with actual commands/exit codes and remaining checks recorded.
8. **Maintain:** update the dossier, alternative status, documentation, generated kit and review date when product behavior, dependencies or project activity changes.

A handoff names its owner, changed files, requirement IDs, commands and actual exit codes, checks not run, decisions, risks, and one specific next action. Follow [`AGENTS.md`](../AGENTS.md) and [`docs/agent-workflow.md`](agent-workflow.md).

## Quality gates and definition of done

A product's **research packet** is ready only when:

- Its identity and lifecycle match the catalog and current official sources.
- The expanded description, user jobs, workflows and capability inventory are product-specific.
- Material claims have citations; primary evidence is used where available; uncertainty and inaccessible surfaces are explicit.
- Alternative coverage, licenses, candidate limitations and search scope are reviewable and dated.
- The opportunity decision follows from the evidence and does not confuse coverage with a reason to build.
- A reviewer accepts the packet and the validator passes.

A **build-ready packet** is ready only when, in addition:

- A new agent can identify the next task, read the approved interfaces and understand the MVP without inventing core behavior.
- Requirement IDs trace evidence → workflow/feature → acceptance check.
- The relevant specs (or the explicit reuse/no-build brief) define scope, non-goals, data, APIs, architecture, integrations, migration, security and verification.
- Agent roles, ownership boundaries, clean-room rules, license checks, risks and handoff expectations are explicit.

An **implementation** is verified only when required MVP journeys work, acceptance checks pass, setup and limitations are documented, security-sensitive behavior is reviewed, and a reviewer accepts the handoff. Passing tests do not establish parity. Report implemented coverage and remaining gaps explicitly.

## Phased execution across all 77 products

### Phase 0 — Establish a trustworthy baseline

- Reconcile the manifest, catalog IDs, company ownership, official URLs, dossiers, skill entries, REA reports and product workspaces.
- Identify duplicate/overlapping product concepts and decide whether to merge, distinguish or group them with a written reason.
- Add a per-product progress view that separates inventory, research quality, alternative review, spec readiness, build decision, implementation and verification. A generated artifact's existence must not count as completion.
- Baseline with `rae products list`, `research coverage`, `research validate`, `gaps all`, `npm run validate` and `npm test`.

### Phase 1 — Improve the data model and quality checks

- Decide which richer product facts belong in `catalog/products.jsonl`, which belong in research, and which belong in alternative/build instructions. Extend schemas and CLI validation only where a durable field is needed; retain a single source of truth for generated summaries and kits.
- Define a review checklist for evidence quality, expanded descriptions, coverage verdicts, requirements traceability and actionable agent instructions. Add automated checks for objective failures such as missing artifacts, stale generated output, placeholder specs, unlinked requirement IDs and absent evidence metadata. Keep qualitative review human-reviewed; do not pretend a schema can prove research truth.
- Update generators, catalog docs and product pages so expanded descriptions, citations, alternative caveats and the build/reuse recommendation are visible and consistent.
- Pilot the new format on Google Search, then review the workflow on products from different categories (for example a productivity product, infrastructure service and consumer product) before bulk migration.

### Phase 2 — Research and document all products

- Work in reviewable company batches: Google (25), Apple (20), AWS (17), Amazon (5), Netflix (5), Meta (5). Assign one researcher and a separate reviewer per packet; agents may parallelize distinct products, not conflicting edits to the same dossier.
- Prioritize a representative product from each materially different domain, then continue by evidence readiness, user value, risk and dependency. Do not label whole-company batches complete while product-level gates fail.
- For each product, complete the identity/description, evidence, workflows/capabilities, alternatives, build decision and review date before generating its coding-agent skill.
- Recheck volatile facts (licenses, project activity, pricing, lifecycle, API behavior) at review time. Keep citations and dates with the claims they support.

### Phase 3 — Make every product skill actionable

- For every product, include an explicit reuse/integrate/extend/build/research/no-build recommendation and useful coding-agent instructions.
- For products where deeper specifications are useful, complete the ten-file set with evidence-linked requirements; for mature alternatives, direct the agent to assess adoption, integration or extension before building a duplicate.
- Validate the product skill with a coding agent on a scoped journey. Check that the agent can follow its references, choose a reuse/build path, work in the user's project and report actual verification results.
- Generate and inspect the product page and downloadable skill from the same reviewed sources; check links, attribution, mobile readability and factual precision.

### Phase 4 — Build in user projects

- Help users scope a valuable journey using evidence confidence, unmet need, feasibility, reuse potential and operational/legal/security risk.
- Direct agents to start with the smallest useful journey, reuse proven components and state explicit non-goals. Do not promise that one team can reproduce global data, licensed content, proprietary models, payment networks or hardware ecosystems.
- Use ACE when users want multiple agents, task budgets, bounded parallel work, review gates and machine-readable handoffs. Verify actual project artifacts and passing acceptance criteria, not generated LOC or agent count.
- Reassess the build/reuse decision as alternatives and user needs change.

## Product-skill quality checks

A product skill is useful when it gives the agent a clear next action, links to inspectable sources, explains alternative coverage and gaps, identifies assumptions, and supplies practical build-and-verify directions. Generated pages and downloadable files must match their sources. Report research and alternative coverage per product; do not imply that a catalog entry is a finished implementation.

Your coding agent's implementation is built and verified in your project. Use that project's source files and test results to track progress; the catalog records product context and directions, not a status dashboard for user implementations.

## Start here

1. Choose a product and read its skill and linked dossier.
2. Ask your coding agent to verify the product claims and candidate projects against their sources.
3. Have the agent choose a bounded user journey and state what it will reuse, build and test.
4. Let the agent build in your project, then inspect the changes and run the project's checks.
5. Improve product research or the skill instructions when you find missing context.

Use [`PLAN.md`](../PLAN.md) for current repository tasks, [`docs/catalog-and-schemas.md`](catalog-and-schemas.md) for data structures, [`docs/agent-workflow.md`](agent-workflow.md) for ACE coordination, and [`CONTRIBUTING.md`](../CONTRIBUTING.md) for contributor expectations.
