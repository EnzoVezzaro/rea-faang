---
schema_version: "1.0"
id: "amazon-managed-service-apache-flink"
company_id: "amazon_aws"
name: "Amazon Managed Service for Apache Flink"
aliases:
  - "Managed Service for Apache Flink"
  - "Amazon Kinesis Data Analytics for Apache Flink"
product_type: "data_platform"
categories:
  - "stream-processing"
  - "real-time-analytics"
  - "apache-flink"
  - "serverless"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/managed-service-apache-flink/"
official_docs_url: "https://docs.aws.amazon.com/managed-flink/"
official_source_urls:
  - "https://aws.amazon.com/managed-service-apache-flink/"
  - "https://docs.aws.amazon.com/managed-flink/latest/java/"
  - "https://docs.aws.amazon.com/managed-flink/latest/apiv2/Welcome.html"
  - "https://aws.amazon.com/about-aws/whats-new/2023/08/amazon-managed-service-apache-flink/"
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

Amazon Managed Service for Apache Flink is AWS's managed environment for authoring and running Apache Flink applications against streaming and static sources. It supports real-time analytics, dashboards, metrics, stateful processing, managed scaling and application recovery.

# 2. Product identity and ownership

- **Official name:** Amazon Managed Service for Apache Flink
- **Company:** Amazon Web Services
- **Former name:** Amazon Kinesis Data Analytics for Apache Flink
- **Lifecycle:** Active

# 3. Product capabilities

- Run Apache Flink applications using Java, Python, Scala and SQL.
- Process streams and static sources for time-series and real-time analytics.
- Use DataStream and Table APIs with managed application infrastructure.
- Persist state with checkpoints and snapshots and recover applications.
- Integrate with Kinesis Data Streams, MSK, S3 and other connectors.

# 4. Technical architecture

The service supplies managed compute and application infrastructure around open-source Apache Flink. Public documentation describes application creation, runtime configuration, code packaging, connectors, checkpoints, snapshots, scaling and Studio/notebook options. Exact API, version, connector and regional behavior remains pending.

# 5. User workflows

Expected workflows include authoring and packaging a Flink application, creating an application, configuring sources and sinks, starting/stopping it, observing metrics, restoring state and updating code. Failure, upgrade, savepoint and rollback behavior require evidence.

# 6. Pricing and access

AWS describes pay-as-you-go billing for processing resources and separate Studio/runtime considerations. Current pricing, quotas, regions and account permissions must be checked before implementation or cost claims.

# 7. API and integration surface

- Managed Service for Apache Flink API version 2018-05-23.
- AWS CLI and SDK support.
- Kinesis Data Streams, MSK, S3 and custom Apache Flink connectors.
- IAM, CloudWatch metrics and application logging.

# 8. Existing open-source alternatives

Apache Flink is the underlying open-source processing engine. Other stream processors may cover portions of the workload, but managed lifecycle, connectors, scaling, checkpointing and AWS integrations are not assumed equivalent.

# 9. Alternative comparison

Self-hosted Apache Flink offers the core engine but shifts cluster operations, upgrades, scaling, durability and observability to the implementer. Other engines may differ in state semantics, connectors, APIs and SQL behavior.

# 10. Missing capabilities and opportunity analysis

Research must map application states, deployment artifacts, version compatibility, checkpoint/savepoint lifecycle, connector guarantees, parallelism, autoscaling, limits, billing and failure recovery.

# 11. RAE implementation strategy

Use official AWS and Apache Flink documentation, API references and release notes. Capture public workflows and contracts with authorized REA. Build only an independent implementation in a consumer project after a foundation verdict.

# 12. Security, privacy, and compliance

Verify IAM roles, source/sink credentials, encryption, network placement, state storage, logging, secret handling and cross-account access. Do not infer guarantees from managed-service language.

# 13. Evidence register

- https://aws.amazon.com/managed-service-apache-flink/ — official service overview.
- https://docs.aws.amazon.com/managed-flink/latest/java/ — developer guide and capabilities.
- https://docs.aws.amazon.com/managed-flink/latest/apiv2/Welcome.html — API scope and supported languages.
- https://aws.amazon.com/about-aws/whats-new/2023/08/amazon-managed-service-apache-flink/ — rename and integration context.

# 14. Unknowns

- Complete API/CLI/SDK command matrix.
- Exact supported Flink versions, connectors and regional limits.
- Checkpoint, savepoint, upgrade, autoscaling and rollback semantics.
- Verified foundation for a functional equivalent beyond Apache Flink itself.

# 15. Research status

`pending`: identity and public capability surface are documented from official AWS sources, but full REA capture, detailed runtime behavior, limits and implementation foundation remain unverified.
