# REA web-surface report — Amazon Rekognition (`amazon-rekognition`)

Browser capture of the public web surface of Amazon Rekognition, recorded with REA.

| | |
|---|---|
| Product | Amazon Rekognition (`amazon-rekognition`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/rekognition/ |
| Resolved URL | https://aws.amazon.com/rekognition/ |
| Page title | Amazon Rekognition |
| Captured | 2026-11-03T03:45:19.608Z |
| Status | captured |
| REA Evidence ID | `ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 156.0.8078.80 |
| Confidence | observed |
| Completeness | complete |

## Method

REA's `capture-browser-scenario` provider launched a headless Chrome profile,
navigated to the product's public `official_url`, waited for the page to settle,
and captured the final URL and the accessibility outline. Analysis runs locally;
only publicly reachable pages are observed. No authentication is attempted and no
access control is bypassed.

```json
{
  "browser": {
    "mode": "launch",
    "executable_path": "<chrome>",
    "headless": true
  },
  "start_url": {
    "url": "https://aws.amazon.com/rekognition/"
  },
  "actions": [
    {
      "step_id": "settle",
      "action": "wait_for_timeout",
      "duration_ms": 2500
    }
  ],
  "capture": {
    "at_end": [
      "url",
      "accessibility"
    ]
  }
}
```

## Observations

### Headings

- Amazon Rekognition
- Benefits of Amazon Rekognition
- Quickly add APIs
- Analyze within seconds
- Easily scale
- Why Amazon Rekognition?
- Features
- Face liveness
- Face detection and analysis
- Custom labels
- Text detection
- Face compare and search
- Content moderation
- More features
- Labels
- Celebrity recognition
- Video segment detection
- Use cases
- Detect inappropriate content
- Verify identity online
- Streamline media analysis
- Send connected home smart alerts
- Customers
- Pinterest uses text detection to moderate user-uploaded images
- PBS uses object detection to streamline media content operations

### Landmarks

- navigation: Global navigation
- main
- navigation: Breadcrumb
- contentinfo

### Links

- [Skip to main content link](#aws-page-content-main)
- [Contact us](/contact-us/?nc2=h_ut_cu)
- [AWS Marketplace](/marketplace?nc2=h_utmp)
- [Click here to return to Amazon Web Services homepage](/?nc2=h_home)
- [re:Invent](/events/reinvent/?nc2=h_l1_f)
- [Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)
- [Overview](/rekognition/)
- [Pricing](/rekognition/pricing/)
- [Products](/products/)
- [Artificial Intelligence](/ai/)
- [Learn more](/rekognition/face-liveness/)
- [Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/collections.html?pg=ln&sec=ft)
- [Learn more](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/what-is.html?pg=ln&sec=ft)
- [Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/text-detection.html?pg=ln&sec=ft)
- [Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/faces.html?pg=ln&sec=ft)
- [Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html?pg=ln&sec=ft)
- [Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/labels.html?pg=ln&sec=ft)
- [Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/celebrities.html?pg=ln&sec=ft)
- [Learn more](https://docs.aws.amazon.com/rekognition/latest/dg/segments.html?pg=ln&sec=ft)
- [The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest uses text detection to moderate user-uploaded images Watch the video](https://www.youtube.com/watch?v=jFgtImmEH7w&t=1526s)
- [Missing alt text value PBS uses object detection to streamline media content operations Watch the video](https://www.youtube.com/watch?v=xoFaC_0fLfY&t=563s)
- [Missing alt text value SDG&E uses Amazon Rekognition Custom Labels to detect transformer damage from drone footage Watch the video](https://www.youtube.com/watch?v=L7g0q7Qb4v4&t=1010s)
- [Contact us Learn more about how you can integrate deep learning–based image and video analysis in your applications Connect with an expert](https://pages.awscloud.com/Amazon-Rekognition-Contact-Us-Registration/?pg=ln&sec=hs)
- [Pricing Explore Amazon Rekognition pricing Learn more](/rekognition/pricing/?pg=ln&sec=hs)
- [What Is AWS?](/what-is-aws/?nc1=f_cc)
- [What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)
- [What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)
- [Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)
- [AWS Cloud Security](/security/?nc1=f_cc)
- [What's New](/new/?nc1=f_cc)
- [Blogs](/blogs/?nc1=f_cc)
- [Press Releases](https://press.aboutamazon.com/aws)
- [Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)
- [Getting Started](/getting-started/?nc1=f_cc)
- [Training](/training/?nc1=f_cc)
- [AWS Trust Center](/trust-center/?nc1=f_cc)
- [AWS Solutions Library](/solutions/?nc1=f_cc)
- [Architecture Center](/architecture/?nc1=f_cc)
- [Product and Technical FAQs](/faqs/?nc1=f_dr)
- [Analyst Reports](/resources/analyst-reports/?nc1=f_cc)

### Controls

- button: English
- button: Support
- button: My account
- button: AWS Profile
- button: Discover AWS
- button: Products
- button: Solutions
- button: Pricing
- button: Resources
- button: Toggle search
- button: Create account
- button: Open feedback
- button: Get started with Amazon Rekognition
- button: Quickly add APIs
- button: Analyze within seconds
- button: Easily scale
- button: Play:
- button: Detect inappropriate content
- button: Verify identity online
- button: Streamline media analysis

## Limitations (from REA)

- Artifact identity is unavailable for this observation.
- Event sequence records provider receipt order; simultaneous browser causality is not inferred.
- Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/amazon-rekognition.json`
- Evidence ID: `ev_7d5a666e78a5f5b33449f0ec9a2ac500d1851d6d39a5edd29edd019c16051426`
- Accessibility outline: 14081 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
