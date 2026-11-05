---
schema_version: "1.0"
id: "amazon-connect-customer"
company_id: "amazon_aws"
name: "Amazon Connect Customer"
aliases:
  - "Amazon Connect"
  - "Connect Customer"
product_type: "business_software"
categories:
  - "contact-center"
  - "customer-service"
  - "omnichannel"
  - "agentic-ai"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/connect/"
official_docs_url: "https://docs.aws.amazon.com/connect/"
official_source_urls:
  - "https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html"
  - "https://aws.amazon.com/connect/"
  - "https://aws.amazon.com/documentation-overview/connect-customer/"
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

Amazon Connect Customer is AWS's current name for the customer-contact-center product previously called Amazon Connect. AWS describes it as an omnichannel platform for customer communication, agent routing, workflows, analytics and agentic AI. The product identity must remain distinct from the broader Amazon Connect portfolio of related solutions and APIs.

# 2. Product identity and ownership

- **Official name:** Amazon Connect Customer
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/connect/

# 3. Product capabilities

- Voice, chat, email, SMS and third-party messaging channels.
- Contact flows, queues, routing, agent and supervisor experiences.
- Customer profiles, cases, analytics, recordings and evaluations.
- Agent assist, self-service, summaries and agentic AI features.
- APIs, SDKs, console and resource-level administration.

# 4. Technical architecture

Public documentation exposes instances, contact flows, queues, agents, channels, APIs and related services such as Customer Profiles, Contact Lens, Voice ID and Amazon Q in Connect. Internal routing, speech, analytics, AI-agent orchestration and managed telephony infrastructure remain unknown.

# 5. User workflows

An organization creates a Connect Customer instance, configures channels, numbers, users, queues and flows, then routes customer interactions to human agents or automated experiences. Each channel and related service requires separate REA analysis.

# 6. Pricing and access

Pricing is pay-as-you-go and varies by channel, region, telephony, AI and related capabilities. Current rates and third-party-provider charges must be verified from the official pricing page before making cost claims.

# 7. API and integration surface

- Administrator guide: https://docs.aws.amazon.com/connect/latest/adminguide/
- API reference: https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html
- Product documentation: https://aws.amazon.com/documentation-overview/connect-customer/

# 8. Existing open-source alternatives

Potentially relevant projects include FreeSWITCH, Asterisk, Kamailio, Jitsi, Chatwoot, Rasa and EspoCRM. Their channel coverage, licenses, routing, analytics and operations must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source contact-center components can cover individual voice, messaging, CRM or chatbot functions, but no equivalence is claimed for Connect Customer's integrated telephony, routing, agent UI, managed analytics, AI features and AWS service plane.

# 10. Missing capabilities and opportunity analysis

REA should separate telephony, chat/SMS, email, contact flows, queues, workforce tools, customer profiles, cases, recordings, analytics, AI assistance and external integrations rather than treating the portfolio as one undifferentiated product.

# 11. REA implementation strategy

Use public AWS documentation, API references and permitted test accounts only. A clean-room implementation must use independent telephony, messaging and workflow components and must not copy AWS interfaces, models, prompts or proprietary assets.

# 12. Security, privacy, and compliance

Research must verify caller/customer data handling, recording retention, encryption, IAM, PII controls, cross-service permissions, agent access, regional processing and third-party telephony boundaries.

# 13. Evidence register

- https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html — official rename and product scope.
- https://aws.amazon.com/connect/ — official product overview.
- https://aws.amazon.com/documentation-overview/connect-customer/ — official capability overview.

# 14. Unknowns

- Full feature and regional availability matrix.
- Current portfolio boundaries between Connect Customer and related Connect services.
- Exact API behavior, quotas, pricing and AI-agent controls.
- Open-source coverage for the integrated customer-service experience.

# 15. Research status

`pending`: current product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
