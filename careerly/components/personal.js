import React from "react";
import Padding from "./padding";
import Stars from "@/public/icons/stars";
import Card2 from "./card2";

const Personal = () => {
  return (
    <div className="bg-black">
      <Padding>
        <div className="font-space font-semibold text-[26px] text-[#FAFBFD] border-b border-[#333333] py-9 ">
          Personal Interests{" "}
        </div>

        <div>
          <div className="font-space font-medium text-[26px] text-[#FAFBFD] py-5 ">
            Recommendation based on CSE
          </div>
          <div className="flex gap-[48px] py-10">
            <Card2
              img={"/images/Rectangle 18585.png"}
              name={"Artificial Intelligence (AI)"}
              rating={<Stars />}
            ></Card2>
            <Card2
              img={"/images/robo.png"}
              name={"Machine Learning (ML)"}
              rating={<Stars />}
            ></Card2>
            <Card2
              img={"/images/network.png"}
              name={"Internet of Things (IoT)"}
              rating={<Stars />}
            ></Card2>
            <Card2
              img={"/images/laptop.png"}
              name={"Software Engineerin"}
              rating={<Stars />}
            ></Card2>
          </div>
        </div>
        <div>
          <div className="font-space font-medium text-[26px] text-[#FAFBFD] py-5 ">
            Popular Careers
          </div>
          <div className="flex gap-[48px] py-10">
            <Card2
              img={"/images/mobile.png"}
              name={"Cybersecurity"}
              rating={<Stars />}
            ></Card2>
            <Card2
              img={"/images/database.png"}
              name={"Database Systems"}
              rating={<Stars />}
            ></Card2>
            <Card2
              img={"/images/cloud.png"}
              name={"Computer Networks"}
              rating={<Stars />}
            ></Card2>
            <Card2
              img={"/images/hello.png"}
              name={"Operating Systems"}
              rating={<Stars />}
            ></Card2>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Personal;
