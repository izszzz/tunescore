import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumTypeFilter> = z
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

export const NestedEnumTypeFilterObjectSchema = Schema;
