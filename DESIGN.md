---
name: Fata cu 4pezi
description: A nationwide Romanian animal-rescue NGO site organized as a legible rescue route — line, stops, and roundels doing the work decoration would otherwise do.
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
  button-accent:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
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

The site is built as a rescue route made visible: a thin dashed line and small numbered roundels carry the organization's real mechanism (sesizare → preluare → sterilizare → îngrijire → foster → adopție) into every layer of the interface, from the hero's stop chips to the adoption-status pill to the `/despre` journey diagram. It borrows the *grammar* of transit and wayfinding signage — line, stop, roundel, unambiguous state — without ever drawing a bus, tram, or transit glyph. The effect is meant to read as an organized, multi-stage operation, not a one-off act of sympathy: structure carries the emotional weight instead of melodrama.

The palette commits rather than hedges: cream is the one ground most of the site sits on, ink is the one line/text color, and blush pink is now the single saturated, surface-owning color — used deliberately large (header, footer) rather than as a diluted accent, a client-directed swap from an earlier all-green surface. Deep green and sky blue are the button/accent pair on top of that pink (and on cream) — green for the faster-commitment action, blue for the lighter one — never a section or card fill themselves. Jost's geometric, wide-tracked, Black-weight (800/900) display letterforms stand in for the brand's unlicensed Futura-Black Bold; Poppins, the brand's own second face, carries everything read at length. Confirmed visual rejections, still standing everywhere except the two named exceptions below: no hearts, no blobs, no literal transit iconography, no hard offset shadows, no kicker/eyebrow labels, no glyph icon libraries, no gradient text, no glass/blur decoration. The exceptions: the brief originally avoided decorative animal motifs sitewide, but the client later directed a literal running-dog illustration for the homepage hero specifically, and separately supplied a new favicon mark whose four squiggles read as paw-adjacent — both are confined to their one mark/texture and are not license to add animal or paw decoration elsewhere.

**Key Characteristics:**
- Blush pink runs the header's nav row and the full footer, bookending every page's cream content — a client-directed change, first from an earlier cream header to green, then from green to pink. The header's thin social-icon row stays transparent above that pink nav row, so the header reads as two tones, not one flat block. Elements on the pink surface (logo, nav text, icons, borders) are ink, not cream — ink-on-pink reads far more clearly than cream-on-pink, which is nearly invisible (both are pale, close in lightness).
- A literal route-line-and-roundel device reused functionally across status, journey, hero, and rhythm — never as decorative wallpaper.
- A warm, literal hero illustration (a running dog arriving at a small house) replaced an earlier abstract "route dial" — a client-directed swap toward imagery that reads immediately as the cause, not just as a wayfinding metaphor.
- Black-weight (800 base, 900 on the hero H1), wide-tracked Jost as the loudest voice on the page — the closest legally available stand-in for the brand's Futura-Black Bold.
- Fully rounded pill geometry (buttons, chips, status pills, badges) against sharp-cornered card containers (16px).
- Hand-authored 24×24 stroke icon set (1.75px stroke) for UI icons — no icon library, no emoji. The hero's cat mascot (Hero Cat) uses this exact round-stroke ink language at a larger illustrative scale, not a separate register.
- Placeholder imagery is itself route-language: circular ring pictograms for animals, route-line graphics for blog covers, monogram badges for partners — never stock/photorealistic imagery standing in as fact.
- One consistent motion grammar sitewide (quiet fade-and-rise on scroll, a hairline-to-shadow lift on interactive cards, Hero Cat's message rotation) rather than scattered, mismatched effects — see Components → Motion.

## Colors

Warm and grounded, not pastel-soft: cream and ink form the working surface, blush pink is the one voice that gets to be loud as a surface, and green/blue do the work of buttons and accents on top of it.

### Primary (surface-owning)
- **Blush Pink** (#f2cfdc): the single surface-owning, saturated color. Used for the header surface and the footer surface — the two full page-width bars that bookend every page. Never a card or section-band fill (that's paper's job); this is specifically the header/footer's color, the way green was before it.

### Buttons & Accents
- **Route Green** (#324f40): the faster-commitment button/accent color — primary button fills (Donează, Adoptă un animal), the "disponibil" status pill, RouteJourney's lit stop markers/connecting line, and link-hover color on cream surfaces. Reads clearly on both cream and pink (dark on light, in both cases).
- **Route Green Dark** (#24392e): primary button hover state only.
- **Sky Blue** (#c4e0f5): the lighter-commitment button/accent color — the `accent` button variant (a 2px blue-bordered pill, e.g. the header's "Redirecționează 3,5%"), the "in_tratament" status pill fill, one of two faint background rings behind Hero Cat. Elevated from chip-only to button scale in this pass, alongside green, on explicit client direction ("butoane, accente și detalii" in blue and green).

### Neutral
- **Warm Cream** (#f9edd3): the page ground for content. No longer a header/footer text color (that surface is pink now, and ink reads far better on it than cream does).
- **Paper** (#fffcf5): the slightly-lighter card/container surface laid over cream — distinguishes cards and section bands from the page ground without a shadow.
- **Brand Ink** (#3e1d0d): all body text, headings, line art (icons, route-line dashes, Hero Cat's contour), default border tone (`ink/10`, `ink/15`, `ink/25` opacity steps) on cream surfaces, and — since this pass — the text/icon/border color on the pink header and footer too. Ink is now the system's only "on light surface" text color; there is no cream-surface/dark-surface text split left to track.
- **Soft Ink** (#6b4a35): secondary/supporting text — card descriptions, meta rows, body copy that isn't the primary read.

### Secondary
- **Blush Chip Pink** (#f2cfdc): at chip scale (not surface scale), the "rezervat" status pill fill and one of two faint background rings behind Hero Cat — the same hex as the header/footer surface, used two registers up in size, which is fine since it's one brand hue doing two different jobs, not two competing pinks.

### Named Rules
**The Pink-Surface Rule.** Blush pink is the only color allowed to fill the header/footer surface. Green and blue are the button/accent pair layered on top of it (and of cream) — never a section or card background fill themselves. This replaces the earlier "green is the one surface-owning color" rule verbatim: same shape of rule, different color, now with two accent colors instead of one.

**The Ink-on-Light Rule.** Every surface in the system is light now (cream, paper, pink) — there is no dark surface left, so there is no cream-on-dark text pairing to maintain either. Text, icons, and borders are ink wherever they sit, at varying opacity steps for hierarchy (`ink/60`–`ink/80` for footer body copy, mirroring the cream-opacity steps the footer used to carry on green). The sitewide green `:focus-visible` ring (`outline-color: var(--color-green)`) needs no per-surface override anymore either, for the same reason — it was only ever swapped to cream to survive a green surface that no longer exists.

**The Cream-and-Paper Rule.** Page ground is cream; any container that needs to visually separate from the ground (card, header, section band) uses paper, not a darker cream or a shadow. Depth comes from this tonal step and a 1px `ink/10` border, not elevation.

**The Alternate-Band Rule.** Long, multi-section narrative pages (home, despre) break the cream ground with one or two full-bleed paper "alt-bands" (the `alt-band` utility, `border-y border-ink/10`) around whichever section is that page's signature device — RouteJourney on despre, the featured-animals grid on the homepage — so a page reads as a sequence of rooms, not one unbroken cream scroll. Single-purpose catalogue/utility pages (adopta, blog, parteneri, transparență, contact, fă-o-sesizare, voluntari) stay one flat cream section on purpose — their job is fast scanning, not narrative rhythm — and keep using paper only at card scale. Don't add a third alt-band to a narrative page or the device stops reading as punctuation.

**The Favicon-Mark Texture.** A repeating tile of the client's new favicon mark (`public/favicon.svg` — four small abstract squiggle shapes arranged into a "4," for "4pezi," inside a cream badge circle; the badge circle itself is dropped for the texture, only the line-art "4" is used) is baked into one CSS custom property (`--pattern-mark-ink`) and exposed as two utilities in `global.css`: `bg-mark` (the texture alone) and `alt-band` (paper + the texture, bundled). It appears on paper alt-bands and the pink header/footer (`SiteFooter.astro` and the nav row + mobile menu panel in `SiteHeader.astro` all carry `bg-mark`) — never on cream, which stays the one flat, quiet ground. There used to be a second, cream-tinted variant (`bg-mark-invert`) for the header/footer back when that surface was dark green; once the surface became pink (light), every surface needing the texture was light too, so the ink-only tint now covers all of them and the cream variant was removed as dead code — if a future pass puts a dark surface back into the system, that variant is worth re-adding, not inventing from scratch. Each tile holds two copies of the mark offset by half a tile on both axes, so the repeat reads as a staggered/brick grid, not a plain square one. Fill-opacity (0.09), mark scale (0.65 — 30% larger than the pass before), and render size (170px, down from 200px/260px) were all tuned up across two rounds on explicit client requests ("mai evident, mai des si intercalat," then "cu 30% mai mare si mai des") — density and size are treated as one lever pulled together, not two independent ones. The mark's four squiggles read as paw-adjacent at a glance — this is a deliberate, scoped exception to the standing "no paw prints" ban: the client supplied this exact artwork as the site's new favicon, so it is used as given, not redrawn to dodge the ban, and it is not license to add paw imagery anywhere else in the system.

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

The site is deployed as a GitHub Pages project site under a sub-path (`base: '/fatacu4pezi'` in `astro.config.mjs`, until the real domain is live). Astro base-prefixes its own generated asset URLs automatically, but any hand-written root-relative path does not — every such path in the codebase is wrapped in `withBase()` (`src/lib/url.ts`); `Button.astro` does this centrally for every internal `href` it renders, so most call sites need no extra code, but a raw `<a>`/`<img>`/`<link>` with a root-relative path (see `Logo.astro`, `SiteHeader.astro`, `SiteFooter.astro`, `AnimalCard.astro`, `ArticleCard.astro`) must wrap it explicitly. The social share image (`public/og-image.png`, 1200×630, referenced by `Layout.astro`'s default `og:image`) is the favicon mark (ink, no badge circle) rendered large and centered on the same cream ground as the live site — a client-directed simplification of an earlier version that also carried the route-line/ring motif and the maro wordmark logo; the favicon mark alone is now the whole image. `Layout.astro`'s `<link rel="icon">` points at `public/favicon.svg` (SVG primary, `favicon.ico` as the `rel="alternate icon"` fallback, both `withBase()`-wrapped), with the maro crest PNG kept only as `apple-touch-icon` — a fix landed in this pass, since the tab icon previously pointed at the crest logo PNG and silently ignored the dedicated favicon files already sitting in `public/`.

Content is capped at `max-w-7xl` (1280px) with responsive `px-4`/`sm:px-6`/`lg:px-8` gutters; prose blocks (blog body copy) cap independently at `68ch`. Section rhythm runs in a consistent vertical cadence — `py-16` between major homepage sections, `pt-10`/`sm:pt-14` under the sticky header, `gap-6`–`gap-8` within grids. Card grids respond `1 → 2 → 3` columns (animals, generic cards) or `1 → 2 → 5` (RouteJourney stops) at `sm`/`lg` breakpoints. The header is sticky (`sticky top-0 z-40`) and two-tone: the social-icon row has no fill of its own (transparent — whatever the page shows behind it, almost always cream, shows through as the page scrolls under the sticky header), sitting above a solid pink nav row (`bg-pink`), separated by an `ink/10` hairline rather than a color change.

## Elevation & Depth

Flat at rest: the site uses no box-shadows for structural depth (only a light `shadow-sm` on the AnimalCard status-pill overlay for legibility over photography). Depth is conveyed tonally — cream ground vs. paper containers — and by a single 1px `ink/10` border around cards, headers, and dividers. Shadow only enters as a *response to interaction*: the `card-lift` utility (AnimalCard, ArticleCard, PartnerCard, and the homepage closing-band panels) raises a card 4px on hover with a soft, blurred, offset shadow (`0 14px 28px -12px`, ink-tinted) — never a flat colored halo, never present at rest. This is a deliberate rejection of both stock-shelter-template heavy shadows and neobrutalist hard-offset shadows; neither belongs to this world.

### Named Rules
**The No-Shadow-At-Rest Rule.** Containers separate from the page using a paper-tone fill and a 1px hairline border, never a resting drop shadow. Shadow is reserved for hover/interaction feedback (`card-lift`) and the one status-pill-over-photo legibility case — both are state-driven, not ambient elevation styling.

## Shapes

Two deliberate registers, never blended: pill geometry (`rounded-full`) for anything interactive or status-bearing — buttons, status pills, route-stop markers, social badges, filter chips — and a moderate 16px corner (`rounded-2xl`) for content containers — cards, image frames, panel blocks. Borders are always 1px (`border`) or 2px only on the outline-button/route-stop-marker ring; no thicker decorative borders and no colored border-left/right accent bars. The RouteJourney stop line and RouteDivider utility use a repeating dashed line (`route-line` utility, 2px height, ink at low opacity) as the system's one recurring linear motif.

## Components

### Buttons
- **Shape:** fully rounded (`rounded-full`), three sizes (`sm` 16px/8px padding, `md` 20px/12px, `lg` 28px/16px).
- **Primary:** deep green fill, cream text (`bg-green text-cream`), hover to Green Dark (#24392e). Works on cream *and* pink — dark green reads clearly on both light grounds, so this is now the header's "Donează" button too, not a cream-surface-only variant.
- **Outline:** transparent, 2px ink border and ink text, hover inverts to solid ink fill with cream text. Also works on any light surface (cream or pink), for the same reason.
- **Dark:** ink fill, cream text, hover to a slightly warmer near-black (#2a1108).
- **Ghost:** no fill or padding, underlined ink text (2px underline at 35% ink), used for inline "see more" links (e.g. "Vezi toate animalele").
- **Accent:** transparent, 2px sky-blue border, ink text, hover fills solid blue (text stays ink — blue is light enough that ink reads on it at rest and on hover alike). The header's "Redirecționează 3,5%" button — the lighter-commitment counterpart to Primary's green, per the client's "verde și albastru pentru butoane" direction.
- Donate and adopt CTAs are visually distinct on purpose (Primary green vs. Dark ink fill) — they are two different speeds of commitment (fast donation vs. deliberate adoption) and are never given identical treatment.
- Retired this pass: the `cream` and `outline-light` variants (solid-cream-fill and cream-outline, built specifically for a dark green header/footer) — with the header/footer now pink and its text ink, nothing in the system needs an "inverted for a dark surface" button anymore. Re-add a variant like this only if a genuinely dark surface returns to the system.

### Chips / Status Pills
- **Style:** fully rounded, small caps-free label with a solid current-color dot, tracking-wide text.
- **State:** `disponibil` = green fill/cream text; `in_tratament` = sky blue fill/ink text; `rezervat` = blush pink fill/ink text; `adoptat` = transparent with an ink/25 border and soft-ink text (the one "closed" state, deliberately quieter than the other three).

### Cards / Containers
- **Corner Style:** 16px (`rounded-2xl`).
- **Background:** paper (#fffcf5) on all card types (animal, partner, article, closing-band panels).
- **Shadow Strategy:** none at rest; see Elevation & Depth.
- **Border:** 1px `ink/10`, brightening to `ink/30` on hover for clickable cards.
- **Internal Padding:** 20–24px (`p-5`/`p-6`/`p-7`).

### Form Fields (Voluntari)
The site's first real data-entry form (`/voluntari`) — every earlier "form" (Fă o sesizare, partner enquiry, Redirecționează) was a single mailto-prefilled button. Inputs and textareas use 12px corners (`rounded-xl`, one step down from the card's 16px so fields read as controls, not containers), a 1px `ink/20` border, cream fill (not paper, so a field is visually a cut-out on the paper form card, not another paper layer), and the sitewide green `:focus-visible` ring. Labels are set at the Label type step (0.75rem/600) directly above their field, with `(opțional)` in soft-ink weight-400 wherever a field isn't required — required fields get a plain `*`, no red asterisk (there's no red in the palette and none is introduced for this). Multi-select "how can you help" answers reuse the `adopta` filter-chip pattern verbatim (pill, `ink/20` border, ink-fill on `aria-pressed="true"`) rather than checkboxes or a new chip style — selection state, not status, so it deliberately does not borrow the green/blue/pink status-pill palette. Submission composes a `mailto:` link from the filled fields (same no-backend honesty as every other form on the site) and reveals an inline confirmation line instead of navigating to a fake "thank you" state — consistent with the donate page's "explicit în lucru" honesty rather than staging a flourish the static site can't actually back up.

### Navigation
- Header is two-tone: a transparent social-icon row (ink-tone monogram badges, no fill — client-directed change from an earlier solid-green version) sits above the solid pink main nav row, separated by an `ink/10` hairline — the icons never compete with primary nav for attention, and read against whatever's scrolled behind the sticky header (almost always cream). The pink nav row (and the mobile menu panel, same surface) also carries `bg-mark`, the same favicon-mark texture as the footer.
- The header logo sits on a circular cream medallion (`rounded-full bg-cream`, maro colorway inside, `border border-ink/10` for definition since cream and pink sit close in lightness) rather than bare on the bar — a client-directed change reproducing the badge/medallion treatment already shown in the brand's own mediakit.pdf (page 3), not an invented device. Sized at `h-[5.6rem]`/`h-[6.4rem]` (60% larger than the header's original bare-logo size of `h-14`/`h-16`), it's now the header's largest single element by design.
- `nav` (`src/data/config.ts`) holds eight items; the desktop bar shows the first six (`nav.slice(0, 6)` in `SiteHeader.astro`) — Despre, Adoptă, Voluntari, Parteneri, Blog, Fă o sesizare — deliberately keeping Voluntari inside the visible six rather than the overflow, per an explicit client request that it live "in the menu," not just the mobile panel or footer. Transparență and Contact stay overflow-only (mobile menu + footer), a pre-existing space trade-off this pass didn't revisit. The mobile menu and the footer's "Navigare" column both map the full `nav` array, so every item is always reachable within two taps regardless of viewport.
- Main nav: Poppins medium, ink/70 text, hover to full ink, active page gets an ink underline (`underline decoration-2 underline-offset-8`) with `aria-current="page"`.
- Mobile active state gets an `ink/10` pill background instead of a color-only cue, mirroring the desktop underline's intent.
- Donate (Primary green) and 3,5% redirect (Accent blue) are permanently visible top-right of the header at every viewport, collapsing into the mobile menu panel below the nav links rather than disappearing.
- The mobile menu toggle (hamburger) uses the sitewide ink/green defaults, same as everywhere else — the pink surface no longer needs the cream-focus-ring override the green one did (see Colors → Named Rules → The Ink-on-Light Rule).

### Route Journey (signature component)
The site's signature interactive device: five stops (Stradă, Prim ajutor, Tratament, Sterilizare, Familie nouă) rendered as numbered circular roundels connected by a horizontal line at desktop width, stacking to a plain vertical list at small viewports. All numbers and copy are server-rendered and fully legible with no JavaScript; a scroll-triggered `IntersectionObserver` "lights up" the roundels and connecting line in green with a 120ms stagger per stop as a progressive enhancement only. `prefers-reduced-motion` renders already-lit with no transition. The same roundel-and-line grammar recurs at smaller scale as RouteDivider (a quiet two-dot rhythm mark between page sections) and inline in the homepage hero (route-stop chips joined by arrow icons) and StatusPill (a single-roundel status signal) — one device, reused functionally everywhere it appears, never introduced fresh as decoration.

### Hero Cat (signature component, was Hero Chase / Hero Mark)
The homepage's second signature device, filling the hero's right column at `lg` and above (hidden below `lg` — the homepage stays short on mobile rather than adding scroll for decoration). Replaces the earlier emoji maze-chase easter egg with the association's own line-art mascot: one contour cat — ears, round head, nose, whiskers — drawn in the exact round-stroke ink language as the hand-authored icon set (no emoji, no icon library), just at a larger illustrative scale. Two faint tonal rings (sky blue, blush pink) carry over from Hero Chase for depth. Built in `HeroCat.astro`, replacing `HeroChase.astro` (removed — see git history for the maze-chase implementation and its emoji-exception rationale, now retired).

The cat carries three swappable facial expressions — neutral, happy, concerned — built as three SVG groups sharing the constant contour/nose/whiskers, toggled by opacity via a `data-active` attribute (never redrawn). Below it, a message card cycles through twenty short pro-animal statements (`src/components/HeroCat.astro`'s own `messages` array, each paired with the expression that fits its tone — a concerned line gets the concerned face, not a random one). The whole mascot is one `<button>`: clicking it advances immediately to the next message and resets the clock; left alone, it advances on its own every 15 seconds. The SVG face stays `aria-hidden="true"` (purely decorative), but the message text is real, accessible content — a plain `<p aria-live="polite">`, not hidden from assistive tech, since unlike Hero Chase this device now carries actual copy, not just motion.

### Motion
One grammar, reused everywhere, never scattered effects per surface:
- **Reveal-on-scroll:** any element marked `data-reveal` starts faded/lowered (`opacity:0`, `translateY(18px)`) and animates to its resting state via one shared `IntersectionObserver` (registered once in `Layout.astro`) the first time it enters the viewport, easing on `cubic-bezier(0.16, 1, 0.3, 1)` (exponential ease-out) over 0.6s. Grids stagger children via a `--reveal-delay` custom property (`100ms`-ish steps). Used for section headers and card grids sitewide (homepage sections, adoption catalogue, partners, blog).
- **Card lift:** the `card-lift` utility raises interactive cards 4px on hover with a soft offset+blur shadow (see Elevation & Depth) — applied to AnimalCard, ArticleCard, PartnerCard, and static info panels.
- **Route Journey stagger:** see above — its own bespoke 120ms-per-stop light-up, independent of the sitewide reveal grammar because it's tied to a specific narrative (stops lighting up in order), not a generic entrance.
- **Hero Cat entrance + rotation:** on page load (not scroll-gated, since it's above the fold), the whole mascot fades/scales in once. From then on nothing moves on its own timeline except the message: every 15 seconds, or immediately on click, the message text and the matching facial expression cross-fade together (200ms), driven by a self-rescheduling `setTimeout` (not `setInterval`, so a click cleanly resets the clock instead of racing a pending tick).
- **Reduced motion:** every CSS animation on the site — reveal, card-lift's transition (not its final state), RouteJourney, Hero Cat's entrance — is neutralized by one global rule (`prefers-reduced-motion: reduce` sets all `animation-duration`/`transition-duration` to near-zero) plus per-component fallback rules that render the *finished* state immediately. Hero Cat additionally checks `matchMedia` in its own script to skip the message/expression cross-fade (an instant swap instead) — the 15s rotation and click-to-advance keep working either way, since swapping displayed text on a timer isn't motion in the vestibular sense, only the transition between states is.

### Footer
Blush pink surface (`bg-pink`), text and icons in ink — the other of the two full-page-width bars that bookend the site (the header is the first). Four columns at `lg` (identity/social, Navigare, Implică-te, Contact) collapsing to a stack below. The logo here is the maro colorway (dark line art), not the bej/cream one it used on the old green surface — bej-on-pink would have the same near-invisible pairing the rule above warns about. Text runs at ink/60–80 opacity steps for hierarchy (footer copy quieter than headings, same shape as the cream-opacity ladder this footer used to carry on green, just inverted to ink-on-light). Closes with a bottom bar: copyright, privacy-policy link, CIF/registration numbers, and a "Design de brandforge.digital" credit as a genuine external link — the one attribution line on the site, kept in the quietest tier of the footer.

## Do's and Don'ts

### Do:
- **Do** use blush pink (#f2cfdc) as the site's one large-surface, saturated color — header and footer only.
- **Do** use deep green (#324f40) and sky blue (#c4e0f5) as the button/accent pair — green for primary/faster-commitment actions, blue for the lighter/secondary ones — plus their existing chip/status-pill/linework uses.
- **Do** carry the route-line-and-roundel device functionally (status, journey, hero, rhythm dividers) whenever a new surface needs a structural or status device, rather than inventing a new decorative motif.
- **Do** set Jost headings and Jost-set labels at 800 weight minimum (900 for the one hero H1) with a minimum of 0.01em positive letter-spacing.
- **Do** keep buttons pill-shaped and content cards at 16px radius — don't blend the two registers.
- **Do** use ink for text, icons, and borders on the pink header/footer (not cream) — ink is now the system's one "on light surface" text color, on cream, paper, or pink alike.
- **Do** build any new UI icon — or any new illustrative mark, at any scale — in the existing round-stroke, round-cap, hand-authored ink language rather than pulling in an icon library or emoji; Hero Cat (see Components → Hero Cat) is the worked example of that language scaled up, not an exception to it.
- **Do** reuse the one sitewide motion grammar (`data-reveal` fade-and-rise, `card-lift` hover) for any new section or card grid, rather than authoring a bespoke entrance per page.
- **Do** give every new animation a `prefers-reduced-motion` fallback that renders the finished state immediately — and if it's SMIL (`<animate>`/`<animateMotion>`), do it in JS via `pauseAnimations()`, since the CSS media-query rule doesn't reach SMIL.

### Don't:
- **Don't** use hearts, blobs, emoji, or literal transit/bus/tram iconography anywhere in the system. Paw prints stay off the standing ban too. One specific, named exception exists and is not a reopening of decorative animal, paw, or heart motifs generally: the client-supplied favicon mark (its four squiggles, used as the sitewide background texture — see Colors → Named Rules → The Favicon-Mark Texture). Hero Cat is not a second exception — it's hand-drawn line art, built to the same rule as every other icon in the system, just larger (see Components → Hero Cat).
- **Don't** apply hard offset (neobrutalist-style) shadows, or any box-shadow at rest for structural depth; shadow only appears as hover feedback (`card-lift`) — see Elevation & Depth.
- **Don't** add kicker/eyebrow labels above headings, same-size icon+heading+text scaffolding grids, gradient text, glass/blur decoration, or bounce/elastic easing on entrances — these are standing craft-floor prohibitions for this build, not stylistic options.
- **Don't** recolor or redraw the supplied crest logo outside its six provided colorways (maro, verde, bej, negru, roz, albastru); it is baked artwork, not a themeable component. Always give it an explicit `self-start` (or otherwise constrained) alignment inside a flex container — a flex column's default `align-items: stretch` will silently distort its aspect ratio (the footer logo shipped broken this way once; do not reintroduce it).
- **Don't** give the donate (fast-commitment) and adopt (deliberate-journey) CTAs identical visual weight or treatment — the system deliberately keeps them distinct (Primary green fill vs. Dark ink fill) to signal their different pace.
- **Don't** reach for the retired `cream`/`outline-light` button variants or a cream-tinted favicon-pattern texture — both existed only to survive a dark green header/footer that no longer exists; the pink surface takes ink text and the ink-tinted pattern like every other light surface in the system.
- **Don't** animate an SVG child element with both a static `transform` attribute and a competing CSS `transform`-based animation (including `offset-path`) on the same element — the CSS transform silently replaces the static one. Split static positioning (outer `<g>`, SVG attribute) from animation (inner `<g>`, CSS class or SMIL). No live example needs this split today (Hero Cat's cross-fade is opacity-only), but the retired Hero Chase implementation is a worked reference in git history if a future device needs it.
