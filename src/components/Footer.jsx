import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted for Indian Standard Time (Asia/Kolkata)
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setIstTime(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[#E5E7EB] bg-[#F7F7F5] font-mono text-xs text-[#6B6D72]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Colophon & Identity */}
          <div className="space-y-1">
            <p className="text-[#0E0F11] font-ui font-semibold text-sm">
              {personalInfo.name}
            </p>
            <p className="text-[#6B6D72]">
              B.Tech. Computer Science &amp; Engineering · MNNIT Allahabad
            </p>
          </div>

          {/* Time & Location */}
          <div className="flex items-center gap-6">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#6B6D72]">
                Prayagraj, India
              </span>
              <span className="text-[#0E0F11] font-mono font-medium">
                {istTime || "Asia/Kolkata"}
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[5px] bg-[#FFFFFF] border border-[#E5E7EB] text-[#0E0F11] hover:border-[#0E0F11] transition-colors"
              type="button"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Typography note */}
        <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-[#6B6D72]">
          <p>
            Designed &amp; developed with Swiss editorial discipline. Set in Inter Tight, Onest &amp; DM Mono.
          </p>
          <p>
            © {new Date().getFullYear()} Om Upadhyay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
