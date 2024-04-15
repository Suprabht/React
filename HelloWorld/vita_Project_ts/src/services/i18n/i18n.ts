import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import config from "../../../config.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: config.i18nDebug,
    
    supportedLngs: ["en", "es", "bn", "en-IN"], // *** added this ***
    ns: ['translations'],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: `/src/assets/locales/{{lng}}/{{ns}}.json`,
    },
  });


export default i18n;