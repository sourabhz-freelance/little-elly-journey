# Dubai edition — a second deck behind one toggle

The site keeps everything it is today and gains a Dubai version of the same
presentation, reached by a small persistent toggle (India / Dubai) pinned bottom-right.
Same visual language, same infographic quality, same brand system.

## The toggle

- India stays at `/`. Dubai lives at `/dubai`.
- A floating pill in the bottom-right corner, always visible while scrolling:
  two labels, coral highlight on the active one, sliding indicator. Toggling
  switches deck and scrolls to the top.
- Nothing else in the page chrome changes.

## What Dubai reuses unchanged

- Two houses. One ambition. (opener + portfolio reveal)
- Little Elly hero
- One lakh parents / H.A.P.P.Y. curriculum wheel
- The magic in the classroom (IQ / EI abilities)
- The invisible asset (twenty years of learning) + the "we've already walked it" storyboard
- Closing note

## What Dubai replaces

**1. The opportunity — "Why Dubai"**
India's "running out of children" argument is inverted for Dubai: a young,
expatriate, dual-income family base, a regulated early-years market, and
mandated quality standards that reward a system operator. Presented in the same
stat-card + chart style, with figures drawn from publicly available sources
(KHDA, Dubai Statistics Centre, DET) and clearly labelled as indicative and
requiring confirmation — no invented numbers.

**2. Where we're opening**
Replaces the Indian states chips with Dubai communities — a sensible shortlist
of family-dense residential areas (Jumeirah / Umm Suqeim, Al Barsha, Mirdif,
Dubai Hills Estate, Jumeirah Village Circle, Arabian Ranches, Al Furjan,
Dubai Silicon Oasis, Nad Al Sheba) with a note that the map is indicative and
site-by-site subject to KHDA and Municipality approval.

**3. The two ownership models — the centrepiece (new)**
A split infographic: FOCO on one side, FOFO on the other, sharing one platform
base beneath them. Twelve comparison lines animate in as paired rows — land and
building, fit-out, trade licence and KHDA permit, employment, day-to-day
operation, academic delivery, how the centre owner is paid, what the operator
keeps, operating-cost exposure, regulatory liability to KHDA, and exit.
Then two dedicated panels:
- **FOCO — the centre owner as asset owner:** what they own, what they never
  carry (no licence, no visas, no payroll, no ratio cost), how they are paid
  (consideration on gross collections, not profit), and why a registered real
  estate interest behaves differently from a contract right.
- **FOFO — the centre owner as operator:** what they hold and control, what the
  platform lifts off them, and what they must plan for (occupancy ramp,
  staffing as the dominant line, separate working capital).

**4. What the platform carries**
Dubai version of the support section: brand and curriculum, academic training
delivered by the Franchisor, training, admissions and pricing governance,
marketing and lead generation (with the KHDA pre-approval step), technology and
MIS, quality assurance, child safety and ratios, and the KHDA/DET regulatory
pathway.

**5. Where responsibility sits**
Three-column responsibility diagram — Franchisor, Master Franchisee, Centre
owner — rendered as three stacked cards with colour-coded duty lists, replacing
the India "what it takes" grid.

**6. Regulatory, ownership and tax notes**
Six short cards: KHDA permit pathway and director interview, premises rules
(ground floor, shaded outdoor play, space per child), land-ownership eligibility,
VAT zero-rating for qualifying education (and what stays standard-rated),
corporate tax and transfer pricing — each stated as orientation, not advice.

**7. Considerations for a prospective centre owner**
Four honest points: FOCO counterparty risk, asset specificity, variability of
collection-linked consideration, and the FOFO ramp.

**8. Commercials**
Dubai carries no numbers yet. The India cost-of-entry and revenue-flow sections
are omitted; in their place, a short honest panel: rates, term, payment cycle
and transfer provisions sit in the term sheet, and the deck closes on the
document's own disclaimer.

## Technical notes

- New `src/routes/dubai.tsx` with its own head metadata; `src/routes/index.tsx`
  untouched apart from mounting the toggle.
- New `src/components/shared/EditionToggle.tsx`, mounted on both routes.
- New content modules under `src/content/dubai/` (opportunity, areas, models,
  platform, responsibility, notes, considerations) so copy stays editable in one place.
- New components under `src/components/dubai/` following the existing motion
  conventions (framer-motion, `EASE = [0.22, 1, 0.36, 1]`, `useReducedMotion`,
  brand CSS variables — no hardcoded colours).
- Shared sections are imported by both routes; no duplication of hero, houses,
  curriculum, method or story code.
