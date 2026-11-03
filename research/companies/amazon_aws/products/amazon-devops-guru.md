---
schema_version: "1.0"
id: "amazon-devops-guru"
company_id: "amazon_aws"
name: "Amazon DevOps Guru"
aliases:
  - "DevOps Guru"
product_type: "developer_tool"
categories:
  - "observability"
  - "anomaly-detection"
  - "operations"
  - "machine-learning"
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/devops-guru/"
official_docs_url: "https://docs.aws.amazon.com/devops-guru/"
official_source_urls:
  - "https://docs.aws.amazon.com/devops-guru/latest/userguide/"
  - "https://docs.aws.amazon.com/devops-guru/latest/userguide/devops-guru-end-of-support.html"
  - "https://aws.amazon.com/devops-guru/"
research_status: "retired"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: null
next_review_at: "2027-09-30T00:00:00Z"
research_version: 1
---

# 1. Executive summary

Amazon DevOps Guru was a managed AWS operations service that used machine learning to identify anomalous application behavior and produce reactive or proactive recommendations. AWS now states that it stopped accepting new customers on October 29, 2026 and will end access on September 30, 2027. Existing customers can continue during the transition period.

# 2. Product identity and lifecycle

- **Official name:** Amazon DevOps Guru
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued for new customers; end of support September 30, 2027.
- **Product page:** https://aws.amazon.com/devops-guru/

# 3. Historical capabilities

- Anomaly detection over CloudWatch metrics, CloudTrail events and operational data.
- Reactive and proactive insights.
- Recommendations, related events and metrics.
- SNS notifications and Systems Manager OpsCenter integration.

# 4. Technical architecture

Historical public documentation exposed resource coverage, CloudWatch/CloudTrail inputs, insight generation and notification flows. Internal ML models, baselines, detection logic and recommendation ranking are not public.

# 5. User workflows

Existing users specify AWS resource coverage, enable analysis, receive insights and notifications, then review recommendations. AWS recommends migrating alerting/anomaly detection to CloudWatch and AI-assisted investigation to Amazon DevOps Agent.

# 6. Pricing and access

New customer access is closed. Existing customer charges and transition behavior require account-specific verification; no current pricing claim is made here.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/devops-guru/latest/userguide/
- End-of-support guidance: https://docs.aws.amazon.com/devops-guru/latest/userguide/devops-guru-end-of-support.html
- Public surfaces included console, API, SDK, AWS CLI, CloudWatch, CloudTrail, SNS and OpsCenter.

# 8. Existing open-source alternatives

Potentially relevant projects include Prometheus, Grafana, OpenSearch Anomaly Detection, Zabbix and OpenTelemetry. They are not treated as verified equivalents, and AWS's recommended successors are not open-source alternatives.

# 9. Alternative comparison

Open-source observability tools can cover metrics, alerts and some anomaly detection, but no equivalence is claimed for DevOps Guru's managed AWS integration, learned recommendations or historical service behavior.

# 10. Missing capabilities and opportunity analysis

No new implementation is recommended from this retired entry. Historical compatibility research would need to scope the input signals, insight model, notification behavior and migration target explicitly.

# 11. RAE implementation strategy

Use this entry only for clean-room historical analysis or migration research. Do not reproduce proprietary ML models, detector logic or recommendation content, and do not treat it as a current build target.

# 12. Security, privacy, and compliance

Historical and migration research must verify telemetry permissions, retention, IAM, cross-account access and source-data handling. No security or compliance guarantee is inferred.

# 13. Evidence register

- https://docs.aws.amazon.com/devops-guru/latest/userguide/ — official scope and end-of-support notice.
- https://docs.aws.amazon.com/devops-guru/latest/userguide/devops-guru-end-of-support.html — official retirement timeline and migration guidance.
- https://aws.amazon.com/devops-guru/ — official product status.

# 14. Unknowns

- Existing-customer migration behavior and exact cutoff timing by Region.
- Historical model, detector and recommendation behavior.
- Compatibility of CloudWatch and DevOps Agent replacements.

# 15. Research status

`retired`: identity, historical scope and retirement timeline are documented; this entry is retained for catalog completeness and is not a recommendation for a new implementation.
