---
name: amazon-ec2
description: Use when researching, comparing, or building a free and open-source replacement for Amazon EC2 (Amazon Web Services). Open-source status is available — see OpenStack, Apache CloudStack, Proxmox VE, and more.
---

# Amazon EC2 (`amazon-ec2`)

| | |
|---|---|
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `compute` |
| **Categories** | `compute` |
| **Official URL** | https://aws.amazon.com/ec2/ |
| **Open-source status** | **available** |

## What it is

Amazon EC2 is AWS’s elastic compute service: on-demand and reserved virtual machines across a global fleet.

## Core capabilities

- Provisioning virtual machines/instances
- Autoscaling and load balancing
- Block storage and networking

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [OpenStack](https://www.openstack.org/) | Apache-2.0 | Self-hosted IaaS with compute (Nova) and networking (Neutron). | The main open IaaS. |
| [Apache CloudStack](https://cloudstack.apache.org/) | Apache-2.0 | Turnkey VM provisioning and management. | Simpler to operate. |
| [Proxmox VE](https://www.proxmox.com/) | AGPL-3.0 | Virtualisation platform for VMs and containers. | Single-cluster scale. |
| [OpenNebula](https://opennebula.io/) | Apache-2.0 | Private-cloud manager. | Lightweight. |

## Gap

Global capacity, hardware diversity and AWS’s managed service ecosystem are not reproducible.

## Verdict

Available. Self-hosted IaaS platforms cover the compute function.

## Sources

- https://www.openstack.org/
- https://cloudstack.apache.org/
- https://www.reddit.com/r/openstack/comments/yhh84x/is_openstack_still_the_best_open_source_option/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`amazon-ec2`)
- Research dossier: [`research/companies/amazon_aws/products/amazon-ec2.md`](../../../research/companies/amazon_aws/products/amazon-ec2.md)
- REA web-surface report: [`catalog/rea/amazon_aws/amazon-ec2.md`](../../rea/amazon_aws/amazon-ec2.md)
