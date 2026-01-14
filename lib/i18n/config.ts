import { Locale as DictLocale } from './dictionaries';

export type Locale = DictLocale;

export const i18n = {
  defaultLocale: 'en' as Locale,
  locales: ['en', 'fr', 'ar'] as Locale[],
} as const;

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
};
