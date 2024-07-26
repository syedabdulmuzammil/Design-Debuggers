import React from "react";
import Padding from "./padding";
import Plus from "@/public/icons/plus";

const Faqs = () => {
  return (
    <div className="bg-black">
      <Padding>
        <div className="flex flex-col  ">
          {" "}
          <div className="font-space font-medium text-[60px] text-white ">
            FAQs
          </div>{" "}
          <div className="flex items-center gap-[123px] justify-between w-full ">
            <div className="font-overused text-[24px] leading-[34px] text-[#C5C5C5] ">
              Didn’ find your question? feel free to ask{" "}
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-8 py-[4.5rem] w-full">
          <div className="flex flex-col w-full border-2 px-5 py-7 rounded-3xl bg-[#191919] border-[#444444] gap-7 min-w-[50rem] max-h-[23rem] ">
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                How do I sign up for the platform?
              </div>
              <div>
                <Plus />
              </div>
            </div>
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                What services does the platform offer?
              </div>
              <div>
                <Plus />
              </div>
            </div>
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                Is there a cost associated with using the platform?
              </div>
              <div>
                <Plus />
              </div>
            </div>
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                Can I access career resources for free?
              </div>
              <div>
                <Plus />
              </div>
            </div>
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                How do I schedule a session with an expert?
              </div>
              <div>
                <Plus />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full border-2 px-5 py-7 rounded-3xl bg-[#191919] border-[#444444] gap-7 min-w-[50rem] max-h-[23rem] ">
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                What industries and career paths are covered?
              </div>
              <div>
                <Plus />
              </div>
            </div>
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                How can I track my career progress on the platform?
              </div>
              <div>
                <Plus />
              </div>
            </div>
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                How do I access job opportunities through the platform?
              </div>
              <div>
                <Plus />
              </div>
            </div>
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                Can I receive personalized career advice?
              </div>
              <div>
                <Plus />
              </div>
            </div>
            <div className="flex items-center gap-[123px] justify-between w-full">
              <div className="text-[#C5C5C5] text-[24px] font-medium  font-overused ">
                What kind of skill development resources are available?
              </div>
              <div>
                <Plus />
              </div>
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Faqs;
