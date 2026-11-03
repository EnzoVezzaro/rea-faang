---
schema_version: "1.0"
id: "amazon-inspector"
company_id: "amazon_aws"
name: "Amazon Inspector"
aliases:
  - "Inspector"
  - "Amazon Inspector 2"
product_type: "security"
categories:
  - "vulnerability-management"
  - "security-scanning"
  - "cloud-security"
  - "sbom"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/inspector/"
official_docs_url: "https://docs.aws.amazon.com/inspector/latest/user/"
official_source_urls:
  - "https://aws.amazon.com/inspector/"
  - "https://aws.amazon.com/documentation-overview/inspector/"
  - "https://docs.aws.amazon.com/inspector/latest/user/"
  - "https://docs.aws.amazon.com/inspector/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/inspector2/"
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

Amazon Inspector is AWS's automated vulnerability-management service. It discovers supported workloads and code repositories, continually scans for software vulnerabilities and unintended network exposure, and produces prioritized findings with contextual risk information.

# 2. Product identity and ownership

- **Official name:** Amazon Inspector
- **API/CLI surface:** Amazon Inspector 2 / `inspector2`
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/inspector/

# 3. Product capabilities

- Discover and continually scan EC2 instances, AMIs, ECR container images, Lambda functions and supported code repositories.
- Detect known software vulnerabilities and unintended network exposure.
- Correlate CVE intelligence, exploitability and network access into findings and risk scores.
- Export software bills of materials (SBOMs).
- Centrally manage accounts and findings through AWS Organizations.
- Integrate findings with Security Hub, EventBridge, ECR and CI/CD workflows.

# 4. Technical architecture

The public surface includes regional activation, monitored resources, findings, vulnerability intelligence, network reachability, SBOM exports, account administration, service-linked roles, agent-based and agentless EC2 scanning, and API/CLI operations. Inspector is regional and stores data in the Region where activated; this boundary requires REA verification.

# 5. User workflows

Users enable Inspector for an account or organization, configure resource coverage, let it discover workloads, inspect findings, export SBOMs, route events to remediation systems and track risk over time. New accounts may receive a time-limited trial, but pricing and eligibility are separate from the product's technical behavior.

# 6. Pricing and access

Inspector is an AWS commercial service with usage-based pricing. Charges vary by resource type, scans, code repositories, Regions and coverage. AWS documents a 15-day free trial for eligible new accounts; current pricing and eligibility require verification from the official pricing page.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/inspector/latest/user/
- API reference: https://docs.aws.amazon.com/inspector/latest/APIReference/
- AWS CLI namespace: `aws inspector2`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/inspector2/
- Integrations include AWS Organizations, Security Hub, EventBridge, ECR, IAM and CI/CD tooling.
- Exact finding schemas, scan modes, commands, quotas and SDK behavior require REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Trivy, Grype, Clair, OpenVAS/Greenbone, Dependency-Check, Semgrep and Falco. These cover different vulnerability, dependency, image, host or runtime surfaces and are not claimed equivalents to Inspector's managed AWS discovery and correlation.

# 9. Alternative comparison

Open-source scanners can identify package and image vulnerabilities, but a clean-room equivalent would still need to combine cloud workload discovery, network exposure analysis, continuous scheduling, multi-account administration, SBOM exports, findings lifecycle and AWS integrations.

# 10. Missing capabilities and opportunity analysis

REA should map resource discovery, scan activation, EC2 agentless/agent-based behavior, ECR/Lambda/code-repository coverage, network reachability, risk-score inputs, finding states, SBOM schema, account administration, suppression, EventBridge/Security Hub delivery, quotas and failure recovery.

# 11. RAE implementation strategy

Use the official Inspector product page, user guide, API reference and CLI reference as research surfaces. A clean-room implementation should compose independently licensed scanners and cloud inventory integrations, document coverage differences, and avoid copying AWS vulnerability intelligence, proprietary scoring or implementation details.

# 12. Security, privacy, and compliance

Research must verify IAM and service-linked roles, regional data handling, code and image confidentiality, credentials, encryption, account isolation, finding retention, SBOM privacy, network access analysis and deletion behavior.

# 13. Evidence register

- https://aws.amazon.com/inspector/ — official product scope.
- https://aws.amazon.com/documentation-overview/inspector/ — official resource and integration overview.
- https://docs.aws.amazon.com/inspector/latest/user/ — official workflows and coverage.
- https://docs.aws.amazon.com/inspector/latest/APIReference/ — official API surface.
- https://docs.aws.amazon.com/cli/latest/reference/inspector2/ — official CLI surface.

# 14. Unknowns

- Complete current resource, Region and scan-mode coverage matrix.
- Exact network-exposure and risk-score computation behavior.
- Finding lifecycle, suppression and aggregation semantics.
- Full SBOM, API/CLI, quota and CI/CD integration matrix.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, scan comparison, alternative analysis and acceptance review remain outstanding.
