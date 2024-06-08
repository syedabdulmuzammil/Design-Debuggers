import React from "react";
import Padding from "./padding";
import Logo from "@/public/icons/logo";
import Bar from "@/public/icons/bar";

const Navbar = () => {
  return (
    <Padding className={" fixed top-0 left-0 w-full "}>
      <div className=" min-w-full rounded-full bg-black  flex items-center justify-between px-5 py-5 ">
        <div className="bg-white w-[15rem]  flex gap-8 justify-center items-center rounded-full text-[18px]  ">
          <div>Culture</div>
          <div>Work</div>
          <div>Services</div>
        </div>
        <div>
          <Logo />
        </div>

        <div className="bg-white flex rounded-full text-[18px] gap-3 items-center justify-center px-2 leading-none ">
          <div>Sign in</div>
          <div>
            <Bar />
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Navbar;
