/** Section 02 — "We've already walked it". Presenter-led storyboard copy. */
export const storyContent = {
  kicker: "The invisible asset",
  intro: "Twenty years of doing it the hard way — so you don't have to.",
  beats: [
    {
      id: "start",
      index: "01",
      title: "We started.",
      line: "Twenty years ago there was no map. Just a room, a few children, and a conviction.",
    },
    {
      id: "wrong",
      index: "02",
      title: "We got it wrong.",
      line: "Wrong turns. Dead ends. Every one of them paid for, and none of them wasted.",
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
      line: "The hardest part is already done. We'd like to hand it to you.",
    },
  ],
} as const;

export type StoryBeat = (typeof storyContent.beats)[number];
