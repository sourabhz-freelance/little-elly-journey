/** Section 02 — "We've already walked it". Presenter-led storyboard copy. */
export const storyContent = {
  kicker: "The invisible asset",
  intro: "Every problem in this business has already been met, paid for and solved once. That solved system is what a Master Franchise partner inherits.",
  beats: [
    {
      id: "start",
      index: "01",
      title: "We started.",
      line: "Twenty years ago, there was no roadmap. Just a room, a few filled seats, and a conviction.",
    },
    {
      id: "wrong",
      index: "02",
      title: "We learned it the hard way.",
      line: "Wrong sites, wrong hires, wrong assumptions — each one paid for once, and each one now a rule in the operating system you receive.",
    },
    {
      id: "rebuild",
      index: "03",
      title: "We rebuilt.",
      line: "Rewrote the curriculum. Then rewrote it again. And again, until children led it.",
    },
    {
      id: "measure",
      index: "04",
      title: "We listened.",
      line: "Every classroom taught us something a spreadsheet couldn't. So we measured both.",
    },
    {
      id: "method",
      index: "05",
      title: "It became a way.",
      line: "172 centres later, it isn't luck. It's a method — repeatable, teachable, proven.",
    },
    {
      id: "gift",
      index: "06",
      title: "Now, the gift.",
      line: "The hardest part is already built. A Master Franchise partner starts from there, not from zero.",
    },
  ],
} as const;

export type StoryBeat = (typeof storyContent.beats)[number];
