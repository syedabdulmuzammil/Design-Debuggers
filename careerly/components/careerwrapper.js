import React from "react";
import Careerhero from "./careerhero";
import Thirdcomp from "./thirdcomp";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import Navbar from "./navbar";

const Careerwrapper = () => {
  return (
    <div className=" w-full pt-12 ">
      <Navbar />
      <Careerhero />
      <Thirdcomp hidden={true} />
      <Testimonials />
      <Faqs />
    </div>
  );
};

export default Careerwrapper;
