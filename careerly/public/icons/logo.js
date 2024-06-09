import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="max-h-[41px]">
      <Image height={200} width={200} className=" " src={"/images/logo.png"} />
    </div>
  );
};

export default Logo;
