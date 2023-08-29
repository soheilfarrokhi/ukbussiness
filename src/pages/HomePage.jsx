import React from "react";
import { Hero } from "../components/home/Hero";

import { OurServices } from "../components/home/OurServices";
import { HowItWorks } from "../components/home/HowItWorks";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { PlansAndPricing } from "../components/home/PlansAndPricing";
import { ContactUs } from "../components/home/ContactUs";
import { FixedBg } from "../components/home/FixedBg";
import { Transitions } from "../components/global/Transitions";

export const HomePage = () => {
  return (
    <Transitions>
      <Hero />
      <OurServices />
      <HowItWorks />
      <WhyChooseUs />
      <PlansAndPricing />
      <FixedBg />
      <ContactUs />
    </Transitions>
  );
};
