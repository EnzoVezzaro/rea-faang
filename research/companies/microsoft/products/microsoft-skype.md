---
schema_version: "1.0"
id: "microsoft-skype"
company_id: "microsoft"
name: "Skype"
aliases: ["Skype for Consumers"]
product_type: "messaging"
categories: ["calling", "messaging"]
lifecycle_status: "discontinued"
official_url: "https://www.skype.com/"
official_docs_url: null
official_source_urls: ["https://support.microsoft.com/en-us/skype/skype-is-retiring-in-may-2025-what-you-need-to-know", "https://www.microsoft.com/en-us/copilot/blog/2025/02/28/the-next-chapter-moving-from-skype-to-microsoft-teams/"]
research_status: "retired"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: null
research_version: 1
inventory_status: "retired"
command_status: "not_applicable"
command_source: null
---
# 1. Executive summary

Skype was Microsoft's consumer calling and messaging service. Microsoft retired it on 5 May 2025 and directs users to Microsoft Teams (free).

**Retired:** Retired by Microsoft on 5 May 2025; see https://support.microsoft.com/en-us/skype/skype-is-retiring-in-may-2025-what-you-need-to-know

# 2. Product identity and ownership

**Official name:** Skype
**Company:** Microsoft Corporation
**Lifecycle status:** discontinued (retired 5 May 2025)
**Official website:** https://www.skype.com/ (service retired)

# 3. Product capabilities

- One-to-one and group voice and video calling
- Instant messaging with file transfer
- PSTN calling through paid plans
- All capabilities are historical: the consumer service was retired on 5 May 2025

# 4. Technical architecture

Skype was a proprietary peer-to-peer and hosted calling service. Its implementation was never public; only the retirement notice and user-facing behaviour are observable now.

# 5. User workflows

Historically: sign in, add contacts, call or message, place PSTN calls with credit. Microsoft directs remaining users to Microsoft Teams (free).

# 6. Pricing and access

Free calling between Skype users with paid add-ons for PSTN; no longer purchasable for the consumer service.

# 7. API and integration surface

No official API or SDK remains for the retired consumer service; command status is not_applicable, recorded with the retirement notice as the source.

# 8. Existing open-source alternatives

Jitsi (Apache-2.0) and Element (AGPL-3.0) cover self-hosted calling and chat and are the reason this entry needs no build.

# 9. Alternative comparison

Jitsi is meeting-first; Element is chat-first with calls. Both are maintained and self-hostable, unlike the retired service.

# 10. Missing capabilities and opportunity analysis

None: the product is out of scope because it is retired and the open alternatives are available.

# 11. REA implementation strategy

No implementation. Keep the record so the inventory does not re-add a retired product, and point users to Jitsi or Element.

# 12. Security, privacy, and compliance

Any historical Skype data is governed by Microsoft's retention terms; the catalog records no user data.

# 13. Sources and evidence

- https://support.microsoft.com/en-us/skype/skype-is-retiring-in-may-2025-what-you-need-to-know
- https://www.microsoft.com/en-us/copilot/blog/2025/02/28/the-next-chapter-moving-from-skype-to-microsoft-teams/

# 14. Open questions

- None outstanding: the product is out of scope.

# 15. Research history

Record created 2026-11-03 from public official sources during the FAANG+Microsoft inventory expansion. Status: `retired`; nothing beyond official documentation and public announcements is asserted.
