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
Amazon MQ is AWS's managed message-broker service for Apache ActiveMQ Classic and RabbitMQ. It provides standard messaging protocols and managed provisioning, patching, high availability, monitoring and upgrades.

# 2. Product identity and ownership
- **Official name:** Amazon MQ
- **Company:** Amazon Web Services
- **Engines:** ActiveMQ Classic and RabbitMQ
- **Lifecycle:** Active

# 3. Product capabilities
- Create and manage ActiveMQ or RabbitMQ brokers.
- Use JMS, NMS, AMQP, STOMP, MQTT and WebSocket protocols.
- Configure single-instance or active/standby deployments.
- Use encryption, VPC endpoints, IAM and CloudWatch.
- Migrate standards-based messaging applications without rewriting protocol clients.

# 4. Technical architecture
Public documentation covers brokers, engines, endpoints, storage, HA, networking, authentication, encryption, upgrades, REST APIs, CLI/SDKs and monitoring. Exact version, quota, failover and cross-region behavior remains pending.

# 5. User workflows
Expected workflows include creating a broker, configuring networking and credentials, connecting clients, managing queues/topics, monitoring metrics, upgrading versions and deleting brokers.

# 6. Pricing and access
AWS charges for broker instance, storage and standard data transfer usage. Current pricing, regions, Free Tier and cross-region behavior must be verified before implementation or cost claims.

# 7. API and integration surface
Amazon MQ REST API, AWS CLI, SDKs, console, broker endpoints, standard messaging protocols, CloudWatch and IAM/VPC integrations.

# 8. Existing open-source alternatives
Apache ActiveMQ, Apache Artemis and RabbitMQ are the principal open-source foundations. Other brokers may cover subsets, but AWS-managed lifecycle and integrations are not assumed equivalent.

# 9. Alternative comparison
Self-managed brokers preserve protocol behavior but transfer provisioning, patching, HA, storage, security, monitoring and recovery operations to the operator.

# 10. Missing capabilities and opportunity analysis
Research must map broker states, protocols, engines, storage, HA, failover, client compatibility, auth, encryption, upgrades, migration and quotas.

# 11. RAE implementation strategy
Use official AWS and upstream broker documentation and authorized API observation. Capture contracts before selecting a foundation or implementing an independent equivalent.

# 12. Security, privacy, and compliance
Verify VPC isolation, TLS, IAM, Secrets Manager, encryption at rest, client authentication, audit logs, network exposure and cross-account boundaries.

# 13. Evidence register
- https://aws.amazon.com/amazon-mq/ — official service page.
- https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/ — capabilities and operations.
- https://docs.aws.amazon.com/amazon-mq/latest/api-reference/welcome.html — REST API.
- https://aws.amazon.com/amazon-mq/faqs/ — protocols and managed operating model.

# 14. Unknowns
- Complete API/CLI/SDK and protocol matrix.
- Exact engine versions, quotas and failover behavior.
- Migration, upgrade, storage and billing semantics.
- Verified independent foundation and compatibility scope.

# 15. Research status
`pending`: identity and public capability surface are documented from official AWS sources, but full REA capture, detailed behavior, limits and alternatives remain unverified.
