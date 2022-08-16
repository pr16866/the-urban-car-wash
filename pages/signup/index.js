import React from 'react'
import Link from "next/link";
import { routing } from '../../Components/Config/Routing';

function SignUp()
{
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-[45%] h-full bg-black text-white hidden lg:flex items-center justify-start">
        <img src="/car_signup.svg" />
      </div>

      <div className="flex flex-col w-full lg:w-[55%] h-full pl-8 pt-8 pr-8">
        <div className="flex justify-between items-center w-full tracking-wider mb-6">

          <Link href="/">
            <a>
              <img
                src="/logo.png"
                alt="logo"
                width="78.4px"
                height="28.63px"
                color="black"
              />
            </a>
          </Link>
          <div className="text-sm">
            have an account?

            <Link href={routing.LOGIN.toString()}>
              <span className="font-semibold cursor-pointer"> Sign in!</span>
            </Link>
          </div>
        </div>

        <div className="text-[24px] text-center mt-14 font-bold">
          Get Your Cars Cleaned!!
        </div>
        <span className="text-center text-sm mt-2 tracking-[1.2px] font-medium text-white">
          Getting started is easy
        </span>

        <div className="w-[90%] md:w-[50%] my-16 mx-auto">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full my-2 p-5 rounded-md outline-none tracking-[0.01em] text-[14px]"
          />
          <input
            type="text"
            placeholder="Phone number*"
            className="w-full my-2 p-5 rounded-md outline-none tracking-[0.01em] text-[14px]"
          />
          <input
            type="text"
            placeholder="Email*"
            className="w-full my-2 p-5 rounded-md outline-none tracking-[0.01em] text-[14px]"
          />
        </div>

        <div className="w-[90%] md:w-[50%] mx-auto">
          <button className="rounded-md font-normal text-center w-full py-3 bg-black text-white outline-none">
            Sent OTP
          </button>
        </div>

        <span className="text-[#5A5A5A] mt-14 text-sm tracking-[0.01em] text-center font-light">
          By Continuing you indicate that you read and agreed to the Terms of
          Use
        </span>
      </div>
    </div>
  )
}

export default SignUp