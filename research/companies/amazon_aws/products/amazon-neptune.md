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
  - "https://docs.aws.amazon.com/neptune/latest/userguide/data-api.html"
  - "https://docs.aws.amazon.com/neptune/latest/userguide/load-data.html"
  - "https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html"
  - "https://docs.aws.amazon.com/neptune/latest/userguide/encrypt.html"
  - "https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html"
  - "https://docs.aws.amazon.com/neptune-analytics/latest/userguide/neptune-analytics-features.html"
  - "https://docs.aws.amazon.com/neptune-analytics/latest/userguide/algorithms.html"
  - "https://tinkerpop.apache.org/"
  - "https://docs.janusgraph.org/master/getting-started/architecture/"
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
Amazon Neptune is AWS's managed graph platform for highly connected datasets. The official surface separates Neptune Database, a transactional managed graph database, from Neptune Analytics, a memory-optimized graph analytics service with openCypher procedures and vector search. This dossier records the two surfaces separately and does not claim that one is a drop-in replacement for the other.

# 2. Product identity and ownership
- **Official name:** Amazon Neptune
- **Company:** Amazon Web Services
- **Surfaces:** Neptune Database and Neptune Analytics
- **Lifecycle:** Active

# 3. Product capabilities
- Store and query property-graph and RDF data.
- Use Gremlin, openCypher and SPARQL.
- Run managed Neptune Database clusters with replicas, automated backups and failover.
- Load graph data from Amazon S3 with the Neptune bulk loader or query-based loaders.
- Analyze graph datasets with Neptune Analytics algorithms, low-latency queries and vector search.
- Use VPC isolation, KMS encryption, APIs, SDKs and AWS CLI surfaces.

# 4. Technical architecture
Public documentation describes Neptune Database clusters, SSD-backed virtualized storage, replicas, backups, loaders, query endpoints, Neptune Analytics graphs, APIs, networking and security. Neptune Database exposes Gremlin and openCypher for property graphs and SPARQL for RDF; Neptune Analytics uses an in-memory graph engine and openCypher procedures. Exact engine versions, limits, algorithm coverage and cross-region behavior remain pending.

# 5. User workflows
Expected workflows include creating a database cluster or analytics graph, loading graph data from S3 or another Neptune surface, querying with Gremlin/openCypher/SPARQL as applicable, running analytics algorithms, monitoring, scaling, backing up, restoring and deleting resources.

# 6. Pricing and access
Neptune Database and Neptune Analytics have distinct resource and usage models. Current instance, storage, query, analytics, capacity-unit and free-tier details must be verified before implementation or cost claims.

# 7. API and integration surface
Neptune management and data APIs, AWS CLI/SDKs, Gremlin/openCypher/SPARQL endpoints, Neptune bulk loader, S3, CloudWatch, VPC and KMS integrations. Neptune Analytics also documents graph query, query-status, cancellation, summary and algorithm operations.

# 8. Existing open-source alternatives
Apache TinkerPop, JanusGraph, Neo4j Community, Apache Jena and other graph systems may cover subsets. No full equivalence is claimed.

# 9. Alternative comparison
Apache TinkerPop provides the Gremlin graph-computing framework, while JanusGraph provides a modular graph engine with storage and indexing adapters. They cover portions of Neptune's property-graph workflows, but do not reproduce Neptune's managed multi-AZ storage, backups, APIs, security, RDF/SPARQL surface, Neptune Analytics memory service or AWS operations.

# 10. Missing capabilities and opportunity analysis
Research must map data models, query semantics, loaders, algorithms, indexes, transactions, replicas, backups, limits, versions, security, vector search and migration behavior for Database and Analytics independently.

# 11. REA implementation strategy
Use official AWS and upstream graph documentation and authorized API observation. Capture Database and Analytics contracts separately before selecting TinkerPop or JanusGraph as a partial foundation or implementing an independent equivalent. Preserve the distinction between a graph database and an in-memory analytics engine.

# 12. Security, privacy, and compliance
Verify VPC isolation, IAM, KMS, encryption, access control, backups, network endpoints, logging and data retention.

# 13. Sources and evidence
- **Product and Database identity:** [Amazon Neptune User Guide](https://docs.aws.amazon.com/neptune/latest/userguide/) documents managed graph APIs, property graphs, RDF/SPARQL, VPC isolation, KMS encryption and managed operations.
- **Data API and loading:** [Neptune Data API](https://docs.aws.amazon.com/neptune/latest/userguide/data-api.html), [loading data](https://docs.aws.amazon.com/neptune/latest/userguide/load-data.html) and [bulk loader](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html) document query/API and ingestion surfaces.
- **Analytics:** [What is Neptune Analytics?](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html), [features](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/neptune-analytics-features.html) and [algorithms](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/algorithms.html) document the memory-optimized analytics service, graph loading, vector search and algorithm categories.
- **Security:** [Neptune encryption](https://docs.aws.amazon.com/neptune/latest/userguide/encrypt.html) documents KMS-based encryption at rest for clusters, backups and snapshots.
- **Alternatives:** [Apache TinkerPop](https://tinkerpop.apache.org/) documents the Gremlin graph-computing framework; [JanusGraph architecture](https://docs.janusgraph.org/master/getting-started/architecture/) documents its modular storage and indexing model. Both are partial foundations, not equivalent managed services.

# 14. Unknowns
- Complete API/CLI/SDK and query matrix for Database and Analytics.
- Exact engine versions, limits, pricing and algorithm coverage.
- Analytics, backup, replication, vector-search and migration semantics under representative workloads.
- Verified independent foundation and compatibility scope.

# 15. Research status
Researched with verified public AWS and upstream sources. Product identity, Database/Analytics distinction, query languages, loading, security, API surface and Analytics algorithms are documented. Exact pricing, quotas, versions, regional behavior and full alternative parity remain unknown and are not asserted.
