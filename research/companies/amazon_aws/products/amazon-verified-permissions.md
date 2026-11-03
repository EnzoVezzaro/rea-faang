---
schema_version: "1.0"
id: "amazon-verified-permissions"
company_id: "amazon_aws"
name: "Amazon Verified Permissions"
aliases: ["Verified Permissions", "AWS Verified Permissions"]
product_type: "security"
categories: ["authorization", "access-control", "cedar", "policy-engine", "security"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/verified-permissions/"
official_docs_url: "https://docs.aws.amazon.com/verifiedpermissions/"
official_source_urls:
  - "https://aws.amazon.com/verified-permissions/"
  - "https://aws.amazon.com/verified-permissions/faqs/"
  - "https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/"
  - "https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/verifiedpermissions/"
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

# 1. Executive summary

Amazon Verified Permissions is AWS's managed fine-grained authorization service. It uses the Cedar policy language with schemas, policy stores, templates and authorization requests containing principal, action, resource and context. Cedar is recorded as a partial open-source foundation because it provides the core language and evaluator but not AWS's managed control plane.

# 2. Product identity and ownership

- **Official name:** Amazon Verified Permissions
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Fine-grained application authorization

# 3. Product capabilities

- Define Cedar authorization policies and policy templates.
- Store policies and schemas in managed policy stores.
- Validate policies against application authorization schemas.
- Evaluate allow or deny decisions for principals, actions, resources and context.
- Integrate policy administration and audit with AWS IAM and CloudTrail surfaces.

# 4. Technical architecture

The public model includes policy stores, Cedar schemas, static and template-linked policies, entities, authorization requests, policy validation, decision responses, tags and CloudTrail audit. Exact consistency, propagation, authorization latency, error behavior, quotas, regional behavior and integration boundaries remain pending REA verification.

# 5. User workflows

Typical workflows include creating a policy store, defining a schema, creating policies, validating them, sending authorization or batch-authorization requests and enforcing the returned decision in application code. A complete study must test permit and forbid precedence, schema errors, template linking, entity relationships, missing context, invalid policies, eventual consistency, retries and deny explanations.

# 6. Pricing and access

Access requires an AWS account, IAM permissions, regional availability and application integration. Pricing, free-tier eligibility, request quotas, policy-store limits, consistency windows and CloudTrail costs must be verified before implementation. No credentials or customer authorization data belong in this dossier.

# 7. API and integration surface

Public surfaces include the AWS console, AWS CLI, SDKs and APIs for policy stores, schemas, policies, templates, entities, authorization, batch authorization, tags and deletion. Cedar policy text or Cedar JSON entities are passed through the service API. Exact request schemas, errors, retries, idempotency, decision metadata and audit contracts require command-level testing.

# 8. Existing open-source alternatives

Cedar is an Apache-2.0 open-source policy language and authorization engine used by Verified Permissions. It provides local policy parsing, validation and evaluation, making it the strongest foundation for an independent implementation. It does not provide managed policy stores, hosted APIs, AWS identity integration, CloudTrail administration, service scaling, quotas or the AWS operational plane.

# 9. Alternative comparison

Compare policy grammar, schema validation, permit/forbid semantics, entity relationships, template linking, authorization latency, decision explanations, persistence, multi-tenancy, API authentication, audit, consistency, quotas and deployment. Cedar covers the core evaluator; the managed control plane requires independent storage, API and operations.

# 10. Missing capabilities and opportunity analysis

Research must map all policy-store, schema, policy, entity, authorization, batch, tag and deletion operations; Cedar version behavior; eventual consistency; error taxonomy; quotas; audit; IAM; and regional semantics. Any implementation must use original code and synthetic authorization fixtures.

# 11. RAE implementation strategy

Use the official product, user guide, API, CLI, FAQ and Cedar references as primary sources. The generated RAE skill should instruct an agent to build an independent authorization service beginning with the Cedar engine, then add policy-store persistence, schemas, APIs, templates, audit and tenancy only where evidence supports them. Preserve the partial-equivalence verdict and do not claim AWS service parity.

# 12. Security, privacy, and compliance

Verify IAM scope, least privilege, policy mutation controls, audit logging, entity privacy, tenant isolation, encryption, retention, deletion and data residency. Use synthetic principals and resources only. Never store credentials, private policies or customer authorization data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/verified-permissions/ — official product scope.
- https://aws.amazon.com/verified-permissions/faqs/ — Cedar, policy and audit behavior.
- https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/ — user guide and workflows.
- https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/ — public API operations.
- https://docs.aws.amazon.com/cli/latest/reference/verifiedpermissions/ — AWS CLI command surface.
- https://github.com/cedar-policy/cedar — open-source policy engine.

# 14. Unknowns

- Complete policy-store, schema, policy, entity and authorization matrix.
- Exact policy propagation, consistency, latency, quotas and retry semantics.
- Current Cedar version, feature compatibility and decision metadata behavior.
- Audit, IAM, regional and multi-tenant operational boundaries.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface and a partial open-source foundation are documented; no full equivalence claim is made.
