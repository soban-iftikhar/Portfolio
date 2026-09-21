import { marqueeItems } from "../data";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative z-10 overflow-hidden py-5 border-y border-border bg-surface">
      <div
        className="flex gap-12 w-max"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 font-mono text-[11px] text-muted 
                       tracking-[0.1em] uppercase whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
