/** Commercial terms — sourced from the Commercial Terms summary. Indicative. */

export const L = (n: number) => `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 2)} L`;

export const commercialsContent = {
  kicker: "The commercials, plainly",
  headline: ["What it costs", "to come in."],
  sub: "Four line items. One number at the end of them.",

  /** 01 — build-up to the cost of entry. */
  buildUp: [
    {
      id: "fee",
      label: "Master Franchisee fee",
      note: "One time, five-year term",
      amount: 3000000,
      accent: "var(--coral)",
      icon: "KeyRound",
    },
    {
      id: "model",
      label: "Your model centre",
      note: "Capital asset — a working school",
      amount: 1200000,
      accent: "var(--turquoise)",
      icon: "School",
    },
    {
      id: "office",
      label: "Territory office",
      note: "Interiors, furniture, IT",
      amount: 1000000,
      accent: "var(--cyan)",
      icon: "Building2",
    },
    {
      id: "launch",
      label: "Launch marketing",
      note: "Pre-opening, expensed",
      amount: 300000,
      accent: "var(--orange)",
      icon: "Megaphone",
    },
  ],
  buildUpTotal: { label: "Cost of entry", amount: 5500000 },

  /** 02 — the number they fear, and the number they actually lose. */
  reconcileKicker: "The number, honestly",
  reconcileHeadline: ["₹72.94 L at signing.", "₹55 L is the real cost."],
  signing: 7294000,
  reconcile: [
    {
      id: "gst",
      label: "GST credit",
      note: "18% on the fee and office advance — recovered in full",
      amount: 594000,
      accent: "var(--periwinkle)",
      kind: "Recoverable",
    },
    {
      id: "deposit",
      label: "Office deposit",
      note: "Refundable at the end of the lease",
      amount: 300000,
      accent: "var(--cyan)",
      kind: "Refundable",
    },
    {
      id: "wc",
      label: "Working capital",
      note: "Stays in your business, not spent",
      amount: 900000,
      accent: "var(--turquoise)",
      kind: "Liquidity",
    },
  ],
  reconcileFooter:
    "Net capital committed is about ₹64 L, of which ₹9 L is working capital rather than sunk cost. A refundable, interest-free security deposit is payable separately per Schedule 2.",

  /** 03 — the ticket your franchisees write. */
  unitKicker: "And the cheque you will ask others to write",
  unitHeadline: ["₹22.95 L", "opens a centre."],
  unit: [
    { id: "fee", label: "Unit Franchisee fee", amount: 250000, accent: "var(--coral)" },
    { id: "gst", label: "GST at 18%", amount: 45000, accent: "var(--periwinkle)" },
    {
      id: "fitout",
      label: "Fit-out, furniture, material",
      amount: 1200000,
      accent: "var(--turquoise)",
    },
    { id: "pre", label: "Pre-opening and licences", amount: 180000, accent: "var(--orange)" },
    { id: "dep", label: "Premises deposit", amount: 420000, accent: "var(--cyan)" },
    { id: "wc", label: "Initial working capital", amount: 200000, accent: "var(--pink)" },
  ],
  unitTotal: 2295000,

  disclaimer: "Indicative, subject to definitive agreement. Territory to be specified.",
} as const;

/** Section — where the money comes from. */
export const revenueContent = {
  kicker: "Where the money comes from",
  headline: ["You are paid", "every year, per child."],
  sub: "Parents pay your franchisees. Four things flow upward from there — and half of the two that recur is yours.",

  flows: [
    {
      id: "brand",
      title: "Preschool brand fee",
      basis: "₹9,000 per student, every year",
      weight: "primary",
      master: 50,
      accent: "var(--coral)",
      icon: "Repeat",
      note: "The annuity. It arrives again next year, and the year after.",
    },
    {
      id: "daycare",
      title: "Daycare brand fee",
      basis: "₹4,500 per student, every year",
      weight: "primary",
      master: 50,
      accent: "var(--turquoise)",
      icon: "Repeat",
      note: "Same child, second line of income.",
    },
    {
      id: "unit",
      title: "Unit Franchisee fee",
      basis: "₹2,50,000 per centre, one time",
      weight: "secondary",
      master: 50,
      accent: "var(--orange)",
      icon: "KeyRound",
      note: "Paid the day a new centre signs.",
    },
    {
      id: "kits",
      title: "Kits, materials, uniforms",
      basis: "At the Franchisor's price",
      weight: "none",
      master: 0,
      accent: "var(--periwinkle)",
      icon: "Package",
      note: "Not your revenue — and not your problem. Designed, sourced and shipped by us.",
    },
  ],

  collectNote:
    "Fees are collected by you from your Unit Franchisees. The Franchisor share is remitted within seven working days.",

  calcKicker: "Your territory, your arithmetic",
  calcHeadline: ["Move the two dials.", "Watch the year."],
  calcNote:
    "Straight arithmetic on the brand fee at a 50% share — not a projection or a promise of performance.",
  perStudentPreschool: 9000,
  perStudentDaycare: 4500,
} as const;
