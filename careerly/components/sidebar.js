"use client";
// import Harvard from "@/public/icons/harvard";
// import Message from "@/public/icons/message";
// import Mycollege from "@/public/icons/mycollege";
// import Placement from "@/public/icons/placement";
// import Report from "@/public/icons/report";
// import Student from "@/public/icons/student";
// import Test from "@/public/icons/test";
import { React, useState } from "react";
import clsx from "clsx";
import Question from "@/public/icons/question";
import Logo from "@/public/icons/logo";
// import Dashboard from "@/public/icons/dashboard";
// import Question from "@/public/icons/question";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className=" min-h-[100%] px-7 pt-8 pb-8 fixed top-0 left-0 min-w-[15%] max-w-[15%] z-[1000]  flex flex-col justify-between gap-2 bg-[black] border-r-[1px] border-[#323232]  ">
      <div className=" flex flex-col items-start gap-8 2xl:gap-16 ">
        <div>
          <Logo />
        </div>
        <div className=" flex flex-col gap-[0.8rem] 2xl:gap-[1.3rem] h-[27rem]  overflow-y-scroll xl:overflow-visible     py-[1rem] ">
          <div
            onClick={() => setActiveIndex(0)}
            className={clsx(
              "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
              activeIndex === 0
                ? "text-[#16191D] bg-white border-[#E2E4E8]"
                : "text-[#FFFFFF] border-transparent"
            )}
          >
            <div>{/* <Dashboard activeIndex={activeIndex} /> */}</div>
            <div className="font-space ">Dashboard</div>
          </div>
          <div
            onClick={() => setActiveIndex(1)}
            className={clsx(
              "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
              activeIndex === 1
                ? "text-[#16191D] bg-white border-[#E2E4E8]"
                : "text-[#FFFFFF] border-transparent"
            )}
          >
            <div>{/* <Mycollege activeIndex={activeIndex} /> */}</div>
            <div className="font-space ">Educational details</div>
          </div>
          <div
            onClick={() => setActiveIndex(2)}
            className={clsx(
              "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
              activeIndex === 2
                ? "text-[#16191D] bg-white border-[#E2E4E8]"
                : "text-[#FFFFFF] border-transparent"
            )}
          >
            <div>{/* <Placement activeIndex={activeIndex} /> */}</div>
            <div className="font-space">Personal Intrests</div>
          </div>
          <div
            onClick={() => setActiveIndex(3)}
            className={clsx(
              "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
              activeIndex === 3
                ? "text-[#16191D] bg-white border-[#E2E4E8]"
                : "text-[#FFFFFF] border-transparent"
            )}
          >
            <div>{/* <Message activeIndex={activeIndex} /> */}</div>
            <div className="font-space">Recommendation</div>
          </div>

          <div
            onClick={() => setActiveIndex(4)}
            className={clsx(
              "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
              activeIndex === 4
                ? "text-[#16191D] bg-white border-[#E2E4E8]"
                : "text-[#FFFFFF] border-transparent"
            )}
          >
            <div>{/* <Student activeIndex={activeIndex} /> */}</div>
            <div className="font">Career Assessments </div>
          </div>
          <div
            onClick={() => setActiveIndex(5)}
            className={clsx(
              "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
              activeIndex === 5
                ? "text-[#16191D] bg-white border-[#E2E4E8]"
                : "text-[#FFFFFF] border-transparent"
            )}
          >
            <div>{/* <Test activeIndex={activeIndex} /> */}</div>
            <div className="font-space">Mentors</div>
          </div>
          <div
            onClick={() => setActiveIndex(6)}
            className={clsx(
              "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
              activeIndex === 6
                ? "text-[#16191D] bg-white border-[#E2E4E8]"
                : "text-[#FFFFFF] border-transparent"
            )}
          >
            <div>{/* <Report activeIndex={activeIndex} /> */}</div>
            <div className="font-space">Messages</div>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex flex-col">
          <div className=" w-full h-[6rem] border-[2px] flex items-center justify-center border-[#EAEEF3] rounded-3xl ">
            <Question />
          </div>
          <div className=" flex flex-col items-center justify-center gap-1 w-full">
            <div className=" font-satoshi text-[0.9rem] font-medium text-[#A4AEBC] ">
              Stuck somehwere need help?
            </div>
            <div className=" font-satoshi text-[0.9rem] font-medium text-[#A4AEBC] ">
              Get quick help from us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
