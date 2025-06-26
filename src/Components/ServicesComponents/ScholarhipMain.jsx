import React from "react";
import ScholarshipHero from "./Scholarship/ScholarshipHero";
import Types from "./Scholarship/Types";
import Criteria from "./Scholarship/Criteria";

import SuccessStories from "./Scholarship/SuccessStories";
import HowToApply from "./Scholarship/HowToApply";
import ScholarShipFAQ from "./Scholarship/ScholarShipFAQ";

export default function ScholarhipMain() {
  return (
    <>
      <ScholarshipHero />
      <Types />
      <Criteria />
      <HowToApply />
      <SuccessStories />
      <ScholarShipFAQ />
    </>
  );
}
