# HANDOFF, 16 Sep 2026

## Goal
Ship the registration page for Favour's free two-day class "Ship with AI" (25 and 26 Sep 2026) at gethismoney.xyz, at a craft level Favour accepts, and drive Luma registrations for both days.

## State
- Live and verified: https://gethismoney-site.createwithfavour.workers.dev (Cloudflare Worker with static assets, repo github.com/createwithfavour-oss/gethismoney-site, main). Deploy from this folder with `npx wrangler@4 deploy`. Pushing to main does not deploy.
- Verified in the in-app browser at 375px: no overflow, the "Save my free seat" button opens Luma's Day 1 form, and after a Day 1 registration the page opens the Day 2 form (listens for Luma's `luma:purchase` postMessage, fallback on overlay close). Videos play only in view.
- Hero: currently the "Dominic" layout (black, giant title, Favour's colour portrait behind it). Favour rejected it. He has now chosen the **Salem King** hero (salemkinging.com) as the one to copy. Not started.
- Domain: gethismoney.xyz still on Namecheap default DNS. Favour must add the site in the Cloudflare dashboard and switch nameservers; my token only reads zones. Then attach the domain and www to the Worker.
- Uncommitted: small .gitignore and .assetsignore edits (ignore `heroes/`). Commit them.

## Files that matter
- `/Users/phronesis/Claude Cowork/GTM - Get This Money/gethismoney-site/index.html` — the whole page, CSS and JS inline. Direction contract in the top comment.
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
