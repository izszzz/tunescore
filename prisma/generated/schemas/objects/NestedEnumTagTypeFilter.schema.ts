import { z } from 'zod';
import { TagTypeSchema } from '../enums/TagType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumTagTypeFilter> = z
  .object({
    equals: z.lazy(() => TagTypeSchema).optional(),
    in: z
      .lazy(() => TagTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => TagTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => TagTypeSchema),
        z.lazy(() => NestedEnumTagTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumTagTypeFilterObjectSchema = Schema;
