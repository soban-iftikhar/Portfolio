import { useState, useEffect } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "skills", "projects", "experience", "certifications", "education", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-[#07070d]/90 border-b border-[#1c1c2a]" : "py-4 bg-transparent"
        } backdrop-blur-2xl`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-3 group"
          >
            <span
              className="font-mono text-xs font-bold tracking-widest text-[#7c6af7] border border-[#7c6af7]/30 
                         px-2 py-1 rounded transition-all duration-300 group-hover:border-[#7c6af7] 
                         group-hover:shadow-[0_0_12px_rgba(124,106,247,0.3)]"
            >
              MS
            </span>
            <span className="font-display font-bold text-white text-sm tracking-tight hidden sm:block">
              Muhammad Soban
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              return (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className={`text-xs font-medium tracking-wide transition-all duration-200 relative group ${
                      activeSection === sectionId ? "text-white" : "text-[#64647e] hover:text-white"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#7c6af7] transition-all duration-300 ${
                        activeSection === sectionId ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:sobaniftikhar1098@gmail.com"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 
                         bg-[#7c6af7] text-white rounded-lg transition-all duration-300 
                         hover:bg-[#a78bfa] hover:shadow-[0_0_20px_rgba(124,106,247,0.45)] 
                         hover:-translate-y-px active:translate-y-0"
            >
              Hire Me
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-[#e2e2ee] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px bg-[#e2e2ee] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-[#e2e2ee] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#07070d]/95 backdrop-blur-2xl" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-[#0d0d14] border-b border-[#1c1c2a] 
                     transition-all duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}
        >
          <ul className="flex flex-col py-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNav(href)}
                  className="w-full text-left px-6 py-3 text-sm text-[#64647e] hover:text-white 
                             hover:bg-[#1a1a28] transition-colors duration-200"
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="px-6 pt-3 pb-4">
              <a
                href="mailto:sobaniftikhar1098@gmail.com"
                className="block text-center text-xs font-semibold px-4 py-2.5 bg-[#7c6af7] 
                           text-white rounded-lg"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}