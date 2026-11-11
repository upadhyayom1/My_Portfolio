import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = `${(totalScroll / windowHeight) * 100}%`;
        setScrollProgress(scroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#0E0F11] font-sans antialiased relative selection:bg-[#0E0F11] selection:text-[#FAFAF8]">
      {/* Subtle paper grain texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Top minimal scroll progress line */}
      <div
        id="scroll-progress"
        style={{ width: scrollProgress }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Single-Page Editorial Sections in strict order */}
      <main>
        {/* Signature Interactive Hero with 3D Lanyard */}
        <Hero />

        {/* 01 / Selected Work */}
        <SelectedWork />

        {/* 02 / About */}
        <About />

        {/* 03 / Expertise */}
        <Expertise />

        {/* 04 / Experience & Education */}
        <Experience />

        {/* 05 / Achievements */}
        <Achievements />

        {/* 06 / Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
