import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en', // default language
		whitelist: ['en', 'he'], // list of languages
		debug: false, // throw message into console
		detection: {
			order: ['localStorage', 'cookie'], // place where U will be save current language
			caches: ['localStorage', 'cookie'],
		},
		interpolation: {
			escapeValue: false,
		}
	});

export default i18n;