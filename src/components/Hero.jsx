import { useCounterAnimation } from "../hooks/useScrollReveal";
import LightRays from "./backgrounds/LightRays";

function StatCounter({ target, suffix = "", label }) {
  const numRef = useCounterAnimation(target);

  return (
    <div className="flex flex-col gap-1">
      <div className="font-display text-3xl font-extrabold text-white leading-none">
        <span ref={numRef}>0</span>
        <span className="text-[#a78bfa]">{suffix}</span>
      </div>
      <div className="text-[10px] text-[#64647e] tracking-[0.1em] uppercase font-medium">{label}</div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* LightRays background — followMouse handles cursor interaction now, no separate glow needed */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#7c6af7"
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
          background: "rgba(124,106,247,0.08)",
          filter: "blur(120px)",
          animation: "orbFloat 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-50px] left-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "rgba(167,139,250,0.06)",
          filter: "blur(100px)",
          animation: "orbFloat 15s ease-in-out infinite reverse",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-20 items-center relative z-10">
        {/* Left — Content */}
        <div className="hero-content">
          {/* Available badge */}
          <div
            className="inline-flex items-center gap-2.5 mb-7 px-4 py-1.5 rounded-full 
                       border border-[#5eead4]/20 bg-[#5eead4]/6 animate-fade-in"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#5eead4]"
              style={{ animation: "blink 2s ease infinite" }}
            />
            <span className="font-mono text-[11px] text-[#5eead4] tracking-[0.08em] uppercase">
              Open to new opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold text-white leading-[0.95] tracking-[-0.035em] mb-4"
            style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
          >
            Muhammad
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #7c6af7 0%, #a78bfa 55%, #c4b5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Soban.
            </span>
          </h1>

          {/* Role */}
          <p className="font-mono text-sm text-[#64647e] tracking-[0.04em] mb-6">
            Software Engineer &nbsp;&middot;&nbsp; Islamabad, Pakistan
          </p>

          {/* Description */}
          <p className="text-[#8888a8] text-[1.02rem] leading-[1.85] max-w-[480px] mb-10 font-light">
            I build complete web products — robust backends, clean APIs, and
            frontends that feel right to use. Java, MERN, Next.js and everything in
            between.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => scrollTo("#projects")}
              className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-sm 
                         font-semibold text-white overflow-hidden transition-all duration-300 
                         hover:-translate-y-0.5 active:translate-y-0 group"
              style={{
                background: "linear-gradient(135deg, #7c6af7, #a78bfa)",
                boxShadow: "0 4px 24px rgba(124,106,247,0.28)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 10px 36px rgba(124,106,247,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,106,247,0.28)")}
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-sm font-medium 
                         text-[#e2e2ee] border border-[#1c1c2a] bg-transparent transition-all duration-300 
                         hover:border-[#7c6af7]/50 hover:text-[#a78bfa] hover:-translate-y-0.5 
                         hover:bg-[rgba(124,106,247,0.06)]"
            >
              GitHub Profile
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 pt-8 border-t border-[#1c1c2a]">
            <StatCounter target={10} suffix="+" label="Projects Shipped" />
            <StatCounter target={3} suffix="+" label="Years Building" />
            <StatCounter target={3} suffix="" label="Certifications" />
          </div>
        </div>

        {/* Right — Photo */}
        <div className="flex justify-center lg:justify-end order-first lg:order-none">
          <div className="relative">
            {/* Spinning ring */}
            <div
              className="w-[270px] h-[270px] lg:w-[300px] lg:h-[300px] rounded-full relative"
              style={{ animation: "none" }}
            >
              <div
                className="absolute inset-[-3px] rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #7c6af7, #a78bfa, #c4b5fd, #7c6af7)",
                  animation: "spin 8s linear infinite",
                }}
              />
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-[#07070d] border-4 border-[#07070d]">
                <img
                  src="/profile.png"
                  alt="Muhammad Soban"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Info pill */}
            <div
              className="absolute bottom-4 -right-6 z-20 bg-[#12121a] border border-[#1c1c2a] rounded-xl 
                         px-4 py-2.5 text-xs text-[#64647e] whitespace-nowrap hidden lg:block"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}
            >
              <strong className="block text-white text-sm font-semibold mb-0.5">MERN & Next.js</strong>
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