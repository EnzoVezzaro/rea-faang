---
schema_version: "1.0"
id: "amazon-workspaces-secure-browser"
company_id: "amazon_aws"
name: "Amazon WorkSpaces Secure Browser"
aliases: ["WorkSpaces Secure Browser", "Amazon WorkSpaces Web"]
product_type: "cloud_infrastructure"
categories: ["secure-browser", "browser-isolation", "remote-access", "zero-trust", "managed-service", "sunset-notice"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/workspaces/secure-browser/"
official_docs_url: "https://docs.aws.amazon.com/workspaces-web/"
official_source_urls:
  - "https://aws.amazon.com/workspaces/secure-browser/"
  - "https://aws.amazon.com/workspaces/secure-browser/faqs/"
  - "https://docs.aws.amazon.com/workspaces-web/latest/adminguide/"
  - "https://docs.aws.amazon.com/workspaces-web/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/workspaces-web/"
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

Amazon WorkSpaces Secure Browser is a managed remote-browser service. It streams encrypted pixels from isolated cloud browser sessions while enforcing URL, browser, network, identity and data-protection policies. AWS has announced that the service will no longer accept new customers starting October 29, 2026; existing customers can continue under the documented transition. Apache Guacamole is recorded as a partial remote-access foundation.

# 2. Product identity and ownership

- **Official name:** Amazon WorkSpaces Secure Browser
- **Company:** Amazon Web Services
- **Lifecycle:** Active with announced new-customer closure on 2026-10-29
- **Primary scope:** Secure browser isolation and remote web access

# 3. Product capabilities

- Provide disposable managed browser sessions in AWS.
- Stream browser pixels to existing desktop browsers or thin clients.
- Restrict URLs and browser behavior through Chrome policies.
- Connect sessions to private websites and SaaS applications through VPC networking.
- Authenticate with SAML identity providers and portal URLs.
- Control clipboard, file transfer, printing, device access and data protection.
- Log sessions and administration through AWS monitoring and CloudTrail integrations.

# 4. Technical architecture

The public model includes web portals, browser settings, user settings, network settings, IP access settings, data-protection settings, trust stores, identity providers, session loggers and user-access logging. Exact browser image, session lifecycle, policy precedence, pixel streaming, network controls, log retention, quotas and regional behavior remain pending REA verification.

# 5. User workflows

Typical workflows include creating a portal, selecting VPC and subnets, configuring browser and user policies, connecting a SAML identity provider, setting URL allow/deny lists, sharing the portal URL and reviewing logs. A complete study must test blocked URLs, clipboard and file-transfer controls, IP changes, session termination, private-site access, authentication failures, browser policy conflicts, logging and migration paths.

# 6. Pricing and access

Access requires an AWS account, IAM permissions, VPC networking, identity-provider configuration and supported regions. Pricing, session limits, quotas, storage, policy limits and the October 29, 2026 new-customer closure must be verified before implementation. No credentials or private browsing data belong in this dossier.

# 7. API and integration surface

Public surfaces include the AWS console, browser client, AWS CLI, SDKs and WorkSpaces Secure Browser APIs. Operations include portals, browser settings, user settings, network and IP access, data protection, trust stores, identity providers, session loggers and user-access logging. Exact schemas, asynchronous state, errors, retries, policy propagation and session contracts require command-level testing.

# 8. Existing open-source alternatives

Apache Guacamole is an Apache-2.0 open-source browser-based gateway for RDP, VNC and SSH sessions. It provides remote-access primitives but not Secure Browser's disposable browser sessions, Chrome policy enforcement, URL filtering, encrypted browser pixel isolation, portal/IdP controls, data protection or AWS managed service plane.

# 9. Alternative comparison

Compare browser isolation, pixel streaming, URL filtering, browser policies, clipboard/file/print controls, network access, identity, portals, session logging, data protection, audit, quotas and failure recovery. Guacamole covers a remote-access subset; browser isolation and policy enforcement require additional independent components.

# 10. Missing capabilities and opportunity analysis

Research must map portal, browser, user, network, IP, data-protection, identity, trust-store, session and logging operations, policy precedence, browser lifecycle, quotas and the announced availability transition. Any implementation must use original code and synthetic browsing fixtures.

# 11. REA implementation strategy

Use the official product page, FAQ, administration guide, API reference, CLI reference and availability-change notice as primary sources. The generated REA skill should instruct an agent to build an independent browser-isolation service beginning with open remote-access components only where useful, then add disposable browsers, pixel streaming, policy enforcement, identity, data protection and logs only where evidence supports them. Preserve the partial-equivalence and sunset verdicts.

# 12. Security, privacy, and compliance

Verify IAM scope, browser isolation, URL policy, data-protection controls, clipboard/file/print restrictions, network segmentation, identity, session logs, CloudTrail, retention and data residency. Use synthetic accounts and public websites only. Never store credentials, private browsing content or personal data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/workspaces/secure-browser/ — official product scope and availability notice.
- https://aws.amazon.com/workspaces/secure-browser/faqs/ — workflows and security behavior.
- https://docs.aws.amazon.com/workspaces-web/latest/adminguide/ — administration and policy guides.
- https://docs.aws.amazon.com/workspaces-web/latest/APIReference/ — API operations.
- https://docs.aws.amazon.com/cli/latest/reference/workspaces-web/ — CLI surface.
- https://github.com/apache/guacamole-server — open-source remote-access alternative.

# 14. Unknowns

- Complete portal, policy, identity, network, session and logging matrix.
- Exact browser policy precedence, data-protection and pixel-streaming semantics.
- Current quotas, regional behavior, client compatibility and migration path.
- Session, log, trust-store and private-site access failure behavior.
- Verified parity and operating requirements for an independent replacement.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface, availability notice and a partial open-source foundation are documented; no full equivalence claim is made.
