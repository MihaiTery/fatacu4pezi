// GitHub Pages project-site deploy: the site is served under a sub-path
// (astro.config.mjs `base`), not at the domain root. Astro base-prefixes its
// own generated asset URLs automatically, but a hand-written root-relative
// path ("/adopta", "/logo/logo-maro.png") does not get that treatment —
// this makes it explicit at every call site that needs it.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * Prefixes a root-relative internal path ("/adopta") with the deploy base.
 * Leave anything that isn't root-relative (mailto:, tel:, https://, #frag)
 * untouched — callers should only pass this genuine internal paths.
 */
export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE}${path}`;
}
