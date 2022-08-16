import Image from "next/image";

function About() {
  
  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="blackScreen w-[92%] md:w-[55%] bg-black md:h-[707.56px] flex items-center gap-5 md:px-10 md:py-0 py-14 px-11">
        <div className="image w-[170px] h-[390px] hidden md:block ">
          <img src="/pngegg 1.png" className="w-[100%] h-[100%]" />
        </div>
        <div className="text md:mb-[14rem] ml-2">
          <h3 className="font-[800] md:text-5xl text-[28.0647px] text-white leading-[37px] mb-4 ">
            Who are we?
          </h3>
          <p className="font-[400] text-white md:text-[20.2871px] text-[11px] md:leading-[36px] leading-[20px] md:w-[440px] w-[223px] break-all">
            A passionate company founded by people, who loves Cars, and
            understand who to do it’s car.
          </p>
        </div>
      </div>
      <div className=" w-[92%] md:w-[45%] md:h-[635.66px] bg-white shadow-[0px 33.8118px 45.0824px rgba(212, 217, 232, 0.2)] flex items-center relative  h-[329.76px]  md:px-20 px-8">
        <p
          className="md:leading-[36px] md:text-[20px] text-[400] 
          md:-mb-16 leading-[19px] text-[12px] 
          text-[#18191F]">
          Welcome to Urban Car Wash a concept developed by LIV INDIA to organize
          the Car Cleaning segment to give the community a new definition of car
          care and detailing services which are not professionally followed in
          India. Based at Delhi our endeavour is    to spread the awareness amongst
          car users about the Clean Car Culture & Car Hygiene.
          <br /><br />
          Speed Car Wash is
          a brand which is literally going to change the way people think about
          car cleaning.
        </p>
        <div className="img md:w-[89.77px] md:h-[76.64px] w-[46.57px] h-[39.76px] absolute md:top-14 md:right-10 top-6 right-4">
          <img src="/1.png" alt="error" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default About;
