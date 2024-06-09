import React from "react";

const Education = ({ activeIndex }) => {
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
          d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6"
          stroke={activeIndex == 1 ? "black" : "white"}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.3702 8.41998V19.58C17.3702 21.19 16.5702 22 14.9602 22H9.12018C7.51018 22 6.7002 21.19 6.7002 19.58V8.41998C6.7002 6.80998 7.51018 6 9.12018 6H14.9602C16.5702 6 17.3702 6.80998 17.3702 8.41998Z"
          stroke={activeIndex == 1 ? "black" : "white"}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3999 6V4.15002C13.3999 2.72002 14.1199 2 15.5499 2H19.8499C21.2799 2 21.9999 2.72002 21.9999 4.15002V15.85C21.9999 17.28 21.2799 18 19.8499 18H17.3699"
          stroke={activeIndex == 1 ? "black" : "white"}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 11H14"
          stroke={activeIndex == 1 ? "black" : "white"}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 14H14"
          stroke={activeIndex == 1 ? "black" : "white"}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 22V19"
          stroke={activeIndex == 1 ? "black" : "white"}
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Education;
