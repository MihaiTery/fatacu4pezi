# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro (TypeScript, content collections) + Tailwind CSS, static output. Chosen because the site is content-driven (animals, articles, partners) with no need for a backend/CMS, must be very fast (Core Web Vitals treated as a hard requirement), needs clean shareable URLs per animal/article, and should deploy cleanly on Cloudflare (Cloudflare is the client's named target for the future shop). Content lives in typed collections so the dev team can replace placeholder animals/articles/partners by editing files, no code changes required.

## Users

- **Donors / 3.5% redirectors** — people who already trust the cause and want to act in under a minute: donate by card or redirect 3.5% of income tax. They need the two actions to be obvious and fast from anywhere on the site.
- **Prospective adopters** — people looking to adopt a rescued animal (any species, though dogs and cats make up the catalogue today) in Bucharest and surrounding areas. They need a real catalogue with enough information (age, sex, medical/sterilization status, temperament, status) to make a responsible decision, and a clear way to start the adoption conversation.
- **People who found an animal in danger** — need to immediately understand how to report it (Fă o sesizare) and what information to have ready.
- **Credibility evaluators** — journalists, potential partners (vet clinics), larger donors, or cautious first-time visitors who want to verify the organization is legitimate, organized and transparent before engaging (About, Partners, Transparency).
- **Existing partners** (mostly veterinary clinics/professionals) — want their collaboration represented with dignity, not as a logo strip.

## Product Purpose

The website for "Fata cu 4pezi," a Romanian animal-rescue NGO operating in Bucharest and surrounding areas. It exists to convert goodwill into concrete action: donations, 3.5% redirection, adoptions, and animal-in-danger reports, while establishing the organization as competent and trustworthy, not just sympathetic. Success = a visitor can, within seconds of arriving, understand who the organization is and reach the specific action that brought them there (donate, redirect 3.5%, adopt, report, or verify credibility), without needing the homepage to explain everything.

## Positioning

Not a shelter with a website bolted on, and not a generic charity template. The organization's actual activity is layered and specific — street rescue first, then adoption placement, then veterinary treatment, sterilization, food provision, and social/hardship cases — and the site should read as an organized operation with a real network (vet partners) behind it, not a single-purpose "adopt a pet" microsite. Emotional weight is meant to come from real photography and the brand's own illustrated identity later, not from melodrama, stock imagery clichés, or decorative paw/heart motifs baked into the design system.

## Operating Context

- Geographic scope: Bucharest and surrounding areas (județul Ilfov / greater Bucharest), not national.
- Species scope: all species, not dogs and cats only — the association rescues any animal in need. The catalogue's content-collection schema accepts any species as free text (see `src/content.config.ts`); every animal published so far happens to be a dog or a cat. For species that cannot legally be rehomed as pets, the `adoptable` field is set to `false` so the profile talks about care/recovery instead of promising adoption.
- No CMS/admin: the dev team edits content collection files directly (animals, blog posts, partners are structured content, not hardcoded markup).
- No backend exists or is planned at this stage: "Fă o sesizare" opens a mailto flow (no submission backend); adoption CTA leads to a placeholder contact flow; donation is UI + isolated payment-provider placeholder, no live transactions.
- Future integrations arrive later without a redesign: card payment provider, https://formular230.ro/ for 3.5% redirection, a real report-an-animal email address, and a Cloudflare-based shop.

## Capabilities and Constraints

- Romanian only, no language switcher, correct diacritics required throughout.
- No lorem ipsum anywhere; all placeholder copy must be realistic, in Romanian, and obviously fictional where it states facts (names, numbers, legal data).
- Logo: illustrated crest (girl + cats + dog line art) with the "ASOCIAȚIA" arc and "Fata cu 4pezi" wordmark baked into the artwork itself, supplied as raster PNG/JPG and vector SVG/PDF in six colorways (albastru/blue, bej/beige, maro/brown, negru/black, roz/pink, verde/green). The SVG's arc text ("ASOCIAȚIA") is live `<text>` using an unlicensed custom font (Daffiys) and is missing the correct "Ț" glyph — the raster PNGs are the reliable source for on-screen use; SVGs are reserved for contexts needing vector scaling where the arc-text risk is acceptable or re-authored. Logo must not be redrawn or altered, only recolored via the provided colorways and resized.
- No shop yet — architecture must allow adding one later without disruption; nav/homepage must not feature it prominently now. A `/shop` "În curând" placeholder is acceptable.
- No cookie banner unless a non-essential cookie is actually introduced (none is, at this stage).
- All currently-unavailable external integrations (payment provider, Formular 230 destination, report email, social URLs, legal/contact facts) must be isolated in a small number of config/content files, not scattered inline.

## Brand Commitments

- Name: **Fata cu 4pezi** (not "Fata cu 4pezii" — confirmed exact spelling). Legal/formal reference: Asociația Fata cu 4pezi.
- Color palette (mediakit, verbatim): `#c4e0f5` soft blue, `#f2cfdc` soft pink, `#3e1d0d` dark brown/ink, `#f9edd3` warm cream, `#324f40` deep green.
- Typography (mediakit): **Futura-Black Bold** for display type, **Poppins** for general type. Futura-Black Bold has no available free web license; substituting **Jost** (Google Fonts) as the geometric equivalent for display headings, paired with Poppins for UI/body — both sans, both consistent with the brand's geometric-sans direction. This substitution is a working assumption, not a client-confirmed decision.
- Reference sites the client evaluated (principles to extract, not visuals to copy): visulluanei.org (separation of Donează / Redirecționează 3,5% as prominent, distinct actions — liked; colors/photography/background treatment — disliked, do not copy), adapostulsperanta.ro (small social-media bar above the main nav — liked), asociatiaramses.ro (short homepage, footer social icons, prominence of "Adoptă," overall IA/menu philosophy — liked as the strongest UX reference; not to be cloned visually).
- Hard requirement, client's own words: "Știu sigur că vreau o pagină de start ff scurtă... Nimic încărcat." The homepage must be short, calm, and restrained — deeper explanation belongs on inner pages, not home.

## Evidence on Hand

- `mediakit.pdf` (repo root) — full color palette and typography spec, and the six logo colorways.
- `/Logo` (repo root) — PDF/JPG/PNG/SVG exports of the logo in six colorways.
- No real photography, no real animal data, no real partner data, no real blog content, no real legal/contact/financial information exists yet. All of it is placeholder and must be obviously replaceable, and must never be presented as fact (no invented statistics, testimonials, or legal claims stated as real).

## Product Principles

1. **Restraint is a feature.** When in doubt, cut rather than add — especially on the homepage. Depth belongs on inner pages.
2. **Two speeds of commitment, kept distinct.** Donate/redirect-3.5% is a fast, low-friction, always-reachable action; adopt is a deliberate, information-heavy journey. Don't force them into identical visual treatment or identical prominence.
3. **Competence carries the emotional weight, not melodrama.** Trust comes from clarity, organization, and (eventually) real photography — not decorative animal motifs, guilt framing, or generic shelter-template visual clichés.
4. **Replaceability by design.** Every placeholder (animals, articles, partners, contact/legal facts, external links) lives in structured content/config so the org's own team can swap it in without touching layout code.
5. **Bucharest-area specificity stays visible.** The site should never read as a generic national charity — it rescues animals of any species, but always within Bucharest and Ilfov.

## Accessibility & Inclusion

High standard required: semantic HTML, logical heading hierarchy, full keyboard usability, visible focus states, strong color contrast, alt-text architecture for animal photography, accessible forms, ARIA only where it adds real value, and respect for `prefers-reduced-motion`. Accessibility is not to be traded off for visual polish.
