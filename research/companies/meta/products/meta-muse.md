---
schema_version: "1.0"
id: "meta-muse"
company_id: "meta"
name: "Muse"
aliases:
  - "Muse AI"
product_type: "ai_agent_platform"
categories:
  - "ai-agent"
  - "computer-use"
  - "browser-automation"
  - "personal-assistant"
  - "workflow-automation"
official_url: "https://muse.ai/"
official_docs_url: "https://introducing.muse.ai/"
official_source_urls:
  - "https://www.meta.com/technologies/"
  - "https://muse.ai/"
  - "https://introducing.muse.ai/"
  - "https://security.muse.ai/"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: "2026-11-04T00:00:00Z"
last_verified_at: "2026-11-04T00:00:00Z"
next_review_at: "2027-02-04T00:00:00Z"
research_version: 1
evidence:
  - id: "ev-meta-muse-identity"
    url: "https://www.meta.com/technologies/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Platforms and Technologies"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta lists Muse AI as a distinct service in its technology portfolio."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "Meta's official technologies page lists Muse AI under Services."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-muse-surface"
    url: "https://muse.ai/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Muse — Your Personal AI Agent from Meta"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Muse is a personal AI agent with a public product surface and computer-use workflows."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The official Muse surface documents goal execution, a persistent isolated Linux computer with a browser, mobile/Mac/WhatsApp interaction, approval gates, audit trails and connected apps."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-muse-safety"
    url: "https://security.muse.ai/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Muse Safety and Security"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Muse publishes a separate safety and security surface for its agent product."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The official security link is part of the Muse product surface; its detailed controls and claims require separate review before implementation-level conclusions."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Muse is Meta's personal AI agent service. The public product surface documents goal-oriented task execution, a persistent isolated Linux computer with a browser, interaction through mobile, Mac and WhatsApp, approval gates, audit trails and connected applications. This record covers the service, not Meta's separate Muse Spark or Muse Glimmer model/research projects.

# 2. Product identity and ownership

- **Canonical name:** Muse
- **Stable catalog ID:** `meta-muse`
- **Company:** Meta
- **Product type:** AI agent platform
- **Official product URL:** https://muse.ai/
- **Official safety surface:** https://security.muse.ai/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-muse-identity`, `ev-meta-muse-surface`, `ev-meta-muse-safety`

Muse is kept separate from Meta AI, Meta Account, WhatsApp and Meta's Muse Spark/Glimmer research/model surfaces. Those products or projects may be integrations or related technology, not the same catalog record.

# 3. Verified public capabilities

1. Meta lists Muse AI as a distinct service.
2. Muse accepts goals or tasks and presents itself as an agent that can perform work.
3. Muse documents a persistent isolated Linux computer with a full browser for the user and agent.
4. Muse documents mobile, Mac and WhatsApp interaction, connected apps, approval gates and activity audit trails.
5. Muse describes secure credential handling and one-time card numbers for eligible shopping flows; detailed implementation remains unverified.

# 4. Technical architecture

Public evidence supports a hosted agent with an isolated computer/browser environment and approval boundary. Internal model orchestration, VM isolation, credential vault, tool-generation pipeline, network policy and data retention are not inferred.

# 5. User workflows

Users give Muse a goal, connect selected applications, review proposed or completed actions and approve sensitive operations such as messages or purchases. The public page says the user can intervene and view an audit trail. Account-specific permissions and failure recovery were not tested.

# 6. Pricing and access

The public surface exposes login and account creation but does not establish a complete public pricing or quota matrix. Access, eligibility, region, supported integrations and task limits require current account-specific verification.

# 7. API and integration surface

The public product page documents connected applications and agent-created tools, but does not establish a general unrestricted Muse API. Do not infer API access, browser-control guarantees or credential-vault integrations from the marketing surface.

# 8. Open-source alternatives

- **OpenHands:** open-source AI software-development agent with tool use and workspace execution.
- **Browser Use:** open-source browser automation framework for agent workflows.
- **Agent Zero:** open-source personal AI agent framework with tools and local deployment options.

# 9. Alternative comparison

Alternative coverage is **partial**. OpenHands, Browser Use and Agent Zero cover bounded agent, browser or workspace workflows, but none reproduces Muse's hosted VM, consumer account model, approval UX, credential handling, cross-device surfaces or Meta integrations.

# 10. Missing capabilities and opportunity analysis

An independent implementation would need agent orchestration, isolated compute, browser control, permissions, approvals, audit logs, credential handling, connected-app adapters, recovery and abuse controls. Muse-specific parity is out of scope.

# 11. REA implementation strategy

Use only the public Muse surface and authorized test accounts for further research. Do not log in, connect accounts, submit credentials, make purchases or send messages without explicit authorization.

# 12. Security and compliance

An agent with browser, credential and purchase capabilities is high risk. Any implementation must define isolation, least privilege, confirmation gates, secret handling, payment boundaries, auditability, data minimization, recovery and abuse prevention. No security-parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-muse-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-muse-surface` | https://muse.ai/ | Public agent, computer-use and integration claims |
| `ev-meta-muse-safety` | https://security.muse.ai/ | Official safety/security surface link |
| REA capture | `catalog/rea/meta/meta-muse.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Authentication, quotas, supported integrations, regions, model behavior and failure recovery require further authorized testing.
- No login, connected account, credential, purchase or message workflow was inspected.
- Muse Spark and Muse Glimmer are not included in this service record.

# 15. Research history

- **2026-11-04:** reviewed Meta's official technology catalog, Muse product surface and safety link; promoted the candidate after verifying a distinct public AI-agent service boundary.
- **Next review:** 2027-02-04, or sooner if Meta changes Muse's access, integrations or product boundary materially.
