# RAE FAANG — Landing page copy

Produced with the [`landing-page-copy`](https://github.com/rampstackco/claude-skills/blob/main/skills/landing-page-copy/SKILL.md)
skill (7-section conversion structure). The built page is [`index.html`](index.html).

## Inputs

| Input | Value |
|---|---|
| **Offer** | An open catalog that maps every FAANG product to the open-source project that replaces it — and a pipeline to build the ones that don't exist. Free, MIT-licensed source. |
| **Audience** | Developers, sysadmins and open-source contributors who already want off proprietary FAANG products, and are sceptical of "just use an alternative" listicles. |
| **Primary objection** | "This sounds like vapourware — is anything actually built?" |
| **Conversion goal** | One action: open the catalog on GitHub. |
| **Brand voice** | Precise, evidence-first, allergic to hype. Short sentences. Numbers over adjectives. |

### Stated data gaps (skill data-availability rule)

The skill requires customer language, testimonials and logos. **None exist** — RAE FAANG has no
users, customers, or press coverage to quote. Per the skill's rule, fabricating them is not
sanctioned, so the social-proof slot is filled with **verifiable project status instead** and the
gap is labelled on the page itself. Case studies are likewise marked unavailable.

Nothing below is an estimated or invented number. Every figure is reproducible from the
repository (commands given in the Proof section).

---

## SECTION: Hero

- **Headline:** Every FAANG product, mapped to its open-source alternative.
- **Subheadline:** RAE FAANG catalogs the products of Meta, Amazon, Apple, Netflix and Google,
  names the open-source project that already replaces each one — with a cited source — and builds
  the ones that don't exist yet.
- **Primary CTA:** Explore the catalog
- **Supporting cue:** 34 products mapped · 24 already have an open-source alternative · 3 have none · MIT, no signup
- **Hero visual notes:** none required. The numbers *are* the visual. Keep the eyebrow as a mono
  label so the page reads like a technical artifact, not a sales page.

Rationale: the hero is **outcome + audience + mechanism** and its specificity ("34", "24", "3") is
the differentiator. A generic "reverse engineer everything" headline describes the ambition; this
one states a result the visitor can check in one click.

---

## SECTION: Social proof (early)

**Not available — stated on the page.** There are no customers, logos or testimonials to show.

Replacements used on the page (all verifiable):

- **Band label:** "Project status — not customer proof."
- **Trust statistic (real):** 34 products catalogued · 24 with an open-source alternative · 3 with none.
- **Footnote:** no users yet; the repository is the only evidence, and the commands to reproduce it are published.

---

## SECTION: Problem / promise

Rented software is not owned software. Prices rise, features disappear, services shut down, and
moving your data becomes somebody else's product decision. You cannot read the code, fix the bug,
or keep the thing running after the company stops caring.

The usual advice — "just use an alternative" — arrives as a blog listicle. It names five tools,
compares none, cites nothing, and goes stale within a year. What nobody publishes is the boring,
useful thing: for **this specific product**, does an open-source replacement already exist, and if
not, what exactly is missing?

Answering that question is step one. Building the missing pieces is step two.

---

## SECTION: Solution

- **Headline:** A map of what exists, and a plan for what doesn't.

1. **The catalog** — 34 products so far, one record each: company, product type, official URL,
   lifecycle status. *Outcome: stop rebuilding the same list from blog posts.*
2. **The open-source verdict** — for every product, does open-source already replace it?
   24 of 34 say yes — SearXNG for search, Jellyfin for streaming, Ceph for object storage,
   Mailcow for mail. *Outcome: don't rebuild what already exists.*
3. **The pending list** — 3 products have no open-source alternative at all (iOS, macOS, Amazon
   Prime) and 7 more have only partial coverage. Named, not implied. *Outcome: know exactly where
   the new work is.*
4. **The evidence** — every claim cites a public source, and 34 REA web-surface reports keep the
   raw evidence on disk. *Outcome: re-check the claim instead of trusting it.*
5. **The pipeline** — catalog → research → specify → build → verify, with agent roles and a
   definition of done that requires a passing command. *Outcome: contributing is a workflow, not a
   blank page.*

---

## SECTION: Proof

- **Headline:** Receipts, not vibes.

### The replacement map (real entries from `catalog/skills/`)

| Target product | Open-source alternative that already exists | License |
|---|---|---|
| Amazon S3 | Ceph (RADOS Gateway) | LGPL-2.1 |
| AWS Lambda | OpenFaaS | MIT |
| Netflix Streaming | Jellyfin | GPL-2.0 |
| Gmail | Mailcow | GPL-3.0 |
| WhatsApp | Matrix / Element | Apache-2.0 |
| Google Maps | OpenStreetMap + Organic Maps | ODbL-1.0 / Apache-2.0 |
| Google Workspace | Nextcloud | AGPL-3.0 |

### Data points (all reproducible)

- **34** products catalogued across **6** company entries — `node src/cli.js products | wc -l`
- **34** research dossiers with schema-validated frontmatter — `npm run validate`
- **34** REA web-surface reports with raw evidence committed — `npm run rea:catalog`
- **34** open-source skill files: **24 available / 7 partial / 3 pending** — `npm run skills:catalog`
- **24** tooling tests passing, green in CI on every push — `npm test`

### Case studies

**Not available.** No product has been implemented yet, so there is no customer outcome to report.
Stated on the page rather than implied.

---

## SECTION: Objection handling

**No — is anything actually built?**
No product implementations yet, and the page says so. What is built: the catalog, the research
dossiers, the open-source map, the REA evidence, the tooling, and a passing test suite — all
reproducible from the repository today.

**Isn't this just a list of other people's projects?**
For 24 of 34 products, deliberately yes — reusing Ceph instead of rewriting object storage is the
point. The new work is the map, the specs, and the products where **no** alternative exists.

**How do you avoid copying proprietary code?**
Clean room. Publicly observable behavior, official documentation and published protocols only. No
decompilation, no proprietary source, no protected assets, no bypassing access controls.

**Is this legal?**
Product names are functional references with no affiliation or endorsement implied. Implementations
must respect applicable licenses and third-party rights. Rights holders can raise issues on the
repository.

**Do I need to be an expert to contribute?**
No. Pick a product, read its dossier and skill file, follow the pipeline. Entry points are in
`CONTRIBUTING.md`.

**Why should I trust the catalog?**
Every claim cites a public source; the raw REA evidence is committed; and `npm run validate` plus
the test suite run in CI on every push.

---

## SECTION: Final CTA

- **Headline:** Pick a product. Read the map. Build what's missing.
- **Final CTA button:** Explore the catalog
- **Supporting cue:** MIT-licensed. No signup. 3 products still have no open-source alternative.

---

## Variants for testing

**Alternate headlines**

- Stop renting the software you depend on.
- 34 FAANG products. 24 open-source replacements. 3 nobody has built.
- The map from FAANG product to open-source alternative.

**Alternate CTAs**

- Open the open-source map
- Show me what's missing
- Browse the 34 products

**Alternate proof framings**

- Lead with the 3 pending products as scarcity ("only 3 left with no alternative").
- Lead with the 24 available as reassurance ("your replacement probably already exists").
- Lead with the REA evidence ("every claim has a receipt").

---

## Post-import checklist

Run against the built page (this was a revision in place, so the checklist is executed, not handed
over).

- [x] Copy spell-checked.
- [x] Every destination URL resolves.
- [x] Mobile preview at 375px.
- [x] SEO basics: descriptive `<title>`, meta description, `lang`, viewport, Open Graph tags.
- [x] Accessibility basics: skip link, landmarks, labelled sections, keyboard-focusable FAQ.
