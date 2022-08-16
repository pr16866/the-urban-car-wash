import React from "react";

function Services()
{
  return (
    <div>
      <div className="serviceWrapper md:p-16 flex md:gap-10 items-center justify-center p-10 flex-wrap">
        <div className="text  md:w-[635px] w-[100%]">
          <h3 className="w-[250.43px]  text-white  text-[21px] font-[800] leading-[27px]  md:hidden block mb-4">
            Easy booking and Quick Service
          </h3>
          <div className="card  md:h-[194px]   bg-[#ffc044] flex items-center justify-center md:gap-20 gap-[40px] md:py-0 py-6 md:px-0 px-4">
            <span className="iconOuter w-[41px] h-[41px] bg-black rounded-full p-1 flex items-center justify-center  md:w-[96px] md:h-[96px] ">
              <span className="icon">
                <img src="./serviceicon1.png" alt="" className="md:w-[40px] md:h-[40px] h-[17px] w-[17px]" />
              </span>
            </span>
            <div className="flex flex-col  md:w-[299px]  w-[250px]  ">

              <h4 className=" text-black uppercase md:font-bold  md:text-[15px] text-[14px]
            md:leading-[18px] leading-[8px] font-[800]">CHoose Service</h4>
              <p className="md:leading-[24px] leading-[13.5px] md:text-[14px] text-[12px] mt-2 font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet amet orci enim ut sit placerat.</p>
            </div>
          </div>

          <div className="card  md:h-[194px]  bg-black flex items-center justify-center md:gap-20 gap-[40px] md:py-0 py-6 md:px-0 px-4">
            <span className="iconOuter w-[41px] h-[41px] bg-white rounded-full p-1 flex items-center justify-center  md:w-[96px] md:h-[96px] ">
              <span className="icon">
                <img src="./serviceicon2.png" alt="" className="md:w-[40px] md:h-[40px] h-[17px] w-[17px]" />
              </span>
            </span>
            <div className="flex flex-col  md:w-[299px] w-[252px] ">

              <h4 className=" text-white uppercase md:font-bold  md:text-[15px] text-[14px]
            md:leading-[18px] leading-[8px] font-[800]">CHoose Service</h4>
              <p className="md:leading-[24px] leading-[13.5px] md:text-[14px] text-[12px] mt-2 font-[400] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet amet orci enim ut sit placerat.</p>
            </div>
          </div>

          <div className="card  md:h-[194px]  bg-black flex items-center justify-center md:gap-20 gap-[40px] md:py-0 py-6 md:px-0 px-4">
            <span className="iconOuter w-[41px] h-[41px] bg-white rounded-full p-1 flex items-center justify-center  md:w-[96px] md:h-[96px] ">
              <span className="icon">
                <img src="./serviceicon3.png" alt="" className="md:w-[40px] md:h-[40px] h-[17px] w-[17px]" />
              </span>
            </span>
            <div className="flex flex-col md:w-[299px] w-[252px] ">

              <h4 className=" text-white uppercase md:font-bold  md:text-[15px] text-[14px]
            md:leading-[18px] leading-[8px] font-[800]">CHoose Service</h4>
              <p className="md:leading-[24px] leading-[13.5px]
              md:text-[14px] text-[12px] mt-2
             font-[400] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet amet orci enim ut sit placerat.</p>
            </div>
          </div>
          {/* ====>> big image section start<<===== */}
        </div>
        <div className="img md:block hidden">
          <h3 className="text-white w-[445px] text-[45px] font-[800] leading-[58px] h-[128px] text-right ">
            Easy booking and
            <span className=""> Quick Service</span>
          </h3>
          <img
            src="./3.png"
            alt=""
            className="w-[447px] h-[566px] rounded-md "
          />
        </div>
        {/* ====>> big image section end<<===== */}
      </div>
    </div>
  );
}
export default Services;
