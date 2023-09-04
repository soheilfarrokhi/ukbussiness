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
            <div className="flex flex-col  gap-4">
              <div className="h-[2px] bg-black w-[200px]"></div>
              <h5 className={`${styles.h5Text} text-black max-w-[250px]`}>
                15+ Years of Experience
              </h5>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="h-[2px] bg-black w-[200px]"></div>
              <h5 className={`${styles.h5Text} text-black max-w-[250px]`}>
                Certified Professional Consultants and Advisors
              </h5>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="h-[2px] bg-black w-[200px]"></div>
              <h5 className={`${styles.h5Text} text-black max-w-[250px]`}>
                Constantly Evolving
              </h5>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-between  w-full">
            <div className="flex flex-col  gap-4">
              <div className="h-[2px] bg-black w-[200px]"></div>
              <h5 className={`${styles.h5Text} text-black max-w-[250px]`}>
                Experience in the UK and the UAE
              </h5>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="h-[2px] bg-black w-[200px]"></div>
              <h5 className={`${styles.h5Text} text-black max-w-[250px]`}>
                Over 1,000 Long-Term Satisfied Clients
              </h5>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="h-[2px] bg-black w-[200px]"></div>
              <h5 className={`${styles.h5Text} text-black max-w-[250px]`}>
                Experience Working with Big Known Brands
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
