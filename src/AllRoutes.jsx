import React from "react";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeOne } from "./template/ThemeOne";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PlansAndPricingPage } from "./pages/PlansAndPricingPage";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { MarketingPage } from "./pages/MarketingPage";
import { NotFound } from "./pages/NotFound";

const Animated = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path={"/"} element={<ThemeOne />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/legal"} element={<ServicesPage />} />
        <Route path={"/marketing"} element={<MarketingPage />} />
        <Route path={"/plans&pricing"} element={<PlansAndPricingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      {/* <AnimatePresence exitBeforeEnter> */}
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<ThemeOne />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/legal"} element={<ServicesPage />} />
          <Route path={"/marketing"} element={<MarketingPage />} />
          <Route path={"/plans&pricing"} element={<PlansAndPricingPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </AnimatePresence> */}
    </BrowserRouter>
  );
};
