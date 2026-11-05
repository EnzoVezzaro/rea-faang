---
schema_version: "1.0"
id: "netflix-games"
company_id: "netflix"
name: "Netflix Games"
aliases: []
product_type: "games"
categories:
  - "game-subscription"
lifecycle_status: "active"
official_url: "https://www.netflix.com/tudum/games"
official_docs_url: "https://help.netflix.com/en/node/121442"
official_source_urls:
  - "https://www.netflix.com/tudum/games"
  - "https://help.netflix.com/en/node/121442"
  - "https://help.netflix.com/en/node/132197"
  - "https://about.netflix.com/en/news/whats-next-for-netflix-games"
research_status: "researched"
research_confidence: "verified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
evidence:
  - id: "ev-netflix-games-identity"
    url: "https://www.netflix.com/tudum/games"
    source_type: "official_website"
    publisher: "Netflix"
    title: "All of The Games on Netflix Right Now"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Netflix presents Netflix Games as a distinct catalog of games available to members."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "Netflix's official Tudum page presents the current games catalog and describes access for Netflix members."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-netflix-games-access"
    url: "https://help.netflix.com/en/node/121442"
    source_type: "official_website"
    publisher: "Netflix"
    title: "Play games on mobile devices"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Netflix Games are accessed through the Netflix app and a member profile on supported mobile devices."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Netflix Help explains that games appear in the Mobile Games row or Games shortcut and are associated with the Netflix profile."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-netflix-games-tv"
    url: "https://help.netflix.com/en/node/132197"
    source_type: "official_website"
    publisher: "Netflix"
    title: "Play games on TVs and computers"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Netflix Games also have a beta TV and computer surface with country and device limits."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Netflix Help describes games on many recent TVs, streaming devices and Netflix.com, with availability varying by country and device."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-netflix-games-entitlement"
    url: "https://help.netflix.com/en/node/702684345185380"
    source_type: "official_website"
    publisher: "Netflix"
    title: "Ready to play games on TV and on Netflix.com?"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "An active Netflix membership provides access to Netflix Games without separate game accounts, ads or in-game purchases."
    claim_type: "pricing"
    supporting_excerpt_or_summary: "Netflix Help states that games are included with membership and do not require extra fees, ads or in-game purchases."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Netflix Games is a member-entitled game catalog distributed through Netflix. The public product surface covers mobile downloads and a beta TV/computer experience; the games are presented as included with membership rather than as a separate paid game account.

# 2. Product identity and ownership

- **Official name:** Netflix Games
- **Company:** Netflix
- **Lifecycle:** active
- **Canonical product ID:** `netflix-games`
- **Official catalog:** https://www.netflix.com/tudum/games

# 3. Product capabilities

- Mobile games available through the Netflix app and member profile.
- TV and computer play through Netflix surfaces where supported; Netflix documents this as a beta experience with country and device limits.
- Games included with an active membership, without ads, extra game fees or in-app purchases according to Netflix Help.
- Profile-associated progress and saves; Netflix notes that progress from versions released elsewhere cannot be transferred to the Netflix version.

# 4. Technical architecture

Netflix does not publish the internal service architecture in the reviewed sources. The observed public model is a subscription-entitled catalog with client surfaces on mobile, TV and web, plus profile-linked game access and saves. Backend services, game packaging, delivery, telemetry and account APIs remain unknown.

# 5. User workflows

1. A member opens the Netflix app or a supported Netflix surface.
2. The member selects a game from the Mobile Games row, Games shortcut or supported TV/web catalog.
3. On mobile, the member downloads the game from the relevant app store and launches it with the Netflix profile entitlement.
4. Progress is associated with the profile subject to the documented device and availability limits.

Authentication, entitlement failure, device-limit recovery and game-specific save conflict behavior were not tested.

# 6. Pricing and access

The reviewed Netflix Help pages state that Netflix Games are included with an active Netflix membership, with no ads, extra fees or in-app purchases. Availability varies by country, device and profile type; Netflix says games are not available for Kids profiles on the reviewed catalog page.

# 7. API and integration surface

No public Netflix Games API or third-party integration contract was identified in the reviewed official sources. Treat catalog pages and Help Center instructions as user-facing documentation, not an API specification.

# 8. Existing open-source alternatives

No open-source project was verified as an equivalent to the Netflix Games subscription/catalog product. Open-source game engines and individual games can cover implementation components, but not Netflix's licensed catalog, entitlement system, distribution surfaces or member ecosystem.

# 9. Alternative comparison

The relevant comparison is a product-platform gap, not a single missing game engine. Godot and other open engines can support independent games; they do not provide Netflix's member entitlement, curated catalog, licensed content, multi-surface distribution or profile-linked access.

# 10. Missing capabilities and opportunity analysis

An independent implementation would need to choose a bounded game catalog, entitlement model, client targets, save system, content rights and safety/compliance posture. Netflix-specific catalog, licensing, account, device and distribution behavior must not be assumed reproducible.

# 11. REA implementation strategy

REA captured the public Tudum catalog surface. It did not authenticate, download a game, test gameplay, inspect account state or validate TV/computer entitlement flows. The REA report is therefore evidence of the public catalog surface only.

# 12. Security, privacy, and compliance

The reviewed sources do not provide an implementation-level security or privacy specification. A future independent implementation must define account security, child-safety/profile controls, content rights, telemetry minimization, payment boundaries and regional availability explicitly.

# 13. Sources and evidence

- `ev-netflix-games-identity` — https://www.netflix.com/tudum/games
- `ev-netflix-games-access` — https://help.netflix.com/en/node/121442
- `ev-netflix-games-tv` — https://help.netflix.com/en/node/132197
- `ev-netflix-games-entitlement` — https://help.netflix.com/en/node/702684345185380
- Netflix Games REA capture — `catalog/rea/netflix/netflix-games.md`

# 14. Open questions

- Which countries, devices and titles are currently supported for each surface?
- What exact save synchronization and recovery behavior is guaranteed?
- Are any public developer, catalog, entitlement or accessibility APIs available?
- What technical and legal constraints apply to independent game distribution?

# 15. Research history

- v1: dossier created with unverified placeholder research.
- v2: official Netflix Tudum and Help Center sources reviewed; identity, access surfaces, membership entitlement and documented limits promoted to verified research.
