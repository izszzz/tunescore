import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumPullStatusWithAggregatesFilterObjectSchema } from './EnumPullStatusWithAggregatesFilter.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PullScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PullScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PullScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PullScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PullScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPullStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => PullStatusSchema),
      ])
      .optional(),
    musicId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const PullScalarWhereWithAggregatesInputObjectSchema = Schema;
