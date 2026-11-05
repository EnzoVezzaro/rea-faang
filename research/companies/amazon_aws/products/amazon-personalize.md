---
schema_version: "1.0"
id: "amazon-personalize"
company_id: "amazon_aws"
name: "Amazon Personalize"
aliases: ["Personalize"]
product_type: "machine_learning_framework"
categories: ["recommendations", "personalization", "machine-learning", "ranking", "customer-experience"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/personalize/"
official_docs_url: "https://docs.aws.amazon.com/personalize/"
official_source_urls:
  - "https://aws.amazon.com/personalize/"
  - "https://aws.amazon.com/documentation-overview/personalize/"
  - "https://aws.amazon.com/personalize/faqs/"
  - "https://docs.aws.amazon.com/personalize/"
  - "https://docs.aws.amazon.com/personalize/latest/dg/setup.html"
  - "https://docs.aws.amazon.com/personalize/latest/dg/getting-recommendations.html"
  - "https://docs.aws.amazon.com/personalize/latest/dg/import-data.html"
  - "https://docs.aws.amazon.com/personalize/latest/dg/filter.html"
  - "https://github.com/RUCAIBox/RecBole"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
---

# 1. Executive summary

Amazon Personalize is a managed machine-learning service that trains private recommendation models from user, item and interaction data and serves personalized results through APIs. AWS documents real-time and batch recommendations, personalized ranking, similar items, Trending Now, Next Best Action, contextual recommendations, filters, promotions, segments and metadata/text features.

# 2. Product identity and ownership

- **Official name:** Amazon Personalize
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Personalized recommendations and ranking for application and content catalogs

# 3. Product capabilities

- Import historical interaction, user and item data from S3 or integrations.
- Train private recommendation solutions and deploy campaigns or recommenders.
- Request real-time recommendations and personalized rankings.
- Generate batch recommendations and user segments.
- Apply filters, promotions, contextual data and business rules.

# 4. Technical architecture

The public workflow includes datasets and dataset groups, data import, solution versions or recommenders, campaigns/endpoints, event trackers, filters, batch jobs and inference APIs. Exact training states, algorithm choice, model versioning, quotas and service internals remain pending.

# 5. User workflows

AWS describes a three-stage path: provide interaction/catalog data, train a custom private model, and retrieve recommendations. Expanded workflows include creating datasets, importing data, selecting a recipe or recommender, training, evaluating, deploying, sending real-time events, requesting recommendations, running batch jobs, applying filters and updating models. Complete validation, errors, retries, cancellation and recovery require REA/API testing.

# 6. Pricing and access

Access requires an AWS account, regional endpoints and IAM permissions. Pricing depends on training, inference, campaign/recommender capacity, events and data operations; current quotas, regions, free-tier eligibility and billing details must be verified before implementation.

# 7. API and integration surface

Public surfaces include console, AWS CLI, SDKs, data import from S3, event tracking, real-time inference, batch recommendations, segments, filters, campaigns/recommenders, IAM, KMS and CloudWatch. The complete API and authorization matrix remains pending.

# 8. Existing open-source alternatives

RecBole is an MIT-licensed open-source recommendation library with broad algorithm and evaluation coverage. It is a foundation for model research or an independent service, not a drop-in replacement for Personalize's managed ingestion, private model hosting, inference APIs, filters, promotions, security and operations.

# 9. Alternative comparison

An independent equivalent should compare data schemas, event ingestion, model training, ranking semantics, cold-start behavior, real-time latency, batch jobs, filters, business rules, segments, model deployment, monitoring and privacy. RecBole covers model development and evaluation but leaves the service plane to be built.

# 10. Missing capabilities and opportunity analysis

Research must map dataset schemas, recipes, solution/recommender state transitions, campaign deployment, event tracking, inference contracts, batch output, filters, promotions, contextual metadata, text extraction, quotas, retries and model refresh behavior.

# 11. REA implementation strategy

Use official AWS documentation, API references and authorized test data. Capture data import, training, deployment, inference and failure paths. Use RecBole or another reviewed foundation only after recording a foundation verdict; implement an independent service in the consumer project without copying AWS code, branding or protected assets.

# 12. Security, privacy, and compliance

Verify IAM roles, encryption in transit and at rest, KMS, regional data processing, customer model isolation, event payload minimization, retention, audit logging and access to recommendation outputs.

# 13. Sources and evidence

- [What is Amazon Personalize?](https://docs.aws.amazon.com/personalize/latest/dg/) — official identity, use cases and managed recommendation model.
- [Importing training data](https://docs.aws.amazon.com/personalize/latest/dg/import-data.html) — official bulk and individual data-import workflows.
- [Getting recommendations](https://docs.aws.amazon.com/personalize/latest/dg/getting-recommendations.html) — official real-time, batch and scoring workflows.
- [Filtering recommendations](https://docs.aws.amazon.com/personalize/latest/dg/filter.html) — official filters, promotions and recommendation controls.
- [RecBole](https://github.com/RUCAIBox/RecBole) — open-source recommendation foundation and MIT license.

# 14. Unknowns

- Complete API/CLI/SDK, recipe and recommender matrix.
- Exact training, deployment, inference, batch and event state semantics.
- Quotas, limits, latency, pricing and regional behavior.
- Verified model quality, cold-start and filter/promotion parity with an independent foundation.

# 15. Research status

`researched`: identity, data import, recommendation, filtering and batch/real-time capabilities were verified from official AWS documentation. Pricing, quotas, account-specific behavior and full service-plane equivalence to RecBole remain outside this pass.
