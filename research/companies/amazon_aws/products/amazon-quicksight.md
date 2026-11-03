---
schema_version: "1.0"
id: "amazon-quicksight"
company_id: "amazon_aws"
name: "Amazon QuickSight"
aliases: ["QuickSight"]
product_type: "business_software"
categories: ["business-intelligence", "analytics", "data-visualization", "dashboards", "embedded-analytics"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/quicksight/"
official_docs_url: "https://docs.aws.amazon.com/quicksight/"
official_source_urls:
  - "https://aws.amazon.com/quicksight/"
  - "https://docs.aws.amazon.com/quicksight/"
  - "https://docs.aws.amazon.com/quicksight/latest/user/welcome.html"
  - "https://docs.aws.amazon.com/cli/latest/reference/quicksight/"
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

Amazon QuickSight is AWS's cloud business-intelligence service for building dashboards, visualizations and analyses from files, databases, AWS sources and SaaS applications. AWS also documents embedded analytics, APIs, SPICE in-memory analytics and governed access. Apache Superset is recorded as a partial self-hosted alternative, not a full replacement.

# 2. Product identity and ownership

- **Official name:** Amazon QuickSight
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Cloud BI, data visualization, dashboards and embedded analytics

# 3. Product capabilities

- Connect files, databases, AWS services and supported SaaS sources.
- Build interactive dashboards, charts, stories and ad hoc analyses.
- Use SPICE for in-memory analytics and governed refresh workflows.
- Embed dashboards or visualizations into applications.
- Manage users, groups, permissions, namespaces, sharing and APIs.

# 4. Technical architecture

The public model includes data sources, datasets, ingestion or direct-query paths, SPICE or live queries, analyses, dashboards, sheets, visuals, refreshes, permissions and embedding APIs. Exact query planning, cache behavior, SPICE limits, refresh state transitions and tenant isolation remain pending REA verification.

# 5. User workflows

Typical workflows include connecting a source, creating a dataset, choosing import or direct query, building an analysis, publishing a dashboard, sharing it, scheduling refreshes, embedding it and monitoring failures. A complete study must test filters, calculated fields, row-level security, refresh failures, export behavior, embedding tokens, concurrency and permissions.

# 6. Pricing and access

Access depends on AWS account configuration, users, readers, authors, regions, capacity and embedded usage. Current pricing, quotas, SPICE capacity, feature availability and free-tier rules must be checked before implementation and are not treated as fixed here.

# 7. API and integration surface

Public surfaces include the QuickSight console, AWS CLI, SDKs, APIs for data sources, datasets, analyses, dashboards, templates, users, groups, namespaces, refreshes, embedding and permissions. Exact request schemas, IAM actions, errors, retries and regional differences require command-level validation.

# 8. Existing open-source alternatives

Apache Superset is an Apache-2.0 open-source data exploration and visualization platform with SQL workflows, dashboards and connectors. It is a strong self-hosted BI foundation, but does not reproduce QuickSight's SPICE layer, AWS account integration, managed service plane or exact embedding and governance contract.

# 9. Alternative comparison

Compare connectors, semantic models, calculated fields, chart and dashboard behavior, refreshes, caching, query execution, row-level security, embedding, exports, alerts, APIs, tenancy, audit logs, cost controls and operational scaling. Superset covers core BI functions; the managed AWS plane is separate work.

# 10. Missing capabilities and opportunity analysis

Research must map source and dataset schemas, SPICE ingestion, direct-query behavior, refresh state, analysis-to-dashboard publication, visual semantics, filters, calculations, permissions, embedding, export, alerts, quotas, caching and failure recovery.

# 11. RAE implementation strategy

Use official AWS documentation, CLI references and authorized sample data. Capture source setup, dataset creation, dashboard publication, embedding, permission changes and failure cases. Use Superset only after recording the partial-foundation verdict, and implement an independent product with original code, compatible licensing and no AWS branding or protected assets.

# 12. Security, privacy, and compliance

Verify IAM scope, row-level security, data-source credentials, encryption, regional processing, SPICE retention, export and embedding token handling, audit logs and tenant isolation. Do not infer compliance from a dashboard demonstration.

# 13. Evidence register

- https://aws.amazon.com/quicksight/ — official product scope.
- https://docs.aws.amazon.com/quicksight/ — official documentation.
- https://docs.aws.amazon.com/quicksight/latest/user/welcome.html — user workflows and capabilities.
- https://docs.aws.amazon.com/cli/latest/reference/quicksight/ — CLI and API surface.
- https://github.com/apache/superset — open-source alternative and Apache-2.0 license.

# 14. Unknowns

- Complete connector, SPICE, direct-query and embedding matrix.
- Exact visual, calculation, refresh, cache and permission semantics.
- Current plans, quotas, pricing, regional behavior and capacity rules.
- Verified parity for governance, tenancy, APIs and operational scaling.

# 15. Research status

Pending deeper REA validation. Product identity, official sources and a partial open-source foundation are documented; no full equivalence claim is made.
