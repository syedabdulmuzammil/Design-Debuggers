"use client";
import React from "react";
import Padding from "./padding";
import Logo from "@/public/icons/logo";
import Bar from "@/public/icons/bar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <Padding className={" fixed bg-black top-0 left-0 w-full z-[999] "}>
      <div className=" min-w-full rounded-full bg-black  flex items-center justify-between px-5 py-5 ">
        <motion.div className="bg-white font-spacee w-fit font-medium  flex gap-8 justify-center items-center rounded-full text-[15px] px-[20px] py-[10px] overflow-hidden ">
          <div className=" cursor-pointer ">Home</div>
          <div className=" cursor-pointer ">Features</div>
          <div className=" cursor-pointer ">About</div>
        </motion.div>
        <div className=" absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 ">
          <Logo />
        </div>

        <motion.div className=" flex rounded-full text-[18px] gap-6 items-center px-2 leading-none ">
          <div className=" text-[#FFFFFF] font-overused ">Sign in</div>
          <div>
            <Bar />
          </div>
        </motion.div>
      </div>
    </Padding>
  );
};

export default Navbar;
