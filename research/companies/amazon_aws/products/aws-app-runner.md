---
schema_version: "1.0"
id: "aws-app-runner"
company_id: "amazon_aws"
name: "AWS App Runner"
aliases: ["App Runner", "AWS App Runner service"]
product_type: "cloud_infrastructure"
categories: ["application-platform", "containers", "paas", "deployment", "web-applications", "restricted-onboarding"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/apprunner/"
official_docs_url: "https://docs.aws.amazon.com/apprunner/"
official_source_urls:
  - "https://aws.amazon.com/apprunner/"
  - "https://docs.aws.amazon.com/apprunner/"
  - "https://docs.aws.amazon.com/apprunner/latest/api/"
  - "https://docs.aws.amazon.com/cli/latest/reference/apprunner/"
  - "https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html"
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

# AWS App Runner

## Scope and lifecycle

AWS App Runner is a managed application platform that deploys source code or container images as scalable web services. It provides managed builds, deployments, load balancing, encryption, scaling and integrations with AWS networking and CloudWatch.

AWS closed App Runner to new customers on March 31, 2026. Existing customers can continue using the service, while AWS recommends Amazon ECS Express Mode for new migrations. This dossier covers the documented surface for compatibility and migration research; it does not imply that new customers can onboard.

## Official surfaces

- Product: https://aws.amazon.com/apprunner/
- Documentation: https://docs.aws.amazon.com/apprunner/
- API reference: https://docs.aws.amazon.com/apprunner/latest/api/
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/apprunner/
- Availability change and migration context: https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html

## Capability map

- Deploy from a source repository or container image.
- Build and release application versions through managed workflows.
- Configure services, instances, health checks, environment variables, secrets, networking and scaling.
- Expose secure service endpoints with managed load balancing and TLS.
- Integrate with VPC resources and CloudWatch logs and metrics.
- Manage the service through the console, API, SDKs and AWS CLI.

## CLI and API leads

The documented control plane includes service lifecycle operations, deployments, connections, auto-scaling configuration, observability configuration, tagging and deletion. Exact request schemas, IAM behavior, runtime restrictions, deployment state transitions, throttling, rollback semantics and existing-customer constraints require targeted evidence before claiming compatibility.

## Open-source alternative

Coolify is recorded as a partial alternative: https://github.com/coollabsio/coolify. It provides a self-hostable PaaS for deploying repositories and container images, but it does not reproduce App Runner's AWS control plane, IAM, VPC behavior, CloudWatch integration, regional semantics or managed operational guarantees.

## REA/build guidance

Use the official sources above as the primary input for a Reverse Engineer Anything analysis. Keep existing-customer behavior, new-customer restrictions and AWS's ECS Express Mode migration path explicit. A resulting implementation should be an independent deployment platform with documented deviations, not a claim of AWS-managed parity or access to restricted App Runner onboarding.

## Unknowns and evidence gaps

- Existing-customer-only behavior and account eligibility need runtime or official account evidence.
- Managed runtime versions and end-of-support dates vary by runtime and require version-specific verification.
- Exact deployment, rollback, scaling and networking semantics need a controlled test account or authoritative fixtures.
- No new App Runner-compatible service should be recommended without comparing ECS Express Mode and current AWS guidance.
