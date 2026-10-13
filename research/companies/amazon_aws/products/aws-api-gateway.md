---
schema_version: "1.0"
id: "aws-api-gateway"
company_id: "amazon_aws"
name: "API Gateway"
aliases: []
product_type: "api"
categories:
  - "api"
official_url: "https://aws.amazon.com/api-gateway/"
official_docs_url: "https://docs.aws.amazon.com/apigateway/"
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing APIs at any scale. It acts as a "front door" for applications to access data, business logic, or functionality from backend services.

# 2. Product identity and ownership

- **Official name:** API Gateway
- **Company and business unit:** Amazon Web Services
- **Parent organization:** Amazon.com Inc. (via amazon_aws)
- **Original launch date:** 2011 (as part of AWS)
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; AWS-native service
- **Related products:** Lambda, Lambda Proxy, HTTP API, REST API, WebSocket API, Cognito, IAM, VPC Link, CloudWatch, WAF, Private API Gateway
- **Official website:** https://aws.amazon.com/api-gateway/
- **Official documentation:** https://docs.aws.amazon.com/apigateway/

# 3. Product capabilities

- REST API creation and management
- WebSocket API for real-time bidirectional communication
- API request and response transformation (templates)
- Validation (request validation, JSON schema)
- API keys and usage plans (throttling, quotas)
- Authorizers (Cognito, Lambda authorizer, IAM)
- CORS configuration
- Regional and edge-optimized endpoints
- CloudWatch metrics and logging
- WAF integration for request filtering
- Private API Gateway (VPC-only)
- Deployments and stages (live, preview, testing)
- Stage variables and deployment settings
- SDK generation for client languages
- mTLS support for mutual TLS authentication

# 4. Technical architecture

API Gateway architecture:

- Edge-optimized, regional, and private endpoints
- Request validation and transformation at the edge
- Integration with backend via HTTP, AWS, or HTTP proxy
- Regional HTTP API (lower cost, simpler features) vs. REST API (full features)
- Usage plan and throttling at the API level
- Cognito authorizer for user pool authentication
- Lambda authorizer for custom authorizer logic

Full internal architecture is proprietary; API specifications and integration patterns are documented.

# 5. User workflows

Primary workflows: API creation, method configuration, authorization setup, deployment, and testing. Essential: create API, add method, deploy stage. Advanced: authorizer configuration, usage plan setup, WAF integration, SDK generation.

# 6. Pricing and access

- REST API: $3.50 per million requests + data transfer fees
- WebSocket API: $1.00 per million messages + 1 MB connection time
- Regional HTTP API: $1.00 per million requests + data transfer fees
- Free tier: 1 million REST API requests free per month (first year)
- Prorated pricing for partial months

# 7. API and integration surface

- REST API (CreateApi, UpdateApi, DeleteApi, etc.)
- AWS CLI (apigateway commands)
- SDKs (Python, Node.js, Java, Go, .NET, Ruby, PHP, Rust, etc.)
- OpenAPI import/export
- Swagger import/export
- Client SDK generation

# 8. Existing open-source alternatives

- Kong API Gateway (open source and Kong Cloud)
- Ambassador API Gateway (open source)
- Traefik (HTTP reverse proxy)
- Envoy API Gateway
- AWS ALB/NLB (Layer 7 load balancing, not full API Gateway feature set)
- No open-source replica provides the full managed API Gateway feature set (usage plans, authorizers, SDK generation, WAF integration, stage management).

# 9. Alternative comparison

Kong and Ambassador provide the closest open-source API gateway features. They differ in management model, pricing, and cloud integration. No open-source service replicates API Gateway's full feature set including usage plans, authorizers, and SDK generation.

# 10. Missing capabilities and opportunity analysis

Usage plans, authorizer patterns (Cognito, Lambda), SDK generation, and WAF integration represent gaps. Kong and Ambassador cover request routing, basic auth, and transformation but not the full managed service experience.

# 11. RAE implementation strategy

Not recommended to build a managed API gateway from scratch. Consider contributing to or extending Kong for self-hostable API gateway functionality. Focus on API lifecycle patterns rather than service replication.

# 12. Security, privacy, and compliance

IAM, authorizers, API keys, usage plans, WAF integration, mTLS. API Gateway satisfies SOC, ISO, FedRAMP, and other compliance certifications.

# 13. Sources and evidence

- https://aws.amazon.com/api-gateway/ (product page)
- https://docs.aws.amazon.com/apigateway/ (documentation)
- https://github.com/Kong/kong (open-source reference)

# 14. Open questions

- What is the usage plan throttling comparison between Kong and API Gateway?
- How do authorizer patterns (Cognito vs. Lambda) compare in flexibility?
- What is the SDK generation workflow difference between managed and self-hosted gateways?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Kong and Ambassador provide the closest open-source API gateway features, but lack usage plans, SDK generation, and full WAF integration.

---

# 17. RAE implementation strategy (continued)

Focus on self-hostable API gateway (Kong) for function routing and transformation. Managed service replication is out of scope.