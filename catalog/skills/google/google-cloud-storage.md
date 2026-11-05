---
name: google-cloud-storage
description: "Evidence-aware build skill for Google Cloud Storage (google-cloud-storage); investigate, assess reuse, implement scoped behavior and verify."
---

# Google Cloud Storage — implementation skill (`google-cloud-storage`)

> **Research status:** researched. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Google Cloud Storage**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Google Cloud Storage** (`google-cloud-storage`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

**Same file, three ways to get it:** download or copy `catalog/skills/google/google-cloud-storage.md` from the catalog page, or run `npx rea-faang google-cloud-storage --out ./google-cloud-storage.md`, `npx rea-faang skills generate google-cloud-storage` or `npx rea-faang build agent-kit google-cloud-storage --out ./google-cloud-storage-agent`. All produce this exact Markdown from the same compiler; no hand-edited variant exists.

## Operating procedure — from authorized observation to a working implementation

This skill is an execution brief, not a description. You are the consuming agent: you run it in the user’s own project and deliver an independent implementation there. Do not add the product to the REA FAANG catalog, do not edit the catalog repository, and do not ship the product inside it.

Workflow: **inputs → authorized REA → evidence → capabilities/workflows/states/limits/unknowns → foundation decision → plan → build in the consumer project → verify and report.** Every step produces an artifact; a later step may not silently fill a gap left by an earlier one.

### Inputs you must confirm before acting

| Input | Value for this product | Source of truth |
|---|---|---|
| Product identity | Google Cloud Storage / `google-cloud-storage` | `catalog/products.jsonl` |
| Official product URL | [https://cloud.google.com/storage](https://cloud.google.com/storage) | Catalog record; re-check it resolves and is first-party |
| Official documentation | [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction) | Catalog record |
| Research dossier | `npx rea-faang research dossier google-cloud-storage` | `research/companies/google/products/google-cloud-storage.md` |
| REA report | `catalog/rea/google/google-cloud-storage.md` (captured 2026-11-03T01:37:43.906Z, status captured) | Catalog evidence |
| REA raw evidence | `catalog/rea/evidence/google-cloud-storage.json` (`ev_1ec3cda5d85a06aa90cf782fb834b1a0a8e7105c17d6bb2055f2fbd87260c940`) | Catalog evidence |
| Alternative candidates | 2 candidate(s) recorded in section 9 | Curated landscape |
| User scope | Requested product area, platforms, users and non-goals | The user; ask when the answer changes the deliverable |
| Consumer project | Absolute path, stack, conventions, test commands, deployment target | The user’s repository, read before writing |
| Authorization | Public surfaces and the user’s own project only | Clean-room boundary in section 14 |

### Step 1 — confirm identity and authorization

Run `npx rea-faang products show google-cloud-storage --format json` and `npx rea-faang research dossier google-cloud-storage` and reconcile them with the user’s request. Confirm the product identity, the exact surface under analysis, the user’s authorization for that surface and the exclusion list. If authorization or identity is unclear, stop and ask; do not substitute inference.

### Step 2 — run the Reverse Engineer Anything framework

REA lives at <https://github.com/morluto/rea>. Use the framework’s own routing: browser surface → browser-scenario capture; supplied JavaScript/Electron/ASAR package → package analysis; native/mobile/firmware artifact → inventory then focused inspection; complete source repository with no shipped artifact question → ordinary repository analysis instead of REA.

**Tools that actually exist** (do not assume any of them are installed, and do not invent command names):

- **REA MCP tools**, when registered in your client: use the registered tool that matches the route above. List the available tools first; the catalog does not rename or wrap them.
- **REA CLI fallback**, only for an authorized local JavaScript tree or ASAR: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`.
- **Browser surface, as recorded for this product:** provider `rea-playwright-browser-scenario v1`, target [https://cloud.google.com/storage](https://cloud.google.com/storage), captured 2026-11-03T01:37:43.906Z, evidence `ev_1ec3cda5d85a06aa90cf782fb834b1a0a8e7105c17d6bb2055f2fbd87260c940`. Reproduce it with the REA browser-scenario tool when registered; if the capability is unavailable, record the capture as blocked instead of substituting screenshots or guesses.
- If a required capability is unavailable, record the blocker and continue with supported evidence. Never install unrelated engines merely because a tool is missing.

**Recorded for every action:** target URL/artifact and version or commit, tool and version, start state, exact actions, timestamps, evidence IDs, and what was observed versus inferred. Never bypass authentication, access controls, rate limits or licensing; never decompile protected binaries or redistribute protected assets.

### Step 3 — write the evidence ledger

One row per claim in `FINDINGS.md`, using the classifications in section 14: `VERIFIED` (observed or documented within the exact scope), `CORROBORATED` (multiple compatible sources), `INFERRED` (reasoned, not established), `PROPOSED` (independent design or candidate), `UNKNOWN`, `CONFLICTED`. A URL is not evidence; a claim needs a location in the source, an access date and its scope limit.

### Step 4 — extract capabilities, workflows, states, limits and unknowns

Map findings onto the capability leads and feature IDs in sections 2, 3 and 5, and record, for each: actor and permissions, entry point, inputs/outputs, preconditions, intermediate and persisted state, integrations, success, cancellation, failure and recovery, platform/version limits, and the unknowns that remain. Unchanged from the catalog: `GOOGLE-CLOUD-STORAGE-CAP-F82C4684`, `GOOGLE-CLOUD-STORAGE-CAP-5746B558`, `GOOGLE-CLOUD-STORAGE-CAP-F0876CCC`, `GOOGLE-CLOUD-STORAGE-CAP-B93C6B74`.

### Step 5 — decide the open-source foundation (mandatory gate)

Do not start building until section 9 records an explicit verdict: **REUSE**, **INTEGRATE**, **EXTEND**, **BUILD** or **INVESTIGATE MORE**. The verdict names the candidate (or none) and the evidence behind it. A curated candidate is a lead, never an approved foundation.

### Step 6 — turn findings into a plan

`PLAN.md` must carry: the agreed scope and non-goals; requirement IDs with their evidence/confidence; the foundation verdict and its obligations; architecture and data model labelled PROPOSED where they are your design; API/protocol contracts with authorization, errors, limits and idempotency; the test plan per requirement; and the explicit exclusion/unknown list. Anything still UNKNOWN stays blocked rather than guessed.

### Step 7 — build in the consumer project

Implement in the user’s repository with its stack, conventions and tests. Write original code and assets; do not copy proprietary source, protected assets, branding, copy text or assets you are not licensed to use. Match observable behavior and user-facing outcomes within the agreed scope — a functional equivalent, not a replica, and never a parity claim.

### Step 8 — verify and report

Run the project’s real checks and capture exit codes. Exercise the primary workflow plus the relevant failure, permission, cancellation and recovery paths through the interface the user will use. Report requirement → code → test evidence, everything partial, excluded or unknown, and every check not run. Do not weaken, skip or delete a failing check to make a result look green.

### Outputs expected

| Output | Where | Required content |
|---|---|---|
| Evidence ledger | `FINDINGS.md` in the consumer project | One row per claim: evidence ID, scope, action, classification, source location, access date, limitation |
| Capability and workflow map | `FINDINGS.md` | Evidenced capabilities, complete/partial workflows, states, permissions, failures and unknowns |
| Foundation decision record | `DECISION.md` in the consumer project | Candidate audit, coverage comparison and one explicit verdict from section 9 |
| Implementation plan | `PLAN.md` in the consumer project | Scope, requirement IDs, chosen foundation, architecture, proposed contracts, test plan, exclusions |
| Implementation | The consumer project’s own source tree | Original code and assets in the project’s conventions; no copied proprietary source |
| Tests | The consumer project’s test suite | Deterministic tests per implemented requirement plus relevant failure and permission paths |
| Report | `REPORT.md` in the consumer project | Requirement → code → test evidence, commands with real exit codes, partial/excluded/unknown items, checks not run |

### Stop conditions

- Authorization, target identity or user scope is unclear → stop and ask.
- A capability, contract or data structure is still UNKNOWN → keep it blocked; do not infer it from category, marketing or competitor behavior.
- No foundation verdict is recorded → return to section 9; do not begin implementation.
- A required tool or surface is unavailable → record the blocker and report the reduced scope.


## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Google Cloud Storage** / `google-cloud-storage` | Product catalog |
| Company / category | Google / `storage` / `object-storage`, `cloud-storage`, `backup`, `data-lake` | Product catalog |
| Official website / docs | [https://cloud.google.com/storage](https://cloud.google.com/storage) / [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction) | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **storage** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `GOOGLE-CLOUD-STORAGE-CAP-F82C4684` | Managed bucket/object storage and resource hierarchy are documented. | VERIFIED | `ev-google-cloud-storage-identity`, `ev-google-cloud-storage-buckets` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-CLOUD-STORAGE-CAP-5746B558` | Locations, storage classes and bucket configuration are documented. | VERIFIED | `ev-google-cloud-storage-classes`, `ev-google-cloud-storage-buckets` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-CLOUD-STORAGE-CAP-F0876CCC` | JSON/XML APIs, gcloud, libraries, gRPC and Terraform surfaces are documented. | VERIFIED | `ev-google-cloud-storage-api`, `ev-google-cloud-storage-apis` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `GOOGLE-CLOUD-STORAGE-CAP-B93C6B74` | Open-source systems cover object-storage protocols, but Google-managed operations, IAM ecosystem and provider controls are not equivalent. | VERIFIED | `ev-google-cloud-storage-apis` | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: View all features`, `button: Solution Prompt Search Button`, `button: Toggle all`, `button: Does Cloud Storage work for personal photos, videos, and files? `, `button: How does Cloud Storage differ from other types of storage? `, `button: Search`, `link: Cloud Storage`, `link: Features`, `link: Options`, `link: How It Works`, `link: Common Uses`, `link: Backups and archives`, `link: Media content storage and delivery`, `link: Data lakes and big data analytics`, `link: Machine learning and AI`, `link: Host a website`, `link: Generate a solution`, `link: Pricing`, `link: Business Case`, `link: FAQ`, `link: Release notes`, `link: Documentation`, `link: Resources and guides`, `link: Training`, `link: 85% of enterprise data is unstructured. Don't let it become dark data. Watch the fireside chat to learn how smart storage instantly becomes your AI foundation.`, `link: Try Cloud Storage free`, `link: View documentation`, `link: personal, team, and block storage options`, `link: Automatically transition to lower-cost storage classes`, `link: Standard, nearline, coldline, and archive storage options`, `link: Fast, low-cost, highly durable archive and backup storage`, `link: Cloud Storage Cloud Storage in a minute 1 min video`, `link: Storage Intelligence`, `link: Insights Datasets`, `link: Batch Operations`, `link: Bucket Relocation`, `link: ESG logo Discover how Google Cloud's smart storage is getting customers ready for the AI era. Read ESG’s Showcase report.`, `link: Rapid Cache`, `link: Cloud Identity and Access Management (IAM)`, `link: data warehouse`, `link: open source analytics`, `link: machine learning (ML) models`, `link: Data Agent Kit`, `link: Model Context Protocol`, `link: BigQuery magnifying glass Start querying Cloud Storage data with BigQuery`, `link: Object Lifecycle Management (OLM)`, `link: Autoclass`, `link: IDC logo IDC projects that Cloud Storage customers can realize average annual benefits worth $86,500 per petabyte. Read report.`, `link: Standard storage`, `link: Nearline storage`, `link: Coldline storage`, `link: Archive storage`, `link: storage classes`, `link: What is Cloud Storage? (2:05)`, `link: Learn more about nearline storage`, `link: Diagram`, `link: Learn more about geo-redundant storage`, `link: Learn how to set up a Media CDN, for planet-scale media delivery`, `link: Learn more about data lakes using Cloud Storage`, `link: Run Apache Hadoop or Apache Spark on data with data connector`, `link: Deploy in console`, `link: AI summarization solution`, `link: Watch how to store data for machine learning`, `link: Start using Gemini platform with your stored data`, `link: Nuro powers its autonomous vehicles' rapid decision-making with Cloud Storage`, `link: Dynamic website deployed in console`, `textbox: Solution Prompt Search Text`, `link: Gemini`, `link: pricing details`, `link: network product`, `link: View all pricing details`, `link: Estimate your costs`, `link: Request a quote`, `link: Get started for free`, `link: Contact sales`, `link: Read guide`, `link: Watch video`, `link: Read customer story`, `link: mixpanel logo Mixpanel maintains excellent performance and reliability while keeping its engineers focused on innovation`, `link: spotify logo Robust building blocks that exist on top of core data storage, computing, and network services help take away much of the backend hassle on the way to new product creation`, `link: redsalud logo RedSalud meets telemedicine challenges by implementing SAP for Google Cloud`, `link: Target`, `link: Carrefour`, `link: KeyBank`, `link: PayPal`, `link: Commerzbank`, `link: Cruise`, `link: Nuro`, `link: visit Google One`, `link: block storage, data transfer, and file storage`, `link: Billing and troubleshooting`, `link: Ask the community`, `link: Google Cloud`, `link: Overview`, `link: Solutions`, `link: Products`, `link: Resources`, `combobox: Search`, `link: Docs`, `link: Support`, `link: Sign in`, `link: Choosing Google Cloud`, `link: Trust and security`, `link: Modern Infrastructure Cloud`, `link: Multicloud`, `link: Global infrastructure`, `link: Locations`, `link: Customers and case studies`, `link: Analyst reports`, `link: Whitepapers`, `link: Blog`, `link: Google Cloud pricing`, `link: Google Workspace pricing`, `link: See all products`, `link: Infrastructure modernization`, `link: Databases`, `link: Application modernization`, `link: Smart analytics`, `link: Artificial Intelligence`, `link: Security`, `link: Productivity & work transformation`, `link: Industry solutions`, `link: DevOps solutions`, `link: Small business solutions`, `link: See all solutions`, `link: Google Cloud Affiliate Program`, `link: Google Cloud documentation`, `link: Google Cloud quickstarts`, `link: Google Cloud Marketplace`, `link: Learn about cloud computing`, `link: Code samples`, `link: Cloud Architecture Center`, `link: Builders Hub`, `link: Certifications`, `link: Google for Developers`, `link: Google Cloud for Startups`, `link: System status`, `link: Release Notes`, `link: Find a Partner`, `link: Become a Partner`, `link: Events`, `link: Podcasts`, `link: Developer Center`, `link: Press Corner`, `link: Google Cloud on YouTube`, `link: Google Cloud Tech on YouTube`, `link: Follow on X`, `link: Join User Research`, `link: We're hiring. Join Google Cloud!`, `link: Community forums`, `link: About Google`, `link: Privacy`, `link: Site terms`, `link: Google Cloud terms`, `link: Subscribe`, `combobox: Language Selector`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Managed bucket/object storage and resource hierarchy are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Locations, storage classes and bucket configuration are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **JSON/XML APIs, gcloud, libraries, gRPC and Terraform surfaces are documented.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Open-source systems cover object-storage protocols, but Google-managed operations, IAM ecosystem and provider controls are not equivalent.:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Page Contents`, `complementary: Product highlights 1`, `complementary: Related content 1`, `banner`, `navigation`, `contentinfo`, `navigation: Footer Links`, `navigation: Utility links` | Full IA/routes/authenticated navigation |
| Views/headings | `Cloud Storage`, `Object storage for companies of all sizes`, `Product highlights`, `Take action with Storage Intelligence`, `Accelerate your data access`, `Object- and bucket-level permissions`, `Leading analytics and ML/AI tools`, `Automatic storage class transitions`, `To use Cloud Storage, you’ll first create a bucket, a basic container that holds your data in Cloud Storage. You’ll then upload objects into that bucket—where you can download, share, and manage objects.`, `Backups and archives`, `Tutorials, quickstarts, & labs`, `Use Cloud Storage for backup, archives, and recovery`, `Media content storage and delivery`, `Learning resources`, `Store data to stream audio or video`, `Data lakes and big data analytics`, `Create a data lake for analytics`, `Machine learning and AI`, `Deploy an AI summarization solution in the Google Cloud console`, `Host a website`, `Build, host, and run dynamic websites in the Google Cloud console`, `Pricing calculator`, `Custom quote`, `Start your proof of concept`, `New customers get $300 in free credits to try Cloud Storage and other Google Cloud products` | Results and subsequent views |
| Controls | `button: View all features`, `button: Solution Prompt Search Button`, `button: Toggle all`, `button: Does Cloud Storage work for personal photos, videos, and files? `, `button: How does Cloud Storage differ from other types of storage? `, `button: Search`, `link: Cloud Storage`, `link: Features`, `link: Options`, `link: How It Works`, `link: Common Uses`, `link: Backups and archives`, `link: Media content storage and delivery`, `link: Data lakes and big data analytics`, `link: Machine learning and AI`, `link: Host a website`, `link: Generate a solution`, `link: Pricing`, `link: Business Case`, `link: FAQ`, `link: Release notes`, `link: Documentation`, `link: Resources and guides`, `link: Training`, `link: 85% of enterprise data is unstructured. Don't let it become dark data. Watch the fireside chat to learn how smart storage instantly becomes your AI foundation.`, `link: Try Cloud Storage free`, `link: View documentation`, `link: personal, team, and block storage options`, `link: Automatically transition to lower-cost storage classes`, `link: Standard, nearline, coldline, and archive storage options`, `link: Fast, low-cost, highly durable archive and backup storage`, `link: Cloud Storage Cloud Storage in a minute 1 min video`, `link: Storage Intelligence`, `link: Insights Datasets`, `link: Batch Operations`, `link: Bucket Relocation`, `link: ESG logo Discover how Google Cloud's smart storage is getting customers ready for the AI era. Read ESG’s Showcase report.`, `link: Rapid Cache`, `link: Cloud Identity and Access Management (IAM)`, `link: data warehouse`, `link: open source analytics`, `link: machine learning (ML) models`, `link: Data Agent Kit`, `link: Model Context Protocol`, `link: BigQuery magnifying glass Start querying Cloud Storage data with BigQuery`, `link: Object Lifecycle Management (OLM)`, `link: Autoclass`, `link: IDC logo IDC projects that Cloud Storage customers can realize average annual benefits worth $86,500 per petabyte. Read report.`, `link: Standard storage`, `link: Nearline storage`, `link: Coldline storage`, `link: Archive storage`, `link: storage classes`, `link: What is Cloud Storage? (2:05)`, `link: Learn more about nearline storage`, `link: Diagram`, `link: Learn more about geo-redundant storage`, `link: Learn how to set up a Media CDN, for planet-scale media delivery`, `link: Learn more about data lakes using Cloud Storage`, `link: Run Apache Hadoop or Apache Spark on data with data connector`, `link: Deploy in console`, `link: AI summarization solution`, `link: Watch how to store data for machine learning`, `link: Start using Gemini platform with your stored data`, `link: Nuro powers its autonomous vehicles' rapid decision-making with Cloud Storage`, `link: Dynamic website deployed in console`, `textbox: Solution Prompt Search Text`, `link: Gemini`, `link: pricing details`, `link: network product`, `link: View all pricing details`, `link: Estimate your costs`, `link: Request a quote`, `link: Get started for free`, `link: Contact sales`, `link: Read guide`, `link: Watch video`, `link: Read customer story`, `link: mixpanel logo Mixpanel maintains excellent performance and reliability while keeping its engineers focused on innovation`, `link: spotify logo Robust building blocks that exist on top of core data storage, computing, and network services help take away much of the backend hassle on the way to new product creation`, `link: redsalud logo RedSalud meets telemedicine challenges by implementing SAP for Google Cloud`, `link: Target`, `link: Carrefour`, `link: KeyBank`, `link: PayPal`, `link: Commerzbank`, `link: Cruise`, `link: Nuro`, `link: visit Google One`, `link: block storage, data transfer, and file storage`, `link: Billing and troubleshooting`, `link: Ask the community`, `link: Google Cloud`, `link: Overview`, `link: Solutions`, `link: Products`, `link: Resources`, `combobox: Search`, `link: Docs`, `link: Support`, `link: Sign in`, `link: Choosing Google Cloud`, `link: Trust and security`, `link: Modern Infrastructure Cloud`, `link: Multicloud`, `link: Global infrastructure`, `link: Locations`, `link: Customers and case studies`, `link: Analyst reports`, `link: Whitepapers`, `link: Blog`, `link: Google Cloud pricing`, `link: Google Workspace pricing`, `link: See all products`, `link: Infrastructure modernization`, `link: Databases`, `link: Application modernization`, `link: Smart analytics`, `link: Artificial Intelligence`, `link: Security`, `link: Productivity & work transformation`, `link: Industry solutions`, `link: DevOps solutions`, `link: Small business solutions`, `link: See all solutions`, `link: Google Cloud Affiliate Program`, `link: Google Cloud documentation`, `link: Google Cloud quickstarts`, `link: Google Cloud Marketplace`, `link: Learn about cloud computing`, `link: Code samples`, `link: Cloud Architecture Center`, `link: Builders Hub`, `link: Certifications`, `link: Google for Developers`, `link: Google Cloud for Startups`, `link: System status`, `link: Release Notes`, `link: Find a Partner`, `link: Become a Partner`, `link: Events`, `link: Podcasts`, `link: Developer Center`, `link: Press Corner`, `link: Google Cloud on YouTube`, `link: Google Cloud Tech on YouTube`, `link: Follow on X`, `link: Join User Research`, `link: We're hiring. Join Google Cloud!`, `link: Community forums`, `link: About Google`, `link: Privacy`, `link: Site terms`, `link: Google Cloud terms`, `link: Subscribe`, `combobox: Language Selector` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Cloud Storage](/storage#object-storage-for-companies-of-all-sizes)`, `[Features](/storage#features)`, `[Options](/storage#storage-options)`, `[How It Works](/storage#how-it-works)`, `[Common Uses](/storage#common-uses)`, `[Backups and archives](/storage#backups-and-archives)`, `[Media content storage and delivery](/storage#media-content-storage-and-delivery)`, `[Data lakes and big data analytics](/storage#data-lakes-and-big-data-analytics)`, `[Machine learning and AI](/storage#machine-learning-and-ai)`, `[Host a website](/storage#host-a-website)`, `[Generate a solution](/storage#what-problem-are-you-trying-to-solve)`, `[Pricing](/storage#pricing)`, `[Business Case](/storage#business-case)`, `[FAQ](/storage#section-1)`, `[Release notes](https://cloud.google.com/storage/docs/release-notes)`, `[Documentation](https://docs.cloud.google.com/storage/docs/introduction)`, `[Resources and guides](https://cloud.google.com/architecture)`, `[Training](https://www.cloudskillsboost.google/catalog?keywords=Storage&locale=)`, `[85% of enterprise data is unstructured. Don't let it become dark data. Watch the fireside chat to learn how smart storage instantly becomes your AI foundation.](https://www.youtube.com/watch?v=yF_V0TYwSyE)`, `[Try Cloud Storage free](https://console.cloud.google.com/freetrial/?redirectPath=/storage)`, `[View documentation](https://docs.cloud.google.com/storage/docs/introduction)`, `[personal, team, and block storage options](https://cloud.google.com/products/storage)`, `[Automatically transition to lower-cost storage classes](/storage#features)`, `[Standard, nearline, coldline, and archive storage options](/storage#options)`, `[Fast, low-cost, highly durable archive and backup storage](/storage#common-uses)`, `[Cloud Storage Cloud Storage in a minute 1 min video](https://www.youtube.com/watch?v=wNOs3LlsH6k)`, `[Storage Intelligence](https://cloud.google.com/storage/docs/storage-intelligence/overview)`, `[Insights Datasets](https://cloud.google.com/storage/docs/insights/datasets)`, `[Batch Operations](https://cloud.google.com/storage/docs/batch-operations/overview)`, `[Bucket Relocation](https://cloud.google.com/storage/docs/bucket-relocation/overview)`, `[ESG logo Discover how Google Cloud's smart storage is getting customers ready for the AI era. Read ESG’s Showcase report.](https://services.google.com/fh/files/misc/google_cloud_smart_storage_esg.pdf)`, `[Rapid Cache](https://docs.cloud.google.com/storage/docs/rapid/rapid-cache)`, `[Cloud Identity and Access Management (IAM)](https://cloud.google.com/storage/docs/access-control/using-iam-permissions)`, `[data warehouse](https://cloud.google.com/bigquery)`, `[open source analytics](https://cloud.google.com/dataproc)`, `[machine learning (ML) models](https://cloud.google.com/products/gemini-enterprise-agent-platform)`, `[Data Agent Kit](https://docs.cloud.google.com/data-cloud-extension)`, `[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)`, `[BigQuery magnifying glass Start querying Cloud Storage data with BigQuery](https://cloud.google.com/bigquery/docs/external-data-cloud-storage)`, `[Object Lifecycle Management (OLM)](https://cloud.google.com/storage/docs/lifecycle)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-F82C4684 — Managed bucket/object storage and resource hierarchy are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-cloud-storage-identity`, `ev-google-cloud-storage-buckets`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-F82C4684`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-CLOUD-STORAGE-CAP-F82C4684` → `REQ-FUNC-F82C4684` → `TEST-FUNC-F82C4684`.

### REQ-FUNC-5746B558 — Locations, storage classes and bucket configuration are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-cloud-storage-classes`, `ev-google-cloud-storage-buckets`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-5746B558`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-CLOUD-STORAGE-CAP-5746B558` → `REQ-FUNC-5746B558` → `TEST-FUNC-5746B558`.

### REQ-FUNC-F0876CCC — JSON/XML APIs, gcloud, libraries, gRPC and Terraform surfaces are documented.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-cloud-storage-api`, `ev-google-cloud-storage-apis`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-F0876CCC`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-CLOUD-STORAGE-CAP-F0876CCC` → `REQ-FUNC-F0876CCC` → `TEST-FUNC-F0876CCC`.

### REQ-FUNC-B93C6B74 — Open-source systems cover object-storage protocols, but Google-managed operations, IAM ecosystem and provider controls are not equivalent.
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** VERIFIED; `ev-google-cloud-storage-apis`.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-B93C6B74`; fixture and expected output must be specified from evidence.
- **Trace:** `GOOGLE-CLOUD-STORAGE-CAP-B93C6B74` → `REQ-FUNC-B93C6B74` → `TEST-FUNC-B93C6B74`.

Keep original behavior VERIFIED/CORROBORATED distinct from inference and independent decisions INFERRED/PROPOSED. UNKNOWN stays unknown; contradictory evidence stays CONFLICTED. These requirements are blocked planning placeholders until evidence, user scope, measurable criteria and test oracles are recorded.

## 6. Data model and state

**Original product structures:** UNKNOWN. No structured evidence establishes fields/types, IDs, ownership/permissions, lifecycle, persistence, constraints, deletion/retention, import/export, migration, concurrency or indexes.

**Independent model (PROPOSED):** define only state needed for the researched first slice; specify IDs, validation, owners, state transitions, concurrency, deletion/export/retention and migration. Do not describe it as the target’s model.

## 7. APIs, integrations and protocols

**Original contracts:** none verified in structured evidence. Dossier prose does not establish supported APIs. Do not invent target endpoints, schemas, auth, events or limits. If the independent implementation needs an interface, define a versioned contract labelled PROPOSED, including request/response, authorization, errors, limits, timeouts, retries and idempotency.

## 8. Architecture and technical design

**PROPOSED independent design; target internals unknown.** Use only components required by verified scope.

```mermaid
flowchart LR
  UI[Interface] --> APP[Application and domain boundary]
  APP --> DB[(Persistence if needed)]
  APP --> EXT[Authorized integrations if needed]
```

Separate interface/domain/persistence/integration boundaries. Enforce access at trusted boundaries, isolate tenants where relevant, and define timeout/partial failure behavior. Add queues/caches/scaling/deployment components only when requirements justify them. Record configuration, secrets, data flow, recovery, observability and deployment assumptions in the implementation project.

## 9. Open-source foundation and dependency strategy

**Mandatory decision gate.** Identify real candidates, compare them against the findings from section 14, and record one explicit verdict before any implementation work. A curated candidate is a research lead; nothing here has been cloned, executed, license-audited or security-reviewed by the catalog compiler.

### 9.1 Candidate register

| Candidate | Repository | License | Claimed coverage (unverified) | Limitations | Maintenance | Compatibility | Verdict |
|---|---|---|---|---|---|---|---|
| [MinIO](https://min.io/) | Not recorded; verify the canonical repository | AGPL-3.0 (unverified) | S3-compatible object storage, self-hostable. | No limitation recorded | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |
| [Ceph RADOS Gateway](https://ceph.io/) | Not recorded; verify the canonical repository | LGPL-2.1 (unverified) | Distributed object store with an S3 API. | No limitation recorded | Not recorded — verify last release, commit activity and open issues | Not recorded — verify language, runtime, deployment and integration surface | **INVESTIGATE MORE** |

Repository, license, maintenance and compatibility are catalog claims until you check them. Re-verify each against the exact version you would adopt; a README, a star count or this table is not proof.

### 9.2 Comparison against the REA findings

Map every capability lead and requirement from sections 2 and 5 to what the candidate actually implements, and say what evidence supports the mapping. Where the catalog has no verified behavior, the comparison is a research task, not a conclusion:

| Requirement / capability lead | Candidate coverage | Evidence for the claim | Gap that remains |
|---|---|---|---|
| `GOOGLE-CLOUD-STORAGE-CAP-F82C4684` — Managed bucket/object storage and resource hierarchy are documented. | Not verified against MinIO | None yet; compare with `ev_1ec3cda5d85a06aa90cf782fb834b1a0a8e7105c17d6bb2055f2fbd87260c940` | Candidate code path and tests must be inspected |
| `GOOGLE-CLOUD-STORAGE-CAP-5746B558` — Locations, storage classes and bucket configuration are documented. | Not verified against MinIO | None yet; compare with `ev_1ec3cda5d85a06aa90cf782fb834b1a0a8e7105c17d6bb2055f2fbd87260c940` | Candidate code path and tests must be inspected |
| `GOOGLE-CLOUD-STORAGE-CAP-F0876CCC` — JSON/XML APIs, gcloud, libraries, gRPC and Terraform surfaces are documented. | Not verified against MinIO | None yet; compare with `ev_1ec3cda5d85a06aa90cf782fb834b1a0a8e7105c17d6bb2055f2fbd87260c940` | Candidate code path and tests must be inspected |
| `GOOGLE-CLOUD-STORAGE-CAP-B93C6B74` — Open-source systems cover object-storage protocols, but Google-managed operations, IAM ecosystem and provider controls are not equivalent. | Not verified against MinIO | None yet; compare with `ev_1ec3cda5d85a06aa90cf782fb834b1a0a8e7105c17d6bb2055f2fbd87260c940` | Candidate code path and tests must be inspected |

### 9.3 Decision

**Current verdict: INVESTIGATE MORE** — the first candidate to audit is **MinIO** (S3-compatible object storage, self-hostable.), and no candidate has been verified yet.

Provisional routing for this product, to be confirmed by that audit:

- If **MinIO** implements the core capability leads with a compatible license and maintainable code → **REUSE** it as the foundation.
- If it covers only part of the scope, or would need to run beside the user’s existing system → **INTEGRATE** it behind a defined boundary, or **EXTEND** it with original modules where its extension points allow it.
- If no candidate survives inspection → **BUILD** an independent implementation, and record which candidates failed and why.
- If the evidence is still insufficient → **INVESTIGATE MORE**, naming the exact question, source and check that would settle it.

### 9.4 What each verdict obliges

| Verdict | You must have | It commits you to |
|---|---|---|
| **REUSE** | The candidate implements the in-scope capability leads; license and dependencies checked against the user’s distribution model; version pinned; tests/CI reviewed | Adopt it as the foundation, keep its license notices, and document the upstream version and update path |
| **INTEGRATE** | A verified boundary: API/protocol, data ownership, failure and upgrade behavior, plus a license review of both sides | Run the candidate beside the user’s system through an explicit contract; test the boundary and its failure modes |
| **EXTEND** | Documented extension points, an upstream contribution or fork policy, and a migration path for local changes | Add original modules on top of the candidate; record what is upstream versus local and how it survives updates |
| **BUILD** | The candidates that were searched, inspected and rejected, with reasons; the evidenced scope; a test plan | Build independently with original code and assets, reusing only libraries whose licenses permit it |
| **INVESTIGATE MORE** | The exact open question, the source or tool that answers it, and the date by which it must be answered | Do not implement the affected scope yet; resolve or explicitly block it first |

**No verified alternative is a valid outcome**: mark the coverage UNKNOWN / PENDING, say what you searched and what you inspected, and let the verdict be INVESTIGATE MORE or BUILD. Absence of evidence in this catalog is never evidence of absence.


## 10. Security and privacy

No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.

Product-specific review: Verify tenant isolation, object access, integrity, retention, deletion and backup/restore. Do not claim compliance, privacy or security parity without scoped assessment.

## 11. Error handling and edge cases

These are test prompts, not target behavior assertions. Keep only relevant cases and derive expected behavior from evidence or label an independent decision PROPOSED.

- **EDGE-001:** Missing/malformed/oversized input. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-002:** Unauthorized or revoked action and tenant isolation where applicable. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-003:** Empty data/results and duplicate operations. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-004:** Concurrent updates or stale writes to mutable state. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-005:** Network timeout, throttling, external outage, retry and partial failure. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-006:** Cancellation/interruption during state change and restart recovery. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-007:** Corrupt/incompatible imported or persisted data; migration failure. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-008:** Expired credentials/session where applicable. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-009:** Interrupted transfer, checksum mismatch, deletion/restore conflict. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-F82C4684** → `REQ-FUNC-F82C4684`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-5746B558** → `REQ-FUNC-5746B558`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-F0876CCC** → `REQ-FUNC-F0876CCC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-B93C6B74** → `REQ-FUNC-B93C6B74`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

These are proposed deterministic implementation-test plans, not original-product observations. Compare the original only through separately authorized, repeatable public observation. A passing spec test does not establish parity.

## 13. Implementation roadmap

### Phase 1 — Foundation and dependencies

- **Tasks:** Inspect user project, stack, constraints, tests, candidate implementations and licenses.
- **Prerequisites:** Repository inspection and user scope.
- **Deliverables:** Project map, evidence ledger, reuse decision, bounded plan
- **Requirements:** Select after evidence review
- **Tests:** Clean setup/validation smoke test
- **Completion:** Clean setup and documented dependency/reuse decision.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 2 — Core domain behavior

- **Tasks:** Research then implement one useful vertical slice with explicit state, validation and permissions.
- **Prerequisites:** Phase 1 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-F82C4684, REQ-FUNC-5746B558, REQ-FUNC-F0876CCC, REQ-FUNC-B93C6B74
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-F82C4684, REQ-FUNC-5746B558, REQ-FUNC-F0876CCC, REQ-FUNC-B93C6B74
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** E2E acceptance checks via user-facing interface.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 4 — Integrations

- **Tasks:** Add only documented/authorized integrations; mock boundaries for offline routine tests.
- **Prerequisites:** Phase 3 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Contract and failure-injection tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 5 — Secondary capabilities

- **Tasks:** Implement remaining in-scope behavior by user priority and evidence.
- **Prerequisites:** Phase 4 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Trace: REQ-FUNC-F82C4684, REQ-FUNC-5746B558, REQ-FUNC-F0876CCC, REQ-FUNC-B93C6B74; document exclusions and unknowns.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 6 — Security and reliability

- **Tasks:** Review access, privacy, abuse, migration, backup, observability and recovery as applicable.
- **Prerequisites:** Phase 5 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Applicable security/recovery checks and risks recorded.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 7 — Verification and release

- **Tasks:** Run project checks; inspect behavior, accessibility, compatibility, license and docs.
- **Prerequisites:** Phase 6 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Reproducible result and transparent completion/gap report.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.


## 14. Evidence, uncertainty and exclusions

### Evidence index

| Source ID | Title / location | URL | Access date | Claim supported | Classification and limits |
|---|---|---|---|---|---|
| `ev-google-cloud-storage-identity` | Cloud Storage overview — Official documentation describes Cloud Storage as managed storage for unstructured data and explains projects, buckets, objects and folders. | [link](https://docs.cloud.google.com/storage/docs/introduction) | 2026-11-03T00:00:00Z | Cloud Storage is Google Cloud's scalable managed object-storage service using buckets and objects. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-cloud-storage-classes` | Storage classes — Official documentation describes Standard, Nearline, Coldline, Archive and additional storage classes, including lifecycle and pricing implications. | [link](https://docs.cloud.google.com/storage/docs/storage-classes) | 2026-11-03T00:00:00Z | Cloud Storage provides storage classes with different availability, duration and retrieval characteristics. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-cloud-storage-api` | Cloud Storage JSON API overview — Official documentation identifies the JSON API v1, resource operations, client-library compatibility and object/bucket request semantics. | [link](https://docs.cloud.google.com/storage/docs/json_api) | 2026-11-03T00:00:00Z | Cloud Storage exposes a JSON API for programmatic access to projects, buckets and objects. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-cloud-storage-buckets` | About Cloud Storage buckets — Official documentation describes buckets as object containers with configurable geographic location and access controls. | [link](https://docs.cloud.google.com/storage/docs/buckets) | 2026-11-03T00:00:00Z | Every Cloud Storage object resides in a bucket where location and access settings are configured. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `ev-google-cloud-storage-apis` | Cloud Storage APIs and reference — Official API documentation indexes IAM permissions, command-line interfaces, client libraries, service APIs and infrastructure tooling. | [link](https://docs.cloud.google.com/storage/docs/apis) | 2026-11-03T00:00:00Z | Cloud Storage provides console, gcloud, client library, REST/JSON, XML, gRPC and Terraform integration surfaces. | **VERIFIED** — Evidence status verified; inspect source and claim scope. |
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://cloud.google.com/storage) | 2026-11-03T00:00:00Z | Google Cloud Storage is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `SRC-DOCS` | Official documentation entry — No claim-level section recorded. | [link](https://docs.cloud.google.com/storage/docs/introduction) | 2026-11-03T00:00:00Z | Documentation entry-point URL is recorded. | **UNKNOWN** — Source is not fetched and URL alone establishes no behavior. |
| `SRC-OFFICIAL-1` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/storage/docs/introduction) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-2` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/storage/docs/storage-classes) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-3` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/storage/docs/json_api) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-4` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/storage/docs/buckets) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `SRC-OFFICIAL-5` | Additional official source lead — Claim/section not recorded. | [link](https://docs.cloud.google.com/storage/docs/apis) | Not recorded | Official source URL is listed in product record. | **UNKNOWN** — Source content is not fetched. |
| `ev_1ec3cda5d85a06aa90cf782fb834b1a0a8e7105c17d6bb2055f2fbd87260c940` | Google Cloud Storage Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://cloud.google.com/storage) | 2026-11-03T01:37:43.906Z | A dated unauthenticated snapshot exposed controls button: View all features, button: Solution Prompt Search Button, button: Toggle all, button: Does Cloud Storage work for personal photos, videos, and files? , button: How does Cloud Storage differ from other types of storage? , button: Search, link: Cloud Storage, link: Features, link: Options, link: How It Works, link: Common Uses, link: Backups and archives, link: Media content storage and delivery, link: Data lakes and big data analytics, link: Machine learning and AI, link: Host a website, link: Generate a solution, link: Pricing, link: Business Case, link: FAQ, link: Release notes, link: Documentation, link: Resources and guides, link: Training, link: 85% of enterprise data is unstructured. Don't let it become dark data. Watch the fireside chat to learn how smart storage instantly becomes your AI foundation., link: Try Cloud Storage free, link: View documentation, link: personal, team, and block storage options, link: Automatically transition to lower-cost storage classes, link: Standard, nearline, coldline, and archive storage options, link: Fast, low-cost, highly durable archive and backup storage, link: Cloud Storage Cloud Storage in a minute 1 min video, link: Storage Intelligence, link: Insights Datasets, link: Batch Operations, link: Bucket Relocation, link: ESG logo Discover how Google Cloud's smart storage is getting customers ready for the AI era. Read ESG’s Showcase report., link: Rapid Cache, link: Cloud Identity and Access Management (IAM), link: data warehouse, link: open source analytics, link: machine learning (ML) models, link: Data Agent Kit, link: Model Context Protocol, link: BigQuery magnifying glass Start querying Cloud Storage data with BigQuery, link: Object Lifecycle Management (OLM), link: Autoclass, link: IDC logo IDC projects that Cloud Storage customers can realize average annual benefits worth $86,500 per petabyte. Read report., link: Standard storage, link: Nearline storage, link: Coldline storage, link: Archive storage, link: storage classes, link: What is Cloud Storage? (2:05), link: Learn more about nearline storage, link: Diagram, link: Learn more about geo-redundant storage, link: Learn how to set up a Media CDN, for planet-scale media delivery, link: Learn more about data lakes using Cloud Storage, link: Run Apache Hadoop or Apache Spark on data with data connector, link: Deploy in console, link: AI summarization solution, link: Watch how to store data for machine learning, link: Start using Gemini platform with your stored data, link: Nuro powers its autonomous vehicles' rapid decision-making with Cloud Storage, link: Dynamic website deployed in console, textbox: Solution Prompt Search Text, link: Gemini, link: pricing details, link: network product, link: View all pricing details, link: Estimate your costs, link: Request a quote, link: Get started for free, link: Contact sales, link: Read guide, link: Watch video, link: Read customer story, link: mixpanel logo Mixpanel maintains excellent performance and reliability while keeping its engineers focused on innovation, link: spotify logo Robust building blocks that exist on top of core data storage, computing, and network services help take away much of the backend hassle on the way to new product creation, link: redsalud logo RedSalud meets telemedicine challenges by implementing SAP for Google Cloud, link: Target, link: Carrefour, link: KeyBank, link: PayPal, link: Commerzbank, link: Cruise, link: Nuro, link: visit Google One, link: block storage, data transfer, and file storage, link: Billing and troubleshooting, link: Ask the community, link: Google Cloud, link: Overview, link: Solutions, link: Products, link: Resources, combobox: Search, link: Docs, link: Support, link: Sign in, link: Choosing Google Cloud, link: Trust and security, link: Modern Infrastructure Cloud, link: Multicloud, link: Global infrastructure, link: Locations, link: Customers and case studies, link: Analyst reports, link: Whitepapers, link: Blog, link: Google Cloud pricing, link: Google Workspace pricing, link: See all products, link: Infrastructure modernization, link: Databases, link: Application modernization, link: Smart analytics, link: Artificial Intelligence, link: Security, link: Productivity & work transformation, link: Industry solutions, link: DevOps solutions, link: Small business solutions, link: See all solutions, link: Google Cloud Affiliate Program, link: Google Cloud documentation, link: Google Cloud quickstarts, link: Google Cloud Marketplace, link: Learn about cloud computing, link: Code samples, link: Cloud Architecture Center, link: Builders Hub, link: Certifications, link: Google for Developers, link: Google Cloud for Startups, link: System status, link: Release Notes, link: Find a Partner, link: Become a Partner, link: Events, link: Podcasts, link: Developer Center, link: Press Corner, link: Google Cloud on YouTube, link: Google Cloud Tech on YouTube, link: Follow on X, link: Join User Research, link: We're hiring. Join Google Cloud!, link: Community forums, link: About Google, link: Privacy, link: Site terms, link: Google Cloud terms, link: Subscribe, combobox: Language Selector and landmarks navigation: Page Contents, complementary: Product highlights 1, complementary: Related content 1, banner, navigation, contentinfo, navigation: Footer Links, navigation: Utility links. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

### Confidence classifications

VERIFIED: observed/documented within exact scope. CORROBORATED: supported by multiple compatible sources. INFERRED: reasoned, not directly established. PROPOSED: independent design or candidate. UNKNOWN: not established. CONFLICTED: sources disagree. A source URL alone is not verification; confidence cannot exceed the source. Every important claim in a future completed research record must cite its source location and access date.

### Prioritized unknowns

| Priority | Unknown / blocker | Next evidence action |
|---|---|---|
| P0 | Claim-level evidence linked to each capability. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Investigate official documentation and authorized public behavior; update evidence IDs. |
| P0 | Intended user, roles, user jobs, and requested implementation boundary. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Research product/user scope; ask user when scope choice materially changes deliverable. |
| P0 | Full successful, denied, failed, cancelled, retry and recovery workflows. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Observe authorized workflows; record checkpoint and observable oracle. |
| P1 | Supported versions, platforms, responsive and accessibility behavior. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Verify product version and platform documentation; run authorized observation. |
| P1 | Data model, state, ownership, retention, import/export and concurrency. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Use primary docs or record as unknown; propose only the independent slice model. |
| P1 | API/protocol contracts, integrations, authorization, limits and errors. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Use official API spec or label independent contract PROPOSED. |
| P1 | Candidate repository state, implementation, tests, license and operations. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Inspect exact repository/version and distribution dependencies before recommendation. |
| P2 | Representative performance targets and operational scale. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Define workload and target before measurement; avoid scale equivalence claims. |

### Resumable investigation checkpoint

Resume token: `google-cloud-storage`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Google Cloud Storage is Google Cloud's managed object-storage service. It stores immutable objects in buckets associated with projects, with configurable locations, storage classes, access controls, lifecycle rules and APIs. It is a distinct service from the broader Google Cloud platform and from Google Drive: Cloud Storage is an infrastructure storage primitive for applications, data processing, backup and archival.

# 2. Product identity and ownership

- **Official name:** Cloud Storage, commonly called Google Cloud Storage or GCS.
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://cloud.google.com/storage
- **Identity evidence:** Official Google Cloud documentation describes Cloud Storage as a scalable, managed service for storing data as objects in buckets.

# 3. Product capabilities

- Create buckets and store, retrieve and manage objects of arbitrary supported formats.
- Configure regional, dual-region or multi-region locations and storage classes such as Standard, Nearline, Coldline and Archive.
- Apply IAM, bucket/object access controls, managed folders, retention and lifecycle management.
- Serve application, analytics, backup, archive and content-distribution workloads with high durability and global access options.
- Integrate through the Google Cloud console, `gcloud storage`, client libraries, REST/JSON API, XML API, gRPC and Terraform.

# 4. Technical architecture

The resource hierarchy is organization → project → bucket → object, with folders and managed folders available for organization and access-control overlays. Buckets determine location and default storage class; objects carry data and metadata and are identified within a bucket by name and generation. The service exposes control and data operations through documented APIs and IAM permissions.

# 5. User and developer workflows

A project owner creates a bucket, chooses location and storage class, configures IAM and retention, and uploads objects. Application code uses a client library or JSON/XML API to list, read, write, copy and delete objects. Lifecycle rules can transition or delete data; data teams can use buckets as storage for analytics, machine learning, backups or content delivery.

# 6. Pricing and access

Pricing depends on storage class, location, stored data, operations, network egress, retrieval and retention conditions. Access requires a Google Cloud project and appropriate IAM permissions; public access is an explicit configuration and should not be assumed. This pass does not assert current price values or a particular project's quota, billing or policy state.

# 7. API and integration surface

Google documents the Cloud Storage JSON API v1, XML API, client libraries, gcloud CLI, gRPC, Terraform and console workflows. The JSON API exposes buckets, objects, access controls, folders, managed folders, notifications, operations and related resources. IAM roles and permissions are service-specific and must be scoped to the least privilege required.

# 8. Existing open-source alternatives

- **MinIO (AGPL-3.0):** self-hosted, S3-compatible object storage.
- **Ceph RADOS Gateway (LGPL-2.1):** distributed object storage with S3 and compatible interfaces.

# 9. Alternative comparison

MinIO and Ceph cover the core object-storage technology, S3-compatible APIs, self-hosting and distributed deployment. They do not reproduce Google's managed operations, Google Cloud project/IAM ecosystem, global service controls, billing, integrated location options or provider-specific tooling. For the storage primitive, coverage is mature; the managed-provider equivalence gap remains.

# 10. Missing capabilities and opportunity analysis

A replacement still needs durable deployment, replication, erasure coding, lifecycle and retention controls, IAM integration, monitoring, backup/recovery, upgrades, encryption, tenancy, S3 compatibility testing and operational ownership. The open-source opportunity is in managed packaging, migration tooling, policy automation and workload-specific storage operations rather than reimplementing basic object storage.

# 11. REA implementation strategy

Use MinIO for a focused S3-compatible deployment or Ceph when distributed storage and broader infrastructure integration are required. Define bucket ownership, encryption, replication, retention, lifecycle, backup and egress policies before migration. Validate API compatibility and failure recovery with representative objects; do not claim Google Cloud Storage parity without testing IAM, locations, lifecycle and operational procedures.

# 12. Security, privacy, and compliance

Cloud Storage may contain credentials, customer data, backups, datasets or regulated records. Verify IAM, public-access prevention, encryption and key ownership, retention, object versioning, audit logs, lifecycle deletion, regional residency, network controls and incident recovery. Avoid embedding credentials in scripts or reports.

# 13. Sources and evidence

- [Cloud Storage overview](https://docs.cloud.google.com/storage/docs/introduction) — official buckets, objects, hierarchy, tools and use cases.
- [Storage classes](https://docs.cloud.google.com/storage/docs/storage-classes) — official storage classes, availability and lifecycle context.
- [JSON API overview](https://docs.cloud.google.com/storage/docs/json_api) — official programmatic API surface and v1 behavior.
- [Buckets](https://docs.cloud.google.com/storage/docs/buckets) — official bucket resource and access configuration.
- [APIs and reference](https://docs.cloud.google.com/storage/docs/apis) — official IAM, CLI, client-library and service API index.

# 14. Open questions

- Which storage class, region and retention requirements are in scope?
- Is the target a self-hosted S3-compatible store, a migration tool or a managed service?
- Which IAM, encryption, audit, backup and disaster-recovery guarantees are mandatory?

# 15. Research history

- v1: catalog candidate with preliminary MinIO and Ceph alternatives, research pending.
- v2: updated 2026-11-03 from official Google Cloud Storage documentation. Status: `researched`; provider-managed operations, pricing and Google Cloud-specific controls remain distinct from open-source alternatives.

Research status is **researched**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rea-faang research dossier google-cloud-storage` and inspect canonical identity with `npx rea-faang products show google-cloud-storage --format json`.
2. Inspect the existing repository, architecture, dependencies, tests, configuration and interface before editing.
3. Confirm target scope and user priorities; list evidence blockers and never fill them with invented facts.
4. Evaluate candidate foundations through actual code, exact version, license/dependency terms, tests, security, maintenance, operations and fit.
5. Make a minimal dependency-aware plan for a functioning vertical slice.
6. Implement the slice with original code/assets and the host project’s conventions.
7. Add deterministic tests for every implemented requirement, including relevant failure and permission paths.
8. Implement remaining scoped capabilities incrementally; explicitly mark partial, excluded and unknown items.
9. Review security, privacy, dependencies, licensing, accessibility and compatibility.
10. Run actual project checks and inspect behavior through the interface the user will use.
11. Fix causes; do not weaken tests, hide errors or claim parity from generated code.
12. Document deviations, unimplemented requirements, limitations and checks not run.
13. Report requirement → code → test evidence and actual command results.
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rea-faang google-cloud-storage --out ./google-cloud-storage.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rea-faang build agent-kit google-cloud-storage --out ./google-cloud-storage-agent`.

### Multi-agent task plan and outputs

Researcher: own the evidence ledger and unknowns. Architect: approve scope, boundaries and contracts before parallel work. Implementers: deliver non-overlapping, integrated vertical slices. Tester: map acceptance checks to requirement IDs. Reviewer: inspect privacy, security, accessibility and license risk. Documenter: preserve setup and limitations. Handoffs record changed files, requirement IDs, commands/exit codes, checks not run and one specific next action.

### Acceptance criteria and definition of done

- Every in-scope behavior has a unique requirement ID, evidence/confidence, bounded scope, measurable acceptance oracle and associated test/manual check.
- Each implemented requirement maps to code and a deterministic passing test or repeatable manual observation; unknown requirements remain blocked/unknown.
- Primary and relevant alternate/failure workflows run through the user-facing interface; partial/excluded scope and recovery behavior are documented.
- Security, privacy, dependency/license, accessibility, compatibility, setup, project checks, and unrun checks are reported honestly.
- Requirement trace is evidence → workflow → specification/contract → implementation → automated test; passing specification checks do not claim target parity.

### Product quality and verification plan

- Correctness: tested success, empty, malformed, denied, duplicate, timeout/retry, cancellation, partial failure and recovery cases as relevant.
- Security/privacy: trust boundaries, least privilege, secret handling, data minimization, retention/export/deletion and abuse controls.
- UX/accessibility: keyboard/screen reader, labels/focus, loading/empty/error/success states, responsive behavior and reduced motion where relevant.
- Reliability/performance: reproducible setup, migrations, backup/restore, observability, representative workloads and measured targets before claims.
- Compatibility/licensing: test claimed versions/platforms; check direct/transitive license obligations and dependencies.

### End-to-end implementation milestones

Follow the seven dependency-aware phases in the roadmap above. Prefer a complete, tested vertical slice over disconnected scaffolding; continue remaining verified in-scope requirements and record blockers.

### Required deliverables

- Evidence ledger, behavior/capability map, prioritized unknowns and source limitations.
- User scope, architecture/data/API decisions with original-vs-proposed labels, and a candidate reuse/license evaluation.
- Working implementation, requirement-to-test traceability, actual project check results and interface-level verification.
- Documented deviations, partial/not-started/excluded requirements, unrun checks, setup and next actionable step.

### Provenance

- Product: [catalog/products.jsonl](../../products.jsonl) (`google-cloud-storage`).
- Dossier: [research/companies/google/products/google-cloud-storage.md](../../../research/companies/google/products/google-cloud-storage.md).
- REA capture: [catalog/rea/google/google-cloud-storage.md](../../rea/google/google-cloud-storage.md) (2026-11-03T01:37:43.906Z); raw record: [catalog/rea/evidence/google-cloud-storage.json](../../rea/evidence/google-cloud-storage.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Cloud Storage overview](https://docs.cloud.google.com/storage/docs/introduction) — Cloud Storage is Google Cloud's scalable managed object-storage service using buckets and objects. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Storage classes](https://docs.cloud.google.com/storage/docs/storage-classes) — Cloud Storage provides storage classes with different availability, duration and retrieval characteristics. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Cloud Storage JSON API overview](https://docs.cloud.google.com/storage/docs/json_api) — Cloud Storage exposes a JSON API for programmatic access to projects, buckets and objects. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [About Cloud Storage buckets](https://docs.cloud.google.com/storage/docs/buckets) — Every Cloud Storage object resides in a bucket where location and access settings are configured. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Cloud Storage APIs and reference](https://docs.cloud.google.com/storage/docs/apis) — Cloud Storage provides console, gcloud, client library, REST/JSON, XML, gRPC and Terraform integration surfaces. (VERIFIED; accessed 2026-11-03T00:00:00Z).
- [Official product page](https://cloud.google.com/storage) — Google Cloud Storage is identified at this URL in the canonical catalog. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Official documentation entry](https://docs.cloud.google.com/storage/docs/introduction) — Documentation entry-point URL is recorded. (UNKNOWN; accessed 2026-11-03T00:00:00Z).
- [Additional official source lead](https://docs.cloud.google.com/storage/docs/introduction) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.cloud.google.com/storage/docs/storage-classes) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.cloud.google.com/storage/docs/json_api) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.cloud.google.com/storage/docs/buckets) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Additional official source lead](https://docs.cloud.google.com/storage/docs/apis) — Official source URL is listed in product record. (UNKNOWN; accessed Not recorded).
- [Google Cloud Storage Public web-surface observation (REA)](https://cloud.google.com/storage) — A dated unauthenticated snapshot exposed controls button: View all features, button: Solution Prompt Search Button, button: Toggle all, button: Does Cloud Storage work for personal photos, videos, and files? , button: How does Cloud Storage differ from other types of storage? , button: Search, link: Cloud Storage, link: Features, link: Options, link: How It Works, link: Common Uses, link: Backups and archives, link: Media content storage and delivery, link: Data lakes and big data analytics, link: Machine learning and AI, link: Host a website, link: Generate a solution, link: Pricing, link: Business Case, link: FAQ, link: Release notes, link: Documentation, link: Resources and guides, link: Training, link: 85% of enterprise data is unstructured. Don't let it become dark data. Watch the fireside chat to learn how smart storage instantly becomes your AI foundation., link: Try Cloud Storage free, link: View documentation, link: personal, team, and block storage options, link: Automatically transition to lower-cost storage classes, link: Standard, nearline, coldline, and archive storage options, link: Fast, low-cost, highly durable archive and backup storage, link: Cloud Storage Cloud Storage in a minute 1 min video, link: Storage Intelligence, link: Insights Datasets, link: Batch Operations, link: Bucket Relocation, link: ESG logo Discover how Google Cloud's smart storage is getting customers ready for the AI era. Read ESG’s Showcase report., link: Rapid Cache, link: Cloud Identity and Access Management (IAM), link: data warehouse, link: open source analytics, link: machine learning (ML) models, link: Data Agent Kit, link: Model Context Protocol, link: BigQuery magnifying glass Start querying Cloud Storage data with BigQuery, link: Object Lifecycle Management (OLM), link: Autoclass, link: IDC logo IDC projects that Cloud Storage customers can realize average annual benefits worth $86,500 per petabyte. Read report., link: Standard storage, link: Nearline storage, link: Coldline storage, link: Archive storage, link: storage classes, link: What is Cloud Storage? (2:05), link: Learn more about nearline storage, link: Diagram, link: Learn more about geo-redundant storage, link: Learn how to set up a Media CDN, for planet-scale media delivery, link: Learn more about data lakes using Cloud Storage, link: Run Apache Hadoop or Apache Spark on data with data connector, link: Deploy in console, link: AI summarization solution, link: Watch how to store data for machine learning, link: Start using Gemini platform with your stored data, link: Nuro powers its autonomous vehicles' rapid decision-making with Cloud Storage, link: Dynamic website deployed in console, textbox: Solution Prompt Search Text, link: Gemini, link: pricing details, link: network product, link: View all pricing details, link: Estimate your costs, link: Request a quote, link: Get started for free, link: Contact sales, link: Read guide, link: Watch video, link: Read customer story, link: mixpanel logo Mixpanel maintains excellent performance and reliability while keeping its engineers focused on innovation, link: spotify logo Robust building blocks that exist on top of core data storage, computing, and network services help take away much of the backend hassle on the way to new product creation, link: redsalud logo RedSalud meets telemedicine challenges by implementing SAP for Google Cloud, link: Target, link: Carrefour, link: KeyBank, link: PayPal, link: Commerzbank, link: Cruise, link: Nuro, link: visit Google One, link: block storage, data transfer, and file storage, link: Billing and troubleshooting, link: Ask the community, link: Google Cloud, link: Overview, link: Solutions, link: Products, link: Resources, combobox: Search, link: Docs, link: Support, link: Sign in, link: Choosing Google Cloud, link: Trust and security, link: Modern Infrastructure Cloud, link: Multicloud, link: Global infrastructure, link: Locations, link: Customers and case studies, link: Analyst reports, link: Whitepapers, link: Blog, link: Google Cloud pricing, link: Google Workspace pricing, link: See all products, link: Infrastructure modernization, link: Databases, link: Application modernization, link: Smart analytics, link: Artificial Intelligence, link: Security, link: Productivity & work transformation, link: Industry solutions, link: DevOps solutions, link: Small business solutions, link: See all solutions, link: Google Cloud Affiliate Program, link: Google Cloud documentation, link: Google Cloud quickstarts, link: Google Cloud Marketplace, link: Learn about cloud computing, link: Code samples, link: Cloud Architecture Center, link: Builders Hub, link: Certifications, link: Google for Developers, link: Google Cloud for Startups, link: System status, link: Release Notes, link: Find a Partner, link: Become a Partner, link: Events, link: Podcasts, link: Developer Center, link: Press Corner, link: Google Cloud on YouTube, link: Google Cloud Tech on YouTube, link: Follow on X, link: Join User Research, link: We're hiring. Join Google Cloud!, link: Community forums, link: About Google, link: Privacy, link: Site terms, link: Google Cloud terms, link: Subscribe, combobox: Language Selector and landmarks navigation: Page Contents, complementary: Product highlights 1, complementary: Related content 1, banner, navigation, contentinfo, navigation: Footer Links, navigation: Utility links. (VERIFIED; accessed 2026-11-03T01:37:43.906Z).
