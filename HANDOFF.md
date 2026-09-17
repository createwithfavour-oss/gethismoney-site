# HANDOFF, 16 Sep 2026 (updated evening)

## Update, 17 Sep evening: DEPLOYED to gethismoney.xyz/ship-with-ai
- wrangler.jsonc now has custom domains gethismoney.xyz and www, plus workers_dev true.
- Work is a grid again (a rotating wheel was rejected); tiles open a preview. Video previews play full ads from assets/full/ with a sound button.
- Details section removed. Day 2 time is 7 to 9pm. Day 1 and Day 2 mirrored. Hero dates are a two-column schedule. Closing band has a pointer glow.
- Uncommitted: everything since 16 Sep. Nothing committed to git.

## Update, 17 Sep (earlier)
- Lower sections rebuilt with scroll-linked motion (pinned hero, masked letter headings, staggered tiles, list rail). Engine is inline JS in `ship-with-ai.html`, uses `data-m` and `data-chars`.
- Design slop removed: brand purple #5722CB on buttons only, no pills, cards, shadows or tiny grey caps. Order: hero, Day 1, Day 2, work with proof, details, closing band. Floating registration bar after the hero.
- Copy: paid course removed everywhere; the ROI calculator "made on screen" line removed; four lines rewritten with Favour's approval.
- playwright-core installed as a dev dependency for the scroll-craft skill (package files are kept out of the deploy).
- Local preview: http://localhost:8787/ship-with-ai.html (python http.server, launch config in `Agency shit/.claude/launch.json`).

## Update, 16 Sep evening
- Hero rebuilt to the Salem King structure (not a copy): AI headshot 5 in black and white (`assets/favour-bw.jpg`), label, three-line headline, body, one button, dates. Done and deployed.
- Dark and light themes. Follows the system setting; switch at top left stores the choice in localStorage.
- Page moved to `ship-with-ai.html`, served at /ship-with-ai. `_redirects` sends / and /index.html there (302).
- `og-image.png` regenerated from the dark hero.
- `.assetsignore` now keeps HANDOFF, PRODUCT, DESIGN, Samples, .impeccable and the source headshot PNGs off the live site.
- PM board and the brain map updated (Favour said yes).
- Next: Favour moves gethismoney.xyz to Cloudflare; then add `routes` with custom_domain for gethismoney.xyz and www to wrangler.jsonc and deploy (token has workers_routes write). Then test in WhatsApp's browser. DESIGN.md still describes the old purple version.
- Uncommitted: all of the above. Nothing committed yet.


## Goal
Ship the registration page for Favour's free two-day class "Ship with AI" (25 and 26 Sep 2026) at gethismoney.xyz, at a craft level Favour accepts, and drive Luma registrations for both days.

## State
- Live and verified: https://gethismoney-site.createwithfavour.workers.dev (Cloudflare Worker with static assets, repo github.com/createwithfavour-oss/gethismoney-site, main). Deploy from this folder with `npx wrangler@4 deploy`. Pushing to main does not deploy.
- Verified in the in-app browser at 375px: no overflow, the "Save my free seat" button opens Luma's Day 1 form, and after a Day 1 registration the page opens the Day 2 form (listens for Luma's `luma:purchase` postMessage, fallback on overlay close). Videos play only in view.
- Hero: currently the "Dominic" layout (black, giant title, Favour's colour portrait behind it). Favour rejected it. He has now chosen the **Salem King** hero (salemkinging.com) as the one to copy. Not started.
- Domain: gethismoney.xyz still on Namecheap default DNS. Favour must add the site in the Cloudflare dashboard and switch nameservers; my token only reads zones. Then attach the domain and www to the Worker.
- Uncommitted: small .gitignore and .assetsignore edits (ignore `heroes/`). Commit them.

## Files that matter
- `/Users/phronesis/Claude Cowork/GTM - Get This Money/gethismoney-site/index.html` — (now `ship-with-ai.html`) the whole page, CSS and JS inline. Direction contract in the top comment.
- `.../gethismoney-site/PRODUCT.md` and `DESIGN.md` — product truth and the recorded system (DESIGN.md describes the earlier purple version; update after the Salem hero lands).
- `.../gethismoney-site/assets/` — Aeonik woff2, `favour.jpg` (colour), `Favour headshot` (source PNG, no extension), tool screenshot, `site-hire.jpg`, `site-wedding.jpg`, TrustVerifi ad loops and posters, Augmentus video loop, TrustVerifi and Upwork logos, `og-image.png`.
- `.../gethismoney-site/heroes/` — five rejected hero variants, ignored by git and deploy. Delete when done.
- `/private/tmp/claude-501/.../scratchpad/ref-salemking.png` — the chosen reference screenshot (may be gone; re-screenshot salemkinging.com at 1440x900).
- `/Users/phronesis/.claude/projects/-Users-phronesis-Claude-Cowork-Agency-shit/memory/feedback-plain-copy-no-cleverness.md` — Favour's copy and design rules from this session.

## Decisions made and why
- Copy is Favour's Luma text. "Learn how to", never "Watch me". Buttons: "Save my free seat". Day 1 / Day 2, dates on two lines. No "No code needed" in the hero, no course-buyer count, no "Day 2 on its own" line.
- One button registers both days (Luma cannot merge two dates into one event; he will not edit Luma because he wants both reminder streams). Calendar links only at the page end.
- No Augmentus logo or name as a client (pitch never answered). Tiles call it "a robotics company".
- No purple colour field, no tints over his face. Purple stays on the button only.
- Anything that fails "would the page still convey and convert without it" gets removed.

## Dead ends
- Impeccable direction rolls (The Call, Title Sequence, One Colour, Broadcast): re-rolled twice. He wants real references, not invented worlds.
- Purple field hero, AI-generated headshot, five self-made hero variants: all rejected as "AI slop".

## Next step
Screenshot salemkinging.com, then rebuild the hero to match it: full-bleed black-and-white photo fading to black on the left, small caps label, bold three-line headline ("Learn how to build AI tools and make videos with AI." as the headline), two lines of body, one purple pill button "Save my free seat", dates beneath. Use `assets/Favour headshot` in black and white, or ask for a wider photo. Then regenerate `og-image.png`, deploy, verify at 375px.

## Open questions for Favour
- Do you have a wider or more candid photo for the Salem King treatment? The headshot is tight and centred.
- Cloudflare dashboard step for the domain.
