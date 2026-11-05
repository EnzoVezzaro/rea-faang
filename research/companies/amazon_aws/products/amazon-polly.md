---
schema_version: "1.0"
id: "amazon-polly"
company_id: "amazon_aws"
name: "Amazon Polly"
aliases: ["Polly"]
product_type: "ai_application"
categories: ["text-to-speech", "speech-synthesis", "voice", "accessibility", "audio"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/polly/"
official_docs_url: "https://docs.aws.amazon.com/polly/"
official_source_urls:
  - "https://aws.amazon.com/polly/"
  - "https://aws.amazon.com/documentation-overview/polly/"
  - "https://docs.aws.amazon.com/polly/"
  - "https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html"
  - "https://docs.aws.amazon.com/polly/latest/APIReference/API_SynthesizeSpeech.html"
  - "https://docs.aws.amazon.com/polly/latest/dg/using-speechmarks.html"
  - "https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html"
  - "https://docs.aws.amazon.com/ai/responsible-ai/amazon-polly/overview.html"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
---

# 1. Executive summary

Amazon Polly is AWS's managed text-to-speech service. Public documentation describes text and SSML input, multiple voice engines, many languages and voices, pronunciation lexicons, speech marks, streaming output and file-oriented audio formats. The catalog records Piper as a partial local alternative; it does not provide Polly's hosted service plane or full voice and language portfolio.

# 2. Product identity and ownership

- **Official name:** Amazon Polly
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Cloud speech synthesis for applications, accessibility and audio workflows

# 3. Product capabilities

- Synthesize text or SSML into speech.
- Select standard, neural, long-form and generative voice engines where supported.
- Select voices and languages and tune pronunciation, pitch, rate and volume with SSML.
- Use lexicons and request speech marks or metadata alongside audio.
- Stream audio or request MP3, Ogg, PCM and telephony-oriented outputs.

# 4. Technical architecture

The documented flow is input text or SSML, engine and voice selection, synthesis through AWS APIs, and a streamed or file-oriented result. Lexicons and speech marks add pronunciation and synchronization metadata. Exact engine availability by language, quotas, latency, regional behavior and model versions remain pending REA verification.

# 5. User workflows

Typical workflows include selecting a voice, submitting text or SSML, receiving audio, optionally requesting speech marks, and caching or streaming the result. A complete implementation study must test invalid SSML, lexicon precedence, long inputs, retries, cancellation, throttling, streaming boundaries and deterministic output expectations.

# 6. Pricing and access

Use requires an AWS account, regional endpoints and IAM authorization. Pricing, quotas, free-tier eligibility, engine-specific rates and regional availability must be verified before implementation; this dossier does not treat them as fixed facts.

# 7. API and integration surface

Public integration surfaces include the AWS console, AWS CLI, SDKs, `SynthesizeSpeech`, asynchronous synthesis tasks, voice and lexicon operations, speech marks, regional endpoints and IAM. Exact request schemas, error codes, retries, quotas and SDK behavior require command-level validation.

# 8. Existing open-source alternatives

Piper is a GPL-3.0 local neural text-to-speech engine with downloadable voice models. It is a useful local foundation for an independent implementation, not a drop-in replacement for Polly's hosted API, voice catalog, language coverage, managed scaling or AWS authorization plane.

# 9. Alternative comparison

Compare text normalization, SSML support, pronunciation and lexicon behavior, voice and language coverage, audio codecs, speech marks, streaming, latency, caching, model licensing, privacy and operational limits. Piper covers local synthesis; the surrounding service contract must be designed independently.

# 10. Missing capabilities and opportunity analysis

The remaining research must map engine and voice matrices, SSML and lexicon semantics, speech-mark schemas, output formats, streaming behavior, quotas, pricing, regional endpoints, error handling, model licensing and sensitive-text handling.

# 11. REA implementation strategy

Use official AWS documentation, API references and authorized test inputs. Capture representative synthesis, SSML, lexicon, speech-mark, streaming and failure cases. Use Piper only after documenting the partial-foundation verdict, and build any independent implementation with original code, compatible licensing and no AWS branding or protected assets.

# 12. Security, privacy, and compliance

Verify IAM scope, TLS, regional processing, sensitive-text retention, request and audio logging, KMS or storage boundaries, model and voice licensing, and access to generated audio. Do not infer a compliance guarantee from the product page alone.

# 13. Sources and evidence

- https://aws.amazon.com/polly/ — official product capabilities and engines.
- https://aws.amazon.com/documentation-overview/polly/ — documentation entry point and integration scope.
- https://docs.aws.amazon.com/polly/ — official developer documentation.
- [How Amazon Polly works](https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html) — official text/SSML, voice-engine and audio-output workflow.
- [SynthesizeSpeech API](https://docs.aws.amazon.com/polly/latest/APIReference/API_SynthesizeSpeech.html) — official request schema, engines, voices and output parameters.
- [Speech mark types](https://docs.aws.amazon.com/polly/latest/dg/using-speechmarks.html) — official word, sentence, viseme and SSML metadata behavior.
- [Managing lexicons](https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html) — official pronunciation lexicon behavior and regional scope.
- [Piper](https://github.com/OHF-Voice/piper1-gpl) — open-source local alternative and GPL-3.0 license.

# 14. Unknowns

- Complete engine, voice and language availability matrix.
- Exact SSML, lexicon, speech-mark and audio-format behavior.
- Quotas, latency, pricing, retries and regional differences.
- Model and voice licensing constraints for an independent implementation.

# 15. Research status

`researched`: identity, synthesis inputs, engines, voices, output formats, speech marks, lexicons and API shape were verified from official AWS documentation. Piper remains a partial local alternative; current quotas, pricing, regional matrices and full voice/model licensing remain outside this pass.
