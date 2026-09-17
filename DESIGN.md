---
name: Get This Money
description: Black-and-white portrait fading into a plain ground, Aeonik type, brand purple on buttons only, motion tied to scroll. Dark and light.
colors:
  dark-bg: "#0b0b0c"
  dark-bg-2: "#151516"
  dark-ink: "#f6f2ea"
  dark-ink-soft: "#d9d4ca"
  dark-ink-2: "#a9a49a"
  dark-line: "rgba(246,242,234,.10)"
  light-bg: "#f3f2ee"
  light-bg-2: "#e8e6e0"
  light-ink: "#141414"
  light-ink-soft: "#35332f"
  light-ink-2: "#5d5a54"
  light-line: "rgba(20,20,20,.12)"
  purple: "#5722CB"
typography:
  display:
    fontFamily: "Aeonik, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(36px, 10vw, 76px) phones; clamp(48px, 5vw, 70px) from 760px"
    fontWeight: 700
    lineHeight: "1.07 phones; 1.02 desktop"
    letterSpacing: "-0.03em to -0.035em"
  headline:
    fontSize: "clamp(32px, 8vw, 50px); closing band clamp(44px, 4.4vw, 60px)"
    fontWeight: 700
    lineHeight: "1.08 phones; 1.02 desktop"
  stat:
    fontSize: "36px phones; 64px desktop"
    fontWeight: 700
  list:
    fontSize: "17px phones; 22px desktop"
    fontWeight: 500
  body:
    fontSize: "17px phones; 18px desktop"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontSize: "14px to 16px"
    fontWeight: 500
  caption:
    fontSize: "13px to 15px"
    fontWeight: 400
rounded:
  button: "6px"
  dock: "10px"
  tile: "4px"
  preview: "6px"
spacing:
  gutter: "16px under 390px; 20px phones; 28px desktop"
  section: "72px phones; 104px desktop"
  max-width: "1200px"
---

# Design System: Get This Money

Source of truth is `ship-with-ai.html` (one inline stylesheet, vanilla JS, no libraries). This file describes it as shipped on 17 Sep 2026.

## Overview

A person-led class page. One black-and-white portrait, plain dark or light ground, Aeonik at three weights, and GTM brand purple on buttons and nowhere else. Proof is shown as numbers and real work. Motion is tied to scrolling and runs in reverse.

Checked against Dickie Bush's "five default design choices" and Apple HIG. It avoids pill buttons, boxed cards, soft shadows, small grey caps labels, purple gradients and a stock section order.

## Colour

Tokens live on `:root` (dark) and `:root[data-theme="light"]`, with a `prefers-color-scheme: light` block that applies the light tokens unless the visitor chose dark.

- **bg / bg-2:** page ground and one step up (tile ground, dock).
- **ink:** headings, stat numbers, list items once reached, lead lines.
- **ink-soft:** supporting paragraphs. Added because ink-2 was too faint next to bold ink.
- **ink-2:** small labels only (date lines, schedule labels, footer, unreached list items).
- **line:** every hairline.
- **purple #5722CB:** button fill with white text. Never on labels, markers, washes or the photo.
- **glow:** white at 75% (dark) or 9% (light), only inside the closing band's pointer glow.

The closing band inverts: its ground is `--ink` and its text is `--bg`.

## Typography

Aeonik 400, 500, 700 as woff2, Regular and Bold preloaded. Weight 700 only on the hero headline, section headings and stat numbers. Tracking tightens only at display sizes. Sentence case everywhere, no letterspaced caps.

## Layout

Order: hero, Day 1, Day 2, work (stats, intro, grid), closing band, footer.

- **Hero:** full-bleed. Desktop: photo on the right 62vw, masked to transparent on the left and edges; copy bottom-left at max 640px. Phones: photo on top fading down, copy under it. Schedule is two columns with a hairline on desktop, two rows with hairlines on phones.
- **Day sections:** desktop two columns, heading block sticky at 48px. Day 1 heading left and list right; Day 2 mirrored. Phones stack heading then list, with no in-section button.
- **Stats:** three columns with hairlines on desktop (64px numbers), three rows on phones (36px number on the left, logo and label on the right).
- **Work grid:** 12-column grid at 440px rows on desktop (spans 6/3/3 then 3/3/6), two columns on phones with the first and last tiles wide.
- **Closing band:** full-bleed inverted ground, centred heading, button, underlined calendar links.
- **Dock:** fixed bottom bar after the hero, hidden over the closing band and while a preview is open. Label plus button on desktop, full-width button on phones.

Breakpoints: 390px (gutter), 760px (structure), 1100px (hero padding).

## Components

- **Buttons:** every button is a Luma checkout trigger. Luma injects its own styles, so rules are `body button.luma-checkout--button` with `!important`. 6px radius, 14px 24px padding, min-height 50px (44px in the dock), 500 weight 16px, full width on phones. Hover opacity 0.9, press scale 0.97, 2px ink focus ring.
- **Theme toggle:** 44px, sun or moon icon, no border. Rotates in on switch.
- **Learn list:** hairline rows, a 10px ring marker that fills when the row passes 55% of the viewport (85% on phones), and a 2px rail that fills with scroll.
- **Tiles:** 4px radius, caption on a bottom gradient, image moves slightly slower than the tile. A tile whose work is a live site gets `.has-site`, a `data-site` URL and a `.tile-site` chip bottom-right: 13px text, an arrow, 6px radius, translucent ink ground with blur, 32px tall with the tap target grown to 44px by a negative-inset `::after`. The caption reserves room for it.
- **Preview:** click or Enter on a tile. The tile grows from its spot to a centred box sized to the media (560ms, `cubic-bezier(.32,.72,0,1)`), backdrop blurs, caption fades in. Video tiles play the full file from `data-full`, muted, with a "Turn sound on" / "Mute" button. Escape, backdrop or close button shrinks it back (420ms).
- **Toast:** after Day 1 registers, "Day 1 saved. One more for Day 2." then the Day 2 Luma form opens.

## Motion

House ease `cubic-bezier(.23,1,.32,1)`. All scroll motion is computed per frame from cached positions and reverses on scroll up.

- Hero: photo fades and settles on load; copy lines rise with a blur. On desktop the hero pins while the page slides over it, and the copy lifts, fades and blurs as you scroll.
- Headings with `data-chars`: letters rise out of a mask left to right.
- `data-m="rise"`: blocks rise and fade in, staggered by `data-lag`.
- `data-m="tile"`: tiles rise in stepped columns.
- `data-m="slide"`: list rows slide in (from the right, or the left on Day 2 desktop).
- `data-m="panel"`: the closing band grows to full size.
- Reduced motion: no transforms, everything shown in place, tile videos paused.

## Do

- Use the tokens, not raw colours, so both themes stay correct.
- Keep purple on buttons only.
- Keep one main action per screen on phones.
- Check new sections at 375, 393 and 440px wide for sideways scroll.
- Back every number with a source file.

## Don't

- Don't use pill shapes, card borders with shadows, or small grey caps labels.
- Don't tint the photo or add purple washes.
- Don't use `100vw` for full-bleed; use `var(--vw)`.
- Don't mention the paid course.
