import React from "react";
import { styles } from "../../styles";
import Img from "../../assets/images/home/how-it-works.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../global/Button";
import { Link } from "react-router-dom";

export const ContactUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      id={"contactUs"}
      className={`w-full grid grid-cols-1 lg:grid-cols-3 gap-4 bg-black min-h-[500px]  overflow-hidden text-white ${styles.padding}`}
    >
      <div className="flex flex-col items-start justify-between mb-8 lg:mb-0">
        <div className="flex flex-col gap-2">
          <h4 className={`${styles.h4Text}`}>Let's Connect</h4>
          <p className={`${styles.pText}`}>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </div>
        <div className="back-to-top mt-4" onClick={scrollToTop}>
          <Button
            customClass={
              "text-white min-w-[200px] outline-1 text-white hover:bg-primary "
            }
            title={"Scroll To Top"}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between mb-8 lg:mb-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h4 className={`${styles.h4Text}`}>Address</h4>
            <p className={`${styles.pText}`}>
              Mailing address: Suite 9, Office No. 903 Burlington Tower,
              Business Bay, Dubai, UAE
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className={`${styles.h4Text}`}>Email</h4>
            <p className={`${styles.pText}`}>info@ukabusiness.com</p>
            <p className={`${styles.pText}`}>mona@ukabusiness.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className={`${styles.h4Text}`}>Phone</h4>
            <p className={`${styles.pText}`}>+971 58 118 3944</p>
          </div>
        </div>
        <div className="outter-links flex items-center gap-4">
          <Link
            className="hover:text-primary"
            to={"/instagram/UKABusinessServices"}
          >
            Instagram
          </Link>
          <Link
            className="hover:text-primary"
            to={"/facebook/UKABusinessServices"}
          >
            FaceBook
          </Link>
          <Link className="hover:text-primary" to={"/tiktok/UKABusiness"}>
            TikTok
          </Link>
          <Link
            className="hover:text-primary"
            to={"/whatsapp/+971 58 118 3944"}
          >
            Whatsapp
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label for="" className={`${styles.pText}`}>
                First Name
              </label>
              <input
                className=" px-2 py-1 bg-transparent border-bottom hover:border-primary"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label for="" className={`${styles.pText}`}>
                Last Name
              </label>
              <input
                className=" px-2 py-1 bg-transparent border-bottom hover:border-primary"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <label for="" className={`${styles.pText}`}>
              Email
            </label>
            <input
              className=" px-2 py-1 bg-transparent border-bottom hover:border-primary"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label for="" className={`${styles.pText}`}>
              Message
            </label>
            <input
              className=" px-2 py-1 bg-transparent border-bottom hover:border-primary"
              type="text"
            />
          </div>
        </div>
        <Button
          customClass={
            "text-white min-w-[200px] text-white outline outline-1 w-full hover:bg-primary "
          }
          title={"Submit"}
        />
      </div>
    </div>
  );
};
