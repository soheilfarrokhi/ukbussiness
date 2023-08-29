import React, { useEffect, useRef, useState } from "react";
import { styles } from "../../styles";
import Logo from "../../assets/images/home/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

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

  const [selectedFont, setSelectedFont] = useState("");

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--main-font", selectedFont);
  }, [selectedFont]);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-20 
      ${styles.paddingX}
       `}
    >
      <div
        className={`main-nav mx-auto flex items-center justify-between gap-2 py-4 ${
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
            src={Logo}
            alt=""
          />
        </Link>
        <MobileNavbar />
        <nav className=" hidden lg:flex items-center gap-4 text-white">
          <NavLink to="/" activeClassName="active-link" exact>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
          <NavLink to="/services" activeClassName="active-link">
            Services
          </NavLink>
          <NavLink to="/plans&pricing" activeClassName="active-link">
            Plans & pricing
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
