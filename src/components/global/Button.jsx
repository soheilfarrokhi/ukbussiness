import React from "react";
import { styles } from "../../styles";

export const Button = ({ redirect = "", title, customClass }) => {
  return (
    <button
      onClick={() => redirect()}
      className={`transition ${styles.btnMain} ${customClass}`}
    >
      {title}
    </button>
  );
};
