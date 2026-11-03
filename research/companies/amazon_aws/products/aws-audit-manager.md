---
schema_version: "1.0"
id: "aws-audit-manager"
company_id: "amazon_aws"
name: "AWS Audit Manager"
aliases: ["Audit Manager"]
product_type: "security"
categories: ["compliance", "audit", "governance", "evidence-collection", "controls", "restricted-onboarding"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/audit-manager/"
official_docs_url: "https://docs.aws.amazon.com/audit-manager/"
official_source_urls:
  - "https://aws.amazon.com/audit-manager/"
  - "https://docs.aws.amazon.com/audit-manager/"
  - "https://docs.aws.amazon.com/audit-manager/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/auditmanager/"
  - "https://aws.amazon.com/audit-manager/faqs/"
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

# AWS Audit Manager

## Scope and lifecycle

AWS Audit Manager continuously audits AWS usage, maps controls to compliance frameworks and automatically collects and organizes evidence for assessments. AWS announced that the service would no longer be open to new customers starting April 30, 2026; the entry remains relevant for existing-customer compatibility and migration research.

## Official surfaces

- Product: https://aws.amazon.com/audit-manager/
- Documentation: https://docs.aws.amazon.com/audit-manager/
- API reference: https://docs.aws.amazon.com/audit-manager/latest/APIReference/
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/auditmanager/
- FAQ and availability notice: https://aws.amazon.com/audit-manager/faqs/

## Capability map

- Create and run assessments for AWS usage and compliance requirements.
- Use prebuilt frameworks or define custom frameworks and controls.
- Map controls to AWS API data sources and collect evidence snapshots.
- Organize evidence, control sets, assessment reports and delegated review work.
- Support multi-account evidence collection through AWS Organizations.
- Integrate evidence with GRC systems and manage the service through console, API, SDK and CLI.

## API and evidence-collection leads

The API reference covers assessments, controls, frameworks, evidence, reports, delegations and account registration. Control data-source mappings can call AWS APIs and turn resource configuration snapshots into evidence. Exact collection timing, pagination, account boundaries, encryption, delegated administration and report semantics require controlled account evidence.

## Open-source alternative

No equivalent open-source alternative is verified. Open GRC and evidence-management tools may cover adjacent customer-owned processes, but they do not reproduce Audit Manager's AWS-native data collection, managed compliance frameworks, Organizations integration or account-scoped evidence semantics.

## REA/build guidance

Use the official documentation and API reference as primary inputs for Reverse Engineer Anything. An independent implementation should separate framework and control definitions, assessment state, evidence collectors, account delegation and report generation. It must not claim AWS-native evidence parity without authorized multi-account fixtures and current service eligibility.

## Unknowns and evidence gaps

- Existing-customer eligibility and service behavior after the onboarding restriction need account-specific evidence.
- Supported AWS API data sources and evidence freshness vary by control and region.
- Multi-account delegation, encryption and report-sharing behavior require controlled organization tests.
- No alternative should be promoted until its scope is separated from AWS-native evidence and managed compliance semantics.
