import React from "react";
import { styles } from "../../styles";
import { Button } from "../global/Button";

export const PlansAndPricingParts = () => {
  return (
    <>
      <div
        className={` overflow-hidden bg-white text-center ${styles.padding}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1000px] mx-auto gap-8">
          <div className="border border-black flex flex-col gap-8 p-4 text-black">
            <h4 className={`${styles.h4Text} text-black`}>Silver Membership</h4>
            <p className={`text-lg`}>$30</p>
            <p className={`${styles.pText} `}>
              Use this area to describe one of your services. Valid for one
              month
            </p>
            <Button
              customClass={
                " min-w-[200px] w-full outline-none bg-primary text-black  hover:bg-primary hover:text-white "
              }
              title={"Book Now"}
            />
          </div>
          <div className="border border-black flex flex-col gap-8 p-4 text-black">
            <h4 className={`${styles.h4Text} text-black`}>Silver Membership</h4>
            <p className={`text-lg`}>$30</p>
            <p className={`${styles.pText} `}>
              Use this area to describe one of your services. Valid for one
              month
            </p>
            <Button
              customClass={
                " min-w-[200px] w-full outline-none bg-primary text-black  hover:bg-primary hover:text-white "
              }
              title={"Book Now"}
            />
          </div>
          <div className="border border-black flex flex-col gap-8 p-4 text-black">
            <h4 className={`${styles.h4Text} text-black`}>Silver Membership</h4>
            <p className={`text-lg`}>$30</p>
            <p className={`${styles.pText} `}>
              Use this area to describe one of your services. Valid for one
              month
            </p>
            <Button
              customClass={
                " min-w-[200px] w-full outline-none bg-primary text-black  hover:bg-primary hover:text-white "
              }
              title={"Book Now"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
