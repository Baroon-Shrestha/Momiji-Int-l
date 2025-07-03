import { CheckCircle } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Criteria() {
  const { t } = useTranslation();
  const criterias = t("services.criteria.list", { returnObjects: true });
  return (
    <>
      <div className="container mx-auto pb-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {t("services.criteria.heading")}{" "}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-extralight">
            {t("services.criteria.subheading")}
          </p>
        </div>
        <div>
          <div className="p-8">
            <ul className="space-y-6">
              {criterias.map((item, index) => (
                <li key={item.id} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
