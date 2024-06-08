import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-28 pt-40 pb-60 relative ">
      <div className=" flex flex-col gap-8 items-center justify-center ">
        <div className=" font-space font-medium text-white leading-none text-[50px] ">
          Students Testimonials
        </div>
        <div className=" w-[600px] font-overused text-center text-white leading-[33px] text-[20px] ">
          Discover student testimonials showcasing their success stories. See
          how our platform has helped students achieve their goals
        </div>
      </div>
      <div className=" h-[450px] w-[544px]  ">
        <Image
          height={1000}
          width={1000}
          className="object-cover h-full w-full"
          src={"/images/ibad.png"}
        />
      </div>
      <div className=" h-[164px] w-[249px] absolute bottom-[27rem] left-[2rem]  ">
        <Image
          height={1000}
          width={1000}
          className="object-cover h-full w-full"
          src={"/images/a1.png"}
        />
      </div>
      <div className=" h-[132px] w-[132px] absolute bottom-[7rem] left-[2rem]  ">
        <Image
          height={1000}
          width={1000}
          className="object-cover h-full w-full"
          src={"/images/a2.png"}
        />
      </div>
      <div className=" h-[110px] w-[110px] absolute top-[25rem] right-[12rem]  ">
        <Image
          height={1000}
          width={1000}
          className="object-cover h-full w-full"
          src={"/images/a3.png"}
        />
      </div>
      <div className=" h-[160px] w-[160px] absolute bottom-[20rem] right-[4rem]  ">
        <Image
          height={1000}
          width={1000}
          className="object-cover h-full w-full"
          src={"/images/a4.png"}
        />
      </div>
      <div className=" h-[219px] w-[125px] absolute bottom-[2rem] right-[16rem]  ">
        <Image
          height={1000}
          width={1000}
          className="object-cover h-full w-full"
          src={"/images/a5.png"}
        />
      </div>
    </div>
  );
};

export default Testimonials;
