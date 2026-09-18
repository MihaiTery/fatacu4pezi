# Fata cu 4pezi

Site-ul Asociației Fata cu 4pezi (salvarea animalelor de toate speciile, București și Ilfov). Astro + Tailwind CSS, static.

**Live:** https://mihaitery.github.io/fatacu4pezi/

## Development

```sh
npm install
npm run dev       # http://localhost:4321/fatacu4pezi/
npm run build      # outputs to dist/
npm run preview
```

## Replacing placeholder content

Nothing on this site should be treated as real yet — see `PRODUCT.md` for the full list.

- **Animale, articole de blog, parteneri** — edit/add Markdown files under `src/content/animals/`, `src/content/blog/`, `src/content/partners/`. Schema for each is in `src/content.config.ts`.
- **Date de contact, rețele sociale, link-uri externe (plată, Formular 230, e-mail sesizări)** — toate centralizate în `src/data/config.ts`.
- **Sigla** — cele șase variante de culoare furnizate sunt în `public/logo/`; nu redesena sau recolora în afara acestora (vezi `DESIGN.md`).
- **Sistemul de design** — documentat integral în `DESIGN.md` (culori, tipografie, componente, reguli de motion).

## Deploy

Push pe `main` declanșează automat `.github/workflows/deploy.yml`, care publică pe GitHub Pages. Site-ul rulează sub o subcale (`base: '/fatacu4pezi'` în `astro.config.mjs`) — orice link intern nou trebuie construit cu helper-ul `withBase()` din `src/lib/url.ts` (vezi exemplele din `Button.astro`, `SiteHeader.astro`). Când domeniul propriu (fatacu4pezi.ro) devine disponibil, `site`/`base` din `astro.config.mjs` trebuie actualizate și `withBase()` poate fi eliminat.
