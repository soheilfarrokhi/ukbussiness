import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import LogoWhite from "../../assets/images/home/logo.png";
import LogoBlack from "../../assets/images/home/logo-black.png";
import { Link, NavLink } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";
import { CiDark } from "react-icons/ci";
import { useHomeContext } from "../../context/HomeContext";

export const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const { isDarkMode, setIsDarkMode } = useHomeContext();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-20 
      ${styles.paddingX}
       `}
    >
      <div
        className={`main-nav ${
          isDarkMode ? "bg-blackColor" : "bg-whiteColor"
        } mx-auto flex items-center justify-between gap-2 py-4 ${
          styles.paddingX
        } ${
          isNavbarVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          to={"/"}
          className="logo w-[80px] h-[45px] md:w-[100px] md:h-[75px] overflow-hidden"
        >
          <img
            className="w-full h-full object-contain object-center"
            src={isDarkMode ? LogoWhite : LogoBlack}
            alt=""
          />
        </Link>
        <MobileNavbar />

        <nav
          className={`hidden lg:flex items-center gap-4 ${
            isDarkMode ? "text-whiteColor" : "text-blackColor"
          }`}
        >
          {/*darkmode theme  */}
          <button
            className={`${styles.themeBtn} ${
              isDarkMode
                ? "bg-blackColor text-whiteColor hover:bg-whiteColor hover:text-blackColor"
                : "bg-whiteColor text-blackColor hover:bg-blackColor hover:text-whiteColor"
            }`}
            onClick={toggleDarkMode}
          >
            {/* <span>Dark</span> */}
            <CiDark className={`${styles.iconText}`} />
          </button>
          {/*darkmode theme end */}
          <NavLink to="/" activeClassName="active-link" exact>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
          <NavLink to="/legal" activeClassName="active-link">
            Legal
          </NavLink>
          <NavLink to="/marketing" activeClassName="active-link">
            Marketing
          </NavLink>
          <NavLink to="/plans&pricing" activeClassName="active-link">
            Packages
          </NavLink>
          <NavLink to="/terms&Conditions" activeClassName="active-link">
            Terms & Conditions
          </NavLink>
          <a href="#contactUs">Contact Us</a>
          <div className="login flex items-center gap-2">
            <div className="avatar flex items-center justify-center rounded-full w-[30px] h-[30px] bg-primary text-white">
              A
            </div>
            <Link to="/">Log In</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
