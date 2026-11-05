---
schema_version: "1.0"
id: "amazon-codeguru"
company_id: "amazon_aws"
name: "Amazon CodeGuru"
aliases:
  - "CodeGuru"
  - "CodeGuru Reviewer"
  - "CodeGuru Profiler"
product_type: "developer_tool"
categories:
  - "code-quality"
  - "security-analysis"
  - "performance-profiling"
  - "machine-learning"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/codeguru/"
official_docs_url: "https://docs.aws.amazon.com/codeguru/"
official_source_urls:
  - "https://docs.aws.amazon.com/codeguru/"
  - "https://aws.amazon.com/documentation-overview/codeguru/"
  - "https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-amazon-codeguru-reviewer.html"
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

Amazon CodeGuru is an AWS developer tool with two principal components: CodeGuru Reviewer for automated analysis and recommendations on source code, and CodeGuru Profiler for runtime performance analysis. AWS documentation also describes security and secrets-detection capabilities associated with Reviewer. The service's individual components and support status must be tracked separately.

# 2. Product identity and ownership

- **Official name:** Amazon CodeGuru
- **Company:** Amazon Web Services
- **Lifecycle:** Active product family; component support and maintenance status require separate verification.
- **Product page:** https://aws.amazon.com/codeguru/

# 3. Product capabilities

- Java and Python code review recommendations.
- Defect, security and maintainability analysis.
- Secrets detection and remediation guidance.
- Runtime profiling, CPU/latency analysis and performance recommendations.
- Repository integrations and CI/CD workflows.

# 4. Technical architecture

Public documentation exposes repository association and review workflows for Reviewer, detector libraries, pull-request or full-repository analysis, and profiling groups with runtime agents for Profiler. AWS's ML models, detector training data, service internals and recommendation ranking remain unknown.

# 5. User workflows

Reviewer users associate a supported repository, trigger incremental or full analysis and inspect recommendations. Profiler users configure a profiling group, start an application with the profiling agent and inspect runtime visualizations. These workflows should not be collapsed into one API or one implementation.

# 6. Pricing and access

Pricing, regional availability and feature eligibility vary by component and must be checked against current AWS pages and account context. No cost or free-tier claim is made here.

# 7. API and integration surface

- Documentation: https://docs.aws.amazon.com/codeguru/
- Reviewer user guide: https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html
- Profiler user guide: https://docs.aws.amazon.com/codeguru/latest/profiler-ug/
- Public surfaces include console, APIs, AWS CLI, repository providers and profiling agents.

# 8. Existing open-source alternatives

Potentially relevant projects include Semgrep, CodeQL, SpotBugs, SonarQube, OpenTelemetry and async-profiler. Their licenses, language coverage and feature overlap must be verified before assigning them as alternatives.

# 9. Alternative comparison

Open-source static-analysis and profiling tools can cover portions of CodeGuru's functionality, but no equivalence is claimed for AWS's learned recommendations, repository integrations, detector library, managed service plane or profiling experience.

# 10. Missing capabilities and opportunity analysis

REA should treat Reviewer, security/secrets detection and Profiler as separate surfaces, documenting language support, repository providers, detector behavior, profiling agents, query/export surfaces and CI/CD integration independently.

# 11. REA implementation strategy

Use public documentation, public API/CLI references and permitted test repositories only. A clean-room implementation should compose independently licensed analyzers and profilers rather than copy AWS detectors, models, recommendations or proprietary assets.

# 12. Security, privacy, and compliance

Research must verify repository permissions, source-code handling, secrets exposure, profiling telemetry, retention, encryption, IAM and CI/CD trust boundaries. Do not infer security guarantees from the presence of a detector.

# 13. Evidence register

- https://docs.aws.amazon.com/codeguru/ — official component and API documentation.
- https://aws.amazon.com/documentation-overview/codeguru/ — official capability overview.
- https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-amazon-codeguru-reviewer.html — official maintenance/integration context.

# 14. Unknowns

- Current maintenance and availability status by CodeGuru component.
- Full detector, language, repository and Region matrix.
- Recommendation model behavior and false-positive characteristics.
- Profiler agent overhead, data retention and export behavior.

# 15. Research status

`pending`: product identity and public component boundaries are established; complete REA capture, alternative verification and acceptance review remain outstanding.
