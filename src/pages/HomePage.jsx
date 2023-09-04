import React from "react";
import { Hero } from "../components/home/Hero";

import { OurServices } from "../components/home/OurServices";
import { HowItWorks } from "../components/home/HowItWorks";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { ContactUs } from "../components/home/ContactUs";
import { FixedBg } from "../components/home/FixedBg";
import { Transitions } from "../components/global/Transitions";
import { LegalServices } from "../components/home/LegalServices";
import { OurPartners } from "../components/home/OurPartners";
import { MarketingServices } from "../components/home/MarketingServices";

export const HomePage = () => {
  return (
    <Transitions>
      <Hero />
      <OurServices />
      <HowItWorks />
      <WhyChooseUs />
      <LegalServices />
      <OurPartners />
      <MarketingServices />
      <FixedBg />
      <ContactUs />
    </Transitions>
  );
};
