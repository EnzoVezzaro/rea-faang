---
schema_version: "1.0"
id: "amazon-data-firehose"
company_id: "amazon_aws"
name: "Amazon Data Firehose"
aliases:
  - "Amazon Kinesis Data Firehose"
  - "Data Firehose"
product_type: "data_platform"
categories:
  - "streaming"
  - "data-ingestion"
  - "etl"
  - "analytics"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/firehose/"
official_docs_url: "https://docs.aws.amazon.com/firehose/"
official_source_urls:
  - "https://docs.aws.amazon.com/firehose/latest/dev/"
  - "https://aws.amazon.com/about-aws/whats-new/2024/02/amazon-data-firehose-formerly-kinesis-data-firehose/"
  - "https://aws.amazon.com/documentation-overview/kinesis-data-firehose/"
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

Amazon Data Firehose is a fully managed service for buffering, optionally transforming and delivering real-time streaming data to destinations such as S3, Redshift, OpenSearch, Splunk, Apache Iceberg and HTTP endpoints. AWS renamed Kinesis Data Firehose to Amazon Data Firehose in 2024 without changing service endpoints or APIs.

# 2. Product identity and ownership

- **Official name:** Amazon Data Firehose
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/firehose/

# 3. Product capabilities

- Delivery streams and producer ingestion.
- Buffering by size and time interval.
- Lambda-based transformation and raw-data backup.
- Delivery to AWS stores, OpenSearch, Splunk, HTTP and third-party providers.
- Format conversion, dynamic partitioning, encryption and CloudWatch metrics.

# 4. Technical architecture

Public documentation exposes producers, delivery streams, buffering, transformation, destinations, retry behavior and delivery metrics. Internal provisioning, scaling, buffering guarantees, delivery semantics and service control-plane implementation remain unknown.

# 5. User workflows

Users create a delivery stream, configure a source and destination, optionally enable transformation/partitioning/encryption, send records through APIs or supported sources, then monitor delivery and retries. Destination-specific behavior must be analyzed separately.

# 6. Pricing and access

Pricing is based on data processed and destination/features; current rates, regional availability and third-party charges require official verification.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/firehose/latest/dev/
- Documentation: https://docs.aws.amazon.com/firehose/
- Public surfaces include AWS Console, API, SDK, AWS CLI, direct PUT, Kinesis sources, MSK and service integrations.

# 8. Existing open-source alternatives

Potentially relevant projects include Apache Kafka Connect, Apache Flink, Apache NiFi, Vector and Fluent Bit. Their delivery semantics, connectors, transformation support and operations must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source streaming and delivery tools can cover parts of Firehose, but no equivalence is claimed for AWS-native destinations, managed scaling, buffering guarantees, IAM integration or operational simplicity.

# 10. Missing capabilities and opportunity analysis

REA should map ingestion APIs, buffering, retries, transformations, format conversion, dynamic partitioning, each destination, encryption, observability and failure recovery separately.

# 11. RAE implementation strategy

Use public AWS documentation, API references and permitted test data only. A clean-room equivalent should compose independently licensed streaming and connector components and must not copy AWS implementation or proprietary assets.

# 12. Security, privacy, and compliance

Research must verify IAM, KMS, endpoint authentication, secret rotation, delivery encryption, raw-data backup, data retention and third-party destination boundaries.

# 13. Evidence register

- https://docs.aws.amazon.com/firehose/latest/dev/ — official scope and workflows.
- https://aws.amazon.com/about-aws/whats-new/2024/02/amazon-data-firehose-formerly-kinesis-data-firehose/ — official rename and API compatibility context.
- https://aws.amazon.com/documentation-overview/kinesis-data-firehose/ — official destinations and feature overview.

# 14. Unknowns

- Full destination, region, quota and pricing matrix.
- Delivery guarantees, ordering and retry semantics by destination.
- Transformation/runtime limits and scaling behavior.
- Open-source coverage for managed operations and AWS-native connectors.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
