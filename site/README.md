# Landing page

The public landing page for RAE FAANG. Static HTML and CSS, no build step, no
dependencies beyond web fonts.

- `index.html` — the page.
- `styles.css` — styles, using the tokens from [`../DESIGN.md`](../DESIGN.md).
- `COPY.md` — the landing-page copy itself, written with the
  [`landing-page-copy`](https://github.com/rampstackco/claude-skills/blob/main/skills/landing-page-copy/SKILL.md)
  skill (hero → social proof → problem → solution → proof → objections → CTA).
  `index.html` is the built page; edit the copy here first, then mirror it.

> **No fabricated proof.** The skill forbids inventing metrics. RAE FAANG has no customers,
> logos or testimonials, so the social-proof slot carries verifiable repository status and the
> page says so out loud. Case studies are marked unavailable until the first product ships.

Preview locally:

```bash
# any static server, or just open the file
python3 -m http.server 8080 --directory site
# → http://localhost:8080
```

## Deployment

`.github/workflows/pages.yml` publishes `site/` to GitHub Pages on every push to
`main` that touches `site/`.

- **Live:** https://enzovezzaro.github.io/rea-faang/
- Pages source: GitHub Actions (Settings → Pages).

Note: GitHub Pages is not available for **private** repositories on the free
plan. The repository is public, which is why the deploy works. If the repository
is ever made private again, the deploy job will fail with
`Get Pages site failed ... Not Found` until Pages is available again.
