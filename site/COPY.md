# RAE FAANG: Landing page copy

Built with the [`copywriting`](https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/SKILL.md) skill for conversion structure and [`humanizer`](https://github.com/blader/humanizer) to keep the prose direct and natural.

The landing page is generated. Edit the copy here and mirror changes in `homePage()` in [`tools/site/templates.mjs`](../tools/site/templates.mjs), then run `npm run site:build`. Counts come from catalog data at build time.

## Inputs

| Input | Value |
|---|---|
| **Offer** | Product research, candidate open-source projects and a Markdown skill for each catalogued product. Give the skill to a coding agent to help plan and test an independent implementation in your project. |
| **Audience** | Developers, sysadmins and open-source contributors interested in building independent software with coding agents. |
| **Primary question** | “What can I learn from this catalog, and what do I do next?” |
| **Conversion goal** | Browse the catalog. |
| **Brand voice** | Plain, precise and specific. Use concrete details. State limits and uncertainty directly. |

The catalog informs your work; it does not build or verify software for you. Candidate projects are research leads, not guaranteed replacements. Coverage labels describe how much alternative research is recorded, not whether an implementation is feasible.

### Data

Counts are generated from repository data. The commands in the Proof section show how to inspect or regenerate them.

---

## SECTION: Hero

- **Headline:** Build the software you need.
- **Subheadline:** Start with product research, not a blank page.
- **Supporting copy:** Each catalog entry includes product research, open-source projects to consider and a Markdown skill for your coding agent. Use the skill to plan and test an independent implementation in your project.
- **Primary CTA:** Pick a product
- **Secondary CTA:** See how it works
- **Hero visual:** Show real catalog products, company names and alternative-coverage labels. Each name links to its product page. The Product Build Pass uses catalog data; changing the selected product updates its details and skill download. On mobile, show the headline and actions before the product list and pass.

The full catalog follows as a typographic index grouped by company. Every product appears once, links to its dossier and carries its current alternative-research state. Do not invent activity or status.

External links open in a new tab with `rel="noopener noreferrer"`. Internal links stay in the same tab.

---

## SECTION: The product skill

- **Heading:** One product. One skill. A clearer place to start.
- **Copy:** Each product has a Markdown skill for a coding agent. It links to product context, research, candidate open-source projects and directions for planning, building and testing a scoped implementation.
- **Presentation:** Four ordered steps: Choose, Review, Build, Test.

---

## SECTION: The gap, in numbers

Counts come from committed catalog data at build time. Describe the test total as test cases in the repository, not as passing tests; direct visitors to `npm test` for the current result.

---

## SECTION: What the catalog answers

Product pages link to research, candidate projects and a Markdown skill for a coding agent. Candidates are starting points to assess, not guarantees of feature parity. The skill helps the agent decide what to reuse, what to build and how to test the result in the user's project.

---

## SECTION: Solution

- **Headline:** Choose a product. Give its skill to your agent.

1. **The catalog:** 77 products, each with a company, type, official URL and lifecycle status. Browse or filter the inventory.
2. **Candidate projects:** Product pages list projects that may cover similar user needs. 40 products have a mature candidate listed, including SearXNG, Jellyfin, Ceph and Mailcow. Review each project's coverage before choosing it.
3. **The product skill:** Every product has a downloadable Markdown skill with product context, research, candidates and build-and-test directions. Give the skill to your coding agent in your project.
4. **The research:** Product dossiers cite sources. REA reports record observations from public web pages; they do not show private workflows or internal implementation.
5. **Your build:** Use the skill to review evidence, choose what to reuse, plan a scope and test the result in your project.

---

## SECTION: Proof

- **Headline:** Browse the research behind the suggestions.
- **Intro:** These are candidate projects, not guaranteed replacements. Product pages show what the research supports, where coverage is uncertain and which sources were used.

### Candidate projects listed in the catalog

| Target product | Candidate project | License |
|---|---|---|
| Amazon S3 | Ceph (RADOS Gateway) | LGPL-2.1 |
| AWS Lambda | OpenFaaS | MIT |
| Netflix Streaming | Jellyfin | GPL-2.0 |
| Gmail | Mailcow | GPL-3.0 |
| WhatsApp | Matrix / Element | Apache-2.0 |
| Google Maps | OpenStreetMap + Organic Maps | ODbL-1.0 / Apache-2.0 |
| Google Workspace | Nextcloud | AGPL-3.0 |

### Data points

- **77** products across **6** company entries: `rae products list`
- **77** research dossiers with frontmatter checks: `npm run validate`
- **77** REA reports of public web pages with captured evidence: `npm run rea:catalog`
- **77** product skills: **40 mature candidate / 29 partial coverage / 8 no verified alternative**: `npm run skills:catalog`
- Run `npm test` to see the current test results.
- Regenerate the site with `npm run site:build`.

---

## SECTION: Questions

**How do I use a product skill?**
Choose a product and download its Markdown skill, or generate one with the RAE CLI. Give it to your coding agent from the project where you want to work. It links to product research and candidates, and helps the agent plan, build and test a scoped implementation.

**What does the catalog add beyond candidate projects?**
Each entry also includes product context and a skill with build directions. Use those to review the research, decide what to reuse and scope the work for your project.

**How do you avoid copying proprietary code?**
The research uses publicly observable behavior, official documentation and published protocols. It does not use proprietary source, decompile software, copy protected assets or bypass access controls.

**What should I check before building?**
Review cited sources, candidate project licenses and any third-party rights that apply to your implementation. Product names are functional references; no affiliation or endorsement is implied. Rights holders can raise an issue on the repository.

**How can I contribute?**
Choose one product, read its dossier and skill, then pick a focused task from `PLAN.md`. `CONTRIBUTING.md` explains setup and how to submit a change.

**How can I check a product entry?**
Open its research dossier and follow the citations. Where available, the product page links to a REA report with observations from a public web page. `npm run validate` checks record structure and generated files; it does not confirm that every research claim is correct or current.

---

## SECTION: Final CTA

- **Headline:** Pick a product. Start with the research.
- **Button:** Pick a product
- **Supporting copy:** Download the product skill, review the sources and candidate projects, then give it to your coding agent. RAE FAANG is MIT-licensed; candidate projects and your implementation have their own licenses.

---

## SECTION: Catalog page — rows

- **Page title:** The catalog, live.
- **Intro:** Each product has a Markdown skill for a coding agent, alongside research into candidate open-source projects.
- Derive inventory and coverage counts from the data.
- Put search before Company and Coverage filters.
- Use compact, scannable rows. Show the product, candidate, license where recorded, coverage label and a clear details link. Stack these details on mobile.
- If nothing matches, explain that and provide a Reset filters control.

---

## SECTION: Product page — dossier

Link to one Markdown skill for the coding agent, alongside the dossier, candidate projects and coverage notes. Explain that the skill helps the agent review sources, plan work and test an independent implementation in the user's project. Coverage labels describe research into existing projects; they are not implementation status.

Use a two-column body on desktop and stack it on mobile. Include:

1. **At a glance** — what the product does and its core capabilities.
2. **Candidate projects** — include project links, license and the CLI command; explain that a candidate may cover all, part or none of the target's user needs.
3. **Coverage and gaps** — summarize the research and the remaining gap.
4. **Product skill** — identify `agent-kit.md` as the product-specific Markdown skill; show `npx rae-faang <id>` and the download. Explain that the user gives the skill to their coding agent in the project where the implementation will live. Keep optional MCP configuration and workspace scaffolding secondary.
5. **Evidence** — link the catalog record, research dossier, REA report when available and skill file.
6. **Next step** — review the skill and candidate projects, then plan work in the user's project.

Use the CLI shorthand `npx rae-faang <id> --alt <name>` for a candidate. Quote names only when the shell requires it, such as `--alt "Ceph (RADOS Gateway)"`. The `rae ...` spelling can be a note for contributors already in the repository.

---

## Alternate copy to avoid

Do not use claims that imply a complete replacement, guaranteed parity, automatic verification or that no alternative exists merely because the catalog has not verified one. Avoid slogans that ask people to trust the catalog; tell them what they can inspect and what the checks do instead.
