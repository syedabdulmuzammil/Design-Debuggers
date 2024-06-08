import Padding from "@/components/padding";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="font-Matter text-[#4E4E4E]  font-medium w-full py-20 min-h-[90svh] md:flex md:items-center ">
        <Padding className={"w-full"}>
          <div className=" text-[24px] font-medium text-white text-center pb-8 font-space">Signup</div>
          <div className="flex w-full flex-col  justify-center items-center">
           <div className="flex justify-start items-start w-[23rem]  text-[#9A9A9A]"> Name</div>
            <input
              type="text"
              className=" login  bg-[#191919]  w-[22.5rem] h-[3.5rem] px-3 py-3 rounded-xl font-normal  mt-2 md:py-2.5 border-[#444444] border-[1px] outline-none "
              placeholder="Enter your name here..."
            />
          </div>
          <div className=" pt-6 flex  flex-col w-full justify-center items-center">
           <div className="flex justify-start items-start w-[23rem] text-[#9A9A9A] font-space font-medium "> Email</div>
            <input
              type="text"
              className=" login  bg-[#191919]  w-[22.5rem] h-[3.5rem] px-3 py-3 rounded-xl font-normal  mt-2 md:py-2.5 border-[#444444] border-[1px] outline-none "
              placeholder="Enter your email here..."
            />
          </div>
          <div className="pt-6 flex  flex-col w-full justify-center items-center">
           <div className="flex justify-start items-start w-[23rem] text-[#9A9A9A] font-space font-medium ">Password</div> 
            <input
              type="text"
              className=" login  bg-[#191919]  w-[22.5rem] h-[3.5rem] px-3 py-3 rounded-xl font-normal  mt-2 md:py-2.5 border-[#444444] border-[1px] outline-none "
              placeholder="Enter password..."
            />
          </div>
          <div className=" pt-6 flex  flex-col w-full justify-center items-center">
           <div className="flex justify-start items-start w-[23rem] text-[#9A9A9A] font-space font-medium "> Confirm Password</div>
            <input
              type="text"
              className=" login  bg-[#191919]  w-[22.5rem] h-[3.5rem] px-3 py-3 rounded-xl font-normal  mt-2 md:py-2.5 border-[#444444] border-[1px] outline-none "
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex justify-center ">
           <div className="w-[23rem] font-space bg-[#6E40FF]  text-[#ffffff] text-[14px] font-medium text-center py-4 md:py-3 mt-8 rounded-full "> Signup </div>
          </div>
          <div className=" flex gap-2 pt-6 w-max mx-auto ">
            <div className=" text-[#B1B1B1] font-space font-medium text-[16px]">Already have an Account ?</div>
            <Link href={"/login"}>
              <div className=" text-[#6E40FF] font-space font-medium  text-[16px]  ">Login</div>
            </Link>
          </div>
        </Padding>
      </div>
    </>
  );
};

export default Page;
