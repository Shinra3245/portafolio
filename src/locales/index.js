import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationES from './es/translation.json'
import translationEN from './en/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    load: 'languageOnly',
    interpolation: { escapeValue: false },
  })

const updateDocumentLanguage = () => {
  document.documentElement.lang = i18n.resolvedLanguage || 'es'
}
i18n.on('languageChanged', updateDocumentLanguage)
updateDocumentLanguage()

export default i18n
