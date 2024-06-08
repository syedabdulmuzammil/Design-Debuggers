import Arrow from "@/public/icons/arrow";
import React from "react";
import Padding from "./padding";

const Fifthcompo = () => {
  return (
    <div className="bg-black ">
      <Padding>
        <div className="flex justify-between items-center w-full  py-[8rem]">
          <div className="flex flex-col gap-5">
            <div className="text-white text-[50px] font-space w-[45rem] leading-none ">
              Why choose our platform for your career needs
            </div>
            <div>
              Discover the unique benefits of our platform tailored to your
              career needs. From expert guidance to personalized support, we're
              here to help you succeed
            </div>
          </div>{" "}
          <div className="w-[32rem]  filter grayscale "></div>
        </div>
      </Padding>
    </div>
  );
};

export default Fifthcompo;
