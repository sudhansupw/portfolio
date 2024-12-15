import React from 'react'
import ProjectCard from './ProjectCard'
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import todo from "../../assets/todo.jpg";
import realEstate from "../../assets/real-estate.jpg";
import chatApp from "../../assets/ai-chatbot-app.png";


function Projects() {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
       <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
       <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard  title="MegaProject"
          main="this is a bloggin website created in react js and used some component library "
          image={bannerImg}
        />
        <ProjectCard  title="Real-estate"
          main="this is a real-estate website created in react js and used some component library"
          image={realEstate}
        />
        <ProjectCard  title="Phoenix"
          main="this is AI Phoenix chat cloning app using react Js & tailwind css & gemini API"
          image={chatApp}
        />
        <ProjectCard  title="Todo"
          main="Build a simple To-Do app with React.js and Tailwind CSS for efficient task management and styling."
          image={todo}
        />

       </div>
    </div>
  )
}

export default Projects