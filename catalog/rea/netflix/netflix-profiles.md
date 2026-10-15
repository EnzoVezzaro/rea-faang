# REA web-surface report — Netflix Profiles (`netflix-profiles`)

Browser capture of the public web surface of Netflix Profiles, recorded with REA.

| | |
|---|---|
| Product | Netflix Profiles (`netflix-profiles`) |
| Company | Netflix |
| Target | https://www.netflix.com/ |
| Resolved URL | https://www.netflix.com/ |
| Page title | Unlimited movies, TV shows, and more |
| Captured | 2026-10-14T03:56:34.550Z |
| Status | captured |
| REA Evidence ID | `ev_211ae07e54ed49ef0dbb8490ebdb8130b1ff55a7263f6e28344e9203ab1431f6` |
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
    "url": "https://www.netflix.com/"
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

- Unlimited movies, TV shows, and more
- Ready to watch? Enter your email to create or restart your membership.
- The Netflix you love for just $8.99.
- Trending Now
- More Reasons to Join
- Enjoy on your TV
- Download your shows to watch offline
- Watch everywhere
- Create profiles for kids
- Frequently Asked Questions
- What is Netflix?
- How much does Netflix cost?
- Where can I watch?
- How do I cancel?
- What can I watch on Netflix?
- Is Netflix good for kids?

### Landmarks

- banner
- form: Sign up or restart your membership with Netflix.
- form: Sign up or restart your membership with Netflix.
- contentinfo

### Links

- [Sign In](/login)
- [1-844-569-7700](tel:1-844-569-7700)
- [FAQ](https://help.netflix.com/support/412)
- [Help Center](https://help.netflix.com)
- [Account](/youraccount)
- [Netflix House](https://www.netflixhouse.com/)
- [Media Center](https://media.netflix.com/)
- [Investor Relations](http://ir.netflix.com/)
- [Jobs](https://jobs.netflix.com/jobs)
- [Netflix Shop](https://netflix.shop/)
- [Redeem Gift Cards](/redeem)
- [Buy Gift Cards](/gift-cards)
- [Ways to Watch](/watch)
- [Terms of Use](https://help.netflix.com/legal/termsofuse)
- [Privacy](https://help.netflix.com/legal/privacy)
- [Cookie Preferences](#)
- [Corporate Information](https://help.netflix.com/legal/corpinfo)
- [Contact Us](https://help.netflix.com/contactus)
- [Speed Test](https://fast.com)
- [Legal Notices](https://help.netflix.com/legal/notices)
- [Only on Netflix](https://www.netflix.com/browse/genre/839338)
- [Do Not Sell or Share My Personal Information](https://www.netflix.com/dnsspi)
- [Ad Choices](https://netflix.com/adchoices-us)

### Controls

- button: Get Started
- button: Learn More
- button: Doing Life 1
- button: Animals 2
- button: Why Did I Get Married Again? 3
- button: A Different World 4
- button: Love Is Blind 5
- button: Below 6
- button: Beauty in Black 8
- button: East of Eden 9
- button: What is Netflix?
- button: How much does Netflix cost?
- button: Where can I watch?
- button: How do I cancel?
- button: What can I watch on Netflix?
- button: Is Netflix good for kids?

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

- Raw REA Evidence: `catalog/rea/evidence/netflix-profiles.json`
- Evidence ID: `ev_211ae07e54ed49ef0dbb8490ebdb8130b1ff55a7263f6e28344e9203ab1431f6`
- Accessibility outline: 5262 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
