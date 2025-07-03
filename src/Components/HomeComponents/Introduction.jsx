import React from "react";
import img1 from "../../assets/Images/img1.jpeg";
import { useTranslation } from "react-i18next";

export default function Introduction() {
  const { t } = useTranslation(); // 👈 ADD THIS
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            {t("home.intro.heading1")}{" "}
            <span className="text-[#F78C1F]">{t("home.intro.heading2")}</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
            {t("home.intro.subheading")}
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-bolder text-justify text-gray-700 max-w-7xl">
          {t("home.intro.paragraph1")} <br />
          <br />
          {t("home.intro.paragraph2")}
          <br />
          <br />
          <div className="text-center">
            <span className="text-[#F78C1F] font-bold">
              {t("home.intro.ending1")}{" "}
            </span>
            <br />{" "}
            <span className="font-extralight text-center">
              "{t("home.intro.ending2")}"
            </span>
          </div>
        </p>

        <img
          src={img1}
          alt="Momiji Academy"
          className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] object-cover object-bottom rounded-2xl"
        />
      </div>
    </div>
  );
}
