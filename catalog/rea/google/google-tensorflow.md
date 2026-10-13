# REA web-surface report — TensorFlow (`google-tensorflow`)

Browser capture of the public web surface of TensorFlow, recorded with REA.

| | |
|---|---|
| Product | TensorFlow (`google-tensorflow`) |
| Company | Google |
| Target | https://www.tensorflow.org/ |
| Resolved URL | https://www.tensorflow.org/ |
| Page title | Get started with TensorFlow |
| Captured | 2026-10-13T19:00:02.321Z |
| Status | captured |
| REA Evidence ID | `ev_89d56862ca92b9ac467b7c5235a7c4ad9fef34cfe7fc1b3c37c5ca068fb948d5` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.40 |
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
    "url": "https://www.tensorflow.org/"
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

- Get started with TensorFlow
- Solve real-world problems with ML
- What's new in TensorFlow
- What's new in TensorFlow 2.20
- What's new in TensorFlow 2.19
- Explore the ecosystem
- TensorFlow.js
- LiteRT
- tf.data
- TFX
- tf.keras
- Kaggle Models
- TensorFlow Datasets
- TensorBoard
- ML models & datasets
- Libraries & extensions
- Developer tools
- Stay connected
- Start building with TensorFlow
- Support

### Landmarks

- banner
- navigation: Upper tabs
- main
- navigation: On this page
- navigation
- navigation: Footer links
- navigation: Utility links

### Links

- [Skip to main content](#main-content)
- [TensorFlow](/)
- [Install](https://www.tensorflow.org/install)
- [Learn](https://www.tensorflow.org/learn)
- [API](https://www.tensorflow.org/api)
- [Ecosystem](https://www.tensorflow.org/resources/models-datasets)
- [GitHub](//github.com/tensorflow)
- [Sign in](https://www.tensorflow.org/_d/signin?continue=https%3A%2F%2Fwww.tensorflow.org%2F&prompt=select_account)
- [Install TensorFlow](/install)
- [View tutorials](/tutorials)
- [Run quickstart](https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/quickstart/beginner.ipynb)
- [Watch now](https://www.youtube.com/watch?v=tF70o1Q8VkM&list=PLNYkxOF6rcIAEVKJ98bDkQRkwvO4grhnt)
- [Analyze relational data using graph neural networks](https://blog.tensorflow.org/2024/02/graph-neural-networks-in-tensorflow.html)
- [Learn about TF GNN](https://blog.tensorflow.org/2024/02/graph-neural-networks-in-tensorflow.html)
- [Build recommendation systems with reinforcement learning](https://blog.tensorflow.org/2023/10/simulated-spotify-listening-experiences-reinforcement-learning-tensorflow-tf-agents.html)
- [Read the blog](https://blog.tensorflow.org/2023/10/simulated-spotify-listening-experiences-reinforcement-learning-tensorflow-tf-agents.html)
- [TensorFlow Blog - What's new in TensorFlow 2.20](https://blog.tensorflow.org/2025/08/whats-new-in-tensorflow-2-20.html)
- [TensorFlow Blog - What's new in TensorFlow 2.19](https://blog.tensorflow.org/2025/03/whats-new-in-tensorflow-2-19.html)
- [Library TensorFlow.js Train and run models directly in the browser using JavaScript or Node.js.](/js)
- [Library LiteRT Deploy ML on mobile and edge devices such as Android, iOS, Raspberry Pi, and Edge TPU.](https://ai.google.dev/edge/litert)
- [API tf.data Preprocess data and create input pipelines for ML models.](/guide/data)
- [Library TFX Create production ML pipelines and implement MLOps best practices.](/tfx)
- [API tf.keras Create ML models with TensorFlow's high-level API.](/guide/keras)
- [Resource Kaggle Models Find pre-trained models ready for fine-tuning and deployment.](https://www.kaggle.com/models)
- [Resource TensorFlow Datasets Browse the collection of standard datasets for initial training and validation.](/datasets)
- [Tool TensorBoard Visualize and track development of ML models.](/tensorboard)
- [ML models & datasets Pretrained models and ready-to-use datasets for image, text, audio, and video use cases.](/resources/models-datasets)
- [Libraries & extensions Packages for domain-specific applications and APIs for languages other than Python.](/resources/libraries-extensions)
- [Developer tools Tools to evaluate models, optimize performance, and productionize ML workflows.](/resources/tools)
- [Get involved](/community)
- [Explore resources](/resources/learn-ml)
- [archive](/subscribe/latest)
- [forum logo Forum](https://discuss.tensorflow.org/)
- [x logo X](https://twitter.com/tensorflow)
- [youtube logo YouTube](https://www.youtube.com/tensorflow)
- [linkedin logo Linkedin](https://www.linkedin.com/showcase/tensorflowdev/)
- [Explore tutorials](/tutorials)
- [Blog](//blog.tensorflow.org)
- [Forum](//discuss.tensorflow.org)
- [GitHub](//github.com/tensorflow/)

### Controls

- button: Dropdown menu for Learn
- button: Dropdown menu for API
- button: Dropdown menu for Ecosystem
- button: Dropdown menu for Extended Navigation
- button: Language
- button: Dark code theme
- button: Copy code sample
- button: Watch now
- button: More
- button: Previous slide
- button: Next slide

## Limitations (from REA)

- Artifact identity is unavailable for this observation.
- Event sequence records provider receipt order; simultaneous browser causality is not inferred.
- Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/google-tensorflow.json`
- Evidence ID: `ev_89d56862ca92b9ac467b7c5235a7c4ad9fef34cfe7fc1b3c37c5ca068fb948d5`
- Accessibility outline: 11896 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
