import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[2400px] mx-auto text-white/60 flex flex-col justify-center items-center gap-10 roboto px-10 pb-5">
      <div className="flex justify-between items-start w-full max-sm:flex-col">
        <div className="flex justify-between items-start w-2/5 max-lg:flex-col max-lg:gap-5 max-lg:w-full">
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <h1 className="text-white text-xl 4xl:text-4xl font-semibold">Company</h1>
          <h1 className="4xl:text-2xl">About Us</h1>
          <h1 className="4xl:text-2xl">Why Choose us</h1>
          <h1 className="4xl:text-2xl">Pricing</h1>
          <h1 className="4xl:text-2xl">Testimonial</h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <h1 className="text-white text-xl  4xl:text-4xl font-semibold">Resources</h1>
          <h1 className="4xl:text-2xl">Privacy Policy</h1>
          <h1 className="4xl:text-2xl">Terms and Condition</h1>
          <h1 className="4xl:text-2xl">Blog</h1>
          <h1 className="4xl:text-2xl">Contact Us</h1>
        </div>
        </div>
        <div className="flex justify-between items-start w-3/5 max-lg:flex-col max-lg:gap-5 max-lg:w-full">
        <div className="flex flex-col justify-start items-start gap-3 w-1/3 max-lg:w-full">
          <h1 className="text-white text-xl  4xl:text-4xl font-semibold">Product</h1>
          <h1 className="4xl:text-2xl">Project management</h1>
          <h1 className="4xl:text-2xl">Time tracker</h1>
          <h1 className="4xl:text-2xl">Time schedule</h1>
          <h1 className="4xl:text-2xl">Lead generate</h1>
          <h1 className="4xl:text-2xl">Remote Collaboration</h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 w-2/3 max-lg:w-full">
          <h1 className="text-white text-6xl  4xl:text-8 xl sanchez">Site Title</h1>
          <h1 className="text-white 4xl:text-2xl">Subscribe to our Newsletter</h1>
          <div className="">
            <input type="text" placeholder="Enter your Email" className="bg-[#2B2E3C] rounded-lg p-6 px-20 4xl:text-4xl max-2xl:px-5"/>
            <button className="bg-white rounded-lg p-4 px-10 text-black relative right-[10%] 4xl:text-4xl max-2xl:px-3">Subscribe</button>
          </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-40 4xl:text-2xl">
        <h1>Copyright @2024</h1>
        <div className="flex justify-center items-center gap-5">
          <FaFacebook className="w-5 h-5 4xl:w-8 4xl:h-8" />
          <FaTwitter className="w-5 h-5 4xl:w-8 4xl:h-8" />
          <FaInstagram className="w-5 h-5 4xl:w-8 4xl:h-8" />
          <FaLinkedin className="w-5 h-5 4xl:w-8 4xl:h-8" />
        </div>
      </div>
    </div>
  );
}
