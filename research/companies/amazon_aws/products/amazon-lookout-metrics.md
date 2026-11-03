---
schema_version: "1.0"
id: "amazon-lookout-metrics"
company_id: "amazon_aws"
name: "Amazon Lookout for Metrics"
aliases:
  - "Lookout for Metrics"
  - "Amazon Lookout Metrics"
product_type: "machine_learning_framework"
categories:
  - "anomaly-detection"
  - "metrics"
  - "time-series"
  - "business-analytics"
  - "discontinued"
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/lookout-for-metrics/"
official_docs_url: "https://docs.aws.amazon.com/lookoutmetrics/latest/dev/"
official_source_urls:
  - "https://aws.amazon.com/lookout-for-metrics/"
  - "https://docs.aws.amazon.com/lookoutmetrics/latest/dev/"
  - "https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html"
  - "https://docs.aws.amazon.com/cli/latest/reference/lookoutmetrics/"
research_status: "retired"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: null
next_review_at: "2027-10-10T00:00:00Z"
research_version: 1
---

# 1. Executive summary

Amazon Lookout for Metrics was AWS's managed machine-learning service for automatically detecting anomalies in business and operational metrics. It built time-series detectors from metric sets, identified unusual behavior, supported root-cause analysis and emitted alerts through integrations with AWS and external data sources.

AWS lists Amazon Lookout for Metrics among services in full shutdown, with a shutdown date of October 10, 2025. This entry is retained as a historical/discontinued catalog item and must not be presented as currently deployable.

# 2. Product identity and ownership

- **Official name:** Amazon Lookout for Metrics
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued / full shutdown
- **Product page:** https://aws.amazon.com/lookout-for-metrics/

# 3. Product capabilities

- Create metric sets from supported data sources.
- Train anomaly detectors over time-series metrics.
- Detect deviations from expected patterns automatically.
- Surface anomaly explanations and possible root causes.
- Schedule detection and deliver alerts or visualizations.
- Integrate historically with CloudWatch, S3, Redshift, RDS and supported SaaS sources.

# 4. Technical architecture

The historical public surface included metric sets, detectors, datasets, detector activation, anomaly results, alerts, backtesting, root-cause analysis, data connectors and API/CLI operations. The service is no longer available, so this architecture is documented for historical REA only.

# 5. User workflows

Historically, users configured a metric set and source, selected measures/dimensions, trained and activated a detector, reviewed anomalies and root-cause explanations, and configured alerts. These workflows cannot be assumed executable after the full shutdown date.

# 6. Pricing and access

Amazon Lookout for Metrics is discontinued and fully shut down. No current deployment, pricing, free tier or account-access assumption is valid.

# 7. API and integration surface

- Historical developer guide: https://docs.aws.amazon.com/lookoutmetrics/latest/dev/
- Historical AWS CLI namespace: `aws lookoutmetrics`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/lookoutmetrics/
- Full-shutdown notice: https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html
- Historical API, connector and alert behavior requires REA capture only as a discontinued reference.

# 8. Existing open-source alternatives

Potentially relevant alternatives include Grafana/Prometheus alerting, OpenSearch anomaly detection, River, Merlion, Kats, PyOD, ADTK and Apache Flink CEP. These cover subsets of metrics monitoring, anomaly detection or stream processing; no equivalence is claimed.

# 9. Alternative comparison

Open-source monitoring and time-series systems can reproduce portions of metric ingestion, detection and alerting, but the historical managed detector, root-cause workflow, connectors and AWS API lifecycle require separate reconstruction.

# 10. Missing capabilities and opportunity analysis

Historical REA should map metric-set schemas, source connectors, detector training, activation, anomaly and root-cause result schemas, alerts, backtesting, APIs, quotas, Regions and retirement behavior.

# 11. RAE implementation strategy

Use archived official documentation and the full-shutdown notice as research surfaces. Any replacement should use independently licensed monitoring and anomaly-detection components, document differences and not imply compatibility with a service AWS no longer operates.

# 12. Security, privacy, and compliance

Historical analysis should verify data-source credentials, metric privacy, encryption, IAM, alert destinations, retention, deletion, cross-account access and service-retirement effects.

# 13. Evidence register

- https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html — official full-shutdown status and date.
- https://docs.aws.amazon.com/lookoutmetrics/latest/dev/ — historical service documentation.
- https://docs.aws.amazon.com/cli/latest/reference/lookoutmetrics/ — historical CLI surface.
- https://aws.amazon.com/lookout-for-metrics/ — historical product context.

# 14. Unknowns

- Exact post-shutdown data/export behavior for former customers.
- Complete historical API, connector, detector and quota matrix.
- AWS-recommended replacement capabilities and migration tooling.
- Verified open-source alternatives for the complete historical workflow.

# 15. Research status

`retired`: product identity and historical scope are documented; AWS fully shut down the service on October 10, 2025, so no active implementation or deployment is claimed.
