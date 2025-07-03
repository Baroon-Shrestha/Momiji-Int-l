import React from "react";
import AccordionSlider from "../../HelperComponents/AccordionSlider";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Why() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t("home.why.heading")}
          </h1>
          <p className="text-xl text-gray-600 max-w-5xl text-center font-extralight mx-auto">
            {t("home.why.subheading1")}
            <br />
            <br /> {t("home.why.subheading2")}
          </p>
        </div>
        <AccordionSlider />
      </div>
    </>
  );
}
