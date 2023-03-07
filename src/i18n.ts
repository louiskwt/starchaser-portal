import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en-US.json";
import zhTW from "./locales/zh-TW.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enUS,
      zh: zhTW,
    },
    lng: "zh",
    fallbackLng: "zh",
  });

export default i18n;
