import React from "react";
import { styles } from "../../styles";
import { FullWidthVideo } from "./FullWidthVideo";
import { Button } from "../global/Button";
import { useHomeContext } from "../../context/HomeContext";

export const Hero = () => {
  const { isDarkMode } = useHomeContext();
  return (
    <div
      className={`w-full h-[700px]  lg:h-screen overflow-hidden bg-blackColor relative p-0`}
    >
      <FullWidthVideo />
      <div
        className={`flex items-center flex-col justify-center gap-8 absolute z-1 w-full h-full top-0 left-0 ${styles.paddingX}`}
      >
        <div className="w-1/2 mx-auto">
          <h1
            className={`${styles.heroHeadText} text-white ${
              isDarkMode ? "" : "drop-shadow-[0_1.2px_1.2px_rgba(0,1,2,0.5)]"
            } text-center`}
          >
            UKA BUSINESS <br /> UKA MARKETING
          </h1>
        </div>
        <h2
          className={`${styles.heroSubText} ${
            isDarkMode ? "text-greyColor" : "text-whiteColor"
          } text-center`}
        >
          TURNING YOUR VISION INTO PROFIT
        </h2>
        <Button
          customClass={
            "text-white min-w-[200px] outlne-white outline-1 hover:bg-primary "
          }
          title={"Join Us"}
        />
      </div>
    </div>
  );
};
