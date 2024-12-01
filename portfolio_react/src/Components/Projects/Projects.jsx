import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
       <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
       <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard  title="MegaProject"
          main="this is a bloggin website created in react js and used some component library "
        />
       </div>
    </div>
  )
}

export default Projects