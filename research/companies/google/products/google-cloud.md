---
schema_version: "1.0"
id: "google-cloud"
company_id: "google"
name: "Google Cloud"
aliases: ["Google Cloud Platform", "GCP"]
product_type: "cloud_infrastructure"
categories: ["cloud_infrastructure", "platform"]
lifecycle_status: "active"
official_url: "https://cloud.google.com/"
official_docs_url: "https://cloud.google.com/docs"
official_source_urls: ["https://cloud.google.com/products", "https://docs.cloud.google.com/docs/overview", "https://docs.cloud.google.com/sdk/docs/authenticate"]
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://docs.cloud.google.com/sdk/docs/authenticate"
---
# 1. Executive summary

Google Cloud is Google's public cloud platform for compute, storage, networking, data, AI/ML, developer tools and managed services. It is a platform catalogue rather than one application and is distinct from Google Workspace and individual Google Cloud services.

# 2. Product identity and ownership

**Official name:** Google Cloud  
**Company:** Google LLC, part of Alphabet Inc.  
**Lifecycle status:** active  
**Official website:** https://cloud.google.com/

Google's official product catalogue presents more than one hundred Google Cloud products across infrastructure, AI/ML, databases, analytics, developer tools, security, identity and application hosting.

# 3. Product capabilities

- Compute, containers, serverless hosting and networking.
- Object storage, databases, analytics and data pipelines.
- AI/ML platforms, models, GPUs/TPUs and developer tooling.
- Identity, security, monitoring, governance and cost-management services.
- Infrastructure management through projects, resources, APIs and the Google Cloud CLI.

The exact service, quota, region, pricing and compliance surface depends on the selected product and project. This dossier treats Google Cloud as the platform-level product; individual services are not duplicated as separate entries here.

# 4. Technical architecture

Google Cloud is a managed cloud platform operated by Google. Its public documentation describes projects, resources, service APIs, IAM, regions and the control surfaces available through the console, APIs, SDKs and CLI. Internal infrastructure and managed-service implementations are proprietary.

# 5. User workflows

A customer creates or selects a project, enables services, assigns IAM permissions, provisions resources through the console, APIs, Terraform or `gcloud`, and operates workloads with monitoring, logging, security and cost controls.

# 6. Pricing and access

Google Cloud uses service- and usage-dependent pricing with product, region, resource, commitment and account factors. This research verifies the platform and authentication model, not current prices, quotas, credits or entitlement for a particular project.

# 7. API and integration surface

Google Cloud exposes documented service APIs, client libraries, Terraform integrations and the Google Cloud CLI. The official authentication documentation states that CLI commands must authenticate before accessing Google Cloud APIs; no authenticated project access is assumed here.

# 8. Existing open-source alternatives

- OpenStack (Apache-2.0): self-hosted compute, storage and networking control plane.
- Apache CloudStack (Apache-2.0): private-cloud IaaS orchestration.
- Kubernetes (Apache-2.0): container orchestration and application platform.
- OpenNebula (Apache-2.0): private-cloud management.

# 9. Alternative comparison

These projects cover parts of Google Cloud. None is verified here as a drop-in replacement for its managed-service catalogue, global operations, identity, billing, support and integrated AI/data platform.

# 10. Missing capabilities and opportunity analysis

The main gap is the integrated managed-service platform: a credible alternative must combine compute, data, AI, networking, identity, observability, billing and operations rather than only provide an IaaS control plane.

# 11. REA implementation strategy

Do not attempt to rebuild Google Cloud wholesale. Select one workload class, reuse an existing open-source component, define security and service boundaries, and validate deployment, operations, cost and recovery behavior with evidence.

# 12. Security, privacy, and compliance

IAM, project isolation, network controls, secrets, logs, backups and data residency depend on the selected service and configuration. Do not infer compliance or isolation from the platform name; verify the project, service, region and policy settings.

# 13. Sources and evidence

- [Google Cloud products and services](https://cloud.google.com/products) — official product catalogue.
- [Google Cloud overview](https://docs.cloud.google.com/docs/overview) — official platform overview.
- [Authenticate for the gcloud CLI](https://docs.cloud.google.com/sdk/docs/authenticate) — official authentication and CLI documentation.

# 14. Open questions

- Which Google Cloud service family should be evaluated separately next?
- Which workload and region would make an honest open-source comparison meaningful?
- What recovery, cost and compliance evidence is required for the target use case?

# 15. Research history

Record updated 2026-11-03 from official Google Cloud and Google Cloud Documentation sources. Status: `researched`; service-specific pricing, quotas, regions, compliance and private implementation details remain outside this pass.
