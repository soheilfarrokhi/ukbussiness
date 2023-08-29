import React from "react";
import { Hero } from "../components/home/Hero";

import { ContactUs } from "../components/home/ContactUs";
import { FixedBg } from "../components/home/FixedBg";
import { AboutHero } from "../components/about/AboutHero";
import { OurTeam } from "../components/about/OurTeam";
import { TeamMembers } from "../components/about/TeamMembers";
import { Transitions } from "../components/global/Transitions";

export const AboutPage = () => {
  return (
    <>
      <Transitions>
        <AboutHero />
        <FixedBg />
        <OurTeam />
        <TeamMembers />
        <ContactUs />
      </Transitions>
    </>
  );
};
