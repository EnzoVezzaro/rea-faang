---
schema_version: "1.0"
id: "amazon-forecast"
company_id: "amazon_aws"
name: "Amazon Forecast"
aliases:
  - "Forecast"
product_type: "machine_learning_framework"
categories:
  - "time-series"
  - "forecasting"
  - "machine-learning"
  - "automl"
  - "analytics"
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/forecast/"
official_docs_url: "https://docs.aws.amazon.com/forecast/"
official_source_urls:
  - "https://aws.amazon.com/forecast/"
  - "https://docs.aws.amazon.com/forecast/"
  - "https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html"
  - "https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html"
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

Amazon Forecast was AWS's fully managed time-series forecasting service. Its public documentation describes importing historical and related datasets, training predictors with statistical and machine-learning algorithms, generating forecasts and querying or exporting results. AWS documentation now states that Amazon Forecast is no longer available to new customers, so this catalog entry is retained as a retired product rather than an active recommendation.

# 2. Product identity and ownership

- **Official name:** Amazon Forecast
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued for new customers
- **Product page:** https://aws.amazon.com/forecast/

# 3. Product capabilities

- Import time-series and related datasets.
- Train predictors using built-in algorithms or AutoML selection.
- Generate, query and export forecasts.
- Handle missing values with supported filling methods.
- Apply forecasting to demand, supply chain, staffing, traffic and operational metrics.

# 4. Technical architecture

The documented surface includes datasets, dataset groups, predictors, algorithms, forecasts, forecast exports, console workflows, API operations, SDKs and AWS CLI commands. Current availability, endpoint behavior and retained-account operation require verification because the service is retired for new customers.

# 5. User workflows

Historical and related data are imported, a predictor is trained, a forecast is generated and outputs are visualized, exported or queried by API. Existing users and historical workflows must be distinguished from new-account availability and from replacement services.

# 6. Pricing and access

The archived documentation describes usage-based pricing and a limited introductory free tier, but current availability and pricing cannot be assumed after the retirement notice. Treat all access and cost claims as requiring explicit verification.

# 7. API and integration surface

- Developer Guide: https://docs.aws.amazon.com/forecast/
- API reference example: https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html
- Interfaces included AWS APIs, CLI, Python SDK and console.
- Exact surviving endpoints, permissions, quotas and version behavior require REA capture if an existing account still has access.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Nixtla StatsForecast, MLForecast, GluonTS, Darts, Prophet, PyTorch Forecasting and classical statistical forecasting libraries. No equivalence is claimed; algorithm coverage, training workflow, evaluation, deployment and operations require independent comparison.

# 9. Alternative comparison

Open-source forecasting libraries can replace parts of the modeling workflow, but they do not reproduce a managed AWS service's dataset registry, predictor lifecycle, API, console, scaling and operational model. Because Forecast is retired for new customers, alternatives are relevant for migration research.

# 10. Missing capabilities and opportunity analysis

REA should map dataset and predictor resources, algorithm selection, feature engineering, missing-value handling, training, evaluation, forecast querying/export, quotas, IAM, endpoints, availability and migration paths.

# 11. REA implementation strategy

Use the official archived documentation and public forecasting behavior as research surfaces. A clean-room replacement should use independently licensed forecasting libraries and document differences in algorithms, data contracts, evaluation, APIs, deployment, pricing and operational responsibility.

# 12. Security, privacy, and compliance

Research must verify dataset permissions, encryption, IAM, tenant isolation, retention, forecast output access, regional data handling and any remaining service endpoint behavior for existing customers.

# 13. Evidence register

- https://aws.amazon.com/forecast/ — official product page.
- https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html — official capabilities and access notice.
- https://docs.aws.amazon.com/forecast/latest/dg/how-it-works.html — official workflow resources.
- https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html — official API reference and availability notice.

# 14. Unknowns

- Exact retirement timeline, existing-customer access and endpoint behavior.
- Current migration or replacement guidance from AWS.
- Complete algorithm, quota, pricing and regional matrix.
- Data retention, export and deletion behavior for existing accounts.
- Verified open-source replacement for the full managed workflow.

# 15. Research status

`retired`: the product is retained for historical catalog coverage; it is not recommended for new deployments and requires a future REA/migration review if an existing account needs compatibility analysis.
