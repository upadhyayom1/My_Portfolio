export default function SectionHeading({ number, title, subtitle, className = "" }) {
  return (
    <div className={`mb-12 sm:mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs sm:text-sm font-medium tracking-[0.18em] text-[#6B6D72] uppercase">
          {number}
        </span>
        <div className="h-px w-10 sm:w-16 bg-[#D7D9DE]" />
      </div>
      <h2 className="font-heading-lg text-[#0E0F11] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-[#6B6D72] max-w-2xl mt-3 text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
