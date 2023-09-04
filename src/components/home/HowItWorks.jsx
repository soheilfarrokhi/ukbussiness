import React from "react";
import { styles } from "../../styles";
import Img from "../../assets/images/home/how-it-works.jpg";
import { AiFillAppstore } from "react-icons/ai";

export const HowItWorks = () => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row gap-0 bg-primary  overflow-hidden`}
    >
      <div className={`${styles.padding} flex-1 flex flex-col gap-8`}>
        <h2 className={`${styles.sectionHeadText} text-white`}>How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lgxl:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <AiFillAppstore className={`${styles.iconTextMain} text-white`} />
            <div className="h-[1px] bg-white w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-white uppercase`}>
              Initial consultation
            </h4>
            <p className={`${styles.pText} text-white`}>
              We will have an initial complementary consultation to discuss your
              business, business needs, goals and the possible options. We will
              provide you with different available routes and the advice on the
              best way forward.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <AiFillAppstore className={`${styles.iconTextMain} text-white`} />
            <div className="h-[1px] bg-white w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-white uppercase`}>
              Reviewing documentation and advice{" "}
            </h4>
            <p className={`${styles.pText} text-white`}>
              We will provide you with a list of documentation required to take
              your case forward. The documents depend on the type of service
              that you require from us. We will then provide you with an
              extensive execution plan.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <AiFillAppstore className={`${styles.iconTextMain} text-white`} />
            <div className="h-[1px] bg-white w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-white uppercase`}>
              Execution
            </h4>
            <p className={`${styles.pText} text-white`}>
              You will be informed and updated at every step of the execution.
              Depending on the type of service that you require, we will provide
              you with a monthly update and the strategy that we are
              implementing and adapting according to your business.
            </p>
          </div>
        </div>
      </div>
      <img src={Img} alt="" />
    </div>
  );
};
