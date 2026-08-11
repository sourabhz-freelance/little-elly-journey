import wave from "@/assets/elly/wave.png.asset.json";
import trunkup from "@/assets/elly/trunkup.png.asset.json";
import walk from "@/assets/elly/walk.png.asset.json";
import peek from "@/assets/elly/peek.png.asset.json";
import stand from "@/assets/elly/stand.png.asset.json";
import blocks from "@/assets/elly/blocks.png.asset.json";
import read from "@/assets/elly/read.png.asset.json";
import pencil from "@/assets/elly/pencil.png.asset.json";
import heart from "@/assets/elly/heart.png.asset.json";
import step from "@/assets/elly/step.png.asset.json";

/** Official Elly poses. Swap a pose by changing the pointer here. */
export const ellyPoses = {
  wave: { url: wave.url, alt: "Elly the elephant waving hello" },
  trunkup: { url: trunkup.url, alt: "Elly the elephant with her trunk raised in celebration" },
  walk: { url: walk.url, alt: "Elly the elephant walking forward" },
  peek: { url: peek.url, alt: "Elly the elephant peeking around a corner" },
  stand: { url: stand.url, alt: "Elly the elephant standing and smiling" },
  blocks: { url: blocks.url, alt: "Elly the elephant stacking coloured blocks" },
  read: { url: read.url, alt: "Elly the elephant reading a picture book" },
  pencil: { url: pencil.url, alt: "Elly the elephant holding a pencil" },
  heart: { url: heart.url, alt: "Elly the elephant holding a heart" },
  step: { url: step.url, alt: "Elly the elephant taking a happy step" },
} as const;

export type EllyPose = keyof typeof ellyPoses;
