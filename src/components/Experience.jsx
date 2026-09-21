import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

export default function Experience() {
  const ref = useScrollReveal();

  const points = [
    "Built and deployed full-stack web applications using the MERN stack, focusing on scalable system architecture and clean code.",
    "Designed RESTful APIs and integrated them with responsive React frontends to ensure smooth data flow and system performance.",
    "Ran real-time debugging and managed professional version control workflows under senior mentorship to deliver reliable software.",
    "Worked on end-to-end development tasks, prioritizing long-term maintainability and performance optimization for every project.",
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-surface relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Where I've Worked"
          title="Experience"
        />

        <div
          ref={ref}
          className="reveal bg-card border border-border rounded-[20px] p-7 sm:p-9 
                     grid grid-cols-1 sm:grid-cols-[52px_1fr] gap-6 items-start 
                     transition-all duration-300 hover:border-accent/25 
                     hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
        >
          {/* Icon */}
          <div
            className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent2))" }}
          >
            <BriefcaseIcon />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-display font-bold text-text text-[1.2rem] mb-1">
              Full-Stack Developer Intern
            </h3>
            <p className="font-mono text-[12px] text-accent2 tracking-[0.04em] mb-1">
              Decimal Solutions
            </p>
            <p className="font-mono text-[11px] text-muted mb-6">
              July 2025 — September 2025 · Islamabad, Pakistan
            </p>

            <ul className="flex flex-col gap-2.5">
              {points.map((pt, i) => (
                <li key={i} className="text-[13.5px] text-muted pl-5 relative leading-[1.7]">
                  <span className="absolute left-0 top-[6px] text-accent text-[10px]">—</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
