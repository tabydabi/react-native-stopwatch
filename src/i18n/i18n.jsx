import i18next from 'i18next';
import english from './En/eng.json';
import russian from './Ru/ru.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: english,
    ru: russian,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    skipOnVariables: false,
  },
  compatibilityJSON: 'v3',
});
export default i18next;
