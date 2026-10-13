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

- **Live:** https://enzovezzaro.github.io/rea-faang/
- Pages source: GitHub Actions (Settings → Pages).

Note: GitHub Pages is not available for **private** repositories on the free
plan. The repository is public, which is why the deploy works. If the repository
is ever made private again, the deploy job will fail with
`Get Pages site failed ... Not Found` until Pages is available again.
