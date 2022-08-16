import Layout from "../../../Components/Layout";
import
  {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } from "firebase/auth";
import { toast } from "react-toastify";
import Router from "next/router";
import { useState } from "react";
import { routing } from "../../../Components/Config/Routing";
import { auth } from "../../../Components/Config/Firebase";

const NumberLogin = () => {

  const [number, setNumber] = useState( "" );

  const PhoneAuth = ( e ) => {
    if ( number === "" )
    {
      return toast.error( "Please enter a Phone number" );
    } else if ( number.length !== 10 )
    {
      return toast.error( "Please enter a valid phone number." );
    }
    toast.info( "Sending OTP" );
    auth.languageCode = "en";
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: ( response ) =>
        {
          onSignInSubmit();
        },
      },
      auth
    );
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+91" + number;
    signInWithPhoneNumber( auth, phoneNumber, appVerifier )
      .then( ( confirmationResult ) => {
        Router.push( routing.OTP_VERIFICATION );
        window.confirmationResult = confirmationResult;
      } )
      .catch( ( error ) => {
        toast.error( error.message );
      });
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center items-center md:mt-[150px] md:mb-[83px] mt-[132px] mb-[83px]">
          <div className="flex flex-col md:w-[80%] w-[90%] bg-[#141414] rounded-[10px] mx-auto py-[80px]">
            <div className="md:w-1/2 w-[90%] p-5 mx-auto mb-2">
              <div id="sign-in-button"></div>
              <label
                htmlFor="phone_number"
                className="block mb-1 font-semibold text-white text-semibold text-[15px]">
                Phone Number *
              </label>
              <input
                type="number"
                name="phone_number"
                placeholder="Phone Number"
                className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
                onChange={( event ) => setNumber( event.target.value )}
              />
            </div>

            <div className="flex justify-center items-center p-5 md:w-1/2 w-[90%] mx-auto">
              <button
                className="w-full font-medium text-center py-4 rounded-[8px] bg-[#FFC044]"
                onClick={PhoneAuth}>
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NumberLogin;
