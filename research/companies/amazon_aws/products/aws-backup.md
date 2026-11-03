---
schema_version: "1.0"
id: "aws-backup"
company_id: "amazon_aws"
name: "AWS Backup"
aliases: ["AWS Backup Gateway", "AWS Backup Search"]
product_type: "cloud_infrastructure"
categories: ["backup", "disaster-recovery", "storage", "compliance", "restore", "data-protection"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/backup/"
official_docs_url: "https://docs.aws.amazon.com/aws-backup/"
official_source_urls:
  - "https://aws.amazon.com/backup/"
  - "https://docs.aws.amazon.com/aws-backup/"
  - "https://docs.aws.amazon.com/aws-backup/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/backup/"
  - "https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html"
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

# AWS Backup

## Scope and lifecycle

AWS Backup is a managed, centralized and policy-based backup service for AWS resources and selected on-premises virtual machines. It provides backup plans, vaults, recovery points, restore workflows, reporting, restore testing, backup search and governance controls.

## Official surfaces

- Product: https://aws.amazon.com/backup/
- Documentation: https://docs.aws.amazon.com/aws-backup/
- API reference: https://docs.aws.amazon.com/aws-backup/latest/APIReference/
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/backup/
- Feature availability: https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html

## Capability map

- Create backup plans, rules, selections, vaults and recovery points.
- Protect supported AWS resources across regions and accounts.
- Configure retention, lifecycle, copy, legal hold and vault access policies.
- Restore resources and run restore testing workflows.
- Use logically air-gapped vaults, Backup Gateway and Backup Search where supported.
- Generate reports and audit backup activity through the service control plane.

## API and recovery leads

The API includes plan, vault, recovery-point, copy, restore, framework, legal-hold, report, search and gateway operations. Exact resource-specific restore semantics, feature availability, account boundaries, immutability, encryption, throttling and failure recovery require controlled evidence.

## Open-source alternative

Restic is recorded as a partial alternative: https://github.com/restic/restic. It provides encrypted, deduplicated backup and restore primitives, but not AWS Backup's managed resource adapters, cross-account governance, vault controls, restore testing, compliance reporting or AWS IAM control plane.

## REA/build guidance

Use AWS's API reference and feature-availability matrix as primary inputs for Reverse Engineer Anything. An independent implementation should separate backup policy evaluation, resource adapters, repository/vault semantics, retention and copy workflows, restore orchestration and evidence reporting. Do not assume all AWS resources support the same features or restore behavior.

## Unknowns and evidence gaps

- Resource and region feature availability changes over time and must be checked per target.
- Restore behavior, consistency guarantees and recovery-time objectives require representative fixtures.
- Cross-account, cross-region, air-gapped vault and legal-hold semantics need controlled account tests.
- Backup Search and Gateway behavior require separate evidence from core backup-plan workflows.
