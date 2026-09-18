// Central place for every fact and external link that is not yet final.
// Replace the PLACEHOLDER values below with real data when it becomes available —
// nothing else in the codebase should need to change.

export const site = {
  name: "Fata cu 4pezi",
  legalName: "Asociația Fata cu 4pezi", // PLACEHOLDER — confirm exact legal name
  shortDescription:
    "Fata cu 4pezi salvează animale de toate speciile din București și Ilfov și caută pentru ele soluții de îngrijire și adopție responsabilă.",
  url: "https://fatacu4pezi.ro", // PLACEHOLDER — real domain
  locale: "ro-RO",
  area: "București și Ilfov",
};

// The animal, partner and blog data currently in the repository is
// demonstrative (see PRODUCT.md) — names, dates, "since" years and photos
// are illustrative, not real records. Pages built on that data are kept
// noindex so they aren't promoted in Google as real information. Flip this
// to `false` once the demonstrative entries are replaced with confirmed,
// real animals/partners and the site is ready to be indexed — every page
// that reads it will stop applying noindex automatically.
export const isDemoContent = true;

export const contact = {
  email: "contact@fatacu4pezi.ro", // PLACEHOLDER
  emailConfigured: false, // set true once this is a real, monitored inbox
  reportEmail: "sesizari@fatacu4pezi.ro", // PLACEHOLDER — used by "Fă o sesizare"
  reportEmailConfigured: false,
  phone: "+40 700 000 000", // PLACEHOLDER
  phoneConfigured: false,
  address: "București, România (adresă exactă indisponibilă momentan)", // PLACEHOLDER
  addressConfigured: false,
  cif: "RO00000000", // PLACEHOLDER — CIF / cod de înregistrare fiscală
  cifConfigured: false,
  registrationNumber: "00/0000/2020", // PLACEHOLDER — nr. înregistrare Registrul Asociațiilor și Fundațiilor
  registrationNumberConfigured: false,
  bankAccount: "RO00 XXXX 0000 0000 0000 0000", // PLACEHOLDER — IBAN pentru donații prin transfer bancar
  bankAccountConfigured: false,
  bankName: "Nume Bancă", // PLACEHOLDER
  bankNameConfigured: false,
};

export const social = {
  instagram: "https://instagram.com/fatacu4pezi", // PLACEHOLDER
  facebook: "https://facebook.com/fatacu4pezi", // PLACEHOLDER
  tiktok: "https://tiktok.com/@fatacu4pezi", // PLACEHOLDER
  youtube: "https://youtube.com/@fatacu4pezi", // PLACEHOLDER
};

export const credits = {
  studioName: "brandforge.digital",
  studioUrl: "https://brandforge.digital",
};

// Donations: real card payment is not wired up yet.
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

export const legalLinks = {
  privacyPolicy: "/politica-de-confidentialitate",
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
