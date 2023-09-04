import React from "react";
import { styles } from "../../styles";

export const NotFoundHero = () => {
  return (
    <div
      className={`flex flex-col items-center gap-8 w-full  bg-primary text-white top-0 left-0 ${styles.padding}`}
    >
      <div className="h-[100px] w-full bg-primary"></div>
      <div className="flex items-center justify-center h-[300px]">
        <div className="flex flex-col gap-8 items-center">
          <div className="w-1/2 mx-auto flex flex-col gap-8">
            <h1 className={`${styles.hText} text-center`}>Page Not Found</h1>
            <Link
              to={"/"}
              className={`${
                isDarkMode ? "text-whiteColor" : "text-blackColor"
              } min-w-[200px] ${
                isDarkMode ? "outline-white" : "outline-black "
              } ${styles.linkMain} outline-1 hover:outline-none mx-auto`}
            >
              back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
