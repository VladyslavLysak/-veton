import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import pl from './locales/pl';

const resources = {
    en,
    pl,
};

const localLang = localStorage.getItem('lang');

i18n.use(initReactI18next).init({
    resources,
    lng: localLang || 'en',
    keySeparator: '.',
    useSuspense: false,
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: 'en',
});

export default i18n;
