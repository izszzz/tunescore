import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumPointActionTypeFilterObjectSchema } from './EnumPointActionTypeFilter.schema';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { EnumPointTypeFilterObjectSchema } from './EnumPointTypeFilter.schema';
import { PointTypeSchema } from '../enums/PointType.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PointScalarWhereInputObjectSchema),
        z.lazy(() => PointScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PointScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PointScalarWhereInputObjectSchema),
        z.lazy(() => PointScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    actionType: z
      .union([
        z.lazy(() => EnumPointActionTypeFilterObjectSchema),
        z.lazy(() => PointActionTypeSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumPointTypeFilterObjectSchema),
        z.lazy(() => PointTypeSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const PointScalarWhereInputObjectSchema = Schema;
