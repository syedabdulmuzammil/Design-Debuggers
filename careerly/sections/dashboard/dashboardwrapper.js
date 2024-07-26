import React from "react";
import Homecards from "./homecards";
import Activities from "./activities";

const Dashhomewrapper = () => {
  return (
    <div className=" w-full ">
      <div className=" pl-8 pb-8 bg-black w-full  ">
        <Homecards />
        <Activities />
      </div>
    </div>
  );
};

export default Dashhomewrapper;
