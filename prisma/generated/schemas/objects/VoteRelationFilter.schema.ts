import { z } from 'zod';
import { VoteWhereInputObjectSchema } from './VoteWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteRelationFilter> = z
  .object({
    is: z
      .lazy(() => VoteWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VoteWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const VoteRelationFilterObjectSchema = Schema;
