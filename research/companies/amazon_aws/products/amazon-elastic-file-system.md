---
schema_version: "1.0"
id: "amazon-elastic-file-system"
company_id: "amazon_aws"
name: "Amazon Elastic File System"
aliases:
  - "Amazon EFS"
  - "EFS"
product_type: "storage"
categories:
  - "file-storage"
  - "shared-storage"
  - "nfs"
  - "serverless"
  - "cloud-storage"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/efs/"
official_docs_url: "https://docs.aws.amazon.com/efs/"
official_source_urls:
  - "https://aws.amazon.com/efs/"
  - "https://aws.amazon.com/efs/faq/"
  - "https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html"
  - "https://docs.aws.amazon.com/efs/latest/APIReference/"
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

Amazon Elastic File System (Amazon EFS) is AWS's managed, elastic file-storage service. It exposes a shared file-system interface through NFSv4 and can be accessed concurrently by EC2, ECS, EKS, Fargate, Lambda and supported on-premises resources without provisioning file servers or fixed storage capacity.

# 2. Product identity and ownership

- **Official name:** Amazon Elastic File System
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/efs/

# 3. Product capabilities

- Create a file system whose capacity grows and shrinks with stored data.
- Mount shared file data through NFSv4.0 or NFSv4.1.
- Provide concurrent file access with standard file-system semantics and locking.
- Use storage classes, lifecycle management, access points and throughput modes.
- Integrate with AWS compute services and selected on-premises clients.

# 4. Technical architecture

The public surface includes regional file systems, mount targets and network access, NFS clients, storage classes, throughput modes, access points, encryption, backups and lifecycle policies. Exact metadata, consistency, failover, quotas and performance behavior require REA verification.

# 5. User workflows

Users create a file system, configure network and security-group access, create mount targets, install or use an NFS client or mount helper, mount the file system, manage directories and permissions, and configure lifecycle or backup policies. EFS differs from EBS because it is shared file storage rather than an EC2-attached block device.

# 6. Pricing and access

EFS is an AWS commercial service priced by storage class, storage consumed, throughput and related data-transfer or backup features. Current regional pricing and free-tier applicability require verification from official pricing pages before making a cost claim.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/efs/
- API reference: https://docs.aws.amazon.com/efs/latest/APIReference/
- Mount workflow: NFSv4.0/NFSv4.1 and the EFS mount helper.
- Integrations include EC2, ECS, EKS, Fargate, Lambda, DataSync and AWS Backup.
- Exact API, mount-helper, quota, error and consistency behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include NFS-Ganesha, CephFS, GlusterFS, OpenZFS and managed file services built on those projects. No equivalence is claimed; concurrency, durability, elasticity, access control, lifecycle, encryption and cloud integration require independent verification.

# 9. Alternative comparison

Open-source shared file systems can expose NFS or POSIX-like access, but none is treated as a drop-in equivalent to EFS's managed elasticity, AWS compute integrations, regional mount-target model, storage classes, access points and operational guarantees without evidence.

# 10. Missing capabilities and opportunity analysis

REA should map mount and network behavior, NFS semantics, consistency, locking, throughput modes, storage classes, lifecycle transitions, access points, encryption, backup, quotas, failure recovery and the boundaries between EFS, EBS and S3.

# 11. REA implementation strategy

Use AWS product, FAQ, user-guide and API documentation as the research surface. A clean-room equivalent should choose an independently licensed file-storage foundation and reproduce only independently observable behavior, documenting differences in elasticity, durability, networking and cloud integration.

# 12. Security, privacy, and compliance

Research must verify IAM authorization, security groups, mount-target exposure, POSIX identities, access points, encryption in transit and at rest, key policies, backup retention, cross-account access and data-residency behavior.

# 13. Evidence register

- https://aws.amazon.com/efs/ — official product scope and benefits.
- https://aws.amazon.com/efs/faq/ — official service model and EFS/EBS/S3 distinctions.
- https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html — official architecture and mount behavior.
- https://docs.aws.amazon.com/efs/latest/APIReference/ — official API surface.

# 14. Unknowns

- Complete quota, throughput, burst and performance matrix.
- Exact consistency, locking, failover and mount-helper error semantics.
- Storage-class and lifecycle transition behavior and timing.
- Backup, restore, replication and cross-account details.
- Verified open-source alternatives for the complete EFS workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
