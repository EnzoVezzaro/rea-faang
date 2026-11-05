---
schema_version: "1.0"
id: "amazon-documentdb"
company_id: "amazon_aws"
name: "Amazon DocumentDB"
aliases:
  - "DocumentDB"
  - "Amazon DocumentDB (with MongoDB compatibility)"
product_type: "database"
categories:
  - "document-database"
  - "nosql"
  - "mongodb-compatibility"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/documentdb/"
official_docs_url: "https://docs.aws.amazon.com/documentdb/"
official_source_urls:
  - "https://docs.aws.amazon.com/documentdb/latest/devguide/what-is.html"
  - "https://docs.aws.amazon.com/documentdb/latest/devguide/how-it-works.html"
  - "https://docs.aws.amazon.com/documentdb/latest/APIReference/"
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

Amazon DocumentDB is a fully managed document database with MongoDB compatibility. AWS documents instance-based and elastic clusters, JSON document storage, MongoDB drivers/tools, multi-AZ storage, backups, monitoring and encryption. Compatibility must be treated as an explicit, versioned surface rather than assumed to equal MongoDB.

# 2. Product identity and ownership

- **Official name:** Amazon DocumentDB (with MongoDB compatibility)
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/documentdb/

# 3. Product capabilities

- JSON document databases and collections.
- MongoDB-compatible drivers and API behavior.
- Instance-based and elastic cluster models.
- Distributed storage, replicas, backups, monitoring and KMS encryption.
- Console, API, SDK, AWS CLI and MongoDB client interfaces.

# 4. Technical architecture

Public documentation exposes clusters, instances, cluster volumes, availability zones, storage configurations, MongoDB compatibility levels and elastic clusters. Internal storage engine, replication protocols, query planner, compatibility gaps and managed control plane remain unknown.

# 5. User workflows

Users create a cluster, configure instances or elastic capacity, connect with supported drivers, create databases/collections/documents, monitor usage and manage backups/upgrades. Migration from MongoDB requires compatibility testing for the target API and workload.

# 6. Pricing and access

Pricing depends on instance hours, I/O, backup storage and data transfer; elastic clusters have their own dimensions. AWS advertises a limited free trial, but current Region, eligibility and total cost require official verification.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/documentdb/latest/devguide/
- API reference: https://docs.aws.amazon.com/documentdb/latest/APIReference/
- Public surfaces include Console, AWS CLI, SDK/API, MongoDB drivers, monitoring and migration tooling.

# 8. Existing open-source alternatives

Potentially relevant projects include MongoDB Community Server, FerretDB, PostgreSQL with JSONB, Couchbase Community and Apache CouchDB. Their API, license, scaling and operational behavior must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source document databases may cover core JSON storage and query behavior, but no equivalence is claimed for DocumentDB's managed clusters, AWS integrations, storage architecture, compatibility level, backups or regional operations.

# 10. Missing capabilities and opportunity analysis

REA should map MongoDB API compatibility by version, query/operators, indexes, transactions, change streams, aggregation, drivers, elastic clusters, storage, failover, backup and migration behavior separately.

# 11. REA implementation strategy

Use public AWS documentation, public compatibility statements and permitted test workloads only. A clean-room equivalent should choose an independently licensed document engine and explicitly document unsupported MongoDB behavior; it must not copy AWS storage or implementation details.

# 12. Security, privacy, and compliance

Research must verify TLS, IAM/database authentication, encryption, KMS, network isolation, backups, snapshot handling, audit logging and data residency. Do not infer equivalence from MongoDB driver compatibility.

# 13. Evidence register

- https://docs.aws.amazon.com/documentdb/latest/devguide/what-is.html — official identity and compatibility.
- https://docs.aws.amazon.com/documentdb/latest/devguide/how-it-works.html — official cluster/storage architecture.
- https://docs.aws.amazon.com/documentdb/latest/APIReference/ — official API surface.

# 14. Unknowns

- Complete MongoDB API/operator/version compatibility matrix.
- Query planner, transaction and replication behavior.
- Elastic-cluster limits, scaling and pricing details.
- Open-source coverage for managed operations and AWS integrations.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
