import React from "react";

import { ContactUs } from "../components/home/ContactUs";
import { PlansAndPricingHero } from "../components/plansAndPricing/PlansAndPricingHero";
import { PlansAndPricingParts } from "../components/plansAndPricing/PlansAndPricingParts";
import { Transitions } from "../components/global/Transitions";

export const PlansAndPricingPage = () => {
  return (
    <>
      <Transitions>
        <PlansAndPricingHero />
        <PlansAndPricingParts />
        <ContactUs />
      </Transitions>
    </>
  );
};
