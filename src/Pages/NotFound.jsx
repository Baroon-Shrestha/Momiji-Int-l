// NotFound.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="text-center my-20">
      <h1 className="text-4xl font-bold text-red-500">
        404 - {t("notfound.heading")}
      </h1>
      <p className="text-lg mt-4">{t("notfound.subheading")}</p>
    </div>
  );
}
