# Noto Emoji — source asset

`noto-dog-face-1f436.svg` is the "Dog Face" emoji (🐶, U+1F436) from Google's
[Noto Emoji](https://github.com/googlefonts/noto-emoji) project, fetched from
`raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f436.svg`.

Licensed under the SIL Open Font License, 1.1 — see
https://github.com/googlefonts/noto-emoji/blob/main/LICENSE.

Its paths are inlined directly into `src/components/HeroMark.astro` (not
loaded at runtime) so the hero mark's `<animateMotion>` can travel a single
self-contained `<g>` without a separate network request.
