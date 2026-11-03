---
schema_version: "1.0"
id: "amazon-lex"
company_id: "amazon_aws"
name: "Amazon Lex"
aliases:
  - "Amazon Lex V2"
  - "Lex V2"
product_type: "ai_application"
categories:
  - "conversational-ai"
  - "chatbot"
  - "natural-language-understanding"
  - "speech-recognition"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/lex/"
official_docs_url: "https://docs.aws.amazon.com/lexv2/latest/dg/"
official_source_urls:
  - "https://aws.amazon.com/lex/"
  - "https://aws.amazon.com/documentation-overview/lex/"
  - "https://docs.aws.amazon.com/lexv2/latest/dg/"
  - "https://docs.aws.amazon.com/lexv2/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/lexv2-models/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon Lex is AWS's managed service for building conversational interfaces using voice and text. Lex V2 combines natural-language understanding and automatic speech recognition with intents, slots, prompts, multi-turn dialog, fulfillment integrations, testing, analytics and deployment lifecycle controls.

# 2. Product identity and ownership

- **Official name:** Amazon Lex
- **Current API family:** Amazon Lex V2
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/lex/

# 3. Product capabilities

- Build voice and text bots from intents, sample utterances, slots and prompts.
- Support multi-turn conversations, context and interruption/streaming behavior.
- Use automatic speech recognition and natural-language understanding.
- Fulfill intents with AWS Lambda and connect Polly, Kendra, Bedrock, Connect and other services.
- Manage versions, aliases, environments, channels and deployment targets.
- Test, monitor and analyze bot conversations with workbench and dashboards.

# 4. Technical architecture

The public surface includes bots, locales, intents, slot types, slots, prompts, dialog actions, code hooks, versions, aliases, test sets, conversations, runtime APIs, model-building APIs and channel integrations. Lex V1 and V2 are separate API/documentation surfaces; this entry focuses on V2.

# 5. User workflows

Users create a bot and locale, define intents and slot types, add utterances/prompts, configure fulfillment and session behavior, build/test a version, assign an alias and connect it to applications, contact centers or messaging channels. Conversational FAQ and generative features require separate evidence and authorized knowledge sources.

# 6. Pricing and access

Lex is an AWS pay-as-you-go service with separate text and speech request dimensions. AWS documents free-tier/trial conditions that change over time; current pricing, Regions, request definitions and channel charges require verification from official pricing documentation.

# 7. API and integration surface

- V2 developer guide: https://docs.aws.amazon.com/lexv2/latest/dg/
- V2 API reference: https://docs.aws.amazon.com/lexv2/latest/APIReference/
- AWS CLI model namespace: `aws lexv2-models`
- Runtime CLI/API surfaces are separate from bot-model management.
- Integrations include Lambda, Polly, Kendra, Bedrock, Connect, Cognito, CloudWatch and messaging channels.
- Exact runtime, streaming, locale, channel, quota and versioning behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Rasa, Botpress Community, Botkit, Microsoft Bot Framework SDK, Botpress-compatible runtimes, ChatterBot and open-source NLU stacks such as spaCy/Rasa NLU. These cover different portions of dialogue, NLU, speech or deployment and are not claimed equivalents to Lex.

# 9. Alternative comparison

Open-source frameworks can provide intents, slots and dialogue management, but a clean-room equivalent would still need to combine ASR, NLU, multi-turn orchestration, fulfillment, versioned bot deployment, channel adapters, analytics and managed AWS integrations.

# 10. Missing capabilities and opportunity analysis

REA should map bot/locale lifecycle, intent classification, slot resolution, prompts, contexts, interruptions, streaming, Lambda hooks, runtime APIs, versions/aliases, channels, test workbench, analytics, knowledge integrations, quotas and failure behavior.

# 11. RAE implementation strategy

Use the official Lex product page, V2 developer guide, API reference, CLI references and getting-started material as research surfaces. A clean-room implementation should use independently licensed NLU, ASR and dialogue components, document behavioral differences, and avoid copying AWS/Alexa models or proprietary implementation details.

# 12. Security, privacy, and compliance

Research must verify IAM, bot and alias access, conversation/transcript handling, PII redaction, encryption, Lambda permissions, channel credentials, data retention, logging, regional processing and user consent.

# 13. Evidence register

- https://aws.amazon.com/lex/ — official product scope.
- https://aws.amazon.com/documentation-overview/lex/ — official NLU, ASR, integrations and lifecycle overview.
- https://docs.aws.amazon.com/lexv2/latest/dg/ — official V2 workflows.
- https://docs.aws.amazon.com/lexv2/latest/APIReference/ — official V2 API surface.
- https://docs.aws.amazon.com/cli/latest/reference/lexv2-models/ — official CLI model-management surface.

# 14. Unknowns

- Complete locale, ASR, NLU, streaming and channel matrix.
- Runtime versus model-management command coverage.
- Exact version, alias, test-workbench and analytics semantics.
- Current pricing, Regions, quotas and generative feature availability.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, conversation semantics, alternatives and acceptance review remain outstanding.
