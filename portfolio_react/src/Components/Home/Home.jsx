import React from 'react'
import avatarImg from "../../assets/7358602-removebg-preview.png"
import TextChange from '../TextChange'


function Home() {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
       <div className='md:w-2/4 md: pt-10'>
          <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            <TextChange />
            </h1>
            <p>I have a passion for web
                development and have honed my skills in HTML, CSS, Tailwind CSS,
                JavaScript, Appwrite, Firebase, Redux & React. I'm enthusiastic about exploring
                new technologies and solving real-world problems through innovative
                solutions. I'm excited about the opportunity to contribute to meaningful
                projects and continue growing as a developer.</p>
           <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact Me
           </button>
       </div>
       <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  )
}

export default Home