# REA web-surface report — Kindle (`amazon-kindle`)

Browser capture of the public web surface of Kindle, recorded with REA.

| | |
|---|---|
| Product | Kindle (`amazon-kindle`) |
| Company | Amazon |
| Target | https://www.amazon.com/kindle/ |
| Resolved URL | https://www.amazon.com/kindle/ |
| Page title | Skip to |
| Captured | 2026-10-14T04:00:27.379Z |
| Status | captured |
| REA Evidence ID | `ev_e18abe08b6186a3d379c577501d296b25aab1ac31537e2230948a0d3f32764db` |
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
    "url": "https://www.amazon.com/kindle/"
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

- Skip to
- Keyboard shortcuts
- For everything worth reading and writing
- Kindle is built for following your curiosity, with nothing to pull you away. Stay as long as you like.
- Skip the scroll
- Dive into color
- Think it. Ink it.
- Hot off the presses
- Thinner. Lighter. More colorful.
- Sharper accessories
- Which Kindle is for you?
- Kindle
- Kindle Scribe
- Kindle accessories
- Millions of titles. One tap away.
- Kindle Unlimited
- The Kindle app
- Read and write your way
- Accessibility on Kindle
- See it your way
- Hear it read aloud
- Write it by hand
- For more information
- Get to Know Us
- Make Money with Us

### Landmarks

- navigation: Shortcuts menu
- banner
- navigation: Primary
- search
- navigation: Kindle
- navigation: More on Amazon

### Links

- [main content](#skippedLink)
- [Search, option, forward slash](javascript:void(0))
- [Cart, shift, option, c](javascript:void(0))
- [Home, shift, option, h](javascript:void(0))
- [Your orders, shift, option, o](javascript:void(0))
- [Amazon](/ref=nav_logo)
- [Choose a language for shopping in Amazon United States. The current selection is English (EN).](/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang)
- [Hello, sign in Account & Lists](https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fkindle%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0)
- [Returns & Orders](/gp/css/order-history?ref_=nav_orders_first)
- [0 items in cart](/gp/cart/view.html?ref_=nav_cart)
- [Prime](/prime?ref_=nav_cs_primelink_nonmember)
- [Groceries](/fmc/grocery-gateway?gsc=fe16aGPfFs46S&ref_=nav_cs_groceries)
- [Today's Deals](/deals?ref_=nav_cs_gb)
- [Coupons](/coupons?ref_=nav_cs_coupons)
- [Pharmacy](https://pharmacy.amazon.com/?nodl=0&ref_=nav_cs_pharmacy)
- [Audible](/Audible-Books-and-Originals/b/?ie=UTF8&node=18145289011&ref_=nav_cs_audible)
- [Whole Foods](/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=nav_cs_whole_foods)
- [Music](/music/player?ref_=nav_cs_music)
- [Amazon Home](/home-garden-kitchen-furniture-bedding/b/?ie=UTF8&node=1055398&ref_=nav_cs_home)
- [Registry](/gp/browse.html?node=16115931011&ref_=nav_cs_registry)
- [Automotive](/automotive-auto-truck-replacements-parts/b/?ie=UTF8&node=15684181&ref_=nav_cs_automotive)
- [Pet Supplies](/pet-shops-dogs-cats-hamsters-kittens/b/?ie=UTF8&node=2619533011&ref_=nav_cs_pets)
- [New Releases](/gp/new-releases/?ref_=nav_cs_newreleases)
- [Video Games](/computer-video-games-hardware-accessories/b/?ie=UTF8&node=468642&ref_=nav_cs_video_games)
- [Fashion](/amazon-fashion/b/?ie=UTF8&node=7141123011&ref_=nav_cs_fashion)
- [Handmade](/gp/browse.html?node=120955898011&ref_=nav_cs_handmade)
- [Beauty & Personal Care](/Beauty-Makeup-Skin-Hair-Products/b/?ie=UTF8&node=3760911&ref_=nav_cs_beauty)
- [Baby](/baby-car-seats-strollers-bedding/b/?ie=UTF8&node=165796011&ref_=nav_cs_baby)
- [Toys & Games](/toys/b/?ie=UTF8&node=165793011&ref_=nav_cs_toys)
- [Sports & Outdoors](/gp/browse.html?node=220556511011&ref_=nav_cs_sports)
- [Smart Home](/Smart-Home/b/?ie=UTF8&node=6563140011&ref_=nav_cs_smart_home)
- [Subscribe & Save](/auto-deliveries/landing?ref_=nav_cs_sns)
- [Works with Alexa](/gp/browse.html?node=73846268011&ref_=nav_cs_wwa)
- [Gift Shop](/gcx/Gifts-for-Everyone/gfhz/?ref_=nav_cs_giftfinder)
- [Best Sellers](/gp/bestsellers/?ref_=nav_cs_bestsellers)
- [Amazon Haul](/haul/store?ref_=nav_cs_hul_disb)
- [Custom Products](/Amazon-Custom/b/?ie=UTF8&node=11032013011&ref_=nav_cs_custom)
- [Luxury](/luxurystores?ref_=nav_cs_luxury_disc)
- [Kindle Books](/Kindle-eBooks/b/?ie=UTF8&node=154606011&ref_=nav_cs_kindle_books)
- [Books](/books-used-books-textbooks/b/?ie=UTF8&node=283155&ref_=nav_cs_books)

### Controls

- button: Show/hide shortcuts, shift, option, z
- button: Delivering to New York 10002 Update location
- button: Go
- button: Expand to Change Language or Country
- button: Expand Account and Lists
- button: Open All Categories Menu
- button: Prime Details
- button: Amazon Home Details
- button: Toys & Games Details
- button: Custom Products Details
- button: Play
- button: Next slide
- button: Open card for more information
- button: Back to top
- button: Choose a country/region for shopping. The current selection is United States.

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-kindle.json`
- Evidence ID: `ev_e18abe08b6186a3d379c577501d296b25aab1ac31537e2230948a0d3f32764db`
- Accessibility outline: 28486 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
