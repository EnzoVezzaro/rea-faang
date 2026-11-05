---
schema_version: "1.0"
id: "amazon-ses"
company_id: "amazon_aws"
name: "Amazon Simple Email Service"
aliases: ["Amazon SES", "SES"]
product_type: "business_software"
categories: ["email", "transactional-email", "smtp", "messaging", "deliverability"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/ses/"
official_docs_url: "https://docs.aws.amazon.com/ses/"
official_source_urls:
  - "https://aws.amazon.com/ses/"
  - "https://aws.amazon.com/ses/getting-started/"
  - "https://docs.aws.amazon.com/ses/"
  - "https://docs.aws.amazon.com/ses/latest/APIReference/"
  - "https://docs.aws.amazon.com/ses/latest/APIReference-V2/"
  - "https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html"
  - "https://docs.aws.amazon.com/ses/latest/dg/configure-identities.html"
  - "https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html"
  - "https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-deliverability.html"
  - "https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_EventDestination.html"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
---

# 1. Executive summary

Amazon Simple Email Service is AWS's managed email-delivery service for transactional and marketing email. AWS documents SMTP and API sending, verified identities, DKIM and SPF, templates, configuration sets, event publishing, bounce and complaint handling and inbound email workflows. Postal is recorded as a partial self-hosted alternative, not an equivalent managed deliverability service.

# 2. Product identity and ownership

- **Official name:** Amazon Simple Email Service
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Transactional, marketing and application email delivery

# 3. Product capabilities

- Send email through SMTP, SDKs, APIs, console and CLI.
- Verify email addresses and domains before sending.
- Configure DKIM, SPF, custom MAIL FROM and reputation controls.
- Use templates, configuration sets, event destinations, bounces and complaints.
- Receive email or route inbound messages through supported AWS integrations.

# 4. Technical architecture

The public model includes identities, sending authorization, SMTP or API submission, templates, configuration sets, event destinations, quotas, suppression and inbound receipt rules. Exact reputation, queueing, filtering, retry, delivery, feedback and regional behavior remain pending REA verification.

# 5. User workflows

Typical workflows include verifying an identity, authenticating the domain, requesting production access, sending a message, observing delivery or bounce events, handling complaints, managing suppression, configuring templates and routing inbound mail. A complete study must test invalid identities, MIME limits, rate quotas, retries, event ordering, unsubscribe behavior and inbound rules.

# 6. Pricing and access

Access requires an AWS account, verified identities, IAM permissions and regional configuration. Pricing, free-tier eligibility, sending quotas, recipient limits, attachment sizes and inbound costs must be verified before implementation. SES documents account-specific daily quotas and maximum send rates.

# 7. API and integration surface

Public surfaces include console, SMTP interface, AWS CLI, SDKs, API v1, SES v2, templates, identities, configuration sets, event destinations, suppression lists and receipt rules. Exact schemas, authentication, errors, retries, idempotency, events and region behavior require command-level testing.

# 8. Existing open-source alternatives

Postal is an MIT-licensed self-hosted mail delivery platform for incoming and outgoing email, with SMTP, tracking and webhooks. It is a useful foundation for an independent email service, but does not reproduce SES's managed reputation, identity, AWS IAM, API, quota, compliance or regional service plane.

# 9. Alternative comparison

Compare SMTP and HTTP APIs, identity verification, DKIM/SPF, templates, queues, rate limits, bounce and complaint events, suppression, inbound routing, tracking, deliverability, abuse prevention, reputation, multi-tenancy and operational scaling. Postal covers the mail-server base; SES-specific managed capabilities are separate.

# 10. Missing capabilities and opportunity analysis

Research must map identity states, production-access gates, SMTP and API request contracts, MIME limits, quota behavior, queue and retry semantics, events, suppression, inbound receipt, templates, tracking, reputation, abuse handling and regional differences.

# 11. REA implementation strategy

Use official AWS documentation, API references and authorized test identities only. Capture verification, sending, event, bounce, complaint, suppression and inbound cases without using personal or customer data. Use Postal only after recording the partial-foundation verdict, and implement independent delivery infrastructure with original code, compliant domains and explicit abuse controls.

# 12. Security, privacy, and compliance

Verify IAM scope, identity ownership, DKIM/SPF/DMARC, TLS, message and recipient privacy, logging, retention, unsubscribe and suppression behavior, inbound attachment handling, abuse prevention and data residency. Never place credentials or real recipient data in the dossier or tests.

# 13. Sources and evidence

- **Product and API scope:** [SES documentation](https://docs.aws.amazon.com/ses/) and [API v2 reference](https://docs.aws.amazon.com/ses/latest/APIReference-V2/) document sending, API and CLI surfaces.
- **Identity and authentication:** [verified identities](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html) and [identity configuration](https://docs.aws.amazon.com/ses/latest/dg/configure-identities.html) support domain/email verification and SPF/DKIM claims.
- **Delivery events:** [event notifications](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html), [deliverability](https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-deliverability.html) and [EventDestination](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_EventDestination.html) support bounce, complaint, delivery, suppression and event-destination claims.
- **Alternative:** [Postal](https://github.com/postalserver/postal) is the recorded MIT-licensed self-hosted mail platform; its coverage remains partial.

# 14. Unknowns

- Complete SMTP, API v1/v2, inbound, event and template matrix.
- Exact queue, retry, reputation, quota and regional semantics.
- Current pricing, free tier, production-access and deliverability rules.
- Verified parity and operating requirements for a self-hosted equivalent.

# 15. Research status

 Researched with verified public AWS sources. Product identity, SMTP/API sending, identity verification, authentication, event destinations, bounces, complaints and suppression are documented. Exact reputation, queueing, regional limits, pricing and deliverability behavior remain unknown and are not asserted.
