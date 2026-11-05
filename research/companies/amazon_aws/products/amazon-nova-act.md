---
schema_version: "1.0"
id: "amazon-nova-act"
company_id: "amazon_aws"
name: "Amazon Nova Act"
aliases: ["Nova Act"]
product_type: "ai_agent_platform"
categories:
  - "browser-automation"
  - "agentic-ai"
  - "workflow-automation"
  - "computer-use"
  - "developer-tool"
official_url: "https://aws.amazon.com/nova/"
official_docs_url: "https://docs.aws.amazon.com/nova-act/"
official_source_urls: ["https://aws.amazon.com/nova/", "https://docs.aws.amazon.com/nova-act/latest/userguide/what-is-nova-act.html", "https://docs.aws.amazon.com/nova-act/latest/APIReference/Welcome.html", "https://docs.aws.amazon.com/ai/responsible-ai/nova-act/overview.html", "https://docs.aws.amazon.com/service-authorization/latest/reference/list_nova-act.html"]
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://docs.aws.amazon.com/nova-act/latest/APIReference/Welcome.html"
---

# 1. Executive summary

Amazon Nova Act is an AWS service and developer toolchain for building, deploying and managing AI agents that automate production browser workflows. A workflow combines natural-language `act()` instructions with Python code; sessions contain sequential acts, and workflow runs execute the workflow. AWS documents a web playground, SDK, IDE extension, CLI, AWS deployment and console monitoring.

# 2. Product identity and ownership

- **Official name:** Amazon Nova Act
- **Company:** Amazon Web Services
- **Lifecycle:** active
- **Canonical website:** https://aws.amazon.com/nova/
- **Official documentation:** https://docs.aws.amazon.com/nova-act/
- **Primary scope:** production UI workflow automation and related agent-development tooling.
- **Availability:** AWS documentation currently lists US East (N. Virginia) support; region availability must be checked before use.

# 3. Product capabilities

- Browser workflow automation for data entry, extraction, checkout/booking and web QA use cases.
- Natural-language `act()` calls combined with Python orchestration.
- Sessions representing browser or API-client context, with sequential acts.
- Workflow definitions and repeatable workflow runs.
- External tool integrations through API calls, remote MCP and supported agentic frameworks.
- Human escalation for unresolved or explicitly delegated cases.
- Playground, SDK, IDE extension, CLI, AWS deployment and console monitoring.
- API operations for workflow definitions, runs, sessions, acts and model listing.

# 4. Technical architecture

AWS describes a custom model, orchestrator, browser actuator and service tooling as an integrated system. An `act()` call executes an agentic loop within a session; each act has sequential steps in which the model observes the page and takes an action. A workflow run invokes a workflow definition and can contain multiple sessions. The service can process UI screenshots and prompts through its documented service APIs. Exact model internals, browser isolation and fleet implementation remain proprietary.

# 5. User and developer workflows

1. Explore a browser task in the Nova Act web playground.
2. Author or export a Python workflow and use `act()` calls for bounded UI tasks.
3. Develop and debug with the SDK and IDE extension, using explicit tools, permissions and test data.
4. Create a workflow definition and run it through the documented SDK, CLI or API surfaces.
5. Monitor runs, sessions, acts and trajectory data in the AWS control plane; add human escalation and failure handling before production use.

# 6. Pricing and access

AWS directs users to the current Nova Act pricing page and account requirements. Access, region, quotas, model availability, IAM and deployment costs must be checked for the target AWS account. This dossier does not assert a current price or quota.

# 7. API and integration surface

- REST API actions include creating, reading, updating and deleting workflow definitions and runs.
- Session and act operations include create, list, update and invoke-step behavior.
- Model listing and AWS service-authorization/IAM references are documented.
- SDK, CLI, IDE extension, playground and AWS Management Console are part of the developer surface.
- API calls, remote MCP and supported agentic frameworks extend work beyond the browser.

# 8. Existing open-source alternatives

- **Browser Use:** open-source browser-agent framework for browser control, extraction, testing and agent workflows.
- **Stagehand:** open-source browser automation toolkit combining natural-language AI primitives with deterministic Playwright-style control.
- **Playwright:** Apache-2.0 browser automation library for deterministic cross-browser testing and automation.

# 9. Alternative comparison

Browser Use and Stagehand cover agentic or hybrid browser automation, while Playwright provides the deterministic browser-control foundation. None reproduces Nova Act's integrated model, AWS deployment plane, workflow/session/run APIs, managed fleet operations, service authorization, trajectory tooling or documented human-escalation path. Coverage is therefore **partial** for the complete AWS service.

# 10. Missing capabilities and opportunity analysis

An independent implementation still needs browser isolation, reliable action planning, session and run state, retries, credentials, tool permissions, observability, trajectory handling, human handoff, deployment and multi-tenant operations. The open-source projects are foundations, not proof of service parity.

# 11. REA implementation strategy

Use Playwright for deterministic browser actions and add Stagehand or Browser Use only where agentic interaction is required. Define an explicit workflow state machine, approval gates for purchases or submissions, credential isolation, replayable traces and human escalation. Do not claim Nova Act compatibility without testing each selected API, SDK and failure mode.

# 12. Security, privacy, and compliance

Browser agents can access authenticated sites, page data and external tools. Restrict file access, browser origins, IAM actions, remote MCP servers, payment actions and data retention. Review screenshots, prompts, trajectory exports, logs and human handoff for sensitive data before production use.

# 13. Sources and evidence

- [What is Amazon Nova Act?](https://docs.aws.amazon.com/nova-act/latest/userguide/what-is-nova-act.html) — official identity, terminology, workflows, availability and use cases.
- [Amazon Nova Act API Reference](https://docs.aws.amazon.com/nova-act/latest/APIReference/Welcome.html) — official API surface for workflows, runs, sessions, acts and models.
- [Amazon Nova Act Service Authorization](https://docs.aws.amazon.com/service-authorization/latest/reference/list_nova-act.html) — official IAM actions and resource permissions.
- [Amazon Nova Act Responsible AI Service Card](https://docs.aws.amazon.com/ai/responsible-ai/nova-act/overview.html) — official architecture, context handling, limitations and human-escalation guidance.

# 14. Open questions

- Which AWS region, model, browser targets and quotas apply to the intended account?
- Which workflows require human approval before irreversible actions such as checkout or submission?
- What trace, replay, retry and credential-isolation guarantees are required?

# 15. Research history

- v1: catalog candidate with public AWS capability notes, research pending.
- v2: updated 2026-11-03 from official AWS user guide, API reference, IAM reference and Responsible AI service card. Status: `researched`; managed service behavior, pricing and full parity with open-source browser agents remain unverified.
