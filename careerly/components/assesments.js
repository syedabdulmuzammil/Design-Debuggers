import Image from "next/image";
import React from "react";

const Assesments = () => {
  return (
    <div className="bg-black">
      <padding>
        <div className="flex flex-col px-8 py-5 border-b border-[#333333] ">
          <div className="font-space font-semibold text-[26px] text-[#FAFBFC] ">
            Assesments for choosing careers
          </div>{" "}
          <div className="font-space font-medium  text-[16px] text-[#9D9D9D] ">
            Exploring Life: The Study of Cells
          </div>{" "}
        </div>
        <div className="flex flex-col gap-8 px-8 py-8">
          <div className="flex gap-8">
            <div>
              <Image
                height={500}
                width={500}
                className=" object-cover h-full w-full"
                src={"/images/Frame 1597883666.png"}
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className=" object-cover h-full w-full"
                src={"/images/Frame 1597883666.png"}
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className=" object-cover h-full w-full"
                src={"/images/Frame 1597883666.png"}
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className=" object-cover h-full w-full"
                src={"/images/Frame 1597883666.png"}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <Image
                height={500}
                width={500}
                className=" object-cover h-full w-full"
                src={"/images/Frame 1597883666.png"}
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className=" object-cover h-full w-full"
                src={"/images/Frame 1597883666.png"}
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className=" object-cover h-full w-full"
                src={"/images/Frame 1597883666.png"}
              />
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className=" object-cover h-full w-full"
                src={"/images/Frame 1597883666.png"}
              />
            </div>
          </div>
        </div>
      </padding>
    </div>
  );
};

export default Assesments;
