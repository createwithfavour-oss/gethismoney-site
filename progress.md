# Progress

Last updated 17 Sep 2026.

## Live

- https://gethismoney.xyz/ship-with-ai (also www, and gethismoney-site.createwithfavour.workers.dev). The root redirects to the page.
- Repo: github.com/createwithfavour-oss/gethismoney-site, branch `main`.
- Deploy: `npx wrangler@4 deploy` from this folder. Pushing to GitHub does not deploy until Workers Builds is connected (see Open).
- 17 Sep: the registration button did nothing until the Luma script tag got `id="luma-checkout"` (see devlog). Now the Day 1 form visibly opens on phone and desktop. A full registration, and Day 2 opening after it, is still untested.

## Page, top to bottom

1. Hero: black-and-white photo, label, headline, body, two-row schedule (both days 7 to 9pm WAT), button.
2. Day 1: date line, heading, three-paragraph intro, list with progress rail.
3. Day 2: same layout, mirrored on desktop.
4. Work: three stat badges (190 users, 56,000+ ad impressions, $100K+ on Upwork), intro, six-tile grid with click-to-preview (full videos with sound).
5. Closing band: heading, button, add-to-calendar links, pointer glow.
6. Footer.
Floating "Save my free seat" bar after the hero.

## Open

- Luma Day 2 event: confirm it says 7pm.
- Saturday calendar reminder and Hermione's WhatsApp drafts still say 6pm. The 1:1 draft still mentions the paid course.
- Robotics explainer preview shows the Augmentus logo and may name them in the voiceover. Keep, cut, or remove.
- Cloudflare Workers Builds: Favour to connect the GitHub repo in the dashboard so pushes to `main` deploy.
- Test the Luma overlay inside WhatsApp's in-app browser on a real phone (Hermione).
- `PRODUCT.md` is stale (two buttons, paid course line, lifted purple). Update when Favour asks.
- 48-hour replay is not mentioned anywhere on the page.
- Which tool and video get built live in class.
