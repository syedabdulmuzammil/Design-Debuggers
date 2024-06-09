import Image from "next/image";
import React from "react";

const Card2 = ({ img, name, rating }) => {
  return (
    <div className="rounded-3xl bg-[#333333]  px-5 py-5 w-fit min-w-[257px] h-[319px] flex flex-col gap-5 ">
      <div className="w-[232px] h-[200px] ">
        <Image
          height={500}
          width={500}
          className="object-cover h-full w-full"
          src={img}
        />
      </div>
      <div className="text-[15px] font-bold w-[127px] h-[30px] leading-none font-space text-[#E3E2DC] ">
        {name}
      </div>
      <div>{rating}</div>
    </div>
  );
};

export default Card2;
