import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { styles } from "../../styles";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
export const MobileNavbar = () => {
  const [showSide, setShowSide] = useState(false);

  const showSidebar = () => {
    setShowSide(!showSide);
  };
  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex lg:hidden text-white cursor-pointer"
        onClick={showSidebar}
      >
        <FaGripLines />
      </div>
      <div
        className={`mobile-nav block lg:hidden fixed top-0 right-0 min-w-[300px] h-full bg-white ${
          styles.padding
        } overflow-hidden ${showSide && "mobile-nav-show"}`}
      >
        <div
          className="close-mobile-nav absolute top-4 left-4 text-black hover:text-primary cursor-pointer"
          onClick={showSidebar}
        >
          <FaTimes />
        </div>
        <nav className="w-full h-full flex flex-col gap-4 text-end gap-4 text-black">
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
          <div className="login flex items-center justify-end gap-2 mt-8">
            <div className="avatar flex items-center justify-center rounded-full w-[30px] h-[30px] bg-primary text-white">
              A
            </div>
            <Link to="/home">Log In</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
