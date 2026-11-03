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
official_source_urls: ["https://azure.microsoft.com/en-us", "https://learn.microsoft.com/en-us/azure/"]
research_status: "pending"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: null
research_version: 1
inventory_status: "verified"
command_status: "documented"
command_source: "https://learn.microsoft.com/en-us/cli/azure/"
---
# 1. Executive summary

Azure is Microsoft's public cloud: compute, storage, networking, data and AI services delivered from Microsoft-operated regions under published service levels.


# 2. Product identity and ownership

**Official name:** Microsoft Azure
**Company:** Microsoft Corporation
**Lifecycle status:** active
**Official website:** https://azure.microsoft.com/en-us

# 3. Product capabilities

- Compute (virtual machines, containers, serverless)
- Storage, networking and managed databases
- Identity and access management with Entra ID
- Infrastructure-as-code and deployment APIs

# 4. Technical architecture

Azure is a proprietary platform operated by Microsoft across published regions. Documented APIs, CLIs and service limits are the observable surface; the control plane implementation is not public.

# 5. User workflows

Teams create a subscription, deploy resources with the portal, CLI or templates, attach identity and networking, and operate the workload with monitoring and cost controls.

# 6. Pricing and access

Consumption pricing per service plus reserved and enterprise agreements; the catalog does not record current prices.

# 7. API and integration surface

Official surface: the Azure CLI, documented at https://learn.microsoft.com/en-us/cli/azure/, alongside ARM/Bicep templates and service REST APIs. Command status: documented, source is the official CLI reference.

# 8. Existing open-source alternatives

OpenStack (Apache-2.0) and Apache CloudStack (Apache-2.0) provide self-hosted IaaS control planes for compute, storage and networking.

# 9. Alternative comparison

OpenStack covers the IaaS layer with a large integration ecosystem; CloudStack targets simpler private clouds. Neither reproduces the managed-service catalogue or the regional operating model.

# 10. Missing capabilities and opportunity analysis

A credible open alternative is a composed private cloud: OpenStack for IaaS plus open managed services (for example PostgreSQL, Kubernetes, object storage) with documented limits.

# 11. RAE implementation strategy

Reuse OpenStack rather than building a control plane; the build is the integration, the service catalogue and the operational documentation.

# 12. Security, privacy, and compliance

Tenant isolation, audit logging and key management are mandatory; a self-hosted stack must document its threat model and patch process.

# 13. Sources and evidence

- https://azure.microsoft.com/en-us
- https://learn.microsoft.com/en-us/azure/

# 14. Open questions

- Which managed services are required for a small private cloud to be useful?
- What does an honest regional-footprint claim look like for a self-hosted stack?

# 15. Research history

Record created 2026-11-03 from public official sources during the FAANG+Microsoft inventory expansion. Status: `pending`; nothing beyond official documentation and public announcements is asserted.
