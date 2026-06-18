# Imagery & Assets

**No brand image files (logo, product photos) were provided** in the source repo
(`github.com/v1tooR/LuzMaria` contained only a brief + HTML wireframe). The system
therefore ships with:

- **Wordmark** — built from the type system (Cormorant Garamond), not an image file.
  See `guidelines/brand-wordmark.card.html`. Replace with a real logo when available.
- **Photography** — represented by on-brand chiaroscuro CSS gradient placeholders in
  the UI kit and `ProductCard`. These are stand-ins, NOT final art.

## What to drop in here
Place real assets in this folder and reference them by relative path:

- `assets/logo.svg` / `assets/logo.png` — final logotype
- `assets/img/candle-*.jpg` — chiaroscuro product photos (dark backdrop, warm side
  light, deep shadows — see `guidelines/brand-photography.card.html` for direction)
- `assets/hero.jpg` or `assets/hero.mp4` — hero backdrop

Then swap the placeholders: pass `image="assets/img/candle-aparecida.jpg"` to
`ProductCard`, and replace the gradient `<div>` in `ui_kits/landing/Hero.jsx`.

## Iconography
The brand uses iconography **extremely sparingly** — this is a devotional, photo-led
product, not an icon-heavy UI. In source we use:

- **WhatsApp brand glyph** — inline SVG inside `WhatsAppButton` (the primary CTA).
- **Gold diamond ornament** — inline SVG in `SectionDivider` / `OrnateFrame`, the only
  decorative mark. Never tiled.

No icon font or sprite exists. If a screen needs additional functional icons (menu,
arrow, etc.), use **Lucide** (https://lucide.dev) via CDN at 1.5px stroke to match the
hairline-gold weight — flagged here as a substitution, since the brand has no icon set
of its own.
