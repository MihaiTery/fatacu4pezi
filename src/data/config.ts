// Central place for every legal fact, contact channel and external link.
// Unconfirmed values are `null` (or `configured: false`) rather than fake
// placeholders — fill them in here and nothing else in the codebase should
// need to change.

// Legal identity. Everything below comes from the association's ANAF
// fiscal registration certificate — verified values only. A field that is
// not yet verified stays `null` and every component skips it entirely
// (nothing is rendered, not even a label), so no placeholder can reach
// production.
export const site = {
  legalName: 'ASOCIATIA "FATA CU 4PEZI"', // exact form from the ANAF certificate
  displayName: "Fata cu 4pezi",
  shortDescription:
    "Fata cu 4pezi intervine, în limita resurselor disponibile, pentru salvarea, tratamentul veterinar, sterilizarea, găsirea unui foster și adopția animalelor de pe străzi, pe tot teritoriul României.",
  // Primary production domain. Canonical/OG URLs use `site` from
  // astro.config.mjs first; keep the two in sync.
  url: "https://fatacu4pezi.ro",
  // Every domain the association uses for this site; shown together
  // wherever the website is named (Informații legale, Termeni).
  domains: ["fatacu4pezi.ro"],
  locale: "ro-RO",
  area: "România",
};

export const legal = {
  // CUI/CIF without the "RO" prefix: VAT registration is not confirmed.
  cif: "55536740",
  // Nr. din Registrul Asociațiilor și Fundațiilor (confirmed by the
  // association, September 2026). Not the ANAF certificate's series number.
  registrationNumber: "2517/A/2026" as string | null,
  address: "Str. Plantelor nr. 16, corp B, et. 1, ap. 1, camera 1, Sector 2, București",
  foundedDate: "03.09.2026", // data atribuirii CIF
  caen: { code: "9499", label: "Activități ale altor organizații n.c.a." },
};

// The adoption catalogue holds real animals taken from the association's
// Instagram posts (September 2026), so the adopta pages carry no demo
// notice or noindex. Flip to `true` only if placeholder profiles ever
// return. (The demo blog posts and partners were removed outright; those
// pages show an "în curând" state while their collections are empty.)
export const animalsAreDemo = false;

// Contact channels. `null` = not confirmed yet → the UI hides the value and
// every flow that would send to it (mailto forms, CTAs) shows an
// "available soon" state instead. Set the real, monitored value to enable.
export const contact = {
  email: "contact@fatacu4pezi.ro" as string | null,
  phone: "+40 765 737 439" as string | null,
  // Person who answers `phone`, shown next to it. Spelling as provided.
  phoneContactName: "Madalina Bacauanu" as string | null,
};

export const bank = {
  accountHolder: "ASOCIATIA FATA CU 4PEZI",
  iban: "RO52INGB0000999920727614",
  swift: "INGBROBUXXX",
  name: "ING Bank",
};

// Social profiles. `url: null` = the association's official profile is not
// confirmed yet, so no icon is rendered for that network (a guessed handle
// could point at someone else's account).
export const social: { key: "instagram" | "facebook" | "tiktok" | "youtube"; label: string; url: string | null }[] = [
  { key: "instagram", label: "Instagram", url: "https://www.instagram.com/fatacu4pezi/" },
  { key: "facebook", label: "Facebook", url: null },
  { key: "tiktok", label: "TikTok", url: null },
  { key: "youtube", label: "YouTube", url: null },
];

export const credits = {
  studioName: "brandforge.digital",
  studioUrl: "https://brandforge.digital",
};

// Donations: real card payment is not wired up yet — no processor chosen
// (still being evaluated, September 2026).
// `provider` stays null until a processor (e.g. Stripe, Netopia, Euplatesc) is selected;
// the donate page renders an explicit "în lucru" state instead of a fake checkout.
export const donations = {
  provider: null as null | { name: string; checkoutUrl: string },
  suggestedAmounts: [30, 50, 100, 250], // lei — editorial suggestion only, not final
};

// Formular 230 (redirecting 3.5% of income tax). `url` currently points at
// the generic public platform, not a link dedicated to this association —
// `configured` stays false (and the redirect page shows an informational
// state instead of a CTA) until the association's own formular230.ro link
// is issued and the current fiscal year's deadline is confirmed.
export const redirect230 = {
  url: "https://formular230.ro/", // PLACEHOLDER — replace with the org's specific formular230.ro link
  configured: false,
  deadlineNote: null as string | null, // set once the current campaign's real deadline is confirmed
};

// "Fă o sesizare" sends people to the Romanian Police's online petition form
// (animal cruelty falls under Legea 205/2004); the site itself receives nothing.
export const policeReportUrl = "https://politiaromana.ro/ro/contact#formular-petitie";

export const legalLinks = {
  privacyPolicy: "/politica-de-confidentialitate",
  cookiePolicy: "/politica-de-cookies",
  terms: "/termeni-de-utilizare",
  legalInfo: "/informatii-legale",
};

// Date shown as "Ultima actualizare" on the legal pages. Bump it whenever
// the privacy, cookie or terms text changes.
export const legalLastUpdated = "01.10.2026";

// Newsletter: no email service provider (Mailchimp, Brevo, etc.) is wired up
// and none should be added without first updating the privacy/cookie
// policies. Until then the footer signup builds a mailto request to
// `contact.email` (and is shown as unavailable while that is null).
export const newsletter = {
  provider: null as null | { name: string; formAction: string },
};

export const nav = [
  { label: "Despre noi", href: "/despre" },
  { label: "Adoptă", href: "/adopta" },
  { label: "Voluntariat", href: "/voluntari" },
  { label: "Parteneri", href: "/parteneri" },
  { label: "Blog", href: "/blog" },
  { label: "Fă o sesizare", href: "/fa-o-sesizare" },
  { label: "Transparență", href: "/transparenta" },
  { label: "Contact", href: "/contact" },
];
