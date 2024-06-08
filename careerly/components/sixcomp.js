import Abc from "@/public/icons/abc";
import Qwe from "@/public/icons/qwe";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Sixcomp = () => {
  return (
    <div className=" bg-black flex flex-col items-center w-full ">
      <Marquee className=" gap-6 px-6 ">
        <div className=" flex gap-6 ">
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/ab.png"}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/cd.png"}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/yz.png"}
              className=" w-full h-full object-cover "
            />
          </div>
        </div>
        <div className=" flex gap-6 px-6 ">
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/ab.png"}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/cd.png"}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/yz.png"}
              className=" w-full h-full object-cover "
            />
          </div>
        </div>
        <div className=" flex gap-6 px-6 ">
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/ab.png"}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/cd.png"}
              className=" w-full h-full object-cover "
            />
          </div>
          <div className=" h-[350px] w-[470px] rounded-3xl ">
            <Image
              height={500}
              width={500}
              src={"/images/yz.png"}
              className=" w-full h-full object-cover "
            />
          </div>
        </div>
      </Marquee>
      <div className=" flex h-[100vh] w-full items-center justify-center ">
        <div className=" h-[425px] w-[839px]  ">
          <Image
            height={1000}
            width={1000}
            src={"/images/start.png"}
            className=" w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Sixcomp;
