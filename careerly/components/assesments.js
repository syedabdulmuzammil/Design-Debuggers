import Image from "next/image";
import Link from "next/link";
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
            <Link href={"/dashboard/assessment"}>
              <div>
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/web.png"}
                />
              </div>
            </Link>
            <Link href={"/dashboard/assessment"}>
              <div>
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/web.png"}
                />
              </div>
            </Link>
            <Link href={"/dashboard/assessment"}>
              <div>
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/web.png"}
                />
              </div>
            </Link>
            <Link href={"/dashboard/assessment"}>
              <div>
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/web.png"}
                />
              </div>
            </Link>
          </div>
          <div className="flex gap-8">
            <Link href={"/dashboard/assessment"}>
              <div>
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/web.png"}
                />
              </div>
            </Link>
            <Link href={"/dashboard/assessment"}>
              <div>
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/web.png"}
                />
              </div>
            </Link>
            <Link href={"/dashboard/assessment"}>
              <div>
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/web.png"}
                />
              </div>
            </Link>
            <Link href={"/dashboard/assessment"}>
              <div>
                <Image
                  height={500}
                  width={500}
                  className=" object-cover h-full w-full"
                  src={"/images/web.png"}
                />
              </div>
            </Link>
          </div>
        </div>
        <Link href={"/dashboard/personal"}>
          <div className=" flex w-full items-end justify-end pt-16  pb-24 px-4 ">
            <div className=" h-[55px] ">
              <Image
                height={600}
                width={600}
                className=" object-cover h-full w-full "
                src={"/images/check.png"}
              />
            </div>
          </div>
        </Link>
      </padding>
    </div>
  );
};

export default Assesments;
