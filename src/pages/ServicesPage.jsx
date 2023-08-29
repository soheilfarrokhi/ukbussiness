import React from "react";

import { ContactUs } from "../components/home/ContactUs";
import { ServicesHero } from "../components/services/ServicesHero";
import { ServicesParts } from "../components/services/ServicesParts";
import { Transitions } from "../components/global/Transitions";

export const ServicesPage = () => {
  return (
    <>
      <Transitions>
        <ServicesHero />
        <ServicesParts />
        <ContactUs />
      </Transitions>
    </>
  );
};
