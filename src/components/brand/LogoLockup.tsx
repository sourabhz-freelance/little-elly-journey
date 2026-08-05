import { Paw } from "./paw";
import { heroContent } from "@/content/hero";

/**
 * Placeholder logo lockup — swap the mark for the real Little Elly asset later.
 */
export function LogoLockup() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-yellow shadow-[0_6px_18px_-6px_rgba(232,82,83,0.45)]">
        <div className="flex items-center gap-[3px]">
          <Paw className="h-[15px] w-[15px] -rotate-12" color="var(--coral)" />
          <Paw className="h-[15px] w-[15px] rotate-12" color="var(--coral)" />
        </div>
      </div>
      <div className="leading-none">
        <div className="font-display text-2xl font-semibold text-coral">{heroContent.brand.name}</div>
        <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-ink/50">
          {heroContent.brand.tagline}
        </div>
      </div>
    </div>
  );
}
