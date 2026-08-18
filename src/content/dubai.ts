/**
 * The Dubai edition of the deck.
 *
 * Audience: a prospective CENTRE OWNER in Dubai, under one of two models —
 * FOCO (owner funds and owns the asset, the Master Franchisee operates it) or
 * FOFO (owner funds, owns and operates, with platform support).
 *
 * Commercial rates are deliberately absent: they sit in the term sheet.
 * Market figures are drawn from publicly available sources and are marked as
 * indicative — they require confirmation before any commitment.
 */

export const dubaiOpportunity = {
  kicker: "The sector, in Dubai",
  headline: ["A city that keeps", "arriving young."],
  sub: "Dubai does not have India's problem of scale. It has the opposite one: a small, dense, young, overwhelmingly expatriate family base that expects an internationally recognised early years programme — and a regulator that insists on one.",
  stats: [
    {
      id: "population",
      value: 3.9,
      prefix: "",
      suffix: "M",
      decimals: 1,
      label: "People in Dubai",
      note: "Still growing every single year, largely by arrival rather than birth.",
      source: "Dubai Statistics Centre, published estimates",
    },
    {
      id: "expat",
      value: 90,
      prefix: "~",
      suffix: "%",
      decimals: 0,
      label: "Expatriate residents",
      note: "Families without extended family nearby. Childcare is not optional for them.",
      source: "Dubai Statistics Centre, published estimates",
    },
    {
      id: "centres",
      value: 230,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "Licensed early childhood centres",
      note: "A regulated, permitted, inspected market — not an informal one.",
      source: "KHDA, publicly reported figures",
    },
  ],
  forces: [
    {
      id: "regulated",
      art: "gate",
      title: "The regulator is the moat",
      line: "KHDA lets few in. We already qualify.",
      body: "Permit, space per child, staff ratio, director standard — a barrier to the casual operator, an advantage to a system already built to it.",
      accent: "var(--coral)",
    },
    {
      id: "dualincome",
      art: "twoincomes",
      title: "Dual income is the norm",
      line: "Two salaries in. Full day, not optional.",
      body: "Two working parents, no grandparents in the city, long commutes. Full-day early years is the default requirement.",
      accent: "var(--turquoise)",
    },
    {
      id: "quality",
      art: "scales",
      title: "Parents shop on quality",
      line: "Fees are governed. Reputation decides.",
      body: "Fee policy is set centrally, so centres never compete on price. Curriculum and inspection outcome win the enrolment.",
      accent: "var(--orange)",
    },
    {
      id: "residential",
      art: "community",
      title: "Demand sits in the communities",
      line: "Ground floor. Shaded play. Few such sites.",
      body: "Family-dense villa communities, ground-floor premises with outdoor play. The site rules narrow the map — and protect whoever gets there first.",
      accent: "var(--periwinkle)",
    },
  ],

  disclaimer:
    "Figures are drawn from publicly available sources for orientation only. They are indicative, not a projection, and require confirmation from KHDA, DET and independent advisers.",
} as const;

export const dubaiAreas = {
  kicker: "And the map has a shape",
  headline: ["The communities we", "are looking at."],
  sub: "Family-dense residential neighbourhoods, where ground-floor premises with outdoor play can realistically be found. Every site is subject to KHDA and Dubai Municipality approval before anything is committed.",
  closing: "That is where a centre owner comes in.",
  areas: [
    "Jumeirah & Umm Suqeim",
    "Al Barsha",
    "Mirdif",
    "Dubai Hills Estate",
    "Jumeirah Village Circle",
    "Arabian Ranches",
    "Al Furjan",
    "Dubai Silicon Oasis",
    "Nad Al Sheba",
    "Town Square",
  ],
  note: "Indicative shortlist. Site-by-site, subject to regulatory approval.",
} as const;

export const dubaiModels = {
  kicker: "Two ways in",
  headline: ["FOCO, or FOFO.", "One platform under both."],
  sub: "Under FOCO you own the centre and we run it. Under FOFO you own it and you run it, with the platform behind you. Brand, curriculum, academics, admissions, pricing, marketing, technology and quality are identical either way. What changes is who holds the licence, who employs the staff, who carries the cost, and how you are paid.",
  rows: [
    {
      id: "land",
      icon: "LandPlot",
      label: "Land and building",
      focoWho: "You",
      fofoWho: "You",
      foco: "Owned by you, or held by you on long lease",
      fofo: "Owned or leased by you",
    },
    {
      id: "fitout",
      icon: "Hammer",
      label: "Fit-out and equipment",
      focoWho: "You",
      fofoWho: "You",
      foco: "Yours, built to brand specification",
      fofo: "Yours, built to brand specification",
    },
    {
      id: "licence",
      icon: "BadgeCheck",
      label: "Trade licence and KHDA permit",
      focoWho: "We",
      fofoWho: "You",
      foco: "Held by the Master Franchisee",
      fofo: "Held by you",
    },
    {
      id: "staff",
      icon: "Users",
      label: "Staff & payroll",
      focoWho: "We",
      fofoWho: "You",
      foco: "Employed by the Master Franchisee",
      fofo: "Employed by you",
    },
    {
      id: "ops",
      icon: "Settings2",
      label: "Daily operation",
      focoWho: "We",
      fofoWho: "You",
      foco: "Run by the Master Franchisee",
      fofo: "Run by you, supported by the Master Franchisee",
    },
    {
      id: "academics",
      icon: "GraduationCap",
      label: "Academic delivery",
      focoWho: "We",
      fofoWho: "You",
      foco: "Delivered by the Master Franchisee",
      fofo: "Delivered by you, trained by the Franchisor",
    },
    {
      id: "paid",
      icon: "Wallet",
      label: "How you are paid",
      focoWho: "On collections",
      fofoWho: "The surplus",
      foco: "Consideration for use of the asset, on gross fee collections — not profit",
      fofo: "The operating surplus, after fees and costs",
    },
    {
      id: "cost",
      icon: "Receipt",
      label: "Operating cost",
      focoWho: "None",
      fofoWho: "Full",
      foco: "No exposure at centre level",
      fofo: "Full exposure, staffing the dominant line",
    },
    {
      id: "khda",
      icon: "Scale",
      label: "Regulatory liability",
      focoWho: "We",
      fofoWho: "You",
      foco: "Sits with the Master Franchisee",
      fofo: "Sits with you",
    },
    {
      id: "exit",
      icon: "DoorOpen",
      label: "Exit",
      focoWho: "Sell the asset",
      fofoWho: "Transfer the franchise",
      foco: "Sale of the asset with the operating agreement in place",
      fofo: "Transfer of the franchise, subject to approval",
    },
  ],

  foco: {
    tag: "FOCO",
    title: "You own the asset. We run the school.",
    accent: "var(--coral)",
    owns: {
      title: "What you own",
      points: [
        "The land, where acquired, and the building",
        "The complete fit-out, furniture, learning equipment and outdoor play installation",
        "Title or long leasehold registered in your name at the Dubai Land Department",
      ],
    },
    free: {
      title: "What you never carry",
      points: [
        "No trade licence, no KHDA permit, no regulatory liability on inspection",
        "No employment contracts, visa sponsorship, payroll or end-of-service obligations",
        "No exposure to staffing cost, salary inflation or KHDA ratio requirements",
        "No operational management, recruitment, admissions or parent relationship",
      ],
    },
    paid: {
      title: "How you are paid",
      points: [
        "The Master Franchisee pays consideration for the use of the land, building and fit-out",
        "Calculated on gross fee collections at the centre — not on profit, so it is unaffected by operating cost or accounting treatment",
        "Payment commences on the terms recorded in the operating agreement, independent of when occupancy targets are met",
      ],
    },
    why: {
      title: "Why the asset matters",
      body: "You hold a registered real estate interest, not a contractual income right. The asset has value independent of the operation. It can be mortgaged or sold. And the exit is the sale of an income-producing property with an operating agreement attached — a more liquid proposition than a share in a business.",
    },
  },
  fofo: {
    tag: "FOFO",
    title: "You own it, and you run it.",
    accent: "var(--turquoise)",
    holds: {
      title: "What you hold and control",
      points: [
        "The premises, owned or leased, and the complete fit-out",
        "The DET trade licence and the KHDA Educational Services Permit, in your own name",
        "The employment relationship with all staff, including the KHDA-approved centre director",
        "Day-to-day operation, local execution and the parent relationship",
        "The operating surplus, after franchise fees and operating costs",
      ],
    },
    lifted: {
      title: "What the platform lifts off you",
      points: [
        "Curriculum development and academic training — they stay with the Franchisor",
        "Brand building and lead generation, run centrally and routed to your centre",
        "Admissions system, pricing policy and fee governance, supplied rather than designed",
        "Technology, management information and reporting, hosted for you",
        "Site approval, layout specification and the KHDA approval pathway",
        "Recruitment support against KHDA qualification requirements",
      ],
    },
    plan: {
      title: "What you should plan for",
      points: [
        "Occupancy ramp — a new centre does not fill in year one, while ratios and the director requirement apply from day one",
        "Staffing as the dominant cost line, with attestation requirements constraining how fast roles can be filled",
        "Working capital through the ramp, held separately from set-up cost",
      ],
    },
  },
} as const;

export const dubaiPlatform = {
  kicker: "Common to both models",
  headline: ["What the platform", "carries for you."],
  sub: "Seven things you never build. Identical under FOCO and FOFO. Hover any tile for the detail.",
  clusters: [
    {
      id: "brand",
      icon: "Sparkles",
      title: "Brand & curriculum",
      accent: "var(--coral)",
      essence: "The name, the programme, the academics — supplied and kept current.",
      items: [
        "Licence to operate under the Little Elly name, with full brand guidelines",
        "Curriculum supplied and updated by the Franchisor throughout the term",
        "Academic training delivered exclusively by the Franchisor — you carry no academic risk",
        "Teacher and director competency standards, aligned to KHDA",
      ],
    },
    {
      id: "training",
      icon: "GraduationCap",
      title: "Training",
      accent: "var(--turquoise)",
      essence: "Your team is trained before you open, and again every year.",
      items: [
        "Initial training for centre leadership and staff before opening",
        "Annual refreshers and advisories as the System evolves",
        "Operations Manual for the full term, amended as standards change",
      ],
    },
    {
      id: "admissions",
      icon: "ClipboardList",
      title: "Admissions & pricing",
      accent: "var(--orange)",
      essence: "Fees and enrolment are governed centrally. Centres never undercut each other.",
      items: [
        "Admission procedure, fee structure and revision policy set centrally by circular",
        "Enquiry-to-enrolment process, counselling scripts and conversion tracking",
        "Discount and refund policy set centrally, so centres never compete on price",
      ],
    },
    {
      id: "marketing",
      icon: "Megaphone",
      title: "Marketing & leads",
      accent: "var(--periwinkle)",
      essence: "Campaigns run centrally; the enquiries land at your centre.",
      items: [
        "Brand campaigns across digital, print, outdoor and PR, plus all official channels",
        "Central digital lead generation, routed to the relevant centre",
        "Creative templates and a brand collateral kit, refreshed periodically",
        "Dedicated launch and first-year marketing assistance for every new centre",
        "KHDA prior approval on every campaign, coordinated centrally",
      ],
    },
    {
      id: "tech",
      icon: "MonitorSmartphone",
      title: "Technology & MIS",
      accent: "var(--cyan)",
      essence: "One system for enquiries, admissions, attendance and collections.",
      items: [
        "Central MIS, enquiry management and parent application, hosted and maintained",
        "Enquiry, admission, attendance, collection and progress data on one platform",
        "Reporting on enrolment, occupancy against licensed capacity, collections and conversion",
      ],
    },
    {
      id: "quality",
      icon: "ShieldCheck",
      title: "Quality & child safety",
      accent: "var(--pink)",
      essence: "Every centre audited on the same scorecard. Ratios watched, always.",
      items: [
        "Independent quality audit of every centre on a standardised scorecard",
        "Staff-to-child ratios monitored against KHDA mandated levels as a standing item",
        "Safeguarding, screening and incident reporting applied uniformly",
        "Central management of external and media communication in any incident",
      ],
    },
    {
      id: "regulatory",
      icon: "Landmark",
      title: "Regulatory pathway",
      accent: "var(--yellow)",
      essence: "The KHDA route is walked with you, not explained to you.",
      items: [
        "Guidance on the KHDA approval pathway, including the education and care plan",
        "Brand-standard design, layout and safety specification against KHDA and Municipality requirements",
        "Representation of the brand before education and regulatory authorities",
      ],
    },
  ],
} as const;

export const dubaiResponsibility = {
  kicker: "Where responsibility sits",
  headline: ["Three parties.", "No overlap."],
  sub: "One line each. Hover for what sits underneath it.",
  columns: [
    {
      id: "franchisor",
      icon: "Crown",
      title: "Franchisor",
      role: "Owns the brand and the learning",
      accent: "var(--coral)",
      essence: "Brand, curriculum, academic training, quality audit, technology.",
      points: [
        "Owns the brand, curriculum, System, manuals and confidential information",
        "Delivers all academic training and sets competency standards",
        "Sets admission procedure, fee structure and revision policy",
        "Runs brand campaigns, official channels and lead generation",
        "Owns and hosts the MIS and holds the data",
        "Audits every centre and manages crisis communication",
      ],
    },
    {
      id: "master",
      icon: "Building2",
      title: "Master Franchisee",
      role: "Builds and runs the Emirate",
      accent: "var(--turquoise)",
      essence: "Sites, approvals, local marketing, support — and operations under FOCO.",
      points: [
        "Holds exclusive development rights for the Emirate and appoints centre owners",
        "Under FOCO, holds the licence and permit, employs staff and operates the centre",
        "Identifies and appraises sites, secures approvals, supervises fit-out",
        "Runs Emirate-level marketing and routes leads to centres",
        "Delivers operational training and first-line support",
        "Monitors quality, ratios and safeguarding across the network",
      ],
    },
    {
      id: "owner",
      icon: "KeyRound",
      title: "Centre owner",
      role: "Owns the centre",
      accent: "var(--orange)",
      essence: "Funds and owns the asset. Runs it only if you choose FOFO.",
      points: [
        "Both models: funds and owns the land, building and complete fit-out to brand specification",
        "FOCO: no licence, no staff, no operating cost — paid on the use of the asset",
        "FOFO: holds licence and permit, employs staff, operates and keeps the surplus",
        "FOFO: maintains statutory registrations and KHDA compliance on ratios and safeguarding",
        "Both models: permits inspection and audit, maintains premises to standard",
      ],
    },
  ],
} as const;


export const dubaiNotes = {
  kicker: "Stated for orientation",
  headline: ["Regulatory, ownership", "and tax."],
  sub: "Drawn from publicly available sources rather than a ruling or an advice letter. Each item requires confirmation from UAE legal and tax counsel, and from KHDA and DET directly, before any commitment.",
  notes: [
    {
      id: "licensing",
      icon: "BadgeCheck",
      title: "Licensing",
      accent: "var(--coral)",
      body: "Early childhood centres in Dubai are regulated by KHDA, which issues the Educational Services Permit. Initial approval and a no-objection certificate precede the DET trade licence. The centre director is interviewed by KHDA before the permit issues.",
    },
    {
      id: "premises",
      icon: "Building2",
      title: "Premises",
      accent: "var(--turquoise)",
      body: "KHDA and Dubai Municipality require ground-floor premises with a dedicated, shaded outdoor play area, and set a minimum space per child. Site selection is constrained accordingly, and should precede any commitment on land.",
    },
    {
      id: "land",
      icon: "MapPinned",
      title: "Land ownership",
      accent: "var(--orange)",
      body: "UAE and GCC nationals, and companies wholly owned by them, may own real estate anywhere in Dubai. Other nationals may hold freehold, usufruct or long leasehold only within designated areas — a list that has widened repeatedly. Confirm any plot with the Dubai Land Department.",
    },
    {
      id: "vat",
      icon: "Receipt",
      title: "VAT",
      accent: "var(--periwinkle)",
      body: "Education supplied by a qualifying institution — which includes nurseries and preschools — is zero-rated where the curriculum is recognised. A zero-rated institution charges no VAT on tuition but recovers input VAT. Uniforms and certain ancillary supplies remain standard-rated.",
    },
    {
      id: "ct",
      icon: "Scale",
      title: "Corporate tax",
      accent: "var(--cyan)",
      body: "UAE corporate tax applies to business profits above the statutory threshold. Related-party charges between franchisor, master franchisee and centre owner must satisfy transfer pricing requirements.",
    },
    {
      id: "consideration",
      icon: "Coins",
      title: "Consideration for the asset",
      accent: "var(--pink)",
      body: "Consideration paid for the use of premises and fit-out is a standard-rated supply, and is not zero-rated. It should be modelled on that basis.",
    },
  ],
} as const;

export const dubaiConsiderations = {
  kicker: "Said plainly",
  headline: ["What to weigh", "before you sign."],
  sub: "Four things a serious centre owner should press us on.",
  items: [
    {
      id: "counterparty",
      title: "FOCO counterparty",
      body: "Under FOCO your income depends on the Master Franchisee continuing to operate. Assess the Master Franchisee as a counterparty, not only the centre as an asset.",
      accent: "var(--coral)",
    },
    {
      id: "specificity",
      title: "Asset specificity",
      body: "A KHDA-compliant early childhood centre is a purpose-built asset. If the operating agreement ends, redeployment needs a new licensed operator or a re-fit. The land and building retain independent value; the fit-out largely does not.",
      accent: "var(--orange)",
    },
    {
      id: "variability",
      title: "Variability",
      body: "Consideration calculated on collections is variable, not fixed. It moves with enrolment and with the fee schedule, and it will be lower through the occupancy ramp than at maturity.",
      accent: "var(--periwinkle)",
    },
    {
      id: "ramp",
      title: "The FOFO ramp",
      body: "Under FOFO you carry staffing cost from opening while enrolment builds. Working capital should be planned separately from set-up cost.",
      accent: "var(--turquoise)",
    },
  ],
  termSheet: {
    kicker: "And the numbers",
    title: "The rates live in the term sheet.",
    body: "Commercial rates, term, payment cycle and transfer provisions are set out in the term sheet and governed by the definitive agreements. We would rather hand you a number we can stand behind than one that reads well on a slide.",
    disclaimer:
      "This deck is a summary prepared for discussion. It is not an offer, and it does not constitute investment, legal or tax advice. Nothing in it is a representation or assurance as to financial performance or return. Prospective centre owners should take independent legal, tax and financial advice.",
  },
} as const;
