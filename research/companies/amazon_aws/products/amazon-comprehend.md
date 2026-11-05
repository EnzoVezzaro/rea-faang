---
schema_version: "1.0"
id: "amazon-comprehend"
company_id: "amazon_aws"
name: "Amazon Comprehend"
aliases:
  - "Comprehend"
product_type: "ai_application"
categories:
  - "natural-language-processing"
  - "machine-learning"
  - "text-analysis"
  - "document-analysis"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/comprehend/"
official_docs_url: "https://docs.aws.amazon.com/comprehend/"
official_source_urls:
  - "https://docs.aws.amazon.com/comprehend/latest/dg/"
  - "https://docs.aws.amazon.com/comprehend/latest/APIReference/Welcome.html"
  - "https://aws.amazon.com/comprehend/features/"
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

Amazon Comprehend is an AWS natural-language-processing service that extracts insights from text and documents. Public documentation covers pre-trained analysis, custom classification and entity recognition, synchronous and asynchronous jobs, document formats, API/CLI access and AWS integrations.

# 2. Product identity and ownership

- **Official name:** Amazon Comprehend
- **Company:** Amazon Web Services
- **Lifecycle:** Active, with individual features having separate customer-availability notices.
- **Product page:** https://aws.amazon.com/comprehend/

# 3. Product capabilities

- Entity, key-phrase, language, syntax and sentiment analysis.
- Custom document classification and custom entity recognition.
- Topic modeling and document clustering capabilities.
- Synchronous analysis for smaller requests and asynchronous batch jobs.
- Integrations with S3, KMS, Lambda, Firehose and IAM.

# 4. Technical architecture

Public material exposes pre-trained and custom model paths, API operations, synchronous/asynchronous job modes, input document constraints and AWS storage/encryption integrations. Model training data, serving infrastructure, quality controls and internal scaling remain unknown.

# 5. User workflows

Users submit UTF-8 text or supported documents to synchronous APIs or asynchronous jobs, then consume structured insights. Custom classification and entity-recognition workflows add training data, model versions and endpoints. These paths should be analyzed separately.

# 6. Pricing and access

Pricing depends on analyzed data, custom training, endpoints and related resources. AWS advertises a time-limited free tier; current Region, feature and account eligibility must be verified before making cost claims.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/comprehend/latest/dg/
- API reference: https://docs.aws.amazon.com/comprehend/latest/APIReference/Welcome.html
- AWS CLI reference: https://docs.aws.amazon.com/cli/latest/reference/comprehend/

# 8. Existing open-source alternatives

Potentially relevant projects include spaCy, Hugging Face Transformers, Flair and Apache OpenNLP. Their model licenses, language coverage, training workflows and production behavior must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source NLP libraries can reproduce individual tasks, but they do not automatically reproduce Comprehend's managed APIs, AWS integrations, model catalog, asynchronous job plane, scaling or account controls.

# 10. Missing capabilities and opportunity analysis

REA should map each analysis operation, input format, language, model path, confidence output, batch mode, custom-model lifecycle, endpoint behavior, quotas and integration separately.

# 11. REA implementation strategy

Use public AWS documentation, API schemas and permitted sample documents only. A clean-room implementation should compose independently licensed NLP models and expose a bounded, documented API; it must not copy AWS model weights, training data or proprietary implementation.

# 12. Security, privacy, and compliance

Research must verify content retention, model-improvement settings, IAM scope, KMS encryption, output handling, PII detection, regional processing and deletion behavior. Do not assume uploaded content is ephemeral without current evidence.

# 13. Evidence register

- https://docs.aws.amazon.com/comprehend/latest/dg/ — official capabilities and workflows.
- https://docs.aws.amazon.com/comprehend/latest/APIReference/Welcome.html — official API operations.
- https://aws.amazon.com/comprehend/features/ — official feature and availability notices.

# 14. Unknowns

- Full language, Region, quota and pricing matrix.
- Current availability of topic modeling, event detection and prompt-safety features.
- Model quality, latency and endpoint scaling characteristics.
- Exact retention and model-improvement behavior for each input path.

# 15. Research status

`pending`: product identity and public API scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
