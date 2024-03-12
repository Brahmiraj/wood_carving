import React from "react";
import WhiteRound from "./WhiteRound";
import homebg from "../assets/home/homebg.png";

export default function Final() {
  return (
    <div className="relative max-w-[2400px] mx-auto -z-10">
      <div className="relative bottom-80 max-2xl:bottom-20 max-sm:bottom-10">
        <div>
          <img
            src={homebg}
            alt="homebg"
            className="absolute left-1/2 top-[31%] max-2xl:top-[21%] transform -translate-x-1/2 w-1/3 max-2xl:w-1/2 z-10"
          />
        </div>
        <div className="bg-[#C29545] w-7 max-2xl:w-5 max-sm:w-3 h-[450px] max-2xl:h-[500px] max-sm:h-60 max-lg:h-[400px] absolute transform top-1/2 -translate-y-1/2"></div>
        <div className="absolute transform top-[53%] -translate-y-1/2 left-40 max-2xl:left-14 max-sm:left-10 flex flex-col gap-5 max-sm:gap-1 text-white z-20">
          <h1 className="bigShoulders text-6xl 4xl:text-8xl max-2xl:text-5xl max-lg:text-4xl max-sm:text-xl w-[33%] 4xl:w-[45%] max-2xl:w-[40%]">
            Lorem ipsum dolor sit amet consectetur. Ut sed cras posuere
            tristique. Mauris non turpis nisl risus cras lectus adipiscing.
          </h1>
        </div>
        <div className="text-white flex gap-10 px-10 absolute bottom-[-8%] 4xl:bottom-44 max-2xl:hidden">
        <div className="w-2/6 text-3xl 4xl:text-4xl poppins font-light relative bottom-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat
          vulputate. Quis egestas pellentesque faucibus scelerisque consectetur
          amet. Imperdiet in posuere tempus enim sit semper turpis faucibus
          lectus. Eget et tempor dolor, amet,
        </div>
        <div className="w-4/6 flex flex-col gap-5">
          <h1 className="text-3xl 4xl:text-4xl poppins font-light w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            et, condimentum iaculis ac. Enim leo sit vestibulum vulputate
            placerat vulputate. Quis egestas pellentesque faucibus scelerisque
            consectetur amet. Imperdiet in posuere tempus enim sit semper turpis
            faucibus lectus. Eget et tempor dolor, amet, vel sit tellus sem.
            Lectus sed leo neque ut id nunc, amet. Ante non, tortor nisl, vitae
            orci lacus ipsum vehicula eu. Bibendum.
          </h1>
          <h1 className="text-6xl 4xl:text-8xl bigShoulders">Lorem ipsum dolor sit amet consectetur. Ut sed cras posuere tristique.  </h1>
        </div>
      </div>
        <div className="scale-50 max-2xl:scale-75 -z-10">
          <WhiteRound />
        </div>
      </div>
        <div className="bg-[#C29545] w-7 max-2xl:w-5 max-sm:w-3 h-[700px] max-2xl:h-[500px] max-sm:h-60 max-lg:h-[400px] absolute transform top-2/3 max-2xl:top-2/3 max -translate-y-1/2 right-0"></div>
        <div className="text-white flex flex-col gap-5 px-10 2xl:hidden relative bottom-40 max-sm:bottom-20">
        <div className="w-full text-3xl max-sm:text-xl poppins font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat
          vulputate. Quis egestas pellentesque faucibus scelerisque consectetur
          amet. Imperdiet in posuere tempus enim sit semper turpis faucibus
          lectus. Eget et tempor dolor, amet,
        </div>
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl max-sm:text-xl poppins font-light w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            et, condimentum iaculis ac. Enim leo sit vestibulum vulputate
            placerat vulputate. Quis egestas pellentesque faucibus scelerisque
            consectetur amet. Imperdiet in posuere tempus enim sit semper turpis
            faucibus lectus. Eget et tempor dolor, amet, vel sit tellus sem.
            Lectus sed leo neque ut id nunc, amet. Ante non, tortor nisl, vitae
            orci lacus ipsum vehicula eu. Bibendum.
          </h1>
          <h1 className="text-6xl max-sm:text-3xl bigShoulders">Lorem ipsum dolor sit amet consectetur. Ut sed cras posuere tristique.</h1>
        </div>
      </div>
    </div>
  );
}
