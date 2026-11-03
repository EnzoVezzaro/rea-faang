---
schema_version: "1.0"
id: "amazon-pinpoint"
company_id: "amazon_aws"
name: "Amazon Pinpoint"
aliases: ["Pinpoint"]
product_type: "business_software"
categories: ["customer-engagement", "messaging", "campaigns", "analytics", "mobile-push"]
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/pinpoint/"
official_docs_url: "https://docs.aws.amazon.com/pinpoint/"
official_source_urls:
  - "https://aws.amazon.com/pinpoint/"
  - "https://aws.amazon.com/pinpoint/faqs/"
  - "https://docs.aws.amazon.com/pinpoint/"
  - "https://docs.aws.amazon.com/pinpoint/latest/userguide/migrate.html"
  - "https://docs.aws.amazon.com/pinpoint/latest/apireference/"
research_status: "retired"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: "2027-10-30T00:00:00Z"
research_version: 1
---

# 1. Executive summary

Amazon Pinpoint was AWS's customer-engagement service for endpoint management, segmentation, campaigns, journeys, analytics and multi-channel messaging. AWS states that support ended on October 30, 2026. Messaging APIs for SMS, voice, mobile push, OTP and phone-number validation continue under AWS End User Messaging, but that does not make the historical Pinpoint engagement plane active.

# 2. Product identity and ownership

- **Official name:** Amazon Pinpoint
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued; support ended October 30, 2026
- **Historical scope:** Customer engagement, campaigns, journeys, analytics and messaging channels

# 3. Product capabilities

- Manage endpoints, users, segments and application projects.
- Create campaigns and journeys with scheduled or event-driven messaging.
- Send email, SMS, voice, push and custom-channel messages.
- Ingest mobile and endpoint events and view engagement analytics.
- Integrate through REST APIs, SDKs, CLI and console workflows.

# 4. Technical architecture

Historical public surfaces included projects, endpoints, segments, campaigns, journeys, event ingestion, analytics, channel APIs, IAM, KMS, CloudWatch and regional resources. AWS's migration guidance separates the messaging channel APIs from the retired engagement resources; exact historical state transitions and data export behavior remain unverified.

# 5. User workflows

Historical workflows included creating a project, registering endpoints, importing or defining segments, configuring channels, creating campaigns or journeys, sending messages, collecting events and reviewing analytics. Current operational replay is unavailable after shutdown; migration and export semantics require historical documentation or authorized artifacts.

# 6. Pricing and access

Current Pinpoint console and engagement resources are unavailable after the AWS end-of-support date. Historical pricing, regional behavior, account entitlements and migration costs are not treated as current deployment guidance.

# 7. API and integration surface

Historical surfaces included Pinpoint REST APIs, SDKs, AWS CLI, console, event ingestion, campaign/journey APIs, endpoint and segment APIs, and separate SMS/voice API surfaces. AWS states that messaging APIs for SMS, voice, mobile push, OTP and phone validation continue under AWS End User Messaging.

# 8. Existing open-source alternatives

No open-source equivalent is verified in this entry. Customer-engagement platforms, messaging providers and campaign tools may cover subsets, but segmentation, journeys, analytics, delivery channels, privacy and AWS-specific operations are not assumed equivalent.

# 9. Alternative comparison

Any historical replacement analysis must separate engagement orchestration from message transport. Evaluate endpoint identity, consent, segmentation, campaign scheduling, journey state, templates, delivery events, analytics, retries, opt-outs, suppression and data export independently.

# 10. Missing capabilities and opportunity analysis

Research should map project and endpoint state, segment evaluation, campaign/journey transitions, channel configuration, event schemas, delivery status, analytics aggregation, throttling, opt-outs, suppression, exports and migration to AWS End User Messaging or other systems.

# 11. RAE implementation strategy

Use AWS's end-of-support and migration documentation as the lifecycle boundary. Preserve the entry for historical reverse engineering only. Do not build or publish a new product under the Pinpoint name; any independent implementation must use original code, current providers and an explicitly scoped engagement workflow.

# 12. Security, privacy, and compliance

Historical research should examine endpoint PII, consent and opt-out handling, IAM, KMS, encryption, regional processing, event retention, audit logs, suppression lists and cross-account access. No current compliance posture is claimed.

# 13. Evidence register

- https://aws.amazon.com/pinpoint/ — official product context and shutdown notice.
- https://aws.amazon.com/pinpoint/faqs/ — end-of-support and unaffected messaging API details.
- https://docs.aws.amazon.com/pinpoint/ — official documentation and historical capability summary.
- https://docs.aws.amazon.com/pinpoint/latest/userguide/migrate.html — migration and end-of-support guidance.
- https://docs.aws.amazon.com/pinpoint/latest/apireference/ — historical REST API reference.

# 14. Unknowns

- Complete historical API, CLI and SDK behavior.
- Exact campaign/journey state, event and analytics semantics.
- Export, migration, retention and regional shutdown behavior.
- Verified open-source replacement for the full engagement plane.

# 15. Research status

`retired`: product identity, historical scope and AWS end-of-support status are documented from first-party sources. Full REA capture and detailed behavioral reconstruction remain unavailable because the service is no longer operational.
