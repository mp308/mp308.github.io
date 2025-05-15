import React, { Component } from 'react';
import { RxDoubleArrowDown } from "react-icons/rx";

import iot1 from '../assets/images/HardSkills/iot1.jpg';
import iot2 from '../assets/images/HardSkills/iot2.jpg';
import iot3 from '../assets/images/HardSkills/iot3.jpg';

import data01 from '../assets/images/HardSkills/data01.jpg';
import data02 from '../assets/images/HardSkills/data02.jpg';
import data03 from '../assets/images/HardSkills/data03.jpg';

import Iot01 from '../assets/images/HardSkills/esp10.jpg';
import Iot02 from '../assets/images/HardSkills/netpie.jpg';
import Iot03 from '../assets/images/HardSkills/wokwi.jpg';
import Iot04 from '../assets/images/HardSkills/moblie.jpg';


import sq01 from '../assets/images/HardSkills/sq1.jpg';
import sq02 from '../assets/images/HardSkills/sq2.jpg';
import sq03 from '../assets/images/HardSkills/sq3.jpg';
import sq04 from '../assets/images/HardSkills/sq4.jpg';
import sq05 from '../assets/images/HardSkills/sq5.jpg';
import sq06 from '../assets/images/HardSkills/sq6.jpg';

import FIXMAX from '../assets/images/HardSkills/FIXMAX.jpg';

import logotk from '../assets/images/HardSkills/logotk.png';

import pokemon from '../assets/images/HardSkills/pokemon.jpg';
import pokemon2 from '../assets/images/HardSkills/pokemon2.jpg';
import pokemon3 from '../assets/images/HardSkills/pokemon3.jpg';

import Gamedev from '../assets/images/HardSkills/Gamedev.jpg';

import mala from '../assets/images/HardSkills/mala.jpg';

import Banner from '../assets/images/content1.jpg';




const projects = [
  {
    title: 'Fullstack Developer Intern - Cooperative Education Program',
    Indicate: 'I',
    category: '- Internship',
    modaldesc: 'SoftSquare International Co., Ltd. Customer Relationship Management Developed the front-end of an enterprise-grade Customer Relationship Management System with React.js, enabling secure, high-volume internal data dispatch. Deployed UAT builds through an automated CI/CD pipeline, delivering optimized artifacts to AWS Cloud Human Resources Management System Developed an enterprise-scale HRMS with Angular (frontend) and C# .NET (backend), securely supporting of employees and delivering key modules for Training  Development, Organization Structure management, and Personnel Movement. Integrated SonarQube in the CI pipeline to enforce coding standards and proactively detect bugs & code smells before deployment.',
    desc: 'SoftSquare International Co., Ltd. External Project : Customer Relationship Management (CRM) Web Application . Develop the frontend interface using React.js Internal Project : Human Resources Management System (HRMS) Web Application . Developed a full-stack web application with Angular for the frontend and C# .NET for the backend.',
    thumb: sq01,
    images: [sq01, sq05, sq02],
    link: 'https://drive.google.com/file/d/1gkwU4b7RGl2MvhN17bHjg7STjs6ZV8pK/view?usp=sharing',
  },
  {
    title: 'Fixmax Performance Web Application',
    Indicate: 'P',
    category: '- Project',
    modaldesc: 'I designed comprehensive system workflows, end-to-end UX/UI prototypes, and a relational database schema to map every entity and process flow before development. Building on this foundation, I delivered a capstone full-stack e-commerce web application React on the front end, Node.js on the back end, and Prisma ORM for type-safe data access featuring secure authentication, a password-reset workflow,a configurable product-discount module, real-time inventory management, an administrative dashboard, and PromptPay QR-code payment integration.',
    desc: 'Developed an full-stack e-commerce app for dietary supplements featuring real-time product CRUD, coupon discounts, authentication membership, and an admin dashboard built with React and Node.js.',
    thumb: FIXMAX,
    images: [FIXMAX],
    link: 'https://github.com/mp308/Project_IOT_HotelsTest.git',
  },
  {
    title: 'Smart-Home Prototype',
    Indicate: 'P',
    category: '- Project',
    modaldesc: 'Built an ESP32-based smart-home prototype that streams temperature, humidity, intrusion, and flame data via MQTT (NetPie) to Node-RED, where it is visualised, logged to MySQL, and triggers LINE alerts with relay/buzzer actuation added intuitive user interfaces a Vue.js web app for desktop control and a cross-platform Flutter mobile app for on-the-go access demonstrating that low-cost hardware and open-source tools can deliver a secure, responsive, and extensible smart-home solution.',
    desc: 'Built an ESP32-based smart-home prototype that streams temperature, humidity, intrusion, and flame data via MQTT (NetPie) to Node-RED, where it is visualised, logged to MySQL, and triggers LINE alerts with relay/buzzer actuation added intuitive user interfaces a Vue.js web app for desktop control and a cross-platform Flutter mobile app for on-the-go access demonstrating that low-cost hardware and open-source tools can deliver a secure, responsive, and extensible smart-home solution.',
    thumb: iot1,
    images: [iot1, iot2, iot3],
    link: 'https://github.com/mp308/Project_IOT_HotelsTest.git',
  },
  {
    title: 'ShabuMala Application',
    Indicate: 'P',
    category: '- Project',
    modaldesc: 'Developed FoodApps “ShabuMala,” a cross-platform mobile e-commerce application for restaurants built with Flutter and Firebase. The app offers real-time inventory control, secure user registration, seamless customer ordering, table-reservation functionality, an in-app rating & feedback module, and an admin back office that lets staff adjust stock levels and pricing with ease.',
    desc: 'Developed FoodApps a mobile e-commerce platform for restaurants that offers inventory control, customer ordering, user registration, an admin back office, and in-app feedback built with Flutter and Firebase.',
    thumb: mala,
    images: [mala],
    link: 'https://github.com/mp308/Project_Mobile_Dart-FoodApps.git',
  },
  {
    title: 'Truck Transport',
    Indicate: 'P',
    category: '- Project',
    modaldesc: 'Developed a full-stack transport e-commerce web application using HTML, CSS, and C# .NET, delivering complete CRUD functionality. The system records every transport job and presents them on an interactive dashboard',
    desc: 'Devloped an full-stack e-commerce app for Transport fully functional CRUD web application using HTML + CSS + .NET C#',
    thumb: logotk,
    images: [logotk],
    link: 'https://github.com/mp308/Project_ALDB_API-CRUD.git',
  },
  {
    title: 'Visualization Pokémon Dataset ( OpenHouse Project )',
    Indicate: 'P',
    category: '- Project',
    modaldesc: 'Data Visualization Pokémon Dataset 800 Records Utilized Looker Studio to create interactive dashboards and perform visual analysis on Pokémon data. Identified key insights ',
    desc: 'Data Visualization Pokémon Dataset 800 Records Utilized Looker Studio to create interactive dashboards and perform visual analysis on Pokémon data. Identified key insights ',
    thumb: pokemon,
    images: [pokemon, pokemon2, pokemon3],
    link: 'https://lookerstudio.google.com/reporting/2bca3bf2-7567-4482-9d04-dd3369029db7',
  },
  {
    title: 'Cleaning and Analysis Google Play Store Apps 2021 Dataset ( OpenHouse Project )',
    Indicate: 'P',
    category: '- Project',
    modaldesc: 'Data Cleaning and Analysis Google Play Store Apps (2021 Dataset) Performed data cleaning and exploratory analysis on a large-scale dataset with over 2.3 million records using Python (PySpark). Uncovered key insights into app categories',
    desc: 'Data Cleaning and Analysis Google Play Store Apps (2021 Dataset) Performed data cleaning and exploratory analysis on a large-scale dataset with over 2.3 million records using Python (PySpark). Uncovered key insights into app categories',
    thumb: data01,
    images: [data01, data02, data03],
    link: 'https://github.com/mp308/CleanData-Project.git',
  },
  {
    title: 'Recycle Boy Game',
    Indicate: 'P',
    category: '- Project',
    modaldesc: 'Recycle Boy was developed using Unity, with C# as the programming language to build core game mechanics such as the quest system, character movement, enemy AI, and collision detection.',
    desc: 'Recycle Boy was developed using Unity, with C# as the programming language to build core game mechanics such as the quest system, character movement, enemy AI, and collision detection.',
    thumb: Gamedev,
    images: [Gamedev],
    link: 'https://drive.google.com/file/d/1-v9SEPco_RR9vUvMKkKCtJZ3iZ3BvTFx/view?usp=drive_link',
  },


];


export class EV_GIT extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      repos: [],
      selectedProject: null,
    };
  }



  componentDidMount() {
    fetch('https://api.github.com/users/mp308')
      .then(response => response.json())
      .then(user => this.setState({ user }));

    fetch('https://api.github.com/users/mp308/repos')
      .then(response => response.json())
      .then(repos => this.setState({ repos }));
  }

  closeModal = () => this.setState({ selectedProject: null });

  render() {
    const { user, repos, selectedProject } = this.state;

    return (
      <>
        <div className="pb-20 ">
          <div className="relative">
            <img
              src={Banner}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10 py-4">
              {user && (
                <div className="text-center mb-10">
                  <img
                    src={user.avatar_url}
                    alt="GitHub profile"
                    className="rounded-full w-ภ0 h-20 mx-auto mb-4 border-4 border-white"
                  />
                  <h1 className="text-3xl md:text-5xl  text-white font-bebas">{user.name}</h1>
                  <p className="text-white mt-2 text-sm md:text-base">{user.bio}</p>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl text-center my-8 text-white font-bebas">- My Experience -</h1>
              <div className="flex flex-col items-center justify-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow-50 animate-bounce  ">
                <RxDoubleArrowDown />
              </div>
            </div>
          </div>
          <div className=" sm: py-9 space-y-10 relative" style={{ paddingLeft: '15%', paddingRight: '15%' }}>




            {projects.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 group"
              >
                {/* thumbnail */}
                <div className="shrink-0 w-70 h-40 sm:w-80 sm:h-50 rounded-lg bg-gray-200 overflow-hidden shadow-md">
                  {p.thumb && (
                    <img src={p.thumb} alt="" className="w-full h-full object-cover" />
                  )}
                </div>

                {/* text */}
                <div className="flex-1">
                  <div className='flex flex-row gap-2'>
                    <h3 className="text-lg sm:text-2xl font-prompt font-bold tracking-wide text-white  transition bg-emerald-600 text-center inline-block w-fit px-3 mb-3 ">
                      {p.Indicate}
                    </h3>
                    <h3 className="text-lg sm:text-3xl font-bebas tracking-wide text-emerald-600 transition">
                      {p.category}
                    </h3>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bebas tracking-wide text-white transition">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white  font-kumbh line-clamp-3">
                    {p.desc}
                  </p>

                  {/* ---- ปุ่มเปิด Modal ---- */}
                  <button
                    onClick={() => this.setState({ selectedProject: p })}
                    className="mt-2 text-xs sm:text-sm font-medium text-emerald-200 underline underline-offset-2"
                  >
                    View&nbsp;Detail
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* ---------- Modal ---------- */}

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={this.closeModal}                /* คลิกพื้นหลังเพื่อปิด */
          >
            {/* กล่องเนื้อหา – stopPropagation เพื่อไม่ให้ปิดตอนคลิกข้างใน */}
            <div
              className="relative w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto
                         bg-white rounded-lg shadow-xl p-6 sm:p-10"
              onClick={e => e.stopPropagation()}
            >
              {/* ปุ่ม X ปิด */}
              <button
                onClick={this.closeModal}
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              {/* รูปขนาดใหญ่ถ้ามี */}
              <div
                className="grid gap-4 mb-6
                grid-cols-3
             sm:grid-cols-3           
             lg:grid-cols-3          
             max-h-[60vh] "
              >
                {selectedProject.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg
                 transition hover:brightness-110 hover:scale-[1.02]"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className='flex flex-row gap-2'>
                    <h3 className="text-lg sm:text-2xl font-prompt font-bold tracking-wide text-white  transition bg-emerald-600 text-center inline-block w-fit px-3 mb-3 ">
                      {selectedProject.Indicate}
                    </h3>
                    <h3 className="text-lg sm:text-3xl font-bebas tracking-wide text-emerald-600 transition">
                      {selectedProject.category}
                    </h3>
                  </div>
               {/* ---------- เนื้อหาโปรเจ็กต์ ---------- */}
              <h2 className="text-2xl sm:text-3xl font-bebas mb-4 text-black">
                {selectedProject.title}
              </h2>

              <p className="text-xs sm:text-base text-black font-kumbh whitespace-pre-line">
                {selectedProject.modaldesc}
              </p>

              {/* ลิงก์ไป GitHub / ผลงานจริง */}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-4 py-2 rounded-md bg-emerald-600 text-white
                             hover:bg-emerald-700 text-sm"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>
        )}

      </>
    );
  }
}

export default EV_GIT;
