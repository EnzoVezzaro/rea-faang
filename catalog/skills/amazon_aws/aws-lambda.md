---
name: aws-lambda
description: Use when researching, comparing, or building a free and open-source replacement for AWS Lambda (Amazon Web Services). Open-source status is available — see OpenFaaS, Knative, Apache OpenWhisk, and more.
---

# AWS Lambda (`aws-lambda`)

| | |
|---|---|
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `serverless` |
| **Categories** | `serverless` |
| **Official URL** | https://aws.amazon.com/lambda/ |
| **Open-source status** | **available** |

## What it is

AWS Lambda runs functions on demand without managing servers, scaling to zero and billing per invocation.

## Core capabilities

- Event-driven function execution
- Automatic scaling and scale-to-zero
- Managed runtimes and triggers

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [OpenFaaS](https://www.openfaas.com/) | MIT | Serverless functions on Kubernetes/Docker. | Community edition is open source. |
| [Knative](https://knative.dev/) | Apache-2.0 | Serverless serving and eventing on Kubernetes. | CNCF project. |
| [Apache OpenWhisk](https://openwhisk.apache.org/) | Apache-2.0 | Event-driven FaaS platform. | The original open FaaS. |
| [Fission / Nuclio](https://fission.io/) | Apache-2.0 | Kubernetes-native FaaS with fast cold starts. | Alternative runtimes. |

## Gap

AWS’s managed integrations (IAM, event sources, edge) and per-invocation economics differ.

## Verdict

Available. Multiple mature open serverless platforms exist.

## Sources

- https://www.cncf.io/blog/2020/04/13/serverless-open-source-frameworks-openfaas-knative-more/
- https://www.openfaas.com/
- https://fission.io/docs/concepts/comparison/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`aws-lambda`)
- Research dossier: [`research/companies/amazon_aws/products/aws-lambda.md`](../../../research/companies/amazon_aws/products/aws-lambda.md)
- REA web-surface report: [`catalog/rea/amazon_aws/aws-lambda.md`](../../rea/amazon_aws/aws-lambda.md)
