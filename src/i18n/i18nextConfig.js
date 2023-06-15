// i18nextConfig.js 파일
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import koTranslations from '../translations/ko';
import enTranslations from '../translations/en';

i18n
  .use(initReactI18next) // react-i18next를 사용하려면 이 부분이 필요합니다.
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ko: {
        translation: koTranslations
      }
    },
    lng: "ko",
    fallbackLng: "ko",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
