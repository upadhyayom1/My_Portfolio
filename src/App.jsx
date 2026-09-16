import { useEffect, useState } from "react";
import Header from "./components/Header";
import Section1 from "./components/section1";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = `${(totalScroll / windowHeight) * 100}%`;
        setScrollProgress(scroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic top scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: scrollProgress }}
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <div id="home">
          <Section1 />
        </div>

        {/* Featured Projects Section */}
        <div id="services">
          <Services />
        </div>

        {/* Technical Skills Section */}
        <Skills />

        {/* Competitive Programming & Achievements Section */}
        <Achievements />

        {/* About, Academics & Leadership Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
