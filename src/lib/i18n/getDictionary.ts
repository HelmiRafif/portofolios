import { DEFAULT_LOCALE, type Locale } from "./locales";
import { en } from "./dictionaries/en";
import { id } from "./dictionaries/id";
import type { Dictionary } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = {
  en,
  id,
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}
