import { Link, useRouterState } from "@tanstack/react-router";

/**
 * A small persistent switch between the two editions of the deck.
 * India lives at "/", Dubai at "/dubai".
 */
export default function EditionToggle() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isDubai = pathname.startsWith("/dubai");

  const base =
    "relative z-10 rounded-full px-4 py-2 font-display text-[0.85rem] leading-none transition-colors";

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 print:hidden">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-ink/[0.08] bg-white/85 p-1 shadow-[0_10px_30px_-12px_rgba(9,9,77,0.35)] backdrop-blur-md">
        <Link
          to="/"
          className={`${base} ${isDubai ? "text-ink/45 hover:text-ink/70" : "bg-coral text-white"}`}
        >
          India
        </Link>
        <Link
          to="/dubai"
          className={`${base} ${isDubai ? "bg-coral text-white" : "text-ink/45 hover:text-ink/70"}`}
        >
          Dubai
        </Link>
      </div>
    </div>
  );
}
