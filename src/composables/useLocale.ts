import { ref, computed } from 'vue'
import { tr } from '../i18n/tr'
import { en } from '../i18n/en'

type LocaleKey = 'tr' | 'en'

const locales = { tr, en }

const savedLocale = (localStorage.getItem('locale') as LocaleKey) ?? 'tr'

const current = ref<LocaleKey>(savedLocale)

// Sayfa yüklenirken hemen uygula
document.documentElement.lang = savedLocale

export function useLocale() {
  const t = computed(() => locales[current.value])

  function setLocale(lang: LocaleKey) {
    current.value = lang
    localStorage.setItem('locale', lang)
    document.documentElement.lang = lang
  }

  function toggleLocale() {
    setLocale(current.value === 'tr' ? 'en' : 'tr')
  }

  return { t, current, setLocale, toggleLocale }
}