# Landing page

The public landing page for RAE FAANG. Static HTML and CSS, no build step, no
dependencies beyond web fonts.

- `index.html` — the page.
- `styles.css` — styles, using the tokens from [`../DESIGN.md`](../DESIGN.md).

Preview locally:

```bash
# any static server, or just open the file
python3 -m http.server 8080 --directory site
# → http://localhost:8080
```

## Deployment

`.github/workflows/pages.yml` publishes `site/` to GitHub Pages on every push to
`main` that touches `site/`.

**Requirement:** GitHub Pages must be enabled for the repository
(Settings → Pages → Source: GitHub Actions). Pages is **not available for private
repositories on the current plan** — the repository must be public, or the
account must be on a plan that supports Pages for private repositories. Until
then the deploy job fails with `Get Pages site failed ... Not Found`.

Once Pages is enabled, re-run the workflow (Actions → Deploy landing page →
Run workflow) or push a change under `site/`.
