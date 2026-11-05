---
schema_version: "1.0"
id: "amazon-cloudwatch"
company_id: "amazon_aws"
name: "Amazon CloudWatch"
aliases:
  - "CloudWatch"
product_type: "data_platform"
categories:
  - "observability"
  - "monitoring"
  - "logging"
  - "metrics"
  - "application-performance"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/cloudwatch/"
official_docs_url: "https://docs.aws.amazon.com/cloudwatch/"
official_source_urls:
  - "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"
  - "https://docs.aws.amazon.com/cloudwatch/"
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

Amazon CloudWatch is AWS's observability platform for monitoring AWS resources and applications in real time. Public documentation covers metrics, alarms, dashboards, logs, Logs Insights, application and infrastructure monitoring, agent-based collection, OpenTelemetry support and cross-account views.

# 2. Product identity and ownership

- **Official name:** Amazon CloudWatch
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/cloudwatch/

# 3. Product capabilities

- Metrics collection, custom metrics, alarms and dashboards.
- CloudWatch Logs ingestion, storage, filters and Logs Insights queries.
- Application performance and infrastructure monitoring.
- CloudWatch agent for host metrics, logs, traces and GPU metrics.
- OpenTelemetry support, cross-account monitoring and network monitoring features.

# 4. Technical architecture

Public material exposes multiple telemetry planes: metrics, logs, traces, alarms, dashboards, agents, OpenTelemetry integrations and service-specific namespaces. AWS-managed storage, query execution, scale characteristics and internal control-plane behavior remain unknown.

# 5. User workflows

Typical documented workflows are to enable service metrics, install/configure an agent or OpenTelemetry exporter, create log groups and streams, build dashboards and alarms, then query or route telemetry. Exact workflows vary by AWS service and deployment model.

# 6. Pricing and access

Pricing depends on ingestion, storage, queries, custom metrics, alarms, dashboards and related features. Current account, Region and feature pricing must be checked before making cost claims.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/
- Service documentation: https://docs.aws.amazon.com/cloudwatch/
- Public surfaces include AWS Console, AWS CLI, SDK/API operations, agents, OpenTelemetry and integrations with AWS services.

# 8. Existing open-source alternatives

Potentially relevant projects include Prometheus, Grafana, OpenTelemetry Collector, Loki, Jaeger and OpenSearch. Their coverage is not yet verified as a combined equivalent of CloudWatch's managed service plane.

# 9. Alternative comparison

Open-source observability components can cover metrics, logs, traces and dashboards when assembled and operated independently. They do not automatically reproduce CloudWatch's AWS-native integrations, account model, managed scaling, billing integration or service-specific telemetry.

# 10. Missing capabilities and opportunity analysis

REA research should map CloudWatch's product surfaces separately rather than treating it as one monolithic monitor: metrics, logs, traces, alarms, dashboards, agents, query languages, integrations, retention and cross-account behavior.

# 11. REA implementation strategy

Use public AWS documentation, public API specifications and permitted client behavior only. A clean-room equivalent should begin with an explicitly bounded telemetry scope and may compose open-source components; it must not copy AWS implementation or proprietary assets.

# 12. Security, privacy, and compliance

Research must verify IAM authorization, cross-account access, log and metric data exposure, encryption, retention, auditability and regional behavior. Do not infer compliance from the existence of a CloudWatch feature.

# 13. Evidence register

- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html — official scope and capabilities.
- https://docs.aws.amazon.com/cloudwatch/ — official documentation and API references.
- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html — official metrics concepts.

# 14. Unknowns

- Full service and feature matrix by Region.
- Exact API behavior, quotas and pricing for each telemetry plane.
- Internal storage, indexing, query planning and scaling behavior.
- Coverage and compatibility of open-source alternatives for AWS-native integrations.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
