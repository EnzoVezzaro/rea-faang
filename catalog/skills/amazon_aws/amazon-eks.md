---
name: amazon-eks
description: Use when researching, comparing, or building a free and open-source replacement for Amazon EKS (Amazon Web Services). Open-source status is available — see k3s, RKE2, Rancher, and more.
---

# Amazon EKS (`amazon-eks`)

| | |
|---|---|
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `container_orchestration` |
| **Categories** | `container_orchestration` |
| **Official URL** | https://aws.amazon.com/eks/ |
| **Open-source status** | **available** |

## What it is

Amazon EKS is AWS’s managed Kubernetes: AWS runs the control plane and integrates it with its networking, IAM and load balancers.

## Core capabilities

- Managed Kubernetes control plane
- Managed node groups and autoscaling
- AWS networking, IAM and observability integration

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [k3s](https://k3s.io/) | Apache-2.0 | Lightweight certified Kubernetes distribution. | Edge/small-cluster focus. |
| [RKE2](https://docs.rke2.io/) | Apache-2.0 | Hardened Kubernetes distribution. | Security/compliance focus. |
| [Rancher](https://www.rancher.com/) | Apache-2.0 | Multi-cluster Kubernetes management. | Management layer. |
| [kOps](https://kops.sigs.k8s.io/) | Apache-2.0 | Cluster lifecycle automation. | Production cluster tooling. |

## Gap

The managed control plane (SLA, upgrades, AWS integrations) is a service; the Kubernetes software itself is fully open.

## Verdict

Available. Kubernetes and its distributions are open source; EKS is a managed deployment of them.

## Sources

- https://cloudfleet.ai/blog/cloud-native-how-to/2026-04-openshift-alternatives/
- https://northflank.com/blog/rancher-vs-openshift
- https://spot.rackspace.com/blog/aws-eks-alternatives

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`amazon-eks`)
- Research dossier: [`research/companies/amazon_aws/products/amazon-eks.md`](../../../research/companies/amazon_aws/products/amazon-eks.md)
- REA web-surface report: [`catalog/rea/amazon_aws/amazon-eks.md`](../../rea/amazon_aws/amazon-eks.md)
