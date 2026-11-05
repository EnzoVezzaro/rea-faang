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
  - "https://docs.aws.amazon.com/grafana/latest/userguide/AMG-create-workspace.html"
  - "https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html"
  - "https://docs.aws.amazon.com/grafana/latest/userguide/data-source-permissions.html"
  - "https://docs.aws.amazon.com/grafana/latest/userguide/Grafana-administration-authorization.html"
  - "https://docs.aws.amazon.com/grafana/latest/APIReference/API_Operations.html"
  - "https://docs.aws.amazon.com/grafana/latest/userguide/api-reference-v13.html"
  - "https://grafana.com/docs/grafana/latest/introduction/"
  - "https://grafana.com/docs/grafana/latest/datasources/"
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

Amazon Managed Grafana is AWS's managed Grafana workspace service for querying, visualizing and alerting on metrics, logs and traces from AWS and other data sources. AWS manages workspace provisioning and service operations while the workspace retains Grafana dashboards, permissions and data-source configuration.

# 2. Product identity and ownership

- **Official name:** Amazon Managed Grafana
- **Company:** Amazon Web Services
- **Underlying technology:** Grafana, an open-source visualization platform
- **Lifecycle:** Active

# 3. Product capabilities

- Create isolated Grafana workspaces.
- Build dashboards and visualizations for metrics, logs and traces.
- Connect CloudWatch, OpenSearch, X-Ray, IoT SiteWise, Timestream, Prometheus and other sources.
- Manage users, groups, teams, data-source permissions, service accounts and notification channels.
- Integrate SAML 2.0, IAM Identity Center, IAM and audit reporting.

# 4. Technical architecture

The public surface includes managed workspaces, selectable Grafana versions, AWS API/CLI operations, data-source permission provisioning, SAML/IAM Identity Center authentication, VPC/network access and Grafana HTTP APIs. Workspace creation supports service-managed or customer-managed AWS permissions; exact plugin, version, quota and regional behavior remains version-sensitive.

# 5. User workflows

Expected workflows include creating a workspace, selecting authentication, granting workspace and data-source permissions, connecting sources, creating dashboards, configuring alerts, managing users/groups/service accounts and calling supported Grafana APIs. Upgrade, migration, network isolation and failure recovery require verification.

# 6. Pricing and access

AWS prices Amazon Managed Grafana per active user in a workspace, with possible additional costs for data sources and plugins. Current pricing, versions, quotas and regional availability must be verified before implementation or cost claims.

# 7. API and integration surface

- Amazon Managed Grafana API, AWS CLI and SDKs.
- Grafana HTTP APIs, service accounts and tokens where supported by the workspace version.
- CloudWatch, OpenSearch, X-Ray, IoT SiteWise, Timestream and Managed Prometheus.
- SAML 2.0 and IAM Identity Center authentication.

# 8. Existing open-source alternatives

Grafana OSS is the principal open-source foundation. Grafana Enterprise/Cloud and other observability dashboards may cover subsets, but AWS-managed provisioning, AWS identity, data-source permissions, workspace isolation and integrations are not assumed equivalent.

# 9. Alternative comparison

Self-hosted Grafana OSS offers broad visualization, alerting and plugin support but transfers provisioning, upgrades, security, identity, permissions, scaling and data-source operations to the operator. It is a partial foundation, not full AMG equivalence.

# 10. Missing capabilities and opportunity analysis

Research must map workspace states, Grafana versions, plugins, data-source permissions, alerting, dashboards, service accounts/tokens, authentication, network access, encryption, limits and migration behavior.

# 11. REA implementation strategy

Use official AWS and Grafana documentation and authorized public API observation. Record evidence for workspace, authentication, permissions, data sources, dashboards and API workflows before selecting Grafana OSS as a partial foundation or implementing an independent equivalent. Do not claim AWS-managed parity.

# 12. Security, privacy, and compliance

Verify SSO, IAM, workspace isolation, data-source least privilege, network access, encryption, audit logs, plugin permissions and secret handling. Do not infer compliance from the managed-service label.

# 13. Sources and evidence

- **Identity and workspaces:** [create an AMG workspace](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-create-workspace.html) documents workspace limits, Grafana versions, authentication and service/customer-managed permissions.
- **Authentication and access:** [workspace authentication](https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html), [user/group access](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-users-and-groups-AMG.html) and [authorization](https://docs.aws.amazon.com/grafana/latest/userguide/Grafana-administration-authorization.html) document SAML, IAM Identity Center and role/team permissions.
- **Data-source permissions:** [data source permissions](https://docs.aws.amazon.com/grafana/latest/userguide/data-source-permissions.html) documents query access controls for users, teams, service accounts and roles.
- **APIs:** [AWS API operations](https://docs.aws.amazon.com/grafana/latest/APIReference/API_Operations.html) and [Grafana v13 APIs](https://docs.aws.amazon.com/grafana/latest/userguide/api-reference-v13.html) document workspace lifecycle and supported workspace HTTP APIs.
- **Foundation:** [Grafana overview](https://grafana.com/docs/grafana/latest/introduction/) and [data sources](https://grafana.com/docs/grafana/latest/datasources/) document the upstream open-source visualization, alerting and plugin model.

# 14. Unknowns

- Complete API/CLI/SDK and supported Grafana HTTP API matrix.
- Exact workspace, version, plugin, user and region limits.
- Data-source permission, service-account and alerting semantics.
- Migration behavior and verified independent foundation coverage.

# 15. Research status

Researched with verified public AWS and Grafana sources. AMG identity, workspace creation, authentication, access control, data-source permissions, APIs and Grafana foundation are documented. Exact pricing, quotas, version/plugin behavior, migration semantics and full managed-service parity remain unknown and are not asserted.
