import { useEffect, useState } from "react";
import { useAppContext } from "../../../Components/ContextApi";
import Layout from "../../../Components/Layout";
import { getPlans } from "../../../Components/Utils/api";


const Booking_confirmed = () => {

  const { bookingDetails, setBookingDetails, authenticated, newUser } = useAppContext();
  const [plansDetails, setPlansDetails] = useState( "" );
  const [date, setDate] = useState("")

  useEffect( () =>{
    getplansdetails()
  }, [] );

  const getplansdetails = async () =>
  {
    let data = await getPlans( "onetime" );
    setPlansDetails( data );
  }
  
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center  w-full -mt-[50px] mb-[33px]">
          {/* top */}
          <div className=" flex flex-col text-center mt-[100px]">
            <h1 className=" text-4xl font-bold">
              Booking confirmed
            </h1>
            <span className="text-4xl font-bold my-2">Thank you</span>
            <h3 className="mb-5">
              You can see your bookings in the My booking section on our website
            </h3>
          </div>
          {/* bottom */}
          <div className="flex flex-col gap-2 md:w-[55%] w-[90%] bg-[#141414] rounded-[5px] md:px-[60px] px-[20px] py-10 mx-auto my-5">
            <h1 className="text-2xl font-bold text-white">One time wash</h1>
            {plansDetails.length &&
              <span className="mt-2 text-[14px] tracking-wide text-[#EAEAEA]">
                {plansDetails[0].desc}
              </span>
            }
            <div>
              <h1 className="text-2xl font-bold text-white mt-2">Vehicle Number</h1>
              <div className="h-9 py-2 px-4 text-white rounded w-max items-center mt-2 bg-[#343434]">
                {bookingDetails.vehicleNo}
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:items-center mt-2">
              <h1 className="mr-3 text-2xl font-bold text-white">
                Prefered Time Slot
              </h1>
              <div className="rounded-full  text-center bg-[#FFC044] py-[14px] px-[28px] font-semibold text-black">
                {bookingDetails.timeSlot}
              </div>
            </div>

            <h1 className="text-2xl font-bold mt-2 mb-2 text-white">Add On</h1>
            <div className="flex flex-wrap md:flex-row gap-2 flex-col text-[#EAEAEA]">

              {bookingDetails?.addOn?.map( ( item, index ) =>
              {
                return (
                  <div className="w-max pr-2 pb-2 flex items-center" key={index}>
                    <label htmlFor="complete_vaccum" className="md:mx-5 mx-0 mr-5">
                      {item.selected}
                    </label>
                    <input
                      type="checkbox"
                      name="complete_vaccum"
                      className="w-5 h-5"
                      checked="true"
                    />
                  </div>
                )
              } )}

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Booking_confirmed;
