---
schema_version: "1.0"
id: "amazon-aurora"
company_id: "amazon_aws"
name: "Amazon Aurora"
aliases:
  - "Aurora"
  - "Aurora MySQL"
  - "Aurora PostgreSQL"
product_type: "database"
categories:
  - "relational-database"
  - "mysql"
  - "postgresql"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/rds/aurora/"
official_docs_url: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/"
official_source_urls:
  - "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/"
  - "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html"
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

Amazon Aurora is a managed relational database engine compatible with MySQL and PostgreSQL, with distributed cluster storage, replication and managed operations. This is an initial identity record, not a completed REA dossier.

# 2. Product identity and ownership

- **Official name:** Amazon Aurora
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/rds/aurora/

# 3. Product capabilities

AWS documents Aurora clusters with a writer instance, reader replicas, shared cluster storage, automated backups, recovery, replication and failover.

# 4. Technical architecture

Pending REA investigation. Public documentation exposes cluster, instance, endpoint, storage and engine-version concepts; internal storage and control-plane implementation remain unknown.

# 5. User workflows

Pending REA investigation. The documented starting flow is to choose an engine/version, configure a DB cluster and network/security settings, connect through the cluster endpoint, and operate backups, replicas and upgrades.

# 6. Pricing and access

Pending verification. Instance/serverless modes, storage, I/O, backup, regional availability, quotas and free-tier eligibility must be checked from current AWS sources.

# 7. API and integration surface

- Aurora User Guide: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/
- RDS API, CLI, SDK, CloudFormation and related AWS integrations are documented by AWS.

# 8. Existing open-source alternatives

Pending. Evaluate PostgreSQL/MySQL, distributed SQL databases and self-hosted operators for compatibility, replication, failover, storage and operational burden.

# 9. Alternative comparison

Pending evidence-backed comparison; compatibility with an open database engine does not establish managed-service parity.

# 10. Missing capabilities and opportunity analysis

Pending REA investigation. The main open implementation question is how much of Aurora's managed cluster, storage and failover behavior is required by the consumer project.

# 11. RAE implementation strategy

Use the RAE skill against official Aurora pages and permitted public interfaces. Prefer an independent implementation or reuse decision based on workload and evidence, not a claim of reproducing AWS internals.

# 12. Security, privacy, and compliance

Pending verification. Research IAM, VPC, encryption, network controls, database authentication, backups, logging and data-residency behavior.

# 13. Evidence register

- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/ — official Aurora guide and product identity.
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html — official cluster and replication overview.

# 14. Unknowns

- Storage internals, quorum and failure-recovery semantics.
- Version-specific MySQL/PostgreSQL compatibility and extensions.
- Failover timing, replica lag and read/write routing behavior.
- Cost, quotas, region differences and migration constraints.

# 15. Research status

`pending`: official identity is recorded; REA capture, alternatives research and acceptance review remain outstanding.
