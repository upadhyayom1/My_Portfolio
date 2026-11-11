import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Find all elements marked for reveal or headings/paragraphs
      const revealElements = container.querySelectorAll(
        "[data-reveal], .reveal-text, h2, h3, .section-eyebrow, .editorial-quote"
      );

      revealElements.forEach((el) => {
        // Avoid animating elements that opted out
        if (el.hasAttribute("data-no-reveal")) return;

        gsap.fromTo(
          el,
          {
            opacity: 0.15,
            filter: "brightness(0.35) blur(6px)",
            y: options.y || 24,
          },
          {
            opacity: 1,
            filter: "brightness(1) blur(0px)",
            y: 0,
            duration: options.duration || 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: options.start || "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [options]);

  return containerRef;
}

export default useScrollReveal;

