---
schema_version: "1.0"
id: "meta-ai"
company_id: "meta"
name: "Meta AI"
aliases:
  - "Meta AI assistant"
product_type: "ai_application"
categories:
  - "ai"
  - "assistant"
  - "image-generation"
  - "search"
official_url: "https://www.meta.ai/"
official_docs_url: "https://ai.meta.com/"
official_source_urls:
  - "https://www.meta.com/technologies/"
  - "https://www.meta.ai/"
  - "https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 1
evidence:
  - id: "ev-meta-ai-identity"
    url: "https://www.meta.com/technologies/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Platforms and Technologies"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Meta lists Meta AI as a distinct service in its technology portfolio."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "Meta's official technologies page lists Meta AI under Services and links to the Meta AI web surface."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-ai-web"
    url: "https://www.meta.ai/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta AI"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Meta AI has a distinct official web surface."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "The canonical Meta AI domain is the public web entry point for the assistant; authentication and feature availability were not tested."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-ai-capabilities"
    url: "https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/"
    source_type: "press_release"
    publisher: "Meta"
    title: "Meet Your New Assistant: Meta AI, Built With Llama 3"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Meta documents Meta AI as an assistant available on the web and across Facebook, Instagram, WhatsApp and Messenger, with search and image-generation experiences."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Meta's newsroom describes the assistant, web availability, cross-app access, search integration and Imagine image generation, while noting rollout and regional limits."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Meta AI is Meta's separately named AI assistant service. Meta's official technology catalog lists it under Services, the canonical `meta.ai` domain provides a distinct web surface, and Meta's newsroom documents web, cross-app, search and image-generation experiences. This dossier does not claim current feature or regional parity across every Meta app.

# 2. Product identity and ownership

- **Canonical name:** Meta AI
- **Stable catalog ID:** `meta-ai`
- **Company:** Meta
- **Product type:** AI assistant service
- **Official product URL:** https://www.meta.ai/
- **Official AI documentation:** https://ai.meta.com/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-ai-identity`, `ev-meta-ai-web`

Meta AI is kept separate from Llama, Facebook, Instagram, WhatsApp, Messenger and Meta Horizon. Its integration into those apps is an integration surface, not a reason to merge the catalog records.

# 3. Verified public capabilities

1. Meta lists Meta AI as a service and links to its web experience.
2. Meta documents Meta AI as an assistant usable on the web and across several Meta apps.
3. Public documentation describes search/real-time information and image-generation experiences, subject to rollout and regional limits.

# 4. Technical architecture

Meta identifies Llama 3 as part of the assistant's model foundation in the cited announcement. Internal model routing, retrieval, safety systems, ranking, telemetry, data retention and app-specific integration architecture are not inferred.

# 5. User workflows

The verified scope includes assistant interaction, cross-app access, search-oriented questions and image-generation descriptions as publicly documented. Signed-in conversation history, account controls, current model selection, citations, safety behavior and regional availability require separate authorized testing.

# 6. Pricing and access

The cited Meta announcement describes access as free at the time of that announcement. Current availability, limits, account requirements and regional rollout must be checked before implementation; no account or private session was accessed.

# 7. API and integration surface

The public evidence establishes user-facing web and app surfaces, not a generally available unrestricted Meta AI API. Do not infer API contracts from the consumer product. Check current official developer documentation before any integration.

# 8. Open-source alternatives

- **Open WebUI:** self-hosted interface for local or remote language models.
- **LibreChat:** open conversational AI interface with provider integrations.
- **Jan:** local-first desktop AI assistant and model runtime.

# 9. Alternative comparison

Alternative coverage is **partial**. Open WebUI, LibreChat and Jan cover assistant interfaces and model routing, but none is verified here as a replacement for Meta AI's Meta account graph, cross-app placement, proprietary models, search partnerships, safety systems or image-generation service.

# 10. Missing capabilities and opportunity analysis

An independent implementation should choose a model provider, retrieval policy, tool permissions, conversation store, safety boundary and image-generation path. Reproducing Meta's private model and app ecosystem is out of scope.

# 11. REA implementation strategy

Use public Meta AI pages only to define user-visible questions. Build an independent assistant with explicit provider, privacy and tool boundaries; do not copy Meta branding, private endpoints or protected model assets.

# 12. Security and privacy

Assistant prompts, uploaded files, generated images, account history and search context can be sensitive. Any implementation must define retention, deletion/export, prompt-injection defenses, tool authorization, model safety, logging and user disclosure. No security or privacy parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-ai-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-ai-web` | https://www.meta.ai/ | Canonical web surface |
| `ev-meta-ai-capabilities` | https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/ | Public assistant, cross-app, search and image-generation claims |
| REA capture | `catalog/rea/meta/meta-ai.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Current regional, account, model and usage limits were not tested.
- Internal retrieval, safety, ranking, training and telemetry systems are not public evidence here.
- Any API or business integration requires separate current documentation and authorization review.

# 15. Research history

- **2026-11-03:** reviewed Meta's official technology catalog, Meta AI web entry point and Meta's newsroom announcement; promoted the candidate after verifying distinct service identity and public capability evidence.
- **Next review:** 2027-02-03, or sooner if Meta changes the service surface or access model materially.
