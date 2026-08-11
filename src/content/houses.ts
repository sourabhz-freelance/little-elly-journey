/** Section 00 — the two houses behind this partnership. */
export const housesContent = {
  kicker: "Before we begin",
  headline: ["Two houses.", "One ambition."],
  accentIndex: 1,
  sub: "K2 Learning and Learning Edge come together to grow India's happiest preschool.",
  centreNode: "Together",
  scrollCue: "Scroll to continue",
  portfolioKicker: "What the two houses hold",
  portfolioHeadline: ["Everything already", "built."],
  houses: [
    {
      id: "k2",
      name: "K2 Learning",
      role: "Holding group",
      line: "An education conglomerate spanning schools, pre-university and career IPs.",
      accent: "var(--turquoise)",
      brands: [
        { id: "career-utsav", name: "Career Utsav", note: "Career guidance IP" },
        { id: "academic-city", name: "Academic City", note: "CBSE boarding school" },
        { id: "foundation", name: "Foundation", note: "Pre-university colleges" },
        { id: "edify", name: "Edify", note: "CBSE school" },
      ],
    },
    {
      id: "learning-edge",
      name: "Learning Edge",
      role: "Holding group",
      line: "The house that Little Elly calls home, alongside four sister brands.",
      accent: "var(--coral)",
      brands: [
        { id: "little-elly", name: "Little Elly", note: "Preschool", highlight: true },
        { id: "glentree", name: "Glentree Academy", note: "K-12 school" },
        { id: "elly-childcare", name: "Elly Childcare", note: "Daycare" },
        { id: "cocoon", name: "Cocoon Early Learning", note: "Early learning" },
        { id: "letr", name: "LETR", note: "Teacher training & research" },
      ],
    },
  ],
  zoomKicker: "And today",
  zoomLine: ["Today's conversation is about one of them —", "Little Elly."],
  zoomNote: "Brand marks for individual sub-brands are shown as monograms.",
} as const;
