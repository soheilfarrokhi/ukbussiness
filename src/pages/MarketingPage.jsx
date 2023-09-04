import React from "react";
import { ContactUs } from "../components/home/ContactUs";
import { Transitions } from "../components/global/Transitions";
import { MarketingHero } from "../components/marketing/MarketingHero";
import { MarketingParts } from "../components/marketing/MarketingParts";

export const MarketingPage = () => {
  return (
    <>
      <Transitions>
        <MarketingHero />
        <MarketingParts />
        <ContactUs />
      </Transitions>
    </>
  );
};
