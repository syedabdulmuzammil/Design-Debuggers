import Activitycard from "@/components/activitycard";
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
    <div className={"w-full pr-12 "}>
      <div className=" flex flex-col bg-[#191919]   rounded-3xl  w-full overflow-hidden  ">
        <div className=" flex font-overused px-9 py-4 text-[white] text-[36px] font-semibold pb-6 ">
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
    </div>
  );
};

export default Activities;
