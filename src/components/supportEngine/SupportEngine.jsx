import React, { useState, useEffect, useRef } from "react";
import SupportImg from "../../assets/images/home/1.jpg";
import { SupportWindow } from "./supportWindow/SupportWindow";

export const SupportEngine = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutSide = () => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [ref]);
  return (
    <div
      ref={ref}
      onClick={() => setVisible(true)}
      className={`w-[200px] text-center flex items-center gap-2 justify-center bg-primary transition  hover:bg-black text-white p-4 cursor-pointer rounded-t-md relative`}
    >
      <SupportWindow visible={visible} />

      <span>SupportEngine</span>
      <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={SupportImg} alt="" />
      </div>
    </div>
  );
};
