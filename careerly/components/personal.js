import React from "react";
import Padding from "./padding";
import Card from "./card";
import Stars from "@/public/icons/stars";

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
          <Card img={"/images/Rectangle 18585.png"}
          name={"Artificial Intelligence (AI)"}
          rating={<Stars/>}
          ></Card>
          <Card img={"/images/robo.png"}
          name={"Machine Learning (ML)"}
          rating={<Stars/>}
          ></Card>
          <Card img={"/images/network.png"}
          name={"Internet of Things (IoT)"}
          rating={<Stars/>}
          ></Card>
          <Card img={"/images/laptop.png"}
          name={"Software Engineerin"}
          rating={<Stars/>}
          ></Card>
          </div>
        </div>
        <div>
          <div className="font-space font-medium text-[26px] text-[#FAFBFD] py-5 ">
          Popular  Careers
          </div> 
          <div className="flex gap-[48px] py-10">
          <Card img={"/images/mobile.png"}
          name={"Cybersecurity"}
          rating={<Stars/>}
          ></Card>
          <Card img={"/images/database.png"}
          name={"Database Systems"}
          rating={<Stars/>}
          ></Card>
          <Card img={"/images/cloud.png"}
          name={"Computer Networks"}
          rating={<Stars/>}
          ></Card>
          <Card img={"/images/hello.png"}
          name={"Operating Systems"}
          rating={<Stars/>}
          ></Card>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Personal;
