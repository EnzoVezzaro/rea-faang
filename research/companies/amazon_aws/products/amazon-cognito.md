---
schema_version: "1.0"
id: "amazon-cognito"
company_id: "amazon_aws"
name: "Amazon Cognito"
aliases:
  - "Cognito"
  - "Cognito User Pools"
  - "Cognito Identity Pools"
  - "Cognito Sync"
product_type: "security"
categories:
  - "identity"
  - "authentication"
  - "authorization"
  - "federation"
  - "developer-tool"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/cognito/"
official_docs_url: "https://docs.aws.amazon.com/cognito/"
official_source_urls:
  - "https://docs.aws.amazon.com/cognito/"
  - "https://aws.amazon.com/cognito/"
  - "https://aws.amazon.com/cognito/dev-resources/"
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

Amazon Cognito is an AWS identity platform for web and mobile applications. Its current documentation separates user pools, which provide user directories and authentication, from identity pools, which exchange identities for temporary AWS credentials. Cognito Sync is separately documented and is no longer available to new customers.

# 2. Product identity and ownership

- **Official name:** Amazon Cognito
- **Company:** Amazon Web Services
- **Lifecycle:** Active product family; Cognito Sync has a separate availability restriction.
- **Product page:** https://aws.amazon.com/cognito/

# 3. Product capabilities

- User directories, sign-up, sign-in and token issuance.
- OIDC, SAML and social identity federation.
- MFA, passwordless authentication and WebAuthn passkeys.
- Identity pools and temporary, limited-privilege AWS credentials.
- Managed login, SDK, API and AWS CLI integration.

# 4. Technical architecture

Public documentation exposes user pools, identity pools, hosted/managed login, federation, JWTs, role-based AWS access and STS credential exchange. Internal identity storage, risk controls, service scaling and proprietary managed-login implementation remain unknown.

# 5. User workflows

Typical flows include registering or federating a user through a user pool, issuing JWTs to an application, and optionally exchanging an authenticated or unauthenticated identity through an identity pool for temporary AWS credentials. These flows must be modeled separately from Cognito Sync data synchronization.

# 6. Pricing and access

Pricing is usage-based and varies by user-pool tier, monthly active users, messaging and related services. AWS documents free-tier conditions, but current eligibility and SMS/other service charges require account-specific verification.

# 7. API and integration surface

- Documentation: https://docs.aws.amazon.com/cognito/
- Developer guide and API references cover user pools and identity pools separately.
- Public surfaces include console, AWS SDKs, REST APIs, AWS CLI and hosted/managed login.

# 8. Existing open-source alternatives

Potentially relevant projects include Keycloak, Ory and Authentik. Their protocols, licenses, deployment models and coverage of AWS credential federation must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source identity servers can cover user directories, OIDC, SAML and MFA, but they do not automatically reproduce Cognito's managed AWS integration, STS credential exchange, regional service plane, hosted login or operational model.

# 10. Missing capabilities and opportunity analysis

REA should separate user-pool authentication, identity-pool federation, managed login, passkeys/MFA, AWS role exchange, triggers, synchronization and administrative APIs. Cognito Sync must remain a distinct lifecycle entry if analyzed.

# 11. REA implementation strategy

Use public protocols, documentation and permitted test applications only. A clean-room equivalent should use standard OIDC/SAML/WebAuthn components and explicit least-privilege credential exchange; it must not copy AWS implementation, tokens or proprietary assets.

# 12. Security, privacy, and compliance

Research must verify token validation, key rotation, federation claims, MFA recovery, session handling, unauthenticated identities, IAM role mapping, data residency and auditability. Never grant broad AWS permissions to unauthenticated identities.

# 13. Evidence register

- https://docs.aws.amazon.com/cognito/ — official component and API documentation.
- https://aws.amazon.com/cognito/ — official product scope and current identity features.
- https://aws.amazon.com/cognito/dev-resources/ — official Cognito Sync availability notice and resources.

# 14. Unknowns

- Full regional, tier and feature matrix.
- Current managed-login and passkey behavior across client types.
- Exact trigger, quota, pricing and token-claim behavior.
- Compatibility and operational gaps for open-source alternatives.

# 15. Research status

`pending`: product identity and component boundaries are established; complete REA capture, alternative verification and acceptance review remain outstanding.
