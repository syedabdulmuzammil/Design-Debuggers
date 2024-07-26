"use client";
import React, { useState } from "react";
import Newcard from "./newcard";
import Marker from "@/public/icons/marker";
import Eligiblecar from "./eleigiblecar";
import No from "./no";
import Search from "@/public/icons/search";
import clsx from "clsx";
import { motion } from "framer-motion";

const Alljobs = () => {
  const data = [
    {
      company: "Facebook(Meta)",
      role: "Front-end developer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: true,
      img: "/images/facebook.png",
    },
    {
      company: "Salesforce",
      role: "Front-end developer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: true,
      img: "/images/sales.png",
    },

    {
      company: "Google",
      role: "Full Stack developer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: true,
      img: "/images/google.png",
    },
    {
      company: "Google",
      role: "Full Stack developer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: true,
      img: "/images/google.png",
    },

    {
      company: "NVIDIA",
      role: "Software Engineer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: false,
      img: "/images/NVIDIA.png",
    },
    {
      company: "NVIDIA",
      role: "Software Engineer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: false,
      img: "/images/NVIDIA.png",
    },

    {
      company: "Wipro",
      role: "Software Engineer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: false,
      img: "/images/wipro.png",
    },
    {
      company: "Infosys",
      role: "Cybersecurity Analyst",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: false,
      img: "/images/wipro.png",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex w-full justify-between px-12">
          <div
            className={`flex w-max rounded-full  font-medium px-1 py-1 items-center border bg-[#333333] border-[#333333] 
       `}
            style={{ marginLeft: "-0.5rem" }}
          >
            <div
              className={clsx(
                "  px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full  transition-all font-overused font-semibold text-[1rem] md:text-[0.9rem] duration-1000",
                activeTab == 1 ? "text-[#191919]" : "text-[white]"
              )}
              onClick={() => changeTab(1)}
            >
              {activeTab == 1 && (
                <motion.span
                  layoutId="tabs"
                  className={`  px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-black  
              bg-[white]    `}
                />
              )}
              <div className="flex">
                <div>On Campus</div>
              </div>
            </div>

            <div
              className={clsx(
                " px-8 py-[0.5rem]   cursor-pointer  relative z-40 rounded-full font-overused font-semibold  transition-all text-[1rem] md:text-[0.9rem] duration-1000",
                activeTab == 2 ? "text-[#191919]" : "text-[white]"
              )}
              onClick={() => changeTab(2)}
            >
              {activeTab == 2 && (
                <motion.span
                  layoutId="tabs"
                  className={`  border border-[#f0f0f0] px-8 py-[0.5rem] absolute top-0 rounded-full left-0 w-full h-full -z-10 text-white bg-[white]      `}
                />
              )}
              <div className=" flex gap-1 items-center">
                <div className="  ">Off Campus</div>
              </div>
            </div>
          </div>

          <div className="w-[257px] h-[45px] rounded-[22px] border-[1px] bg-[#2A2929] border-[#333333] flex items-center gap-3 justify-center ">
            <div>
              <Search />
            </div>
            <div className="font-space text-[16px] font-medium text-[#FFFFFF] ">
              Search for placements
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
        <div className="grid grid-cols-3 gap-y-14  gap-4 pr-12">
          {data.map((job, index) => (
            <Newcard
              img={job.img}
              name={job.company}
              skill={job.role}
              button={job.time}
              button1={job.how}
              button2={job.when}
              location={"Location"}
              svg={<Marker />}
              locate={job.location}
              register={"Register"}
              eligible={job.Eligible}
            ></Newcard>
          ))}
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Alljobs;
