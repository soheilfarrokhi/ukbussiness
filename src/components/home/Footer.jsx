import React from "react";
import { styles } from "../../styles";
import { SupportEngine } from "../supportEngine/SupportEngine";

export const Footer = () => {
  return (
    <>
      <div
        className={`fixed bottom-0 gap-4 z-20 right-0 ${styles.paddingX} hidden lg:block`}
      >
        <SupportEngine />
      </div>
      <div
        className={`${styles.padding} bg-primary flex items-center justify-center ${styles.pText} text-white`}
      >
        <p>© copywrite by uk bussiness.</p>
      </div>
    </>
  );
};
