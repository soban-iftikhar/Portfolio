import { useCounterAnimation } from "../hooks/useScrollReveal";
import LightRays from "./backgrounds/LightRays";

function StatCounter({ target, suffix = "", label }) {
  const numRef = useCounterAnimation(target);

  return (
    <div className="flex flex-col gap-1">
      <div className="font-display text-4xl font-extrabold text-text leading-none">
        <span ref={numRef}>0</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-[10px] text-muted tracking-[0.1em] uppercase font-medium">{label}</div>
    </div>
  );
}

export default function Hero({ isDark }) {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor={isDark ? "var(--color-accent)" : "#93c5fd"}
          raysSpeed={1}
          lightSpread={1}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.1}
          fadeDistance={1.0}
          saturation={1.0}
        />
      </div>

      {/* Background orbs */}
      <div
        className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: isDark ? "rgba(124,106,247,0.08)" : "rgba(217,119,87,0.08)",
          filter: "blur(120px)",
          animation: "orbFloat 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-50px] left-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: isDark ? "rgba(167,139,250,0.06)" : "rgba(224,150,126,0.06)",
          filter: "blur(100px)",
          animation: "orbFloat 15s ease-in-out infinite reverse",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
        {/* Left — Content */}
        <div className="hero-content relative">
          
          

          {/* Available badge */}
          <div
            className="inline-flex items-center gap-2.5 mb-7 px-4 py-1.5 rounded-full 
                       border border-accent/20 bg-accent/10 animate-fade-in relative mt-4"
          >
            <span
              className="w-2 h-2 rounded-full bg-accent"
              style={{ animation: "blink 2s ease infinite" }}
            />
            <span className="font-mono text-[11px] text-accent font-semibold tracking-[0.08em] uppercase">
              Open to new opportunities
            </span>
            
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold text-text leading-[0.95] tracking-[-0.035em] mb-4 relative z-10"
            style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
          >
            Muhammad
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent2) 55%, #c4b5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Soban.
            </span>
          </h1>

          {/* Role */}
          <p className="font-mono text-sm text-muted tracking-[0.04em] mb-6 mt-4">
            Software Engineer &nbsp;&middot;&nbsp; Islamabad, Pakistan
          </p>

          {/* Description */}
          <p className="text-text text-[1.1rem] leading-[1.85] max-w-[550px] mb-10 font-medium">
            Full-Stack Developer with a strong foundation in Java (Spring Boot) and the MERN stack, and growing expertise in Python based AI and automation systems. Experienced in delivering end to end solutions, from designing responsive React frontends to implementing robust backend logic, secure authentication and machine learning driven features.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-12 relative z-10">
            <button
              onClick={() => scrollTo("#projects")}
              className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm 
                         font-semibold text-white overflow-hidden transition-all duration-300 
                         hover:-translate-y-0.5 active:translate-y-0 group bg-accent hover:bg-accent2"
              style={{
                boxShadow: isDark ? "0 4px 24px rgba(124,106,247,0.28)" : "0 4px 24px rgba(217,119,87,0.28)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = isDark ? "0 10px 36px rgba(124,106,247,0.5)" : "0 10px 36px rgba(217,119,87,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = isDark ? "0 4px 24px rgba(124,106,247,0.28)" : "0 4px 24px rgba(217,119,87,0.28)")}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="https://github.com/soban-iftikhar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium 
                         text-text border border-border bg-surface transition-all duration-300 
                         hover:border-accent hover:text-accent hover:-translate-y-0.5 
                         hover:shadow-md"
            >
              GitHub Profile
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 pt-8 border-t border-border">
            <StatCounter target={10} suffix="+" label="Projects Shipped" />
            <StatCounter target={3} suffix="+" label="Years Building" />
            <StatCounter target={3} suffix="" label="Certifications" />
          </div>
        </div>

        {/* Right — Photo */}
        <div className="flex justify-center lg:justify-end order-first lg:order-none relative hero-parallax-img w-full">
          
          <div className="relative mx-auto lg:mr-0">
            
            

            {/* Spinning ring */}
            <div
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full relative"
              style={{ animation: "none" }}
            >
              <div
                className="absolute inset-[-4px] rounded-full opacity-60 dark:opacity-100"
                style={{
                  background: "conic-gradient(from 0deg, var(--color-accent), var(--color-accent2), #c4b5fd, var(--color-accent))",
                  animation: "spin 8s linear infinite",
                }}
              />
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-bg border-[6px] border-bg">
                <img
                  src="/profile.png"
                  alt="Muhammad Soban"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Info pill */}
            <div
              className="absolute bottom-6 -left-4 lg:-left-12 z-20 bg-card border border-border rounded-xl 
                         px-5 py-3 text-sm text-muted whitespace-nowrap shadow-xl"
            >
              <strong className="block text-text text-base font-semibold mb-0.5">Java Spring Boot</strong>
              Full Stack Developer
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.97); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-content > * {
          animation: fadeIn 0.7s ease both;
        }
        .hero-content > *:nth-child(1) { animation-delay: 0.1s; }
        .hero-content > *:nth-child(2) { animation-delay: 0.2s; }
        .hero-content > *:nth-child(3) { animation-delay: 0.3s; }
        .hero-content > *:nth-child(4) { animation-delay: 0.4s; }
        .hero-content > *:nth-child(5) { animation-delay: 0.5s; }
        .hero-content > *:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}