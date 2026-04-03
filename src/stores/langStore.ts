import { create } from 'zustand'
import translations, { type Lang, type TranslationKey } from '@/data/translations'

interface LangState {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
}

export const useLangStore = create<LangState>((set, get) => ({
  lang: 'pt',
  setLang: (lang) => set({ lang }),
  t: (key) => {
    const { lang } = get()
    return translations[key]?.[lang] ?? key
  },
}))
