import type { Locale } from "@prisma/client";
import type { NextRouter } from "next/router";

//選択している言語がない場合、値が存在する言語の最初の値を取得し返す。
const setLocale = (locales: Locale | null, router: NextRouter) => {
  if (!locales) return "";
  const currentLocale = locales[router.locale as keyof Locale];
  if (currentLocale) return currentLocale;
  else {
    delete locales[router.locale];
    const existLocales = (
      Object.keys(locales) as (keyof typeof locales)[]
    ).flatMap((key) => {
      const value = locales[key];
      if (value) return { key, value };
      return [];
    });
    const selectLocale = existLocales[0]?.value;
    return selectLocale || "non locale";
  }
};
export default setLocale;
