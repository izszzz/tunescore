import type { Locale } from "@prisma/client";
import type { NextRouter } from "next/router";
import * as R from "remeda";

const setLocale = (locales: Locale | null, { locale }: NextRouter) => {
  if (!locales || !locale) return "undefined";

  const currentLocale = locales[locale];
  if (currentLocale) return currentLocale;

  const fallbackLocale = R.pipe(
    locales,
    R.omit([locale as keyof Locale]),
    R.toPairs,
    R.first()
  );
  return (fallbackLocale?.[1] as string) ?? "undefined";
};
export default setLocale;
