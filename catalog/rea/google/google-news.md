# REA web-surface report — Google News (`google-news`)

Browser capture of the public web surface of Google News, recorded with REA.

| | |
|---|---|
| Product | Google News (`google-news`) |
| Company | Google |
| Target | https://news.google.com/ |
| Resolved URL | https://news.google.com/home?hl=en-US&gl=US&ceid=US:en |
| Page title | Your briefing |
| Captured | 2026-11-03T01:38:43.209Z |
| Status | captured |
| REA Evidence ID | `ev_bed91a4fc061b5128e2d03562607f356c7a5ab53787bfae425a2c5918238be7e` |
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
- [Learjet crash in Florida kills nine people](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2p1dy02bEVoRzEySjdDekh0QjN5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Plane may have broken apart ahead of deadly Florida jet crash, say investigators - BBC - 1 hour ago - By Nardine Saad](./read/CBMiW0FVX3lxTE5vUlJzX2dBUVVoZDFRak1IOFF4aW12bTZoSi1HeTdOY0FyTWp2M0pHTmtMRVh3SlIzUXFsNWhrWlR5dG1vUUJmaWRNYW43aTVGbC1BWG8xdF9hY1k?hl=en-US&gl=US&ceid=US%3Aen)
- [20-Year-Old Nathalia Filgueiras Was a Pilot on Learjet That Crashed in Florida - The New York Times - 16 minutes ago - By David Ovalle, Jacey Fortin & Shahrzad Rasekh](./read/CBMikgFBVV95cUxOTlVCYXlSTTlxcklQUzVId0N1Y3BhU1hNcXd2a0RMNlhLaTByR08zQWZTS2p3UWlWTlNRaWktWFdHckV5R0pxaFN4NVE5SjFadm03cHNnZXRwV2s4akx1TlhvWEZEc1V2VFRPeWdud2VGV0ROOUlEWFpXSzhtR2EtYWZ6TVh1dWNfRjVGODJMcnlDZw?hl=en-US&gl=US&ceid=US%3Aen)
- [Passenger in deadly Florida plane crash identified as former Rice basketball player, university officials say - ABC13 Houston - 1 hour ago](./read/CBMi0gFBVV95cUxPb1BaT0l4LW84N1FQTVBkbHROdTZ0eC1FSkdXMFJrcjNNZHF5RXdyMGpxcFNtRjJJSDVhQWxNVHFuUDRuSHkzYzBKSWJUdGpYRUx5dDJKWUNIaUlBaHZBVEJ5RWIyZXFvYlVHbmRDSW9LUkwzWFZ3UGdhZ0JYdHhwOHVTT2pIUVlEQVZMZGVCMWxhSVZjQXJ6OF95MTJtcTdqbXpaOUFPM0VTRVFqSngwb3VOT2ZXTXlGcTRpNEJQa0tHSXdjSS1NUGllNXp6SVlwS2c?hl=en-US&gl=US&ceid=US%3Aen)
- [Austin tech entrepreneur, wife and young children among victims of Florida jet crash - KUT - 2 hours ago - By Nathan Bernier](./read/CBMizAFBVV95cUxQTHhkWE9ETXZsRTZvNG1uVkFWcktGVUJqeXVIYzRGY0xPTWpnb2t0SVh6dkhaU29relJQSFpObFU3TFZSNjc4eUk5WlVXNGY2cnFXNHN0RWk0SFBkbXkwdzVVTktnTC1pWjQ5cFo2SGVGcVpwLVZxV1o4VTJfMEJleWpucEJocjNZTFhxQTl1UmNmOExNbUJVSWpFd3dhWjE3VlI3XzBnQmlFR1FnOF9iaG5SRjczS2xoUzdwMjZYQU1PeFFaZEVTUVZCMnU?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Learjet crash in Florida kills nine people](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2p1dy02bEVoRzEySjdDekh0QjN5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Supreme Court rejects Trump administration push to set aside thousands of California ballots - AP News - 21 minutes ago - By Lindsay Whitehurst & Nicholas Riccardi](./read/CBMiqwFBVV95cUxOUTBndDdTam9fRTJHOThoRXMtenJuVDU4a05vbllPTlkxalRLWWI4VzlxTENCWGtNdDFQbC1xQ2g4MDFSZkM5RU5wNlFsM0FkaXBpM1VHR2NSRkJaRFpwWlNPVXRfUTc3WlR0WjhIa0pCNnE4SGI2WFFiMHdkbVZsVVZtdlhtNjdmQU15QW5tYXo5dlNOelVyblJwUnJnVmd5MWF3Z3hJRkZSU00?hl=en-US&gl=US&ceid=US%3Aen)
- [Supreme Court quickly rejects Trump effort to target alleged noncitizen voters in California - NBC News - 2 hours ago - By Lawrence Hurley](./read/CBMixwFBVV95cUxOeGpYSXBmU1d2cjdndE82UC0tSXRkbndHQWpmMVlrQm4wTkloN3JaV2VxcVhua0lMbnhXTmQxRER2M1B6c3BhWVF4UnlodXplMHdEcTdvdTBsekVZdHdBdXgtNnViaDhjNmg2U2RrSlpGSHdxZ0JVLXhFQUlMNldFTjIzZER2RUkwNVpOV2hhQmxzTGhlcEs3Q3FtRGxnY3FtUVlOdnpUbXlZenlzOE5acUN0X05vcmY1Qk93ck9EUmFuLWF6am9F?hl=en-US&gl=US&ceid=US%3Aen)
- [Supreme Court rejects Trump request for California to set aside ballots from alleged noncitizens - Yahoo - 38 minutes ago](./read/CBMijAFBVV95cUxNemxxd3NPaFhENnFDT09hSzRINndFM3VKOElfZHo3M2FlRzZ0Mng0TDdDZU1zQ2dINXlsOV93MU5MZmNhdmQ5RVdZZUQxbFhxM0hRZ0RVVURhcUNLWjNvMmVYUUlNYjZvMlJmLUFodHdPc3JIOVlZMmtVS3MxeEgzZGxJMHJZNlpENGdvSg?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2labkpXV0VoRTQyZmJsSUFoRlN5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [El-Sayed campaign reports $2.4 million fundraising day as Stevens endorses GOP rival - The Washington Post - 1 hour ago - By Amy B Wang & Erin Cox](./read/CBMiywFBVV95cUxNREhSWk5vaWpSOGpfQVVmX2hsTHlRbFdCdWd1Tko4akgwUDIwbTJySUdSa1g1aV9fSU80ZzBiWHIzY1lfUUhfR0lFNlh5SlJLa2Fjd3BZZzRpcEJ6eV9NaWNIM3IzUjhDaVRORWdKWTVyaWV3QnV4aENqcnVCQU9Tcko0eU5qZ3NMXzVoNWgxWVJoaTNJZERETnNyd2pzS1FIeUtDQTZYaXVPeGlaSnpuMlltMlIwNGtvX3BPZ05CbzlkdGxsc25odFBhQQ?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - El-Sayed campaign reports $2.4 million fundraising day as Stevens endorses GOP rival](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pXaWEtZEVoSHJET0gzRkRJSV9DZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Local news](./topics/CAAqHAgKIhZDQklTQ2pvSWJHOWpZV3hmZGpJb0FBUAE?hl=en-US&gl=US&ceid=US%3Aen)
- [Jean-Georges Vongerichten Is Opening Two New Restaurants in Hudson Yards - Eater New York - 1 hour ago - By Melissa McCart](./read/CBMiiwFBVV95cUxNSVZjWjJLQmEwakd3TkdhSGVJMm9CZkp5Tk5odUJYdVc2cnhCSUpTRy16Zzg3emRNanllLV9WcFI5OUZWcl9QRjIzNm5vQ1pDQ24yQmstOGdMaXYtTmd4a2FVdGRMQ2w5Yjh3eEtBTC1CYVl1MkJXMFJuc01OanZYdndQQ1pmOXhkX1hj?hl=en-US&gl=US&ceid=US%3Aen)
- [Watchdog says NY taxpayers pay $68,538 per film job - NEWS10 ABC - 1 hour ago - By Johan Sheridan](./read/CBMiaEFVX3lxTE55RUJwTVRKaVlRcl9NZ0g0MDdlTWtRRmNuR2huc0hWdmxvdGVkWVFMZDZvWXplMGJDR1RHQm1SZWJ5TGZpTlpSZGhFb21jNHpHTE9kYzZ6NlJlUjdhYUNYZ1hoYktyWkl10gFuQVVfeXFMUDlOLUpnTkFMNkpRNHpVcmszbHRMS2k1VHBqVEVjNTJJVHFuUXZQbWUyTjJZaHpYbFpIS3FyeXFsdW1ISERZMk90dnhhaWpaVEJjNGpQSnVVUmNoY2JSU0M4dVNwdEtvdmFxNkJ5enc?hl=en-US&gl=US&ceid=US%3Aen)
- [Sign in](https://accounts.google.com/ServiceLogin?hl=en-US&continue=https://news.google.com/home?hl%3Den-US%26gl%3DUS%26ceid%3DUS:en&hl=en-US&gl=US&ceid=US%3Aen)
- [Sign in](https://accounts.google.com/ServiceLogin?hl=en-US&continue=https://news.google.com/home?hl%3Den-US%26gl%3DUS%26ceid%3DUS:en)
- [Blood pressure medication recalled nationwide. See the affected drug - USA Today - 7 hours ago - By Mary Walrath](./read/CBMiygFBVV95cUxQT3JsVE40a21JXzRVSUYzNEtESkNOTzd2cUZ0a2std2RSajV3eHdiLTFJQXZCY2c0bVBRcXI3TEUwWkxiclhDODhORGlxTFZBVWc1NkF5S1BhQ2h4LURNaG9GWTlMa2FFcVNFVjVNUTRLVjRvaU9SdDhHWWdUQWVCRUUxVTF2cDB2NVVUY2pJVTJib1M4YTBUODBqYXB1R3RLaFRXYXBNaF94OFJSbVBFTVJHcmNrM3FSZ3pZTjdGcFo1MmF4cWs1SkZB?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Blood pressure medication recalled nationwide. See the affected drug](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pLOE9DYUVoRnotM2l3YXB4eFF5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [El-Sayed, Michigan Democrats push to galvanize voters after stunning Senate race defection - AP News - 4 hours ago - By Joey Cappelletti, Corey Williams & Jacqueline GaNun](./read/CBMiowFBVV95cUxObDVmM3c5b3l4emlYLU81bzRSeE9TdW5aZ0VCR0NPZ3dIc2RJOFpYRGZqc2JZbTRYOU1xM1cxS3B4cW5YMFlLa3BxWnA5RGxVT3VfUUd3d0hDQnltY0x0U1dvOXB5RkhSRFZKVC13QmJFYnpCTVBZRnpvOUhLRVY4VklFeTlMT3hfRzZYR3NoWHNobjlUdUl3NExobno0SUVsZXc0?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - El-Sayed, Michigan Democrats push to galvanize voters after stunning Senate race defection](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pxbWRHakVoR1FUWU9jeEprcl9pZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [New cyberattack on supermarket fridges sweeps across Europe - Reuters - 4 hours ago - By Louise Lind Rasmussen, Marie Mannes & Helen Reid](./read/CBMizwFBVV95cUxObF9LUXZ2TVpjZm13eW9HNXZ0MkZFVDM5eHl5RXc0aDkzODdvc0VKYVE4YV9MSDZITjVTR01CM3l6ajdCVEFZMXlmdmx3MzBRWHN5QVkyTFU2bkR2Sm5VQm5OWUVfLVJoeHFZaXdrc0F1QTRnT0tHYXRvcVd4S0V2QUxmV3ptOEszT2EyWmFpVjYyUnRwODF1eGhXbGpGcUV2UXRwZFFLOGhPLTY1MWUxal9TY3M0Qm9MOVpSeTFHazNxMUNGSnVfdzVvOE0tUGM?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - New cyberattack on supermarket fridges sweeps across Europe](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2p0ai1pZ0VoR05HNGttS2xzS3BTZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Young co-pilot, 20, named as one of nine victims of deadly Florida plane crash - The Guardian - 11 hours ago - By Richard Luscombe & Michael Sainato](./read/CBMiiAFBVV95cUxPNDNwRkIwaTZNODlidmhZX05OdjdjM3FtSGFEc0tKNWx2eVJDa3N0VjZQN2lUc2ZPYjhEb3Q1Qm5CajVCdzJpd1lFZU5CYzNleTdkNm9qZS0xY2hQbGdXS29iZTk3T2hOZ1UtOW5kZTI4UHRKa0lIX05YaTdsR2U2ZDlscGRva283?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Young co-pilot, 20, named as one of nine victims of deadly Florida plane crash](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2p1dy02bEVoRlpNSm5CY1J2SVhTZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Palantir reports booming U.S. commercial revenue growth, topping government for first time - CNBC - 4 hours ago - By Samantha Subin](./read/CBMidkFVX3lxTE1wdkIzdGt1UWFvU0E0ZUlmQWhkdG5GaWJvZVc4UDZYaHFnYU9yOWNkdU5xekxFTDJWTERpcDJSN2VIcWI0M01qYlBHSVRhU2FBaE1VOEU1VHJodFgtX2FhYm5IQjBnMkpDSWNlWktFWmlrdFRJSlHSAXtBVV95cUxQVzlMd0xTcFNwb2dGc3dTR1RLYzVWUV9qcGFmRV9TM19rVm9uLWY5OTBkVXRHVFhPa0REbko0dENhaDBNbHduU2pwN2lkT0p3Tll6N0ZPeEQ1emphekVOdlYxSHM4b0NUalZaZGZmM2J6aTVfcnJ4UHQycEU?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Palantir reports booming U.S. commercial revenue growth, topping government for first time](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pZMjdXaUVoRWpWUHpFVko1Rm5DZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Utah girl missing for more than 500 days found in Oregon; FBI says ‘gore groups’ suspected - OregonLive.com - 9 hours ago - By Tatum Todd](./read/CBMizgFBVV95cUxQdENMQ3lFbXZyUDctbVEyUnNEWHlZM2sxbngxMG1QNXpYM2VxTnMtWi1QUnAzeTFzM2xCVFZLQXFCbmZPZld6YU15WDZEclFuMklycGpCV3NRcXR6QzJjQ2xsV1FnU2R1ZmJTSUFIdGNWREljLWJub2J5OHczT2pYbnVCcVV1SWZqUy11UkJCbkRaSy1QbWtWSHM5M24tNVpwX19nbFYxUHBVYXZGZlBUekdZZ2FkaFNodFNrY0dYOE9sUDgyYktuaEx3bmNpUdIB4gFBVV95cUxObW9oYmJtZkRNcjBoa0poMnV0N1lEZ1Rya1QzaG5PNWtObkZEUjlzVFd5T05kWl9yODNTVmVGRE84UVVjMUlNdENMRlpZdnE0c0ZKOG1lZHlIcmFpbElGaUlKOWR2UWItR2EwQ09VcVhNVHdWXzY5VnNBN3d5XzhCNHdkaEM4VThaUUZHc2kwSHZ5TkJkMUxROHFmLVpDY3NjQUZRdTVhMTdmVzVDOWlGeldCVU1GejBZVjhlOFZQYlRMZi1iRW9xQWd1ZEJIOEJ4ME81TzJhUmhLYXpEUXpRcldB?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Utah girl missing for more than 500 days found in Oregon; FBI says ‘gore groups’ suspected](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2otMFltbUVoSGpkREIxLW5ZS0x5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [U.S.](./topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGxqTjNjd0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen)
- [Victims of Florida plane crash include a 20-year-old copilot and tech entrepreneur and his family - AP News - 2 hours ago - By Ed White](./read/CBMikAFBVV95cUxPbThMQW1IZnBRT0dBUlZ6dmRaZTFMY1hkWE5nUlZhdzNZd2hvQmFhSTRpd1VIaThyTGVPUnVpbGplbDhjM1U5SE1peUt5SEQ0eEFnU0ViV1djMVF5V1J3SjJKcnBjRndRQ3pmdTV4dkpLZFVsRFhmTWpiNEh6SFh3WndlUm9qOTEtZzFSa0x5U3Y?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Victims of Florida plane crash include a 20-year-old copilot and tech entrepreneur and his family](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2p1dy02bEVoSERsVDNwNFk3M3N5Z0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [Supreme Court Rejects Trump Administration Request to Intervene in California Ballot Case - The New York Times - 1 hour ago - By Abbie VanSickle](./read/CBMilAFBVV95cUxPU3dhcGtsWC1YU2dGcG83cm05WWs1aU9mXzlIZFZoWjYxbGJwN2VGdENKU1JLLUNaMTVwRFZqZEhIYXFxQy1ZNE9RSkVvaF84WmxtLU1xNnRYTDZvSTRkbktueEd4bG9YQnotMF9uQnB0WERoaHRaa3NpaElQYUxzMHZHaXY5LUxxQjluQzVJSi14eGsw?hl=en-US&gl=US&ceid=US%3Aen)
- [See more headlines & perspectives - Supreme Court Rejects Trump Administration Request to Intervene in California Ballot Case](./stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2labkpXV0VoR2tTYVJWcHFVbGZpZ0FQAQ?hl=en-US&gl=US&ceid=US%3Aen)
- [World](./topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen)
- [British adventurer Karl Bushby returns home after 28-year walk around world - Al Jazeera - 7 hours ago](./read/CBMitwFBVV95cUxNcnBxbUVVcU5fRmswTjJHQUFneGZENEVHUmdEamNKVno1blFHX1NHa2ZOUGxudUhhb0JFanFUa3hKM0Z2ay1XWlZVWjJqVVd3R0lIVDhYME52ZW9sNXl1RHFaUnJlMGVOTTlHX05FTGJ1dHRPWUlxQnJZRnZnMGE4b2ZCSUxCS2lTUXlubkJVUHd5NjRhcGRtLTRveEU5S3JsVVl1UFlMUTRya1FZMWhwZm4zTUNvU1HSAbwBQVVfeXFMTkVrWk1MWGVRWGZnVzV5SG9lWlhZZFlmTk5tekJUTXVCN0xoVFl5TWJ2XzFETDY4T3JSWGcxejBtNWExM1VIdHVPcGlOdnNBSUhDelBKcUpGMkppV3BBbXJZWDhqWTNxN3JmM0p5b202T3FTM0RKdGMzRHY1VWJuX3YwMnFpZzBEaGVyUUdlSFZyanFUYVVoZmZhTmdtaTFsWDlaa1RMcWIzMHVJZkxhRTM3RWN1UjhCblpRVHM?hl=en-US&gl=US&ceid=US%3Aen)

### Controls

- button: Advanced search
- button: Search
- button: Help
- button: Settings
- button: Google apps
- button: Expand to view forecast
- button: Use precise location
- button: More - Plane may have broken apart ahead of deadly Florida jet crash, say investigators
- button: More - 20-Year-Old Nathalia Filgueiras Was a Pilot on Learjet That Crashed in Florida
- button: More - Passenger in deadly Florida plane crash identified as former Rice basketball player, university officials say
- button: More - Austin tech entrepreneur, wife and young children among victims of Florida jet crash
- button: More - Supreme Court rejects Trump administration push to set aside thousands of California ballots
- button: More - Supreme Court quickly rejects Trump effort to target alleged noncitizen voters in California
- button: More - Supreme Court rejects Trump request for California to set aside ballots from alleged noncitizens
- button: More - El-Sayed campaign reports $2.4 million fundraising day as Stevens endorses GOP rival
- button: Manage local news
- button: More - Jean-Georges Vongerichten Is Opening Two New Restaurants in Hudson Yards
- button: More - Watchdog says NY taxpayers pay $68,538 per film job
- button: More - Blood pressure medication recalled nationwide. See the affected drug
- button: More - El-Sayed, Michigan Democrats push to galvanize voters after stunning Senate race defection

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

- Raw REA Evidence: `catalog/rea/evidence/google-news.json`
- Evidence ID: `ev_bed91a4fc061b5128e2d03562607f356c7a5ab53787bfae425a2c5918238be7e`
- Accessibility outline: 42453 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
