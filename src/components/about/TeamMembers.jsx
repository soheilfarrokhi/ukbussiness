import React from "react";
import MemberImg from "../../assets/images/home/member-1.jpg";
import MemberImg2 from "../../assets/images/home/member-2.jpg";
import MemberImg3 from "../../assets/images/home/member-3.jpg";
import { styles } from "../../styles";

export const TeamMembers = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
        <div className="col-span-2 h-[400px] lg:h-[700px]">
          <img className="w-full h-full object-cover" src={MemberImg} alt="" />
        </div>
        <div
          className={`col-span-1 bg-primary flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <h4 className={`${styles.h4Text} text-white`}>Deborah Lynch</h4>
            <p className={`${styles.pText} text-white`}>Co-Founder</p>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-white`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`${styles.pText} text-white`}>Phone: 123-456-7890</p>
            <div className="h-[2px] bg-white w-full"></div>
            <p className={`${styles.pText} text-white`}>
              Mail: info@mysite.com
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  overflow-hidden">
        <div
          className={`col-span-1 bg-primary flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <h4 className={`${styles.h4Text} text-white`}>Ted Powell</h4>
            <p className={`${styles.pText} text-white`}>Co-Founder</p>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-white`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`${styles.pText} text-white`}>Phone: 123-456-7890</p>
            <div className="h-[2px] bg-white w-full"></div>
            <p className={`${styles.pText} text-white`}>
              Mail: info@mysite.com
            </p>
          </div>
        </div>
        <div className="col-span-2 h-[400px] lg:h-[700px] order-first lg:order-last">
          <img className="w-full h-full object-cover" src={MemberImg2} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  overflow-hidden">
        <div className="col-span-2 h-[400px] lg:h-[700px]">
          <img className="w-full h-full object-cover" src={MemberImg3} alt="" />
        </div>
        <div
          className={`col-span-1 bg-primary flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <h4 className={`${styles.h4Text} text-white`}>Deborah Lynch</h4>
            <p className={`${styles.pText} text-white`}>Co-Founder</p>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-white`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`${styles.pText} text-white`}>Phone: 123-456-7890</p>
            <div className="h-[2px] bg-white w-full"></div>
            <p className={`${styles.pText} text-white`}>
              Mail: info@mysite.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
