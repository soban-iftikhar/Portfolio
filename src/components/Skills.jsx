import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";
import { skills } from "../data";

function SkillCard({ label, items, delay = 0 }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal group bg-card border border-border rounded-2xl p-6 
                 relative overflow-hidden transition-all duration-300 
                 hover:border-accent/25 hover:-translate-y-1.5 
                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)" }}
      />

      <p className="font-mono text-[10px] text-accent2 tracking-[0.14em] uppercase font-medium mb-4">
        {label}
      </p>

      <div className="flex flex-wrap gap-2">
        {items.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] px-3 py-1 bg-subtle border border-border 
                       rounded-md text-text transition-all duration-200 cursor-default
                       hover:bg-accent/10 hover:border-accent/35 hover:text-accent2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="What I Work With"
          title="Tech Stack"
          subtitle="A cross-stack skillset built through real projects, not just tutorials."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((cat, i) => (
            <SkillCard
              key={cat.label}
              label={cat.label}
              items={cat.items}
              delay={i * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
