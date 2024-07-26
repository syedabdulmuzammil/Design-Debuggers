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
import Dashboard from "@/public/icons/dashboard";
import Education from "@/public/icons/education";
import Personal from "@/public/icons/personal";
import Recommed from "@/public/icons/recommed";
import Career from "@/public/icons/career";
import Mentor from "@/public/icons/mentor";
import Message from "@/public/icons/message";
import Link from "next/link";
import Oppur from "@/public/icons/oppur";
import Image from "next/image";
import Three from "@/public/icons/three";
import { easeInOut, motion } from "framer-motion";
// import Dashboard from "@/public/icons/dashboard";
// import Question from "@/public/icons/question";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [set, onSet] = useState(false);
  return (
    <div className=" min-h-[100%] px-7 pt-8 pb-8 fixed top-0 left-0 w-[19rem] z-[1000]  flex flex-col justify-between gap-2 bg-[black] border-r-[1px] border-gray-400  ">
      <div className=" flex flex-col items-start gap-8 2xl:gap-16 ">
        <Link href={"/"}>
          <div>
            <Logo />
          </div>
        </Link>
        <div className=" flex flex-col gap-[0.8rem] 2xl:gap-[1.3rem] h-[27rem]  overflow-y-scroll xl:overflow-visible     py-[1rem] ">
          <Link href={"/dashboard"}>
            {" "}
            <div
              onClick={() => setActiveIndex(0)}
              className={clsx(
                "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
                activeIndex === 0
                  ? "text-[#16191D] bg-white border-[#E2E4E8]"
                  : "text-[#FFFFFF] border-transparent"
              )}
            >
              <div>
                <Dashboard activeIndex={activeIndex} />
              </div>
              <div className="font-space ">Dashboard</div>
            </div>
          </Link>
          <Link href={"/dashboard/education"}>
            <div
              onClick={() => setActiveIndex(1)}
              className={clsx(
                "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
                activeIndex === 1
                  ? "text-[#16191D] bg-white border-[#E2E4E8]"
                  : "text-[#FFFFFF] border-transparent"
              )}
            >
              <div>
                <Education activeIndex={activeIndex} />
              </div>
              <div className="font-space ">Educational details</div>
            </div>
          </Link>
          <Link href={"/dashboard/personal"}>
            <div
              onClick={() => setActiveIndex(2)}
              className={clsx(
                "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
                activeIndex === 2
                  ? "text-[#16191D] bg-white border-[#E2E4E8]"
                  : "text-[#FFFFFF] border-transparent"
              )}
            >
              <div>
                <Personal activeIndex={activeIndex} />
              </div>
              <div className="font-space">Personal Interests</div>
            </div>
          </Link>
          <Link href={"/dashboard/alljobs"}>
            <div
              onClick={() => setActiveIndex(3)}
              className={clsx(
                "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
                activeIndex === 3
                  ? "text-[#16191D] bg-white border-[#E2E4E8]"
                  : "text-[#FFFFFF] border-transparent"
              )}
            >
              <div>
                <Recommed activeIndex={activeIndex} />
              </div>
              <div className="font-space">Oppurtunities</div>
            </div>
          </Link>
          <Link href={"/dashboard/allassessments"}>
            <div
              onClick={() => setActiveIndex(4)}
              className={clsx(
                "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
                activeIndex === 4
                  ? "text-[#16191D] bg-white border-[#E2E4E8]"
                  : "text-[#FFFFFF] border-transparent"
              )}
            >
              <div>
                <Career activeIndex={activeIndex} />
              </div>
              <div className="font">Career Assessments </div>
            </div>
          </Link>
          <Link href={"/dashboard/mentors"}>
            <div
              onClick={() => setActiveIndex(5)}
              className={clsx(
                "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
                activeIndex === 5
                  ? "text-[#16191D] bg-white border-[#E2E4E8]"
                  : "text-[#FFFFFF] border-transparent"
              )}
            >
              <div>
                <Mentor activeIndex={activeIndex} />
              </div>
              <div className="font-space">Mentors</div>
            </div>
          </Link>
          <Link href={"/dashboard/messaging"}>
            <div
              onClick={() => setActiveIndex(6)}
              className={clsx(
                "flex font-manrope px-3 border-[1px] py-2 rounded-xl items-center transition-all duration-300 gap-2 w-full  text-[0.95rem] leading-none",
                activeIndex === 6
                  ? "text-[#16191D] bg-white border-[#E2E4E8]"
                  : "text-[#FFFFFF] border-transparent"
              )}
            >
              <div>
                <Message activeIndex={activeIndex} />
              </div>
              <div className="font-space">Messages</div>
            </div>
          </Link>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center  ">
        <div className=" relative top-14 bg-[#333333] border-[2px] border-[#444444] rounded-xl w-fit flex gap-2 px-2 py-3 items-center justify-center ">
          <div className=" h-[34px] w-[34px]  ">
            <Image
              height={200}
              width={200}
              src={"/images/p2.png"}
              className=" object-cover  "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <div className=" font-overused font-medium text-white text-[18px] leading-none ">
              User1
            </div>
            <div className=" font-overused font-medium text-[#868C92] text-[14px] leading-none ">
              user1@gmail.com
            </div>
          </div>
          <div
            className=" pl-5 cursor-pointer py-4"
            onClick={() => {
              onSet(!set);
            }}
          >
            <Three />
          </div>
        </div>
      </div>
      <Link href={"/login"}>
        <motion.div
          className={` absolute left-2 bottom-[6rem] h-[44px] w-[205px] cursor-pointer ${
            set ? "flex" : "hidden"
          }    `}
          transition={{
            duration: 0.4,
            ease: easeInOut,
          }}
        >
          <Image
            height={500}
            width={500}
            src={"/images/logout.png"}
            className="object-cover h-full w-full"
          />
        </motion.div>
      </Link>
    </div>
  );
};

export default Sidebar;
