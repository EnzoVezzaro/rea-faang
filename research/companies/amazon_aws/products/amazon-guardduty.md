---
schema_version: "1.0"
id: "amazon-guardduty"
company_id: "amazon_aws"
name: "Amazon GuardDuty"
aliases:
  - "GuardDuty"
  - "Amazon GuardDuty threat detection"
product_type: "security"
categories:
  - "threat-detection"
  - "security-monitoring"
  - "malware-detection"
  - "cloud-security"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/guardduty/"
official_docs_url: "https://docs.aws.amazon.com/guardduty/latest/ug/"
official_source_urls:
  - "https://aws.amazon.com/guardduty/"
  - "https://aws.amazon.com/documentation-overview/guardduty/"
  - "https://docs.aws.amazon.com/guardduty/latest/ug/"
  - "https://docs.aws.amazon.com/guardduty/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/guardduty/"
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

Amazon GuardDuty is AWS's managed threat-detection service. It continuously monitors and analyzes AWS data sources, logs, workload activity and threat-intelligence signals to produce security findings for potentially malicious or unauthorized behavior.

# 2. Product identity and ownership

- **Official name:** Amazon GuardDuty
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/guardduty/

# 3. Product capabilities

- Detect suspicious account, credential, network, workload and data activity.
- Analyze CloudTrail management events, VPC flow logs and DNS activity as foundational sources.
- Add protection plans for S3, EKS, ECS, EC2, EBS, RDS, Lambda, AWS Backup and AI-service activity where supported.
- Scan for malware in selected EC2 and S3 workflows.
- Produce findings for console/API access, EventBridge workflows and Security Hub aggregation.
- Manage member accounts from a delegated GuardDuty administrator.

# 4. Technical architecture

The public surface includes detectors, Regions, data sources, protection plans, findings, threat-intelligence feeds, malware scans, member/admin relationships, EventBridge events and API/CLI operations. GuardDuty findings remain regional unless explicitly aggregated through supported services; this boundary requires REA verification.

# 5. User workflows

Users enable GuardDuty in a Region, configure foundational and optional protection data sources, manage organization accounts, inspect findings, automate responses through EventBridge/Security Hub and tune or archive findings. The service is designed to operate without customer-managed sensors or appliances.

# 6. Pricing and access

GuardDuty is an AWS pay-as-you-go service. Pricing depends on analyzed data sources, protection plans, malware scans, Region and account configuration. Current pricing and free-tier applicability require verification from the official pricing page.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/guardduty/latest/ug/
- API reference: https://docs.aws.amazon.com/guardduty/latest/APIReference/
- AWS CLI namespace: `aws guardduty`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/guardduty/
- Integrations include AWS Organizations, EventBridge, Security Hub, CloudTrail and supported workload/data services.
- Exact command, finding-type, protection-plan and quota coverage requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Falco, Wazuh, Suricata, Zeek, OpenSearch Security Analytics, YARA and ClamAV. These are components or adjacent systems, not claimed equivalents to GuardDuty's managed AWS data collection, threat intelligence, ML detection and protection-plan surface.

# 9. Alternative comparison

Open-source tools can provide host, network, file or rule-based detection, but a clean-room equivalent would still need to combine cloud audit ingestion, workload coverage, malware scanning, threat intelligence, findings lifecycle, regional isolation and organization-wide operations.

# 10. Missing capabilities and opportunity analysis

REA should map detector lifecycle, foundational data sources, each protection plan, finding schemas and severity, malware scan flows, organization administration, suppression/archiving, EventBridge/Security Hub integration, APIs, quotas, regional behavior and failure modes.

# 11. RAE implementation strategy

Use the official GuardDuty user guide, API reference, CLI reference and findings documentation as research surfaces. A clean-room implementation should compose independently licensed sensors and analyzers, document coverage differences, and avoid copying AWS detection logic, threat feeds or proprietary implementation details.

# 12. Security, privacy, and compliance

Research must verify IAM permissions, cross-account administration, regional data handling, log retention, finding confidentiality, malware-scan isolation, encryption, service-linked roles, alert delivery and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/guardduty/ — official product scope.
- https://aws.amazon.com/documentation-overview/guardduty/ — official capability overview.
- https://docs.aws.amazon.com/guardduty/latest/ug/ — official workflows and data sources.
- https://docs.aws.amazon.com/guardduty/latest/APIReference/ — official API surface.
- https://docs.aws.amazon.com/cli/latest/reference/guardduty/ — official CLI surface.

# 14. Unknowns

- Complete current protection-plan and Region availability matrix.
- Exact detector, finding, suppression and malware-scan state transitions.
- Full CLI/API command and quota coverage.
- Detection latency, retention and EventBridge/Security Hub delivery guarantees.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, protection-plan comparison, alternative analysis and acceptance review remain outstanding.
