---
schema_version: "1.0"
id: "google-calendar"
company_id: "google"
name: "Google Calendar"
aliases: ["Calendar"]
product_type: "productivity_application"
categories: ["calendar", "scheduling", "collaboration"]
lifecycle_status: "active"
official_url: "https://calendar.google.com/"
official_docs_url: "https://developers.google.com/workspace/calendar"
official_source_urls: ["https://support.google.com/calendar", "https://developers.google.com/workspace/calendar/api/guides/overview", "https://developers.google.com/workspace/calendar/api/v3/reference", "https://developers.google.com/workspace/calendar/api/auth"]
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
command_source: "https://developers.google.com/workspace/calendar/api/v3/reference"
---
# 1. Executive summary

Google Calendar is Google's hosted calendar and scheduling application. It models calendars, events, attendees, recurring events, availability, reminders and sharing, and exposes these resources through the Google Calendar API. It is a distinct application from Google Drive storage, Google Workspace as a suite and Google Meet as the conferencing surface, although those products integrate.

# 2. Product identity and ownership

- **Official name:** Google Calendar
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://calendar.google.com/
- **Identity evidence:** Google's help center and developer documentation identify calendars and events as the product's core resources.

# 3. Product capabilities

- Create and share primary or secondary calendars.
- Create, update, list, move and delete events, including all-day and recurring events.
- Invite attendees, manage responses, reminders, time zones and event visibility.
- Query free/busy availability and integrate conference data such as Google Meet links.
- Support add-ons, applications and automation through scoped OAuth access and the Calendar API.

# 4. Technical architecture

The public model consists of calendar resources containing event resources, calendar-list entries, access-control rules, settings, colors, free/busy data and notification channels. Google operates the hosted service; implementation details, storage internals and synchronization internals are proprietary.

# 5. User workflows

A user opens or creates a calendar, schedules an event with start/end times and participants, shares it or manages access, and receives updates or reminders. Recurring events, time zones, availability and conference details are handled as event/calendar metadata. Developers use the API to read or mutate those resources after authorization.

# 6. Pricing and access

Access depends on Google account type, Workspace edition, organisation policy, calendar permissions and API authorization. This pass verifies the product and public API surface, not current plan pricing, quotas or a particular account's entitlement.

# 7. API and integration surface

The Google Calendar API is a REST API with resources and methods for calendars, events, calendar lists, ACLs, free/busy, settings, colors and channels. OAuth scopes range from read-only access to calendar-wide mutation and sharing permissions; applications should request the narrowest scope required. Google Calendar also integrates with Workspace add-ons and Meet conference data.

# 8. Existing open-source alternatives

- **Nextcloud Calendar (AGPL-3.0):** self-hosted calendar and web UI built around CalDAV.
- **Radicale (GPL-3.0):** lightweight CalDAV/CardDAV server.
- **EteSync Web (AGPL-3.0):** encrypted synchronization-oriented calendar and contacts workflow.

# 9. Alternative comparison

These projects cover calendar storage, synchronization and web access. They do not provide a drop-in replacement for Google's account ecosystem, Workspace integrations, appointment-booking features, hosted scale, Google Meet linkage or Calendar API compatibility. Coverage is therefore partial.

# 10. Missing capabilities and opportunity analysis

The open-source core is mature through CalDAV, but a full replacement would need compatible event semantics, sharing and ACLs, free/busy, reminders, time zones, recurring-event behavior, add-ons, identity, audit controls and integrations with conferencing and mail.

# 11. REA implementation strategy

Target a narrow scheduling workflow first. Reuse a mature CalDAV server, define the event and permission model, add a web client and integrate only the required identity, reminders and conferencing features. Do not claim Google Calendar compatibility without testing recurring events, time zones, ACLs, free/busy and API behavior.

# 12. Security, privacy, and compliance

Calendar data can reveal locations, participants, health, travel and business activity. Verify OAuth scopes, sharing ACLs, external attendee handling, event visibility, audit retention, free/busy disclosure and organisation policy before using an alternative with sensitive schedules.

# 13. Sources and evidence

- [Google Calendar Help](https://support.google.com/calendar) — official product workflows and controls.
- [Google Calendar API overview](https://developers.google.com/workspace/calendar/api/guides/overview) — official API model and capabilities.
- [Google Calendar API reference](https://developers.google.com/workspace/calendar/api/v3/reference) — official resources and methods.
- [Calendar API authorization](https://developers.google.com/workspace/calendar/api/auth) — official OAuth scopes and access requirements.

# 14. Open questions

- Which current Workspace edition and API quota should a deployment target?
- Is CalDAV interoperability or Google Calendar API compatibility the primary requirement?
- Which sharing, audit, free/busy and conferencing behaviors require compatibility tests?

# 15. Research history

Record updated 2026-11-03 from official Google Calendar Help and Google Developers sources. Status: `researched`; account-specific entitlements, current pricing, quotas and proprietary implementation details remain outside this pass.
