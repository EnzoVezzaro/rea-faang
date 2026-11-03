---
schema_version: "1.0"
id: "amazon-neptune"
company_id: "amazon_aws"
name: "Amazon Neptune"
aliases: ["Neptune Database", "Neptune Analytics"]
product_type: "database"
categories: ["graph-database", "graph-analytics", "gremlin", "opencypher", "sparql"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/neptune/"
official_docs_url: "https://docs.aws.amazon.com/neptune/"
official_source_urls:
  - "https://aws.amazon.com/neptune/"
  - "https://docs.aws.amazon.com/neptune/"
  - "https://docs.aws.amazon.com/neptune/latest/userguide/"
  - "https://docs.aws.amazon.com/neptune/latest/userguide/neptune-setup.html"
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
Amazon Neptune is AWS's managed graph database service for highly connected datasets. It supports property-graph queries with Gremlin and openCypher, RDF queries with SPARQL, and separate Neptune Database and Neptune Analytics capabilities.

# 2. Product identity and ownership
- **Official name:** Amazon Neptune
- **Company:** Amazon Web Services
- **Surfaces:** Neptune Database and Neptune Analytics
- **Lifecycle:** Active

# 3. Product capabilities
- Store and query property-graph and RDF data.
- Use Gremlin, openCypher and SPARQL.
- Run managed Neptune Database clusters with replicas and backups.
- Analyze graph datasets with Neptune Analytics algorithms and low-latency queries.
- Use VPC, KMS, multi-AZ replication, APIs and data loading tools.

# 4. Technical architecture
Public documentation describes cluster instances, shared storage, replicas, backups, loaders, query endpoints, Neptune Analytics, APIs, networking and security. Exact engine versions, limits, algorithm coverage and cross-region behavior remain pending.

# 5. User workflows
Expected workflows include creating a database or analytics resource, loading graph data, querying, running algorithms, monitoring, scaling, backing up and restoring, and deleting resources.

# 6. Pricing and access
Neptune Database and Neptune Analytics have distinct usage and resource pricing. Current instance, storage, query, analytics and free-tier details must be verified before implementation or cost claims.

# 7. API and integration surface
Neptune management and data APIs, AWS CLI/SDKs, Gremlin/openCypher/SPARQL endpoints, bulk loaders, CloudWatch, VPC and KMS integrations.

# 8. Existing open-source alternatives
Apache TinkerPop, JanusGraph, Neo4j Community, Apache Jena and other graph systems may cover subsets. No full equivalence is claimed.

# 9. Alternative comparison
Open-source graph stacks may provide query languages or storage, but managed multi-AZ storage, backups, APIs, security, analytics algorithms and AWS operations differ and require evidence.

# 10. Missing capabilities and opportunity analysis
Research must map data models, query semantics, loaders, algorithms, indexes, transactions, replicas, backups, limits, versions, security and migration behavior.

# 11. RAE implementation strategy
Use official AWS and upstream graph documentation and authorized API observation. Capture Database and Analytics contracts separately before selecting a foundation or implementing an independent equivalent.

# 12. Security, privacy, and compliance
Verify VPC isolation, IAM, KMS, encryption, access control, backups, network endpoints, logging and data retention.

# 13. Evidence register
- https://aws.amazon.com/neptune/ — official product context.
- https://docs.aws.amazon.com/neptune/ — Database and Analytics documentation.
- https://docs.aws.amazon.com/neptune/latest/userguide/ — capabilities and security.
- https://docs.aws.amazon.com/neptune/latest/userguide/neptune-setup.html — setup and architecture.

# 14. Unknowns
- Complete API/CLI/SDK and query matrix.
- Exact engine versions, limits and algorithm coverage.
- Analytics, backup, replication and migration semantics.
- Verified independent foundation and compatibility scope.

# 15. Research status
`pending`: identity and public capability surface are documented from official AWS sources, but full REA capture, detailed behavior, limits and alternatives remain unverified.
