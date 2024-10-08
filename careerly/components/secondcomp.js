import React from "react";
import Padding from "./padding";
import Image from "next/image";

const Secondcomp = () => {
  return (
    <div className=" flec flex-col bg-[#171717] w-full ">
      <Padding>
        <div className=" flex items-center w-full justify-between py-[8rem] ">
          <div className=" flex flex-col gap-y-6">
            <div className=" text-[#D2D2D2] font-space font-medium text-[88px] leading-none w-fit">
              Choosing the right
            </div>
            <div className="flex ">
              <div className=" flex items-center gap-[34px] ">
                <div className="  h-[80px] w-[201px] rounded-full overflow-hidden relative ">
                  <video
                    src="/images/vid1.mp4"
                    className=" object-cover h-full w-full "
                    autoPlay
                    loop
                    muted
                  />
                  <div className=" absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2  font-space leading-none text-[51px] text-[#FF8A66] font-semibold ">
                    Career
                  </div>
                </div>
                <div className="text-[52px] font-space font-medium text-[#AEAEAE] ">
                  Can Be A Daunting Task
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32rem]  ">
            <Image
              height={500}
              width={500}
              className=" object-cover h-full w-full"
              src={"/images/pathway.png"}
            />
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Secondcomp;
