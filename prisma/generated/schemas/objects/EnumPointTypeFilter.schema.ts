import { z } from 'zod';
import { PointTypeSchema } from '../enums/PointType.schema';
import { NestedEnumPointTypeFilterObjectSchema } from './NestedEnumPointTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPointTypeFilter> = z
  .object({
    equals: z.lazy(() => PointTypeSchema).optional(),
    in: z
      .lazy(() => PointTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PointTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PointTypeSchema),
        z.lazy(() => NestedEnumPointTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumPointTypeFilterObjectSchema = Schema;
