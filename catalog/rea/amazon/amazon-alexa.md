# REA web-surface report — Alexa (`amazon-alexa`)

Browser capture of the public web surface of Alexa, recorded with REA.

| | |
|---|---|
| Product | Alexa (`amazon-alexa`) |
| Company | Amazon |
| Target | https://developer.amazon.com/alexa |
| Resolved URL | https://developer.amazon.com/en-US/alexa |
| Page title | AI-native SDKs for Alexa+ |
| Captured | 2026-10-14T03:56:14.783Z |
| Status | captured |
| REA Evidence ID | `ev_922364d49ab497db2c4f2b923751153eee4e47281f3e3f25330c3c2bbbcc19d6` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.79 |
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
    "url": "https://developer.amazon.com/alexa"
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

- AI-native SDKs for Alexa+
- Helps your customers get things done.
- What Is Alexa?
- What Can You Build with Alexa?
- Create Alexa Skills
- Build Alexa Devices
- Develop Enterprise Solutions
- Alexa Skills Kit
- ASK Resources
- Device Makers
- Alexa Built-in Devices
- Alexa Connected Devices
- Solution Providers
- Agreements
- Community
- Blogs
- Support

### Landmarks

- banner
- navigation
- banner
- navigation
- contentinfo
- navigation
- contentinfo

### Links

- [Alexa Developer Console](/alexa)
- [Sign In](https://developer.amazon.com/alexa/console/signin)
- [](#)
- [Skill Builders](/en-US/alexa/alexa-skills-kit)
- [Alexa Skills Kit](/en-US/alexa/alexa-skills-kit)
- [Documentation](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/what-is-the-alexa-skills-kit.html)
- [Developer Console](https://developer.amazon.com/alexa/console/ask)
- [Skill Agencies](https://developer.amazon.com/en-US/alexa/skill-building-agencies)
- [Device Makers](/en-US/alexa/devices)
- [Overview](https://developer.amazon.com/alexa/devices/alexa-built-in)
- [Overview](https://developer.amazon.com/alexa/devices/connected-devices)
- [Development Resources](https://developer.amazon.com/alexa/devices/connected-devices/development-resources)
- [Business Resources](https://developer.amazon.com/alexa/devices/connected-devices/business-resources)
- [What's New](https://developer.amazon.com/alexa/devices/connected-devices/whats-new)
- [Consoles](https://developer.amazon.com/alexa/devices/connected-devices/consoles)
- [Alexa Connect Kit](/en-US/alexa/solution-providers/alexa-connect-kit)
- [Alexa Routines Kit](https://developer.amazon.com/en-US/alexa/alexa-routines-kit/)
- [Radio Skills Kit](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/radio-skills-kit)
- [Alexa Built-In](https://developer.amazon.com/alexa/devices/alexa-built-in)
- [Alexa Smart Home](https://developer.amazon.com/en-US/alexa/smarthomeinsider)
- [Dash Services](https://developer.amazon.com/en-US/alexa/dash-services)
- [Hospitality](https://alexa.design/hospitality)
- [Senior Living](https://developer.amazon.com/en-US/alexa/seniorliving)
- [Echo Branding](https://developer.amazon.com/en-US/alexa/branding/echo-guidelines)
- [Alexa Branding](https://developer.amazon.com/en-US/alexa/branding/alexa-guidelines)
- [Alexa Fund](https://developer.amazon.com/alexa/alexa-startups/alexa-fund)
- [Alexa Champions](https://developer.amazon.com/alexa/champions)
- [Voice Interoperability Initiative](https://developer.amazon.com/en-US/alexa/voice-interoperability)
- [Docs](https://developer.amazon.com/en-US/docs/alexa/documentation-home.html)
- [Alexa Skills Kit](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/what-is-the-alexa-skills-kit.html)
- [Smart Home Skills](https://developer.amazon.com/docs/smarthome/understand-the-smart-home-skill-api.html)
- [ASK CLI and SMAPI](https://developer.amazon.com/docs/smapi/ask-cli-intro.html)
- [Alexa Connect Kit](https://developer.amazon.com/docs/alexa/ack/overview.html)
- [Hospitality](https://developer.amazon.com/en-US/docs/alexa/alexa-smart-properties/about-alexa-for-hospitality.html)
- [Senior Living](https://developer.amazon.com/en-US/docs/alexa/alexa-smart-properties/about-asp-in-senior-living.html)
- [Alexa Trainings and Workshops](https://developer.amazon.com/en-US/alexa/trainings_and_workshops)
- [Matter](https://developer.amazon.com/en-US/docs/alexa/smarthome/matter-support.html)
- [Blog](https://developer.amazon.com/en-US/blogs/alexa)
- [Alexa Skills Kit](https://developer.amazon.com/en-US/blogs/alexa/alexa-skills-kit)
- [Device Makers](https://developer.amazon.com/en-US/blogs/alexa/device-makers)

### Controls

- button: All Search
- button: AI Mode
- button: Create Alexa Skills
- button: Build Alexa Devices
- button: Engage Solution Providers
- button: Develop Enterprise Solutions
- button: English (US)

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-alexa.json`
- Evidence ID: `ev_922364d49ab497db2c4f2b923751153eee4e47281f3e3f25330c3c2bbbcc19d6`
- Accessibility outline: 16959 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
