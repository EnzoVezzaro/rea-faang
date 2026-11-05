---
schema_version: "1.0"
id: "microsoft-azure"
company_id: "microsoft"
name: "Microsoft Azure"
aliases: ["Azure", "Azure Cloud"]
product_type: "cloud_infrastructure"
categories: ["cloud", "platform"]
lifecycle_status: "active"
official_url: "https://azure.microsoft.com/en-us"
official_docs_url: "https://learn.microsoft.com/en-us/azure/"
official_source_urls: ["https://azure.microsoft.com/en-us/explore/", "https://learn.microsoft.com/en-us/azure/azure-resource-manager", "https://learn.microsoft.com/en-us/azure/architecture/", "https://learn.microsoft.com/en-us/cli/azure/"]
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://learn.microsoft.com/en-us/cli/azure/"
---
# 1. Executive summary

Microsoft Azure is Microsoft's public cloud platform for compute, storage, networking, data, AI and other managed services. It is a platform catalogue rather than one application, and is distinct from Microsoft 365 and Windows.

# 2. Product identity and ownership

**Official name:** Microsoft Azure  
**Company:** Microsoft Corporation  
**Lifecycle status:** active  
**Official website:** https://azure.microsoft.com/en-us

Microsoft describes Azure as its cloud computing platform and publishes a large service catalogue, regional infrastructure information and architecture guidance.

# 3. Product capabilities

- Compute, containers, serverless and application hosting.
- Storage, databases, networking and integration services.
- Identity, security, monitoring and governance capabilities.
- AI, analytics and developer services.
- Resource management, infrastructure as code and deployment tooling.

The exact service, region, quota, pricing and compliance surface depends on the selected Azure service, subscription, tenant and geography. This dossier treats Azure as the platform-level product; individual Azure services are not duplicated as separate catalog entries in this pass.

# 4. Technical architecture

Azure is a managed cloud platform operated by Microsoft. Azure Resource Manager is the deployment and management service and provides the control-plane model for resources, subscriptions, resource groups, providers and infrastructure as code. The implementation of Microsoft's control plane and managed services is proprietary.

# 5. User workflows

A customer creates or uses an Azure subscription, selects a region and services, provisions resources through the portal, CLI, templates or APIs, and operates them with identity, networking, monitoring and cost controls. Deployment and lifecycle behavior varies by service.

# 6. Pricing and access

Azure uses service- and consumption-dependent pricing, with additional plan, reservation, enterprise and regional factors. This research verifies the platform and access model, not current prices, quotas, discounts or entitlement for a specific subscription.

# 7. API and integration surface

The official integration surfaces include Azure Resource Manager REST APIs, Azure CLI, PowerShell, SDKs, ARM templates and Bicep. The Azure CLI is documented, but executing it requires an authenticated subscription and appropriate permissions; no live subscription access is assumed here.

# 8. Existing open-source alternatives

- OpenStack (Apache-2.0): self-hosted compute, storage and networking control plane.
- Apache CloudStack (Apache-2.0): private-cloud IaaS orchestration.
- Kubernetes (Apache-2.0): container orchestration, not a full Azure replacement.

# 9. Alternative comparison

OpenStack and CloudStack cover important IaaS control-plane functions, while Kubernetes covers a narrower application-platform layer. None is verified here as a drop-in replacement for Azure's managed-service catalogue, global operations, identity, billing and support model.

# 10. Missing capabilities and opportunity analysis

The main gap is the managed platform surface: a credible alternative needs integrated compute, data, networking, security, identity, observability, billing and operations rather than only an IaaS control plane.

# 11. REA implementation strategy

Do not attempt to reproduce Azure wholesale. Select one workload class, reuse an existing open-source control plane, define service and security boundaries, and validate deployment, operations, cost and recovery behavior with evidence.

# 12. Security, privacy, and compliance

Cloud resource access, identity, network isolation, secrets, logs, backups and data residency are workload- and service-dependent. Do not infer compliance or isolation from the platform name; verify the selected service, region, subscription and policy configuration.

# 13. Sources and evidence

- [Azure overview](https://azure.microsoft.com/en-us/explore/) — official platform overview.
- [Azure Resource Manager documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager) — official control-plane and infrastructure-as-code documentation.
- [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/) — official platform architecture guidance.
- [Azure CLI documentation](https://learn.microsoft.com/en-us/cli/azure/) — official command and integration surface.

# 14. Open questions

- Which Azure service family should be evaluated separately next?
- Which workload and region would make an honest open-source comparison meaningful?
- What recovery, cost and compliance evidence is required for the target use case?

# 15. Research history

Record updated 2026-11-03 from official Microsoft Azure and Microsoft Learn sources. Status: `researched`; service-specific pricing, quotas, subscription behavior and private implementation details remain outside this pass.
