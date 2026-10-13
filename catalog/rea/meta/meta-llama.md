# REA web-surface report — Llama (`meta-llama`)

Browser capture of the public web surface of Llama, recorded with REA.

| | |
|---|---|
| Product | Llama (`meta-llama`) |
| Company | Meta |
| Target | https://ai.meta.com/llama/ |
| Resolved URL | https://dev.meta.ai/ |
| Page title | Your next build starts with Muse. |
| Captured | 2026-10-13T19:00:17.972Z |
| Status | captured |
| REA Evidence ID | `ev_9d8633a6f9d6448fca6021be8dc9031511434605e44963851a584f203820d57e` |
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
    "url": "https://ai.meta.com/llama/"
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

- Your next build starts with Muse.
- Muse Code
- Recent models
- Muse Wonder
- Muse Wonder Full
- Muse Spark 1.3
- SAM 3.1
- Muse Voice Transcribe
- Muse Image
- Muse Glimmer
- Muse Spark 1.2
- Muse Spark 1.1
- Meet Muse Wonder and Muse Wonder Full
- More ways to build.
- Cookbooks and quickstarts
- Latest updates
- Be the first to know

### Landmarks

- navigation: Marketing navigation
- main
- region: Available models
- navigation: Tabs
- contentinfo
- region: Notifications

### Links

- [Apply Now](https://cerebralvalley.ai/e/meta-ai-developer-hackathon)
- [Meta home](/)
- [Documentation](/docs)
- [Contact Sales](/contact-sales?referrer_path=%2F)
- [Login](/api/auth/login)
- [Skip to content](#astryx-app-shell-main)
- [Start building](/api/auth/login)
- [Contact sales](/contact-sales?referrer_path=%2F)
- [Sign in to open the chat playground](/api/auth/login?next=%2Fplayground%3Fmodel_id%3Dmuse-wonder-1.0)
- [Learn more about Muse Wonder Full (opens in new tab)](https://dev.meta.ai/models/muse-wonder)
- [Sign in to use Muse Spark 1.3 in Playground](/api/auth/login?next=%2Fplayground%3Fmodel_id%3Dmuse-spark-1.3-contributor)
- [Sign in to use SAM 3.1 in Playground](/api/auth/login?next=%2Fplayground%2Fsegmentation%3Fmodel_id%3Dsam-3.1)
- [Sign in to use Muse Voice Transcribe in Playground](/api/auth/login?next=%2Fplayground%2Faudio%3Fmodel_id%3Dmuse-voice-transcribe-1.0)
- [Sign in to use Muse Image in Playground](/api/auth/login?next=%2Fplayground%2Fimage%3Fmodel_id%3Dmuse-image-1.0)
- [Learn more about Muse Glimmer (opens in new tab)](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)
- [Sign in to use Muse Spark 1.2 in Playground](/api/auth/login?next=%2Fplayground%3Fmodel_id%3Dmuse-spark-1.2)
- [Sign in to use Muse Spark 1.1 in Playground](/api/auth/login?next=%2Fplayground%3Fmodel_id%3Dmuse-spark-1.1)
- [Muse Code Multi-agent coding in your terminal. Built for Muse Wonder and Muse Spark. Start building](/products/muse-code/)
- [Meta Model API Direct, self-serve and affordable access to Muse models. Start building](/products/meta-model-api/)
- [OpenRouter Swap Muse models into your existing tools and workflows. Start building](https://openrouter.ai/meta/muse-spark-1.2/)
- [Read documentation](https://dev.meta.ai/docs/)
- [Quick start Your first working request in under five minutes. Point your existing OpenAI SDK compatible client at Meta Model API. Learn more](https://dev.meta.ai/docs/cookbook#api-fundamentals)
- [Multi-agent orchestration Stand up a four profile agentic team that turns a one line product idea into a working SaaS app. Learn more](https://dev.meta.ai/docs/cookbook/multi-agent-orchestration)
- [Agent fan-out Spin multiple subagents into isolated worktrees to tackle parallel work without mid-flight collisions. Learn more](http://dev.meta.ai/docs/cookbook/subagent-fanout)
- [Computer use Give Muse Wonder eyes and a pair of hands and it can build software the way you do. Learn more](https://dev.meta.ai/docs/cookbook/computer-use)
- [GitHub agent Build an autonomous GitHub bot on Meta Model API with Muse Wonder and OpenCode. Learn more](https://dev.meta.ai/docs/cookbook/github-agent)
- [Search grounding Give your model live access to the web. Add a single tool to your request to get real time information. Learn more](https://dev.meta.ai/docs/cookbook/search-grounding)
- [Read more](/resources/blog/muse-code-new-plans-and-features)
- [Read more](/resources/blog/build-with-muse-Image)
- [Read more](/resources/blog/build-with-muse-glimmer)
- [Subscribe](/subscribe)
- [post image](https://www.facebook.com/AIatMeta/)
- [post image](https://twitter.com/aiatmeta/)
- [post image](https://www.youtube.com/@aiatmeta)
- [post image](https://www.linkedin.com/showcase/aiatmeta)
- [Muse Code](/products/muse-code/)
- [Meta Model API](/products/meta-model-api/)
- [Meta AI Connectors](/products/connectors/)
- [Muse Connectors](https://muse.ai/platform)
- [Muse Wonder](/models/muse-wonder/)

### Controls

- button: Products
- button: Models
- button: Resources
- button: Community
- button: Copy install command
- button: Show previous models
- button: Show more models
- button: Marathon planning
- button: Game dev
- button: Wedding seating
- button: Coding at the frontier
- button: Long-running agents
- button: Advanced computer use
- button: Active memory
- button: Muse Wonder Full

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

- Raw REA Evidence: `catalog/rea/evidence/meta-llama.json`
- Evidence ID: `ev_9d8633a6f9d6448fca6021be8dc9031511434605e44963851a584f203820d57e`
- Accessibility outline: 12329 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
