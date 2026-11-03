# REA web-surface report — Google Play (`google-play`)

Browser capture of the public web surface of Google Play, recorded with REA.

| | |
|---|---|
| Product | Google Play (`google-play`) |
| Company | Google |
| Target | https://play.google.com/ |
| Resolved URL | https://play.google.com/store/games |
| Page title | Google Play |
| Captured | 2026-11-03T01:39:01.360Z |
| Status | captured |
| REA Evidence ID | `ev_71042c2df5accd70f39368a978a4330b7f7c37157fa50ea187b932e0e27336c1` |
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
    "url": "https://play.google.com/"
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

_No headings exposed._

### Landmarks

- banner
- navigation: Page Header
- navigation: Main
- banner
- contentinfo

### Links

- [Google Play logo](/store/games)
- [Windows PC](/store/games?device=windows)
- [Phone](/store/games?device=phone)
- [Tablet](/store/games?device=tablet)
- [TV](/store/games?device=tv)
- [Desktop](/store/games?device=chromebook)
- [Watch](/store/games?device=watch)
- [XR headset](/store/games?device=xr)
- [Play Balatro Balatro Card Rated 4.7 stars out of five stars $9.99](/store/apps/details?id=com.playstack.balatro.android)
- [Play The Battle of Polytopia The Battle of Polytopia Strategy Rated 4.4 stars out of five stars](/store/apps/details?id=air.com.midjiwan.polytopia)
- [Play Winter Burrow Winter Burrow Simulation Rated 4.6 stars out of five stars $9.99](/store/apps/details?id=com.noodlecake.wb)
- [Play Flick Shot Rogues Flick Shot Rogues Strategy Rated 4.4 stars out of five stars](/store/apps/details?id=com.noodlecake.flickshotrogues)
- [Play Superliminal Superliminal Puzzle Rated 4.1 stars out of five stars](/store/apps/details?id=com.noodlecake.superliminal)
- [Play Guncho Guncho Strategy Rated 4.4 stars out of five stars](/store/apps/details?id=com.tinytouchtales.guncho)
- [Play Reigns Reigns Card Rated 4.3 stars out of five stars 50% off $2.99 $1.50](/store/apps/details?id=com.devolver.reigns)
- [Play purple purple Puzzle Rated 4.4 stars out of five stars](/store/apps/details?id=air.com.bartbonte.purple)
- [Play Underground Blossom Underground Blossom Adventure Rated 4.9 stars out of five stars $2.99](/store/apps/details?id=air.com.RustyLake.UndergroundBlossom)
- [Play The White Door The White Door Adventure Rated 4.7 stars out of five stars $3.49](/store/apps/details?id=air.com.RustyLake.WhiteDoor)
- [Play LEVELS II LEVELS II Puzzle Rated 4.6 stars out of five stars](/store/apps/details?id=app.flow.levelsII)
- [Play The Room Three The Room Three Puzzle Rated 4.9 stars out of five stars 75% off $3.99 $1.00](/store/apps/details?id=com.FireproofStudios.TheRoom3)
- [Play quadline quadline Puzzle Rated 4.2 stars out of five stars](/store/apps/details?id=com.IvanKovalov.quadline.android)
- [Play The Past Within The Past Within Adventure Rated 4.9 stars out of five stars $2.99](/store/apps/details?id=com.RustyLake.ThePastWithin)
- [Play GUBBINS GUBBINS Puzzle Rated 4.7 stars out of five stars](/store/apps/details?id=com.StudioFolly.GUBBINS)
- [Play Please, Touch The Artwork Please, Touch The Artwork Puzzle Rated 3.9 stars out of five stars](/store/apps/details?id=com.StudioWaterzooi.PleaseTouchTheArtwork)
- [Rank 2 Block Blast! Puzzle Rated 4.8 stars out of five stars](/store/apps/details?id=com.block.juggle)
- [Rank 3 Rotate Rings Puzzle Rated 4.8 stars out of five stars](/store/apps/details?id=com.nebula.rotaterings)
- [Rank 4 Roblox Adventure Rated 4.2 stars out of five stars](/store/apps/details?id=com.roblox.client)
- [Rank 5 Pokémon TCG Pocket Card Rated 4.6 stars out of five stars](/store/apps/details?id=jp.pokemon.pokemontcgp)
- [Rank 7 Royal Smash! - Physics Puzzle Casual Rated 4.6 stars out of five stars](/store/apps/details?id=com.cyphergames.royalsmash)
- [Rank 8 Monster Hunter Outlanders Action Rated 4.5 stars out of five stars](/store/apps/details?id=com.tencent.mhadv)
- [Rank 11 Paper.io 2 Arcade Rated 4.1 stars out of five stars](/store/apps/details?id=io.voodoo.paper2)
- [Rank 12 Vita Mahjong Board Rated 4.9 stars out of five stars](/store/apps/details?id=com.vitastudio.mahjong)
- [Rank 13 Magic Sort! Puzzle Rated 4.6 stars out of five stars](/store/apps/details?id=com.grandgames.magicsort)
- [Rank 14 Amaze GO!™ Puzzle Rated 4.8 stars out of five stars](/store/apps/details?id=com.oakever.arrows)
- [Rank 16 Magic Tiles 3™ - Piano Game Music Rated 4.6 stars out of five stars](/store/apps/details?id=com.youmusic.magictiles)
- [Rank 18 Block Craft 3D：Building Game Arcade Rated 4.5 stars out of five stars](/store/apps/details?id=com.fungames.blockcraft)
- [Rank 19 Parking Loop Puzzle Rated 4.4 stars out of five stars](/store/apps/details?id=com.loop.packedloop)
- [Rank 20 Bus Fever Party! Casual Rated 4.1 stars out of five stars](/store/apps/details?id=gridplus.busjam.carpuzzle)
- [Rank 21 Word Search Explorer Word Rated 4.9 stars out of five stars](/store/apps/details?id=in.playsimple.wordsearch)
- [Rank 22 Township Casual Rated 4.7 stars out of five stars](/store/apps/details?id=com.playrix.township)

### Controls

- button: Search
- button: Help Center
- button: Open account menu
- button: Play Balatro
- button: Play The Battle of Polytopia
- button: Play Winter Burrow
- button: Play Flick Shot Rogues
- button: Play Superliminal
- button: Play Guncho
- button: Play Reigns
- button: Play purple
- button: Play Underground Blossom
- button: Play The White Door
- button: Play LEVELS II
- button: Play The Room Three
- button: Play quadline
- button: Play The Past Within
- button: Play GUBBINS
- button: Play Please, Touch The Artwork
- button: Top free

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

- Raw REA Evidence: `catalog/rea/evidence/google-play.json`
- Evidence ID: `ev_71042c2df5accd70f39368a978a4330b7f7c37157fa50ea187b932e0e27336c1`
- Accessibility outline: 50195 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
