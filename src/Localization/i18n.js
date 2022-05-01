import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEN from "./en/translation";
import TranslationFA from "./fa/translation";

export default i18n.use(initReactI18next).init({
  resources: {
    en: { translation: TranslationEN },
    fa: { translation: TranslationFA },
  },
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
      escapeValue: false
  }
});
