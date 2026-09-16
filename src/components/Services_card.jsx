import { FaGithub, FaArrowRight, FaCheck } from "react-icons/fa6";

const Services_card = ({
  title,
  subtitle,
  description,
  bullets = [],
  tags = [],
  link,
  projectName,
  featured = false,
  badge = "Full Stack",
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-[#121422]/90 border border-white/10 hover:border-indigo-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] overflow-hidden">
      {/* Top subtle highlight glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Background ambient gradient flare */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500" />

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            {badge}
          </span>
          {featured && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
              ⭐ Featured in CV
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-mono text-indigo-400 mb-4 tracking-wide font-medium">
            {subtitle}
          </p>
        )}

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Bullet Points from CV */}
        {bullets.length > 0 && (
          <ul className="space-y-2.5 mb-6">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-normal">
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">
                  <FaCheck />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/10">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#1a1d2e] text-gray-300 border border-white/5 group-hover:border-indigo-500/30 group-hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-indigo-600 border border-white/10 hover:border-indigo-500 text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/30"
          >
            <FaGithub className="text-base" />
            <span>View Repository</span>
            <FaArrowRight className="text-xs ml-1 group-hover:translate-x-1 transition-transform" />
          </a>

          <span className="text-xs font-mono text-gray-400">
            {projectName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services_card;
