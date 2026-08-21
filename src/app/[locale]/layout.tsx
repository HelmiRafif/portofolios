import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { LOCALES, isLocale } from "@/lib/i18n/locales";
import { getLocaleFromParams, type LocaleRouteParams } from "@/lib/i18n/params";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleRouteParams>;
}): Promise<Metadata> {
  const raw = await params;
  const locale = getLocaleFromParams(raw);
  const dict = getDictionary(locale);

  return buildLocalizedMetadata({
    locale,
    dict,
    path: "/",
  });
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<LocaleRouteParams>;
}>) {
  const raw = await params;
  const locale = getLocaleFromParams(raw);

  if (!isLocale(raw.locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
      >
        {dict.common.skipToContent}
      </a>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-8 sm:px-8 lg:flex-row lg:gap-16 lg:px-10 lg:py-14">
        <aside className="lg:w-[320px] lg:shrink-0">
          <div className="lg:sticky lg:top-12">
            <SiteHeader locale={locale} dict={dict} />
            <div className="mt-10 hidden lg:block">
              <SiteFooter dict={dict} />
            </div>
          </div>
        </aside>

        <main id="main" className="min-w-0 flex-1">
          {children}
        </main>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 lg:hidden lg:px-10">
        <SiteFooter dict={dict} />
      </div>
    </div>
  );
}