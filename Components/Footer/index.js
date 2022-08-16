import React from "react";
import { social_icons, main } from "./index.module.css";
import { GrInstagram, GrTwitter, GrYoutube, GrDribbble } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

const index = () => {

  return (
    <div className="flex flex-col-reverse md:flex-row w-[80%] justify-between mx-auto py-16">
      {/* left */}
      <div className="flex flex-col md:m-0 mt-10 h-auto">
        <img src="/logo.png" alt="logo" width="78.4px" height="28.63px" />
        <div className="flex flex-col text-white mt-6">
          Copyright © 2022 Urban Car Wash.
          <span>All rights reserved</span>
        </div>
        <div className="mt-6 flex flex-row space-x-4">
          <div className={social_icons}>
            <GrInstagram color="white" className="w-5 h-5" />
          </div>
          <div className={social_icons}>
            <GrDribbble color="white" className="w-5 h-5" />
          </div>
          <div className={social_icons}>
            <GrTwitter color="white" className="w-5 h-5" />
          </div>
          <div className={social_icons}>
            <GrYoutube color="white" className="w-5 h-5" />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex md:flex-row flex-col md:text-left text-center gap-8 text-white">
        <div className="flex flex-col px-4">
          <h1 className="mb-6 text-[20px] font-medium">Company</h1>
          <span className="mb-2">About us</span>
          <span className="mb-2">Contact us</span>
          <span className="mb-2">Pricing us</span>
          <span className="mb-2">Testimonials us</span>
        </div>
        <div className="flex flex-col px-4">
          <h1 className="mb-6 text-[20px] font-medium">Support</h1>
          <span className="mb-2">Help center</span>
          <span className="mb-2">Terms of service</span>
          <span className="mb-2">Legal</span>
          <span className="mb-2">Privacy policy</span>
          <span className="mb-2">Status</span>
        </div>
        <div className="flex flex-col px-4">
          <h1 className="mb-6 text-[20px] font-medium">Let’s us help you</h1>
          <div className={`flex mx-auto w-[200px] relative text-white ${ main }`}>
            <input
              type="email"
              className={`text-[14px] bg-[#44403c] outline-none py-2 px-4 rounded-md tracking-wide ${ main }`}
              placeholder="Your email address"
            />
            <div className="absolute top-[10px] right-[10px] cursor-pointer">
              <FiSend color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
