// Central place for every fact and external link that is not yet final.
// Replace the PLACEHOLDER values below with real data when it becomes available —
// nothing else in the codebase should need to change.

export const site = {
  name: "Fata cu 4pezi",
  legalName: "Asociația Fata cu 4pezi", // PLACEHOLDER — confirm exact legal name
  shortDescription:
    "Asociație de salvare a câinilor și pisicilor din Bucureşti şi împrejurimi.",
  url: "https://fatacu4pezi.ro", // PLACEHOLDER — real domain
  locale: "ro-RO",
  area: "București și Ilfov",
};

export const contact = {
  email: "contact@fatacu4pezi.ro", // PLACEHOLDER
  reportEmail: "sesizari@fatacu4pezi.ro", // PLACEHOLDER — used by "Fă o sesizare"
  phone: "+40 700 000 000", // PLACEHOLDER
  address: "București, România (adresă exactă indisponibilă momentan)", // PLACEHOLDER
  cif: "RO00000000", // PLACEHOLDER — CIF / cod de înregistrare fiscală
  registrationNumber: "00/0000/2020", // PLACEHOLDER — nr. înregistrare Registrul Asociațiilor și Fundațiilor
  bankAccount: "RO00 XXXX 0000 0000 0000 0000", // PLACEHOLDER — IBAN pentru donații prin transfer bancar
  bankName: "Nume Bancă", // PLACEHOLDER
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

// Formular 230 (redirecting 3.5% of income tax). Final destination will be
// the association's dedicated page on formular230.ro — swap `url` when issued.
export const redirect230 = {
  url: "https://formular230.ro/", // PLACEHOLDER — replace with the org's specific formular230.ro link
  deadlineNote: "Poți redirecționa până pe 25 mai, pentru anul fiscal anterior.",
};

export const legalLinks = {
  privacyPolicy: "/politica-de-confidentialitate",
};

export const nav = [
  { label: "Despre", href: "/despre" },
  { label: "Adoptă", href: "/adopta" },
  { label: "Parteneri", href: "/parteneri" },
  { label: "Blog", href: "/blog" },
  { label: "Fă o sesizare", href: "/fa-o-sesizare" },
  { label: "Transparență", href: "/transparenta" },
  { label: "Contact", href: "/contact" },
];
