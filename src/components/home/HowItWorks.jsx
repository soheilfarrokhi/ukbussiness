import React from "react";
import { styles } from "../../styles";
import Img from "../../assets/images/home/how-it-works.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HowItWorks = () => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row gap-0 bg-primary  overflow-hidden`}
    >
      <div className={`${styles.padding} flex-1 flex flex-col gap-8`}>
        <h2 className={`${styles.sectionHeadText} text-white`}>How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="flex flex-col gap-4">
            {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
            <div className="text-white">Icon</div>
            <div className="h-[1px] bg-white w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-white`}>Online Trading</h4>
            <p className={`${styles.pText} text-white`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
            <div className="text-white">Icon</div>
            <div className="h-[1px] bg-white w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-white`}>Online Trading</h4>
            <p className={`${styles.pText} text-white`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
            <div className="text-white">Icon</div>
            <div className="h-[1px] bg-white w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-white`}>Online Trading</h4>
            <p className={`${styles.pText} text-white`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>
      </div>
      <img src={Img} alt="" />
    </div>
  );
};
