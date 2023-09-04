import React from "react";
import { styles } from "../../styles";
import { Link, redirect } from "react-router-dom";
import { Button } from "../global/Button";
import { useHomeContext } from "../../context/HomeContext";

export const MarketingServices = () => {
  const { isDarkMode } = useHomeContext();

  const redirectToPage = () => {
    return redirect("/other-page"); // Redirect to the '/other-page' route
  };

  return (
    <>
      <div
        className={`w-full min-h-[300px] flex flex-col text-center justify-center gap-8 ${
          isDarkMode ? "bg-blackColor" : "bg-whiteColor"
        } ${styles.padding} overflow-hidden`}
      >
        <h2
          className={`${styles.sectionHeadText} text-center ${
            isDarkMode ? "text-whiteColor" : "text-blackColor"
          }`}
        >
          Marketing Services
        </h2>
        <div className="w-full max-w-[500px] mx-auto">
          <p
            className={`${styles.pText} text-center ${
              isDarkMode ? "text-whiteColor" : "text-blackColor"
            }`}
          >
            A RANGE OF SERVICES DO WE OFFER
          </p>
        </div>
        <Link
          to={"/marketing"}
          className={`${
            isDarkMode ? "text-whiteColor" : "text-blackColor"
          } min-w-[200px] ${isDarkMode ? "outline-white" : "outline-black "} ${
            styles.linkMain
          } outline-1 hover:outline-none mx-auto`}
        >
          See All
        </Link>
      </div>
    </>
  );
};
