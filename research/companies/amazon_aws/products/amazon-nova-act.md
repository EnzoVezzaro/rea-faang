---
schema_version: "1.0"
id: "amazon-nova-act"
company_id: "amazon_aws"
name: "Amazon Nova Act"
aliases: ["Nova Act"]
product_type: "ai_agent_platform"
categories: ["browser-automation", "agentic-ai", "workflow-automation", "computer-use", "developer-tool"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/nova/"
official_docs_url: "https://docs.aws.amazon.com/nova-act/"
official_source_urls:
  - "https://aws.amazon.com/nova/"
  - "https://aws.amazon.com/documentation-overview/nova-act/"
  - "https://docs.aws.amazon.com/nova-act/"
  - "https://docs.aws.amazon.com/nova-act/latest/userguide/what-is-nova-act.html"
  - "https://docs.aws.amazon.com/nova-act/latest/APIReference/Welcome.html"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon Nova Act is an AWS service and developer toolchain for building, deploying and managing AI agents that automate browser-based user-interface workflows. AWS documentation describes natural-language instructions combined with Python code, local development interfaces, deployment to AWS, monitoring, API/tool integrations and human escalation. This entry remains `pending` until the complete public workflow and safety boundaries are independently validated.

# 2. Product identity and ownership

- **Official name:** Amazon Nova Act
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Production UI workflow automation and related developer tooling

# 3. Product capabilities

- Define browser actions using natural-language instructions and Python.
- Explore workflows in a hosted playground and develop locally with an SDK.
- Use an IDE extension and CLI as part of the development-to-deployment path.
- Deploy and monitor workflows in AWS.
- Integrate APIs, tools, remote MCP and human escalation where supported.

# 4. Technical architecture

Public documentation distinguishes a playground, SDK, IDE extension, CLI, AWS service and console. The execution model, browser isolation, model/version selection, session state, tool permissions, trajectory storage, retries and fleet scheduling require direct validation.

# 5. User workflows

Documented workflow stages include exploring a browser task, exporting or authoring Python, developing and debugging locally, packaging/deploying with the CLI, monitoring executions in the AWS console, and escalating to a human when appropriate. Exact inputs, outputs, failure states, cancellation, retries and persistence remain pending.

# 6. Pricing and access

Access may involve the Nova Act playground, API-key or AWS IAM authentication and AWS deployment terms. Current pricing, quotas, supported regions, model entitlements and account requirements must be verified before any implementation or cost claim.

# 7. API and integration surface

AWS documents a REST API for workflow definitions, workflow runs, sessions and acts, plus SDK, CLI, IDE extension, console, tool/API integrations and remote MCP. The complete command, schema, authentication and error matrix remains pending.

# 8. Existing open-source alternatives

No full open-source alternative is verified in this entry. Browser automation libraries, agent frameworks and workflow engines may cover subsets, but model reliability, production deployment, fleet management, safety controls and human escalation are not assumed equivalent.

# 9. Alternative comparison

Candidate foundations must be compared across browser control, locator robustness, natural-language planning, deterministic code integration, sessions, retries, observability, credentials, tool calls, human handoff and deployment. A browser driver alone is not a replacement for the full service.

# 10. Missing capabilities and opportunity analysis

Research must map `act()` semantics, workflow/session/run state transitions, supported browsers, selectors, action timeouts, assertions, retries, recovery, model versions, tool permissions, authentication, trajectory export, monitoring and production isolation.

# 11. RAE implementation strategy

Use the official AWS product and documentation URLs with authorized public or user-owned test surfaces. Record browser observations, SDK/CLI commands, API schemas and error behavior. Any independent implementation must use original code, avoid AWS proprietary assets and clearly separate observed behavior from proposed design.

# 12. Security, privacy, and compliance

Verify credential handling, browser isolation, prompt and page-data boundaries, tool permissions, IAM policies, remote MCP access, logging, trajectory retention, human approval and sensitive-data handling before implementation.

# 13. Evidence register

- https://aws.amazon.com/nova/ — official Amazon Nova portfolio and Nova Act product context.
- https://aws.amazon.com/documentation-overview/nova-act/ — official capability and workflow overview.
- https://docs.aws.amazon.com/nova-act/ — official documentation entry point.
- https://docs.aws.amazon.com/nova-act/latest/userguide/what-is-nova-act.html — service concepts and `act()` terminology.
- https://docs.aws.amazon.com/nova-act/latest/APIReference/Welcome.html — REST API reference.

# 14. Unknowns

- Complete SDK, CLI and REST API command/schema matrix.
- Browser/runtime isolation, model behavior and deterministic replay semantics.
- Exact quotas, pricing, regions, supported browsers and model versions.
- Verified open-source foundation and coverage for production deployment and safety.

# 15. Research status

`pending`: identity and public capability surface are documented from AWS sources, but full REA capture, authenticated workflow behavior, limits, safety controls and alternatives remain unverified.
