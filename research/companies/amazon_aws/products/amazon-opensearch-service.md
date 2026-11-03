---
schema_version: "1.0"
id: "amazon-opensearch-service"
company_id: "amazon_aws"
name: "Amazon OpenSearch Service"
aliases: ["OpenSearch Service", "Amazon OpenSearch Serverless"]
product_type: "search"
categories: ["search", "analytics", "observability", "managed-service", "serverless", "open-source"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/opensearch-service/"
official_docs_url: "https://docs.aws.amazon.com/opensearch-service/"
official_source_urls:
  - "https://aws.amazon.com/opensearch-service/"
  - "https://docs.aws.amazon.com/opensearch-service/"
  - "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html"
  - "https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Operations_Amazon_OpenSearch_Service.html"
  - "https://opensearch.org/"
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

Amazon OpenSearch Service is AWS's managed search, analytics and observability service. It supports managed OpenSearch and legacy Elasticsearch OSS domains, OpenSearch Serverless collections, ingestion pipelines, dashboards, queries, alerting, security and AWS operational integrations. OpenSearch itself is open source, but the AWS service plane is a separate scope.

# 2. Product identity and ownership

- **Official name:** Amazon OpenSearch Service
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Related surfaces:** Domains, OpenSearch Serverless, OpenSearch Ingestion, Dashboards and APIs

# 3. Product capabilities

- Create and manage domains with configurable instances, storage and networking.
- Index and query data using OpenSearch, legacy Elasticsearch-compatible APIs, SQL and PPL.
- Create Serverless collections and ingestion pipelines.
- Use dashboards, monitoring, alerting, snapshots, replication and storage tiers.
- Apply IAM, VPC, encryption and fine-grained access controls.

# 4. Technical architecture

The public model includes managed domains or Serverless collections, OpenSearch nodes and storage, ingestion, dashboards, APIs, IAM/VPC security, CloudWatch and AWS-managed lifecycle operations. Exact provisioning states, scaling algorithms, quotas, compatibility edges and failure recovery remain pending.

# 5. User workflows

Documented workflows include creating a domain or collection, configuring access, ingesting data, indexing documents, querying with OpenSearch/SQL/PPL, viewing dashboards, configuring alerts, taking snapshots and modifying or deleting resources. Complete state transitions, validation errors, retries and cross-service behavior require REA and API testing.

# 6. Pricing and access

Pricing depends on domain instance/storage usage, Serverless compute/OCU usage, ingestion, data transfer and related AWS resources. Current regions, quotas, free-tier eligibility and account permissions must be verified before cost claims.

# 7. API and integration surface

AWS documents console, CLI, SDK, OpenSearch Service API, OpenSearch data APIs, Serverless APIs, Ingestion APIs, dashboards, IAM, VPC, CloudWatch, S3 and snapshot integrations. The complete command and authorization matrix remains pending.

# 8. Existing open-source alternatives

OpenSearch is the primary open-source foundation and covers the core search and analytics engine under Apache 2.0. It does not by itself reproduce AWS provisioning, Serverless, account/region management, quotas, managed scaling, service integrations or operational guarantees.

# 9. Alternative comparison

An independent equivalent should separate the OpenSearch engine from the managed control plane. Evaluate index/query compatibility, plugins, dashboards, ingestion, security, snapshots, scaling, tenancy, observability and recovery independently; do not treat an OpenSearch installation as full AWS service parity.

# 10. Missing capabilities and opportunity analysis

Research must map domain/collection lifecycle states, APIs, authentication, policy evaluation, network modes, node/storage options, autoscaling, Serverless capacity, ingestion transforms, query semantics, snapshots, upgrades, replication, alerts and quotas.

# 11. RAE implementation strategy

Use official AWS pages and documentation for service behavior, and the official OpenSearch repository for the open-source engine. Capture public workflows and authorized test accounts only. Build an independent implementation in the consumer project with original configuration and code, clearly separating engine reuse from AWS-specific service behavior.

# 12. Security, privacy, and compliance

Verify IAM and fine-grained access policies, VPC/public access, TLS, encryption at rest, KMS, snapshots, audit logs, tenant isolation, plugin permissions, data retention and cross-account access.

# 13. Evidence register

- https://aws.amazon.com/opensearch-service/ — official product context.
- https://docs.aws.amazon.com/opensearch-service/ — official capabilities, workflows and references.
- https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html — domain and engine model.
- https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Operations_Amazon_OpenSearch_Service.html — service API reference.
- https://opensearch.org/ — open-source project context.
- https://github.com/opensearch-project/OpenSearch — source repository and license lead.

# 14. Unknowns

- Complete API/CLI/SDK, Serverless and Ingestion operation matrix.
- Exact version compatibility, quotas, scaling and failure semantics.
- Security, tenancy, snapshot and cross-region behavior under all deployment modes.
- Verified implementation boundary between OpenSearch reuse and AWS service-plane behavior.

# 15. Research status

`pending`: identity, public capabilities and the primary open-source foundation are documented, but full REA capture, behavior, limits, security and implementation equivalence remain unverified.
