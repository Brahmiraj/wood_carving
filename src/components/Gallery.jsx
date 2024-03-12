import React from "react";
import img1 from "../assets/gallery/img1.png";
import img2 from "../assets/gallery/img2.png";
import img3 from "../assets/gallery/img3.png";
import img4 from "../assets/gallery/img4.png";
import img5 from "../assets/gallery/img5.png";
import img6 from "../assets/gallery/img6.png";
import img7 from "../assets/gallery/img7.png";

export default function Gallery() {
  return (
    <div className="relative max-w-[2400px] mx-auto w-11/12 scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-corner-rounded-full scrollbar-thumb-[#B5964D] scrollbar-track-[#262217] overflow-x-scroll scrollbar-h-3">
      <div className="2xl:pl-20 max-2xl:flex max-2xl:flex-col max-2xl:justify-center max-2xl:items-center">
        <div className="bokor text-8xl text-white max-sm:text-5xl">Gallery</div>
        <div className="p-[1px] bg-[#B5964D] w-1/2 max-2xl:w-3/4 my-2"></div>
      </div>
      <div className="flex w-[200%] py-20">
        {/* first section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="grid gap-4">
            <div>
              <img src={img1} alt=""  className="w-full h-full"/>
            </div>
            <div>
              <img src={img2} alt=""  className="w-full h-full" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img src={img3} alt=""  className="w-full h-full" />
            </div>
            <div>
              <img src={img4} alt=""  className="w-full h-full" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img src={img5} alt=""  className="w-full h-full" />
            </div>
            <div>
              <img src={img6} alt=""  className="w-full h-full" />
            </div>
            <div>
              <img src={img7} alt=""  className="w-full h-full" />
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="grid gap-4">
            <div>
              <img src={img1} alt=""  className="w-full h-full" />
            </div>
            <div>
              <img src={img2} alt=""  className="w-full h-full" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img src={img3} alt=""  className="w-full h-full" />
            </div>
            <div>
              <img src={img4} alt=""  className="w-full h-full" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img src={img5} alt=""  className="w-full h-full" />
            </div>
            <div>
              <img src={img6} alt=""  className="w-full h-full" />
            </div>
            <div>
              <img src={img7} alt=""  className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
