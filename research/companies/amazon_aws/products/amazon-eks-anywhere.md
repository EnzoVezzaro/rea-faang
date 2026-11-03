---
schema_version: "1.0"
id: "amazon-eks-anywhere"
company_id: "amazon_aws"
name: "Amazon EKS Anywhere"
aliases:
  - "EKS Anywhere"
  - "Amazon Elastic Kubernetes Service Anywhere"
product_type: "container_orchestration"
categories:
  - "kubernetes"
  - "containers"
  - "hybrid-cloud"
  - "on-premises"
  - "edge"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/eks/eks-anywhere/"
official_docs_url: "https://aws.amazon.com/documentation-overview/eks-anywhere/"
official_source_urls:
  - "https://docs.aws.amazon.com/eks/latest/userguide/eks-deployment-options.html"
  - "https://aws.amazon.com/eks/eks-anywhere/"
  - "https://aws.amazon.com/eks/eks-anywhere/pricing/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon EKS Anywhere is AWS's Kubernetes distribution and lifecycle tooling for customer-managed clusters on premises or at the edge. AWS describes support for VMware vSphere, bare metal, Nutanix, Apache CloudStack and AWS Snow, with optional AWS integrations and enterprise subscriptions.

# 2. Product identity and ownership

- **Official name:** Amazon EKS Anywhere
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/eks/eks-anywhere/

# 3. Product capabilities

- Create and operate Kubernetes clusters on customer infrastructure.
- Cluster API-based machine and cluster lifecycle management.
- Support for multiple infrastructure providers and air-gapped environments.
- EKS Distro-based Kubernetes components and optional AWS visibility.
- Enterprise subscriptions, curated packages and extended support options.

# 4. Technical architecture

Public documentation exposes Cluster API, infrastructure providers, EKS Distro, customer-managed control planes and cluster lifecycle tooling. Internal release engineering, package curation, support controls, provider implementations and AWS integration behavior remain unknown.

# 5. User workflows

Users install the tooling, select an infrastructure provider, create a cluster specification, provision control-plane and worker machines, operate upgrades and backups, and optionally connect cluster visibility or subscriptions to AWS. Air-gapped and connected workflows differ materially.

# 6. Pricing and access

Core EKS Anywhere is available as open-source software. Enterprise subscriptions provide support, curated packages and extended Kubernetes support at documented per-cluster prices; current terms and prerequisites require official verification.

# 7. API and integration surface

- Deployment options: https://docs.aws.amazon.com/eks/latest/userguide/eks-deployment-options.html
- Documentation overview: https://aws.amazon.com/documentation-overview/eks-anywhere/
- CLI entry point: `eksctl anywhere`.
- Public surfaces include cluster manifests, `eksctl-anywhere`, Cluster API, infrastructure providers and optional AWS integrations.

# 8. Existing open-source alternatives

Potentially relevant projects include upstream Kubernetes with Cluster API, Talos, Rancher RKE2, MicroK8s and OpenShift OKD. Their provider support, lifecycle automation, air-gap behavior, licensing and AWS integration must be verified before assigning alternatives.

# 9. Alternative comparison

Open Kubernetes distributions and Cluster API stacks can cover core cluster operations, but no equivalence is claimed for EKS Distro patching, curated packages, provider support, AWS visibility or enterprise subscription services.

# 10. Missing capabilities and opportunity analysis

REA should map cluster creation, provider abstractions, upgrades, backups, air-gap packaging, networking, identity, observability, curated packages, console visibility and enterprise support separately.

# 11. RAE implementation strategy

Use public AWS documentation and the public open-source distribution only. A clean-room equivalent should use upstream Kubernetes/Cluster API and independently licensed components, documenting provider and support differences without copying AWS packaging or proprietary services.

# 12. Security, privacy, and compliance

Research must verify cluster-admin permissions, bootstrap secrets, air-gapped artifact provenance, image signing, encryption, etcd backups, network isolation, provider credentials and AWS telemetry boundaries.

# 13. Evidence register

- https://docs.aws.amazon.com/eks/latest/userguide/eks-deployment-options.html — official deployment model and responsibility split.
- https://aws.amazon.com/eks/eks-anywhere/ — official product scope.
- https://aws.amazon.com/eks/eks-anywhere/pricing/ — official open-source/subscription and pricing context.

# 14. Unknowns

- Complete provider, Kubernetes-version and Region matrix.
- Upgrade, backup, restore and air-gap failure behavior.
- Exact curated-package, support and console-integration boundaries.
- Alternative coverage for managed lifecycle operations.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
