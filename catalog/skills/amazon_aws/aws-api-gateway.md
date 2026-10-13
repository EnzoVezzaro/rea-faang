---
name: aws-api-gateway
description: Use when researching, comparing, or building a free and open-source replacement for API Gateway (Amazon Web Services). Open-source status is available — see Apache APISIX, Kong Gateway, Tyk, and more.
---

# API Gateway (`aws-api-gateway`)

| | |
|---|---|
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `api` |
| **Categories** | `api` |
| **Official URL** | https://aws.amazon.com/api-gateway/ |
| **Open-source status** | **available** |

## What it is

AWS API Gateway is a managed front door for APIs: routing, auth, throttling, caching, and request/response transformation.

## Core capabilities

- Routing, rate limiting and quotas
- Auth (IAM, JWT, API keys, mTLS)
- Request/response transformation, caching, observability

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Apache APISIX](https://apisix.apache.org/) | Apache-2.0 | High-performance API gateway with plugins. | Full-featured. |
| [Kong Gateway](https://konghq.com/) | Apache-2.0 | Popular gateway with a plugin ecosystem. | Open-core. |
| [Tyk](https://tyk.io/) | MPL-2.0 | Open-source API gateway and management. | Open-core. |
| [KrakenD](https://www.krakend.io/) | Apache-2.0 | Stateless API gateway/aggregator. | Config-driven. |
| [Traefik / Gravitee](https://traefik.io/) | MIT / Apache-2.0 | Edge router and API management options. | Cloud-native routers. |

## Gap

AWS’s deep IAM/Lambda integration and fully managed nature are the remaining differences.

## Verdict

Available. A crowded field of mature open gateways exists.

## Sources

- https://www.moesif.com/blog/api-engineering/api-gateways/Open-Source-API-Gateway-Roundup/
- https://api7.ai/learning-center/api-gateway-guide/api-gateway-comparison-apisix-kong-traefik-krakend-tyk
- https://nordicapis.com/6-open-source-api-gateways/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`aws-api-gateway`)
- Research dossier: [`research/companies/amazon_aws/products/aws-api-gateway.md`](../../../research/companies/amazon_aws/products/aws-api-gateway.md)
- REA web-surface report: [`catalog/rea/amazon_aws/aws-api-gateway.md`](../../rea/amazon_aws/aws-api-gateway.md)
