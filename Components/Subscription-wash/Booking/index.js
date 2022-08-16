import React,{ Fragment } from "react";
import { useAppContext } from "../../ContextApi";
import
  {
    active,
    inactive,
    vehicle_input,
    activeMonths,
    inactiveMonths,
    activeWashTime,
    inactiveWashTime,
  } from "./index.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addOn, savepackageDeail } from "../../../Components/Utils/api";
import { modalConfig } from "../../Config/Routing/Model";
import Button from "../Button";
import Router from "next/router";

function SubscriptionCard( { props } ){
  const [timeSlot, setSlot] = useState( "" );
  const [months, setMonths] = useState( "" );
  const [washTime, setWashTime] = useState( "" );
  const [vehicleNo, setVehicleNum] = useState( "" );
  const [addonData, setAddonData] = useState( [] );

  const {
    bookingDetails,
    setBookingDetails,
    authenticated,
    setsubscriptionWash,
    subscriptionWash,
    setModelStatus,
    addNewWash,
    setAddNewWash,
    modelStatus,
    bookingstarted,
    location,
    newUser,
    subscriptionPrice,
    setSubscriptionPrice,
    totalCost,
    setTotalCost,
  } = useAppContext();


  useEffect( () =>
  {
    setsubscriptionWash( [
      { ...bookingstarted, ...subscriptionPrice, addOn: [] },
    ] );
  }, [] );

  useEffect( () =>
  {
    if ( modelStatus === modalConfig.PACKAGE_DONE )
    {
      setsubscriptionWash( [
        ...subscriptionWash,
        { ...bookingstarted, ...subscriptionPrice, addOn: [] },
      ] );
      setModelStatus( "" );
    }
  }, [modelStatus, subscriptionPrice] );


  const vehicleNumChange = ( e ) => {
    setVehicleNum( e.target.value );
  };

  useEffect( () => {
    if ( vehicleNo || timeSlot || months || washTime )
    {
      let arr = subscriptionWash;

      let obj = { vehicleNo, washTime, months, timeSlot };
      let newObj = { ...arr[props.arrayIndex - 1], ...obj };
      arr[props.arrayIndex - 1] = newObj;

      setsubscriptionWash( arr );
    }
  }, [vehicleNo, timeSlot, months, washTime] );



  const handleChange = ( e, price ) =>
  {
    let originArr = subscriptionWash;

    let arr = originArr[props.arrayIndex - 1].addOn;

    if ( e.target.checked )
    {
      let obj = {
        selected: e.target.value,
        price,
      };
      arr = [...arr, obj];
    } else
    {
      for ( let i = 0; i < arr.length; i++ )
      {
        if ( arr[i].selected === e.target.value )
        {
          arr.splice( i, 1 );
        }
      }
    }
    originArr[props.arrayIndex - 1].addOn = arr;
    setsubscriptionWash( [...originArr] );
  };


  useEffect( () =>
  {
    if ( !authenticated )
    {
      Router.push( "/" );
    }
  }, [] );

  useEffect( () => {
    if ( subscriptionWash.length >= 1 )
    {
      let data = subscriptionWash.map( ( element, index ) =>
      {

        if ( element.packageName && element.packagePrice )
        {
          let initialCost = parseInt( element.packagePrice );
          if ( element.months ) initialCost *= parseInt( element.months );
          if ( element.washTime ) initialCost *= parseInt( element.washTime );

          let addOnInitialCost = 0;
          element.addOn.map( ( item, index ) =>
          {
            addOnInitialCost += parseInt( item.price );
          } );
          if ( element.months ) addOnInitialCost *= parseInt( element.months );
          if ( element.washTime ) addOnInitialCost *= parseInt( element.washTime );
          initialCost += addOnInitialCost;
          return initialCost;
        } else {
          Router.push( "/" );
        }
      } );
      let TotalCost = 0;
      for ( let i = 0; i < data.length; i++ ){
        TotalCost += data[i];
      }
      setTotalCost( TotalCost );
    }
  }, [subscriptionWash, vehicleNo, timeSlot, months, washTime] );


  useEffect( () => {
    getAddon();
  }, [] );


  const getAddon = async () => {
    let res = await addOn();
    setAddonData( res );
  };

  return (
    <div className="flex flex-row gap-6 md:px-[45px] px-[20px] md:pt-[60px] pt-6">
      <div className="md:w-[40%] hidden md:block h-[605px]">
        <img
          src="/Rectangle 2757.png"
          alt="wahing car"
          className="w-full object-cover h-full rounded-xl"
        />
      </div>
      <div className="flex flex-col md:w-[60%] w-full p-2">
        {
          subscriptionWash.length === [...new Array( addNewWash )].length &&
          <>
            <h1 className="text-2xl font-bold capitalize">{subscriptionWash[props.arrayIndex - 1].packageName}</h1>
            <span className="mt-5 text-[14px] tracking-wide">
              {subscriptionWash[props.arrayIndex - 1].desc}
            </span>
          </>
        }
        <div className="flex md:flex-row flex-col mt-5">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">No of months</h1>
            <div className="flex flex-row space-x-3 mt-[10px]">
              <div
                id="noOfMonths"
                onClick={() => setMonths( 1 )}
                className={`${ months == 1 ? activeMonths : inactiveMonths }`}>
                1
              </div>
              <div
                id="noOfMonths"
                onClick={() => setMonths( 3 )}
                className={`${ months == 3 ? activeMonths : inactiveMonths }`}>
                3
              </div>
              <div
                id="noOfMonths"
                onClick={() => setMonths( 6 )}
                className={`${ months == 6 ? activeMonths : inactiveMonths }`}>
                6
              </div>
            </div>
          </div>
          <div className="md:ml-[80px] ml-0 mt-6 md:mt-0">
            <h1 className="text-2xl font-bold">Vehicle Number</h1>
            <input
              type="text"
              placeholder="MH 02 2332"
              className={vehicle_input}
              id="vehicle_num"
              onChange={vehicleNumChange}
              value={vehicleNo}
            />
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold">No. of washes per month</h1>
          <div className="flex flex-row space-x-3 mt-[10px]">
            <div
              id="noOfMonths"
              onClick={() => setWashTime( 4 )}
              className={`${ washTime == 4 ? activeWashTime : inactiveWashTime
                }`}>
              4x
            </div>
            <div
              id="noOfMonths"
              onClick={() => setWashTime( 6 )}
              className={`${ washTime == 6 ? activeWashTime : inactiveWashTime
                }`}>
              6x
            </div>
            <div
              id="noOfMonths"
              onClick={() => setWashTime( 8 )}
              className={`${ washTime == 8 ? activeWashTime : inactiveWashTime
                }`}>
              8x
            </div>
            <div
              id="noOfMonths"
              onClick={() => setWashTime( 12 )}
              className={`${ washTime == 12 ? activeWashTime : inactiveWashTime
                }`}>
              12x
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h1 className="text-2xl font-bold">Prefered Time Slot</h1>
          <div className="flex flex-wrap mt-3 gap-3 cursor-pointer">
            <div
              onClick={() => setSlot( "6 AM - 8 AM" )}
              className={`${ timeSlot == "6 AM - 8 AM" ? active : inactive }`}>
              6 AM - 8 AM
            </div>
            <div
              onClick={() => setSlot( "8 AM - 10 AM" )}
              className={`${ timeSlot === "8 AM - 10 AM" ? active : inactive }`}>
              8 AM - 10 AM
            </div>
            <div
              onClick={() => setSlot( "10 AM - 12 PM" )}
              className={`${ timeSlot == "10 AM - 12 PM" ? active : inactive }`}>
              10 AM - 12 PM
            </div>
            <div
              onClick={() => setSlot( "12 PM - 2 PM" )}
              className={`${ timeSlot == "12 PM - 2 PM" ? active : inactive }`}>
               12 PM - 2 PM
            </div>
            <div
              onClick={() => setSlot( "2 PM - 4 PM" )}
              className={`${ timeSlot == "2 PM - 4 PM" ? active : inactive }`}>
               2 PM - 4 PM
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h1 className="text-2xl font-bold">Add On</h1>
          <div className="flex flex-wrap md:flex-row flex-col mt-[15px]">
            {addonData.map( ( item, index ) =>
            {
              return (
                <Fragment key={index}>
                {subscriptionWash[props.arrayIndex - 1]?.vehicleType == item.vehicleType ? (
                <div className="w-max pr-2 pb-4 flex items-center">
                  <label htmlFor="complete_vaccum" className="mr-4">
                    {item.addon}
                  </label>
                  <input
                    type="checkbox"
                    name="complete_vaccum"
                    value={item.addon}
                    className="w-5 h-5"
                    onChange={( e ) => handleChange( e, item.price )}
                  />
                </div>
                ): ""} 
                </Fragment>
              );
            } )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCard;
