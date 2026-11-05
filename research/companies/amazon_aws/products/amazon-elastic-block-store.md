---
schema_version: "1.0"
id: "amazon-elastic-block-store"
company_id: "amazon_aws"
name: "Amazon Elastic Block Store"
aliases:
  - "Amazon EBS"
  - "EBS"
product_type: "storage"
categories:
  - "block-storage"
  - "cloud-storage"
  - "snapshots"
  - "backup"
  - "encryption"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/ebs/"
official_docs_url: "https://docs.aws.amazon.com/ebs/"
official_source_urls:
  - "https://aws.amazon.com/ebs/"
  - "https://aws.amazon.com/documentation-overview/ebs/"
  - "https://docs.aws.amazon.com/ebs/"
  - "https://docs.aws.amazon.com/cli/latest/reference/ebs/"
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

Amazon Elastic Block Store (Amazon EBS) provides persistent, block-level storage volumes for Amazon EC2. AWS documents multiple SSD and HDD volume families, durable snapshots, Elastic Volumes changes, encryption, and APIs/CLI for managing volumes and snapshots.

# 2. Product identity and ownership

- **Official name:** Amazon Elastic Block Store
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/ebs/

# 3. Product capabilities

- Create and attach durable block volumes to EC2 instances.
- Choose SSD or HDD volume types for latency, IOPS, throughput and cost tradeoffs.
- Modify capacity, provisioned performance and volume type on supported live volumes.
- Create point-in-time snapshots for backup, recovery and migration workflows.
- Encrypt volumes and snapshots using AWS-managed or customer-managed KMS keys.
- Use Multi-Attach where supported by the volume and instance configuration.

# 4. Technical architecture

The public surface includes regional Availability Zone placement, volume types, snapshots, Elastic Volumes, KMS integration, Recycle Bin, EBS direct APIs and EC2 attachment semantics. Replication, durability implementation, control-plane behavior and failure modes require REA verification.

# 5. User workflows

Users create a volume, select its type and performance, attach it to a compatible EC2 instance, format and mount it, monitor usage, resize or tune it, and create or manage snapshots. Backup, cross-account sharing, restore, encryption and deletion-protection workflows have separate permissions and lifecycle concerns.

# 6. Pricing and access

EBS is an AWS commercial service whose costs vary by volume type, provisioned capacity or performance, snapshots, data transfer and related features. Exact current prices and free-tier applicability require verification from the official pricing surface before being used in an implementation plan.

# 7. API and integration surface

- User guide and API documentation: https://docs.aws.amazon.com/ebs/
- AWS CLI namespace: `aws ebs`, documented at https://docs.aws.amazon.com/cli/latest/reference/ebs/
- Related EC2 attachment operations and KMS encryption are part of the broader integration surface.
- Exact API coverage, idempotency, quotas and version behavior require REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Ceph RBD, OpenEBS, LINSTOR/DRBD, Longhorn and local or network block-storage systems. No equivalence is claimed; their EC2 integration, managed snapshots, durability, encryption, performance controls and operational model must be verified independently.

# 9. Alternative comparison

Open-source block-storage systems can provide persistent volumes, but none is treated as a drop-in equivalent to EBS's AWS control plane, EC2 integration, regional placement, volume families, snapshots, KMS integration and managed operational guarantees without evidence.

# 10. Missing capabilities and opportunity analysis

REA should map volume lifecycle, attachment and detach behavior, resizing, IOPS and throughput controls, snapshots, Recycle Bin, encryption, Multi-Attach, quotas, failure recovery, cross-region/cross-account flows and the EBS direct APIs.

# 11. REA implementation strategy

Use AWS product, user-guide, API and CLI documentation as the primary research surface. A clean-room equivalent should select an independently licensed storage foundation and reproduce only independently observable behavior, documenting differences in durability, performance, control plane, encryption and cloud integration.

# 12. Security, privacy, and compliance

Research must verify IAM permissions, KMS key policy boundaries, snapshot sharing and public-access controls, data-at-rest guarantees, deletion and recovery behavior, metadata exposure, backup retention and cross-account/cross-region handling.

# 13. Evidence register

- https://aws.amazon.com/ebs/ — official product capabilities and storage types.
- https://aws.amazon.com/documentation-overview/ebs/ — official product overview and encryption context.
- https://docs.aws.amazon.com/ebs/ — official user guide, API and CLI documentation.
- https://docs.aws.amazon.com/cli/latest/reference/ebs/ — official AWS CLI surface.

# 14. Unknowns

- Complete matrix of volume types, limits, quotas and supported instance combinations.
- Exact durability, replication and failure-recovery guarantees by feature.
- Snapshot copy, sharing, restore and Recycle Bin behavior across Regions and accounts.
- API idempotency, throttling, eventual consistency and error semantics.
- Verified open-source alternatives for the complete EBS workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
