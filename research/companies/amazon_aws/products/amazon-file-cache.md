---
schema_version: "1.0"
id: "amazon-file-cache"
company_id: "amazon_aws"
name: "Amazon File Cache"
aliases:
  - "File Cache"
product_type: "storage"
categories:
  - "file-storage"
  - "cache"
  - "high-performance-computing"
  - "s3"
  - "nfs"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/filecache/"
official_docs_url: "https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/"
official_source_urls:
  - "https://aws.amazon.com/filecache/"
  - "https://aws.amazon.com/filecache/faqs/"
  - "https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/what-is.html"
  - "https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/managing-caches.html"
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

Amazon File Cache is AWS's fully managed, high-speed temporary file cache for datasets stored in Amazon S3, AWS file systems or on-premises NFS file systems. It presents linked data through a unified file namespace for high-performance computing, media, machine learning and analytics workloads.

# 2. Product identity and ownership

- **Official name:** Amazon File Cache
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/filecache/

# 3. Product capabilities

- Link a cache to S3 buckets or NFS repositories.
- Present dispersed data as a unified file and directory namespace.
- Lazy-load metadata and file contents from linked repositories.
- Provide high-throughput, low-latency temporary cache storage.
- Evict cached content automatically or release it through supported file-management commands.

# 4. Technical architecture

The public surface includes cache resources, data-repository associations, NFS or S3 sources, mount access, lazy loading, exports, eviction, networking, security and AWS API/CLI management. Exact consistency, writeback, failure, quota and performance behavior require REA verification.

# 5. User workflows

Users create a cache, link repositories at creation time, configure network access, mount the cache from compute resources, process or write files, export results when necessary and monitor or delete the cache. File Cache differs from EFS because it is a temporary cache over existing repositories rather than the primary durable file system.

# 6. Pricing and access

Amazon File Cache is a commercial AWS service priced by cache capacity, throughput, Region and related data-transfer or source-storage costs. Current pricing and free-tier applicability require verification from official pricing pages before planning spend.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/
- Lifecycle operations use the AWS console, AWS CLI and API, including `create-file-cache` and related cache operations.
- Data sources include S3 and NFS file systems; clients access the cache through supported file-system interfaces.
- Exact API, mount, lazy-load, export, eviction and quota behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Alluxio, JuiceFS, Lustre, BeeGFS, NFS caches and self-managed file-cache layers. No equivalence is claimed; source integration, consistency, writeback, eviction, performance, durability and operations must be compared independently.

# 9. Alternative comparison

Open-source caches and parallel file systems can accelerate data access, but none is treated as a drop-in equivalent to File Cache's unified S3/NFS namespace, managed lifecycle, lazy loading, eviction and AWS integration without evidence.

# 10. Missing capabilities and opportunity analysis

REA should map repository associations, namespace behavior, lazy loading, writeback/export, eviction, metadata semantics, mount access, throughput, failure recovery, quotas, region support and the boundaries among File Cache, EFS, FSx and S3.

# 11. REA implementation strategy

Use AWS product, FAQ and File Cache guide documentation as the research surface. A clean-room equivalent should compose independently licensed cache and file-system components, documenting differences in repository support, consistency, writeback, durability, performance and cloud integration.

# 12. Security, privacy, and compliance

Research must verify source-repository permissions, network isolation, IAM, encryption, mount access, cache contents, export behavior, data residency, cross-account access and deletion or eviction guarantees.

# 13. Evidence register

- https://aws.amazon.com/filecache/ — official product scope and use cases.
- https://aws.amazon.com/filecache/faqs/ — official repository and service details.
- https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/what-is.html — official architecture and repository behavior.
- https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/managing-caches.html — official lifecycle and CLI/API operations.

# 14. Unknowns

- Complete source, region, quota and performance matrix.
- Exact lazy-load, writeback/export, consistency and eviction semantics.
- Failure recovery and source-repository availability behavior.
- Pricing and data-transfer implications for each repository type.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
