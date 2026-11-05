---
schema_version: "1.0"
id: "amazon-lookout-vision"
company_id: "amazon_aws"
name: "Amazon Lookout for Vision"
aliases:
  - "Lookout for Vision"
  - "Amazon Lookout Vision"
product_type: "machine_learning_framework"
categories:
  - "computer-vision"
  - "industrial-inspection"
  - "anomaly-detection"
  - "image-analysis"
  - "discontinued"
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/lookout-for-vision/"
official_docs_url: "https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/"
official_source_urls:
  - "https://aws.amazon.com/lookout-for-vision/"
  - "https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/"
  - "https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html"
  - "https://docs.aws.amazon.com/cli/latest/reference/lookoutvision/"
research_status: "retired"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: null
next_review_at: "2027-10-31T00:00:00Z"
research_version: 1
---

# 1. Executive summary

Amazon Lookout for Vision was AWS's managed computer-vision service for detecting visual anomalies and defects in industrial products. It trained custom models from normal and anomalous images and supported evaluation, hosted inference and historical edge-device workflows.

AWS lists Amazon Lookout for Vision among services in full shutdown, with an end-of-support date of October 31, 2025. This entry is retained as a historical/discontinued catalog item and must not be presented as currently deployable.

# 2. Product identity and ownership

- **Official name:** Amazon Lookout for Vision
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued / full shutdown
- **Product page:** https://aws.amazon.com/lookout-for-vision/

# 3. Product capabilities

- Create projects and datasets of normal and anomalous product images.
- Train custom anomaly-detection or classification models.
- Evaluate model performance and inspect image-level results.
- Host models for synchronous image inference.
- Detect and localize visual defects in industrial inspection workflows.
- Historically support edge-device compilation/inference for selected models.

# 4. Technical architecture

The historical public surface included projects, datasets, image labels, model training, evaluation, model hosting, inference, anomaly masks/heatmaps, adapters and edge compilation. The service is no longer available, so this architecture is documented for historical REA only.

# 5. User workflows

Historically, users created a project, imported or labeled images, trained a model, evaluated precision/recall, started model hosting, invoked image inference and reviewed anomaly/localization results. These workflows cannot be assumed executable after the full shutdown date.

# 6. Pricing and access

Amazon Lookout for Vision is discontinued and fully shut down. No current deployment, pricing, free tier or account-access assumption is valid.

# 7. API and integration surface

- Historical developer guide: https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/
- Historical AWS CLI namespace: `aws lookoutvision`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/lookoutvision/
- Full-shutdown notice: https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html
- Historical API, model and edge behavior requires REA capture only as a discontinued reference.

# 8. Existing open-source alternatives

Potentially relevant alternatives include OpenCV, Ultralytics YOLO, Detectron2, Anomalib, FiftyOne, Roboflow open tooling, TensorFlow, PyTorch and OpenVINO. These cover subsets of image classification, object detection, anomaly detection, labeling or edge inference; no equivalence is claimed.

# 9. Alternative comparison

Open-source vision stacks can reproduce portions of data preparation, training, anomaly scoring and inference, but the historical managed project lifecycle, service APIs, model hosting and edge workflow require separate reconstruction.

# 10. Missing capabilities and opportunity analysis

Historical REA should map project/dataset lifecycle, labels, training, evaluation, anomaly masks, inference, hosting, edge compilation, APIs, quotas, Regions and retirement behavior.

# 11. REA implementation strategy

Use archived official documentation and the full-shutdown notice as research surfaces. Any replacement should use independently licensed vision and anomaly-detection components, document differences and not imply compatibility with a service AWS no longer operates.

# 12. Security, privacy, and compliance

Historical analysis should verify image privacy, S3/IAM access, model artifact protection, encryption, edge-device credentials, retention, deletion and industrial safety boundaries.

# 13. Evidence register

- https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html — official full-shutdown status and date.
- https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/ — historical service documentation.
- https://docs.aws.amazon.com/cli/latest/reference/lookoutvision/ — historical CLI surface.
- https://aws.amazon.com/lookout-for-vision/ — historical product context.

# 14. Unknowns

- Exact post-shutdown data/export behavior for former customers.
- Complete historical API, model, edge and quota matrix.
- AWS-recommended replacement capabilities and migration tooling.
- Verified open-source alternatives for the complete historical workflow.

# 15. Research status

`retired`: product identity and historical scope are documented; AWS fully shut down the service on October 31, 2025, so no active implementation or deployment is claimed.
