import React from "react";
import ServiceImg from "../../assets/images/home/service-1.jpg";
import ServiceImg2 from "../../assets/images/home/service-2.jpg";
import ServiceImg3 from "../../assets/images/home/service-3.jpg";
import ServiceImg4 from "../../assets/images/home/service-4.jpg";
import ServiceImg5 from "../../assets/images/home/service-5.jpg";
import { styles } from "../../styles";

export const ServicesParts = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="col-span-1 h-[200px] lg:h-[500px]">
          <img className="w-full h-full object-cover" src={ServiceImg} alt="" />
        </div>
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Deborah Lynch
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Deborah Lynch
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="col-span-1 h-[200px] lg:h-[500px] order-first lg:order-last">
          <img
            className="w-full h-full object-cover"
            src={ServiceImg2}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="col-span-1 h-[200px] lg:h-[500px]">
          <img className="w-full h-full object-cover" src={ServiceImg} alt="" />
        </div>
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Deborah Lynch
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Deborah Lynch
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="col-span-1 h-[200px] lg:h-[500px] order-first lg:order-last">
          <img
            className="w-full h-full object-cover"
            src={ServiceImg2}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="col-span-1 h-[200px] lg:h-[500px]">
          <img className="w-full h-full object-cover" src={ServiceImg} alt="" />
        </div>
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Deborah Lynch
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
