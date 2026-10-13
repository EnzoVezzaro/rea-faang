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
official_docs_url: "https://github.com/facebookresearch/llama"
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Llama (Large Language Model Meta AI) is a family of open-source large language models released by Meta. It represents Meta's entry into the open large language model landscape, competing with GPT-4, Claude, Gemini, and other proprietary models.

# 2. Product identity and ownership

- **Official name:** Llama
- **Company and business unit:** Meta AI
- **Parent organization:** Meta Platforms Inc.
- **Original launch date:** 2023 (Llama 1, Llama 2 in 2023, Llama 3 in 2024)
- **Current lifecycle status:** active
- **Previous names:** None (Llama naming convention)
- **Acquisitions or ownership changes:** None; released by Meta AI research
- **Related products:** Llama 2, Llama 3, Meta AI chat, Ray-Ban Meta smart glasses AI, AI Studio
- **Official website:** https://ai.meta.com/llama/
- **Official documentation:** https://github.com/facebookresearch/llama

# 3. Product capabilities

- Large language model text generation
- Code generation and completion
- Chat and conversational AI
- Instruction following
- Reasoning and problem-solving
- Multilingual support (many languages)
- Context window varies by model version (Llama 3: 8K–128K tokens)
- Open release (weight-based, research use license)
- Fine-tuning and alignment support

# 4. Technical architecture

Llama models:

- Transformer-based architecture
- Variants: Llama 1, Llama 2, Llama 3 (different sizes and configurations)
- Training on publicly available internet text
- Release as model weights only (no training code, dataset details highly restricted)
- PyTorch as primary framework
- Quantization-aware training and post-training quantization available

Model weights are released under a custom "Llama 2 Acceptable Use License" and Llama 3 similar restrictions. Full training code and dataset are not open source.

# 5. User workflows

Primary workflows: model loading, prompt engineering, text generation, fine-tuning. Essential: model loading, text generation. Advanced: fine-tuning, long-context usage, tool integration.

# 6. Pricing and access

- Model weights released under custom license (free download but restricted use)
- Commercial use restrictions apply (Llama 2 Acceptable Use License, Llama 3 license)
- API access via Meta AI API (separate pricing)
- No direct hosted inference in the free release; requires own infrastructure
- Meta AI chat (separate product with its own pricing)

# 7. API and integration surface

- Meta AI API for hosted inference
- Custom tool use and function calling
- Integration with partner platforms

# 8. Existing open-source alternatives

- Open-source: Llama 2, Llama 3 (same release), Pythia, Falcon, MPT, Nemotron, Qwen2
- Hosted alternatives: OpenAI GPT-4, Anthropic Claude, Google Gemini
- Weights-only release means downstream tooling and fine-tuning infrastructure must be built independently

# 9. Alternative comparison

Llama 2 and Llama 3 are the same project (open weights). Falcon, MPT, Pythia, Qwen2 are alternative open-weight models. Hosted models (GPT-4, Claude, Gemini) offer different capability trade-offs. Weights-only release requires infrastructure build for practical use.

# 10. Missing capabilities and opportunity analysis

Model hosting and inference serving, fine-tuning infrastructure, and training code represent gaps. Weights-only release requires significant independent build for practical deployment.

# 11. RAE implementation strategy

Focus on model hosting, fine-tuning infrastructure, or application development using Llama weights. Not recommended to train a new model from scratch; leverage existing open-weight releases.

# 12. Security, privacy, and compliance

Llama 2 Acceptable Use License and Llama 3 license restrict certain commercial uses. Model output filtering recommended. No specific compliance certifications for the model itself.

# 13. Sources and evidence

- https://ai.meta.com/llama/ (product page)
- https://github.com/facebookresearch/llama (source repository)
- https://arxiv.org/abs/2305.18617 (Llama 2 paper)

# 14. Open questions

- What is the practical deployment overhead for Llama 3 8B/70B models?
- How do fine-tuning frameworks compare for Llama models?
- What are the commercial use restriction differences between Llama 2 and Llama 3 licenses?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Falcon, MPT, Qwen2 are alternative open-weight models. Hosted models offer different capability trade-offs. Llama's weights-only release requires infrastructure build.

---

# 17. RAE implementation strategy (continued)

Focus on model hosting, fine-tuning, or application development using Llama weights. Training from scratch is high effort.