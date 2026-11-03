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

# 1. Executive summary
Amazon Managed Streaming for Apache Kafka (Amazon MSK) is AWS's managed Apache Kafka service. It manages Kafka infrastructure and operations, supports provisioned and serverless clusters, and integrates with AWS security and streaming services.

# 2. Product identity and ownership
- **Official name:** Amazon Managed Streaming for Apache Kafka
- **Company:** Amazon Web Services
- **Compatibility:** native Apache Kafka
- **Lifecycle:** Active

# 3. Product capabilities
- Provisioned and serverless Kafka clusters.
- Multi-AZ availability, patching, scaling and recovery.
- Kafka Connect and native Kafka client compatibility.
- VPC, IAM, TLS, encryption and cross-account controls.
- Integrations with Flink, Lambda, S3, Glue and CloudWatch.

# 4. Technical architecture
Public documentation covers clusters, brokers, ZooKeeper/KRaft-era behavior, serverless capacity, topics, storage, tiering, connectors, networking, authentication, encryption, monitoring and APIs. Exact version, quota and failure semantics remain pending.

# 5. User workflows
Expected workflows include creating a cluster, configuring brokers and networking, creating topics, connecting producers/consumers, scaling storage or brokers, managing connectors, upgrading Kafka and deleting resources.

# 6. Pricing and access
MSK uses AWS usage-based pricing; current broker, storage, serverless, data-transfer and PrivateLink costs must be verified before implementation or cost claims.

# 7. API and integration surface
AWS MSK APIs, CLI and SDKs manage clusters, configurations, brokers, scrapers, replicators and connectivity. Kafka protocol clients and Kafka Connect form the data plane.

# 8. Existing open-source alternatives
Apache Kafka is the primary open-source foundation. Redpanda, Pulsar and other streaming systems may cover subsets, but managed AWS operations and integrations are not assumed equivalent.

# 9. Alternative comparison
Self-hosted Kafka preserves protocol and ecosystem compatibility but transfers provisioning, patching, scaling, availability, storage and security operations to the operator.

# 10. Missing capabilities and opportunity analysis
Research must map cluster states, versions, serverless limits, partitions, storage tiers, replication, connectors, auth, upgrades, recovery, quotas and pricing.

# 11. RAE implementation strategy
Use official AWS and Apache Kafka documentation and authorized API observation. Capture contracts before selecting a foundation or implementing an independent equivalent.

# 12. Security, privacy, and compliance
Verify VPC isolation, IAM, TLS/SASL, encryption, Secrets Manager, cross-account policies, audit logs, topic permissions and network exposure.

# 13. Evidence register
- https://aws.amazon.com/msk/ — official overview.
- https://aws.amazon.com/documentation-overview/msk/ — managed operations and integrations.
- https://docs.aws.amazon.com/msk/ — developer and API documentation.
- https://aws.amazon.com/msk/faqs/ — Kafka compatibility and operating model.

# 14. Unknowns
- Complete API/CLI/SDK and Kafka feature matrix.
- Exact supported versions, quotas and serverless behavior.
- Connector, upgrade, recovery and billing semantics.
- Verified independent foundation and migration coverage.

# 15. Research status
`pending`: identity and public capability surface are documented from official AWS sources, but full REA capture, detailed behavior, limits and alternatives remain unverified.
