import React from "react";
import WhiteRound from "./WhiteRound";
import homebg from "../assets/home/homebg.png";

export default function Home() {
  return (
    <div className="relative max-w-[2400px] mx-auto">
      <div>
        <img
          src={homebg}
          alt="homebg"
          className="absolute left-1/2 top-[10%] transform -translate-x-1/2 w-9/12 4xl:w-4/5 max-2xl:w-3/4 h-4/5"
        />
      </div>
      <div className="z-10 absolute left-[63%] top-[85%] max-2xl:top-[80%] max-sm:top-[83%] transform -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="w-9/12 text-center">
          <h1 className="bokor text-[100px] 4xl:text-[150px] text-white uppercase leading-[200px] 4xl:leading-[400px] max-2xl:text-[70px] max-xl:text-[50px] max-2xl:leading-[200px] max-sm:text-[30px] max-sm:leading-[60px]">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>
      </div>
      <div className="absolute bottom-64 4xl:bottom-[450px] max-2xl:bottom-52 max-sm:bottom-20 w-full h-64 4xl:h-[450px] max-2xl:h-52 max-sm:h-20 bg-[#111111] opacity-90"></div>
      <div className="absolute bottom-0 w-full h-64 4xl:h-[450px] max-2xl:h-52 max-sm:h-20 bg-[#0D0D0D]"></div>
      <div>
        <WhiteRound />
      </div>
    </div>
  );
}
