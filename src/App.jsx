import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridBackground from "./components/GridBackground";
import LightRays from "./components/backgrounds/LightRays";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden transition-colors duration-300">
      <GridBackground isDark={isDark} />
      <div style={{ position: 'fixed', inset: 0, height: '100vh', width: '100vw', zIndex: 0, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor={isDark ? "#c084fc" : "#93c5fd"}
          raysSpeed={0.8}
          lightSpread={0.8}
          rayLength={2.5}
          followMouse={false}
          fadeDistance={1.2}
          saturation={1.4}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
        <Hero isDark={isDark} />
        <Marquee />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
