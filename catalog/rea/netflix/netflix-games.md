# REA web-surface report — Netflix Games (`netflix-games`)

Browser capture of the public web surface of Netflix Games, recorded with REA.

| | |
|---|---|
| Product | Netflix Games (`netflix-games`) |
| Company | Netflix |
| Target | https://www.netflix.com/tudum/games |
| Resolved URL | https://www.netflix.com/tudum/games |
| Page title | All of The Games on Netflix Right Now - Netflix Tudum |
| Captured | 2026-10-14T03:56:22.119Z |
| Status | captured |
| REA Evidence ID | `ev_35395302435935f8f8728ea1ed3181a6d65803db9875378bea12336f19fbc77c` |
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
    "url": "https://www.netflix.com/tudum/games"
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

- All of The Games on Netflix Right Now - Netflix Tudum
- Featured
- Puzzled
- Solve new word, logic, and visual puzzles daily
- Starstruck
- Sudoku
- Jigsaw
- Shapes
- Crossover
- Waywords
- Keysmash
- Bonza
- Available Games
- Action
- Adventure
- Arcade
- Educational
- Idler
- Party
- Puzzle
- Racing
- Role Playing
- Simulation
- Sports
- Strategy

### Landmarks

- banner
- navigation: Main Menu
- main
- navigation: Page level navigation
- contentinfo

### Links

- [Skip to main content](#maincontent)
- [Sign In](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fprofiles%2Fchoose%3Fnext%3Dhttps%253A%252F%252Fwww.netflix.com%252Ftudum%252Fgames)
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
- [Featured](#featured)
- [Available Games](#games)
- [About](#about)
- [Starstruck Work out where the stars shine. Play](/tudum/puzzled/starstruck/daily)
- [Sudoku Solve the classic numbers game. Play](/tudum/puzzled/sudoku/daily)
- [Jigsaw Piece together the big picture. Play](/tudum/puzzled/jigsaw/daily)
- [Shapes Turn shapes into something bigger. Play](/tudum/puzzled/shapes/daily)
- [Crossover Swap letters and emojis into words. Play](/tudum/puzzled/crossover/daily)
- [Waywords Find the path hidden in words. Play](/tudum/puzzled/waywords/daily)
- [Keysmash Just add vowels. Play](/tudum/puzzled/keysmash/daily)
- [Bonza Put the words back together. Play](/tudum/puzzled/bonza/daily)
- [Explore More Puzzles](/tudum/puzzled)
- [cloud saves](https://help.netflix.com/en/node/123943)
- [maturity rating](https://help.netflix.com/en/node/121877)
- [Action](/tudum/topics/action)
- [Adventure](/tudum/topics/adventure)
- [Fantasy](/tudum/topics/fantasy)
- [Horror](/tudum/topics/horror)
- [Kids and Family](/tudum/topics/kids-and-family)
- [Reality](/tudum/topics/reality)
- [Sci-Fi](/tudum/topics/sci-fi)
- [Article](/tudum/topics/article)
- [Tudum Magazine Privacy Statement and Terms of Use](/tudum/articles/tudum-magazine-terms-and-conditions)
- [Below Surfaces to the No. 1 Spot in This Week’s Top 10](/tudum/articles/top-10-october-5-2026)
- [The Mosquito Bowl Trailer Puts Four College Football Heroes on the Front Lines](/tudum/articles/the-mosquito-bowl-trailer)
- [24 Thrillers Too Suspenseful to Pause for Even a Second](/tudum/articles/best-thrillers-on-netflix)
- [The 2nd and 3rd STAGE of STEEL BALL RUN JoJo’s Bizarre Adventure Have Started](/tudum/articles/steel-ball-run-jojos-bizarre-adventure-release-date-news)
- [10 Creature Features for When You’ve Had Enough of Humanity](/tudum/articles/best-creature-features-movies-shows)

### Controls

- button: Link copied to clipboard Share
- button: play Puzzled Thumbnail
- button: Previous items
- button: Next items
- button: Go to page 1
- button: Go to page 2
- button: Go to page 3
- button: Action
- button: Adventure
- button: Arcade
- button: Educational
- button: Idler
- button: Party
- button: Puzzle
- button: Racing
- button: Role Playing
- button: Simulation
- button: Sports
- button: Strategy
- button: Table Top

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

- Raw REA Evidence: `catalog/rea/evidence/netflix-games.json`
- Evidence ID: `ev_35395302435935f8f8728ea1ed3181a6d65803db9875378bea12336f19fbc77c`
- Accessibility outline: 23411 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
