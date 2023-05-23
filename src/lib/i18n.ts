import { i18n } from '@lingui/core'

export const locales = [
  {
    key: 'en',
    name: 'English',
  },
  {
    key: 'de',
    name: 'Deutsch',
  },
]

export const defaultLocale = 'en'

export async function loadCatalog(locale: string) {
  const catalog = await import(`../locales/${locale}.po`)
  i18n.loadAndActivate({ locale, messages: catalog.messages })
}
