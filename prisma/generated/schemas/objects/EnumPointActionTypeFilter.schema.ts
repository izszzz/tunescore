import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { NestedEnumPointActionTypeFilterObjectSchema } from './NestedEnumPointActionTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPointActionTypeFilter> = z
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

export const EnumPointActionTypeFilterObjectSchema = Schema;
