# Devlog

Newest first. What was built, what was tried and dropped, and anything a later session would trip over.

## 18 Sep 2026

**Visit site buttons on the work tiles.** Tiles that show a live site carry `data-site` and a small "Visit site" chip bottom-right: 32px tall with a `::after` inset that grows the tap target to 44px, on the caption's own gradient. Two of them, `hire.trustverifi.com` and `samuelandkathryn.com`, both checked live. The tile click handler ignores clicks inside `.tile-site`, the keydown handler ignores events that did not start on the figure, and the preview's Tab trap now cycles through the close button, the sound button and the caption link. The preview caption appends the domain as a link. The ROI calculator got a "Try it" chip to the same Cloudflare Pages URL after Favour chose to link it as it is, which means the domain names Augmentus.

## 17 Sep 2026

**Performance pass.** The page was 2.04 MB over 22 requests, 522 KB before any scrolling. Measured with headless Chrome on a 393px profile, throttled to 1.6 Mbps and 4x CPU. Four changes:
- Seven JPEG/PNG images became WebP at quality 72, 701 KB down to 257 KB. Originals are kept in `assets/_src/` and excluded from deploys.
- The three silent tile loops were re-encoded to 480 wide at crf 30, 1.16 MB down to 677 KB. They render about 300px wide, so 540x960 at 430 kbps was waste.
- Aeonik Regular, Medium and Bold were subset to latin plus punctuation with `pyftsubset`, 126 KB down to 59 KB. The page uses 61 characters; the only non-ASCII one is `·` (U+00B7). Resubset from `assets/_src/` if the copy ever needs more.
- New `_headers` file. Everything under `/assets` defaults to `max-age=0, must-revalidate` on Workers, so every repeat visit revalidated all 22 files. Images and video now get a day, fonts a year with `immutable`. Per-extension rules, because two patterns matching the same file makes Cloudflare concatenate both Cache-Control values into one broken header.

Result: 2.04 MB to 1.04 MB, first screen 522 KB to 246 KB, and a full load on throttled 4G from 5.1s to 2.3s. LCP is the headline text at 0.63s, CLS 0.

## 17 Sep 2026

**Three-step registration flow.** Replaced the old toast plus auto-open of Day 2 with a step sheet (`#steps`): Day 1 seat, Day 2 seat, WhatsApp channel, with ticks. A capture-phase click listener records which Luma event was opened. When Luma's overlay is removed (MutationObserver), the sheet shows the next step. If Luma's `luma:purchase` message arrives, that day is marked done in `localStorage` (`gtm-steps`) and the overlay closes after 1.4s, so the copy says "Day 1 is saved"; without the message it uses neutral copy ("Next, save your seat for Day 2") and offers "I still need to register for Day 1". Returning visitors with Day 1 done who press any Save button go straight to the next step. Bottom sheet on phones, centred card on desktop. The sheet's buttons exist in the HTML at load so Luma binds them. Closing band has a channel link too. Luma has no redirect-after-registration setting (help.luma.com, event registration process); the confirmation email body is the other handle.

**Registration button was broken since launch.** Luma's `checkout-button.js` finds its own origin through `document.getElementById("luma-checkout")`. Our script tag had no id, so the stylesheet loaded from `gethismoney.xyz/checkout-button.css` (404) and the overlay rendered unstyled at the bottom of the page, invisible. Earlier checks only tested that the overlay element existed. Fix: `<script id="luma-checkout" ...>`. Now verified by checking the modal is fixed, on screen, and the element at the centre of the viewport is the Luma iframe.

**Count-up on stats.** `[data-count]` numbers start at zero and count up once when 60% visible (1.6s, ease-out, 150ms stagger), keeping `data-prefix` and `data-suffix`. The HTML holds the final values, so no-JS and reduced motion show them directly. TrustVerifi label now says "users".

**Stat badges.** Replaced the two proof statements with a three-item stat row (`.stats`): 190 / 56,000+ / $100K+, each with its logo and a one-line label. Three columns with hairline dividers on desktop, three rows with the number on the left on phones.

**Readability.** Day intros split into three `<p>` inside `.sub`. New token `--ink-soft` (#d9d4ca dark, #35332f light) for supporting text in the hero, day intros and work intro.

**Phone pass (HIG).** New `/* ===== phones ===== */` block before the desktop query. `--pad` 20px from 390px wide. Headline line-height 1.07, h2 1.08. Schedule becomes two rows. `.day .cta-row` hidden below 760px. List items 17px at 1.45. Captions 14px.

**Deployed to gethismoney.xyz.** Nameservers moved to Cloudflare (Favour, via dashboard). `wrangler.jsonc` got `routes` with `custom_domain: true` for the apex and www. Adding routes switched workers.dev off by default, so `workers_dev: true` was added back.

**Full videos with sound.** The tile loops in `assets/` have no audio track at all. Matched each loop to its source by frame comparison, then encoded web versions into `assets/full/` (720 wide, crf 26, AAC, faststart): `trustverifi-ad.mp4` (Hire CV pile 20s NG v2), `trustverifi-presenter.mp4` ("USE THIS - AD-02", with sound effects), `robotics-explainer.mp4` (Augmentus explainer FINAL). Tiles carry `data-full`; the preview builds a fresh video from it, muted, with a `.lb-sound` toggle.

**Wheel tried and removed.** Built an arc carousel pinned over 300vh, then an infinite wheel (24 cloned cards, wheel and drag to rotate, click to open). Rejected both. Restored the grid from the pre-wheel backup and kept the click-to-preview (FLIP-style morph with WAAPI on left/top/width/height).

**Horizontal overflow bugs.** Three separate causes: sliding list items (fixed with `overflow-x: clip` on `.sheet` and body), `100vw` including the scrollbar on classic-scrollbar systems (replaced by `--vw` set from `clientWidth`), and the pinned hero photo scaling to 110% past the right edge (hero made full-bleed with `overflow-x: clip`). The first hero clip cut 28px off the photo; fixed by moving the gutter into the hero's own padding.

**Design slop removed.** Pills to 6px radius, cards and shadows gone, calendar links underlined, labels sentence case, closing section a full-bleed inverted band.

**Five audit fixes.** Purple on buttons only, floating registration dock (hidden at the closing band and while a preview is open), details as large text instead of cards (later removed), Day 2 differentiated (later mirrored instead), earlier reveals on phones.

**Scroll motion.** Inline engine: elements with `data-m` (`rise`, `tile`, `slide`, `panel`) get transforms from cached positions each frame; `data-chars` headings split into masked characters; `.learn` gets a `--rail` progress line. Hero pins on desktop while `.sheet` scrolls over it. Everything is skipped under reduced motion.

**Tooling.** `playwright-core` added as a dev dependency so the scroll-craft skill can run its checks. Uses the installed Chrome.

## 16 Sep 2026

**Hero rebuilt to the Salem King structure.** Black-and-white headshot on the right fading into the page, label, three-line headline, body, one button. Dark and light tokens, theme toggle stored in localStorage.

**Page moved.** `index.html` became `ship-with-ai.html`. `_redirects` sends `/` and `/index.html` to `/ship-with-ai`.

**Earlier the same day** (see git history): first static one-pager with two Luma buttons, Luma style overrides, purple field hero, Dominic-style hero, one registration for both days via the `luma:purchase` postMessage, Augmentus name removed.
