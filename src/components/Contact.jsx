import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionHeader from "./SectionHeader";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.92z" />
    </svg>
  );
}

export default function Contact() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();

  const links = [
    {
      href: "https://linkedin.com/in/soban-iftikhar1",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/soban-iftikhar",
      icon: <GitHubIcon />,
      label: "GitHub",
    },
    {
      href: "tel:+923194941098",
      icon: <PhoneIcon />,
      label: "+92 319 4941098",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 text-center relative z-10 bg-[#07070d]">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,106,247,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[560px] mx-auto relative z-10">
        <div ref={ref1}>
          <SectionHeader
            eyebrow="Let's Talk"
            title="Get In Touch"
            subtitle="Available for freelance work, internships, and full-time roles. Always up for a conversation about building something worth building."
            center
          />
        </div>

        <div ref={ref2} className="reveal">
          <a
            href="mailto:sobaniftikhar1098@gmail.com"
            className="inline-block font-display font-bold text-white border-b-2 border-[#7c6af7] 
                       pb-1 my-8 tracking-[-0.02em] transition-all duration-200 
                       hover:text-[#a78bfa] hover:border-[#a78bfa]"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
          >
            sobaniftikhar1098@gmail.com
          </a>
        </div>

        <div ref={ref3} className="reveal flex flex-wrap gap-3 justify-center">
          {links.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-2.5 px-5 py-3 bg-[#12121a] border border-[#1c1c2a] 
                         rounded-xl text-[#e2e2ee] text-sm font-medium transition-all duration-300 
                         hover:border-[#7c6af7] hover:text-[#a78bfa] hover:-translate-y-1 
                         hover:shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
