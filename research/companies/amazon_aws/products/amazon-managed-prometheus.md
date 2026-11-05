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
  - "https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-ingest-with-prometheus.html"
  - "https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-workspace-configuration.html"
  - "https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html"
  - "https://docs.aws.amazon.com/prometheus/latest/userguide/integrating-ack.html"
  - "https://prometheus.io/docs/prometheus/latest/"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-04T00:00:00Z"
last_verified_at: "2026-11-04T00:00:00Z"
next_review_at: "2027-02-04T00:00:00Z"
research_version: 2
---

# 1. Executive summary

Amazon Managed Service for Prometheus (AMP) is AWS's serverless, Prometheus-compatible monitoring service. It provides managed workspaces with separate control-plane and data-plane endpoints for ingestion, querying, rules and alerts, plus managed collectors and AWS container/security integrations.

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
- Manage workspace access with IAM, SigV4, CloudTrail and managed availability controls.
- Configure recording/alerting rule groups and Alert Manager routing, including AWS SNS receivers.

# 4. Technical architecture

Public documentation describes workspaces, remote write ingestion, PromQL querying, managed collectors, scrapers, rule groups, Alert Manager definitions, regional endpoints, retention and out-of-order windows. AMP exposes both AWS management APIs and Prometheus-compatible APIs; exact cardinality limits, costs, data freshness and failure behavior remain version- and quota-sensitive.

# 5. User workflows

Expected workflows include creating a workspace, configuring remote write or a managed scraper, querying metrics with PromQL, defining recording/alerting rules, routing alerts, managing access, configuring retention and deleting or updating workspace resources. Recovery and migration behavior require evidence.

# 6. Pricing and access

Current pricing, retention charges, ingestion/query costs, active-series/cardinality quotas and regional availability must be verified before implementation or cost claims.

# 7. API and integration surface

- AWS APIs for workspaces, scrapers, rule groups, alert manager definitions and logging.
- Prometheus-compatible remote-write, query, rule and alert APIs.
- AWS CLI and SDKs.
- EKS, MSK, OpenSearch, Grafana, IAM and CloudTrail integrations.

# 8. Existing open-source alternatives

Prometheus is the primary open-source foundation. Thanos, Cortex, Mimir and VictoriaMetrics may cover portions of long-term storage, federation or scale, but managed AWS semantics, IAM/SigV4, collectors, quotas and integrations are not assumed equivalent.

# 9. Alternative comparison

Self-hosted Prometheus preserves the data model, remote-write protocol and PromQL but transfers storage, scaling, availability, collectors, security, rules and operations to the implementer. Compare long-term storage, deduplication, alert routing, cardinality controls and migration separately.

# 10. Missing capabilities and opportunity analysis

Research must map workspace lifecycle, remote-write and scrape behavior, retention, out-of-order handling, active-series/cardinality limits, query limits, rule evaluation, Alert Manager receivers, multi-account access, regional behavior and failure recovery.

# 11. REA implementation strategy

Use official AWS and Prometheus documentation and authorized API observation. Capture control-plane and data-plane contracts separately before selecting Prometheus, Thanos, Mimir, Cortex or VictoriaMetrics as a partial foundation or implementing an independent equivalent. Do not claim AWS-managed parity.

# 12. Security, privacy, and compliance

Verify IAM boundaries, workspace isolation, network access, encryption, CloudTrail coverage, metric sensitivity, cross-account roles and secret handling.

# 13. Sources and evidence

- **Identity and API surfaces:** [AMP User Guide](https://docs.aws.amazon.com/prometheus/latest/userguide/) and [API Reference](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html) document workspaces, separate AWS control-plane and Prometheus-compatible data-plane APIs.
- **Ingestion:** [Prometheus collector ingestion](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-ingest-with-prometheus.html) and [ACK integration](https://docs.aws.amazon.com/prometheus/latest/userguide/integrating-ack.html) document remote write and managed Kubernetes integration.
- **Workspace controls:** [workspace configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-workspace-configuration.html) documents retention, out-of-order windows, rule offsets and active-series limits.
- **Rules and alerts:** [Alert Manager](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html) documents grouping, silencing, routing and SNS receivers; [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/) documents the upstream rule model.

# 14. Unknowns

- Complete API/CLI/SDK command matrix.
- Exact retention, active-series/cardinality, ingestion and query limits.
- Collector, alerting, rule evaluation, deduplication and failure semantics.
- Verified open-source foundation and migration coverage.

# 15. Research status

Researched with verified public AWS and Prometheus sources. AMP identity, workspace/control-plane and data-plane APIs, remote write, collectors, PromQL, rules, Alert Manager and workspace controls are documented. Exact pricing, quotas, regional behavior, failure semantics and full alternative parity remain unknown and are not asserted.
