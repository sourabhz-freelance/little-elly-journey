# Rearranging the deck

New running order, top to bottom:

1. **Hero** — unchanged.
2. **The curriculum** ("1 lakh parents have loved our "Happy" curriculum") — now the
   first thing after the hero, framed as the answer to the question the hero raises.
   New kicker on this section: `How did 172 centres, 19 cities, 20 years happen?`
   so the jump from hero to curriculum reads as cause and effect.
3. **The magic in the classroom** — the current "Inside the classroom" section,
   renamed. Headline becomes **"The magic that happens in the class."**
4. **The sector** — market size, the tailwinds, the model (these three stay
   together in their current order).
5. **The invisible asset** — the story section (We started → Now, the gift).
6. **What it takes** — master franchise requirements.
7. **The association** — territory, terms, profile, rules.
8. **The same word, for you** — the partner framework closer.

## Technical notes

- `src/routes/index.tsx`: reorder to Hero → Curriculum → Method → Story →
  Market → Demographics → Model → Requirements → Terms → PartnerFramework.
- `src/content/curriculum.ts`: change `kicker` to the "How did 172 centres…" line.
- `src/content/method.ts`: change `headline` to `["The magic that happens", "in the class."]`.
- No layout, styling or component structure changes.
