import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/88 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal box */}
      <div
        className="relative bg-[#12121a] border border-[#7c6af7]/22 rounded-3xl w-full max-w-2xl 
                   max-h-[90vh] overflow-y-auto z-10 scrollbar-thin"
        style={{ animation: "slideUp 0.3s cubic-bezier(0.4,0,0.2,1)" }}
      >
        {/* Header */}
        <div
          className="h-48 flex items-center justify-center relative border-b border-[#1c1c2a] overflow-hidden"
          style={{ background: project.bg }}
        >
          <span
            className="font-display font-extrabold text-white/10 select-none tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
          >
            {project.initials}
          </span>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1a1a28] border border-[#1c1c2a] 
                       flex items-center justify-center text-[#64647e] text-sm transition-all duration-200 
                       hover:bg-[#7c6af7] hover:text-white hover:border-[#7c6af7]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-7 sm:p-8">
          <h3 className="font-display font-extrabold text-white text-2xl tracking-[-0.025em] mb-2">
            {project.name}
          </h3>
          <p className="text-[#8888a8] text-sm leading-[1.85] mb-6">{project.desc}</p>

          <p className="font-mono text-[10px] text-[#a78bfa] tracking-[0.16em] uppercase mt-6 mb-3">
            Key Features
          </p>
          <ul className="flex flex-col gap-2 mb-2">
            {project.features.map((f, i) => (
              <li
                key={i}
                className="text-sm text-[#e2e2ee] pl-5 relative leading-[1.65]"
              >
                <span className="absolute left-0 top-[5px] text-[#7c6af7] text-[10px]">—</span>
                {f}
              </li>
            ))}
          </ul>

          <p className="font-mono text-[10px] text-[#a78bfa] tracking-[0.16em] uppercase mt-6 mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-3 py-1.5 rounded-md text-[#a78bfa] 
                           bg-[rgba(124,106,247,0.08)] border border-[#7c6af7]/20"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[120px] text-center px-5 py-3 rounded-xl text-sm font-semibold 
                           text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7c6af7, #a78bfa)",
                  boxShadow: "0 4px 20px rgba(124,106,247,0.3)",
                }}
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[120px] text-center px-5 py-3 rounded-xl text-sm font-medium 
                           text-[#e2e2ee] bg-[#1a1a28] border border-[#1c1c2a] transition-all duration-300 
                           hover:border-[#7c6af7] hover:text-[#a78bfa]"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>,
    document.body
  );
}