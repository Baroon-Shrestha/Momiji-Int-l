import React from "react";
import NewServicesContent from "../ServiceMainComponents/NewServicesContent";
import { useTranslation } from "react-i18next";

export default function Types() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto pb-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {t("services.types.heading1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B]">
              {t("services.types.heading2")}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            illo rerum laboriosam alias id consequatur repellendus debitis
            adipisci? Non, consectetur.
          </p>
        </div>
        <NewServicesContent />
      </div>
    </>
  );
}
