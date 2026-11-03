---
schema_version: "1.0"
id: "amazon-eks-distro"
company_id: "amazon_aws"
name: "Amazon EKS Distro"
aliases:
  - "EKS Distro"
  - "EKS-D"
product_type: "container_orchestration"
categories:
  - "kubernetes"
  - "containers"
  - "open-source"
  - "hybrid-cloud"
  - "security"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/eks/eks-distro/"
official_docs_url: "https://distro.eks.amazonaws.com/"
official_source_urls:
  - "https://aws.amazon.com/eks/eks-distro/"
  - "https://distro.eks.amazonaws.com/"
  - "https://github.com/aws/eks-distro"
  - "https://docs.aws.amazon.com/eks/latest/userguide/eks-deployment-options.html"
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

Amazon EKS Distro is AWS's open-source distribution of Kubernetes. AWS describes it as the distribution of the Kubernetes components and dependencies used by Amazon EKS, with reproducible builds, validation, security patches and lifecycle updates for self-managed deployments on AWS, on premises and other clouds.

# 2. Product identity and ownership

- **Official name:** Amazon EKS Distro
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/eks/eks-distro/
- **Public source repository:** https://github.com/aws/eks-distro

# 3. Product capabilities

- Build and consume a curated Kubernetes distribution from AWS.
- Reproduce builds from open-source Kubernetes source, tooling and documentation.
- Use tested and validated Kubernetes components aligned with Amazon EKS.
- Receive security patches and version updates aligned with the EKS lifecycle.
- Deploy on self-provisioned infrastructure in AWS, on premises or in other clouds.

# 4. Technical architecture

The public surface includes Kubernetes components, build tooling, release metadata, dependency versions and published artifacts. The exact AWS validation process, support boundaries, patch-selection policy and all release-engineering internals require REA verification.

# 5. User workflows

Users inspect supported versions, obtain source or release artifacts, build or install the distribution, provision Kubernetes infrastructure with their chosen management tooling, and operate upgrades and security-patch updates. The workflow differs from Amazon EKS because the customer or another platform supplies cluster management and infrastructure operations.

# 6. Pricing and access

The distribution and source repository are publicly available. Infrastructure, Kubernetes operations, support, adjacent AWS services and any commercial offerings may incur separate costs; current terms require verification before making a pricing claim.

# 7. API and integration surface

- Distribution site: https://distro.eks.amazonaws.com/
- Source repository: https://github.com/aws/eks-distro
- AWS product page: https://aws.amazon.com/eks/eks-distro/
- Related deployment guidance: https://docs.aws.amazon.com/eks/latest/userguide/eks-deployment-options.html
- CLI and infrastructure commands are not treated as verified until the REA capture identifies the exact supported entry points and version-specific behavior.

# 8. Existing open-source alternatives

Potentially relevant alternatives include upstream Kubernetes, Talos Linux, RKE2, MicroK8s and other Kubernetes distributions. No equivalence is claimed yet; each candidate must be checked for component curation, release cadence, security patching, build reproducibility, support model and deployment scope.

# 9. Alternative comparison

The open-source foundation is visible, but the relationship between EKS Distro, AWS's curated release process, EKS compatibility and downstream operational tooling still requires verification. Alternatives remain unverified rather than being presented as drop-in replacements.

# 10. Missing capabilities and opportunity analysis

REA should map the build graph, release metadata, dependency locks, image and artifact provenance, patch policy, version support, Kubernetes conformance, upgrade behavior, air-gapped use, infrastructure-provider boundaries and the distinction between EKS Distro and EKS Anywhere.

# 11. RAE implementation strategy

Use the official AWS page, distribution site, public GitHub repository and versioned release artifacts as the research surface. A clean-room equivalent should use independently licensed upstream components and document differences; it must not copy proprietary AWS implementation, branding or restricted material.

# 12. Security, privacy, and compliance

Research must verify artifact signing and provenance, dependency and image sources, patch delivery, cluster credentials, telemetry boundaries, air-gapped update procedures and the security responsibilities left to operators of self-managed clusters.

# 13. Evidence register

- https://aws.amazon.com/eks/eks-distro/ — official product scope, use cases and build claims.
- https://distro.eks.amazonaws.com/ — public distribution and version information.
- https://github.com/aws/eks-distro — public source repository.
- https://docs.aws.amazon.com/eks/latest/userguide/eks-deployment-options.html — deployment-option context.

# 14. Unknowns

- Complete component, dependency and supported-version matrix.
- Exact reproducible-build and release-verification procedure.
- Security-patch, support and end-of-life policy details.
- Artifact signing, provenance and air-gapped update behavior.
- Boundaries between EKS Distro, Amazon EKS and EKS Anywhere.
- Verified open-source alternatives for the full operational workflow.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, command verification, alternative comparison and acceptance review remain outstanding.
