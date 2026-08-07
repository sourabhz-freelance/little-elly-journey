# Little Elly Investor Hub

Build a PREMIUM, emotionally warm yet grown-up interactive one-page scroll site that IS a master-franchise investor presentation for **Little Elly** ("A Happy Preschool", India's most admired preschool franchise — 172+ centres, 19 cities, 20+ years). The audience is serious investors considering becoming a **master franchise partner** for a territory. Tone: warm family feeling + confident business credibility. Think elegant, rich, alive — motion that breathes, not flashes.

IMPORTANT: We are building PAGE BY PAGE. For THIS first message, build ONLY the opening hero section (full-viewport landing). Get it beautiful and pixel-considered; we'll add the next sections in later messages. Scaffold it as a single-page React app so we can extend it.

TECH: React + Tailwind. Load Google Fonts **Fredoka** (display/headings) and **Poppins** (body). Framer-motion is welcome for entrance + parallax. Must be fully responsive (graceful stack on mobile).

=== BRAND TOKENS (use exactly, as Tailwind theme colors) ===
- coral #E85253 (primary brand/CTA)
- yellow #FFD541 (sun/energy/accents)
- pink #ED9FB6 (trails)
- ink #09094D (headings/body dark)
- periwinkle #A6A5FE, cyan #42C4E1, orange #FF9008, turquoise #09BAB7, lightpink #FBD6E1
- cream background #FFF8F3
Fonts: Fredoka for h1/headlines, Poppins for everything else.

=== BRAND MOTIFS (reusable) ===
- "The Trail": a flowing DOTTED paw-path (svg stroke, dasharray ~"0.1 17", round caps, pink) that slowly flows via animated stroke-dashoffset. Use as the signature moving element.
- "Creative Paw": a modular paw = big rounded coral pad + 4 toes made of a rounded-square (yellow), circle (periwinkle), rounded-square (cyan), triangle (pink). Use as floating background shapes at low opacity (~0.06–0.10) and as a hero focal graphic.
- Soft, warm radial glows in the background.

=== HERO SECTION SPEC (replicate this design) ===
Layout: full-viewport (100vh, min 640px). Warm cream background with soft radial glows (pale pink top-right, pale yellow bottom-left). Two-column grid: text left (~55%), a graphic scene right (~45%). Stacks on mobile.

TOP HEADER (absolute): left = Little Elly logo lockup (for now a placeholder mark: a yellow circle with two coral elephant-paw prints as "eyes", next to wordmark "Little Elly" in Fredoka coral with tiny uppercase "A HAPPY PRESCHOOL" beneath — leave it easy to swap for the real logo asset later). Right = a pill outline badge "MASTER FRANCHISE PARTNERSHIP" in coral.

LEFT TEXT COLUMN, in order:
- Small coral uppercase letter-spaced eyebrow: "An invitation to belong"
- H1 in Fredoka, ink color, large (clamp ~44–92px), line-height ~1: "Our family is growing." — the word "growing." in CORAL, with a hand-drawn yellow underline swoosh (svg path) that draws itself in. Animate the four words rising in one-by-one (staggered).
- Subline (Poppins, ~30ch, muted): "**172 centres. Two happy decades.** And an open hand, waiting for yours." (bold the first sentence in ink, rest lighter.)
- CTA row: primary pill button coral "Explore the opportunity →" (subtle lift + arrow nudge on hover, soft coral shadow) + a secondary underlined text link "Request the prospectus".

RIGHT GRAPHIC SCENE — "an open hand, waiting for yours" made literal:
- A soft coral glow circle pulsing gently.
- A large welcoming "Creative Paw" (coral pad + the 4 colored modular toes) that BREATHES (slow scale 1↔1.035).
- Three small paw prints that "walk up" toward the hand in sequence (staggered fade/rise loop).
- One DASHED-OUTLINE empty paw print beside the hand, softly pulsing = the seat kept open for them.

BACKGROUND MOTION (whole hero):
- 3–4 dotted "Trail" paths flowing inward from the edges and converging toward the hand (many → one family).
- ~7 floating "Creative Paw" shapes in brand colors at low opacity, slowly drifting.
- Gentle MOUSE PARALLAX: background layers shift opposite to cursor, foreground paws shift with cursor (small, elegant).

BOTTOM PROOF STRIP (absolute): centered row separated by small pink dots — an animated counter "172" that counts up on load + label "Centres & growing" · "19 Cities" · "20+ Years" · "India's most admired preschool". Numbers in Fredoka coral.

SCROLL CUE: subtle animated mouse/scroll indicator centered near bottom, "SCROLL TO EXPLORE".

Entrances should be staggered and smooth (fade/rise), background should warm in on load. Keep it restrained and expensive-feeling. Make all copy easy to edit and the color tokens centralized so we can theme quickly.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://little-elly-journey.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/326bce71-220d-4f8f-824b-cf79eda201ca).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
