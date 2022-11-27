import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { NestedEnumTypeFilterObjectSchema } from './NestedEnumTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTypeFilter> = z
  .object({
    equals: z.lazy(() => TypeSchema).optional(),
    in: z
      .lazy(() => TypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => TypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => TypeSchema),
        z.lazy(() => NestedEnumTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumTypeFilterObjectSchema = Schema;
