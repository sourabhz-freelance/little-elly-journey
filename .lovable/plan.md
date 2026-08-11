# Real numbers, told visually

The leadership gave us two documents: the Franchisor Support Summary and the Commercial Terms. Both are currently represented in the deck by placeholders (₹40 L, 40% royalty, 10% to head office) and a light six-pillar support wheel. Neither is accurate any more, and neither carries the weight the real terms deserve.

The rule for this pass: **no tables**. Every number becomes a picture that makes the point before the eye reads a digit.

---

## 1. Correct the numbers that are wrong today

The Commercials section inside "The same word, for you" currently shows ₹40 L investment, 40% royalty and a 10% head-office share. The real structure is different and, crucially, simpler to sell:

- Master Franchisee fee ₹30 L (one time, five-year term)
- Model centre ₹12 L, territory office ₹10 L, launch marketing ₹3 L
- **Cost of entry ₹55 L** — cash at signing ₹72.94 L, net capital committed ~₹64 L after GST credit and refundable deposits, of which ₹9 L is working capital, not sunk cost
- Revenue share is a clean **50 / 50** on unit franchisee fees and on brand fees — not 40/10

Placeholder disclaimers come off; a single "indicative, subject to definitive agreement" line replaces them.

## 2. New section — "The cost of entry" (replaces the three placeholder cards)

Three linked visuals, one scroll:

**a. The staircase.** A horizontal build-up bar where ₹30 L + ₹12 L + ₹10 L + ₹3 L stack into ₹55 L, each block in a brand colour, animating in as you scroll. The eye sees the shape of the investment before reading a figure.

**b. Sunk vs. recovered.** ₹72.94 L cash at signing shown as a single column that then visibly *separates* — GST credit and refundable deposits peel away, working capital peels away, and what remains settling at the bottom is the true ₹55 L cost of entry. This is the single most persuasive frame in the whole deck: the number they fear is not the number they lose.

**c. The unit franchisee's own maths.** ₹22.95 L per centre, shown as a compact companion card, so the master franchisee immediately understands the ticket size he will be asking others to write.

## 3. New section — "Where the money comes from"

A revenue-flow diagram rather than a fee table. Parents pay unit franchisees; unit franchisees pay four things upward; each flow line splits visually into the Franchisor half and the Master Franchisee half.

- Unit franchisee fee ₹2.5 L → 50 / 50
- Preschool brand fee ₹9,000 per student per year → 50 / 50
- Daycare brand fee ₹4,500 per student per year → 50 / 50
- Kits, materials, uniforms → 100% Franchisor, no margin, no work

The recurring-per-child lines are drawn as the thick pipes and the one-time fee as the thin one, so annuity income reads as the main story. Honesty about the kits line is a trust-builder, not a weakness — it is labelled "not your revenue, and not your problem."

An interactive slider ("centres in your territory" × "students per centre") drives a live annual brand-fee figure, so the prospect models his own territory in front of the presenter. Clearly framed as arithmetic, not a projection.

## 4. Rebuild "The same word, for you" as the Franchisor Support system

The current six-card wheel is replaced by the eleven real obligations, grouped into four visual clusters:

- **We carry the academics** — curriculum, teacher standards, fee policy, all academic training delivered by the Franchisor
- **We carry the machine** — MIS, CRM, parent app, franchisee portal, national IVR, digital lead generation, operations manual
- **We carry the brand** — national campaigns across digital, print, outdoor and PR, all official channels, leads routed to you, first-year marketing for every new centre, regulatory and crisis representation
- **We carry the quality** — one independent audit per centre per year including unannounced visits, a standardised scorecard, authority to suspend admissions at a failing centre

Presented as a "load-bearing" graphic: a horizontal beam where the Franchisor side visibly carries the majority of the weight and the Master Franchisee side holds the four things he actually does — find franchisees, open centres, mentor them, hold the standard. This is the emotional argument of the whole deck in one image.

Two short supporting frames follow:

- **Where you have a voice** — fee revisions, administrative policy, the minimum performance commitment, five-working-day escalation. Positions him as a partner, not a licensee.
- **Term and continuity** — a five-year timeline with renewal conditions and successor referral marked as milestones along it.

## 5. Placement in the flow

```text
... The association  →  The cost of entry  →  Where the money comes from
                     →  What we carry (Franchisor support)  →  A life, not a job
```

Money first while the terms are fresh, then support as the reassurance, then the human close. "A life, not a job" stays last.

---

## Technical notes

- New content files: `src/content/commercials.ts`, `src/content/franchisorSupport.ts`. Every figure lives here so a number change is a one-line edit.
- New components under `src/components/commercials/` (staircase, sunk-vs-recovered, revenue flow, territory calculator) and `src/components/support/` (load-bearing beam, voice, term timeline).
- All charts are hand-built SVG using existing brand tokens and the dotted-trail motif — no charting library, consistent with the rest of the site.
- `PartnerFrameworkSection.tsx` loses its commercials block; the support wheel content moves into the new support section.
- Currency formatted in the Indian lakh convention throughout (₹55,00,000 / ₹55 L).
- Print PDF is regenerated at the end so the printed deck matches.
