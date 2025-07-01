// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations

import ja from "./Locales/ja.json";
import en from "./Locales/en.json";

// Configure i18n
i18n
  .use(LanguageDetector) // auto-detect user language
  .use(initReactI18next) // pass to react-i18next
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
