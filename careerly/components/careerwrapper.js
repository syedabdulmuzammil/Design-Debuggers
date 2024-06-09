import React from "react";
import Careerhero from "./careerhero";
import Thirdcomp from "./thirdcomp";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

const Careerwrapper = () => {
  return (
    <div className=" w-full ">
      <Careerhero />
      <Thirdcomp hidden={true} />
      <Testimonials />
      <Faqs />
    </div>
  );
};

export default Careerwrapper;
