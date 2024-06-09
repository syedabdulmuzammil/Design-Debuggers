import React from "react";

const Career = ({ activeIndex }) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.05 2.53126L4.03002 6.46126C2.10002 7.72126 2.10002 10.5413 4.03002 11.8013L10.05 15.7313C11.13 16.4413 12.91 16.4413 13.99 15.7313L19.98 11.8013C21.9 10.5413 21.9 7.73126 19.98 6.47126L13.99 2.54126C12.91 1.82126 11.13 1.82126 10.05 2.53126Z"
          stroke={activeIndex == 4 ? "black" : "white"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.63012 13.0781L5.62012 17.7681C5.62012 19.0381 6.60012 20.3981 7.80012 20.7981L10.9901 21.8581C11.5401 22.0381 12.4501 22.0381 13.0101 21.8581L16.2001 20.7981C17.4001 20.3981 18.3801 19.0381 18.3801 17.7681V13.1281"
          stroke={activeIndex == 4 ? "black" : "white"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.3999 15V9"
          stroke={activeIndex == 4 ? "black" : "white"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Career;
