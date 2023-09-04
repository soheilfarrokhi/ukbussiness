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
              We are a young, innovative team of professionals with various
              legal and marketing backgrounds. Our team takes responsibility for
              delivering outstanding results.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="h-[2px] bg-white w-full"></div>
          <h4 className={`${styles.h4Text} text-white`}>Our Mission</h4>
          <p className={`${styles.pText}`}>
            We provide bespoke legal and business services to our clients and
            connect them with the best legal solution and the digital aspects
            that the world has to offer.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[2px] bg-white w-full"></div>
          <h4 className={`${styles.h4Text} text-white`}>Our Vision</h4>
          <p className={`${styles.pText}`}>
            We endeavour to continually add value to our client’s businesses
            with rapid strategic thinking, a creative approach to
            problem-solving and rapid response to all our client’s requirements.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[2px] bg-white w-full"></div>
          <h4 className={`${styles.h4Text} text-white`}>Our Approach</h4>
          <p className={`${styles.pText}`}>
            We strive to bridge the gap between an individual and the emerging
            legal and digital world. We make use of legal expertise and digital
            marketing techniques to support this new and emerging era of
            digitalisation.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[2px] bg-white w-full"></div>
          <h4 className={`${styles.h4Text} text-white`}>Our Commitment</h4>
          <p className={`${styles.pText}`}>
            As the legal and the marketing industries are both constantly
            evolving, it is crucial that our innovative team of professionals is
            constantly developing, ensuring the advice that we give to our
            clients is up to date. This is something that we fully embed into
            our Company culture.
          </p>
        </div>
      </div>
    </div>
  );
};
