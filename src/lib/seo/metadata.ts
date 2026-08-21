import type { Metadata } from "next";
import type { Locale } from "../i18n/locales";
import type { Dictionary } from "../i18n/types";

type PageMetaInput = {
  locale: Locale;
  dict: Dictionary;
  title?: string;
  description?: string;
  path: string;
};

export function buildLocalizedMetadata(input: PageMetaInput): Metadata {
  const title = input.title
    ? `${input.title} · ${input.dict.meta.siteName}`
    : input.dict.meta.siteName;

  const description = input.description ?? input.dict.meta.description;

  const canonical = `/${input.locale}${input.path.startsWith("/") ? input.path : `/${input.path}`}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `/en${input.path}`,
        id: `/id${input.path}`,
      },
    },
  };
}
