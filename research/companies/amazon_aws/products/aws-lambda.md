---
schema_version: "1.0"
id: "aws-lambda"
company_id: "amazon_aws"
name: "AWS Lambda"
aliases: []
product_type: "serverless"
categories:
  - "serverless"
official_url: "https://aws.amazon.com/lambda/"
official_docs_url: "https://docs.aws.amazon.com/lambda/"
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

AWS Lambda is a serverless compute service that runs code in response to events without provisioning or managing servers. It is a cornerstone of cloud-native architectures and the "Functions as a Service" (FaaS) model.

# 2. Product identity and ownership

- **Official name:** AWS Lambda
- **Company and business unit:** Amazon Web Services
- **Parent organization:** Amazon.com Inc. (via amazon_aws)
- **Original launch date:** 2014
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; AWS-native service
- **Related products:** API Gateway, S3, SNS, SQS, Step Functions, Event Bridge, CloudWatch, SAM, Artemis
- **Official website:** https://aws.amazon.com/lambda/
- **Official documentation:** https://docs.aws.amazon.com/lambda/

# 3. Product capabilities

- Event-driven execution (triggered by AWS services, HTTP, schedules, IoT)
- Automatic scaling per request volume
- Pay-per-use pricing (per request and duration)
- Support for multiple runtimes (Node.js, Python, Ruby, Java, Go, .NET, Rust, etc.)
- Dead letter queues for failed invocations
- Environment variables and secrets management (AWS Secrets Manager, Parameter Store)
- Virtual private cloud (VPC) networking support
- Lambda Layers for code and dependency sharing
- Async invocation with error handling
- Concurrent execution limits and configuration
- Versioning and alias management (progressive deployments)
- Integration with over 200 AWS services

# 4. Technical architecture

AWS Lambda runs user code in a managed execution environment:

- Firecracker microVM isolation per function instance
- Load balancer fronting the Lambda service
- Automatic provisioning of execution environments
- Elastic network interface per function (optional)
- /tmp filesystem (ephemeral, 512 MB / 10 GB / 192 GB depending on config)
- Runtime API (local endpoint for lifecycle management)
- Execution role via IAM for AWS resource access

Full internal architecture is proprietary; runtime interface and API specifications are publicly documented.

# 5. User workflows

Primary workflows: function creation, trigger configuration, testing, monitoring, and deployment. Essential: code deployment, trigger setup, basic monitoring. Advanced: layer management, concurrent limit tuning, async error handling, CI/CD integration.

# 6. Pricing and access

- Pay-per-invocation: first 1M requests free per month
- Pricing per 100ms increments (rounded up to 100ms)
- Pricing per GB-hour of memory usage
- Free tier includes 400,000 GB-seconds and 1M requests monthly
- AWS Free Tier limits apply

# 7. API and integration surface

- REST/HTTP API (via AWS SDK or AWS CLI)
- Lambda-specific API actions (CreateFunction, UpdateFunction, etc.)
- Lambda Runtime API (for custom runtimes)
- Lambda Edge (edge locations)
- SAM template support (AWS Serverless Application Model)
- Event source mappings

# 8. Existing open-source alternatives

- OpenFaaS (Functions as a Service with Docker)
- Apache OpenWhisk (IBM)
- Fn Project
- ZEUS (Yandex)
- No exact feature replica; OpenFaaS and OpenWhisk come closest for Docker-based function deployment

# 9. Alternative comparison

OpenFaaS and OpenWhisk provide the closest open-source alternatives for Docker-based serverless functions. They differ in platform management, scaling model, and AWS integration. No open-source service replicates Lambda's managed execution, microVM isolation, and AWS event integration.

# 10. Missing capabilities and opportunity analysis

Managed microVM isolation, integrated AWS event source ecosystem, and pay-per-use pricing model with free tier represent significant gaps. Self-hosted FaaS can provide function execution but not the managed service experience.

# 11. RAE implementation strategy

Not recommended to build a managed FaaS service from scratch. Consider contributing to or extending OpenFaaS or OpenWhisk for self-hostable serverless function execution. Focus on workflow patterns rather than service replication.

# 12. Security, privacy, and compliance

Firecracker microVM isolation, IAM role-based access, VPC networking, encryption at rest and in transit. Lambda satisfies SOC, ISO, FedRAMP, and other compliance certifications.

# 13. Sources and evidence

- https://aws.amazon.com/lambda/ (product page)
- https://docs.aws.amazon.com/lambda/ (documentation)
- https://github.com/openfaas/faas (OpenFaaS reference)

# 14. Open questions

- What is the minimum viable execution environment for serverless functions?
- How do OpenFaaS and OpenWhisk compare on scaling and cold start performance?
- What is the overhead of microVM isolation vs. container-based isolation?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

OpenFaaS and OpenWhisk are the closest open-source FaaS platforms, but they lack managed microVM integration and AWS event source coverage.

---

# 17. RAE implementation strategy (continued)

Focus on self-hostable FaaS patterns (OpenFaaS) for function execution, not managed service replication.