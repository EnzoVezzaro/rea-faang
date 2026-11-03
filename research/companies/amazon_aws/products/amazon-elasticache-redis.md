---
schema_version: "1.0"
id: "amazon-elasticache-redis"
company_id: "amazon_aws"
name: "Amazon ElastiCache for Redis OSS"
aliases:
  - "ElastiCache for Redis OSS"
  - "Amazon Redis OSS"
product_type: "database"
categories:
  - "caching"
  - "in-memory-database"
  - "redis"
  - "distributed-systems"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/elasticache/"
official_docs_url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/"
official_source_urls:
  - "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/"
  - "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/engine-versions.html"
  - "https://aws.amazon.com/elasticache/faqs/"
  - "https://aws.amazon.com/elasticache/pricing/"
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

Amazon ElastiCache for Redis OSS is AWS's managed Redis OSS-compatible in-memory data store and cache. AWS documents node-based and serverless modes, replication, cluster mode, read replicas, ACLs, TLS, backups, monitoring and managed engine lifecycle. Valkey and Memcached are related ElastiCache engines and remain separate entries.

# 2. Product identity and ownership

- **Official name:** Amazon ElastiCache for Redis OSS
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/elasticache/

# 3. Product capabilities

- Run Redis OSS-compatible caches and data stores on managed AWS infrastructure.
- Use node-based clusters or supported serverless cache modes.
- Scale with replication, read replicas and cluster mode.
- Use Redis data structures, scripting and pub/sub subject to supported engine versions.
- Apply TLS, ACLs, VPC controls, backups, monitoring and managed upgrades.

# 4. Technical architecture

The public surface includes cache clusters, replication groups, shards, replicas, endpoints, engine versions, cluster mode, serverless caches, ACLs, parameter groups, backups and CloudWatch integration. Exact feature compatibility, failover, persistence, consistency and version behavior require REA verification.

# 5. User workflows

Users select an engine version and topology, configure network and security, create a cache or replication group, connect using Redis clients, monitor it, scale or fail over it, and manage backups and upgrades. Redis OSS behavior must be distinguished from Valkey and from the managed ElastiCache control plane.

# 6. Pricing and access

The service is commercially metered by node or serverless capacity, engine support, backups, regions and related AWS resources. Extended support for older Redis OSS versions may add charges. Current pricing, version schedules and free-tier applicability require official verification.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/
- Engine versions: https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/engine-versions.html
- AWS API and CLI surfaces manage clusters, replication groups, nodes, endpoints, ACLs, parameter groups and snapshots.
- Exact command, compatibility, quota, failover and upgrade behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Redis Community Edition, Valkey, KeyDB, Dragonfly and Hazelcast. No equivalence is claimed; data structures, replication, clustering, persistence, protocol compatibility, licensing and operations must be compared independently.

# 9. Alternative comparison

Redis OSS and Valkey provide the core open-source engine behavior, but they do not by themselves provide AWS's managed lifecycle, network integration, failover operations, monitoring, serverless mode or extended-support model. Other engines have material compatibility and licensing differences.

# 10. Missing capabilities and opportunity analysis

REA should map engine and command compatibility, topology, shards, replicas, failover, persistence, backups, ACLs, TLS, serverless boundaries, scaling, upgrades, maintenance, metrics, quotas and the differences between Redis OSS, Valkey and Memcached in ElastiCache.

# 11. RAE implementation strategy

Use official AWS ElastiCache documentation and public Redis OSS behavior as research surfaces. A clean-room equivalent should use independently licensed Redis-compatible software and document differences in commands, persistence, clustering, security and managed operations.

# 12. Security, privacy, and compliance

Research must verify ACL and IAM boundaries, TLS, network exposure, secrets, backup encryption, snapshot access, data residency, failover, maintenance, engine-version support and monitoring permissions.

# 13. Evidence register

- https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/ — official ElastiCache user guide.
- https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/engine-versions.html — official engine and support matrix.
- https://aws.amazon.com/elasticache/faqs/ — official compatibility and service details.
- https://aws.amazon.com/elasticache/pricing/ — official pricing and extended-support surface.

# 14. Unknowns

- Complete engine-version, topology, quota and regional support matrix.
- Exact Redis command and module compatibility by supported version.
- Failover, persistence, backup, restore and scaling semantics.
- Current serverless and extended-support feature boundaries.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
