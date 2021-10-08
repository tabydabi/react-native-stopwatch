import i18next from 'i18next';
import english from './En/eng.json';
import russian from './Ru/ru.json';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
}
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
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
