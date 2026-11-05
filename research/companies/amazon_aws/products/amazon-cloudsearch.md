---
schema_version: "1.0"
id: "amazon-cloudsearch"
company_id: "amazon_aws"
name: "Amazon CloudSearch"
aliases:
  - "CloudSearch"
product_type: "search"
categories:
  - "search"
  - "managed-service"
  - "developer-tool"
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/cloudsearch/"
official_docs_url: "https://docs.aws.amazon.com/cloudsearch/"
official_source_urls:
  - "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/what-is-cloudsearch.html"
  - "https://aws.amazon.com/cloudsearch/"
research_status: "retired"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: "2026-11-02T00:00:00Z"
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: "2027-05-02T00:00:00Z"
research_version: 1
---

# 1. Executive summary

Amazon CloudSearch was a fully managed AWS search service for indexing structured and plain-text data and serving search queries. AWS documentation states that it is no longer available to new customers; existing customers may continue using it. AWS recommends Amazon OpenSearch Service for new exploration.

# 2. Product identity and ownership

- **Official name:** Amazon CloudSearch
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued for new customers; existing-customer access may continue.
- **Product page:** https://aws.amazon.com/cloudsearch/

# 3. Product capabilities

- Full-text search with language-specific processing.
- Boolean, prefix, range, faceting and highlighting features.
- Autocomplete suggestions and configurable ranking expressions.
- Structured-data and plain-text indexing.
- Console, AWS SDK, AWS CLI and HTTP access.

# 4. Technical architecture

The public documentation describes search domains containing searchable data and search instances, with separate configuration, document and search endpoints. Internal AWS provisioning, indexing implementation and operational controls are not public.

# 5. User workflows

The documented workflow is to create and configure a search domain, upload documents, allow AWS to index them, then submit signed search requests. This entry does not recommend starting a new implementation because the service is unavailable to new customers.

# 6. Pricing and access

Access is restricted for new customers. Existing-customer entitlements and pricing must be verified in the customer account; no assumption is made from historical free-tier material.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/cloudsearch/latest/developerguide/
- API and CLI references are linked from the official developer resources.
- Configuration, document and search endpoints are distinct surfaces.

# 8. Existing open-source alternatives

OpenSearch, Elasticsearch and Apache Solr cover substantial managed-search functionality, but none is treated as a drop-in equivalent for AWS account integration, provisioning, billing or historical CloudSearch behavior. AWS explicitly points new users toward Amazon OpenSearch Service.

# 9. Alternative comparison

The alternative landscape is partial. Open search engines can reproduce bounded-corpus indexing and query behavior, but deployment, relevance defaults, IAM integration, endpoint semantics and operations differ.

# 10. Missing capabilities and opportunity analysis

No new product opportunity is recommended from this retired entry. Any historical compatibility project would need to define its target API subset and preserve only independently implementable behavior.

# 11. REA implementation strategy

Use the REA skill only for clean-room study of public documentation and permitted interfaces. Keep this entry as a retired reference and do not instruct an agent to reproduce proprietary implementation details or bypass account restrictions.

# 12. Security, privacy, and compliance

Public documentation describes request signing and access policies. Account permissions, data residency, retention and existing-customer controls require account-specific verification.

# 13. Evidence register

- https://docs.aws.amazon.com/cloudsearch/latest/developerguide/what-is-cloudsearch.html — official scope and explicit new-customer restriction.
- https://aws.amazon.com/cloudsearch/ — official product page and OpenSearch recommendation.
- https://aws.amazon.com/compare/cloudsearch-and-opensearch/ — official comparison context.

# 14. Unknowns

- Historical service behavior for legacy API versions.
- Existing-customer entitlement and region availability.
- Exact migration compatibility with Amazon OpenSearch Service.

# 15. Research status

`retired`: product identity, public scope and lifecycle restriction are verified. The entry is retained for catalog completeness, but it is not a recommendation to build a new equivalent.
