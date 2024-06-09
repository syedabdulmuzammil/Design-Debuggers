import React from "react";
import clsx from "clsx";

const Card = ({ heading, bg, textcolor, para, subhead, at }) => {
  return (
    <div
      className={clsx(
        " flex flex-col justify-between min-w-[400px] max-w-[400px]  rounded-3xl pl-6 pr-12 py-6 min-h-[30rem]  ",
        bg
      )}
    >
      <div className=" flex flex-col gap-7 ">
        <div
          className={clsx(
            " font-overused font-medium text-[96px] max-w-[350px] leading-[50px]  ",
            textcolor
          )}
        >
          {heading}
        </div>
        <div
          className={clsx(
            " font-space text-[36px] font-medium leading-[2.5rem]  ",
            textcolor
          )}
        >
          {para}
        </div>
        <div
          className={clsx(
            " font-overused text-[14px] font-medium leading-none  ",
            textcolor
          )}
        >
          {subhead}
        </div>
      </div>
      <div className=" w-fit bg-[#FFFFFF] px-[19px] py-[14px] rounded-2xl text-[#3C3C40] text-[15px] font-semibold font-overused  ">
        {at}
      </div>
    </div>
  );
};

export default Card;
