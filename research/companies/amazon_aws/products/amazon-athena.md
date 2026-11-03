---
schema_version: "1.0"
id: "amazon-athena"
company_id: "amazon_aws"
name: "Amazon Athena"
aliases:
  - "Athena"
product_type: "data_platform"
categories:
  - "analytics"
  - "sql"
  - "serverless"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/athena/"
official_docs_url: "https://docs.aws.amazon.com/athena/"
official_source_urls:
  - "https://docs.aws.amazon.com/athena/latest/ug/what-is.html"
  - "https://docs.aws.amazon.com/athena/latest/APIReference/Welcome.html"
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

Amazon Athena is an AWS serverless interactive query service for analyzing data in Amazon S3 with SQL. This is an initial evidence-backed identity record, not a completed REA dossier.

# 2. Product identity and ownership

- **Official name:** Amazon Athena
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/athena/

# 3. Product capabilities

AWS documentation describes SQL queries over S3, automatic parallel execution, serverless operation, and Apache Spark workloads.

# 4. Technical architecture

Pending REA investigation. Public documentation exposes query execution, workgroups, catalogs, result locations and API/SDK access; internal execution remains unknown.

# 5. User workflows

Pending REA investigation. The documented starting flow is to define or discover schema for S3 data and execute SQL through the console, API, SDK, JDBC or ODBC.

# 6. Pricing and access

Pending verification. Query pricing, workgroup controls, regional availability, quotas and data-scan behavior must be checked against current AWS sources.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/athena/
- API reference: https://docs.aws.amazon.com/athena/latest/APIReference/Welcome.html
- JDBC/ODBC and AWS SDK/CLI access are documented by AWS.

# 8. Existing open-source alternatives

Pending. Candidate systems must be assessed for SQL-over-object-storage behavior, catalogs, query engines, concurrency, governance and self-hosting.

# 9. Alternative comparison

Pending evidence-backed comparison; no equivalence is claimed.

# 10. Missing capabilities and opportunity analysis

Pending REA investigation. Do not infer parity from the public product description.

# 11. RAE implementation strategy

Use the RAE skill against the official product page, documentation and permitted public interfaces. Design an independent query service only after documenting evidence, constraints and the open-source foundation decision.

# 12. Security, privacy, and compliance

Pending verification. Research IAM, S3 and Lake Formation authorization, encrypted results, workgroup controls, audit events and data-residency behavior.

# 13. Evidence register

- https://docs.aws.amazon.com/athena/latest/ug/what-is.html — official overview of SQL-over-S3, serverless execution and Spark support.
- https://docs.aws.amazon.com/athena/latest/APIReference/Welcome.html — official API reference and service identity.

# 14. Unknowns

- Query engine and version behavior for each supported workload.
- Workgroup, result reuse, concurrency and cancellation semantics.
- Connector/federated query coverage and limitations.
- Cost, quotas, regional differences and failure recovery.

# 15. Research status

`pending`: official identity and documentation are recorded; REA capture, alternatives research and acceptance review remain outstanding.
