import React from "react";
import Newcard from "./newcard";
import Marker from "@/public/icons/marker";
import Eligiblecar from "./eleigiblecar";
import No from "./no";

const Alljobs = () => {
  const data = [
    {
      company: "Facebook(Meta)",
      role: "Front-end developer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: true,
      img: "/images/facebook.png",
    },
    {
      company: "Salesforce",
      role: "Front-end developer",
      time: "Full-Time",
      how: "Remote",
      location: "Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana.",
      when: "Core",
      Eligible: true,
      img: "/images/sales.png",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
      <div className="grid grid-cols-4  gap-4">
        {data.map((job, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={job.img}
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{job.company}</h2>
                <p className="text-gray-500">{job.role}</p>
              </div>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Time:</span> {job.time}
            </div>
            <div className="mb-2">
              <span className="font-semibold">How:</span> {job.how}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Location:</span> {job.location}
            </div>
            <div className="mb-2">
              <span className="font-semibold">When:</span> {job.when}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Eligible:</span>{" "}
              {job.Eligible ? "Yes" : "No"}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <Newcard
        img={"/images/meta.png"}
        name={"Facebook (Meta)"}
        skill={"Front end developer"}
        button={"Full-time"}
        button1={"remote"}
        button2={"Core"}
        location={"Location"}
        svg={<Marker/>}
        locate={"Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana."}
        register={"Register"}
        ></Newcard>
        <Eligiblecar
        img={"/images/meta.png"}
        name={"Facebook (Meta)"}
        skill={"Front end developer"}
        button={"Full-time"}
        button1={"remote"}
        button2={"Core"}
        location={"Location"}
        svg={<Marker/>}
        locate={"Saint Gobain Enterprices, Gachibowli, Hyderabad, Telangana."}
        svg1={<No/>}
        eligible={"Not Eligible"}
        ></Eligiblecar>
      </div>
    </div>
  );
};

export default Alljobs;
