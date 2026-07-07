import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";
import ProjectModal from "./ProjectModal";
import ElectricBorder from "./ui/ElectricBorder";
import { projects, filterOptions } from "../data";

function ProjectCard({ project, onOpen, delay = 0 }) {
  const ref = useScrollReveal();

  const cardContent = (
    <div
      className="group bg-[#12121a] overflow-hidden 
                 flex flex-col cursor-pointer relative transition-all duration-[400ms] 
                 hover:-translate-y-1.5 h-full"
      onClick={() => onOpen(project)}
    >
      {/* Hover overlay shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,106,247,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Thumbnail */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: project.bg }}
      >
        <span
          className="font-display font-extrabold text-white/10 select-none tracking-[-0.045em] 
                     transition-all duration-500 group-hover:scale-110 group-hover:text-white/15"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          {project.initials}
        </span>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #12121a)",
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1a1a28] 
                         border border-[#1c1c2a] text-[#a78bfa] tracking-[0.04em]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1a1a28] border border-[#1c1c2a] text-[#64647e]">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-white text-[1.18rem] tracking-[-0.015em] mb-2">
          {project.name}
        </h3>
        <p className="text-[#64647e] text-[13px] leading-[1.75] flex-1 mb-5">
          {project.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1c1c2a]">
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#1a1a28] border border-[#1c1c2a] 
                           text-[#64647e] transition-all duration-200 hover:text-[#a78bfa] hover:border-[#7c6af7]"
              >
                Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#1a1a28] border border-[#1c1c2a] 
                           text-[#64647e] transition-all duration-200 hover:text-[#a78bfa] hover:border-[#7c6af7]"
              >
                Code
              </a>
            )}
          </div>
          <button
            className="text-[12px] font-semibold text-[#a78bfa] bg-none border-none cursor-pointer 
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
      <ElectricBorder
        color="#7df9ff"
        speed={0.8}
        chaos={0.08}
        thickness={1.5}
        borderRadius={20}
        style={{ borderRadius: 20 }}
      >
        {cardContent}
      </ElectricBorder>
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
    <section id="projects" className="py-24 px-6 relative z-10 bg-[#07070d]">
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
                             ? "bg-[#7c6af7] border-[#7c6af7] text-white shadow-[0_2px_16px_rgba(124,106,247,0.35)]"
                             : "bg-[#12121a] border-[#1c1c2a] text-[#64647e] hover:bg-[#7c6af7] hover:border-[#7c6af7] hover:text-white"
                         }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
