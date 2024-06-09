"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import Studentcard from "./studentcard";
import Largestudentcard from "./largestudentcard";

const Mentors = () => {
  const [tab, setTab] = useState();
  const single = {
    name: "Eion Morgan",
    degree: "B-TECH",
    branch: "CSE-AI & ML",
    what: "Student",
    employed: "Unemployed",
    year: "2024",
    para: "As an external contributor, I want to be able to see status of uploaded materialsAs an external contributor, I want to be able to see status of uploaded materialsAs an external contributor.",
    languges: ["English", "Hindi"],
    special: [
      "Programming Languages",
      "Server-Side Frameworks",
      "API Deevelopment",
      "Devops Practices",
      "API Deevelopment",
      "Devops Practices",
    ],
    image: "/images/eion.png",
  };

  const data = [
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "SDE",
      what: "Google",
      employed: "Unemployed",
      year: "2024",
      image: "/images/eion.png",
    },
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "IT",
      what: "Wipro",
      employed: "Employed",
      year: "2024",
      image: "/images/p2.png",
    },
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "AI",
      what: "Amazon",
      employed: "Employed",
      year: "2024",
      image: "/images/p1.png",
    },
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "SDE",
      what: "Google",
      employed: "Unemployed",
      year: "2024",
      image: "/images/eion.png",
    },
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "IT",
      what: "Wipro",
      employed: "Employed",
      year: "2024",
      image: "/images/p2.png",
    },
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "AI",
      what: "Amazon",
      employed: "Employed",
      year: "2024",
      image: "/images/p1.png",
    },
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "SDE",
      what: "Google",
      employed: "Unemployed",
      year: "2024",
      image: "/images/eion.png",
    },
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "IT",
      what: "Wipro",
      employed: "Employed",
      year: "2024",
      image: "/images/p2.png",
    },
    {
      name: "Eion Morgan",
      degree: "B-TECH",
      branch: "AI",
      what: "Amazon",
      employed: "Employed",
      year: "2024",
      image: "/images/p1.png",
    },
  ];

  return (
    <div className=" w-full px-4 ">
      <div className="w-full bg-[#191919] rounded-3xl flex flex-col px-4 pb-6">
        <div className=" flex flex-col ">
          <div className=" py-12  px-6 text-[#FAFBFD] font-space font-medium text-[26px]  ">
            Mentors
          </div>
          <div className="w-full border-[1px] border-[#333333] "></div>
          <motion.div className=" flex gap-4 pt-6 w-full relative  ">
            <div className=" w-[70%] xl:w-[78%]  overflow-hidden overflow-y-scroll grid over grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 ">
              {data.map((item) => (
                <Studentcard
                  name={item.name}
                  year={item.year}
                  what={item.what}
                  image={item.image}
                  employed={item.employed}
                  degree={item.degree}
                  branch={item.branch}
                  cshow={false}
                />
              ))}
            </div>
            <div className=" w-[30%] xl:w-[22%] sticky top-0 right-0  ">
              <Largestudentcard
                name={single.name}
                year={single.year}
                degree={single.degree}
                languages={single.languges}
                speacial={single.special}
                employed={single.employed}
                para={single.para}
                what={single.what}
                branch={single.branch}
                image={single.image}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
