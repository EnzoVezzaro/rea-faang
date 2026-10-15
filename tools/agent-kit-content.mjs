const RESEARCH_STATUS = {
  pending: 'pending',
  in_progress: 'in progress',
  researched: 'researched',
  stale: 'stale',
  insufficient_evidence: 'insufficient evidence',
};

export function productDescription(product) {
  const summary = product.summary || `${product.name} is catalogued as a ${product.product_type} product.`;
  const categories = (product.categories || []).filter(Boolean);
  const capabilities = (product.capabilities || []).filter(Boolean);
  const sections = [summary];
  if (categories.length) sections.push(`Catalog categories: ${categories.join(', ')}.`);
  if (capabilities.length) {
    sections.push(`Catalogued capability areas:\n${capabilities.map((capability) => `- ${capability}`).join('\n')}`);
  } else {
    sections.push('The catalog has no capability list yet; research the product before defining scope.');
  }
  sections.push('This summary reflects the catalog record, not a complete product specification. Verify intended users, end-to-end workflows, supported platforms, edge cases, data handling, and constraints against cited sources. Treat capability labels as research leads until that verification is complete.');
  return sections.join('\n\n');
}

function inlineCode(value) {
  return `\`${String(value).replaceAll('`', '')}\``;
}

export function agentInstructions(product, { workspacePath, researchUrl } = {}) {
  const id = product.id;
  const requirementIdExample = `${id.toUpperCase().replace(/[^A-Z0-9]+/g, '-')}-REQ-001`;
  const name = product.name;
  const company = product.company_id;
  const status = product.status || 'pending';
  const research = RESEARCH_STATUS[product.research_status] || 'not verified';
  const statusLabels = { available: 'mature alternative listed', partial: 'partial alternative coverage', pending: 'no verified alternative' };
  const statusLabel = statusLabels[status] || status;
  const dossierPath = `research/companies/${company}/products/${id}.md`;
  const skillPath = `catalog/skills/${company}/${id}.md`;
  const reaPath = `catalog/rea/${company}/${id}.md`;
  const defaultWorkspace = workspacePath || `./${id} (optional local workspace; choose a writable output directory)`;
  const capabilities = (product.capabilities || []).filter(Boolean);
  const capabilityList = capabilities.length
    ? capabilities.map((capability, index) => `- **${id.toUpperCase().replace(/[^A-Z0-9]+/g, '-')}-CAP-${String(index + 1).padStart(3, '0')} — ${capability}:** verify the user/actor, workflow, preconditions, expected result, failure path, platform and data implications from cited sources; then define an observable acceptance check.`).join('\n')
    : '- Research and cite the product’s primary user workflows before proposing features; the catalog has no capability list.';
  const dossierReference = researchUrl
    ? `[${inlineCode(dossierPath)}](${researchUrl})`
    : inlineCode(dossierPath);
  const alternatives = (product.alternatives || []).filter((alternative) => alternative.name);
  const alternativeList = alternatives.length
    ? alternatives.map((alternative) => `- **${alternative.name}** (${alternative.license || 'license unverified'}) — ${alternative.covers || alternative.url}${alternative.note ? ` Note: ${alternative.note}` : ''} Source: ${alternative.url}`).join('\n')
    : '- No suitable candidate is verified in this catalog. Give this skill to your coding agent to assess current projects and build the requested product in your project.';
  const decision = status === 'available'
    ? `A mature candidate is listed. Evaluate it as a possible foundation, but do not treat the candidate listing as the product build or substitute it for the user's request. Build the requested product in the user's project; reuse, integrate or extend candidate components where they fit.`
    : status === 'partial'
      ? `Candidates cover part of the product. Map them to verified behaviors, recommend what to reuse, and identify any user needs they do not cover. Build the requested product in the user's project, scoped to their needs.`
      : `This catalog has not verified a suitable candidate. Search current projects by user job, record search terms/date and license/activity evidence, then guide the user through building the requested product in their project.`;

  return `## Product description and scope

${productDescription(product)}

## Coding-agent mission

This is the product-specific coding-agent skill for **${name}**. Give this file to your coding agent in the project where you want the product built. The agent uses it to research the product, choose what to reuse, build an independent implementation and verify the result. Do not reproduce proprietary internals or claim blanket feature parity; turn product context and catalog capability labels into evidence-backed requirements.

### Evidence to inspect first

1. Read the product dossier with ${inlineCode(`rae research dossier ${id}`)} and review its research status (**${research}**). ${researchUrl ? `When using the source repository, the dossier is also linked here: ${dossierReference}.` : `When using the source repository, read ${inlineCode(dossierPath)}.`} A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Reuse/build decision

${decision}

Current alternative coverage: **${statusLabel}**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: ${product.verdict || 'not yet assessed; review current projects.'} ${product.gap || 'No coverage gap assessed yet.'}

Candidate projects to verify:

${alternativeList}

### Build the product with this skill in the user's project

Give this product skill to the coding agent in the project where the user wants the product built. First review that project and assess current reuse options; then define a useful scope, build the requested product in the user's project, and verify the result. The coverage label below reports only research into open-source alternatives.

### Product behaviors to research and turn into requirements

${capabilityList}

For each behavior selected for the MVP, record the user/actor, preconditions, input, expected observable result, alternate/error path, data and permission implications, source evidence, and a stable requirement ID (for example ${inlineCode(requirementIdExample)}). Map that ID from evidence to workflow/specification to an automated test or a named manual check.

### Build the product in the user's project

Use the product skill from the project where the user wants **${name}** built. Review that project's conventions and existing code, then plan a useful first slice with clear requirements, explicit non-goals, assumptions, external dependencies and measurable acceptance checks. Continue from that working slice toward the user's requested product. The catalog and optional scaffold provide guidance; your implementation belongs in the user's project. If research is insufficient for a behavior, gather evidence before coding that behavior.

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update ${inlineCode(dossierPath)}. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect ${inlineCode(`${defaultWorkspace}/specs/`)} and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
3. **Implementer agents (frontend/backend or domain-specific):** each claims one non-overlapping task against the approved contracts. Reuse suitable projects and dependencies. Deliver a working end-to-end slice for the selected journey, not disconnected scaffolding; document deviations from the target behavior.
4. **Tester:** derive tests from the requirement IDs. Cover the selected journey, validation, errors, permissions, accessibility and privacy-sensitive behavior; measure performance only against an explicit representative workload and target.
5. **Security reviewer:** review trust boundaries, authentication/authorization, sensitive data, abuse cases, dependency/license compliance and clean-room constraints before integration.
6. **Supervisor/documenter:** review handoffs, integrate only accepted tasks, and keep setup, data import/export, operations and known limitations current.

Each handoff must state owner, changed files, requirement IDs, commands with actual exit codes, checks not run, decisions, risks and one specific next action. Parallelize only after shared interfaces are approved.

### Verification and definition of done

- Every MVP requirement maps to evidence and a passing automated test or named manual check.
- Product-specific tests pass. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run ${inlineCode('npm run validate')} and ${inlineCode('npm test')}; otherwise use the installed CLI's ${inlineCode('rae research validate')} for catalog integrity.
- Setup and configuration work from a clean start; security and license review is recorded; limitations and unimplemented capabilities are explicit.
- A reviewer accepts the implementation and its handoff. Passing tests prove only the tested behavior—not parity with ${name}.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product metadata: ${inlineCode(`rae products show ${id} --format json`)}.
- Research dossier: retrieve it from the installed CLI with ${inlineCode(`rae research dossier ${id}`)}; ${researchUrl ? `source copy: ${dossierReference}.` : `source file when working in the repository: ${inlineCode(dossierPath)}.`}
- Alternative candidates and coverage: ${inlineCode(`rae alternatives list --product ${id}`)}; source landscape file when available: ${inlineCode(skillPath)}.
- Optional local product workspace/specifications: ${inlineCode(defaultWorkspace)}.
- Opportunity decision, when present in the source repository: ${inlineCode(`opportunities/${id}.md`)}.
- Official product page: ${product.official_url || 'not recorded'}.
- Research status: **${research}**; alternative coverage: **${statusLabel}**. This coverage label describes existing-project research only, not the ability to build this product.

### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with ${inlineCode(`rae products show ${id} --format json`)} and retrieve the dossier contents with ${inlineCode(`rae research dossier ${id}`)} (or add ${inlineCode('--format json')} for machine-readable output). Check catalog readiness with ${inlineCode('rae research coverage')} and ${inlineCode('rae research validate')}. Generate a portable agent kit with ${inlineCode(`rae ${id} --out ./${id}-agent`)}. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with ${inlineCode(`rae build product ${id} --out ./${id}`)} only if useful. Keep generated outputs separate; do not overwrite existing work.
`;
}
