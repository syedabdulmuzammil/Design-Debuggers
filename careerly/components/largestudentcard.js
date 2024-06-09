// import Dot from "@/public/icons/dot";
// import Tick from "@/public/icons/tick";
import Image from "next/image";
import React from "react";

const Largestudentcard = ({
  name,
  branch,
  degree,
  what,
  year,
  para,
  languages,
  speacial,
  employed,
  image,
}) => {
  return (
    <div className=" h-full w-full bg-[#191919] flex flex-col rounded-3xl border-[1px] border-[#333333] p-6  over ">
      <div className=" flex flex-col w-full items-center gap-4 ">
        <div className=" border-2 border-[#E2E2E2] h-[118px] w-[118px] rounded-full overflow-hidden ">
          <Image
            height={500}
            width={300}
            className=" object-cover h-full w-full "
            src={image}
          />
        </div>
        <div className=" flex flex-col gap-5 items-center ">
          <div className=" font-satoshi font-medium text-[white] text-[1.3rem] leading-none  ">
            {name}
          </div>
          <div className=" flex gap-1 items-center text-[white] text-[0.9rem] leading-none font-manrope uppercase   ">
            <div>{degree}</div>
            {/* <Dot /> */}
            <div>{branch}</div>
          </div>
          <div className=" flex items-center gap-1  ">
            <div className=" px-[12px] py-[4px] bg-[#FFFFFF] border-1 rounded-3xl text-[black] font-manrope font-semibold text-[0.8rem] leading-none  ">
              {what}
            </div>
            <div className=" px-[12px] py-[4px] bg-[#FFFFFF] border-1 rounded-3xl text-[black] font-manrope font-semibold text-[0.8rem] leading-none  ">
              {year}
            </div>
            <div className=" px-[12px] py-[4px] bg-[#FFFFFF] border-1 rounded-3xl text-[black] font-manrope font-semibold text-[0.8rem] leading-none  ">
              {employed}
            </div>
          </div>
          <div className=" w-full py-[10px] flex items-center justify-center text-[#FFFFFF] bg-[#2E303A] rounded-3xl font-manrope font-semibold  ">
            Message
          </div>
          <div className=" w-full font-manrope font-medium text-[white] text-[0.9rem] leading-[1.5rem]   ">
            {para}
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-3 py-4  ">
        <div className=" flex flex-col gap-3 ">
          <div className=" text-[white] font-medium font-satoshi text-[1rem] py-2  ">
            Specialites
          </div>
          <div className=" flex flex-col gap-6 ">
            {speacial.map((item) => (
              <div className=" flex items-center gap-1    ">
                {/* <Tick /> */}
                <div className=" text-[white] font-manrope font-medium text-[0.9rem] leading-none   ">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Largestudentcard;
