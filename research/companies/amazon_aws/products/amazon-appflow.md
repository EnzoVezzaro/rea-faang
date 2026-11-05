---
schema_version: "1.0"
id: "amazon-appflow"
company_id: "amazon_aws"
name: "Amazon AppFlow"
aliases:
  - "AppFlow"
product_type: "business_software"
categories:
  - "data-integration"
  - "etl"
  - "saas-integration"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/appflow/"
official_docs_url: "https://docs.aws.amazon.com/appflow/"
official_source_urls:
  - "https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html"
  - "https://docs.aws.amazon.com/cli/latest/reference/appflow/"
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

Amazon AppFlow is an AWS-managed data-integration service for transferring data between SaaS applications and AWS services. This dossier records the official scope only; it is not a completed reverse-engineering report.

# 2. Product identity and ownership

- **Official name:** Amazon AppFlow
- **Company and business unit:** Amazon Web Services
- **Lifecycle:** Active
- **Official product page:** https://aws.amazon.com/appflow/

# 3. Product capabilities

The official user guide describes source/destination connectors, field mapping, filtering, masking, partitioning, and on-demand, scheduled, or event-driven flow triggers.

# 4. Technical architecture

Pending REA investigation. Public documentation exposes an API, CLI, connector profiles, flows and trigger configuration; implementation details remain unknown.

# 5. User workflows

Pending REA investigation. The documented high-level workflow is to configure a connector profile, define a source and destination, map/filter data, choose a trigger, and run or monitor a flow.

# 6. Pricing and access

Pending verification. Access, regional availability, quotas and pricing must be checked against current AWS documentation before implementation planning.

# 7. API and integration surface

- Official API reference: https://docs.aws.amazon.com/appflow/
- AWS CLI reference: https://docs.aws.amazon.com/cli/latest/reference/appflow/
- CloudFormation and CloudTrail integrations are described in the official user guide.

# 8. Existing open-source alternatives

Pending. Candidates must be researched separately for connector coverage, scheduling, transformations, security, and self-hosted operation. No equivalence is claimed yet.

# 9. Alternative comparison

Pending evidence-backed comparison.

# 10. Missing capabilities and opportunity analysis

Pending REA investigation. Do not infer feature parity from the public marketing page.

# 11. REA implementation strategy

Use the REA skill to inspect the official product page, user guide, API/CLI references and permitted public workflows. Produce an independent design and implementation plan; do not copy AWS source, private assets or credentials.

# 12. Security, privacy, and compliance

Pending verification. Research encryption, IAM, PrivateLink, connector credentials, audit events and data-residency behavior from public documentation.

# 13. Evidence register

- https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html — official overview and documented capabilities.
- https://docs.aws.amazon.com/cli/latest/reference/appflow/ — official CLI/API surface and operations reference.

# 14. Unknowns

- Exact connector matrix and per-connector limitations.
- Auth flows and credential storage behavior for each connector.
- Runtime semantics for retries, partial failure, idempotency and backpressure.
- Quotas, regional differences and pricing constraints.

# 15. Research status

`pending`: identity and official sources are recorded; REA runtime evidence, alternative assessment and acceptance review are still required.
