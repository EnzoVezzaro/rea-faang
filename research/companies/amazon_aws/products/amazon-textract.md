---
schema_version: "1.0"
id: "amazon-textract"
company_id: "amazon_aws"
name: "Amazon Textract"
aliases: ["Textract", "Amazon Textract OCR"]
product_type: "ai_application"
categories: ["ocr", "document-analysis", "forms", "tables", "handwriting", "machine-learning"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/textract/"
official_docs_url: "https://docs.aws.amazon.com/textract/"
official_source_urls:
  - "https://aws.amazon.com/textract/"
  - "https://aws.amazon.com/textract/faqs/"
  - "https://docs.aws.amazon.com/textract/latest/dg/"
  - "https://docs.aws.amazon.com/textract/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/textract/"
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

Amazon Textract is AWS's managed document-analysis service. Its documented surface includes OCR for printed and handwritten text, forms and key-value pairs, tables, layout, queries, signatures, confidence scores and synchronous or asynchronous analysis APIs. Tesseract OCR is recorded as a partial open-source foundation, not an equivalent service.

# 2. Product identity and ownership

- **Official name:** Amazon Textract
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** OCR and structured document analysis

# 3. Product capabilities

- Detect printed text and handwriting from supported documents and images.
- Extract forms as key-value relationships and selection elements.
- Extract tables, cells, merged cells, headers and related layout blocks.
- Analyze layout, signatures and targeted document queries.
- Run synchronous APIs for small inputs and asynchronous jobs for longer documents.
- Return structured blocks, relationships, confidence scores and page coordinates.

# 4. Technical architecture

The public model includes document bytes or S3 inputs, feature types, queries, adapters, synchronous and asynchronous jobs, block graphs, confidence values, pagination, notifications and output configuration. Exact model behavior, supported languages, page limits, job transitions, retries, throttling and regional differences remain pending REA verification.

# 5. User workflows

Typical workflows include detecting document text, analyzing forms or tables, submitting an asynchronous job, polling or receiving completion notifications, traversing blocks and relationships, and exporting structured results. A complete study must test clean scans, handwriting, multi-page PDFs, rotated pages, tables, merged cells, forms, signatures, queries, malformed input, pagination, throttling and job failure states.

# 6. Pricing and access

Access requires an AWS account, IAM permissions and regional service availability. Pricing, free-tier eligibility, page limits, quotas, supported file types, asynchronous storage and notification costs must be verified before implementation. No credentials or customer documents belong in this dossier.

# 7. API and integration surface

Public surfaces include the AWS console, AWS CLI, SDKs and Textract APIs such as `DetectDocumentText`, `AnalyzeDocument`, `AnalyzeExpense`, `AnalyzeID`, `StartDocumentAnalysis`, `GetDocumentAnalysis`, `StartDocumentTextDetection` and `GetDocumentTextDetection`. Exact request schemas, feature types, block relationships, errors, retries, pagination, idempotency and notification contracts require command-level testing.

# 8. Existing open-source alternatives

Tesseract OCR is an Apache-2.0 open-source OCR engine usable locally through libraries and command-line interfaces. It is a meaningful foundation for printed-text extraction, but it does not reproduce Textract's structured forms, tables, queries, signatures, layout, handwriting coverage, block graph, asynchronous job model or AWS-managed service plane.

# 9. Alternative comparison

Compare OCR accuracy, language and handwriting support, forms and key-value extraction, tables, layout, signatures, queries, confidence scores, coordinates, batch processing, asynchronous jobs, API/CLI ergonomics, quotas, authentication, storage, notifications and observability. Tesseract covers the local OCR core; the structured document-analysis layer requires additional independent components.

# 10. Missing capabilities and opportunity analysis

Research must map every public operation, supported feature type, block and relationship schema, document/page limits, language behavior, adapter flow, asynchronous job state, notification path, error taxonomy, throttling, quota and regional semantics. Any implementation must use original code and authorized test documents.

# 11. RAE implementation strategy

Use the official product and developer documentation, API reference and CLI reference as the primary sources. The generated RAE skill should instruct an agent to reproduce observable behavior with an independent implementation, beginning with local OCR and adding document-layout, forms, tables, queries and job orchestration only when evidence supports them. Tesseract may be used as a component, but the dossier must preserve the partial-equivalence verdict.

# 12. Security, privacy, and compliance

Verify IAM scope, encryption, document retention, S3 permissions, cross-account access, logging, redaction, data residency and handling of identity or financial documents. Use synthetic or public fixtures only. Never place credentials, private documents or personal data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/textract/ — official product scope.
- https://aws.amazon.com/textract/faqs/ — documented OCR, forms, tables, queries and supported workflows.
- https://docs.aws.amazon.com/textract/latest/dg/ — developer guide and behavior references.
- https://docs.aws.amazon.com/textract/latest/APIReference/ — public API operations and data types.
- https://docs.aws.amazon.com/cli/latest/reference/textract/ — AWS CLI command surface.
- https://github.com/tesseract-ocr/tesseract — open-source OCR alternative.

# 14. Unknowns

- Complete operation, feature-type, block and relationship matrix.
- Exact limits, quotas, throttling, retries and regional behavior.
- Accuracy and supported-language behavior across representative document classes.
- Adapter, query, signature, handwriting and asynchronous-notification details.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface and a partial open-source foundation are documented; no full equivalence claim is made.
