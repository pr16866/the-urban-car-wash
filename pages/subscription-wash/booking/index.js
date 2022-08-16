import { useEffect, useState } from "react";

import BookNow from "../../../Components/BookNow";
import { modalConfig } from "../../../Components/Config/Routing/Model";
import { useAppContext } from "../../../Components/ContextApi";
import Layout from "../../../Components/Layout";
import PricingModel from "../../../Components/Pricing-model";
import SubscriptionCard from "../../../Components/Subscription-wash/Booking";
import Button from "../../../Components/Subscription-wash/Button";

const BookingMain = () =>
{
  const { addNewWash, setAddNewWash, modelStatus } = useAppContext();

  useEffect( () =>
  {
    setAddNewWash( 1 );
  }, [] );

  return (
    <div>
      <Layout>
        <div className="flex text-white flex-col gap-1 md:w-[80%] w-[90%] bg-[#141414] rounded-[10px] mx-auto my-5 mt-[105px] mb-[33px]">
          {/* =========>>code for model<<========= */}

          {modelStatus === modalConfig.BOOKNOW_STARTED && (
            <div className="flex justify-center items-center fixed inset-0  z-50 outline-none focus:outline-none backdrop-blur-lg ">
              <BookNow />
            </div>
          )}

          <div>
            {[...new Array( addNewWash )].map( ( item, index ) =>
            {
              return (
                <div key={index}>
                  {index !== 0 && (
                    <hr className="md:w-[80%] w-[90%] text-center m-auto md:mt-16 mt-[0.5rem]" />
                  )}
                  <SubscriptionCard props={{ arrayIndex: index + 1 }} />
                </div>
              );
            } )}
            <Button />
          </div>
          <PricingModel />
        </div>
      </Layout>
    </div>
  );
};

export default BookingMain;