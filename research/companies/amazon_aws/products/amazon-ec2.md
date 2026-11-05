---
schema_version: "1.0"
id: "amazon-ec2"
company_id: "amazon_aws"
name: "Amazon EC2"
aliases: []
product_type: "compute"
categories:
  - "compute"
official_url: "https://aws.amazon.com/ec2/"
official_docs_url: "https://docs.aws.amazon.com/ec2/"
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud. It is a foundational service for running virtual servers in the cloud, offering various instance types, operating systems, and networking configurations.

# 2. Product identity and ownership

- **Official name:** Amazon EC2
- **Company and business unit:** Amazon Web Services
- **Parent organization:** Amazon.com Inc. (via amazon_aws)
- **Original launch date:** 2006
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; AWS-native service
- **Related products:** VPC, S3, EBS, RDS, ELB, ASG, CloudFormation, Systems Manager, Fargate, Outposts
- **Official website:** https://aws.amazon.com/ec2/
- **Official documentation:** https://docs.aws.amazon.com/ec2/

# 3. Product capabilities

- Virtual servers (instances) with customizable CPU, memory, storage, and network
- Over 500 instance types (general purpose, compute-optimized, memory-optimized, storage-optimized, GPU-enabled)
- Auto Scaling groups and launch templates
- Key pairs and instance login (SSM Session Manager, SSM Run Command)
- Virtual Private Cloud (VPC) networking
- Elastic IP addresses and ENIs
- Block storage via EBS (root and attached volumes)
- Instance metadata and user data scripting
- Spot Instances (interruptible spot pricing)
- Dedicated Instances and Dedicated Hosts
- AMI (Amazon Machine Image) for pre-configured templates
- Tags for resource organization and cost allocation
- Nested hierarchies and resource groups

# 4. Technical architecture

EC2 architecture:

- Hypervisor-based virtualization (Nitro hypervisor with separate control plane)
- Instance types mapped to physical hardware (bare metal, virtual)
- EBS-backed and instance-store-backed root devices
- Nitro Enclaves for isolated workloads
- Placement groups (cluster, spread, partition)
- Auto Scaling integration with CloudWatch metrics

Full virtualization details are proprietary; instance metadata, Nitro, and hypervisor interface are documented.

# 5. User workflows

Primary workflows: instance launch, configuration, connection, scaling, and termination. Essential: launch instance, connect, basic configuration. Advanced: spot pricing, placement groups, auto scaling policies, dedicated hosts.

# 6. Pricing and access

- On-Demand pricing (per second or hour)
- Reserved Instances (1-year or 3-year commitment)
- Spot Instances (interruptible, up to 90% discount)
- Dedicated Instances and Hosts (premium pricing)
- Free tier: 750 hours/month t2.micro (Linux) for first 12 months
- Pricing varies by region, instance type, OS, and tenancy

# 7. API and integration surface

- REST/JSON API (EC2 API Actions)
- CLI (ec2 commands)
- SDKs (Python, Node.js, Java, Go, .NET, Ruby, PHP, Rust, etc.)
- CloudFormation resource type
- Terraform provider
- Auto Scaling group actions
- Spot Fleet requests

# 8. Existing open-source alternatives

- KVM / libvirt / Proxmox (virtual machine hypervisors)
- VMware vSphere (commercial VMware product)
- Xen Project (hypervisor)
- No IaaS service replicates EC2's instance type variety, pricing models, and AWS integration.

# 9. Alternative comparison

KVM/libvirt/Proxmox provide the closest open-source virtualization platform. VMware vSphere is the closest commercial alternative. No open-source service replicates EC2's instance type variety, spot pricing model, or AWS integration.

# 10. Missing capabilities and opportunity analysis

Spot pricing model, Nitro hypervisor features, and AWS API integration represent gaps. Self-hosted KVM can provide virtualization but not the EC2 service experience.

# 11. REA implementation strategy

Not recommended to build an IaaS service from scratch. Consider contributing to KVM/libvirt or building on top of existing hypervisors. Focus on workload patterns and migration rather than service replication.

# 12. Security, privacy, and compliance

IAM, Security Groups, Network ACLs, Nitro Enclaves, KMS encryption. EC2 satisfies SOC, ISO, FedRAMP, HIPAA, and other compliance certifications.

# 13. Sources and evidence

- https://aws.amazon.com/ec2/ (product page)
- https://docs.aws.amazon.com/ec2/ (documentation)
- https://github.com/qemu/qemu (KVM reference)

# 14. Open questions

- What is the spot instance price volatility model comparison?
- How do Nitro Enclaves compare to secure enclaves in other hypervisors?
- What is the performance overhead of the Nitro hypervisor vs. KVM?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

KVM/libvirt/Proxmox are the closest open-source virtualization platforms. VMware vSphere is the closest commercial alternative.

---

# 17. REA implementation strategy (continued)

Focus on virtualization workload patterns. KVM/libvirt for self-hosted alternatives. EC2 service replication is out of scope.