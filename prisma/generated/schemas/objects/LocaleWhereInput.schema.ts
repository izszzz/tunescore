import { z } from 'zod';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocaleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocaleWhereInputObjectSchema),
        z.lazy(() => LocaleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocaleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocaleWhereInputObjectSchema),
        z.lazy(() => LocaleWhereInputObjectSchema).array(),
      ])
      .optional(),
    ja: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    en: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const LocaleWhereInputObjectSchema = Schema;
