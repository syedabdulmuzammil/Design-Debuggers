import Card from "@/components/card";
import Padding from "@/components/padding";
import Plaincard from "@/components/plaincard";
import React from "react";

const Homecards = () => {
  return (
    <div className=" flex gap-3 w-full pb-4 pl-12  ">
      <div className=" min-w-[400px] max-w-[400px] ">
        <Card
          bg={"bg-[#191919]"}
          textcolor={"text-white"}
          heading={"12"}
          subhead={"Opportunities for which you Applied."}
          para={"Trending Careers"}
          at={"Complete"}
        />
      </div>
      <div className=" min-w-[400px] max-w-[400px] ">
        <Card
          bg={"bg-[#191919]"}
          textcolor={"text-white"}
          heading={"30"}
          subhead={"Opportunities for which you Applied."}
          para={"Careers based on your profile."}
          at={"View now"}
        />
      </div>
      <div className=" w-[40%] flex flex-col gap-3 min-h-[30rem] ">
        <div className=" w-full h-full   ">
          <Plaincard
            heading={"Mentors Available"}
            number={"10"}
            subhead={"Organisations visited the campus"}
          />{" "}
        </div>
        <div className=" w-full h-full grid grid-cols-2 gap-3 ">
          <Plaincard
            heading={"Assessments"}
            number={"12"}
            subhead={
              "We have identified assessments that are pending completion"
            }
          />
          <Plaincard
            heading={"Suggested Careers by Ai"}
            number={"30"}
            subhead={"Internships"}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Homecards;
