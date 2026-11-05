# REA web-surface report — Meta AI (`meta-ai`)

Browser capture of the public web surface of Meta AI, recorded with REA.

| | |
|---|---|
| Product | Meta AI (`meta-ai`) |
| Company | Meta |
| Target | https://www.meta.ai/ |
| Resolved URL | https://www.meta.ai/ |
| Page title | Meta AI, the personal assistant that helps you shop, finds places nearby, researches any topic, helps grow your business, and creates and edits images |
| Captured | 2026-11-04T02:32:01.127Z |
| Status | captured |
| REA Evidence ID | `ev_e9e738b3e930e4ba3984658a00179b0ebb6a2df296b9370dc3d04098f46b88f8` |
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
    "url": "https://www.meta.ai/"
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

- Meta AI, the personal assistant that helps you shop, finds places nearby, researches any topic, helps grow your business, and creates and edits images
- Describe the image you want
- Edit photos with ease
- Discover and shop products that match your style
- Find the best spots around you
- Go deeper with research
- Stay connected to your business
- Write the caption, plan the post
- Ready to try Meta AI?

### Landmarks

- navigation: Sidebar
- main
- navigation: Meta AI products
- region: Notifications alt+T

### Links

- [Muse](https://muse.ai/)
- [AI Learning Hub](https://meta.ai/learn/)

### Controls

- button: Open sidebar
- button: Download app
- button: Log in
- button: Add attachment
- button: Send
- button: Learn more
- button: Create images
- button: Edit a photo
- button: Shop with Meta AI
- button: Get local recommendations
- button: Start deep research
- button: Get help with your business
- button: Ask Meta AI
- button: Vibes

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

- Raw REA Evidence: `catalog/rea/evidence/meta-ai.json`
- Evidence ID: `ev_e9e738b3e930e4ba3984658a00179b0ebb6a2df296b9370dc3d04098f46b88f8`
- Accessibility outline: 5376 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
