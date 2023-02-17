import { z } from "zod";

export const locale = z.object({
  ja: z.string().nullish(),
  en: z.string().nullish(),
});

export const PaginateOptionsSchema = z.object({
  page: z.number().or(z.string()).optional(),
  perPage: z.number().or(z.string()).optional(),
});

export const PaginateInputSchema = <T extends z.AnyZodObject>(args: T) =>
  z.object({
    options: PaginateOptionsSchema,
    args,
  });
