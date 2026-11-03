---
schema_version: "1.0"
id: "amazon-q-developer"
company_id: "amazon_aws"
name: "Amazon Q Developer"
aliases: ["Amazon Q", "Q Developer"]
product_type: "ai_agent_platform"
categories: ["coding-assistant", "developer-tool", "agentic-ai", "aws-operations", "security"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/q/developer/"
official_docs_url: "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/"
official_source_urls:
  - "https://aws.amazon.com/q/developer/"
  - "https://aws.amazon.com/q/developer/getting-started/"
  - "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/"
  - "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/explain-update-code.html"
  - "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/regions.html"
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

Amazon Q Developer is AWS's generative AI assistant for understanding, building, extending and operating AWS applications. AWS documents conversational assistance, coding support in IDEs and the command line, code generation and updates, security scanning, modernization, architecture guidance and operational help across AWS surfaces. OpenHands is recorded as a partial open-source foundation, not a drop-in replacement.

# 2. Product identity and ownership

- **Official name:** Amazon Q Developer
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** AWS-aware developer assistance and agentic software-development workflows

# 3. Product capabilities

- Answer questions about AWS architecture, resources, best practices and documentation.
- Explain, generate, complete, update and debug code in supported development surfaces.
- Scan code for security vulnerabilities and assist with upgrades or modernization.
- Support CLI, IDE, console, web and collaboration integrations.
- Assist with AWS costs, resources, incidents, networking and operational diagnosis where enabled.

# 4. Technical architecture

The public model is a hosted assistant grounded in AWS content and connected to product surfaces through permissions, integrations and developer tooling. AWS states that Amazon Q is powered by Amazon Bedrock. The exact model routing, retrieval corpus, tool permissions, context limits, telemetry, safety filters and tenant isolation remain pending REA verification.

# 5. User workflows

Representative workflows include asking an AWS architecture question, explaining or editing selected code, generating new code, invoking the CLI agent, reviewing security findings, modernizing a codebase and investigating an AWS resource or incident. A complete study must test context selection, tool invocation, approval boundaries, patch application, rollback, streaming, errors and audit behavior.

# 6. Pricing and access

Access depends on the selected Amazon Q Developer experience, identity, region, account configuration and subscription or free-tier eligibility. IAM permissions and service-specific entitlements may affect capabilities. Current plan limits, IDE plugin lifecycle, quotas and regional availability must be checked at implementation time.

# 7. API and integration surface

Public surfaces include the AWS Management Console, AWS documentation and website, console mobile application, IDE plugins, command-line tooling, GitHub and collaboration integrations. The exact CLI commands, IDE capabilities, agent configuration, API boundaries, permissions and error contracts require command-level validation.

# 8. Existing open-source alternatives

OpenHands is an MIT-licensed open-source AI-driven development project with agents, tools, workspaces, an SDK and an agent server. It is a useful foundation for an independent coding-agent product, but it does not provide Amazon Q Developer's AWS grounding, Bedrock-backed model plane, IAM-aware AWS operations or managed integrations.

# 9. Alternative comparison

Compare repository context, code editing, terminal and browser tools, agent loops, patch review, test execution, model selection, AWS documentation grounding, IAM permissions, security scanning, modernization, collaboration integrations, telemetry, cost controls and approval behavior. OpenHands covers a general agent framework; AWS-specific capabilities must be built and verified separately.

# 10. Missing capabilities and opportunity analysis

The remaining research must map CLI and IDE commands, agent configuration, context windows, model and region selection, tool permissions, approval flows, patch semantics, security-scan contracts, modernization workflows, AWS resource access, rate limits, errors, audit logs and data-retention behavior.

# 11. RAE implementation strategy

Use official AWS documentation and authorized test repositories. Capture conversational, coding, CLI, security and AWS-operations cases with explicit permission boundaries. Use OpenHands only after recording the partial-foundation verdict, and create an independent implementation with original code, compatible licensing and no AWS branding or protected content.

# 12. Security, privacy, and compliance

Verify IAM scope, least privilege, repository and prompt data handling, code retention, model-training controls, logging, encryption, regional processing, secret redaction, security-scan data flow and human approval for resource-changing actions. No compliance guarantee is inferred from the product description.

# 13. Evidence register

- https://aws.amazon.com/q/developer/ — official product scope and integrations.
- https://aws.amazon.com/q/developer/getting-started/ — supported entry points and onboarding.
- https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/ — official capabilities and AWS grounding.
- https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/explain-update-code.html — documented code assistance.
- https://github.com/OpenHands/OpenHands — open-source alternative foundation and MIT license.

# 14. Unknowns

- Complete CLI, IDE, API and collaboration command matrix.
- Model routing, context, retrieval, safety and tool-permission semantics.
- Current plans, quotas, regions, plugin lifecycle and entitlement behavior.
- Verified parity for AWS operations, security scanning and modernization workflows.

# 15. Research status

Pending deeper REA validation. Product identity, official sources and a partial open-source foundation are documented; no full equivalence claim is made.
