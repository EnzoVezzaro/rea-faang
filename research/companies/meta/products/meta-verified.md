---
schema_version: "1.0"
id: "meta-verified"
company_id: "meta"
name: "Meta Verified"
product_type: "consumer_subscription"
categories:
  - "identity"
  - "verification"
  - "creator-tools"
  - "support"
  - "impersonation-protection"
official_url: "https://www.meta.com/meta-verified/"
official_docs_url: "https://www.meta.com/meta-verified/"
official_source_urls:
  - "https://www.meta.com/technologies/"
  - "https://www.meta.com/meta-verified/"
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
  - id: "ev-meta-verified-identity"
    url: "https://www.meta.com/technologies/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Platforms and Technologies"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta lists Meta Verified as a distinct service in its technology portfolio."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "Meta's official technologies page lists Meta Verified under Services."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-verified-surface"
    url: "https://www.meta.com/meta-verified/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Verified: Get the verified badge on Instagram & Facebook"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta Verified is a subscription for creators and businesses with verification, impersonation protection and support features."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Meta's official page documents subscription plans, verified badges, proactive impersonation monitoring, enhanced support and additional profile/discovery features, with regional and account eligibility limits."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Meta Verified is Meta's subscription service for creator and business profiles. Meta lists it separately under Services and documents verification badges, impersonation protection, enhanced support and profile/discovery benefits. Pricing, eligibility and benefits vary by region, app and account.

# 2. Product identity and ownership

- **Canonical name:** Meta Verified
- **Stable catalog ID:** `meta-verified`
- **Company:** Meta
- **Product type:** consumer subscription
- **Official product URL:** https://www.meta.com/meta-verified/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-verified-identity`, `ev-meta-verified-surface`

Meta Verified is kept separate from Facebook and Instagram, which are the host applications, and from Meta Account, which provides account-management functionality.

# 3. Verified public capabilities

1. Meta lists Meta Verified as a distinct service.
2. The service offers subscription plans for eligible creator and business profiles.
3. Meta documents a verified badge, proactive impersonation protection and enhanced support.
4. Meta documents additional profile, discovery and engagement features, subject to plan and availability.

# 4. Technical architecture

The public evidence supports a subscription and profile-benefit boundary. Internal verification workflows, identity checks, abuse detection, support systems, ranking effects and billing implementation are not inferred.

# 5. User workflows

The documented flow is to sign in on Facebook or Instagram, select an eligible plan, complete required verification and manage the subscription. Benefits apply to subscribed profiles and may differ by plan, region, app and account.

# 6. Pricing and access

Meta publishes plan examples and states that pricing, benefits and availability vary. Current local pricing and eligibility must be checked in the account's onboarding flow; no purchase was attempted.

# 7. API and integration surface

The public product page does not establish a general Meta Verified API. Do not infer verification or support access for another service from the subscription page.

# 8. Open-source alternatives

- **Keycloak:** open-source identity and access-management server.
- **Authentik:** open-source identity provider and access platform.
- **Zitadel:** open-source identity infrastructure for authentication and user management.

# 9. Alternative comparison

Alternative coverage is **partial**. These projects provide identity and access foundations, but none reproduces Meta's subscription billing, platform verification, impersonation monitoring, support operations or creator-discovery ecosystem.

# 10. Missing capabilities and opportunity analysis

An independent implementation would need account verification, subscription lifecycle, billing, eligibility, abuse prevention, impersonation workflows, support operations, privacy controls and platform-specific profile integration. Meta-specific parity is out of scope.

# 11. REA implementation strategy

Use only public product documentation and an authorized test account for any further research. Do not submit identity documents, purchase a plan or access private account workflows without explicit authorization.

# 12. Security and compliance

Identity documents, subscription and profile data are sensitive. Any implementation must define verification-data minimization, billing security, account recovery, abuse controls, auditability, privacy and regional compliance. No security or eligibility parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-verified-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-verified-surface` | https://www.meta.com/meta-verified/ | Subscription, feature, pricing and eligibility claims |
| REA capture | `catalog/rea/meta/meta-verified.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Eligibility, plan availability, pricing and benefits vary by region, app and account.
- No subscription purchase, identity-document submission or private account flow was inspected.
- The public page does not establish a general public API.

# 15. Research history

- **2026-11-04:** reviewed Meta's official technology catalog and Meta Verified product page; promoted the candidate after verifying distinct service identity and subscription-level evidence.
- **Next review:** 2027-02-04, or sooner if Meta changes plans, eligibility or service boundaries materially.
