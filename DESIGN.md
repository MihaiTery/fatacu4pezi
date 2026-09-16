---
name: Fata cu 4pezi
description: A Bucharest animal-rescue NGO site organized as a legible rescue route — line, stops, and roundels doing the work decoration would otherwise do.
colors:
  green: "#324f40"
  green-dark: "#24392e"
  green-soft: "#dfe8df"
  cream: "#f9edd3"
  paper: "#fffcf5"
  ink: "#3e1d0d"
  ink-soft: "#6b4a35"
  blue: "#c4e0f5"
  blue-soft: "#e4f0f9"
  pink: "#f2cfdc"
  pink-soft: "#f8e4eb"
typography:
  display:
    fontFamily: "Jost Variable, Jost, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "0.01em"
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.02em"
  meta:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  micro:
    fontFamily: "Jost Variable, Jost, sans-serif"
    fontSize: "0.6rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
  prose-h2:
    fontFamily: "Jost Variable, Jost, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.01em"
  prose-h3:
    fontFamily: "Jost Variable, Jost, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.01em"
rounded:
  focus-ring: "2px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.green-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "20px"
  status-pill-disponibil:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  status-pill-in-tratament:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  status-pill-rezervat:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Fata cu 4pezi

## Overview

**Creative North Star: "The Route Line"**

The site is built as a rescue route made visible: a thin dashed line and small numbered roundels carry the organization's real mechanism (stradă → prim ajutor → tratament → sterilizare → familie nouă) into every layer of the interface, from the hero's stop chips to the adoption-status pill to the `/despre` journey diagram. It borrows the *grammar* of Bucharest transit and wayfinding signage — line, stop, roundel, unambiguous state — without ever drawing a bus, tram, or transit glyph. The effect is meant to read as an organized, multi-stage operation, not a one-off act of sympathy: structure carries the emotional weight instead of melodrama.

The palette commits rather than hedges: cream is the one ground most of the site sits on, ink is the one line/text color, and deep green is the single saturated, surface-owning color — used deliberately large (header, footer, primary buttons) rather than as a diluted accent. Soft blue and soft pink stay chip/tag scale as backgrounds go — they never become a section or card fill. Jost's geometric, wide-tracked, Black-weight (800/900) display letterforms stand in for the brand's unlicensed Futura-Black Bold; Poppins, the brand's own second face, carries everything read at length. Confirmed visual rejections, still standing everywhere except the one named exception below: no hearts, no blobs, no literal transit iconography, no hard offset shadows, no kicker/eyebrow labels, no glyph icon libraries, no gradient text, no glass/blur decoration. The one exception: the brief originally avoided decorative animal motifs sitewide, but the client later directed a literal running-dog illustration for the homepage hero specifically — that figurative animal imagery is confined to that one mark and is not license to add animal decoration elsewhere.

**Key Characteristics:**
- Deep green runs the header's nav row and the full footer, bookending every page's cream content — a client-directed change from an earlier cream header. The header's thin social-icon row stays transparent above that green nav row, another client-directed change, so the header reads as two tones, not one flat block.
- A literal route-line-and-roundel device reused functionally across status, journey, hero, and rhythm — never as decorative wallpaper.
- A warm, literal hero illustration (a running dog arriving at a small house) replaced an earlier abstract "route dial" — a client-directed swap toward imagery that reads immediately as the cause, not just as a wayfinding metaphor.
- Black-weight (800 base, 900 on the hero H1), wide-tracked Jost as the loudest voice on the page — the closest legally available stand-in for the brand's Futura-Black Bold.
- Fully rounded pill geometry (buttons, chips, status pills, badges) against sharp-cornered card containers (16px).
- Hand-authored 24×24 stroke icon set (1.75px stroke) for UI icons — no icon library, no emoji; the hero's dog/house are a separate, larger illustrative mark, not part of that UI icon set.
- Placeholder imagery is itself route-language: circular ring pictograms for animals, route-line graphics for blog covers, monogram badges for partners — never stock/photorealistic imagery standing in as fact.
- One consistent motion grammar sitewide (quiet fade-and-rise on scroll, a hairline-to-shadow lift on interactive cards, the hero mark's dog run) rather than scattered, mismatched effects — see Components → Motion.

## Colors

Warm and grounded, not pastel-soft: cream and ink form the working surface, deep green is the one voice that gets to be loud, and blue/pink stay small and quiet.

### Primary
- **Route Green** (#324f40): the single surface-owning, saturated color. Used for the header surface, the footer surface, primary button fills, the "disponibil" status pill, RouteJourney's lit stop markers/connecting line, the hero mark's house, and link-hover color on cream surfaces. It now runs two full page-width bars (header, footer) in addition to smaller uses — still never a token accent sprinkled thinly across a screen, always owning the surface it's on.
- **Route Green Dark** (#24392e): primary button hover state only.

### Neutral
- **Warm Cream** (#f9edd3): the page ground for content, and the text/icon color on top of the green header and footer.
- **Paper** (#fffcf5): the slightly-lighter card/container surface laid over cream — distinguishes cards and section bands from the page ground without a shadow.
- **Brand Ink** (#3e1d0d): all body text, headings, line art (icons, route-line dashes, the hero mark's dog), and default border tone (`ink/10`, `ink/15`, `ink/25` opacity steps) on cream surfaces.
- **Soft Ink** (#6b4a35): secondary/supporting text — card descriptions, meta rows, body copy that isn't the primary read.
- **Green Soft** (#dfe8df): reserved tonal tint of green (defined, lightly used — e.g. active mobile-nav row background at `green/10`).

### Secondary
- **Sky Chip Blue** (#c4e0f5): small-scale accent — the "in_tratament" status pill fill, one of two faint background rings in the hero mark. Never a section or card background.
- **Blush Chip Pink** (#f2cfdc): small-scale accent — the "rezervat" status pill fill, the other faint background ring in the hero mark. Never a section or card background.

### Named Rules
**The One Surface-Owning Color Rule.** Deep green is the only color allowed to fill a large *surface* — now two of them, the header and the footer, plus buttons and the hero mark's house. Blue and pink stay chip- and linework-scale — status pills, tags, and the hero mark's two faint rings — never a section or card background fill.

**The Focus-Ring-On-Green Rule.** The sitewide focus-visible ring is green on cream (`outline-color: var(--color-green)`), which is invisible on the green header/footer. Both are scoped with `header :focus-visible, footer :focus-visible { outline-color: var(--color-cream); }` in `global.css` — any new component that sits on a green surface needs the same override, checked, not assumed.

**The Cream-and-Paper Rule.** Page ground is cream; any container that needs to visually separate from the ground (card, header, section band) uses paper, not a darker cream or a shadow. Depth comes from this tonal step and a 1px `ink/10` border, not elevation.

## Typography

**Display Font:** Jost Variable (with Jost, sans-serif fallback)
**Body Font:** Poppins (with sans-serif fallback), self-hosted at weights 400/500/600/700

**Character:** Jost's geometric, wide-set, Black-weight forms carry headline confidence and stand in for the brand's unlicensed Futura-Black Bold; Poppins keeps body copy, navigation, and buttons approachable and legible at small sizes. Both are self-hosted — no third-party font requests at runtime.

### Hierarchy
- **Display** (900/Black, `2.6rem`–`6rem` responsive, line-height 1.08, letter-spacing 0.01em): the homepage hero H1 only — the single heaviest weight on the site.
- **Headline** (800, `1.5rem`–`1.875rem`, letter-spacing 0.01em): page H1s (PageLayout), major section H2s.
- **Title** (800, `1.125rem`–`1.25rem`): card titles (animal name, article title, partner name), route-stop labels.
- **Body** (400, `1rem`, line-height 1.6–1.75): paragraph copy; prose blocks cap at 68ch (`--container-prose`).
- **Meta** (500, `0.9rem`–`0.95rem`): primary nav links, the skip-link, and other small UI text that sits between body and label weight — not a formal ramp step, just the honest size these elements render at.
- **Label** (600, `0.75rem`–`0.6rem`, letter-spacing 0.02em, uppercase where used): footer column headers, article dates, partner type tags, social monogram badges (0.6rem floor), status pill text (tracking-wide, not uppercase).

### Named Rules
**The Wide-Tracking Rule.** h1–h4 and any Jost-set label (RouteJourney stop numerals, status pills) carry a minimum `letter-spacing: 0.01em` — confident, never condensed or negative-tracked. This was a finish-review correction: an earlier negative-tracking pass on headings was wrong for this world and has been fully reversed.

## Layout

The site is deployed as a GitHub Pages project site under a sub-path (`base: '/fatacu4pezi'` in `astro.config.mjs`, until the real domain is live). Astro base-prefixes its own generated asset URLs automatically, but any hand-written root-relative path does not — every such path in the codebase is wrapped in `withBase()` (`src/lib/url.ts`); `Button.astro` does this centrally for every internal `href` it renders, so most call sites need no extra code, but a raw `<a>`/`<img>`/`<link>` with a root-relative path (see `Logo.astro`, `SiteHeader.astro`, `SiteFooter.astro`, `AnimalCard.astro`, `ArticleCard.astro`) must wrap it explicitly. The social share image (`public/og-image.png`, 1200×630, referenced by `Layout.astro`'s default `og:image`) reuses the same cream ground, route-line/ring motif, and maro logo as the live site, so a shared link looks like the site it points to.

Content is capped at `max-w-7xl` (1280px) with responsive `px-4`/`sm:px-6`/`lg:px-8` gutters; prose blocks (blog body copy) cap independently at `68ch`. Section rhythm runs in a consistent vertical cadence — `py-16` between major homepage sections, `pt-10`/`sm:pt-14` under the sticky header, `gap-6`–`gap-8` within grids. Card grids respond `1 → 2 → 3` columns (animals, generic cards) or `1 → 2 → 5` (RouteJourney stops) at `sm`/`lg` breakpoints. The header is sticky (`sticky top-0 z-40`) and two-tone: the social-icon row has no fill of its own (transparent — whatever the page shows behind it, almost always cream, shows through as the page scrolls under the sticky header), sitting above a solid green nav row (`bg-green`), separated by an `ink/10` hairline rather than a color change.

## Elevation & Depth

Flat at rest: the site uses no box-shadows for structural depth (only a light `shadow-sm` on the AnimalCard status-pill overlay for legibility over photography). Depth is conveyed tonally — cream ground vs. paper containers — and by a single 1px `ink/10` border around cards, headers, and dividers. Shadow only enters as a *response to interaction*: the `card-lift` utility (AnimalCard, ArticleCard, PartnerCard, and the homepage closing-band panels) raises a card 4px on hover with a soft, blurred, offset shadow (`0 14px 28px -12px`, ink-tinted) — never a flat colored halo, never present at rest. This is a deliberate rejection of both stock-shelter-template heavy shadows and neobrutalist hard-offset shadows; neither belongs to this world.

### Named Rules
**The No-Shadow-At-Rest Rule.** Containers separate from the page using a paper-tone fill and a 1px hairline border, never a resting drop shadow. Shadow is reserved for hover/interaction feedback (`card-lift`) and the one status-pill-over-photo legibility case — both are state-driven, not ambient elevation styling.

## Shapes

Two deliberate registers, never blended: pill geometry (`rounded-full`) for anything interactive or status-bearing — buttons, status pills, route-stop markers, social badges, filter chips — and a moderate 16px corner (`rounded-2xl`) for content containers — cards, image frames, panel blocks. Borders are always 1px (`border`) or 2px only on the outline-button/route-stop-marker ring; no thicker decorative borders and no colored border-left/right accent bars. The RouteJourney stop line and RouteDivider utility use a repeating dashed line (`route-line` utility, 2px height, ink at low opacity) as the system's one recurring linear motif.

## Components

### Buttons
- **Shape:** fully rounded (`rounded-full`), three sizes (`sm` 16px/8px padding, `md` 20px/12px, `lg` 28px/16px).
- **Primary:** deep green fill, cream text (`bg-green text-cream`), hover to Green Dark (#24392e). Used on cream surfaces only — on green (header/footer) it would disappear.
- **Outline:** transparent, 2px ink border and ink text, hover inverts to solid ink fill with cream text. Cream-surface only, for the same reason.
- **Dark:** ink fill, cream text, hover to a slightly warmer near-black (#2a1108).
- **Ghost:** no fill or padding, underlined ink text (2px underline at 35% ink), used for inline "see more" links (e.g. "Vezi toate animalele").
- **Cream** (on green surfaces): solid cream fill, ink text, hover to white. The header's "Donează" button — the inverse of Primary, built specifically so a button keeps standing out once its surface turns from cream to green.
- **Outline-light** (on green surfaces): transparent, cream/60 border and cream text, hover fills solid cream with green text. The header's "Redirecționează 3,5%" button — the inverse of Outline.
- Donate and adopt CTAs are visually distinct on purpose (Cream/Primary vs. Dark) — they are two different speeds of commitment (fast donation vs. deliberate adoption) and are never given identical treatment, on either surface.

### Chips / Status Pills
- **Style:** fully rounded, small caps-free label with a solid current-color dot, tracking-wide text.
- **State:** `disponibil` = green fill/cream text; `in_tratament` = sky blue fill/ink text; `rezervat` = blush pink fill/ink text; `adoptat` = transparent with an ink/25 border and soft-ink text (the one "closed" state, deliberately quieter than the other three).

### Cards / Containers
- **Corner Style:** 16px (`rounded-2xl`).
- **Background:** paper (#fffcf5) on all card types (animal, partner, article, closing-band panels).
- **Shadow Strategy:** none at rest; see Elevation & Depth.
- **Border:** 1px `ink/10`, brightening to `ink/30` on hover for clickable cards.
- **Internal Padding:** 20–24px (`p-5`/`p-6`/`p-7`).

### Navigation
- Header is two-tone: a transparent social-icon row (ink-tone monogram badges, no fill — client-directed change from an earlier solid-green version) sits above the solid deep-green main nav row, separated by an `ink/10` hairline — the icons never compete with primary nav for attention, and read against whatever's scrolled behind the sticky header (almost always cream).
- Main nav: Poppins medium, cream/80 text, hover to full cream, active page gets a cream underline (`underline decoration-2 underline-offset-8`) with `aria-current="page"` — a color-only cue doesn't work here since there's no darker "active" tone available on green the way Route Green worked on cream.
- Mobile active state gets a `cream/15` pill background instead of a color-only cue, mirroring the desktop underline's intent.
- Donate (Cream button) and 3,5% redirect (Outline-light) are permanently visible top-right of the header at every viewport, collapsing into the mobile menu panel below the nav links rather than disappearing.
- The mobile menu toggle (hamburger) and its `:focus-visible` ring both use cream on this surface, not the sitewide ink/green defaults — see Colors → Named Rules → The Focus-Ring-On-Green Rule.

### Route Journey (signature component)
The site's signature interactive device: five stops (Stradă, Prim ajutor, Tratament, Sterilizare, Familie nouă) rendered as numbered circular roundels connected by a horizontal line at desktop width, stacking to a plain vertical list at small viewports. All numbers and copy are server-rendered and fully legible with no JavaScript; a scroll-triggered `IntersectionObserver` "lights up" the roundels and connecting line in green with a 120ms stagger per stop as a progressive enhancement only. `prefers-reduced-motion` renders already-lit with no transition. The same roundel-and-line grammar recurs at smaller scale as RouteDivider (a quiet two-dot rhythm mark between page sections) and inline in the homepage hero (route-stop chips joined by arrow icons) and StatusPill (a single-roundel status signal) — one device, reused functionally everywhere it appears, never introduced fresh as decoration.

### Hero Mark (signature component)
The homepage's second signature device, filling the hero's right column at `lg` and above (hidden below `lg` — the homepage stays short on mobile rather than adding scroll for decoration). Literal, not abstract: a dog travels a rising dashed path — the same stradă → tratament → sterilizare → familie arc as the hero's text chips — toward a small green house with a cream door and window, ringed by two faint tonal circles (sky blue, blush pink) for depth. Three prior versions were replaced on client feedback, in order: an abstract "route dial" (too removed from the cause), a hand-drawn full-body running-dog silhouette, then a hand-drawn dog-face mark in the system's own ink/cream cutout style. **The current traveling figure is the Google Noto Emoji "Dog Face" (🐶, U+1F436), inlined verbatim** — per explicit client request to use "the Google dog emoji" rather than a hand-authored mark. Source file and OFL-1.1 license notice: `src/assets/emoji/NOTICE.md` / `src/assets/emoji/noto-dog-face-1f436.svg`; its paths are inlined directly into `HeroMark.astro`, not loaded at runtime. This is a deliberate, scoped exception to the hand-authored-icon system (see Do's and Don'ts) — the house, rings, path, and start dot around it stay in the system's own flat-color vocabulary; only the dog itself is the imported emoji artwork. It pulses gently (a 0.45s scale trot) while moving. Purely graphic (`aria-hidden="true"`) — the same information is already text in the hero chips, so nothing is lost for assistive tech.

### Motion
One grammar, reused everywhere, never scattered effects per surface:
- **Reveal-on-scroll:** any element marked `data-reveal` starts faded/lowered (`opacity:0`, `translateY(18px)`) and animates to its resting state via one shared `IntersectionObserver` (registered once in `Layout.astro`) the first time it enters the viewport, easing on `cubic-bezier(0.16, 1, 0.3, 1)` (exponential ease-out) over 0.6s. Grids stagger children via a `--reveal-delay` custom property (`100ms`-ish steps). Used for section headers and card grids sitewide (homepage sections, adoption catalogue, partners, blog).
- **Card lift:** the `card-lift` utility raises interactive cards 4px on hover with a soft offset+blur shadow (see Elevation & Depth) — applied to AnimalCard, ArticleCard, PartnerCard, and static info panels.
- **Route Journey stagger:** see above — its own bespoke 120ms-per-stop light-up, independent of the sitewide reveal grammar because it's tied to a specific narrative (stops lighting up in order), not a generic entrance.
- **Hero Mark entrance + loop:** on page load (not scroll-gated, since it's above the fold), the mark fades/scales in, its route path draws itself (`stroke-dashoffset`), and the start dot and house pop in staggered. 1.6s in, the dog face starts a 7s loop along the same path — native SVG `<animateMotion>`/`<mpath>`, not CSS `offset-path`, because offset-path's coordinate space inside a scaled SVG `viewBox` proved unreliable (the mark rendered off-position until this was switched). The face stays upright rather than auto-rotating to the path tangent (`rotate="auto"` made the earlier running silhouette read as tumbling on this path's steeper sections, and a face has no "facing direction" to lose by staying upright). While moving it also pulses gently — a separate `<animateTransform type="scale">`, `additive="sum"`, on an inner `<g>` with no static transform of its own, so it never fights the outer `<g>`'s static centering transform. It fades in, travels to the doorstep, rests there briefly, fades out, and restarts — every animal's journey ending at the same house, on a loop.
- **Reduced motion:** every CSS animation on the site — reveal, card-lift's transition (not its final state), RouteJourney, HeroMark's entrance — is neutralized by one global rule (`prefers-reduced-motion: reduce` sets all `animation-duration`/`transition-duration` to near-zero) plus per-component fallback rules that render the *finished* state immediately. SMIL (the dog's `<animateMotion>`/`<animate>`/`<animateTransform>`) doesn't obey that CSS rule at all, so HeroMark checks `matchMedia` in a small inline script. `pauseAnimations()` alone isn't sufficient — a paused SMIL animation still owns its target attribute and silently overrides any `setAttribute()` on the same attribute — so the script removes the `<animateMotion>`/`<animate>`/`<animateTransform>` elements outright (releasing the attribute back) before setting the dog's resting position and opacity directly. This was found and fixed by testing the fallback, not assumed correct from reading the code.

### Footer
Deep green surface (`bg-green`), not ink — the one place besides buttons and the route-line device where green fills a full section. Four columns at `lg` (identity/social, Navigare, Implică-te, Contact) collapsing to a stack below. Text runs at elevated cream opacities compared to the same components on ink (cream/70–90 rather than cream/50–80) because green is meaningfully lighter than ink — the same opacity step that passed contrast on ink under-delivers on green. Closes with a bottom bar: copyright, privacy-policy link, CIF/registration numbers, and a "Design de brandforge.digital" credit as a genuine external link — the one attribution line on the site, kept in the quietest tier of the footer.

## Do's and Don'ts

### Do:
- **Do** use deep green (#324f40) as the site's one large-surface, saturated color — header, footer, buttons, the hero house, active/lit states.
- **Do** keep soft blue (#c4e0f5) and soft pink (#f2cfdc) at chip/status-pill/linework scale.
- **Do** carry the route-line-and-roundel device functionally (status, journey, hero, rhythm dividers) whenever a new surface needs a structural or status device, rather than inventing a new decorative motif.
- **Do** set Jost headings and Jost-set labels at 800 weight minimum (900 for the one hero H1) with a minimum of 0.01em positive letter-spacing.
- **Do** keep buttons pill-shaped and content cards at 16px radius — don't blend the two registers.
- **Do** use the Cream/Outline-light button variants (not Primary/Outline) for anything placed on the green header or footer — Primary-on-green and Outline-on-green both disappear.
- **Do** build any new UI icon in the existing 24×24, 1.75px-stroke, round-cap hand-authored system rather than pulling in an icon library or emoji; the hero's house (hand-drawn) and dog (an inlined Noto Emoji, by explicit client request) are a separate, larger illustrative register — neither is a precedent for adding more emoji or illustrative icons elsewhere in the system.
- **Do** reuse the one sitewide motion grammar (`data-reveal` fade-and-rise, `card-lift` hover) for any new section or card grid, rather than authoring a bespoke entrance per page.
- **Do** give every new animation a `prefers-reduced-motion` fallback that renders the finished state immediately — and if it's SMIL (`<animate>`/`<animateMotion>`), do it in JS via `pauseAnimations()`, since the CSS media-query rule doesn't reach SMIL.
- **Do** check contrast and focus-ring visibility explicitly whenever placing something new on the green header/footer — opacity steps and the default green focus ring were both tuned for cream and needed separate values on green (see Colors → Named Rules).

### Don't:
- **Don't** use hearts, blobs, or literal transit/bus/tram iconography anywhere in the system. Paw prints stay off the standing ban too — the hero's dog mark (the inlined Noto Emoji dog face) is a specific, client-directed exception for that one mark, not a reopening of decorative animal motifs generally, and not license to import more emoji elsewhere in the system.
- **Don't** apply hard offset (neobrutalist-style) shadows, or any box-shadow at rest for structural depth; shadow only appears as hover feedback (`card-lift`) — see Elevation & Depth.
- **Don't** add kicker/eyebrow labels above headings, same-size icon+heading+text scaffolding grids, gradient text, glass/blur decoration, or bounce/elastic easing on entrances — these are standing craft-floor prohibitions for this build, not stylistic options.
- **Don't** recolor or redraw the supplied crest logo outside its six provided colorways (maro, verde, bej, negru, roz, albastru); it is baked artwork, not a themeable component. Always give it an explicit `self-start` (or otherwise constrained) alignment inside a flex container — a flex column's default `align-items: stretch` will silently distort its aspect ratio (the footer logo shipped broken this way once; do not reintroduce it).
- **Don't** give the donate (fast-commitment) and adopt (deliberate-journey) CTAs identical visual weight or treatment — the system deliberately keeps them distinct (Cream/Primary fill vs. Dark fill) to signal their different pace, on either surface.
- **Don't** animate an SVG child element with both a static `transform` attribute and a competing CSS `transform`-based animation (including `offset-path`) on the same element — the CSS transform silently replaces the static one. Split static positioning (outer `<g>`, SVG attribute) from animation (inner `<g>`, CSS class) the way the Hero Mark's house does.
