import React from "react";
import { styles } from "../../styles";
import { useHomeContext } from "../../context/HomeContext";
import Brand1 from "../../assets/images/uk bussiness brands/1.png";
import Brand2 from "../../assets/images/uk bussiness brands/2.png";
import Brand3 from "../../assets/images/uk bussiness brands/3.png";
import Brand4 from "../../assets/images/uk bussiness brands/4.png";
import Brand5 from "../../assets/images/uk bussiness brands/5.png";

export const OurPartners = () => {
  const { isDarkMode } = useHomeContext();
  return (
    <div
      className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-4 bg-primary  ${
        isDarkMode ? "text-whiteColor" : "text-blackColor"
      } min-h-[300px]  overflow-hidden ${styles.padding}`}
    >
      <h4
        className={`${styles.hText} col-span-1 md:col-span-3 lg:col-span-5 text-end mb-8`}
      >
        Our Partners
      </h4>
      <div className="brand-box col-span-1  rounded border-8 p-8">
        <img
          className="w-full h-full object-contain bg-whiteColor rounded-full"
          src={Brand1}
          alt=""
        />
      </div>
      <div className="brand-box col-span-1  rounded border-8 p-8">
        <img
          className="w-full h-full object-contain bg-whiteColor rounded-full"
          src={Brand2}
          alt=""
        />
      </div>
      <div className="brand-box col-span-1  rounded border-8 p-8">
        <img
          className="w-full h-full object-contain bg-whiteColor rounded-full"
          src={Brand3}
          alt=""
        />
      </div>
      <div className="brand-box col-span-1  rounded border-8 p-8">
        <img
          className="w-full h-full object-contain bg-whiteColor rounded-full"
          src={Brand4}
          alt=""
        />
      </div>
      <div className="brand-box col-span-1  rounded border-8 p-8">
        <img
          className="w-full h-full object-contain bg-whiteColor rounded-full"
          src={Brand5}
          alt=""
        />
      </div>
    </div>
  );
};
