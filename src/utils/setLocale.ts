import {NextRouter} from "next/router"
import {Locales} from "@prisma/client"

//選択している言語がない場合、値が存在する言語からランダムに値を取得し返す。
const setLocale = (locales: Locales, router: NextRouter) => {
  const currentLocale = locales[router.locale as keyof Locales]
  switch (currentLocale) {
    case null:
      const existLocales = Object.entries(locales)
        .map(([key, value]) => ({[key]: value}))
        .filter(locale => Object.values(locale)[0] !== null)
      const locale =
        existLocales[Math.floor(Math.random() * existLocales.length)]
      if (locale) return Object.values(locale)[0]
      break

    default:
      return currentLocale
  }
}
export default setLocale
