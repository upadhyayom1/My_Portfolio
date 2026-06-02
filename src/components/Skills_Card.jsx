import React from 'react'

const Skills_Card = (props) => {
  return (
    <div className="card bg-[#161616] p-5 rounded-lg  border border-[#2d2d2d]
    shadow-md
    transition-all duration-300
    hover:-translate-y-2
    hover:border-white/20
    hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]">
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p className="text-gray-400">
        {props.description}
      </p>
    </div>
  )
}

export default Skills_Card
