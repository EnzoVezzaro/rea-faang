---
schema_version: "1.0"
id: "aws-billing-conductor"
company_id: "amazon_aws"
name: "AWS Billing Conductor"
aliases: ["Billing Conductor", "AWS custom billing"]
product_type: "business_software"
categories: ["billing", "chargeback", "showback", "cost-management", "pricing", "finops"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/aws-cost-management/aws-billing-conductor/"
official_docs_url: "https://docs.aws.amazon.com/billingconductor/"
official_source_urls:
  - "https://aws.amazon.com/aws-cost-management/aws-billing-conductor/"
  - "https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"
  - "https://docs.aws.amazon.com/billingconductor/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/billingconductor/"
  - "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/"
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

# AWS Billing Conductor

## Scope and lifecycle

AWS Billing Conductor creates a customizable second view of AWS billing data for showback and chargeback. It models billing groups, pricing plans, pricing rules, credits, fees and custom line items without changing how AWS bills the underlying accounts.

## Official surfaces

- Product: https://aws.amazon.com/aws-cost-management/aws-billing-conductor/
- What it is: https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html
- API reference: https://docs.aws.amazon.com/billingconductor/latest/APIReference/
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/billingconductor/
- Billing relationship context: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/

## Capability map

- Create billing groups and associate accounts.
- Create pricing plans and pricing rules.
- Apply credits, fees and custom line items.
- Generate billing-group cost reports and custom rate views.
- Associate and disassociate pricing rules and resources.
- Support showback and chargeback workflows for organizations and AWS Partners.

## API and billing leads

The API includes billing groups, pricing plans, pricing rules, custom line items, account associations, cost reports and billing-transfer preferences. Exact rate transformation, period boundaries, resource association, permissions, organization behavior and report reconciliation require controlled AWS billing fixtures.

## Open-source alternative

Lago is recorded as a partial alternative: https://github.com/getlago/lago. It provides an open usage-billing foundation with meters, pricing models, invoices, credits and subscriptions, but not AWS Organizations grouping, AWS cost semantics, Billing Conductor pricing rules or the AWS billing-console view.

## REA/build guidance

Use the official AWS Billing Conductor documentation and API reference as primary inputs for Reverse Engineer Anything. An independent implementation should separate cost ingestion, account grouping, rate transformation, custom line items, reporting and authorization. Do not present a custom billing model as an AWS invoice or alter real billing data without explicit authorization.

## Unknowns and evidence gaps

- Exact cost-data freshness and reconciliation rules need controlled billing-period fixtures.
- Pricing-rule precedence, credits, fees and custom line-item edge cases require API evidence.
- Account association, organization and billing-transfer behavior require management-account tests.
- Regional availability, quotas and report export semantics must be verified before compatibility claims.
