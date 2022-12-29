import { z } from 'zod';
import { ThemeTypeSchema } from '../enums/ThemeType.schema';
import { NestedEnumThemeTypeFilterObjectSchema } from './NestedEnumThemeTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumThemeTypeFilter> = z
  .object({
    equals: z.lazy(() => ThemeTypeSchema).optional(),
    in: z
      .lazy(() => ThemeTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => ThemeTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => ThemeTypeSchema),
        z.lazy(() => NestedEnumThemeTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumThemeTypeFilterObjectSchema = Schema;
