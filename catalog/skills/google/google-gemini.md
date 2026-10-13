---
name: google-gemini
description: Use when researching, comparing, or building a free and open-source replacement for Google Gemini (Google). Open-source status is partial — see Llama / Mistral / Qwen / Gemma, Ollama.
---

# Google Gemini (`google-gemini`)

| | |
|---|---|
| **Company** | Google (`google`) |
| **Product type** | `ai_model` |
| **Categories** | `ai_model` |
| **Official URL** | https://gemini.google.com/ |
| **Open-source status** | **partial** |

## What it is

Google Gemini is Google’s flagship multimodal model family and assistant, delivered as a hosted service rather than as downloadable weights.

## Core capabilities

- Multimodal reasoning (text, image, audio, video)
- Long-context generation and tool use
- Hosted assistant plus a developer API

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Llama / Mistral / Qwen / Gemma](https://huggingface.co/blog/daya-shankar/open-source-llm-models-to-run-locally) | mixed (mostly open weights) | Capable open-weight model families you can run yourself. | Many are open-weight under custom licences, not OSI open source. |
| [Ollama](https://ollama.com/) | MIT | Local model runner and OpenAI-compatible API. | Runs the weights; does not provide a frontier model. |

## Gap

No open project matches a frontier hosted model on capability; open-weight families trail the hosted leaders and often carry use restrictions.

## Verdict

Partial. Self-hostable model runners and open-weight families exist and are improving fast, but a fully open, frontier-equivalent model is pending.

## Sources

- https://huggingface.co/blog/daya-shankar/open-source-llm-models-to-run-locally
- https://www.instaclustr.com/education/open-source-ai/top-7-open-source-llms-for-2026/
- https://github.com/12britz/awesome-free-models

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`google-gemini`)
- Research dossier: [`research/companies/google/products/google-gemini.md`](../../../research/companies/google/products/google-gemini.md)
- REA web-surface report: [`catalog/rea/google/google-gemini.md`](../../rea/google/google-gemini.md)
