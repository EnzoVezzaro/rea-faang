---
schema_version: "1.0"
id: "amazon-augmented-ai"
company_id: "amazon_aws"
name: "Amazon Augmented AI"
aliases:
  - "Amazon A2I"
  - "SageMaker A2I"
product_type: "ai_application"
categories:
  - "human-in-the-loop"
  - "machine-learning"
  - "workflow"
lifecycle_status: "deprecated"
official_url: "https://docs.aws.amazon.com/augmented-ai/"
official_docs_url: "https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html"
official_source_urls:
  - "https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html"
  - "https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html"
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

Amazon Augmented AI (A2I) provides human review workflows for machine-learning predictions. AWS currently states that A2I is not open to new customers, while existing customers can continue using it and AWS does not plan new features.

# 2. Product identity and ownership

- **Official name:** Amazon Augmented AI
- **Aliases:** Amazon A2I, SageMaker A2I
- **Company:** Amazon Web Services
- **Lifecycle:** Deprecated for new customers; existing-customer support is documented by AWS.
- **Official documentation:** https://docs.aws.amazon.com/augmented-ai/

# 3. Product capabilities

Public documentation describes human review loops for Amazon Textract, Amazon Rekognition and custom ML task types, including worker task templates and custom review UIs.

# 4. Technical architecture

Pending REA investigation. Public docs expose integrations with IAM, SageMaker, S3 and service-specific APIs; internal orchestration remains unknown.

# 5. User workflows

Pending REA investigation. The documented flow creates review resources, configures a worker task template and routes low-confidence or selected predictions to human reviewers.

# 6. Pricing and access

Pending verification. New-customer availability, regional support, quotas and pricing must be checked before planning any implementation.

# 7. API and integration surface

- A2I API references: https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html
- Integrates with Amazon Textract, Rekognition, SageMaker, IAM and S3 according to AWS documentation.

# 8. Existing open-source alternatives

Pending. Evaluate self-hosted human-in-the-loop annotation and review systems without claiming parity with AWS-managed integrations.

# 9. Alternative comparison

Pending evidence-backed comparison; the product's deprecated intake status is a material constraint.

# 10. Missing capabilities and opportunity analysis

The primary research opportunity is a self-hostable human-review workflow with explicit task routing, worker UI templates, auditability and model feedback. This is a proposed direction, not observed parity.

# 11. RAE implementation strategy

Use the RAE skill against the public A2I documentation and permitted surfaces. Preserve the deprecated lifecycle status and design an independent implementation only where current access and user scope justify it.

# 12. Security, privacy, and compliance

Pending verification. Research IAM roles, S3 encryption, worker access, data minimization, retention and audit behavior.

# 13. Evidence register

- https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html — official availability notice and getting-started scope.
- https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html — official API scope and availability notice.

# 14. Unknowns

- Current region and account eligibility for existing customers.
- Human workforce and worker-template lifecycle semantics.
- Review-loop retry, cancellation, audit and data-retention behavior.
- Open-source alternatives with comparable integration and governance.

# 15. Research status

`pending`: identity and lifecycle constraint are recorded; REA capture, alternatives research and acceptance review remain outstanding.
