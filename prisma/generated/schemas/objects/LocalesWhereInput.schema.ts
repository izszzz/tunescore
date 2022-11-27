import { z } from 'zod';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocalesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocalesWhereInputObjectSchema),
        z.lazy(() => LocalesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocalesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocalesWhereInputObjectSchema),
        z.lazy(() => LocalesWhereInputObjectSchema).array(),
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

export const LocalesWhereInputObjectSchema = Schema;
