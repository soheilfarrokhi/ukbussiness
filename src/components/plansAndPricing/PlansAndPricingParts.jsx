import React from "react";
import { styles } from "../../styles";
import { Button } from "../global/Button";

export const PlansAndPricingParts = () => {
  return (
    <>
      <div
        className={` overflow-hidden bg-white text-center ${styles.padding}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1000px] mx-auto gap-8">
          <div className="border border-black flex flex-col gap-8 p-4 text-black">
            <h4 className={`${styles.h4Text} text-black`}>
              Business Development{" "}
            </h4>
            {/* <p className={`text-lg`}>$30</p> */}
            <p className={`${styles.pText} `}>
              We offer bespoke packages for depending on the type of business
              that you’re running, where your business is at and what your goals
              are. Each business is different and unique in its own ways;
              therefore, we will review your business following an initial
              meeting and will let you know how we can assist you and what plan
              we can offer you depending on your budget.
            </p>
            {/* <Button
              customClass={
                " min-w-[200px] w-full outline-none bg-primary text-black  hover:bg-primary hover:text-white "
              }
              title={"Book Now"}
            /> */}
          </div>
          <div className="border border-black flex flex-col gap-8 p-4 text-black">
            <h4 className={`${styles.h4Text} text-black`}>Legal</h4>
            {/* <p className={`text-lg`}>$30</p> */}
            <p className={`${styles.pText} `}>
              The cases will be dealt with individually and following an initial
              consultation, we will inform you of the cost to resolve your legal
              case
            </p>
            {/* <Button
              customClass={
                " min-w-[200px] w-full outline-none bg-primary text-black  hover:bg-primary hover:text-white "
              }
              title={"Book Now"}
            /> */}
          </div>
          <div className="border border-black flex flex-col gap-8 p-4 text-black">
            <h4 className={`${styles.h4Text} text-black`}>Immigration</h4>
            {/* <p className={`text-lg`}>$30</p> */}
            <p className={`${styles.pText} `}>
              The costs depend on the type of visa that you’re applying for and
              your circumstances. We will usually provide you with a fixed cost
              for handling your application from the very beginning to the very
              end.
            </p>
            {/* <Button
              customClass={
                " min-w-[200px] w-full outline-none bg-primary text-black  hover:bg-primary hover:text-white "
              }
              title={"Book Now"}
            /> */}
          </div>
          <div className="border border-black flex flex-col gap-8 p-4 text-black">
            <h4 className={`${styles.h4Text} text-black`}>Marketing</h4>
            {/* <p className={`text-lg`}>$30</p> */}
            <p className={`${styles.pText} `}>
              We offer bespoke packages for depending on the type of business
              that you’re running, where your business is at and what your goals
              are. Each business is different and unique in its own ways;
              therefore, we will review your business following an initial
              meeting and will let you know how we can assist you and what plan
              we can offer you depending on your budget.
            </p>
            {/* <Button
              customClass={
                " min-w-[200px] w-full outline-none bg-primary text-black  hover:bg-primary hover:text-white "
              }
              title={"Book Now"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
