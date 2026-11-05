---
schema_version: "1.0"
id: "amazon-kinesis-data-streams"
company_id: "amazon_aws"
name: "Amazon Kinesis Data Streams"
aliases:
  - "Kinesis Data Streams"
  - "Amazon Kinesis Streams"
product_type: "data_platform"
categories:
  - "event-streaming"
  - "real-time-analytics"
  - "data-ingestion"
  - "stream-processing"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/kinesis/data-streams/"
official_docs_url: "https://docs.aws.amazon.com/streams/latest/dev/"
official_source_urls:
  - "https://aws.amazon.com/kinesis/data-streams/"
  - "https://aws.amazon.com/documentation-overview/kinesis-data-streams/"
  - "https://docs.aws.amazon.com/streams/latest/dev/"
  - "https://docs.aws.amazon.com/kinesis/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/kinesis/"
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

Amazon Kinesis Data Streams is AWS's durable, scalable streaming-data ingestion service. It captures ordered records from high-volume producers, stores them for replay within a configured retention period, and lets multiple consumers process data in real time.

# 2. Product identity and ownership

- **Official name:** Amazon Kinesis Data Streams
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/kinesis/data-streams/

# 3. Product capabilities

- Ingest clickstreams, logs, transactions, telemetry and other event data.
- Partition records into shards with ordered append-only sequences.
- Choose on-demand or provisioned capacity modes.
- Support enhanced fan-out and dedicated consumer throughput.
- Retain and replay records for the configured period, up to documented limits.
- Integrate with Lambda, Managed Service for Apache Flink, Firehose, CloudWatch, KMS, EventBridge and other AWS services.

# 4. Technical architecture

The public surface includes streams, shards, partition keys, records, producers, consumers, sequence numbers, retention, resharding, enhanced fan-out, Kinesis Producer Library, Kinesis Client Library and control/data-plane APIs. This entry is separate from Kinesis Data Firehose, Kinesis Video Streams and Amazon MSK.

# 5. User workflows

Users create a stream, configure capacity and retention, publish records with PutRecord/PutRecords or producer libraries, consume with KCL/SDKs/enhanced fan-out, process records, monitor throughput and reshard or scale as traffic changes. Consumers can replay data from retained sequence positions.

# 6. Pricing and access

Kinesis Data Streams is an AWS pay-as-you-go service. Costs depend on capacity mode, shard/throughput usage, enhanced fan-out, storage/retention, extended retention, data transfer and Region. Current pricing, quotas and mode-specific behavior require verification from official pricing documentation.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/streams/latest/dev/
- API reference: https://docs.aws.amazon.com/kinesis/latest/APIReference/
- AWS CLI namespace: `aws kinesis`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/kinesis/
- Producer/consumer libraries include KPL and KCL; integrations include Lambda, Flink, Firehose, CloudWatch, KMS and PrivateLink.
- Exact API, quota, ordering, resharding, retention and enhanced fan-out behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Apache Kafka, Redpanda, Apache Pulsar, NATS JetStream, RabbitMQ Streams, Redis Streams and Apache Samza. These cover portions of durable event streaming or processing and are not claimed equivalents to Kinesis's managed AWS control plane.

# 9. Alternative comparison

Kafka-compatible systems provide durable partitions and consumer groups, while Kinesis emphasizes managed serverless/provisioned capacity, AWS integrations, shard semantics, retention, IAM and operational simplicity. Exact ordering, scaling and failure behavior must be compared rather than assumed.

# 10. Missing capabilities and opportunity analysis

REA should map stream/shard lifecycle, partitioning, ordering, producer retries, consumer checkpoints, retention/replay, resharding, enhanced fan-out, capacity modes, throughput limits, encryption, IAM, KCL/KPL behavior, integrations and failure recovery.

# 11. REA implementation strategy

Use the official Kinesis Data Streams product page, developer guide, API reference, CLI reference and getting-started documentation as research surfaces. A clean-room implementation should use independently licensed streaming components, document semantic differences and avoid copying AWS control-plane or client-library internals.

# 12. Security, privacy, and compliance

Research must verify IAM, KMS encryption, TLS, VPC PrivateLink, CloudTrail, stream access, consumer isolation, retention/deletion, cross-account permissions and sensitive-event handling.

# 13. Evidence register

- https://aws.amazon.com/kinesis/data-streams/ — official product scope.
- https://aws.amazon.com/documentation-overview/kinesis-data-streams/ — official architecture and capacity overview.
- https://aws.amazon.com/kinesis/data-streams/getting-started/ — official producer/consumer workflow.
- https://docs.aws.amazon.com/streams/latest/dev/ — official developer guide.
- https://docs.aws.amazon.com/kinesis/latest/APIReference/ — official API surface.

# 14. Unknowns

- Complete on-demand/provisioned, shard, retention and extended-retention limits.
- Ordering and replay guarantees under resharding and failures.
- Full KCL/KPL, enhanced fan-out and integration behavior.
- Current pricing, Region and quota matrix.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, streaming semantics, alternatives and acceptance review remain outstanding.
