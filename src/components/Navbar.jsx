import { useState, useEffect } from "react";
import { navLinks } from "../data";

export default function Navbar({ isDark, toggleTheme }) {
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
          scrolled ? "py-3 bg-bg/90 border-b border-border shadow-sm" : "py-4 bg-transparent"
        } backdrop-blur-2xl`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-3 group"
          >
            <span
              className="font-display text-lg font-bold italic text-accent border border-accent/30 
                         px-2 py-1 rounded transition-all duration-300 group-hover:border-accent 
                         group-hover:shadow-[0_0_12px_rgba(217,119,87,0.3)] dark:group-hover:shadow-[0_0_12px_rgba(124,106,247,0.3)]"
            >
              MS
            </span>
            <span className="font-display font-bold text-text text-sm tracking-tight hidden sm:block">
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
                      activeSection === sectionId ? "text-text font-semibold" : "text-text/70 hover:text-text"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border bg-surface text-text hover:bg-subtle transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <div className="hidden sm:block">
              <a
                  href="mailto:sobaniftikhar1098@gmail.com"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 
                             bg-accent text-white rounded-lg transition-all duration-300 
                             hover:bg-accent2 hover:shadow-[0_0_20px_rgba(217,119,87,0.45)] 
                             dark:hover:shadow-[0_0_20px_rgba(124,106,247,0.45)]
                             hover:-translate-y-px active:translate-y-0"
                >
                  Hire Me
                </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
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
        <div className="absolute inset-0 bg-bg/95 backdrop-blur-2xl" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-surface border-b border-border 
                     transition-all duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}
        >
          <ul className="flex flex-col py-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNav(href)}
                  className="w-full text-left px-6 py-3 text-sm text-text/70 hover:text-text 
                             hover:bg-subtle transition-colors duration-200"
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="px-6 pt-3 pb-4">
              <a
                href="mailto:sobaniftikhar1098@gmail.com"
                className="block text-center text-xs font-semibold px-4 py-2.5 bg-accent 
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