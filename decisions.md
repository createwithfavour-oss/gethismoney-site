# Decisions

Newest first. Each line says what was decided and why. The PM board in Notion ("PROJECT: Ship with AI class + gethismoney.xyz") holds the same decisions for other agents.

## 17 Sep 2026

- **Proof is three stat badges, not sentences.** 190 users on TrustVerifi (190 accounts created in the ads report), 56,000+ ad impressions, $100K+ on Upwork. Two plain statements with logos made no sense without a heading. Numbers come from the TrustVerifi ads report (11 Aug to 3 Sep). The ads report has no video view count, so the badge says "times my TrustVerifi video ads were shown", not views.
- **Intro copy under each day is three short paragraphs.** One block read as cramped. Lead and closing lines in full ink at 500 weight, middle line in soft ink.
- **Supporting text uses a soft ink (`--ink-soft`), not the grey.** Favour said the grey was almost invisible next to the bold lead. Contrast went from 7.9:1 to 13.3:1 in dark mode.
- **On phones, Day 1 and Day 2 have no in-section button.** The floating "Save my free seat" bar covers them, and two identical buttons on one screen breaks the one-main-action rule.
- **Phone layout follows Apple HIG numbers.** 20px side margins from 390px wide, 17px body, headline line-height 1.07, schedule as two rows so dates never wrap.
- **Day 2 is 7 to 9pm WAT,** the same as Day 1. The calendar link was updated. Luma, the Saturday calendar reminder and the WhatsApp drafts still need checking.
- **Hero dates are a small schedule above the button.** The two date lines under the button looked orphaned.
- **Day 1 and Day 2 share one layout, mirrored.** Day 2's list sits on the left on desktop. A centred Day 2 on a separate ground was tried first and dropped.
- **The closing band keeps a soft glow that follows the mouse.** Favour asked for it back.
- **Work stays a grid.** A rotating wheel of cards was built twice and rejected ("doesn't work for me").
- **Clicking a work tile grows it into a large preview.** Video previews play the full ad with a "Turn sound on" button. Tiles keep the short silent loops. Presenter ad source is "USE THIS - AD-02" from "Edited with Sound Effects".
- **No details section.** "Who this is for / What to bring / What it costs" was cut as slop. The 48-hour replay is not on the page.
- **No mention of the paid course anywhere on the page.** Favour's call.
- **The page does not say which tool or video is built live.** Not decided yet.
- **The class is for learning, not follow-along.** People watch the build live and try it afterwards, like the AI Agents Mastery setup.
- **Buttons say "Save my free seat".** First person, because the button is the visitor's action.
- **Purple is GTM brand purple #5722CB, on buttons only.** #7b4dff read as generic AI purple. #8A4A9B (the Substack cover purple) was tried and rejected. Labels, list markers and the progress line are neutral.
- **Design cleaned against Dickie Bush's landing page kit.** No pill buttons, no boxed cards, no soft shadows, no small grey caps labels.
- **Rewrites keep every claim and add the payoff.** Flattened rewrites were rejected. See the memory note "Rewrites keep the claim".
- **The page lives at /ship-with-ai.** The root redirects there. gethismoney.xyz and www are custom domains on the Worker; workers.dev stays on.
- **Private files never deploy.** `.assetsignore` keeps HANDOFF, PRODUCT, DESIGN, these docs, Samples, source headshots and package files off the live site.

## 16 Sep 2026

- **Hero follows the structure of salemkinging.com, not a copy of it.** A one-to-one copy of a known site could be recognised by the audience.
- **Photo is AI headshot 5 in black and white.** Headshots 1 to 9 are cleared for use. No purple tints on Favour's face.
- **Dark and light themes, following the visitor's system setting,** with a switch at the top left.
- **One button registers both days.** Luma cannot hold two dates in one event and Favour wants both reminder streams, so the page opens the Day 2 form straight after Day 1 completes.
- **Copy comes from Favour's Luma text.** "Learn how to", never "Watch me". Day 1 and Day 2, not nights.
- **Augmentus is never named as a client.** They did not reply to the pitch. Tiles say "a robotics company". The full explainer video still shows their logo; open question.
- **Hosting is a Cloudflare Worker with static assets,** not Pages. Deploy with `npx wrangler@4 deploy`.
