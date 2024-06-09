import React from "react";

const Dashboard = ({ activeIndex }) => {
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
          d="M7.5165 2.36517L3.02484 5.86517C2.27484 6.44851 1.6665 7.69017 1.6665 8.63184V14.8068C1.6665 16.7402 3.2415 18.3235 5.17484 18.3235H14.8248C16.7582 18.3235 18.3332 16.7402 18.3332 14.8152V8.74851C18.3332 7.74017 17.6582 6.44851 16.8332 5.87351L11.6832 2.26517C10.5165 1.44851 8.6415 1.49017 7.5165 2.36517Z"
          stroke={activeIndex == 0 ? "black" : "white"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 14.9922V12.4922"
          stroke={activeIndex == 0 ? "black" : "white"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Dashboard;
