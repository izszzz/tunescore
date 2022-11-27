import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPullStatusFilterObjectSchema } from './EnumPullStatusFilter.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PullScalarWhereInputObjectSchema),
        z.lazy(() => PullScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PullScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PullScalarWhereInputObjectSchema),
        z.lazy(() => PullScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPullStatusFilterObjectSchema),
        z.lazy(() => PullStatusSchema),
      ])
      .optional(),
    musicId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const PullScalarWhereInputObjectSchema = Schema;
