import {z} from "zod"

export const locale = z.object({
  ja: z.string().nullish(),
  en: z.string().nullish(),
})

export const PaginateOptionsSchema = z.object({
  page: z.number().or(z.string()).optional(),
  perPage: z.number().or(z.string()).optional(),
})
