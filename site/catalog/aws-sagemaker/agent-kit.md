---
name: build-aws-sagemaker
description: Coding-agent build skill for SageMaker. Research the product, assess reusable projects, and build and verify it in your project.
---

# Build SageMaker with your coding agent

| | |
|---|---|
| **Target product** | SageMaker (`aws-sagemaker`) |
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `data_platform` |
| **Official URL** | https://aws.amazon.com/sagemaker/ |
| **Alternative coverage** | **partial alternative coverage** |
| **Research status** | **pending** |

## Product description

SageMaker is AWS's platform for building, training and deploying machine-learning models.

Catalog categories: ml-platform.

Catalogued capability areas:
- Managed notebooks
- Training at scale
- Model deployment endpoints

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Research references

- Dossier: `rae research dossier aws-sagemaker` or [view the repository dossier](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/amazon_aws/products/aws-sagemaker.md)
- Public web-surface observation: [catalog/rea/amazon_aws/aws-sagemaker.md](https://github.com/EnzoVezzaro/rea-faang/blob/main/catalog/rea/amazon_aws/aws-sagemaker.md)

## Open-source landscape

- **Kubeflow** (Apache-2.0) — https://www.kubeflow.org/
  ML toolkit on Kubernetes.
- **MLflow** (Apache-2.0) — https://mlflow.org/
  Experiment tracking and model registry.

## Gap and verdict

Open ML platforms exist (Kubeflow, MLflow); the turnkey managed experience is the gap.

Partial. Kubeflow and MLflow cover the workflow; integration polish differs.

## Product description and scope

SageMaker is AWS's platform for building, training and deploying machine-learning models.

Catalog categories: ml-platform.

Catalogued capability areas:
- Managed notebooks
- Training at scale
- Model deployment endpoints

This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.

## Coding-agent mission

This is the product-specific coding-agent skill for **SageMaker**. Give this file to your coding agent in the project where you want the product built. The agent uses it to research the product, choose what to reuse, build an independent implementation and verify the result. Do not reproduce proprietary internals or claim blanket feature parity; turn product context and catalog capability labels into evidence-backed requirements.

### Evidence to inspect first

1. Read the product dossier with `rae research dossier aws-sagemaker` and review its research status (**pending**). When using the source repository, the dossier is also linked here: [`research/companies/amazon_aws/products/aws-sagemaker.md`](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/amazon_aws/products/aws-sagemaker.md). A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Reuse/build decision

Candidates cover part of the product. Map them to verified behaviors, recommend what to reuse, and identify any user needs they do not cover. Build the requested product in the user's project, scoped to their needs.

Current alternative coverage: **partial alternative coverage**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: Partial. Kubeflow and MLflow cover the workflow; integration polish differs. Open ML platforms exist (Kubeflow, MLflow); the turnkey managed experience is the gap.

Candidate projects to verify:

- **Kubeflow** (Apache-2.0) — ML toolkit on Kubernetes. Source: https://www.kubeflow.org/
- **MLflow** (Apache-2.0) — Experiment tracking and model registry. Source: https://mlflow.org/

### Build the product with this skill in the user's project

Give this product skill to the coding agent in the project where the user wants the product built. First review that project and assess current reuse options; then define a useful scope, build the requested product in the user's project, and verify the result. The coverage label below reports only research into open-source alternatives.

### Product behaviors to research and turn into requirements

- **AWS-SAGEMAKER-CAP-001 — Managed notebooks:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **AWS-SAGEMAKER-CAP-002 — Training at scale:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.
- **AWS-SAGEMAKER-CAP-003 — Model deployment endpoints:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.

For each behavior selected for the MVP, record the user/actor, preconditions, input, expected observable result, alternate/error path, data and permission implications, source evidence, and a stable requirement ID (for example `AWS-SAGEMAKER-REQ-001`). Map that ID from evidence to workflow/specification to an automated test or a named manual check.

### Build the product in the user's project

Use the product skill from the project where the user wants **SageMaker** built. Review that project's conventions and existing code, then plan a useful first slice with clear requirements, explicit non-goals, assumptions, external dependencies and measurable acceptance checks. Continue from that working slice toward the user's requested product. The catalog and optional scaffold provide guidance; your implementation belongs in the user's project. If research is insufficient for a behavior, gather evidence before coding that behavior.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update `research/companies/amazon_aws/products/aws-sagemaker.md`. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect `./aws-sagemaker (a separately generated workspace; choose a writable output directory)/specs/` and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Verification and definition of done

- Every MVP requirement maps to evidence and a passing automated test or named manual check.
- Product-specific tests pass. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run `npm run validate` and `npm test`; otherwise use the installed CLI's `rae research validate` for catalog integrity.
- Setup and configuration work from a clean start; security and license review is recorded; limitations and unimplemented capabilities are explicit.
- A reviewer accepts the implementation and its handoff. Passing tests prove only the tested behavior—not parity with SageMaker.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product metadata: `rae products show aws-sagemaker --format json`.
- Research dossier: retrieve it from the installed CLI with `rae research dossier aws-sagemaker`; source copy: [`research/companies/amazon_aws/products/aws-sagemaker.md`](https://github.com/EnzoVezzaro/rea-faang/blob/main/research/companies/amazon_aws/products/aws-sagemaker.md).
- Alternative candidates and coverage: `rae alternatives list --product aws-sagemaker`; source landscape file when available: `catalog/skills/amazon_aws/aws-sagemaker.md`.
- Optional local product workspace/specifications: `./aws-sagemaker (a separately generated workspace; choose a writable output directory)`.
- Opportunity decision, when present in the source repository: `opportunities/aws-sagemaker.md`.
- Official product page: https://aws.amazon.com/sagemaker/.
- Research status: **pending**; alternative coverage: **partial alternative coverage**. This coverage label describes existing-project research only, not the ability to build this product.

### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with `rae products show aws-sagemaker --format json` and retrieve the dossier contents with `rae research dossier aws-sagemaker` (or add `--format json` for machine-readable output). Check catalog readiness with `rae research coverage` and `rae research validate`. Generate a portable agent kit with `rae aws-sagemaker --out ./aws-sagemaker-agent`. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with `rae build product aws-sagemaker --out ./aws-sagemaker` only if useful. Keep generated outputs separate; do not overwrite existing work.


## CLI commands

- Inspect product metadata: `rae products show aws-sagemaker --format json`.
- Read the dossier: `rae research dossier aws-sagemaker`.
- Check research readiness: `rae research coverage` and `rae research validate`.
- Generate a copy of this skill and optional MCP config: `rae aws-sagemaker --out ./aws-sagemaker-agent`. Give `skill.md` to your coding agent in the project where you want to build.
- Optionally scaffold a starter workspace: `rae build product aws-sagemaker --out ./aws-sagemaker`.

## Sources

- https://www.kubeflow.org/
- https://mlflow.org/

---

Generated from the RAE FAANG catalog — https://github.com/EnzoVezzaro/rea-faang
