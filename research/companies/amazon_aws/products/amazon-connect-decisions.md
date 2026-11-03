---
schema_version: "1.0"
id: "amazon-connect-decisions"
company_id: "amazon_aws"
name: "Amazon Connect Decisions"
aliases:
  - "Connect Decisions"
product_type: "ai_agent_platform"
categories:
  - "supply-chain"
  - "forecasting"
  - "decisioning"
  - "agentic-ai"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/products/connect/decisions/"
official_docs_url: "https://docs.aws.amazon.com/connect-decisions/"
official_source_urls:
  - "https://docs.aws.amazon.com/connect-decisions/latest/userguide/what-is-amazon-connect-decisions.html"
  - "https://aws.amazon.com/products/connect/decisions/"
  - "https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-connect-decisions-april/"
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

Amazon Connect Decisions is an AWS supply-chain planning and decisioning solution. AWS describes AI teammates that harmonize demand signals, generate forecasts and supply plans, monitor operations, triage exceptions and execute approved actions through existing systems.

# 2. Product identity and ownership

- **Official name:** Amazon Connect Decisions
- **Company:** Amazon Web Services
- **Lifecycle:** Active; AWS announced general availability in April 2026, with initial regional availability stated as US East (N. Virginia) and Europe (Ireland).
- **Product page:** https://aws.amazon.com/products/connect/decisions/

# 3. Product capabilities

- Demand intelligence and consensus forecasting.
- Constraint-aware supply planning.
- Exception monitoring, root-cause analysis and recommendations.
- AI teammates for coordination, analysis and approved execution.
- Agentic onboarding through JDBC or Amazon S3 data connections.

# 4. Technical architecture

Public documentation exposes data onboarding, forecasting and supply-planning concepts, AI teammates, business rules, external systems and approved-action execution. Internal models, tool orchestration, training data, planning solvers and control-plane behavior remain unknown.

# 5. User workflows

Organizations connect planning data, configure policies and priorities, review forecasts and supply plans, inspect exceptions and approve actions. Onboarding, demand intelligence, supply intelligence and execution should be analyzed as distinct workflows.

# 6. Pricing and access

AWS documents AI-teammate-based pricing and limited initial availability. Current pricing, regions, trial terms, quotas and feature availability require verification from the official account and pricing surfaces.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/connect-decisions/latest/userguide/what-is-amazon-connect-decisions.html
- Documentation overview: https://docs.aws.amazon.com/connect-decisions/
- Public materials mention JDBC, Amazon S3 and integrations with existing planning/ERP systems; the complete API surface remains to be mapped.

# 8. Existing open-source alternatives

Potentially relevant projects include Apache Odoo/MRP, ERPNext, OpenBoxes, OptaPlanner and open forecasting libraries. Their planning scope, solver behavior, licenses and AI-agent coverage must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source ERP, forecasting and optimization components may cover individual planning functions, but no equivalence is claimed for Amazon's integrated AI teammates, operational science, managed data onboarding or approved-action execution.

# 10. Missing capabilities and opportunity analysis

REA should map demand forecasting, consensus planning, supply constraints, exception clustering, root-cause analysis, business-rule learning, onboarding, integrations, approval gates and execution separately.

# 11. RAE implementation strategy

Use public AWS product and documentation surfaces only. A clean-room equivalent should combine independently licensed forecasting, optimization and workflow components; it must not copy Amazon operational knowledge, models, prompts or proprietary assets.

# 12. Security, privacy, and compliance

Research must verify ERP/data connector permissions, customer and supplier data handling, encryption, KMS, audit logs, action approvals, tenant isolation and regional processing. No autonomous operational action should be inferred without explicit evidence.

# 13. Evidence register

- https://docs.aws.amazon.com/connect-decisions/latest/userguide/what-is-amazon-connect-decisions.html — official scope and capabilities.
- https://aws.amazon.com/products/connect/decisions/ — official product overview.
- https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-connect-decisions-april/ — official general-availability and region context.

# 14. Unknowns

- Full API, connector, region, quota and pricing matrix.
- Exact foundation models, forecasting tools and planner behavior.
- Approval and execution controls for connected systems.
- Open-source coverage for the integrated agentic planning experience.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
