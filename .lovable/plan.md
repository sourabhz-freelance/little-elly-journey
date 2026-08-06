# Happy for children → Happy for partners

Two moves, both quick to read on stage.

## 1. Re-cut the curriculum heading

Drop "A child is not a syllabus to be finished." entirely.

New headline for the existing curriculum section:

> **1 lakh parents have loved our "Happy" curriculum.**

with "Happy" in quotes and coral. No sub-paragraph — the proof strip
(1,00,000+ parents · 172 centres · 20+ years) stays, then straight into the
existing radial child diagram and the closing line
"Happy is not the mood we aim for. It's the method."

## 2. New section — the Happy framework for partners

Placed directly after the curriculum section. Same visual language, mirrored,
so the parallel lands without explanation.

Kicker: `The same word, for you`

Headline: **"Happy" is a curriculum for our children. It's a framework for our
partners.**

One line under it: *The same five-part thinking, pointed at your business.*

### The six supports (icon + heading only, no paragraphs)

Laid out as a radial diagram around a centre portrait — an affluent, confident
Indian entrepreneur (man or woman) — exactly like the child diagram, so the
sections rhyme visually.

| Support | Icon |
|---|---|
| Brand you don't have to build | BadgeCheck |
| Marketing that fills your centres | Megaphone |
| Training for you and your team | GraduationCap |
| A curriculum already proven | BookOpen |
| Investment and unit-economics guidance | Wallet |
| An operations team on call | Headset |

Closing line, centred: **"We stand by you at every angle."**

Mobile: portrait on top, supports stacked in a two-column grid.

### What comes after (not built yet)

The next beat — investment size, partner role, terms and territory rules — is
the following section. Flagged as placeholders until real Little Elly numbers
arrive.

## Technical notes

- `src/content/curriculum.ts`: replace `headline`/`sub` with the new single
  headline; keep pillars, proof and closing.
- New `src/content/partnerFramework.ts` + `src/components/partner/PartnerFrameworkSection.tsx`,
  reusing the radial/stacked layout and motion pattern from `CurriculumSection`.
- Generate `src/assets/partner-portrait.jpg` (photo-real Indian entrepreneur,
  warm premium lighting) and a second variant so the centre portrait cross-fades
  between a man and a woman every 4 seconds, matching the child diagram.
- Render between `<CurriculumSection />` and `<HappySection />` in
  `src/routes/index.tsx`.
- Existing `HappySection` ("Happy isn't only for the little ones") stays where
  it is for now; it can be folded in later if it starts to feel repetitive.
