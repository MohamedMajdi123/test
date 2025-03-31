import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locale/en.json';
import ar from '../locale/ar.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      English: {
        translation: en
      },
      العربية: {
        translation: ar
      },
    },
    lng: "English", // Default language
    fallbackLng: 'English', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;