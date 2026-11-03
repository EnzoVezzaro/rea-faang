---
schema_version: "1.0"
id: "amazon-vpc"
company_id: "amazon_aws"
name: "Amazon Virtual Private Cloud"
aliases: ["Amazon VPC", "VPC"]
product_type: "cloud_infrastructure"
categories: ["networking", "virtual-network", "subnets", "routing", "security"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/vpc/"
official_docs_url: "https://docs.aws.amazon.com/vpc/"
official_source_urls:
  - "https://aws.amazon.com/vpc/"
  - "https://aws.amazon.com/vpc/faqs/"
  - "https://docs.aws.amazon.com/vpc/latest/userguide/"
  - "https://docs.aws.amazon.com/vpc/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/ec2/"
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

# 1. Executive summary

Amazon Virtual Private Cloud is AWS's virtual networking foundation. It provides logically isolated networks, CIDR allocation, subnets, route tables, gateways, security groups, network ACLs, peering, endpoints, VPN, traffic mirroring, IP address management and network analysis. OpenStack Neutron is recorded as a partial open-source foundation, not an equivalent cloud service.

# 2. Product identity and ownership

- **Official name:** Amazon Virtual Private Cloud
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Isolated cloud networking and connectivity

# 3. Product capabilities

- Create logically isolated virtual networks with IPv4 and IPv6 ranges.
- Create subnets and place compute, database and application resources within them.
- Configure route tables, internet gateways, NAT gateways and egress-only gateways.
- Apply security groups and network ACLs to control traffic.
- Connect networks through peering, VPN, Direct Connect, PrivateLink and Transit Gateway.
- Manage addresses and analyze reachability, mirroring and network performance.

# 4. Technical architecture

The public model includes VPCs, subnets, route tables, routes, gateways, network interfaces, security groups, ACLs, endpoints, peering, VPN, IPAM and regional or multi-account network services. Exact state transitions, route precedence, security behavior, address allocation, quotas, cross-region semantics and service integration boundaries remain pending REA verification.

# 5. User workflows

Typical workflows include creating a VPC, selecting a CIDR, creating public and private subnets, attaching gateways, configuring routes and security, launching resources, connecting VPCs, adding endpoints and analyzing reachability. A complete study must test overlapping ranges, route conflicts, denied traffic, state changes, deletion dependencies, IPv6, endpoint policies, peering and failure recovery.

# 6. Pricing and access

Creating and using a VPC itself has no additional charge, but gateways, VPN, data transfer, addresses and related services can incur charges. Access requires an AWS account, IAM permissions and regional availability. Pricing, quotas, address limits and managed-service costs must be verified before implementation. No credentials or customer network data belong in this dossier.

# 7. API and integration surface

Public surfaces include the AWS console, AWS CLI, SDKs, CloudFormation and the EC2/VPC APIs for VPCs, subnets, routes, gateways, interfaces, security groups, ACLs, endpoints, peering, VPN and IPAM. The VPC API is exposed through the EC2 API reference and CLI namespace. Exact request schemas, state transitions, errors, retries, idempotency and dependency rules require command-level testing.

# 8. Existing open-source alternatives

OpenStack Neutron is an Apache-2.0 open-source virtual networking service for tenant networks, ports, subnets, routers, security groups and networking plugins. It is a substantial foundation for independent network orchestration, but does not reproduce AWS's account and region model, managed gateways, PrivateLink, IPAM, traffic analysis, IAM, quotas or integrated service plane.

# 9. Alternative comparison

Compare CIDR and address allocation, tenant isolation, subnets, routing, gateways, ACLs, security groups, endpoints, peering, VPN, IPv6, multi-region behavior, identity, state transitions, quotas, observability and failure recovery. Neutron covers core virtual-network control; AWS-managed connectivity and the wider cloud integration layer require additional work.

# 10. Missing capabilities and opportunity analysis

Research must map every VPC and EC2-networking operation, resource dependency, state, route and policy rule, endpoint and gateway behavior, IPAM, reachability, traffic mirroring, quota, error and regional semantic. Any implementation must use original code and isolated synthetic network fixtures.

# 11. RAE implementation strategy

Use the official product, user guide, FAQ, API and CLI references as primary sources. The generated RAE skill should instruct an agent to build an independent virtual-network control plane beginning with Neutron concepts where useful, then add routing, gateways, security, endpoints, IPAM, identity and multi-region behavior only where evidence supports them. Preserve the partial-equivalence verdict and do not claim AWS service parity.

# 12. Security, privacy, and compliance

Verify IAM scope, least privilege, route and firewall defaults, tenant isolation, encryption, flow logs, address privacy, VPN secrets, deletion and audit. Use isolated test accounts and synthetic network ranges only. Never store credentials, private topology or customer network data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/vpc/ — official product scope.
- https://aws.amazon.com/vpc/faqs/ — components, connectivity and pricing boundaries.
- https://docs.aws.amazon.com/vpc/latest/userguide/ — network workflows.
- https://docs.aws.amazon.com/vpc/latest/APIReference/ — VPC API reference.
- https://docs.aws.amazon.com/cli/latest/reference/ec2/ — AWS CLI networking surface.
- https://github.com/openstack/neutron — open-source virtual-network alternative.

# 14. Unknowns

- Complete resource, state, dependency and API operation matrix.
- Exact route, security, address, endpoint, gateway and quota semantics.
- Cross-account, cross-region, IPv6, IPAM and managed connectivity behavior.
- Failure recovery, observability, audit and service-integration boundaries.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface and a partial open-source foundation are documented; no full equivalence claim is made.
