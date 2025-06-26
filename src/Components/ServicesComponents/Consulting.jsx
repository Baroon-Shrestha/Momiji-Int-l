import React from "react";
import ConultingHero from "./ConsultingComponents/ConultingHero";
import StepByStepProcess from "./ConsultingComponents/StepByStepProcess";
import TestsRequired from "./ConsultingComponents/TestsRequired";
import ConsultingFAQ from "./ConsultingComponents/ConsultingFAQ";
export default function Consulting() {
  return (
    <div>
      <ConultingHero />
      <StepByStepProcess />
      <TestsRequired />
      <ConsultingFAQ />
    </div>
  );
}
