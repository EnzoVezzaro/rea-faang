---
schema_version: "1.0"
id: "meta-llama"
company_id: "meta"
name: "Llama"
aliases: []
product_type: "ai_model"
categories:
  - "ai_model"
official_url: "https://ai.meta.com/llama/"
official_docs_url: "https://ai.meta.com/resources/models-and-libraries/llama-downloads/"
official_source_urls:
  - "https://ai.meta.com/resources/models-and-libraries/llama-downloads/"
  - "https://github.com/meta-llama/llama"
  - "https://github.com/meta-llama/llama-models"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
---

# Llama

## Research verdict

Llama is Meta's family of downloadable large language and multimodal models,
distributed with model weights, model cards, inference utilities, and model-
specific community license terms. Meta's current download page lists Llama 4
Scout and Maverick as well as Llama 3.x variants. The release is open-weight, but
the model licenses are custom community licenses; “open source” must not be
treated as an OSI-license assertion.

The alternative coverage is **partial**. Mistral, Qwen, OLMo, and other model
families provide useful open-weight or more permissively licensed alternatives,
but their capabilities, licenses, weights, and deployment requirements differ.

## Product identity and boundary

- **Owner:** Meta Platforms, Inc.
- **Canonical product ID:** `meta-llama`
- **Lifecycle:** Active
- **Official product surface:** https://ai.meta.com/llama/
- **Model access:** https://ai.meta.com/resources/models-and-libraries/llama-downloads/
- **Product boundary:** Meta's model family and its public model-release tooling;
  hosted chat experiences such as Meta AI are separate catalog products.

## Verified capabilities and access

Meta's official materials verify that:

1. The family includes text and multimodal model variants across multiple Llama
   generations.
2. Current download listings include Llama 4 Scout and Maverick, plus Llama 3.1,
   3.2 and 3.3 variants with different text, vision, size and context profiles.
3. Access to model weights requires accepting the applicable license terms and
   completing Meta's download request flow.
4. The official `meta-llama/llama` repository provides inference code and points
   users to Meta's model-download and license process.
5. The `llama-models` repository provides utilities and model-specific release
   materials; it is not proof that every model has identical runtime behavior or
   license terms.

## Technical boundary

The public sources verify released weights, model cards, inference utilities and
license notices. They do not verify Meta's complete training data, training
infrastructure, serving stack, safety pipeline, evaluation process, or hosted
inference API. Those areas remain unknown and must not be presented as facts by a
build agent.

## License and operational constraints

Each Llama generation and model family must be checked against its own current
license and acceptable-use terms before download, fine-tuning, redistribution or
commercial deployment. The repository is not a substitute for legal review. A
model being downloadable or called “open” by a product page does not make its
license equivalent to Apache-2.0, MIT, or an OSI-approved license.

## Alternative assessment

### Mistral — partial model-family alternative

Some Mistral models use permissive licenses and can cover general text-generation
workloads, but model quality, modalities, context limits, weights and license
terms vary by release.

### Qwen — partial model-family alternative

Qwen provides open-weight model families and tooling. It is a viable candidate for
some self-hosted workloads, not a drop-in substitute for every Llama variant.

### OLMo — partial/open research alternative

OLMo is useful when a more transparent research stack is required. Its scope and
capability profile differ from Llama's released family.

### Ollama — runtime, not a model alternative

Ollama can simplify local model execution, but it is a runtime/distribution tool,
not a replacement model family. It should never be counted as equivalent to Llama.

## REA/build implications

An independent implementation should select a specific model, license, runtime,
hardware target, quantization strategy, evaluation set, and safety policy. Reuse
official inference utilities or a compatible runtime where permitted. Do not train
a replacement model or redistribute weights without checking the applicable
license and access terms.

## Evidence record

| Claim | Source | What it supports |
|---|---|---|
| Current Llama model families and license terms | [Meta Llama downloads](https://ai.meta.com/resources/models-and-libraries/llama-downloads/) | Model identity, variants, access flow and community-license notice |
| Official inference code and model-download process | [meta-llama/llama](https://github.com/meta-llama/llama) | Repository ownership, inference tooling and weight-access workflow |
| Model-specific utilities and release materials | [meta-llama/llama-models](https://github.com/meta-llama/llama-models) | Official model-family tooling and per-model materials |
| Model card and custom commercial license reference | [Llama model card](https://github.com/meta-llama/llama/blob/main/MODEL_CARD.md) | License boundary and documented model-card scope |

## Known gaps

- Training data composition and complete training infrastructure are not public
  implementation specifications.
- Hosted Meta AI behavior and API availability are separate from downloadable
  Llama weights and are not inferred here.
- License, model availability, quotas, hardware requirements and safety guidance
  require a dated check for the exact model selected.

**Research date:** 2026-11-03.  
**Confidence:** Verified for public release/access surfaces; partial for alternatives.
