---
schema_version: "1.0"
id: "meta-pay"
company_id: "meta"
name: "Meta Pay"
aliases:
  - "Facebook Pay"
product_type: "consumer_application"
categories:
  - "payments"
  - "checkout"
  - "money-transfer"
official_url: "https://www.meta.com/meta-pay/"
official_docs_url: "https://pay.facebook.com/"
official_source_urls:
  - "https://www.meta.com/technologies/"
  - "https://www.meta.com/meta-pay/"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 1
evidence:
  - id: "ev-meta-pay-identity"
    url: "https://www.meta.com/technologies/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Platforms and Technologies"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Meta lists Meta Pay as a distinct service in its technology portfolio."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "Meta's official technologies page lists Meta Pay under Services."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-meta-pay-surface"
    url: "https://www.meta.com/meta-pay/"
    source_type: "official_website"
    publisher: "Meta"
    title: "Meta Pay"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Meta Pay provides payment, checkout, payment-management and money-transfer workflows across participating Meta surfaces."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Meta's official product page documents saved payment and shipping details, checkout, payment history, anti-fraud monitoring, encryption, PIN protection, donations and sending money, with country and use-case limits."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Meta Pay is Meta's payment and checkout service. Meta lists it separately under Services and its official product page documents saved payment details, checkout, payment management, fraud monitoring, encryption, donations and money transfer, with explicit country and use-case limits. No account or transaction was accessed.

# 2. Product identity and ownership

- **Canonical name:** Meta Pay
- **Stable catalog ID:** `meta-pay`
- **Company:** Meta
- **Product type:** consumer payment application
- **Official product URL:** https://www.meta.com/meta-pay/
- **Payment help:** https://pay.facebook.com/
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-meta-pay-identity`, `ev-meta-pay-surface`

Meta Pay is kept separate from Facebook, Instagram, Messenger, Meta Account and participating merchant surfaces. Its integrations do not turn those apps into one product record.

# 3. Verified public capabilities

1. Meta lists Meta Pay as a separate service.
2. The public product page documents checkout using saved payment, shipping and contact information.
3. The page documents payment-method management, transaction history, anti-fraud monitoring, encrypted card storage, PIN/device protections, donations and selected money transfers.

# 4. Technical architecture

The public evidence supports the payment-service boundary and stated controls. Internal payment rails, processor relationships, risk models, account graph, tokenization, settlement and ledger implementation are not inferred.

# 5. User workflows

The verified public scope includes checkout, managing payment methods and history, donations and selected peer-to-peer transfers. Availability varies by country, app, merchant, account and use case.

# 6. Pricing and access

Meta Pay is presented as a payment service rather than a standalone paid subscription. Payment methods, fees, transfer eligibility, country availability and merchant participation require current account-specific verification.

# 7. API and integration surface

The public page does not establish a general unrestricted Meta Pay API. Merchant and developer integrations must use current official Meta documentation and authorized payment contracts; do not infer an API from the consumer page.

# 8. Open-source alternatives

- **Medusa:** open-source commerce platform with payment-provider integrations.
- **Saleor:** open-source headless commerce platform with checkout and payment integration surfaces.
- **Open Payment Network:** open standards and tooling for interoperable payment experiments.

# 9. Alternative comparison

Alternative coverage is **partial**. Medusa and Saleor provide commerce/checkout foundations, but none is verified here as a replacement for Meta Pay's payment instruments, Meta account integration, fraud systems, regional rails or merchant network.

# 10. Missing capabilities and opportunity analysis

An independent implementation needs an authorized processor, tokenization, ledger, fraud controls, disputes, compliance, refunds, identity and country-specific operations. Reproducing Meta's payment network is out of scope.

# 11. REA implementation strategy

Use public Meta Pay documentation only to define user-visible requirements. Build against an authorized payment provider and independent data model; never handle real money or payment credentials without explicit authorization and compliance controls.

# 12. Security and compliance

Payment credentials and transaction data are highly sensitive. Any implementation must define PCI scope, encryption, tokenization, least privilege, fraud monitoring, audit logs, dispute/refund flows, privacy, retention and regional compliance. No compliance or security parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-meta-pay-identity` | https://www.meta.com/technologies/ | Official service catalog and identity |
| `ev-meta-pay-surface` | https://www.meta.com/meta-pay/ | Public payment, checkout, security and availability claims |
| REA capture | `catalog/rea/meta/meta-pay.md` | Dated public web-surface observation |

# 14. Open questions and exclusions

- Payment methods, countries, transfer rails and merchant availability require current verification.
- No private account, transaction, customer-support or payment-processor workflow was inspected.
- Any implementation must use an authorized processor and complete its compliance review.

# 15. Research history

- **2026-11-03:** reviewed Meta's official technology catalog and Meta Pay product page; promoted the candidate after verifying distinct service identity and product-level payment evidence.
- **Next review:** 2027-02-03, or sooner if Meta changes availability, payment surfaces or regional policies materially.
