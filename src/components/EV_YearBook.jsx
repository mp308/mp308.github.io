import React, { Component } from 'react'
import F_pic1 from "../assets/images/softskills/Editor/YearBook/คอน.jpg"
import F_pic2 from "../assets/images/softskills/Editor/YearBook/รวม1.jpg"
import F_pic3 from "../assets/images/softskills/Editor/YearBook/รวม2.jpg"
import F_pic4 from "../assets/images/softskills/Editor/YearBook/ร้านค้า.jpg"
import F_pic5 from "../assets/images/softskills/Editor/YearBook/ลานสัน.jpg"
import F_pic6 from "../assets/images/softskills/Editor/YearBook/หอธรรม.jpg"
import F_picBanner1 from "../assets/images/softskills/Editor/YearBook/jatu2.jpg"

export class EV_YearBook extends Component {
  render() {
    return (
      <>
        <div className="p-4 lg:p-20 text-center">
          <h1 className="text-7xl mt-9 mb-5 text-white font-bebas">- Years Book Bcc 168 -</h1>
          <p className="text-xl text-white font-kumbh font-thin mb-5">
            When Bangkok Christian College entered its 168th year, the school’s administrators and students envisioned producing a commemorative Year Book that would weave together the institution’s rich history, pivotal moments, and enduring memories shared by “Christian” students across every generation. More than a simple keepsake, the book was intended to serve as a testament to—and storyteller of—the distinctive identity and fraternal values that have bound the Christian brotherhood for more than a century and a half.
            </p>
          <div className='p-8'>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 ">
              <img src={F_pic1} alt="YearBook 1" className="rounded-lg shadow-md" />
              <img src={F_pic2} alt="YearBook 2" className="rounded-lg shadow-md" />
              <img src={F_pic3} alt="YearBook 3" className="rounded-lg shadow-md" />
              <img src={F_pic4} alt="YearBook 4" className="rounded-lg shadow-md" />
              <img src={F_pic5} alt="YearBook 5" className="rounded-lg shadow-md" />
              <img src={F_pic6} alt="YearBook 6" className="rounded-lg shadow-md" />
            </div>
            <div className="mt-5 ">
              <img src={F_picBanner1} alt="Banner" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EV_YearBook
