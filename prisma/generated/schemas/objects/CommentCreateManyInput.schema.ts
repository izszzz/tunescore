import { z } from 'zod';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    userId: z.string(),
    resourceId: z.string(),
    resourceType: z.lazy(() => CommentTypeSchema),
  })
  .strict();

export const CommentCreateManyInputObjectSchema = Schema;
