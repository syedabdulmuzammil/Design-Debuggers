"use client";
import React, { useEffect, useState } from "react";
import Padding from "./padding";
import Logo from "@/public/icons/logo";
import Bar from "@/public/icons/bar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const path1 = usePathname();
  
  

  return (
    <Padding
      className={` fixed bg-black top-0 left-0 w-full z-[999] ${
        path1.includes("dashboard") ? "hidden" : "flex"
      }   ${
        path1.includes("videochat") ? "hidden" : "flex"
      }   `}
    >
      <div className=" min-w-full rounded-full bg-black  flex items-center justify-between px-5 py-5 ">
        <motion.div
          className={`bg-white ${path.includes("login") ? "hidden" : "flex"} ${
            path1.includes("signup") ? "hidden" : "flex"
          }   font-spacee w-fit font-medium   gap-8 justify-center items-center rounded-full text-[15px] 
          px-[20px] py-[10px] overflow-hidden `}
        >
          <div className=" cursor-pointer ">Home</div>
          <div className=" cursor-pointer ">Features</div>
          <div className=" cursor-pointer ">Careers</div>
        </motion.div>
        <div className=" absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 ">
          <Logo />
        </div>

        <motion.div
          className={` flex rounded-full text-[18px] gap-6 items-center px-2 leading-none ${
            path.includes("login") ? "hidden" : "flex"
          } ${path1.includes("signup") ? "hidden" : "flex"} `}
        >
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
