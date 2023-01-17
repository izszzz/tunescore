import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumPointActionTypeFilterObjectSchema } from './EnumPointActionTypeFilter.schema';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PointWhereInputObjectSchema),
        z.lazy(() => PointWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PointWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PointWhereInputObjectSchema),
        z.lazy(() => PointWhereInputObjectSchema).array(),
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
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const PointWhereInputObjectSchema = Schema;
