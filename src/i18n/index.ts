import { createI18n } from 'vue-i18n'
import en from './en'
import th from './th'

// 1. Define the schema type from the default locale
type MessageSchema = typeof en

// 2. Create the i18n instance with strictly typed options
const i18n = createI18n<[MessageSchema], 'en' | 'th'>({
  legacy: false, // Use Composition API mode
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, th }
})

export default i18n