import Router from "next/router";
import React from "react";
import { modalConfig } from "../../Config/Routing/Model";
import { routing } from "../../Config/Routing";
import { useAppContext } from "../../ContextApi";
import { innerBox } from "../index.module.css";

function PriceCard({ props }) {
 
  const {
    authenticated,
    setAddNewWash,
    addNewWash,
    modelStatus,
    setModelStatus,
    bookingstarted,
    subscriptionPrice, setSubscriptionPrice,
  } = useAppContext();

  const { border,item } = props;
 
  const BookNow = (price,packagename,desc) => {
    setSubscriptionPrice({
      ...subscriptionPrice, packageName: packagename,
      packagePrice: price,
      desc
    });
    if (authenticated) {
      if (modelStatus === modalConfig.BOOKNOW_DONE) {
        setAddNewWash(addNewWash + 1);
        setModelStatus(modalConfig.PACKAGE_DONE);        
      } else {
        Router.push(routing.CHOOSE_PACKAGE_BOOKING);
      }
    } else {
        Router.push(routing.AUTH_NUMBER);
    }
  };


  return (
    <>
      {item &&
      <div
        className={`${innerBox} minw-[143px] bg-[black] md:minw-[270px] shadow-[0px 8.20123px 11.9864px rgba(0, 0, 0, 0.07)] rounded-[4px] md:rounded-[7px] border-[0.630864px solid #DEDEDE] text-center flex flex-col items-center justify-center gap-4  text-[white] `}
        style={{border}}>
        <h4 className={`md:text-[20px] md:font-[700] text-[15px] leading-[18px] mb-[-10px] `}>
        {item.packageName}
        </h4>
        <span className="price flex items-end gap-2">
          <h1 className="text-5xl font-semibold ">₹{item["price" + bookingstarted.category]}</h1>
          <span className="text-[11px] ">Per Month / Per Wash</span>
        </span>
            <span className="md:text-[17px] text-[12px]">{item.fe1}</span>
            <span className="md:text-[17px] text-[12px]">{item.fe2} </span>
            <span className="md:text-[17px] text-[12px]">{item.fe3}</span>
            <span className="md:text-[17px] text-[12px]">{item.fe4}</span>
            <span className="md:text-[17px] text-[12px]">{item.fe5}</span>
        <button
          className={`bg-white rounded-[35px] text-[black] md:px-16 px-12 py-3 font-bold md:text-[16px] text-[13px]`}
          onClick={() => BookNow(item["price" + bookingstarted.category], item.packageName,item.desc)}>
          Book Now
        </button>
      </div>
      }
    </>
  );
}

export default PriceCard;
