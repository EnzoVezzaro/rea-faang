---
schema_version: "1.0"
id: "aws-app-mesh"
company_id: "amazon_aws"
name: "AWS App Mesh"
aliases: ["App Mesh", "AWS App Mesh service mesh"]
product_type: "cloud_infrastructure"
categories: ["service-mesh", "microservices", "envoy", "networking", "observability", "discontinued"]
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/app-mesh/"
official_docs_url: "https://docs.aws.amazon.com/app-mesh/"
official_source_urls:
  - "https://aws.amazon.com/app-mesh/"
  - "https://docs.aws.amazon.com/app-mesh/latest/userguide/"
  - "https://docs.aws.amazon.com/app-mesh/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/appmesh/"
  - "https://aws.amazon.com/blogs/containers/migrate-amazon-ecs-workloads-from-aws-app-mesh-to-amazon-vpc-lattice/"
research_status: "retired"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: null
research_version: 1
---

# 1. Executive summary

AWS App Mesh was an Envoy-based managed service mesh for microservices running on ECS, EKS, Kubernetes and EC2. AWS discontinued support on September 30, 2026; new customers had already been unable to onboard since September 24, 2024. AWS documents migration paths including Amazon VPC Lattice and ECS Service Connect. Istio is recorded as a partial open-source foundation for historical capability analysis.

# 2. Product identity and ownership

- **Official name:** AWS App Mesh
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued on 2026-09-30
- **Primary scope:** Managed Envoy service mesh for microservices

# 3. Product capabilities

- Define meshes, virtual nodes, virtual routers, routes and virtual services.
- Control service-to-service traffic with retries, timeouts, circuit breakers and traffic shifting.
- Integrate Envoy proxies with ECS, EKS, Kubernetes and EC2 workloads.
- Configure TLS/mTLS, tracing, metrics and telemetry integrations.
- Use AWS APIs, CLI and CloudFormation for mesh administration.

# 4. Technical architecture

The public model included a managed control plane, Envoy sidecars, meshes, virtual nodes, routers, routes, services, backend discovery, listeners, health checks, TLS policies and observability integrations. Historical resource state, proxy versions, control-plane propagation, quotas, IAM and migration semantics remain pending deeper REA validation.

# 5. User workflows

Historical workflows included creating a mesh, defining virtual services and nodes, injecting Envoy proxies, configuring routes and backends, enabling TLS and tracing, shifting traffic and observing proxy behavior. A complete study must test route precedence, retries, timeouts, circuit breakers, unhealthy backends, mTLS, proxy updates, scaling, deletion dependencies and migration to successor services.

# 6. Pricing and access

The service is discontinued and should not be selected for new work. Historical access required AWS accounts, IAM, supported regions and workload integration. Any migration study must verify successor pricing, quotas, compatibility and operational requirements. No credentials or private service topology belong in this dossier.

# 7. API and integration surface

Historical public surfaces included the AWS console, App Mesh API, AWS CLI, SDKs and CloudFormation, with operations for meshes, virtual nodes, routers, routes, services, tags and deletion. Exact schemas, errors, retries, proxy configuration and historical state behavior require evidence from archived or authorized environments.

# 8. Existing open-source alternatives

Istio is an Apache-2.0 open-source service mesh with Envoy data plane, traffic management, security, telemetry and Kubernetes integration. It covers major mesh capabilities but not App Mesh's AWS control plane, IAM, ECS/EC2 integration, quotas, regional service behavior or historical managed semantics.

# 9. Alternative comparison

Compare mesh resources, Envoy configuration, traffic routing, retries, timeouts, circuit breaking, mTLS, identity, telemetry, workload integration, control-plane state, quotas, upgrade behavior and migration. Istio is a practical capability reference; it is not a drop-in replacement for AWS-managed resource APIs.

# 10. Missing capabilities and opportunity analysis

Research must preserve the historical API and resource matrix while prioritizing migration documentation. Map successor behavior in VPC Lattice and ECS Service Connect, including service discovery, routing, identity, observability, limits and workload changes. Any new implementation must use original code and isolated synthetic services.

# 11. RAE implementation strategy

Use the official API, user guide, CLI references and AWS migration notices as primary sources. The generated RAE skill should instruct an agent to reproduce historical App Mesh behavior only for migration or compatibility research, using Istio concepts where useful, and to prefer AWS successor paths for new systems. Do not claim current service availability or recommend a new App Mesh implementation.

# 12. Security, privacy, and compliance

Verify historical IAM scope, mTLS, certificate handling, proxy security, workload isolation, telemetry privacy, audit, data residency and migration controls. Use synthetic services and public fixtures only. Never store credentials, private topology or personal data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/app-mesh/ — official product context.
- https://docs.aws.amazon.com/app-mesh/latest/userguide/ — historical concepts and workflows.
- https://docs.aws.amazon.com/app-mesh/latest/APIReference/ — API surface.
- https://docs.aws.amazon.com/cli/latest/reference/appmesh/ — CLI surface.
- https://aws.amazon.com/blogs/containers/migrate-amazon-ecs-workloads-from-aws-app-mesh-to-amazon-vpc-lattice/ — discontinuation and migration context.
- https://github.com/istio/istio — open-source service-mesh alternative.

# 14. Unknowns

- Complete historical resource, proxy, route and policy matrix.
- Exact end-of-support, data-access and migration behavior after 2026-09-30.
- Compatibility boundaries with VPC Lattice and ECS Service Connect.
- Historical quotas, regional, IAM, telemetry and upgrade semantics.
- Verified parity requirements for migration or compatibility tooling.

# 15. Research status

Retired. Product identity, official sources, historical command surface, discontinuation notice and a partial open-source foundation are documented; no new implementation or equivalence claim is recommended.
