import React from "react";

import { Transitions } from "../components/global/Transitions";

import { NotFoundHero } from "../components/NotFound/NotFoundHero";

export const NotFound = () => {
  return (
    <Transitions>
      <NotFoundHero />
    </Transitions>
  );
};
