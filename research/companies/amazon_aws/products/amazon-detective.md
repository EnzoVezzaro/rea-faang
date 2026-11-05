---
schema_version: "1.0"
id: "amazon-detective"
company_id: "amazon_aws"
name: "Amazon Detective"
aliases:
  - "Detective"
product_type: "security"
categories:
  - "security-investigation"
  - "threat-detection"
  - "graph-analysis"
  - "incident-response"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/detective/"
official_docs_url: "https://docs.aws.amazon.com/detective/"
official_source_urls:
  - "https://docs.aws.amazon.com/detective/latest/userguide/"
  - "https://docs.aws.amazon.com/detective/latest/APIReference/Welcome.html"
  - "https://aws.amazon.com/detective/faqs/"
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

Amazon Detective is an AWS security investigation service. It automatically aggregates selected security telemetry and findings, then uses machine learning, statistical analysis, graph theory and visualizations to help investigators understand suspicious activity and root causes.

# 2. Product identity and ownership

- **Official name:** Amazon Detective
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/detective/

# 3. Product capabilities

- Behavior graphs for accounts, resources and activity.
- Analysis of CloudTrail, VPC Flow Logs, EKS audit logs and GuardDuty findings.
- Finding groups, indicators of compromise and investigation workflows.
- Interactive entity and relationship visualizations.
- Security Lake integration and API/CLI access.

# 4. Technical architecture

Public documentation exposes administrator/member accounts, behavior graphs, source telemetry, findings, investigations and API operations. Internal graph construction, ML models, statistical baselines, detection logic, storage and query execution remain unknown.

# 5. User workflows

An administrator enables Detective, invites member accounts or uses Organizations, allows data ingestion, then investigates findings and entities through visualizations or API operations. GuardDuty, Security Hub and Security Lake integrations add separate evidence paths.

# 6. Pricing and access

Pricing is based on data volume ingested, with a documented 30-day free trial on first enablement. Current rates, regions, data-source costs and integrated-service charges must be verified before making cost claims.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/detective/latest/userguide/
- API reference: https://docs.aws.amazon.com/detective/latest/APIReference/Welcome.html
- Public surfaces include console, REST API, SDKs, AWS CLI, Organizations, GuardDuty, Security Hub and Security Lake integrations.

# 8. Existing open-source alternatives

Potentially relevant projects include OpenSearch Security Analytics, Velociraptor, Timesketch, Apache AGE and OpenCTI. Their telemetry coverage, graph analysis, detection logic, licenses and operational requirements must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source security analytics and graph tools may cover portions of Detective, but no equivalence is claimed for AWS-native telemetry, managed behavior graphs, integrations, ML investigations or account administration.

# 10. Missing capabilities and opportunity analysis

REA should map behavior-graph ingestion, account administration, source data, finding groups, investigation APIs, visualizations, baselines, integrations and retention independently.

# 11. REA implementation strategy

Use public AWS documentation, API references and synthetic or authorized security telemetry only. A clean-room equivalent should use independently licensed graph and security-analysis components; it must not copy AWS models, detection rules, proprietary data or assets.

# 12. Security, privacy, and compliance

Research must verify telemetry permissions, cross-account access, IAM, encryption, retention, sensitive log handling, source-data minimization and audit trails. Do not infer threat-detection accuracy or compliance from product descriptions.

# 13. Evidence register

- https://docs.aws.amazon.com/detective/latest/userguide/ — official scope and workflows.
- https://docs.aws.amazon.com/detective/latest/APIReference/Welcome.html — official API and behavior-graph model.
- https://aws.amazon.com/detective/faqs/ — official pricing and data-source context.

# 14. Unknowns

- Full source, Region, quota and pricing matrix.
- Detection model, baseline and false-positive behavior.
- Graph retention, query limits and export semantics.
- Open-source coverage for managed integrations and investigation UX.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
