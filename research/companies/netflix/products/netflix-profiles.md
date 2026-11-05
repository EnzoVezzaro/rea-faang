---
schema_version: "1.0"
id: "netflix-profiles"
company_id: "netflix"
name: "Netflix Profiles"
aliases: []
product_type: "consumer_application"
categories:
  - "profiles"
lifecycle_status: "active"
official_url: "https://www.netflix.com/"
official_docs_url: "https://help.netflix.com/en/node/10421"
official_source_urls:
  - "https://help.netflix.com/en/node/10421"
  - "https://help.netflix.com/en/node/102377"
  - "https://help.netflix.com/en/node/100639"
  - "https://help.netflix.com/en/node/114276"
  - "https://help.netflix.com/en/node/127831"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
evidence:
  - id: "ev-netflix-profiles-identity"
    url: "https://help.netflix.com/en/node/10421"
    source_type: "official_website"
    publisher: "Netflix"
    title: "How to create, edit, or delete profiles"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Netflix Profiles are a first-class account surface with up to five profiles and separate per-profile settings and activity."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "Netflix Help documents profile creation, editing and deletion and lists profile-specific settings, history, saves, recommendations and ratings."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-netflix-profiles-personalization"
    url: "https://help.netflix.com/en/node/100639"
    source_type: "official_website"
    publisher: "Netflix"
    title: "How Netflix's Recommendations System Works"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Netflix uses profile interactions, ratings and viewing signals to personalize recommendations."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Netflix describes profile-specific title preferences and recommendation computation based on viewing and interaction signals."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-netflix-profiles-controls"
    url: "https://help.netflix.com/en/node/114276/"
    source_type: "official_website"
    publisher: "Netflix"
    title: "How to set profile maturity ratings or block titles"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Profiles support maturity ratings and title blocking as content controls."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Netflix Help documents profile-level maturity settings and title blocks, with account verification required for changes."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-netflix-profiles-locks"
    url: "https://help.netflix.com/en/node/127831"
    source_type: "official_website"
    publisher: "Netflix"
    title: "Lock icon on a profile or title"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Netflix Profiles can be protected with a profile-lock PIN."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Netflix Help describes four-digit profile-lock PINs and their effect on profile access."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Netflix Profiles are per-viewer identities inside a Netflix account. Each profile has its own preferences, activity, recommendations, ratings, settings and game saves, while the account owner controls the profile set and parental restrictions.

# 2. Product identity and ownership

- **Official name:** Netflix Profiles
- **Company:** Netflix
- **Canonical product ID:** `netflix-profiles`
- **Parent service:** Netflix membership/account
- **Public surface:** https://www.netflix.com/

# 3. Product capabilities

- Up to five profiles on a Netflix account under the documented conditions.
- Per-profile language, playback, notification, subtitle, maturity and viewing-history settings.
- Profile-specific recommendations, My List, ratings and game saves.
- Kids profile mode, profile locks and title blocks.

# 4. Technical architecture

Netflix does not publish the internal profile-service architecture. Public evidence supports an account-scoped profile store, per-profile settings and interaction history, recommendation computation, and access-control features. Internal APIs, data schemas, ranking implementation and storage guarantees remain unknown.

# 5. User workflows

1. An account owner opens profile management and creates or edits a profile.
2. The user selects profile name, icon and available preferences.
3. Netflix records profile-specific viewing and rating activity and uses it for recommendations.
4. The account owner may set maturity limits, block titles or add a profile-lock PIN.
5. Users switch profiles on supported TV, mobile and web surfaces.

The reviewed sources do not establish authenticated error handling, conflict resolution or every device-specific behavior.

# 6. Pricing and access

Profiles are part of the Netflix account experience; the reviewed sources do not identify a separate Profiles subscription. Limits and features vary by account, device, profile type and country.

# 7. API and integration surface

No public Netflix Profiles API or third-party integration contract was identified. The Help Center is user-facing documentation, not an API specification.

# 8. Existing open-source alternatives

Jellyfin provides a partial self-hosted foundation for multi-user media profiles, but it does not reproduce Netflix's catalog, recommendation system, account ecosystem or proprietary controls. Alternative coverage remains partial and product-specific behavior remains provider-specific.

# 9. Alternative comparison

Open media servers can provide user accounts, libraries and basic parental controls. They do not provide Netflix's licensed catalog, profile personalization at global scale, account/member model or content recommendation systems.

# 10. Missing capabilities and opportunity analysis

An independent implementation should scope account/profile ownership, history, ratings, recommendations, maturity controls, profile locks and media rights separately. Netflix's internal data, algorithms and distribution ecosystem must not be assumed reproducible.

# 11. REA implementation strategy

REA captured the public Netflix landing surface, including the public profile-related messaging. It did not authenticate or exercise profile management. The Help Center evidence supplies the documented workflow and limits; authenticated behavior remains untested.

# 12. Security, privacy, and compliance

Profile locks, identity verification, child safety, maturity controls and viewing-history privacy are security-sensitive. The official pages document user-facing controls but not an implementation security specification.

# 13. Sources and evidence

- `ev-netflix-profiles-identity` — https://help.netflix.com/en/node/10421
- `ev-netflix-profiles-personalization` — https://help.netflix.com/en/node/100639
- `ev-netflix-profiles-controls` — https://help.netflix.com/en/node/114276/
- `ev-netflix-profiles-locks` — https://help.netflix.com/en/node/127831
- Netflix Profiles REA capture — `catalog/rea/netflix/netflix-profiles.md`

# 14. Open questions

- What profile and recommendation APIs, if any, are publicly available?
- How are profile data retention, export and deletion handled across regions?
- What exact recommendation signals and controls are exposed per plan and device?
- What accessibility and child-safety guarantees apply across every client?

# 15. Research history

- v1: dossier created with unverified placeholder research.
- v2: official Netflix Help sources reviewed; profile identity, personalization, controls and locks promoted to verified research.
