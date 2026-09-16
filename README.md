# gethismoney.xyz

Static site for Get This Money. One page: the Ship with AI free class.

- `index.html` is the class page and the front door. `/ship-with-ai` redirects to it (see `_redirects`).
- `assets/` holds the Aeonik woff2 files (GTM brand typeface), the GTM logomark, the favicon and the Augmentus tool screenshot.
- No build step. Deployed as a Cloudflare Worker with static assets (the current version of Pages). `.assetsignore` keeps repo files out of the upload. Live at https://gethismoney-site.createwithfavour.workers.dev until the domain is attached.

Registration buttons use Luma's checkout embed. Event IDs live on the two buttons in `index.html`:

- Night 1, Fri 25 Sept 2026: `evt-XAeX6PX6wDDRrHP` (https://luma.com/4jb36rp5)
- Night 2, Sat 26 Sept 2026: `evt-yh6vAPBjduKOTRt` (https://luma.com/g7oyqgko)

Deploy: push to `main`, or from this folder run

```
npx wrangler@4 deploy
```

Project board: Notion, "PROJECT: Ship with AI class + gethismoney.xyz (PM board)".
