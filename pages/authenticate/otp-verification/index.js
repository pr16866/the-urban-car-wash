import React, {useState } from 'react'
import Layout from '../../../Components/Layout'
import { toast } from 'react-toastify';
import Router from 'next/router'
import { routing } from '../../../Components/Config/Routing';
import { useAppContext } from '../../../Components/ContextApi';
// import { useAppContext } from '../../../Components/ContextApi';
// import { confirmationResult, confirm } from 'firebase/firestore';

function Otp_verification() {
  const { authenticated, setnewUser, newUser } = useAppContext();
  const [otp, setOtp] = useState( "" );
  const [otpError, setotpError] = useState( false );

  const handleChange = ( e ) => {
    setOtp( e.target.value );
  }

  const verifyOtp = async () => {
    toast.info( "Verifying OTP" );
    const code = otp;
    // console.log(code);
    confirmationResult.confirm( code ).then( ( result ) =>
    {
      Router.push( routing.CONFIRM_LOCATION );
      const user = result.user;
   
      setnewUser( "phoneNumber");  
      setotpError( false );
    } ).catch( ( error ) =>
    {
      setotpError( true );
      toast.error( "OTP is invalid" );
    } );
  }
  
  return (
    <>
      <Layout>
        <div className="md:mt-[150px] md:mb-[83px] mt-[132px] mb-[83px] flex justify-center items-center">

          <div className="flex flex-col md:w-[80%] w-[90%] bg-[#141414] rounded-[10px] mx-auto py-[80px]">
            <div className="md:w-1/2 w-[90%] p-5 mx-auto mb-2">
              <div id="sign-in-button"></div>
              <label
                htmlFor="phone_number"
                className="block mb-1 font-semibold text-white text-semibold text-[15px] tracking-wide">
                OTP *
              </label>
              <input
                type="number"
                name="phone_number"
                placeholder="Enter OTP"
                className="w-full text-[14px] px-4 py-[10px] rounded outline-none"
                onChange={handleChange}
              />
            </div>
            {otpError &&
              <div className="text-[#EB5757] mt-2 text-xs text-center">
                <span>Try Again!! Wrong code Entered</span>
              </div>
            }
            <div className="flex justify-center font-medium items-center p-5 md:w-1/2 w-[90%] mx-auto">
              <button className="w-full text-center py-4 rounded-[8px] bg-[#FFC044]" onClick={verifyOtp}>
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Otp_verification