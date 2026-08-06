/** Section — the life of a master franchise partner, in scenes. */
export const masterLifeContent = {
  kicker: "A life, not a job",
  headline: ["What a master franchise", "partner actually does."],
  sub: "Ten scenes from an ordinary week.",
  scenes: [
    { id: "own", index: "01", icon: "School", title: "Opens his own centre", line: "The model school. His proof, his classroom, his numbers.", accent: "var(--coral)" },
    { id: "call", index: "02", icon: "PhoneCall", title: "Takes the 10am call", line: "A franchisee's admissions have slowed. He knows exactly why.", accent: "var(--orange)" },
    { id: "guide", index: "03", icon: "Compass", title: "Guides, doesn't scold", line: "Two suggestions, one deadline. The centre fills again.", accent: "var(--cyan)" },
    { id: "books", index: "04", icon: "LineChart", title: "Reads his own books", line: "Fees in, royalty in, salaries out. A business he can see.", accent: "var(--turquoise)" },
    { id: "visit", index: "05", icon: "CarFront", title: "Drives out to a centre", line: "An hour on the road. A morning that changes a franchisee's year.", accent: "var(--periwinkle)" },
    { id: "train", index: "06", icon: "GraduationCap", title: "Sits in on training", line: "New teachers, the Little Elly way. He hosts, the company teaches.", accent: "var(--pink)" },
    { id: "coffee", index: "07", icon: "Coffee", title: "Coffee with a maybe", line: "His wife's colleague has been thinking about a preschool.", accent: "var(--coral)" },
    { id: "club", index: "08", icon: "Users", title: "Thursday at the club", line: "BNI, Rotary, Lions. Rooms full of people looking for a good business.", accent: "var(--orange)" },
    { id: "sign", index: "09", icon: "PenLine", title: "Signs a franchisee", line: "Number seven in his territory. The map fills in, one dot at a time.", accent: "var(--cyan)" },
    { id: "grow", index: "10", icon: "Sunrise", title: "Sleeps on a growing map", line: "Every centre he opened keeps paying, long after the opening day.", accent: "var(--turquoise)" },
  ],
  closing: "He isn't running a school. He's building a network.",
} as const;
