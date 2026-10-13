---
schema_version: "1.0"
id: "amazon-online-retail"
company_id: "amazon"
name: "Amazon Online Retail"
aliases: []
product_type: "consumer_application"
categories:
  - "ecommerce"
official_url: "https://www.amazon.com/"
official_docs_url: null
official_source_urls: []
lifecycle_status: "active"
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

Amazon Online Retail is the world's largest e-commerce marketplace, offering hundreds of millions of products across categories including electronics, books, clothing, home goods, groceries, and more. It operates as both a first-party retailer (Amazon Retail) and a third-party marketplace (Marketplace), with fulfillment options including Fulfillment by Amazon (FBA), Seller Fulfilled Prime, and direct shipping.

# 2. Product identity and ownership

- **Official name:** Amazon.com / Amazon Online Retail
- **Company and business unit:** Amazon.com Inc. (Stores division)
- **Parent organization:** Amazon.com Inc.
- **Original launch date:** 1995 (books), expanded to everything store
- **Current lifecycle status:** active
- **Previous names:** Cadabra (original incorporation name)
- **Acquisitions or ownership changes:** Acquired Zappos (2009), Whole Foods (2017), PillPack (2018), iRobot (2022, pending/abandoned)
- **Related products:** Amazon Prime, AWS, Amazon Advertising, Amazon Logistics, Amazon Fresh, Amazon Pharmacy, Amazon Business
- **Official website:** https://www.amazon.com/
- **Official documentation:** https://sellercentral.amazon.com/ (sellers), https://affiliate-program.amazon.com/ (associates)

# 3. Product capabilities

- **Product catalog:** 350M+ products, ASIN-based identification, variation relationships
- **Search and discovery:** A9 algorithm, autocomplete, filters, browse nodes, sponsored products
- **Product detail pages:** Images, videos, 3D views, specifications, Q&A, reviews, ratings
- **Reviews and ratings:** Verified purchase badges, Vine program, review helpfulness voting
- **Cart and checkout:** 1-Click ordering, saved addresses/payment, gift options, Amazon Pay
- **Fulfillment:** FBA (storage, pick/pack/ship, customer service, returns), MCF (multi-channel), Seller Fulfilled Prime
- **Shipping:** Prime free 1-2 day, Same-Day, Amazon Day, Lockers, Counter, Key (in-garage/in-home)
- **Returns:** Online return center, drop-off (Kohl's, UPS, Whole Foods), QR code returns, refund before return
- **Subscriptions:** Subscribe & Save (recurring deliveries, discounts)
- **Marketplace:** Third-party sellers (professional/individual), Buy Box algorithm, Brand Registry
- **Amazon Business:** B2B purchasing, quantity discounts, tax exemption, analytics
- **International:** 20+ marketplaces, currency conversion, cross-border fulfillment
- **Advertising:** Sponsored Products, Brands, Display, DSP, video ads
- **Alexa shopping:** Voice ordering, reordering, deal notifications
- **AR View / Room Decorator:** Augmented reality product visualization

# 4. Technical architecture

- **Microservices:** Service-oriented architecture, thousands of services
- **Catalog:** Distributed catalog service, ASIN as primary key, eventual consistency
- **Search:** A9 (proprietary), inverted indexes, ranking models, real-time indexing
- **Recommendations:** Item-to-item collaborative filtering, real-time personalization
- **Fulfillment:** Warehouse management (WMS), transportation management (TMS), robotics (Kiva), optimization algorithms
- **Payments:** Internal payment processing, fraud detection, multi-currency
- **Infrastructure:** AWS (EC2, S3, DynamoDB, Aurora, Lambda, etc.), custom hardware (Inferentia, Trainium)
- **Mobile/Web:** React Native (app), progressive web app, native iOS/Android

# 5. User workflows

Shoppers: search/browse → product detail → add to cart → checkout → track delivery → review. Sellers: register → list products (manual/feed/API) → manage inventory → fulfill orders (FBA/self) → handle returns → advertise → analyze performance. Prime members: free shipping, Prime Video, Prime Music, exclusive deals.

# 6. Pricing and access

Free to browse and buy. Prime: $139/year or $14.99/month (US). Sellers: Individual ($0.99/item) or Professional ($39.99/mo) + referral fees (8-45% by category) + FBA fees (storage, fulfillment, removal). Advertising: CPC/CPM bidding.

# 7. API and integration surface

- **SP-API (Selling Partner API):** REST/JSON, OAuth, catalog, orders, fulfillment, reports, finances, notifications
- **Product Advertising API (PA-API):** Affiliate product data, search, browse
- **Amazon Business API:** B2B purchasing integration
- **Marketplace Web Service (MWS):** Legacy, being deprecated
- **Amazon Pay API:** Checkout on third-party sites
- **Alexa Shopping Kit:** Voice commerce skills

# 8. Existing open-source alternatives

- **Magento / Adobe Commerce:** Self-hosted PHP, extensive extensions, B2B/B2C
- **WooCommerce:** WordPress plugin, largest market share, PHP
- **Shopify (SaaS):** Not open-source, but dominant alternative
- **OpenCart:** PHP, lightweight, extension marketplace
- **PrestaShop:** PHP, European focus, modular
- **Sylius:** PHP/Symfony, headless-ready, developer-focused
- **Saleor:** Python/Django/GraphQL, headless, modern stack
- **Medusa:** Node.js/TypeScript, headless, composable
- **Odoo:** Python, ERP + e-commerce, modular
- **Spree / Solidus:** Ruby on Rails, API-first
- **No open-source alternative replicates Amazon's marketplace scale, fulfillment network, or recommendation engine**

# 9. Alternative comparison

Magento, WooCommerce, and Shopify dominate merchant-facing e-commerce. For marketplace model (multi-vendor), extensions exist (Magento Marketplace, WCFM for WooCommerce, Sharetribe) but lack Amazon's integrated fulfillment (FBA), Prime logistics, and trust infrastructure. Saleor and Medusa are modern headless alternatives for custom builds.

# 10. Missing capabilities and opportunity analysis

Integrated fulfillment network (FBA), Prime logistics (1-2 day at scale), trusted marketplace with A-to-Z Guarantee, proprietary recommendation engine, and massive product catalog are the main gaps. An open alternative could focus on a federated marketplace protocol (ActivityPub for commerce) with standardized fulfillment APIs.

# 11. RAE implementation strategy

Not feasible to replicate Amazon's scale. Strategy: Build on Saleor or Medusa for headless commerce core. Add marketplace extensions (multi-vendor, commission handling). Integrate with open fulfillment APIs (Shippo, EasyPost) for shipping. Explore federated commerce protocols (OASIS, ActivityPub extensions). Focus on merchant-owned, interoperable commerce.

# 12. Security, privacy, and compliance

PCI DSS for payments, GDPR/CCPA for personal data, SOX for financials, sales tax nexus compliance. Marketplace adds seller verification, product compliance (CPSC, FDA), counterfeit prevention (Transparency, Project Zero). Open alternative must support PCI, GDPR, tax calculation (Avalara/TaxJar), and seller onboarding/KYC.

# 13. Sources and evidence

- https://www.amazon.com/ (retail site)
- https://sellercentral.amazon.com/ (seller docs)
- https://developer-docs.amazon.com/sp-api/ (SP-API docs)
- https://www.shopify.com/ (alternative)
- https://saleor.io/ (alternative)

# 14. Open questions

- Can a federated marketplace protocol achieve critical mass?
- What is the minimum viable fulfillment network for competitive shipping?
- How to handle trust/reputation without a central authority?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Saleor + Medusa are the best modern open-source bases for merchant stores. For marketplace, Sharetribe (open core) or custom extensions on Saleor. The fulfillment/logistics gap requires carrier integration, not replication.

---

# 17. RAE implementation strategy (continued)

Phase 1: Saleor/Medusa core with multi-vendor extension. Phase 2: Fulfillment API integrations (Shippo, carrier APIs). Phase 3: Search/recommendation (Meilisearch + custom models). Phase 4: Federated identity/payments (OIDC, Interledger). Phase 5: Seller tools (analytics, advertising).