import { z } from 'zod';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    resourceId: z.string(),
    resurceType: z.lazy(() => CommentTypeSchema),
  })
  .strict();

export const CommentCreateManyInputObjectSchema = Schema;
