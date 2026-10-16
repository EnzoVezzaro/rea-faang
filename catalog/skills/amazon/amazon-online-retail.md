---
name: amazon-online-retail
description: "Evidence-aware build skill for Amazon Online Retail (amazon-online-retail); investigate, assess reuse, implement scoped behavior and verify."
---

# Amazon Online Retail — implementation skill (`amazon-online-retail`)

> **Research status:** pending. Alternative coverage is **mature alternative listed**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Amazon Online Retail**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Amazon Online Retail** (`amazon-online-retail`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Amazon Online Retail** / `amazon-online-retail` | Product catalog |
| Company / category | Amazon / `consumer_application` / `ecommerce` | Product catalog |
| Official website / docs | [https://www.amazon.com/](https://www.amazon.com/) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **consumer_application** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `AMAZON-ONLINE-RETAIL-CAP-9E79F04E` | Product catalogue and search | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-ONLINE-RETAIL-CAP-0A10ECE7` | Cart, checkout and payments | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-ONLINE-RETAIL-CAP-343DA092` | Reviews, recommendations, marketplace | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `AMAZON-ONLINE-RETAIL-CAP-DF69BBFC` | Fulfilment and logistics integration | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Show/hide shortcuts, shift, option, z`, `button: Delivering to New York 10002 Update location`, `button: Go`, `button: Expand to Change Language or Country`, `button: Expand Account and Lists`, `button: Open All Categories Menu`, `button: Prime Details`, `button: Amazon Home Details`, `button: Toys & Games Details`, `button: Custom Products Details`, `button: Play`, `button: Back to top`, `button: Choose a country/region for shopping. The current selection is United States.`, `link: main content`, `link: Search, option, forward slash`, `link: Cart, shift, option, c`, `link: Home, shift, option, h`, `link: Your orders, shift, option, o`, `link: Amazon`, `combobox: Select the department you want to search in`, `link: Choose a language for shopping in Amazon United States. The current selection is English (EN).`, `link: Hello, sign in Account & Lists`, `link: Returns & Orders`, `link: 0 items in cart`, `link: Sign in`, `link: New to Amazon? Start here to create an account`, `link: Prime`, `link: Groceries`, `link: Today's Deals`, `link: Coupons`, `link: Pharmacy`, `link: Audible`, `link: Whole Foods`, `link: Music`, `link: Amazon Home`, `link: Registry`, `link: Automotive`, `link: Pet Supplies`, `link: New Releases`, `link: Video Games`, `link: Fashion`, `link: Handmade`, `link: Beauty & Personal Care`, `link: Baby`, `link: Toys & Games`, `link: Sports & Outdoors`, `link: Smart Home`, `link: Subscribe & Save`, `link: Works with Alexa`, `link: Gift Shop`, `link: Best Sellers`, `link: Amazon Haul`, `link: Custom Products`, `link: Luxury`, `link: Kindle Books`, `link: Books`, `link: New & exclusive color collection Upgrade your kitchen with Ninja New & exclusive color collection Upgrade your kitchen with Ninja`, `link: Low prices every day Halloween party finds under $20`, `link: YORK Zero Sugar Chocolate Peppermint Patties, Candy Bags, 3 oz (12 Count)`, `link: Neuhaus Belgian Chocolate Carré Milk Box – 40 Neuhaus Chocolate Carrés Milk Chocolates – 4 Crunchy Milk Varieties – Individually Wrapped – Chocolate Treasure Box`, `link: Quality Candy Hard Candies, Assorted, 80 Oz. (210-00052)`, `link: Sweets Assortment Bulk Variety (Twizzlers Rainbow and Strawberry, Jolly Rancher Gummies Misfits and Fruit Chews), 260 Pc./69.4`, `link: Gifts under $50 Spend less this holiday season`, `link: Owala FreeSip Kids Stainless Steel Water Bottle 16 oz Celestial Sphere`, `link: adidas Unisex-Kids VL Court 3.0, Clear Pink/Court Green/Gum, 6`, `link: ThermoFlask Insulated Water Bottle with Straw Lid (24 oz, Blush) - Leakproof, Stainless Steel Water Bottle for Cold & Hot Drinks, Travel & Daily Hydration`, `link: CLARINS Lip Perfector Peptide Plumping + Hydrating Lip Gloss, 0.35 Oz`, `link: Halloween faves Shop our Top 75+ kids' costumes`, `link: Disguise Harry Potter Gryffindor Dress Classic Girls Costume, Red & Gray, Kids Size Medium (7-8)`, `link: Spooktacular Creations Zombie Baseball Player Costumes for Boys, Scary Halloween Costume for Kids, Halloween Parties-M(8-10yr)`, `link: The Maximalist Edit Trending designs, textures & more The Maximalist Edit`, `link: Premium brands Discover cozy fall finds Premium brands Discover cozy fall finds`, `link: Carousel next slide`, `link: Shop Tory Burch new arrivals - See more from Tory Burch`, `link: Footwear`, `link: Watches`, `link: Jewelry`, `link: Handbags`, `link: rag & bone fall arrivals - Explore more from rag & bone`, `link: Jeans`, `link: Shoes`, `link: Shop all`, `link: Shop fall arrivals from Shopbop - Explore The Shop by Shopbop`, `link: Dresses`, `link: New Arrivals`, `link: Fall's better in Birkenstock - Shop Birkenstocks on Zappos`, `link: Women's shoes`, `link: Fall Collection`, `link: Men's shoes`, `link: Women's sandals`, `link: Shop 450+ gift card brands - Shop for all occasions`, `link: Best sellers`, `link: eGift cards`, `link: Physical gift card`, `link: Reload balance`, `link: Upgrade your decor - Shop all`, `link: Candles`, `link: Blankets & pillows`, `link: Lighting`, `link: Front door decor`, `link: Zappos fall shoe checklist - Shop all fall footwear`, `link: Women's boots`, `link: Men's dress shoes`, `link: Boys' sneakers`, `link: Girls' flats`, `link: Shop by sport - Shop all`, `link: Football`, `link: Basketball`, `link: Volleyball`, `link: Baseball`, `link: Careers`, `link: Amazon Newsletter`, `link: About Amazon`, `link: Accessibility`, `link: Sustainability`, `link: Press Center`, `link: Investor Relations`, `link: Amazon Devices`, `link: Amazon Science`, `link: Sell on Amazon`, `link: Sell apps on Amazon`, `link: Supply to Amazon`, `link: Protect & Build Your Brand`, `link: Become an Affiliate`, `link: Become a Delivery Driver`, `link: Start a Package Delivery Business`, `link: Advertise Your Products`, `link: Self-Publish with Us`, `link: Become an Amazon Hub Partner`, `link: See More Ways to Make Money`, `link: Amazon Visa`, `link: Amazon Store Card`, `link: Amazon Secured Card`, `link: Amazon Business Card`, `link: Shop with Points`, `link: Credit Card Marketplace`, `link: Reload Your Balance`, `link: Gift Cards`, `link: Amazon Currency Converter`, `link: Your Account`, `link: Your Orders`, `link: Shipping Rates & Policies`, `link: Amazon Prime`, `link: Returns & Replacements`, `link: Manage Your Content and Devices`, `link: Recalls and Product Safety Alerts`, `link: Registry & Gift List`, `link: Help`, `link: Amazon US Home`, `link: Choose a language for shopping. Current selection is English.`, `link: Amazon Music Stream millions of songs`, `link: Amazon Ads Reach customers wherever they spend their time`, `link: 6pm Score deals on fashion brands`, `link: AbeBooks Books, art & collectibles`, `link: ACX Audiobook Publishing Made Easy`, `link: Sell on Amazon Start a Selling Account`, `link: Veeqo Shipping Software Inventory Management`, `link: Amazon Business Everything For Your Business`, `link: Amazon Fresh Groceries & More Right To Your Door`, `link: AmazonGlobal Ship Orders Internationally`, `link: Home Services Experienced Pros Happiness Guarantee`, `link: Amazon Web Services Scalable Cloud Computing Services`, `link: Audible Listen to Books & Original Audio Performances`, `link: Box Office Mojo Find Movie Box Office Data`, `link: Goodreads Book reviews & recommendations`, `link: IMDb Movies, TV & Celebrities`, `link: IMDbPro Get Info Entertainment Professionals Need`, `link: Kindle Direct Publishing Indie Digital & Print Publishing Made Easy`, `link: Amazon Photos Unlimited Photo Storage Free With Prime`, `link: Prime Video Direct Video Distribution Made Easy`, `link: Shopbop Designer Fashion Brands`, `link: Amazon Resale Great Deals on Quality Used Products`, `link: Whole Foods Market America’s Healthiest Grocery Store`, `link: Woot! Deals and Shenanigans`, `link: Zappos Shoes & Clothing`, `link: Ring Smart Home Security Systems`, `link: eero WiFi Stream 4K Video in Every Room`, `link: Blink Smart Security for Every Home`, `link: Neighbors App Real-Time Crime & Safety Alerts`, `link: PillPack Pharmacy Simplified`, `link: Amazon Renewed Refurbished tech you can trust`, `link: Conditions of Use`, `link: Privacy Notice`, `link: Consumer Health Data Privacy Disclosure`, `link: Your Ads Privacy Choices`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Product catalogue and search:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Cart, checkout and payments:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Reviews, recommendations, marketplace:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Fulfilment and logistics integration:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `navigation: Shortcuts menu`, `banner`, `navigation: Primary`, `search`, `main`, `region: Video Player`, `region: Video Player`, `region: Video Player`, `complementary: Your recently viewed items and featured recommendations`, `navigation: More on Amazon` | Full IA/routes/authenticated navigation |
| Views/headings | `Skip to`, `Keyboard shortcuts`, `Upgrade your kitchen with Ninja`, `Halloween party finds under $20`, `Spend less this holiday season`, `Shop our Top 75+ kids' costumes`, `Trending designs, textures & more`, `Discover cozy fall finds`, `Shop Tory Burch new arrivals`, `rag & bone fall arrivals`, `Shop fall arrivals from Shopbop`, `Fall's better in Birkenstock`, `Shop 450+ gift card brands`, `Upgrade your decor`, `Zappos fall shoe checklist`, `Shop by sport`, `Get to Know Us`, `Make Money with Us`, `Amazon Payment Products`, `Let Us Help You`, `Amazon Music`, `Amazon Ads`, `6pm`, `AbeBooks`, `ACX` | Results and subsequent views |
| Controls | `button: Show/hide shortcuts, shift, option, z`, `button: Delivering to New York 10002 Update location`, `button: Go`, `button: Expand to Change Language or Country`, `button: Expand Account and Lists`, `button: Open All Categories Menu`, `button: Prime Details`, `button: Amazon Home Details`, `button: Toys & Games Details`, `button: Custom Products Details`, `button: Play`, `button: Back to top`, `button: Choose a country/region for shopping. The current selection is United States.`, `link: main content`, `link: Search, option, forward slash`, `link: Cart, shift, option, c`, `link: Home, shift, option, h`, `link: Your orders, shift, option, o`, `link: Amazon`, `combobox: Select the department you want to search in`, `link: Choose a language for shopping in Amazon United States. The current selection is English (EN).`, `link: Hello, sign in Account & Lists`, `link: Returns & Orders`, `link: 0 items in cart`, `link: Sign in`, `link: New to Amazon? Start here to create an account`, `link: Prime`, `link: Groceries`, `link: Today's Deals`, `link: Coupons`, `link: Pharmacy`, `link: Audible`, `link: Whole Foods`, `link: Music`, `link: Amazon Home`, `link: Registry`, `link: Automotive`, `link: Pet Supplies`, `link: New Releases`, `link: Video Games`, `link: Fashion`, `link: Handmade`, `link: Beauty & Personal Care`, `link: Baby`, `link: Toys & Games`, `link: Sports & Outdoors`, `link: Smart Home`, `link: Subscribe & Save`, `link: Works with Alexa`, `link: Gift Shop`, `link: Best Sellers`, `link: Amazon Haul`, `link: Custom Products`, `link: Luxury`, `link: Kindle Books`, `link: Books`, `link: New & exclusive color collection Upgrade your kitchen with Ninja New & exclusive color collection Upgrade your kitchen with Ninja`, `link: Low prices every day Halloween party finds under $20`, `link: YORK Zero Sugar Chocolate Peppermint Patties, Candy Bags, 3 oz (12 Count)`, `link: Neuhaus Belgian Chocolate Carré Milk Box – 40 Neuhaus Chocolate Carrés Milk Chocolates – 4 Crunchy Milk Varieties – Individually Wrapped – Chocolate Treasure Box`, `link: Quality Candy Hard Candies, Assorted, 80 Oz. (210-00052)`, `link: Sweets Assortment Bulk Variety (Twizzlers Rainbow and Strawberry, Jolly Rancher Gummies Misfits and Fruit Chews), 260 Pc./69.4`, `link: Gifts under $50 Spend less this holiday season`, `link: Owala FreeSip Kids Stainless Steel Water Bottle 16 oz Celestial Sphere`, `link: adidas Unisex-Kids VL Court 3.0, Clear Pink/Court Green/Gum, 6`, `link: ThermoFlask Insulated Water Bottle with Straw Lid (24 oz, Blush) - Leakproof, Stainless Steel Water Bottle for Cold & Hot Drinks, Travel & Daily Hydration`, `link: CLARINS Lip Perfector Peptide Plumping + Hydrating Lip Gloss, 0.35 Oz`, `link: Halloween faves Shop our Top 75+ kids' costumes`, `link: Disguise Harry Potter Gryffindor Dress Classic Girls Costume, Red & Gray, Kids Size Medium (7-8)`, `link: Spooktacular Creations Zombie Baseball Player Costumes for Boys, Scary Halloween Costume for Kids, Halloween Parties-M(8-10yr)`, `link: The Maximalist Edit Trending designs, textures & more The Maximalist Edit`, `link: Premium brands Discover cozy fall finds Premium brands Discover cozy fall finds`, `link: Carousel next slide`, `link: Shop Tory Burch new arrivals - See more from Tory Burch`, `link: Footwear`, `link: Watches`, `link: Jewelry`, `link: Handbags`, `link: rag & bone fall arrivals - Explore more from rag & bone`, `link: Jeans`, `link: Shoes`, `link: Shop all`, `link: Shop fall arrivals from Shopbop - Explore The Shop by Shopbop`, `link: Dresses`, `link: New Arrivals`, `link: Fall's better in Birkenstock - Shop Birkenstocks on Zappos`, `link: Women's shoes`, `link: Fall Collection`, `link: Men's shoes`, `link: Women's sandals`, `link: Shop 450+ gift card brands - Shop for all occasions`, `link: Best sellers`, `link: eGift cards`, `link: Physical gift card`, `link: Reload balance`, `link: Upgrade your decor - Shop all`, `link: Candles`, `link: Blankets & pillows`, `link: Lighting`, `link: Front door decor`, `link: Zappos fall shoe checklist - Shop all fall footwear`, `link: Women's boots`, `link: Men's dress shoes`, `link: Boys' sneakers`, `link: Girls' flats`, `link: Shop by sport - Shop all`, `link: Football`, `link: Basketball`, `link: Volleyball`, `link: Baseball`, `link: Careers`, `link: Amazon Newsletter`, `link: About Amazon`, `link: Accessibility`, `link: Sustainability`, `link: Press Center`, `link: Investor Relations`, `link: Amazon Devices`, `link: Amazon Science`, `link: Sell on Amazon`, `link: Sell apps on Amazon`, `link: Supply to Amazon`, `link: Protect & Build Your Brand`, `link: Become an Affiliate`, `link: Become a Delivery Driver`, `link: Start a Package Delivery Business`, `link: Advertise Your Products`, `link: Self-Publish with Us`, `link: Become an Amazon Hub Partner`, `link: See More Ways to Make Money`, `link: Amazon Visa`, `link: Amazon Store Card`, `link: Amazon Secured Card`, `link: Amazon Business Card`, `link: Shop with Points`, `link: Credit Card Marketplace`, `link: Reload Your Balance`, `link: Gift Cards`, `link: Amazon Currency Converter`, `link: Your Account`, `link: Your Orders`, `link: Shipping Rates & Policies`, `link: Amazon Prime`, `link: Returns & Replacements`, `link: Manage Your Content and Devices`, `link: Recalls and Product Safety Alerts`, `link: Registry & Gift List`, `link: Help`, `link: Amazon US Home`, `link: Choose a language for shopping. Current selection is English.`, `link: Amazon Music Stream millions of songs`, `link: Amazon Ads Reach customers wherever they spend their time`, `link: 6pm Score deals on fashion brands`, `link: AbeBooks Books, art & collectibles`, `link: ACX Audiobook Publishing Made Easy`, `link: Sell on Amazon Start a Selling Account`, `link: Veeqo Shipping Software Inventory Management`, `link: Amazon Business Everything For Your Business`, `link: Amazon Fresh Groceries & More Right To Your Door`, `link: AmazonGlobal Ship Orders Internationally`, `link: Home Services Experienced Pros Happiness Guarantee`, `link: Amazon Web Services Scalable Cloud Computing Services`, `link: Audible Listen to Books & Original Audio Performances`, `link: Box Office Mojo Find Movie Box Office Data`, `link: Goodreads Book reviews & recommendations`, `link: IMDb Movies, TV & Celebrities`, `link: IMDbPro Get Info Entertainment Professionals Need`, `link: Kindle Direct Publishing Indie Digital & Print Publishing Made Easy`, `link: Amazon Photos Unlimited Photo Storage Free With Prime`, `link: Prime Video Direct Video Distribution Made Easy`, `link: Shopbop Designer Fashion Brands`, `link: Amazon Resale Great Deals on Quality Used Products`, `link: Whole Foods Market America’s Healthiest Grocery Store`, `link: Woot! Deals and Shenanigans`, `link: Zappos Shoes & Clothing`, `link: Ring Smart Home Security Systems`, `link: eero WiFi Stream 4K Video in Every Room`, `link: Blink Smart Security for Every Home`, `link: Neighbors App Real-Time Crime & Safety Alerts`, `link: PillPack Pharmacy Simplified`, `link: Amazon Renewed Refurbished tech you can trust`, `link: Conditions of Use`, `link: Privacy Notice`, `link: Consumer Health Data Privacy Disclosure`, `link: Your Ads Privacy Choices` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[main content](#skippedLink)`, `[Search, option, forward slash](javascript:void(0))`, `[Cart, shift, option, c](javascript:void(0))`, `[Home, shift, option, h](javascript:void(0))`, `[Your orders, shift, option, o](javascript:void(0))`, `[Amazon](/ref=nav_logo)`, `[Choose a language for shopping in Amazon United States. The current selection is English (EN).](/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang)`, `[Hello, sign in Account & Lists](https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0)`, `[Returns & Orders](/gp/css/order-history?ref_=nav_orders_first)`, `[0 items in cart](/gp/cart/view.html?ref_=nav_cart)`, `[Sign in](https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0)`, `[New to Amazon? Start here to create an account](https://www.amazon.com/ap/register?openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_custrec_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0)`, `[Prime](/prime?ref_=nav_cs_primelink_nonmember)`, `[Groceries](/fmc/grocery-gateway?gsc=fe16aGPfFs46S&ref_=nav_cs_groceries)`, `[Today's Deals](/deals?ref_=nav_cs_gb)`, `[Coupons](/coupons?ref_=nav_cs_coupons)`, `[Pharmacy](https://pharmacy.amazon.com/?nodl=0&ref_=nav_cs_pharmacy)`, `[Audible](/Audible-Books-and-Originals/b/?ie=UTF8&node=18145289011&ref_=nav_cs_audible)`, `[Whole Foods](/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=nav_cs_whole_foods)`, `[Music](/music/player?ref_=nav_cs_music)`, `[Amazon Home](/home-garden-kitchen-furniture-bedding/b/?ie=UTF8&node=1055398&ref_=nav_cs_home)`, `[Registry](/gp/browse.html?node=16115931011&ref_=nav_cs_registry)`, `[Automotive](/automotive-auto-truck-replacements-parts/b/?ie=UTF8&node=15684181&ref_=nav_cs_automotive)`, `[Pet Supplies](/pet-shops-dogs-cats-hamsters-kittens/b/?ie=UTF8&node=2619533011&ref_=nav_cs_pets)`, `[New Releases](/gp/new-releases/?ref_=nav_cs_newreleases)`, `[Video Games](/computer-video-games-hardware-accessories/b/?ie=UTF8&node=468642&ref_=nav_cs_video_games)`, `[Fashion](/amazon-fashion/b/?ie=UTF8&node=7141123011&ref_=nav_cs_fashion)`, `[Handmade](/gp/browse.html?node=120955898011&ref_=nav_cs_handmade)`, `[Beauty & Personal Care](/Beauty-Makeup-Skin-Hair-Products/b/?ie=UTF8&node=3760911&ref_=nav_cs_beauty)`, `[Baby](/baby-car-seats-strollers-bedding/b/?ie=UTF8&node=165796011&ref_=nav_cs_baby)`, `[Toys & Games](/toys/b/?ie=UTF8&node=165793011&ref_=nav_cs_toys)`, `[Sports & Outdoors](/gp/browse.html?node=220556511011&ref_=nav_cs_sports)`, `[Smart Home](/Smart-Home/b/?ie=UTF8&node=6563140011&ref_=nav_cs_smart_home)`, `[Subscribe & Save](/auto-deliveries/landing?ref_=nav_cs_sns)`, `[Works with Alexa](/gp/browse.html?node=73846268011&ref_=nav_cs_wwa)`, `[Gift Shop](/gcx/Gifts-for-Everyone/gfhz/?ref_=nav_cs_giftfinder)`, `[Best Sellers](/gp/bestsellers/?ref_=nav_cs_bestsellers)`, `[Amazon Haul](/haul/store?ref_=nav_cs_hul_disb)`, `[Custom Products](/Amazon-Custom/b/?ie=UTF8&node=11032013011&ref_=nav_cs_custom)`, `[Luxury](/luxurystores?ref_=nav_cs_luxury_disc)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-9E79F04E — Product catalogue and search
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-9E79F04E`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ONLINE-RETAIL-CAP-9E79F04E` → `REQ-FUNC-9E79F04E` → `TEST-FUNC-9E79F04E`.

### REQ-FUNC-0A10ECE7 — Cart, checkout and payments
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-0A10ECE7`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ONLINE-RETAIL-CAP-0A10ECE7` → `REQ-FUNC-0A10ECE7` → `TEST-FUNC-0A10ECE7`.

### REQ-FUNC-343DA092 — Reviews, recommendations, marketplace
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-343DA092`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ONLINE-RETAIL-CAP-343DA092` → `REQ-FUNC-343DA092` → `TEST-FUNC-343DA092`.

### REQ-FUNC-DF69BBFC — Fulfilment and logistics integration
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-DF69BBFC`; fixture and expected output must be specified from evidence.
- **Trace:** `AMAZON-ONLINE-RETAIL-CAP-DF69BBFC` → `REQ-FUNC-DF69BBFC` → `TEST-FUNC-DF69BBFC`.

Keep original behavior VERIFIED/CORROBORATED distinct from inference and independent decisions INFERRED/PROPOSED. UNKNOWN stays unknown; contradictory evidence stays CONFLICTED. These requirements are blocked planning placeholders until evidence, user scope, measurable criteria and test oracles are recorded.

## 6. Data model and state

**Original product structures:** UNKNOWN. No structured evidence establishes fields/types, IDs, ownership/permissions, lifecycle, persistence, constraints, deletion/retention, import/export, migration, concurrency or indexes.

**Independent model (PROPOSED):** define only state needed for the researched first slice; specify IDs, validation, owners, state transitions, concurrency, deletion/export/retention and migration. Do not describe it as the target’s model.

## 7. APIs, integrations and protocols

**Original contracts:** none verified in structured evidence. Dossier prose does not establish supported APIs. Do not invent target endpoints, schemas, auth, events or limits. If the independent implementation needs an interface, define a versioned contract labelled PROPOSED, including request/response, authorization, errors, limits, timeouts, retries and idempotency.

## 8. Architecture and technical design

**PROPOSED independent design; target internals unknown.** Use only components required by verified scope.

```mermaid
flowchart LR
  UI[Interface] --> APP[Application and domain boundary]
  APP --> DB[(Persistence if needed)]
  APP --> EXT[Authorized integrations if needed]
```

Separate interface/domain/persistence/integration boundaries. Enforce access at trusted boundaries, isolate tenants where relevant, and define timeout/partial failure behavior. Add queues/caches/scaling/deployment components only when requirements justify them. Record configuration, secrets, data flow, recovery, observability and deployment assumptions in the implementation project.

## 9. Open-source foundation and dependency strategy

**Decision: candidates are PROPOSED for evaluation, not approved foundations.** Verify repository/version, license and dependency terms, actual code/modules, extension points, tests/CI, maintenance, security, deployment and integration cost. Map each requirement to actual code and test evidence; README claims and popularity are not proof.

| Candidate | Repository | Catalog license (unverified) | Claimed coverage (unverified) | Limitation | Decision |
|---|---|---|---|---|---|
| [Medusa](https://medusajs.com/) | Not recorded | MIT (unverified) | Open headless commerce platform (Node.js). | Modern, API-first. | Proposed evaluation lead; no verified foundation |
| [Saleor](https://saleor.io/) | Not recorded | BSD-3-Clause (unverified) | GraphQL-first headless commerce. | Modern alternative. | Proposed evaluation lead; no verified foundation |
| [Vendure](https://www.vendure.io/) | Not recorded | MIT (unverified) | TypeScript/GraphQL commerce framework. | Developer-focused. | Proposed evaluation lead; no verified foundation |
| [Magento Open Source](https://business.adobe.com/products/magento/magento-commerce.html) | Not recorded | OSL-3.0 (unverified) | Enterprise-grade open storefront. | Heavyweight; Adobe-stewarded. | Proposed evaluation lead; no verified foundation |
| [WooCommerce / Bagisto / Spree](https://woocommerce.com/) | Not recorded | GPL-3.0 / MIT / BSD-3-Clause (unverified) | Storefronts on WordPress and standalone stacks. | Range of approaches. | Proposed evaluation lead; no verified foundation |

No candidate has been independently cloned, executed, license-reviewed or security-reviewed by this generator.
## 10. Security and privacy

No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.

Product-specific review: Review product-specific identity, authorization, privacy, abuse and dependency threats. Do not claim compliance, privacy or security parity without scoped assessment.

## 11. Error handling and edge cases

These are test prompts, not target behavior assertions. Keep only relevant cases and derive expected behavior from evidence or label an independent decision PROPOSED.

- **EDGE-001:** Missing/malformed/oversized input. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-002:** Unauthorized or revoked action and tenant isolation where applicable. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-003:** Empty data/results and duplicate operations. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-004:** Concurrent updates or stale writes to mutable state. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-005:** Network timeout, throttling, external outage, retry and partial failure. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-006:** Cancellation/interruption during state change and restart recovery. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-007:** Corrupt/incompatible imported or persisted data; migration failure. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-008:** Expired credentials/session where applicable. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-9E79F04E** → `REQ-FUNC-9E79F04E`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-0A10ECE7** → `REQ-FUNC-0A10ECE7`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-343DA092** → `REQ-FUNC-343DA092`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-DF69BBFC** → `REQ-FUNC-DF69BBFC`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

These are proposed deterministic implementation-test plans, not original-product observations. Compare the original only through separately authorized, repeatable public observation. A passing spec test does not establish parity.

## 13. Implementation roadmap

### Phase 1 — Foundation and dependencies

- **Tasks:** Inspect user project, stack, constraints, tests, candidate implementations and licenses.
- **Prerequisites:** Repository inspection and user scope.
- **Deliverables:** Project map, evidence ledger, reuse decision, bounded plan
- **Requirements:** Select after evidence review
- **Tests:** Clean setup/validation smoke test
- **Completion:** Clean setup and documented dependency/reuse decision.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 2 — Core domain behavior

- **Tasks:** Research then implement one useful vertical slice with explicit state, validation and permissions.
- **Prerequisites:** Phase 1 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-9E79F04E, REQ-FUNC-0A10ECE7, REQ-FUNC-343DA092, REQ-FUNC-DF69BBFC
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-9E79F04E, REQ-FUNC-0A10ECE7, REQ-FUNC-343DA092, REQ-FUNC-DF69BBFC
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** E2E acceptance checks via user-facing interface.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 4 — Integrations

- **Tasks:** Add only documented/authorized integrations; mock boundaries for offline routine tests.
- **Prerequisites:** Phase 3 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Contract and failure-injection tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 5 — Secondary capabilities

- **Tasks:** Implement remaining in-scope behavior by user priority and evidence.
- **Prerequisites:** Phase 4 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Trace: REQ-FUNC-9E79F04E, REQ-FUNC-0A10ECE7, REQ-FUNC-343DA092, REQ-FUNC-DF69BBFC; document exclusions and unknowns.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 6 — Security and reliability

- **Tasks:** Review access, privacy, abuse, migration, backup, observability and recovery as applicable.
- **Prerequisites:** Phase 5 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Applicable security/recovery checks and risks recorded.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 7 — Verification and release

- **Tasks:** Run project checks; inspect behavior, accessibility, compatibility, license and docs.
- **Prerequisites:** Phase 6 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Reproducible result and transparent completion/gap report.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.


## 14. Evidence, uncertainty and exclusions

### Evidence index

| Source ID | Title / location | URL | Access date | Claim supported | Classification and limits |
|---|---|---|---|---|---|
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.amazon.com/) | Not recorded | Amazon Online Retail is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_81ed5913babe5d8697e5c2dacc10e6a3f9b9262da87b7259e1524758a74b3979` | Amazon Online Retail Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.amazon.com/) | 2026-10-13T18:57:05.024Z | A dated unauthenticated snapshot exposed controls button: Show/hide shortcuts, shift, option, z, button: Delivering to New York 10002 Update location, button: Go, button: Expand to Change Language or Country, button: Expand Account and Lists, button: Open All Categories Menu, button: Prime Details, button: Amazon Home Details, button: Toys & Games Details, button: Custom Products Details, button: Play, button: Back to top, button: Choose a country/region for shopping. The current selection is United States., link: main content, link: Search, option, forward slash, link: Cart, shift, option, c, link: Home, shift, option, h, link: Your orders, shift, option, o, link: Amazon, combobox: Select the department you want to search in, link: Choose a language for shopping in Amazon United States. The current selection is English (EN)., link: Hello, sign in Account & Lists, link: Returns & Orders, link: 0 items in cart, link: Sign in, link: New to Amazon? Start here to create an account, link: Prime, link: Groceries, link: Today's Deals, link: Coupons, link: Pharmacy, link: Audible, link: Whole Foods, link: Music, link: Amazon Home, link: Registry, link: Automotive, link: Pet Supplies, link: New Releases, link: Video Games, link: Fashion, link: Handmade, link: Beauty & Personal Care, link: Baby, link: Toys & Games, link: Sports & Outdoors, link: Smart Home, link: Subscribe & Save, link: Works with Alexa, link: Gift Shop, link: Best Sellers, link: Amazon Haul, link: Custom Products, link: Luxury, link: Kindle Books, link: Books, link: New & exclusive color collection Upgrade your kitchen with Ninja New & exclusive color collection Upgrade your kitchen with Ninja, link: Low prices every day Halloween party finds under $20, link: YORK Zero Sugar Chocolate Peppermint Patties, Candy Bags, 3 oz (12 Count), link: Neuhaus Belgian Chocolate Carré Milk Box – 40 Neuhaus Chocolate Carrés Milk Chocolates – 4 Crunchy Milk Varieties – Individually Wrapped – Chocolate Treasure Box, link: Quality Candy Hard Candies, Assorted, 80 Oz. (210-00052), link: Sweets Assortment Bulk Variety (Twizzlers Rainbow and Strawberry, Jolly Rancher Gummies Misfits and Fruit Chews), 260 Pc./69.4, link: Gifts under $50 Spend less this holiday season, link: Owala FreeSip Kids Stainless Steel Water Bottle 16 oz Celestial Sphere, link: adidas Unisex-Kids VL Court 3.0, Clear Pink/Court Green/Gum, 6, link: ThermoFlask Insulated Water Bottle with Straw Lid (24 oz, Blush) - Leakproof, Stainless Steel Water Bottle for Cold & Hot Drinks, Travel & Daily Hydration, link: CLARINS Lip Perfector Peptide Plumping + Hydrating Lip Gloss, 0.35 Oz, link: Halloween faves Shop our Top 75+ kids' costumes, link: Disguise Harry Potter Gryffindor Dress Classic Girls Costume, Red & Gray, Kids Size Medium (7-8), link: Spooktacular Creations Zombie Baseball Player Costumes for Boys, Scary Halloween Costume for Kids, Halloween Parties-M(8-10yr), link: The Maximalist Edit Trending designs, textures & more The Maximalist Edit, link: Premium brands Discover cozy fall finds Premium brands Discover cozy fall finds, link: Carousel next slide, link: Shop Tory Burch new arrivals - See more from Tory Burch, link: Footwear, link: Watches, link: Jewelry, link: Handbags, link: rag & bone fall arrivals - Explore more from rag & bone, link: Jeans, link: Shoes, link: Shop all, link: Shop fall arrivals from Shopbop - Explore The Shop by Shopbop, link: Dresses, link: New Arrivals, link: Fall's better in Birkenstock - Shop Birkenstocks on Zappos, link: Women's shoes, link: Fall Collection, link: Men's shoes, link: Women's sandals, link: Shop 450+ gift card brands - Shop for all occasions, link: Best sellers, link: eGift cards, link: Physical gift card, link: Reload balance, link: Upgrade your decor - Shop all, link: Candles, link: Blankets & pillows, link: Lighting, link: Front door decor, link: Zappos fall shoe checklist - Shop all fall footwear, link: Women's boots, link: Men's dress shoes, link: Boys' sneakers, link: Girls' flats, link: Shop by sport - Shop all, link: Football, link: Basketball, link: Volleyball, link: Baseball, link: Careers, link: Amazon Newsletter, link: About Amazon, link: Accessibility, link: Sustainability, link: Press Center, link: Investor Relations, link: Amazon Devices, link: Amazon Science, link: Sell on Amazon, link: Sell apps on Amazon, link: Supply to Amazon, link: Protect & Build Your Brand, link: Become an Affiliate, link: Become a Delivery Driver, link: Start a Package Delivery Business, link: Advertise Your Products, link: Self-Publish with Us, link: Become an Amazon Hub Partner, link: See More Ways to Make Money, link: Amazon Visa, link: Amazon Store Card, link: Amazon Secured Card, link: Amazon Business Card, link: Shop with Points, link: Credit Card Marketplace, link: Reload Your Balance, link: Gift Cards, link: Amazon Currency Converter, link: Your Account, link: Your Orders, link: Shipping Rates & Policies, link: Amazon Prime, link: Returns & Replacements, link: Manage Your Content and Devices, link: Recalls and Product Safety Alerts, link: Registry & Gift List, link: Help, link: Amazon US Home, link: Choose a language for shopping. Current selection is English., link: Amazon Music Stream millions of songs, link: Amazon Ads Reach customers wherever they spend their time, link: 6pm Score deals on fashion brands, link: AbeBooks Books, art & collectibles, link: ACX Audiobook Publishing Made Easy, link: Sell on Amazon Start a Selling Account, link: Veeqo Shipping Software Inventory Management, link: Amazon Business Everything For Your Business, link: Amazon Fresh Groceries & More Right To Your Door, link: AmazonGlobal Ship Orders Internationally, link: Home Services Experienced Pros Happiness Guarantee, link: Amazon Web Services Scalable Cloud Computing Services, link: Audible Listen to Books & Original Audio Performances, link: Box Office Mojo Find Movie Box Office Data, link: Goodreads Book reviews & recommendations, link: IMDb Movies, TV & Celebrities, link: IMDbPro Get Info Entertainment Professionals Need, link: Kindle Direct Publishing Indie Digital & Print Publishing Made Easy, link: Amazon Photos Unlimited Photo Storage Free With Prime, link: Prime Video Direct Video Distribution Made Easy, link: Shopbop Designer Fashion Brands, link: Amazon Resale Great Deals on Quality Used Products, link: Whole Foods Market America’s Healthiest Grocery Store, link: Woot! Deals and Shenanigans, link: Zappos Shoes & Clothing, link: Ring Smart Home Security Systems, link: eero WiFi Stream 4K Video in Every Room, link: Blink Smart Security for Every Home, link: Neighbors App Real-Time Crime & Safety Alerts, link: PillPack Pharmacy Simplified, link: Amazon Renewed Refurbished tech you can trust, link: Conditions of Use, link: Privacy Notice, link: Consumer Health Data Privacy Disclosure, link: Your Ads Privacy Choices and landmarks navigation: Shortcuts menu, banner, navigation: Primary, search, main, region: Video Player, region: Video Player, region: Video Player, complementary: Your recently viewed items and featured recommendations, navigation: More on Amazon. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

### Confidence classifications

VERIFIED: observed/documented within exact scope. CORROBORATED: supported by multiple compatible sources. INFERRED: reasoned, not directly established. PROPOSED: independent design or candidate. UNKNOWN: not established. CONFLICTED: sources disagree. A source URL alone is not verification; confidence cannot exceed the source. Every important claim in a future completed research record must cite its source location and access date.

### Prioritized unknowns

| Priority | Unknown / blocker | Next evidence action |
|---|---|---|
| P0 | Claim-level evidence linked to each capability. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Investigate official documentation and authorized public behavior; update evidence IDs. |
| P0 | Intended user, roles, user jobs, and requested implementation boundary. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Research product/user scope; ask user when scope choice materially changes deliverable. |
| P0 | Full successful, denied, failed, cancelled, retry and recovery workflows. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Observe authorized workflows; record checkpoint and observable oracle. |
| P1 | Supported versions, platforms, responsive and accessibility behavior. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Verify product version and platform documentation; run authorized observation. |
| P1 | Data model, state, ownership, retention, import/export and concurrency. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Use primary docs or record as unknown; propose only the independent slice model. |
| P1 | API/protocol contracts, integrations, authorization, limits and errors. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Use official API spec or label independent contract PROPOSED. |
| P1 | Candidate repository state, implementation, tests, license and operations. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Inspect exact repository/version and distribution dependencies before recommendation. |
| P2 | Representative performance targets and operational scale. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Define workload and target before measurement; avoid scale equivalence claims. |

### Resumable investigation checkpoint

Resume token: `amazon-online-retail`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Amazon Online Retail is the world's largest e-commerce marketplace, offering hundreds of millions of products across categories including electronics, books, clothing, home goods, groceries, and more. It operates as both a first-party retailer (Amazon Retail) and a third-party marketplace (Marketplace), with fulfillment options including Fulfillment by Amazon (FBA), Seller Fulfilled Prime, and direct shipping.

# 2. Product identity and ownership

- **Official name:** Amazon.com / Amazon Online Retail
- **Company and business unit:** Amazon.com Inc. (Stores division)
- **Parent organization:** Amazon.com Inc.
- **Original launch date:** 1995 (books), expanded to everything store
- **Current lifecycle status:** active
- **Previous names:** Cadabra (original incorporation name)
- **Acquisitions or ownership changes:** Acquired Zappos (2009), Whole Foods (2017), PillPack (2018), iRobot (2022, pending/abandoned)
- **Related products:** Amazon Prime, AWS, Amazon Advertising, Amazon Logistics, Amazon Fresh, Amazon Pharmacy, Amazon Business
- **Official website:** https://www.amazon.com/
- **Official documentation:** https://sellercentral.amazon.com/ (sellers), https://affiliate-program.amazon.com/ (associates)

# 3. Product capabilities

- **Product catalog:** 350M+ products, ASIN-based identification, variation relationships
- **Search and discovery:** A9 algorithm, autocomplete, filters, browse nodes, sponsored products
- **Product detail pages:** Images, videos, 3D views, specifications, Q&A, reviews, ratings
- **Reviews and ratings:** Verified purchase badges, Vine program, review helpfulness voting
- **Cart and checkout:** 1-Click ordering, saved addresses/payment, gift options, Amazon Pay
- **Fulfillment:** FBA (storage, pick/pack/ship, customer service, returns), MCF (multi-channel), Seller Fulfilled Prime
- **Shipping:** Prime free 1-2 day, Same-Day, Amazon Day, Lockers, Counter, Key (in-garage/in-home)
- **Returns:** Online return center, drop-off (Kohl's, UPS, Whole Foods), QR code returns, refund before return
- **Subscriptions:** Subscribe & Save (recurring deliveries, discounts)
- **Marketplace:** Third-party sellers (professional/individual), Buy Box algorithm, Brand Registry
- **Amazon Business:** B2B purchasing, quantity discounts, tax exemption, analytics
- **International:** 20+ marketplaces, currency conversion, cross-border fulfillment
- **Advertising:** Sponsored Products, Brands, Display, DSP, video ads
- **Alexa shopping:** Voice ordering, reordering, deal notifications
- **AR View / Room Decorator:** Augmented reality product visualization

# 4. Technical architecture

- **Microservices:** Service-oriented architecture, thousands of services
- **Catalog:** Distributed catalog service, ASIN as primary key, eventual consistency
- **Search:** A9 (proprietary), inverted indexes, ranking models, real-time indexing
- **Recommendations:** Item-to-item collaborative filtering, real-time personalization
- **Fulfillment:** Warehouse management (WMS), transportation management (TMS), robotics (Kiva), optimization algorithms
- **Payments:** Internal payment processing, fraud detection, multi-currency
- **Infrastructure:** AWS (EC2, S3, DynamoDB, Aurora, Lambda, etc.), custom hardware (Inferentia, Trainium)
- **Mobile/Web:** React Native (app), progressive web app, native iOS/Android

# 5. User workflows

Shoppers: search/browse → product detail → add to cart → checkout → track delivery → review. Sellers: register → list products (manual/feed/API) → manage inventory → fulfill orders (FBA/self) → handle returns → advertise → analyze performance. Prime members: free shipping, Prime Video, Prime Music, exclusive deals.

# 6. Pricing and access

Free to browse and buy. Prime: $139/year or $14.99/month (US). Sellers: Individual ($0.99/item) or Professional ($39.99/mo) + referral fees (8-45% by category) + FBA fees (storage, fulfillment, removal). Advertising: CPC/CPM bidding.

# 7. API and integration surface

- **SP-API (Selling Partner API):** REST/JSON, OAuth, catalog, orders, fulfillment, reports, finances, notifications
- **Product Advertising API (PA-API):** Affiliate product data, search, browse
- **Amazon Business API:** B2B purchasing integration
- **Marketplace Web Service (MWS):** Legacy, being deprecated
- **Amazon Pay API:** Checkout on third-party sites
- **Alexa Shopping Kit:** Voice commerce skills

# 8. Existing open-source alternatives

- **Magento / Adobe Commerce:** Self-hosted PHP, extensive extensions, B2B/B2C
- **WooCommerce:** WordPress plugin, largest market share, PHP
- **Shopify (SaaS):** Not open-source, but dominant alternative
- **OpenCart:** PHP, lightweight, extension marketplace
- **PrestaShop:** PHP, European focus, modular
- **Sylius:** PHP/Symfony, headless-ready, developer-focused
- **Saleor:** Python/Django/GraphQL, headless, modern stack
- **Medusa:** Node.js/TypeScript, headless, composable
- **Odoo:** Python, ERP + e-commerce, modular
- **Spree / Solidus:** Ruby on Rails, API-first
- **No open-source alternative replicates Amazon's marketplace scale, fulfillment network, or recommendation engine**

# 9. Alternative comparison

Magento, WooCommerce, and Shopify dominate merchant-facing e-commerce. For marketplace model (multi-vendor), extensions exist (Magento Marketplace, WCFM for WooCommerce, Sharetribe) but lack Amazon's integrated fulfillment (FBA), Prime logistics, and trust infrastructure. Saleor and Medusa are modern headless alternatives for custom builds.

# 10. Missing capabilities and opportunity analysis

Integrated fulfillment network (FBA), Prime logistics (1-2 day at scale), trusted marketplace with A-to-Z Guarantee, proprietary recommendation engine, and massive product catalog are the main gaps. An open alternative could focus on a federated marketplace protocol (ActivityPub for commerce) with standardized fulfillment APIs.

# 11. RAE implementation strategy

Not feasible to replicate Amazon's scale. Strategy: Build on Saleor or Medusa for headless commerce core. Add marketplace extensions (multi-vendor, commission handling). Integrate with open fulfillment APIs (Shippo, EasyPost) for shipping. Explore federated commerce protocols (OASIS, ActivityPub extensions). Focus on merchant-owned, interoperable commerce.

# 12. Security, privacy, and compliance

PCI DSS for payments, GDPR/CCPA for personal data, SOX for financials, sales tax nexus compliance. Marketplace adds seller verification, product compliance (CPSC, FDA), counterfeit prevention (Transparency, Project Zero). Open alternative must support PCI, GDPR, tax calculation (Avalara/TaxJar), and seller onboarding/KYC.

# 13. Sources and evidence

- https://www.amazon.com/ (retail site)
- https://sellercentral.amazon.com/ (seller docs)
- https://developer-docs.amazon.com/sp-api/ (SP-API docs)
- https://www.shopify.com/ (alternative)
- https://saleor.io/ (alternative)

# 14. Open questions

- Can a federated marketplace protocol achieve critical mass?
- What is the minimum viable fulfillment network for competitive shipping?
- How to handle trust/reputation without a central authority?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Saleor + Medusa are the best modern open-source bases for merchant stores. For marketplace, Sharetribe (open core) or custom extensions on Saleor. The fulfillment/logistics gap requires carrier integration, not replication.

---

# 17. RAE implementation strategy (continued)

Phase 1: Saleor/Medusa core with multi-vendor extension. Phase 2: Fulfillment API integrations (Shippo, carrier APIs). Phase 3: Search/recommendation (Meilisearch + custom models). Phase 4: Federated identity/payments (OIDC, Interledger). Phase 5: Seller tools (analytics, advertising).

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier amazon-online-retail` and inspect canonical identity with `npx rae-faang products show amazon-online-retail --format json`.
2. Inspect the existing repository, architecture, dependencies, tests, configuration and interface before editing.
3. Confirm target scope and user priorities; list evidence blockers and never fill them with invented facts.
4. Evaluate candidate foundations through actual code, exact version, license/dependency terms, tests, security, maintenance, operations and fit.
5. Make a minimal dependency-aware plan for a functioning vertical slice.
6. Implement the slice with original code/assets and the host project’s conventions.
7. Add deterministic tests for every implemented requirement, including relevant failure and permission paths.
8. Implement remaining scoped capabilities incrementally; explicitly mark partial, excluded and unknown items.
9. Review security, privacy, dependencies, licensing, accessibility and compatibility.
10. Run actual project checks and inspect behavior through the interface the user will use.
11. Fix causes; do not weaken tests, hide errors or claim parity from generated code.
12. Document deviations, unimplemented requirements, limitations and checks not run.
13. Report requirement → code → test evidence and actual command results.
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang amazon-online-retail --out ./amazon-online-retail.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit amazon-online-retail --out ./amazon-online-retail-agent`.

### Multi-agent task plan and outputs

Researcher: own the evidence ledger and unknowns. Architect: approve scope, boundaries and contracts before parallel work. Implementers: deliver non-overlapping, integrated vertical slices. Tester: map acceptance checks to requirement IDs. Reviewer: inspect privacy, security, accessibility and license risk. Documenter: preserve setup and limitations. Handoffs record changed files, requirement IDs, commands/exit codes, checks not run and one specific next action.

### Acceptance criteria and definition of done

- Every in-scope behavior has a unique requirement ID, evidence/confidence, bounded scope, measurable acceptance oracle and associated test/manual check.
- Each implemented requirement maps to code and a deterministic passing test or repeatable manual observation; unknown requirements remain blocked/unknown.
- Primary and relevant alternate/failure workflows run through the user-facing interface; partial/excluded scope and recovery behavior are documented.
- Security, privacy, dependency/license, accessibility, compatibility, setup, project checks, and unrun checks are reported honestly.
- Requirement trace is evidence → workflow → specification/contract → implementation → automated test; passing specification checks do not claim target parity.

### Product quality and verification plan

- Correctness: tested success, empty, malformed, denied, duplicate, timeout/retry, cancellation, partial failure and recovery cases as relevant.
- Security/privacy: trust boundaries, least privilege, secret handling, data minimization, retention/export/deletion and abuse controls.
- UX/accessibility: keyboard/screen reader, labels/focus, loading/empty/error/success states, responsive behavior and reduced motion where relevant.
- Reliability/performance: reproducible setup, migrations, backup/restore, observability, representative workloads and measured targets before claims.
- Compatibility/licensing: test claimed versions/platforms; check direct/transitive license obligations and dependencies.

### End-to-end implementation milestones

Follow the seven dependency-aware phases in the roadmap above. Prefer a complete, tested vertical slice over disconnected scaffolding; continue remaining verified in-scope requirements and record blockers.

### Required deliverables

- Evidence ledger, behavior/capability map, prioritized unknowns and source limitations.
- User scope, architecture/data/API decisions with original-vs-proposed labels, and a candidate reuse/license evaluation.
- Working implementation, requirement-to-test traceability, actual project check results and interface-level verification.
- Documented deviations, partial/not-started/excluded requirements, unrun checks, setup and next actionable step.

### Provenance

- Product: [catalog/products.jsonl](../../products.jsonl) (`amazon-online-retail`).
- Dossier: [research/companies/amazon/products/amazon-online-retail.md](../../../research/companies/amazon/products/amazon-online-retail.md).
- REA capture: [catalog/rea/amazon/amazon-online-retail.md](../../rea/amazon/amazon-online-retail.md) (2026-10-13T18:57:05.024Z); raw record: [catalog/rea/evidence/amazon-online-retail.json](../../rea/evidence/amazon-online-retail.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.amazon.com/) — Amazon Online Retail is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Amazon Online Retail Public web-surface observation (REA)](https://www.amazon.com/) — A dated unauthenticated snapshot exposed controls button: Show/hide shortcuts, shift, option, z, button: Delivering to New York 10002 Update location, button: Go, button: Expand to Change Language or Country, button: Expand Account and Lists, button: Open All Categories Menu, button: Prime Details, button: Amazon Home Details, button: Toys & Games Details, button: Custom Products Details, button: Play, button: Back to top, button: Choose a country/region for shopping. The current selection is United States., link: main content, link: Search, option, forward slash, link: Cart, shift, option, c, link: Home, shift, option, h, link: Your orders, shift, option, o, link: Amazon, combobox: Select the department you want to search in, link: Choose a language for shopping in Amazon United States. The current selection is English (EN)., link: Hello, sign in Account & Lists, link: Returns & Orders, link: 0 items in cart, link: Sign in, link: New to Amazon? Start here to create an account, link: Prime, link: Groceries, link: Today's Deals, link: Coupons, link: Pharmacy, link: Audible, link: Whole Foods, link: Music, link: Amazon Home, link: Registry, link: Automotive, link: Pet Supplies, link: New Releases, link: Video Games, link: Fashion, link: Handmade, link: Beauty & Personal Care, link: Baby, link: Toys & Games, link: Sports & Outdoors, link: Smart Home, link: Subscribe & Save, link: Works with Alexa, link: Gift Shop, link: Best Sellers, link: Amazon Haul, link: Custom Products, link: Luxury, link: Kindle Books, link: Books, link: New & exclusive color collection Upgrade your kitchen with Ninja New & exclusive color collection Upgrade your kitchen with Ninja, link: Low prices every day Halloween party finds under $20, link: YORK Zero Sugar Chocolate Peppermint Patties, Candy Bags, 3 oz (12 Count), link: Neuhaus Belgian Chocolate Carré Milk Box – 40 Neuhaus Chocolate Carrés Milk Chocolates – 4 Crunchy Milk Varieties – Individually Wrapped – Chocolate Treasure Box, link: Quality Candy Hard Candies, Assorted, 80 Oz. (210-00052), link: Sweets Assortment Bulk Variety (Twizzlers Rainbow and Strawberry, Jolly Rancher Gummies Misfits and Fruit Chews), 260 Pc./69.4, link: Gifts under $50 Spend less this holiday season, link: Owala FreeSip Kids Stainless Steel Water Bottle 16 oz Celestial Sphere, link: adidas Unisex-Kids VL Court 3.0, Clear Pink/Court Green/Gum, 6, link: ThermoFlask Insulated Water Bottle with Straw Lid (24 oz, Blush) - Leakproof, Stainless Steel Water Bottle for Cold & Hot Drinks, Travel & Daily Hydration, link: CLARINS Lip Perfector Peptide Plumping + Hydrating Lip Gloss, 0.35 Oz, link: Halloween faves Shop our Top 75+ kids' costumes, link: Disguise Harry Potter Gryffindor Dress Classic Girls Costume, Red & Gray, Kids Size Medium (7-8), link: Spooktacular Creations Zombie Baseball Player Costumes for Boys, Scary Halloween Costume for Kids, Halloween Parties-M(8-10yr), link: The Maximalist Edit Trending designs, textures & more The Maximalist Edit, link: Premium brands Discover cozy fall finds Premium brands Discover cozy fall finds, link: Carousel next slide, link: Shop Tory Burch new arrivals - See more from Tory Burch, link: Footwear, link: Watches, link: Jewelry, link: Handbags, link: rag & bone fall arrivals - Explore more from rag & bone, link: Jeans, link: Shoes, link: Shop all, link: Shop fall arrivals from Shopbop - Explore The Shop by Shopbop, link: Dresses, link: New Arrivals, link: Fall's better in Birkenstock - Shop Birkenstocks on Zappos, link: Women's shoes, link: Fall Collection, link: Men's shoes, link: Women's sandals, link: Shop 450+ gift card brands - Shop for all occasions, link: Best sellers, link: eGift cards, link: Physical gift card, link: Reload balance, link: Upgrade your decor - Shop all, link: Candles, link: Blankets & pillows, link: Lighting, link: Front door decor, link: Zappos fall shoe checklist - Shop all fall footwear, link: Women's boots, link: Men's dress shoes, link: Boys' sneakers, link: Girls' flats, link: Shop by sport - Shop all, link: Football, link: Basketball, link: Volleyball, link: Baseball, link: Careers, link: Amazon Newsletter, link: About Amazon, link: Accessibility, link: Sustainability, link: Press Center, link: Investor Relations, link: Amazon Devices, link: Amazon Science, link: Sell on Amazon, link: Sell apps on Amazon, link: Supply to Amazon, link: Protect & Build Your Brand, link: Become an Affiliate, link: Become a Delivery Driver, link: Start a Package Delivery Business, link: Advertise Your Products, link: Self-Publish with Us, link: Become an Amazon Hub Partner, link: See More Ways to Make Money, link: Amazon Visa, link: Amazon Store Card, link: Amazon Secured Card, link: Amazon Business Card, link: Shop with Points, link: Credit Card Marketplace, link: Reload Your Balance, link: Gift Cards, link: Amazon Currency Converter, link: Your Account, link: Your Orders, link: Shipping Rates & Policies, link: Amazon Prime, link: Returns & Replacements, link: Manage Your Content and Devices, link: Recalls and Product Safety Alerts, link: Registry & Gift List, link: Help, link: Amazon US Home, link: Choose a language for shopping. Current selection is English., link: Amazon Music Stream millions of songs, link: Amazon Ads Reach customers wherever they spend their time, link: 6pm Score deals on fashion brands, link: AbeBooks Books, art & collectibles, link: ACX Audiobook Publishing Made Easy, link: Sell on Amazon Start a Selling Account, link: Veeqo Shipping Software Inventory Management, link: Amazon Business Everything For Your Business, link: Amazon Fresh Groceries & More Right To Your Door, link: AmazonGlobal Ship Orders Internationally, link: Home Services Experienced Pros Happiness Guarantee, link: Amazon Web Services Scalable Cloud Computing Services, link: Audible Listen to Books & Original Audio Performances, link: Box Office Mojo Find Movie Box Office Data, link: Goodreads Book reviews & recommendations, link: IMDb Movies, TV & Celebrities, link: IMDbPro Get Info Entertainment Professionals Need, link: Kindle Direct Publishing Indie Digital & Print Publishing Made Easy, link: Amazon Photos Unlimited Photo Storage Free With Prime, link: Prime Video Direct Video Distribution Made Easy, link: Shopbop Designer Fashion Brands, link: Amazon Resale Great Deals on Quality Used Products, link: Whole Foods Market America’s Healthiest Grocery Store, link: Woot! Deals and Shenanigans, link: Zappos Shoes & Clothing, link: Ring Smart Home Security Systems, link: eero WiFi Stream 4K Video in Every Room, link: Blink Smart Security for Every Home, link: Neighbors App Real-Time Crime & Safety Alerts, link: PillPack Pharmacy Simplified, link: Amazon Renewed Refurbished tech you can trust, link: Conditions of Use, link: Privacy Notice, link: Consumer Health Data Privacy Disclosure, link: Your Ads Privacy Choices and landmarks navigation: Shortcuts menu, banner, navigation: Primary, search, main, region: Video Player, region: Video Player, region: Video Player, complementary: Your recently viewed items and featured recommendations, navigation: More on Amazon. (VERIFIED; accessed 2026-10-13T18:57:05.024Z).
