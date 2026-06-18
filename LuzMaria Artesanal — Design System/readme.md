# LuzMaria Artesanal — Design System

A design system for **LuzMaria Artesanal**, a brand of handmade Catholic devotional
candles. The product is the heart of the experience: candles made by hand, with a visual
identity inspired by the Baroque aesthetic of the Counter-Reformation — adapted for a
conversion-focused digital landing page, not a church mural.

The voice is **devotional, artisanal, intimate** — faith and handcraft, never aggressive
selling. The look says *"made by hand, with devotion"* — never *"industrial product with
a religious theme."*

> **Conversion happens on WhatsApp.** There is no on-site checkout: every CTA opens a
> pre-written, first-person WhatsApp message to the shop. Keep CTA and form zones clean
> and high-contrast — ornamentation never touches a conversion surface.

---

## Sources

This system was built from materials the user provided. You may not have access, but
they are recorded here so you can explore further to design more faithfully:

- **GitHub — `v1tooR/LuzMaria`** · https://github.com/v1tooR/LuzMaria
  Contained a detailed creative brief (exact palette, type references, component list,
  tone) and an HTML `wireframe.html` + `index.html`. **No logo, fonts, or product
  photography were included** — those are substituted here and flagged below.

Explore the repo above to refine copy, products, and structure beyond what this system
captures.

---

## ⚠️ Substitutions to confirm (please review)

1. **Fonts** — no brand font files were provided. Google Fonts stand-ins, chosen to
   match the brief's references:
   - Display → **Cormorant Garamond** (brief suggested Cormorant / Playfair / Italiana)
   - Body → **EB Garamond** (brief suggested EB Garamond / Lora)
   - UI/labels → **Inter** (brief suggested a humanist sans for UI)
   - Script accent → **Pinyon Script** (taglines/signatures only)
   *If you have licensed brand fonts, send them and I'll swap the `@font-face` setup.*
2. **Logo** — built as a type wordmark, not a real logo file. Replace when available.
3. **Photography** — on-brand chiaroscuro CSS-gradient placeholders. Replace with real
   product photos (see direction in `guidelines/brand-photography.card.html`).
4. **Icons** — brand has no icon set; Lucide recommended for any extra functional icons.

---

## CONTENT FUNDAMENTALS

**Language:** Brazilian Portuguese (pt-BR). Warm, reverent, plain.

**Tone:** Devotional and intimate. The brand speaks like a person of faith who makes each
candle by hand — calm, caring, unhurried. Never salesy, never urgent, no discount-pressure
language ("compre já!", "últimas unidades!").

**Person:** First person **plural** for the brand ("fale com a gente", "enviamos para
todo o Brasil", "feitas à mão"), second person for the visitor ("escolha a sua devoção",
"sua vela"). The pre-filled WhatsApp messages speak in the visitor's first person ("Vim
pela landing page e gostaria de…").

**Casing:** Sentence case for headings and body. **UPPERCASE only** for small UI labels,
buttons, eyebrows and badges (with wide letter-spacing). Never all-caps a sentence.

**Vocabulary:** "feitas à mão", "artesanal", "devoção", "fé", "com carinho", "sob
encomenda", "presente cheio de significado", "intenção". Religious references are
gentle and inclusive (Nossa Senhora, Sagrado Coração), never preachy.

**Emoji:** **None.** Not part of the brand. A single gold ✦ diamond ornament (as SVG) is
the only decorative mark.

**Examples**
- Hero: *"Iluminar momentos de fé e devoção"* / *"Velas feitas à mão, com cuidado em cada
  detalhe, para transformar orações, presentes e memórias em luz."*
- Tagline (script): *"feitas com fé"*, *"com fé e carinho"*
- CTA: *"Quero fazer minha encomenda"*, *"Falar pelo WhatsApp"*
- Brand line: *"Mais do que uma vela, uma lembrança de fé, cuidado e da presença de Deus
  nos pequenos detalhes."*

---

## VISUAL FOUNDATIONS

**Atmosphere — chiaroscuro.** Candlelight against deep dark. Restrained drama; the feeling
of a chapel or home altar lit at half-light. Gold reads as *reflected light*, not
wallpaper — it appears as fine lines, small accents, a single highlight, never a fill or
repeated pattern.

**Color.** Deep graphite/black grounds everything (`--ink-900 #0E0D0C`). Aged, non-metallic
gold is the primary accent (`--gold-500 #C9A227`), used sparingly. Dark wine/bordô
(`--wine-700 #5C1A1B`) is a secondary accent. Off-white ivory/marfim (`--ivory-200 #F2EAD8`)
carries text and inverted (checkout) blocks. Only **1–2 background tones** across a page
(`ink-900` and a slightly raised `ink-850`), plus an ivory block for the high-contrast
final CTA. All text/background pairings meet **WCAG AA** within the dark palette.

**Type.** Cormorant Garamond for display (illuminated-manuscript character; medium/600
weight, tight tracking, leading 1.04–1.22 for large sizes). EB Garamond for body (400/500,
16–19px, generous 1.72 leading, ~60ch measure). Inter for UI/labels/prices (600, uppercase,
0.06–0.18em tracking). Pinyon Script appears **only** in taglines/signatures — never in
buttons or functional text.

**Backgrounds.** Solid deep darks, occasionally warmed by a soft radial candle-glow
(warm gold/bordô bloom behind the hero or an active product). **No** full-bleed repeating
patterns, **no** purple gradients, **no** generic e-commerce white. Real photography is
chiaroscuro: lit candle, warm side light, deep shadows, textures of wax, wick, dark wood,
dried flowers, cloth — a domestic altar, not a store shelf.

**Ornamentation.** Baroque is an *accent layer*, never a background. Allowed: thin gold
fillets (`filete`) between blocks, a centered diamond-node divider, and **one** ornate
corner-bracket frame (`OrnateFrame`) reserved for the brand-story highlight. CTA, forms
and product-card interiors stay clean and unornamented.

**Corners & borders.** Restrained radii — nearly straight, lightly softened: `--radius-md
5px` for cards/buttons, `--radius-sm 3px`. Pills (`999px`) only for tags/chips. Borders are
**hairline gold** (`rgba(201,162,39,0.22–0.32)`) on dark surfaces.

**Cards.** Dark surface (`--ink-800`), a single fine gold border, centered product photo,
clean ivory name + gold price. No ornament inside. Default shadow is subtle; on hover the
card lifts 3px, the border brightens to solid gold, and a soft candle glow appears.

**Shadows & glow.** Warm, low, soft — never harsh. Standard elevation
(`--shadow-md 0 6px 24px rgba(0,0,0,.45)`) plus a signature **candle glow**
(`--glow-candle`, a warm gold halo) for the hero and active product.

**Motion.** Gentle and devotional — fades and soft eases (`--ease-soft`,
`--dur-base 260ms`). **No bounce, no infinite decorative loops.** Hover: brighten border /
lift card / lighten background slightly. Press: a 1px downward nudge (no scale-shrink).
Focus: a 3px gold ring (`--ring-accent`), always visible for accessibility.

**Transparency & blur.** Used only where it earns its place: the nav becomes a translucent
blurred bar after scroll; scrims darken imagery behind text. Not decorative glassmorphism.

**Layout.** Mobile-first, `--container-max 1180px`, generous vertical section rhythm
(`--section-y 96px`). Sticky translucent nav. One primary CTA per view.

---

## ICONOGRAPHY

The brand is **photo-led and icon-light** by design. In source:

- **WhatsApp brand glyph** — inline SVG inside `WhatsAppButton`, the principal CTA mark.
- **Gold diamond ornament (✦)** — inline SVG in `SectionDivider` / `OrnateFrame`; the only
  decorative glyph. Never tiled or repeated as a pattern.

There is **no icon font, sprite, or PNG icon set** in the source, and **no emoji**. For any
additional functional icons (menu, arrows, etc.), use **Lucide** (https://lucide.dev) via
CDN at **1.5px stroke** to match the hairline-gold line weight — flagged as a substitution
since the brand ships no icons of its own. See `assets/README.md`.

---

## INDEX

**Root**
- `styles.css` — global entry point (consumers link this one file; `@import`s only)
- `readme.md` — this guide
- `SKILL.md` — Agent-Skills-compatible entry

**`tokens/`** — design tokens, all reached from `styles.css`
- `fonts.css` · webfont imports (Google Fonts substitutes)
- `colors.css` · ink / gold / wine / ivory scales + semantic aliases
- `typography.css` · families, scale, weights, leading, semantic roles
- `spacing.css` · spacing, radii, borders, shadows, motion, z-index
- `base.css` · small ambient helpers (filete divider, eyebrow, script, focus ring)

**`components/`** — reusable React primitives (namespace `LuzMariaArtesanalDesignSystem_e1b018`)
- `buttons/` · **Button** (primary/secondary/ghost/onIvory), **WhatsAppButton**
- `product/` · **ProductCard**
- `forms/` · **Input**, **Textarea**
- `feedback/` · **Tag**, **Badge**
- `layout/` · **SectionDivider**, **OrnateFrame**, **Eyebrow**
- `content/` · **FaqItem**, **StepList**

**`ui_kits/landing/`** — full landing-page recreation
- `index.html` · interactive landing (Nav · Hero · ProductGrid · BrandStory · FAQ · CTA · Footer)
- `Nav.jsx` · `Hero.jsx` · `ProductGrid.jsx` · `BrandStory.jsx` · `Footer.jsx`

**`guidelines/`** — foundation specimen cards (Design System tab): Colors, Type, Spacing, Brand

**`assets/`** — drop real logo / photography here (see `assets/README.md`)
