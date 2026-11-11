import { useState, useEffect, useRef } from "react";
import { Camera, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [imgError, setImgError] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Headline slow brightness illumination (Scroll-scrubbed)
      gsap.fromTo(
        section.querySelectorAll(".reveal-text"),
        {
          opacity: 0.15,
          filter: "brightness(0.35) blur(5px)",
          y: 26,
        },
        {
          opacity: 1,
          filter: "brightness(1) blur(0px)",
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section.querySelector(".about-header"),
            start: "top 88%",
            end: "top 55%",
            scrub: 0.8,
          },
        }
      );

      // 2. Editorial statement and photo frame reveal
      gsap.fromTo(
        section.querySelectorAll(".reveal-statement"),
        {
          opacity: 0.15,
          filter: "brightness(0.35) blur(5px)",
          y: 28,
        },
        {
          opacity: 1,
          filter: "brightness(1) blur(0px)",
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section.querySelector(".about-content"),
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Metadata columns reveal
      gsap.fromTo(
        section.querySelectorAll(".reveal-fact"),
        {
          opacity: 0.2,
          filter: "brightness(0.4) blur(4px)",
          y: 20,
        },
        {
          opacity: 1,
          filter: "brightness(1) blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section.querySelector(".about-facts"),
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 4. Colossal Stat Figures slow illumination (Scroll-scrubbed)
      gsap.fromTo(
        section.querySelectorAll(".reveal-stat"),
        {
          opacity: 0.15,
          filter: "brightness(0.35) blur(5px)",
          y: 30,
        },
        {
          opacity: 1,
          filter: "brightness(1) blur(0px)",
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section.querySelector(".about-stats"),
            start: "top 92%",
            end: "top 62%",
            scrub: 0.8,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 border-t border-[#E5E7EB]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Matches Image 3 (02 ABOUT + Both sides of the stack.) */}
        <div className="about-header mb-12 sm:mb-16">
          <div className="reveal-text inline-flex items-center gap-2 mb-3 font-mono text-xs font-medium tracking-[0.15em] text-[#6B6D72] uppercase">
            <span>02 / ABOUT</span>
          </div>
          <h2 className="reveal-text font-serif-display text-4xl sm:text-5xl lg:text-[62px] text-[#0E0F11] font-normal leading-[1.08] tracking-tight">
            Both sides of the stack<span className="text-[#17804A]">.</span>
          </h2>
        </div>

        {/* Main Grid: Left Portrait Photo Slot + Right Editorial Statement & Metadata */}
        <div className="about-content grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20 sm:mb-24">
          {/* Left Column: Dedicated Photo Frame (Matches Image 3) */}
          <div className="lg:col-span-5 flex flex-col items-start reveal-statement">
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#F0F0ED] shadow-[0_8px_24px_rgba(14,15,17,0.04)] group">
              {!imgError ? (
                <img
                  src="/images/profile.jpg"
                  alt="Om Upadhyay Portrait"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                /* Fallback Editorial Placeholder if image is missing */
                <div className="w-full h-full flex flex-col items-center justify-between p-8 text-center bg-[#F0F0ED]">
                  <div className="w-full flex justify-between items-center text-xs font-mono text-[#6B6D72]">
                    <span>PHOTO SPEC</span>
                    <span>3:4 RATIO</span>
                  </div>
                  <div className="space-y-3">
                    <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-[#D7D9DE] mx-auto flex items-center justify-center text-[#0E0F11]">
                      <Camera className="w-7 h-7 text-[#6B6D72]" />
                    </div>
                    <div>
                      <p className="font-ui text-sm font-semibold text-[#0E0F11]">
                        Om Upadhyay
                      </p>
                      <p className="font-mono text-[11px] text-[#6B6D72]">
                        Drop profile.jpg into public/images/
                      </p>
                    </div>
                  </div>
                  <div className="w-full text-center font-mono text-[11px] text-[#6B6D72]">
                    MNNIT ALLAHABAD
                  </div>
                </div>
              )}

              {/* Hover Badge Indicating Replaceable Photo Spot */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#FAFAF8]/90 backdrop-blur-sm border border-[#E5E7EB] rounded-lg px-2.5 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center justify-between text-[10px] font-mono text-[#6B6D72]">
                <span>Photo frame</span>
                <span>public/images/profile.jpg</span>
              </div>
            </div>

            {/* Photo Metadata Caption (Matches Image 3) */}
            <div className="w-full max-w-[340px] mt-3.5 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#6B6D72] uppercase tracking-wider">
              <span className="flex items-center gap-1.5 shrink-0">
                <MapPin className="w-3 h-3 text-[#0E0F11]" />
                <span>PRAYAGRAJ, INDIA</span>
              </span>
              <span className="text-right text-[#8E9096]">25.43° N, 81.84° E · 2026</span>
            </div>
          </div>

          {/* Right Column: Editorial Paragraph & 3 Metadata Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full pt-1">
            {/* Primary Editorial Quote / Statement */}
            <p className="reveal-statement font-serif-display text-2xl sm:text-3xl lg:text-[33px] leading-[1.32] text-[#0E0F11] font-normal mb-10 sm:mb-12">
              I work across the full depth of modern software—from the distributed database transaction to the pixel on screen.{" "}
              <span className="text-[#6B6D72]">
                Most products lose their momentum in the gap between the two, so I build on both sides of it and keep the system fast, resilient, and intuitive.
              </span>
            </p>

            {/* Three Metadata Columns with Fine Top Divider (Matches Image 3) */}
            <div className="about-facts pt-8 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 font-ui">
              {/* Column 1: BASED */}
              <div className="reveal-fact">
                <span className="block font-mono text-[11px] text-[#6B6D72] uppercase tracking-[0.14em] mb-2 font-medium">
                  BASED
                </span>
                <p className="text-sm font-medium text-[#0E0F11] leading-relaxed">
                  Prayagraj, India. MNNIT Allahabad. Open for global remote &amp; onsite roles.
                </p>
              </div>

              {/* Column 2: EDUCATION */}
              <div className="reveal-fact">
                <span className="block font-mono text-[11px] text-[#6B6D72] uppercase tracking-[0.14em] mb-2 font-medium">
                  EDUCATION
                </span>
                <p className="text-sm font-medium text-[#0E0F11] leading-relaxed">
                  B.Tech in Computer Science (2025–2029). Academic Standing: 8.82 CGPA.
                </p>
              </div>

              {/* Column 3: CORE STACK */}
              <div className="reveal-fact">
                <span className="block font-mono text-[11px] text-[#6B6D72] uppercase tracking-[0.14em] mb-2 font-medium">
                  CORE STACK
                </span>
                <p className="text-sm font-medium text-[#0E0F11] leading-relaxed">
                  React, Next.js, Node.js, Express, PostgreSQL, Redis, Python, Three.js.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Colossal Stat Figures (Slow Brightness Illumination) */}
        <div className="about-stats pt-10 sm:pt-12 border-t border-[#E5E7EB] grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Stat 1: CGPA */}
          <div className="reveal-stat flex flex-col">
            <span className="font-serif-display text-5xl sm:text-6xl lg:text-[76px] text-[#0E0F11] font-normal leading-none mb-3">
              8.82
            </span>
            <p className="font-mono text-[11px] text-[#6B6D72] uppercase tracking-wider leading-snug">
              CGPA AT MNNIT ALLAHABAD, TOP ACADEMIC STANDING IN COMPUTER SCIENCE
            </p>
          </div>

          {/* Stat 2: Problems Solved */}
          <div className="reveal-stat flex flex-col">
            <span className="font-serif-display text-5xl sm:text-6xl lg:text-[76px] text-[#0E0F11] font-normal leading-none mb-3">
              600+
            </span>
            <p className="font-mono text-[11px] text-[#6B6D72] uppercase tracking-wider leading-snug">
              DATA STRUCTURE &amp; ALGORITHM PROBLEMS SOLVED ACROSS PLATFORMS
            </p>
          </div>

          {/* Stat 3: CodeChef Rating */}
          <div className="reveal-stat flex flex-col">
            <span className="font-serif-display text-5xl sm:text-6xl lg:text-[76px] text-[#0E0F11] font-normal leading-none mb-3">
              2★
            </span>
            <p className="font-mono text-[11px] text-[#6B6D72] uppercase tracking-wider leading-snug">
              CODECHEF RATING (MAX 1400+) · CODEFORCES 1100+ RATING
            </p>
          </div>

          {/* Stat 4: Avishkar Runner Up */}
          <div className="reveal-stat flex flex-col">
            <span className="font-serif-display text-5xl sm:text-6xl lg:text-[76px] text-[#0E0F11] font-normal leading-none mb-3">
              2nd
            </span>
            <p className="font-mono text-[11px] text-[#6B6D72] uppercase tracking-wider leading-snug">
              RUNNER-UP AT AVISHKAR 2025 (WEB DESIGN &amp; SOFTABLITZ DEVELOPER TRACKS)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
