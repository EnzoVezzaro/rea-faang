---
schema_version: "1.0"
id: "gmail"
company_id: "google"
name: "Gmail"
aliases: []
product_type: "consumer_application"
categories:
  - "productivity"
  - "email"
  - "communication"
official_url: "https://mail.google.com/"
official_docs_url: "https://developers.google.com/workspace/gmail"
official_source_urls:
  - "https://developers.google.com/workspace/gmail/api/guides"
  - "https://developers.google.com/workspace/gmail/api/guides/push"
  - "https://support.google.com/mail/answer/9259770"
  - "https://support.google.com/mail/answer/7190"
  - "https://knowledge.workspace.google.com/admin/gmail/compare-gmail-features-across-google-workspace-editions"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
evidence:
  - id: "ev-gmail-identity"
    url: "https://mail.google.com/"
    source_type: "official_website"
    publisher: "Google"
    title: "Gmail"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The canonical public product surface is Gmail at mail.google.com."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "The official URL resolves to Google's Gmail sign-in surface; the repository records a dated REA capture of that unauthenticated entry page."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-gmail-api-overview"
    url: "https://developers.google.com/workspace/gmail/api/guides"
    source_type: "developer_documentation"
    publisher: "Google for Developers"
    title: "Gmail API overview"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The Gmail API is a REST API for authorized mailbox access and sending mail, including messages, threads, labels and delegation concepts."
    claim_type: "api_surface"
    supporting_excerpt_or_summary: "Google documents mailbox access, programmatic sending, message and thread resources, labels, delegates, aliases and related Gmail API concepts."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-gmail-push"
    url: "https://developers.google.com/workspace/gmail/api/guides/push"
    source_type: "developer_documentation"
    publisher: "Google for Developers"
    title: "Configure push notifications with the Gmail API"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The Gmail API can publish mailbox-change notifications through Google Cloud Pub/Sub watches."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The official guide documents watch requests, history IDs, Pub/Sub delivery, renewal at least every seven days, acknowledgement and notification limitations."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-gmail-search-filters"
    url: "https://support.google.com/mail/answer/7190"
    source_type: "developer_documentation"
    publisher: "Gmail Help"
    title: "Refine searches in Gmail"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Gmail documents search operators and filterable message properties such as labels, categories, attachments and headers."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Google Help documents operators including label, category, has, filename, in, is and header, with examples and query behavior notes."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-gmail-organize"
    url: "https://support.google.com/mail/answer/9259770"
    source_type: "developer_documentation"
    publisher: "Gmail Help"
    title: "Organize and archive email"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Gmail provides labels, filters, stars, snooze, archive and deletion workflows for organizing mail."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The official help page describes labels and filters, starring, snoozing, archiving and deleting messages; Gmail labels are not folders."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-gmail-workspace-editions"
    url: "https://knowledge.workspace.google.com/admin/gmail/compare-gmail-features-across-google-workspace-editions"
    source_type: "developer_documentation"
    publisher: "Google Workspace"
    title: "Compare Gmail features across Google Workspace editions"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Gmail capabilities, limits, storage and security/compliance features vary by Google Workspace edition."
    claim_type: "status"
    supporting_excerpt_or_summary: "Google's comparison tables distinguish editions, storage, recipient limits, filtering, malware protection, retention and other administrator-controlled features."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-gmail-api-reference"
    url: "https://developers.google.com/workspace/gmail/api/reference/rest"
    source_type: "api_specification"
    publisher: "Google for Developers"
    title: "Gmail API REST reference"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The Gmail API exposes REST resources for users, messages, threads, labels, history, drafts, settings and attachments."
    claim_type: "api_surface"
    supporting_excerpt_or_summary: "The official REST reference lists Gmail API resources and methods, including message, thread, label and history operations."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Gmail is Google's hosted email service and mailbox platform. The official evidence verifies public Gmail identity, labels and filters, search operators, a REST API for authorized mailbox access, programmatic sending, message/thread resources and Pub/Sub push notifications. Workspace editions add different storage, security, compliance and delivery controls.

This dossier promotes `gmail` to `researched` for the documented public and developer surfaces. It does not claim access to a private mailbox, parity with Google's anti-abuse systems, or identical behavior across personal Gmail, Google Workspace, Gmail API and other Google surfaces.

# 2. Product identity and ownership

- **Canonical name:** Gmail
- **Stable catalog ID:** `gmail`
- **Company:** Google
- **Product type:** hosted consumer and business email application
- **Official product URL:** https://mail.google.com/
- **Official developer documentation:** https://developers.google.com/workspace/gmail
- **Lifecycle:** active at the time of review
- **Identity evidence:** `ev-gmail-identity`, plus `catalog/rea/google/gmail.md`
- **Edition matrix:** personal Gmail and Workspace editions have different limits, administrator controls and compliance features

Gmail web, mobile clients, IMAP/SMTP, Gmail API and Workspace administration are related surfaces. They are not silently collapsed into separate product identities here. A separate catalog row is justified only when the lifecycle, owner or evidence scope differs materially.

# 3. Product capabilities

The following claims are supported by the official sources in the evidence ledger:

1. **Mail and mailbox resources:** Gmail exposes messages, threads, labels, drafts, history, settings and attachments through documented resources.
2. **Search and organization:** Gmail documents search operators, labels, filters, categories, stars, snooze, archive and deletion workflows.
3. **Authorized programmatic access:** Gmail API clients can access authorized mailboxes, send mail and manage organization workflows subject to authorization and quotas.
4. **Delegation and aliases:** The Gmail API documents delegates and send-as aliases as supported account concepts.
5. **Mailbox change notifications:** Gmail API watches can publish mailbox changes through Cloud Pub/Sub, with expiration and delivery limitations.
6. **Workspace administration:** Workspace editions vary in storage, recipient limits, filtering, malware/phishing controls, retention, routing and compliance features.

Not established by these sources: Google's private spam and abuse models, complete ranking or classification behavior, internal storage architecture, all client UI behavior, personal-account limits in every region, or a service-level guarantee for every API operation.

# 4. Technical architecture

**Verified public model:** Gmail client or authorized API caller → mailbox resources (messages, threads, labels and history) → optional filters, delegation, send-as or Pub/Sub notification integration. The REST reference and API guides document the resource boundaries and synchronization primitives.

**Not verified:** internal storage, indexing, threading implementation, spam and malware classifier architecture, replication, queueing, retention internals, account recovery systems and regional deployment topology. These remain `UNKNOWN`; no internal architecture is inferred.

# 5. User workflows

The REA capture observed the unauthenticated Gmail sign-in surface only. Official help supports signed-in workflows for searching mail, applying labels and filters, starring, snoozing, archiving and deleting. The API documentation supports authorized programmatic reading, indexing, sending, organization and synchronization workflows.

The following remain surface- or account-dependent and were not independently exercised: composing UI, conversation rendering, attachments, drafts, schedule send, confidential mode, mobile behavior, spam/quarantine behavior, delegation administration, connected Workspace applications, recovery, errors, retries and cancellation.

# 6. Pricing and access

Personal Gmail access requires a Google Account and has account-specific limits. Google Workspace is a paid/administered service with edition-specific storage, recipient limits, security, routing, retention and compliance options. Gmail API access requires OAuth or another authorized credential and is subject to current API quotas and policies.

No account was accessed, no message was read or sent, and no billing or Workspace configuration was changed during this research.

# 7. API and integration surface

- **Gmail API REST:** resources for users, messages, threads, labels, drafts, history, settings and attachments.
- **Push notifications:** mailbox watches delivered through Google Cloud Pub/Sub; watches expire and require renewal.
- **IMAP/POP/SMTP:** Google documents these as client connectivity surfaces, with availability and administrator controls varying by account or edition.
- **Delegation and send-as:** documented account-level authorization concepts for Workspace and API integrations.
- **Workspace administration:** edition and domain controls for routing, retention, filtering, security and compliance.

Before integration, verify OAuth scopes, quotas, watch renewal, notification loss/recovery, data retention, tenant isolation and the specific personal or Workspace edition contract.

# 8. Existing open-source alternatives

The curated landscape identifies partial alternatives:

- **Mailcow:** self-hosted mail-server bundle covering delivery, storage, filtering and web access; it transfers DNS, deliverability and operations to the operator.
- **Mail-in-a-Box:** opinionated personal mail-server bundle designed for single-box deployment.
- **Stalwart / Mox:** modern self-hosted mail-server options with different protocol, storage and administration scopes.
- **Roundcube:** mature open-source webmail client that must be paired with a mail server.

These projects can cover mail-server or webmail functions, but none is verified here as a drop-in replacement for Gmail's hosted service, account ecosystem, anti-abuse systems, Workspace integration or API contract.

# 9. Alternative comparison

The evidence supports **partial** alternative coverage. A self-hosted stack can provide SMTP/IMAP delivery, storage, filters and webmail, but the operator assumes deliverability, abuse prevention, backups, upgrades, DNS, security and compliance. Roundcube is a client rather than a complete mail service. Alternative coverage remains `unknown` until each candidate receives a current license, version, maintenance, security and capability review for the target scope.

# 10. Missing capabilities and opportunity analysis

The opportunity is a bounded, self-hosted mail or webmail system with explicit ownership of delivery, storage, search, retention and privacy—not a claim to reproduce Gmail's global hosted service. A viable first slice could choose a mail server, web client, bounded domain, backup policy, spam policy and API contract. Gmail-scale anti-abuse, deliverability, Workspace integrations and global reliability remain out of scope.

# 11. REA implementation strategy

Use the REA report only for the observed public sign-in contract. For an independent implementation, compare Mailcow, Mail-in-a-Box, Stalwart, Mox and Roundcube against the declared domain, protocol, webmail, backup, security and compliance requirements. Do not treat a client as a complete mail service or claim Gmail parity.

# 12. Security, privacy and compliance

Email contains sensitive content. An independent implementation must define transport security, authentication, account recovery, mailbox isolation, spam and malware handling, attachment scanning, audit logs, retention, deletion/export, backups, abuse response and jurisdictional compliance. Workspace feature availability and administrator controls vary by edition. No compliance certification or privacy parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-gmail-identity` | https://mail.google.com/ | Product identity and public sign-in surface |
| `ev-gmail-api-overview` | https://developers.google.com/workspace/gmail/api/guides | API resources and authorized workflows |
| `ev-gmail-push` | https://developers.google.com/workspace/gmail/api/guides/push | Pub/Sub watches, renewal and delivery limits |
| `ev-gmail-search-filters` | https://support.google.com/mail/answer/7190 | Search operators and message properties |
| `ev-gmail-organize` | https://support.google.com/mail/answer/9259770 | Labels, filters, stars, snooze and archive |
| `ev-gmail-workspace-editions` | https://knowledge.workspace.google.com/admin/gmail/compare-gmail-features-across-google-workspace-editions | Edition limits, security and compliance features |
| `ev-gmail-api-reference` | https://developers.google.com/workspace/gmail/api/reference/rest | REST resources and methods |
| REA capture | `catalog/rea/google/gmail.md` | Dated unauthenticated sign-in observation only |

# 14. Open questions and exclusions

- Exact personal-account and Workspace quotas must be checked for the target account and edition.
- OAuth scopes, watch renewal, Pub/Sub delivery and sync recovery require implementation-specific testing.
- Private spam, abuse, ranking, storage and threading systems are not public evidence here.
- Full signed-in UI, mobile, attachment, draft, delegation and connected-app workflows were not captured.
- Alternative mail projects and licenses require separate current reviews.
- No mailbox, account, billing, production data or administrator configuration was accessed.

# 15. Research history

- **2026-11-03:** reviewed official Gmail API, Gmail Help and Google Workspace documentation; reconciled them with the existing REA sign-in capture; promoted the dossier from `pending` to `researched` with verified evidence and explicit unknowns.
- **Next review:** 2027-02-03, or sooner if Gmail API, Workspace edition, quota or privacy documentation changes materially.
