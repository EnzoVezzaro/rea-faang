# REA web-surface report — Google News (`google-news`)

Browser capture of the public web surface of Google News, recorded with REA.

| | |
|---|---|
| Product | Google News (`google-news`) |
| Company | Google |
| Target | https://news.google.com/ |
| Resolved URL | https://news.google.com/home?hl=en-US&gl=US&ceid=US:en |
| Page title | Your briefing |
| Captured | 2026-10-14T03:53:32.601Z |
| Status | captured |
| REA Evidence ID | `ev_f04699c32b5e22d6bd839b7b2e16f8fc6e288a334d16ede53f3328216e38c527` |
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
    "url": "https://news.google.com/"
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

- Your briefing
- Top stories
- Local news
- Picks for you
- More news
- Your topics
- U.S.
- World
- Business
- Technology
- Entertainment
- Sports
- Sources
- Investor's Business Daily
- STOCK MARKET TODAY
- The Bend Bulletin
- Top News
- Whidbey News-Times
- Beyond the front page

### Landmarks

- banner
- search
- main
- navigation

### Links

- [Google News](./?hl=en-US&gl=US&ceid=US%3Aen)
- [Sign in](https://accounts.google.com/ServiceLogin?passive=1209600&continue=https://news.google.com/home?hl%3Den-US%26gl%3DUS%26ceid%3DUS:en&followup=https://news.google.com/home?hl%3Den-US%26gl%3DUS%26ceid%3DUS:en&hl=en-US&ec=GAZAqgM)
- [Google Weather](https://support.google.com/websearch/answer/13687874)
- [Top stories](./topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen)
- [Kimberly Guilfoyle resigns as US ambassador to Greece](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2k0bmVTUEVoSF9kS1pIZjZUdk1DZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Kimberly Guilfoyle is out as U.S. ambassador to Greece - The Washington Post - 4 hours ago - By Michael Birnbaum](./read/CBMiwAFBVV95cUxQS0Y0S2dGZWJaTWJvWFFjSGZPOExnVFR3ZVlvVUZ0dFZ4MGdHd0VQalI1Y0o5QkM3MkxUTUJRYnNtekZMZlVmZDlsQ1M5TkV4WHE4NXJzX0Y4bUNXM1RmekdYVzZ5YjFnWG1XT0JLNHJSc3pIVFJSYk9OYXdycV9WbUlBcVlKd1RSNEFJeGd4Vy1Pd2g1WnJJbmhCU1pGLTJDc1R4ZEpFUS10Z21pV3ZkQnlkQUNZdlZiMnNGZENndHg?hl=en-US&gl=US&ceid=US%3Aen)
- [Trump fires ambassador to Greece Guilfoyle after reports of misconduct - Reuters - 13 hours ago - By Simon Lewis, Edward McAllister & Jacob Bogage](./read/CBMisgFBVV95cUxPeHIwM3RrTXplaUsyc3ZvbUhRaEVvbGNlbzFaeDdiY0tCRkpvRTQ1SlNiRU1fTXFFanljSU91NWZYVldNc19pOHNUMmR6dXZFSmRlLTBkdTctbUxZaVgyR21BT0syQVhsUjhpVTNDaUZWaUxxNHlRdkZCMHdNM2w3SUlFQ2VYVUVSdm5mZDU3QW9xSy1OMU9kTVJlSm9kS2d2R0k5blY4Ym9wTkZacTZEN1VB?hl=en-US&gl=US&ceid=US%3Aen)
- [White House ousts Kimberly Guilfoyle as US ambassador to Greece - CNN - 13 hours ago - By Jennifer Hansler, Kevin Liptak & Kristen Holmes](./read/CBMic0FVX3lxTE0yZkZVN1pNakJDSEM3bGw5aDVXbV9rXzhJZXJHUmduRDRwOXhIZ2lZUEhSdy1GSlhLLUxYeG1XS24yNlNaaUV3TngzcE0zTUFkRlZ5ODFkNzVNMTlsdGU4TFp6bGtXYTZGWUdsV2IySUVFaFU?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Kimberly Guilfoyle resigns as US ambassador to Greece](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2k0bmVTUEVoSF9kS1pIZjZUdk1DZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Pope Leo XIV undergoes lung surgery at Rome hospital](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2paX1l1VUVoRTNJMFdvQzdNeDd5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Pope Leo Found to Have Lung Cancer During Surgery, Vatican Says - The New York Times - 5 hours ago - By Elisabetta Povoledo](./read/CBMif0FVX3lxTE0zalk3S3VDUElUcFNEdUpIem4tTmtXbTRVM19GX2ZEV3BFWE15YWhGa19zZFd1cEozS0toNHd6SWdOazhZR2NPYkFkRFU4ZG9BLVFGTi0tVndYR3h1Wl9vMGs3NDl0X2lLZ2Z1Rjd4ZmlldjgzaWt4bU9DNlN0ZUU?hl=en-US&gl=US&ceid=US%3Aen)
- [Pope Leo Diagnosed With Lung Cancer After Surgery - WSJ - 5 hours ago - By Margherita Stancati & Victoria Albert](./read/CBMia0FVX3lxTE9SQTV0N0hVZ1lmbDdZOVNEU1FfVl9iM1BJTU1uck4zWHJHMnlSTUdNV1h6OThLcEw1V2t6d0tWbXhSYWl3amk5aEdkdDJZejFsamFaQ1BLVWRzR2ZJSU9UNUtxdHdkSEdVZmNB?hl=en-US&gl=US&ceid=US%3Aen)
- [Leo XIV’s Cancer Diagnosis Tests the Assumption of a Long Papacy - The New York Times - 1 hour ago - By Motoko Rich](./read/CBMigAFBVV95cUxQVzZiSGVhQWYzeTdleXNkb3IxXzhZcDJnWm5WU3ExQ0VldXhnWmxFX0M2ekVzY3dNOGFjVVh1d1JuWENLVDV4RHBGT3BtbHNBdVF5YXA4VFhmano3ck1VR3h2MVpFa2xKY1JSaXd4VVFCSUZQSS1xZG5TMmpjLXZndA?hl=en-US&gl=US&ceid=US%3Aen)
- [Pope Leo has lung cancer, the Vatican announces after surgery - NPR - 5 hours ago - By Daniel Burke](./read/CBMijgFBVV95cUxNdW9FYzVTSU8zQUpvcVIzeERHbkVSZjZjV0N3VUFjRlduVmluUE1VdVVQd1lhbWRrSmg2T0c3UmtCVkViUm5DZ1BaOTYwQmlPanlveXNnUkxlT2c3aDJrRUdEOS0xV2pabnpXaXlSRFRTUmFBVlI0T0RZY1JvdlluNktMQ3Q1ZGRWV0U3cC1n?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Pope Leo XIV undergoes lung surgery at Rome hospital](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2paX1l1VUVoRTNJMFdvQzdNeDd5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [New Trump press secretary says she passed bar exam in China, raising eyebrows - South China Morning Post - 7 hours ago - By Teresa Frontado](./read/CBMi1AFBVV95cUxQUDBCTnZQdDM3cGhwbEJFTE1EV1lTSVhzZUYzbV85UVdNcnBxbWFjbGZGMllqTGxLMFFkRkVnVWFObnByNy10WlVTemFsRkdReEtOa3ZuQVFIQzBIWjJTWjJ0OE5OWFJnUlJ0Zm9kOTl6aFRXeDNkd2dYSlR2QjN6UDFHTWJPR2p4OFpsOXhCYWdLMV9DZ0VJU20yeWNWMndnNGVtVVRZOEloWlhmU2VrMzV3SzNtR3BkSmNBbTBjbDlDYjN1ejZjTjJad1NTMjY3Zmg3Z9IB1AFBVV95cUxNNVotMW9oeTJLMXhiM0dYYWF1dGVWSTczVkdrazdXTXVyUmYxNUN1VWJqcmMwR3l0VG0zWnozNEk3RzdkREZuQ0ljSFVDb29RS1o2YXZqcExqQW9xdEJoeFBuTkZRUnlXeFRsaHJ1ZU0zRHh1MHdEM1ZOQnRNU2VZcUhCU3RYTEFnTVFsZFpCa0l0bUQ4cUxVWndWLW82Xy1BWnAwVEhJc3lUNkxyQzE3NjZyTjN3cEFlT3FRQ1BHLTRpYTU4TTV3SHA4LWNYRjBkVFIxZw?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - New Trump press secretary says she passed bar exam in China, raising eyebrows](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2l4bzRlVEVoRXQ4bnUzeF9YRDZ5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Democrats fear \"more October surprises\" after \"bullshit\" raid on Ilhan Omar's home - Axios - 3 hours ago - By Andrew Solender](./read/CBMiiAFBVV95cUxOQWFWei1mTzVMZ2JWTklHaWZVQ3Iyb2tnREpvU2pwLU1XVUh4T05QTmV2WHYtNllQUDZyLXZBa2dNUzJrV0xEMjJtVEtvcUx1R3FMUnFzUi0yUlBiZTV1SXhvcTM4YnhPb19QZlpBTFItWFYxaFl2LXlIUE9rckxLNmFPS245Qllm?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Democrats fear \"more October surprises\" after \"bullshit\" raid on Ilhan Omar's home](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2k3dXZ1TkVoRWp0cjV3RHF4MjNDZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Local news](./topics/CAAqHAgKIhZDQklTQ2pvSWJHOWpZV3hmZGpJb0FBUAE?hl=en-US&gl=US&ceid=US%3Aen)
- [NYPD detective stabbed in the Bronx during vacation shares story of survival - ABC7 New York - 6 hours ago - By Darla Miles](./read/CBMipgFBVV95cUxPekE0Qm5yVVhMRU5idzlDcmJoa1dNOW4yd3lPLTAwMldvbVVtWDcxVmRoYTV1bUE2U3Atai1qTUdOWjdNaFU2MlE5ZTFtTFZGOTdkaFViT2VHcm9nbS1nYmlhLVVORG9JWWw4WW1sektLaUlsSjJJZE1xRDlsOHdxajFkTWJXamtWN0l6NnVqX0Y1YWZIQWxUcTUtZ1ZxWjdodFBGZHln?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - NYPD detective stabbed in the Bronx during vacation shares story of survival](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2lOd08tTkVoRkVqMVphd1Q4T1FpZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Bronx community holds vigil for young mother pushed off balcony last week - Spectrum News NY1 - 1 hour ago - By Olivia Leach](./read/CBMivwFBVV95cUxNUEV0V0J3eFJ3UXlZNXlKNjhTNkpobTBCQlQ2cVFfdFNYcFNiSldYY3V4OFBZMTNkc2FrU0hzUGI5eVNpSFpKajZFQVFhd3RQTTZaOFZtaXJnSENLRXFZWTZJc3JIWVlDUlFPSVdKTUNZZ2gtZjBKT1p5Y1RSSGxZejNpUmFDSDE2ejZpb20yeUk4cXBCeEpWOXcwZDNBdEVtZ1JZVXI4azUtNlJ4NHVFdmQ2R3d2WUFxRmlCbWhMdw?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Bronx community holds vigil for young mother pushed off balcony last week](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2lkczVlUUVoSGN1Vm5ESk5KZE9TZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [AS VERIZON PROPOSES TRANSITION AWAY FROM... - Senator Chuck Schumer (.gov) - 2 hours ago](./read/CBMipAJBVV95cUxNY0FlSjVTSXFvRVJLMFZuckFLcHFMQjAza051VU9DbW1fUGVEMDFKRFF0M0k2eENpMnhmXzBVUFpRU0d6aEo4d2s3eGg1b29rVzVwU29EQkFRNGtEN3RhYWROUnVUV3c1V0U1UFFnWTV3SDhkdi1Vb056eklCeTNrUzBLRFlNUFFob3AzR0xyRGxSSXc4V2NVYmxHZEUtWWtvYmtVc284cS1RUXlwR3Q1VnZXbGJpRTJKeGxOZXBXX2llX29VWkZreXRvTGZqeEZqbUc3Nl9aeDdmdENVRlAzODBXRVpXRG92eG5GMEQ3dnN2Q0R0ZTk3VHBENjRrckd4N010V3ZMY0hVZ19KWFA4eEo0azAwenJDVVF6NHpiWk56S1Yy?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - AS VERIZON PROPOSES TRANSITION AWAY FROM...](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2p2bzVLUkVoRmQ3eXctRVpDQjhpZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Sign in](https://accounts.google.com/ServiceLogin?hl=en-US&continue=https://news.google.com/home?hl%3Den-US%26gl%3DUS%26ceid%3DUS:en&hl=en-US&gl=US&ceid=US%3Aen)
- [Sign in](https://accounts.google.com/ServiceLogin?hl=en-US&continue=https://news.google.com/home?hl%3Den-US%26gl%3DUS%26ceid%3DUS:en)
- [See more headlines & perspectives - Pope Leo has lung cancer, the Vatican announces after surgery](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2paX1l1VUVoR205X09oamNZcHlDZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [The 8-mile hole in a Hawaii national park that no one can explain - SFGATE - 9 hours ago - By Ashley Harrell](./read/CBMilwFBVV95cUxObzEzRm1ubm9Wendtb1dsMjVlRXMwVGZST1pRb2VUUG0yN3RhT2RueXpVMEFIRFNPd1RTVHJ3NF9IZDB6MzJOdEtoZzF0VHliZHdOTWJveWZPaGlHOC1JWFBFX21penJ1eTU4MU9mUmJzdWlvTmF2RGxpNWFkRG1jUHM3c3E4NWNzTWlHRVc4Qk80ZVUyMEE4?hl=en-US&gl=US&ceid=US%3Aen)
- [Larry David Saw O.J. Simpson at a Country Club the Day Nicole Brown Simpson Was Killed - Rolling Stone - 13 hours ago - By Jon Blistein](./read/CBMirAFBVV95cUxOYm0zc1RQdG1KYjV0Vm80TlFNSVFud1pTdkhBMTFPclRRWHpXcHRXX3gybVRxZF9PQ0RndWNnd0dTbUNpek9ycFhMS1hRbnRMU2NNRkpYVGpvU2FjR2czczZTcVVKRlRYZHgzMzY3bTd0VEZGUUpSUXFnSk9OY0M4NTdId0JqbEl6b1lNUDRrMFJ0Nm5RM3dEODZSX0p2QUNjYTQ5R2h2OVhzbkVK?hl=en-US&gl=US&ceid=US%3Aen)
- [Art of Play lists bird at center of Kelly Clarkson feud for $15M | Exclusive - USA Today - 6 hours ago - By Taijuan Nichole Moorman & Christopher Cann](./read/CBMi1gFBVV95cUxNNWJVU3BaOGtFbVMyS0ltUjhZc19DXzE4WUIxVXpITGZhbkd0MHRRRHNLRDZGd2lzSWhUektRVjBGZjNSYlk5dDlZRGZ0NzZ6TzA0NVcyUUg2a0VzaTlrRFRncXBGTTBYYTFBTUdKa21zcnh6dXZmdFRmcUxWNjluTENEZ3FJWnFUY0NKblhiUHdWNGY1aG8tZHZzUHVQc0N5bzZOZ3piOW9TZnVranlnT3lrQV8yWW1iTmt1OXlIR1NJRE1aTTF1UGdhNF9lR2JMVjZqakFB?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Art of Play lists bird at center of Kelly Clarkson feud for $15M | Exclusive](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2lzdC1LVEVoRmNwLWg0alU2YkF5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Bumble agrees to a $1.3B acquisition deal as online dating faces a reset - TechCrunch - 13 hours ago - By Lauren Forristal](./read/CBMiqgFBVV95cUxQdDZiWmRTVHluang0UmdETEN4MkF6NDBHV3VZUVZzc051RG9QRk9YQ1BWdmYzM3k5cGtsZzgtR000aUNld1VIeUpCRWFJTEpOTlVKb2hFdmpfRmlyNW9FdHlQWlJUa2cxZTJlUzdLa3g0bHJ3WW1keHROcU9sMmFkdlZ1Z3ExYW9GeTluLWdaemVGcUFidWNqNWVHVHEzblRCeTFHcHM3a2x4UQ?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Bumble agrees to a $1.3B acquisition deal as online dating faces a reset](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2lfaVllVkVoSHJlNURpY2hUcnRDZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [U.S.](./topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGxqTjNjd0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen)
- [Kimberly Guilfoyle Resigns as Ambassador to Greece - The New York Times - 1 hour ago - By Tyler Pager](./read/CBMigwFBVV95cUxPdlVvUGdLc3Z0NUVzWlpJMWRIcTFtbzZveW5vLTE5a01WbnJ0YVdOdkpIZ01VNU91c0ZqX2oxM214d0xHWFBYdHZ1N3dtc0djVkNSUloyZ0RLZ0l3VFZZamZlSnQ0WFJoWGpkYmhCbUFoczRiTTRsaDM3ZTNtZklzUHQxdw?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Kimberly Guilfoyle Resigns as Ambassador to Greece](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2k0bmVTUEVoSGJIX3VvQll2X0ZTZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Trump debates calling off livestream of firing squad execution after learning Fort Hood shooter was paralyzed - CNN - 6 hours ago - By Alayna Treene](./read/CBMijAFBVV95cUxOVWQzWUFBVFdmU1BaazhTdkY0aGtWdnZkOU4tUWFacmVqX25ScW1HUG93UzBOME90YUNreEtoUzdmdU9sTF9Bb0VqZFhwT2ZwMkd6T0tmdjEzRGhfWHlKdjMxQ0JJV0JrLXBCeVI0cC1zVjNkbHNRR0RUYTdFTVlNUnpYLWZXTlJBZUFGcA?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Trump debates calling off livestream of firing squad execution after learning Fort Hood shooter was paralyzed](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pYdlAyTEVoRzVKemx5TWsycjlpZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)

### Controls

- button: Advanced search
- button: Search
- button: Help
- button: Settings
- button: Google apps
- button: Expand to view forecast
- button: Use precise location
- button: More - Kimberly Guilfoyle is out as U.S. ambassador to Greece
- button: More - Trump fires ambassador to Greece Guilfoyle after reports of misconduct
- button: More - White House ousts Kimberly Guilfoyle as US ambassador to Greece
- button: More - Pope Leo Found to Have Lung Cancer During Surgery, Vatican Says
- button: More - Pope Leo Diagnosed With Lung Cancer After Surgery
- button: More - Leo XIV’s Cancer Diagnosis Tests the Assumption of a Long Papacy
- button: More - Pope Leo has lung cancer, the Vatican announces after surgery
- button: More - New Trump press secretary says she passed bar exam in China, raising eyebrows
- button: More - Democrats fear \"more October surprises\" after \"bullshit\" raid on Ilhan Omar's home
- button: Manage local news
- button: More - NYPD detective stabbed in the Bronx during vacation shares story of survival
- button: More - Bronx community holds vigil for young mother pushed off balcony last week
- button: More - AS VERIZON PROPOSES TRANSITION AWAY FROM...

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

- Raw REA Evidence: `catalog/rea/evidence/google-news.json`
- Evidence ID: `ev_f04699c32b5e22d6bd839b7b2e16f8fc6e288a334d16ede53f3328216e38c527`
- Accessibility outline: 50240 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
