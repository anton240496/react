// Filename - "./i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { DateTime } from 'luxon';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('selectedLanguage'),
    returnEmptyString: false,
    debug: true,
    fallbackLng: 'en',

    
    debug: false,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: '/react/locales/{{lng}}/translation.json',
        // loadPath: '/react/locales/es/translation.json'
    },
    
  });

  

i18n.services.formatter.add('DATE_LONG', (value, lng, _options) => {
  return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
});

export default i18n;

