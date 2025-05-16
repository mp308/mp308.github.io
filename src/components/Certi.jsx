import React, { Component } from 'react';
import KU_CER from '../assets/images/HardSkills/certificate/cer_page-0001.jpg';
import KU_CER65 from '../assets/images/HardSkills/certificate/65.jpg';
import KU_CER66 from '../assets/images/HardSkills/certificate/66.jpg';
import KU_CER67 from '../assets/images/HardSkills/certificate/67.jpg';

import KU_OPEN_HOUSE_2025 from '../assets/images/HardSkills/certificate/openhouse-2025.jpg';

import HackerRank_CER_sql_ba from '../assets/images/HardSkills/certificate/sql_basic certificate_page-0001.jpg';
import HackerRank_CER_sql_in from '../assets/images/HardSkills/certificate/sql_intermediate certificate_page-0001.jpg';
import HackerRank_CER_css from '../assets/images/HardSkills/certificate/css certificate_page-0001.jpg';
import HackerRank_CER_java from '../assets/images/HardSkills/certificate/java_basic certificate_page-0001.jpg';
import HackerRank_CER_react from '../assets/images/HardSkills/certificate/react_basic certificate_page-0001.jpg';

import COOP_WORKSHOP from '../assets/images/HardSkills/certificate/No.20567145 Mr. Sanpitch Phuvapaisankit_page-0002.jpg';
import COOP_CERTI from '../assets/images/HardSkills/certificate/No.20567145 Mr. Sanpitch Phuvapaisankit_page-0001.jpg';


export class Certi extends Component {
  render() {
    const certificates = [
      {
        imgSrc: COOP_CERTI,
        description: "INTERNSHIP Certificate - เกียรติบัตรแสดงผลการฝึกงานทบริษัท Softsquare Group",
      },
       {
        imgSrc: COOP_WORKSHOP,
        description: "INTERNSHIP Certificate - เกียรติบัตรแสดงผลการอบรม Professional Internship Program",
      },
      {
        imgSrc: KU_OPEN_HOUSE_2025,
        description: "KU Certificate - เกียรติบัตรแสดงผลงาน 'โครงการเปิดบ้านศวท.OPENHOURSEOPENHEART' สาขาเทคโนโลยีสารสนเทศ ",
      },
      {
        imgSrc: KU_CER,
        description: "KU Certificate - เกียรติบัตรผลการเรียนดี สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ",
      },
      {
        imgSrc: KU_CER65,
        description: "KU Certificate - เกียรติบัตรผลการทดสอบ สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ 65",
      },
      {
        imgSrc: KU_CER66,
        description: "KU Certificate - เกียรติบัตรผลงานดีเด่น สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ",
      },
      {
        imgSrc: KU_CER67,
        description: "KU Certificate - เกียรติบัตรผลการทดสอบ สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ 67",
      },
      {
        imgSrc: HackerRank_CER_sql_ba,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ SQL Basic",
      },
      {
        imgSrc: HackerRank_CER_sql_in,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ SQL Intermediate",
      },
      {
        imgSrc: HackerRank_CER_css,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ CSS",
      },
      {
        imgSrc: HackerRank_CER_java,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ Java Basic",
      },
      {
        imgSrc: HackerRank_CER_react,
        description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ React Basic",
      }
    ];

    return (
      <>
        <div className='pt-10 px-5'>
          <div className="  items-center gap-12 pb-8 grid grid-cols-2 sm:grid-cols-2 sm:grid sm:gap-8 sm:justify-items-center sm:px-10 lg:grid-cols-3 lg:gap-8 lg:px-20">
            {certificates.map((certificate, index) => (
              <div key={index} className="max-w-lg">
                <img
                  src={certificate.imgSrc}
                  alt={`Certificate ${index + 1}`}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-white mt-4 font-mitr">
                  {certificate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Certi;
