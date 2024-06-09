"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Topics = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTab1, setActiveTab1] = useState(-1);
  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
    setActiveTab1(-1);
  };

  const engineering = [
    "ECE",
    "Aerospace",
    "CSE",
    "Pharma",
    "EEE",
    "Biotechnology",
  ];
  const arts = [
    "Painting",
    "Theatre",
    "Music",
    "Film and Cinema",
    "Graphic Design",
  ];
  const business = [
    "Finance",
    "Marketing",
    "Management",
    "Entrepreneurship",
    "Analytics",
  ];
  const media = [
    "Journalism",
    "Public Relations",
    "Advertising",
    "Digital Media",
    "Film",
    " Television",
  ];

  return (
    <div className=" w-full px-4 ">
      <div className="w-full bg-[#191919] rounded-3xl flex flex-col pb-6">
        <div className=" flex flex-col pb-6 bg-[#191919] rounded-3xl  ">
          <div className=" py-12  px-6 text-[#FAFBFD] font-space font-medium text-[26px]  ">
            Personal Interests
          </div>
          <div className="w-full border-[1px] border-[#333333] "></div>
          <div className=" w-full flex flex-col px-6 pt-4 gap-12  ">
            <div className=" font-space font-medium text-white text-[26px]  ">
              What topic or subjects do you Enjoy reading or learning about
            </div>
            <div
              className={`flex w-max rounded-full  font-medium px-1 py-1 items-center border bg-[#333333] border-[#333333] 
       `}
              style={{ marginLeft: "-0.5rem" }}
            >
              <div
                className={clsx(
                  "  px-12 py-[1rem]   cursor-pointer  relative z-40 rounded-full  transition-all font-overused font-semibold text-[1rem] md:text-[0.9rem] duration-1000",
                  activeTab == 1 ? "text-[#191919]" : "text-[white]"
                )}
                onClick={() => changeTab(1)}
              >
                {activeTab == 1 && (
                  <motion.span
                    layoutId="tabs"
                    className={`  px-12 py-[1rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-black  
              bg-[white]    `}
                  />
                )}
                <div className="flex">
                  <div>Science and Technology</div>
                </div>
              </div>

              <div
                className={clsx(
                  " px-12 py-[1rem]   cursor-pointer  relative z-40 rounded-full font-overused font-semibold  transition-all text-[1rem] md:text-[0.9rem] duration-1000",
                  activeTab == 2 ? "text-[#191919]" : "text-[white]"
                )}
                onClick={() => changeTab(2)}
              >
                {activeTab == 2 && (
                  <motion.span
                    layoutId="tabs"
                    className={`  border border-[#f0f0f0] px-12 py-[1rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[white]      `}
                  />
                )}
                <div className=" flex gap-1 items-center">
                  <div className="  ">Arts and Culture</div>
                </div>
              </div>
              <div
                className={clsx(
                  " px-12 py-[1rem]   cursor-pointer  relative z-40 rounded-full font-overused font-semibold  transition-all text-[1rem] md:text-[0.9rem] duration-1000",
                  activeTab == 3 ? "text-[#191919]" : "text-[white]"
                )}
                onClick={() => changeTab(3)}
              >
                {activeTab == 3 && (
                  <motion.span
                    layoutId="tabs"
                    className={`  border border-[#f0f0f0] px-12 py-[1rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[white]      `}
                  />
                )}
                <div className=" flex gap-1 items-center">
                  <div className="  ">Business and Enterpreneurship</div>
                </div>
              </div>
              <div
                className={clsx(
                  " px-12 py-[1rem]   cursor-pointer  relative z-40 rounded-full font-overused font-semibold  transition-all text-[1rem] md:text-[0.9rem] duration-1000",
                  activeTab == 4 ? "text-[#191919]" : "text-[white]"
                )}
                onClick={() => changeTab(4)}
              >
                {activeTab == 4 && (
                  <motion.span
                    layoutId="tabs"
                    className={`  border border-[#f0f0f0] px-12 py-[1rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[white]      `}
                  />
                )}
                <div className=" flex gap-1 items-center">
                  <div className="  ">Media and Communication</div>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-6 ">
              {activeTab == 1 &&
                engineering.map((item, index) => (
                  <div
                    className={` h-[56px] w-[128px] rounded-[10px] text-[16px] font-medium font-overused text-[white] ${
                      activeTab1 == index ? "bg-[#8B66FE]" : " bg-[#292929] "
                    } border-[1px] border-[#333333] flex items-center justify-center  `}
                    onClick={() => {
                      setActiveTab1(index);
                    }}
                  >
                    {item}
                  </div>
                ))}
              {activeTab == 2 &&
                arts.map((item, index) => (
                  <div
                    className={` h-[56px] w-[128px] rounded-[10px] text-[16px] font-medium font-overused text-[white] ${
                      activeTab1 == index ? "bg-[#8B66FE]" : " bg-[#292929] "
                    } border-[1px] border-[#333333] flex items-center justify-center  `}
                    onClick={() => {
                      setActiveTab1(index);
                    }}
                  >
                    {item}
                  </div>
                ))}
              {activeTab == 3 &&
                business.map((item, index) => (
                  <div
                    className={` h-[56px] w-[128px] rounded-[10px] text-[16px] font-medium font-overused text-[white] ${
                      activeTab1 == index ? "bg-[#8B66FE]" : " bg-[#292929] "
                    } border-[1px] border-[#333333] flex items-center justify-center  `}
                    onClick={() => {
                      setActiveTab1(index);
                    }}
                  >
                    {item}
                  </div>
                ))}
              {activeTab == 4 &&
                media.map((item, index) => (
                  <div
                    className={` h-[56px] w-[128px] rounded-[10px] text-[16px] font-medium font-overused text-[white] ${
                      activeTab1 == index ? "bg-[#8B66FE]" : " bg-[#292929] "
                    } border-[1px] border-[#333333] flex items-center justify-center  `}
                    onClick={() => {
                      setActiveTab1(index);
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>
            <div className=" w-full flex items-center justify-between h-[40px] py-6 rounded-3xl bg-[#333333] px-4 border-[1px] border-[#444444] ">
              <div className=" flex items-center  gap-2 ">
                <div className=" font-overused text-white text-[15px] pr-8  ">
                  Progress
                </div>
                <div className=" h-[5px] w-[45px] rounded-2xl bg-[#6D6D6D] "></div>
                <div className=" h-[5px] w-[45px] rounded-2xl bg-[#8B66FE] "></div>
              </div>
              <div className=" flex items-center gap-4  ">
                <div className=" text-[#FAFBFD] text-[16px] font-overused  h-full px-8 py-2 rounded-full cursor-pointer   ">
                  Previous
                </div>
                <div className=" text-[#FAFBFD] text-[16px] font-overused bg-[#8B66FE] h-full px-8 py-2 rounded-full cursor-pointer   ">
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
