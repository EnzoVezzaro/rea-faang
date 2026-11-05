---
schema_version: "1.0"
id: "google-gemini"
company_id: "google"
name: "Google Gemini"
aliases: []
product_type: "ai_model"
categories:
  - "ai_model"
  - "multimodal"
  - "developer_api"
official_url: "https://gemini.google.com/"
official_docs_url: "https://ai.google.dev/gemini-api/docs"
official_source_urls:
  - "https://ai.google.dev/gemini-api/docs/interactions-overview"
  - "https://ai.google.dev/gemini-api/docs/function-calling"
  - "https://ai.google.dev/gemini-api/docs/pricing"
  - "https://deepmind.google/models/model-cards/"
  - "https://support.google.com/gemini/answer/13594961"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "build_missing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
evidence:
  - id: "ev-google-gemini-identity"
    url: "https://gemini.google.com/"
    source_type: "official_website"
    publisher: "Google"
    title: "Gemini"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The canonical public product surface is Google Gemini at gemini.google.com."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "The official URL resolves to the Gemini application surface; the repository also records a dated REA capture of its public unauthenticated entry page."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-gemini-api"
    url: "https://ai.google.dev/gemini-api/docs"
    source_type: "developer_documentation"
    publisher: "Google AI for Developers"
    title: "Gemini API documentation"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google publishes a developer API for interacting with Gemini models and related capabilities."
    claim_type: "api_surface"
    supporting_excerpt_or_summary: "The official developer documentation describes the Gemini API, SDKs, model access and feature guides; exact model availability and limits remain version- and account-dependent."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-gemini-interactions"
    url: "https://ai.google.dev/gemini-api/docs/interactions-overview"
    source_type: "developer_documentation"
    publisher: "Google AI for Developers"
    title: "Interactions API"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The Interactions API provides a unified interface for model and agent interactions, including multimodal inputs, tools and background execution."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Google documents interaction records, optional server-side state, observable execution steps, background execution and feature guides for text, image, audio, video, documents and tools."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-gemini-function-calling"
    url: "https://ai.google.dev/gemini-api/docs/function-calling"
    source_type: "developer_documentation"
    publisher: "Google AI for Developers"
    title: "Function calling with the Gemini API"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The Gemini API documents function calling and multimodal function results for supported model families."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The official guide documents function declarations, calls and results; it also documents multimodal content in function responses for Gemini 3 series models."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-gemini-pricing"
    url: "https://ai.google.dev/gemini-api/docs/pricing"
    source_type: "developer_documentation"
    publisher: "Google AI for Developers"
    title: "Gemini Developer API pricing"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Gemini API access has free and paid tiers with model-, modality- and usage-dependent limits and prices."
    claim_type: "pricing"
    supporting_excerpt_or_summary: "Google documents free access for selected models and limits, paid token pricing, tool charges and account or tier conditions; these terms may change."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-gemini-model-cards"
    url: "https://deepmind.google/models/model-cards/"
    source_type: "developer_documentation"
    publisher: "Google DeepMind"
    title: "Model cards"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google publishes model cards for multiple Gemini generations and related Gemma models."
    claim_type: "status"
    supporting_excerpt_or_summary: "The model-card index lists Gemini model families, versions and dates, while separating them from Gemma open models; it is not a promise that every listed model is available in every API or account."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-gemini-privacy"
    url: "https://support.google.com/gemini/answer/13594961"
    source_type: "developer_documentation"
    publisher: "Google Gemini Help"
    title: "Gemini Apps Privacy Hub"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google documents categories of prompts, files, recordings, device context and connected-app data processed by Gemini Apps."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The privacy notice describes data collected and purposes such as providing, maintaining, improving and personalizing services; it applies to Gemini Apps and is distinct from every API deployment contract."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Google Gemini is Google's hosted family of multimodal models and assistant surfaces. Google documents a developer API, model and agent interactions, function calling, multimodal features, pricing tiers and model cards. The public evidence does not establish a downloadable Gemini equivalent, proprietary training details, complete model parity across products, or the internal serving architecture.

This dossier promotes `google-gemini` to `researched` for the documented public product and developer surfaces. It keeps unknowns explicit and treats the dated REA capture as evidence of the public entry page only, not as proof of every authenticated assistant or API workflow.

# 2. Product identity and ownership

- **Canonical name:** Google Gemini
- **Stable catalog ID:** `google-gemini`
- **Company:** Google / Google DeepMind
- **Product type:** hosted AI model family and consumer/developer application surfaces
- **Official product URL:** https://gemini.google.com/
- **Official developer documentation:** https://ai.google.dev/gemini-api/docs
- **Lifecycle:** active at the time of review
- **Identity evidence:** `ev-google-gemini-identity`, plus `catalog/rea/google/google-gemini.md`
- **Version matrix:** Google publishes multiple model cards and API model entries; exact availability, preview status, limits and account eligibility must be checked against the current API model list before integration

Gemini Apps, the Gemini API, Vertex AI integrations and individual model generations are related surfaces. They are not silently collapsed into separate product identities here. A model-specific or channel-specific contract should be created only when the catalog needs a distinct lifecycle, owner or evidence set.

# 3. Product capabilities

The following claims are supported by the official sources in the evidence ledger:

1. **Multimodal interaction:** Google documents text, image, audio, video and document feature guides across the Gemini API and model families.
2. **Developer API:** Google publishes SDK and API documentation for accessing selected Gemini models and capabilities.
3. **Tool and function calling:** Google documents function declarations, tool calls and function results, including multimodal function results for supported Gemini 3 models.
4. **Interaction and agent workflows:** The Interactions API documents unified model/agent interactions, optional server-side state, observable execution steps and background execution.
5. **Model and tier diversity:** Google publishes model cards and pricing for multiple Gemini families and service tiers; availability is not uniform across products or accounts.
6. **Free and paid access:** Google's pricing documentation distinguishes free access, paid access and enterprise offerings with different limits, tools and data-use terms.

Not established by these sources: exact internal model weights, training corpus, proprietary safety implementation, complete parity between Gemini Apps and API behavior, regional availability of every feature, or a full public service-level guarantee.

# 4. Technical architecture

**Verified public model:** client or application surface → Gemini model/API interaction → optional tools or function calls → model output and interaction record. The Interactions API documents a chronological interaction resource containing execution steps and optional server-side state.

**Not verified:** TPU topology, training pipeline, model routing, hidden safety services, storage engines, deployment topology, caching internals, quota enforcement implementation and private personalization. These remain `UNKNOWN`; this dossier does not infer them from generic AI-system architecture.

# 5. User workflows

The public REA capture observed the unauthenticated Gemini entry surface with a new-chat control, navigation, sign-in control, upload/tools control, mode picker and dictate control. Official developer documentation supports a separate workflow for creating an API interaction, selecting an eligible model, providing text or multimodal input, optionally allowing tools/function calls, and reading the resulting interaction.

The following details remain unverified or surface-specific: authenticated chat history, connected-app behavior, subscription gating, exact upload limits, model picker contents, refusal and safety states, retries, cancellation, streaming semantics, latency, account deletion, regional behavior and parity between Gemini Apps, AI Studio, Gemini API and Vertex AI.

# 6. Pricing and access

Google documents free and paid Gemini API tiers. The free tier can include limited access to selected models and free input/output tokens, while paid and enterprise tiers expose different limits, tools, support and data-use terms. Google AI Studio usage and API billing are not interchangeable assumptions; check the current pricing and billing documentation for the target account and model before integration.

Pricing, quotas, free-tier eligibility, model names and tool charges are time-sensitive. This dossier records the official documentation consulted on 2026-11-03, not a permanent quote or authorization to incur charges.

# 7. API and integration surface

- **Gemini API:** documented model and interaction endpoints with SDK support.
- **Interactions API:** unified interaction records, optional state, tool/function execution and background execution.
- **Function calling:** structured function declarations, calls and results; multimodal result support is model-family dependent.
- **Gemini Apps:** public consumer assistant surface observed by REA; authentication and connected-app behavior were not exercised.
- **Vertex AI:** related Google Cloud delivery surface; do not assume identical models, quotas, terms or APIs without checking its current contract.

Authentication, quotas, regional availability, safety behavior, retries, idempotency and retention must be read from the current official contract before building an integration.

# 8. Existing open-source alternatives

The curated landscape identifies partial candidates, not equivalent replacements:

- **Gemma:** Google's separately documented open model family, including model cards and downloadable/open-weight variants; it is related technology but not the hosted Gemini service.
- **Ollama:** MIT-licensed local model runner and API surface; it runs selected model weights but does not provide Gemini's hosted model family.
- **Mistral and Qwen model families:** open-weight or openly distributed model families with different licenses, capabilities and deployment requirements; each requires a separate version and license review.

These candidates cover pieces of local inference, model serving or open-weight experimentation. None is verified here as a drop-in replacement for Gemini Apps, Gemini API, or Google's proprietary multimodal model family.

# 9. Alternative comparison

The evidence supports **partial** alternative coverage. Gemma is the closest Google-published open-model relation, while Ollama is a runtime rather than a model. Mistral and Qwen may cover selected text, code or multimodal workloads depending on model and license. Capability, latency, safety, tool use, context, hosting, support and data governance must be compared for a bounded use case before selecting one.

Alternative coverage remains `unknown` in the canonical product record until each candidate is reviewed for current release, license, maintenance, security, hardware needs and the exact target workflow.

# 10. Missing capabilities and opportunity analysis

The opportunity is a bounded, independently operated multimodal or agentic system with explicit model choice, data controls, tool permissions, evaluation sets and cost limits—not a claim to reproduce Google's proprietary hosted service. A viable first slice could choose one open model family, one modality, one deployment target and one tool contract. Gemini-scale model quality, hosted reliability, private context and product integrations remain outside that bounded claim.

# 11. REA implementation strategy

Use the REA public-surface report only to reproduce the observed unauthenticated entry contract and to guide additional authorized observations. For an independent implementation, compare Gemma, Mistral, Qwen and a local runner such as Ollama against a declared task set, license, hardware budget, safety policy and evaluation corpus. Do not present an open model or runner as Gemini parity.

# 12. Security, privacy and compliance

Google's Gemini Apps privacy notice documents prompts, files, recordings, device context, connected apps and related processing purposes. That notice is not a substitute for the API or Vertex AI data-processing contract. An independent implementation must define data minimization, prompt and file retention, tool permissions, tenant isolation, secrets handling, abuse controls, deletion/export, model safety evaluation and audit logging before implementation. No compliance or privacy parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-google-gemini-identity` | https://gemini.google.com/ | Product identity and public entry page |
| `ev-google-gemini-api` | https://ai.google.dev/gemini-api/docs | Developer API and model surface |
| `ev-google-gemini-interactions` | https://ai.google.dev/gemini-api/docs/interactions-overview | Interaction records, state and agent features |
| `ev-google-gemini-function-calling` | https://ai.google.dev/gemini-api/docs/function-calling | Function calling and multimodal results |
| `ev-google-gemini-pricing` | https://ai.google.dev/gemini-api/docs/pricing | Free/paid tiers, limits and tool pricing |
| `ev-google-gemini-model-cards` | https://deepmind.google/models/model-cards/ | Model families and version records |
| `ev-google-gemini-privacy` | https://support.google.com/gemini/answer/13594961 | Gemini Apps data and privacy scope |
| REA capture | `catalog/rea/google/google-gemini.md` | Dated unauthenticated entry-page observation only |

# 14. Open questions and exclusions

- Exact model availability and names must be checked against the current account and API model list.
- Gemini Apps, AI Studio, Gemini API and Vertex AI do not share an assumed contract.
- Full authenticated assistant workflows and connected-app behavior were not captured.
- Exact training data, model weights, internal routing, safety services and infrastructure are not public evidence here.
- Alternative repositories and model licenses require separate current reviews.
- No billing, account, private-data, deployment or production operation was performed.

# 15. Research history

- **2026-11-03:** reviewed official Google AI for Developers, Google DeepMind and Gemini Help sources; reconciled them with the existing REA public-entry capture; promoted the dossier from `pending` to `researched` with verified evidence and explicit unknowns.
- **Next review:** 2027-02-03, or sooner if official model availability, pricing, privacy terms or API behavior changes materially.
