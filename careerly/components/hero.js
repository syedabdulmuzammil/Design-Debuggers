import React from "react";
import Padding from "./padding";

const Hero = () => {
  return (
    <div
      className="bg-black h-screen w-full flex items-center justify-center
    "
    >
      <Padding>
        <div className="bg-black flex flex-col text-white  ">
        <div className="text-[85px] text-[#AEAEAE] font-space ">
          Unlock Your Dream</div>
          <div className="flex items-center gap-[10px]">
          <div className="bg-[#FF8A66] font-overused font-medium leading-none w-fit h-fit text-[59px] px-[23px] py-[11px    ] rounded-full text-black ">Career</div>
         <div className="text-[85px] text-[#AEAEAE] font-space "> with Careerly</div>
        </div>
        </div>
      </Padding>
    </div>
  );
};

export default Hero;
