# REA web-surface report — Amazon Augmented AI (`amazon-augmented-ai`)

Browser capture of the public web surface of Amazon Augmented AI, recorded with REA.

| | |
|---|---|
| Product | Amazon Augmented AI (`amazon-augmented-ai`) |
| Company | Amazon Web Services |
| Target | https://docs.aws.amazon.com/augmented-ai/ |
| Resolved URL | https://docs.aws.amazon.com/augmented-ai/ |
| Page title | Amazon Augmented AI |
| Captured | 2026-11-03T01:56:43.352Z |
| Status | captured |
| REA Evidence ID | `ev_0c331d3fc6b7110c2143695bbb64cece5a4208375c055ac74057b5f24cb4f882` |
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
    "url": "https://docs.aws.amazon.com/augmented-ai/"
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

- Amazon Augmented AI
- Developer Guide
- API Reference
- Amazon A2I Runtime Model
- Tutorials and Samples
- Using Amazon A2I with Amazon Textract
- Reviewing Unsafe Content with Amazon A2I Using Amazon Rekognition
- Crowd HTML Elements Reference
- Sample Task User Interfaces (UIs) Opens in a new tab
- Jupyter Notebook Demos Opens in a new tab
- On this page
- Get Started
- Service Guides
- Developer Tools
- Helpful Links

### Landmarks

- banner: AWS Documentation site header
- main
- region: Developer Guide
- region: API Reference
- region: Tutorials and Samples
- complementary: Help panel
- contentinfo

### Links

- [Skip to main content](#skip-link)
- [preferences](#)
- [Contact Us](https://aws.amazon.com/contact-us/?cmpid=docs_headercta_contactus)
- [AWS Documentation](https://docs.aws.amazon.com)
- [Get started](#)
- [Service guides](#)
- [Developer tools](#)
- [AI resources](#)
- [Create an AWS Account](https://portal.aws.amazon.com)
- [Developer Guide](https://docs.aws.amazon.com/sagemaker/latest/dg/use-augmented-ai-a2i-human-review-loops.html?icmpid=docs_a2i_lp)
- [Developer Guide HTML](https://docs.aws.amazon.com/sagemaker/latest/dg/use-augmented-ai-a2i-human-review-loops.html?icmpid=docs_a2i_lp)
- [Developer Guide PDF](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-dg.pdf#use-augmented-ai-a2i-human-review-loops?icmpid=docs_a2i_lp)
- [Amazon A2I Runtime Model](/augmented-ai/2019-11-07/APIReference/Welcome.html?icmpid=docs_a2i_lp/index.html)
- [Amazon A2I Runtime Model HTML](/augmented-ai/2019-11-07/APIReference/Welcome.html?icmpid=docs_a2i_lp/index.html)
- [Using Amazon A2I with Amazon Textract](https://docs.aws.amazon.com/textract/latest/dg/a2i-textract.html?icmpid=docs_a2i_lp)
- [Using Amazon A2I with Amazon Textract HTML](https://docs.aws.amazon.com/textract/latest/dg/a2i-textract.html?icmpid=docs_a2i_lp)
- [Using Amazon A2I with Amazon Textract PDF](https://docs.aws.amazon.com/textract/latest/dg/textract-dg.pdf#a2i-textract?icmpid=docs_a2i_lp)
- [Reviewing Unsafe Content with Amazon A2I Using Amazon Rekognition](https://docs.aws.amazon.com/rekognition/latest/dg/a2i-rekognition.html?icmpid=docs_a2i_lp)
- [Reviewing Unsafe Content with Amazon A2I Using Amazon Rekognition HTML](https://docs.aws.amazon.com/rekognition/latest/dg/a2i-rekognition.html?icmpid=docs_a2i_lp)
- [Reviewing Unsafe Content with Amazon A2I Using Amazon Rekognition PDF](https://docs.aws.amazon.com/rekognition/latest/dg/rekognition-dg.pdf#a2i-rekognition?icmpid=docs_a2i_lp)
- [Crowd HTML Elements Reference](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-ui-template-reference.html?icmpid=docs_a2i_lp)
- [Crowd HTML Elements Reference HTML](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-ui-template-reference.html?icmpid=docs_a2i_lp)
- [Crowd HTML Elements Reference PDF](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-dg.pdf#sms-ui-template-reference?icmpid=docs_a2i_lp)
- [Sample Task User Interfaces (UIs) Opens in a new tab](https://github.com/aws-samples/amazon-a2i-sample-task-uis?icmpid=docs_a2i_lp)
- [Sample Task User Interfaces (UIs) GitHub](https://github.com/aws-samples/amazon-a2i-sample-task-uis?icmpid=docs_a2i_lp)
- [Jupyter Notebook Demos Opens in a new tab](https://github.com/aws-samples/amazon-a2i-sample-jupyter-notebooks?icmpid=docs_a2i_lp)
- [Jupyter Notebook Demos GitHub](https://github.com/aws-samples/amazon-a2i-sample-jupyter-notebooks?icmpid=docs_a2i_lp)
- [Developer Guide](#developer-guide)
- [API Reference](#api-reference)
- [Tutorials and Samples](#tutorials-and-samples)
- [AWS Glossary](http://docs.aws.amazon.com/general/latest/gr/glos-chap.html)
- [Getting Started with AWS Opens in a new tab](https://aws.amazon.com/documentation/gettingstarted/)
- [SDKs & Tools Opens in a new tab](https://aws.amazon.com/tools/)
- [AWS General Reference](http://docs.aws.amazon.com/general/latest/gr/Welcome.html)
- [AWS Training Opens in a new tab](https://aws.amazon.com/training/)
- [AWS Case Studies Opens in a new tab](https://aws.amazon.com/solutions/case-studies/)
- [AWS Whitepapers Opens in a new tab](https://aws.amazon.com/whitepapers/)
- [AWS Hands-On Tutorials Opens in a new tab](https://aws.amazon.com/getting-started/hands-on/)
- [AWS Solutions Library Opens in a new tab](https://aws.amazon.com/solutions/)
- [AWS Decision Guides](https://docs.aws.amazon.com/decision-guides/)

### Controls

- button: Scroll left
- button: Scroll right
- button: Search
- button: Close help panel
- button: Language selector English
- button: Top

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-augmented-ai.json`
- Evidence ID: `ev_0c331d3fc6b7110c2143695bbb64cece5a4208375c055ac74057b5f24cb4f882`
- Accessibility outline: 11763 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
