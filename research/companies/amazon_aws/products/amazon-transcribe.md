---
schema_version: "1.0"
id: "amazon-transcribe"
company_id: "amazon_aws"
name: "Amazon Transcribe"
aliases: ["Transcribe", "Amazon Transcribe Speech to Text"]
product_type: "ai_application"
categories: ["speech-to-text", "automatic-speech-recognition", "audio", "streaming", "machine-learning"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/transcribe/"
official_docs_url: "https://docs.aws.amazon.com/transcribe/"
official_source_urls:
  - "https://aws.amazon.com/transcribe/"
  - "https://docs.aws.amazon.com/transcribe/latest/dg/"
  - "https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html"
  - "https://docs.aws.amazon.com/transcribe/latest/dg/streaming-partial-results.html"
  - "https://docs.aws.amazon.com/transcribe/latest/dg/feature-matrix.html"
  - "https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html"
  - "https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html"
  - "https://docs.aws.amazon.com/transcribe/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/transcribe/"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
---

# 1. Executive summary

Amazon Transcribe is AWS's managed automatic speech-recognition service for turning audio into text. Its documented surface includes batch transcription from S3, real-time streaming, speaker labels, channel identification, custom vocabulary, language customization, medical transcription, call analytics and HealthScribe. Whisper is recorded as a partial open-source foundation, not an equivalent service.

# 2. Product identity and ownership

- **Official name:** Amazon Transcribe
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Batch and streaming speech-to-text

# 3. Product capabilities

- Transcribe media files from S3 through batch jobs.
- Transcribe live audio streams with streaming APIs.
- Add timestamps, punctuation, number normalization and language identification.
- Attribute speech to speakers and channels where supported.
- Customize recognition with vocabularies, filters and language models.
- Support domain-specific medical, call analytics and clinical-note workflows.

# 4. Technical architecture

The public model includes batch jobs, streaming sessions, media and output locations, language and vocabulary configuration, speaker/channel annotations, partial and final streaming results, asynchronous job state and service-specific variants. Exact wire protocols, audio constraints, model behavior, quotas, retries and region differences remain pending REA verification.

# 5. User workflows

Typical workflows include uploading audio to S3, starting and polling a batch job, opening a streaming session, consuming partial and final results, applying custom vocabulary, enabling speaker or channel labels and processing domain-specific recordings. A complete study must test silence, noise, overlapping speakers, malformed media, long files, reconnects, partial-result ordering, job retries, throttling and unsupported languages.

# 6. Pricing and access

Access requires an AWS account, IAM permissions, regional availability and suitable S3 or streaming configuration. Pricing, free-tier eligibility, duration limits, quotas, retention and medical or HealthScribe requirements must be verified before implementation. Never place private recordings or credentials in the dossier.

# 7. API and integration surface

Public surfaces include the AWS console, AWS CLI, SDKs and service APIs such as `StartTranscriptionJob`, `GetTranscriptionJob`, `ListTranscriptionJobs`, `StartMedicalTranscriptionJob`, `StartCallAnalyticsJob`, `StartStreamTranscription` and the corresponding streaming variants. The API reference notes that the CLI supports batch operations while streaming uses SDK or protocol integrations. Exact schemas, events, errors, retries and authentication require command-level testing.

# 8. Existing open-source alternatives

Whisper is an MIT-licensed open-source automatic speech-recognition model and Python toolkit that can run locally for transcription and language identification. It is a strong foundation for batch or interactive transcription, but it does not reproduce Transcribe's managed streaming protocol, AWS job plane, custom vocabulary APIs, speaker/channel workflows, medical features, HealthScribe or service operations.

# 9. Alternative comparison

Compare recognition quality, language coverage, timestamps, punctuation, diarization, channel identification, custom vocabulary, streaming latency, reconnect behavior, batch jobs, output formats, quotas, authentication, observability and privacy. Whisper covers the local model core; the managed job and streaming control planes require additional independent components.

# 10. Missing capabilities and opportunity analysis

Research must map operations, streaming message types, audio constraints, partial/final result semantics, job states, output schema, custom vocabulary behavior, speaker/channel labels, medical and call-analytics boundaries, errors, throttling, quotas and regional semantics. Any implementation must use original code and authorized or synthetic audio fixtures.

# 11. REA implementation strategy

Use the official product, developer, API and CLI documentation as primary sources. The generated REA skill should instruct an agent to build an independent implementation beginning with local Whisper-based batch transcription, then add streaming, job orchestration, timestamps, speaker/channel handling and customization only where evidence supports them. Preserve the partial-equivalence verdict and do not claim AWS managed-service parity.

# 12. Security, privacy, and compliance

Verify IAM scope, encryption, S3 permissions, stream transport security, retention, redaction, data residency and handling of medical or call recordings. Use synthetic or public audio fixtures only. Never store credentials, private recordings or personal data in the catalog, skill or report.

# 13. Sources and evidence

- **Product and scope:** [Transcribe documentation](https://docs.aws.amazon.com/transcribe/) covers audio files, streams, batch, streaming and domain-specific variants.
- **Streaming:** [Streaming audio](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html) and [partial results](https://docs.aws.amazon.com/transcribe/latest/dg/streaming-partial-results.html) support real-time, partial/final-result and stabilization claims.
- **Features:** [feature matrix](https://docs.aws.amazon.com/transcribe/latest/dg/feature-matrix.html), [custom vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html) and [speaker diarization](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html) support customization and speaker/channel claims.
- **API:** [API Reference](https://docs.aws.amazon.com/transcribe/latest/APIReference/) distinguishes batch and streaming API sections and documents operations and errors.
- **Alternative:** [Whisper](https://github.com/openai/whisper) is the recorded MIT-licensed open-source speech-recognition foundation; its coverage remains partial.

# 14. Unknowns

- Complete batch and streaming operation, event and error matrix.
- Exact audio constraints, quotas, throttling, retries and regional behavior.
- Recognition and diarization behavior across representative languages and audio conditions.
- Custom vocabulary, medical, call-analytics and HealthScribe boundaries.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

 Researched with verified public AWS sources. Product identity, batch/streaming modes, partial results, diarization, custom vocabulary and API surface are documented. Exact recognition quality, language-specific coverage, quotas, pricing, regional behavior and medical/HealthScribe boundaries remain unknown and are not asserted.
