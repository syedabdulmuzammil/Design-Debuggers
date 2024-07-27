"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";

const Layout = ({ children }) => {
  const path = usePathname();
  return (
    <div className="w-full flex relative z-[100000000] ">
      <div
        className={`  w-[20rem] ${
          path == "/dashboard/addassessment" ? "hidden" : "hidden xl:flex "
        }  
       relative`}
      >
        <Sidebar />
      </div>

      <div
        className={` 
             w-[80%] pt-6 relative bg-black z-[100000000]`}
      >
        <div className="relative z-[1001]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
