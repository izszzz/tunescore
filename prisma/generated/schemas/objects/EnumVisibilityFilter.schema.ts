import { z } from 'zod';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { NestedEnumVisibilityFilterObjectSchema } from './NestedEnumVisibilityFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumVisibilityFilter> = z
  .object({
    equals: z.lazy(() => VisibilitySchema).optional(),
    in: z
      .lazy(() => VisibilitySchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => VisibilitySchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => VisibilitySchema),
        z.lazy(() => NestedEnumVisibilityFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumVisibilityFilterObjectSchema = Schema;
