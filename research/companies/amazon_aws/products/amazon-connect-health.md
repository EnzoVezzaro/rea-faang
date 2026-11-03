---
schema_version: "1.0"
id: "amazon-connect-health"
company_id: "amazon_aws"
name: "Amazon Connect Health"
aliases:
  - "Connect Health"
product_type: "ai_agent_platform"
categories:
  - "healthcare"
  - "patient-engagement"
  - "clinical-documentation"
  - "medical-coding"
  - "agentic-ai"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/products/connect/health/"
official_docs_url: "https://docs.aws.amazon.com/connecthealth/"
official_source_urls:
  - "https://docs.aws.amazon.com/connecthealth/latest/userguide/what-is-service.html"
  - "https://aws.amazon.com/products/connect/health/"
  - "https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-connect-health-agentic-ai-healthcare/"
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

Amazon Connect Health is AWS's healthcare-focused agentic AI service. AWS describes two families of pre-built agents: patient-engagement agents and point-of-care agents for patient insights, ambient documentation and medical coding. The service is separate from Amazon Connect Customer and includes a unified SDK/API surface.

# 2. Product identity and ownership

- **Official name:** Amazon Connect Health
- **Company:** Amazon Web Services
- **Lifecycle:** Active; AWS announced general availability in March 2026 with regional availability stated in official materials.
- **Product page:** https://aws.amazon.com/products/connect/health/

# 3. Product capabilities

- Patient verification and appointment-management workflows.
- Patient insights and pre-visit context.
- Ambient clinical documentation.
- Suggested medical coding with traceability for review.
- Healthcare integrations, domains, IAM access and a unified SDK/API.

# 4. Technical architecture

Public documentation exposes domains, patient-engagement and point-of-care agent families, EHR context, streaming medical-scribe events, API resources and IAM Identity Center setup. Internal models, clinical safeguards, evaluation data, orchestration and managed infrastructure remain unknown.

# 5. User workflows

Healthcare organizations configure a domain and authorized users, integrate patient or EHR context, then use patient-engagement agents or embed point-of-care capabilities through the SDK. Clinical outputs are intended for human review; exact workflows must be analyzed separately by agent.

# 6. Pricing and access

Pricing, regions, quotas and feature availability vary by capability and must be verified from the official account and pricing surfaces. No unsupported free-tier or clinical-outcome claim is made here.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/connecthealth/latest/userguide/what-is-service.html
- API reference: https://docs.aws.amazon.com/connecthealth/latest/APIReference/
- Setup guide: https://docs.aws.amazon.com/connecthealth/latest/userguide/setting-up.html

# 8. Existing open-source alternatives

Potentially relevant projects include OpenMRS, GNU Health, FHIR tooling, Whisper-based clinical transcription stacks and open medical coding/NLP projects. Their clinical validation, licenses, safety controls and interoperability must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source health IT and speech/NLP components may cover isolated functions, but no equivalence is claimed for AWS's managed agents, healthcare integrations, safety guardrails, traceability, SDK or operational controls.

# 10. Missing capabilities and opportunity analysis

REA should separate patient verification, scheduling, patient insights, ambient documentation, coding, EHR/FHIR integration, domain administration, streaming events and review/audit workflows.

# 11. RAE implementation strategy

Use public AWS documentation, public healthcare interoperability specifications and permitted test data only. A clean-room equivalent must use synthetic or authorized data, human review gates and independently validated clinical components; it must not copy AWS models, prompts, clinical datasets or proprietary assets.

# 12. Security, privacy, and compliance

Research must verify HIPAA eligibility scope, identity and access controls, encryption, audit trails, EHR permissions, PHI handling, retention, regional processing, human oversight and failure modes. No clinical or compliance guarantee is inferred from this catalog entry.

# 13. Evidence register

- https://docs.aws.amazon.com/connecthealth/latest/userguide/what-is-service.html — official product families and workflows.
- https://aws.amazon.com/products/connect/health/ — official capabilities and positioning.
- https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-connect-health-agentic-ai-healthcare/ — official launch and agent availability context.

# 14. Unknowns

- Full region, quota, pricing and capability matrix.
- Exact model, evaluation, guardrail and traceability behavior.
- EHR/FHIR connector coverage and clinical validation boundaries.
- Open-source coverage and safety for each workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
