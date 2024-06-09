"use client";
import Image from "next/image";
import React from "react";
import { easeInOut, motion, useMotionValue } from "framer-motion";
import Scroll from "@/public/icons/scroll";

const Careerhero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);

  const handleMouseMove = (e) => {
    x.set((e.clientX - window.innerWidth / 2) / 25);
    y.set((e.clientY - window.innerHeight / 2) / 25);
    x1.set((e.clientX - window.innerWidth / 2) / 55);
    y1.set((e.clientY - window.innerHeight / 2) / 55);
  };
  return (
    <div
      className=" w-full h-[120vh] flex flex-col items-center justify-center relative "
      onMouseMove={handleMouseMove}
    >
      <div className=" text-[#D2D2D2] font-space font-medium text-[50px] ">
        Explore Relevant Courses
      </div>
      <div className=" font-overused w-[381px] leading-[29px] text-[16px] text-center text-[#ACACAC] ">
        This course is for anyone eager to dive into the realm of artificial
        intelligence and broaden their horizons in this exciting field.
      </div>
      <div className=" pt-32 ">
        <Scroll />
      </div>
      <motion.div
        className=" absolute top-16 "
        initial={{
          top: "90vh",
        }}
        animate={{
          top: "64px",
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
        style={{ x: x, y: y }}
      >
        <div className=" flex items-center ">
          <div className=" h-[65px] w-[425px] ">
            <Image
              height={600}
              width={600}
              className=" object-cover h-full w-full"
              src={"/images/f1.png"}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className=" absolute left-0 top-[12rem] "
        initial={{
          top: "90vh",
          left: "50%",
        }}
        animate={{
          top: "12rem",
          left: 0,
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
        style={{ x: x, y: y }}
      >
        <div className="  flex items-start  ">
          <div className=" h-[60px] w-[300px] relative left-[5rem] ">
            <Image
              height={600}
              width={600}
              className=" object-cover h-full w-full"
              src={"/images/f5.png"}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className=" absolute top-[40%] right-0 "
        initial={{
          top: "90vh",
          right: "50%",
        }}
        animate={{
          top: "40%",
          right: 0,
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
        style={{ x: x, y: y }}
      >
        <div className=" flex items-start  ">
          <div className=" h-[60px] w-[240px]  ">
            <Image
              height={600}
              width={600}
              className=" object-cover h-full w-full"
              src={"/images/f3.png"}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className=" absolute left-[10rem] top-[35rem] "
        initial={{
          top: "90vh",
          left: "50%",
        }}
        animate={{
          top: "35rem",
          left: "10rem",
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
        style={{ x: x, y: y }}
      >
        <div className=" flex items-start  ">
          <div className=" h-[60px] w-[340px] relative left-[5rem] ">
            <Image
              height={600}
              width={600}
              className=" object-cover h-full w-full"
              src={"/images/f2.png"}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className=" absolute right-[14rem] top-[37rem] "
        initial={{
          top: "90vh",
          right: "30rem",
        }}
        animate={{
          top: "37rem",
          right: "14rem",
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
        style={{ x: x, y: y }}
      >
        <div className=" flex items-start  ">
          <div className=" h-[60px] w-[280px] relative left-[5rem] ">
            <Image
              height={600}
              width={600}
              className=" object-cover h-full w-full"
              src={"/images/f4.png"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Careerhero;
