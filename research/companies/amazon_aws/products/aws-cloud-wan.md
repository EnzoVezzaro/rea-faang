---
schema_version: "1.0"
id: "aws-cloud-wan"
company_id: "amazon_aws"
name: "AWS Cloud WAN"
aliases: ["Cloud WAN", "AWS core network"]
product_type: "networking"
categories: ["wide-area-network", "sd-wan", "global-networking", "network-segmentation", "transit-gateway", "network-management"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/cloud-wan/"
official_docs_url: "https://docs.aws.amazon.com/network-manager/latest/cloudwan/"
official_source_urls:
  - "https://aws.amazon.com/cloud-wan/"
  - "https://docs.aws.amazon.com/network-manager/latest/cloudwan/what-is-cloudwan.html"
  - "https://docs.aws.amazon.com/network-manager/latest/cloudwan/"
  - "https://docs.aws.amazon.com/general/latest/gr/cloudwan.html"
  - "https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-getting-started.html"
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

# AWS Cloud WAN

## Scope and lifecycle

AWS Cloud WAN is a managed wide-area networking service for building, managing and monitoring a unified global network connecting VPCs, branches, data centers, VPNs, SD-WAN and Transit Gateways. A central network policy defines segmentation and routing behavior across regions and on-premises locations.

## Official surfaces

- Product: https://aws.amazon.com/cloud-wan/
- What it is: https://docs.aws.amazon.com/network-manager/latest/cloudwan/what-is-cloudwan.html
- Documentation: https://docs.aws.amazon.com/network-manager/latest/cloudwan/
- Endpoints and quotas: https://docs.aws.amazon.com/general/latest/gr/cloudwan.html
- Quick start: https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-getting-started.html

## Capability map

- Create global and core networks with regional core network edges.
- Define centralized policies, segments, attachment mappings and route sharing.
- Connect VPCs, branches, data centers, VPNs, SD-WAN and Transit Gateways.
- Provide global segmentation and network isolation.
- Monitor topology, traffic and network health from a central dashboard.

## Control-plane and policy leads

Cloud WAN is managed through Network Manager APIs, console, SDKs and CLI tooling. The core network policy, segments, edges, attachments and service insertion are central concepts. Exact policy-version lifecycle, route propagation, attachment state transitions, regional data aggregation, quotas and failure recovery require controlled network evidence.

## Open-source alternative

OpenZiti is recorded as a partial alternative: https://github.com/openziti/ziti. It provides an open secure-overlay foundation, but not Cloud WAN's AWS core-network model, regional segmentation, Transit Gateway and SD-WAN integrations or managed topology dashboard.

## REA/build guidance

Use AWS's Cloud WAN documentation and policy model as primary inputs for Reverse Engineer Anything. An independent implementation should separate global network intent, regional edge orchestration, attachments, routing domains, policy versions and observability. Do not conflate Cloud WAN with a VPN concentrator, service mesh or standalone SD-WAN appliance.

## Unknowns and evidence gaps

- Policy rollout, validation and rollback behavior need multi-region fixtures.
- Attachment and route convergence timing varies by network type and requires controlled tests.
- Home-region data aggregation, service insertion and PrivateLink behavior require targeted evidence.
- Quotas, regional availability and cost semantics must be checked before compatibility claims.
