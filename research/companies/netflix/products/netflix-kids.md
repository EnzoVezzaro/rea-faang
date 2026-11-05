---
schema_version: "1.0"
id: "netflix-kids"
company_id: "netflix"
name: "Netflix Kids"
aliases:
  - "Netflix Kids experience"
product_type: "media_streaming"
categories:
  - "kids-profiles"
lifecycle_status: "deprecated"
official_url: "https://www.netflix.com/kids"
official_docs_url: "https://help.netflix.com/en/node/53045"
official_source_urls:
  - "https://help.netflix.com/en/node/114275"
  - "https://help.netflix.com/en/node/53045"
  - "https://help.netflix.com/en/node/10421"
research_status: "retired"
research_confidence: "verified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: null
research_version: 2
evidence:
  - id: "ev-netflix-kids-grouping"
    url: "https://help.netflix.com/en/node/114275"
    source_type: "official_website"
    publisher: "Netflix"
    title: "How to create a profile for kids"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Netflix Kids is a profile experience configured inside a Netflix account, not a separate service identity."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Netflix Help describes selecting a Kids Profile and lists its simplified interface, restricted account settings and child-selected catalog."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-netflix-kids-controls"
    url: "https://help.netflix.com/en/node/53045"
    source_type: "official_website"
    publisher: "Netflix"
    title: "Parental controls on Netflix"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Kids behavior is implemented through profile maturity settings and parental controls."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Netflix Help directs account owners to create or manage profiles, maturity ratings, title blocks, profile locks and PIN controls."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Netflix Kids is not maintained as an independent service entry. Official Netflix documentation describes it as the Netflix Kids experience, a profile mode configured inside a Netflix account. It is therefore retained as a deprecated catalog record and grouped conceptually under `netflix-profiles` to avoid double-counting the same product surface.

# 2. Product identity and ownership

- **Observed name:** Netflix Kids experience
- **Canonical catalog decision:** feature/profile mode, not a separate service
- **Parent product:** `netflix-profiles`
- **Official documentation:** https://help.netflix.com/en/node/114275
- **Catalog status:** deprecated / retired from active product research

# 3. Product capabilities

The official Help Center documents a simplified interface, a child-selected catalog, restricted direct access to account settings, no direct email sign-in for Kids profiles, maturity controls and profile-level parental settings.

# 4. Technical architecture

No independent service architecture was identified. The verified architecture boundary is a profile mode and account-level parental-control configuration within Netflix.

# 5. User workflows

1. An account owner opens profile management.
2. The owner creates or edits a profile and selects the Kids experience or a Kids Profile.
3. The profile receives the documented child-oriented interface and content restrictions.
4. The owner manages maturity ratings, title blocks, profile locks and PIN controls from Netflix's parental-control surfaces.

# 6. Pricing and access

Netflix Kids does not have a separate subscription or independent account entitlement in the reviewed sources; it is configured within an existing Netflix account.

# 7. API and integration surface

No public API for an independent Netflix Kids service was identified. The relevant public surface is Netflix account/profile management documentation.

# 8. Existing open-source alternatives

No alternative is evaluated because the catalog decision is that this is a feature of Netflix Profiles, not an independent product to reproduce or compare separately.

# 9. Alternative comparison

Any comparison should be made against the parent profile and parental-control product, not against a standalone Netflix Kids service.

# 10. Missing capabilities and opportunity analysis

The important catalog correction is eliminating duplicate product scope. A future independent media service may implement child profiles and parental controls, but that work belongs to the parent profile/media product scope.

# 11. REA implementation strategy

No separate REA capture is treated as evidence of an independent service. Existing public documentation is sufficient to record the grouping decision; authenticated account behavior remains untested.

# 12. Security, privacy, and compliance

The official sources establish the existence of profile and parental-control surfaces but do not constitute an implementation security specification. Child privacy, age assurance, content classification and account recovery require separate review under the parent product.

# 13. Sources and evidence

- `ev-netflix-kids-grouping` — https://help.netflix.com/en/node/114275
- `ev-netflix-kids-controls` — https://help.netflix.com/en/node/53045
- Profile management — https://help.netflix.com/en/node/10421

# 14. Research history

- v1: dossier treated Netflix Kids as a separate pending product.
- v2: official Netflix Help sources verified that it is a profile experience; record deprecated and grouped under `netflix-profiles`.
