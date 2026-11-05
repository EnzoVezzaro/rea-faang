---
schema_version: "1.0"
id: "meta-whatsapp"
company_id: "meta"
name: "WhatsApp"
aliases: []
product_type: "messaging"
categories:
  - "messaging"
official_url: "https://www.whatsapp.com/"
official_docs_url: "https://faq.whatsapp.com/"
official_source_urls:
  - "https://faq.whatsapp.com/236979282604093"
  - "https://faq.whatsapp.com/378279804439436"
  - "https://faq.whatsapp.com/1623293708131281"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
---

# WhatsApp

## Research verdict

WhatsApp is an active messaging and calling service operated by Meta. Its public
surface supports private messages, voice and video calls, groups, status updates,
media/file sharing, and linked devices. WhatsApp's official documentation states
that personal messages and calls are end-to-end encrypted; metadata and account
information are governed separately by its privacy documentation.

The open-source alternative coverage is **partial**. Signal and Matrix/Element
cover important secure-messaging jobs, but they do not reproduce WhatsApp's
contact graph, account ecosystem, business surface, or product-specific network
effects.

## Product identity and boundary

- **Owner:** Meta Platforms, Inc.
- **Canonical product ID:** `meta-whatsapp`
- **Lifecycle:** Active
- **Public entry point:** https://www.whatsapp.com/
- **Documentation:** https://faq.whatsapp.com/
- **Product boundary:** Consumer messaging, calling, group, status, and linked
  device experiences under the WhatsApp brand.
- **Related catalog entries:** Messenger, Instagram, Facebook, Threads and Meta AI
  are separate Meta products; WhatsApp Business capabilities are related to this
  surface but should not be treated as a separate catalog product without a
  distinct official product boundary.

## Verified user capabilities

Official WhatsApp sources verify that users can:

1. Send personal messages and make voice or video calls with end-to-end encrypted
   content.
2. Post status updates and share location when enabled in a chat; the privacy
   documentation distinguishes message content from account, contact, settings,
   group and technical metadata.
3. Use linked devices including web, Windows, Mac, tablets, companion phones,
   wearables, and selected Meta devices. WhatsApp documents up to four linked
   devices per primary phone.
4. Use WhatsApp on a linked computer even when the primary phone is offline,
   subject to documented reauthentication and inactivity rules.
5. Use group and business-related features. The exact availability of business
   features varies by account, region and product surface and must be checked in
   current official documentation.

## Technical boundary

The official sources verify user-visible encryption and linked-device behavior.
They do not establish WhatsApp's complete server architecture, key-management
implementation at scale, ranking, abuse systems, contact graph, or commercial
business API internals. Those details remain unknown here and must not be stated
as verified implementation facts.

## Alternative assessment

### Signal — partial secure-messaging alternative

Signal's official documentation verifies end-to-end encrypted messaging and calls,
and its support page states that client and server source code are available. It
is a strong alternative for private messaging, but it does not reproduce
WhatsApp's network or business ecosystem.

### Matrix/Element — partial federated alternative

Matrix is an open protocol for decentralized secure communication, and Element is
one client/provider in that ecosystem. It is a strong option when federation,
interoperability, or self-hosting matters, but its model differs from WhatsApp's
centralized consumer service.

### Other candidates

SimpleX, XMPP/Conversations, and Briar may fit narrower privacy, federation, or
peer-to-peer jobs. They remain candidates rather than verified drop-in
replacements for WhatsApp.

## REA/build implications

Do not attempt to reproduce WhatsApp's private service or copy its user data. For
an independent implementation, reuse Signal or Matrix where their documented
security and federation models fit. Scope any new work to a lawful messaging
workflow, with explicit threat modeling, abuse controls, identity recovery, and
data-retention decisions.

## Evidence record

| Claim | Source | What it supports |
|---|---|---|
| Personal messages and calls are end-to-end encrypted | [WhatsApp Privacy at a Glance](https://faq.whatsapp.com/236979282604093) | Encryption boundary and metadata distinction |
| Linked devices and supported surfaces | [About linked devices](https://faq.whatsapp.com/378279804439436) | Web, desktop, tablet, companion-device behavior and limits |
| Business features are a related WhatsApp surface | [About Business Features](https://faq.whatsapp.com/1623293708131281) | Business discovery and messaging context; not a complete API contract |
| Signal messaging and calls are end-to-end encrypted | [Signal: Is it private?](https://support.signal.org/hc/en-us/articles/360007320391-Is-it-private-Can-I-trust-it) | Verified alternative capability |
| Matrix is an open protocol for decentralized secure communication | [Matrix Foundation: About Matrix](https://matrix.org/foundation/about/) | Verified federated alternative capability |

## Known gaps

- WhatsApp's full consumer and business API contracts require separate, current
  developer documentation and account access; no private API assumptions are made.
- Pricing, regional feature availability, account recovery, backups, and policy
  behavior can change and need a dated, region-specific check.
- The complete server architecture and metadata lifecycle are not established by
  the public sources used here.

**Research date:** 2026-11-03.  
**Confidence:** Verified for public user-facing capabilities; partial for alternatives.
