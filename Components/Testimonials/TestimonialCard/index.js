import React from "react";
import { box } from "../index.module.css";

function TestimoniaCard( { props } ){
  const { bg, text } = props;
  return (
    <div className=" md:w-[350px] w-[300px]  bg-${bg}  ">
      <div
        className={`${ box } bg-${ bg } relative text-center rounded-[10px] text-${ text }`}>
        <h4
          className=" uppercase md:font-bold md:leading-[20px] font-[600]
            
             md:text-[18px]  text-[15px] leading-[18px] mb-3
            ">
          Efficient Collaborating
        </h4>
        <p className="px-4 md:leading-[24px] leading-[15px] md:text-[15px] text-[12px] mt-2 font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque
          sed imperdiet nibh lectus feugiat nunc sem.
        </p>
      </div>
      <span
        className={` inline-block border-white w-0 h-0`}
        style={{
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderTop: `20px solid ${ bg }`,
        }}></span>

      <img src="./Picture.png" alt="" className="w-[56px] h-[57px] m-auto" />

      <h2 className="text-black font-bold title-font tracking-wider text-sm">
        HOLDEN CAULFIELD
      </h2>
      <p className="text-[#474A57]">Senior Product Designer</p>
    </div>
  );
}

export default TestimoniaCard;
