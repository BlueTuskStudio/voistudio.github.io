# Blue Tusk Studio

Marketing & portfolio site for **Blue Tusk Studio** — an indie mobile game studio.

Live: <https://bluetuskstudio.com>

## Stack

- Plain HTML / CSS / ES modules
- Build: [Vite](https://vitejs.dev) (multi-page)
- Deploy: Cloudflare Pages (build `npm run build`, output `dist`) on custom domain bluetuskstudio.com

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # → dist/
npm run preview      # serve dist/ locally
```

## Project layout

```
.
├── index.html                  # Home (entry)
├── games/
│   ├── sand-coloring/
│   │   └── index.html          # Per-game landing page
│   └── untitled/
│       └── index.html
├── public/                     # Served as-is at /
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── rss.xml
│   ├── devlog/                 # Markdown posts + index
│   │   ├── index.json
│   │   └── *.md
│   └── assets/
│       └── screenshots/        # Drop game screenshots here
└── src/
    ├── css/style.css           # Single global stylesheet
    ├── partials/               # Shared HTML chunks (nav, footer)
    └── js/
        ├── main.js             # Home page entry
        ├── game-detail.js      # Per-game page entry
        ├── shell.js            # Inject nav/footer + wire global UI
        ├── i18n.js             # EN/VI dictionary + utilities
        ├── data.js             # Site data (games, faq, community)
        ├── theme.js, nav.js, hero.js, modal.js, notice.js, forms.js, reveal.js
        └── renderers/          # games, devlog, faq, community
```

## Adding content

### A devlog post

1. Add a markdown file to `public/devlog/` named `YYYY-MM-DD-slug.md`.
2. Add an entry to `public/devlog/index.json`:
   ```json
   { "slug": "2026-06-01-some-update", "date": "2026-06-01", "tag": "Sand Coloring",
     "title": { "en": "English title", "vi": "Tiêu đề tiếng Việt" } }
   ```
3. The site fetches `index.json` at runtime and renders posts in newest-first order.

Supported markdown: paragraphs, `## headers`, `**bold**`, `*italic*`, `[links](url)`,
`` `inline code` ``, and `- bulleted lists`. Keep posts short.

### A new game

1. Add an entry to `src/js/data.js → GAMES`.
2. Add screenshots to `public/assets/screenshots/<slug>/`.
3. Create a page at `games/<slug>/index.html` (copy an existing one).
4. Register the new entry in `vite.config.js → rollupOptions.input`.

### Newsletter provider

`src/js/forms.js → NEWSLETTER` defaults to `provider: 'none'` (just shows a thank-you).

To enable a real backend:

- **Buttondown**: set `provider: 'buttondown'` and your `username`.
- **ConvertKit**: set `provider: 'convertkit'` and your `formId`.

## Deploying

Hosted on **Cloudflare Pages**, connected to this repo. Every push to `main`
triggers a build (`npm run build`) and deploys `dist/` to bluetuskstudio.com.

**One-time setup**: Cloudflare → Workers & Pages → Pages → Connect to Git →
build command `npm run build`, output directory `dist`. Add the custom domain
under the project's *Custom domains* tab (DNS auto-configured since the domain
is on Cloudflare). `wrangler.toml` is included for the Wrangler/Workers path.

(A `.github/workflows/deploy.yml` for GitHub Pages is also included as a
fallback — ignore it if you deploy via Cloudflare.)

## License

Source is © Blue Tusk Studio. Press kit assets in `public/assets/` may be used in
editorial coverage. Don't redistribute game IP without asking.
