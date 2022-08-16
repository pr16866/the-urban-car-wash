import React, { useEffect, useState, Fragment } from 'react'
import { useAppContext } from '../ContextApi';
import { AiFillCloseCircle } from "react-icons/ai";
import PriceCard from '../Pricing/PricingCard';
import { mainBox } from "../Pricing/index.module.css"
import { modalConfig } from '../Config/Routing/Model';
import { getPlans } from '../Utils/api';

function PricingModel(){
  const { modelStatus, setModelStatus, bookingstarted} = useAppContext();
  const [loder, setLoder] = useState( false );
  const [plans, setPlans] = useState( [] );

  useEffect( () => {
    getAllplans();
  }, [] )

  const getAllplans = async () => {
    setLoder( false );
    let res = await getPlans( "subscription" );
    setLoder( true );
    setPlans( res );
  }

  return (
    <div>
      {modelStatus === modalConfig.BOOKNOW_DONE &&
        <div className="inset-0  fixed backdrop-blur-lg z-10 "
          style={{ overflow: "scroll" }}>

          <div className="flex flex-col items-center justify-center w-[80%] my-[100px] py-6  m-auto relative bg-black  " >
            <button className="btn text-white cursor-pointer absolute top-[4px] right-[4px] text-4xl "
              onClick={() => setModelStatus( modalConfig.PACKAGE_DESTROYED )}>
            <AiFillCloseCircle />
            </button>
            <h3 className=" text-white  md:text-[45px] md:font-[800] md:leading-[58px]  text-[21px] font-[800] leading-[27px] text-center">CHOOSE A PACKAGE</h3>
            <div className={`${ mainBox } flex items-center justify-center mt-12 flex-wrap md:gap-9 gap-5`}>
              {plans.map( ( item, index ) => {
                return (
                  <Fragment key={index}>
                  {item.vehicleType == bookingstarted.vehicleType ? (
                  <div className="contents">
                    <PriceCard props={{ border: "2px solid #FFC044", item }} />
                  </div>
                  ) : ""}
                </Fragment>
                )
              })}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default PricingModel