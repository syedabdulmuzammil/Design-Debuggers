import Image from "next/image";
import React from "react";

const Activitycard = ({ head, company, svg, role, date, description }) => {
  return (
    <div className=" w-full flex items-start justify-between bg-[#191919] border-b-1 border-[#E2E4E8] px-9 py-7  ">
      <div className=" w-full flex flex-col gap-1 ">
        <div className=" w-full flex font-manrope font-medium text-[0.9rem] text-[white]  ">
          {head}
        </div>

        <div className=" flex items-center gap-2 ">
          <div className=" font-satoshi font-medium text-[1.2rem] text-white ">
            {company}
          </div>
          <div className=" min-w-fit ">
            <Image
              height={16}
              width={16}
              className=" object-cover h-full w-full "
              src={"/images/microsoft.png"}
            />
          </div>
        </div>

        <div className=" font-satoshi text-[0.9rem] text-[white]  font-medium ">
          {role}
        </div>
        <div className=" font-satoshi text-[0.9rem] text-[white] max-w-[30rem]  font-medium ">
          {description}
        </div>
      </div>
      <div className=" flex flex-col gap-2 ">
        <div className=" font-manrope font-medium text-[0.9rem] text-[white]">
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
