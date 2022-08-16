import React, { useEffect } from "react";
import PriceCard from "./PricingCard";
import { useAppContext } from "../ContextApi/index";
import { getAllPlans } from "../Utils/api";

function Pricing(){
  const { bookingstarted } = useAppContext()
  let arr = [1, 1, 1, 1]

  const getPlansFn = async () =>{
    let data = await getAllPlans()
    console.log(data)
  }

  useEffect(()=>{
    getPlansFn()
  },[])

  return (
    <div className="">
      <div className="headingText text-white text-center">
        <h3 className="md:font-[800] md:text-[31px] md:leading-[35px] md:tracking-[0.126173px] text-[19px] leading-[19px] tracking-[ 0.0678286px] md:mb-4 mb-2 font-[700]">

          Pricing
        </h3>
        <p
          className="md:w-[361px]  md:h-[51px]  md:leading-[25px] md:tracking-[0.126173px] m-auto md:text-[17px] text-[12px]
          w-[194px] h-[28px] font-[400]  leading-[14px] tracking-[ 0.0678286px]">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <img src="./1588 1.png" alt="" className="md:w-[802px] md:h-[210px] m-auto md:mt-[40px] mt-[20px] w-[431px] h-[113px]" />
      </div>
      <div className={`flex items-center justify-center mt-12 flex-wrap md:gap-9 gap-5 `}>
        {arr.map( ( item, index ) =>
        {
          return (
            <div key={index} className="contents">
              <PriceCard props={{ border: "2px solid #FFC044" }} key={index} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Pricing;
