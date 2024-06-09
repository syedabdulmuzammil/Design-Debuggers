import Rightarrow from "@/public/icons/rightarrow";
import React from "react";

const Plaincard = ({ heading, number, subhead }) => {
  return (
    <div className=" h-full w-full p-5 flex flex-col justify-between font-overused rounded-3xl bg-[#191919]     ">
      <div className=" w-full flex items-center justify-between ">
        <div className=" text-[white]  font-medium text-[2.1rem]  ">
          {heading}
        </div>
        <Rightarrow />
      </div>
      <div className=" flex flex-col gap-2    ">
        <div className=" text-[white] font-medium text-[3.1rem] leading-none  ">
          {number}
        </div>
        <div className=" text-[white] font-medium  text-[0.9rem] leading-none  ">
          {subhead}
        </div>
      </div>
    </div>
  );
};

export default Plaincard;
