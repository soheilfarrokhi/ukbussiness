import React from "react";
import { AiFillAppstore } from "react-icons/ai";
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
        <h2 className={`${styles.sectionHeadText} text-center mb-2`}>
          Our Services
        </h2>
        <h4 className={`${styles.h4Text} text-center mb-8`}>
          Our approach to our services is personal, bespoke and flexible
        </h4>
        <div className="w-full max-w-[500px] mx-auto">
          <p className={`${styles.pText} text-center`}>
            U K A is a collective of the youngest and most innovative minds in
            the UAE and the UK. Our Company takes pride for the fact that it
            provides all the information and intelligence that one may need
            under one roof. We provide legal, business, immigration, and
            marketing services from consultation to execution.
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
        className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center bg-primary text-whiteColor  min-h-[300px] gap-0 overflow-hidden ${styles.padding}`}
      >
        <h4
          className={`${styles.hText} col-span-1 md:col-span-3 lg:col-span-5 mb-8`}
        >
          Legal and Business
        </h4>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <AiFillAppstore className={`${styles.iconTextMain}`} />
          <div className="h-[1px] bg-white w-full md:w-[200px] "></div>
          <p>Corporate</p>
        </div>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <AiFillAppstore className={`${styles.iconTextMain}`} />
          <div className="h-[1px] bg-white w-full md:w-[200px]"></div>
          <p>Commercial</p>
        </div>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <AiFillAppstore className={`${styles.iconTextMain}`} />
          <div className="h-[1px] bg-white w-full md:w-[200px]"></div>
          <p>Employment</p>
        </div>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <AiFillAppstore className={`${styles.iconTextMain}`} />
          <div className="h-[1px] bg-white w-full md:w-[200px]"></div>
          <p>Immigration</p>
        </div>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <AiFillAppstore className={`${styles.iconTextMain}`} />
          <div className="h-[1px] bg-white w-full md:w-[200px]"></div>
          <p>Property</p>
        </div>
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center bg-whiteColor text-black min-h-[300px] gap-0 overflow-hidden ${styles.padding}`}
      >
        <h4
          className={`${styles.hText} col-span-1 md:col-span-3 lg:col-span-5 text-end mb-8`}
        >
          Marketing
        </h4>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Digital marketing & Social media management</p>
        </div>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Graphic design</p>
        </div>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Branding</p>
        </div>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Trailer and commercial videos</p>
        </div>
        <div className="flex flex-col gap-4 p-4 cursor-pointer transition hover:text-greyColor">
          <div className="h-[1px] bg-black w-full md:w-[200px]"></div>
          <p>Photography and videography</p>
        </div>
      </div>
    </>
  );
};
