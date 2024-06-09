import Image from "next/image";
import React from "react";

const Activitycard = ({ head, company, svg, role, date, description }) => {
  return (
    <div className=" w-full flex items-start justify-between border-b-1 border-[#E2E4E8] px-9 py-7 ">
      <div className=" w-full flex flex-col gap-1 ">
        <div className=" w-full flex font-manrope font-medium text-[0.9rem] text-[#797D82]  ">
          {head}
        </div>

        <div className=" flex items-center gap-2 ">
          <div className=" font-satoshi font-medium text-[1.2rem] tect-black  ">
            {company}
          </div>
          <div className=" min-w-fit ">
            <Image
              height={20}
              width={20}
              className=" object-cover h-full w-full "
              src={svg}
            />
          </div>
        </div>

        <div className=" font-satoshi text-[0.9rem] text-[#585D63]  font-medium ">
          {role}
        </div>
        <div className=" font-satoshi text-[0.9rem] text-[#8C939D] max-w-[30rem]  font-medium ">
          {description}
        </div>
      </div>
      <div className=" flex flex-col gap-2 ">
        <div className=" font-manrope font-medium text-[0.9rem] text-[#797D82]">
          {date}
        </div>
        <div className=" bg-[#EFFAF5] py-[10px] px-[19px] flex items-center justify-center rounded-[34px] text-[#087B44] text-[0.9rem] leading-none font-manrope ">
          Open
        </div>
      </div>
    </div>
  );
};

export default Activitycard;
