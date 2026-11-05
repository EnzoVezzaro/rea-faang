---
schema_version: "1.0"
id: "amazon-msk"
company_id: "amazon_aws"
name: "Amazon Managed Streaming for Apache Kafka"
aliases: ["Amazon MSK", "MSK Serverless"]
product_type: "data_platform"
categories: ["streaming", "messaging", "apache-kafka", "event-driven", "managed-service"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/msk/"
official_docs_url: "https://docs.aws.amazon.com/msk/"
official_source_urls:
  - "https://aws.amazon.com/msk/"
  - "https://aws.amazon.com/documentation-overview/msk/"
  - "https://docs.aws.amazon.com/msk/"
  - "https://aws.amazon.com/msk/faqs/"
  - "https://docs.aws.amazon.com/msk/latest/developerguide/limits.html"
  - "https://docs.aws.amazon.com/msk/latest/developerguide/msk-tiered-storage.html"
  - "https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html"
  - "https://docs.aws.amazon.com/msk/latest/developerguide/migration.html"
  - "https://docs.aws.amazon.com/msk/1.0/apireference/MSKAPIReference.pdf"
  - "https://docs.aws.amazon.com/msk/1.0/apireference-replicator/operations.html"
  - "https://kafka.apache.org/42/documentation/"
  - "https://docs.redpanda.com/streaming/current/home/"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-04T00:00:00Z"
last_verified_at: "2026-11-04T00:00:00Z"
next_review_at: "2027-02-04T00:00:00Z"
research_version: 2
---

# 1. Executive summary
Amazon Managed Streaming for Apache Kafka (Amazon MSK) is AWS's managed Apache Kafka service. It separates provisioned clusters from MSK Serverless, manages core infrastructure and operations, and exposes native Kafka clients alongside AWS control-plane and streaming integrations.

# 2. Product identity and ownership
- **Official name:** Amazon Managed Streaming for Apache Kafka
- **Company:** Amazon Web Services
- **Compatibility:** native Apache Kafka
- **Lifecycle:** Active

# 3. Product capabilities
- Provisioned and serverless Kafka clusters.
- Multi-AZ availability, patching, storage scaling and recovery.
- MSK Connect, MSK Replicator and native Kafka client compatibility.
- VPC, IAM, TLS/SASL, encryption and cross-account controls.
- Tiered storage for supported provisioned clusters and AWS data-delivery integrations.
- Integrations with Flink, Lambda, S3, Glue and CloudWatch.

# 4. Technical architecture
Public documentation covers provisioned clusters, MSK Serverless, broker types, ZooKeeper/KRaft-era behavior, serverless capacity, topics, storage/tiered storage, MSK Connect, MSK Replicator, networking, authentication, encryption, monitoring and APIs. Serverless has distinct quotas and requires IAM access control; exact version-specific failure semantics remain pending.

# 5. User workflows
Expected workflows include selecting provisioned or serverless mode, creating a cluster, configuring brokers and networking, creating topics, connecting producers/consumers, scaling storage or brokers, managing MSK Connect and Replicator, upgrading Kafka and deleting resources.

# 6. Pricing and access
MSK uses AWS usage-based pricing; current broker, storage/tiered-storage, serverless throughput, data-transfer, MSK Connect, Replicator and PrivateLink costs must be verified before implementation or cost claims.

# 7. API and integration surface
AWS MSK APIs, CLI and SDKs manage clusters, configurations, brokers, scram secrets, replicators, data delivery and connectivity. Kafka protocol clients, Kafka Connect and MirrorMaker-compatible migration paths form the data plane and migration surface.

# 8. Existing open-source alternatives
Apache Kafka is the primary open-source foundation. Redpanda is a Kafka-compatible event-streaming alternative. Both can cover core event streaming, but managed AWS operations, IAM semantics, MSK Serverless, quotas and integrations are not assumed equivalent.

# 9. Alternative comparison
Self-hosted Kafka preserves protocol and ecosystem compatibility but transfers provisioning, patching, scaling, availability, storage, security, connector, replication and recovery operations to the operator. Compare provisioned and serverless semantics separately.

# 10. Missing capabilities and opportunity analysis
Research must map cluster states, versions, serverless limits, partitions, storage tiers, replication, connectors, IAM/SASL/mTLS auth, upgrades, recovery, quotas and pricing.

# 11. REA implementation strategy
Use official AWS, Apache Kafka and Redpanda documentation and authorized API observation. Capture provisioned, serverless, Connect and Replicator contracts separately before selecting Kafka or Redpanda as a partial foundation or implementing an independent equivalent. Do not claim managed AWS parity.

# 12. Security, privacy, and compliance
Verify VPC isolation, IAM, TLS/SASL, encryption, Secrets Manager, cross-account policies, audit logs, topic permissions and network exposure.

# 13. Sources and evidence
- **Identity and surfaces:** [Amazon MSK documentation](https://docs.aws.amazon.com/msk/) documents the managed Kafka service, provisioned/serverless surfaces and separate API families.
- **Quotas and serverless:** [MSK quotas](https://docs.aws.amazon.com/msk/latest/developerguide/limits.html) documents serverless throughput, connections, partitions and MSK Connect/Replicator limits.
- **Storage and access:** [tiered storage](https://docs.aws.amazon.com/msk/latest/developerguide/msk-tiered-storage.html) and [IAM access control](https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html) document supported storage and authorization behavior.
- **API and migration:** [MSK API reference](https://docs.aws.amazon.com/msk/1.0/apireference/MSKAPIReference.pdf) and [migration guide](https://docs.aws.amazon.com/msk/latest/developerguide/migration.html) document lifecycle, replication and migration surfaces.
- **Alternatives:** [Apache Kafka documentation](https://kafka.apache.org/42/documentation/) documents the upstream event-streaming platform; [Redpanda documentation](https://docs.redpanda.com/streaming/current/home/) documents a Kafka-compatible alternative. Both are partial foundations.

# 14. Unknowns
- Complete API/CLI/SDK and Kafka feature matrix.
- Exact supported versions, quotas and serverless behavior by region.
- Connector, Replicator, upgrade, recovery and billing semantics.
- Verified independent foundation and migration coverage.

# 15. Research status
Researched with verified public AWS and upstream sources. MSK identity, provisioned/serverless distinction, Kafka compatibility, quotas, tiered storage, IAM, APIs, replication/migration and partial alternatives are documented. Exact pricing, version/region behavior, failure semantics and full managed-service parity remain unknown and are not asserted.
