import React, { useState } from "react";
import { ChevronDown, CheckCircle, BookOpen, Globe, Award } from "lucide-react";
import AccordionSlider from "../HelperComponents/AccordionSlider";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function WhyChooseUS() {
  const { t } = useTranslation();
  return (
    <>
      <div className="mx-2 md:mx-6">
        <div className="min-h-screen  py-12 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white rounded-4xl">
          <div className="container mx-auto px-4 maxl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-amber-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                {t("home.why.heading")}
              </h1>
              <p className="text-xl text-white max-w-5xl text-center font-extralight mx-auto">
                {t("home.why.subheading1")}
                <br />
                <br /> {t("home.why.subheading2")}
              </p>
            </div>

            <AccordionSlider />
            <div className="text-center mt-12 bg-white rounded-4xl">
              <div className="text-slate-600 rounded-2xl p-8 shdow-lg">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
                  {t("home.why.cta.heading")}
                </h3>
                <p className="text-base sm:text-lg md:text-xl mb-6 font-extralight">
                  {t("home.why.cta.subheading")}
                </p>

                {/* CTA Button */}
                {/* <Link to="/contact"> */}
                <Link to="/contact">
                  <button className="capitalize px-8 py-4 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]  text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-500 transform hover:scale-105 transition-all duration-200 ease-out shadow-lg hover:shadow-xl">
                    {t("home.why.cta.button")}
                  </button>
                </Link>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
