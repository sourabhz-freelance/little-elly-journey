/** Section 03 — "A Happy Preschool" widened to partners. */
export const happyContent = {
  kicker: "A Happy Preschool",
  headline: ["Happy isn't only for", "the little ones."],
  sub: "It's the standard we hold for everyone who stands inside a Little Elly.",
  cards: [
    {
      id: "child",
      label: "For the child",
      line: "Curiosity that never gets corrected out of them.",
      accent: "var(--yellow)",
    },
    {
      id: "parent",
      label: "For the parent",
      line: "The quiet confidence of knowing they're in the right hands.",
      accent: "var(--cyan)",
    },
    {
      id: "partner",
      label: "For the partner",
      line: "A business you can be proud of on a Monday morning — supported, profitable, and never alone.",
      accent: "var(--coral)",
    },
  ],
  closing: {
    quote: "We don't hand you a brand and wave goodbye. We stay.",
    support:
      "Training, curriculum, marketing, admissions, audits, people — the happiness of our partners isn't goodwill. It's operating policy.",
  },
} as const;
