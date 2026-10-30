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
                   p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
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
          className="w-full rounded-xl border border-border mb-5 object-contain bg-black/30"
          style={{ maxHeight: "420px" }}
        />

        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-display font-bold text-text text-xl mb-1">{cert.title}</h3>
            <p className="font-mono text-[11px] text-muted">
              {cert.issuer} · {cert.date}
            </p>
          </div>
          {cert.credentialId && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-subtle border border-border text-[11px] font-mono text-muted">
              <span className="text-muted/60">ID:</span>
              <span className="text-text font-semibold select-all">{cert.credentialId}</span>
            </div>
          )}
        </div>

        {cert.description && (
          <p className="text-sm text-text/80 leading-relaxed mt-3 mb-2">
            {cert.description}
          </p>
        )}

        {cert.verifyUrl && (
          <div className="pt-4 mt-3 border-t border-border flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] text-muted">Official Verification</span>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent2 text-xs font-mono font-medium hover:bg-accent/20 transition-all hover:scale-[1.02]"
            >
              Verify Credential ↗
            </a>
          </div>
        )}
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

  const getBadgeStyle = (badgeType) => {
    switch (badgeType) {
      case "cisco":
        return "bg-[#049fd9]";
      case "kaggle":
        return "bg-[#20beff]";
      case "google":
        return "bg-[#4285F4]";
      case "alibaba":
        return "bg-[#ff6a00]";
      default:
        return "bg-accent";
    }
  };

  const badgeStyle = getBadgeStyle(cert.badgeType);

  const cardContent = (
    <div
      className="group relative overflow-hidden bg-card border border-border rounded-[18px] cursor-pointer
                 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                 dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                 hover:-translate-y-1.5 flex items-start gap-4 sm:gap-5 p-5 sm:p-6 h-full"
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
                    flex-shrink-0 relative z-10 shadow-sm`}
      >
        <span className="font-display font-extrabold text-white text-[9.5px] tracking-[-0.02em] text-center px-0.5">
          {cert.badge}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 relative z-10 min-w-0 pr-4">
        <h3 className="font-display font-bold text-text text-[0.98rem] leading-[1.3] mb-1.5 group-hover:text-accent2 transition-colors line-clamp-2">
          {cert.title}
        </h3>
        <p className="font-mono text-[11px] text-accent2 tracking-[0.05em] mb-1">
          {cert.issuer}
        </p>
        <p className="font-mono text-[10px] text-muted">{cert.date}</p>
        {cert.credentialId && (
          <p className="font-mono text-[9px] text-muted/70 mt-2 truncate tracking-tight">
            ID: {cert.credentialId}
          </p>
        )}
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
      className="reveal h-full"
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
          subtitle="Verified completions and hackathon achievements. Click to view full details."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <CertCard
              key={cert.title + i}
              cert={cert}
              onOpen={setActiveCert}
              delay={i * 60}
            />
          ))}
        </div>
      </div>

      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}