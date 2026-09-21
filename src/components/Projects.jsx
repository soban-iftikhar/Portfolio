import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import { projects, filterOptions } from "../data";

function ProjectCard({ project, onOpen, delay = 0 }) {
  const ref = useScrollReveal();

  const cardContent = (
    <div
      className="group bg-card overflow-hidden rounded-2xl
                 flex flex-col cursor-pointer relative transition-all duration-[500ms] 
                 hover:-translate-y-2 h-full border border-border hover:shadow-2xl hover:shadow-accent/20"
      onClick={() => onOpen(project)}
    >
      {/* Hover overlay shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent) 0%, transparent 40%)",
          opacity: 0.05
        }}
      />

      {/* Top graphic area */}
      <div
        className="h-[180px] w-full relative flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-subtle) 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <span className="font-display font-extrabold text-muted/30 select-none tracking-[-0.045em] 
                         transition-all duration-700 group-hover:scale-125 group-hover:text-muted/40"
                style={{ fontSize: "clamp(5rem, 8vw, 7rem)" }}>
            {project.initials}
          </span>
        </div>

        {/* Gradient overlay for blending into card body */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent z-20 pointer-events-none" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-subtle 
                         border border-border text-accent tracking-[0.04em]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-subtle border border-border text-muted">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-text text-[1.25rem] tracking-[-0.015em] mb-2">
          {project.name}
        </h3>
        <p className="text-muted text-[13px] leading-[1.75] flex-1 mb-5">
          {project.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-subtle border border-border 
                           text-muted transition-all duration-200 hover:text-accent hover:border-accent"
              >
                Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-subtle border border-border 
                           text-muted transition-all duration-200 hover:text-accent hover:border-accent"
              >
                Code
              </a>
            )}
          </div>
          <button
            className="text-[12px] font-semibold text-accent bg-none border-none cursor-pointer 
                       transition-all duration-200 hover:tracking-wide"
            onClick={() => onOpen(project)}
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      {cardContent}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filtered = filter === "all"
    ? projects
    : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 px-6 relative z-10 bg-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects"
          subtitle="End-to-end applications built from scratch. Click any card for a full breakdown."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`font-mono text-[11px] px-4 py-1.5 rounded-full border tracking-[0.04em] 
                         transition-all duration-200 ${
                           filter === opt.value
                             ? "bg-accent border-accent text-white shadow-md"
                             : "bg-surface border-border text-muted hover:bg-accent hover:border-accent hover:text-white"
                         }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              onOpen={setActiveProject}
              delay={i * 60}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
