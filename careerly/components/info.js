"use client";
import React from "react";
import Padding from "./padding";
import Image from "next/image";

const Info = () => {
  return (
    <div className="bg-black">
      <Padding>
        <div className="flex gap-5">
          <div className=" bg-[#2A2929] rounded-3xl w-[877px] h-fit ">
            <div className="px-8 py-8">
              <div className="text-[#FAFBFD] text-[18px] font-medium leading-[20px] font-space ">
                AI -Artificial Intelligence
              </div>
              <div className="text-[#939393] text-[14px] font-space leading-[20px] font-medium  ">
                Empowering Innovation Through Artificial Intelligence
              </div>
            </div>
            <div className="flex gap-[16px] px-8 py-8 ">
              <div className="flex flex-col bg-[#333333] rounded-2xl px-5 py-5 ">
                <div className="text-[#B1B1B1] text-[12px] font-medium font-overused ">
                  AI Insights
                </div>
                <div className="font-overused text-[16px] text-[#FFFFFF] font-medium ">
                  Artificial Intelligence
                </div>
              </div>
              <div className="flex flex-col bg-[#333333] rounded-2xl px-5 py-5 ">
                {" "}
                <div className="text-[#B1B1B1] text-[12px] font-medium font-overused ">
                  ML Mastery
                </div>
                <div className="font-overused text-[16px] text-[#FFFFFF] font-medium ">
                  MachineLearning
                </div>
              </div>
              <div className="flex flex-col bg-[#333333] rounded-2xl px-5 py-5 ">
                {" "}
                <div className="text-[#B1B1B1] text-[12px] font-medium font-overused ">
                  AI Solutions
                </div>
                <div className="font-overused text-[16px] text-[#FFFFFF] font-medium ">
                  AI Applications
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[725px] h-fit px-8 py-8 ">
              {" "}
              <div className=" font-space font-semibold text-[20px] text-[#FFFFFF]  ">
                Description
              </div>{" "}
              <div className=" font-normal font-overused  text-[13px] leading-[28px] h-fit text-[#FFFFFF] ">
                Artificial Intelligence (AI) is a rapidly advancing field of
                computer science focused on creating intelligent systems that
                can perform tasks traditionally requiring human intelligence.
                Through machine learning, deep learning, and other AI
                technologies, these systems are capable of learning from data,
                recognizing patterns, and making decisions autonomously. AI has
                a wide range of applications.
              </div>
            </div>
            <div className="flex flex-col px-8 py-8">
              <div className=" font-space font-medium text-[20px] text-[#FFFFFF] ">
                Artificial Intelligence (AI) Overview
              </div>
              <div className=" py-6">
                <div className="flex gap-3">
                  <div className="text-[#FFFFFF]">.</div>
                  <div className="text-[13px] font-normal leading-[30px] font-overused text-[#FFFFFF] ">
                    AI is a rapidly advancing field of computer science focused
                    on creating intelligent systems capable of performing tasks
                    traditionally requiring human intelligence.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-[#FFFFFF]">.</div>
                  <div className="text-[13px] font-normal leading-[30px] font-overused text-[#FFFFFF] ">
                    It encompasses various technologies such as machine
                    learning, deep learning, and natural language processing.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[#FFFFFF]">.</div>
                  <div className="text-[13px] font-normal leading-[30px] font-overused text-[#FFFFFF] ">
                    AI has a wide range of applications across industries
                    including healthcare, finance, transportation, and
                    entertainment
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[#FFFFFF]">.</div>
                  <div className="text-[13px] font-normal leading-[30px] font-overused text-[#FFFFFF] ">
                    AI has a wide range of applications across industries
                    including healthcare, finance, transportation, and
                    entertainment
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[#FFFFFF]">.</div>
                  <div className="text-[13px] font-normal leading-[30px] font-overused text-[#FFFFFF] ">
                    It revolutionizes the way we work and live by improving
                    efficiency, accuracy, and decision-making processes.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[#FFFFFF]">.</div>
                  <div className="text-[13px] font-normal leading-[30px] font-overused text-[#FFFFFF] ">
                    AI systems can learn from data, recognize patterns, and make
                    decisions autonomously..
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[#FFFFFF]">.</div>
                  <div className="text-[13px] font-normal leading-[30px] font-overused text-[#FFFFFF] ">
                    The ethical and societal implications of AI, including
                    concerns about privacy, bias, and job displacement, are
                    important considerations in its development and deployment.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2A2929] rounded-3xl px-5 py-5">
            <div className="flex gap-5">
              <div className="w-[48px] h-[48px]  ">
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full border-[1px] rounded-[10px]"
                  src={"/images/Rectangle 18585.png"}
                />
              </div>
              <div className="text-[15px] leading-[19.05px] font-bold font-space text-[#E3E2DC]  w-[161px] h-[30px] ">
                Artificial Intelligence (AI)
              </div>
            </div>
            <div className=" font-overused font-medium text-[14px] text-[#939393] py-5 ">
              Machine Intelligence
            </div>
            <div className="flex gap-3">
              {" "}
              <div className="bg-[#333333] rounded-2xl px-4 font-overused font-medium text-[12px] text-[#B1B1B1] ">
                Smart
              </div>{" "}
              <div className="bg-[#333333] rounded-2xl px-4 font-overused font-medium text-[12px] text-[#B1B1B1] ">
                Automation
              </div>{" "}
              <div className="bg-[#333333] rounded-2xl px-4 font-overused font-medium text-[12px] text-[#B1B1B1] ">
                Intelligence
              </div>
            </div>
            <div className="flex flex-col py-[5rem]  ">
              <div className=" font-space font-medium text-[15px] text-[#FFFFFF] leading-[20px] ">About this</div>
              <div className=" font-space font-medium text-[12px] leading-[22px] w-[22rem] h-[96px] text-[#FFFFFF] ">
                Artificial Intelligence (AI) revolutionizes technology, enabling
                intelligent systems to learn, adapt, and achieve remarkable
                feats. From healthcare to finance, AI is transforming industries
                and shaping the future of innovation
              </div>
            </div>
            <div className="pt-[23rem] pl-[18rem]">
            <div className="bg-[#8B66FE] rounded-[63px] py-[14px] px-[24px] w-[85px] ]">Next</div></div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Info;
