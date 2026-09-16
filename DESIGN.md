---
name: Get This Money
description: One rounded purple field with Favour standing in it, cream Aeonik type, near-black page below.
colors:
  page-black: "#09090b"
  band-black: "#111111"
  cream: "#f6f2ea"
  cream-muted: "#a9a49a"
  hairline: "rgba(246,242,234,.10)"
  purple-button: "#7b4dff"
  field-bright: "#6a2cff"
  field-mid: "#4a1a9e"
  field-deep: "#1c0b3a"
  lilac-label: "#b79bff"
  plum-ink: "#12071f"
typography:
  display:
    fontFamily: "Aeonik, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(58px, 15.5vw, 132px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Aeonik, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(34px, 7.6vw, 60px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Aeonik, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Aeonik, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Aeonik, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  caption:
    fontFamily: "Aeonik, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "normal"
rounded:
  figure: "16px"
  band: "20px"
  card: "28px"
  pill: "999px"
spacing:
  xs: "10px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  2xl: "40px"
  section-mobile: "64px"
  section-desktop: "104px"
components:
  button-primary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.plum-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
    height: "50px"
  button-secondary:
    backgroundColor: "rgba(246,242,234,.10)"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
    height: "50px"
  button-primary-dark-ground:
    backgroundColor: "{colors.purple-button}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
    height: "50px"
  button-secondary-dark-ground:
    backgroundColor: "rgba(246,242,234,.08)"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
    height: "50px"
  hero-card:
    backgroundColor: "{colors.field-mid}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "18px 20px 22px"
  proof-band:
    backgroundColor: "{colors.band-black}"
    textColor: "{colors.cream}"
    rounded: "{rounded.band}"
    padding: "26px 20px"
  figure:
    backgroundColor: "{colors.band-black}"
    textColor: "{colors.cream}"
    rounded: "{rounded.figure}"
---

# Design System: Get This Money

## Overview

**Creative North Star: "The Purple Field"**

The page is one person standing inside a colour field. A single rounded card at the top holds the nav, a grayscale portrait multiplied into a purple gradient, the display headline, a short statement, two pill buttons and a four-item numbered strip along the bottom edge. Everything below that card sits on near-black with cream type and hairline dividers. Density is low. Sections breathe at 64px on phones and 104px on desktop, and the type does the work.

Purple lives in the field and on buttons. It never tints the photography and never colours body copy. Section labels use a pale lilac so the hue carries down the page without competing with the buttons. All imagery is grayscale, so the purple field and the purple buttons are the only saturated colour on the screen.

The build rejects the black funnel page with a tinted headshot in a corner. It also rejects drop shadows, glass panels and gradient text.

**Key Characteristics:**
- One rounded hero card, radius 28px, holding nav, portrait, headline, buttons and strip
- Radial purple field from bright violet at top-right to deep plum, fading to page black at the base
- Cream Aeonik type on near-black, tight display tracking, bold weight for headings only
- Two button grounds: cream on the purple field, purple on the black page
- Cream hairlines at 10 percent as the only divider
- Grayscale photography and video everywhere, the hero portrait blended with multiply
- Motion limited to a portrait settle on load, a staggered hero reveal and scroll reveals

## Colors

A cream-on-black neutral system with one purple voice that shows up as a field, a button and a label tint.

### Primary
- **Purple Button** (`{colors.purple-button}`): The brand purple #5722CB lifted so white text clears contrast on black. Used as the filled button on the black page ground, and nowhere else.
- **Field Bright, Field Mid, Field Deep** (`{colors.field-bright}`, `{colors.field-mid}`, `{colors.field-deep}`): The three stops of the hero radial gradient, centred at 78% 18%, running bright at 0%, mid at 42%, deep at 78%, then into #0d0618 at the edge. A second linear gradient darkens the bottom 55% of the card into page black so the strip and buttons sit on a calmer ground.
- **Lilac Label** (`{colors.lilac-label}`): Section labels above every h2 ("Day 1", "About me"). The purple hue at reading weight.

### Neutral
- **Page Black** (`{colors.page-black}`): The html and body background. Also the theme-color.
- **Band Black** (`{colors.band-black}`): One step up from the page. Used for the proof band and as the ground under figures while media loads.
- **Cream** (`{colors.cream}`): All headings, body text, the brand name, and the filled button on the purple field.
- **Cream Muted** (`{colors.cream-muted}`): Secondary copy, captions in the proof band, footer, detail paragraphs.
- **Hairline** (`{colors.hairline}`): Every divider and the proof band border. Inside the hero card the same cream runs at 14% (mobile) and 18% (desktop) on strip dividers because the purple ground needs more to read.
- **Plum Ink** (`{colors.plum-ink}`): Text on the cream button. Near-black with a purple cast so the button belongs to the field.

Inside the hero card, cream is also used at alpha for hierarchy: 85% on the kicker, 80% on the nav date, 75% on the statement body, 72% on strip detail lines.

### Named Rules
**The Two Grounds Rule.** On the purple field the primary button is cream. On the black page the primary button is purple. Purple never sits as a button inside the purple field, and cream never fills a button on black.

**The Lifted Purple Rule.** The brand purple #5722CB is a print and logo value. On screen the button is #7b4dff and the field runs #6a2cff, #4a1a9e, #1c0b3a. Do not reintroduce #5722CB as a fill or text colour on dark ground.

**The Grayscale Image Rule.** Photos and video are grayscale with a small contrast lift (`grayscale(1) contrast(1.08)`). Colour enters through the field and the buttons only.

## Typography

**Display Font:** Aeonik (with system-ui, -apple-system, Segoe UI, Roboto, sans-serif)
**Body Font:** Aeonik, same stack
**Weights loaded:** 400, 500, 700 as woff2, font-display swap, Bold and Regular preloaded.

**Character:** One grotesk at three weights. Headings are bold and tracked tight so they read as a wordmark. Everything else is regular or medium at natural tracking. No uppercase, no letterspaced labels.

### Hierarchy
- **Display** (700, clamp(58px, 15.5vw, 132px) on phones and clamp(92px, 9.4vw, 132px) from 760px, line-height 0.92, tracking -0.04em): The hero headline only. Balanced wrap.
- **Headline** (700, clamp(34px, 7.6vw, 60px), line-height 1, tracking -0.03em): Every section h2. Balanced wrap.
- **Title** (500, 19px on phones and 22px on desktop, line-height 1.3 to 1.4): The hero statement lead and the split section lead paragraph.
- **Body** (400, 17px on phones and 18px on desktop, line-height 1.5): Paragraphs, list rows. Long copy is capped at 56ch (`.sub`) or 62ch (`.learn`).
- **Label** (500, 15px, natural tracking, sentence case): Section labels in lilac, the hero kicker, the brand name, strip and band item titles, button text at 16px.
- **Caption** (400, 13px to 14px, line-height 1.35): Figure captions, proof band small text, footer, strip detail lines.

### Named Rules
**The Bold-Is-Heading Rule.** Weight 700 appears on h1 and h2 only. Emphasis inside body copy uses 500 in cream, never bold.

**The Tight-Top Rule.** Negative tracking belongs to display and headline sizes. Nothing at or below 22px is tracked tighter than normal.

## Layout

Single column, max-width 1200px, centred by `.wrap`. Page gutters come from body padding-inline at 16px on phones and 28px from 760px, both widened by safe-area insets. There is no multi-column grid system; each section declares its own grid.

The hero card takes the full wrap width, with a 12px top margin (16px on desktop). Inside it the nav pads 18px 20px, the hero content 20px, the strip 20px, rising to 36px at 760px and 48px at 1100px. On phones the portrait is absolutely positioned top-right at min(118vw, 600px) tall and the hero content is pushed down by min(72vw, 430px) so the headline lands under the face. On desktop the card is a flex column with min-height min(88vh, 760px), the hero is a two-column grid (minmax(0, 640px) 1fr) aligned to the bottom, and the portrait fills 108% of the card height at right 4%.

Below the card: the proof band is a two-column grid (label, four items) at 760px and stacks on phones with items in a 2x2 grid. Editorial sections use a 1.1fr 1fr split (`.split`) or 1fr 1.2fr (`.about`) with a 60px gap. The image row is three 4:5 figures with 16px gaps (12px on phones). Details are three equal columns with 40px gaps.

Breakpoints: 760px is the only structural break. 1100px only widens card padding to 48px.

Vertical rhythm as used: 10px between kicker and headline and between stacked buttons, 12px between paragraphs, 16px after headings before copy, 22px to 28px above button rows, 34px to 44px above the image row and strip, 64px or 104px between sections.

## Elevation & Depth

Flat. There are no box shadows on any surface. Depth comes from three things: the tonal step from page black to band black, cream hairlines at 10%, and the hero gradient fading into page black so the card appears to sink into the page at its base. The only shadow in the build is a text shadow (`0 1px 8px rgba(0,0,0,.8)`) under figure captions so cream text stays legible over grayscale media, and the only ring is an inset 1px cream line on secondary buttons.

### Named Rules
**The No-Lift Rule.** Surfaces never lift. Hover on a button is an opacity change to 0.92, press is a scale to 0.97. No translateY, no shadow growth, no glow.

## Shapes

Large soft radii on containers, full pills on buttons. The hero card is 28px, the proof band 20px, figures 16px, buttons 999px. Nothing is square-cornered except dividers. Hairlines are 1px and always cream at alpha, never a solid grey. Cards have one border at most (the proof band) and the hero card has none; its edge is defined by the gradient against page black.

The portrait is masked twice: a vertical fade from 50% to transparent at 95% (60% to 98% on desktop), and a horizontal fade in from both edges. It sits at multiply blend so the purple reads through the grays.

## Components

### Buttons
Every button on the page is a Luma checkout trigger. Luma's embed script injects its own `.luma-checkout--button` styles at runtime, so the page's rules are written as `body button.luma-checkout--button` with `!important` on every property Luma sets. This is intentional and must stay.

- **Shape:** Full pill (999px), min-height 50px, padding 13px 22px, full width on phones, auto width with min-width 210px from 760px.
- **Type:** 500 weight, 16px, line-height 1.2, inherits Aeonik, no wrap.
- **Primary on the field:** Cream fill, plum ink text.
- **Secondary on the field:** Cream at 10% fill, cream text, inset 1px cream ring at 22%.
- **Primary on black (`.dark-ground`):** Purple button fill, white text.
- **Secondary on black (`.dark-ground`):** Cream at 8% fill, cream text, inset 1px hairline ring.
- **Hover (fine pointer only):** opacity 0.92.
- **Active:** scale 0.97.
- **Focus-visible:** 2px cream outline, 3px offset.
- **Transition:** transform, background-color, opacity at 160ms on the house ease.
- **Pairing:** Day 1 is always primary, Day 2 always secondary. Rows are a grid with 10px gap, two auto columns from 760px.

### Cards / Containers
- **Hero card:** 28px radius, overflow hidden, isolated stacking context. Ground is the radial purple field with a bottom linear fade to page black at 85%. Holds nav, portrait, hero and strip. No border.
- **Proof band:** 20px radius, band black fill, 1px hairline border, padding 26px 20px (26px 36px on desktop, 48px inline at 1100px). Label in cream muted at 13px capped at 14ch, then four items at 15px medium with a 13px muted line under each.
- **Figures:** 16px radius, 4:5 aspect, band black ground, media grayscale with `object-fit: cover`, caption absolutely placed 14px in from the sides and 12px from the bottom.

### Navigation
- One row inside the hero card: brand (logomark 26x23px, name at 15px medium, 10px gap) on the left, a date line at 14px cream 80% on the right. The date is hidden on phones. No links, no menu, no sticky behaviour.

### Numbered Strip
The four-item list along the hero card's bottom edge. Each item: a small numeral (12px, tracking 0.04em, lilac #c9b3ff), a 15px medium title, a 14px detail line at cream 72%. Items stack on phones with a 14% cream top rule each; on desktop they sit in four equal columns with 28px gaps and an 18% top rule.

### Hairline Lists
`.learn` and `.facts`: a top hairline on the list, a bottom hairline on each row, 13px to 15px of vertical padding, no bullets, no numbers. Used for what you will learn and for facts.

### Motion
- **House ease:** `cubic-bezier(.23, 1, .32, 1)` on everything.
- **Portrait on load:** opacity 0 to 0.92 over 1s, scale 1.03 to 1 over 1.6s. Fires on image load.
- **Hero reveal:** every `[data-reveal]` inside the card gets `in` immediately with a delay of 120ms + 70ms per element in DOM order.
- **Scroll reveal:** `[data-reveal]` outside the card fades up 20px over 0.7s when 10% visible, root margin -10% at the bottom, once.
- **Reduced motion:** all reveals and the portrait render in place with no transition; the video does not autoplay.

## Do's and Don'ts

### Do:
- **Do** keep every button a 999px pill at min-height 50px with 500-weight 16px text, and keep the `body button.luma-checkout--button` override with `!important`.
- **Do** switch button ground by section: cream fill on the purple field, purple (#7b4dff) fill on black, using `.dark-ground` on the section.
- **Do** use cream at 10% (`rgba(246,242,234,.10)`) for every divider and border on the black page.
- **Do** render all photos and video grayscale, and blend a portrait into the field with `mix-blend-mode: multiply` plus edge masks.
- **Do** set the display and headline at 700 with -0.04em and -0.03em tracking and `text-wrap: balance`.
- **Do** honour `prefers-reduced-motion` by showing everything in place and leaving video paused.
- **Do** keep the page a single inline stylesheet and vanilla script with no libraries.

### Don't:
- **Don't** use the brand purple #5722CB as a fill or text colour on dark ground.
- **Don't** put a purple button inside the purple hero card, or a cream-filled button on the black page.
- **Don't** add box shadows, glass blur, glows or translateY hovers. Hover is opacity 0.92, press is scale 0.97.
- **Don't** tint photography purple or run any image in colour.
- **Don't** use uppercase or letterspaced labels. Labels are 15px, 500 weight, sentence case, in lilac.
- **Don't** use weight 700 below headline size.
- **Don't** introduce a second accent colour. Cream, black and one purple.
