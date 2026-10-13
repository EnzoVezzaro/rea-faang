---
name: aws-sqs
description: Use when researching, comparing, or building a free and open-source replacement for SQS (Amazon Web Services). Open-source status is available — see RabbitMQ, NATS, ElasticMQ, and more.
---

# SQS (`aws-sqs`)

| | |
|---|---|
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `messaging` |
| **Categories** | `messaging` |
| **Official URL** | https://aws.amazon.com/sqs/ |
| **Open-source status** | **available** |

## What it is

Amazon SQS is a fully managed message queue: standard and FIFO queues with at-least-once delivery and managed scaling.

## Core capabilities

- Standard and FIFO queues
- At-least-once and exactly-once (FIFO) delivery
- Dead-letter queues, visibility timeouts, batching

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [RabbitMQ](https://www.rabbitmq.com/) | MPL-2.0 | Mature multi-protocol message broker. | Queue semantics differ from SQS. |
| [NATS](https://nats.io/) | Apache-2.0 | Lightweight messaging and JetStream persistence. | Cloud-native broker. |
| [ElasticMQ](https://github.com/softwaremill/elasticmq) | Apache-2.0 | Implements a subset of the SQS API. | Drop-in SQS-compatible queue. |
| [SmoothMQ](https://github.com/poundifdef/smoothmq) | MIT | SQS-compatible message queue. | Newer drop-in replacement. |
| [Apache ActiveMQ](https://activemq.apache.org/) | Apache-2.0 | Java multi-protocol broker. | JMS-oriented. |

## Gap

SQS’s fully managed, effectively infinite scale is operational; API compatibility is covered by ElasticMQ/SmoothMQ.

## Verdict

Available. Both general brokers and SQS-API-compatible queues exist.

## Sources

- https://github.com/softwaremill/elasticmq
- https://ably.com/alternatives/amazon-sqs
- https://eyevinntechnology.medium.com/sqs-compatible-message-queue-service-in-open-source-cloud-31427a6bc9aa

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`aws-sqs`)
- Research dossier: [`research/companies/amazon_aws/products/aws-sqs.md`](../../../research/companies/amazon_aws/products/aws-sqs.md)
- REA web-surface report: [`catalog/rea/amazon_aws/aws-sqs.md`](../../rea/amazon_aws/aws-sqs.md)
