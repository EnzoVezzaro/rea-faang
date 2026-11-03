---
schema_version: "1.0"
id: "amazon-managed-grafana"
company_id: "amazon_aws"
name: "Amazon Managed Grafana"
aliases:
  - "Amazon Managed Service for Grafana"
  - "AMG"
product_type: "data_platform"
categories: ["observability", "visualization", "dashboards", "monitoring", "managed-service"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/grafana/"
official_docs_url: "https://docs.aws.amazon.com/grafana/"
official_source_urls:
  - "https://aws.amazon.com/grafana/"
  - "https://docs.aws.amazon.com/grafana/latest/userguide/"
  - "https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-workspaces-users.html"
  - "https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html"
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

Amazon Managed Grafana is AWS's managed Grafana workspace service for querying and visualizing metrics, logs and traces from AWS and other data sources. AWS manages workspace provisioning, scaling, maintenance and security integrations.

# 2. Product identity and ownership

- **Official name:** Amazon Managed Grafana
- **Company:** Amazon Web Services
- **Underlying technology:** Grafana, an open-source visualization platform
- **Lifecycle:** Active

# 3. Product capabilities

- Create isolated Grafana workspaces.
- Build dashboards and visualizations for metrics, logs and traces.
- Connect CloudWatch, OpenSearch, X-Ray, IoT SiteWise, Timestream, Prometheus and other sources.
- Manage users, groups, data-source permissions and notification channels.
- Integrate SAML 2.0, IAM Identity Center, IAM and audit reporting.

# 4. Technical architecture

The public surface includes managed workspaces, Grafana versions, AWS API/CLI operations, data-source permission provisioning, authentication, network access and optional enterprise plugins. Exact plugin, version, quota and regional behavior remains pending.

# 5. User workflows

Expected workflows include creating a workspace, selecting authentication, granting data-source permissions, creating dashboards, configuring alerts and managing users or groups. Upgrade, migration, network isolation and failure recovery require verification.

# 6. Pricing and access

AWS prices Amazon Managed Grafana per active user in a workspace, with possible additional costs for data sources and plugins. Current pricing, quotas and regional availability must be verified before implementation or cost claims.

# 7. API and integration surface

- Amazon Managed Grafana API, AWS CLI and SDKs.
- Grafana HTTP APIs and service accounts where enabled.
- CloudWatch, OpenSearch, X-Ray, IoT SiteWise, Timestream and Managed Prometheus.
- SAML 2.0 and IAM Identity Center authentication.

# 8. Existing open-source alternatives

Grafana itself is the principal open-source foundation. Other observability dashboards may cover subsets, but managed provisioning, AWS identity, permissions, workspace isolation and integrations are not assumed equivalent.

# 9. Alternative comparison

Self-hosted Grafana offers broad visualization and plugin support but transfers provisioning, upgrades, security, identity and scaling responsibilities to the operator. A full equivalence decision remains pending.

# 10. Missing capabilities and opportunity analysis

Research must map workspace states, Grafana versions, plugins, data-source permissions, alerting, dashboards, service accounts, network access, encryption, limits and migration behavior.

# 11. RAE implementation strategy

Use official AWS and Grafana documentation and authorized public API observation. Record evidence for workspace, authentication, permissions and dashboard workflows before selecting a foundation or implementing an independent equivalent.

# 12. Security, privacy, and compliance

Verify SSO, IAM, workspace isolation, data-source least privilege, network access, encryption, audit logs, plugin permissions and secret handling. Do not infer compliance from the managed-service label.

# 13. Evidence register

- https://aws.amazon.com/grafana/ — official overview.
- https://docs.aws.amazon.com/grafana/latest/userguide/ — user guide and integrations.
- https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-workspaces-users.html — workspace and user management.
- https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html — IAM permissions.

# 14. Unknowns

- Complete API/CLI/SDK command matrix.
- Exact workspace, version, plugin and region limits.
- Data-source permission and alerting semantics.
- Migration behavior and verified independent foundation coverage.

# 15. Research status

`pending`: identity and public capability surface are documented from official AWS sources, but full REA capture, detailed behavior, limits and alternative coverage remain unverified.
