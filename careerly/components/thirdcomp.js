import React from "react";
import Padding from "./padding";
import Image from "next/image";
import One from "@/public/icons/one";
import Two from "@/public/icons/two";
import Get from "@/public/icons/get";
import Marquee from "react-fast-marquee";
import Whitedot from "@/public/icons/whitedot";

const Thirdcomp = ({ hidden = false }) => {
  return (
    <div
      className={`  w-full py-[5rem] ${
        hidden ? "bg-[#000000]" : "bg-[#171717]"
      } `}
    >
      <div className="w-full flex flex-col">
        <Padding className={" w-full flex items-center gap-3"}>
          <div className=" w-[45%] flex flex-col gap-3 ">
            <div className=" relative h-[271px] w-full rounded-3xl overflow-hidden  ">
              <Image
                height={1000}
                width={1000}
                className="object-cover h-full w-full"
                src={"/images/whiteframe.png"}
              />
              <div className=" w-fit absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 text-black font-space text-[28px] leading-none   ">
                Comprehensive Guidance
              </div>
            </div>
            <div className=" flex gap-3 h-[271px] ">
              <div className=" w-full h-full bg-[#FF8A66] rounded-3xl flex items-center justify-center ">
                <One />
              </div>
              <div className=" w-full h-full rounded-3xl flex items-center justify-center bg-[#8299F8] ">
                <Two />
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-between w-[55%] bg-[#6E40FF] min-h-[550px] rounded-3xl p-6 ">
            <div className=" flex items-center gap-4 ">
              <div className=" bg-[#FFFFFF] px-[20px] py-[14px] text-[20px] font-overused font-medium leading-none rounded-3xl text-[#6E40FF] ">
                Career
              </div>
              <div className=" bg-[#FFFFFF] px-[20px] py-[14px] text-[20px] font-overused font-medium leading-none rounded-3xl text-[#6E40FF] ">
                SkillsBoost
              </div>
              <div className=" bg-[#FFFFFF] px-[20px] py-[14px] text-[20px] font-overused font-medium leading-none rounded-3xl text-[#6E40FF] ">
                FutureReady
              </div>
            </div>
            <Get />
          </div>
        </Padding>
        <div
          className={` flex flex-col gap-24 py-36 over ${
            hidden ? "hidden" : "flex"
          } `}
        >
          <Marquee
            className="over"
            gradient={true}
            gradientWidth={20}
            gradientColor="#000000"
          >
            <div className=" flex items-center gap-10 text-[36px] font-space text-[white] leading-none uppercase pr-4 over   ">
              <div>Explore Careers </div>
              <Whitedot />
              <div>Learn Skills </div>
              <Whitedot />
              <div>Find Opportunities </div>
              <Whitedot />
              <div>Explore Careers </div>
              <Whitedot />
              <div>Learn Skills </div>
              <Whitedot />
              <div>Find Opportunities </div>
              <Whitedot />
              <div>Explore Careers </div>
              <Whitedot />
              <div>Learn Skills </div>
              <Whitedot />
              <div>Find Opportunities </div>
              <Whitedot />
              <div>Explore Careers </div>
              <Whitedot />
              <div>Learn Skills </div>
              <Whitedot />
              <div>Find Opportunities </div>
            </div>
            <div className=" flex items-center gap-10 text-[36px] font-space text-[white] leading-none uppercase pr-4  over   ">
              <div>Explore Careers </div>
              <Whitedot />
              <div>Learn Skills </div>
              <Whitedot />
              <div>Find Opportunities </div>
              <Whitedot />
              <div>Explore Careers </div>
              <Whitedot />
              <div>Learn Skills </div>
              <Whitedot />
              <div>Find Opportunities </div>
              <Whitedot />
              <div>Explore Careers </div>
              <Whitedot />
              <div>Learn Skills </div>
              <Whitedot />
              <div>Find Opportunities </div>
              <Whitedot />
              <div>Explore Careers </div>
              <Whitedot />
              <div>Learn Skills </div>
              <Whitedot />
              <div>Find Opportunities </div>
            </div>
          </Marquee>
          <Marquee
            direction="right"
            className="over"
            gradient={true}
            gradientWidth={50}
            gradientColor="#000000"
          >
            <div className=" flex items-center gap-10 text-[36px] font-space text-[white] leading-none uppercase pr-4 over   ">
              <div>Advance Careers </div>
              <Whitedot />
              <div>Passion Pursuit </div>
              <Whitedot />
              <div>Networking </div>
              <Whitedot />
              <div>Advance Careers </div>
              <Whitedot />
              <div>Passion Pursuit </div>
              <Whitedot />
              <div>Networking </div>
              <Whitedot />
              <div>Advance Careers </div>
              <Whitedot />
              <div>Passion Pursuit </div>
              <Whitedot />
              <div>Networking </div>
              <Whitedot />
              <div>Advance Careers </div>
              <Whitedot />
              <div>Passion Pursuit </div>
              <Whitedot />
              <div>Networking </div>
            </div>
            <div className=" flex items-center gap-10 text-[36px] font-space text-[white] leading-none uppercase pr-4  over   ">
              <div>Advance Careers </div>
              <Whitedot />
              <div>Passion Pursuit </div>
              <Whitedot />
              <div>Networking </div>
              <Whitedot />
              <div>Advance Careers </div>
              <Whitedot />
              <div>Passion Pursuit </div>
              <Whitedot />
              <div>Networking </div>
              <Whitedot />
              <div>Advance Careers </div>
              <Whitedot />
              <div>Passion Pursuit </div>
              <Whitedot />
              <div>Networking </div>
              <Whitedot />
              <div>Advance Careers </div>
              <Whitedot />
              <div>Passion Pursuit </div>
              <Whitedot />
              <div>Networking </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Thirdcomp;
