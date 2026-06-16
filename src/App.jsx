import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridBackground from "./components/GridBackground";
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
  return (
    <div className="min-h-screen bg-[#07070d] text-[#e2e2ee] overflow-x-hidden">
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
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
