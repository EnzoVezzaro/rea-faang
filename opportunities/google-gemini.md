# Opportunity: Google Gemini (google-gemini)

| | |
|---|---|
| **Target product** | Google Gemini (`google-gemini`) |
| **Company** | google |
| **Classification** | build_missing |
| **Status** | proposed |
| **Proposed alternative** | REA Multimodal Agent Runtime |
| **License** | MIT |

## Why this is a build opportunity

Gemini is a hosted model and assistant family. The dossier verifies public
multimodal, tool-calling and interaction surfaces, but no qualifying open
replacement provides the same hosted model family, product integrations or
service contract. The opportunity is therefore bounded infrastructure for a
specific multimodal workflow, not a claim of Gemini parity.

## Alternatives considered

| Project or family | Why it is not enough |
|---|---|
| Gemma | Related Google open-model family, but not the hosted Gemini service. |
| Ollama | Local model runner; it does not provide a frontier model or Gemini's service plane. |
| Mistral / Qwen | Model families with different capabilities, licenses and deployment requirements. |

## Proposed scope (MVP)

1. Select one approved open model and one declared modality or task.
2. Provide a local or single-node API with explicit model, tool and permission configuration.
3. Add an evaluation corpus covering successful, empty, malformed, denied and tool-failure cases.
4. Record prompt retention, file handling, model version, latency, cost and safety results.
5. Keep all external actions behind explicit approval and an auditable tool boundary.

## Out of scope (non-goals)

- Reproducing Google's proprietary weights, training data or internal serving stack.
- Claiming parity with Gemini Apps, Gemini API or Vertex AI.
- Connecting private accounts, charging paid APIs or sending production data without approval.
- Supporting every modality, model family or region in the first release.

## Acceptance criteria

- [ ] The selected model, license and artifact source are recorded.
- [ ] A documented API contract passes text and multimodal fixture tests for the chosen scope.
- [ ] Tool permissions and failure recovery are covered by tests.
- [ ] Prompts, files and outputs follow the declared retention and redaction policy.
- [ ] The report separates verified behavior from unverified assumptions and records reproducible evidence.

## Risks and open questions

- Model quality, context, safety and latency may differ materially from Gemini.
- Model licenses and availability change; recheck before every release.
- Hardware and hosting cost depends on modality and model size.
- Open question: which single workflow has enough value to justify a bounded implementation?

## Evidence

- [`research/companies/google/products/google-gemini.md`](../research/companies/google/products/google-gemini.md)
- https://ai.google.dev/gemma
- https://ollama.com/
- https://mistral.ai/technology/
- https://qwenlm.github.io/
