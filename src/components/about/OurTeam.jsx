import React from "react";
import { styles } from "../../styles";
import { Button } from "../global/Button";

export const OurTeam = () => {
  return (
    <>
      <div
        className={`w-full min-h-[300px] flex flex-col text-center justify-center gap-8 bg-white ${styles.padding} overflow-hidden`}
      >
        <h2 className={`${styles.sectionHeadText} text-center text-black`}>
          Our Team
        </h2>
        <div className="w-full max-w-[500px] mx-auto">
          <p className={`${styles.pText} text-center text-black`}>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </div>
      </div>
    </>
  );
};
