---
schema_version: "1.0"
id: "amazon-kinesis-video-streams"
company_id: "amazon_aws"
name: "Amazon Kinesis Video Streams"
aliases:
  - "Kinesis Video Streams"
  - "Amazon KVS"
  - "Kinesis Video Streams with WebRTC"
product_type: "media_streaming"
categories:
  - "video-ingestion"
  - "video-storage"
  - "computer-vision"
  - "webrtc"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/kinesis/video-streams/"
official_docs_url: "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/"
official_source_urls:
  - "https://aws.amazon.com/kinesis/video-streams/"
  - "https://aws.amazon.com/documentation-overview/kinesis-video-streams/"
  - "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/"
  - "https://docs.aws.amazon.com/kinesisvideostreams/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/kinesisvideo/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon Kinesis Video Streams is AWS's managed service for ingesting, processing and storing live video and other time-encoded data from connected devices. It supports live and archived playback, frame-level APIs, WebRTC two-way media, indexing and integrations for computer vision and machine learning.

# 2. Product identity and ownership

- **Official name:** Amazon Kinesis Video Streams
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/kinesis/video-streams/

# 3. Product capabilities

- Ingest video, audio, images, RADAR, depth and other time-encoded data.
- Use C++/Java producer SDKs, GStreamer and connected-device integrations.
- Store and time-index fragments with configurable retention.
- Play streams through HLS or consume media frame by frame.
- Support WebRTC peer-to-peer/two-way media and cloud forwarding.
- Integrate with Rekognition Video and custom ML/analytics applications.

# 4. Technical architecture

The public surface includes streams, producers, fragments, media APIs, archived/live playback, HLS, WebRTC signaling/turn/stages, tags, timestamps, retention, parser libraries, edge recording and KMS/IAM controls. This entry is separate from Kinesis Data Streams and Amazon IVS.

# 5. User workflows

Users create a video stream, configure a camera/device producer, publish media through an SDK or GStreamer, store and index fragments, consume live or archived playback, extract frames/metadata, and optionally connect WebRTC or Rekognition. Edge recording can upload scheduled media from on-premises cameras.

# 6. Pricing and access

Kinesis Video Streams is an AWS pay-as-you-go service. Costs depend on ingest, storage/retention, playback, WebRTC signaling/turn, edge and data transfer usage. Current pricing, quotas and Region support require verification from official pricing documentation.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/
- WebRTC developer guide: https://docs.aws.amazon.com/kinesisvideostreams-webrtc-sdk/latest/devguide/
- API reference: https://docs.aws.amazon.com/kinesisvideostreams/latest/APIReference/
- AWS CLI namespace: `aws kinesisvideo`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/kinesisvideo/
- Integrations include S3, Rekognition Video, KMS, IAM, CloudWatch, WebRTC SDKs, GStreamer and ML applications.
- Exact codec, signaling, playback, fragment, quota and retention behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include WebRTC, Janus, LiveKit, MediaMTX, GStreamer, SRS, OvenMediaEngine, Shinobi and Frigate. These cover different device ingestion, WebRTC, media storage or computer-vision surfaces and are not claimed equivalents to the managed AWS service.

# 9. Alternative comparison

Open-source media stacks can provide RTSP/RTMP/WebRTC ingestion and playback, but a clean-room equivalent would still need to combine device SDKs, durable time-indexed storage, HLS, frame APIs, WebRTC cloud forwarding, retention, encryption and ML integrations.

# 10. Missing capabilities and opportunity analysis

REA should map producer SDKs, codecs, fragment/container behavior, timestamp/index semantics, retention, HLS playback, GetMedia/archived APIs, WebRTC signaling and cloud forwarding, edge recording, tags, IAM/KMS, quotas and failure recovery.

# 11. REA implementation strategy

Use the official Kinesis Video Streams product page, developer guide, WebRTC guide, API reference and CLI reference as research surfaces. A clean-room implementation should compose independently licensed media components, document codec and latency differences, and avoid copying AWS device SDK or control-plane internals.

# 12. Security, privacy, and compliance

Research must verify device credentials, stream-key handling, TLS, KMS encryption, IAM, WebRTC signaling/turn access, retention/deletion, camera privacy, data residency and Rekognition data flows.

# 13. Evidence register

- https://aws.amazon.com/kinesis/video-streams/ — official product scope.
- https://aws.amazon.com/documentation-overview/kinesis-video-streams/ — official video, storage, playback and WebRTC overview.
- https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/ — official developer guide.
- https://docs.aws.amazon.com/kinesisvideostreams/latest/APIReference/ — official API surface.
- https://docs.aws.amazon.com/cli/latest/reference/kinesisvideo/ — official CLI surface.

# 14. Unknowns

- Complete codec, device SDK, HLS, WebRTC and frame API matrix.
- Exact retention, indexing, playback, cloud-forwarding and edge-recording semantics.
- Current quotas, Regions, pricing and failure-recovery behavior.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, media semantics, alternatives and acceptance review remain outstanding.
