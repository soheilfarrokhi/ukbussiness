import React from "react";
import { Navbar } from "../components/global/Navbar";
import { Footer } from "../components/home/Footer";
import { Outlet } from "react-router-dom";

export const ThemeOne = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
