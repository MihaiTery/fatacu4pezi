// The site is served from the domain root today (no `base` in
// astro.config.mjs), so this is a no-op. It stays in place so that serving
// under a sub-path again only needs a config change: Astro base-prefixes its
// own generated asset URLs automatically, but a hand-written root-relative
// path ("/adopta", "/logo/logo-maro.png") does not get that treatment.
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
