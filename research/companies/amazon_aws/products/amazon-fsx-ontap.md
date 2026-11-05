---
schema_version: "1.0"
id: "amazon-fsx-ontap"
company_id: "amazon_aws"
name: "Amazon FSx for NetApp ONTAP"
aliases:
  - "FSx for ONTAP"
  - "Amazon FSx ONTAP"
product_type: "storage"
categories:
  - "file-storage"
  - "netapp-ontap"
  - "nfs"
  - "smb"
  - "enterprise-storage"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/fsx/netapp-ontap/"
official_docs_url: "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/"
official_source_urls:
  - "https://aws.amazon.com/fsx/netapp-ontap/"
  - "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html"
  - "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-it-works-fsx-ontap.html"
  - "https://aws.amazon.com/fsx/netapp-ontap/faqs/"
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

Amazon FSx for NetApp ONTAP is a fully managed AWS service built on NetApp's ONTAP file system. It provides shared file storage accessible from Linux, Windows and macOS workloads, with NFS, SMB and iSCSI protocols, SSD and capacity-pool tiers, snapshots, clones, replication and AWS/NetApp management surfaces.

# 2. Product identity and ownership

- **Official name:** Amazon FSx for NetApp ONTAP
- **Company:** Amazon Web Services, with NetApp ONTAP technology
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/fsx/netapp-ontap/

# 3. Product capabilities

- Create managed ONTAP file systems and storage virtual machines.
- Serve files and block data through NFS, SMB and iSCSI.
- Use SSD performance with automatically tiered capacity-pool storage.
- Create snapshots, clones, replicas and FlexCache configurations.
- Manage through AWS APIs and NetApp ONTAP tools.

# 4. Technical architecture

The public surface includes file systems, storage virtual machines, volumes, aggregates, protocols, snapshots, clones, SnapMirror, FlexCache, data tiering, network interfaces, IAM, KMS and CloudTrail. Exact ONTAP feature coverage, protocol semantics, failover and tiering behavior require REA verification.

# 5. User workflows

Users create a file system and storage virtual machine, configure network and directory services, create volumes and shares, mount via NFS/SMB or connect via iSCSI, manage snapshots and tiering, and integrate with AWS or NetApp tooling. The AWS-managed boundary must be distinguished from the full ONTAP product.

# 6. Pricing and access

FSx for ONTAP is an AWS commercial service priced by SSD and capacity-pool storage, throughput capacity, IOPS, backups, data transfer and Region. Current prices and free-tier applicability require verification from official pricing pages.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/
- AWS Console, CLI, API and NetApp ONTAP management tools can manage resources.
- Integrations include IAM, KMS, CloudTrail, WorkSpaces, S3 access points, backup and migration tooling.
- Exact API, ONTAP CLI, protocol, quota, failover and tiering behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include OpenZFS, CephFS, Samba, NFS-Ganesha, TrueNAS and upstream NetApp ONTAP deployments. No equivalence is claimed; protocol, snapshot, replication, tiering, management and enterprise support differences require comparison.

# 9. Alternative comparison

Open-source file and storage systems can cover subsets of NFS, SMB, snapshots or block access, but none is treated as a drop-in equivalent to managed ONTAP, multi-protocol integration, tiering, replication and AWS operations without evidence.

# 10. Missing capabilities and opportunity analysis

REA should map file systems, storage virtual machines, volumes, protocols, identity, snapshots, clones, replication, FlexCache, tiering, quotas, backups, failure recovery, APIs and the limits of AWS-managed ONTAP features.

# 11. REA implementation strategy

Use AWS and NetApp public documentation as research surfaces. A clean-room equivalent should use independently licensed storage components and document differences in protocols, snapshots, replication, tiering, management and cloud integration without copying proprietary ONTAP implementation.

# 12. Security, privacy, and compliance

Research must verify network isolation, IAM, KMS, directory services, NFS/SMB identities, iSCSI access, encryption, audit logging, snapshot sharing, replication, data residency and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/fsx/netapp-ontap/ — official product scope.
- https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html — official architecture and capabilities.
- https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-it-works-fsx-ontap.html — official tiering and management details.
- https://aws.amazon.com/fsx/netapp-ontap/faqs/ — official service details.

# 14. Unknowns

- Complete protocol, ONTAP-version, quota and regional support matrix.
- Exact AWS-managed versus customer-managed feature boundaries.
- Snapshot, clone, replication, FlexCache and tiering semantics.
- Failure recovery, backup, encryption and directory-service behavior.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
