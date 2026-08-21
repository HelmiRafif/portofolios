import { DEFAULT_LOCALE, isLocale, type Locale } from "./locales";

// Next.js types dynamic route params as `string`.
export type LocaleRouteParams = {
  locale: string;
};

export function getLocaleFromParams(params: LocaleRouteParams): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}
