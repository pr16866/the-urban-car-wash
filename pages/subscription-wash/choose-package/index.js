import React, { useEffect, useState, Fragment } from "react";
import Layout from "../../../Components/Layout";
import PriceCard from "../../../Components/Pricing/PricingCard";
import { mainBox } from "../../../Components/Pricing/index.module.css";
import { getPlans } from "../../../Components/Utils/api";
import Loder from "../../../Components/Loder";
import { useAppContext } from "../../../Components/ContextApi";

const ChoosePackage = () => {
  let arr = [1, 3, 2, 3];
  const { bookingstarted } = useAppContext();

  const [plans, setPlans] = useState( [] );
  const [loder, setLoder] = useState( false );

  useEffect( () => {
    getAllplans();
  }, [])

  const getAllplans = async () => {
    setLoder( false );
    let res = await getPlans( "subscription" );
    setLoder( true );
    setPlans( res );
  }

  return (
    <div>
      <Layout>
        <div className="flex flex-col items-center justify-center w-[100%] mb-[50px] pt-3">
          <h3 className=" text-black md:text-[45px] md:font-[800] md:leading-[58px]  text-[21px] font-[800] leading-[27px] text-center ">
            CHOOSE A PACKAGE
          </h3>
          {!loder &&
            <div className="flex  items-center justify-center w-[100%] h-[60vh]">
              <Loder />
            </div>
          }
          {
            loder &&
            <div
              className={`${ mainBox } flex items-center justify-center mt-6 flex-wrap md:gap-9 gap-5`}>
              {plans.map( ( item, index ) =>
              {
                return (
                  <Fragment key={index}>
                  {item.vehicleType == bookingstarted.vehicleType ? (
                  <div className="contents">
                    <PriceCard props={{ border: "2px solid black", item }} />
                  </div>
                  ) : ""}
                  </Fragment>
                );
              } )}
            </div>
          }
        </div>
      </Layout>
    </div>
  );
}

export default ChoosePackage;
