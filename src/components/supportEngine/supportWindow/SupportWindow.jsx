import React from "react";
import { styles } from "../supportStyle";
import { EmailForm } from "./EmailForm";

export const SupportWindow = (props) => {
  return (
    <div
      style={{
        ...styles.supportWindow,
        opacity: props.visible ? "1" : "0",
        display: props.visible ? "flex" : "none",
        // PointerEvent: props.visible ? "auto" : "none",
        visibility: props.visible ? "visible" : "none",
      }}
    >
      <EmailForm />
    </div>
  );
};
