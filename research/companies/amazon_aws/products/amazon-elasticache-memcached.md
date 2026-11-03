---
schema_version: "1.0"
id: "amazon-elasticache-memcached"
company_id: "amazon_aws"
name: "Amazon ElastiCache for Memcached"
aliases:
  - "ElastiCache for Memcached"
  - "Amazon Memcached"
  - "Memcached on ElastiCache"
product_type: "database"
categories:
  - "caching"
  - "in-memory-database"
  - "memcached"
  - "distributed-systems"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/elasticache/"
official_docs_url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/"
official_source_urls:
  - "https://aws.amazon.com/documentation-overview/memcached/"
  - "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/"
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

Amazon ElastiCache for Memcached is AWS's managed, Memcached-compatible in-memory cache and key-value store. AWS documents node-based clusters, sharding, VPC isolation, TLS in transit, auto discovery and managed provisioning, patching, monitoring and failure recovery.

# 2. Product identity and ownership

- **Official name:** Amazon ElastiCache for Memcached
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/elasticache/

# 3. Product capabilities

- Run Memcached-compatible caches on AWS-managed nodes.
- Scale through sharding across cache nodes.
- Connect using standard Memcached text or binary protocols and clients.
- Discover current node endpoints through the configuration endpoint.
- Use VPC isolation, TLS in transit and AWS-managed monitoring and recovery.

# 4. Technical architecture

The public surface includes cache clusters, nodes, endpoints, client auto discovery, Memcached protocols, VPC networking, security groups, TLS, CloudWatch metrics and AWS control-plane APIs. Cache semantics, eviction, failure recovery, scaling and consistency behavior require REA verification.

# 5. User workflows

Users choose a node type and cluster shape, configure networking and security, create a cache cluster, connect an application with a Memcached client, monitor nodes and use auto discovery when topology changes. ElastiCache for Redis OSS and Valkey are related engine options but remain separate product candidates.

# 6. Pricing and access

The service is commercially metered by node or serverless cache capacity, data storage, regions and related AWS resources. Current prices, minimum metering and free-tier applicability require verification from the official pricing page before planning spend.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/
- Service overview: https://aws.amazon.com/documentation-overview/memcached/
- AWS API and CLI surfaces manage clusters, nodes, endpoints, parameters and security.
- Memcached clients connect through the documented ports and node/configuration endpoints.
- Exact API, protocol, scaling, quota and failure semantics require REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include self-managed Memcached, Redis, Valkey, Hazelcast and Apache Ignite. No equivalence is claimed; protocol compatibility, clustering, persistence, eviction, security and operations must be compared independently.

# 9. Alternative comparison

Memcached itself provides the core open-source cache protocol, but it does not provide AWS's managed node lifecycle, VPC integration, patching, monitoring, recovery or auto-discovery control plane. Other engines differ in persistence and data-structure semantics.

# 10. Missing capabilities and opportunity analysis

REA should map cluster creation, node topology, hashing/sharding, auto discovery, client behavior, eviction, failover, scaling, TLS, parameter groups, metrics, quotas, maintenance and the distinction between node-based and serverless ElastiCache.

# 11. RAE implementation strategy

Use AWS documentation and publicly documented Memcached behavior as research surfaces. A clean-room equivalent should use independently licensed Memcached or another cache engine, documenting differences in protocol, durability, topology, security and managed operations.

# 12. Security, privacy, and compliance

Research must verify network exposure, security groups, TLS, authentication limitations, data residency, secret handling, cache-data sensitivity, node replacement, maintenance windows and observability permissions.

# 13. Evidence register

- https://aws.amazon.com/documentation-overview/memcached/ — official Memcached product overview.
- https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/ — official ElastiCache user guide.
- https://aws.amazon.com/elasticache/faqs/ — official compatibility and auto-discovery details.
- https://aws.amazon.com/elasticache/pricing/ — official pricing surface.

# 14. Unknowns

- Complete node, engine-version, quota and regional-availability matrix.
- Exact eviction, scaling, failure-recovery and maintenance semantics.
- Protocol, TLS, endpoint and auto-discovery edge cases.
- Current serverless-versus-node-based feature boundaries.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
