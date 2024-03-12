import React from "react";
import Aboutbg from "../assets/about/Aboutbg.png";
import MidImg from "../assets/about/MidImg.png";

export default function About() {
  return (
    <div className="relative max-w-[2400px] mx-auto">
      <div className="relative">
        <div className="bg-[#C29545] w-10 max-2xl:w-5 max-sm:w-3 h-[700px] max-2xl:h-[500px] max-sm:h-60 max-lg:h-[400px] absolute transform top-1/2 -translate-y-1/2"></div>
        <div className="uppercase absolute transform top-1/2 -translate-y-1/2 left-20 max-sm:left-10 flex flex-col gap-5 max-sm:gap-1 text-white">
          <span className="bokor text-7xl 4xl:text-8xl max-2xl:text-5xl max-sm:text-3xl">
            A
          </span>
          <span className="bokor text-7xl 4xl:text-8xl max-2xl:text-5xl max-sm:text-3xl">
            B
          </span>
          <span className="bokor text-7xl 4xl:text-8xl max-2xl:text-5xl max-sm:text-3xl">
            O
          </span>
          <span className="bokor text-7xl 4xl:text-8xl max-2xl:text-5xl max-sm:text-3xl">
            U
          </span>
          <span className="bokor text-7xl 4xl:text-8xl max-2xl:text-5xl max-sm:text-3xl">
            T
          </span>
        </div>
        <div>
          <div className="bg-[#956E2A] w-80 4xl:w-[480px] max-2xl:w-72 max-lg:w-60 max-sm:w-36 h-[700px] 4xl:h-[1050px] max-2xl:h-[550px] max-lg:h-[450px] max-sm:h-[250px] absolute transform top-1/2 max-lg:top-1/2 -translate-y-1/2 left-1/2 max-sm:left-3/4 -translate-x-1/2">
            <div className="flex flex-col gap-10 max-2xl:gap-5 max-sm:gap-0 relative right-40 max-2xl:right-28 max-sm:right-20 top-[5%] max-sm:top-0">
              <h1 className="bokor text-4xl 4xl:text-6xl max-sm:text-lg whitespace-nowrap text-white relative right-60 max-2xl:right-0 max-sm:right-10 4xl:right-[500px]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <img
                src={MidImg}
                alt=""
                className="w-full h-full max-2xl:w-[85%]"
              />
            </div>
            <div className="flex flex-col justify-end items-end gap-10 absolute transform top-1/2 -translate-y-1/2 left-full -translate-x-[15%] text-white max-2xl:hidden">
              <h1 className="w-[600px] 4xl:w-[900px] 4xl:text-3xl">
                Lorem ipsum dolor sit amet consectetur. Nam fames interdum
                consectetur nisl netus pretium tristique. Pellentesque amet diam
                consectetur vel. Ut amet nisl laoreet scelerisque. Eget dictum
                massa sit odio erat nec eu amet nunc. Hac aliquam non aliquam
                nec et. Malesuada mattis arcu faucibus id imperdiet sed. Natoque
                pellentesque nibh arcu eu velit. Amet malesuada elementum nisi
                est quis sit dictumst. Neque diam eros consectetur facilisis
                morbi. Proin orci cursus quam pellentesque blandit fusce
                interdum pulvinar urna. Amet elit tortor ipsum ut fermentum
                purus vitae quis diam. A scelerisque at ac mauris. Odio nibh sed
                proin mauris nunc iaculis velit. Adipiscing lacus ornare
                phasellus vitae ac ornare purus vestibulum mi. Ultricies arcu
                vitae eget scelerisque ac ac. In nisi dictum venenatis feugiat.
                Dui et lorem duis ultrices tristique nunc ipsum. Ullamcorper
                sagittis faucibus pulvinar bibendum neque. Ridiculus id ac quam
                duis varius mattis viverra eget. Ut nullam quam in diam.
              </h1>
              <button className="uppercase bokor p-3 bg-[#C29545] px-16 4xl:text-4xl">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Aboutbg} alt="Aboutbg" className="w-full relative -z-10" />
        </div>
      </div>
      <div className="relative 2xl:hidden">
        <div className="flex flex-col justify-center items-center gap-10 max-sm:gap-5 absolute transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white z-10">
          <h1 className="w-[600px] max-sm:w-[350px] text-sm">
            Lorem ipsum dolor sit amet consectetur. Nam fames interdum
            consectetur nisl netus pretium tristique. Pellentesque amet diam
            consectetur vel. Ut amet nisl laoreet scelerisque. Eget dictum massa
            sit odio erat nec eu amet nunc. Hac aliquam non aliquam nec et.
            Malesuada mattis arcu faucibus id imperdiet sed. Natoque
            pellentesque nibh arcu eu velit. Amet malesuada elementum nisi est
            quis sit dictumst. Neque diam eros consectetur facilisis morbi.
            Proin orci cursus quam pellentesque blandit fusce interdum pulvinar
            urna. Amet elit tortor ipsum ut fermentum purus vitae quis diam. A
            scelerisque at ac mauris. Odio nibh sed proin mauris nunc iaculis
            velit. Adipiscing lacus ornare phasellus vitae ac ornare purus
            vestibulum mi. Ultricies arcu vitae eget scelerisque ac ac. In nisi
            dictum venenatis feugiat. Dui et lorem duis ultrices tristique nunc
            ipsum. Ullamcorper sagittis faucibus pulvinar bibendum neque.
            Ridiculus id ac quam duis varius mattis viverra eget. Ut nullam quam
            in diam.
          </h1>
          <button className="uppercase bokor p-3 max-sm:p-1 bg-[#C29545] px-16 max-sm:px-10 max-sm:text-lg">
            Read more
          </button>
        </div>
        <div className="2xl:hidden">
          <img src={Aboutbg} alt="Aboutbg" className="w-full relative -z-10 max-sm:h-[500px]" />
        </div>
      </div>
    </div>
  );
}
