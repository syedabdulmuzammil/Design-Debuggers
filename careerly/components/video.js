import Logo from "@/public/icons/logo";
import React from "react";
import Padding from "./padding";
import Image from "next/image";
import Voice from "@/public/icons/voice";
import X from "@/public/icons/x";
import Message from "@/public/icons/message";

const Video = () => {
  return (
    <div className="text-white">
      <Padding>
        <div className="py-6">
          {" "}
          <Logo />
        </div>
        <div className=" flex ">
          <div>
            <div className="relative ">
              <div className="w-[1012px] h-[783px] ">
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/girly.png"}
                />
              </div>
              <div className="absolute top-[7%] right-[3%] ">
                <Voice />
              </div>
              <div className=" absolute  top-[80%] justify-between flex items-center w-full px-5 ">
                <div className="  font-space font-normal text-[24px] pt-24 px-5   ">
                  Ayesha Khan
                </div>
                <div className="w-[276px] h-[151px]">
                  {" "}
                  <Image
                    height={500}
                    width={500}
                    className=" object-cover h-full w-full"
                    src={"/images/boi.png "}
                  />
                </div>
              </div>
            </div>

            <div className="w-[75%] flex justify-evenly  py-5 items-center ">
              <div className=" w-[526px] h-[62px] ">
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/buttons.png "}
                />
              </div>
              <div className="w-[79px] h-[40px] rounded-[11px]  ">
                {" "}
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/leave.png "}
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-between py-10 px-10 w-[415px] h-[861px] items-center">
            <div className="flex justify-around  w-full items-center">
              {" "}
              <div>Meeting messages</div>{" "}
              <div>
                <X />
              </div>
            </div>
            <div className="flex justify-between px-5  w-[374px] h-[60px] items-center rounded-[57px] border-[#444444] bg-[#333333]  ">
              <div className="text-[#B3B3B3] font-space text-[16px]">
                Send a message
              </div>
              <div>
                <Message />
              </div>
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Video;
