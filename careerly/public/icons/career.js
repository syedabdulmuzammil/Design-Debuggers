import React from "react";

const Career = ({ activeIndex }) => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 6.875L9.375 11.25L17.5 5.625L10.625 1.25L2.5 6.875Z"
          stroke={activeIndex == 4 ? "black" : "white"}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.5 6.875V10.625L9.375 15L17.5 9.375C16.75 8.625 16.5625 7.5 17.0625 6.5625L17.5 5.625"
          stroke={activeIndex == 4 ? "black" : "white"}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.5 10.625V14.375L9.375 18.75L17.5 13.125C16.75 12.375 16.5625 11.25 17.0625 10.3125L17.5 9.375"
          stroke={activeIndex == 4 ? "black" : "white"}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Career;
