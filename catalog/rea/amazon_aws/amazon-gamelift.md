# REA web-surface report — Amazon GameLift (`amazon-gamelift`)

Browser capture of the public web surface of Amazon GameLift, recorded with REA.

| | |
|---|---|
| Product | Amazon GameLift (`amazon-gamelift`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/gamelift/ |
| Resolved URL | https://aws.amazon.com/gamelift/ |
| Page title | Amazon GameLift |
| Captured | 2026-11-03T03:12:06.186Z |
| Status | captured |
| REA Evidence ID | `ev_90cc264ed116f389c4ed9b3eba18c7fd9afa7af16eaaf4fbf06dab756e3e3f6e` |
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
    "url": "https://aws.amazon.com/gamelift/"
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

- Amazon GameLift
- A fully managed service with game streaming and multiplayer game server capabilities
- Performance
- 0 million
- 0 thousand
- 0
- Capabilities
- Amazon GameLift Servers
- Amazon GameLift Streams
- How game developers can use Amazon GameLift
- Game server hosting with autoscaling
- Flexible matchmaking
- Create your own distribution channels to acquire new players
- Breathe new life into back catalogs
- Create on-demand game demos
- Customer stories
- Delivering Immersive Training with Syneos Health Using Amazon GameLift Streams
- Apex Legends migrates to Amazon GameLift Servers in just 10 days
- Behaviour Interactive supports 50 million Dead by Daylight players using Amazon GameLift Servers
- Game streaming unlocks new opportunities for Jackbox Games
- Get started with Amazon GameLift
- Learn more about Amazon GameLift Servers
- Learn about Amazon GameLift Streams
- Learn
- Resources

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
- [Overview](/gamelift/)
- [Amazon GameLift Streams](/gamelift/streams/)
- [Amazon GameLift Servers](/gamelift/servers/)
- [Products](/products/)
- [Games](/gametech/)
- [Check out the blog post](/blogs/gametech/amazon-gamelift-achieves-100-million-concurrently-connected-users-per-game/)
- [Amazon GameLift Streams features](/gamelift/streams/features/)
- [Learn more](/gamelift/servers/)
- [Learn more](/gamelift/streams/)
- [Delivering Immersive Training with Syneos Health Using Amazon GameLift Streams Learn more](https://aws.amazon.com/solutions/case-studies/syneos-health-case-study/)
- [Apex Legends migrates to Amazon GameLift Servers in just 10 days Learn more](https://aws.amazon.com/blogs/gametech/apex-legends-migrates-to-amazon-gamelift-servers-in-just-10-days)
- [Behaviour Interactive supports 50 million Dead by Daylight players using Amazon GameLift Servers Dead by Deadlight case study](https://aws.amazon.com/solutions/case-studies/behaviour-interactive-case-study/)
- [Missing alt text value Game streaming unlocks new opportunities for Jackbox Games Learn more](https://aws.amazon.com/blogs/gametech/jackbox-games-unlocks-new-opportunities-with-amazon-gamelift-streams/)
- [Learn more about Amazon GameLift Servers Learn about Amazon GameLift Servers](/gamelift/servers/)
- [Learn about Amazon GameLift Streams Learn about Amazon GameLift Streams](/gamelift/streams/)
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
- [AWS Partners](/partners/work-with-partners/?nc1=f_dr)
- [Builder Center](https://builder.aws.com/?nc1=f_dr)
- [SDKs & Tools](https://builder.aws.com/build/tools?nc1=f_dr)

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
- button: Amazon GameLift Servers
- button: Amazon GameLift Streams
- button: Game server hosting with autoscaling
- button: Flexible matchmaking
- button: Create your own distribution channels to acquire new players
- button: Breathe new life into back catalogs
- button: Create on-demand game demos
- button: Create an AWS account

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-gamelift.json`
- Evidence ID: `ev_90cc264ed116f389c4ed9b3eba18c7fd9afa7af16eaaf4fbf06dab756e3e3f6e`
- Accessibility outline: 13741 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
