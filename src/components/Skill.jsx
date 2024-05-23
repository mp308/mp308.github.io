import React, { Component } from 'react'

//react icon
import { FaGithub,FaPython,FaReact ,FaHtml5 ,FaCss3Alt,FaJava } from "react-icons/fa"; 
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill,RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";


export class Skill extends Component {
  render() {
    return (
      <>
      <div className='bg-[#1a1a1a] text-white'>
      <div className='p-9 rounded-full '>
            <div className="p-9 bg-yellow-900 rounded-t-3xl">
            <h1 className="font-bebas text-9xl underline decoration-dashed text-amber-500 pb-8">
                Soft Skills
            </h1>
            <p className="font-mitr font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit exercitationem iusto ipsam cupiditate ea saepe mollitia, nemo minus expedita! Neque est facere officiis velit dolor incidunt rerum iusto, minus quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam dolor nulla aliquam culpa, autem, eligendi quidem dolore sequi quisquam, a doloremque voluptatibus ex obcaecati consequuntur laudantium quaerat porro aspernatur.
            </p>
            </div>
            <div className="p-9 bg-yellow-800 text-right">
            <h1 className="font-bebas text-9xl underline decoration-dotted text-amber-700 pb-8">
                Hard Skills
            </h1>
            <p className="font-mitr font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit exercitationem iusto ipsam cupiditate ea saepe mollitia, nemo minus expedita! Neque est facere officiis velit dolor incidunt rerum iusto, minus quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam dolor nulla aliquam culpa, autem, eligendi quidem dolore sequi quisquam, a doloremque voluptatibus ex obcaecati consequuntur laudantium quaerat porro aspernatur.
            </p>
            </div>
            <div className="p-9 bg-yellow-700 rounded-b-3xl">
            <h1 className="font-bebas text-9xl underline decoration-dashed text-amber-950 pb-8">
                Experience
            </h1>
            <div className='flex space-x-4 text-5xl pb-7 '>
              <FaGithub />
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
              <FaReact />
              <RiTailwindCssFill />
              <RiFlutterFill />
              <FaPython />
              <FaJava />
              <SiCplusplus />
            </div>
            <p className="font-mitr font-thin">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit exercitationem iusto ipsam cupiditate ea saepe mollitia, nemo minus expedita! Neque est facere officiis velit dolor incidunt rerum iusto, minus quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam dolor nulla aliquam culpa, autem, eligendi quidem dolore sequi quisquam, a doloremque voluptatibus ex obcaecati consequuntur laudantium quaerat porro aspernatur.
            </p>
            </div>
        </div>
        </div>
      </>
    )
  }
}

export default Skill
