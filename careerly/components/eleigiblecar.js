import React from "react";
import Padding from "./padding";
import Image from "next/image";

const  Eligiblecar= ({
  img,
  name,
  skill,
  button,
  button1,
  button2,
  location,
  svg,
  locate,
  svg1,
  eligible,
}) => {
  return (
    <div>
      <Padding>
      <div className="border-[1px] rounded-[20px] bg-[#2A2929] border-[#333333] w-fit px-5 py-5 ">
        <div className="flex items-center gap-3 py-5">
          <div className="w-[48px] h-[48px] rounded-[10px] border-[1px] ">
            <Image
              height={500}
              width={500}
              className=" object-cover h-full w-full"
              src={img}
            />{" "}
          </div>
          <div className="font-overused text-[18px] leading-[20px] text-[#FFFFFF] font-medium ">
            {name}
          </div>
        </div>
        <div className="w-[124px] h-fit font-overused text-[14px] leading-[20px] text-[#BABABA] pb-5 ">
          {skill}
        </div>
        <div className="flex gap-[10px] px-[12px] py-[7px] ">
          <div className="px-[12px] py-[4px] rounded-[70px] border-[1px] border-[#2A2929] bg-[#333333] font-space text-[#C3C3C3] text-[12px] font-semibold ">
            {button}
          </div>
          <div className="px-[12px] py-[4px] rounded-[70px] border-[1px] border-[#2A2929] bg-[#333333] font-space text-[#C3C3C3] text-[12px] font-semibold ">
            {button1}
          </div>
          <div className="px-[12px] py-[4px] rounded-[70px] border-[1px] border-[#2A2929] bg-[#333333] font-space text-[#C3C3C3] text-[12px] font-semibold ">
            {button2}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-space font-semibold text-[14px] text-[#BABABA] py-3 ">
            {location}
          </div>
          <div className="flex gap-2 pb-5">
            {" "}
            <div>{svg}</div>
            <div className="font-medium font-space leading-[20px] text-[14px] text-[#BDBDBD] w-[240px] h-[40px] ">
              {locate}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end items-end">
        <div className=" flex items-center py-[10px] px-[19px] rounded-[13px] w-full justify-end gap-3 h-[39px]">
        <div>{svg1}</div>
          <div className="font-space text-[15px] leading-[20px] font-medium text-[#FD6666] ">
            {eligible}
          </div>
        </div>
        </div>
        </div>
      </Padding>
    </div>
  );
};

export default Eligiblecar;
