import React from 'react'
import TestimoniaCard from './TestimonialCard'

function Testimonials() {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-black  md:text-[45px] md:font-[800] md:leading-[58px]  text-[21px] font-[800] leading-[27px] text-center mb-1">

          Our Clients Speak
        </h3>
        <p
          className=" md:leading-[25px] md:tracking-[0.126173px] m-auto
          
      md:text-[17px] text-[11px]
        font-[400]  leading-[14px] tracking-[ 0.0678286px]
        ">
          We have been working with clients around the world
        </p>
        <div className={` flex items-center justify-center mt-10 flex-wrap md:gap-9 gap-5 `}>
          <TestimoniaCard props={{ text: "black", bg: "white" }} />
          <TestimoniaCard props={{ text: "white", bg: "black" }} />
          <TestimoniaCard props={{ text: "black", bg: "white" }} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials