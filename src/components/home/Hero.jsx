import React from "react";
import { styles } from "../../styles";
import { FullWidthVideo } from "./FullWidthVideo";
import { Button } from "../global/Button";

export const Hero = () => {
  return (
    <div
      className={`w-full h-[700px]  lg:h-screen overflow-hidden bg-black relative p-0`}
    >
      <FullWidthVideo />
      <div
        className={`flex items-center flex-col justify-center gap-8 absolute z-1 w-full h-full top-0 left-0 ${styles.paddingX}`}
      >
        <div className="w-1/2 mx-auto">
          <h1 className={`${styles.heroHeadText} text-center`}>
            UKA BUSINESS <br /> UKA MARKETING
          </h1>
        </div>
        <h2 className={`${styles.heroSubText} text-center`}>
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
