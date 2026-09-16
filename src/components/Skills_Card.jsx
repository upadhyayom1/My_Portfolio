
const Skills_Card = ({ category, items, icon: CategoryIcon }) => {
  return (
    <div className="group rounded-2xl bg-[#121422]/80 border border-white/10 hover:border-indigo-500/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(99,102,241,0.12)]">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
          {CategoryIcon && <CategoryIcon />}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
            {category}
          </h3>
          <p className="text-[11px] font-mono text-gray-400">
            {items.length} Technologies
          </p>
        </div>
      </div>

      {/* Skills list / pills */}
      <div className="flex flex-wrap gap-2.5">
        {items.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#181b2c] border border-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/10 text-gray-200 hover:text-white transition-all duration-200 group/pill"
            >
              {Icon && (
                <Icon
                  className="text-base text-gray-400 group-hover/pill:text-indigo-400 transition-colors"
                  style={{ color: skill.color }}
                />
              )}
              <span className="text-xs font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills_Card;
