import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Brand-styled scene illustrations for "A life, not a job".
 * Shared 320x180 canvas, flat geometric shapes, brand tokens only.
 */

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {children}
    </svg>
  );
}

function Ground({ y = 150, color = "var(--ink)" }: { y?: number; color?: string }) {
  return <rect x={20} y={y} width={280} height={3} rx={1.5} fill={color} opacity={0.12} />;
}

/** Simple friendly person: head + rounded body. */
function Person({
  x,
  y,
  s = 1,
  shirt = "var(--coral)",
  skin = "var(--orange)",
  flip = false,
}: {
  x: number;
  y: number;
  s?: number;
  shirt?: string;
  skin?: string;
  flip?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <path d="M-16 0 C-16 -26 -9 -36 0 -36 C9 -36 16 -26 16 0 Z" fill={shirt} />
      <circle cx={0} cy={-46} r={11} fill={skin} />
      <path d="M-11 -50 C-10 -60 10 -60 11 -50 C6 -55 -6 -55 -11 -50 Z" fill="var(--ink)" opacity={0.75} />
    </g>
  );
}

function Building({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x={-46} y={-62} width={92} height={62} rx={8} fill="var(--cream)" stroke="var(--ink)" strokeOpacity={0.12} strokeWidth={2} />
      <path d="M-54 -62 L0 -94 L54 -62 Z" fill="var(--coral)" />
      <rect x={-14} y={-30} width={28} height={30} rx={6} fill="var(--yellow)" />
      <rect x={-36} y={-52} width={18} height={16} rx={4} fill="var(--cyan)" />
      <rect x={18} y={-52} width={18} height={16} rx={4} fill="var(--periwinkle)" />
    </g>
  );
}

function Dotted({ d, color = "var(--pink)" }: { d: string; color?: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeDasharray="0.5 12"
      vectorEffect="non-scaling-stroke"
      opacity={0.75}
    />
  );
}

const breathe = {
  animate: { y: [0, -4, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
};

/* ---------------------------------------------------------------- scenes */

function Own() {
  return (
    <Frame>
      <Ground />
      <Building x={190} y={150} s={1} />
      <Person x={96} y={150} shirt="var(--turquoise)" />
      {/* key in hand */}
      <g transform="translate(118 118)">
        <circle cx={0} cy={0} r={6} fill="none" stroke="var(--yellow)" strokeWidth={4} />
        <path d="M5 0 H22 M16 0 V7 M22 0 V8" stroke="var(--yellow)" strokeWidth={4} strokeLinecap="round" />
      </g>
      <Dotted d="M60 140 C100 120 130 118 150 130" />
    </Frame>
  );
}

function Call() {
  return (
    <Frame>
      <Ground />
      <Person x={110} y={150} shirt="var(--orange)" />
      <rect x={122} y={96} width={16} height={26} rx={5} fill="var(--ink)" opacity={0.8} />
      <motion.g {...breathe}>
        <rect x={168} y={54} width={116} height={62} rx={18} fill="var(--cream)" stroke="var(--coral)" strokeWidth={2.5} />
        <path d="M176 112 L166 128 L192 116 Z" fill="var(--cream)" stroke="var(--coral)" strokeWidth={2.5} strokeLinejoin="round" />
        <rect x={176} y={112} width={18} height={5} fill="var(--cream)" />
        <circle cx={200} cy={85} r={6} fill="var(--coral)" />
        <circle cx={226} cy={85} r={6} fill="var(--yellow)" />
        <circle cx={252} cy={85} r={6} fill="var(--cyan)" />
      </motion.g>
    </Frame>
  );
}

function Guide() {
  return (
    <Frame>
      <Ground />
      <Person x={104} y={150} shirt="var(--cyan)" />
      <Person x={152} y={150} s={0.94} shirt="var(--pink)" skin="var(--orange)" />
      {/* whiteboard with rising bars */}
      <rect x={196} y={62} width={96} height={70} rx={10} fill="var(--cream)" stroke="var(--ink)" strokeOpacity={0.12} strokeWidth={2} />
      <rect x={210} y={104} width={14} height={18} rx={4} fill="var(--periwinkle)" />
      <rect x={232} y={92} width={14} height={30} rx={4} fill="var(--turquoise)" />
      <rect x={254} y={78} width={14} height={44} rx={4} fill="var(--coral)" />
      <Dotted d="M172 108 C186 104 190 100 198 96" color="var(--coral)" />
    </Frame>
  );
}

function Books() {
  return (
    <Frame>
      <Ground y={152} />
      <rect x={58} y={116} width={204} height={10} rx={5} fill="var(--ink)" opacity={0.1} />
      <rect x={92} y={74} width={94} height={42} rx={6} fill="var(--cream)" stroke="var(--ink)" strokeOpacity={0.14} strokeWidth={2} />
      <motion.path
        d="M102 106 L124 96 L142 100 L162 82 L176 86"
        fill="none"
        stroke="var(--turquoise)"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ pathLength: [0.2, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <rect x={200} y={96} width={54} height={20} rx={5} fill="var(--yellow)" />
      <rect x={200} y={80} width={40} height={12} rx={4} fill="var(--pink)" />
      <circle cx={78} cy={100} r={9} fill="var(--coral)" opacity={0.7} />
    </Frame>
  );
}

function Visit() {
  return (
    <Frame>
      <Ground />
      <Building x={252} y={150} s={0.66} />
      <Dotted d="M34 142 C90 142 150 138 208 142" color="var(--pink)" />
      <motion.g
        animate={{ x: [0, 26, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x={54} y={112} width={82} height={26} rx={11} fill="var(--coral)" />
        <path d="M70 112 L82 96 H112 L122 112 Z" fill="var(--cyan)" />
        <circle cx={74} cy={142} r={9} fill="var(--ink)" opacity={0.8} />
        <circle cx={118} cy={142} r={9} fill="var(--ink)" opacity={0.8} />
      </motion.g>
    </Frame>
  );
}

function Train() {
  return (
    <Frame>
      <Ground />
      <rect x={30} y={52} width={80} height={54} rx={8} fill="var(--cream)" stroke="var(--ink)" strokeOpacity={0.14} strokeWidth={2} />
      <path d="M44 92 L60 74 L74 84 L96 66" fill="none" stroke="var(--coral)" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
      <Person x={132} y={150} shirt="var(--coral)" />
      <Person x={196} y={150} s={0.86} shirt="var(--periwinkle)" />
      <Person x={238} y={150} s={0.86} shirt="var(--yellow)" />
      <Person x={280} y={150} s={0.86} shirt="var(--turquoise)" />
    </Frame>
  );
}

function Resolve() {
  return (
    <Frame>
      <Ground />
      <Person x={56} y={150} s={0.92} shirt="var(--periwinkle)" />
      <Person x={264} y={150} s={0.92} shirt="var(--turquoise)" flip />
      <Person x={160} y={150} shirt="var(--coral)" />
      {/* map between them */}
      <motion.g {...breathe}>
        <rect x={116} y={44} width={88} height={56} rx={10} fill="var(--cream)" stroke="var(--ink)" strokeOpacity={0.14} strokeWidth={2} />
        <path d="M160 46 V98" stroke="var(--coral)" strokeWidth={3} strokeDasharray="6 7" strokeLinecap="round" />
        <circle cx={138} cy={68} r={6} fill="var(--periwinkle)" />
        <circle cx={182} cy={78} r={6} fill="var(--turquoise)" />
      </motion.g>
      <Dotted d="M86 118 C112 108 132 106 146 108" color="var(--periwinkle)" />
      <Dotted d="M234 118 C210 108 190 106 176 108" color="var(--turquoise)" />
    </Frame>
  );
}

function Coffee() {
  return (
    <Frame>
      <Ground />
      <Person x={92} y={150} shirt="var(--orange)" />
      <Person x={228} y={150} shirt="var(--pink)" flip />
      <rect x={124} y={122} width={72} height={8} rx={4} fill="var(--ink)" opacity={0.12} />
      {[142, 178].map((cx, i) => (
        <g key={cx}>
          <path d={`M${cx - 12} 100 H${cx + 12} L${cx + 8} 120 H${cx - 8} Z`} fill={i ? "var(--yellow)" : "var(--coral)"} />
          <motion.path
            d={`M${cx} 92 C${cx - 6} 86 ${cx + 6} 82 ${cx} 74`}
            fill="none"
            stroke="var(--ink)"
            strokeOpacity={0.25}
            strokeWidth={2.5}
            strokeLinecap="round"
            animate={{ opacity: [0.15, 0.5, 0.15], y: [2, -4, 2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        </g>
      ))}
    </Frame>
  );
}

function Club() {
  const people = [
    { x: 70, shirt: "var(--cyan)", s: 0.8 },
    { x: 116, shirt: "var(--coral)", s: 0.92 },
    { x: 164, shirt: "var(--yellow)", s: 1 },
    { x: 212, shirt: "var(--periwinkle)", s: 0.92 },
    { x: 256, shirt: "var(--turquoise)", s: 0.8 },
  ];
  return (
    <Frame>
      <Ground />
      {people.map((p) => (
        <Person key={p.x} x={p.x} y={150} s={p.s} shirt={p.shirt} />
      ))}
      <motion.g {...breathe}>
        <rect x={118} y={30} width={92} height={30} rx={15} fill="var(--cream)" stroke="var(--coral)" strokeWidth={2.5} />
        <circle cx={144} cy={45} r={5} fill="var(--coral)" />
        <circle cx={164} cy={45} r={5} fill="var(--yellow)" />
        <circle cx={184} cy={45} r={5} fill="var(--cyan)" />
      </motion.g>
    </Frame>
  );
}

function Sign() {
  return (
    <Frame>
      <Ground y={152} />
      <rect x={78} y={54} width={126} height={90} rx={10} fill="var(--cream)" stroke="var(--ink)" strokeOpacity={0.14} strokeWidth={2} />
      {[74, 90, 106].map((y) => (
        <rect key={y} x={96} y={y} width={90} height={6} rx={3} fill="var(--ink)" opacity={0.12} />
      ))}
      <motion.path
        d="M98 128 C110 116 118 134 130 122 C140 112 148 130 162 118"
        fill="none"
        stroke="var(--coral)"
        strokeWidth={3.5}
        strokeLinecap="round"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <g transform="translate(214 74) rotate(35)">
        <rect x={-5} y={0} width={10} height={56} rx={4} fill="var(--yellow)" />
        <path d="M-5 56 L0 70 L5 56 Z" fill="var(--ink)" opacity={0.8} />
      </g>
    </Frame>
  );
}

function Event() {
  return (
    <Frame>
      <Ground />
      <rect x={96} y={118} width={128} height={32} rx={6} fill="var(--periwinkle)" opacity={0.35} />
      <Person x={132} y={118} s={0.6} shirt="var(--yellow)" />
      <Person x={160} y={118} s={0.6} shirt="var(--coral)" />
      <Person x={188} y={118} s={0.6} shirt="var(--cyan)" />
      <path d="M60 30 H260" stroke="var(--ink)" strokeOpacity={0.12} strokeWidth={2.5} strokeLinecap="round" />
      {[80, 112, 144, 176, 208, 240].map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 30 L${x - 9} 54 H${x + 9} Z`}
          fill={["var(--coral)", "var(--yellow)", "var(--cyan)", "var(--pink)", "var(--turquoise)", "var(--periwinkle)"][i]}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
        />
      ))}
    </Frame>
  );
}

function Grow() {
  const dots = [
    { cx: 108, cy: 66 },
    { cx: 148, cy: 92 },
    { cx: 96, cy: 112 },
    { cx: 176, cy: 60 },
    { cx: 202, cy: 104 },
    { cx: 140, cy: 132 },
  ];
  return (
    <Frame>
      <path
        d="M96 40 C150 26 214 40 226 78 C238 118 196 152 150 148 C104 144 76 118 78 92 C80 70 84 44 96 40 Z"
        fill="var(--lightpink)"
        opacity={0.6}
      />
      {dots.map((d, i) => (
        <motion.circle
          key={d.cx}
          cx={d.cx}
          cy={d.cy}
          r={6}
          fill="var(--coral)"
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          style={{ transformOrigin: `${d.cx}px ${d.cy}px` }}
        />
      ))}
      <motion.g {...breathe}>
        <circle cx={252} cy={52} r={18} fill="var(--yellow)" />
      </motion.g>
    </Frame>
  );
}

const ART = {
  own: Own,
  call: Call,
  guide: Guide,
  books: Books,
  visit: Visit,
  train: Train,
  resolve: Resolve,
  coffee: Coffee,
  club: Club,
  sign: Sign,
  event: Event,
  grow: Grow,
} as const;

export type LifeArtKey = keyof typeof ART;

export function LifeArt({ name }: { name: string }) {
  const C = ART[name as LifeArtKey] ?? Own;
  return <C />;
}
