import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

function GraduationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

const eduData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "COMSATS University Islamabad",
    date: "September 2023 — June 2027",
  },
  {
    degree: "FSc Pre-Engineering",
    school: "Iman College, Sohal, Faisalabad",
    date: "August 2021 — May 2023",
  },
  {
    degree: "Matriculation",
    school: "Iman Public Higher Secondary School, Sohal, Faisalabad",
    date: "June 2019 — March 2021",
  },
];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 px-6 bg-surface relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Academic Background"
          title="Education"
        />

        <div className="reveal flex flex-col gap-5" ref={ref}>
          {eduData.map((edu, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-[20px] p-7 sm:p-9 
                         grid grid-cols-1 sm:grid-cols-[52px_1fr] gap-6 items-center 
                         transition-all duration-300 hover:border-accent/25 
                         hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
            >
              {/* Icon */}
              <div
                className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent2))" }}
              >
                <GraduationIcon />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-text text-[1.2rem] mb-1">
                  {edu.degree}
                </h3>
                <p className="font-mono text-[12px] text-accent2 tracking-[0.04em] mb-1">
                  {edu.school}
                </p>
                <p className="font-mono text-[11px] text-muted">
                  {edu.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
