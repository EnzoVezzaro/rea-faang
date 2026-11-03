---
schema_version: "1.0"
id: "aws-cloud-map"
company_id: "amazon_aws"
name: "AWS Cloud Map"
aliases: ["Cloud Map", "AWS Cloud Map service discovery"]
product_type: "networking"
categories: ["service-discovery", "dns", "registry", "health-checks", "networking", "microservices"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/cloud-map/"
official_docs_url: "https://docs.aws.amazon.com/cloud-map/"
official_source_urls:
  - "https://aws.amazon.com/cloud-map/"
  - "https://docs.aws.amazon.com/cloud-map/"
  - "https://docs.aws.amazon.com/cloud-map/latest/api/"
  - "https://docs.aws.amazon.com/cli/latest/reference/servicediscovery/"
  - "https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: null
research_version: 1
---

# AWS Cloud Map

## Scope and lifecycle

AWS Cloud Map is a managed service-discovery registry for naming and discovering AWS and application resources through DNS or API calls. It provides namespaces, services, registered instances, health checks, custom attributes, IAM integration and cross-account namespace sharing.

## Official surfaces

- Product: https://aws.amazon.com/cloud-map/
- Documentation: https://docs.aws.amazon.com/cloud-map/
- API reference: https://docs.aws.amazon.com/cloud-map/latest/api/
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/servicediscovery/
- Service management: https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html

## Capability map

- Create public, private DNS and HTTP namespaces.
- Register and deregister resource instances with attributes.
- Create services and discover instances through DNS or API calls.
- Configure health checks and routing policies.
- Integrate with ECS, Route 53, IAM and shared namespaces.

## API and discovery leads

The service-discovery API includes namespaces, services, instances, operations, health checks, custom attributes and discovery queries. Exact DNS registration, API filtering, health state transitions, cross-account sharing, throttling and regional behavior require controlled evidence.

## Open-source alternative

Netflix Eureka is recorded as a partial alternative: https://github.com/Netflix/eureka. It provides open service registration and discovery, but not Cloud Map's Route 53 DNS integration, AWS resource adapters, namespaces, IAM, health-check semantics or managed regional control plane.

## REA/build guidance

Use the official Cloud Map documentation and API reference as primary inputs for Reverse Engineer Anything. An independent implementation should separate registry state, namespace governance, DNS and API discovery, health evaluation, resource adapters and authorization. Do not conflate service discovery with service mesh routing or network connectivity.

## Unknowns and evidence gaps

- DNS and API discovery consistency and propagation need controlled tests.
- Health-check and deregistration timing varies by integration and requires fixtures.
- Cross-account namespace sharing and IAM conditions need organization-level evidence.
- Quotas, regional support and Route 53 integration behavior must be verified before compatibility claims.
