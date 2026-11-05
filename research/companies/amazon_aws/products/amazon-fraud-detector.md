---
schema_version: "1.0"
id: "amazon-fraud-detector"
company_id: "amazon_aws"
name: "Amazon Fraud Detector"
aliases:
  - "Fraud Detector"
product_type: "security"
categories:
  - "fraud-detection"
  - "machine-learning"
  - "risk"
  - "online-fraud"
  - "managed-service"
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/fraud-detector/"
official_docs_url: "https://docs.aws.amazon.com/frauddetector/"
official_source_urls:
  - "https://aws.amazon.com/fraud-detector/"
  - "https://docs.aws.amazon.com/frauddetector/latest/ug/frauddetector-availability-change.html"
  - "https://docs.aws.amazon.com/frauddetector/latest/ug/"
  - "https://aws.amazon.com/fraud-detector/faqs/"
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

Amazon Fraud Detector was AWS's managed service for detecting potentially fraudulent online activities with machine-learning models, business rules and real-time prediction scores. AWS stopped accepting new customers on November 7, 2025; the entry is retained for historical coverage and migration research, not as a recommendation for new deployments.

# 2. Product identity and ownership

- **Official name:** Amazon Fraud Detector
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued for new customers
- **Product page:** https://aws.amazon.com/fraud-detector/

# 3. Product capabilities

- Define events, variables, labels and fraud-detection models.
- Train custom models from historical event data.
- Combine model scores with business rules and detector versions.
- Deploy detectors and request real-time fraud predictions.
- Apply to payment fraud, account creation, account takeover and promotion abuse use cases.

# 4. Technical architecture

The public surface includes event types, entities, variables, labels, models, model versions, detectors, rules, outcomes, lists, batch and real-time prediction APIs, CloudFormation, CLI, SDK and console interfaces. Current service availability and existing-customer behavior require verification after the availability change.

# 5. User workflows

Users define an event schema, upload historical events, train a model, create rules and detector versions, deploy them and send events for prediction. Migration must distinguish the historical workflow from AWS's recommended alternatives such as SageMaker, AutoGluon and WAF Fraud Control.

# 6. Pricing and access

The service was usage-based, with storage, training and prediction charges, but it is no longer open to new customers. Current access, pricing and retained-account terms require explicit AWS verification.

# 7. API and integration surface

- Developer Guide: https://docs.aws.amazon.com/frauddetector/
- Availability notice: https://docs.aws.amazon.com/frauddetector/latest/ug/frauddetector-availability-change.html
- Interfaces included AWS console, CLI, SDKs and CloudFormation.
- Exact endpoint, permission, quota, model and event semantics require REA capture for any existing customer migration.

# 8. Existing open-source alternatives

AWS identifies AutoGluon as an open-source alternative and also points to Amazon SageMaker and AWS WAF Fraud Control for related capabilities. Other potentially relevant projects include scikit-learn, XGBoost and specialized fraud-detection pipelines. No full equivalence is claimed.

# 9. Alternative comparison

AutoGluon and general ML libraries can replace model-training components, while SageMaker can provide managed deployment and WAF Fraud Control can address selected account-creation use cases. None is assumed to reproduce Fraud Detector's historical event, detector, rules and prediction APIs without migration evidence.

# 10. Missing capabilities and opportunity analysis

REA should map event schemas, model training, detector/rule versions, lists, batch and real-time prediction, latency, quotas, IAM, data retention, model export and migration paths for existing customers.

# 11. REA implementation strategy

Use official AWS documentation and AWS's stated migration alternatives as the research surface. A clean-room replacement should combine independently licensed ML and rule components, document differences, and avoid copying proprietary models, training data or AWS implementation.

# 12. Security, privacy, and compliance

Research must verify event-data sensitivity, PII handling, encryption, IAM, model and detector access, retention, audit logs, prediction exposure, regional availability and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/fraud-detector/ — official product scope and availability notice.
- https://docs.aws.amazon.com/frauddetector/latest/ug/frauddetector-availability-change.html — official new-customer cutoff and alternatives.
- https://docs.aws.amazon.com/frauddetector/latest/ug/ — official historical service documentation.
- https://aws.amazon.com/fraud-detector/faqs/ — official capabilities and access context.

# 14. Unknowns

- Exact existing-customer access and end-of-life timeline.
- Complete event, model, detector, rule and API compatibility matrix.
- Migration tooling, data export and retention behavior.
- Current pricing and regional endpoint status.
- Verified replacement for the complete managed workflow.

# 15. Research status

`retired`: the product is retained for historical catalog coverage; it is not recommended for new deployments and requires future migration-focused REA review.
