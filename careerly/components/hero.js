import React from "react";
import Padding from "./padding";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="bg-black h-[80vh] w-full flex items-center justify-center relative
    "
    >
      <Padding>le
        <div className="bg-black fx flex-col text-white  ">
          <div className="text-[85px] text-[#AEAEAE] font-space ">
            Unlock Your Dream
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#FF8A66] font-overused font-medium leading-none w-fit h-fit text-[59px] px-[23px] py-[11px] rounded-full text-black ">
              Career
            </div>
            <div className="text-[85px] text-[#AEAEAE] font-space ">
              {" "}
              with Careerly
            </div>
          </div>
        </div>
      </Padding>
      <div className=" absolute top-[25%] left-[7%] h-[246px] w-[160px] ">
        <Image
          height={500}
          width={500}
          className=" object-cover h-full w-full"
          src={"/images/one.png"}
        />
      </div>
    </div>
  );
};

export default Hero;
