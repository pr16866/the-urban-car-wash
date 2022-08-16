import { useState ,useRef, useEffect, Fragment} from "react";
import { useAppContext } from "../ContextApi";
import Router from 'next/router'
import { routing } from "../Config/Routing";
import { toast } from "react-toastify";
import {Loader} from '@googlemaps/js-api-loader';
import PropTypes from 'prop-types';
import { getPinCodes } from "../Utils/api";

const Confirm_location = () => {
  const googlemap = useRef(null);
  const marker = useRef(null);
  let map; 

  const color = {
    'google-blue 100': `#4285F4`,
    'white 100': `rgb(255,255,255)`,
  }

  const buttonsDisabled = {
    fullscreenControl: true,
    mapTypeControl: true,
    streetViewControl: false,
    zoomControl: false,
  };

  const loader = new Loader({
    // apiKey: process.env.NEXT_PUBLIC_API_KEY,
    apiKey: "",
    version: 'weekly',
  });

  let locationInitialVal = {
    address: "",
    city: "Guwahati",
    area: "",
    landmark: "",
    pincode: "",
    paymentMode:"COD",
    Status: "unassigned"
  };

  const [currentLocation, setCurrentLocation] = useState(null)
  const { setLocation, location, bookingstarted, authenticated, newUser } = useAppContext();
  const { service } = bookingstarted;
  const { address, city, area, landmark, pincode } = location;
  const [pinCodes, setPinCodes] = useState([])

  useEffect(()=>{
    setLocation(locationInitialVal)
   },[])

  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value, phoneNo: authenticated.phoneNumber, ...currentLocation });
  }

  const getPinCodesFn = async() =>{
    let data = await getPinCodes();
    setPinCodes( data );
  }

  useState(() => {
    getPinCodesFn();
  },[])

  const confirmLocation_Fun = (e) => {
    e.preventDefault();
    if (address === "" || city === "" || area === "" || landmark === "" || pincode === "") {
      toast.error('All fields are required');
      return;
    }
    if (service && authenticated) {
      if (service === "subscription wash") {
        Router.push(routing.CHOOSE_PACKAGE);
      }
      else {
        Router.push(routing.BOOKING);
      };
    }
    else {
      Router.push("/");
    }
  }
  
  const getMap = () => {     
    loader.load().then(() => {
      const initialView = {
        center: {
          lat: 26.148043,
          lng: 91.731377,
        },
        zoom: 14, 
      };
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        ...initialView,
        ...buttonsDisabled,
      });
    });
    getUserLocation()
  }
  

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(userLocation)
        currentLocation ?  map.setCenter(userLocation) : ""
        loader.load().then(() => {
        const initialView = {
          center: {
            lat: userLocation.lat,
            lng: userLocation.lng,
          },
          zoom: 14, 
        };
        const google = window.google;
        map = new google.maps.Map(googlemap.current, {
          ...initialView,
          ...buttonsDisabled,
        });
        //MARKER
        const blueDot = {
          fillColor: color['google-blue 100'],
          fillOpacity: 1,
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          strokeColor: color['white 100'],
          strokeWeight: 2,
        };
        if (marker.current) {          
          marker.current.setMap(null); 
        }
      marker.current = new google.maps.Marker({ 
        icon: blueDot,
        position: userLocation,
      });
      marker.current.setMap(map);
      })
     });
    } else {
      toast.error("Please turn on GPS")
    }
  };

  useEffect(() => {
    getMap()
   }, []);


  return (
    <div>
     <form onSubmit={confirmLocation_Fun}>
        <div className="flex flex-col bg-[#141414] w-[95%] md:w-[80%] mx-auto px-[30px] md:px-[70px] pt-[42px] rounded-md  mt-[105px] mb-[33px]" tabIndex="0">
          <div className="mb-16">
            <h1 className="text-2xl text-white font-bold text-center">
              SELECT LOCATION
            </h1>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row gap-4 md:gap-[22px] mb-3 md:mb-6">
              <div className="w-full md:w-[65%]">
                <label
                  htmlFor="address"
                  className="block mb-1 font-semibold text-white text-semibold text-[15px]"
                >
                  Address *
                </label>
                <input
                  type="address"
                  name="address"
                  placeholder="Flat no. 6, Second floor, Rohine Residency"
                  className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-[35%]">
                <label
                  htmlFor="address"
                  className="block mb-1 font-semibold text-white text-semibold text-[15px]"
                >
                  City *
                </label>
                <input
                  type="address"
                  name="city"
                  placeholder="Guwahati"
                  className="w-full cursor-not-allowed bg-white text-[14px] px-4 py-[10px] rounded outline-none bg-grey-500"
                  disabled
                  value="Guwahati"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-[22px] mb-3 md:mb-6">
              <div className="w-full md:w-[33%]">
                <label
                  htmlFor="area"
                  className="block mb-1 font-semibold text-white text-semibold text-[15px]"
                >
                  Area *
                </label>
                <input
                  type="address"
                  name="area"
                  placeholder="Maan Chowk"
                  className="w-full text-[14px] px-4 py-[10px] rounded outline-none"

                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-[31%]">
                <label
                  htmlFor="landmark"
                  className="block mb-1 font-semibold text-white text-semibold text-[15px]"
                >
                  Landmark *
                </label>
                <input
                  type="address"
                  name="landmark"
                  placeholder="Vinayak Hospital"
                  className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-[35%]">
                <label
                  htmlFor="pincode"
                  className="block mb-1 font-semibold text-white text-semibold text-[15px]"
                >
                  Pin Code *
                </label>
             <select
              name="pincode"
              className="w-full text-[14px] px-4 py-[12px] rounded outline-none"
              onChange={handleChange}
              >
              <option>--SELECT--</option>
              {pinCodes.map((data, index)=>(
                <Fragment key={index}>
                <option>{data.pincode}</option>
               </Fragment>
              ))}
            </select>
            </div>
            </div>
          </div>
          <div className="w-full bg-[#ddd] mt-3 md:mt-0 h-[300px] mb-10">
            <div ref={googlemap} style={{height: "100%"}}/>;
          </div>
          <div className="flex justify-center items-center rounded-[8px] w-[80%] md:w-[50%] mx-auto mb-[2rem] bg-[#FFC044]">
            <button className="w-full text-center py-5" type="submit" >
              CONFIRM LOCATION
            </button>
          </div>
        </div>
      </form> 
  </div>
  );
};

Map.propTypes = {
  setMapObject: PropTypes.func.isRequired,
};


export default Confirm_location;
