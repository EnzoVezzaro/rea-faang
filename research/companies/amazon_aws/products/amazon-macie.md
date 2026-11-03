---
schema_version: "1.0"
id: "amazon-macie"
company_id: "amazon_aws"
name: "Amazon Macie"
aliases:
  - "Macie"
product_type: "security"
categories:
  - "data-security"
  - "sensitive-data-discovery"
  - "privacy"
  - "s3"
  - "machine-learning"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/macie/"
official_docs_url: "https://docs.aws.amazon.com/macie/"
official_source_urls:
  - "https://aws.amazon.com/macie/"
  - "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html"
  - "https://docs.aws.amazon.com/macie/latest/APIReference/welcome.html"
  - "https://docs.aws.amazon.com/general/latest/gr/macie.html"
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

# 1. Executive summary

Amazon Macie is AWS's data-security service for discovering sensitive data in Amazon S3 using machine learning and pattern matching. It provides visibility into bucket security and findings, and integrates with AWS APIs, CLI/SDK tooling, EventBridge and Security Hub.

# 2. Product identity and ownership

- **Official name:** Amazon Macie
- **Company:** Amazon Web Services
- **Primary scope:** sensitive-data discovery and S3 data-security posture
- **Lifecycle:** Active

# 3. Product capabilities

- Discover sensitive data in S3 objects.
- Classify data using managed identifiers and custom data identifiers.
- Inspect bucket inventory, access controls and security posture.
- Produce findings, statistics and monitoring signals.
- Integrate findings with APIs, EventBridge and Security Hub.

# 4. Technical architecture

The public surface includes account enablement, S3 bucket/object analysis, managed and custom identifiers, findings, classification jobs, statistics and regional API endpoints. Exact processing, retention, quotas and detector behavior require REA and documentation-level verification.

# 5. User workflows

Expected workflows include enabling Macie, configuring discovery or classification jobs, selecting S3 scope, reviewing findings and routing findings to downstream security workflows. Preconditions, cancellation, retries and cross-account behavior remain pending.

# 6. Pricing and access

Macie is presented as an AWS service with Free Tier entry points. Current pricing, regional availability and account permissions must be verified before implementation or cost claims.

# 7. API and integration surface

- Amazon Macie REST API and regional endpoints.
- AWS CLI and language SDKs.
- Amazon EventBridge findings events.
- Amazon Security Hub integration.
- IAM permissions and CloudTrail audit trails.

# 8. Existing open-source alternatives

Potential alternatives include open-source DLP, sensitive-data discovery, object classification and S3-compatible security tooling. No candidate is verified as equivalent yet.

# 9. Alternative comparison

Alternatives may cover pattern matching, PII detection, object scanning or policy checks, but equivalence across Macie identifiers, findings, S3 integration, regional APIs, managed operations and AWS security integrations is unverified.

# 10. Missing capabilities and opportunity analysis

Research must map managed/custom identifiers, supported file types, sampling, job lifecycle, findings schema, false-positive handling, quotas, pricing, cross-account administration and downstream integrations.

# 11. RAE implementation strategy

Use official AWS product, user-guide, API and quota documentation. Capture public workflows and schemas through authorized REA routes. Do not infer detector behavior from marketing text and do not copy AWS implementation or proprietary assets.

# 12. Security, privacy, and compliance

Verify object access scope, IAM roles, encryption, findings sensitivity, retention, cross-account boundaries, audit logs and handling of PII. Keep all captured data within authorized public or user-owned scope.

# 13. Evidence register

- https://aws.amazon.com/macie/ — official overview.
- https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html — capabilities and API/CLI/SDK surface.
- https://docs.aws.amazon.com/macie/latest/APIReference/welcome.html — REST API scope.
- https://docs.aws.amazon.com/general/latest/gr/macie.html — endpoints and quotas.

# 14. Unknowns

- Complete API/CLI command and resource matrix.
- Exact managed/custom identifier coverage and file-type behavior.
- Findings retention, sampling, retries and cost boundaries.
- Verified open-source foundation and functional-equivalence scope.

# 15. Research status

`pending`: product identity and public capability surface are recorded from official AWS sources, but full REA capture, detailed behavior, alternatives and implementation foundation remain unverified.
