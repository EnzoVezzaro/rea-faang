---
schema_version: "1.0"
id: "amazon-eks"
company_id: "amazon_aws"
name: "Amazon EKS"
aliases: []
product_type: "container_orchestration"
categories:
  - "container_orchestration"
official_url: "https://aws.amazon.com/eks/"
official_docs_url: "https://docs.aws.amazon.com/eks/"
official_source_urls: []
lifecycle_status: "active"
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

Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service that runs the Kubernetes control plane across multiple Availability Zones. It provides a certified Kubernetes conformant environment with AWS integrations (IAM, VPC, ALB, CloudWatch, ECR, Fargate). EKS supports managed node groups, self-managed nodes, Fargate, and EKS Anywhere for on-premises.

# 2. Product identity and ownership

- **Official name:** Amazon Elastic Kubernetes Service (EKS)
- **Company and business unit:** Amazon Web Services (Containers)
- **Parent organization:** Amazon.com Inc. (via amazon_aws)
- **Original launch date:** 2018
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; AWS-native service built on upstream Kubernetes
- **Related products:** ECS, ECR, Fargate, App Mesh, Cloud Map, EKS Anywhere, EKS Distro, Karpenter, Bottlerocket, GuardDuty, Security Hub
- **Official website:** https://aws.amazon.com/eks/
- **Official documentation:** https://docs.aws.amazon.com/eks/

# 3. Product capabilities

- **Control plane:** Managed, multi-AZ, Kubernetes API server, etcd, controller manager, scheduler; AWS manages upgrades, patching, scaling
- **Kubernetes versions:** Standard upstream versions, ~14 month support, extended support (26 months) for additional cost
- **Compute options:**
  - **Managed node groups:** EC2 Auto Scaling Groups, managed lifecycle, labels/taints, launch templates
  - **Self-managed nodes:** Customer EC2 instances, custom AMIs (Bottlerocket, Ubuntu, Amazon Linux), Cluster API
  - **Fargate:** Serverless pods, per-pod billing, no node management, namespace/profile selectors
  - **EKS Anywhere:** On-premises/edge, VMware vSphere, bare metal, Snow, Cluster API provider
- **Networking:** Amazon VPC CNI (native VPC networking, ENI per pod), Calico/Cilium (policy), IPv6, custom CNI
- **Load balancing:** AWS Load Balancer Controller (ALB/NLB), Service type LoadBalancer, Ingress, Service type NodePort
- **Storage:** EBS CSI driver, EFS CSI driver, FSx for Lustre/NetApp ONTAP, local PV
- **Identity:** IAM Roles for Service Accounts (IRSA), OIDC provider, AWS Auth ConfigMap, Pod Identity Agent (newer)
- **Add-ons:** Managed add-ons (VPC CNI, CoreDNS, kube-proxy, EBS CSI, Snapshot Controller, etc.), Marketplace add-ons
- **Autoscaling:** Cluster Autoscaler, Karpenter (open-source, AWS-backed), Horizontal/Vertical Pod Autoscaler
- **Observability:** CloudWatch Container Insights, Prometheus (AMP), Grafana (AMG), Fluent Bit, ADOT, X-Ray
- **Security:** IRSA, Secrets Manager CSI, KMS envelope encryption, GuardDuty EKS Protection, Security Hub, Network Policies, Admission controllers
- **Upgrades:** In-place cluster upgrade, managed node group rolling update, Pod Disruption Budgets respected
- **EKS Distro:** Upstream Kubernetes + patches, used by EKS Anywhere, open-source
- **Bottlerocket:** Linux-based container host OS, minimal attack surface, atomic updates
- **Karpenter:** Open-source node provisioning, just-in-time, consolidation, spot/on-demand

# 4. Technical architecture

- **Control plane:** AWS-managed, runs in AWS-managed VPC (not customer VPC), cross-account ENIs for API server access
- **Data plane:** Customer VPC, worker nodes (EC2/Fargate), pods get VPC IPs via CNI
- **Authentication:** AWS IAM → Kubernetes RBAC via aws-auth ConfigMap or EKS Access Entries (newer)
- **Networking:** VPC CNI allocates secondary ENI IPs to pods; branch ENIs for density; prefix delegation for scale
- **Fargate:** Dedicated kernel per pod (Firecracker microVM), no shared nodes
- **EKS Anywhere:** Cluster API (CAPI) controllers on management cluster, workload clusters on vSphere/bare metal
- **No direct etcd/kubelet access; control plane logs via CloudWatch**

# 5. User workflows

Create cluster: `eksctl create cluster` or Console/CloudFormation/CDK/Terraform → Configure kubectl (aws eks update-kubeconfig) → Deploy workloads (kubectl/Helm/Flux/ArgoCD) → Add managed node groups or Fargate profiles → Configure add-ons (VPC CNI, EBS CSI, LB Controller) → Set up IRSA for pod AWS access → Monitor (Container Insights, AMP/AMG) → Upgrade (control plane + nodes). CI/CD: CodePipeline, GitHub Actions, GitLab, ArgoCD, Flux.

# 6. Pricing and access

- **Control plane:** $0.10/hour per cluster (~$73/month), no charge for EKS Anywhere control plane
- **Compute:** EC2 (On-Demand, Reserved, Spot, Savings Plans) + Fargate (per vCPU/GB-second) + EKS Anywhere (no AWS compute charge)
- **Add-ons:** Most managed add-ons free; some Marketplace add-ons paid
- **Extended support:** $0.06/hour per cluster per version beyond standard support
- **Data transfer:** Standard AWS rates
- **Free tier:** None for EKS control plane; EC2/Fargate free tiers apply

# 7. API and integration surface

- **EKS API:** REST/HTTP (CreateCluster, UpdateClusterVersion, CreateNodegroup, etc.)
- **Kubernetes API:** Standard kubectl, client-go, controller-runtime, CRDs
- **AWS SDKs/CLI:** All languages, `aws eks` commands
- **CloudFormation/CDK/Terraform/Pulumi/Crossplane:** Full support
- **eksctl:** Official CLI for cluster lifecycle
- **Karpenter:** Open-source CLI/controller for node provisioning
- **IRSA/OIDC:** Standard Kubernetes ServiceAccount + AWS IAM integration

# 8. Existing open-source alternatives

- **Self-managed Kubernetes:** kubeadm, kops, Cluster API (CAPI), Ansible, Terraform modules
- **Lightweight distributions:** K3s, k0s, Talos, MicroK8s, Kind (local), k3d
- **Managed Kubernetes (other clouds):** GKE (Google), AKS (Azure), DOKS (DigitalOcean), LKE (Linode), Civo, Vultr
- **On-premises/Edge:** OpenShift (Red Hat), Rancher (SUSE), Tanzu (VMware), EKS Anywhere, KubeVirt
- **Kubernetes installers:** kubespray, kubeone, rke2
- **EKS Distro:** Open-source Kubernetes + patches used by EKS
- **Bottlerocket:** Open-source container OS
- **Karpenter:** Open-source node autoscaler

# 9. Alternative comparison

Self-managed Kubernetes (CAPI, kops, kubespray) on EC2 or other clouds provides full control and portability but requires operational expertise (control plane HA, etcd, upgrades, CNI). Managed alternatives (GKE, AKS) offer similar managed control planes. EKS differentiators: AWS integration (IRSA, VPC CNI, ALB Controller, Fargate, Karpenter, Bottlerocket), EKS Anywhere for hybrid, and AWS support. Open-source gap: managed control plane HA and upgrades.

# 10. Missing capabilities and opportunity analysis

Managed multi-AZ control plane with automated upgrades/patching, IRSA (IAM↔K8s RBAC), VPC CNI (native pod networking), Fargate serverless pods, and Karpenter (smart node provisioning) are the key managed features. An open alternative could use Cluster API for declarative cluster management, Talos/K3s for simplified OS, and Karpenter for nodes.

# 11. REA implementation strategy

Use Cluster API (CAPI) with AWS provider (CAPA) or Talos/K3s on EC2 for self-managed clusters. For managed control plane feel: EKS Distro + CAPI (what EKS Anywhere does). Add Karpenter for node provisioning, Cilium for CNI+policies, AWS Load Balancer Controller for LBs, IRSA via OIDC provider. For serverless pods: Kata Containers / Firecracker on K8s. This replicates EKS architecture with open components.

# 12. Security, privacy, and compliance

Control plane encryption (KMS), secrets encryption (KMS envelope), IRSA (least privilege), VPC isolation, Network Policies, Admission controllers (PodSecurity, Kyverno), Image signing (cosign/sigstore), Runtime security (Falco), Audit logging, Compliance: SOC, PCI, HIPAA, FedRAMP, ISO. Open alternative must replicate: KMS envelope encryption (via KMS plugin), OIDC+IRSA, CNI policies, admission control.

# 13. Sources and evidence

- https://aws.amazon.com/eks/ (product page)
- https://docs.aws.amazon.com/eks/ (documentation)
- https://github.com/aws/eks-distro (EKS Distro)
- https://github.com/aws/karpenter (Karpenter)
- https://cluster-api.sigs.k8s.io/ (CAPI)

# 14. Open questions

- Can CAPI + EKS Distro + Karpenter achieve EKS-level operational simplicity?
- What is the effort to maintain control plane HA and upgrades without AWS?
- How to replicate Fargate's per-pod microVM isolation on open infrastructure?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

CAPI + EKS Distro + Karpenter + Cilium + AWS LB Controller is the open-source equivalent stack. EKS Anywhere proves this works. The gap is managed control plane operations (upgrades, etcd, API server HA) which CAPI automates but doesn't fully eliminate.

---

# 17. REA implementation strategy (continued)

Phase 1: CAPI management cluster (Talos/K3s) + EKS Distro workload clusters. Phase 2: Karpenter for node provisioning, Cilium for CNI, AWS LB Controller. Phase 3: IRSA via OIDC + AWS IAM. Phase 4: Fargate-like serverless via Kata Containers + Firecracker. Phase 5: GitOps (Flux/ArgoCD) for app deployment. Phase 6: Observability stack (AMP/AMG equivalents: VictoriaMetrics + Grafana).