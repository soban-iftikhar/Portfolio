import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [project]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  const showImage = project.img && !imgFailed;

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
        className="relative bg-card border border-accent/22 rounded-3xl w-full max-w-2xl
                   max-h-[90vh] overflow-y-auto z-10 scrollbar-thin"
        style={{ animation: "slideUp 0.3s cubic-bezier(0.4,0,0.2,1)" }}
      >
        {/* Header */}
        <div
          className="h-48 flex items-center justify-center relative border-b border-border overflow-hidden"
          style={!showImage ? { background: project.bg } : {}}
        >
          {/* Image background */}
          {showImage && (
            <>
              <img
                src={project.img}
                alt={project.name}
                onError={() => setImgFailed(true)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay so text is readable */}
              <div className="absolute inset-0 bg-black/55" />
            </>
          )}

          {/* Initials — shown on gradient fallback only */}
          {!showImage && (
            <span
              className="font-display font-extrabold text-muted/30 select-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
            >
              {project.initials}
            </span>
          )}

          {/* Project name overlay on image */}
          {showImage && (
            <span
              className="relative z-10 font-display font-extrabold text-text select-none tracking-[-0.04em] drop-shadow-lg"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              {project.name}
            </span>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-subtle border border-border
                       flex items-center justify-center text-muted text-sm transition-all duration-200
                       hover:bg-accent hover:text-white hover:border-accent z-20"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-7 sm:p-8">
          <h3 className="font-display font-extrabold text-text text-2xl tracking-[-0.025em] mb-2">
            {project.name}
          </h3>
          <p className="text-muted text-sm leading-[1.85] mb-6">{project.desc}</p>

          <p className="font-mono text-[10px] text-accent2 tracking-[0.16em] uppercase mt-6 mb-3">
            Key Features
          </p>
          <ul className="flex flex-col gap-2 mb-2">
            {project.features.map((f, i) => (
              <li
                key={i}
                className="text-sm text-text pl-5 relative leading-[1.65]"
              >
                <span className="absolute left-0 top-[5px] text-accent text-[10px]">—</span>
                {f}
              </li>
            ))}
          </ul>

          <p className="font-mono text-[10px] text-accent2 tracking-[0.16em] uppercase mt-6 mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-3 py-1.5 rounded-md text-accent2
                           bg-accent/10 border border-accent/20"
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
                  background: "linear-gradient(135deg, var(--color-accent), var(--color-accent2))",
                  boxShadow: "var(--color-accent) 0px 4px 20px -5px",
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
                           text-text bg-subtle border border-border transition-all duration-300 
                           hover:border-accent hover:text-accent2"
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