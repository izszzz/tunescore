import { z } from 'zod';
import { CommentWhereInputObjectSchema } from './CommentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentRelationFilter> = z
  .object({
    is: z
      .lazy(() => CommentWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CommentWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CommentRelationFilterObjectSchema = Schema;
