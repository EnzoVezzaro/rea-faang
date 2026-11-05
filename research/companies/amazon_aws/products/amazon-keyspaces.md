---
schema_version: "1.0"
id: "amazon-keyspaces"
company_id: "amazon_aws"
name: "Amazon Keyspaces (for Apache Cassandra)"
aliases:
  - "Amazon Keyspaces"
  - "Keyspaces"
  - "Amazon Keyspaces for Apache Cassandra"
product_type: "database"
categories:
  - "cassandra"
  - "nosql"
  - "serverless-database"
  - "distributed-database"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/keyspaces/"
official_docs_url: "https://docs.aws.amazon.com/keyspaces/latest/devguide/"
official_source_urls:
  - "https://aws.amazon.com/keyspaces/"
  - "https://aws.amazon.com/documentation-overview/keyspaces/"
  - "https://docs.aws.amazon.com/keyspaces/latest/devguide/"
  - "https://docs.aws.amazon.com/keyspaces/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/keyspaces/"
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

Amazon Keyspaces (for Apache Cassandra) is AWS's scalable, highly available, serverless and managed Apache Cassandra-compatible database service. It supports Cassandra Query Language (CQL), existing Apache 2.0-licensed drivers and AWS APIs for infrastructure and table management.

# 2. Product identity and ownership

- **Official name:** Amazon Keyspaces (for Apache Cassandra)
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/keyspaces/

# 3. Product capabilities

- Run Cassandra-compatible workloads without provisioning or patching servers.
- Use CQL and supported Cassandra drivers for data-plane operations.
- Manage keyspaces and tables through CQL, AWS SDKs, AWS CLI, CloudFormation and Terraform.
- Choose on-demand or provisioned capacity with autoscaling.
- Use TTL, point-in-time recovery, backup/restore, CloudWatch metrics and multi-AZ replication.
- Apply IAM, TLS, encryption at rest and PrivateLink-based connectivity.

# 4. Technical architecture

The public surface includes keyspaces, tables, partitions, CQL operations, DDL APIs, Streams API, capacity modes, TTL, backups, PITR, IAM, CloudTrail, KMS and VPC PrivateLink. AWS describes the service as a modified Cassandra implementation; exact compatibility and unsupported Cassandra semantics require REA verification.

# 5. User workflows

Users create a keyspace and table, choose capacity and encryption settings, connect through a supported Cassandra driver or `cqlsh`, perform CRUD and queries, monitor usage, and configure recovery/streams. Existing Cassandra applications can migrate incrementally, but schema, consistency, protocol and operational differences must be tested.

# 6. Pricing and access

Keyspaces is an AWS pay-as-you-go service. Costs depend on read/write capacity, storage, backups, data transfer, streams and Region. Current pricing, quotas, free-tier applicability and capacity-mode behavior require verification from official pricing documentation.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/keyspaces/latest/devguide/
- API reference: https://docs.aws.amazon.com/keyspaces/latest/APIReference/
- Streams API reference: https://docs.aws.amazon.com/keyspaces/latest/APIReference/API_Operations_AmazonKeyspacesStreams.html
- AWS CLI namespace: `aws keyspaces`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/keyspaces/
- Access through console, CloudShell, CQL clients, AWS SDKs, CloudFormation and Terraform.
- Exact supported CQL, data types, consistency, driver, streams and quota behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Apache Cassandra, ScyllaDB, YugabyteDB, HBase and Cassandra-compatible distributions. These cover portions of the data model or API, but are not claimed equivalents to Keyspaces' managed serverless operations, AWS controls and replication behavior.

# 9. Alternative comparison

Self-managed Cassandra and compatible databases provide more infrastructure control, while Keyspaces removes server operations and couples managed scaling, security, backup, monitoring and AWS integration to a supported Cassandra-compatible surface.

# 10. Missing capabilities and opportunity analysis

REA should map CQL/API compatibility, data types, partitioning, consistency, capacity modes, autoscaling, TTL, streams, backups/PITR, driver behavior, IAM, TLS, PrivateLink, CloudFormation/Terraform, quotas, failure recovery and migration constraints.

# 11. REA implementation strategy

Use the official Keyspaces product page, developer guide, CQL reference, API references, CLI reference and compatibility documentation as research surfaces. A clean-room implementation should use independently licensed Cassandra-compatible software, document semantic differences, and avoid copying AWS's modified implementation or managed control plane.

# 12. Security, privacy, and compliance

Research must verify IAM permissions, SigV4/driver authentication, TLS, KMS encryption, VPC connectivity, CloudTrail, cross-account access, backup privacy, data residency, deletion and tenant isolation.

# 13. Evidence register

- https://aws.amazon.com/keyspaces/ — official product scope.
- https://aws.amazon.com/documentation-overview/keyspaces/ — official compatibility and managed-service overview.
- https://docs.aws.amazon.com/keyspaces/latest/devguide/ — official workflows and limits.
- https://docs.aws.amazon.com/keyspaces/latest/APIReference/ — official API and Streams surfaces.
- https://docs.aws.amazon.com/cli/latest/reference/keyspaces/ — official CLI surface.

# 14. Unknowns

- Complete supported CQL, driver, data-type and consistency matrix.
- Exact capacity, scaling, quota, streams and backup behavior.
- Migration edge cases from Apache Cassandra and unsupported semantics.
- Current pricing, Regions and infrastructure-as-code coverage.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, compatibility verification, command analysis, alternatives and acceptance review remain outstanding.
