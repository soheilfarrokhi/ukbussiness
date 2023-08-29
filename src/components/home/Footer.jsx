import React from "react";
import { styles } from "../../styles";

export const Footer = () => {
  return (
    <>
      <div
        className={`fixed bottom-0 gap-4 z-20 right-0 ${styles.paddingX} hidden lg:block`}
      >
        <div className="w-[200px] text-center flex items-center justify-center bg-primary transition hover:bg-black text-white p-4 cursor-pointer">
          <p>Let's chat!</p>
        </div>
      </div>
      <div
        className={`${styles.padding} bg-primary flex items-center justify-center ${styles.pText} text-white`}
      >
        <p>© 2035 by Lynch & Powell. Powered and secured by Wix</p>
      </div>
    </>
  );
};
