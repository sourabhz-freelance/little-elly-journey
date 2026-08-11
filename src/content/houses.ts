/** Section 00 — the two houses behind this partnership. */
export const housesContent = {
  kicker: "Before we begin",
  headline: ["Two houses,", "one table."],
  accentIndex: 1,
  sub: "This opportunity is carried by two established education groups, sitting together on the same side of the table.",
  centreNode: "This partnership",
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
  zoomNote: "Logos shown are placeholders until the official marks are supplied.",
} as const;
