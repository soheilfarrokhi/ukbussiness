import React from "react";
import { styles } from "../../styles";

export const Button = ({ title, customClass }) => {
  return (
    <button className={`transition ${styles.btnMain} ${customClass}`}>
      {title}
    </button>
  );
};
