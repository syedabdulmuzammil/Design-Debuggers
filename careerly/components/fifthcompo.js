import Arrow from "@/public/icons/arrow";
import React from "react";
import Padding from "./padding";

const Fifthcompo = () => {
  return (
    <div className="bg-black ">
      <Padding>
        <div className="flex justify-between  w-full  py-[8rem]">
          <div className="flex flex-col gap-5">
            <div className="text-white text-[50px] font-space w-[45rem] leading-none ">
              Why choose our platform for your career needs
            </div>
            <div className="text-[#B1B1B1] w-[28rem]  font-normal leading-[33px] font-overused text-[18px] ">
              Discover the unique benefits of our platform tailored to your
              career needs. From expert guidance to personalized support, we're
              here to help you succeed
            </div>
          </div>{" "}
          <div className="flex gap-5 ">
            <div className="bg-[#8299F8]  w-[10rem] h-[4rem] rounded-full text-center text-white font-overused py-4 text-[20px] ">
              CareerPath
            </div>
            <div className="bg-[#FF8A66] w-[10rem] h-[4rem] rounded-full text-center text-white font-overused py-4 text-[20px]">
              SkillsBoost
            </div>
            <div className="bg-[#6E40FF] w-[10rem] h-[4rem] rounded-full text-center text-white font-overused py-4 text-[20px]">
              FutureReady
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Fifthcompo;
