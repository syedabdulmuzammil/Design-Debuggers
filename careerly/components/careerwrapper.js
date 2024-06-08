import React from "react";
import Careerhero from "./careerhero";
import Thirdcomp from "./thirdcomp";
import Testimonials from "./testimonials";

const Careerwrapper = () => {
  return (
    <div className=" w-full ">
      <Careerhero />
      <Thirdcomp hidden={true} />
      <Testimonials />
    </div>
  );
};

export default Careerwrapper;
