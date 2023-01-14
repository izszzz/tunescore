import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumPointActionTypeWithAggregatesFilterObjectSchema } from './EnumPointActionTypeWithAggregatesFilter.schema';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { EnumPointTypeWithAggregatesFilterObjectSchema } from './EnumPointTypeWithAggregatesFilter.schema';
import { PointTypeSchema } from '../enums/PointType.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PointScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PointScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PointScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PointScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PointScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    actionType: z
      .union([
        z.lazy(() => EnumPointActionTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => PointActionTypeSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    resourceId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumPointTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => PointTypeSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const PointScalarWhereWithAggregatesInputObjectSchema = Schema;
