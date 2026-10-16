const RESEARCH_STATUS = {
  pending: 'pending',
  in_progress: 'in progress',
  researched: 'researched',
  stale: 'stale',
  insufficient_evidence: 'insufficient evidence',
};

const TYPE_RESEARCH_LENSES = {
  ai_model: ['Model/provider identity, model versions, input/output modalities, context and output limits, tool/function calling, streaming, structured output, safety controls, evaluation, latency/cost, rate limits, deployment modes, data retention, and model/weight license.'],
  ai_application: ['User intent and conversation/task lifecycle, prompt and tool boundaries, grounding/citations, state and memory, model selection/fallback, multimodal inputs, safety/refusal, latency/cost, evaluation and user control over retained data.'],
  machine_learning_framework: ['Data/model lifecycle, tensor or graph semantics, eager/compiled execution, supported devices/accelerators, numerical behavior, training/inference, serialization, distributed execution, interoperability, reproducibility and performance baselines.'],
  browser: ['Navigation, tabs/windows, history, bookmarks, downloads, permissions, extensions, web standards, rendering/compatibility, profiles, sync, privacy controls, sandboxing, updates and platform-specific limits.'],
  operating_system: ['Boot/update/recovery, process and memory model, filesystem, permissions, networking, device drivers, package/app model, accessibility, security boundaries, hardware support, compatibility and recovery from partial failure.'],
  hardware: ['Physical device boundaries, components/sensors, firmware, host/device protocol, calibration, power/thermal limits, safety, manufacturing dependencies, supported hosts, lifecycle and what cannot be replicated without the original hardware.'],
  media: ['Ingest/upload, metadata, processing/transcoding, storage, playback/rendering, discovery, sharing, rights/consent, moderation, accessibility, device formats and content that must be supplied or licensed separately.'],
  media_streaming: ['Catalog/rights, ingest and encoding, manifests/codecs, adaptive playback, seeking/resume, subtitles/audio, profiles/parental controls, concurrency, offline behavior, CDN/cache, DRM only through authorized standards/licenses, and lawful content acquisition.'],
  messaging: ['Identity/enrollment, contacts, one-to-one and group lifecycle, delivery/ordering, receipts, attachments, sync/multiple devices, encryption/trust model, key recovery, abuse reporting, blocking, notifications and metadata/privacy limits.'],
  social_network: ['Identity/profile, graph/follow/friend semantics, feeds/ranking, publishing/media, reactions/comments, discovery, privacy/audience controls, moderation/reporting, abuse/spam, notifications, export and federation boundaries.'],
  productivity_application: ['Document/workspace lifecycle, editing and formatting semantics, search, collaboration/presence, comments/revisions, sharing/permissions, import/export fidelity, offline/conflict behavior, accessibility and interoperability.'],
  creative_software: ['Asset/project lifecycle, editing operations, nondestructive history, timeline/layers/tracks where applicable, color/audio/media fidelity, plugins, shortcuts, import/export, rendering performance and cross-format behavior.'],
  business_software: ['Organizations/tenants, roles and approval flows, configurable policies, audit history, imports/exports, integrations, reporting, billing/admin boundaries, accessibility and predictable data migration.'],
  consumer_application: ['Primary user jobs and alternate paths, onboarding/account lifecycle, settings, search/discovery, notifications, sharing, platform parity, accessibility, privacy controls, offline/error behavior and account/data export.'],
  consumer_subscription: ['Plans/entitlements, sign-up/cancellation/renewal, regional availability, billing boundaries, household/profile rules, catalog/content rights, usage limits, refunds, accessibility and clear status/error handling.'],
  advertising_technology: ['Advertiser/publisher/consumer roles, campaign lifecycle, inventory/targeting, consent and lawful data use, measurement/attribution, budgets/billing, fraud controls, reporting, policy enforcement and auditability.'],
  cloud_infrastructure: ['Resource/control-plane lifecycle, APIs/CLI/SDKs, identity and policy, networking, quotas, regions/zones, provisioning latency, reliability/failure domains, observability, cost/usage, automation, and managed-service boundaries.'],
  compute: ['Instance/image lifecycle, scheduling, CPU/memory/storage/network profiles, isolation, startup/shutdown, health/recovery, quotas, placement, scaling, telemetry, pricing/usage semantics and hardware assumptions.'],
  serverless: ['Function/package lifecycle, event sources, invocation contract, concurrency, timeouts/retries, idempotency, cold starts, secrets/permissions, deployment/rollback, logs/traces, quotas and failure/dead-letter behavior.'],
  storage: ['Object/block/file semantics, key/path naming, consistency, atomicity, multipart/range operations, metadata, versioning, lifecycle/retention, encryption, authorization, replication, durability claims, quotas, APIs and cost/egress.'],
  database: ['Data model/query language, transactions/isolation, consistency, indexes, constraints, migrations, backup/restore, replication/failover, concurrency, authorization, limits, compatibility and observable query performance.'],
  api: ['Protocol and resource model, request/response schemas, auth, validation, idempotency, pagination/filtering, errors, versioning, rate limits, webhooks/retries, observability and compatibility.'],
  container_orchestration: ['Workload/deployment lifecycle, scheduling, networking/service discovery, storage, health probes, scaling, secrets/config, rollout/rollback, isolation/RBAC, quotas, reconciliation and cluster failure recovery.'],
  networking: ['Topology/addressing, routing, DNS/discovery, connection lifecycle, protocol compatibility, access control, encryption, failure detection, retries/timeouts, throughput/latency, observability and operator workflows.'],
  data_platform: ['Ingestion/connectors, schema evolution, batch/stream processing, transformations, storage/retention, quality/lineage, access control, scheduling, retries/backfills, governance, observability and cost.'],
  developer_tool: ['Developer/user roles, project/workspace setup, primary edit/build/test/debug/release loop, supported languages and versions, editor/IDE/CLI/API integrations, configuration, extensibility, collaboration, diagnostics, errors/recovery, performance, telemetry/privacy, accessibility and backwards compatibility.'],
  games: ['Core loop and controls, state/progression, save/resume, matchmaking/multiplayer, simulation determinism, input/accessibility, content/mods, anti-abuse, platform/performance and licensed assets/IP boundaries.'],
};

const DEFAULT_RESEARCH_LENS = 'Identify the actual user jobs, actors, lifecycle states, inputs/outputs, supported environments, integration surfaces, permissions, failure modes, scale assumptions, privacy expectations and operational constraints. Verify each before turning it into a requirement.';

function researchLens(product) {
  return TYPE_RESEARCH_LENSES[product.product_type] || DEFAULT_RESEARCH_LENS;
}

export function publicSources(product, alternatives) {
  const sources = [];
  if (product.official_url) sources.push(`- **Official product surface (identity/observable public behavior):** ${product.official_url}`);
  if (product.official_docs_url) sources.push(`- **Official documentation (verify applicable claims and date):** ${product.official_docs_url}`);
  for (const source of product.sources || []) sources.push(`- **Catalog research lead (re-check before relying on it):** ${source}`);
  for (const alternative of alternatives) {
    if (alternative.url) sources.push(`- **Candidate project — ${alternative.name} (verify project, license and current status):** ${alternative.url}`);
  }
  return [...new Set(sources)];
}

function escapeTable(value) {
  return String(value || '').replaceAll('|', '\\\\|').replaceAll('\n', ' ');
}

function featureRequirementId(productId, index) {
  return `${productId.toUpperCase().replace(/[^A-Z0-9]+/g, '-')}-CAP-${String(index + 1).padStart(3, '0')}`;
}

function productTypePlan(product) {
  return researchLens(product);
}

function coverageLedger(product) {
  const capabilities = (product.capabilities || []).filter(Boolean);
  if (!capabilities.length) {
    return '| Requirement ID | Behavior / user job | Evidence + date | Confidence | Scope | Acceptance test / manual check |\n|---|---|---|---|---|---|\n| — | Research the product’s primary user jobs first; none are specified in the catalog | Add public claim-level citation | Unknown | Research | Add a reproducible observable check |';
  }
  const rows = capabilities.map((capability, index) => `| ${featureRequirementId(product.id, index)} | ${escapeTable(capability)} | **Missing: verify against public sources** | Unknown until verified | Untriaged: include, exclude with reason, or defer | Define observable success and negative/error cases |`);
  return `| Requirement ID | Behavior / user job (catalog lead) | Evidence + date | Confidence | Scope | Acceptance test / manual check |\n|---|---|---|---|---|---|\n${rows.join('\n')}`;
}

function sourceClaimRules(product) {
  return `- Start with the official product page and official documentation when recorded. The **Sources** list labels official documentation separately from candidate-project research leads.
- The dossier research status is **${RESEARCH_STATUS[product.research_status] || 'not verified'}**. Catalog summaries, capabilities, alternative status, verdicts and gaps are leads—not a verified specification. Never silently promote a claim to verified.
- For each material requirement, attach a public URL, access date, the specific claim supported, confidence, and any conflict/unknown. A source link by itself is not claim-level evidence.
- Separate directly observed behavior, official documentation, third-party reporting, inference, design choice, and unknowns. Do not infer behavior or internals from branding, marketing language, a screenshot or an unauthenticated page.
- If sources conflict or evidence is inaccessible, record the uncertainty and ask for a decision only when it blocks safe, useful progress. Never fabricate defaults, APIs, compatibility, scale, guarantees or parity.`;
}

function qualityPlan(product) {
  const type = product.product_type;
  const base = [
    'Correctness: test the primary user journey end to end, then alternate paths, invalid input, permission denial and recovery.',
    'Security/privacy: map assets and trust boundaries; validate identity/authorization server-side; minimize collected data; protect secrets; prevent injection/SSRF/CSRF and abuse where relevant; document encryption, retention, export/delete, and threat assumptions.',
    'Accessibility/UX: keyboard and screen-reader operation, semantic labels, focus order, contrast, reduced motion, localization-ready text, useful empty/loading/error states and responsive layouts where applicable.',
    'Reliability: retries/idempotency, timeouts, cancellation, partial failure, backups/restore, migrations, monitoring and operational runbooks appropriate to the product.',
    'Compatibility: test every claimed platform, protocol, file format, SDK/API version or client; otherwise label it unsupported or unverified.',
    'Performance: establish a representative workload and a user-visible target before optimizing; record baseline, measurement method and environment. Do not claim equivalent scale without evidence.',
    'Maintainability: dependency/license inventory, reproducible setup, configuration validation, migrations, API contracts, logs/metrics, documentation and clean-checkout verification.',
  ];
  const productSpecific = {
    messaging: 'Messaging-specific checks: verify cryptographic protocol and threat model from authoritative sources; use established audited libraries rather than inventing cryptography; test key changes, device linking, membership changes, message ordering/deduplication, metadata exposure and abuse reporting.',
    storage: 'Storage-specific checks: test consistency/atomicity, multipart or range boundaries, checksum/integrity, access control, version/retention, lifecycle, backup/restore, replication/failure behavior and cost/egress assumptions.',
    database: 'Database-specific checks: test transaction isolation, concurrent writes, crash recovery, schema migration/rollback, backup/restore, query correctness and authorization boundaries.',
    media_streaming: 'Media-specific checks: test ingest validation, transcoding profiles, manifests, adaptive playback, seeking/resume, subtitle/audio selection, device compatibility, bandwidth changes and lawful rights/DRM boundaries.',
    operating_system: 'OS-specific checks: use safe emulators/owned hardware, test boot/update/recovery and permission/isolation boundaries, and clearly mark unsupported hardware/firmware and app-compatibility limits.',
    hardware: 'Hardware-specific checks: use documented interfaces and owned/test devices; validate units, calibration, disconnect/reconnect, malformed input, power/thermal conditions and physical-safety limits; do not claim hardware equivalence without the target device.',
    ai_model: 'AI-specific checks: evaluate a documented representative dataset and task suite, safety/refusal, privacy, prompt injection/tool boundaries, determinism/variance, latency/cost, model/version drift and licensing; do not equate model capability from anecdotes.',
    advertising_technology: 'Ads/analytics-specific checks: test consent and opt-out enforcement, data minimization, attribution assumptions, deletion/retention, fraud controls, billing/report reconciliation and audit trails.',
  };
  return [...base, ...(productSpecific[type] ? [productSpecific[type]] : [])].map((item) => `- ${item}`).join('\n');
}

function milestonePlan() {
  return `1. **Orient:** identify the real user project, its existing architecture, conventions, tests, deployment target and constraints. Do not overwrite it or scaffold a parallel app without approval.
2. **Research:** create an evidence ledger and unknowns list; verify intended users, user jobs, full observable workflows, platform matrix, data, permissions, errors, integrations and constraints. Use authorized public sources only.
3. **Inventory:** enumerate every requested/known capability, related workflows and cross-cutting concerns. Assign stable IDs; classify each as verified, inferred, unknown, in-scope, explicitly excluded, or deferred. Resolve contradictions before treating them as facts.
4. **Specify:** write a product brief, user journeys, requirements/acceptance scenarios, non-goals, data model, API/events, permissions, threat model, compatibility matrix, quality targets and migration/operations notes appropriate to the project. Keep specifications next to the project implementation when possible.
5. **Decide reuse:** inspect candidate projects and existing code for actual fit, maintenance, license, security, integration cost and gaps. Reuse is optional and must serve the user’s goal; do not replace the requested product with a competitor. Do not add dependencies before confirming they are needed and acceptable.
6. **Plan the complete scope:** order work into end-to-end vertical slices. Implement all verified in-scope requirements through successive slices; if time or evidence prevents completion, leave a transparent coverage ledger and a prioritized continuation plan rather than claiming completeness.
7. **Build:** follow the host project’s stack and patterns. Implement original code and assets, accessible interfaces, safe data handling, explicit states, useful errors and operational observability. Keep interfaces/contracts stable before parallel agent work.
8. **Verify:** tests trace to requirement IDs; run focused checks, full project tests, static/security checks and compatibility checks that the project supports. Inspect the running artifact through the interface the user will use; capture unrun checks and actual limits.
9. **Review and deliver:** review functionality, security, accessibility, license/attribution, performance against stated targets, docs, setup, migration and rollback. Report what works, what is partial, what is not implemented, evidence gaps, commands and next steps.`;
}

function workflowDeliverables() {
  return `- **Evidence ledger:** claim, source URL, source type, access date, exact supported behavior, confidence, contradiction and open question.
- **Behavior inventory:** capability ID, actor/job, trigger, preconditions, main and alternate paths, state transitions, permissions, platforms, data effects and status.
- **Product brief:** target users, problem, outcomes, full requested scope, explicit non-goals and measurable quality goals.
- **Specification set:** user journeys, requirements, acceptance scenarios, architecture/contracts, data model, threat/privacy model, UI states, compatibility, test plan and operational/migration notes as relevant.
- **Build plan:** reusable components and licenses, vertical slices, ownership/interfaces, dependency decisions, risks and ordered tasks.
- **Implementation:** integrated working software inside the user’s project, not a mockup or disconnected scaffold, unless that is the scope the user approved.
- **Verification packet:** requirement-to-test traceability, commands and actual exit codes, manual/browser checks, representative performance data when required, checks not run, limitations and known gaps.
- **Handoff:** changed files, decisions, risks, setup/run instructions, next actionable work and honest completion status.`;
}

function userWorkflows(product) {
  const capabilities = (product.capabilities || []).filter(Boolean);
  if (!capabilities.length) return 'No capability list is recorded. Discover workflows from public evidence, then map every primary and important alternate journey before deciding scope.';
  return capabilities.map((capability, index) => `- **${featureRequirementId(product.id, index)} — ${capability}:** identify the user/actor, goal, entry point, prerequisite, happy path, alternate/error/permission-denied path, resulting state, platform, data effects, evidence and acceptance check. Decompose compound capability bullets into distinct independently testable workflows where needed.`).join('\n');
}

function implementationPrompt(product) {
  return `“We don't need FAANG anymore. Use your agent to build **${product.name}** in this project. Start from this skill, but treat every catalog claim as provisional until you verify it. Research authorized public behavior, define a traceable coverage plan for the full scope I request, reuse suitable open components where they fit, and implement an original, independently written product—not a branded clone. Test the real user journeys, explain what is complete versus partial or unknown, and leave a clear next-step plan for any unimplemented requirements.”`;
}

function standardsTable(product) {
  const caps = (product.capabilities || []).filter(Boolean);
  if (!caps.length) return '| Requirement | User/actor + goal | Evidence/confidence | Acceptance scenario | Implementation/test link | Status/exception |\n|---|---|---|---|---|---|\n| Research primary user journeys | To discover | Claim-level public citation required | Observable, repeatable result and negative path | Add traceable IDs | Unknown until researched |';
  return `| Requirement | User/actor + goal | Evidence/confidence | Acceptance scenario | Implementation/test link | Status/exception |\n|---|---|---|---|---|---|\n${caps.map((capability,index)=>`| ${featureRequirementId(product.id,index)}: ${escapeTable(capability)} | Discover and verify | Missing until claim-level source is recorded | Main, alternate, invalid and denied path | Add source → spec → code → test links | Untriaged: include, exclude with reason, or defer |`).join('\n')}`;
}

function workflowRiskChecklist(product) {
  const generic = [
    'Who is the intended user, and which first-party jobs matter most? Which jobs vary by role, account state, locale, platform or subscription/entitlement?',
    'What are the complete lifecycle and state transitions (create, read, update, share, revoke, archive, delete, restore)? What persists and what is ephemeral?',
    'What identity, access-control, ownership, consent and delegation rules govern each action? How are unauthorized and revoked actions handled?',
    'What are the import/export, interoperability, migration and data portability needs? Which data/content must the user supply or license?',
    'What are expected scale, latency, availability, offline and recovery behaviors? Which are documented facts versus targets chosen for this implementation?',
    'What legal, privacy, safety, abuse, retention, regional and accessibility considerations change the design?',
  ];
  const add = {
    ai_model: 'What task/evaluation suite supports quality claims? How do versions, stochastic output, tool calls, safety policy and user data handling change behavior?',
    hardware: 'Which exact hardware is required? What are the safe failure states, calibration steps, physical constraints and unsupported components?',
    messaging: 'What are the cryptographic and metadata threat models? How do key/device changes and group membership affect old/new messages?',
    storage: 'What consistency and durability semantics are promised? How do partial uploads, versioning, deletion and regional failures behave?',
    database: 'What transaction/isolation guarantees are promised? How do upgrades, migrations, backups and recovery work under writes?',
    media_streaming: 'Who owns/licenses the content and delivery rights? Which codecs, subtitles, devices, offline states and lawful DRM integrations are required?',
    advertising_technology: 'What consent is captured, what data is collected, how is attribution computed, and how are users audited, billed, opted out or erased?',
  }[product.product_type];
  return [...generic, ...(add ? [add] : [])].map((item) => `- ${item}`).join('\n');
}

function skillMission(productName, researchStatus) {
  return `This is the product-specific coding-agent skill for **${productName}**. Give this file to your coding agent in the project where you want the product built. RAE’s goal is “We don't need FAANG anymore. Use your agent to build any of their products. RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google.” Use that ambition to work toward the user’s requested product, not to overstate current evidence or completion. Research the product, choose what to reuse, build an independent implementation in the user’s project and verify it. Do not reproduce proprietary internals, protected assets or branding, and do not claim blanket feature parity; turn verified public behavior into an evidence-backed, traceable build plan.\n\n**Important evidence limit:** the product dossier has research status **${RESEARCH_STATUS[researchStatus] || 'not verified'}**. The catalog summary is a starting brief, not a complete verified specification; its capability list may be incomplete. Research public behavior first, fill the coverage ledger, and report unknowns honestly while making progress on verified scope.`;
}

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
  const defaultWorkspace = workspacePath || `./${id} (optional local workspace; choose a writable output directory)`;
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

${skillMission(name, product.research_status)}

### Evidence to inspect first

1. Read the product dossier with ${inlineCode(`npx rae-faang research dossier ${id}`)} and review its research status (**${research}**). ${researchUrl ? `When using the source repository, the dossier is also linked here: ${dossierReference}.` : `When using the source repository, read ${inlineCode(dossierPath)}.`} A generated kit or successful metadata lookup does not prove that claims have been researched. Resolve placeholders and contradictions before implementation.
2. Review the public web-surface observation if available. It records only an unauthenticated page, not internal architecture or authenticated behavior. Compare observations with cited official sources; do not infer private workflows from page appearance.
3. Verify each material product and alternative claim against official documentation, public standards, or the referenced project itself. Record URLs, access dates, supported claims, assumptions, conflicts and unknowns. Do not sign in, bypass controls, reverse-engineer proprietary binaries, or copy source, protected assets or branding.
4. Check the actual repository conventions and existing workspace before adding dependencies or selecting a stack. Keep license obligations and third-party rights visible in the plan. If a dossier is pending, stale or too thin to support requirements, make the next task evidence gathering—not speculative implementation.

### Evidence standard and source ledger

${sourceClaimRules(product)}

| Claim / requirement | Source URL + access date | Supported behavior | Source type | Confidence | Conflict / unknown | Decision |
|---|---|---|---|---|---|---|
| Add one row per material behavior before implementation | Public, authorized source required | Quote or paraphrase only what it supports | Official / observed / third-party / inference | Verified / partial / unknown | Record explicitly | Include / exclude / defer |

Research lens: **${product.product_type}** — ${productTypePlan(product)}

Unknowns are first-class outputs. Do not guess product behavior to fill a blank. When no reliable evidence exists, mark the requirement unverified, propose a bounded assumption only if safe and reversible, and ask the user to approve scope decisions that materially change the product.

### Reuse/build decision

${decision}

Current alternative coverage: **${statusLabel}**. This describes the catalog's research into existing projects only; it does not determine whether your agent can build the product. Build it in your project using this skill. Catalog coverage notes: ${product.verdict || 'not yet assessed; review current projects.'} ${product.gap || 'No coverage gap assessed yet.'}

Candidate projects to verify:

${alternativeList}

### Product behaviors and workflow coverage ledger

Treat catalog capability bullets as a seed list, not a complete backlog. Decompose compound bullets into separate user-observable workflows. Find missing primary journeys, administration, onboarding, settings, accessibility, data portability, safety, abuse, failures, recovery and cross-platform differences from public evidence. Keep direct equivalents and intentionally different design decisions distinct.

${userWorkflows(product)}

${coverageLedger(product)}

${productTypePlan(product)}

For every in-scope behavior, record the actor, user goal, trigger, preconditions, inputs, expected visible/system result, state transition, permissions, main path, alternate/invalid/denied/timeout/retry/recovery paths, data/privacy effects, platform constraints, public evidence and confidence. Use stable requirement IDs (for example ${inlineCode(requirementIdExample)}), and trace each ID from evidence → workflow → specification/contract → implementation → automated test or named manual check. Maintain a **coverage ledger** showing implemented, tested, partial, not started, excluded-with-reason, or unknown; never call the product “complete” while required rows are unimplemented or unverified.

### Questions that expose missing workflows and product edges

${workflowRiskChecklist(product)}

A comprehensive implementation targets the user’s requested scope and all verified in-scope workflows, not every imagined feature. Ask the user to choose only where evidence leaves materially different valid product decisions; otherwise continue with a documented, reversible choice.

### Build the product in the user's project

Use the product skill from the project where the user wants **${name}** built. Review that project's conventions and existing code, then create a traceable plan for the complete user-requested scope. Deliver it in working vertical slices: each slice should connect the real interface, domain behavior, data/contracts and tests. Do not stop after a static mock, empty scaffold, isolated API or happy-path-only demo unless that is the approved scope. The catalog and optional scaffold provide guidance; implementation belongs in the user's project. If evidence is insufficient for a behavior, research it before coding or mark the behavior blocked with a precise question.

### End-to-end implementation milestones

${milestonePlan()}

### Product implementation prompt

${implementationPrompt(product)}

### Required deliverables

${workflowDeliverables()}

### Product quality and verification plan

${qualityPlan(product)}

### Multi-agent task plan and outputs

1. **Researcher (single owner of evidence packet):** verify identity, lifecycle, intended users, user jobs, workflows, capability claims, alternatives and licenses; record claim-level citations and unknowns. If the source catalog is available, update ${inlineCode(dossierPath)}. Do not use a public-page capture as evidence for hidden internals.
2. **Architect (single owner of interfaces):** decide reuse/integrate/extend/build/research further; choose one verified capability as the candidate first journey; define its scope, non-goals, requirement IDs, system boundaries and contracts. Inspect ${inlineCode(`${defaultWorkspace}/specs/`)} and replace only missing or placeholder sections with evidence-backed specifications before assigning implementation tasks.
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
- Product-specific test/build/lint/security checks are run and actual exit codes recorded. Run the generated workspace's own checks and ACE configuration check when available. If working from the RAE source checkout, also run ${inlineCode('npm run validate')} and ${inlineCode('npm test')}; otherwise use ${inlineCode('npx rae-faang research validate')} for bundled catalog integrity.
- Report implemented/partial/not-started/unknown requirement counts, unrun checks, known limitations and the next task. A reviewer accepts the implementation and handoff. Passing tests prove only the tested behavior—not parity with ${name} or undocumented internals.

### Repository entry points

- Product description and known capability areas: see the product section above. This catalog summary is a research lead, not a verified complete specification.
- Product-type research checklist: ${researchLens(product)}
- Product metadata: ${inlineCode(`npx rae-faang products show ${id} --format json`)}.
- Research dossier: retrieve it from the installed CLI with ${inlineCode(`npx rae-faang research dossier ${id}`)}; ${researchUrl ? `source copy: ${dossierReference}.` : `source file when working in the repository: ${inlineCode(dossierPath)}.`}
- Alternative candidates and coverage: ${inlineCode(`npx rae-faang alternatives list --product ${id}`)}; source landscape file when available: ${inlineCode(skillPath)}.
- Optional local product workspace/specifications: ${inlineCode(defaultWorkspace)}.
- Opportunity decision, when present in the source repository: ${inlineCode(`opportunities/${id}.md`)}.
- Official product page: ${product.official_url || 'not recorded'}.
- Research status: **${research}**; alternative coverage: **${statusLabel}**. This coverage label describes existing-project research only, not the ability to build this product.

### Capability coverage ledger

Use the table as a live planning artifact in the user’s project. Split a catalog bullet when it contains multiple independently testable workflows; add evidence-discovered behaviors not listed here; never mark “complete” without a source and a verified acceptance check. Keep out-of-scope decisions visible.

${standardsTable(product)}


### Installed-CLI workflow

Use the installed RAE CLI; no source checkout is required. Inspect product metadata with ${inlineCode(`npx rae-faang products show ${id} --format json`)} and retrieve dossier contents with ${inlineCode(`npx rae-faang research dossier ${id}`)} (or add ${inlineCode('--format json')} for machine-readable output). Check catalog readiness with ${inlineCode('npx rae-faang research coverage')} and ${inlineCode('npx rae-faang research validate')}. These checks validate catalog structure, not whether all product claims are researched or current. Generate a portable Markdown skill with ${inlineCode(`npx rae-faang ${id} --out ./${id}.md`)}. For a directory containing ${inlineCode('skill.md')} and ${inlineCode('mcp.json')}, use ${inlineCode(`npx rae-faang build agent-kit ${id} --out ./${id}-agent`)}. Give the generated skill to your coding agent in the project where you want this product built. A starter workspace is optional: scaffold one with ${inlineCode(`npx rae-faang build product ${id} --out ./${id}`)} only if useful. Keep generated outputs separate; inspect existing paths before writing and do not overwrite existing work. For current product behavior, verify public sources and maintain the coverage ledger below.
`;
}
