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
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Lenis Momentum Smooth Scrolling & GSAP Synchronization
  useEffect(() => {
        if (typeof window === "undefined") return;
        const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isReduced) {
          const handleScroll = () => {
            const total = document.documentElement.scrollTop;
            const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (max > 0) setScrollProgress(`${(total / max) * 100}%`);
          };
          window.addEventListener("scroll", handleScroll, { passive: true });
          return () => window.removeEventListener("scroll", handleScroll);
        }

        // Lenis instance with luxury smooth wheel damping
        const lenis = new Lenis({
          lerp: 0.082,
          smoothWheel: true,
          syncTouch: false,
          wheelMultiplier: 0.95,
          touchMultiplier: 1.5,
        });

        lenis.on("scroll", (e) => {
          ScrollTrigger.update();
          if (e.limit > 0) {
            setScrollProgress(`${(e.scroll / e.limit) * 100}%`);
          }
        });

        const updateScroll = (time) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateScroll);
        gsap.ticker.lagSmoothing(0);

        // Smooth anchor navigation for all #links
        const handleAnchorClick = (e) => {
          const anchor = e.target.closest('a[href^="#"]');
          if (!anchor) return;
          const href = anchor.getAttribute("href");
          if (!href) return;

          if (href === "#" || href === "#top" || href === "#hero") {
            e.preventDefault();
            lenis.scrollTo(0, { duration: 1.4 });
            return;
          }

          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -30, duration: 1.4 });
          }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
          document.removeEventListener("click", handleAnchorClick);
          gsap.ticker.remove(updateScroll);
          lenis.destroy();
        };
      }, []);

  // GSAP Scroll-Linked Slow Brightness Illumination across Sections
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("main > section:not(#hero)");

      sections.forEach((sec) => {
          const headings = sec.querySelectorAll("h2, .section-heading, .editorial-heading");

          if (headings.length) {
            gsap.fromTo(
              headings,
              {
                opacity: 0.15,
                filter: "brightness(0.35) blur(5px)",
                y: 28,
              },
              {
                opacity: 1,
                filter: "brightness(1) blur(0px)",
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: sec,
                  start: "top 88%",
                  end: "top 52%",
                  scrub: 0.8,
                },
              }
            );
          }
        });
  }, 120);

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
