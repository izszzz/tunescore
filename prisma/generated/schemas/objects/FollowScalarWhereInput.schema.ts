import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FollowScalarWhereInputObjectSchema),
        z.lazy(() => FollowScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FollowScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FollowScalarWhereInputObjectSchema),
        z.lazy(() => FollowScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    followerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    followingId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const FollowScalarWhereInputObjectSchema = Schema;
