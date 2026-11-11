import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import gsap from "gsap";

const restingRotations = [-1.5, 1.2, -0.9, 1.4];

export default function ProjectCard({ project, index, onOpenModal }) {
  const restingRotation = restingRotations[index % restingRotations.length];
  const cardRef = useRef(null);
  const hangerRef = useRef(null);
  const lastXRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set initial transform origin at top center so it clings and swings from the wire
    gsap.set(card, {
      transformOrigin: "50% 0%",
      rotation: restingRotation,
      transformPerspective: 1000,
    });
  }, [restingRotation]);

  const handlePointerMove = (e) => {
    const card = cardRef.current;
    const hanger = hangerRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2); // -1 to +1

    // Calculate cursor velocity impulse for dynamic sway
    let impulse = 0;
    if (lastXRef.current != null) {
      const dx = e.clientX - lastXRef.current;
      impulse = Math.max(-4, Math.min(4, dx * 0.2));
    }
    lastXRef.current = e.clientX;

    const swingAngle = Math.max(-9, Math.min(9, restingRotation + normX * 5.5 + impulse));
    const tiltY = normX * 6;

    gsap.to(card, {
      rotation: swingAngle,
      rotateY: tiltY,
      y: -6,
      duration: 0.22,
      ease: "power2.out",
      overwrite: "auto",
    });

    if (hanger) {
      gsap.to(hanger, {
        scaleY: 1.15,
        rotation: swingAngle * 0.5,
        duration: 0.22,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    const hanger = hangerRef.current;
    lastXRef.current = null;
    if (!card) return;

    // Elastic pendulum oscillation back to resting angle (Vividsites clinging tag physics)
    gsap.to(card, {
      rotation: restingRotation,
      rotateY: 0,
      y: 0,
      duration: 1.35,
      ease: "elastic.out(1.2, 0.28)",
      overwrite: "auto",
    });

    if (hanger) {
      gsap.to(hanger, {
        scaleY: 1,
        rotation: 0,
        duration: 1.1,
        ease: "elastic.out(1.1, 0.3)",
        overwrite: "auto",
      });
    }
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
          className="w-[1.5px] h-6 bg-[#8E9096] mb-[-1px] origin-top wire-hanger-pin"
        />
      </div>

      {/* The Suspended Clinging Specimen Card */}
      <article
        ref={cardRef}
        onClick={() => onOpenModal(project)}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="project-hanging-card w-full max-w-[290px] xl:max-w-[310px] bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#D7D9DE] rounded-xl p-4 sm:p-5 shadow-[0_10px_25px_rgba(14,15,17,0.05),0_2px_6px_rgba(14,15,17,0.03)] hover:shadow-[0_24px_48px_rgba(14,15,17,0.12),0_4px_12px_rgba(14,15,17,0.06)] cursor-pointer flex flex-col justify-between select-none will-change-transform"
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
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
            {/* Subtle Hover Action Badge */}
            <div className="absolute inset-0 bg-[#0E0F11]/0 group-hover:bg-[#0E0F11]/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0E0F11] text-[#FAFAF8] font-ui text-[11px] font-medium shadow-md">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Metadata Row: Category & Year */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#6B6D72] mb-1.5">
            <span className="tracking-wider uppercase font-medium">{project.category}</span>
            <span>{project.period?.split("–")[1]?.trim() || "2025"}</span>
          </div>

          {/* Project Title (Serif Editorial) */}
          <h3 className="font-serif-display text-2xl text-[#0E0F11] font-medium leading-tight group-hover:text-[#17804A] transition-colors mb-2">
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
            className="inline-flex items-center gap-1 text-[#6B6D72] hover:text-[#0E0F11] transition-colors p-1"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
        </div>
      </article>
    </div>
  );
}
