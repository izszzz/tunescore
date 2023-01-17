import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumPointActionTypeFilter> = z
  .object({
    equals: z.lazy(() => PointActionTypeSchema).optional(),
    in: z
      .lazy(() => PointActionTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PointActionTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PointActionTypeSchema),
        z.lazy(() => NestedEnumPointActionTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumPointActionTypeFilterObjectSchema = Schema;
