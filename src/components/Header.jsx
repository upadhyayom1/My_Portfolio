import { useState, useEffect } from "react";
import { FaBars, FaXmark, FaDownload, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "projects", "skills", "achievements", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Om Upadhyay Portfolio"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
            <div className="w-full h-full bg-[#0d0f17] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-200">
                OU
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              Om Upadhyay
            </span>
            <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              CSE @ MNNIT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-[#131622]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner shadow-white/5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                activeSection === link.id
                  ? "text-white bg-indigo-600/40 border border-indigo-500/30 shadow-sm shadow-indigo-500/20"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Om_Upadhyay_Resume.pdf"
            download="Om_Upadhyay_Resume.pdf"
            className="flex items-center gap-2 text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 px-3.5 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            title="Download authentic CV"
          >
            <FaDownload className="text-indigo-400 text-xs" />
            <span>Download CV</span>
          </a>

          <a
            href="https://www.linkedin.com/in/om-upadhyay-772787371/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 px-4 py-2 rounded-xl transition-all duration-200 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            <FaLinkedin className="text-sm" />
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/Om_Upadhyay_Resume.pdf"
            download="Om_Upadhyay_Resume.pdf"
            className="p-2 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-lg text-sm"
            aria-label="Download CV"
          >
            <FaDownload />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-gray-300 hover:text-white bg-[#131622] border border-white/10 rounded-xl focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#0d0f17]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-indigo-600/30 text-white border border-indigo-500/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="/Om_Upadhyay_Resume.pdf"
                download="Om_Upadhyay_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-200"
              >
                <FaDownload className="text-indigo-400" />
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/om-upadhyay-772787371/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-indigo-600 text-sm font-medium text-white shadow-md shadow-indigo-600/30"
              >
                <FaLinkedin />
                Let's Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
