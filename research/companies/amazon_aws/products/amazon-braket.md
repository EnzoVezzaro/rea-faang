---
schema_version: "1.0"
id: "amazon-braket"
company_id: "amazon_aws"
name: "Amazon Braket"
aliases:
  - "Braket"
product_type: "research_platform"
categories:
  - "quantum-computing"
  - "quantum-simulation"
  - "developer-tool"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/braket/"
official_docs_url: "https://docs.aws.amazon.com/braket/"
official_source_urls:
  - "https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html"
  - "https://docs.aws.amazon.com/braket/latest/developerguide/braket-how-it-works.html"
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

Amazon Braket is a managed AWS service for designing quantum algorithms, testing them on simulators and running them on quantum hardware from supported providers. This is an initial identity record, not a completed REA dossier.

# 2. Product identity and ownership

- **Official name:** Amazon Braket
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/braket/

# 3. Product capabilities

AWS documents managed notebooks, quantum circuit simulators, quantum tasks, hybrid jobs, SDK/API access and QPU access through multiple hardware providers.

# 4. Technical architecture

Pending REA investigation. Public documentation exposes notebooks, SDKs, quantum tasks, simulators, QPUs, S3 result storage and AWS integrations; provider internals remain outside scope.

# 5. User workflows

Pending REA investigation. The documented flow is Build → Test → Run: create an algorithm, test it on simulators, submit a quantum task to a selected device and retrieve results.

# 6. Pricing and access

Pending verification. Device pricing, simulator costs, notebook billing, availability and provider-specific constraints must be checked against current AWS sources.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/braket/
- Boto3 and AWS SDK access are documented by AWS.
- Results are stored in S3 and the service integrates with IAM, CloudWatch, CloudTrail and EventBridge.

# 8. Existing open-source alternatives

Pending. Evaluate PennyLane, Qiskit, Cirq and local simulators for algorithm development, simulation and hardware-provider coverage without claiming managed-service parity.

# 9. Alternative comparison

Pending evidence-backed comparison. Braket's managed multi-provider access and AWS operations are material differentiators.

# 10. Missing capabilities and opportunity analysis

Pending REA investigation. An independent implementation would need clear boundaries around local simulation, provider adapters, task scheduling and result persistence.

# 11. RAE implementation strategy

Use the RAE skill on public documentation and permitted interfaces. Prefer existing open quantum frameworks where they fit, and record provider, license and hardware-access limits before building.

# 12. Security, privacy, and compliance

Pending verification. Research IAM, third-party hardware processing, result storage, logging, data handling and regional constraints.

# 13. Evidence register

- https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html — official service scope and Build/Test/Run model.
- https://docs.aws.amazon.com/braket/latest/developerguide/braket-how-it-works.html — quantum task flow, devices, results and AWS integrations.

# 14. Unknowns

- Device availability, queue semantics and provider-specific behavior.
- Exact simulator limits, job lifecycle and cancellation behavior.
- Pricing, quotas and region differences.
- API parity across SDK, CLI, notebooks and console.

# 15. Research status

`pending`: official identity and scope are recorded; REA capture, alternatives research and acceptance review remain outstanding.
