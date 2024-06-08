"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";

const Sublayout = ({ children }) => {
  const path = usePathname();
  return (
    <div className=" min-w-full flex relative z-[1001] ">
      <div
        className={`  w-[15%] ${
          path == "/dashboard/addassessment" ? "hidden" : "hidden xl:flex "
        }  
       relative`}
      >
        <Sidebar />
      </div>
      <div
        className={` ${
          path == "/dashboard/addassessment"
            ? "w-[100%] "
            : "w-[100%] xl:w-[85%]"
        } relative`}
      >
        <div className="relative z-[1001]">{children}</div>
      </div>
    </div>
  );
};

export default Sublayout;
