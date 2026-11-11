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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  // GSAP Slow Brightness & Opacity Illumination as user scrolls between sections
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("main > section:not(#hero)");
      sections.forEach((sec) => {
        // Collect major headings and editorial introductory text
        const textElements = sec.querySelectorAll("h2, .section-heading, .editorial-heading");
        if (textElements.length) {
          gsap.fromTo(
            textElements,
            {
              opacity: 0.15,
              filter: "brightness(0.35) blur(5px)",
              y: 24,
            },
            {
              opacity: 1,
              filter: "brightness(1) blur(0px)",
              y: 0,
              duration: 1.15,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
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

        {/* 02 / About Me */}
        <About />

        {/* 03 / Technical Expertise */}
        <Expertise />

        {/* 04 / Experience & Education */}
        <Experience />

        {/* 05 / Achievements & Competitive Profiles */}
        <Achievements />

        {/* 06 / Contact */}
        <Contact />
      </main>

      {/* Footer Colophon */}
      <Footer />
    </div>
  );
}
