import React from "react";
import { styles } from "../../styles";
import Img from "../../assets/images/home/how-it-works.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhyChooseUs = () => {
  return (
    <div className={`w-full  bg-white  overflow-hidden`}>
      <div className={`${styles.padding} flex flex-col gap-8`}>
        <h2 className={`${styles.sectionHeadText}  text-center`}>
          Why choose us
        </h2>
        <div className="w-full flex flex-col  gap-8 mb-8  max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-2 justify-between  w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="h-[1px] bg-black w-[200px]"></div>
              <h4 className={`${styles.h4Text} text-black`}>
                15+ Years of Experience
              </h4>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-[1px] bg-black w-[200px]"></div>
              <h4 className={`${styles.h4Text} text-black`}>
                Certified Professional Traders
              </h4>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-[1px] bg-black w-[200px]"></div>
              <h4 className={`${styles.h4Text} text-black`}>
                Easy & Simple Trading Tools
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-between  w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="h-[1px] bg-black w-[200px]"></div>
              <h4 className={`${styles.h4Text} text-black`}>
                Data-driven Trading System
              </h4>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-[1px] bg-black w-[200px]"></div>
              <h4 className={`${styles.h4Text} text-black`}>
                Over 2,000 Satisfied Clients
              </h4>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-[1px] bg-black w-[200px]"></div>
              <h4 className={`${styles.h4Text} text-black`}>
                Constantly Evolving
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
