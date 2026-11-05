---
schema_version: "1.0"
id: "amazon-fsx-windows"
company_id: "amazon_aws"
name: "Amazon FSx for Windows File Server"
aliases:
  - "FSx for Windows File Server"
  - "Amazon FSx Windows"
product_type: "storage"
categories:
  - "file-storage"
  - "windows"
  - "smb"
  - "active-directory"
  - "enterprise-storage"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/fsx/windows/"
official_docs_url: "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/"
official_source_urls:
  - "https://aws.amazon.com/fsx/windows/"
  - "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html"
  - "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/getting-started.html"
  - "https://aws.amazon.com/fsx/windows/faqs/"
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

Amazon FSx for Windows File Server is AWS's fully managed native Windows file-storage service. It provides SMB-accessible file shares backed by Microsoft Windows Server, with Active Directory integration, configurable storage and performance, VSS-consistent backups and compatibility for enterprise Windows workloads.

# 2. Product identity and ownership

- **Official name:** Amazon FSx for Windows File Server
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/fsx/windows/

# 3. Product capabilities

- Create managed Windows file systems and SMB shares.
- Integrate with AWS Managed Microsoft AD or self-managed Active Directory.
- Configure storage capacity, SSD IOPS and throughput.
- Use Windows-native file-system features and VSS-consistent backups.
- Connect EC2, ECS, VMware Cloud on AWS, WorkSpaces and AppStream workloads.

# 4. Technical architecture

The public surface includes Windows file systems, file servers, volumes, SMB shares, Active Directory, DNS, backups, shadow copies, network interfaces, storage and throughput settings, IAM and CloudTrail. Exact Windows Server, SMB, failover, AD and backup behavior require REA verification.

# 5. User workflows

Users create a file system joined to an Active Directory domain, configure network and security, create shares and permissions, mount them from Windows or compatible clients, manage storage/performance and protect data with backups or shadow copies. This differs from OpenZFS because the primary protocol and identity model are Windows/SMB/AD.

# 6. Pricing and access

FSx for Windows File Server is an AWS commercial service priced by storage, SSD IOPS, throughput, backups, data transfer, directory services and Region. Current prices and free-tier applicability require verification from official pricing pages.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/fsx/latest/WindowsGuide/
- Console, AWS CLI and FSx API manage file systems, shares, backups and settings.
- Amazon FSx CLI for remote management and native Windows tools administer file systems.
- Exact API, SMB, AD, quota, failover, backup and PowerShell behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Samba, Windows Server file services, TrueNAS, CephFS and NFS-based systems. No equivalence is claimed; SMB semantics, Active Directory, snapshots, failover, backup and enterprise operations require comparison.

# 9. Alternative comparison

Samba and Windows Server can provide SMB shares, but they do not by themselves reproduce FSx's managed lifecycle, AWS networking, AD integration, backups, performance controls and operational guarantees.

# 10. Missing capabilities and opportunity analysis

REA should map file-system and share lifecycle, SMB behavior, AD join, permissions, shadow copies, backups, throughput, SSD IOPS, failover, quotas, client compatibility, PowerShell management and AWS integrations.

# 11. REA implementation strategy

Use AWS product and Windows File Server guide documentation as research surfaces. A clean-room equivalent should use independently licensed Windows or Samba-compatible components and document differences in SMB, identity, backup, performance and cloud operations without copying proprietary Microsoft or AWS implementation.

# 12. Security, privacy, and compliance

Research must verify AD credentials, SMB permissions, network isolation, encryption, backups, shadow copies, audit logging, data residency, cross-account access and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/fsx/windows/ — official product scope.
- https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html — official architecture and capabilities.
- https://docs.aws.amazon.com/fsx/latest/WindowsGuide/getting-started.html — official setup workflow.
- https://aws.amazon.com/fsx/windows/faqs/ — official compatibility and access details.

# 14. Unknowns

- Complete Windows Server, SMB, AD, quota and regional support matrix.
- Exact failover, shadow-copy, backup and restore semantics.
- PowerShell, CLI, API and native Windows management boundaries.
- Performance and client compatibility edge cases.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
