"use client";
import React, { useEffect, useRef, useState } from "react";
import Padding from "./padding";
import Logo from "@/public/icons/logo";
import Bar from "@/public/icons/bar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = ({ ref1 }) => {
  const path = usePathname();
  const path1 = usePathname();

  return (
    <Padding
      className={` fixed bg-black top-0 left-0 w-full z-[999] ${
        path1.includes("dashboard") ? "hidden" : "flex"
      }   ${path1.includes("videochat") ? "hidden" : "flex"}   `}
    >
      <div className=" min-w-full rounded-full bg-black  flex items-center justify-between px-5 py-5 ">
        <motion.div
          className={`bg-white ${path.includes("login") ? "hidden" : "flex"} ${
            path1.includes("signup") ? "hidden" : "flex"
          }   font-spacee w-fit font-medium   gap-8 justify-center items-center rounded-full text-[15px] 
          px-[20px] py-[10px] overflow-hidden `}
        >
          <Link href={"/"}>
            <div className=" cursor-pointer ">Home</div>
          </Link>
          <div
            className=" cursor-pointer "
            onClick={() => {
              ref1.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Features
          </div>
          <Link href={" /careers "}>
            <div className=" cursor-pointer ">Careers</div>
          </Link>
        </motion.div>
        <Link href={"/"}>
          <div className=" absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 ">
            <Logo />
          </div>
        </Link>

        <motion.div
          className={` flex rounded-full text-[18px] gap-6 items-center px-2 leading-none ${
            path.includes("login") ? "hidden" : "flex"
          } ${path1.includes("signup") ? "hidden" : "flex"} `}
        >
          <Link href={"/login"}>
            <div className=" text-[#FFFFFF] font-overused ">Sign in</div>
          </Link>
          <div>
            <Bar />
          </div>
        </motion.div>
      </div>
    </Padding>
  );
};

export default Navbar;
