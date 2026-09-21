import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";
import { certifications } from "../data";

function CertModal({ cert, onClose }) {
  useEffect(() => {
    if (cert) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [cert]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!cert) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1001] flex items-center justify-center p-4 sm:p-8"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      <div
        className="absolute inset-0 bg-black/92 backdrop-blur-2xl"
        onClick={onClose}
      />
      <div
        className="relative bg-card border border-accent/22 rounded-2xl w-full max-w-3xl 
                   p-6 sm:p-8 z-10"
        style={{ animation: "slideUp 0.3s cubic-bezier(0.4,0,0.2,1)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-subtle border border-border 
                     flex items-center justify-center text-muted text-sm transition-all duration-200 
                     hover:bg-accent hover:text-white hover:border-accent"
          aria-label="Close"
        >
          ✕
        </button>

        <img
          src={cert.img}
          alt={cert.title}
          className="w-full rounded-xl border border-border mb-5 object-cover"
          style={{ maxHeight: "420px" }}
        />
        <h3 className="font-display font-bold text-text text-xl mb-1">{cert.title}</h3>
        <p className="font-mono text-[11px] text-muted">
          {cert.issuer} · {cert.date}
        </p>
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

function CertCard({ cert, onOpen, delay = 0 }) {
  const ref = useScrollReveal();

  const badgeStyle =
    cert.badgeType === "cisco"
      ? "bg-[#049fd9]"
      : "bg-[#20beff]";

  const cardContent = (
    <div
      className="group relative overflow-hidden bg-card border border-border rounded-[18px] cursor-pointer
                 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                 hover:-translate-y-1.5 flex items-start gap-5 p-6"
      onClick={() => onOpen(cert)}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(124,106,247,0.06), transparent)" }}
      />

      {/* Badge */}
      <div
        className={`w-12 h-12 rounded-xl ${badgeStyle} flex items-center justify-center 
                    flex-shrink-0 relative z-10`}
      >
        <span className="font-display font-extrabold text-white text-[10px] tracking-[-0.02em]">
          {cert.badge}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 relative z-10">
        <h3 className="font-display font-bold text-text text-[1rem] leading-[1.3] mb-1.5">
          {cert.title}
        </h3>
        <p className="font-mono text-[11px] text-accent2 tracking-[0.05em] mb-1">
          {cert.issuer}
        </p>
        <p className="font-mono text-[10px] text-muted">{cert.date}</p>
      </div>

      {/* Arrow */}
      <span
        className="absolute bottom-5 right-5 text-[12px] text-muted z-10 
                   transition-all duration-200 group-hover:text-accent2 
                   group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
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

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 px-6 bg-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Verified completions from industry programs. Click to view the certificate."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <CertCard
              key={cert.title}
              cert={cert}
              onOpen={setActiveCert}
              delay={i * 80}
            />
          ))}
        </div>
      </div>

      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}