import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal mb-14 ${center ? "text-center" : ""}`}
    >
      <p className="font-mono text-[10px] text-[#a78bfa] tracking-[0.2em] uppercase mb-2.5">
        {eyebrow}
      </p>
      <h2
        className="font-display font-extrabold text-white tracking-[-0.025em] leading-[1.1] mb-3"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[#64647e] text-sm leading-[1.8] max-w-md ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
