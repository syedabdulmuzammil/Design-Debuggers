"use client";
import React from "react";
import Padding from "./padding";
import Image from "next/image";
import { easeInOut, motion, useMotionValue } from "framer-motion";

const Hero = () => {
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
      className="bg-black h-[90vh] w-full flex items-center justify-center relative
    "
      onMouseMove={handleMouseMove}
    >
      <Padding>
        <div className=" bg-transparent flex flex-col text-white absolute top-[60%] -translate-y-1/2 left-[50%] z-[100] -translate-x-1/2 ">
          <div className="text-[85px] font-medium text-[#AEAEAE] font-space max-h-fit overflow-hidden ">
            <motion.div
              initial={{
                translateY: "300px",
              }}
              animate={{
                translateY: "0px",
              }}
              transition={{
                duration: 0.66,
                ease: easeInOut,
              }}
              className=" leading-none "
            >
              Unlock Your Dream
            </motion.div>
          </div>
          <div className=" max-h-fit overflow-hidden ">
            <motion.div
              className="flex items-center gap-[10px]"
              initial={{
                translateY: "300px",
              }}
              animate={{
                translateY: "0px",
              }}
              transition={{
                duration: 0.66,
                ease: easeInOut,
              }}
            >
              <div className="bg-[#FF8A66] font-medium font-overused  leading-none w-fit h-fit text-[59px] px-[23px] pb-[11px] rounded-full text-black ">
                Career
              </div>
              <div className="text-[80px] font-medium text-[#AEAEAE] font-space ">
                {" "}
                with Careerly
              </div>
            </motion.div>
          </div>
        </div>
      </Padding>
      <motion.div
        className=" absolute top-[20%] left-[7%] h-[246px] w-[160px] filter grayscale "
        style={{ x: x, y: y }}
        initial={{
          top: "50%",
          left: "50%",
        }}
        animate={{
          top: "20%",
          left: "7%",
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
      >
        <Image
          height={500}
          width={500}
          className=" object-cover h-full w-full"
          src={"/images/one.png"}
        />
      </motion.div>
      <motion.div
        className=" absolute top-[22%] right-[10%] h-[160px] w-[264px] filter grayscale rounded-3xl overflow-hidden "
        style={{ x: x, y: y }}
        initial={{
          top: "50%",
          right: "50%",
        }}
        animate={{
          top: "22%",
          right: "10%",
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
      >
        <Image
          height={500}
          width={500}
          className=" object-cover h-full w-full"
          src={"/images/two.png"}
        />
      </motion.div>
      <motion.div
        className=" absolute top-[65%] right-[7%] h-[246px] w-[160px] filter grayscale rounded-3xl overflow-hidden "
        style={{ x: x, y: y }}
        initial={{
          top: "50%",
          right: "50%",
        }}
        animate={{
          top: "65%",
          right: "7%",
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
      >
        <Image
          height={500}
          width={500}
          className=" object-cover h-full w-full"
          src={"/images/three.png"}
        />
      </motion.div>
      <motion.div
        className=" z-[10] absolute top-[65%] left-[15%] h-[160px] w-[264px] filter grayscale rounded-3xl overflow-hidden "
        style={{ x: x, y: y }}
        initial={{
          top: "50%",
          left: "50%",
        }}
        animate={{
          top: "65%",
          left: "15%",
        }}
        transition={{
          duration: 0.66,
          ease: easeInOut,
        }}
      >
        <Image
          height={500}
          width={500}
          className=" object-cover h-full w-full"
          src={"/images/four.png"}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
