import React from "react";
import { styles } from "../../styles";
import { Button } from "../global/Button";

export const PlansAndPricing = () => {
  return (
    <>
      <div
        className={`w-full min-h-[300px] flex flex-col text-center justify-center gap-8 bg-primary ${styles.padding} overflow-hidden`}
      >
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Plans & Pricing
        </h2>
        <div className="w-full max-w-[500px] mx-auto">
          <p className={`${styles.pText} text-center text-white`}>
            A RANGE OF OPPORTUNITIES TO SUIT EVERY CLIENT
          </p>
        </div>
        <Button
          customClass={
            "text-white min-w-[200px] outline-white outline-1 hover:outline-none mx-auto"
          }
          title={"Join Us"}
        />
      </div>
    </>
  );
};
