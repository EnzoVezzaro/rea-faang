---
schema_version: "1.0"
id: "amazon-fsx-openzfs"
company_id: "amazon_aws"
name: "Amazon FSx for OpenZFS"
aliases:
  - "FSx for OpenZFS"
  - "Amazon FSx OpenZFS"
product_type: "storage"
categories:
  - "file-storage"
  - "openzfs"
  - "nfs"
  - "snapshots"
  - "enterprise-storage"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/fsx/openzfs/"
official_docs_url: "https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/"
official_source_urls:
  - "https://aws.amazon.com/fsx/openzfs/"
  - "https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html"
  - "https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/getting-started.html"
  - "https://aws.amazon.com/fsx/openzfs/features/"
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

Amazon FSx for OpenZFS is AWS's fully managed shared file-storage service built on the open-source OpenZFS file system. It supports NFS access from AWS and on-premises compute, high IOPS and low latency, snapshots, clones, compression, backups and multiple availability/deployment options.

# 2. Product identity and ownership

- **Official name:** Amazon FSx for OpenZFS
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/fsx/openzfs/

# 3. Product capabilities

- Run managed OpenZFS file systems with NFSv3 and NFSv4 access.
- Serve Linux, Windows and macOS compute and containers through NFS.
- Use snapshots, clones, compression and backups.
- Select Multi-AZ HA, Single-AZ HA or Single-AZ non-HA deployment types.
- Integrate with EC2, ECS, EKS, WorkSpaces, AppStream and S3 Access Points.

# 4. Technical architecture

The public surface includes file systems, volumes, datasets, NFS exports, deployment types, SSD and cache performance, snapshots, clones, compression, backups, network types, S3 Access Points, IAM and CloudTrail. Exact OpenZFS feature coverage, failover, consistency and performance behavior require REA verification.

# 5. User workflows

Users create a file system, configure network and security, create volumes and NFS exports, mount from compatible clients, manage snapshots and clones, monitor performance and restore or delete data. FSx for OpenZFS differs from FSx for ONTAP because its protocol and storage-management surface is based on OpenZFS rather than ONTAP.

# 6. Pricing and access

FSx for OpenZFS is an AWS commercial service priced by storage, throughput, SSD IOPS, backups, data transfer and Region. Current prices and free-tier applicability require verification from official pricing pages.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/
- Console, AWS CLI and FSx API manage file systems, volumes, snapshots and backups.
- Clients mount through NFS; S3 Access Points provide an additional object-access integration.
- Exact API, NFS, quota, failover, snapshot and performance semantics require REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include OpenZFS on Linux, TrueNAS, ZFS on FreeBSD, CephFS and NFS servers. No equivalence is claimed; management, durability, snapshots, replication, performance, NFS behavior and operations require independent comparison.

# 9. Alternative comparison

OpenZFS deployments provide the underlying file-system technology, but they do not by themselves reproduce AWS's managed lifecycle, deployment options, failover, backups, S3 access, monitoring or operational guarantees.

# 10. Missing capabilities and opportunity analysis

REA should map file-system and volume lifecycle, NFS semantics, snapshots, clones, compression, backups, deployment types, failover, throughput, IOPS, quotas, S3 Access Points, security and AWS integrations.

# 11. RAE implementation strategy

Use AWS product and OpenZFS guide documentation plus public OpenZFS behavior as research surfaces. A clean-room equivalent should use independently licensed OpenZFS or another storage system and document differences in management, durability, performance, snapshots, networking and cloud operations.

# 12. Security, privacy, and compliance

Research must verify network isolation, NFS identity and permissions, IAM, encryption, backups, snapshots, CloudTrail, S3 access, data residency, failover and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/fsx/openzfs/ — official product scope and integrations.
- https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html — official architecture and capabilities.
- https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/getting-started.html — official setup workflow.
- https://aws.amazon.com/fsx/openzfs/features/ — official feature overview.

# 14. Unknowns

- Complete deployment, protocol, version, quota and regional support matrix.
- Exact OpenZFS, NFS, snapshot, clone and compression behavior.
- Failover, backup, restore and S3 Access Point semantics.
- AWS-managed versus customer-managed responsibility boundaries.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
