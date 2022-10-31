import {z} from "zod"
export const locale = z.object({
  ja: z.string().nullish(),
  en: z.string().nullish(),
})
