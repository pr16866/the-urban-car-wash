import React from "react";
import { bannerMian, textBox, imgBox } from "./index.module.css";

function Banner() {
  
  return (
    <>
      <div className={bannerMian}>
        <div className={`${textBox} `}>
          <h1 > We Know you Love your Car</h1>
          <p className="md:text-[18px] text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>
          <button className="mt-3">SUBSCRIBE NOW</button>
        </div>
        <div
          className={`md:w-[688px] md:h-[516px]  h-[224px] w-[300px] relative`}>
          <div className="md:hidden ">
            <img
              src="./car 1.png"
              alt="err"
              style={{ width: "100%", height: "100%" }}
            />
            <div className=" absolute top-[30px] left-[28px] ">
              <p className=" flex w-[145.9px] h-[28.22px] p-[5.21071px] gap-[5.21px] bg-[rgb(255,255,255,0.6)] rounded-sm items-center pr-3">
                <span className="iconOuter w-[19.8px] h-[19.8px] bg-[#FDBF44] rounded-full p-1 flex items-center justify-center">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span className="text-[9.8px] font-[600] leading-[9px]">
                  Pick a time
                </span>
              </p>
            </div>
            <div className=" absolute bottom-[70px] left-[-39px]">
              <p className="p-3 gap-3 flex w-[175.9px] h-[29px]   bg-[rgb(255,255,255,0.6)] rounded-sm items-center">
                <span className="iconOuter w-[19.8px] h-[19.8px] bg-[#FDBF44] rounded-full p-1 flex items-center justify-center">
                  <span className="icon">
                    <img src="./reschedule.png" alt="" className="h-2 w-2" />
                  </span>
                </span>
                <span className="text-[9.8px] font-[600] leading-[9px]">
                  Automatic Rescheduling.
                </span>
              </p>
            </div>
            <div className=" absolute bottom-[8px] right-[80px]">
              <p className=" flex  h-[28.22px] p-[5px]  gap-3 bg-[rgb(255,255,255,0.6)] rounded-sm items-center w-[175.9px]">
                <span className="iconOuter w-[17.8px] h-[17.8px] bg-[#FDBF44] rounded-full  flex items-center justify-center">
                  <span className="icon">
                    <img src="./Polygon 1.png" alt="" className="h-2 w-2" />
                  </span>
                </span>
                <span className="text-[9.8px] inline-block font-[600] leading-[9px]">Play and Pause Subscription</span>
              </p>
            </div>
          </div>
          {/* ======>>big screen car start<<====== */}
          <div
            className="md:block hidden">
            <img
              src="./bannerCar1.png"
              alt="err"
              style={{ width: "100%", height: "100%" }}
            />
           <div className=" absolute top-[85px] left-[190px] ">
              <p className=" flex gap-4 bg-[rgb(255,255,255,0.6)] rounded-md items-center w-[340px] h-[65px] p-3">
                <span className="iconOuter w-8 h-8 bg-[#FDBF44] rounded-full  flex items-center justify-center">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span className="text-[14px] font-[600]">Pick a time</span>
              </p>
            </div>
            <div className=" absolute bottom-[120px] left-[-40px]">
              <p className=" flex p-3 gap-4 bg-[rgb(255,255,255,0.6)] rounded-md items-center w-[340px] h-[65px] ">
                <span className="iconOuter w-8 h-8 bg-[#FDBF44] rounded-full  flex items-center justify-center">
                  <span className="icon">
                    <img src="./reschedule.png" alt="" className="h-3 w-3" />
                  </span>
                </span>
                <span className="text-[14px] font-[600]">Automatic Rescheduling</span>
              </p>
            </div>
            <div className=" absolute bottom-[-49px] right-[190px]" id="booknow">
              <p className=" flex p-3 gap-4 bg-[rgb(255,255,255,0.6)] rounded-md items-center w-[340px] h-[65px] ">
                <span className="iconOuter w-8 h-8 bg-[#FDBF44] rounded-full  flex items-center justify-center">
                  <span className="icon">
                    <img src="./Polygon 1.png" alt="" className="h-3 w-3" />
                  </span>
                </span>
                <span className="text-[14px] font-[600]">
                  Play and Pause Subscription
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
