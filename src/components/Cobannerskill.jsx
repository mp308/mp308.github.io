import React from 'react';
import walk from "../assets/images/Banner/People_Drinking_Whey_Protein.jpg"

import { FaGithub, FaPython, FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus, SiArduino, SiMysql, SiMongodb, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro } from "react-icons/si";


function CoBannerskill() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center  p-6 md:p-12 rounded-lg  max-w-4xl mx-auto">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={walk} // Replace with your image path
                        alt="Fitness and Health Products"
                        className="rounded-lg w-full h-auto"
                    />
                </div>

                {/* Right Text Section */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                    <h2 className="text-red-600 font-bold text-xl mb-4 font-prompt">My Programing language</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start font-prompt">
                            <span className="text-red-600 font-bold mr-2">—</span> HTML, CSS , Java Script, Type Script , Java, C# , Python, Dart  , SQL , PL SQL
                        </li>
                        <li className="flex items-start font-prompt">
                            <span className="text-red-600 font-bold mr-2">—</span>  React , Angular , Bootstrap , Tailwind , Node JS , .NET C# , SpringBoots , Flutter
                        </li>
                        <li className="flex items-start font-prompt">
                            <span className="text-red-600 font-bold mr-2">—</span> Git , GitHub , GitLab
                        </li>
                        <li className="flex items-start font-prompt">
                            <span className="text-red-600 font-bold mr-2">—</span> Mogo DB , My SQL , PostgreSQL
                        </li>
                        <li className="flex items-start font-prompt">
                            <span className="text-red-600 font-bold mr-2">—</span> AWS Clound , FireBase
                        </li>
                    </ul>
                </div>


            </div> <div className='flex overflow-hidden space-x-4 group m-8'>
                <div className='flex space-x-4 text-5xl pb-7 animate-loopscroll'>
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
                    <FaNodeJs />
                    <SiArduino />
                    <SiMysql />
                    <SiMongodb />
                    <FaDocker />
                    <SiAdobephotoshop />
                    <SiAdobeillustrator />
                    <SiAdobepremierepro />
                </div>

                <div className='flex space-x-4 text-5xl pb-7 animate-loopscroll' aria-hidden="true">
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
                    <FaNodeJs />
                    <SiArduino />
                    <SiMysql />
                    <SiMongodb />
                    <FaDocker />
                    <SiAdobephotoshop />
                    <SiAdobeillustrator />
                    <SiAdobepremierepro />
                </div>

                <div className='flex space-x-4 text-5xl pb-7 animate-loopscroll' aria-hidden="true">
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
                    <FaNodeJs />
                    <SiArduino />
                    <SiMysql />
                    <SiMongodb />
                    <FaDocker />
                    <SiAdobephotoshop />
                    <SiAdobeillustrator />
                    <SiAdobepremierepro />
                </div>
            </div>

        </>
    );
}

export default CoBannerskill;
