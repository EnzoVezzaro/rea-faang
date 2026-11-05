---
schema_version: "1.0"
id: "amazon-translate"
company_id: "amazon_aws"
name: "Amazon Translate"
aliases: ["Translate", "Amazon Translate Neural Machine Translation"]
product_type: "ai_application"
categories: ["machine-translation", "natural-language-processing", "localization", "language", "machine-learning"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/translate/"
official_docs_url: "https://docs.aws.amazon.com/translate/"
official_source_urls:
  - "https://aws.amazon.com/translate/"
  - "https://aws.amazon.com/translate/details/"
  - "https://docs.aws.amazon.com/translate/latest/dg/"
  - "https://docs.aws.amazon.com/translate/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/translate/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon Translate is AWS's managed neural machine translation service. Its documented surface includes real-time text and document translation, batch document translation, supported language pairs, custom terminology, parallel-data customization and translation settings. Argos Translate is recorded as a partial open-source foundation, not an equivalent service.

# 2. Product identity and ownership

- **Official name:** Amazon Translate
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Neural machine translation and localization

# 3. Product capabilities

- Translate text in real time across supported language pairs.
- Translate documents synchronously or in batch workflows.
- Configure custom terminology, profanity settings, formality and brevity where supported.
- Customize translation with parallel data through Active Custom Translation.
- Detect source language and integrate translation into multilingual applications.

# 4. Technical architecture

The public model includes synchronous text and document operations, asynchronous batch jobs, source and target language codes, terminology resources, parallel data, S3 inputs and outputs, settings, IAM authentication and regional service endpoints. Exact model versions, language-pair behavior, document limits, customization effects, retries and regional differences remain pending REA verification.

# 5. User workflows

Typical workflows include translating a text block, translating a document, creating terminology or parallel-data resources, starting a batch job, polling job status, retrieving outputs and embedding translation into chat, content or support applications. A complete study must test unsupported language pairs, text and document limits, HTML/DOCX behavior, terminology precedence, malformed input, detected-language confidence, throttling and batch failures.

# 6. Pricing and access

Access requires an AWS account, IAM permissions, regional availability and suitable S3 configuration for batch jobs. Pricing, free-tier eligibility, character limits, batch quotas, storage and customization costs must be verified before implementation. No credentials or private source content belong in this dossier.

# 7. API and integration surface

Public surfaces include the AWS console, AWS CLI, SDKs and APIs such as `TranslateText`, `TranslateDocument`, `StartTextTranslationJob`, `DescribeTextTranslationJob`, `ListTextTranslationJobs`, terminology operations and parallel-data operations. Exact schemas, settings, errors, retries, idempotency, batch state transitions and output contracts require command-level testing.

# 8. Existing open-source alternatives

Argos Translate is an MIT-licensed open-source offline neural machine translation library and CLI with installable language packages. It offers a practical local foundation, but does not reproduce Amazon Translate's language coverage, managed API, batch service plane, custom terminology lifecycle, parallel-data customization, quotas or AWS operations.

# 9. Alternative comparison

Compare language coverage, quality, model packaging, offline operation, text and document formats, terminology, parallel data, batch jobs, streaming or synchronous latency, error behavior, authentication, quotas, observability and privacy. Argos Translate covers local translation; the managed API and customization control plane require additional independent components.

# 10. Missing capabilities and opportunity analysis

Research must map every translation, terminology and parallel-data operation, language matrix, document format, batch state, settings behavior, errors, limits, throttling, storage, output and regional semantics. Any implementation must use original code and public or synthetic text fixtures.

# 11. REA implementation strategy

Use the official product, developer, API, CLI and feature documentation as primary sources. The generated REA skill should instruct an agent to build an independent translation implementation beginning with Argos Translate or another documented local engine, then add language packages, terminology, document handling, batch jobs and customization only where evidence supports them. Preserve the partial-equivalence verdict and do not claim AWS managed-service parity.

# 12. Security, privacy, and compliance

Verify IAM scope, TLS, encryption, S3 permissions, retention, batch-output access, data residency and handling of proprietary or regulated text. Use synthetic or public fixtures only. Never store credentials, private source text or personal data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/translate/ — official product scope.
- https://aws.amazon.com/translate/details/ — translation features and customization.
- https://docs.aws.amazon.com/translate/latest/dg/ — developer workflows.
- https://docs.aws.amazon.com/translate/latest/APIReference/ — public API operations.
- https://docs.aws.amazon.com/cli/latest/reference/translate/ — AWS CLI command surface.
- https://github.com/argosopentech/argos-translate — open-source translation alternative.

# 14. Unknowns

- Complete language, operation, document-format and customization matrix.
- Exact limits, quotas, throttling, retries and regional behavior.
- Quality and terminology behavior across representative language pairs.
- Batch storage, output, job-state and parallel-data semantics.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface and a partial open-source foundation are documented; no full equivalence claim is made.
