import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './locale/en.json';

import * as moment from 'moment';
import 'moment/locale/vi';

export const LANGUAGE_DEFAULT = 'en';

export const locales = RNLocalize.getLocales();

export const resources = {
  en,
};

export type II18nLang =
  | 'en'
  | 'vi'
  | 'de'
  | 'fr'
  | 'ja'
  | 'zh-cn'
  | 'es'
  | 'it'
  | 'ru'
  | 'ko-kr';

export type LanguageType =
  | 'en-us'
  | 'vi'
  | 'de'
  | 'fr'
  | 'ja'
  | 'zh-cn'
  | 'es'
  | 'it'
  | 'ru'
  | 'ko-kr';

export const locale =
  locales && locales[0] && locales[0].languageCode
    ? locales[0].languageCode
    : LANGUAGE_DEFAULT;

export const getCurLocale = () => moment.locale();

/** i18n */
i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  fallbackLng: LANGUAGE_DEFAULT,
  interpolation: {
    escapeValue: false,
  },
  // compatibilityJSON: 'v3',
  react: {
    useSuspense: false,
  },
});

/** moment */
moment.locale(locale);

export const updateLanguage = () => {
  const locales = RNLocalize.getLocales();
  const locale =
    locales && locales[0] && locales[0].languageCode
      ? locales[0].languageCode
      : LANGUAGE_DEFAULT;
  i18n.changeLanguage(locale);
  moment.locale(locale);
};

export const updateLanguageByValue = (language: LanguageType) => {
  i18n.changeLanguage(language === 'en-us' ? 'en' : 'vi');
  moment.locale(language === 'en-us' ? 'en' : 'vi');
};

export default i18n;
