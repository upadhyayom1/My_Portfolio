import React from "react";
import Services_card from "./Services_card";

const Services = () => {
  return (
    <div className="flex flex-col items-center ">
      {/* Tailwind example */}
      <h2 className=" mt-10 flex justify-center text-3xl font-bold">
        Projects
      </h2>
      <p className="  text-lg text-center">
        These projects represent my journey as a developer, where I explore
        modern technologies, solve problems, and transform ideas into functional
        applications.
      </p>
      <section id="services" className="services grid grid-cols-2 gap-5 m-5">
        <Services_card
          title="MNNIT CIVIC ISSUE REPORTER"
          description="Developed a web platform that enables users to report civic issues such as damaged roads, streetlight failures, water leakage, and sanitation problems.It helps helping track and resolve issues more efficiently."
          link="https://github.com/upadhyayom1/MNNIT_CIVIC_ISSUE_REPORTER"
          projectName="MNNIT CIVIC ISSUE REPORTER"
        />
        <Services_card
          title="RepoXray"
          description="Built an AI-powered repository analysis tool that helps developers understand GitHub projects quickly. RepoXray analyzes repository structure, technologies, and code organization to provide meaningful insights, making it easier to explore and evaluate open-source projects."
          link="https://github.com/Aayush20253534/RepoXray"
          projectName="RepoXray"
        />
      </section>
    </div>
  );
};

export default Services;
