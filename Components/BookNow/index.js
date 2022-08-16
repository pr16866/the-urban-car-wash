import Router from "next/router";
import React, { useEffect } from "react";
import { routing } from "../Config/Routing";
import { useAppContext } from "../ContextApi";
import { bookingsMain } from "./index.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { modalConfig } from "../Config/Routing/Model";

function BookNow() {
  const {
    bookingstarted,
    setBookingstarted,
    authenticated,
    modelStatus,
    setModelStatus,
  } = useAppContext();


  useEffect(() => {
    let initialVal = {
      vehicleType: "car",
      category: "hatchback",
      service: "subscription wash",
    };
    setBookingstarted(initialVal);
  }, []);


  const handleChange = (e) => {
    setBookingstarted({ ...bookingstarted, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    console.log(bookingstarted)
  },[bookingstarted])
 
  const getStarted = () => {
    if (!(modelStatus === modalConfig.BOOKNOW_STARTED)) {
      if (authenticated) {
        Router.push(routing.CONFIRM_LOCATION);
      } else {
        Router.push(routing.AUTH_NUMBER);
      }
    } else {
      setModelStatus(modalConfig.BOOKNOW_DONE);
    }
  };

  return (
    <div className={bookingsMain}>
      <h3 className="md:text-[24.5361px] text-[19px] ">BOOK A WASH NOW</h3>

      {modelStatus === modalConfig.BOOKNOW_STARTED && (
        <button
          className="btn text-white cursor-pointer absolute top-[4px] right-[4px] text-4xl"
          onClick={() => setModelStatus(modalConfig.BOOKNOW_DESTROYED) }>
          <AiFillCloseCircle />
        </button>
      )}
      <div className="flex md:flex-row flex-col items-center justify-center flex-wrap  text-white md:gap-[22px] tracking-wider mt-12 font-sans gap-6">
        <div className="w-full md:w-[30%] items-center justify-around flex-wrap md:flex-row">
          <label
            htmlFor="vehicle"
            className="block mb-1 font-semibold text-[12px] md:text-[15px]">
            Vehicle Type *
          </label>
          <select
            name="vehicleType"
            id="cars"
            className="w-full p-3 rounded-[5px] text-[#737373] mb-2 outline-none flex items-center"
            onChange={handleChange}>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>
        {bookingstarted.vehicleType == "car" ? (
        <div className="w-full md:w-[30%] items-center justify-around flex-wrap md:flex-row">
          <label
            htmlFor="vehicle"
            className="block mb-1 font-semibold text-[12px] md:text-[15px]">
            Selecet Category *
          </label>
          <select
            name="category"
            id="cars"
            className="w-full p-3 rounded-[5px] text-[#737373] mb-2 outline-none "
            onChange={handleChange}>
            <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
            <option value="minisuv">Mini suv</option>
            <option value="suv">Suv</option>
          </select>
        </div>
        ) : ""}
        <div className="w-full md:w-[30%] items-center justify-around flex-wrap md:flex-row">
          <label
            htmlFor="vehicle"
            className="block mb-1 font-semibold text-[12px] md:text-[15px]">
            Service *
          </label>
          {!(modelStatus === modalConfig.BOOKNOW_STARTED) && (
            <select
              name="service"
              id="cars"
              className="w-full p-3 rounded-[5px] text-[#737373] mb-2 outline-none"
              onChange={handleChange}>
              <option value="subscription wash">Subscription wash</option>

              <option value="onetime wash"> Onetime wash</option>
            </select>
          )}
          {modelStatus === modalConfig.BOOKNOW_STARTED && (
            <select
              name="service"
              id="cars"
              className="w-full p-3 rounded-[5px] text-[#737373] mb-2 outline-none"
              onChange={handleChange}>
              <option value="subscription wash">Subscription wash</option>
            </select>
          )}
        </div>
      </div>
      <div className="mt-14 md:w-1/2 mx-auto w-full flex justify-center items-center">
        <button
          className="p-4 w-full rounded-[7.95639px] bg-[#FFC044] font-[600] tracking-wide md:text-[19px] text-[10px]"
          onClick={getStarted}>
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default BookNow;
