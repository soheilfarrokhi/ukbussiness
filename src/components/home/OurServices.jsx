import React from "react";
import { styles } from "../../styles";
import Img1 from "../../assets/images/home/1.jpg";
import Img2 from "../../assets/images/home/2.jpg";
import Img3 from "../../assets/images/home/3.jpg";
import Img4 from "../../assets/images/home/4.jpg";
import Img5 from "../../assets/images/home/5.jpg";

export const OurServices = () => {
  return (
    <>
      <div
        className={`w-full min-h-[300px] flex-col text-center justify-center gap-8 bg-white ${styles.padding} overflow-hidden`}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Our Services
        </h2>
        <div className="w-full max-w-[500px] mx-auto">
          <p className={`${styles.pText} text-center`}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
      <div className={`w-full hidden lg:flex  gap-0 overflow-hidden`}>
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img5} alt="" />
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center bg-white min-h-[300px] gap-0 overflow-hidden ${styles.padding}`}
      >
        <div className="flex flex-col gap-4 p-4">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Stock Trading</p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Investment Banking</p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>E-Learning Platform</p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Personal Consultations</p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Algo Trading</p>
        </div>
      </div>
    </>
  );
};
