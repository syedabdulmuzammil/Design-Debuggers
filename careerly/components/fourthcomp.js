import React from "react";
import Padding from "./padding";
import Image from "next/image";
import Arrow from "@/public/icons/arrow";

const Fourthcomp = () => {
  return (
    <div className="bg-[#171717]">
      <Padding>
        <div className="flex justify-between items-center w-full  py-[8rem]">
          <div className="flex flex-col gap-5">
            <div className="text-white text-[50px] font-space w-[45rem] leading-none ">
              Understanding Your Interests And Strengths
            </div>
            <div className="flex flex-col text-[#ACACAC] gap-5 font-overused ">
              {" "}
              <div className="flex gap-3">
                {" "}
                <div>.</div>{" "}
                <div>
                  Personality Tests: Discover your personality type and how it
                  can influence your career choices
                </div>
              </div>{" "}
              <div className="flex gap-3">
                <div>.</div>{" "}
                <div>
                  {" "}
                  Skills Inventory: Identify your strengths and areas for
                  improvement.
                </div>
              </div>{" "}
              <div className="flex gap-3">
                <div>.</div>{" "}
                <div>
                  Interest Surveys: Learn which fields align with your passions
                </div>
              </div>
            </div>
            <div className="uppercase font-overused text-[18px] flex items-center text-white bg-[#FF8A66] justify-center w-[40%] h-[4rem] rounded-full ">
              apply now{" "}
              <div>
                <Arrow />
              </div>{" "}
            </div>
          </div>
            {" "}
          
          
          <div className="w-[32rem]  filter grayscale ">
            <Image
              height={500}
              width={500}
              className=" object-cover h-full w-full"
              src={"/images/girl.png"}
            />
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Fourthcomp;
