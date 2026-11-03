---
schema_version: "1.0"
id: "aws-artifact"
company_id: "amazon_aws"
name: "AWS Artifact"
aliases: ["Artifact", "AWS Artifact Reports", "AWS Artifact Agreements"]
product_type: "security"
categories: ["compliance", "audit", "governance", "agreements", "security-documentation"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/artifact/"
official_docs_url: "https://docs.aws.amazon.com/artifact/"
official_source_urls:
  - "https://aws.amazon.com/artifact/"
  - "https://aws.amazon.com/artifact/faq/"
  - "https://docs.aws.amazon.com/artifact/"
  - "https://docs.aws.amazon.com/artifact/latest/APIReference/Welcome.html"
  - "https://docs.aws.amazon.com/cli/latest/reference/artifact/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: null
research_version: 1
---

# AWS Artifact

## Scope and lifecycle

AWS Artifact is a self-service portal and API for downloading AWS security and compliance documents and for reviewing, accepting and tracking AWS agreements. Reports may include ISO certifications, PCI documentation and SOC reports; agreements may include account- and organization-scoped terms such as a BAA.

## Official surfaces

- Product: https://aws.amazon.com/artifact/
- FAQ: https://aws.amazon.com/artifact/faq/
- Documentation: https://docs.aws.amazon.com/artifact/
- API reference: https://docs.aws.amazon.com/artifact/latest/APIReference/Welcome.html
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/artifact/

## Capability map

- Access and download AWS audit artifacts and compliance reports.
- Review, accept and terminate AWS agreements subject to permissions and terms.
- Track agreement status for accounts and organizations.
- Control access through IAM and administrator-granted permissions.
- Submit or manage compliance inquiries through the service API where supported.

## API and access leads

The API and IAM service-authorization references define low-level operations and permissions. Exact artifact availability, confidentiality, NDA handling, regional behavior, organization-account semantics and legal sharing restrictions require account-specific evidence and must not be inferred from public documentation alone.

## Open-source alternative

No equivalent open-source alternative is verified. General GRC, audit-management and evidence-collection tools may assist with a customer's own controls, but they cannot reproduce AWS-issued certifications, confidential reports, legal agreements or AWS account authorization.

## REA/build guidance

Use the official documentation and FAQ as primary inputs for Reverse Engineer Anything. An independent implementation can model an evidence registry and agreement workflow for owned documents, but must clearly separate customer-owned evidence from provider-issued compliance artifacts and legal acceptance. Do not claim AWS Artifact parity without authorized account and legal evidence.

## Unknowns and evidence gaps

- Exact available reports and agreements vary by account, region, organization and current AWS terms.
- Confidential artifact contents and NDA restrictions cannot be reconstructed from public sources.
- IAM permission boundaries and organization-level acceptance behavior need controlled account tests.
- No substitute should be promoted until its scope is clearly separated from AWS-issued evidence and agreements.
