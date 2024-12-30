import React from 'react'
import { FaCss3,  FaHtml5, FaJs, FaReact, FaGithub} from "react-icons/fa";
import { RiTailwindCssFill} from "react-icons/ri"
import { SiAppwrite, SiFirebase, SiRedux  } from "react-icons/si";
function Skills() {
  return (
  <div id="Skills" className="p-10 md:p-24">
    <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
     <div className="flex flex-wrap items-center justify-around">
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            < RiTailwindCssFill color="#1572B6" size={50} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#61DAFB" size={50} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="#61DAFB" size={50} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#F7DF1E" size={50} />
            </span>


            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAppwrite color="#F7DF1E" size={50} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiFirebase color="#F7DF1E" size={50} />
            </span>

            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedux color="#F7DF1E" size={50} />
            </span>

          </div>
     </div>
 </div>
  )
}

export default Skills