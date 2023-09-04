import React, { useState } from "react";
import { styles } from "../supportStyle";
import { Loading } from "../../global/Loading";
import SupportImg from "../../../assets/images/home/1.jpg";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("sending email", email);
  };

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        height: "100%",
        opacity: "1",
      }}
    >
      <div style={{ height: "0px" }}>
        <div style={styles.stripe} />
      </div>
      <div
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
          },
        }}
      />
      <Loading loading={loading} />
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full absolute p-4">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
          <img className="w-full h-full object-cover" src={SupportImg} alt="" />
        </div>
        <h2 className={styles.topText}>
          welcome to my <br /> support
        </h2>
        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <input
            style={styles.emailInput}
            className="text-black "
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
        </form>
        <div className="text-primary">
          Enter Your Email <br />
          to get started!
        </div>
      </div>
    </div>
  );
};
