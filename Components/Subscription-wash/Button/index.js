import React from "react";
import { modalConfig } from "../../Config/Routing/Model";
import { useAppContext } from "../../ContextApi";
import { savepackageDeail } from "../../Utils/api";
import Router from "next/router";
import { routing } from "../../Config/Routing";
import { toast } from "react-toastify";


function Button(){
  const {
    subscriptionWash,
    setsubscriptionWash,
    setModelStatus,
    authenticated,
    subscriptionPrice,
    setSubscriptionPrice,
    totalCost, setTotalCost,
    location,
  } = useAppContext();

  let validateVar;

  const Validate = () => {
    validateVar = true;
    let arr = subscriptionWash;
    arr.every( ( element ) => {
      const { vehicleNo, timeSlot, months, washTime, addOn } = element;
      if ( !vehicleNo )
      {
        toast.error( "Vehicle no is required" );
        validateVar = false;
      } else if ( !timeSlot )
      {
        toast.error( "Time slot must be selected" );
        validateVar = false;
      } else if ( !months )
      {
        toast.error( "No. of months must be selected" );
        validateVar = false;
      } else if ( !washTime )
      {
        toast.error( "No of washes must be selected" );
        validateVar = false;
      }
      return validateVar;
    } );
  };

  const payNow = async () => {
    Validate();

    if ( validateVar )
    {
      let subscriptionWashArr = [];

      subscriptionWashArr.push( subscriptionWash );

      let data = {
        value: subscriptionWashArr,
      };

      let resData = await savepackageDeail( data.value, authenticated, location, totalCost );

      if ( resData )
      {
        Router.push( routing.CHOOSEPACKAGE_BOOKING_CONFIRMED.toString() );
        setsubscriptionWash( [] );
      } else
      {
        toast.error( "Please try again " );
      }
    }
  };

  const modelStarted = () => {
    setModelStatus( modalConfig.BOOKNOW_STARTED );
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-6 gap-3 w-[85%] md:mx-auto md:justify-end ml-7 md:my-[60px] my-10">
        <div className="flex flex-row items-center space-x-5">
          <h1 className="font-bold md:text-4xl text-2xl tracking-wide">
            Total
          </h1>
          <span className="md:text-6xl text-4xl font-bold">₹{totalCost}</span>
        </div>
        <div className="flex flex-row space-x-5">
          <div className="flex justify-center" onClick={modelStarted}>
            <button className="md:py-3 py-2 rounded-[8px] md:px-14 px-8 border-2 border-[#FFC044] text-white font-normal text-[18px]">
              ADD NEW
            </button>
          </div>

          <div
            className="flex justify-center rounded-[8px] bg-[#FFC044] "
            onClick={payNow}>
            <button className="md:py-3 py-2 text-black md:px-[52px] px-8 font-normal text-[18px] border-2 border-[#FFC044] rounded-[8px]">
              PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
