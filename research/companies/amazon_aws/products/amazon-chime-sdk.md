---
schema_version: "1.0"
id: "amazon-chime-sdk"
company_id: "amazon_aws"
name: "Amazon Chime SDK"
aliases:
  - "Chime SDK"
product_type: "sdk"
categories:
  - "real-time-communications"
  - "audio-video"
  - "messaging"
  - "screen-sharing"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/chime/chime-sdk/"
official_docs_url: "https://docs.aws.amazon.com/chime-sdk/"
official_source_urls:
  - "https://docs.aws.amazon.com/chime-sdk/latest/dg/"
  - "https://docs.aws.amazon.com/chime-sdk/latest/APIReference/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon Chime SDK is a set of AWS components for embedding real-time audio, video, messaging and screen sharing in web and mobile applications. It is distinct from the discontinued Amazon Chime application.

# 2. Product identity and ownership

- **Official name:** Amazon Chime SDK
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/chime/chime-sdk/

# 3. Product capabilities

AWS documents real-time media, messaging, screen sharing, media pipelines, speech enhancement, PSTN audio and client SDKs for JavaScript, iOS, Android and C++.

# 4. Technical architecture

Pending REA investigation. Public documentation exposes client SDKs, server-side meeting/resource management, APIs, IAM roles and service-specific components; internal media infrastructure remains unknown.

# 5. User workflows

Pending REA investigation. The documented architecture uses a server application to create meeting and attendee resources, then client SDKs connect participants for media and messaging.

# 6. Pricing and access

Pending verification. The SDK uses pay-for-use pricing; modality, PSTN, media-pipeline and region-specific costs require current review.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/chime-sdk/
- API reference: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/
- Official client repositories include JavaScript, iOS, Android and C++ SDKs.

# 8. Existing open-source alternatives

Pending. Evaluate WebRTC, Jitsi, LiveKit, mediasoup and Matrix by modality, server requirements, signaling, SFU/MCU behavior, licensing and operations.

# 9. Alternative comparison

Pending evidence-backed comparison. AWS-managed media services, integrations and billing are not assumed to be covered by an open-source candidate.

# 10. Missing capabilities and opportunity analysis

Pending REA investigation. Any independent implementation must scope signaling, media routing, TURN/STUN, recording, messaging, identity and observability separately.

# 11. RAE implementation strategy

Use the RAE skill on public documentation and permitted SDK surfaces. Prefer an existing open protocol or media foundation only after verifying license, security, scale and feature fit.

# 12. Security, privacy, and compliance

Pending verification. Research IAM, meeting authorization, media encryption, recording retention, participant privacy and PSTN data handling.

# 13. Evidence register

- https://docs.aws.amazon.com/chime-sdk/latest/dg/ — official SDK scope and developer guide.
- https://docs.aws.amazon.com/chime-sdk/latest/APIReference/ — official API surface.
- https://aws.amazon.com/chime/chime-sdk/faq/ — official distinction from the retired Chime application and client SDK coverage.

# 14. Unknowns

- Media topology, quality adaptation and failure recovery.
- Exact modality and region availability.
- API version compatibility and client behavior.
- Pricing and quotas for meetings, messaging, media pipelines and voice.

# 15. Research status

`pending`: identity and separation from retired Chime are verified; REA capture, alternatives research and acceptance review remain outstanding.
