---
schema_version: "1.0"
id: "amazon-security-lake"
company_id: "amazon_aws"
name: "Amazon Security Lake"
aliases: ["Security Lake"]
product_type: "data_platform"
categories: ["security", "data-lake", "siem", "log-management", "threat-detection"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/security-lake/"
official_docs_url: "https://docs.aws.amazon.com/security-lake/"
official_source_urls:
  - "https://aws.amazon.com/security-lake/"
  - "https://docs.aws.amazon.com/security-lake/"
  - "https://docs.aws.amazon.com/security-lake/latest/userguide/getting-started.html"
  - "https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html"
  - "https://aws.github.io/aws-security-services-best-practices/guides/security-lake/"
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

Amazon Security Lake is AWS's managed security data lake for centralizing security data in a customer's AWS account. AWS documents OCSF-normalized sources, source and subscriber management, query and notification access, and integration with S3, Lake Formation, Athena and security services. Matano is recorded as a partial open-source foundation for an independent security data lake.

# 2. Product identity and ownership

- **Official name:** Amazon Security Lake
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Security telemetry lake, normalization, subscriptions and analytics access

# 3. Product capabilities

- Create and configure security data lakes in supported Regions.
- Collect data from AWS, SaaS, on-premises and cloud sources.
- Normalize data with the Open Cybersecurity Schema Framework (OCSF) model.
- Manage data sources, subscribers, access and notification destinations.
- Query data through AWS analytics and integrate with security services.

# 4. Technical architecture

The documented model combines source collection, OCSF normalization, S3-based storage, Lake Formation permissions, subscriber access, query or notification delivery and retention. Exact partitioning, schema versions, source adapters, notification semantics, cross-account access, encryption and lifecycle behavior remain pending REA verification.

# 5. User workflows

Typical workflows include enabling the lake, selecting Regions, adding sources, configuring subscribers, granting access, querying normalized data, receiving notifications, and integrating detections or investigations. AWS notes that historical events generated before enabling the lake are not backfilled. A complete study must test source failures, schema changes, duplicate events, permissions, replay, retention and subscriber isolation.

# 6. Pricing and access

Access requires an AWS account, administrative setup, IAM roles and supported regional services. Pricing depends on ingestion, storage, queries, notifications and related AWS services. Current quotas, Regions, retention, free-tier eligibility and cross-account costs must be verified before implementation.

# 7. API and integration surface

Public surfaces include console, AWS CLI, SDKs and APIs for data lakes, sources, subscribers, access, notifications, tags, encryption and regions. Exact request schemas, OCSF versions, IAM actions, errors, retries, partitions, query contracts and notification delivery require command-level validation.

# 8. Existing open-source alternatives

Matano is an Apache-2.0 open-source security data lake for AWS with log normalization, Apache Iceberg, serverless ingestion, detection-as-code and integrations with query engines. It is a strong foundation, but does not reproduce Security Lake's exact source/subscriber APIs, OCSF implementation, permissions or managed AWS service plane.

# 9. Alternative comparison

Compare source connectors, event normalization, OCSF schema behavior, storage layout, partitioning, retention, query engines, subscribers, notifications, access control, encryption, cross-account sharing, detection rules, cost and operations. Matano covers the data-lake foundation; AWS-specific contracts remain separate.

# 10. Missing capabilities and opportunity analysis

Research must map source and subscriber state, OCSF versions, event schemas, partitions, storage and retention, permissions, notifications, query access, cross-account behavior, integrations, quotas, failures and migration paths.

# 11. RAE implementation strategy

Use official AWS documentation, CLI references and authorized non-production security data. Capture enabling, source ingestion, normalization, subscription, query, notification and failure cases. Use Matano only after recording the partial-foundation verdict, and implement independent data-plane and control-plane components with original code and compatible licensing.

# 12. Security, privacy, and compliance

Verify IAM roles, Lake Formation grants, KMS keys, S3 access, cross-account boundaries, log sensitivity, retention, deletion, notification destinations, audit logs and regional processing. Do not infer a compliance posture from a normalized schema alone.

# 13. Evidence register

- https://aws.amazon.com/security-lake/ — official product scope.
- https://docs.aws.amazon.com/security-lake/ — official documentation and CLI entry points.
- https://docs.aws.amazon.com/security-lake/latest/userguide/getting-started.html — setup and source collection workflow.
- https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html — subscriber and access workflows.
- https://github.com/matanolabs/matano — open-source alternative and Apache-2.0 license.

# 14. Unknowns

- Complete source, subscriber, OCSF, notification and query matrix.
- Exact schema, partition, retention, permission and cross-account semantics.
- Current quotas, pricing, Regions, lifecycle and source backfill behavior.
- Verified parity and operating requirements for a self-managed equivalent.

# 15. Research status

Pending deeper REA validation. Product identity, official sources and a partial open-source foundation are documented; no full equivalence claim is made.
