import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "work", "about", "expertise", "experience", "achievements", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work", id: "work" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#expertise", id: "expertise" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#E5E7EB] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Custom Typographic Wordmark */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-ui text-[#0E0F11] font-semibold text-base sm:text-lg tracking-tight"
        >
          <span className="w-2 h-2 rounded-full bg-[#0E0F11] group-hover:bg-[#17804A] transition-colors" />
          <span>{personalInfo.wordmark}</span>
        </a>

        {/* Center / Right: Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-ui text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-[#0E0F11] font-medium"
                    : "text-[#6B6D72] hover:text-[#0E0F11]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0E0F11] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Far Right: Resume Button */}
        <div className="hidden md:flex items-center">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-[6px] bg-[#0E0F11] text-[#FAFAF8] font-ui text-xs font-medium hover:bg-[#232529] transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 h-8 px-2.5 rounded-[5px] bg-[#0E0F11] text-[#FAFAF8] font-ui text-xs font-medium"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded text-[#0E0F11] hover:bg-[#F0F0ED] transition-colors"
            aria-label="Toggle navigation menu"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F7F5] border-b border-[#E5E7EB] px-6 py-4 shadow-sm animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 font-ui text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#0E0F11] hover:text-[#17804A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
