import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import vnTranslations from './vn.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    vn: {
      translation: vnTranslations,
    },
  },
  lng: 'vn',
  fallbackLng: 'vn',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lng: string) => {
  return i18n.changeLanguage(lng);
};

export default i18n;
