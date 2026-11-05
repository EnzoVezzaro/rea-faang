---
schema_version: "1.0"
id: "google-pubsub"
company_id: "google"
name: "Pub/Sub"
aliases: ["Google Cloud Pub/Sub"]
product_type: "messaging"
categories:
  - "messaging"
  - "event-streaming"
  - "event-bus"
  - "queues"
lifecycle_status: "active"
official_url: "https://cloud.google.com/pubsub"
official_docs_url: "https://docs.cloud.google.com/pubsub/docs/overview"
official_source_urls: ["https://docs.cloud.google.com/pubsub/docs/overview", "https://docs.cloud.google.com/pubsub/docs/pubsub-basics", "https://docs.cloud.google.com/pubsub/docs/subscription-overview", "https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview", "https://docs.cloud.google.com/pubsub/docs/exactly-once-delivery"]
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview"
---
# 1. Executive summary

Pub/Sub is Google Cloud's fully managed asynchronous messaging and event-distribution service. Publishers write messages to topics; subscriptions deliver them to subscriber applications through pull, streaming pull, push or export workflows. It is a distinct messaging product within Google Cloud and should not be merged into Cloud Storage, Dataflow or the general Google Cloud row.

# 2. Product identity and ownership

- **Official name:** Pub/Sub
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://cloud.google.com/pubsub
- **Identity evidence:** Official documentation describes Pub/Sub as an asynchronous, scalable messaging service that decouples producers from consumers and supports streaming analytics, integrations and task parallelization.

# 3. Product capabilities

- Topics, messages, schemas, subscriptions, publishers and subscribers.
- Pull, streaming pull, push and export subscription delivery patterns.
- Message acknowledgement, retry policies, dead-letter handling, retention, replay and ordering.
- Exactly-once delivery for supported pull subscriptions and regional conditions.
- Integrations with Google Cloud data, serverless, analytics and workflow services.

# 4. Technical architecture

Publishers send messages to named topics. A topic can have multiple subscriptions, and each subscription receives messages published after it is created. Subscriber clients receive messages, process them and acknowledge them; outstanding or failed messages can be redelivered according to subscription policy. The service exposes global, regional and locational endpoints and uses Google APIs, client libraries and gRPC/REST interfaces.

# 5. User and developer workflows

An operator creates or selects a Google Cloud project, enables the Pub/Sub API, grants IAM roles, creates a topic and attaches a subscription. A publisher sends messages to the topic; one or more subscriber applications consume them through the selected subscription type. Teams configure schemas, batching, flow control, retry/dead-letter behavior, retention, ordering and monitoring according to delivery requirements.

# 6. Pricing and access

Pub/Sub access requires a Google Cloud project, enabled service and appropriate IAM permissions. Cost and quotas depend on message volume, throughput, retention, delivery and related operations. Exactly-once delivery has regional and subscription-type limits and can increase latency. This pass does not assert current pricing or a project's quota.

# 7. API and integration surface

Google documents REST/JSON and gRPC service APIs, client libraries, the gcloud CLI and console workflows. The public API exposes project, topic, subscription, schema, snapshot, message and acknowledgement operations. Pub/Sub integrates with Dataflow, Cloud Storage, BigQuery, Cloud Functions, Workflows and other systems, but each integration has its own permissions and delivery semantics.

# 8. Existing open-source alternatives

- **NATS (Apache-2.0):** lightweight messaging with JetStream persistence and streaming features.
- **Apache Kafka (Apache-2.0):** distributed event-streaming platform with durable topics and consumer groups.

# 9. Alternative comparison

NATS and Apache Kafka cover publish/subscribe, durable streams, consumer groups and event distribution. They do not reproduce Google's managed service plane, IAM/project integration, regional endpoint behavior, proprietary integrations, quotas or exact Pub/Sub semantics. Coverage is partial for the complete Google service, while the core messaging category is mature.

# 10. Missing capabilities and opportunity analysis

A replacement still needs cluster or service operations, durability and replication, schema governance, retention, replay, ordering, retry/dead-letter policies, observability, IAM, tenancy, upgrades, disaster recovery and compatibility with existing producers and consumers. Open-source implementations are strong foundations; managed operations and migration compatibility are the main gaps.

# 11. REA implementation strategy

Choose NATS for a lightweight service and JetStream workflow, or Kafka for durable high-throughput event streaming and ecosystem integration. Define ordering, at-least-once versus exactly-once expectations, replay, retention, schemas, failure handling and operational ownership before migration. Do not claim Pub/Sub API compatibility without testing resource naming, acknowledgement behavior, ordering, retries and integrations.

# 12. Security, privacy, and compliance

Messages may contain customer data, credentials, events or regulated information. Verify IAM roles, service accounts, encryption, regional message-storage policy, endpoint choice, retention, audit logs, dead-letter access, subscription authorization and data minimization. Keep secrets and payload samples out of the catalog and reports.

# 13. Sources and evidence

- [What is Pub/Sub?](https://docs.cloud.google.com/pubsub/docs/overview) — official identity, use cases and producer/consumer model.
- [Overview of the Pub/Sub service](https://docs.cloud.google.com/pubsub/docs/pubsub-basics) — official topics, messages, schemas and subscriptions.
- [Subscription overview](https://docs.cloud.google.com/pubsub/docs/subscription-overview) — official subscription delivery and acknowledgement behavior.
- [Pub/Sub APIs overview](https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview) — official REST/JSON, gRPC and endpoint surfaces.
- [Exactly-once delivery](https://docs.cloud.google.com/pubsub/docs/exactly-once-delivery) — official delivery guarantees and limits.

# 14. Open questions

- Is the target a queue, event bus, durable event stream or analytics ingestion pipeline?
- Which ordering, replay, retention and delivery guarantees are mandatory?
- Which regions, integrations, throughput, IAM and compliance requirements are in scope?

# 15. Research history

- v1: catalog candidate with preliminary NATS and Kafka alternatives, research pending.
- v2: updated 2026-11-03 from official Google Cloud Pub/Sub documentation. Status: `researched`; managed operations, pricing, quotas and provider-specific integrations remain outside open-source equivalence.
