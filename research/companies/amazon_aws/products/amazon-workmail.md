---
schema_version: "1.0"
id: "amazon-workmail"
company_id: "amazon_aws"
name: "Amazon WorkMail"
aliases: ["WorkMail", "Amazon WorkMail Email and Calendar"]
product_type: "business_software"
categories: ["email", "calendar", "contacts", "collaboration", "managed-service", "sunset-notice"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/workmail/"
official_docs_url: "https://docs.aws.amazon.com/workmail/"
official_source_urls:
  - "https://aws.amazon.com/workmail/"
  - "https://docs.aws.amazon.com/workmail/latest/userguide/"
  - "https://docs.aws.amazon.com/workmail/latest/adminguide/"
  - "https://docs.aws.amazon.com/workmail/latest/APIReference/"
  - "https://docs.aws.amazon.com/general/latest/gr/workmail.html"
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

Amazon WorkMail is a managed business email and calendaring service with web, desktop and mobile access, IMAP/SMTP/Exchange ActiveSync support, organization administration, directory integration and message-flow APIs. AWS's current API documentation announces end of support on March 31, 2027, so this entry preserves the product as active with a sunset notice. Mailcow is recorded as a partial open-source foundation.

# 2. Product identity and ownership

- **Official name:** Amazon WorkMail
- **Company:** Amazon Web Services
- **Lifecycle:** Active with announced end of support on 2027-03-31
- **Primary scope:** Managed business email, calendar and contacts

# 3. Product capabilities

- Provide managed mailboxes, calendars and contacts.
- Support web, Outlook, macOS, iOS and Android clients.
- Support IMAP, SMTP and Exchange ActiveSync access patterns.
- Manage organizations, domains, users, groups, resources and mobile-device rules.
- Integrate with corporate directories and control encryption keys and data location.
- Expose message-flow, availability, impersonation and mailbox-administration APIs.

# 4. Technical architecture

The public model includes WorkMail organizations, domains, users, groups, resources, mailboxes, mobile devices, access control, directory integration, SMTP/IMAP/EWS paths, web client behavior, message flow and AWS IAM-signed administration APIs. End-of-support migration behavior, historical client semantics, quotas, retention, regional behavior and API lifecycle remain pending REA verification.

# 5. User workflows

Typical workflows include creating an organization, adding a domain, creating users and groups, configuring clients, sending and receiving mail, synchronizing calendars and contacts, managing resources and mobile access and reviewing message flow. A complete study must test mailbox provisioning, client synchronization, delivery failures, permissions, delegates, resource booking, mobile rules, export, impersonation and shutdown or migration paths.

# 6. Pricing and access

Access requires an AWS account, IAM permissions, a supported region and domain configuration. Pricing, mailbox limits, quotas, storage, retention, migration and end-of-support implications must be verified before implementation. No credentials, private mail or customer data belong in this dossier.

# 7. API and integration surface

Public surfaces include the web client, desktop and mobile protocols, IMAP, SMTP, Exchange ActiveSync, EWS where supported, AWS SDKs and WorkMail administration and message-flow APIs. API operations include organization, user, group, resource, device, policy, alias, mailbox and export management. Exact schemas, signing, errors, retries, delivery and client behavior require command-level testing.

# 8. Existing open-source alternatives

Mailcow: dockerized is a GPL-3.0 open-source self-hosted email groupware stack with mail transport, IMAP, webmail, calendars, contacts and administration components. It is a practical foundation for an independent service, but does not reproduce WorkMail's AWS IAM, managed availability, directory integration, message-flow APIs, client behavior, quotas or service plane.

# 9. Alternative comparison

Compare mailbox and domain administration, SMTP/IMAP/EAS, calendars, contacts, webmail, mobile clients, directory integration, delegation, resource booking, encryption, retention, audit, quotas, delivery, migration and operational scaling. Mailcow covers self-hosted mail and groupware; AWS-specific managed behavior remains separate.

# 10. Missing capabilities and opportunity analysis

Research must map administration, mailbox, group, resource, mobile, client, message-flow, EWS, export and identity operations, plus the announced support termination and migration requirements. Any implementation must use original code and synthetic accounts only.

# 11. REA implementation strategy

Use the official product, user guide, administrator guide, API reference and end-of-support notice as primary sources. The generated REA skill should instruct an agent to build an independent mail and calendar service using open components such as Mailcow only as a foundation, and to treat AWS-specific behavior as historical or migration research rather than a new dependency. Preserve the partial-equivalence verdict and sunset status.

# 12. Security, privacy, and compliance

Verify IAM scope, mailbox privacy, TLS, encryption keys, directory access, retention, exports, mobile access, impersonation, abuse prevention, audit and data residency. Use synthetic accounts and public fixtures only. Never store credentials, private messages or personal data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/workmail/ — official product context.
- https://docs.aws.amazon.com/workmail/latest/userguide/ — user and client workflows.
- https://docs.aws.amazon.com/workmail/latest/adminguide/ — administration and lifecycle.
- https://docs.aws.amazon.com/workmail/latest/APIReference/ — API surface and end-of-support notice.
- https://docs.aws.amazon.com/general/latest/gr/workmail.html — endpoints and quotas.
- https://github.com/mailcow/mailcow-dockerized — open-source mail/groupware alternative.

# 14. Unknowns

- Complete mailbox, client, calendar, contact, message-flow and administration matrix.
- Exact retention, quota, export, delivery and protocol semantics.
- Migration and data-access behavior before and after 2027-03-31.
- Regional, identity, encryption, audit and directory integration boundaries.
- Verified parity and operating requirements for an independent replacement.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface, sunset notice and a partial open-source foundation are documented; no full equivalence claim is made.
