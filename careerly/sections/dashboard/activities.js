import Activitycard from "@/components/activitycard";
import Padding from "@/components/padding";

import React from "react";

const Activities = () => {
  const data = [
    {
      head: "Jobs",
      company: "Microsoft",
      role: "Software Development Engineer",
      description:
        "Microsoft Silicon and Cloud Hardware Infrastructure Engineering (SCHIE) is the team behind Microsoft’s expanding Cloud Infrastructure .....",
      date: "20/09/2023",
      svg: "/Images/logo.png",
    },
    {
      head: "Jobs",
      company: "Microsoft",
      role: "Software Development Engineer",
      description:
        "Microsoft Silicon and Cloud Hardware Infrastructure Engineering (SCHIE) is the team behind Microsoft’s expanding Cloud Infrastructure .....",
      date: "20/09/2023",
      svg: "/Images/logo.png",
    },
    {
      head: "Jobs",
      company: "Microsoft",
      role: "Software Development Engineer",
      description:
        "Microsoft Silicon and Cloud Hardware Infrastructure Engineering (SCHIE) is the team behind Microsoft’s expanding Cloud Infrastructure .....",
      date: "20/09/2023",
      svg: "/Images/logo.png",
    },
  ];

  return (
    <Padding className={"w-full"}>
      <div className=" flex flex-col bg-[#FFFFFF] border-[#E2E4E8] border rounded-3xl  w-full  ">
        <div className=" flex font-satoshi px-9 py-4 text-[#000000] text-[1.6rem] font-medium pb-6 ">
          Recent Activity
        </div>
        <div className=" w-full flex flex-col ">
          {data.map((item) => (
            <Activitycard
              head={item.head}
              role={item.role}
              company={item.company}
              description={item.description}
              date={item.date}
              svg={item.svg}
            />
          ))}
        </div>
      </div>
    </Padding>
  );
};

export default Activities;
