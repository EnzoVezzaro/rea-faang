---
schema_version: "1.0"
id: "amazon-bio-discovery"
company_id: "amazon_aws"
name: "Amazon Bio Discovery"
aliases:
  - "Bio Discovery"
product_type: "ai_application"
categories:
  - "drug-discovery"
  - "biology"
  - "lab-in-the-loop"
  - "ai-agents"
lifecycle_status: "preview"
official_url: "https://aws.amazon.com/biodiscovery/"
official_docs_url: "https://aws.amazon.com/biodiscovery/resources/"
official_source_urls:
  - "https://aws.amazon.com/biodiscovery/"
  - "https://aws.amazon.com/biodiscovery/pricing/"
  - "https://aws.amazon.com/blogs/industries/introducing-amazon-bio-discovery/"
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

Amazon Bio Discovery is an AWS application for AI-assisted antibody and therapeutic discovery, combining biological model access, agent-guided design and lab-in-the-loop workflows. AWS presents it as an early-access product with region, pricing and usage constraints.

# 2. Product identity and ownership

- **Official name:** Amazon Bio Discovery
- **Company:** Amazon Web Services
- **Lifecycle:** Preview / early access
- **Product page:** https://aws.amazon.com/biodiscovery/

# 3. Product capabilities

Public AWS material describes a catalog of biological models, antibody candidate design, multi-objective evaluation, custom model integration and submission to integrated lab partners.

# 4. Technical architecture

Pending REA investigation. Public pages expose a web application, model catalog, agent-assisted workflows and experiment tracking; internal models, pipelines and data isolation remain unknown.

# 5. User workflows

Pending REA investigation. The documented conceptual flow is Build → Design → Test → Learn, with computational candidates sent to lab partners and results fed back into experiments.

# 6. Pricing and access

Early-access pricing and free-trial terms are documented at https://aws.amazon.com/biodiscovery/pricing/. Region, account eligibility and commercial use require current verification.

# 7. API and integration surface

Pending verification. Public material mentions custom models, pipelines and integrated laboratory partners, but no complete public API contract is claimed here.

# 8. Existing open-source alternatives

Pending. Research biological foundation models, antibody-design tools, workflow engines and experiment registries separately; no product equivalence is claimed.

# 9. Alternative comparison

Pending evidence-backed comparison. Proprietary model access, agent workflows and lab-partner integrations are material unknowns.

# 10. Missing capabilities and opportunity analysis

Pending REA investigation. Any independent implementation must define scientific validation, provenance, safety, model licensing and wet-lab boundaries before building.

# 11. RAE implementation strategy

Use the RAE skill only on public, authorized surfaces. Produce an independent research and implementation plan; do not reproduce proprietary models, protected data or laboratory workflows without authorization.

# 12. Security, privacy, and compliance

Pending verification. Research proprietary experimental-data isolation, model/data ownership, account controls, auditability and biological safety boundaries.

# 13. Evidence register

- https://aws.amazon.com/biodiscovery/ — official product overview and workflow claims.
- https://aws.amazon.com/biodiscovery/pricing/ — official early-access pricing and region/access information.
- https://aws.amazon.com/blogs/industries/introducing-amazon-bio-discovery/ — AWS launch description and lab-in-the-loop context.

# 14. Unknowns

- Public API, SDK and export surface.
- Exact model catalog, licenses and reproducibility.
- Experiment-unit semantics, quotas and retention.
- Lab-partner contracts, assays, safety controls and result formats.

# 15. Research status

`pending`: official identity and preview status are recorded; REA capture, alternatives research and acceptance review remain outstanding.
