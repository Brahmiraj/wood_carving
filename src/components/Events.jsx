import React from "react";
import Layer from "../assets/events/Layer.png";
import img1 from "../assets/events/img1.png";
import img2 from "../assets/events/img2.png";
import img3 from "../assets/events/img3.png";
import img4 from "../assets/events/img4.png";
import img5 from "../assets/events/img5.png";
import img6 from "../assets/events/img6.png";

export default function Events() {
  return (
    <div className="relative max-w-[2400px] mx-auto py-20">
      <img
        src={Layer}
        alt="Layer"
        className="absolute top-[-10%] left-[-40%]"
      />
      <div className="2xl:pl-20 max-2xl:flex max-2xl:flex-col max-2xl:justify-center max-2xl:items-center">
        <div className="bokor text-8xl text-white max-sm:text-5xl">Upcoming Events</div>
        <div className="p-[1px] bg-[#B5964D] w-1/2 max-2xl:w-3/4 my-2"></div>
      </div>
      <div>
        <div className="grid grid-cols-6 max-2xl:grid-cols-3 max-sm:grid-cols-2 justify-between items-end">
          <div className="flex flex-col justify-end items-center">
            <div className="relative top-5 flex flex-col justify-end items-center px-3">
              <h1 className="bigShoulders text-[#B5964D] text-2xl 4xl:text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h1 className="poppins text-white text-sm 4xl:text-xl">
                Lorem ipsum dolor sit amet consectetur. Tempor augue pretium sed
                faucibus. Bibendum purus at enim sagittis sed adipiscing commodo
                auctor vestibulum. Cursus nam ac eu ultrices enim amet in.
              </h1>
              <img src={img1} alt="img1" />
            </div>
            <div className="h-40 w-0.5 bg-white"></div>
            <div className="p-0.5 bg-white w-full max-2xl:mb-10"></div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <div className="relative top-20 flex flex-col justify-center items-center px-3">
              <h1 className="bigShoulders text-[#B5964D] text-2xl 4xl:text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h1 className="poppins text-white text-sm 4xl:text-xl">
                Lorem ipsum dolor sit amet consectetur. Tempor augue pretium sed
                faucibus. Bibendum purus at enim sagittis sed adipiscing commodo
                auctor vestibulum. Cursus nam ac eu ultrices enim amet in.
              </h1>
              <img src={img2} alt="img2" className="w-3/4" />
            </div>
            <div className="h-80 w-0.5 bg-white"></div>
            <div className="p-0.5 bg-white w-full max-2xl:mb-10"></div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <div className="relative top-8 flex flex-col justify-center items-center px-3">
              <h1 className="bigShoulders text-[#B5964D] text-2xl 4xl:text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h1 className="poppins text-white text-sm 4xl:text-xl">
                Lorem ipsum dolor sit amet consectetur. Tempor augue pretium sed
                faucibus. Bibendum purus at enim sagittis sed adipiscing commodo
                auctor vestibulum. Cursus nam ac eu ultrices enim amet in.
              </h1>
              <img src={img3} alt="img3" />
            </div>
            <div className="h-60 w-0.5 bg-white"></div>
            <div className="p-0.5 bg-white w-full max-2xl:mb-10"></div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <div className="relative top-5 flex flex-col justify-center items-center px-3">
              <h1 className="bigShoulders text-[#B5964D] text-2xl 4xl:text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h1 className="poppins text-white text-sm 4xl:text-xl">
                Lorem ipsum dolor sit amet consectetur. Tempor augue pretium sed
                faucibus. Bibendum purus at enim sagittis sed adipiscing commodo
                auctor vestibulum. Cursus nam ac eu ultrices enim amet in.
              </h1>
              <img src={img4} alt="img4" />
            </div>
            <div className="h-20 w-0.5 bg-white"></div>
            <div className="p-0.5 bg-white w-full max-2xl:mb-10"></div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <div className="flex flex-col justify-center items-center px-3">
              <h1 className="bigShoulders text-[#B5964D] text-2xl 4xl:text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h1 className="poppins text-white text-sm 4xl:text-xl">
                Lorem ipsum dolor sit amet consectetur. Tempor augue pretium sed
                faucibus. Bibendum purus at enim sagittis sed adipiscing commodo
                auctor vestibulum. Cursus nam ac eu ultrices enim amet in.
              </h1>
              <img src={img5} alt="img5" className="w-3/4" />
            </div>
            <div className="h-20 w-0.5 bg-white"></div>
            <div className="p-0.5 bg-white w-full max-2xl:mb-10"></div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <div className="relative top-8 flex flex-col justify-center items-center px-3">
              <h1 className="bigShoulders text-[#B5964D] text-2xl 4xl:text-4xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h1 className="poppins text-white text-sm 4xl:text-xl">
                Lorem ipsum dolor sit amet consectetur. Tempor augue pretium sed
                faucibus. Bibendum purus at enim sagittis sed adipiscing commodo
                auctor vestibulum. Cursus nam ac eu ultrices enim amet in.
              </h1>
              <img src={img6} alt="img6" />
            </div>
            <div className="h-60 w-0.5 bg-white"></div>
            <div className="p-0.5 bg-white w-full max-2xl:mb-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
