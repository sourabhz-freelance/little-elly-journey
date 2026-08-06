/**
 * Sections 04–06 — the sector case (we sell the category, not the brand).
 * Every figure below is sourced. Anything we don't have a source for is a
 * clearly marked placeholder.
 */

export const marketContent = {
  kicker: "The sector",
  headline: ["Before the brand,", "look at the business."],
  sub: "India's preschool and childcare market is one of the few consumer categories growing at near double digits, year after year, through every cycle.",
  stats: [
    {
      id: "size",
      value: 5.1,
      prefix: "$",
      suffix: "B",
      decimals: 1,
      label: "Market size, 2025",
      note: "India pre-school / childcare market",
      source: "IMARC Group, 2026",
    },
    {
      id: "forecast",
      value: 12,
      prefix: "$",
      suffix: "B",
      decimals: 0,
      label: "Projected by 2034",
      note: "More than double, in under a decade",
      source: "IMARC Group, 2026",
    },
    {
      id: "cagr",
      value: 9.2,
      prefix: "",
      suffix: "%",
      decimals: 1,
      label: "CAGR 2026–2034",
      note: "Independent estimates run 9.2%–10.5%",
      source: "IMARC / Expert Market Research",
    },
  ],
  chart: {
    title: "The curve, not the moment",
    caption:
      "Illustrative growth path from a 2025 base of $5.1B at ~9.2% CAGR. Source: IMARC Group.",
    from: 5.1,
    cagr: 0.092,
    years: [2025, 2027, 2029, 2031, 2034],
  },
} as const;

export const demographicsContent = {
  kicker: "The tailwind",
  headline: ["India isn't", "running out of children."],
  sub: "Seven structural forces, none of them a trend. Tap a force to open it.",
  drivers: [
    {
      id: "children",
      stat: "3.5 crore",
      title: "Children aged 0–6 in the ICDS net alone",
      body: "That is the government's own count of young children it reaches — a floor, not a ceiling. Every year replenishes the cohort. This is a business whose customer is born, not converted.",
      source: "Ministry of Women & Child Development (ICDS)",
      accent: "var(--coral)",
    },
    {
      id: "income",
      stat: "Tier II & III",
      title: "Rising incomes are moving the demand outward",
      body: "Millennial parents outside the metros are now seeking structured early education — the same aspiration that built the metro market, arriving in hundreds of cities at once. This is precisely where master-franchise territory is still open.",
      source: "Research & Markets, India Pre-School/Childcare Market",
      accent: "var(--orange)",
    },
    {
      id: "women",
      stat: "Dual income",
      title: "More working mothers, more full-day demand",
      body: "Rising female workforce participation and urbanisation are converting preschool from a few hours of play into an all-day, higher-ticket service. Full day care is already 64.5% of the market.",
      source: "IMARC Group, 2026",
      accent: "var(--cyan)",
    },
    {
      id: "policy",
      stat: "NEP 2020",
      title: "Policy made early years part of formal schooling",
      body: "The National Education Policy places ages 3–8 in a single 'foundational stage' and pushes universal quality early childhood care and education. Parents now read preschool as necessary, not optional.",
      source: "National Education Policy 2020, Government of India",
      accent: "var(--periwinkle)",
    },
  ],
} as const;

export const modelContent = {
  kicker: "The model",
  headline: ["A fragmented market", "rewards a system."],
  sub: "The sector's structure is the opportunity: private money already runs it, and almost nobody runs it well at scale.",
  splits: [
    {
      id: "private",
      pct: 89.2,
      label: "Privately owned",
      body: "The category is overwhelmingly private. There is no incumbent monopoly to displace — only unbranded operators to out-run.",
      source: "IMARC Group, 2026",
      accent: "var(--coral)",
    },
    {
      id: "fullday",
      pct: 64.5,
      label: "Full day care",
      body: "The bigger half of the market is the higher-value one — longer hours, deeper parent relationship, better unit economics.",
      source: "IMARC Group, 2026",
      accent: "var(--turquoise)",
    },
  ],
  reasons: [
    {
      id: "prepaid",
      title: "Fees come first",
      body: "Term or annual fees are collected up front, ahead of the cost of delivering the year. Working capital behaves kindly.",
    },
    {
      id: "sticky",
      title: "Two to three year customers",
      body: "A family that enrols at playgroup usually stays through kindergarten — and refers the next family on the street.",
    },
    {
      id: "light",
      title: "Asset-light footprint",
      body: "Leased premises, modest fit-out, small team. Capital goes into quality and people, not land.",
    },
    {
      id: "moat",
      title: "Trust is the moat",
      body: "Parents don't experiment with three-year-olds. A trusted brand with a proven curriculum wins the decision before price is discussed.",
    },
  ],
  placeholder:
    "Unit economics — investment, fee bands, break-even and territory returns — are covered in the next section with real Little Elly numbers.",
} as const;
