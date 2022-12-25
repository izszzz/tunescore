import { z } from 'zod';
import { FollowWhereInputObjectSchema } from './FollowWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowRelationFilter> = z
  .object({
    is: z
      .lazy(() => FollowWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FollowWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FollowRelationFilterObjectSchema = Schema;
