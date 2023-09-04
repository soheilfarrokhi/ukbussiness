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
            <h1 className={`${styles.hText} text-center`}>Legal – Business </h1>
            <h4 className={`${styles.h4Text} text-center`}>
              Immigration – UAE/UK
            </h4>
            <p className={`${styles.pText} text-center`}>
              Change is the law of life. And those who only look to the past or
              present are certain to miss the future”. John F. Kennedy
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-20 max-w-[1000px] mx-auto ">
          <h2
            className={`${styles.h4Text} col-span-1 lg:col-span-2 text-center`}
          >
            Immigration – UAE
          </h2>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              Company establishment
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              Property purchase{" "}
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8 gap-20 max-w-[1000px] mx-auto">
          <h2
            className={`${styles.h4Text} col-span-1 lg:col-span-4  text-center`}
          >
            Immigration – UK
          </h2>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              High Potential Visa
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              Global Mobility Visa
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              Global Talent Visa
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              Indefinite Leave to Remain
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              Innovator Founder Visa
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>Marriage Visa</h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>Scale Up Visa</h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              Self-Sponsorship Visa
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>
              Skilled Worker Visa
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>Start-Up Visa</h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>Student Visa</h4>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[2px] bg-white w-full"></div>
            <h4 className={`${styles.h4Text} text-white`}>Visit Visa</h4>
          </div>
        </div>
      </div> */}
    </div>
  );
};
