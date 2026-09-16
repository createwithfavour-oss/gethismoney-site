# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Marketers, founders and creators, mostly in Nigeria and the wider African diaspora, who use AI daily but have never built or shipped anything with it. They arrive from a WhatsApp message or a social post, on a phone, often inside WhatsApp's in-app browser, and decide in under a minute whether to register for a free class. A second audience is the roughly 160 people who bought Favour's earlier course and already trust him.

## Product Purpose
gethismoney.xyz is the home of Get This Money (GTM), Favour Yusuf's brand for teaching people to make money with AI. Its first surface is the registration page for "Ship with AI", a free two-night live class on 25 and 26 September 2026. Success is registrations through the two Luma buttons, then attendance, then sales of the paid course mentioned at the end of the class. The site is also proof: it must itself look like something built with AI at a level the audience cannot yet reach.

## Positioning
Favour builds AI tools, web apps and marketing videos for paying clients, on a free stack (GitHub, Cloudflare, one AI API; Whisper, ffmpeg, Remotion for video), and teaches by building live on screen from an empty page to a working link. Nobody else in this audience's feed both ships client work on this stack and shows every step of it.

## Operating Context
Registration and reminders run through Luma (email, SMS, WhatsApp). The class runs on Google Meet. Invites go out by WhatsApp to past buyers, poll respondents and groups. Night 1 builds an AI tool; night 2 makes the video that markets it. Night 2 can be attended alone. Content about the site itself will be posted to drive awareness, so the page will be screen-recorded and shown on social.

## Capabilities and Constraints
- Static HTML on Cloudflare (Worker with static assets), no build step, no framework. Deploy with `npx wrangler@4 deploy`.
- Two Luma checkout buttons: night 1 `evt-XAeX6PX6wDDRrHP`, night 2 `evt-yh6vAPBjduKOTRt`. Luma's embed script injects its own button styles that must be overridden.
- Must work inside WhatsApp's in-app browser on mid-range Android phones. Keep total weight low, no heavy libraries.
- Copy rules: no income promises to the reader, no AI cliches (robots, glowing brains), no em dashes, no rhetorical devices, plain English, state that a paid course is mentioned at the end. Favour's own copy may be tightened for the page but not given new claims.
- Undecided: registration target; whether the GTM main site shares this page's design language beyond the class.

## Brand Commitments
- Name: Get This Money, wordmark and logomark in `assets/gtm-logomark-white.svg` and the GTM BRANDING folder (purple #5722CB, pink #FFBFF9, plum #370533, black).
- Typeface: Aeonik (licensed, woff2 in `assets/`). Airnt is a secondary display face in the brand kit.
- Favour asked for the GTM web presence to feel cinematic and premium, the kind of site people call an "$8K website", as a demonstration of what he builds with AI. This class page is the first surface of that world.
- Voice: Favour speaks plainly and in first person. See the copy rules above.

## Evidence on Hand
- Live client tool: https://augmentus-roi-finder.pages.dev (screenshot in `assets/augmentus-roi-tool.png`).
- Client video: `Agency shit/Augmentus-sample/Augmentus-explainer-9x16-FINAL.mp4` (heavy media).
- Proof points that are true: over $100K earned on Upwork as a freelancer; over $10K in 2026 from AI client work; about 160 buyers of the previous course; one client got both a tool and a video.
- Favour will supply a photo of himself and a screen recording of him building. Not on disk yet; the page carries labeled slots for them.
- No testimonials on hand. Do not invent any.

## Product Principles
- Prove by showing the work, never by describing it.
- The button is the page. Everything else exists to make tapping it feel obvious.
- Plain words from Favour, in his order, with his numbers.
- Fast on a cheap phone inside WhatsApp beats impressive on a MacBook.
- The page is itself a portfolio piece for what AI-assisted building can look like.
