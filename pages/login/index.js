import React from 'react'
import Link from "next/link";
import { routing } from '../../Components/Config/Routing';


function Login(){
  return (
    <div>
      <div className="flex flex-row h-screen w-full">
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
              Don&#39;t have an account?
              <Link href={routing.SIGNUP.toString()}>
                <span className="font-semibold cursor-pointer"> Sign up!</span>
              </Link>
            </div>
          </div>

          <div className="text-4xl text-center mt-16 font-bold">Welcome Back</div>
          <span className="text-center text-sm mt-2 tracking-[1.2px] font-medium">
            Login into Your account
          </span>
          <div className="flex flex-row items-center justify-center mt-10 mb-8">
            <button className="px-5 py-3 bg-white rounded-[5px] mx-2">
              <div className="flex flex-row items-center justify-center">
                <img src="/google.png" alt="google_logo" className="w-6 h-6" />
                <span className="text-xs ml-2 font-semibold">Google</span>
              </div>
            </button>
            <button className="px-5 py-3 bg-white rounded-[5px] mx-2">
              <div className="flex flex-row items-center justify-center">
                <img src="/facebook.png" alt="google_logo" className="w-6 h-6" />
                <span className="text-xs ml-2 font-semibold">Facebook</span>
              </div>
            </button>
          </div>

          <div className="flex flex-row justify-center items-center w-[80%] lg:w-[50%] mx-auto relative mt-2">
            <span className="text-xs tracking-wider z-10 bg-[#FEBF44] px-4">
              Or continue with
            </span>
            <div className="absolute justify-center items-center w-[100%] h-[1px] bg-[#DBDBDB]"></div>
          </div>

          <div className="w-[80%] md:w-[60%] mt-10 mb-[20px] mx-auto">
            <input
              type="text"
              placeholder="Email/Phone number"
              className="w-full p-4 rounded-[10px] outline-none tracking-[0.01em] text-[14px]"
            />
            <div className="flex relative flex-row mt-9">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 rounded-[10px] outline-none tracking-[0.01em] text-[14px]"
              />
              <img
                src="/show.svg"
                className="absolute top-[16px] w-[24px] h-[24px] right-5 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex w-[80%] md:w-[60%] mx-auto mb-9 flex-row justify-between items-center">
            <div>
              <p className="text-[14px]">Remember me</p>
            </div>
            <div>
              <p className="text-[14px]">forgot Password</p>
            </div>
          </div>

          <div className="w-[80%] md:w-[60%] mx-auto">
            <button className="rounded-md border-2 border-[#5A5A5A] text-center w-full py-3">
              Log In
            </button>
          </div>
        </div>

        <div className="w-[45%] h-full bg-black text-white hidden lg:flex items-center justify-end">
          <img src="/car_login.svg" />
        </div>
      </div>
    </div>
  )
}

export default Login