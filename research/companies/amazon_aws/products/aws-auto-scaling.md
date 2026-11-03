---
schema_version: "1.0"
id: "aws-auto-scaling"
company_id: "amazon_aws"
name: "AWS Auto Scaling"
aliases: ["AWS Auto Scaling plans", "Auto Scaling plans"]
product_type: "cloud_infrastructure"
categories: ["autoscaling", "capacity-management", "predictive-scaling", "resource-management", "cloud-operations"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/autoscaling/"
official_docs_url: "https://docs.aws.amazon.com/autoscaling/"
official_source_urls:
  - "https://aws.amazon.com/autoscaling/"
  - "https://docs.aws.amazon.com/autoscaling/"
  - "https://docs.aws.amazon.com/autoscaling/plans/APIReference/Welcome.html"
  - "https://docs.aws.amazon.com/cli/latest/reference/autoscaling-plans/"
  - "https://aws.amazon.com/autoscaling/faqs/"
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

# AWS Auto Scaling

## Scope and lifecycle

AWS Auto Scaling provides scaling plans and unified target-tracking and predictive scaling across supported AWS resources. It is distinct from the underlying Amazon EC2 Auto Scaling and Application Auto Scaling services that perform resource-specific scaling operations.

## Official surfaces

- Product: https://aws.amazon.com/autoscaling/
- Documentation: https://docs.aws.amazon.com/autoscaling/
- Scaling plans API: https://docs.aws.amazon.com/autoscaling/plans/APIReference/Welcome.html
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/autoscaling-plans/
- FAQ: https://aws.amazon.com/autoscaling/faqs/

## Capability map

- Create and manage scaling plans for related scalable resources.
- Define target-tracking policies and capacity limits.
- Configure predictive and dynamic scaling for supported EC2 groups.
- Retrieve current and historical forecast data.
- Coordinate scaling across supported services including EC2, ECS, Aurora and DynamoDB.

## API and control-plane leads

The scaling-plans API covers plan creation, application, deletion, policy configuration and forecast retrieval. Exact supported-resource behavior, forecast generation, policy interaction, throttling, failure recovery and handoff to EC2/Application Auto Scaling require controlled evidence.

## Open-source alternative

KEDA is recorded as a partial alternative: https://github.com/kedacore/keda. It provides event-driven autoscaling for Kubernetes, including scale-to-zero, but does not reproduce AWS scaling plans, EC2 capacity management, AWS provider adapters, predictive forecasts or IAM semantics.

## REA/build guidance

Use the official AWS scaling-plan documentation and FAQ as primary inputs for Reverse Engineer Anything. An independent implementation should separate plan evaluation, forecast generation, provider adapters, policy reconciliation and resource-specific executors. Do not conflate this product with EC2 Auto Scaling or Application Auto Scaling.

## Unknowns and evidence gaps

- Supported-resource coverage and policy interactions vary by service and need current documentation checks.
- Forecast model inputs, accuracy, update cadence and failure behavior require controlled runtime evidence.
- Exact handoff semantics to underlying AWS scaling services need API and event traces.
- IAM, quotas and multi-region behavior should be tested before claiming compatibility.
