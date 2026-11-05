---
schema_version: "1.0"
id: "meta-account"
company_id: "meta"
name: "Meta Account"
aliases:
  - "Accounts Center"
  - "Meta Account (Single Login)"
product_type: "consumer_application"
categories:
  - "identity"
  - "account-management"
  - "security"
  - "connected-experiences"
official_url: "https://www.meta.com/account/"
official_docs_url: "https://www.meta.com/help/accounts-center/"
official_source_urls:
  - "https://www.meta.com/technologies/"
  - "https://www.meta.com/help/accounts-center/"
  - "https://about.fb.com/news/2026/04/meta-account/"
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
  - id: "ev-meta-account-identity"
    url: "https://www.meta.com/technologies/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Platforms and Technologies"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta lists Meta Account as a distinct service in its technology portfolio."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "Meta's official technologies page lists Meta Account under Services."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-account-help"
    url: "https://www.meta.com/help/accounts-center/"
    source_type: "official_website"
    publisher: "Meta"
    title: "About Accounts Center"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta Account provides connected-account login, shared settings and account management across Meta accounts and services."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Meta documents connected experiences, login across accounts, contact information, ad preferences, payments and account settings through Accounts Center and Meta Account."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-account-announcement"
    url: "https://about.fb.com/news/2026/04/meta-account/"
    source_type: "press_release"
    publisher: "Meta"
    title: "Meta Account: The Simpler Way to Access Your Apps and Devices"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta describes Meta Account as a centralized way to access and manage Meta apps and devices, with passkeys, threat protection and shared settings."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Meta's announcement documents centralized sign-in, passkeys, security recommendations, settings management and support for apps and devices, with gradual rollout and optional WhatsApp participation."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Meta Account is Meta's centralized identity and account-management service. Meta lists it separately under Services and documents connected login, shared settings, security controls and management across participating apps and devices. The service is distinct from the individual apps it connects.

# 2. Product identity and ownership

- **Canonical name:** Meta Account
- **Stable catalog ID:** `meta-account`
- **Company:** Meta
- **Product type:** consumer identity and account-management application
- **Official product URL:** https://www.meta.com/account/
- **Official help:** https://www.meta.com/help/accounts-center/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-account-identity`, `ev-meta-account-help`, `ev-meta-account-announcement`

Meta Account is kept separate from Facebook, Instagram, Messenger, WhatsApp, Meta AI and Meta Pay. Those products may use connected-account features without becoming one catalog record.

# 3. Verified public capabilities

1. Meta lists Meta Account as a distinct service.
2. Accounts Center/Meta Account supports connected experiences and login across participating accounts.
3. Meta documents centralized management for contact details, passwords, two-factor authentication, ad preferences, payments and related settings.
4. Meta documents passkeys, security recommendations and continuous threat protection, with rollout and participation limits.

# 4. Technical architecture

The public evidence supports a centralized identity and settings boundary. Internal identity stores, token flows, risk models, account-linking implementation and enforcement systems are not inferred.

# 5. User workflows

The verified public scope includes signing into participating Meta apps and devices, linking accounts, managing shared settings and reviewing security controls. App-specific settings remain managed inside the relevant app. WhatsApp participation is optional and rollout is gradual.

# 6. Pricing and access

Meta Account is presented as an account service rather than a standalone paid subscription. Availability, eligible apps, regions and rollout state require current account-specific verification.

# 7. API and integration surface

The public sources do not establish a general unrestricted Meta Account API. Integrations must use current official Meta developer documentation and authorized identity contracts; no API capability is inferred from the consumer account surface.

# 8. Open-source alternatives

- **Keycloak:** open-source identity and access-management server.
- **Authentik:** open-source identity provider and access platform.
- **Zitadel:** open-source identity infrastructure for authentication and user management.

# 9. Alternative comparison

Alternative coverage is **partial**. Keycloak, Authentik and Zitadel provide identity foundations, but none reproduces Meta's connected app graph, consumer distribution, device ecosystem, proprietary security systems or Meta-specific settings semantics.

# 10. Missing capabilities and opportunity analysis

An independent implementation needs account lifecycle, authentication, passkeys, MFA, consent, linked-account management, risk detection, recovery, privacy controls, auditability and integrations for each supported application. Meta-specific ecosystem parity is out of scope.

# 11. REA implementation strategy

Use public Meta documentation only to define user-visible requirements. Build against an independently authorized identity provider and explicit consent model; never access or copy private Meta account data.

# 12. Security and compliance

Identity and security data are sensitive. Any implementation must define credential protection, passkey handling, MFA, session security, recovery, least privilege, audit logs, privacy, retention and regional compliance. No security-parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-account-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-account-help` | https://www.meta.com/help/accounts-center/ | Connected accounts and settings documentation |
| `ev-meta-account-announcement` | https://about.fb.com/news/2026/04/meta-account/ | Centralized access, security and rollout claims |
| REA capture | `catalog/rea/meta/meta-account.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Eligible apps, regions, rollout timing and WhatsApp participation require current verification.
- No private account, authentication, recovery or security workflow was inspected.
- The public sources do not establish a general public API or implementation-level security parity.

# 15. Research history

- **2026-11-04:** reviewed Meta's official technology catalog, Accounts Center help documentation and Meta newsroom announcement; promoted the candidate after verifying distinct service identity and product-level identity/account evidence.
- **Next review:** 2027-02-04, or sooner if Meta changes Accounts Center, rollout or supported-app behavior materially.
