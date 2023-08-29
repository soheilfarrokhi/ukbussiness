import React from "react";
import FixedBack from "../../assets/images/home/fixed-bg.jpg";

export const FixedBg = () => {
  return (
    <div
      className={`w-full bg-[url(./fixed-bg.jpg)] bg-fixed bg-no-repeat bg-center bg-cover w-full h-[500px]`}
    ></div>
  );
};
