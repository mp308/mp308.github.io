import React, { Component } from 'react'
import F_pic1 from "../assets/images/softskills/Editor/Fooball/1st.jpg"
import F_pic2 from "../assets/images/softskills/Editor/Fooball/2st.jpg"
import F_pic3 from "../assets/images/softskills/Editor/Fooball/3.jpg"
import F_pic4 from "../assets/images/softskills/Editor/Fooball/4.jpg"
import F_pic5 from "../assets/images/softskills/Editor/Fooball/4st.jpg"
import F_pic6 from "../assets/images/softskills/Editor/Fooball/5.jpg"
import F_pic7 from "../assets/images/softskills/Editor/Fooball/5st.jpg"
import F_pic8 from "../assets/images/softskills/Editor/Fooball/klkjlk.jpg"
import F_pic9 from "../assets/images/softskills/Editor/Fooball/Untitled-2-Recovered.jpg"
import F_pic10 from "../assets/images/softskills/Editor/Fooball/Untitled-2-Recovlkkkk.jpg"
import F_picBanner1 from "../assets/images/softskills/Editor/Fooball/56work.jpg"
import F_picBanner2 from "../assets/images/softskills/Editor/Fooball/56WORK2.jpg"

export class EV_Football extends Component {
  render() {
    return (
      <>
        <div className="p-5 text-center">
          <h1 className="text-7xl mt-9 mb-5 text-white font-bebas">- Bcc Sports ChongCo League -</h1>
          <p className="text-2xl text-white font-kumbh font-thin mb-5">
             This is a football league that I have been involved in for 3 years. I have been responsible for
            creating posters and banners for the event. The league is held every year and attracts a large
            number of participants. I have learned a lot from this experience, including how to work with
            different teams and how to manage my time effectively.
            </p>
            <div className='p-9'>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-5">
            <img src={F_pic1} alt="Football 1" className="rounded-lg shadow-md" />
            <img src={F_pic2} alt="Football 2" className="rounded-lg shadow-md" />
            <img src={F_pic3} alt="Football 3" className="rounded-lg shadow-md" />
            <img src={F_pic4} alt="Football 4" className="rounded-lg shadow-md" />
            <img src={F_pic5} alt="Football 5" className="rounded-lg shadow-md" />
            <img src={F_pic6} alt="Football 6" className="rounded-lg shadow-md" />
            <img src={F_pic7} alt="Football 7" className="rounded-lg shadow-md" />
            <img src={F_pic8} alt="Football 8" className="rounded-lg shadow-md" />
            <img src={F_pic9} alt="Football 9" className="rounded-lg shadow-md" />
            <img src={F_pic10} alt="Football 10" className="rounded-lg shadow-md" />
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
            <img src={F_picBanner1} alt="Banner 1" className="rounded-lg shadow-md mb-4" />
            <img src={F_picBanner2} alt="Banner 2" className="rounded-lg shadow-md" />
          </div>
          </div>
        </div>
      </>
    )
  }
}

export default EV_Football
