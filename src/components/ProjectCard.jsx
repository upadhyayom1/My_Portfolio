import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const restingRotations = [-1.5, 1.2, -0.9, 1.4];

export default function ProjectCard({ project, index, onOpenModal }) {
  const restingRotation = restingRotations[index % restingRotations.length];
  const cardRef = useRef(null);
  const hangerRef = useRef(null);
  const physicsRef = useRef({
    th: restingRotation,
    om: 0,
    targetAngle: restingRotation,
    tiltY: 0,
    targetTiltY: 0,
    isHovered: false,
    lastClientX: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const card = cardRef.current;
    const hanger = hangerRef.current;
    if (!card) return;

    const p = physicsRef.current;
    p.th = restingRotation;
    p.targetAngle = restingRotation;

    if (isReduced) {
      card.style.transform = `rotate(${restingRotation}deg)`;
      return;
    }

    let lastTime = performance.now();
    let animId;
    const phase = index * 1.85;

    // Continuous 120fps/60fps Spring Simulation
    function tick(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;

      const tension = p.isHovered ? 85 : 48;
      const damping = p.isHovered ? 7.5 : 4.6;

      // Harmonic pendulum spring: a = -k*(theta - target) - c*omega
      const a = -tension * (p.th - p.targetAngle) - damping * p.om;
      p.om += a * dt;
      p.th += p.om * dt;

      // Smooth lerp for 3D tilt Y
      p.tiltY += (p.targetTiltY - p.tiltY) * Math.min(1, dt * 14);

      // Subtle organic breeze when at rest
      const idleBreeze = p.isHovered ? 0 : Math.sin(now * 0.0013 + phase) * 0.38;
      const totalRotation = p.th + idleBreeze;

      // Direct GPU transform update: Snap tilt to 0 when idle to preserve crisp subpixel font rendering
      if (!p.isHovered && Math.abs(p.tiltY) < 0.02) {
        p.tiltY = 0;
      }

      if (p.isHovered || Math.abs(p.tiltY) > 0.01) {
        card.style.transform = `perspective(1200px) rotate3d(0, 0, 1, ${totalRotation.toFixed(3)}deg) rotate3d(0, 1, 0, ${p.tiltY.toFixed(2)}deg) translate3d(0, ${p.isHovered ? "-6px" : "0px"}, 0)`;
      } else {
        // At rest: pure 2D transform preserves 100% sharp native subpixel font rendering
        card.style.transform = `rotate(${totalRotation.toFixed(3)}deg)`;
      }

      if (hanger) {
        hanger.style.transform = `rotate(${(totalRotation * 0.55).toFixed(3)}deg) scaleY(${p.isHovered ? 1.15 : 1})`;
      }

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [restingRotation, index]);

  const handlePointerEnter = () => {
    physicsRef.current.isHovered = true;
  };

  const handlePointerMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const p = physicsRef.current;
    p.isHovered = true;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));

    // Cursor movement impulse adds dynamic sway
    if (p.lastClientX != null) {
      const dx = e.clientX - p.lastClientX;
      p.om += Math.max(-16, Math.min(16, dx * 1.6));
    }
    p.lastClientX = e.clientX;

    p.targetAngle = restingRotation + normX * 6.5;
    p.targetTiltY = normX * 8.5;
  };

  const handlePointerLeave = () => {
    const p = physicsRef.current;
    p.isHovered = false;
    p.lastClientX = null;
    p.targetAngle = restingRotation;
    p.targetTiltY = 0;
  };

  return (
    <div className="relative flex flex-col items-center group w-full flex-shrink-0">
      {/* Wire Attachment: Ring Clip and Hanger Wire */}
      <div className="relative flex flex-col items-center z-20 pointer-events-none">
        {/* Metal Clip Ring clasping the wire */}
        <div className="w-2.5 h-2.5 rounded-full border border-[#4B4D52] bg-[#FFFFFF] shadow-xs mb-[-2px]" />
        {/* Vertical hanger wire string */}
        <div
          ref={hangerRef}
          className="w-[1.5px] h-6 bg-[#8E9096] mb-[-1px] origin-top wire-hanger-pin will-change-transform"
        />
      </div>

      {/* The Suspended Clinging Specimen Card */}
      <article
        ref={cardRef}
        onClick={() => onOpenModal(project)}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          transformOrigin: "50% 0%",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
          backfaceVisibility: "hidden",
        }}
        className="project-hanging-card w-full max-w-[290px] xl:max-w-[310px] bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#D7D9DE] rounded-xl p-4 sm:p-5 shadow-[0_10px_25px_rgba(14,15,17,0.05),0_2px_6px_rgba(14,15,17,0.03)] hover:shadow-[0_24px_48px_rgba(14,15,17,0.14),0_6px_16px_rgba(14,15,17,0.06)] cursor-pointer flex flex-col justify-between select-none will-change-transform transition-shadow duration-300"
      >
        <div>
          {/* Top Eyelet Hole */}
          <div className="flex justify-center mb-3">
            <div className="w-3.5 h-3.5 rounded-full border border-[#D7D9DE] bg-[#F7F7F5] shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FAFAF8] border border-[#D7D9DE]" />
            </div>
          </div>

          {/* Large Visual Preview Area */}
          <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden bg-[#F0F0ED] border border-[#E5E7EB]/60 mb-4">
            <img
              src={project.previewImage}
              alt={`${project.title} Preview`}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            {/* Vividsites Editorial Hover Action Pill */}
            <div className="absolute inset-0 bg-[#0E0F11]/0 group-hover:bg-[#0E0F11]/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 btn-editorial !h-8 !pl-3.5 !pr-1 !text-[11px] !border-white/20 bg-[#0E0F11]/90 text-[#FAFAF8] shadow-lg backdrop-blur-sm">
                <span className="mr-1.5 font-medium">Case Study</span>
                <i className="btn-icon-bubble !w-6 !h-6 !bg-white/20 text-[#FAFAF8]">
                  <ArrowUpRight className="w-3 h-3" />
                </i>
              </span>
            </div>
          </div>

          {/* Metadata Row: Category & Year */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#6B6D72] mb-1.5">
            <span className="tracking-wider uppercase font-medium">{project.category}</span>
            <span>{project.period?.split("–")[1]?.trim() || "2025"}</span>
          </div>

          {/* Project Title (Serif Editorial) */}
          <h3 className="font-serif-display text-2xl text-[#0E0F11] font-medium leading-tight group-hover:text-[#17804A] transition-colors duration-200 mb-2">
            {project.title}
          </h3>

          {/* Editorial Summary */}
          <p className="font-body text-[#6B6D72] text-[13px] leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>
        </div>

        {/* Card Footer: Tags & Quick GitHub */}
        <div className="pt-3 border-t border-[#F0F0ED] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 text-[11px] text-[#6B6D72]">
            <span>{project.stack[0]}</span>
            <span>·</span>
            <span>{project.stack[1]}</span>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#6B6D72] hover:text-[#0E0F11] hover:bg-[#F0F0ED] transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
        </div>
      </article>
    </div>
  );
}
