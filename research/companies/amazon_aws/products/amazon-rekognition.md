---
schema_version: "1.0"
id: "amazon-rekognition"
company_id: "amazon_aws"
name: "Amazon Rekognition"
aliases: ["Rekognition"]
product_type: "ai_application"
categories: ["computer-vision", "image-analysis", "video-analysis", "face-analysis", "moderation"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/rekognition/"
official_docs_url: "https://docs.aws.amazon.com/rekognition/latest/dg/"
official_source_urls:
  - "https://aws.amazon.com/rekognition/"
  - "https://docs.aws.amazon.com/rekognition/latest/dg/"
  - "https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works.html"
  - "https://docs.aws.amazon.com/rekognition/latest/dg/face-liveness.html"
  - "https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html"
  - "https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/"
  - "https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works-operations-intro.html"
  - "https://docs.aws.amazon.com/rekognition/latest/APIReference/"
  - "https://docs.aws.amazon.com/general/latest/gr/rekognition.html"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
---

# 1. Executive summary

Amazon Rekognition is AWS's managed image and video analysis service. AWS documents image labels, objects, scenes, text, faces, moderation and PPE, plus stored and streaming video analysis, custom labels and face liveness. CompreFace is recorded as a partial self-hosted alternative for face-analysis subsets, not a full replacement.

# 2. Product identity and ownership

- **Official name:** Amazon Rekognition
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Managed computer vision for images, video, faces, text and moderation

# 3. Product capabilities

- Detect labels, objects, scenes, concepts and text in images.
- Detect, compare, index and search faces and facial attributes.
- Analyze stored and streaming video, including tracking and people of interest.
- Detect unsafe content, protective equipment and face liveness signals.
- Train and run Custom Labels models for domain-specific image classification or detection.

# 4. Technical architecture

The public API surface separates image analysis, stored-video jobs, streaming video, face collections, Custom Labels, liveness and moderation workflows. Inputs may be bytes or S3 objects depending on operation; outputs contain labels, geometry, confidence, timestamps or job metadata. Exact model versions, thresholds, retention, quota behavior and cross-feature consistency remain pending REA validation.

# 5. User workflows

Representative workflows include submitting an image, starting a stored-video job, consuming results, creating a face collection, indexing and searching faces, training a Custom Labels project, running moderation, and using streaming or liveness flows. A complete study must test invalid media, confidence thresholds, pagination, asynchronous job states, retries, partial results, deletion and consent boundaries.

# 6. Pricing and access

Access requires an AWS account, regional endpoints and IAM permissions. Pricing, free tiers, per-image or per-minute units, Custom Labels training and inference costs, quotas and supported regions must be verified before implementation.

# 7. API and integration surface

Public surfaces include console, AWS CLI, SDKs and API operations such as `DetectLabels`, `DetectText`, `DetectFaces`, `CompareFaces`, collections and face search, moderation, video jobs, Custom Labels, liveness and streaming APIs. Exact schemas, errors, retries, pagination, IAM actions and regional variations require command-level testing.

# 8. Existing open-source alternatives

CompreFace is an Apache-2.0 self-hosted REST service for face detection, recognition and verification. It is a meaningful local foundation for face workflows, but it does not cover Rekognition's general image and video analysis, moderation, Custom Labels, liveness, streaming or AWS-managed operations.

# 9. Alternative comparison

Compare image and video inputs, label taxonomy, OCR, face embeddings, collections, similarity thresholds, moderation categories, PPE, liveness, custom training, asynchronous jobs, streaming, pagination, latency, model updates, privacy, audit and deployment. CompreFace covers face subsets; the rest requires separate foundations.

# 10. Missing capabilities and opportunity analysis

Research must map operation schemas, confidence and geometry outputs, video job states, streaming transport, face collection semantics, Custom Labels training, moderation policy, liveness signals, limits, retries, data retention, regional behavior and model versioning.

# 11. REA implementation strategy

Use official AWS documentation, API references and authorized non-sensitive media. Capture representative image, video, face, moderation, Custom Labels and failure cases. Use CompreFace only after recording the partial-foundation verdict, and build an independent implementation with original code, compatible model licenses and no AWS branding or protected data.

# 12. Security, privacy, and compliance

Verify IAM scope, encryption, S3 access, biometric and face-data handling, consent, retention, deletion, region selection, logging, model training data, abuse prevention and human review for high-impact decisions. Do not infer legal compliance from API availability.

# 13. Sources and evidence

- **Product and scope:** [Amazon Rekognition developer guide](https://docs.aws.amazon.com/rekognition/latest/dg/) and [how it works](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works.html) document image and video analysis, labels, text, faces, moderation, PPE and tracking.
- **Specialized capabilities:** [Face Liveness](https://docs.aws.amazon.com/rekognition/latest/dg/face-liveness.html), [content moderation](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html) and [Custom Labels](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/) document liveness, moderation and custom model workflows.
- **Operation model:** [image and video operations](https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works-operations-intro.html) documents synchronous image calls and asynchronous stored-video jobs.
- **Programmatic surface:** [API Reference](https://docs.aws.amazon.com/rekognition/latest/APIReference/) lists image, video, Custom Labels, Face Liveness and streaming operations.
- **Alternative:** [CompreFace](https://github.com/exadel-inc/CompreFace) is the recorded Apache-2.0 self-hosted face-analysis alternative; its coverage remains partial.

# 14. Unknowns

- Complete image, video, face, moderation, liveness and Custom Labels matrix.
- Exact model, threshold, confidence, job and streaming semantics.
- Current quotas, pricing, regions, retention and lifecycle rules.
- Verified parity and licensing for models used in an independent implementation.

# 15. Research status

 Researched with verified public AWS sources. Product identity, image/video operation model, face/liveness, moderation, Custom Labels and API surface are documented. Exact model behavior, thresholds, quotas, regional availability, pricing and legal/compliance conclusions remain unknown and are not asserted.
