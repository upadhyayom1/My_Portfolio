import React from 'react'
import Skills_Card from './Skills_Card'
const Skills = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl font-bold">Skills</h1>
      <p className="text-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur?
      </p>
     <div className="cards grid grid-cols-4 gap-5 ml-20 mr-20 mt-10 mb-20 ">
      <Skills_Card title="JavaScript" description="Proficient in JavaScript and its frameworks like React and Node.js." />
      <Skills_Card title="Python" description="Experienced in Python for web development and data analysis." />
      <Skills_Card title="C++" description="Skilled in C++ programming." />
      <Skills_Card title="Git" description="Familiar with version control using Git and GitHub." />

     </div> 
    </div>
  )
}

export default Skills
