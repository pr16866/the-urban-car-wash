import { useEffect, useState, Fragment } from "react";
import Layout from "../../../Components/Layout";
import {
  active,
  inactive,
  vehicle_input,
} from "../../../styles/Home.module.css";
import { router } from "next";
import { routing } from "../../../Components/Config/Routing";
import { useAppContext } from "../../../Components/ContextApi";
import { toast } from "react-toastify";
import { addOn, getPlans, pricing, saveDetails } from "../../../Components/Utils/api";
import Router from "next/router";

const Booking = () => {
 
  const { bookingDetails, setBookingDetails, authenticated, newUser } = useAppContext();
  
  const [slot, setSlot] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [caddOn, setcAddon] = useState([]);
  const [vehicleNo, setVehicleNo] = useState("");
  const [addonData, setAddonData] = useState([]);
  const [addOnPrice, setaddOnPrice] = useState("");
  const [totalPrice, settotalPrice] = useState(0);
  
  const handleChange = (e,price) => {
    if (e.target.checked) {
      let obj = {
        selected: e.target.value,
        price
      }
     setcAddon([...caddOn,{...obj}]);
    } else {
      let arr = caddOn;
      
      for (let i = 0; i < caddOn.length; i++) {
        if (arr[i].selected === e.target.value) {
         
          arr.splice(i, 1);
        }
      }
      setcAddon([...arr]);
    }
  };

  // useEffect(()=>{
  //   console.log(bookingDetails)
  // },[bookingDetails])

  useEffect(() => {
    setBookingDetails({
      ...bookingDetails,
      addOn: caddOn,
      vehicleNo,
      timeSlot,
      totalprice: totalPrice
    });
    let price=0;
    caddOn.forEach((item) => {
      price +=parseInt( item.price);
    })
    setaddOnPrice(price);
  }, [vehicleNo, timeSlot, caddOn, totalPrice]);

  
  const payNow = async () => {
    if (vehicleNo === "") {
      toast.error("Vehicle no is required");
      return;
    }
    if (timeSlot === "") {
      toast.error("Time slot must be selected");
      return;
    }
    let resData = await saveDetails(bookingDetails, authenticated);

    if (resData) {
      router.push(routing.BOOKING_CONFIRMED.toString());
    } else {
      toast.error("Please try again ");
    }
  };
  
  const [plansDetails, setPlansDetails] = useState("");
  
  useEffect(() => {
   getplansdetails()
  }, []);


  const getplansdetails=async()=> {
   let data = await getPlans("onetime");
   let filtered_data = data.filter((data)=> data.vehicleType == bookingDetails.vehicleType)
   setPlansDetails(filtered_data);
  }

  useEffect(() => {
    getAddon()
  }, []);


  const getAddon = async() => {
    let res = await addOn();
    setAddonData(res);
  }


  useEffect(() => {
    if (plansDetails.length) {
      if (bookingDetails.category) {
        settotalPrice(parseInt( plansDetails[0][`price${bookingDetails.category}`] )+ parseInt( addOnPrice))
        
      } else { 
        toast.warn("Please select vehicle category first");
        Router.push("/");
      }    
  }
  }, [plansDetails, addOnPrice,bookingDetails])

  useEffect(()=>{
    if(!bookingDetails.phoneNo){
      Router.push("/")
    }
  },[])
  
  return (
    <>
      <Layout>
        <div className="flex text-white flex-col gap-1 md:w-[80%] w-[90%] bg-[#141414] rounded-[10px] mx-auto my-5 mt-[105px] mb-[33px] ">
          {/* upper */}
          <div className="flex flex-row gap-6 md:px-[45px] px-[20px]  md:pt-[60px] pt-6">
            {/* left */}
            <div className="md:w-[40%] hidden md:block h-[500px]">
              <img
                src="/Rectangle 2757.png"
                alt="wahing car"
                className="w-full object-cover h-full rounded-xl"
              />
            </div>
            {/* right */}
            <div className="flex flex-col md:w-[60%] w-full p-2">
              <h1 className="text-2xl font-bold">Features</h1>
              {
                plansDetails.length &&
                  <span className="mt-6 text-[14px] tracking-wide">
                    {plansDetails[0].desc}
                  </span>}
              <div className="flex flex-col mt-6">
                <h1 className="text-2xl font-bold">Vehicle Number</h1>
                <input
                  type="text"
                  placeholder="MH 02 2332"
                  className={vehicle_input}
                  id="vehicle_num"
                  onChange={(e) => setVehicleNo(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-6">
                <h1 className="text-2xl font-bold">Prefered Time Slot</h1>
                <div className="flex flex-wrap mt-3 gap-3 cursor-pointer">
                  <div
                    onClick={() => {
                      setSlot(6);
                      setTimeSlot("6 AM - 8 AM");
                    }}
                    className={`${slot == 6 ? active : inactive}`}>
                    6 AM - 8 AM
                  </div>
                  <div
                    onClick={() => {
                      setSlot(8);
                      setTimeSlot("8 AM - 10 AM");
                    }}
                    className={`${slot === 8 ? active : inactive}`}>
                    8 AM - 10 AM
                  </div>
                  <div
                    onClick={() => {
                      setSlot(10);
                      setTimeSlot("10 AM - 12 PM");
                    }}
                    className={`${slot === 10 ? active : inactive}`}>
                    10 AM - 12 PM
                  </div>
                  <div
                    onClick={() => {
                      setSlot(12);
                      setTimeSlot("12 PM - 2 PM");
                    }}
                    className={`${slot == 12 ? active : inactive}`}>
                    12 PM - 2 PM
                  </div>
                  <div
                    onClick={() => {
                      setSlot(2);
                      setTimeSlot("2 PM - 4 PM");
                    }}
                    className={`${slot == 2 ? active : inactive}`}>
                    2 PM - 4 PM
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <h1 className="text-2xl font-bold">Add On</h1>
                <div className="flex flex-wrap md:flex-row flex-col mt-[15px]">
                  {
                    addonData.map((item, index) => {
                      return (
                       <Fragment key={index}>
                        {bookingDetails.vehicleType == item.vehicleType ? (
                        <div className=" pr-2 pb-4 flex items-center w-auto">
                          <label htmlFor="complete_vaccum" className="mr-4 ">
                           {item.addon}
                          </label>
                          <input
                            type="checkbox"
                            name="complete_vaccum"
                            value={item.addon}
                            className="w-5 h-5"
                            onChange={(e)=>handleChange(e,item.price)}
                          />
                        </div>
                        ) :""}
                       </Fragment>
                      )
                     })
                  }
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-col md:flex-row md:gap-6 gap-3 w-[85%] md:mx-auto md:justify-end ml-7 md:my-[40px] my-5">
            <div className="flex flex-row items-center space-x-5">
              <h1 className="font-bold md:text-4xl text-2xl tracking-wide">
                Total
              </h1>
              <span className="md:text-6xl text-4xl font-bold">₹{ totalPrice}</span>
              <div
                className="flex justify-center rounded-[8px] bg-[#FFC044] cursor-pointer"
                onClick={payNow}>
                <button className="md:py-3 py-2 md:px-[52px] px-8 text-[18px] text-black border-2 border-[#FFC044] rounded-[8px] font-semibold">
                  PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Booking;
