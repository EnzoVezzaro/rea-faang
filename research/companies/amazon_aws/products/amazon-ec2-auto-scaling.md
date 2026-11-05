---
schema_version: "1.0"
id: "amazon-ec2-auto-scaling"
company_id: "amazon_aws"
name: "Amazon EC2 Auto Scaling"
aliases:
  - "EC2 Auto Scaling"
  - "Auto Scaling groups"
product_type: "compute"
categories:
  - "compute"
  - "autoscaling"
  - "high-availability"
  - "infrastructure"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/ec2/autoscaling/"
official_docs_url: "https://docs.aws.amazon.com/autoscaling/"
official_source_urls:
  - "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html"
  - "https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html"
  - "https://aws.amazon.com/documentation-overview/ec2-autoscaling/"
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

Amazon EC2 Auto Scaling maintains EC2 capacity within configured limits and can launch or terminate instances using policies, scheduled actions and health checks. It supports Auto Scaling groups, launch templates, multi-AZ distribution, lifecycle hooks, instance refresh and several purchase options.

# 2. Product identity and ownership

- **Official name:** Amazon EC2 Auto Scaling
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/ec2/autoscaling/

# 3. Product capabilities

- Minimum, desired and maximum group capacity.
- Manual, dynamic, predictive and scheduled scaling.
- EC2/custom health checks and automatic replacement.
- Multi-AZ distribution, Spot capacity rebalancing and load balancer integration.
- Instance refresh, lifecycle hooks, scale-in protection and termination policies.

# 4. Technical architecture

Public documentation exposes Auto Scaling groups, launch templates/configurations, scaling policies, health checks, lifecycle hooks and EC2/CloudWatch integration. Internal control loops, placement decisions, warmup behavior, capacity allocation and failure recovery remain unknown.

# 5. User workflows

Users create a launch template and Auto Scaling group, set capacity bounds, attach policies and health checks, then observe launches, terminations and replacements. Rolling instance refresh and lifecycle hooks add separate operational workflows.

# 6. Pricing and access

AWS states that EC2 Auto Scaling has no additional service fee; users pay for EC2, EBS, CloudWatch and other resources. Actual costs depend on instance type, purchase option, storage, metrics and traffic.

# 7. API and integration surface

- User guide: https://docs.aws.amazon.com/autoscaling/ec2/userguide/
- API reference: https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html
- Public surfaces include Console, AWS CLI, SDK/API, CloudFormation, CloudWatch and Elastic Load Balancing.

# 8. Existing open-source alternatives

Potentially relevant projects include Kubernetes Horizontal/Vertical Pod Autoscaler, Cluster Autoscaler, OpenStack Heat, Nomad autoscaling and cloud-provider-specific controllers. Their instance lifecycle, capacity and AWS integration coverage must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source orchestrators can cover workload scaling, but no equivalence is claimed for EC2 instance lifecycle, AWS purchase options, AZ balancing, launch templates, managed health checks or CloudFormation integration.

# 10. Missing capabilities and opportunity analysis

REA should map group state, policy evaluation, capacity allocation, health replacement, lifecycle hooks, refresh, termination, Spot behavior, scheduled actions and load-balancer registration independently.

# 11. REA implementation strategy

Use public AWS documentation, API references and synthetic workloads only. A clean-room equivalent should use an independent control loop and cloud abstraction, documenting provider-specific behavior without copying AWS implementation.

# 12. Security, privacy, and compliance

Research must verify IAM, launch-template permissions, instance-profile scope, network boundaries, metadata exposure, termination protection, audit logs and cross-account operations.

# 13. Evidence register

- https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html — official scope and features.
- https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html — official API surface.
- https://aws.amazon.com/documentation-overview/ec2-autoscaling/ — official service overview.

# 14. Unknowns

- Full policy evaluation, quota and Region matrix.
- Placement, warmup, replacement and failure-recovery behavior.
- Purchase-option and Spot capacity semantics.
- Open-source coverage for AWS-specific instance management.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
