---
schema_version: "1.0"
id: "amazon-mq"
company_id: "amazon_aws"
name: "Amazon MQ"
aliases: ["Amazon MQ for ActiveMQ", "Amazon MQ for RabbitMQ"]
product_type: "messaging"
categories: ["message-broker", "activemq", "rabbitmq", "messaging", "managed-service"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/amazon-mq/"
official_docs_url: "https://docs.aws.amazon.com/amazon-mq/"
official_source_urls:
  - "https://aws.amazon.com/amazon-mq/"
  - "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/"
  - "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/welcome.html"
  - "https://aws.amazon.com/amazon-mq/faqs/"
  - "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-broker-architecture.html"
  - "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/network-of-brokers.html"
  - "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/data-protection.html"
  - "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/connect-to-amazonmq.html"
  - "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/operations.html"
  - "https://artemis.apache.org/"
  - "https://artemis.apache.org/components/artemis/documentation/"
  - "https://www.rabbitmq.com/docs"
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
Amazon MQ is AWS's managed message-broker service for Apache ActiveMQ Classic and RabbitMQ. It preserves broker and protocol-oriented application interfaces while AWS manages provisioning, maintenance, monitoring, upgrades and high-availability options. ActiveMQ and RabbitMQ are separate engine surfaces and should not be treated as interchangeable.

# 2. Product identity and ownership
- **Official name:** Amazon MQ
- **Company:** Amazon Web Services
- **Engines:** ActiveMQ Classic and RabbitMQ
- **Lifecycle:** Active

# 3. Product capabilities
- Create and manage ActiveMQ or RabbitMQ brokers.
- Use JMS, NMS, AMQP, STOMP, MQTT and WebSocket protocols.
- Configure single-instance, active/standby or engine-specific clustered deployments.
- Use TLS, KMS encryption at rest, private VPC networking, IAM controls and CloudWatch.
- Use ActiveMQ networks of brokers or RabbitMQ replicated cluster deployments where supported.
- Migrate standards-based messaging applications without rewriting protocol clients.

# 4. Technical architecture
Public documentation covers broker engines, endpoints, EBS-backed storage, single-instance and cluster/active-standby deployments, networking, authentication, encryption, upgrades, REST APIs, CLI/SDKs and CloudWatch. RabbitMQ clusters use three nodes across Availability Zones; ActiveMQ also documents network-of-brokers and cross-Region replication paths. Exact version, quota, failover and cross-region behavior remains pending.

# 5. User workflows
Expected workflows include selecting an engine, creating a broker, configuring networking and credentials, connecting standard-protocol clients, managing queues/topics, monitoring metrics, applying configuration revisions, upgrading versions and deleting brokers.

# 6. Pricing and access
AWS charges according to broker instance, storage and standard data-transfer usage. Current pricing, regions, Free Tier, instance availability and cross-region replication behavior must be verified before implementation or cost claims.

# 7. API and integration surface
Amazon MQ REST API, AWS CLI, SDKs, console, broker endpoints, ActiveMQ/RabbitMQ management surfaces, JMS, NMS, AMQP, STOMP, MQTT and WebSocket protocols, CloudWatch, IAM, VPC and KMS integrations.

# 8. Existing open-source alternatives
Apache ActiveMQ Classic, Apache Artemis and RabbitMQ are the principal open-source foundations. Artemis and RabbitMQ document multi-protocol, clustering and high-availability capabilities, but self-managed operation and version/configuration compatibility differ from Amazon MQ.

# 9. Alternative comparison
Self-managed brokers preserve portions of protocol behavior but transfer provisioning, patching, HA, storage, security, monitoring, recovery and upgrade operations to the operator. Compare engine version, client compatibility, configuration model, persistence, failover, authentication and observability separately for ActiveMQ and RabbitMQ.

# 10. Missing capabilities and opportunity analysis
Research must map broker states, protocols, engines, storage, HA, failover, client compatibility, authentication, encryption, upgrades, migration, cross-Region replication and quotas separately by engine.

# 11. REA implementation strategy
Use official AWS and upstream broker documentation and authorized API observation. Capture ActiveMQ and RabbitMQ contracts separately before selecting Artemis, ActiveMQ Classic or RabbitMQ as a partial foundation or implementing an independent equivalent. Do not claim AWS-managed lifecycle parity.

# 12. Security, privacy, and compliance
Verify VPC isolation, TLS, IAM, Secrets Manager, encryption at rest, client authentication, audit logs, network exposure and cross-account boundaries.

# 13. Sources and evidence
- **Identity and managed model:** [What is Amazon MQ?](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/) documents managed ActiveMQ Classic and RabbitMQ brokers, standard protocols, maintenance, upgrades, CloudWatch and security.
- **Deployments:** [RabbitMQ broker architecture](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/rabbitmq-broker-architecture.html) documents single-instance and three-node cluster deployments; [network of brokers](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/network-of-brokers.html) documents ActiveMQ broker networks.
- **API and connection:** [Amazon MQ operations](https://docs.aws.amazon.com/amazon-mq/latest/api-reference/operations.html) and [broker API](https://docs.aws.amazon.com/amazon-mq/latest/api-reference/brokers.html) document lifecycle operations; [connection guide](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/connect-to-amazonmq.html) documents service and broker endpoints.
- **Security:** [Data protection](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/data-protection.html) documents TLS and KMS-backed encryption at rest.
- **Alternatives:** [Apache Artemis](https://artemis.apache.org/) and its [documentation](https://artemis.apache.org/components/artemis/documentation/) document a multi-protocol open-source broker; [RabbitMQ documentation](https://www.rabbitmq.com/docs) documents the upstream broker. These are partial foundations, not equivalent managed services.

# 14. Unknowns
- Complete API/CLI/SDK and protocol matrix for ActiveMQ and RabbitMQ.
- Exact engine versions, quotas, failover and cross-Region behavior.
- Migration, upgrade, storage, authentication and billing semantics.
- Verified independent foundation and compatibility scope.

# 15. Research status
Researched with verified public AWS and upstream sources. Amazon MQ identity, ActiveMQ/RabbitMQ separation, broker lifecycle, protocols, deployments, APIs, security and partial alternatives are documented. Exact pricing, quotas, versions, regional behavior and full compatibility remain unknown and are not asserted.
