"use client";
import React from "react";
import Padding from "./padding";
import Careerlyfooter from "@/public/icons/careerlyfooter";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  const path1 = usePathname();
 
  return (
    <div
      className={` pt-12 pb-4  md:pt-6 bg-white w-full ${
        path.includes("login") ? "hidden" : ""
      } ${path1.includes("signup") ? "hidden" : ""}
    ${path1.includes("dashboard") ? "hidden" : ""}  ${path1.includes("videochat") ? "hidden" : ""} `}
    >
      <Padding className={" py-10"}>
        <div className=" lg:flex gap-10 lg:gap-20 xl:gap-28 ">
          <div className=" lg:w-[30%] md:flex lg:flex-col items-start justify-between min-h-full ">
            <div className=" md:max-w-[300px] ">
              <div className=" font-avlon text-[1.25rem] ">Get in touch</div>
              <div className=" text-[#54545A] text-[0.95rem] max-w-[280px] ">
                Want us to contact you for a new project or just want to know
                us?
              </div>
              <div className=" flex items-center justify-between bg-black  gap-3 font-gilroy font-semibold text-white rounded-full px-6 py-3 mt-6 lg:mt-10">
                Call Devsed
              </div>
            </div>
            <div className=" flex gap-3 items-center py-16 md:py-0 lg:pt-20">
              <div></div>
              <div>
                <div className=" flex gap-1 items-center font-gilroy text-[#7D7D7D] text-[0.9rem] font-semibold ">
                  India <div className=" h-1 w-1 rounded-full bg-[#D7D7D7] " />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-[70%] md:pt-20 lg:pt-0 md:flex flex-col justify-between min-h-full ">
            <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12 md:gap-y-0 ">
              <div>
                <div className=" text-[1.1rem] text-black font-avlon pb-2 ">
                  Services
                </div>
                <div className="font-gilroy font-medium text-[#474747] grid gap-2.5 text-[0.9rem]">
                  <div>Clients</div>
                  <div>Culture</div>
                  <div>Design Agency</div>
                  <div>Development Agency</div>
                  <div>Marketing Agency</div>
                </div>
              </div>
              <div>
                <div className=" text-[1.1rem] text-black font-avlon pb-2 ">
                  About
                </div>
                <div className="font-gilroy font-medium text-[#474747] grid gap-2.5 text-[0.9rem]">
                  <div>Clients</div>
                  <div>Culture</div>
                  <div>Design Agency</div>
                  <div>Development Agency</div>
                  <div>Marketing Agency</div>
                </div>
              </div>
              <div>
                <div className=" text-[1.1rem] text-black font-avlon pt-4 md:pt-0 pb-2 ">
                  Clients
                </div>
                <div className="font-gilroy font-medium text-[#474747] grid gap-2.5 text-[0.9rem]">
                  <div>Clients</div>
                  <div>Culture</div>
                  <div>Design Agency</div>
                  <div>Development Agency</div>
                  <div>Marketing Agency</div>
                </div>
              </div>
            </div>
            <div className=" pt-16 ">
              <div className=" text-[1.1rem] text-black font-avlon pb-3">
                Contact
              </div>
              <div className=" flex w-full  justify-between md:grid grid-cols-3  xl:grid-cols-4  md:justify-normal gap-6 ">
                <div>
                  <div className=" text-[#474747] font-avlon pb-1 ">Phone</div>
                  <div className=" text-[#3F4046] text-[0.95rem] font-gilroy font-medium border-b-1 border-[#3F4046] w-max leading-[1.2rem] ">
                    +91 9885978663
                  </div>
                </div>
                <div>
                  <div className=" text-[#474747] font-avlon pb-1 ">Email</div>
                  <div className=" text-[#3F4046] text-[0.95rem] font-gilroy font-medium border-b-1 border-[#3F4046] w-max leading-[1.2rem] ">
                    Official@devsed.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Padding>
      <Padding>
        <div className=" pt-32">
          <Careerlyfooter />
        </div>
        <div className=" lg:flex flex-row-reverse justify-between items-center">
          <div className=" font-gilroy font-medium text-[#565656] flex gap-x-6 pt-3 gap-y-3 lg:gap-x-10 flex-wrap md:justify-between lg:justify-normal text-[0.95rem] ">
            <div>India</div>
            <div>Saudi arabia</div>
            <div>Switzerland</div>
            <div>Australia</div>
            <div>UK</div>
            <div>Dubai</div>
            <div>France</div>
            <div>Canada</div>
          </div>
          <div className=" font-gilroy font-semibold pt-6 md:text-center lg:text-start ">
            Devsed © 2024
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Footer;
