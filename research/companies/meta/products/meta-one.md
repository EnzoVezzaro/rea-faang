---
schema_version: "1.0"
id: "meta-one"
company_id: "meta"
name: "Meta One"
product_type: "consumer_subscription"
categories:
  - "subscription"
  - "creator-tools"
  - "social"
  - "ai"
  - "analytics"
official_url: "https://www.meta.com/meta-one-plans/"
official_docs_url: "https://www.meta.com/meta-one-plans/"
official_source_urls:
  - "https://www.meta.com/technologies/"
  - "https://www.meta.com/meta-one-plans/"
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
  - id: "ev-meta-one-identity"
    url: "https://www.meta.com/technologies/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Platforms and Technologies"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta lists Meta One as a distinct service in its technology portfolio."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "Meta's official technologies page lists Meta One under Services."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-one-surface"
    url: "https://www.meta.com/meta-one-plans/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta One Subscription Plans: Pricing, Features & More"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta One is a subscription service with personal, creator and business plans that add app features, AI usage and professional tools."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Meta's official plan page documents personal, creator and business offerings, app-specific Plus features, AI media generation, content scheduling, analytics, shared access, verification and regional/account eligibility limits."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-one-relationship"
    url: "https://www.meta.com/meta-verified/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Verified: Get the verified badge on Instagram & Facebook"
    accessed_at: "2026-11-04T00:00:00Z"
    claim: "Meta describes Meta One as a new subscription service that builds on Meta Verified."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Meta Verified's official page identifies Meta One as a separate subscription service with enhanced features and more AI built into Meta apps."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Meta One is Meta's subscription service for personal, creator and business use across its apps. Its official plan page documents app-specific upgrades, more AI usage, creator scheduling and analytics, shared access, verification and other professional tools. It builds on Meta Verified but is a separate service with its own plan surface.

# 2. Product identity and ownership

- **Canonical name:** Meta One
- **Stable catalog ID:** `meta-one`
- **Company:** Meta
- **Product type:** consumer subscription
- **Official product URL:** https://www.meta.com/meta-one-plans/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-one-identity`, `ev-meta-one-surface`, `ev-meta-one-relationship`

Meta One is kept separate from Instagram, Facebook, WhatsApp, Meta AI and Meta Verified. Those products are included as surfaces or related services, not merged into this record.

# 3. Verified public capabilities

1. Meta lists Meta One as a distinct service.
2. Meta documents personal, creator and business plan families.
3. Personal plans add app customization, app-specific features and more AI media-generation usage.
4. Creator plans add scheduling, analytics, links, verification, impersonation protection, support and shared access.
5. Features, plans, pricing, eligibility and availability vary by region, app and account.

# 4. Technical architecture

Public evidence supports a subscription entitlement layer spanning multiple Meta apps. Internal billing, entitlement, identity, ranking, analytics and AI quota systems are not inferred.

# 5. User workflows

Users choose a plan in a supported Meta app, meet account eligibility requirements and receive plan-specific features in Instagram, Facebook, WhatsApp, Meta AI or related surfaces. The public page documents both bundled and app-specific plans.

# 6. Pricing and access

Meta publishes example prices for selected plans and states that local pricing, availability and eligibility vary. No subscription purchase or account-specific onboarding was attempted.

# 7. API and integration surface

The public plan page does not establish a general Meta One API. Creator scheduling, analytics, shared access and AI features must be treated as product workflows, not public API guarantees.

# 8. Open-source alternatives

- **WordPress:** open-source publishing platform with plugins and user roles.
- **Ghost:** open-source publishing and membership platform.
- **Matomo:** open-source analytics platform for owned measurement.

# 9. Alternative comparison

Alternative coverage is **partial**. WordPress and Ghost cover publishing and membership, while Matomo covers analytics; none reproduces Meta One's bundled app entitlements, AI usage, social graph, account system or platform distribution.

# 10. Missing capabilities and opportunity analysis

An independent implementation would need subscription lifecycle, entitlements across apps, creator scheduling, analytics, shared access, identity, payments, AI quotas and platform-specific feature delivery. Meta ecosystem parity is out of scope.

# 11. REA implementation strategy

Use only public plan documentation and authorized test accounts for further research. Do not purchase a plan, submit identity information or access private creator/business workflows without explicit authorization.

# 12. Security and compliance

Subscription, identity, analytics, payment and creator-account data are sensitive. Any implementation must define authorization, billing security, consent, account sharing, auditability, privacy and regional compliance. No security or entitlement-parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-one-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-one-surface` | https://www.meta.com/meta-one-plans/ | Official plans, features, pricing and eligibility claims |
| `ev-meta-one-relationship` | https://www.meta.com/meta-verified/ | Relationship to Meta Verified |
| REA capture | `catalog/rea/meta/meta-one.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Local pricing, rollout, plan eligibility and exact feature matrix require account-specific verification.
- No subscription purchase or private app workflow was inspected.
- The public sources do not establish a general public API or internal entitlement model.

# 15. Research history

- **2026-11-04:** reviewed Meta's official service catalog, Meta One plan page and Meta Verified relationship; promoted the candidate after verifying separate subscription identity and product-level evidence.
- **Next review:** 2027-02-04, or sooner if Meta changes plans, bundle boundaries or availability materially.
