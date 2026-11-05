---
schema_version: "1.0"
id: "aws-s3"
company_id: "amazon_aws"
name: "Amazon S3"
aliases: []
product_type: "storage"
categories:
  - "storage"
official_url: "https://aws.amazon.com/s3/"
official_docs_url: "https://docs.aws.amazon.com/s3/"
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

Amazon S3 (Simple Storage Service) is object storage built to store and retrieve any amount of data from anywhere. It is designed for 99.999999999% durability and is a foundational service for countless applications and services on AWS.

# 2. Product identity and ownership

- **Official name:** Amazon S3
- **Company and business unit:** Amazon Web Services
- **Parent organization:** Amazon.com Inc. (via amazon_aws)
- **Original launch date:** 2006
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; AWS-native service
- **Related products:** S3 Express One Zone, S3 Glacier, S3 Outposts, EBS, EFS, FSx, Storage Gateway
- **Official website:** https://aws.amazon.com/s3/
- **Official documentation:** https://docs.aws.amazon.com/s3/

# 3. Product capabilities

- Object storage with virtually unlimited capacity
- Virtually unlimited scale (buckets, objects)
- Durability: 99.999999999% (11 nines)
- Availability: 99.99%–99.99999% (varies by storage class)
- Storage classes: S3 Standard, S3 Intelligent-Tiering, S3 Glacier, S3 Glacier Deep Archive, S3 One Zone-IA
- Versioning for object history
- Cross-region replication
- Lifecycle management policies
- Event notifications (SNS, SQS, Lambda)
- Access control (IAM bucket policies, ACLs)
- Object locking (compliance/governance)
- VPC endpoint integration (S3 VPC endpoints)
- Pre-signed URLs for temporary access
- Access point management
- Storage Lens for analytics and assessment

# 4. Technical architecture

S3 architecture:

- Distributed object store with hierarchical namespace
- Buckets contain objects (key + metadata + data)
- Regional deployment with optional cross-region replication
- Strong consistency for reads/writes (PUT/POST/DELETE)
- Metadata: user-defined and system-defined
- Request routing anycast network
- Underlying storage with erasure coding and replication for durability

Full architecture is proprietary; service APIs and durability guarantees are documented.

# 5. User workflows

Primary workflows: bucket and object creation, upload/download, access control, and lifecycle management. Essential: putting/getting objects, bucket creation. Advanced: versioning, replication, lifecycle policies, event notifications.

# 6. Pricing and access

- Pay-per-use storage per GB-month
- Request pricing (PUT, GET, LIST, etc.)
- Data transfer pricing (in/out, inter-region)
- Storage class pricing varies (Standard, Infrequent Access, Glacier)
- First 5 GB free, first 20,000 PUT requests free, first 2,000 GET requests free monthly
- S3 Express One Zone pricing tier available

# 7. API and integration surface

- REST/JSON API (compatible with SOAP/REST variations)
- AWS CLI (s3 commands)
- SDKs (Python, Node.js, Java, Go, .NET, Ruby, PHP, Rust, etc.)
- S3 Express, Access Points, Control API
- Pre-signed URL generation
- S3 Select and Glacier Select Queries

# 8. Existing open-source alternatives

- MinIO (S3-compatible object storage)
- Ceph (object storage gateway)
- Swift (OpenStack Swift)
- HDFS (Hadoop Distributed File System)
- No S3-equivalent managed service; MinIO provides the closest S3-compatible on-premises object storage

# 9. Alternative comparison

MinIO provides the closest S3-compatible object storage for on-premises deployment. Ceph and Swift are alternative object storage systems with different APIs. No open-source service replicates S3's durability guarantees, global availability, and integrated ecosystem.

# 10. Missing capabilities and opportunity analysis

S3's durability model, event notification architecture, and storage class lifecycle management represent gaps. MinIO provides S3-compatible storage but lacks the managed service experience, global availability, and some advanced features.

# 11. REA implementation strategy

Not recommended to build a managed object storage service from scratch. Consider contributing to or extending MinIO for S3-compatible on-premises object storage. Focus on application-level patterns rather than service replication.

# 12. Security, privacy, and compliance

IAM policies, bucket policies, ACLs, VPC endpoints, encryption at rest (KMS) and in transit (TLS). S3 satisfies SOC, ISO, FedRAMP, GDPR, and other compliance certifications.

# 13. Sources and evidence

- https://aws.amazon.com/s3/ (product page)
- https://docs.aws.amazon.com/s3/ (documentation)
- https://github.com/minio/minio (S3-compatible reference)

# 14. Open questions

- What is the durability model comparison between MinIO and S3?
- How do storage lifecycle policies compare across MinIO, Ceph, and S3?
- What are the performance characteristics of S3 Select vs. MinIO Select?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

MinIO provides the closest S3-compatible object storage. Ceph and Swift are alternative architectures with different APIs.

---

# 17. REA implementation strategy (continued)

Focus on self-hostable S3-compatible storage (MinIO) for on-premises needs. Managed service replication is out of scope.