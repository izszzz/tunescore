import type { BaseParams } from "@izszzz/itunes-search-api";
import type { NextRouter } from "next/router";
import { match } from "ts-pattern";

type Lang = NonNullable<BaseParams["lang"]>;
type Locale = NextRouter["locale"];
export const convertToAffiliateUrl = (url: string) => {
    const parsedUrl = new URL(url);
    parsedUrl.hostname = "geo.music.apple.com";
    parsedUrl.searchParams.set("at", "1000l38Sn");
    const path = parsedUrl.pathname.split("/");
    parsedUrl.searchParams.set("ct", path[1] + "_" + path[2]);
    parsedUrl.searchParams.set("app", path[1] + "_" + path[2]);
    return parsedUrl;
  },
  convertLocaleToLang = (locale: Locale): Lang =>
    locale === "ja" ? "ja_jp" : "en_us",
  convertLangToLocale = (lang: Lang): Locale =>
    match(lang)
      .with("ja_jp", () => "ja" as const)
      .with("en_us", () => "en" as const)
      .exhaustive();
