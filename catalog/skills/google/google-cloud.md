---
name: google-cloud
description: Use when researching, comparing, or building a free and open-source replacement for Google Cloud (Google). Open-source status is available — see OpenStack, Apache CloudStack, OpenNebula, and more.
---

# Google Cloud (`google-cloud`)

| | |
|---|---|
| **Company** | Google (`google`) |
| **Product type** | `cloud_infrastructure` |
| **Categories** | `cloud_infrastructure` |
| **Official URL** | https://cloud.google.com/ |
| **Open-source status** | **available** |

## What it is

Google Cloud is Google’s public cloud: compute, storage, networking, data, ML and managed services on a global footprint.

## Core capabilities

- IaaS compute, block/object storage, networking
- Managed databases, data and ML services
- Global regions and managed control plane

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [OpenStack](https://www.openstack.org/) | Apache-2.0 | Private-cloud IaaS (compute, storage, network). | The main open IaaS. |
| [Apache CloudStack](https://cloudstack.apache.org/) | Apache-2.0 | Turnkey IaaS platform. | Simpler single-stack option. |
| [OpenNebula](https://opennebula.io/) | Apache-2.0 | Private-cloud management. | Lightweight alternative. |
| [Kubernetes](https://kubernetes.io/) | Apache-2.0 | Container platform layer of a modern private cloud. | Layer, not a full cloud. |

## Gap

A globally distributed, fully managed public cloud and its economies of scale are not reproducible by a single operator.

## Verdict

Available. A private cloud can be built entirely from open source; the public-cloud service breadth and scale are the remaining gap.

## Sources

- https://www.openstack.org/
- https://www.amazee.io/blog/post/best-open-source-cloud-providers/
- https://openalternative.co/alternatives/google-cloud

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`google-cloud`)
- Research dossier: [`research/companies/google/products/google-cloud.md`](../../../research/companies/google/products/google-cloud.md)
- REA web-surface report: [`catalog/rea/google/google-cloud.md`](../../rea/google/google-cloud.md)
