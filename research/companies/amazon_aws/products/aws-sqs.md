---
schema_version: "1.0"
id: "aws-sqs"
company_id: "amazon_aws"
name: "SQS"
aliases: []
product_type: "messaging"
categories:
  - "messaging"
official_url: "https://aws.amazon.com/sqs/"
official_docs_url: "https://docs.aws.amazon.com/sqs/"
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

SQS (Simple Queue Service) is a fully managed message queuing service that enables decoupling and scaling of microservices, distributed systems, and serverless applications. It offers reliable, highly scalable, hosted queues, and is the most widely used queue service on AWS.

# 2. Product identity and ownership

- **Official name:** SQS
- **Company and business unit:** Amazon Web Services
- **Parent organization:** Amazon.com Inc. (via amazon_aws)
- **Original launch date:** 2004
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; AWS-native service
- **Related products:** SNS, Lambda, Step Functions, Event Bridge, FIFO SQS, Standard SQS
- **Official website:** https://aws.amazon.com/sqs/
- **Official documentation:** https://docs.aws.amazon.com/sqs/

# 3. Product capabilities

- Standard queue: best-effort ordering, at-least-once delivery, unlimited throughput
- FIFO queue: exact-order processing, deduplication, exactly-once processing
- Long polling (up to 20 minutes) for reduced cost and latency
- Dead letter queues for failed message processing
- Message retention (up to 14 days Standard, up to 14 days FIFO)
- Visibility timeout for message processing
- Message size limit: 256 KB Standard, 256 KB FIFO (but can be extended with external services)
- Server-side encryption (SSE) with AWS KMS
- Access control via IAM policies and queue policies
- Batch API for sending/receiving multiple messages
- Content-based correlation ID (FIFO only)
- Message grouping (FIFO only)

# 4. Technical architecture

SQS architecture:

- Distributed queue management system across Availability Zones
- Standard queue: horizontally scaled, no ordering guarantee
- FIFO queue: single-threaded throughput limited, first-in-first-out ordering
- Metadata: message attributes, system attributes, delay seconds
- Queues regional or FIFO-specific

Full architecture is proprietary; queue management API and scaling behavior are documented.

# 5. User workflows

Primary workflows: queue creation, message sending, message receiving (long/short polling), and deletion. Essential: send and receive messages. Advanced: dead letter queue configuration, visibility timeout tuning, batch operations, FIFO deduplication.

# 6. Pricing and access

- Standard queue: $0.40 per 1M requests, $0.50 per GB-month storage
- FIFO queue: $0.50 per 1M requests, $1.00 per GB-month storage
- Free tier: 1M free requests per month for Standard queues (first year)
- Free tier includes 750,000 FIFO requests per month for first 30 days

# 7. API and integration surface

- REST API (SendMessage, ReceiveMessage, DeleteMessage, etc.)
- AWS CLI (sqs commands)
- SDKs (Python, Node.js, Java, Go, .NET, Ruby, PHP, Rust, etc.)
- Long polling and short polling options
- Batch send/receive operations
- Queue and attribute management APIs

# 8. Existing open-source alternatives

- RabbitMQ (with Erlang/OTP stack)
- Apache Kafka (distributed streaming platform)
- NATS (lightweight messaging system)
- Redis Streams (with Redis)
- No open-source replica provides the exact managed SQS experience (fully hosted, infinite scalability, no infrastructure management).

# 9. Alternative comparison

RabbitMQ and Kafka are the most common open-source alternatives. They require self-hosting or managed services (Confluent, Aiven). They differ in messaging model (queue vs. stream), delivery guarantees, and operational overhead.

# 10. Missing capabilities and opportunity analysis

Fully managed, zero-queue-administration messaging with automatic scaling and no infrastructure overhead represents a significant gap. Self-hosted RabbitMQ/Kafka require operational overhead.

# 11. REA implementation strategy

Not recommended to build a managed message queue service from scratch. Consider contributing to or extending RabbitMQ or NATS for self-hostable messaging. Focus on messaging patterns rather than service replication.

# 12. Security, privacy, and compliance

IAM policies, queue policies, SSE with KMS, access control. SQS satisfies SOC, ISO, FedRAMP, and other compliance certifications.

# 13. Sources and evidence

- https://aws.amazon.com/sqs/ (product page)
- https://docs.aws.amazon.com/sqs/ (documentation)
- https://github.com/rabbitmq/rabbitmq-server (open-source reference)

# 14. Open questions

- What is the throughput comparison between SQS Standard and FIFO vs. RabbitMQ/Kafka?
- How do dead letter queue patterns compare across SQS and RabbitMQ?
- What is the cost model comparison for managed vs. self-hosted messaging at scale?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

RabbitMQ and Kafka are the most common open-source alternatives, but require self-hosting or managed services.

---

# 17. REA implementation strategy (continued)

Focus on self-hostable messaging (RabbitMQ, NATS) for application needs. Managed service replication is out of scope.