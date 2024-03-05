import i18n from "i18next";
import enTranslation from "./en/translation.json";
import thTranslation from "./th/translation.json";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: enTranslation,
  },
  th: {
    translation: thTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
});
