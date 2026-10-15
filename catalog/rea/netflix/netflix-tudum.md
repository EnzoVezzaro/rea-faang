# REA web-surface report — Tudum (`netflix-tudum`)

Browser capture of the public web surface of Tudum, recorded with REA.

| | |
|---|---|
| Product | Tudum (`netflix-tudum`) |
| Company | Netflix |
| Target | https://www.netflix.com/tudum |
| Resolved URL | https://www.netflix.com/tudum |
| Page title | Netflix Tudum - Go behind the streams |
| Captured | 2026-10-14T03:56:41.368Z |
| Status | captured |
| REA Evidence ID | `ev_d1f6ebad860cc18df5129b3b4454b109ab6a62fd39f5f7c9a34365a2dceab9d8` |
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
- [East of Eden](/tudum/east-of-eden)
- [Animals](/tudum/animals)
- [UNABOMBER](/tudum/unabomber)
- [Below](/tudum/below)
- [The Perfect Lie](/tudum/the-perfect-lie)
- [The Gentlemen](/tudum/the-gentlemen)
- [The Whisper Man](/tudum/the-whisper-man)
- [Wonka's The Golden Ticket](/tudum/wonkas-the-golden-ticket)
- [Crew Girl](/tudum/crew-girl)
- [Below Surfaces to the No. 1 Spot in This Week’s Top 10](/tudum/articles/top-10-october-5-2026)
- [East of Eden Composer Laura Karpman on the Power of Scoring the Unsung](/tudum/articles/east-of-eden-score-laura-karpman)
- [See More](/tudum/topics/trending)
- [KPop Demon Hunters](/tudum/kpop-demon-hunters)
- [Our Sticky Love](/tudum/our-sticky-love)
- [Beauty in Black](/tudum/beauty-in-black)
- [A Different World](/tudum/a-different-world)
- [My Life With the Walter Boys](/tudum/my-life-with-the-walter-boys)
- [Florence Pugh Is Cathy Ames in East of Eden](/tudum/articles/east-of-eden-series)
- [Nellie Oleson Is Bringing the Side-Eye to Little House on the Prairie Season 2](/tudum/articles/willa-dunn-nellie-oleson-little-house-on-the-prairie-season-2)
- [Little House on the Prairie Season 2 Wraps Production](/tudum/articles/little-house-on-the-prairie-season-2-cast-release-date-news)
- [See More](/tudum/topics/news)
- [Watch](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fprofiles%2Fchoose%3Fnext%3Dhttps%253A%252F%252Fwww.netflix.com%252Fwatch%252F81288983%253FtrackId%253D263218445%2526trkId%253D263218445%2526src%253Dtudum)
- [Explore](/tudum/the-diplomat)
- [Explore](/tudum/the-one-about-matthew-perry)
- [Watch](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fprofiles%2Fchoose%3Fnext%3Dhttps%253A%252F%252Fwww.netflix.com%252Fwatch%252F80996601%253FtrackId%253D263218445%2526trkId%253D263218445%2526src%253Dtudum)
- [Explore](/tudum/love-is-blind)
- [Watch](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fprofiles%2Fchoose%3Fnext%3Dhttps%253A%252F%252Fwww.netflix.com%252Fwatch%252F80994082%253FtrackId%253D263218445%2526trkId%253D263218445%2526src%253Dtudum)
- [Explore](/tudum/lupin)

### Controls

- button: Next items
- button: My List
- button: Remind Me
- button: Back To Top

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

- Raw REA Evidence: `catalog/rea/evidence/netflix-tudum.json`
- Evidence ID: `ev_d1f6ebad860cc18df5129b3b4454b109ab6a62fd39f5f7c9a34365a2dceab9d8`
- Accessibility outline: 35207 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
