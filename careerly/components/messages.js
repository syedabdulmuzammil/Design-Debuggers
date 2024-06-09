import Send from "@/public/icons/send";
import Video from "@/public/icons/video";
import Image from "next/image";
import React from "react";

const Messages = () => {
  return (
    <div className=" w-full px-4 ">
      <div className="w-full bg-[#191919] rounded-3xl flex flex-col px-4 pb-6 relative">
        <div className=" flex items-center justify-between sticky bg-[#191919] top-0 left-0 ">
          <div className=" flex items-center ">
            <div className=" h-[73px] w-[73px] ">
              <Image
                height={500}
                width={500}
                src={"/images/eion.png"}
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" py-12  flex flex-col gap-2 ">
              <div className="  px-6 text-[#FAFBFD] font-space font-medium text-[20px]  ">
                Ibad Sajid
              </div>
              <div className="  px-6 text-[#747474] font-space font-medium text-[12px]  ">
                Mentor
              </div>
            </div>
          </div>
          <Video />
        </div>
        <div className="w-full border-[1px] border-[#333333] "></div>
        <div className=" w-full flex flex-col gap-6 pt-8 ">
          <div className=" w-full flex items-end justify-end gap-2 ">
            <div className=" h-[50px] px-6 items-center justify-center flex bg-[#2F2F2F] rounded-3xl font-overused text-white  text-[18px]   ">
              Hi, I'm feeling a bit lost about my career path
            </div>
            <div className=" h-[50px] w-[50px]  ">
              <Image
                height={500}
                width={500}
                src={"/images/p2.png"}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className=" w-full flex items-end justify-start gap-2 ">
            <div className=" h-[50px] w-[50px]  ">
              <Image
                height={500}
                width={500}
                src={"/images/eion.png"}
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" h-[50px] px-6 items-center justify-center flex bg-[#747474] rounded-3xl font-overused text-white  text-[18px]   ">
              No worries! Let's figure it out together. What are your interests
              and strengths?
            </div>
          </div>
          <div className=" w-full flex items-end justify-end gap-2 ">
            <div className=" h-[50px] px-6 items-center justify-center flex bg-[#2F2F2F] rounded-3xl font-overused text-white  text-[18px]   ">
              I excel at dissecting data and manipulating numbers to derive
              insights
            </div>
            <div className=" h-[50px] w-[50px]  ">
              <Image
                height={500}
                width={500}
                src={"/images/p2.png"}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className=" w-full flex items-end justify-start gap-2 ">
            <div className=" h-[50px] w-[50px]  ">
              <Image
                height={500}
                width={500}
                src={"/images/eion.png"}
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" h-[50px] px-6 items-center justify-center flex bg-[#747474] rounded-3xl font-overused text-white  text-[18px]   ">
              That's great! Have you considered exploring careers in data
              analysis or business intelligence?
            </div>
          </div>
          <div className=" w-full flex items-end justify-start gap-2 ">
            <div className=" h-[50px] w-[50px]  "></div>
            <div className=" h-[50px] px-6 items-center justify-center flex bg-[#747474] rounded-3xl font-overused text-white  text-[18px]   ">
              if not just refer it once.
            </div>
          </div>
          <div className=" w-full flex items-end justify-end gap-2 ">
            <div className=" h-[50px] px-6 items-center justify-center flex bg-[#2F2F2F] rounded-3xl font-overused text-white  text-[18px]   ">
              Yes, I've thought about it, but I'm not sure where to start.
            </div>
            <div className=" h-[50px] w-[50px]  ">
              <Image
                height={500}
                width={500}
                src={"/images/p2.png"}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" pt-36 sticky bottom-0 left-0  ">
          <div className=" w-full px-6 bg-[#2F2F2F] h-[65px] flex justify-between items-center rounded-full  ">
            <input
              className=" w-full bg-[#2F2F2F] outline-none input "
              placeholder=" Type your message "
            />
            <div>
              <Send />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
