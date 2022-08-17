import { createContext, useContext, useEffect, useState } from "react";
import { modalConfig } from "../Config/Routing/Model";
const AppContext = createContext();

export function AppWrapper({ children }) {

  let initialVal = {
    vehicleType: "car",
    category: "hatchback",
    service: "subscription wash",
  };
  
  let locationInitialVal = {
    address: "",
    city: "Guwahati",
    area: "",
    landmark: "",
    pincode: "",
    paymentMode:"COD",
    Status: "unassigned"
  };

  const [bookingstarted, setBookingstarted] = useState(initialVal);
  const [location, setLocation] = useState(locationInitialVal);
  const [authenticated, setAuthenticated] = useState(false);
  const [newUser, setnewUser] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [addNewWash, setAddNewWash] = useState(1);
  const [subscriptionWash, setsubscriptionWash] = useState([]);
  const [modelStatus, setModelStatus] = useState("");
  const [subscriptionPrice, setSubscriptionPrice] = useState({packageName:"",
    packagePrice:0
  });
  const [totalCost, setTotalCost] = useState(0);


  useEffect(() => {
    setBookingDetails({ ...bookingstarted, ...location });
  }, [bookingstarted, location, modelStatus]);

  // console.log(newUser);
  return (
    <AppContext.Provider
      value={{
        bookingstarted,
        setBookingstarted,
        authenticated,
        setAuthenticated,
        setnewUser,
        newUser,
        location,
        setLocation,
        setBookingDetails,
        bookingDetails,
        addNewWash,
        setAddNewWash,
        subscriptionWash,
        setsubscriptionWash,
        modelStatus,
        setModelStatus,
        subscriptionPrice,
        setSubscriptionPrice,
        totalCost, setTotalCost
      }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}