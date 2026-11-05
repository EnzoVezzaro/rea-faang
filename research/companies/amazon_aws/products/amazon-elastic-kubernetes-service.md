---
schema_version: "1.0"
id: "amazon-elastic-kubernetes-service"
company_id: "amazon_aws"
name: "Amazon Elastic Kubernetes Service"
aliases:
  - "Amazon EKS"
  - "EKS"
product_type: "container_orchestration"
categories:
  - "kubernetes"
  - "containers"
  - "managed-service"
  - "cloud-native"
  - "orchestration"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/eks/"
official_docs_url: "https://docs.aws.amazon.com/eks/"
official_source_urls:
  - "https://aws.amazon.com/eks/"
  - "https://docs.aws.amazon.com/eks/"
  - "https://docs.aws.amazon.com/eks/latest/userguide/"
  - "https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"
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

Amazon Elastic Kubernetes Service (Amazon EKS) is AWS's managed Kubernetes service. AWS manages the Kubernetes control plane for standard EKS and offers EKS Auto Mode, while customers choose and operate application workloads and, depending on the mode, node or compute resources. EKS integrates Kubernetes with AWS identity, networking, storage and observability services.

# 2. Product identity and ownership

- **Official name:** Amazon Elastic Kubernetes Service
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/eks/

# 3. Product capabilities

- Create and operate Kubernetes clusters with a managed control plane.
- Use standard EKS or EKS Auto Mode for different management boundaries.
- Run workloads on EC2, Fargate and supported hybrid or external models.
- Use IAM and Kubernetes authorization together for users and workloads.
- Integrate with EBS, EFS, ECR, VPC, load balancing, CloudWatch and other AWS services.
- Manage clusters through the console, API/SDKs, AWS CLI, `eksctl`, CDK, CloudFormation and Terraform.

# 4. Technical architecture

The public surface includes the Kubernetes API server and control plane, nodes, networking, IAM authentication and authorization, add-ons, storage CSI drivers, load balancers, observability and EKS Capabilities. EKS Distro and EKS Anywhere are cataloged separately because their source and management boundaries differ. Internal control-plane operation and failure semantics require REA verification.

# 5. User workflows

Users create a cluster, configure identity and networking, add or select compute, install add-ons, deploy Kubernetes workloads, expose services, observe them, upgrade versions and manage access. EKS Auto Mode changes which infrastructure operations AWS performs; that distinction must remain explicit in any implementation.

# 6. Pricing and access

EKS has cluster and feature pricing plus separate charges for compute, storage, networking, public IPv4, data transfer and related services. Current pricing, version-support charges and free-tier applicability require verification from official pricing pages before planning spend.

# 7. API and integration surface

- User guide, API and CLI references: https://docs.aws.amazon.com/eks/
- Getting started guides: https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html
- Management surfaces include AWS Console, EKS API/SDKs, AWS CLI, `eksctl`, CDK, CloudFormation and Terraform.
- Exact Kubernetes-version, add-on, access, event, quota and upgrade behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include upstream Kubernetes, Rancher/RKE2, Talos, OpenShift OKD, MicroK8s and k3s. No equivalence is claimed; control-plane management, upgrades, security, networking, storage, support and AWS integration must be compared independently.

# 9. Alternative comparison

Open-source Kubernetes distributions can run clusters, but none is treated as a drop-in equivalent to EKS's managed control plane, AWS IAM integration, Auto Mode, add-ons, regional services and operational guarantees without evidence.

# 10. Missing capabilities and opportunity analysis

REA should map cluster creation, control-plane boundaries, node lifecycle, Auto Mode, IAM/Kubernetes access, networking, add-ons, storage, ingress, observability, upgrades, version support, quotas, events, failure recovery and the distinctions among EKS, EKS Distro and EKS Anywhere.

# 11. REA implementation strategy

Use AWS product, user-guide, API, CLI and best-practices documentation plus public Kubernetes behavior as research surfaces. A clean-room equivalent should use independently licensed Kubernetes components and reproduce only independently observable behavior, documenting differences in managed operations, identity, networking and cloud integration.

# 12. Security, privacy, and compliance

Research must verify IAM and Kubernetes authorization, control-plane and node isolation, secrets, network policies, encryption, audit logging, add-on privileges, image provenance, cluster endpoint exposure, tenant boundaries and data-residency implications.

# 13. Evidence register

- https://aws.amazon.com/eks/ — official product scope.
- https://docs.aws.amazon.com/eks/ — official user guide, API and CLI references.
- https://docs.aws.amazon.com/eks/latest/userguide/ — official feature and operations documentation.
- https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html — official creation workflows.

# 14. Unknowns

- Complete standard-versus-Auto-Mode responsibility matrix.
- Exact control-plane, node, add-on and upgrade failure behavior.
- Version lifecycle, quotas, pricing and regional availability matrix.
- IAM/Kubernetes authorization edge cases and managed add-on boundaries.
- Verified open-source alternatives for the complete EKS workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
