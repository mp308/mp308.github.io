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

class Certi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalImgSrc: ''
    };
  }

  openModal = (src) => {
    this.setState({ showModal: true, modalImgSrc: src });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImgSrc: '' });
  };

  render() {
    const certificates = [
      { imgSrc: COOP_CERTI, description: "INTERNSHIP Certificate - เกียรติบัตรแสดงผลการฝึกงานบริษัท Softsquare Group" },
      { imgSrc: COOP_WORKSHOP, description: "INTERNSHIP Certificate - เกียรติบัตรแสดงผลการอบรม Professional Internship Program" },
      { imgSrc: KU_OPEN_HOUSE_2025, description: "KU Certificate - เกียรติบัตรผลงาน 'โครงการเปิดบ้านศวท.OPENHOUSEOPENHEART' สาขาเทคโนโลยีสารสนเทศ" },
      { imgSrc: KU_CER, description: "KU Certificate - เกียรติบัตรผลการเรียนดี สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ" },
      { imgSrc: KU_CER65, description: "KU Certificate - เกียรติบัตรผลการทดสอบ สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ 65" },
      { imgSrc: KU_CER66, description: "KU Certificate - เกียรติบัตรผลงานดีเด่น สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ" },
      { imgSrc: KU_CER67, description: "KU Certificate - เกียรติบัตรผลการทดสอบ สาขาเทคโนโลยีสารสนเทศ ภาคพิเศษ 67" },
      { imgSrc: HackerRank_CER_sql_ba, description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ SQL Basic" },
      { imgSrc: HackerRank_CER_sql_in, description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ SQL Intermediate" },
      { imgSrc: HackerRank_CER_css, description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ CSS" },
      { imgSrc: HackerRank_CER_java, description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ Java Basic" },
      { imgSrc: HackerRank_CER_react, description: "HackerRank Certificate - เกียรติบัตรผลการทดสอบ React Basic" }
    ];

    return (
      <>
        <div className='pt-6 px-4 sm:px-6 md:px-10'>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
            {certificates.map((cert, index) => (
              <div
                key={index}
                className='max-w-lg w-full cursor-pointer'
                onClick={() => this.openModal(cert.imgSrc)}
              >
                <img
                  src={cert.imgSrc}
                  alt={`Certificate ${index + 1}`}
                  className='w-full rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105'
                />
                <p className='text-center text-white mt-3 font-mitr'>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {this.state.showModal && (
          <div
            className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4'
            onClick={this.closeModal}
          >
            <span
              className='absolute top-4 right-4 text-white text-3xl cursor-pointer'
              onClick={this.closeModal}
            >
              &times;
            </span>
            <img
              src={this.state.modalImgSrc}
              alt='Enlarged Certificate'
              className='w-full max-w-md md:max-w-3xl max-h-[90vh] object-contain p-2 rounded-lg'
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }
}

export default Certi;
