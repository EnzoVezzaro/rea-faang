---
schema_version: "1.0"
id: "google-meet"
company_id: "google"
name: "Google Meet"
aliases: ["Meet"]
product_type: "consumer_application"
categories: ["video-conferencing", "collaboration"]
lifecycle_status: "active"
official_url: "https://meet.google.com/"
official_docs_url: "https://developers.google.com/workspace/meet"
official_source_urls: ["https://developers.google.com/workspace/meet/overview", "https://developers.google.com/workspace/meet/api/guides/overview", "https://support.google.com/meet/answer/9308681"]
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://developers.google.com/workspace/meet/api/guides/overview"
---
# 1. Executive summary

Google Meet is Google's hosted video-conferencing service for creating and joining online meetings. It integrates with Google Workspace and Calendar, but has its own meeting spaces, participant model and Meet APIs.

# 2. Product identity and ownership

**Official name:** Google Meet  
**Company:** Google LLC, part of Alphabet Inc.  
**Lifecycle status:** active  
**Official website:** https://meet.google.com/

Google's developer documentation identifies Meet as a service with add-ons, a REST API and meeting-space resources.

# 3. Product capabilities

- Create and join browser-based video meetings.
- Participant sessions, meeting spaces, calls and collaboration workflows.
- Calendar and Workspace integration.
- Plan- and policy-dependent recording, transcripts, captions, screen sharing and meeting controls.
- Meet add-ons and REST API integrations for meeting spaces, participants and artifacts.

Meet is separate from Workspace because Workspace is the suite and Meet is the conferencing service. It is also separate from Calendar, which schedules events but does not provide the meeting service itself.

# 4. Technical architecture

Meet is a managed cloud conferencing service with meeting spaces, conferences, participant sessions and artifacts. Public documentation exposes REST resources and add-on integration; the media and conferencing implementation is proprietary.

# 5. User workflows

A user creates or joins a meeting from Meet, Calendar or another Workspace surface, collaborates with participants, and may use plan-dependent recording or transcription. Applications can create meeting spaces, retrieve conference information, list participants and fetch artifacts through the API.

# 6. Pricing and access

Feature availability depends on account type, Workspace edition, organisation policy and meeting configuration. Recording and other advanced features require eligible plans or permissions. This research verifies the product and documented controls, not current prices or a specific account's entitlements.

# 7. API and integration surface

The Meet REST API can create and manage meeting spaces, retrieve conferences and participants, and retrieve artifacts such as recordings and transcripts. The Meet add-ons SDK embeds applications into meetings. Authentication, scopes and meeting permissions are required for real operations.

# 8. Existing open-source alternatives

- Jitsi (Apache-2.0): self-hosted audio/video conferencing and screen sharing.
- BigBlueButton (LGPL-3.0): open-source virtual classroom and conferencing platform.
- Element Call / Matrix (AGPL-3.0): federated communication and calling components.

# 9. Alternative comparison

These projects cover core video meetings to different degrees. None is verified here as a drop-in replacement for Meet's Google identity, Calendar and Workspace integration, meeting artifacts, administration and API surface.

# 10. Missing capabilities and opportunity analysis

The integration gap combines conferencing, identity, scheduling, participant management, recordings, transcripts, compliance controls and developer APIs under one managed service.

# 11. REA implementation strategy

Reuse an existing conferencing platform and integrate it with a defined identity and calendar workflow. Test participant roles, recording ownership, retention, accessibility and API evidence before claiming parity.

# 12. Security, privacy, and compliance

Meet calls, recordings, transcripts and participant data are sensitive. Verify consent, recording permissions, retention, access to Drive artifacts, domain policies and API scopes; do not infer feature availability from a meeting URL alone.

# 13. Sources and evidence

- [Meet SDK and API overview](https://developers.google.com/workspace/meet/overview) — official integration surface.
- [Meet REST API overview](https://developers.google.com/workspace/meet/api/guides/overview) — official meeting spaces, participants and artifacts.
- [Record a video meeting](https://support.google.com/meet/answer/9308681) — official recording requirements and behavior.

# 14. Open questions

- Which account type and plan should a future meeting comparison cover?
- Which workflow matters most: meetings, classrooms, recordings or API automation?
- What consent, retention and audit requirements must an alternative satisfy?

# 15. Research history

Record updated 2026-11-03 from official Google Meet Help and Google Developers sources. Status: `researched`; plan-specific access, quotas, media internals and authenticated behavior remain outside this pass.
