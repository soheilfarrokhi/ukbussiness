import React from "react";
import { styles } from "../../styles";

export const ServicesHero = () => {
  return (
    <div
      className={`flex flex-col items-center gap-8 w-full  bg-primary text-white top-0 left-0 ${styles.padding}`}
    >
      <div className="h-[100px] w-full bg-primary"></div>
      <div className="flex items-center justify-center h-[300px]">
        <div className="flex flex-col gap-8 items-center">
          <div className="w-1/2 mx-auto flex flex-col gap-8">
            <h1 className={`${styles.hText} text-center`}>services</h1>
            <p className={`${styles.pText} text-center`}>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
