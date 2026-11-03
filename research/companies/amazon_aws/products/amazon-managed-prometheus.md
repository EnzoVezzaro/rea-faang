---
schema_version: "1.0"
id: "amazon-managed-prometheus"
company_id: "amazon_aws"
name: "Amazon Managed Service for Prometheus"
aliases: ["Amazon Managed Prometheus", "AMP"]
product_type: "data_platform"
categories: ["observability", "monitoring", "prometheus", "containers", "managed-service"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/prometheus/"
official_docs_url: "https://docs.aws.amazon.com/prometheus/"
official_source_urls:
  - "https://aws.amazon.com/documentation-overview/prometheus/"
  - "https://docs.aws.amazon.com/prometheus/latest/userguide/"
  - "https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html"
  - "https://docs.aws.amazon.com/general/latest/gr/prometheus-service.html"
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

Amazon Managed Service for Prometheus is AWS's serverless, Prometheus-compatible monitoring service for container metrics. It provides managed workspaces for ingestion and querying, PromQL-compatible APIs, collectors and integrations with AWS security and container services.

# 2. Product identity and ownership

- **Official name:** Amazon Managed Service for Prometheus
- **Company:** Amazon Web Services
- **Compatibility:** Prometheus data model and PromQL
- **Lifecycle:** Active

# 3. Product capabilities

- Create managed Prometheus workspaces.
- Ingest metrics through remote write, collectors and scrapers.
- Query and alert with PromQL-compatible APIs.
- Monitor EKS and self-managed Kubernetes workloads.
- Manage workspace access with IAM, CloudTrail and multi-AZ service controls.

# 4. Technical architecture

Public documentation describes workspaces, ingestion, querying, managed collectors, rule groups, alert manager definitions, scrapers, regional endpoints and retention. Exact cardinality limits, costs, data freshness and failure behavior remain pending.

# 5. User workflows

Expected workflows include creating a workspace, configuring ingestion or a scraper, querying metrics, defining rules and alerts, managing access, and deleting or updating workspace resources. Recovery and migration behavior require evidence.

# 6. Pricing and access

Current pricing, retention charges, ingestion/query costs, quotas and regional availability must be verified before implementation or cost claims.

# 7. API and integration surface

- AWS APIs for workspaces, scrapers, rule groups, alert manager definitions and logging.
- Prometheus-compatible remote-write and query APIs.
- AWS CLI and SDKs.
- EKS, MSK, OpenSearch, Grafana, IAM and CloudTrail integrations.

# 8. Existing open-source alternatives

Prometheus is the primary open-source foundation. Thanos, Cortex, Mimir and VictoriaMetrics may cover portions of long-term storage, federation or scale, but managed AWS semantics and integrations are not assumed equivalent.

# 9. Alternative comparison

Self-hosted Prometheus preserves the data model and PromQL but transfers storage, scaling, availability, collectors, security and operations to the implementer. A complete foundation decision remains pending.

# 10. Missing capabilities and opportunity analysis

Research must map workspace lifecycle, ingestion protocols, scraper behavior, retention, cardinality, query limits, alerting, rule evaluation, multi-account access, regional behavior and failure recovery.

# 11. RAE implementation strategy

Use official AWS and Prometheus documentation and authorized API observation. Capture contracts and behavior before selecting a foundation or implementing an independent equivalent in a consumer project.

# 12. Security, privacy, and compliance

Verify IAM boundaries, workspace isolation, network access, encryption, CloudTrail coverage, metric sensitivity, cross-account roles and secret handling.

# 13. Evidence register

- https://aws.amazon.com/documentation-overview/prometheus/ — official service overview.
- https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html — AWS and Prometheus-compatible APIs.
- https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-getting-started.html — workspace, ingestion and query workflow.
- https://docs.aws.amazon.com/general/latest/gr/prometheus-service.html — endpoints and quotas.

# 14. Unknowns

- Complete API/CLI/SDK command matrix.
- Exact retention, cardinality, ingestion and query limits.
- Collector, alerting, rule evaluation and failure semantics.
- Verified open-source foundation and migration coverage.

# 15. Research status

`pending`: identity and public capability surface are documented from official AWS sources, but full REA capture, detailed behavior, limits and alternative coverage remain unverified.
