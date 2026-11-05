---
schema_version: "1.0"
id: "amazon-timestream"
company_id: "amazon_aws"
name: "Amazon Timestream"
aliases: ["Timestream", "Amazon Timestream for LiveAnalytics", "Amazon Timestream for InfluxDB"]
product_type: "data_platform"
categories: ["time-series", "database", "iot", "observability", "analytics", "serverless"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/timestream/"
official_docs_url: "https://docs.aws.amazon.com/timestream/"
official_source_urls:
  - "https://aws.amazon.com/timestream/"
  - "https://aws.amazon.com/documentation-overview/timestream/"
  - "https://aws.amazon.com/timestream/faqs/"
  - "https://docs.aws.amazon.com/timestream/latest/APIReference/"
  - "https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html"
  - "https://docs.aws.amazon.com/timestream/latest/developerguide/architecture.html"
  - "https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html"
  - "https://docs.aws.amazon.com/timestream/latest/developerguide/writes.html"
  - "https://docs.aws.amazon.com/timestream/latest/developerguide/queries.html"
  - "https://docs.aws.amazon.com/timestream/latest/developerguide/scheduledqueries-schedule.html"
  - "https://docs.aws.amazon.com/cli/latest/reference/timestream-query/"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
---

# 1. Executive summary

Amazon Timestream is AWS's managed time-series data platform. Its current public documentation distinguishes Timestream for LiveAnalytics from managed Timestream for InfluxDB, with ingestion, retention, storage tiers, querying and integrations for IoT and operational workloads. VictoriaMetrics is recorded as a partial open-source foundation, not an equivalent service.

# 2. Product identity and ownership

- **Official name:** Amazon Timestream
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Managed time-series storage and analytics

# 3. Product capabilities

- Ingest high-volume time-series records for IoT, metrics and operational systems.
- Query recent and historical data across memory and magnetic storage tiers.
- Apply retention policies and scheduled queries for aggregates and rollups.
- Use LiveAnalytics APIs or managed InfluxDB-compatible databases.
- Integrate with AWS IoT, Kinesis, MSK, Telegraf, Grafana and analytics tools.

# 4. Technical architecture

The public model includes databases, tables, dimensions, measures, records, Write and Query APIs, endpoint discovery, retention policies, memory and magnetic stores, scheduled queries, encryption and separate InfluxDB database or cluster surfaces. Exact consistency, ingestion ordering, duplicate handling, query semantics, tier transitions, quotas and regional behavior remain pending REA verification.

# 5. User workflows

Typical workflows include creating a database and table, writing records, querying recent and historical data, configuring retention, scheduling rollups, connecting Telegraf or Grafana and managing an InfluxDB deployment. A complete study must test timestamp precision, duplicate records, late arrivals, rejected writes, pagination, SQL functions, tier boundaries, retention deletion, endpoint discovery, throttling and failures.

# 6. Pricing and access

Access requires an AWS account, IAM permissions and regional service availability. Pricing, free-tier eligibility, ingestion/query/storage charges, retention limits, InfluxDB instance requirements and quotas must be verified before implementation. No credentials or customer telemetry belong in this dossier.

# 7. API and integration surface

Public surfaces include the AWS console, AWS CLI, SDKs, CloudFormation and APIs for Timestream Write and Query, including endpoint discovery, database/table management, record writes, queries, scheduled queries and tagging. The service also exposes managed InfluxDB control and data paths. Exact schemas, SQL dialect, errors, retries, idempotency and integration behavior require command-level testing.

# 8. Existing open-source alternatives

VictoriaMetrics is an Apache-2.0 open-source time-series database and monitoring backend with high-ingestion storage, query APIs and cluster options. It provides a practical self-hosted foundation, but does not reproduce Timestream's AWS IAM, serverless scaling, memory/magnetic tier model, adaptive SQL behavior, product split or managed integrations.

# 9. Alternative comparison

Compare write throughput, dimensions and measures, timestamp precision, retention, tiering, SQL and query functions, downsampling, scheduled queries, InfluxDB compatibility, ingestion protocols, Grafana/Telegraf integrations, authentication, encryption, backups, quotas and operational scaling. VictoriaMetrics covers core self-hosted time-series storage; the AWS managed control plane requires additional work.

# 10. Missing capabilities and opportunity analysis

Research must map Write and Query operations, schemas, consistency, duplicate and late-data behavior, scheduled queries, tier movement, retention, InfluxDB surfaces, errors, throttling, quotas, backup and region semantics. Any implementation must use original code and synthetic telemetry fixtures.

# 11. REA implementation strategy

Use the official product, developer, API, CLI and FAQ documentation as primary sources. The generated REA skill should instruct an agent to build an independent time-series implementation beginning with VictoriaMetrics-compatible ingestion or storage where useful, then add retention, tiering, SQL/query, scheduled rollups and integrations only where evidence supports them. Preserve the partial-equivalence verdict and do not claim AWS service parity.

# 12. Security, privacy, and compliance

Verify IAM scope, encryption, KMS usage, VPC endpoints, retention and deletion, backups, logging, data residency and access to telemetry. Use synthetic metrics only. Never store credentials, private telemetry or personal data in the catalog, skill or report.

# 13. Sources and evidence

- **Product model:** [Timestream concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html) and [architecture](https://docs.aws.amazon.com/timestream/latest/developerguide/architecture.html) support the LiveAnalytics time-series, partitioning and decoupled service claims.
- **Storage and writes:** [storage](https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html) and [writes](https://docs.aws.amazon.com/timestream/latest/developerguide/writes.html) document memory/magnetic tiers, retention, late data, upserts and write behavior.
- **Queries and schedules:** [queries](https://docs.aws.amazon.com/timestream/latest/developerguide/queries.html) and [scheduled-query expressions](https://docs.aws.amazon.com/timestream/latest/developerguide/scheduledqueries-schedule.html) support SQL across tiers and schedule claims.
- **API:** [Timestream API Reference](https://docs.aws.amazon.com/timestream/latest/APIReference/) supports Query/Write and management surface claims.
- **Alternative:** [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) is the recorded Apache-2.0 time-series foundation; its coverage remains partial.

# 14. Unknowns

- Complete Write, Query, scheduled-query and InfluxDB operation matrix.
- Exact consistency, late-data, duplicate, tiering, retention and quota semantics.
- Current service boundaries between LiveAnalytics and InfluxDB offerings.
- Integration, backup, encryption and regional behavior under representative load.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

 Researched with verified public AWS sources. Product identity, LiveAnalytics architecture, storage tiers, retention, writes, SQL queries, scheduled queries and API surface are documented. Exact consistency, quotas, pricing, regional behavior and InfluxDB product boundaries remain unknown and are not asserted.
