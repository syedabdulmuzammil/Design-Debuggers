import Padding from "@/components/padding";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="font-Matter text-[#4E4E4E]  font-medium w-full py-20 min-h-[90svh] md:flex md:items-center ">
        <Padding className={"w-full"}>
          <div className=" text-[1.5rem]  text-center pb-8 ">Signup</div>
          <div className="">
            Name
            <input
              type="text"
              className=" w-full px-3 py-3 rounded-xl font-normal bg-[#FDFDFD] mt-2 md:py-2.5 border-[#E5E8EE] border-[1px] outline-none  "
              placeholder="Enter your name here..."
            />
          </div>
          <div className=" pt-6">
            Email
            <input
              type="text"
              className=" w-full px-3 py-3 rounded-xl font-normal bg-[#FDFDFD] mt-2 md:py-2.5 border-[#E5E8EE] border-[1px] outline-none  "
              placeholder="Enter your email here..."
            />
          </div>
          <div className=" pt-6">
            Password
            <input
              type="text"
              className=" w-full px-3 py-3 rounded-xl font-normal bg-[#FDFDFD] mt-2 md:py-2.5 border-[#E5E8EE] border-[1px] outline-none  "
              placeholder="Enter password..."
            />
          </div>
          <div className=" pt-6">
            Confirm Password
            <input
              type="text"
              className=" w-full px-3 py-3 rounded-xl font-normal bg-[#FDFDFD] mt-2 md:py-2.5 border-[#E5E8EE] border-[1px] outline-none  "
              placeholder="Confirm your password"
            />
          </div>
          <div className=" bg-[#015AF0]  text-[#ffffff] text-center py-4 md:py-3 mt-8 rounded-full ">
            Signup
          </div>
          <div className=" flex gap-2 pt-6 w-max mx-auto ">
            <div className=" text-[#B1B1B1] ">Already have an Account ?</div>
            <Link href={"/login"}>
              <div className=" text-[#015AF0] ">Login</div>
            </Link>
          </div>
        </Padding>
      </div>
    </>
  );
};

export default Page;
