import React from "react";
import Header from "./components/Header";
import Section1 from "./components/section1";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
const App = () => {
  return (
    <div>
      <Header />
      <section id="home" className="mt-20">
        {" "}
        <Section1 />{" "}
      </section>
      <section id="services" className="mt-20">
        <Services />
      </section>
      <section id="about" className="mt-20">
        <About />
      </section>
      <section id="skills" className="mt-20">
        <Skills />
      </section>
    </div>
  );
};

export default App;
