# Fata cu 4pezi

Site-ul Asociației Fata cu 4pezi (salvarea animalelor de toate speciile, la nivel național). Astro + Tailwind CSS, static.

**Live:** https://fatacu4pezi.ro/

## Development

```sh
npm install
npm run dev       # http://localhost:4321/
npm run build      # outputs to dist/
npm run preview
```

## Replacing placeholder content

Nothing on this site should be treated as real yet — see `PRODUCT.md` for the full list.

- **Animale, articole de blog, parteneri** — edit/add Markdown files under `src/content/animals/`, `src/content/blog/`, `src/content/partners/`. Schema for each is in `src/content.config.ts`.
- **Date juridice, date bancare, contact, rețele sociale, link-uri externe (plată, Formular 230, e-mail sesizări)** — toate centralizate în `src/data/config.ts`. O valoare neconfirmată rămâne `null` și nu este afișată deloc (nici e-mailul, nici telefonul, nici profilurile sociale, nici numărul din Registrul Asociațiilor și Fundațiilor). Nu pune placeholder-uri afișabile acolo.
- **Sigla** — cele șase variante de culoare furnizate sunt în `public/logo/`; nu redesena sau recolora în afara acestora (vezi `DESIGN.md`).
- **Sistemul de design** — documentat integral în `DESIGN.md` (culori, tipografie, componente, reguli de motion).

## Pagini juridice

`/politica-de-confidentialitate`, `/politica-de-cookies`, `/termeni-de-utilizare`, `/informatii-legale` (layout comun: `src/layouts/LegalLayout.astro`). Textele descriu comportamentul real al site-ului (static, formulare care doar pregătesc un e-mail `mailto:`, fără cookie-uri/tracking). Orice schimbare de comportament — procesator de plăți, serviciu de newsletter, analytics, embed-uri, backend — înseamnă actualizarea lor **înainte** de publicare și a datei `legalLastUpdated` din config.

## Cookie-uri și tracking

Audit la 29.09.2026: site-ul nu folosește cookie-uri, `localStorage`, `sessionStorage`, IndexedDB, analytics, pixeli, tag managere, captcha, iframe-uri sau scripturi terțe; fonturile și imaginile sunt găzduite local; GitHub Pages nu trimite `Set-Cookie`. De aceea **nu există cookie banner** — și nu trebuie adăugat unul fără motiv.

Regulă pentru viitor (GDPR + Legea nr. 506/2004). Dacă se introduc Google Analytics, Meta Pixel, TikTok Pixel, Hotjar, Microsoft Clarity, orice tracking de marketing, embed-uri care setează tehnologii neesențiale (YouTube, Facebook, Instagram, Google Maps etc.) sau alte instrumente similare:

- acestea **nu se încarcă înainte de consimțământul utilizatorului** (niciun script, iframe sau request către terț înainte de alegere);
- se implementează în același timp un CMP/banner cu cel puțin **„Accept toate”**, **„Refuz toate”** și **„Preferințe”**; „Accept” și „Refuz” sunt la fel de vizibile și la fel de ușor de accesat (același nivel, fără pași în plus pentru refuz);
- nicio categorie neesențială nu este preselectată; categorii recomandate: **Necesare** (mereu active), **Analiză** (opt-in), **Marketing** (opt-in);
- utilizatorul își poate schimba oricând alegerea dintr-un link permanent **„Setări cookies”** în footer;
- `localStorage`/`sessionStorage`/IndexedDB sunt tratate la fel ca cookie-urile când stochează sau citesc informații pe dispozitiv în scopuri neesențiale;
- `politica-de-cookies` și `politica-de-confidentialitate` se actualizează înainte de publicare.

## Deploy

Push pe `main` declanșează automat `.github/workflows/deploy.yml`, care publică pe GitHub Pages, pe domeniul propriu **fatacu4pezi.ro** (setat din *Settings → Pages → Custom domain* al repo-ului, cu DNS-ul către GitHub Pages). Site-ul rulează din rădăcina domeniului, fără `base`. Link-urile interne trec în continuare prin helper-ul `withBase()` din `src/lib/url.ts` (acum fără efect), ca o eventuală mutare sub o subcale să necesite doar schimbarea configului.
