import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { PRODUCTS as LANDSCAPE } from './skills/catalog-data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'catalog', 'skills');
const TEST_EXTERNAL_SCHEMES = /^(https?:|mailto:|tel:|itms-apps:|javascript:|#|\/|\.\/)/i;
const REQUIRED = [
  'Product identity and scope', 'Product capability map', 'Complete user workflows',
  'Interaction and interface specification', 'Functional requirements and traceability',
  'Data model and state', 'APIs, integrations and protocols', 'Architecture and technical design',
  'Open-source foundation and dependency strategy', 'Security and privacy', 'Error handling and edge cases',
  'Testing and behavioral verification', 'Implementation roadmap', 'Evidence, uncertainty and exclusions',
  'Downstream execution instructions',
];
const CLASSIFICATIONS = ['VERIFIED', 'CORROBORATED', 'INFERRED', 'PROPOSED', 'UNKNOWN', 'CONFLICTED'];
const md = (value) => String(value ?? '').replaceAll('|', '\\|').replace(/\r?\n/g, ' ').trim();
const code = (value) => `\`${String(value).replaceAll('`', '')}\``;
const digest = (value) => createHash('sha256').update(String(value)).digest('hex').slice(0, 8).toUpperCase();
const productCode = (id) => id.toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, '');
const featureId = (product, capability) => `${productCode(product.id)}-CAP-${digest(capability)}`;
const statusText = { available: 'mature alternative listed', partial: 'partial alternative coverage', pending: 'no verified alternative' };

function jsonl(path) {
  return readFileSync(path, 'utf8').split(/\r?\n/).filter((row) => row.trim()).map((row) => JSON.parse(row));
}
function optional(path, parseJson = false) {
  try { const data = readFileSync(path, 'utf8'); return parseJson ? JSON.parse(data) : data; } catch { return null; }
}
function dossier(text = '') {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { fm: null, body: text };
  try { return { fm: yaml.load(match[1]) || null, body: match[2] || '' }; }
  catch (error) { return { fm: null, body: '', error: error.message }; }
}
function reaData(report, raw) {
  if (!report) return null;
  const get = (regex) => report.match(regex)?.[1]?.trim() || null;
  const section = (name) => {
    const at = report.indexOf(`### ${name}`);
    if (at < 0) return [];
    const body = report.slice(at + name.length + 4);
    return body.slice(0, (body.search(/\n### |\n## /) + 1) || undefined).split(/\r?\n/).map((x) => x.trim()).filter((x) => x.startsWith('- ')).map((x) => x.slice(2));
  };
  const observed = { headings: section('Headings'), landmarks: section('Landmarks'), links: section('Links'), controls: section('Controls') };
  const ax = raw?.normalized_result?.steps?.flatMap((step) => step.artifacts?.accessibility?.value?.text ? [step.artifacts.accessibility.value.text] : []).join('\n') || '';
  for (const line of ax.split(/\r?\n/)) {
    const lm = line.match(/^\s*- (navigation|search|main|contentinfo|banner|complementary):?\s*$/i)?.[1]?.toLowerCase();
    if (lm && !observed.landmarks.includes(lm)) observed.landmarks.push(lm);
    const ctrl = line.match(/^\s*- (button|combobox|textbox|link) ["“](.+?)["”]/i);
    if (ctrl) { const value = `${ctrl[1].toLowerCase()}: ${ctrl[2]}`; if (!observed.controls.includes(value)) observed.controls.push(value); }
  }
  return {
    id: get(/^\| REA Evidence ID \| `([^`]+)` \|/m) || raw?.evidence_id || null,
    rawId: raw?.evidence_id || null,
    captured: get(/^\| Captured \| ([^|]+) \|/m),
    url: get(/^\| Resolved URL \| (https?:\/\/[^ |]+) \|/m) || get(/^\| Target \| (https?:\/\/[^ |]+) \|/m),
    status: get(/^\| Status \| ([^|]+) \|/m) || 'unknown',
    complete: /\| Completeness \| complete \|/i.test(report),
    observed,
    limitations: raw?.normalized_result?.limitations || raw?.limitations || [],
  };
}
function evidence(product, research, capture) {
  const records = [];
  for (const item of [...(product.evidence || []), ...(research.fm?.evidence || [])]) {
    if (!item || typeof item !== 'object') continue;
    const classification = item.verification_status === 'conflicting' ? 'CONFLICTED' : item.verification_status === 'verified' ? 'VERIFIED' : 'UNKNOWN';
    records.push({ id: item.id, title: item.title || item.publisher || 'Research evidence', url: item.url, date: item.accessed_at || 'Not recorded', claim: item.claim || 'Claim not recorded', location: item.supporting_excerpt_or_summary || 'Location not recorded', classification, limitation: `Evidence status ${item.verification_status || 'not recorded'}; inspect source and claim scope.` });
  }
  records.push({ id: 'SRC-PRODUCT', title: 'Official product page', url: product.official_url, date: product.last_verified_at || product.last_researched_at || 'Not recorded', claim: `${product.name} is identified at this URL in the canonical catalog.`, location: 'Catalog identity field; page not fetched by compiler.', classification: 'UNKNOWN', limitation: 'Catalog URL is a lead, not independently checked behavior.' });
  if (product.official_docs_url) records.push({ id: 'SRC-DOCS', title: 'Official documentation entry', url: product.official_docs_url, date: product.last_verified_at || 'Not recorded', claim: 'Documentation entry-point URL is recorded.', location: 'No claim-level section recorded.', classification: 'UNKNOWN', limitation: 'Source is not fetched and URL alone establishes no behavior.' });
  for (const [i, url] of (product.official_source_urls || []).entries()) records.push({ id: `SRC-OFFICIAL-${i + 1}`, title: 'Additional official source lead', url, date: 'Not recorded', claim: 'Official source URL is listed in product record.', location: 'Claim/section not recorded.', classification: 'UNKNOWN', limitation: 'Source content is not fetched.' });
  if (capture?.id) records.push({ id: capture.id, title: `${product.name} Public web-surface observation (REA)`, url: capture.url || product.official_url, date: capture.captured || 'Not recorded', claim: `A dated unauthenticated snapshot exposed controls ${capture.observed.controls.join(', ') || '(none recorded)'} and landmarks ${capture.observed.landmarks.join(', ') || '(none recorded)'}.`, location: `REA report; status ${capture.status}; completeness ${capture.complete ? 'reported complete' : 'not established'}.`, classification: 'VERIFIED', limitation: `Snapshot only; no activation, authenticated workflow, search results or internals. ${capture.limitations.join(' ')}` });
  for (const [i, url] of (product.sources || []).entries()) records.push({ id: `SRC-ALT-${i + 1}`, title: 'Open-source research lead', url, date: 'Not recorded', claim: 'Discovery lead for candidate research only.', location: 'Curated landscape source URL.', classification: 'UNKNOWN', limitation: 'Does not establish candidate implementation, license, activity or fit.' });
  for (const [i, alt] of (product.alternatives || []).entries()) records.push({ id: `SRC-CANDIDATE-${i + 1}`, title: `${alt.name} candidate`, url: alt.repo || alt.url, date: 'Not recorded', claim: 'Candidate for evaluation, not an approved foundation.', location: 'Curated entry; repository only when recorded.', classification: 'PROPOSED', limitation: 'Version, license/dependencies, code, tests, security, maintenance and operations not audited.' });
  return records;
}
function capabilities(product, research, landscape) {
  const items = product.capabilities?.length ? product.capabilities : landscape?.capabilities?.length ? landscape.capabilities : research.fm?.capabilities || [];
  return items.map((item) => typeof item === 'string'
    ? { text: item, evidence_ids: [], support: 'unknown' }
    : { text: item.notes || item.capability_id || 'Unnamed capability', evidence_ids: item.evidence_ids || [], support: item.support || 'unknown' }).filter((x) => x.text);
}
function checkInputs(product, research, capture, landscape, sources) {
  const errors = [];
  if (!product || !/^[a-z][a-z0-9-]*$/.test(product.id || '')) errors.push('invalid stable product ID');
  if (!product?.name || !product?.company_id || !product?.product_type || !/^https?:\/\//.test(product?.official_url || '')) errors.push('missing canonical identity fields');
  if (research.fm && research.fm.id !== product.id) errors.push(`dossier ID mismatch: ${research.fm.id}`);
  if (research.fm && research.fm.company_id !== product.company_id) errors.push(`dossier company mismatch: ${research.fm.company_id}`);
  if (research.error) errors.push(`invalid dossier YAML: ${research.error}`);
  if (!landscape) errors.push('curated alternatives entry missing');
  if (landscape && landscape.company_id !== product.company_id) errors.push('alternatives company_id mismatch');
  if (capture?.id && capture.rawId && capture.id !== capture.rawId) errors.push(`REA Evidence ID mismatch: report=${capture.id}; raw=${capture.rawId}`);
  const known = new Set(sources.map((item) => item.id).filter(Boolean));
  const allCapabilities = product.capabilities?.length ? product.capabilities : landscape?.capabilities?.length ? landscape.capabilities : research.fm?.capabilities || [];
  for (const item of allCapabilities) for (const id of item.evidence_ids || []) if (!known.has(id)) errors.push(`invalid evidence reference ${id}`);
  const declaredIds = allCapabilities.map((item) => item.capability_id).filter(Boolean);
  for (const id of declaredIds.filter((value, index) => declaredIds.indexOf(value) !== index)) errors.push(`duplicate capability ID ${id}`);
  const featureLabels = allCapabilities.map((item) => typeof item === 'string' ? item : item.notes || item.capability_id).filter(Boolean);
  for (const label of featureLabels.filter((x, i) => featureLabels.indexOf(x) !== i)) errors.push(`duplicate capability label ${label}`);
  for (const alt of landscape?.alternatives || []) for (const key of ['url', 'repo']) if (alt[key] && !/^https?:\/\//.test(alt[key])) errors.push(`${alt.name}: invalid ${key} URL`);
  return [...new Set(errors)];
}
function confidence(capability, byId) {
  if (capability.evidence_ids.some((id) => byId.get(id)?.classification === 'CONFLICTED')) return 'CONFLICTED';
  if (capability.evidence_ids.length && capability.evidence_ids.every((id) => byId.get(id)?.classification === 'VERIFIED')) return 'VERIFIED';
  if (capability.evidence_ids.length) return 'CORROBORATED';
  return 'UNKNOWN';
}
function identity(product, company) {
  return [
    '| Field | Canonical record / result | Evidence status and limits |', '|---|---|---|',
    `| Name / stable ID | **${md(product.name)}** / ${code(product.id)} | Product catalog |`,
    `| Company / category | ${md(company)} / ${code(product.product_type)} / ${(product.categories || []).map(code).join(', ') || 'Not recorded'} | Product catalog |`,
    `| Official website / docs | [${product.official_url}](${product.official_url}) / ${product.official_docs_url ? `[${product.official_docs_url}](${product.official_docs_url})` : 'Not recorded'} | URL lead; compiler does not fetch source |`,
    `| Lifecycle / supported versions / platforms | ${product.lifecycle_status || 'Unknown'} / Unknown / Unknown | Version/platform matrix not structured |`,
    '| Intended users, roles, jobs, value | Unknown | No structured evidence |',
    '| Boundaries / original architecture | Unknown | Do not infer from category or marketing |',
    '| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |',
    '| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |',
  ].join('\n');
}
function capabilitySection(product, caps, byId) {
  if (!caps.length) return 'No structured capability records. This is a research gap, not evidence that the product has no capabilities.';
  const rows = caps.map((cap) => `| ${code(featureId(product, cap.text))} | ${md(cap.text)} | ${confidence(cap, byId)} | ${cap.evidence_ids.map(code).join(', ') || 'None linked'} | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |`);
  return `Capability labels are leads, not complete verified behavior.\n\n| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |\n|---|---|---|---|---|\n${rows.join('\n')}`;
}
function reqsAndTests(product, caps, byId) {
  const reqs = [];
  const testLines = [];
  for (const cap of caps) {
    const id = digest(cap.text);
    const req = `REQ-FUNC-${id}`;
    const test = `TEST-FUNC-${id}`;
    const feature = featureId(product, cap.text);
    const refs = cap.evidence_ids.map(code).join(', ') || 'None linked; research required';
    reqs.push([
      `### ${req} — ${md(cap.text)}`,
      '- **Required behavior:** Unknown; capability is a research lead until observed/documented.',
      '- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.',
      '- **Priority:** Unassigned; rank after user scope/impact are known.',
      `- **Evidence / verification:** ${confidence(cap, byId)}; ${refs}.`,
      '- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.',
      `- **Associated test ID:** ${code(test)}; fixture and expected output must be specified from evidence.`,
      `- **Trace:** ${code(feature)} → ${code(req)} → ${code(test)}.`,
    ].join('\n'));
    testLines.push(`- **${test}** → ${code(req)}: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.`);
  }
  return { requirements: reqs.length ? reqs.join('\n\n') : 'Research before defining requirements; do not invent backlog.', tests: testLines.length ? testLines.join('\n') : 'Define tests only after evidence-backed requirements exist.' };
}
function sourceTable(items) {
  return ['| Source ID | Title / location | URL | Access date | Claim supported | Classification and limits |', '|---|---|---|---|---|---|', ...items.map((x) => `| ${code(x.id || 'ID-MISSING')} | ${md(x.title)} — ${md(x.location)} | ${x.url ? `[link](${x.url})` : 'No URL'} | ${md(x.date)} | ${md(x.claim)} | **${x.classification}** — ${md(x.limitation)} |`)].join('\n');
}
function unknowns(product, caps, capture) {
  const gaps = [
    ['P0', 'Claim-level evidence linked to each capability.', 'Investigate official documentation and authorized public behavior; update evidence IDs.'],
    ['P0', 'Intended user, roles, user jobs, and requested implementation boundary.', 'Research product/user scope; ask user when scope choice materially changes deliverable.'],
    ['P0', 'Full successful, denied, failed, cancelled, retry and recovery workflows.', 'Observe authorized workflows; record checkpoint and observable oracle.'],
    ['P1', 'Supported versions, platforms, responsive and accessibility behavior.', 'Verify product version and platform documentation; run authorized observation.'],
    ['P1', 'Data model, state, ownership, retention, import/export and concurrency.', 'Use primary docs or record as unknown; propose only the independent slice model.'],
    ['P1', 'API/protocol contracts, integrations, authorization, limits and errors.', 'Use official API spec or label independent contract PROPOSED.'],
    ['P1', 'Candidate repository state, implementation, tests, license and operations.', 'Inspect exact repository/version and distribution dependencies before recommendation.'],
    ['P2', 'Representative performance targets and operational scale.', 'Define workload and target before measurement; avoid scale equivalence claims.'],
  ];
  if (!capture) gaps.unshift(['P0', 'No public-surface capture is available.', 'Use authorized official public sources; REA is optional, not assumed.']);
  if (!caps.length) gaps.unshift(['P0', 'No structured capabilities exist.', 'Research primary capabilities; do not infer from product category.']);
  return `| Priority | Unknown / blocker | Next evidence action |\n|---|---|---|\n${gaps.map(([p, item, next]) => `| ${p} | ${item} | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. ${next} |`).join('\n')}`;
}
function errorCases(product) {
  const cases = ['Missing/malformed/oversized input.', 'Unauthorized or revoked action and tenant isolation where applicable.', 'Empty data/results and duplicate operations.', 'Concurrent updates or stale writes to mutable state.', 'Network timeout, throttling, external outage, retry and partial failure.', 'Cancellation/interruption during state change and restart recovery.', 'Corrupt/incompatible imported or persisted data; migration failure.', 'Expired credentials/session where applicable.'];
  if (product.product_type === 'storage') cases.push('Interrupted transfer, checksum mismatch, deletion/restore conflict.');
  if (product.product_type === 'messaging') cases.push('Duplicate/out-of-order delivery, key/device or membership change.');
  if (product.product_type === 'media_streaming') cases.push('Bandwidth/codec/device change, manifest failure, content unavailable.');
  return `These are test prompts, not target behavior assertions. Keep only relevant cases and derive expected behavior from evidence or label an independent decision PROPOSED.\n\n${cases.map((item, i) => `- **EDGE-${String(i + 1).padStart(3, '0')}:** ${item} Target behavior is UNKNOWN until researched; specify recovery before release.`).join('\n')}`;
}
function roadmap(caps) {
  const refs = caps.map((cap) => `REQ-FUNC-${digest(cap.text)}`).join(', ') || 'to be researched';
  const phases = [
    ['Foundation and dependencies', 'Inspect user project, stack, constraints, tests, candidate implementations and licenses.', 'Clean setup and documented dependency/reuse decision.'],
    ['Core domain behavior', 'Research then implement one useful vertical slice with explicit state, validation and permissions.', 'Integrated domain behavior with deterministic unit/integration tests.'],
    ['Primary user workflows', 'Complete the best-evidenced journey through success, cancellation and recovery.', 'E2E acceptance checks via user-facing interface.'],
    ['Integrations', 'Add only documented/authorized integrations; mock boundaries for offline routine tests.', 'Contract and failure-injection tests.'],
    ['Secondary capabilities', 'Implement remaining in-scope behavior by user priority and evidence.', `Trace: ${refs}; document exclusions and unknowns.`],
    ['Security and reliability', 'Review access, privacy, abuse, migration, backup, observability and recovery as applicable.', 'Applicable security/recovery checks and risks recorded.'],
    ['Verification and release', 'Run project checks; inspect behavior, accessibility, compatibility, license and docs.', 'Reproducible result and transparent completion/gap report.'],
  ];
  return phases.map(([name, task, done], i) => `### Phase ${i + 1} — ${name}\n\n- **Tasks:** ${task}\n- **Prerequisites:** ${i ? `Phase ${i} and evidence/scope decisions` : 'Repository inspection and user scope.'}\n- **Deliverables:** ${i ? 'Integrated working slice and updated traceability' : 'Project map, evidence ledger, reuse decision, bounded plan'}\n- **Requirements:** ${i === 1 || i === 2 ? refs : 'Select after evidence review'}\n- **Tests:** ${i ? 'Focused tests for implemented requirements and failures' : 'Clean setup/validation smoke test'}\n- **Completion:** ${done}\n- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.\n`).join('\n');
}
function renderSkill({ product, company, research, capture, landscape, caps, sources }) {
  const byId = new Map(sources.map((item) => [item.id, item]));
  const trace = reqsAndTests(product, caps, byId);
  const researchStatus = product.research_status || research.fm?.research_status || 'unknown';
  const controls = capture?.observed.controls || [];
  const workflowList = caps.length ? caps.map((cap) => `- **${md(cap.text)}:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.`).join('\n') : 'No capability-backed critical workflows are recorded; research before specifying.';
  const list = (items) => items.length ? items.map((x) => code(md(x))).join(', ') : 'Not recorded';
  const altRows = (landscape.alternatives || []).map((a) => `| [${md(a.name)}](${a.url}) | ${a.repo ? `[Repository](${a.repo})` : 'Not recorded'} | ${md(a.license || 'Unknown')} (unverified) | ${md(a.covers || 'Not established')} | ${md(a.note || 'No limitation recorded')} | Proposed evaluation lead; no verified foundation |`).join('\n');
  const securityFocus = {
    messaging: 'Never invent cryptography; use an established audited protocol/library and review key/device/membership changes.',
    storage: 'Verify tenant isolation, object access, integrity, retention, deletion and backup/restore.',
    database: 'Verify transaction/concurrency semantics, tenant boundaries, migration, backup and recovery.',
    hardware: 'Use owned test hardware/authorized interfaces; assess calibration, disconnect and physical safety.',
    ai_model: 'Test prompt injection, tool authorization, privacy, model drift, unsafe outputs and representative evaluations.',
    media_streaming: 'Verify rights, privacy, child safety and lawful DRM/content-delivery boundaries.',
    advertising_technology: 'Verify consent/opt-out, data minimization, retention/deletion and auditable billing/attribution.',
  }[product.product_type] || 'Review product-specific identity, authorization, privacy, abuse and dependency threats.';
  const rawNotes = research.body.trim() || 'Dossier has no narrative notes.';
  return [
    '---', `name: ${product.id}`, `description: ${JSON.stringify(`Evidence-aware build skill for ${product.name} (${product.id}); investigate, assess reuse, implement scoped behavior and verify.`)}`, '---', '',
    `# ${md(product.name)} — implementation skill (${code(product.id)})`, '',
    `> **Research status:** ${researchStatus}. Alternative coverage is **${statusText[landscape.status] || landscape.status}**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.`, '',
    `> This is the coding-agent build skill for **${md(product.name)}**. Give this file to your coding agent in the project where you want the product built.`, '',
    '## Product description', '',
    `This is the coding-agent skill for **${md(product.name)}** (${code(product.id)}). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.`, '',
    '## 1. Product identity and scope', '', identity(product, company), '',
    `Research lens: **${product.product_type}** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.`, '',
    '## 2. Product capability map', '', capabilitySection(product, caps, byId), '',
    '## 3. Complete user workflows', '',
    controls.length ? `**Observed start page, not a completed workflow:** dated capture exposes ${list(controls)}. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.` : 'No captured control sequence is available.', '', workflowList, '',
    '## 4. Interaction and interface specification', '',
    '| Observable interface | Evidence-backed snapshot | Unknown / untested |', '|---|---|---|',
    `| Navigation/landmarks | ${list(capture?.observed.landmarks || [])} | Full IA/routes/authenticated navigation |`,
    `| Views/headings | ${list(capture?.observed.headings || [])} | Results and subsequent views |`,
    `| Controls | ${list(controls)} | Activation, forms, validation, loading/empty/success/error, keyboard behavior |`,
    `| Links | ${list(capture?.observed.links || [])} | Deep-link and route semantics |`,
    '| Responsive/platform behavior | Unknown | No comparison captured |',
    '| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |',
    '', 'A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.', '',
    '## 5. Functional requirements and traceability', '', trace.requirements || 'No requirements.', '',
    'Keep original behavior VERIFIED/CORROBORATED distinct from inference and independent decisions INFERRED/PROPOSED. UNKNOWN stays unknown; contradictory evidence stays CONFLICTED. These requirements are blocked planning placeholders until evidence, user scope, measurable criteria and test oracles are recorded.', '',
    '## 6. Data model and state', '',
    '**Original product structures:** UNKNOWN. No structured evidence establishes fields/types, IDs, ownership/permissions, lifecycle, persistence, constraints, deletion/retention, import/export, migration, concurrency or indexes.', '',
    '**Independent model (PROPOSED):** define only state needed for the researched first slice; specify IDs, validation, owners, state transitions, concurrency, deletion/export/retention and migration. Do not describe it as the target’s model.', '',
    '## 7. APIs, integrations and protocols', '',
    '**Original contracts:** none verified in structured evidence. Dossier prose does not establish supported APIs. Do not invent target endpoints, schemas, auth, events or limits. If the independent implementation needs an interface, define a versioned contract labelled PROPOSED, including request/response, authorization, errors, limits, timeouts, retries and idempotency.', '',
    '## 8. Architecture and technical design', '',
    '**PROPOSED independent design; target internals unknown.** Use only components required by verified scope.', '',
    '```mermaid', 'flowchart LR', '  UI[Interface] --> APP[Application and domain boundary]', '  APP --> DB[(Persistence if needed)]', '  APP --> EXT[Authorized integrations if needed]', '```', '',
    'Separate interface/domain/persistence/integration boundaries. Enforce access at trusted boundaries, isolate tenants where relevant, and define timeout/partial failure behavior. Add queues/caches/scaling/deployment components only when requirements justify them. Record configuration, secrets, data flow, recovery, observability and deployment assumptions in the implementation project.', '',
    '## 9. Open-source foundation and dependency strategy', '',
    landscape.alternatives?.length ? '**Decision: candidates are PROPOSED for evaluation, not approved foundations.** Verify repository/version, license and dependency terms, actual code/modules, extension points, tests/CI, maintenance, security, deployment and integration cost. Map each requirement to actual code and test evidence; README claims and popularity are not proof.' : '**Decision:** no suitable project verified in the current catalog. This is a research gap, not proof no candidate exists. Search by user job before a fresh build.', '',
    landscape.alternatives?.length ? ['| Candidate | Repository | Catalog license (unverified) | Claimed coverage (unverified) | Limitation | Decision |', '|---|---|---|---|---|---|', altRows, '', 'No candidate has been independently cloned, executed, license-reviewed or security-reviewed by this generator.'].join('\n') : '',
    '## 10. Security and privacy', '',
    'No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.', '',
    `Product-specific review: ${securityFocus} Do not claim compliance, privacy or security parity without scoped assessment.`, '',
    '## 11. Error handling and edge cases', '', errorCases(product), '',
    '## 12. Testing and behavioral verification', '', trace.tests, '',
    'These are proposed deterministic implementation-test plans, not original-product observations. Compare the original only through separately authorized, repeatable public observation. A passing spec test does not establish parity.', '',
    '## 13. Implementation roadmap', '', roadmap(caps), '',
    '## 14. Evidence, uncertainty and exclusions', '',
    '### Evidence index', '', sourceTable(sources), '',
    '### Confidence classifications', '',
    'VERIFIED: observed/documented within exact scope. CORROBORATED: supported by multiple compatible sources. INFERRED: reasoned, not directly established. PROPOSED: independent design or candidate. UNKNOWN: not established. CONFLICTED: sources disagree. A source URL alone is not verification; confidence cannot exceed the source. Every important claim in a future completed research record must cite its source location and access date.', '',
    '### Prioritized unknowns', '', unknowns(product, caps, capture), '',
    '### Resumable investigation checkpoint', '',
    `Resume token: ${code(product.id)}. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.`, '',
    '### Dossier notes (not independently verified)', '', rawNotes, '',
    `Research status is **${researchStatus}**. Dossier prose above is preserved for context but is not claim-level evidence by itself.`, '',
    '## 15. Downstream execution instructions', '',
    '1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier ' + product.id + '` and inspect canonical identity with `npx rae-faang products show ' + product.id + ' --format json`.',
    '2. Inspect the existing repository, architecture, dependencies, tests, configuration and interface before editing.',
    '3. Confirm target scope and user priorities; list evidence blockers and never fill them with invented facts.',
    '4. Evaluate candidate foundations through actual code, exact version, license/dependency terms, tests, security, maintenance, operations and fit.',
    '5. Make a minimal dependency-aware plan for a functioning vertical slice.',
    '6. Implement the slice with original code/assets and the host project’s conventions.',
    '7. Add deterministic tests for every implemented requirement, including relevant failure and permission paths.',
    '8. Implement remaining scoped capabilities incrementally; explicitly mark partial, excluded and unknown items.',
    '9. Review security, privacy, dependencies, licensing, accessibility and compatibility.',
    '10. Run actual project checks and inspect behavior through the interface the user will use.',
    '11. Fix causes; do not weaken tests, hide errors or claim parity from generated code.',
    '12. Document deviations, unimplemented requirements, limitations and checks not run.',
    '13. Report requirement → code → test evidence and actual command results.',
    `Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with \`npx rae-faang ${product.id} --out ./${product.id}.md\` when useful. For a directory containing \`skill.md\` and \`mcp.json\`, use \`npx rae-faang build agent-kit ${product.id} --out ./${product.id}-agent\`.`, '',
    '### Multi-agent task plan and outputs', '',
    'Researcher: own the evidence ledger and unknowns. Architect: approve scope, boundaries and contracts before parallel work. Implementers: deliver non-overlapping, integrated vertical slices. Tester: map acceptance checks to requirement IDs. Reviewer: inspect privacy, security, accessibility and license risk. Documenter: preserve setup and limitations. Handoffs record changed files, requirement IDs, commands/exit codes, checks not run and one specific next action.', '',
    '### Acceptance criteria and definition of done', '',
    '- Every in-scope behavior has a unique requirement ID, evidence/confidence, bounded scope, measurable acceptance oracle and associated test/manual check.',
    '- Each implemented requirement maps to code and a deterministic passing test or repeatable manual observation; unknown requirements remain blocked/unknown.',
    '- Primary and relevant alternate/failure workflows run through the user-facing interface; partial/excluded scope and recovery behavior are documented.',
    '- Security, privacy, dependency/license, accessibility, compatibility, setup, project checks, and unrun checks are reported honestly.',
    '- Requirement trace is evidence → workflow → specification/contract → implementation → automated test; passing specification checks do not claim target parity.', '',
    '### Product quality and verification plan', '',
    '- Correctness: tested success, empty, malformed, denied, duplicate, timeout/retry, cancellation, partial failure and recovery cases as relevant.',
    '- Security/privacy: trust boundaries, least privilege, secret handling, data minimization, retention/export/deletion and abuse controls.',
    '- UX/accessibility: keyboard/screen reader, labels/focus, loading/empty/error/success states, responsive behavior and reduced motion where relevant.',
    '- Reliability/performance: reproducible setup, migrations, backup/restore, observability, representative workloads and measured targets before claims.',
    '- Compatibility/licensing: test claimed versions/platforms; check direct/transitive license obligations and dependencies.', '',
    '### End-to-end implementation milestones', '',
    'Follow the seven dependency-aware phases in the roadmap above. Prefer a complete, tested vertical slice over disconnected scaffolding; continue remaining verified in-scope requirements and record blockers.', '',
    '### Required deliverables', '',
    '- Evidence ledger, behavior/capability map, prioritized unknowns and source limitations.',
    '- User scope, architecture/data/API decisions with original-vs-proposed labels, and a candidate reuse/license evaluation.',
    '- Working implementation, requirement-to-test traceability, actual project check results and interface-level verification.',
    '- Documented deviations, partial/not-started/excluded requirements, unrun checks, setup and next actionable step.', '',
    '### Provenance', '',
    `- Product: [catalog/products.jsonl](../../products.jsonl) (${code(product.id)}).`,
    `- Dossier: [research/companies/${product.company_id}/products/${product.id}.md](../../../research/companies/${product.company_id}/products/${product.id}.md).`,
    `- REA capture: [catalog/rea/${product.company_id}/${product.id}.md](../../rea/${product.company_id}/${product.id}.md) (${capture?.captured || 'not captured'}); raw record: [catalog/rea/evidence/${product.id}.json](../../rea/evidence/${product.id}.json).`,
    '- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.', '',
    '## Sources', '',
    ...sources.filter((x) => x.url).map((x) => `- [${md(x.title)}](${x.url}) — ${md(x.claim)} (${x.classification}; accessed ${md(x.date)}).`), '',
  ].filter((line) => line !== null).join('\n');
}

export function validateSkillText(markdown, { product = null, knownEvidenceIds = null, checkLinks = false, strictInternalLinks = false } = {}) {
  const errors = [];
  const fm = markdown?.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) errors.push('missing YAML frontmatter');
  else try {
    const frontmatter = yaml.load(fm[1]);
    if (!frontmatter?.name || !frontmatter?.description) errors.push('frontmatter requires name and description');
    if (product && frontmatter.name !== product.id) errors.push(`skill ID mismatch: ${frontmatter.name} != ${product.id}`);
  } catch (error) { errors.push(`invalid YAML: ${error.message}`); }
  for (let i = 0; i < REQUIRED.length; i++) if (!markdown?.includes(`## ${i + 1}. ${REQUIRED[i]}`)) errors.push(`missing required section: ${REQUIRED[i]}`);
  const ids = [
    ...[...(markdown || '').matchAll(/^### (REQ-[A-Z0-9-]+)(?:\s|$)/gm)].map((x) => x[1]),
    ...[...(markdown || '').matchAll(/^- \*\*(TEST-[A-Z0-9-]+)\*\*/gm)].map((x) => x[1]),
  ];
  const unique = new Set();
  for (const id of ids) { if (unique.has(id)) errors.push(`duplicate ID ${id}`); unique.add(id); }
  const tests = new Set(ids.filter((id) => id.startsWith('TEST-')));
  for (const req of ids.filter((id) => id.startsWith('REQ-'))) {
    const expected = `TEST-${req.replace(/^REQ-/, '')}`;
    if (!tests.has(expected)) errors.push(`${req} has no associated test ${expected}`);
    if (!markdown.includes(`${code(req)} → ${code(expected)}`)) errors.push(`${req} lacks requirement-to-test trace`);
  }
  for (const classification of CLASSIFICATIONS) if (!markdown?.includes(classification)) errors.push(`missing evidence classification ${classification}`);
  if (knownEvidenceIds) for (const [, id] of markdown.matchAll(/\[\[evidence:([^\]]+)\]\]/g)) if (!knownEvidenceIds.has(id)) errors.push(`invalid evidence reference ${id}`);
  if (product && !markdown?.includes(code(product.id))) errors.push(`stable product ID ${product.id} is missing`);
  if (!markdown?.includes('Resumable investigation checkpoint')) errors.push('missing investigation checkpoint');
  if (product) {
    const expectedFeatureIds = new Set();
    const capabilitySection = markdown.split('## 2. Product capability map')[1]?.split('## 3. Complete user workflows')[0] || '';
    const capabilityRows = [...capabilitySection.matchAll(/^\| `([^`]+)` \| ([^|]+) \| (VERIFIED|CORROBORATED|INFERRED|PROPOSED|UNKNOWN|CONFLICTED) \| ([^|]*) \|/gm)];
    for (const [, id, label] of capabilityRows) {
      if (id !== featureId(product, label.trim())) errors.push(`malformed feature ID ${id}`);
      if (expectedFeatureIds.has(id)) errors.push(`duplicate feature ID ${id}`);
      expectedFeatureIds.add(id);
    }
    const declaredFeatures = [...(markdown || '').matchAll(/\*\*Trace:\*\* `([^`]+)` → `([^`]+)` → `([^`]+)`/g)];
    for (const [, featureId, reqId, testId] of declaredFeatures) {
      if (!expectedFeatureIds.has(featureId)) errors.push(`invalid feature reference ${featureId}`);
      if (!ids.includes(reqId) || !tests.has(testId)) errors.push(`invalid requirement/test trace ${reqId} → ${testId}`);
    }
    const expectedRequirements = new Set([...markdown.matchAll(/^### (REQ-[A-Z0-9-]+)/gm)].map((match) => match[1]));
    for (const testId of tests) {
      if (!expectedRequirements.has(`REQ-${testId.replace(/^TEST-/, '')}`)) errors.push(`${testId} has no matching requirement`);
    }
    const sourceTable = markdown.split('### Evidence index')[1]?.split('### Confidence classifications')[0] || '';
    const sourceIds = new Set([...sourceTable.matchAll(/^\| `([^`]+)` \|/gm)].map((match) => match[1]));
    const evidenceRefs = [...capabilitySection.matchAll(/^\| `[^`]+` \| [^|]+ \| (?:VERIFIED|CORROBORATED|INFERRED|PROPOSED|UNKNOWN|CONFLICTED) \| ([^|]*) \|/gm)].flatMap(([, refs]) => refs.match(/(?:SRC-[A-Z0-9-]+|ev_[a-f0-9]+)/g) || []);
    for (const [, value] of markdown.matchAll(/- \*\*Evidence \/ verification:\*\* ([^\n]+)/g)) evidenceRefs.push(...(value.match(/(?:SRC-[A-Z0-9-]+|ev_[a-f0-9]+)/g) || []));
    for (const id of evidenceRefs) if (!sourceIds.has(id)) errors.push(`invalid evidence reference ${id}`);
  }
  if (checkLinks && product) {
    const file = join(OUT, product.company_id, `${product.id}.md`);
    for (const [, href] of markdown.matchAll(/\]\(([^)]+)\)/g)) {
      if (TEST_EXTERNAL_SCHEMES.test(href) || href.startsWith('x-') || href.startsWith('//')) continue;
      if (strictInternalLinks && !existsSync(resolve(dirname(file), href.split('#')[0]))) errors.push(`broken internal link ${href}`);
    }
  }
  return { errors: [...new Set(errors)], warnings: [] };
}

export function compileProductSkill({ product, company, dossierText, reaReport, reaEvidence, landscape }) {
  const research = dossier(dossierText);
  const capture = reaData(reaReport, reaEvidence);
  const sources = evidence(product, research, capture);
  const errors = checkInputs(product, research, capture, landscape, sources);
  if (errors.length) return { markdown: null, report: { productId: product?.id, status: 'failed', errors, missingResearch: [] } };
  const caps = capabilities(product, research, landscape);
  const markdown = renderSkill({ product, company, research, capture, landscape, caps, sources });
  const validation = validateSkillText(markdown, { product, knownEvidenceIds: new Set(sources.map((x) => x.id).filter(Boolean)) });
  const missingResearch = [];
  if (!research.fm) missingResearch.push('No valid dossier/frontmatter.');
  if (!caps.length) missingResearch.push('No structured capabilities.');
  if (!(product.evidence?.length || research.fm?.evidence?.length)) missingResearch.push('No claim-level evidence records.');
  if (product.research_status !== 'researched') missingResearch.push(`research_status is ${product.research_status || 'unknown'}, not researched.`);
  if (!capture) missingResearch.push('No public REA capture.');
  if (research.body.trim()) missingResearch.push('Dossier prose is preserved as notes but not independently claim-verified.');
  const unlinked = caps.filter((cap) => !cap.evidence_ids.length).length;
  if (unlinked) missingResearch.push(`${unlinked} capability lead(s) have no evidence references.`);
  return {
    markdown,
    report: {
      productId: product.id,
      status: validation.errors.length ? 'failed' : missingResearch.length ? 'generated_with_gaps' : 'generated',
      errors: validation.errors,
      missingResearch,
      counts: { capabilities: caps.length, requirements: caps.length, tests: caps.length, sources: sources.length, verifiedSources: sources.filter((x) => x.classification === 'VERIFIED').length },
      inputs: { researchStatus: product.research_status, dossier: Boolean(research.fm), reaCapture: Boolean(capture), alternatives: landscape.alternatives?.length || 0 },
      semanticAudit: { status: 'not_run', reason: 'No semantic reviewer configured; deterministic checks do not require an LLM.' },
    },
  };
}

export function compileFromRepository(productId, { repositoryRoot = ROOT } = {}) {
  const products = jsonl(join(repositoryRoot, 'catalog', 'products.jsonl'));
  const product = products.find((item) => item.id === productId);
  if (!product) return { markdown: null, report: { productId, status: 'failed', errors: [`unknown product ID ${productId}`], missingResearch: [] } };
  const companies = JSON.parse(readFileSync(join(repositoryRoot, 'catalog', 'companies.json'), 'utf8'));
  const landscape = LANDSCAPE.find((item) => item.id === productId);
  const dossierPath = join(repositoryRoot, 'research', 'companies', product.company_id, 'products', `${product.id}.md`);
  const reaPath = join(repositoryRoot, 'catalog', 'rea', product.company_id, `${product.id}.md`);
  const rawPath = join(repositoryRoot, 'catalog', 'rea', 'evidence', `${product.id}.json`);
  const result = compileProductSkill({ product, company: companies[product.company_id]?.name || product.company_id, dossierText: optional(dossierPath) || '', reaReport: optional(reaPath), reaEvidence: optional(rawPath, true), landscape });
  result.report.inputs = { ...(result.report.inputs || {}), dossierPath: relative(repositoryRoot, dossierPath), reaPath: existsSync(reaPath) ? relative(repositoryRoot, reaPath) : null };
  return result;
}
export function writeProductSkill(productId, outputPath = null, { repositoryRoot = ROOT, defaultOutputPath = join(OUT, '{company_id}', '{product_id}.md') } = {}) {
  const result = compileFromRepository(productId, { repositoryRoot });
  if (!result.markdown) return result;
  const product = jsonl(join(repositoryRoot, 'catalog', 'products.jsonl')).find((item) => item.id === productId);
  const defaultPath = defaultOutputPath.replaceAll('{company_id}', product.company_id).replaceAll('{product_id}', product.id);
  const target = resolve(outputPath || defaultPath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, result.markdown, 'utf8');
  const relativeTarget = relative(repositoryRoot, target);
  result.report.outputPath = relativeTarget === '..' || relativeTarget.startsWith(`..${sep}`) ? target : relativeTarget || target;
  return result;
}
export function validateRepositorySkill(productId) {
  const product = jsonl(join(ROOT, 'catalog', 'products.jsonl')).find((item) => item.id === productId);
  if (!product) return { productId, status: 'failed', errors: [`unknown product ID ${productId}`], warnings: [] };
  const path = join(OUT, product.company_id, `${product.id}.md`);
  const current = optional(path);
  if (!current) return { productId, status: 'failed', errors: [`missing canonical skill ${relative(ROOT, path)}`], warnings: [] };
  const fresh = compileFromRepository(productId);
  const validation = validateSkillText(current, { product, checkLinks: true, strictInternalLinks: true });
  if (fresh.markdown !== current) validation.errors.push('generated output drift; regenerate skill');
  return { productId, path: relative(ROOT, path), status: validation.errors.length ? 'failed' : 'valid', ...validation };
}
export function productIds() { return jsonl(join(ROOT, 'catalog', 'products.jsonl')).map((x) => x.id); }
export function companyProductIds(companyId) { return jsonl(join(ROOT, 'catalog', 'products.jsonl')).filter((x) => x.company_id === companyId).map((x) => x.id); }
export function coverageReport() {
  const byStatus = {};
  const gaps = [];
  for (const productId of productIds()) {
    const result = compileFromRepository(productId).report;
    byStatus[result.status] = (byStatus[result.status] || 0) + 1;
    if (result.status !== 'generated') gaps.push({ productId, missingResearch: result.missingResearch || [], errors: result.errors || [] });
  }
  return { total: Object.values(byStatus).reduce((sum, count) => sum + count, 0), byStatus, complete: byStatus.generated || 0, generatedWithGaps: byStatus.generated_with_gaps || 0, failed: byStatus.failed || 0, gaps };
}
