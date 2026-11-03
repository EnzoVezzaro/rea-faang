# REA web-surface report — Tudum (`netflix-tudum`)

Browser capture of the public web surface of Tudum, recorded with REA.

| | |
|---|---|
| Product | Tudum (`netflix-tudum`) |
| Company | Netflix |
| Target | https://www.netflix.com/tudum |
| Resolved URL | https://www.netflix.com/tudum |
| Page title | Netflix Tudum - Go behind the streams |
| Captured | 2026-11-03T01:42:38.525Z |
| Status | captured |
| REA Evidence ID | `ev_9de9f82f3c479d1bbf5b4c18c471bf6a2496191fcb8b11470b885e2caf02c18c` |
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
    "url": "https://www.netflix.com/tudum"
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

- Netflix Tudum - Go behind the streams
- Spotlight
- Fan Favorites
- Latest News
- Trending Videos
- Shows
- Explore More

### Landmarks

- banner
- navigation: Main Menu
- main
- navigation: Featured Links
- contentinfo

### Links

- [Skip to main content](#maincontent)
- [Sign In](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fprofiles%2Fchoose%3Fnext%3Dhttps%253A%252F%252Fwww.netflix.com%252Ftudum)
- [Tudum by Netflix - Home](/tudum)
- [Home](/tudum)
- [Top 10](/tudum/top10)
- [Trending](/tudum/topics/trending)
- [What to Watch](/tudum/topics/what-to-watch)
- [Shows](/tudum/topics/tv-shows)
- [Movies](/tudum/topics/movies)
- [Puzzled](/tudum/puzzled)
- [Podcasts](/tudum/podcasts)
- [Shop opens in a new tab](https://netflix.shop)
- [Animals](/tudum/animals)
- [Love Is Blind](/tudum/love-is-blind)
- [Below](/tudum/below)
- [The Diplomat](/tudum/the-diplomat)
- [East of Eden](/tudum/east-of-eden)
- [Nobody Wants This](/tudum/nobody-wants-this)
- [Lupin](/tudum/lupin)
- [The Perfect Lie](/tudum/the-perfect-lie)
- [KPop Demon Hunters](/tudum/kpop-demon-hunters)
- [The Gentlemen](/tudum/the-gentlemen)
- [New on Netflix in November 2026](/tudum/articles/new-on-netflix)
- [La Bola Negra Opens in Theaters Nationwide](/tudum/features/la-bola-negra-theatrical-dates-locations)
- [Learn Every Move with Official KPop Demon Hunters Choreography Videos](/tudum/articles/kpop-demon-hunters-choreography)
- [Love Is Blind’s Rob and Michaella Unpack Their Split and That Mixer ‘Meltdown’](/tudum/articles/love-is-blind-season-11-rob-and-michaella-breakup-interview)
- [See More](/tudum/topics/trending)
- [Our Sticky Love](/tudum/our-sticky-love)
- [Crew Girl](/tudum/crew-girl)
- [Beauty in Black](/tudum/beauty-in-black)
- [Wednesday](/tudum/wednesday)
- [Druski Announces Netflix Partnership, New Comedy Series Collect & Praise](/tudum/articles/druski-netflix-deal-collect-and-praise-series-news)
- [‘Skip Intro’ with Krista Smith](/tudum/skip-intro)
- [The Diplomat Will Return for Season 5](/tudum/articles/the-diplomat-season-5-release-date-cast-news)
- [TYSON FURY Documentary Goes Beyond the Ring Ahead of Joshua Fight](/tudum/articles/tyson-fury-netflix-documentary-release-date-news)
- [See More](/tudum/topics/news)
- [Watch](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fprofiles%2Fchoose%3Fnext%3Dhttps%253A%252F%252Fwww.netflix.com%252Fwatch%252F80996601%253FtrackId%253D263218445%2526trkId%253D263218445%2526src%253Dtudum)
- [Explore](/tudum/love-is-blind)
- [Explore](/tudum/taken-natalee-holloway)
- [Watch](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fprofiles%2Fchoose%3Fnext%3Dhttps%253A%252F%252Fwww.netflix.com%252Fwatch%252F81222923%253FtrackId%253D263218445%2526trkId%253D263218445%2526src%253Dtudum)

### Controls

- button: Next items
- button: My List
- button: Remind Me
- button: Back To Top

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

- Raw REA Evidence: `catalog/rea/evidence/netflix-tudum.json`
- Evidence ID: `ev_9de9f82f3c479d1bbf5b4c18c471bf6a2496191fcb8b11470b885e2caf02c18c`
- Accessibility outline: 33140 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
