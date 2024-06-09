import Image from "next/image";
import React from "react";

const Studentcard = ({
  image,
  name,
  branch,
  degree,
  what,
  year,
  employed,
  cgpa,
  cshow,
}) => {
  return (
    <div className=" w-full p-4 flex flex-col gap-7 rounded-3xl bg-[#191919] border-[1px] border-[#333333] ">
      <div className=" flex gap-4 items-center ">
        <div className=" h-[64px] w-[64px] rounded-full overflow-hidden  ">
          <Image
            height={400}
            width={400}
            className=" object-cover h-full w-full "
            src={image}
          />
        </div>
        <div className=" flex flex-col gap-2 ">
          <div className=" font-satoshi font-medium text-[white] text-[1rem] leading-none ">
            {name}
          </div>
          <div className=" flex gap-1 items-center text-[white] text-[0.9rem] leading-none font-manrope uppercase   ">
            <div>{degree}</div>
            {/* <Dot /> */}
            <div>{branch}</div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between w-full items-center gap-4  ">
        <div className=" w-full flex items-center justify-center py-[7px] bg-[#292929] border-[1px] border-[] rounded-3xl text-[#9F9F9F] font-manrope font-semibold text-[0.7rem] leading-none  ">
          {what}
        </div>
        <div className=" w-full flex items-center justify-center py-[7px] bg-[#292929] border-[1px] border-[] rounded-3xl text-[#9F9F9F] font-manrope font-semibold text-[0.7rem] leading-none  ">
          {year}
        </div>
        <div className=" w-full flex items-center justify-center py-[7px] bg-[#292929] border-[1px] border-[] rounded-3xl text-[#9F9F9F] font-manrope font-semibold text-[0.7rem] leading-none  ">
          {employed}
        </div>
      </div>
      {!cshow && (
        <div className=" w-full py-[10px] flex items-center justify-center text-[#FFFFFF] bg-[#8B66FE] rounded-3xl font-manrope font-semibold  ">
          Message
        </div>
      )}
      {cshow && (
        <div className=" w-full flex items-center justify-between ">
          <div className=" font-manrope text-[0.9rem] font-semibold text-[#535353] leading-none   ">
            {cgpa} CGPA
          </div>
          <div className=" w-[50%] py-[10px] flex items-center justify-center text-[#FFFFFF] bg-[#2E303A] rounded-3xl font-manrope font-semibold  ">
            Message
          </div>
        </div>
      )}
    </div>
  );
};

export default Studentcard;
