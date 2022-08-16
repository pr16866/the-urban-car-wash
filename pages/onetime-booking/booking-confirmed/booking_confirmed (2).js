import { useAppContext } from "../../../Components/ContextApi";
import Layout from "../../../Components/Layout";

const Booking_confirmed = () =>
{
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center backdrop-blur-md bg-black/50 w-full -mt-3">
          {/* top */}
          <div className="bg-transparent flex flex-col text-white text-center mt-[100px]">
            <h1 className="text-[#FFC044] text-4xl font-bold">
              Booking confirmed
            </h1>
            <span className="text-4xl font-bold my-2">Thank you</span>
            <h3 className="mb-5">
              you can see your bookings in the My booking section on our website
            </h3>
          </div>
          {/* bottom */}
          <div className="flex flex-col gap-2 md:w-[55%] w-[90%] bg-[#141414] rounded-[5px] md:px-[60px] px-[20px] py-10 mx-auto my-5">
            <h1 className="text-2xl font-bold text-white">One time wash</h1>
            <span className="mt-2 text-[14px] tracking-wide text-[#EAEAEA]">
              Complete vacuuming of cars incl. seats and boot + Washing and
              cleaning of foot mats + Body Shampooing and washing including door
              frames + Tyre arches cleaning + Underbody wash + Engine hot water
              wash and dressing + Side doors cleaning + Dash board polishing +
              Car perfume spray
            </span>
            <span className="mt-2 md:text-[17px] text-[14px] text-[#EAEAEA]">
              On 28/07/22 at 3:00 PM
            </span>
            <div>
              <h1 className="text-2xl font-bold text-white">Vehicle Number</h1>
              <div className="h-9 py-2 px-4 text-white rounded w-max items-center mt-2 bg-[#343434]">
                MH 02 2332
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:items-center mt-2">
              <h1 className="mr-3 text-2xl font-bold text-white">
                Prefered Time Slot
              </h1>
              <div className="rounded-full w-[120px] text-center bg-[#FFC044] py-[14px] px-[28px] font-semibold text-black">
                3 - 6 PM
              </div>
            </div>

            <h1 className="text-2xl font-bold mt-2 mb-2 text-white">Add On</h1>
            <div className="flex flex-wrap md:flex-row gap-2 flex-col text-[#EAEAEA]">
              <div className="w-max pr-2 pb-2 flex items-center">
                <label htmlFor="complete_vaccum" className="mr-4">
                  Complete vacuuming of cars incl.
                </label>
                <input
                  type="checkbox"
                  name="complete_vaccum"
                  className="w-5 h-5"
                />
              </div>
              <div className="w-max pr-2 pb-2 flex items-center">
                <label htmlFor="complete_vaccum" className="md:mx-5 mx-0 mr-5">
                  Complete vacuuming
                </label>
                <input
                  type="checkbox"
                  name="complete_vaccum"
                  className="w-5 h-5"
                />
              </div>
              <div className="w-max pr-2 pb-2 flex items-center">
                <label htmlFor="complete_vaccum" className="mr-4">
                  Complete vacuuming of cars incl.
                </label>
                <input
                  type="checkbox"
                  name="complete_vaccum"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Booking_confirmed;
