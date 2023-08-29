import React from "react";
import { styles } from "../../styles";

export const AboutHero = () => {
  return (
    <div
      className={`flex flex-col items-center gap-8 w-full min-h-screen bg-primary text-white top-0 left-0 ${styles.padding}`}
    >
      <div className="h-[100px] w-full bg-primary"></div>
      <div className="flex items-center justify-center h-[300px]">
        <div className="flex flex-col gap-8 items-center">
          <div className="w-1/2 mx-auto flex flex-col gap-8">
            <h1 className={`${styles.hText} text-center`}>About</h1>
            <p className={`${styles.pText} text-center`}>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="h-[2px] bg-white w-full"></div>
          <h4 className={`${styles.h4Text} text-white`}>Our Expertise</h4>
          <p className={`${styles.pText}`}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[2px] bg-white w-full"></div>
          <h4 className={`${styles.h4Text} text-white`}>Our Philosophy</h4>
          <p className={`${styles.pText}`}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[2px] bg-white w-full"></div>
          <h4 className={`${styles.h4Text} text-white`}>
            Our Commitment to Results
          </h4>
          <p className={`${styles.pText}`}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[2px] bg-white w-full"></div>
          <h4 className={`${styles.h4Text} text-white`}>Our Experience</h4>
          <p className={`${styles.pText}`}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </div>
  );
};
